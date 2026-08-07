import React, { useState } from 'react';
import { Modal } from '../../ui/Modal';
import { Button } from '../../ui/Button';
import { useCart } from '../../../context/CartContext';
import { CheckoutDetails } from '../../../types/cart';
import {
  IconFileText,
  IconCheckCircle,
  IconLock,
  IconAlertTriangle,
  IconShieldCheck
} from '../../ui/Icons';
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
        <div className="text-center py-10 space-y-3 font-body">
          <div className="w-12 h-12 bg-[#18241C] border border-[#3F6B4E] text-[#528B66] flex items-center justify-center mx-auto">
            <IconCheckCircle size={24} />
          </div>
          <h3 className="text-base font-heading font-bold text-[#E8E6E1] uppercase tracking-wider">
            ORDER CONFIRMED & QUEUED FOR COLD-CHAIN DISPATCH
          </h3>
          <p className="text-xs text-[#E8E6E1] font-mono font-bold">
            PROCUREMENT REFERENCE: {orderRef}
          </p>
          <p className="text-xs text-[#B9BEC4] max-w-md mx-auto leading-relaxed">
            A confirmation receipt and Certificate of Analysis package have been dispatched to <span className="text-[#E8E6E1] font-mono">{details.email}</span>. Your shipment will be prepared under temperature-controlled packaging.
          </p>
          <Button variant="primary" size="md" onClick={handleFinish} className="mt-3">
            <span>Return to Overview</span>
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 font-interface text-xs">
          {/* Order Summary Line */}
          <div className="bg-[#0A0B0D] p-3.5 border border-[#2A2E33] flex justify-between items-center">
            <div>
              <p className="text-[#E8E6E1] font-heading font-bold uppercase text-xs">Manifest Total ({cart.length} items):</p>
              <p className="text-[10px] font-mono text-[#6B7178]">INCLUDES TEMPERATURE-CONTROLLED COLD SHIPPING</p>
            </div>
            <span className="text-base font-mono font-bold text-[#E8E6E1]">${cartTotal.toFixed(2)} USD</span>
          </div>

          {/* Payment Method Selector */}
          <div>
            <label className="block text-[#B9BEC4] uppercase tracking-wider font-semibold mb-1 text-[11px]">
              Payment Method & Procurement Type *
            </label>
            <div className="grid grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setDetails({ ...details, paymentMethod: 'PURCHASE_ORDER' });
                  setErrors({});
                }}
                className={`p-2.5 border text-left flex items-center gap-2.5 transition-colors ${
                  details.paymentMethod === 'PURCHASE_ORDER'
                    ? 'border-[#BE7A28] bg-[#BE7A28]/10 text-[#E8E6E1]'
                    : 'border-[#2A2E33] bg-[#0A0B0D] text-[#B9BEC4] hover:bg-[#16181B]'
                }`}
              >
                <IconFileText size={16} amberAccent={details.paymentMethod === 'PURCHASE_ORDER'} />
                <div>
                  <p className="text-xs uppercase font-bold">Institutional PO (Net 30)</p>
                  <p className="text-[10px] text-[#6B7178]">Purchase Order Invoice</p>
                </div>
              </button>

              <button
                type="button"
                onClick={() => {
                  setDetails({ ...details, paymentMethod: 'CREDIT_CARD' });
                  setErrors({});
                }}
                className={`p-2.5 border text-left flex items-center gap-2.5 transition-colors ${
                  details.paymentMethod === 'CREDIT_CARD'
                    ? 'border-[#BE7A28] bg-[#BE7A28]/10 text-[#E8E6E1]'
                    : 'border-[#2A2E33] bg-[#0A0B0D] text-[#B9BEC4] hover:bg-[#16181B]'
                }`}
              >
                <IconShieldCheck size={16} amberAccent={details.paymentMethod === 'CREDIT_CARD'} />
                <div>
                  <p className="text-xs uppercase font-bold">Corporate Credit Card</p>
                  <p className="text-[10px] text-[#6B7178]">Instant Direct Authorization</p>
                </div>
              </button>
            </div>
          </div>

          {/* PO Number Field if PO chosen */}
          {details.paymentMethod === 'PURCHASE_ORDER' ? (
            <div>
              <label className="block text-[#B9BEC4] uppercase tracking-wider font-semibold mb-1 text-[11px]">
                Institutional PO Number *
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
                className={`w-full bg-[#0A0B0D] border p-2 text-[#E8E6E1] font-mono text-xs focus:outline-none ${
                  errors.poNumber ? 'border-[#BE7A28]' : 'border-[#2A2E33] focus:border-[#BE7A28]'
                }`}
              />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 bg-[#0A0B0D] p-3 border border-[#2A2E33]">
              <div className="md:col-span-3">
                <label className="block text-[#B9BEC4] uppercase font-semibold mb-1 text-[11px]">Card Number *</label>
                <input
                  type="text"
                  required
                  placeholder="4242 4242 4242 4242"
                  value={details.cardNumber || ''}
                  onChange={e => {
                    setDetails({ ...details, cardNumber: e.target.value });
                    if (errors.cardNumber) setErrors({ ...errors, cardNumber: '' });
                  }}
                  className="w-full bg-[#16181B] border border-[#2A2E33] p-2 text-[#E8E6E1] font-mono text-xs focus:outline-none focus:border-[#BE7A28]"
                />
              </div>

              <div>
                <label className="block text-[#B9BEC4] uppercase font-semibold mb-1 text-[11px]">Expiry (MM/YY) *</label>
                <input
                  type="text"
                  required
                  placeholder="12/28"
                  value={details.cardExpiry || ''}
                  onChange={e => setDetails({ ...details, cardExpiry: e.target.value })}
                  className="w-full bg-[#16181B] border border-[#2A2E33] p-2 text-[#E8E6E1] font-mono text-xs focus:outline-none focus:border-[#BE7A28]"
                />
              </div>

              <div>
                <label className="block text-[#B9BEC4] uppercase font-semibold mb-1 text-[11px]">CVC Code *</label>
                <input
                  type="text"
                  required
                  placeholder="884"
                  value={details.cardCvc || ''}
                  onChange={e => setDetails({ ...details, cardCvc: e.target.value })}
                  className="w-full bg-[#16181B] border border-[#2A2E33] p-2 text-[#E8E6E1] font-mono text-xs focus:outline-none focus:border-[#BE7A28]"
                />
              </div>
            </div>
          )}

          {/* Address & Institution Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block text-[#B9BEC4] uppercase tracking-wider font-semibold mb-1 text-[11px]">
                Institution / Company Name *
              </label>
              <input
                type="text"
                required
                value={details.institutionName}
                onChange={e => setDetails({ ...details, institutionName: e.target.value })}
                className="w-full bg-[#0A0B0D] border border-[#2A2E33] focus:border-[#BE7A28] p-2 text-[#E8E6E1] text-xs focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[#B9BEC4] uppercase tracking-wider font-semibold mb-1 text-[11px]">
                Lab / Department Name *
              </label>
              <input
                type="text"
                required
                value={details.departmentName}
                onChange={e => setDetails({ ...details, departmentName: e.target.value })}
                className="w-full bg-[#0A0B0D] border border-[#2A2E33] focus:border-[#BE7A28] p-2 text-[#E8E6E1] text-xs focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[#B9BEC4] uppercase tracking-wider font-semibold mb-1 text-[11px]">
                Researcher Contact Name *
              </label>
              <input
                type="text"
                required
                value={details.contactName}
                onChange={e => setDetails({ ...details, contactName: e.target.value })}
                className="w-full bg-[#0A0B0D] border border-[#2A2E33] focus:border-[#BE7A28] p-2 text-[#E8E6E1] text-xs focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[#B9BEC4] uppercase tracking-wider font-semibold mb-1 text-[11px]">
                Institutional Email *
              </label>
              <input
                type="email"
                required
                value={details.email}
                onChange={e => setDetails({ ...details, email: e.target.value })}
                className="w-full bg-[#0A0B0D] border border-[#2A2E33] focus:border-[#BE7A28] p-2 text-[#E8E6E1] text-xs focus:outline-none"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-[#B9BEC4] uppercase tracking-wider font-semibold mb-1 text-[11px]">
                Shipping Delivery Address (Street, Suite, Dock) *
              </label>
              <input
                type="text"
                required
                value={details.shippingAddress}
                onChange={e => setDetails({ ...details, shippingAddress: e.target.value })}
                className="w-full bg-[#0A0B0D] border border-[#2A2E33] focus:border-[#BE7A28] p-2 text-[#E8E6E1] text-xs focus:outline-none"
              />
            </div>
          </div>

          {/* Compliance Consent Checkbox */}
          <div className="space-y-2 bg-[#0A0B0D] p-3 border border-[#2A2E33] text-[11px] font-body">
            <label className="flex items-start gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                required
                checked={details.ruoConsent}
                onChange={e => setDetails({ ...details, ruoConsent: e.target.checked })}
                className="mt-0.5"
              />
              <span className="text-[#B9BEC4] leading-snug">
                <strong className="text-[#E8E6E1]">MANDATORY RUO ACKNOWLEDGEMENT:</strong> I confirm materials ordered are solely FOR RESEARCH USE ONLY in laboratory settings. Not for human or veterinary use.
              </span>
            </label>
          </div>

          <div className="pt-3 border-t border-[#2A2E33] flex items-center justify-between">
            <span className="text-[10px] font-mono text-[#6B7178] flex items-center gap-1">
              <IconLock size={12} />
              <span>256-BIT ENCRYPTED PROCUREMENT</span>
            </span>
            <Button variant="amber" size="md" type="submit">
              <span>Authorize & Transmit Order (${cartTotal.toFixed(2)}) →</span>
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
};
