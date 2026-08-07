export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Ordering & Compliance',
    question: 'Who is eligible to purchase from BioScience Depot?',
    answer: 'Purchasers must be 21 years of age or older and acquiring materials strictly for legitimate laboratory research in academic, biotech, or industrial settings. We do not sell to private individuals for personal use.'
  },
  {
    id: 'faq-2',
    category: 'Ordering & Compliance',
    question: 'Will BioScience Depot decline an order?',
    answer: 'Yes. We decline orders where age or purpose requirements are not satisfied, where shipping destinations are inconsistent with institutional research use, or where communication implies human or clinical application.'
  },
  {
    id: 'faq-3',
    category: 'Quality & Documentation',
    question: 'How do I retrieve a Certificate of Analysis (COA) for a lot previously received?',
    answer: 'Certificates are retrievable instantly on our website by entering the 10-character Lot Number printed on your vial label (e.g., LOT 24-0817-C). No account registration is required to view analytical data.'
  },
  {
    id: 'faq-4',
    category: 'Quality & Documentation',
    question: 'What analytical methods are used to verify purity?',
    answer: 'Every lot undergoes High-Performance Liquid Chromatography (HPLC) for area-normalised purity quantification, Mass Spectrometry (MS) for sequence mass identification, and Karl Fischer titration for residual moisture determination.'
  },
  {
    id: 'faq-5',
    category: 'Handling & Storage',
    question: 'What is the proper equilibration protocol before opening a vial?',
    answer: 'Vials stored at -20 °C must be allowed to equilibrate sealed at room temperature (20-25 °C) for 20-30 minutes prior to opening. Opening cold vials introduces atmospheric moisture condensation, accelerating hydrolytic peptide degradation.'
  },
  {
    id: 'faq-6',
    category: 'Procurement',
    question: 'Do you support institutional Purchase Orders and Net 30 terms?',
    answer: 'Yes. We offer punch-out catalogue support, formal written quotations, and Net 30 payment terms for verified universities, research institutes, and corporate biotech accounts.'
  }
];
