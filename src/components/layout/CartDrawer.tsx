import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ShieldCheck, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Button } from '../ui/Button';

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
            className="fixed inset-0 bg-obsidian-950/80 backdrop-blur-md"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.2, ease: [0.2, 0, 0.2, 1] }}
              className="w-screen max-w-md glass-panel border-l border-amber-500/40 p-6 flex flex-col justify-between shadow-2xl bg-theme-surface"
            >
              {/* Header */}
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-theme">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-amber-500 inline-block animate-pulse" />
                    <h2 className="font-mono text-sm uppercase tracking-widest text-amber-500 font-bold">
                      Institutional Order Manifest
                    </h2>
                  </div>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="text-theme-secondary hover:text-amber-500 p-1"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <p className="text-xs font-mono text-theme-muted mb-4">
                  PURCHASE ORDERS & CREDIT CARDS ACCEPTED
                </p>
              </div>

              {/* Cart Items List */}
              <div className="flex-1 overflow-y-auto space-y-4 my-4 pr-1">
                {cart.length === 0 ? (
                  <div className="text-center py-16 text-theme-muted font-mono text-xs space-y-3">
                    <p>[ MANIFEST EMPTY ]</p>
                    <p className="text-[11px]">Add research compounds from the catalogue to begin procurement.</p>
                  </div>
                ) : (
                  cart.map(item => (
                    <div
                      key={item.compound.id}
                      className="bg-theme-bg p-4 border border-theme relative group"
                    >
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-mono text-xs font-bold text-theme-primary">
                          {item.compound.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.compound.id)}
                          className="text-theme-muted hover:text-rose-500 p-1 transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <p className="font-mono text-[10px] text-amber-500 font-bold mb-2">
                        SKU: {item.compound.sku} | LOT: {item.compound.latestLot}
                      </p>

                      <div className="flex justify-between items-center pt-2 border-t border-theme font-mono text-xs">
                        <div className="flex items-center gap-2 bg-theme-surface border border-theme px-2 py-0.5">
                          <button
                            onClick={() => updateQuantity(item.compound.id, item.quantity - 1)}
                            className="text-theme-secondary hover:text-amber-500 font-bold px-1"
                          >
                            -
                          </button>
                          <span className="text-theme-primary px-1">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.compound.id, item.quantity + 1)}
                            className="text-theme-secondary hover:text-amber-500 font-bold px-1"
                          >
                            +
                          </button>
                        </div>

                        <span className="font-bold text-amber-500">
                          ${(item.compound.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Summary & Checkout Button */}
              {cart.length > 0 && (
                <div className="pt-4 border-t border-theme space-y-4">
                  <div className="space-y-1.5 font-mono text-xs">
                    <div className="flex justify-between text-theme-secondary">
                      <span>Subtotal:</span>
                      <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-theme-secondary">
                      <span>Validated Cold-Chain Shipping:</span>
                      <span className="text-emerald-500 font-semibold">INCLUDED</span>
                    </div>
                    <div className="flex justify-between text-amber-500 font-bold text-sm pt-2 border-t border-theme">
                      <span>Total (USD):</span>
                      <span>${cartTotal.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="bg-theme-bg p-3 border border-amber-500/20 text-[10px] font-mono text-theme-secondary flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span>
                      Ships strictly under temperature-controlled packaging with lot-specific Certificate of Analysis.
                    </span>
                  </div>

                  <Button
                    variant="amber"
                    size="lg"
                    onClick={() => {
                      setIsCartOpen(false);
                      onProceedToCheckout();
                    }}
                    className="w-full flex items-center justify-center gap-2"
                  >
                    PROCEED TO INSTITUTIONAL CHECKOUT <ArrowRight className="w-4 h-4" />
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
