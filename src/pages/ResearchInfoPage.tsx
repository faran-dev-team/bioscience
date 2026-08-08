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

interface ResearchInfoPageProps {
  setActiveTab?: (tab: string) => void;
}

export const ResearchInfoPage: React.FC<ResearchInfoPageProps> = ({ setActiveTab }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="space-y-14 bg-[#0A0B0D] text-[#E8E6E1] font-body"
    >
      {/* 1. HERO (PAGE 05) */}
      <section className="pt-12 pb-14 px-4 sm:px-6 lg:px-8 border-b border-[#2A2E33] bg-[#0E1012]">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-[11px] font-mono text-[#BE7A28] font-bold uppercase tracking-widest block">
            [ PAGE 05 — RESEARCH INFORMATION ]
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#E8E6E1]">
            Research Information
          </h1>
          <p className="text-sm sm:text-base text-[#B9BEC4] font-body leading-relaxed max-w-3xl">
            Reference material on the handling, storage, and characterisation of research peptides — written for the bench, not for the brochure.
          </p>
        </div>
      </section>

      {/* Educational Compliance Strip */}
      <div className="w-full bg-[#111315] border-y border-[#2A2E33] py-2.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center sm:text-left text-[11px] font-mono text-[#A0A5AB]">
          This page is educational reference material for qualified laboratory professionals. It is not medical, clinical, or protocol advice. It does not describe or endorse any use of these compounds outside a controlled research setting.
        </div>
      </div>

      {/* 5 COMPREHENSIVE SECTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* SECTION 01 — EDUCATIONAL OVERVIEW */}
        <div className="space-y-6">
          <div className="border-b border-[#2A2E33] pb-3">
            <span className="text-[10px] font-mono text-[#BE7A28] uppercase font-bold tracking-widest block">
              SECTION 01
            </span>
            <h2 className="font-heading text-2xl font-bold text-[#E8E6E1] uppercase tracking-wide">
              What research peptides are
            </h2>
            <p className="text-xs text-[#B9BEC4] mt-1 leading-relaxed">
              Peptides are short chains of amino acids joined by peptide bonds. They occupy the structural territory between individual amino acids and full proteins — typically ranging from a few residues to several dozen. Length conventions vary between disciplines, but the practical distinction is that peptides are short enough to be produced by chemical synthesis rather than requiring biological expression. That single fact governs almost everything about how they are supplied and handled.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-body text-[#B9BEC4]">
            <div className="bg-[#16181B] border border-[#2A2E33] p-5 space-y-2">
              <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase tracking-wider">
                Chemical synthesis and its consequences
              </h3>
              <p className="leading-relaxed">
                Because peptides are assembled chemically, residue by residue, the composition of a supplied lot is determined by the efficiency of each coupling step. A synthesis with high but imperfect step efficiency accumulates deletion sequences — molecules missing one or more residues. These are structurally similar to the target and can be difficult to separate. This is why purification method and analytical verification matter more for peptides than an unfamiliar buyer might expect.
              </p>
            </div>

            <div className="bg-[#16181B] border border-[#2A2E33] p-5 space-y-2">
              <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase tracking-wider">
                Modifications
              </h3>
              <p className="leading-relaxed">
                Synthetic peptides are frequently modified to alter physical and chemical properties for research: N-terminal acetylation, C-terminal amidation, cyclisation, incorporation of non-natural residues, PEGylation, labelling with fluorophores or biotin, and conjugation. Each modification alters molecular mass, solubility, and stability, and each must be reflected in the specification and analytical expectation.
              </p>
            </div>

            <div className="bg-[#16181B] border border-[#2A2E33] p-5 space-y-2">
              <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase tracking-wider">
                The lyophilised state
              </h3>
              <p className="leading-relaxed">
                Peptides are supplied as lyophilised (freeze-dried) solids because dry material is substantially more stable than material in solution. In the solid state, hydrolytic and oxidative pathways proceed far more slowly. Reconstitution begins a clock that does not run while dry — which is why solvent choice, aliquot planning, and storage temperature after reconstitution are consequential decisions.
              </p>
            </div>

            <div className="bg-[#16181B] border border-[#2A2E33] p-5 space-y-2">
              <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase tracking-wider">
                Salt form and counter-ion
              </h3>
              <p className="leading-relaxed">
                Synthetic peptides are typically supplied as salts — commonly acetate or trifluoroacetate (TFA), depending on purification. The counter-ion contributes to the total mass in the vial without contributing peptide. It may also be relevant to certain experimental systems, and specification of counter-ion is available where an application requires a particular form.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 02 — HOW RESEARCH COMPOUNDS ARE HANDLED */}
        <div className="space-y-6">
          <div className="border-b border-[#2A2E33] pb-3">
            <span className="text-[10px] font-mono text-[#BE7A28] uppercase font-bold tracking-widest block">
              SECTION 02
            </span>
            <h2 className="font-heading text-2xl font-bold text-[#E8E6E1] uppercase tracking-wide">
              Receipt, inspection, and reconstitution
            </h2>
          </div>

          <div className="space-y-4 text-xs font-body text-[#B9BEC4]">
            <div className="bg-[#16181B] border border-[#2A2E33] p-5 space-y-2">
              <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase tracking-wider">
                On receipt & Before opening
              </h3>
              <p className="leading-relaxed">
                Cold-chain shipments should be routed to the laboratory promptly. Inspect the exterior for damage, confirm coolant presence, and verify that lot numbers match the enclosed certificate. Allow the vial to equilibrate to room temperature while sealed before opening — opening a cold vial draws atmospheric moisture onto hygroscopic solid (the single most common avoidable degradation event). Brief centrifugation collects displaced powder from vial walls.
              </p>
            </div>

            <div className="bg-[#16181B] border border-[#2A2E33] p-5 space-y-3">
              <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase tracking-wider">
                Solvent selection & Reconstitution technique
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-[#0A0B0D] p-3 border border-[#2A2E33]">
                  <strong className="text-[#E8E6E1] block mb-1">• Sterile Water:</strong>
                  <span>Suitable for hydrophilic and balanced neutral sequences.</span>
                </div>
                <div className="bg-[#0A0B0D] p-3 border border-[#2A2E33]">
                  <strong className="text-[#E8E6E1] block mb-1">• Dilute Acidic (0.1% Acetic Acid):</strong>
                  <span>Effective for basic sequences containing Lys, Arg, or His.</span>
                </div>
                <div className="bg-[#0A0B0D] p-3 border border-[#2A2E33]">
                  <strong className="text-[#E8E6E1] block mb-1">• Mildly Basic (0.1% NH4OH / PBS):</strong>
                  <span>Preferred for acidic sequences with Asp or Glu residues.</span>
                </div>
                <div className="bg-[#0A0B0D] p-3 border border-[#2A2E33]">
                  <strong className="text-[#E8E6E1] block mb-1">• Organic Co-solvent (DMSO/Acetonitrile):</strong>
                  <span>Required in small volumes for hydrophobic, aggregation-prone peptides.</span>
                </div>
              </div>
              <p className="leading-relaxed pt-1">
                Add solvent gently down the vial wall. Allow material to dissolve with gentle swirling. Avoid vigorous vortexing, which promotes foaming and shear-induced aggregation.
              </p>
            </div>

            <div className="bg-[#16181B] border border-[#2A2E33] p-5 space-y-2">
              <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase tracking-wider">
                Concentration calculation & Aliquoting
              </h3>
              <p className="leading-relaxed">
                Calculate concentration using net peptide content where reported. Gross vial weight includes counter-ion and residual moisture and will systematically overstate peptide concentration. Divide reconstituted stock into single-use aliquots immediately to eliminate repeated freeze-thaw degradation and evaporative concentration errors.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 03 — LABORATORY BEST PRACTICES */}
        <div className="space-y-6">
          <div className="border-b border-[#2A2E33] pb-3">
            <span className="text-[10px] font-mono text-[#BE7A28] uppercase font-bold tracking-widest block">
              SECTION 03
            </span>
            <h2 className="font-heading text-2xl font-bold text-[#E8E6E1] uppercase tracking-wide">
              Practices that protect the experiment
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-body text-[#B9BEC4]">
            <div className="bg-[#16181B] border border-[#2A2E33] p-5 space-y-1.5">
              <h3 className="font-heading font-bold text-xs text-[#E8E6E1] uppercase tracking-wider">
                • Record the lot number
              </h3>
              <p className="leading-relaxed">
                The lot number is the link between your result and the material that produced it. Recording it in the notebook is the only mechanism by which a material-related anomaly can later be diagnosed.
              </p>
            </div>

            <div className="bg-[#16181B] border border-[#2A2E33] p-5 space-y-1.5">
              <h3 className="font-heading font-bold text-xs text-[#E8E6E1] uppercase tracking-wider">
                • Order for the study, not for the month
              </h3>
              <p className="leading-relaxed">
                Where a study spans an extended period, single-lot supply avoids introducing a lot change as an unexamined variable mid-experiment.
              </p>
            </div>

            <div className="bg-[#16181B] border border-[#2A2E33] p-5 space-y-1.5">
              <h3 className="font-heading font-bold text-xs text-[#E8E6E1] uppercase tracking-wider">
                • Retain the certificate
              </h3>
              <p className="leading-relaxed">
                Attach the Certificate of Analysis to the study record. Journals, reviewers, and institutional auditors increasingly expect material provenance to be documentable.
              </p>
            </div>

            <div className="bg-[#16181B] border border-[#2A2E33] p-5 space-y-1.5">
              <h3 className="font-heading font-bold text-xs text-[#E8E6E1] uppercase tracking-wider">
                • Include appropriate controls
              </h3>
              <p className="leading-relaxed">
                Vehicle controls that account for the reconstitution solvent and counter-ion isolate compound effects from solvent and salt effects.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 04 — STORAGE RECOMMENDATIONS */}
        <div className="space-y-6">
          <div className="border-b border-[#2A2E33] pb-3">
            <span className="text-[10px] font-mono text-[#BE7A28] uppercase font-bold tracking-widest block">
              SECTION 04
            </span>
            <h2 className="font-heading text-2xl font-bold text-[#E8E6E1] uppercase tracking-wide">
              Storage, in detail
            </h2>
          </div>

          <div className="space-y-3 text-xs text-[#B9BEC4] font-body">
            <div className="bg-[#16181B] border border-[#2A2E33] p-4 space-y-1">
              <strong className="text-[#E8E6E1] block font-heading uppercase text-xs">Lyophilised Material:</strong>
              <p className="leading-relaxed">
                Store at -20 °C or below, protected from light and moisture, in the original sealed container. For extended storage, -80 °C is preferable. Desiccated storage further reduces moisture exposure.
              </p>
            </div>

            <div className="bg-[#16181B] border border-[#2A2E33] p-4 space-y-1">
              <strong className="text-[#E8E6E1] block font-heading uppercase text-xs">Aqueous Solutions:</strong>
              <p className="leading-relaxed">
                Solution stability is substantially lower than solid-state stability and is highly sequence-dependent. Sequences containing Met, Cys, or Trp are susceptible to oxidation; those containing Asn, Gln, or Asp are prone to deamidation in solution. Store frozen in single-use aliquots.
              </p>
            </div>

            <div className="bg-[#16181B] border border-[#2A2E33] p-4 space-y-1">
              <strong className="text-[#E8E6E1] block font-heading uppercase text-xs">Light & pH Considerations:</strong>
              <p className="leading-relaxed">
                Tryptophan, tyrosine, and phenylalanine residues are photosensitive. Use amber vials throughout handling. Extremes of pH accelerate degradation for most sequences; mildly acidic conditions are frequently favorable.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 05 — RESEARCH CONSIDERATIONS & READING A COA */}
        <div className="space-y-6">
          <div className="border-b border-[#2A2E33] pb-3">
            <span className="text-[10px] font-mono text-[#BE7A28] uppercase font-bold tracking-widest block">
              SECTION 05
            </span>
            <h2 className="font-heading text-2xl font-bold text-[#E8E6E1] uppercase tracking-wide">
              Reading a Certificate of Analysis
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-body text-[#B9BEC4]">
            <div className="bg-[#16181B] border border-[#2A2E33] p-5 space-y-2">
              <h3 className="font-heading font-bold text-xs text-[#E8E6E1] uppercase tracking-wider">
                Purity by HPLC
              </h3>
              <p className="leading-relaxed">
                A percentage of total integrated peak area at a stated wavelength. It describes the proportion of UV-absorbing material eluting as the main peak. It does not quantify non-absorbing components (counter-ion and water) and does not resolve co-eluting impurities.
              </p>
            </div>

            <div className="bg-[#16181B] border border-[#2A2E33] p-5 space-y-2">
              <h3 className="font-heading font-bold text-xs text-[#E8E6E1] uppercase tracking-wider">
                Mass Spectrometry
              </h3>
              <p className="leading-relaxed">
                Observed mass compared with calculated mass. Agreement confirms molecular identity. It does not by itself quantify purity, and a correct mass with a poor chromatogram indicates a correctly identified but impure material.
              </p>
            </div>

            <div className="bg-[#16181B] border border-[#2A2E33] p-5 space-y-2">
              <h3 className="font-heading font-bold text-xs text-[#E8E6E1] uppercase tracking-wider">
                Net Peptide Content
              </h3>
              <p className="leading-relaxed">
                The proportion of the vial’s total mass that is peptide, after counter-ion and moisture. This is the figure to use for concentration calculations. A vial of 5 mg gross weight at 80% net peptide content contains 4 mg of peptide — a 20% error if ignored.
              </p>
            </div>

            <div className="bg-[#16181B] border border-[#2A2E33] p-5 space-y-2">
              <h3 className="font-heading font-bold text-xs text-[#E8E6E1] uppercase tracking-wider">
                Choosing the appropriate purity grade
              </h3>
              <p className="leading-relaxed">
                Higher purity is not automatically the correct choice. Preliminary screening may be well served by standard-grade material, while quantitative work, structural studies, and sensitive assays warrant higher purity (≥99%) and fuller characterisation.
              </p>
            </div>
          </div>
        </div>

        {/* Compliance Disclaimer Footer */}
        <div className="bg-[#0A0B0D] border border-[#2A2E33] p-4 text-xs text-[#6B7178] font-body">
          <p>
            [Compliance note] All content on this page is general educational reference for laboratory professionals. BioScience Depot does not provide protocol design, experimental consultation, or guidance on any application of these compounds outside a controlled laboratory research setting.
          </p>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-4 pt-2 font-interface">
          <Button
            variant="amber"
            size="md"
            onClick={() => {
              if (setActiveTab) setActiveTab('catalogue');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span>Explore Research Products</span>
          </Button>

          <Button
            variant="outline"
            size="md"
            onClick={() => {
              if (setActiveTab) setActiveTab('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span>Contact Our Team</span>
          </Button>
        </div>
      </section>
    </motion.div>
  );
};
