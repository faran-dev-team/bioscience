import React, { useState } from 'react';
import { Modal } from '../../ui/Modal';
import { Button } from '../../ui/Button';
import { useCart } from '../../../context/CartContext';
import { CheckoutDetails } from '../../../types/cart';
import { CreditCard, FileCheck2, CheckCircle2, Lock, AlertCircle } from 'lucide-react';
import { validateCheckoutForm } from '../../../utils/validation';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const { cart, cartTotal, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [orderRef, setOrderRef] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [details, setDetails] = useState<CheckoutDetails & {
    cardNumber?: string;
    cardExpiry?: string;
    cardCvc?: string;
  }>({
    institutionName: 'Biotech Research Institute',
    departmentName: 'Molecular Biology & Chemical Synthesis Lab',
    contactName: 'Dr. Sarah Jenkins',
    email: 's.jenkins@biotechinstitute.org',
    phone: '(555) 019-2831',
    shippingAddress: '400 Technology Parkway, Suite 200',
    city: 'Cambridge',
    state: 'MA',
    zipCode: '02139',
    paymentMethod: 'PURCHASE_ORDER',
    poNumber: 'PO-2024-99120',
    cardNumber: '4242 4242 4242 4242',
    cardExpiry: '12/28',
    cardCvc: '884',
    ageConsent: true,
    ruoConsent: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateCheckoutForm(details as any);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    const ref = 'BSD-' + Math.floor(100000 + Math.random() * 900000);
    setOrderRef(ref);
    setSubmitted(true);
    clearCart();
  };

  const handleFinish = () => {
    setSubmitted(false);
    setErrors({});
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Institutional Procurement & Order Checkout"
      maxWidth="max-w-3xl"
    >
      {submitted ? (
        <div className="text-center py-12 space-y-4 font-mono">
          <div className="w-16 h-16 bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-theme-primary uppercase tracking-widest">
            ORDER CONFIRMED & QUEUED FOR COLD-CHAIN DISPATCH
          </h3>
          <p className="text-xs text-amber-500 font-bold">
            PROCUREMENT REFERENCE: {orderRef}
          </p>
          <p className="text-xs text-theme-secondary max-w-md mx-auto leading-relaxed">
            A confirmation receipt and Certificate of Analysis package have been dispatched to <span className="text-theme-primary">{details.email}</span>. Your shipment will be prepared under temperature-controlled packaging.
          </p>
          <Button variant="amber" size="md" onClick={handleFinish} className="mt-4">
            RETURN TO OVERVIEW
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 font-mono text-xs">
          {/* Order Summary Line */}
          <div className="bg-theme-bg p-4 border border-theme flex justify-between items-center">
            <div>
              <p className="text-amber-500 font-bold uppercase">MANIFEST TOTAL ({cart.length} ITEMS):</p>
              <p className="text-[11px] text-theme-muted">INCLUDES TEMPERATURE-CONTROLLED COLD SHIPPING</p>
            </div>
            <span className="text-lg font-bold text-amber-500 font-mono">${cartTotal.toFixed(2)} USD</span>
          </div>

          {/* Payment Method Selector */}
          <div>
            <label className="block text-amber-500 uppercase tracking-widest font-bold mb-2">
              PAYMENT METHOD & PROCUREMENT TYPE *
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => {
                  setDetails({ ...details, paymentMethod: 'PURCHASE_ORDER' });
                  setErrors({});
                }}
                className={`p-3 border text-left flex items-center gap-3 transition-colors ${
                  details.paymentMethod === 'PURCHASE_ORDER'
                    ? 'border-amber-500 bg-amber-500/10 text-amber-500 font-bold'
                    : 'border-theme bg-theme-surface text-theme-secondary hover:bg-theme-bg'
                }`}
              >
                <FileCheck2 className="w-5 h-5 flex-shrink-0" />
                <div>
                  <p className="text-xs uppercase">Institutional PO (Net 30)</p>
                  <p className="text-[10px] opacity-75">Purchase Order Invoice</p>
                </div>
              </button>

              <button
                type="button"
                onClick={() => {
                  setDetails({ ...details, paymentMethod: 'CREDIT_CARD' });
                  setErrors({});
                }}
                className={`p-3 border text-left flex items-center gap-3 transition-colors ${
                  details.paymentMethod === 'CREDIT_CARD'
                    ? 'border-amber-500 bg-amber-500/10 text-amber-500 font-bold'
                    : 'border-theme bg-theme-surface text-theme-secondary hover:bg-theme-bg'
                }`}
              >
                <CreditCard className="w-5 h-5 flex-shrink-0" />
                <div>
                  <p className="text-xs uppercase">Corporate Credit Card</p>
                  <p className="text-[10px] opacity-75">Instant Direct Authorization</p>
                </div>
              </button>
            </div>
          </div>

          {/* PO Number Field if PO chosen */}
          {details.paymentMethod === 'PURCHASE_ORDER' ? (
            <div>
              <label className="block text-amber-500 uppercase tracking-widest font-bold mb-1">
                INSTITUTIONAL PO NUMBER *
              </label>
              <input
                type="text"
                required
                value={details.poNumber || ''}
                onChange={e => {
                  setDetails({ ...details, poNumber: e.target.value });
                  if (errors.poNumber) setErrors({ ...errors, poNumber: '' });
                }}
                placeholder="e.g. PO-2024-99120"
                className={`w-full bg-theme-surface border p-2.5 text-theme-primary font-mono text-xs focus:outline-none ${
                  errors.poNumber ? 'border-rose-500' : 'border-theme focus:border-amber-500'
                }`}
              />
              {errors.poNumber && (
                <p className="text-rose-500 text-[10px] mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.poNumber}
                </p>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 bg-theme-bg p-4 border border-theme">
              <div className="md:col-span-3">
                <label className="block text-amber-500 uppercase font-bold mb-1">CARD NUMBER *</label>
                <input
                  type="text"
                  required
                  placeholder="4242 4242 4242 4242"
                  value={details.cardNumber || ''}
                  onChange={e => {
                    setDetails({ ...details, cardNumber: e.target.value });
                    if (errors.cardNumber) setErrors({ ...errors, cardNumber: '' });
                  }}
                  className={`w-full bg-theme-surface border p-2 text-theme-primary font-mono text-xs focus:outline-none ${
                    errors.cardNumber ? 'border-rose-500' : 'border-theme focus:border-amber-500'
                  }`}
                />
                {errors.cardNumber && <p className="text-rose-500 text-[10px] mt-0.5">{errors.cardNumber}</p>}
              </div>

              <div>
                <label className="block text-amber-500 uppercase font-bold mb-1">EXPIRY (MM/YY) *</label>
                <input
                  type="text"
                  required
                  placeholder="12/28"
                  value={details.cardExpiry || ''}
                  onChange={e => setDetails({ ...details, cardExpiry: e.target.value })}
                  className="w-full bg-theme-surface border border-theme p-2 text-theme-primary font-mono text-xs focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-amber-500 uppercase font-bold mb-1">CVC CODE *</label>
                <input
                  type="text"
                  required
                  placeholder="884"
                  value={details.cardCvc || ''}
                  onChange={e => setDetails({ ...details, cardCvc: e.target.value })}
                  className="w-full bg-theme-surface border border-theme p-2 text-theme-primary font-mono text-xs focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>
          )}

          {/* Address & Institution Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-amber-500 uppercase tracking-widest font-bold mb-1">
                INSTITUTION / COMPANY NAME *
              </label>
              <input
                type="text"
                required
                value={details.institutionName}
                onChange={e => setDetails({ ...details, institutionName: e.target.value })}
                className="w-full bg-theme-surface border border-theme focus:border-amber-500 p-2.5 text-theme-primary font-mono text-xs"
              />
            </div>

            <div>
              <label className="block text-amber-500 uppercase tracking-widest font-bold mb-1">
                LAB / DEPARTMENT NAME *
              </label>
              <input
                type="text"
                required
                value={details.departmentName}
                onChange={e => setDetails({ ...details, departmentName: e.target.value })}
                className="w-full bg-theme-surface border border-theme focus:border-amber-500 p-2.5 text-theme-primary font-mono text-xs"
              />
            </div>

            <div>
              <label className="block text-amber-500 uppercase tracking-widest font-bold mb-1">
                RESEARCHER CONTACT NAME *
              </label>
              <input
                type="text"
                required
                value={details.contactName}
                onChange={e => setDetails({ ...details, contactName: e.target.value })}
                className="w-full bg-theme-surface border border-theme focus:border-amber-500 p-2.5 text-theme-primary font-mono text-xs"
              />
            </div>

            <div>
              <label className="block text-amber-500 uppercase tracking-widest font-bold mb-1">
                INSTITUTIONAL EMAIL *
              </label>
              <input
                type="email"
                required
                value={details.email}
                onChange={e => setDetails({ ...details, email: e.target.value })}
                className="w-full bg-theme-surface border border-theme focus:border-amber-500 p-2.5 text-theme-primary font-mono text-xs"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-amber-500 uppercase tracking-widest font-bold mb-1">
                SHIPPING DELIVERY ADDRESS (STREET, SUITE, DOCK) *
              </label>
              <input
                type="text"
                required
                value={details.shippingAddress}
                onChange={e => setDetails({ ...details, shippingAddress: e.target.value })}
                className="w-full bg-theme-surface border border-theme focus:border-amber-500 p-2.5 text-theme-primary font-mono text-xs"
              />
            </div>
          </div>

          {/* Compliance Consent Checkboxes */}
          <div className="space-y-3 bg-theme-bg p-4 border border-amber-500/30 text-[11px]">
            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                required
                checked={details.ruoConsent}
                onChange={e => setDetails({ ...details, ruoConsent: e.target.checked })}
                className="mt-0.5 accent-amber-500"
              />
              <span className="text-theme-secondary leading-snug">
                <strong>MANDATORY RUO ACKNOWLEDGEMENT:</strong> I confirm materials ordered are solely FOR RESEARCH USE ONLY in laboratory settings. Not for human or veterinary use.
              </span>
            </label>
            {errors.ruoConsent && (
              <p className="text-rose-500 text-[10px] flex items-center gap-1 font-bold">
                <AlertCircle className="w-3 h-3" /> {errors.ruoConsent}
              </p>
            )}
          </div>

          <div className="pt-4 border-t border-theme flex items-center justify-between">
            <span className="text-[10px] text-theme-muted flex items-center gap-1">
              <Lock className="w-3 h-3 text-amber-500" /> 256-BIT SECURE ENCRYPTED CHECKOUT
            </span>
            <Button variant="amber" size="lg" type="submit">
              AUTHORIZE & TRANSMIT ORDER (${cartTotal.toFixed(2)}) →
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
};
