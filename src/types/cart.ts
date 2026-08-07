import { Compound } from './compound';

export interface CartItem {
  compound: Compound;
  quantity: number;
  selectedSize: string;
}

export type PaymentMethod = 'CREDIT_CARD' | 'PURCHASE_ORDER';

export interface CheckoutDetails {
  institutionName: string;
  departmentName: string;
  contactName: string;
  email: string;
  phone: string;
  shippingAddress: string;
  city: string;
  state: string;
  zipCode: string;
  paymentMethod: PaymentMethod;
  poNumber?: string;
  taxExemptNumber?: string;
  ageConsent: boolean;
  ruoConsent: boolean;
}
