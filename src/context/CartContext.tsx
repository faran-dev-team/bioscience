import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem } from '../types/cart';
import { Compound } from '../types/compound';

interface CartContextType {
  cart: CartItem[];
  addToCart: (compound: Compound, quantity?: number) => void;
  removeFromCart: (compoundId: string) => void;
  updateQuantity: (compoundId: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  cartTotal: number;
  cartItemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('bsd_cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('bsd_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (compound: Compound, quantity = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.compound.id === compound.id);
      if (existing) {
        return prev.map(item =>
          item.compound.id === compound.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { compound, quantity, selectedSize: compound.vialSize }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (compoundId: string) => {
    setCart(prev => prev.filter(item => item.compound.id !== compoundId));
  };

  const updateQuantity = (compoundId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(compoundId);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.compound.id === compoundId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setCart([]);

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.compound.price * item.quantity,
    0
  );

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        cartTotal,
        cartItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};
