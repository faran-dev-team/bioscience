export interface FAQItem {
  id: string;
  num: number;
  category: 
    | 'Research Use Only' 
    | 'Products & Quality' 
    | 'Documentation' 
    | 'Ordering' 
    | 'Shipping' 
    | 'Storage & Handling' 
    | 'Compliance' 
    | 'Company';
  question: string;
  answer: string;
}

export const FAQS_DATA: FAQItem[] = [
  // 1. Research Use Only
  {
    id: 'faq-1',
    num: 1,
    category: 'Research Use Only',
    question: 'What does "Research Use Only" actually mean?',
    answer: 'It means these products are supplied exclusively for laboratory research conducted by qualified professionals in appropriate facilities. They are not drugs, dietary supplements, foods, cosmetics, or medical devices. They have not been evaluated or approved by any regulatory authority for human or veterinary use. They are not intended to diagnose, treat, cure, or prevent any condition, and they must not be administered to humans or animals.'
  },
  {
    id: 'faq-2',
    num: 2,
    category: 'Research Use Only',
    question: 'Can these products be used in humans?',
    answer: 'No. Under no circumstances. These materials are not manufactured, tested, released, or supplied for use in humans, and doing so would be unsafe and outside the terms under which they are sold. Purchasing constitutes agreement to use the material solely for laboratory research.'
  },
  {
    id: 'faq-3',
    num: 3,
    category: 'Research Use Only',
    question: 'Why is Research Use Only stated so frequently across the site?',
    answer: 'Because it is the defining condition of the products, not a legal formality attached to them. The classification determines how the material is manufactured, how it is characterised, how it is described, to whom it may be sold, and what we may discuss. Stating it clearly protects our customers as much as it protects us.'
  },
  {
    id: 'faq-4',
    num: 4,
    category: 'Research Use Only',
    question: 'Do you provide dosing or administration information?',
    answer: 'No. We do not provide dosing, administration, or protocol guidance of any kind, in any context, regardless of how a request is framed. We are able to discuss reconstitution volumes, solubility characteristics, storage conditions, handling practice, and documentation.'
  },
  {
    id: 'faq-5',
    num: 5,
    category: 'Research Use Only',
    question: 'Are your products FDA approved?',
    answer: 'No, and no such representation is made anywhere on this site. Research Use Only materials are not subject to a marketing approval pathway because they are not intended for use in humans or animals. Any supplier suggesting otherwise about materials in this category should be treated with considerable caution.'
  },
  {
    id: 'faq-6',
    num: 6,
    category: 'Research Use Only',
    question: 'Who may purchase from BioScience Depot?',
    answer: 'Purchasers must be 21 years of age or older and must be acquiring materials for legitimate laboratory research. We supply research institutions, universities, commercial and contract research laboratories, biotechnology companies, and qualified research professionals. We reserve the right to decline any order.'
  },
  {
    id: 'faq-7',
    num: 7,
    category: 'Research Use Only',
    question: 'Do you verify intended use?',
    answer: 'We require confirmation of age and research purpose at the point of purchase and may request additional information about the purchasing entity or intended application. We decline orders where the intended use appears inconsistent with laboratory research, and we do not restore such accounts on appeal.'
  },

  // 2. Products & Quality
  {
    id: 'faq-8',
    num: 8,
    category: 'Products & Quality',
    question: 'What purity can I expect?',
    answer: 'Purity is stated per compound on each product page and confirmed per lot on the Certificate of Analysis. Catalogue compounds are typically released at ≥99% by RP-HPLC, with the specific minimum defined in each compound’s written specification. Where higher or specifically characterised purity is required, contact our team before ordering.'
  },
  {
    id: 'faq-9',
    num: 9,
    category: 'Products & Quality',
    question: 'How is purity determined?',
    answer: 'By reversed-phase high-performance liquid chromatography with UV detection, reported as the percentage of total integrated peak area attributable to the main peptide peak. The detection wavelength and method basis are stated on the certificate so the figure can be interpreted rather than assumed.'
  },
  {
    id: 'faq-10',
    num: 10,
    category: 'Products & Quality',
    question: 'How is identity confirmed?',
    answer: 'By mass spectrometry, comparing observed molecular mass against the mass calculated from the specified sequence and modifications. Chromatography establishes how much of the material is one species; mass spectrometry establishes that the species is the correct one. Both are required.'
  },
  {
    id: 'faq-11',
    num: 11,
    category: 'Products & Quality',
    question: 'What happens to material that fails specification?',
    answer: 'It is rejected. Non-conforming lots are segregated and recorded, and are not repriced, regraded, relabelled, or blended into conforming stock. Repeated non-conformance from a source triggers formal re-qualification of that source.'
  },
  {
    id: 'faq-12',
    num: 12,
    category: 'Products & Quality',
    question: 'Are your products sterile?',
    answer: 'Catalogue research peptides are not supplied as sterile products unless a specific product page states otherwise. Where an application requires sterility or a defined endotoxin limit, this must be specified in advance so that appropriate material and characterisation can be arranged.'
  },
  {
    id: 'faq-13',
    num: 13,
    category: 'Products & Quality',
    question: 'Do you test for endotoxin?',
    answer: 'Endotoxin testing is not part of the standard release panel. It is available as supplementary characterisation where the research application requires it. Specify the requirement at the point of enquiry.'
  },
  {
    id: 'faq-14',
    num: 14,
    category: 'Products & Quality',
    question: 'How consistent is material between lots?',
    answer: 'Consistency is managed through qualified sourcing, written and version-controlled specifications, documented change control, and lot-level release testing. Where a study will span an extended period, we recommend discussing single-lot supply with our team so that the entire programme runs on one lot.'
  },
  {
    id: 'faq-15',
    num: 15,
    category: 'Products & Quality',
    question: 'Can you supply a peptide that is not in your catalogue?',
    answer: 'Yes. Custom synthesis is available. Provide the sequence in single- or three-letter code, required quantity, minimum purity, any modifications — including N- or C-terminal modification, cyclisation, labelling, or non-natural residues — preferred counter-ion, and any additional characterisation required. We will respond with feasibility, timeline, and quotation.'
  },
  {
    id: 'faq-16',
    num: 16,
    category: 'Products & Quality',
    question: 'What quantities are available?',
    answer: 'Catalogue quantities are listed on each product page. Larger quantities, bulk supply, and scheduled recurring supply are available through our team. Institutional and multi-site requirements can be structured under a single account.'
  },
  {
    id: 'faq-17',
    num: 17,
    category: 'Products & Quality',
    question: 'What is net peptide content, and why does it matter?',
    answer: 'Net peptide content is the proportion of the material in the vial that is actually peptide, once counter-ion and residual moisture are accounted for. Concentration calculations based on gross vial weight overstate the peptide present. Where net peptide content is determined, it is reported on the certificate and should be used as the calculation basis.'
  },

  // 3. Documentation
  {
    id: 'faq-18',
    num: 18,
    category: 'Documentation',
    question: 'Do you provide a Certificate of Analysis?',
    answer: 'Yes — with every unit shipped, as standard, at no additional cost. The certificate is specific to the lot supplied, not a generic product datasheet.'
  },
  {
    id: 'faq-19',
    num: 19,
    category: 'Documentation',
    question: 'Can I see documentation before purchasing?',
    answer: 'Representative certificates and safety data sheets are available on request. This is common practice for institutional purchasers whose environmental health and safety office must approve the material before receipt, and we support it routinely.'
  },
  {
    id: 'faq-20',
    num: 20,
    category: 'Documentation',
    question: 'How do I retrieve a certificate for material I received previously?',
    answer: 'Certificates are retrievable by lot number at any time. Contact our team with the lot number, or use the documentation retrieval function on the site. Records are retained under our retention policy so historical documentation remains available.'
  },
  {
    id: 'faq-21',
    num: 21,
    category: 'Documentation',
    question: 'Do you provide safety data sheets?',
    answer: 'Yes, for all catalogue compounds, covering hazard identification, handling and storage, protective equipment, exposure controls, first-aid measures, and disposal considerations.'
  },
  {
    id: 'faq-22',
    num: 22,
    category: 'Documentation',
    question: 'Can you supply documentation required by our procurement department?',
    answer: 'Yes. Formal quotations, W-9 forms, vendor onboarding paperwork, insurance documentation, and consolidated invoicing are available. Contact our team with your institution’s requirements and we will complete them.'
  },
  {
    id: 'faq-23',
    num: 23,
    category: 'Documentation',
    question: 'Can documentation be integrated into our LIMS or electronic notebook?',
    answer: 'Structured documentation delivery for laboratory information management and electronic notebook systems is an active development priority. Contact our team to discuss current capability and your specific platform.'
  },

  // 4. Ordering
  {
    id: 'faq-24',
    num: 24,
    category: 'Ordering',
    question: 'How do I place an order?',
    answer: 'Orders can be placed through the website or directly with our team. Institutional customers requiring purchase order workflows, formal quotations, or net terms should contact us to establish an account.'
  },
  {
    id: 'faq-25',
    num: 25,
    category: 'Ordering',
    question: 'Do you accept institutional purchase orders?',
    answer: 'Yes. Contact our team to establish an account, complete vendor onboarding, and arrange terms.'
  },
  {
    id: 'faq-26',
    num: 26,
    category: 'Ordering',
    question: 'Can I request a quotation?',
    answer: 'Yes. Quotations are issued for any combination of catalogue compounds, custom synthesis, or bulk requirements, and remain valid for a defined period stated on the document.'
  },
  {
    id: 'faq-27',
    num: 27,
    category: 'Ordering',
    question: 'Do you offer wholesale or institutional pricing?',
    answer: 'Structured pricing is available for volume, recurring, and multi-site requirements. Contact our team with your anticipated requirements. Pricing conversations are handled directly rather than through promotional mechanisms.'
  },
  {
    id: 'faq-28',
    num: 28,
    category: 'Ordering',
    question: 'Can I amend or cancel an order after placing it?',
    answer: 'Contact us immediately. Orders that have not entered the picking process can generally be amended or cancelled. Once cold-chain packing has begun, changes may not be possible. Amendment and cancellation terms are set out in our Terms of Sale.'
  },
  {
    id: 'faq-29',
    num: 29,
    category: 'Ordering',
    question: 'Do you supply outside the United States?',
    answer: 'Our operations are structured for domestic supply. International enquiries are considered case by case, subject to destination regulations, import requirements, and whether cold chain can be maintained for the full transit duration. Contact our team before placing an international order.'
  },

  // 5. Shipping
  {
    id: 'faq-30',
    num: 30,
    category: 'Shipping',
    question: 'How is material shipped?',
    answer: 'In insulated packaging with coolant configured for the transit window, destination, service level, and seasonal conditions. Exterior labelling states storage requirements and refrigeration urgency so that receiving personnel act appropriately.'
  },
  {
    id: 'faq-31',
    num: 31,
    category: 'Shipping',
    question: 'How quickly do orders ship?',
    answer: 'In-stock catalogue orders placed before the daily cut-off are typically dispatched the same or next business day. Cold-chain shipments are scheduled to avoid weekend dwell in transit facilities, which may mean holding a shipment until the start of the following week rather than sending it into a Friday network.'
  },
  {
    id: 'faq-32',
    num: 32,
    category: 'Shipping',
    question: 'What if my shipment arrives warm or damaged?',
    answer: 'Contact us on the day of receipt, before opening the vials, with photographs of the exterior packaging, the interior configuration, the coolant condition, and the vials. We will assess against the shipping record and, where the shipment did not meet specification, replace the material.'
  },
  {
    id: 'faq-33',
    num: 33,
    category: 'Shipping',
    question: 'Can I track my shipment?',
    answer: 'Yes. Tracking is issued at dispatch. For temperature-sensitive shipments we recommend monitoring transit and arranging for prompt collection at the receiving point.'
  },
  {
    id: 'faq-34',
    num: 34,
    category: 'Shipping',
    question: 'Do you ship to residential addresses?',
    answer: 'Our supply model is oriented to institutional and laboratory delivery locations. Shipments to addresses that do not appear to be a research facility may require additional verification and may be declined.'
  },

  // 6. Storage & Handling
  {
    id: 'faq-35',
    num: 35,
    category: 'Storage & Handling',
    question: 'How should material be stored after receipt?',
    answer: 'Lyophilised peptides should be stored at -20 °C or below, protected from light and moisture, in the original sealed container. For extended storage, -80 °C is preferable. Reconstituted material should be stored frozen in single-use aliquots. Specific storage conditions and recommended retest intervals are stated on each Certificate of Analysis.'
  },
  {
    id: 'faq-36',
    num: 36,
    category: 'Storage & Handling',
    question: 'Why must the vial reach room temperature before opening?',
    answer: 'Lyophilised peptides are hygroscopic. Opening a cold vial in ambient air condenses atmospheric moisture onto the solid, accelerating hydrolytic degradation and compromising weighing accuracy. Equilibrating the sealed vial first is a two-minute step that prevents an irreversible one.'
  },
  {
    id: 'faq-37',
    num: 37,
    category: 'Storage & Handling',
    question: 'What solvent should be used for reconstitution?',
    answer: 'Solubility is sequence-dependent, and there is no universal answer. Sterile water suits many peptides; basic peptides often dissolve more readily in dilute acidic aqueous solution; acidic peptides often prefer mildly basic conditions; hydrophobic sequences may require a small proportion of organic co-solvent before dilution. Solvent choice must also be compatible with the downstream assay. Our Research Information page covers this in more detail, and our team can discuss solubility characteristics for specific compounds.'
  },
  {
    id: 'faq-38',
    num: 38,
    category: 'Storage & Handling',
    question: 'Why should reconstituted material be aliquoted?',
    answer: 'Repeated freeze-thaw cycling degrades peptides in solution, and repeated septum penetration introduces contamination and evaporative error. Single-use aliquots prepared at the point of reconstitution eliminate both.'
  },
  {
    id: 'faq-39',
    num: 39,
    category: 'Storage & Handling',
    question: 'How long is reconstituted material usable?',
    answer: 'Solution stability is substantially lower than solid-state stability and varies significantly by sequence, solvent, pH, and storage temperature. General practice is to prepare only the volume expected to be used and to store aliquots frozen. Where a study depends on solution stability over a defined period, this should be established empirically for the specific compound and conditions.'
  },
  {
    id: 'faq-40',
    num: 40,
    category: 'Storage & Handling',
    question: 'What protective equipment is required?',
    answer: 'Gloves, eye protection, and a laboratory coat as a minimum. Consult the compound-specific safety data sheet for additional requirements and handle within appropriate laboratory containment.'
  },
  {
    id: 'faq-41',
    num: 41,
    category: 'Storage & Handling',
    question: 'How should unused material be disposed of?',
    answer: 'In accordance with your institution’s chemical waste procedures and applicable local, state, and federal requirements. Refer to the safety data sheet for disposal considerations.'
  },

  // 7. Compliance
  {
    id: 'faq-42',
    num: 42,
    category: 'Compliance',
    question: 'Is it legal to purchase research peptides?',
    answer: 'Research materials in this category are generally available for legitimate laboratory research in the United States, subject to applicable federal, state, and local law. Purchasers are responsible for ensuring that their acquisition, possession, handling, use, and disposal comply with all laws and institutional policies applicable to them. We do not provide legal advice.'
  },
  {
    id: 'faq-43',
    num: 43,
    category: 'Compliance',
    question: 'What is my responsibility as a purchaser?',
    answer: 'By purchasing, you confirm that you are 21 or older, that materials will be used solely for legitimate laboratory research, that you will not administer them to humans or animals, that you will handle and dispose of them in accordance with applicable law and institutional policy, and that you accept full responsibility for their use.'
  },
  {
    id: 'faq-44',
    num: 44,
    category: 'Compliance',
    question: 'Will you decline an order?',
    answer: 'Yes. We decline orders where age or purpose requirements are not satisfied, where the intended use appears inconsistent with research, where a delivery location or ordering pattern is inconsistent with laboratory use, or where completing the order would create legal or regulatory exposure. We are not obliged to state a reason.'
  },
  {
    id: 'faq-45',
    num: 45,
    category: 'Compliance',
    question: 'Do you make any health, therapeutic, or performance claims?',
    answer: 'No. Not on this website, not in our documentation, not in correspondence, and not in conversation. Our product descriptions state chemical and physical characteristics and nothing beyond them.'
  },
  {
    id: 'faq-46',
    num: 46,
    category: 'Compliance',
    question: 'Can I resell your products?',
    answer: 'Resale, redistribution, and repackaging are addressed in our Terms of Sale and require prior written agreement. Distributors and institutional resellers should contact our team directly.'
  },

  // 8. Company
  {
    id: 'faq-47',
    num: 47,
    category: 'Company',
    question: 'Where is BioScience Depot located?',
    answer: 'We are a United States company. Inventory is warehoused domestically under controlled conditions, orders are fulfilled domestically, and support is provided during United States business hours. Full contact details are on our Contact page.'
  },
  {
    id: 'faq-48',
    num: 48,
    category: 'Company',
    question: 'Do you manufacture your own peptides?',
    answer: 'We work with qualified manufacturing partners under written specifications and formal qualification, and we perform documentation review, verification, release, controlled storage, and fulfilment. Expansion of internal analytical capability is an active priority.'
  },
  {
    id: 'faq-49',
    num: 49,
    category: 'Company',
    question: 'How can I speak with someone technical?',
    answer: 'Contact our team through the Contact page and specify a technical enquiry. Questions regarding solubility, reconstitution, storage, stability, documentation, and characterisation are answered by personnel qualified to address them, within the boundaries of laboratory research.'
  },
  {
    id: 'faq-50',
    num: 50,
    category: 'Company',
    question: 'My question is not answered here.',
    answer: 'Contact our team. We answer specific questions directly and will tell you plainly when something falls outside what we can address.'
  }
];

export const HOMEPAGE_FAQS = FAQS_DATA.filter(f => [1, 6, 18, 30, 15].includes(f.num));
