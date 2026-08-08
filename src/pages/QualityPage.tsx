import React from 'react';
import { motion } from 'framer-motion';
import { RUOComplianceStrip } from '../components/features/hero/RUOComplianceStrip';
import { Button } from '../components/ui/Button';
import {
  IconShieldCheck,
  IconBarChart,
  IconCpu,
  IconFileText,
  IconSnowflake,
  IconArrowRight
} from '../components/ui/Icons';

interface QualityPageProps {
  onOpenLotLookup: (lotNum?: string) => void;
  setActiveTab?: (tab: string) => void;
}

export const QualityPage: React.FC<QualityPageProps> = ({ onOpenLotLookup, setActiveTab }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="space-y-14 bg-[#0A0B0D] text-[#E8E6E1] font-body"
    >
      {/* 1. HERO (PAGE 04) */}
      <section className="pt-12 pb-14 px-4 sm:px-6 lg:px-8 border-b border-[#2A2E33] bg-[#0E1012]">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-[11px] font-mono text-[#BE7A28] font-bold uppercase tracking-widest block">
            [ PAGE 04 — QUALITY ASSURANCE ]
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#E8E6E1]">
            Quality Assurance
          </h1>
          <p className="text-sm sm:text-base text-[#B9BEC4] font-body leading-relaxed max-w-3xl">
            A complete account of how material enters our inventory, what is measured, what is documented, and what is refused.
          </p>
        </div>
      </section>

      {/* Compliance Strip */}
      <RUOComplianceStrip />

      {/* 9 DETAILED SECTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* SECTION 01 — TESTING */}
        <div className="space-y-6">
          <div className="border-b border-[#2A2E33] pb-3">
            <span className="text-[10px] font-mono text-[#BE7A28] uppercase font-bold tracking-widest block">
              SECTION 01
            </span>
            <h2 className="font-heading text-2xl font-bold text-[#E8E6E1] uppercase tracking-wide">
              Analytical verification
            </h2>
            <p className="text-xs text-[#B9BEC4] mt-1">
              Every lot undergoes analytical characterisation prior to release. The standard panel establishes two fundamental questions: is this the correct molecule, and how much of the material is that molecule.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-body text-[#B9BEC4]">
            <div className="bg-[#16181B] border border-[#2A2E33] p-5 space-y-2">
              <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase tracking-wider">
                Purity by reversed-phase HPLC
              </h3>
              <p className="leading-relaxed">
                Purity is determined by reversed-phase high-performance liquid chromatography with UV detection. The chromatogram resolves the principal peptide peak from process-related impurities including deletion sequences, truncated species, oxidation products, and residual reagents. Reported as percentage of total integrated peak area with stated detection wavelength.
              </p>
            </div>

            <div className="bg-[#16181B] border border-[#2A2E33] p-5 space-y-2">
              <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase tracking-wider">
                Identity by mass spectrometry
              </h3>
              <p className="leading-relaxed">
                Molecular identity is confirmed by mass spectrometry. The observed molecular mass is compared against calculated mass derived from the specified sequence. Agreement within stated tolerance confirms the intended molecular entity — a question chromatography alone cannot answer.
              </p>
            </div>

            <div className="bg-[#16181B] border border-[#2A2E33] p-5 space-y-2">
              <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase tracking-wider">
                Appearance and physical characterisation
              </h3>
              <p className="leading-relaxed">
                Lyophilised material is examined for appearance, colour, and cake integrity. Deviations trigger investigation regardless of chromatographic result, because they frequently indicate handling or packaging failure.
              </p>
            </div>

            <div className="bg-[#16181B] border border-[#2A2E33] p-5 space-y-2">
              <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase tracking-wider">
                Net peptide content
              </h3>
              <p className="leading-relaxed">
                Where determined, net peptide content quantifies the actual peptide mass in the vial, distinct from total weight which comprises counter-ion and residual moisture. This is reported separately as the correct basis for molar concentration calculations.
              </p>
            </div>
          </div>

          <div className="bg-[#16181B] border border-[#2A2E33] p-5 text-xs text-[#B9BEC4] space-y-1.5">
            <h3 className="font-heading font-bold text-xs text-[#E8E6E1] uppercase tracking-wider">
              Supplementary characterisation
            </h3>
            <p className="leading-relaxed">
              Additional analysis — including amino acid analysis (AAA), water content by Karl Fischer titration, counter-ion quantification, and orthogonal chromatographic methods — is performed where the compound or application requires it.
            </p>
          </div>
        </div>

        {/* SECTION 02 — QUALITY CONTROL */}
        <div className="space-y-6">
          <div className="border-b border-[#2A2E33] pb-3">
            <span className="text-[10px] font-mono text-[#BE7A28] uppercase font-bold tracking-widest block">
              SECTION 02
            </span>
            <h2 className="font-heading text-2xl font-bold text-[#E8E6E1] uppercase tracking-wide">
              Control at every transfer point
            </h2>
            <p className="text-xs text-[#B9BEC4] mt-1">
              Quality control is applied at each point where material changes hands or changes state.
            </p>
          </div>

          <div className="space-y-3 text-xs text-[#B9BEC4]">
            <div className="bg-[#16181B] border border-[#2A2E33] p-4 space-y-1">
              <h3 className="font-heading font-bold text-xs text-[#E8E6E1] uppercase tracking-wider">
                • Incoming quarantine
              </h3>
              <p className="leading-relaxed">
                Material received from a manufacturing partner enters a segregated quarantine status. It is not available for sale, not counted as inventory, and not physically located with released stock. Release requires documentation review and analytical verification.
              </p>
            </div>

            <div className="bg-[#16181B] border border-[#2A2E33] p-4 space-y-1">
              <h3 className="font-heading font-bold text-xs text-[#E8E6E1] uppercase tracking-wider">
                • Documentation review
              </h3>
              <p className="leading-relaxed">
                Manufacturer certificates, chromatograms, mass spectra, and batch records are reviewed against the written specification. Missing or inconsistent documentation is grounds for rejection independent of material quality.
              </p>
            </div>

            <div className="bg-[#16181B] border border-[#2A2E33] p-4 space-y-1">
              <h3 className="font-heading font-bold text-xs text-[#E8E6E1] uppercase tracking-wider">
                • Release decision
              </h3>
              <p className="leading-relaxed">
                Release is an explicit, recorded decision made by an authorised individual. The record captures who released the lot, when, against which specification version, and on the basis of which analytical results.
              </p>
            </div>

            <div className="bg-[#16181B] border border-[#2A2E33] p-4 space-y-1">
              <h3 className="font-heading font-bold text-xs text-[#E8E6E1] uppercase tracking-wider">
                • Ongoing inventory control & Non-conforming rejection
              </h3>
              <p className="leading-relaxed">
                Released inventory is subject to periodic reconciliation and retest date monitoring. Non-conforming material is segregated and rejected — never repriced, regraded, relabelled, or blended.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 03 — MANUFACTURING STANDARDS */}
        <div className="space-y-6">
          <div className="border-b border-[#2A2E33] pb-3">
            <span className="text-[10px] font-mono text-[#BE7A28] uppercase font-bold tracking-widest block">
              SECTION 03
            </span>
            <h2 className="font-heading text-2xl font-bold text-[#E8E6E1] uppercase tracking-wide">
              How compounds are produced
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#B9BEC4]">
            <div className="bg-[#16181B] border border-[#2A2E33] p-5 space-y-2">
              <h3 className="font-heading font-bold text-xs text-[#E8E6E1] uppercase tracking-wider">
                Partner qualification
              </h3>
              <p className="leading-relaxed">
                Manufacturing partners are evaluated on facility controls, analytical instrumentation, batch record practice, change control, and consistency across multiple trial lots before listing.
              </p>
            </div>

            <div className="bg-[#16181B] border border-[#2A2E33] p-5 space-y-2">
              <h3 className="font-heading font-bold text-xs text-[#E8E6E1] uppercase tracking-wider">
                Synthesis methodology
              </h3>
              <p className="leading-relaxed">
                Produced predominantly by solid-phase peptide synthesis (SPPS), assembling sequences stepwise on solid support with protected amino acids, followed by cleavage and deprotection.
              </p>
            </div>

            <div className="bg-[#16181B] border border-[#2A2E33] p-5 space-y-2">
              <h3 className="font-heading font-bold text-xs text-[#E8E6E1] uppercase tracking-wider">
                In-process control & Purification
              </h3>
              <p className="leading-relaxed">
                Defined checkpoints monitor coupling efficiency. Crude peptide is purified by preparative reversed-phase chromatography and pooled strictly against analytical criteria.
              </p>
            </div>

            <div className="bg-[#16181B] border border-[#2A2E33] p-5 space-y-2">
              <h3 className="font-heading font-bold text-xs text-[#E8E6E1] uppercase tracking-wider">
                Lyophilisation & Change control
              </h3>
              <p className="leading-relaxed">
                Freeze-drying parameters are tailored to produce stable, low-moisture solids. Any process change is documented and impact-assessed before affecting supplied inventory.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 04 — DOCUMENTATION */}
        <div className="bg-[#16181B] border border-[#2A2E33] p-6 sm:p-8 space-y-4 text-xs text-[#B9BEC4]">
          <div className="border-b border-[#2A2E33] pb-3">
            <span className="text-[10px] font-mono text-[#BE7A28] uppercase font-bold tracking-widest block">
              SECTION 04
            </span>
            <h2 className="font-heading text-xl font-bold text-[#E8E6E1] uppercase tracking-wide">
              The paperwork is part of the product
            </h2>
          </div>
          <p>
            A lot-specific Certificate of Analysis accompanies every unit shipped, stating at minimum:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-[11px] bg-[#0A0B0D] p-4 border border-[#2A2E33] text-[#E8E6E1]">
            <div>• Product name & sequence identifier</div>
            <div>• Lot number & analysis/release dates</div>
            <div>• Molecular formula & calculated mass</div>
            <div>• Observed mass spectrometry result</div>
            <div>• Appearance & physical description</div>
            <div>• Net peptide content (where determined)</div>
            <div>• Purity result, method, & UV wavelength</div>
            <div>• Counter-ion & moisture limit</div>
            <div>• Storage condition & retest interval</div>
            <div>• Explicit Research Use Only statement</div>
          </div>
          <p className="pt-2">
            Safety data sheets (SDS), formal quotations, W-9 forms, vendor onboarding paperwork, and consolidated invoicing are provided as standard to support institutional procurement.
          </p>
        </div>

        {/* SECTION 05, 06, 07 — PROCEDURES, TRACEABILITY & PACKAGING */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#B9BEC4]">
          <div className="bg-[#16181B] border border-[#2A2E33] p-5 space-y-2">
            <span className="text-[10px] font-mono text-[#BE7A28] uppercase font-bold tracking-widest block">
              SECTION 05
            </span>
            <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase tracking-wider">
              Internal handling discipline
            </h3>
            <p className="leading-relaxed">
              Storage areas are access-restricted and temperature logged with automated alarm thresholds. Personnel follow written procedures for picking temperature-sensitive inventory under defined ambient exposure limits.
            </p>
          </div>

          <div className="bg-[#16181B] border border-[#2A2E33] p-5 space-y-2">
            <span className="text-[10px] font-mono text-[#BE7A28] uppercase font-bold tracking-widest block">
              SECTION 06
            </span>
            <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase tracking-wider">
              Traceability in both directions
            </h3>
            <p className="leading-relaxed">
              <strong>Backward:</strong> From vial to synthesis record, analytical CoA, release decision, and storage history.<br />
              <strong>Forward:</strong> From lot to every destination shipment, enabling targeted quality notices if needed.
            </p>
          </div>

          <div className="bg-[#16181B] border border-[#2A2E33] p-5 space-y-2">
            <span className="text-[10px] font-mono text-[#BE7A28] uppercase font-bold tracking-widest block">
              SECTION 07
            </span>
            <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase tracking-wider">
              Packaging specification
            </h3>
            <p className="leading-relaxed">
              Amber borosilicate glass vials, butyl rubber stoppers with aluminium crimp seals, cryogenic labels, and insulated shippers configured for transit windows, destinations, and seasons.
            </p>
          </div>
        </div>

        {/* SECTION 08 & 09 — STORAGE & HANDLING */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-[#B9BEC4]">
          <div className="bg-[#16181B] border border-[#2A2E33] p-6 space-y-3">
            <span className="text-[10px] font-mono text-[#BE7A28] uppercase font-bold tracking-widest block">
              SECTION 08
            </span>
            <h3 className="font-heading font-bold text-base text-[#E8E6E1] uppercase tracking-wider">
              Storage conditions
            </h3>
            <ul className="space-y-1.5 list-disc list-inside">
              <li><strong>Lyophilised long-term:</strong> -20 °C or below, protected from light and moisture. -80 °C for extended preservation.</li>
              <li><strong>Reconstituted material:</strong> Store frozen in single-use aliquots. Avoid freeze-thaw cycling.</li>
              <li><strong>Moisture protection:</strong> Equilibrate sealed vial to room temperature before opening.</li>
              <li><strong>Light protection:</strong> Protect photosensitive residues (Trp, Tyr, Phe) from ambient light.</li>
            </ul>
          </div>

          <div className="bg-[#16181B] border border-[#2A2E33] p-6 space-y-3">
            <span className="text-[10px] font-mono text-[#BE7A28] uppercase font-bold tracking-widest block">
              SECTION 09
            </span>
            <h3 className="font-heading font-bold text-base text-[#E8E6E1] uppercase tracking-wider">
              Laboratory handling rules
            </h3>
            <ul className="space-y-1.5 list-disc list-inside">
              <li>Equilibrate sealed vial before opening.</li>
              <li>Briefly centrifuge to collect wall and stopper powder.</li>
              <li>Use appropriate PPE: gloves, coat, and eye protection.</li>
              <li>Weigh with net peptide correction.</li>
              <li>Aliquot immediately after reconstitution.</li>
              <li>Record lot number in notebook records.</li>
            </ul>
          </div>
        </div>

        {/* Compliance Footer Note */}
        <div className="bg-[#0A0B0D] border border-[#2A2E33] p-4 text-xs text-[#6B7178] font-body">
          <p>
            [Compliance note] The guidance on this page describes general laboratory practice for handling research materials. It is not a protocol, and it does not constitute advice regarding any use of these compounds outside a controlled research environment.
          </p>
        </div>

        {/* Interactive CoA Lookup & CTAs */}
        <div className="bg-[#16181B] border border-[#2A2E33] p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase tracking-wider flex items-center gap-2">
              <IconFileText size={16} amberAccent={true} />
              <span>Verify a Certificate of Analysis</span>
            </h3>
            <p className="text-xs text-[#B9BEC4]">
              Enter any 10-character Lot Number to view live chromatographic and mass spectrometry data.
            </p>
          </div>

          <Button
            variant="amber"
            size="md"
            onClick={() => onOpenLotLookup('LOT 24-0817-C')}
            className="flex-shrink-0"
          >
            <span>Open Lot Retrieval Hub →</span>
          </Button>
        </div>
      </section>
    </motion.div>
  );
};
