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
            className="fixed inset-0 bg-[#0A0B0D]/80 backdrop-blur-sm"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.2, ease: [0.2, 0, 0.2, 1] }}
              className="w-screen max-w-md bg-[#16181B] border-l border-[#2A2E33] p-6 flex flex-col justify-between shadow-none"
            >
              {/* Header */}
              <div>
                <div className="flex items-center justify-between pb-4 mb-3 border-b border-[#2A2E33]">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#BE7A28] inline-block" />
                    <h2 className="font-heading text-xs uppercase tracking-widest text-[#E8E6E1] font-bold">
                      Institutional Order Manifest
                    </h2>
                  </div>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="text-[#6B7178] hover:text-[#E8E6E1] p-1 transition-colors"
                  >
                    <IconClose size={18} />
                  </button>
                </div>

                <p className="text-[11px] font-mono text-[#6B7178] mb-3">
                  PURCHASE ORDERS & CREDIT CARDS ACCEPTED
                </p>
              </div>

              {/* Cart Items List */}
              <div className="flex-1 overflow-y-auto space-y-3 my-2 pr-1">
                {cart.length === 0 ? (
                  <div className="text-center py-16 text-[#6B7178] font-mono text-xs space-y-2">
                    <p>[ MANIFEST EMPTY ]</p>
                    <p className="text-[11px]">Add research compounds from the catalogue to begin procurement.</p>
                  </div>
                ) : (
                  cart.map(item => (
                    <div
                      key={item.compound.id}
                      className="bg-[#0A0B0D] p-3.5 border border-[#2A2E33] relative group font-body"
                    >
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-heading text-xs font-bold text-[#E8E6E1]">
                          {item.compound.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.compound.id)}
                          className="text-[#6B7178] hover:text-[#E3A455] p-1 transition-colors"
                          title="Remove item"
                        >
                          <IconTrash size={13} />
                        </button>
                      </div>

                      <p className="font-mono text-[10px] text-[#6B7178] mb-2 font-semibold">
                        SKU: {item.compound.sku} · LOT: {item.compound.latestLot}
                      </p>

                      <div className="flex justify-between items-center pt-2 border-t border-[#2A2E33] font-mono text-xs">
                        <div className="flex items-center gap-2 bg-[#16181B] border border-[#2A2E33] px-2 py-0.5">
                          <button
                            onClick={() => updateQuantity(item.compound.id, item.quantity - 1)}
                            className="text-[#B9BEC4] hover:text-[#E8E6E1] font-bold px-1"
                          >
                            -
                          </button>
                          <span className="text-[#E8E6E1] px-1">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.compound.id, item.quantity + 1)}
                            className="text-[#B9BEC4] hover:text-[#E8E6E1] font-bold px-1"
                          >
                            +
                          </button>
                        </div>

                        <span className="font-bold text-[#E8E6E1]">
                          ${(item.compound.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Summary & Checkout Button */}
              {cart.length > 0 && (
                <div className="pt-3 border-t border-[#2A2E33] space-y-3 font-interface">
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between text-[#B9BEC4]">
                      <span>Subtotal:</span>
                      <span className="font-mono">${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-[#B9BEC4]">
                      <span>Validated Cold Shipping:</span>
                      <span className="text-[#528B66] font-mono font-semibold">INCLUDED</span>
                    </div>
                    <div className="flex justify-between text-[#E8E6E1] font-bold text-sm pt-2 border-t border-[#2A2E33]">
                      <span>Total (USD):</span>
                      <span className="font-mono">${cartTotal.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="bg-[#0A0B0D] p-2.5 border border-[#2A2E33] text-[10px] font-body text-[#B9BEC4] flex items-start gap-2">
                    <IconShieldCheck size={14} className="text-[#528B66] flex-shrink-0 mt-0.5" />
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
