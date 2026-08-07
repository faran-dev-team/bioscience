import { LotVerificationRecord } from '../types/compound';

export const LOT_RECORDS: Record<string, LotVerificationRecord> = {
  'LOT 24-0817-C': {
    lotNumber: 'LOT 24-0817-C',
    compoundId: 'ghk-cu',
    compoundName: 'GHK-Cu (Copper Tripeptide-1)',
    purity: 99.1,
    method: 'HPLC (Area Normalised @ 220 nm)',
    identityConfirmed: true,
    waterContent: 4.2,
    analysisDate: '2024-08-17',
    analyst: 'A. Reyes, Quality & Release Lead',
    status: 'VERIFIED',
    chromatogramData: [
      { time: 1.0, response: 0.2 },
      { time: 2.5, response: 0.5 },
      { time: 4.0, response: 1.2 },
      { time: 5.2, response: 99.1 }, // Principal peak
      { time: 6.5, response: 0.4 },
      { time: 8.0, response: 0.1 }
    ]
  },
  'LOT 24-0902-A': {
    lotNumber: 'LOT 24-0902-A',
    compoundId: 'bpc-157',
    compoundName: 'BPC-157 (Body Protection Compound)',
    purity: 99.6,
    method: 'HPLC (Area Normalised @ 214 nm)',
    identityConfirmed: true,
    waterContent: 3.8,
    analysisDate: '2024-09-02',
    analyst: 'M. Vance, Analytical Chemist',
    status: 'VERIFIED',
    chromatogramData: [
      { time: 1.2, response: 0.1 },
      { time: 3.0, response: 0.2 },
      { time: 6.1, response: 99.6 },
      { time: 7.5, response: 0.1 }
    ]
  },
  'LOT 24-0912-B': {
    lotNumber: 'LOT 24-0912-B',
    compoundId: 'semaglutide',
    compoundName: 'Semaglutide (GLP-1 Receptor Agonist)',
    purity: 99.2,
    method: 'HPLC (RP-C18 @ 220 nm)',
    identityConfirmed: true,
    waterContent: 4.5,
    analysisDate: '2024-09-12',
    analyst: 'A. Reyes, Quality & Release Lead',
    status: 'VERIFIED',
    chromatogramData: [
      { time: 1.5, response: 0.3 },
      { time: 4.8, response: 0.4 },
      { time: 8.4, response: 99.2 },
      { time: 10.0, response: 0.1 }
    ]
  },
  'LOT 24-0919-F': {
    lotNumber: 'LOT 24-0919-F',
    compoundId: 'tirzepatide',
    compoundName: 'Tirzepatide (Dual GIP/GLP-1 Agonist)',
    purity: 99.5,
    method: 'HPLC (RP-C18 @ 220 nm)',
    identityConfirmed: true,
    waterContent: 4.0,
    analysisDate: '2024-09-19',
    analyst: 'S. Chen, QC Senior Specialist',
    status: 'VERIFIED',
    chromatogramData: [
      { time: 2.0, response: 0.2 },
      { time: 7.8, response: 99.5 },
      { time: 9.5, response: 0.3 }
    ]
  }
};
