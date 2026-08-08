export type CategorySlug = 
  | 'catalogue' 
  | 'fragments' 
  | 'cyclic-modified' 
  | 'reference-standards' 
  | 'custom-synthesis' 
  | 'consumables';

export type CategoryType = 
  | 'All' 
  | 'Catalogue Research Peptides' 
  | 'Peptide Fragments and Analogues' 
  | 'Cyclic and Modified Peptides' 
  | 'Reference Standards' 
  | 'Custom Synthesis' 
  | 'Laboratory Consumables';

export interface CategoryInfo {
  slug: CategorySlug;
  title: string;
  shortDesc: string;
  aboutTitle: string;
  aboutDesc: string[];
  selectionGuidance: string[];
  standards: string[];
}

export interface LotVerificationRecord {
  lotNumber: string;
  compoundId: string;
  compoundName: string;
  sequence: string;
  formula: string;
  calculatedMass: string;
  observedMass: string;
  purity: number; // e.g. 99.4
  method: string; // e.g. 'RP-HPLC (Area Normalised @ 214 nm)'
  detectionWavelength: string; // '214 nm & 220 nm'
  identityConfirmed: boolean; // MS matched
  waterContent: number; // e.g. 4.2% Karl Fischer
  netPeptideContent: string; // e.g. '84.2%'
  counterIon: string; // e.g. 'Acetate salt'
  appearance: string; // e.g. 'White to off-white lyophilised cake'
  analysisDate: string; // e.g. '2024-08-17'
  releaseDate: string;
  retestInterval: string;
  analyst: string; // e.g. 'A. Reyes, QC Lead'
  status: 'VERIFIED' | 'RELEASED' | 'ARCHIVED';
  chromatogramData: { time: number; response: number }[];
}

export interface Compound {
  id: string;
  sku: string;
  name: string;
  sequence: string;
  sequenceLength: string;
  casNumber: string;
  molecularFormula: string;
  calculatedMass: string; // e.g. '403.93 Da'
  categorySlug: CategorySlug;
  categoryName: string;
  purity: number; // e.g. 99.4
  specificationPurity: string; // e.g. '≥ 99.0% (RP-HPLC)'
  format: string; // e.g. 'Lyophilised solid'
  vialSize: string; // e.g. '10 mg'
  counterIon: string; // e.g. 'Acetate salt'
  appearance: string; // e.g. 'White lyophilised solid'
  identityMethod: string; // e.g. 'Electrospray Ionization Mass Spectrometry (ESI-MS)'
  netPeptideContent: string; // e.g. '84.6% (w/w)'
  solubility: string; // e.g. 'Soluble in sterile water or bacteriostatic water up to 20 mg/mL'
  storageCondition: string; // e.g. '-20 °C, desiccated, protected from light'
  retestInterval: string; // e.g. '24 Months'
  modifications: string; // e.g. 'N-terminal acetylation' or 'None'
  price: number;
  stockStatus: 'IN STOCK' | 'LIMITED' | 'MADE TO ORDER' | 'QUARANTINE';
  latestLot: string;
  description: string;
  handlingNotes: string;
  applications: string[];
}
