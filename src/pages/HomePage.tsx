import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RUOComplianceStrip } from '../components/features/hero/RUOComplianceStrip';
import { ProductGrid } from '../components/features/catalog/ProductGrid';
import { CATEGORIES_DATA } from '../data/categories';
import { HOMEPAGE_FAQS } from '../data/faqs';
import { Compound } from '../types/compound';
import {
  IconChevronDown,
  IconChevronUp,
  IconCpu,
  IconFileText,
  IconCheckCircle,
  IconArrowRight,
  IconShieldCheck,
  IconSnowflake,
  IconLock,
  IconBarChart
} from '../components/ui/Icons';
import { Button } from '../components/ui/Button';

interface HomePageProps {
  onSelectCompound: (compound: Compound) => void;
  onOpenLotLookup: (lotNum?: string) => void;
  onOpenSynthesis: () => void;
  setActiveTab: (tab: string) => void;
  onSelectCategory?: (categorySlug: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onSelectCompound,
  onOpenLotLookup,
  onOpenSynthesis,
  setActiveTab,
  onSelectCategory,
}) => {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const handleCategoryNav = (slug: string) => {
    if (onSelectCategory) {
      onSelectCategory(slug);
    } else {
      setActiveTab('catalogue');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="space-y-16 bg-[#0A0B0D] text-[#E8E6E1] font-body"
    >
      {/* 1. HERO SECTION (PAGE 01 - Page 1) */}
      <section className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-[#2A2E33] bg-[#0E1012]">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#BE7A28] rounded-full inline-block" />
            <span className="text-[11px] font-mono font-bold text-[#BE7A28] uppercase tracking-widest">
              RESEARCH USE ONLY · UNITED STATES DOMESTIC SUPPLY
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#E8E6E1] leading-tight">
            Research-grade peptides. Held to a harder standard.
          </h1>

          <p className="text-sm sm:text-base text-[#B9BEC4] font-body leading-relaxed max-w-3xl">
            BioScience Depot supplies high-purity research peptides to laboratories, universities, and biotechnology institutions across the United States. Every compound is synthesized to specification, analytically verified, and documented lot by lot — for research use only.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 font-interface">
            <Button
              variant="amber"
              size="lg"
              onClick={() => {
                setActiveTab('catalogue');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2"
            >
              <span>Explore Research Products</span>
              <IconArrowRight size={16} />
            </Button>

            <button
              onClick={() => {
                setActiveTab('quality');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-mono font-bold uppercase tracking-wider text-[#BE7A28] hover:underline inline-flex items-center gap-1.5 px-4 py-3"
            >
              <span>View Quality Standards</span>
              <IconArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* 2. PERSISTENT RUO COMPLIANCE STRIP */}
      <RUOComplianceStrip />

      {/* 3. SECTION 02 — SCIENTIFIC TRUST BAR (Page 2) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-[#16181B] border border-[#2A2E33] p-6 sm:p-8">
          <div className="space-y-1.5 border-b sm:border-b-0 sm:border-r border-[#2A2E33] pb-4 sm:pb-0 sm:pr-4">
            <div className="font-heading text-3xl sm:text-4xl font-bold text-[#BE7A28]">
              ≥99%
            </div>
            <div className="text-xs font-heading font-semibold text-[#E8E6E1] uppercase tracking-wider">
              Typical purity by HPLC
            </div>
            <p className="text-[11px] text-[#B9BEC4] leading-relaxed">
              on catalogue compounds
            </p>
          </div>

          <div className="space-y-1.5 border-b sm:border-b-0 lg:border-r border-[#2A2E33] pb-4 sm:pb-0 sm:pr-4">
            <div className="font-heading text-2xl sm:text-3xl font-bold text-[#E8E6E1]">
              Lot-Level
            </div>
            <div className="text-xs font-heading font-semibold text-[#E8E6E1] uppercase tracking-wider">
              Certificate of Analysis
            </div>
            <p className="text-[11px] text-[#B9BEC4] leading-relaxed">
              issued with every unit shipped
            </p>
          </div>

          <div className="space-y-1.5 border-b sm:border-b-0 sm:border-r border-[#2A2E33] pb-4 sm:pb-0 sm:pr-4">
            <div className="font-heading text-2xl sm:text-3xl font-bold text-[#E8E6E1]">
              Cold Chain
            </div>
            <div className="text-xs font-heading font-semibold text-[#E8E6E1] uppercase tracking-wider">
              Temperature-controlled
            </div>
            <p className="text-[11px] text-[#B9BEC4] leading-relaxed">
              handling from synthesis to dock
            </p>
          </div>

          <div className="space-y-1.5">
            <div className="font-heading text-2xl sm:text-3xl font-bold text-[#E8E6E1]">
              United States
            </div>
            <div className="text-xs font-heading font-semibold text-[#E8E6E1] uppercase tracking-wider">
              Domestic warehousing
            </div>
            <p className="text-[11px] text-[#B9BEC4] leading-relaxed">
              domestic fulfilment, domestic support
            </p>
          </div>
        </div>
      </section>

      {/* 4. SECTION 03 — POSITIONING STATEMENT (Pages 2-3) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-2">
          <span className="text-[11px] font-mono text-[#BE7A28] font-bold uppercase tracking-widest block">
            [ POSITIONING STATEMENT ]
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#E8E6E1] uppercase tracking-wide">
            Precision is not a feature. It is the entire product.
          </h2>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-[#B9BEC4] font-body leading-relaxed">
          <p>
            A research peptide is a variable in someone’s experiment. If the compound is impure, mis-sequenced, degraded in transit, or inadequately documented, the experiment does not simply underperform — it produces a result that looks real and is not. Bad material does not announce itself. It contaminates conclusions quietly, and it does so months before anyone notices.
          </p>
          <p className="text-[#E8E6E1] font-semibold">
            BioScience Depot was built around that single risk.
          </p>
          <p>
            We do not compete on catalogue breadth or on price. We compete on the one attribute that determines whether a research material is worth using at all: whether what is printed on the vial is what is inside the vial, at the stated purity, in the stated quantity, in the stated condition — and whether we can prove it.
          </p>
          <p>
            Everything downstream of that — the synthesis partners we qualify, the analytical panel we run, the packaging we specify, the way we hold inventory, the documentation we issue — exists to protect the integrity of your data.
          </p>
        </div>

        <div className="pt-2">
          <button
            onClick={() => {
              setActiveTab('quality');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs font-mono font-bold uppercase text-[#BE7A28] hover:underline inline-flex items-center gap-1.5"
          >
            <span>Learn how we verify every lot</span>
            <IconArrowRight size={13} />
          </button>
        </div>
      </section>

      {/* 5. SECTION 04 — WHY BIOSCIENCE DEPOT (Pages 3-4) */}
      <section className="bg-[#111315] border-y border-[#2A2E33] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-[11px] font-mono text-[#BE7A28] font-bold uppercase tracking-widest block">
              [ SIX CORE PRINCIPLES ]
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#E8E6E1] uppercase tracking-wide">
              Six reasons research teams standardise on us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-body text-xs">
            {/* Reason 1 */}
            <div className="bg-[#16181B] border border-[#2A2E33] p-6 space-y-2.5">
              <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase tracking-wider flex items-center gap-2">
                <IconBarChart size={16} amberAccent={true} />
                <span>Verified identity and purity, per lot</span>
              </h3>
              <p className="text-[#B9BEC4] leading-relaxed">
                Every lot is characterised by reversed-phase HPLC and mass spectrometry before release. Purity and mass confirmation are reported on the Certificate of Analysis that accompanies the shipment. No lot ships without documentation.
              </p>
            </div>

            {/* Reason 2 */}
            <div className="bg-[#16181B] border border-[#2A2E33] p-6 space-y-2.5">
              <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase tracking-wider flex items-center gap-2">
                <IconCheckCircle size={16} amberAccent={true} />
                <span>Reproducibility across reorders</span>
              </h3>
              <p className="text-[#B9BEC4] leading-relaxed">
                Research is longitudinal. A compound that varies between orders is a compound you cannot build a study on. We maintain qualified sourcing, controlled specifications, and lot traceability so that the material you receive in month eleven behaves like the material you received in month one.
              </p>
            </div>

            {/* Reason 3 */}
            <div className="bg-[#16181B] border border-[#2A2E33] p-6 space-y-2.5">
              <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase tracking-wider flex items-center gap-2">
                <IconSnowflake size={16} amberAccent={true} />
                <span>Cold chain that is actually a chain</span>
              </h3>
              <p className="text-[#B9BEC4] leading-relaxed">
                Lyophilised peptides are stable, but they are not indifferent. Our material is held under temperature control, packed with validated insulation and coolant for the transit duration, and released to carriers on a schedule designed to avoid weekend warehouse dwell.
              </p>
            </div>

            {/* Reason 4 */}
            <div className="bg-[#16181B] border border-[#2A2E33] p-6 space-y-2.5">
              <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase tracking-wider flex items-center gap-2">
                <IconFileText size={16} amberAccent={true} />
                <span>Documentation built for procurement and audit</span>
              </h3>
              <p className="text-[#B9BEC4] leading-relaxed">
                Certificates of Analysis, lot numbers, storage and handling guidance, and safety documentation are issued as standard — not on request, not for an additional fee. Institutional purchasing departments and internal audit functions are supported without friction.
              </p>
            </div>

            {/* Reason 5 */}
            <div className="bg-[#16181B] border border-[#2A2E33] p-6 space-y-2.5">
              <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase tracking-wider flex items-center gap-2">
                <IconShieldCheck size={16} amberAccent={true} />
                <span>Packaging specified for the laboratory bench</span>
              </h3>
              <p className="text-[#B9BEC4] leading-relaxed">
                Amber borosilicate vials. Butyl stoppers with aluminium crimp seals. Tamper-evident closure. Legible, chemically resistant labelling that survives a cold room, a glove, and a marker. Packaging is not presentation. It is preservation.
              </p>
            </div>

            {/* Reason 6 */}
            <div className="bg-[#16181B] border border-[#2A2E33] p-6 space-y-2.5">
              <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase tracking-wider flex items-center gap-2">
                <IconLock size={16} amberAccent={true} />
                <span>Support staffed by people who understand the question</span>
              </h3>
              <p className="text-[#B9BEC4] leading-relaxed">
                Technical enquiries are answered by personnel who can discuss reconstitution volumes, storage intervals, solubility characteristics, and documentation requirements — within the boundaries of laboratory research, and without offering guidance on any use outside it.
              </p>
            </div>
          </div>

          <div className="pt-2">
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
          </div>
        </div>
      </section>

      {/* 6. SECTION 05 — FEATURED RESEARCH CATEGORIES (Page 4) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-3xl space-y-2">
          <span className="text-[11px] font-mono text-[#BE7A28] font-bold uppercase tracking-widest block">
            [ RESEARCH CATEGORIES ]
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#E8E6E1] uppercase tracking-wide">
            Compound categories
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES_DATA.map(category => (
            <div
              key={category.slug}
              className="bg-[#16181B] border border-[#2A2E33] p-6 flex flex-col justify-between space-y-4 hover:border-[#BE7A28] transition-colors group cursor-pointer"
              onClick={() => handleCategoryNav(category.slug)}
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#BE7A28] uppercase font-bold tracking-wider">
                    SPECIFICATION COMPLIANT
                  </span>
                  <IconArrowRight size={14} className="text-[#6B7178] group-hover:text-[#BE7A28] transition-colors" />
                </div>
                <h3 className="font-heading font-bold text-base text-[#E8E6E1] group-hover:text-[#BE7A28] transition-colors uppercase tracking-wider">
                  {category.title}
                </h3>
                <p className="text-xs text-[#B9BEC4] font-body leading-relaxed">
                  {category.shortDesc}
                </p>
              </div>

              <div className="pt-2 border-t border-[#2A2E33] flex items-center justify-between text-xs font-mono font-bold text-[#BE7A28]">
                <span>Browse Category</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#111315] border border-[#2A2E33] p-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-body text-[#B9BEC4]">
          <p>
            All categories are supplied strictly for laboratory research. Availability, specification, and lot documentation are listed on each product page.
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setActiveTab('catalogue');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex-shrink-0"
          >
            <span>View Research Collection</span>
          </Button>
        </div>
      </section>

      {/* CORE PRODUCT CATALOGUE PREVIEW */}
      <ProductGrid
        onSelectCompound={onSelectCompound}
        onOpenLotLookup={onOpenLotLookup}
      />

      {/* 7. SECTION 06 — QUALITY STANDARDS (Pages 4-5) */}
      <section className="bg-[#111315] border-y border-[#2A2E33] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="space-y-2">
            <span className="text-[11px] font-mono text-[#BE7A28] font-bold uppercase tracking-widest block">
              [ MEASURABLE STANDARDS ]
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#E8E6E1] uppercase tracking-wide">
              What "premium" means when it is measurable
            </h2>
            <p className="text-xs sm:text-sm text-[#B9BEC4] font-body">
              The word premium is used loosely in this industry. We use it to mean four specific, verifiable things.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-body text-xs">
            <div className="bg-[#16181B] border border-[#2A2E33] p-6 space-y-2.5">
              <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase tracking-wider">
                Specification before synthesis
              </h3>
              <p className="text-[#B9BEC4] leading-relaxed">
                Each compound is defined by a written specification: sequence, molecular formula, calculated mass, net peptide content where applicable, minimum purity threshold, counter-ion, appearance, and acceptable moisture range. Manufacturing is qualified against that document, not against a conversation.
              </p>
            </div>

            <div className="bg-[#16181B] border border-[#2A2E33] p-6 space-y-2.5">
              <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase tracking-wider">
                Analytical release, not analytical sampling
              </h3>
              <p className="text-[#B9BEC4] leading-relaxed">
                Purity and identity are confirmed at the lot level. A lot that does not meet the release threshold is not sold at a discount, is not reclassified, and is not blended. It is rejected.
              </p>
            </div>

            <div className="bg-[#16181B] border border-[#2A2E33] p-6 space-y-2.5">
              <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase tracking-wider">
                Controlled environment from receipt to release
              </h3>
              <p className="text-[#B9BEC4] leading-relaxed">
                Incoming material is quarantined pending documentation review, then held under controlled temperature, humidity, and light conditions. Storage areas are monitored, and monitoring is logged.
              </p>
            </div>

            <div className="bg-[#16181B] border border-[#2A2E33] p-6 space-y-2.5">
              <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase tracking-wider">
                Traceability that reaches backwards
              </h3>
              <p className="text-[#B9BEC4] leading-relaxed">
                Every unit carries a lot number that resolves to a synthesis record, an analytical certificate, a receipt date, storage history, and an outbound shipment record. If you need to reconstruct the history of a vial two years after the fact, the record exists.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setActiveTab('quality');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-mono font-bold uppercase text-[#BE7A28] hover:underline inline-flex items-center gap-1.5"
            >
              <span>Read the full Quality Assurance overview</span>
              <IconArrowRight size={13} />
            </button>
          </div>
        </div>
      </section>

      {/* 8. SECTION 07 — THE SCIENTIFIC PROCESS (Pages 5-6) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-3xl space-y-2">
          <span className="text-[11px] font-mono text-[#BE7A28] font-bold uppercase tracking-widest block">
            [ FIVE-STEP PROTOCOL ]
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#E8E6E1] uppercase tracking-wide">
            From sequence to shipment
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 font-body text-xs">
          <div className="bg-[#16181B] border border-[#2A2E33] p-5 space-y-2">
            <div className="font-mono text-xl font-bold text-[#BE7A28]">01</div>
            <h3 className="font-heading font-bold text-xs uppercase text-[#E8E6E1]">Qualification</h3>
            <p className="text-[#B9BEC4] leading-relaxed text-[11px]">
              Manufacturing partners are assessed on facility controls, analytical capability, documentation practice, and consistency across trial lots before a single compound is listed.
            </p>
          </div>

          <div className="bg-[#16181B] border border-[#2A2E33] p-5 space-y-2">
            <div className="font-mono text-xl font-bold text-[#BE7A28]">02</div>
            <h3 className="font-heading font-bold text-xs uppercase text-[#E8E6E1]">Synthesis</h3>
            <p className="text-[#B9BEC4] leading-relaxed text-[11px]">
              Compounds are produced against a written specification using established solid-phase or solution-phase methodology appropriate to the sequence, with in-process controls.
            </p>
          </div>

          <div className="bg-[#16181B] border border-[#2A2E33] p-5 space-y-2">
            <div className="font-mono text-xl font-bold text-[#BE7A28]">03</div>
            <h3 className="font-heading font-bold text-xs uppercase text-[#E8E6E1]">Purification</h3>
            <p className="text-[#B9BEC4] leading-relaxed text-[11px]">
              Crude material is purified by preparative chromatography to the specified threshold, then lyophilised to a stable, low-moisture solid.
            </p>
          </div>

          <div className="bg-[#16181B] border border-[#2A2E33] p-5 space-y-2">
            <div className="font-mono text-xl font-bold text-[#BE7A28]">04</div>
            <h3 className="font-heading font-bold text-xs uppercase text-[#E8E6E1]">Verification</h3>
            <p className="text-[#B9BEC4] leading-relaxed text-[11px]">
              Identity and purity are confirmed. Results are recorded against the lot and issued as a Certificate of Analysis.
            </p>
          </div>

          <div className="bg-[#16181B] border border-[#2A2E33] p-5 space-y-2">
            <div className="font-mono text-xl font-bold text-[#BE7A28]">05</div>
            <h3 className="font-heading font-bold text-xs uppercase text-[#E8E6E1]">Fulfilment</h3>
            <p className="text-[#B9BEC4] leading-relaxed text-[11px]">
              Verified lots enter temperature-controlled inventory, are picked into insulated packaging with coolant, and ship with complete documentation.
            </p>
          </div>
        </div>
      </section>

      {/* 9. SECTION 08 — RESEARCH PHILOSOPHY (Page 6) */}
      <section className="bg-[#0E1012] border-y border-[#2A2E33] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="space-y-2">
            <span className="text-[11px] font-mono text-[#BE7A28] font-bold uppercase tracking-widest block">
              [ RESEARCH PHILOSOPHY ]
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#E8E6E1] uppercase tracking-wide">
              We supply the constant, so you can study the variable.
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-[#B9BEC4] font-body leading-relaxed">
            <p>
              Research is the disciplined isolation of one variable at a time. Every uncontrolled input in an experiment is a competing explanation for the result — and a supplier is an input.
            </p>
            <p>
              We think the correct posture for a research materials company is a modest one. Our material should be the least interesting thing in your protocol. It should arrive when we said, at the purity we stated, in the condition we specified, with the paperwork already complete, and it should not require a phone call.
            </p>
            <p className="text-[#E8E6E1] font-semibold">
              That is the ambition: to be unremarkable in the specific way that scientific infrastructure is unremarkable when it is working. Reliable enough to stop thinking about.
            </p>
          </div>
        </div>
      </section>

      {/* 10. SECTION 09 — LABORATORY EXCELLENCE (Pages 6-7) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-3xl space-y-2">
          <span className="text-[11px] font-mono text-[#BE7A28] font-bold uppercase tracking-widest block">
            [ OPERATIONAL DISCIPLINE ]
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#E8E6E1] uppercase tracking-wide">
            Built for the way laboratories actually operate
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-body text-xs">
          <div className="bg-[#16181B] border border-[#2A2E33] p-6 space-y-2.5">
            <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase tracking-wider">
              Procurement
            </h3>
            <p className="text-[#B9BEC4] leading-relaxed">
              Institutional purchase orders, W-9 documentation, quotations valid for defined periods, and consolidated invoicing for multi-line orders. Recurring requirements can be scheduled.
            </p>
          </div>

          <div className="bg-[#16181B] border border-[#2A2E33] p-6 space-y-2.5">
            <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase tracking-wider">
              Receiving
            </h3>
            <p className="text-[#B9BEC4] leading-relaxed">
              Shipments are labelled with contents, lot numbers, storage requirements, and handling instructions on the exterior, so cold-chain material is not left on a mail-room shelf.
            </p>
          </div>

          <div className="bg-[#16181B] border border-[#2A2E33] p-6 space-y-2.5">
            <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase tracking-wider">
              Bench
            </h3>
            <p className="text-[#B9BEC4] leading-relaxed">
              Vials are labelled with compound name, sequence identifier, quantity, lot, and storage condition in a typeface that remains legible after frost and handling.
            </p>
          </div>

          <div className="bg-[#16181B] border border-[#2A2E33] p-6 space-y-2.5">
            <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase tracking-wider">
              Records
            </h3>
            <p className="text-[#B9BEC4] leading-relaxed">
              Digital Certificates of Analysis are retrievable by lot number at any time, so documentation can be attached to notebooks, grant reporting, and internal audit files without contacting us.
            </p>
          </div>
        </div>

        <div className="pt-2">
          <Button
            variant="amber"
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

      {/* 11. SECTION 10 — EDUCATIONAL SECTION (Pages 7-8) */}
      <section className="bg-[#111315] border-y border-[#2A2E33] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-[11px] font-mono text-[#BE7A28] font-bold uppercase tracking-widest block">
              [ TECHNICAL REFERENCE ]
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#E8E6E1] uppercase tracking-wide">
              Research information, written plainly
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-body text-xs">
            <div className="bg-[#16181B] border border-[#2A2E33] p-6 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase tracking-wider">
                  Handling and reconstitution
                </h3>
                <p className="text-[#B9BEC4] leading-relaxed">
                  General laboratory practice for bringing lyophilised peptides into solution, including solvent selection considerations, volume calculation, and aseptic technique.
                </p>
              </div>
              <button
                onClick={() => {
                  setActiveTab('research');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs font-mono font-bold text-[#BE7A28] hover:underline text-left"
              >
                Learn More →
              </button>
            </div>

            <div className="bg-[#16181B] border border-[#2A2E33] p-6 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase tracking-wider">
                  Storage and stability
                </h3>
                <p className="text-[#B9BEC4] leading-relaxed">
                  How temperature, moisture, light, and freeze-thaw cycling affect peptide integrity, and what that means for short- and long-term storage planning.
                </p>
              </div>
              <button
                onClick={() => {
                  setActiveTab('research');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs font-mono font-bold text-[#BE7A28] hover:underline text-left"
              >
                Learn More →
              </button>
            </div>

            <div className="bg-[#16181B] border border-[#2A2E33] p-6 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase tracking-wider">
                  Documentation and interpretation
                </h3>
                <p className="text-[#B9BEC4] leading-relaxed">
                  How to read a Certificate of Analysis: purity by HPLC, mass confirmation, net peptide content, counter-ion content, and what each figure does and does not tell you.
                </p>
              </div>
              <button
                onClick={() => {
                  setActiveTab('research');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs font-mono font-bold text-[#BE7A28] hover:underline text-left"
              >
                Learn More →
              </button>
            </div>
          </div>

          <div className="bg-[#0A0B0D] border border-[#2A2E33] p-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-body text-[#B9BEC4]">
            <p>
              Educational content is provided for general laboratory reference only. It is not protocol guidance, and it is not advice regarding any use of these materials outside a controlled research setting.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setActiveTab('research');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex-shrink-0"
            >
              <span>Explore Scientific Resources</span>
            </Button>
          </div>
        </div>
      </section>

      {/* 12. SECTION 11 — HOME PAGE FAQ (Pages 7-8) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-2 text-center sm:text-left">
          <span className="text-[11px] font-mono text-[#BE7A28] font-bold uppercase tracking-widest block">
            [ COMMON INQUIRIES ]
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#E8E6E1] uppercase tracking-wide">
            Frequently asked
          </h2>
        </div>

        <div className="space-y-2.5 font-interface text-xs">
          {HOMEPAGE_FAQS.map(faq => {
            const isOpen = openFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-[#16181B] border border-[#2A2E33] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-4 text-left font-semibold text-[#E8E6E1] uppercase tracking-wide flex justify-between items-center hover:text-[#BE7A28] transition-colors"
                >
                  <span className="pr-4">{faq.num}. {faq.question}</span>
                  {isOpen ? (
                    <IconChevronUp size={16} className="text-[#BE7A28] flex-shrink-0" />
                  ) : (
                    <IconChevronDown size={16} className="text-[#6B7178] flex-shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-4 pb-4 font-body text-xs text-[#B9BEC4] border-t border-[#2A2E33] pt-3 leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        <div className="pt-2 text-center sm:text-left">
          <button
            onClick={() => {
              setActiveTab('faqs');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs font-mono font-bold uppercase text-[#BE7A28] hover:underline inline-flex items-center gap-1.5"
          >
            <span>Read all frequently asked questions (50)</span>
            <IconArrowRight size={13} />
          </button>
        </div>
      </section>

      {/* 13. SECTION 12 — CLOSING STATEMENT (Page 8) */}
      <section className="bg-[#111315] border-t border-[#2A2E33] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          <span className="text-[11px] font-mono text-[#BE7A28] font-bold uppercase tracking-widest block">
            [ OUR COMMITMENT ]
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#E8E6E1] uppercase tracking-wider">
            Standards, then scale.
          </h2>

          <p className="text-xs sm:text-sm text-[#B9BEC4] font-body leading-relaxed max-w-2xl mx-auto">
            BioScience Depot is an American company building a long institution in a category that has too often rewarded shortcuts. We would rather list fewer compounds and stand behind every one of them.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 font-interface">
            <Button
              variant="amber"
              size="lg"
              onClick={() => {
                setActiveTab('catalogue');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <span>Explore Research Products</span>
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                setActiveTab('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <span>Contact Our Team</span>
            </Button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
