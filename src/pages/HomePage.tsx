import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HeroSection } from '../components/features/hero/HeroSection';
import { ProductGrid } from '../components/features/catalog/ProductGrid';
import { QualityProcessTimeline } from '../components/features/quality/QualityProcessTimeline';
import { FAQS_DATA } from '../data/faqs';
import { Compound } from '../types/compound';
import { ChevronDown, ChevronUp, Cpu, FileText, CheckCircle2 } from 'lucide-react';
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
      transition={{ duration: 0.3 }}
      className="space-y-12"
    >
      {/* Hero Section */}
      <HeroSection
        onExploreClick={() => setActiveTab('catalogue')}
        onLotVerifyClick={onOpenLotLookup}
        onSynthesisClick={onOpenSynthesis}
      />

      {/* Featured Catalogue Grid */}
      <ProductGrid
        onSelectCompound={onSelectCompound}
        onOpenLotLookup={onOpenLotLookup}
      />

      {/* Scientific Process Timeline */}
      <QualityProcessTimeline />

      {/* Educational & Synthesis Banner */}
      <section className="bg-theme-surface border-y border-theme py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center font-mono">
          <div className="space-y-4">
            <span className="text-xs text-amber-500 font-bold uppercase tracking-widest block">
              [ CUSTOM PEPTIDE SYNTHESIS ]
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-theme-primary uppercase tracking-wider">
              Need a Custom Amino Acid Sequence?
            </h2>
            <p className="text-xs text-theme-secondary font-sans leading-relaxed">
              We synthesize custom peptide sequences up to 90 residues with modifications including N-terminal acetylation, C-terminal amidation, biotinylation, fluorophore labeling, and counter-ion salt exchange (TFA or Acetate).
            </p>
            <Button variant="amber" size="lg" onClick={onOpenSynthesis} className="flex items-center gap-2">
              <Cpu className="w-4 h-4" /> BUILD CUSTOM SYNTHESIS SPECIFICATION →
            </Button>
          </div>

          <div className="bg-theme-bg p-6 border border-amber-500/30 space-y-4">
            <div className="flex items-center gap-2 text-amber-500 font-bold text-sm uppercase">
              <FileText className="w-5 h-5 text-amber-500" />
              IN-HOUSE ANALYTICAL INSTRUMENTATION
            </div>
            <ul className="space-y-2 text-xs text-theme-secondary">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Agilent 1260 Infinity II HPLC System (Area Normalised @ 214/220 nm)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Thermo Scientific Single Quadrupole ESI Mass Spectrometer
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Metrohm 899 Coulometric Karl Fischer Titrator
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8 font-sans">
        <div className="text-center space-y-2 font-mono">
          <span className="text-xs text-amber-500 font-bold uppercase tracking-widest block">
            [ FREQUENTLY ASKED QUESTIONS ]
          </span>
          <h2 className="text-2xl font-bold text-theme-primary uppercase tracking-wider">
            Operational & Procurement Inquiry
          </h2>
        </div>

        <div className="space-y-3 font-mono text-xs">
          {FAQS_DATA.map(faq => {
            const isOpen = openFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-theme-surface border border-theme overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-4 text-left font-bold text-theme-primary uppercase tracking-wide flex justify-between items-center hover:text-amber-500 transition-colors"
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-amber-500" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-theme-muted" />
                  )}
                </button>

                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-4 pb-4 font-sans text-xs text-theme-secondary border-t border-theme pt-3 leading-relaxed"
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
