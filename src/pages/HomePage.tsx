import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HeroSection } from '../components/features/hero/HeroSection';
import { RUOComplianceStrip } from '../components/features/hero/RUOComplianceStrip';
import { ProductGrid } from '../components/features/catalog/ProductGrid';
import { QualityProcessTimeline } from '../components/features/quality/QualityProcessTimeline';
import { FAQS_DATA } from '../data/faqs';
import { Compound } from '../types/compound';
import {
  IconChevronDown,
  IconChevronUp,
  IconCpu,
  IconFileText,
  IconCheckCircle
} from '../components/ui/Icons';
import { Button } from '../components/ui/Button';

interface HomePageProps {
  onSelectCompound: (compound: Compound) => void;
  onOpenLotLookup: (lotNum?: string) => void;
  onOpenSynthesis: () => void;
  setActiveTab: (tab: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onSelectCompound,
  onOpenLotLookup,
  onOpenSynthesis,
  setActiveTab,
}) => {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
      className="space-y-12 bg-[#0A0B0D]"
    >
      {/* 1. Homepage Hero with exact H1 and CTAs */}
      <HeroSection
        onExploreClick={() => setActiveTab('catalogue')}
        onQualityClick={() => setActiveTab('quality')}
        onLotVerifyClick={onOpenLotLookup}
        onSynthesisClick={onOpenSynthesis}
      />

      {/* 2. Mandatory Research Use Only Strip immediately below Hero */}
      <RUOComplianceStrip />

      {/* 3. Featured Products Catalogue Grid */}
      <ProductGrid
        onSelectCompound={onSelectCompound}
        onOpenLotLookup={onOpenLotLookup}
      />

      {/* 4. Scientific Process Timeline */}
      <QualityProcessTimeline />

      {/* 5. Educational & Custom Synthesis Specification Section */}
      <section className="bg-[#16181B] border-y border-[#2A2E33] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-[11px] font-mono text-[#BE7A28] font-bold uppercase tracking-widest block">
              [ CUSTOM PEPTIDE SYNTHESIS ]
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#E8E6E1] uppercase tracking-wider">
              Need a Custom Amino Acid Sequence?
            </h2>
            <p className="text-xs text-[#B9BEC4] font-body leading-relaxed">
              We synthesize custom peptide sequences up to 90 residues with modifications including N-terminal acetylation, C-terminal amidation, biotinylation, fluorophore labeling, and counter-ion salt exchange (TFA or Acetate).
            </p>
            <div className="pt-2 font-interface">
              <Button
                variant="amber"
                size="md"
                onClick={onOpenSynthesis}
                className="flex items-center gap-2"
              >
                <IconCpu size={15} />
                <span>Build Custom Synthesis Specification →</span>
              </Button>
            </div>
          </div>

          <div className="bg-[#0A0B0D] p-6 border border-[#2A2E33] space-y-4">
            <div className="flex items-center gap-2 text-[#E8E6E1] font-heading font-bold text-xs uppercase tracking-wider border-b border-[#2A2E33] pb-2">
              <IconFileText size={16} amberAccent={true} />
              In-House Analytical Instrumentation
            </div>
            <ul className="space-y-2.5 text-xs text-[#B9BEC4] font-body">
              <li className="flex items-start gap-2">
                <IconCheckCircle size={15} className="text-[#3F6B4E] flex-shrink-0 mt-0.5" />
                <span>Agilent 1260 Infinity II HPLC System (Area Normalised @ 214/220 nm)</span>
              </li>
              <li className="flex items-start gap-2">
                <IconCheckCircle size={15} className="text-[#3F6B4E] flex-shrink-0 mt-0.5" />
                <span>Thermo Scientific Single Quadrupole ESI Mass Spectrometer</span>
              </li>
              <li className="flex items-start gap-2">
                <IconCheckCircle size={15} className="text-[#3F6B4E] flex-shrink-0 mt-0.5" />
                <span>Metrohm 899 Coulometric Karl Fischer Titrator (Water Content Determination)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 6. Frequently Asked Questions Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <span className="text-[11px] font-mono text-[#BE7A28] font-bold uppercase tracking-widest block">
            [ FREQUENTLY ASKED QUESTIONS ]
          </span>
          <h2 className="font-heading text-2xl font-bold text-[#E8E6E1] uppercase tracking-wider">
            Operational & Procurement Inquiries
          </h2>
        </div>

        <div className="space-y-2 font-interface text-xs">
          {FAQS_DATA.map(faq => {
            const isOpen = openFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-[#16181B] border border-[#2A2E33] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-4 text-left font-semibold text-[#E8E6E1] uppercase tracking-wide flex justify-between items-center hover:text-[#E3A455] transition-colors"
                >
                  <span className="pr-4">{faq.question}</span>
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
      </section>
    </motion.div>
  );
};
