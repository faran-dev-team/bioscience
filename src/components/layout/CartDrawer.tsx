import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import { Button } from '../ui/Button';
import {
  IconClose,
  IconTrash,
  IconShieldCheck,
  IconArrowRight
} from '../ui/Icons';

interface CartDrawerProps {
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ onProceedToCheckout }) => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.2, ease: [0.2, 0, 0.2, 1] }}
              className="w-screen max-w-md bg-theme-surface border-l border-theme p-6 flex flex-col justify-between shadow-none transition-colors duration-150"
            >
              {/* Header */}
              <div>
                <div className="flex items-center justify-between pb-4 mb-3 border-b border-theme">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#BE7A28] inline-block" />
                    <h2 className="font-heading text-xs uppercase tracking-widest text-theme-primary font-bold">
                      Institutional Order Manifest
                    </h2>
                  </div>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="text-theme-muted hover:text-theme-primary p-1 transition-colors"
                  >
                    <IconClose size={18} />
                  </button>
                </div>

                <p className="text-[11px] font-mono text-theme-muted mb-3">
                  PURCHASE ORDERS & CREDIT CARDS ACCEPTED
                </p>
              </div>

              {/* Cart Items List */}
              <div className="flex-1 overflow-y-auto space-y-3 my-2 pr-1">
                {cart.length === 0 ? (
                  <div className="text-center py-16 text-theme-muted font-mono text-xs space-y-2">
                    <p>[ MANIFEST EMPTY ]</p>
                    <p className="text-[11px]">Add research compounds from the catalogue to begin procurement.</p>
                  </div>
                ) : (
                  cart.map(item => (
                    <div
                      key={item.compound.id}
                      className="bg-theme-canvas p-3.5 border border-theme relative group font-body transition-colors"
                    >
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-heading text-xs font-bold text-theme-primary">
                          {item.compound.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.compound.id)}
                          className="text-theme-muted hover:text-amber-hover p-1 transition-colors"
                          title="Remove item"
                        >
                          <IconTrash size={13} />
                        </button>
                      </div>

                      <p className="font-mono text-[10px] text-theme-muted mb-2 font-semibold">
                        SKU: {item.compound.sku} · LOT: {item.compound.latestLot}
                      </p>

                      <div className="flex justify-between items-center pt-2 border-t border-theme font-mono text-xs">
                        <div className="flex items-center gap-2 bg-theme-surface border border-theme px-2 py-0.5">
                          <button
                            onClick={() => updateQuantity(item.compound.id, item.quantity - 1)}
                            className="text-theme-secondary hover:text-theme-primary font-bold px-1"
                          >
                            -
                          </button>
                          <span className="text-theme-primary px-1">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.compound.id, item.quantity + 1)}
                            className="text-theme-secondary hover:text-theme-primary font-bold px-1"
                          >
                            +
                          </button>
                        </div>

                        <span className="font-bold text-theme-primary">
                          ${(item.compound.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Summary & Checkout Button */}
              {cart.length > 0 && (
                <div className="pt-3 border-t border-theme space-y-3 font-interface">
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between text-theme-secondary">
                      <span>Subtotal:</span>
                      <span className="font-mono">${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-theme-secondary">
                      <span>Validated Cold Shipping:</span>
                      <span className="text-verified font-mono font-semibold">INCLUDED</span>
                    </div>
                    <div className="flex justify-between text-theme-primary font-bold text-sm pt-2 border-t border-theme">
                      <span>Total (USD):</span>
                      <span className="font-mono">${cartTotal.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="bg-theme-canvas p-2.5 border border-theme text-[10px] font-body text-theme-secondary flex items-start gap-2 transition-colors">
                    <IconShieldCheck size={14} className="text-verified flex-shrink-0 mt-0.5" />
                    <span>
                      Ships strictly under temperature-controlled packaging with lot-specific Certificate of Analysis.
                    </span>
                  </div>

                  <Button
                    variant="amber"
                    size="md"
                    onClick={() => {
                      setIsCartOpen(false);
                      onProceedToCheckout();
                    }}
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <span>Proceed to Institutional Checkout</span>
                    <IconArrowRight size={14} />
                  </Button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
