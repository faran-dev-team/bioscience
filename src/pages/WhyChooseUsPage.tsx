import React from 'react';
import { motion } from 'framer-motion';
import { RUOComplianceStrip } from '../components/features/hero/RUOComplianceStrip';
import { Button } from '../components/ui/Button';
import {
  IconShieldCheck,
  IconBarChart,
  IconSnowflake,
  IconLock,
  IconFileText,
  IconCheckCircle,
  IconArrowRight,
  IconCpu
} from '../components/ui/Icons';

interface WhyChooseUsPageProps {
  setActiveTab: (tab: string) => void;
}

export const WhyChooseUsPage: React.FC<WhyChooseUsPageProps> = ({ setActiveTab }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="space-y-14 bg-[#0A0B0D] text-[#E8E6E1] font-body"
    >
      {/* HERO (PAGE 03) */}
      <section className="pt-12 pb-14 px-4 sm:px-6 lg:px-8 border-b border-[#2A2E33] bg-[#0E1012]">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-[11px] font-mono text-[#BE7A28] font-bold uppercase tracking-widest block">
            [ PAGE 03 — WHY CHOOSE US ]
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#E8E6E1]">
            Eight standards we do not trade against.
          </h1>
          <p className="text-sm sm:text-base text-[#B9BEC4] font-body leading-relaxed max-w-3xl">
            Most suppliers will tell you their products are high quality. This page describes what we actually do to make that statement true — and what we refuse to do to make it cheaper.
          </p>
        </div>
      </section>

      {/* Persistent RUO Compliance Strip */}
      <RUOComplianceStrip />

      {/* 8 UNCOMPROMISING STANDARDS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* 01 - Quality */}
        <div className="bg-[#16181B] border border-[#2A2E33] p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3 border-b border-[#2A2E33] pb-3">
            <span className="font-mono text-2xl font-bold text-[#BE7A28]">01</span>
            <h2 className="font-heading text-lg sm:text-xl font-bold text-[#E8E6E1] uppercase tracking-wide">
              Quality is a release decision, not a description
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#B9BEC4] leading-relaxed">
            The meaningful question about a supplier is not what purity they advertise. It is what happens when a lot arrives below it.
          </p>
          <p className="text-xs text-[#B9BEC4] leading-relaxed">
            At BioScience Depot, that lot does not enter inventory. It is not sold at a reduced grade, listed as a research-grade alternative, or combined with conforming material to bring an average within range. It is rejected against its written specification, and the rejection is recorded.
          </p>
          <div className="bg-[#0A0B0D] p-4 border border-[#2A2E33] space-y-2 text-xs text-[#B9BEC4]">
            <p className="text-[11px] font-mono text-[#BE7A28] uppercase font-bold">What this means in practice:</p>
            <ul className="space-y-1.5 list-disc list-inside">
              <li>Each catalogue compound has a written specification defining sequence, molecular formula, calculated mass, minimum purity, counter-ion, appearance, and moisture limits.</li>
              <li>Analytical results are compared to that specification as a pass/fail gate.</li>
              <li>Release is a documented decision made by a named individual, not an automatic consequence of arrival.</li>
              <li>Specifications are version-controlled. When a specification changes, the change is dated and recorded.</li>
            </ul>
          </div>
        </div>

        {/* 02 - Reliability */}
        <div className="bg-[#16181B] border border-[#2A2E33] p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3 border-b border-[#2A2E33] pb-3">
            <span className="font-mono text-2xl font-bold text-[#BE7A28]">02</span>
            <h2 className="font-heading text-lg sm:text-xl font-bold text-[#E8E6E1] uppercase tracking-wide">
              Predictability is the product
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#B9BEC4] leading-relaxed">
            A supplier who is excellent occasionally is not useful. Research programmes are planned in quarters, and a materials gap is a schedule gap.
          </p>
          <div className="bg-[#0A0B0D] p-4 border border-[#2A2E33] space-y-2 text-xs text-[#B9BEC4]">
            <p className="text-[11px] font-mono text-[#BE7A28] uppercase font-bold">How we build predictability:</p>
            <ul className="space-y-1.5 list-disc list-inside">
              <li><strong>Inventory depth on core compounds:</strong> We hold meaningful stock on catalogue items rather than operating on drop-ship timing.</li>
              <li><strong>Honest availability:</strong> Stock status on product pages reflects real, released inventory. Material in quarantine is not counted as available.</li>
              <li><strong>No silent substitution:</strong> If your compound is unavailable, we tell you and offer an expected date. We do not send something adjacent.</li>
              <li><strong>Scheduled resupply:</strong> Recurring requirements can be arranged in advance so that long studies are not exposed to ordering lag.</li>
              <li><strong>Communicated exceptions:</strong> If a shipment will be late, you are told before the delivery date, not after it.</li>
            </ul>
          </div>
        </div>

        {/* 03 - Scientific Precision */}
        <div className="bg-[#16181B] border border-[#2A2E33] p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3 border-b border-[#2A2E33] pb-3">
            <span className="font-mono text-2xl font-bold text-[#BE7A28]">03</span>
            <h2 className="font-heading text-lg sm:text-xl font-bold text-[#E8E6E1] uppercase tracking-wide">
              The numbers on the certificate mean something specific
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#B9BEC4] leading-relaxed">
            Analytical figures are only useful if the reader knows what generated them.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#B9BEC4]">
            <div className="bg-[#0A0B0D] p-3.5 border border-[#2A2E33] space-y-1">
              <span className="font-mono text-[#BE7A28] font-bold block">• RP-HPLC Purity</span>
              <span>Reported with detection wavelength and method basis, so the figure can be interpreted rather than assumed.</span>
            </div>
            <div className="bg-[#0A0B0D] p-3.5 border border-[#2A2E33] space-y-1">
              <span className="font-mono text-[#BE7A28] font-bold block">• Mass Spectrometry</span>
              <span>Reported as observed mass against calculated mass, confirming the molecular entity rather than merely retention time.</span>
            </div>
            <div className="bg-[#0A0B0D] p-3.5 border border-[#2A2E33] space-y-1">
              <span className="font-mono text-[#BE7A28] font-bold block">• Net Peptide Content</span>
              <span>Reported separately from gross vial weight, because concentration calculations built on gross weight are systematically wrong.</span>
            </div>
            <div className="bg-[#0A0B0D] p-3.5 border border-[#2A2E33] space-y-1">
              <span className="font-mono text-[#BE7A28] font-bold block">• Counter-ion & Moisture</span>
              <span>Acknowledged as real components of delivered mass rather than treated as rounding.</span>
            </div>
          </div>
          <p className="text-xs text-[#B9BEC4] italic">
            We publish this level of detail because researchers who care about precision will check it, and because researchers who do not yet know to check it deserve to be told.
          </p>
        </div>

        {/* 04 - Premium Standards */}
        <div className="bg-[#16181B] border border-[#2A2E33] p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3 border-b border-[#2A2E33] pb-3">
            <span className="font-mono text-2xl font-bold text-[#BE7A28]">04</span>
            <h2 className="font-heading text-lg sm:text-xl font-bold text-[#E8E6E1] uppercase tracking-wide">
              Premium is what survives the cold room
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#B9BEC4] leading-relaxed">
            Our packaging specification exists to protect material, and every element earns its place:
          </p>
          <ul className="space-y-2 text-xs text-[#B9BEC4] list-disc list-inside">
            <li><strong>Amber borosilicate glass vials:</strong> Chemically inert, low-extractable, and light-protective for photosensitive sequences.</li>
            <li><strong>Butyl rubber stoppers with aluminium crimp seals:</strong> A genuine closure system, not a friction cap that loosens under thermal cycling.</li>
            <li><strong>Tamper-evident sealing:</strong> Chain of custody is visible on receipt.</li>
            <li><strong>Nitrogen or inert headspace:</strong> Reducing oxidative exposure in the vial for susceptible sequences.</li>
            <li><strong>Cryogenic-rated labelling:</strong> Adhesive and print that survive freezer storage, frost, condensation, and gloved handling.</li>
            <li><strong>Legible label hierarchy:</strong> Compound, identifier, quantity, lot number, and storage condition, readable at arm’s length.</li>
            <li><strong>Insulated shipping with validated coolant loading:</strong> Sized to the transit window and the season, not to a single generic configuration.</li>
          </ul>
        </div>

        {/* 05 - Compliance */}
        <div className="bg-[#16181B] border border-[#2A2E33] p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3 border-b border-[#2A2E33] pb-3">
            <span className="font-mono text-2xl font-bold text-[#BE7A28]">05</span>
            <h2 className="font-heading text-lg sm:text-xl font-bold text-[#E8E6E1] uppercase tracking-wide">
              We hold the line, visibly
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#B9BEC4] leading-relaxed">
            Our compliance posture is a feature of the product, because it is what allows a serious institution to buy from us.
          </p>
          <ul className="space-y-2 text-xs text-[#B9BEC4] list-disc list-inside">
            <li>All products are supplied strictly for Research Use Only.</li>
            <li>We make no medical, therapeutic, diagnostic, clinical, or performance claims of any kind.</li>
            <li>We do not provide dosing, administration, or protocol guidance for any use outside laboratory research.</li>
            <li>Purchasers must confirm that they are 21 or older and that materials are intended for legitimate research.</li>
            <li>We decline orders where the intended application appears inconsistent with research use.</li>
            <li>Our labelling, our documentation, and our website language are reviewed against these commitments.</li>
          </ul>
        </div>

        {/* 06 - Packaging */}
        <div className="bg-[#16181B] border border-[#2A2E33] p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3 border-b border-[#2A2E33] pb-3">
            <span className="font-mono text-2xl font-bold text-[#BE7A28]">06</span>
            <h2 className="font-heading text-lg sm:text-xl font-bold text-[#E8E6E1] uppercase tracking-wide">
              Packed for the receiving dock you actually have
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#B9BEC4] leading-relaxed">
            Institutional receiving is a real-world environment: shipments arrive at reception, sit in a mail room, get signed for by someone who is not the researcher, and travel to the lab on an unpredictable schedule. We package for that reality:
          </p>
          <ul className="space-y-2 text-xs text-[#B9BEC4] list-disc list-inside">
            <li>Exterior labelling states contents type, storage requirement, and urgency of refrigeration in plain language.</li>
            <li>Insulated shipper and coolant configuration are selected for destination, service level, and season.</li>
            <li>Interior packing prevents vial movement and glass-to-glass contact under normal parcel handling.</li>
            <li>Documentation is included in the shipment and available digitally, so a mislaid paper certificate is a non-event.</li>
          </ul>
        </div>

        {/* 07 - Research Integrity */}
        <div className="bg-[#16181B] border border-[#2A2E33] p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3 border-b border-[#2A2E33] pb-3">
            <span className="font-mono text-2xl font-bold text-[#BE7A28]">07</span>
            <h2 className="font-heading text-lg sm:text-xl font-bold text-[#E8E6E1] uppercase tracking-wide">
              Traceability that reaches backwards
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#B9BEC4] leading-relaxed">
            If a result comes into question two years from now, the material used to produce it must be reconstructable. Every unit’s lot number resolves to:
          </p>
          <ul className="space-y-1.5 text-xs text-[#B9BEC4] list-disc list-inside">
            <li>the synthesis and manufacturing record for that lot</li>
            <li>the analytical results and Certificate of Analysis issued</li>
            <li>the date of receipt and the release decision</li>
            <li>storage location and monitored condition history</li>
            <li>the outbound shipment record and destination</li>
          </ul>
        </div>

        {/* 08 - Innovation */}
        <div className="bg-[#16181B] border border-[#2A2E33] p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3 border-b border-[#2A2E33] pb-3">
            <span className="font-mono text-2xl font-bold text-[#BE7A28]">08</span>
            <h2 className="font-heading text-lg sm:text-xl font-bold text-[#E8E6E1] uppercase tracking-wide">
              Investing in the parts that compound
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#B9BEC4] leading-relaxed">
            We are conservative about claims and ambitious about infrastructure. Current development priorities:
          </p>
          <ul className="space-y-2 text-xs text-[#B9BEC4] list-disc list-inside">
            <li><strong>Expanded analytical characterisation:</strong> Extending standard release panel and adding orthogonal methods.</li>
            <li><strong>Digital documentation infrastructure:</strong> Instant lot-number retrieval with structured data for electronic lab notebooks (ELN) and LIMS.</li>
            <li><strong>Cold-chain validation:</strong> Expanded temperature-excursion logging across transit networks.</li>
            <li><strong>Custom synthesis capability:</strong> Shorter qualification cycles for non-catalogue sequences and modifications.</li>
            <li><strong>Reference and educational material:</strong> Technical notes on handling, reconstitution, and stability developed with practising researchers.</li>
            <li><strong>Procurement integration:</strong> Punch-out catalogue and purchase-order workflows for institutional purchasing systems.</li>
          </ul>
        </div>

        {/* Closing CTAs */}
        <div className="flex flex-wrap items-center gap-4 pt-4 font-interface">
          <Button
            variant="amber"
            size="md"
            onClick={() => {
              setActiveTab('catalogue');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span>Explore Research Products</span>
          </Button>

          <Button
            variant="outline"
            size="md"
            onClick={() => {
              setActiveTab('contact');
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
