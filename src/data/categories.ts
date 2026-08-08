import { CategoryInfo } from '../types/compound';

export const CATEGORIES_DATA: CategoryInfo[] = [
  {
    slug: 'catalogue',
    title: 'Catalogue Research Peptides',
    shortDesc: 'Our core inventory of characterised, in-stock peptide compounds, released with full lot documentation.',
    aboutTitle: 'Characterised Solid-Phase Peptide Standards',
    aboutDesc: [
      'Our core catalogue inventory comprises synthetic peptides manufactured by solid-phase peptide synthesis (SPPS), purified to high analytical thresholds (typically ≥99.0% by RP-HPLC), and lyophilised into stable solid formulations.',
      'Each batch is qualified against a written specification defining sequence integrity, counter-ion composition, appearance, and acceptable moisture levels. Compounds in this category serve as foundational reagents across cell signaling, receptor binding assays, and metabolic pathways in controlled laboratory research.',
      'All catalogue items are warehoused domestically in dedicated desiccation chambers at -20 °C and dispatched with lot-specific Certificates of Analysis confirming chromatographic purity and mass identity.'
    ],
    selectionGuidance: [
      'When selecting from standard catalogue peptides, verify whether your assay requires standard acetate salt form or whether trifluoroacetate (TFA) removal is warranted for sensitive cell-culture assays.',
      'For longitudinal studies extending over multiple months, contact our team to reserve vials from a single verified lot to eliminate inter-lot variance as an unexamined experimental variable.',
      'Review the net peptide content reported on the lot certificate before calculating molar concentrations, as gross vial mass includes counter-ions and bound hydration water.'
    ],
    standards: [
      'Written specification per compound: sequence, formula, calculated mass, purity threshold, counter-ion, appearance, moisture limit',
      'Lot-level purity determination by RP-HPLC with stated detection wavelength (214 nm / 220 nm)',
      'Lot-level identity confirmation by ESI mass spectrometry against calculated mass',
      'Lot-specific Certificate of Analysis enclosed and digitally retrievable',
      'Amber borosilicate vials, butyl stoppers, aluminium crimp seals, tamper-evident closure',
      'Controlled, monitored storage at -20 °C and validated cold-chain fulfilment',
      'Full lot traceability retained under our record retention policy'
    ]
  },
  {
    slug: 'fragments',
    title: 'Peptide Fragments and Analogues',
    shortDesc: 'Sequence fragments, truncations, and structural analogues used in comparative and structure-activity research.',
    aboutTitle: 'Truncated Sequences & Structural Variant Panels',
    aboutDesc: [
      'Peptide fragments and sequence truncations represent essential tools for structure-activity relationship (SAR) studies, epitope mapping, and identifying minimal active pharmacophores in peptide science.',
      'Each fragment is produced to identical analytical standards as full-length catalogue peptides, ensuring that truncation boundaries, flanking amino acids, and terminal protections (such as N-acetylation or C-amidation) are preserved without unwanted truncation artifacts.',
      'Characterisation includes high-resolution mass spectrometry to ensure the exact sequence truncation mass matches theoretical calculations within ±0.5 Da.'
    ],
    selectionGuidance: [
      'Confirm whether N-terminal or C-terminal end caps are required to mimic internal peptide bonds or prevent unwanted exopeptidase degradation in assay media.',
      'Pay careful attention to hydrophobic clusters exposed by truncation, which may require specialized dissolution protocols (such as dilute acetic acid or organic co-solvents) prior to aqueous dilution.',
      'Ensure control experiments include the parent full-length sequence alongside truncated fragments for baseline normalization.'
    ],
    standards: [
      'Sequence-verified truncation boundaries confirmed by tandem mass spectrometry',
      'High-resolution RP-HPLC area normalization across dual UV detection channels',
      'Counter-ion documentation (typically TFA or Acetate salt)',
      'Lyophilised in inert nitrogen atmosphere to prevent premature oxidation',
      'Cryogenic-rated barcode labeling surviving -80 °C freezer storage'
    ]
  },
  {
    slug: 'cyclic-modified',
    title: 'Cyclic and Modified Peptides',
    shortDesc: 'Cyclised, acetylated, amidated, and otherwise modified constructs for stability and conformation studies.',
    aboutTitle: 'Conformationally Constrained & Chemically Modified Peptides',
    aboutDesc: [
      'Modified and cyclised peptides offer enhanced conformational stability, enzymatic resistance, and defined tertiary architectures for biophysical research, NMR spectroscopy, and target binding kinetics.',
      'Modifications include head-to-tail cyclisation, disulfide bridge formation (Cys-Cys bonds), N-terminal acetylation, C-terminal amidation, biotinylation, fluorophore conjugation (FITC, FAM, Cy5), and incorporation of non-proteinogenic D-amino acids.',
      'Quality release requires orthogonal validation to confirm cyclisation efficiency and the absence of uncyclised or polymeric side-products.'
    ],
    selectionGuidance: [
      'For disulfide-bridged cyclic peptides, avoid reducing agents (such as DTT or beta-mercaptoethanol) in reconstitution buffers unless intentional ring opening is being investigated.',
      'Fluorophore-labeled conjugates are photosensitive and must be reconstituted and handled in low-actinic or amber glassware under subdued ambient lighting.',
      'Biotinylated constructs should be verified for spacer arm length (e.g., Ahx linker) to ensure sterically unhindered streptavidin binding in assay wells.'
    ],
    standards: [
      'Cyclisation and modification site confirmation via mass spectrometry fragmentation',
      'High-purity preparative chromatography isolation (≥98.0% - ≥99.0%)',
      'Amber borosilicate vials with argon gas blanket for oxygen-sensitive linkages',
      'Complete handling and solvent compatibility notes on every CoA'
    ]
  },
  {
    slug: 'reference-standards',
    title: 'Reference Standards',
    shortDesc: 'Characterised materials intended for analytical method development, calibration, and comparison work.',
    aboutTitle: 'High-Fidelity Analytical & Assay Calibration Standards',
    aboutDesc: [
      'Reference standards are characterized with rigorous multi-dimensional analytical testing for use in method validation, HPLC retention time calibration, quantitative LC-MS/MS assay development, and internal laboratory benchmarking.',
      'In addition to standard RP-HPLC and mass spectrometry, analytical reference batches undergo Karl Fischer moisture determination, counter-ion mass quantification, and residual solvent profiling where specified.',
      'Packaged in micro-quantity aliquots to facilitate single-use calibration runs without repeated vial equilibration.'
    ],
    selectionGuidance: [
      'Utilize net peptide content as the primary calculation value when establishing standard calibration curves for quantitative spectrometry.',
      'Allow the sealed reference vial to equilibrate to room temperature for 30 minutes inside a desiccator before opening to eliminate hygroscopic weight errors on microbalances.',
      'Store reference aliquots strictly at -80 °C for maximum long-term stability and retest conformance.'
    ],
    standards: [
      'Multi-wavelength UV purity profiling with orthogonal column chromatography verification',
      'Coulometric Karl Fischer titration for precise residual water content',
      'Net peptide content certified on documentation',
      'High-precision gravimetric micro-filling with lot-level mass reconciliation'
    ]
  },
  {
    slug: 'custom-synthesis',
    title: 'Custom Synthesis',
    shortDesc: 'Made-to-specification peptides for research programmes requiring sequences outside the standing catalogue.',
    aboutTitle: 'Custom Amino Acid Synthesis to Exact Laboratory Specifications',
    aboutDesc: [
      'When your research requires novel sequences, specialized isotopic labeling, length up to 90 amino acid residues, or bespoke modification chemistries, our custom synthesis team delivers made-to-specification compounds.',
      'Every custom synthesis project starts with a written feasibility assessment, sequence analysis, and purification roadmap. Manufacturing takes place under strict in-process control checkpoints, followed by preparative purification and comprehensive lot release analytics.',
      'Deliverables include custom vial formats, designated counter-ion selection, multi-milligram to gram-scale yields, and complete analytical packages including raw HPLC chromatograms and MS spectra.'
    ],
    selectionGuidance: [
      'Provide your target sequence in standard single-letter or three-letter IUPAC notation, noting any terminal capping or non-standard residues.',
      'Specify your required minimum purity threshold (e.g., crude, >85%, >90%, >95%, or >98%) based on assay sensitivity; screening assays may require lower purity than structural or in vitro cell assays.',
      'Indicate desired salt form (TFA, Acetate, or Hydrochloride) during quotation inquiry.'
    ],
    standards: [
      'Dedicated project manager and analytical chemist assigned to each custom sequence',
      'Stepwise coupling efficiency monitoring during solid-phase synthesis assembly',
      'Full CoA reporting sequence, observed MW, purity %, and solubility characteristics',
      'Confidentiality and proprietary sequence protection under non-disclosure agreements'
    ]
  },
  {
    slug: 'consumables',
    title: 'Laboratory Consumables',
    shortDesc: 'Diluents, vials, filtration and handling supplies to support peptide reconstitution and storage workflows.',
    aboutTitle: 'Specialized Laboratory Reagents, Diluents & Handling Supplies',
    aboutDesc: [
      'To preserve peptide integrity from receiving to bench handling, BioScience Depot supplies laboratory consumables specifically rated for peptide dissolution, cryogenic storage, and sterile reconstitution.',
      'Our inventory includes USP-grade bacteriostatic water (0.9% benzyl alcohol), sterile reconstitution diluents, low-protein-binding syringe filters (0.22 µm PTFE and PES), and amber cryogenic storage micro-tubes.',
      'All consumables are tested for chemical compatibility and low-leachable profiles to avoid sample contamination during storage and aliquot handling.'
    ],
    selectionGuidance: [
      'Use bacteriostatic water when reconstituted peptide solutions will be sampled multiple times over a 14-to-28-day window under refrigeration (2-8 °C).',
      'Use sterile water or saline for single-use immediate assay applications where preservative interactions could confound cellular responses.',
      'Always utilize low-binding plastics and filters to minimize non-specific peptide surface adsorption, particularly for hydrophobic or amphipathic sequences.'
    ],
    standards: [
      'USP / Laboratory grade purity standards',
      'Low-extractable, chemical-resistant packaging',
      'Sterility verification and endotoxin-tested certification where applicable',
      'Direct compatibility with BioScience Depot compound storage protocols'
    ]
  }
];
