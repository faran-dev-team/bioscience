export type CategoryType = 
  | 'All' 
  | 'Metabolic & Incretin' 
  | 'Tissue Repair & Recovery' 
  | 'Anti-Aging & Cellular' 
  | 'Growth Factor & GH Secretagogues' 
  | 'Neurological & Nootropic';

export interface LotVerificationRecord {
  lotNumber: string;
  compoundId: string;
  compoundName: string;
  purity: number; // e.g. 99.4
  method: string; // e.g. 'HPLC (Area Normalised)'
  identityConfirmed: boolean; // MS matched
  waterContent: number; // e.g. 4.2%
  analysisDate: string; // e.g. '2024-08-17'
  analyst: string; // e.g. 'A. Reyes, QC Lead'
  status: 'VERIFIED' | 'RELEASED' | 'ARCHIVED';
  chromatogramData: { time: number; response: number }[];
}

export interface Compound {
  id: string;
  sku: string;
  name: string;
  sequence: string;
  casNumber: string;
  molecularFormula: string;
  calculatedMass: string; // e.g. '340.38 g/mol'
  category: CategoryType;
  purity: number;
  specificationPurity: string; // e.g. '≥ 99.0% (HPLC)'
  format: string; // e.g. '10 mL Vial / Lyophilized Powder'
  vialSize: string; // e.g. '50 mg'
  price: number;
  stockStatus: 'IN STOCK' | 'LOW STOCK' | 'BACKORDER';
  latestLot: string;
  storageCondition: string; // e.g. '-20 °C, desiccated'
  retestInterval: string; // e.g. '24 Months'
  description: string;
  handlingProtocol: string;
  applications: string[];
}
