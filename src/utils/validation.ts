export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
};

export const validateLotNumber = (lot: string): { isValid: boolean; formatted: string; message?: string } => {
  const clean = lot.trim().toUpperCase();
  if (!clean) {
    return { isValid: false, formatted: '', message: 'Lot number cannot be empty.' };
  }
  // Expected format: LOT YY-MMDD-X (e.g. LOT 24-0817-C)
  const lotRegex = /^LOT\s*\d{2}-\d{4}-[A-Z0-9]$/i;
  if (!lotRegex.test(clean) && !clean.startsWith('LOT')) {
    return { isValid: false, formatted: clean, message: 'Invalid lot format. Expected format: LOT YY-MMDD-X (e.g. LOT 24-0817-C)' };
  }
  return { isValid: true, formatted: clean };
};

export const validateSynthesisForm = (data: {
  sequence: string;
  quantityMg: number;
  vialQuantity: number;
  institution: string;
  email: string;
  researcherName: string;
}): ValidationResult => {
  const errors: Record<string, string> = {};

  if (!data.sequence.trim() || data.sequence.trim().length < 3) {
    errors.sequence = 'Sequence must contain at least 3 amino acid characters.';
  }

  if (isNaN(data.quantityMg) || data.quantityMg <= 0) {
    errors.quantityMg = 'Total quantity must be greater than 0 mg.';
  }

  if (isNaN(data.vialQuantity) || data.vialQuantity <= 0) {
    errors.vialQuantity = 'Vial count must be at least 1 aliquot.';
  }

  if (!data.institution.trim()) {
    errors.institution = 'Institution / University name is required.';
  }

  if (!data.researcherName.trim()) {
    errors.researcherName = 'Researcher contact name is required.';
  }

  if (!validateEmail(data.email)) {
    errors.email = 'Please provide a valid institutional email address.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

export const validateCheckoutForm = (data: {
  institutionName: string;
  departmentName: string;
  contactName: string;
  email: string;
  phone: string;
  shippingAddress: string;
  city: string;
  state: string;
  zipCode: string;
  paymentMethod: 'CREDIT_CARD' | 'PURCHASE_ORDER';
  poNumber?: string;
  cardNumber?: string;
  cardExpiry?: string;
  cardCvc?: string;
  ruoConsent: boolean;
}): ValidationResult => {
  const errors: Record<string, string> = {};

  if (!data.institutionName.trim()) errors.institutionName = 'Institution name is required.';
  if (!data.departmentName.trim()) errors.departmentName = 'Department / Lab name is required.';
  if (!data.contactName.trim()) errors.contactName = 'Researcher contact name is required.';
  if (!validateEmail(data.email)) errors.email = 'Valid institutional email address required.';
  if (!data.phone.trim() || data.phone.trim().length < 7) errors.phone = 'Valid phone number required.';
  if (!data.shippingAddress.trim()) errors.shippingAddress = 'Shipping delivery address is required.';
  if (!data.city.trim()) errors.city = 'City is required.';
  if (!data.state.trim()) errors.state = 'State is required.';
  if (!data.zipCode.trim()) errors.zipCode = 'ZIP code is required.';

  if (data.paymentMethod === 'PURCHASE_ORDER') {
    if (!data.poNumber || !data.poNumber.trim()) {
      errors.poNumber = 'Institutional Purchase Order (PO) number is required for Net 30 terms.';
    }
  } else if (data.paymentMethod === 'CREDIT_CARD') {
    if (!data.cardNumber || data.cardNumber.replace(/\s/g, '').length < 15) {
      errors.cardNumber = 'Valid 16-digit credit card number required.';
    }
    if (!data.cardExpiry || !/^\d{2}\/\d{2}$/.test(data.cardExpiry.trim())) {
      errors.cardExpiry = 'Card expiry format must be MM/YY.';
    }
    if (!data.cardCvc || data.cardCvc.trim().length < 3) {
      errors.cardCvc = 'Valid 3 or 4-digit security code required.';
    }
  }

  if (!data.ruoConsent) {
    errors.ruoConsent = 'You must accept the mandatory Research Use Only (RUO) compliance statement.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
