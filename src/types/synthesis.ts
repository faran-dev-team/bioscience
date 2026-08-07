export interface SynthesisEnquiry {
  sequence: string;
  targetPurity: '95%' | '98%' | '99%+';
  quantityMg: number;
  vialQuantity: number;
  counterIon: 'Acetate' | 'Trifluoroacetate (TFA)';
  modifications: string;
  institution: string;
  researcherName: string;
  email: string;
  notes: string;
}
