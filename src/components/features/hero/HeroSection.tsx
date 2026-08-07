import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../ui/Button';
import {
  IconSearch,
  IconShieldCheck,
  IconArrowRight,
  IconFileText
} from '../../ui/Icons';

interface HeroSectionProps {
  onExploreClick: () => void;
  onQualityClick: () => void;
  onLotVerifyClick: (lotNum: string) => void;
  onSynthesisClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onQualityClick,
  onLotVerifyClick,
}) => {
  const [heroLot, setHeroLot] = useState('');

  const handleHeroLotSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (heroLot.trim()) {
      onLotVerifyClick(heroLot.trim().toUpperCase());
    } else {
      onLotVerifyClick('LOT 24-0817-C');
    }
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-14 bg-[#0A0B0D] border-b border-[#2A2E33]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.2, 0, 0.2, 1] }}
          className="max-w-4xl space-y-6"
        >
          {/* Top Compliance Badge */}
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#16181B] border border-[#2A2E33] text-[11px] font-mono text-[#B9BEC4]">
            <span className="w-1.5 h-1.5 bg-[#3F6B4E]" />
            <span className="uppercase tracking-wider">UNITED STATES RESEARCH PEPTIDE SUPPLIER · AMERICAN QUALITY STANDARD</span>
          </div>

          {/* Final H1 Marketing Headline in Söhne Breit (NOT monospace) */}
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#E8E6E1] leading-[1.08] uppercase">
            Research-grade peptides. <br />
            <span className="text-[#E8E6E1]">
              Held to a harder standard.
            </span>
          </h1>

          {/* Subheading in Söhne */}
          <p className="text-sm sm:text-base text-[#B9BEC4] font-body leading-relaxed max-w-3xl">
            BioScience Depot supplies high-purity research peptides to laboratories, universities, and biotech institutions across the United States. Every lot is released against a written specification and backed by lot-specific HPLC and mass spectrometry documentation.
          </p>

          {/* Correct CTAs from content document */}
          <div className="flex flex-wrap items-center gap-3 pt-2 font-interface">
            <Button
              variant="amber"
              size="lg"
              onClick={onExploreClick}
              className="flex items-center gap-2"
            >
              <span>Explore Research Products</span>
              <IconArrowRight size={15} />
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={onQualityClick}
              className="flex items-center gap-2"
            >
              <span>View Quality Standards</span>
            </Button>
          </div>

          {/* Instant Lot Lookup HUD Box (Restrained Reagent Amber, 0px radius, 1px border, Söhne Mono lot code) */}
          <div className="bg-[#16181B] border border-[#2A2E33] p-5 mt-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-interface text-xs">
              <span className="text-[#E8E6E1] font-bold uppercase tracking-wider flex items-center gap-2">
                <IconShieldCheck size={16} amberAccent={true} />
                Instant Lot Retrieval & COA Engine
              </span>
              <span className="text-[#6B7178] text-[11px] font-mono">
                TRY SAMPLE:{' '}
                <strong
                  className="text-[#E3A455] cursor-pointer hover:underline"
                  onClick={() => setHeroLot('LOT 24-0817-C')}
                >
                  LOT 24-0817-C
                </strong>
              </span>
            </div>

            <form onSubmit={handleHeroLotSubmit} className="flex flex-col sm:flex-row gap-2 font-mono text-xs">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="ENTER VIAL LOT NUMBER (e.g. LOT 24-0817-C)..."
                  value={heroLot}
                  onChange={e => setHeroLot(e.target.value)}
                  className="w-full bg-[#0A0B0D] border border-[#2A2E33] focus:border-[#BE7A28] text-xs pl-3 pr-9 py-2.5 text-[#E8E6E1] placeholder-[#6B7178] uppercase tracking-wider focus:outline-none"
                />
                <button
                  type="submit"
                  className="absolute right-2.5 top-2.5 text-[#6B7178] hover:text-[#E3A455] transition-colors"
                  title="Verify Lot"
                >
                  <IconSearch size={15} />
                </button>
              </div>
              <Button
                variant="primary"
                size="md"
                type="submit"
                className="flex items-center justify-center gap-2"
              >
                <IconFileText size={14} />
                <span>Verify Lot & View COA</span>
              </Button>
            </form>
          </div>

          {/* Trust Metrics Bar (Numbers in Söhne Mono, labels in Söhne/Inter) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#2A2E33]">
            <div>
              <span className="block font-mono font-bold text-[#E8E6E1] text-lg">≥ 99.0%</span>
              <span className="text-[11px] font-body uppercase text-[#6B7178]">HPLC (Area Normalised)</span>
            </div>
            <div>
              <span className="block font-mono font-bold text-[#E8E6E1] text-lg">-20 °C</span>
              <span className="text-[11px] font-body uppercase text-[#6B7178]">Validated Cold Chain</span>
            </div>
            <div>
              <span className="block font-mono font-bold text-[#E8E6E1] text-lg">100%</span>
              <span className="text-[11px] font-body uppercase text-[#6B7178]">Analytically Documented</span>
            </div>
            <div>
              <span className="block font-mono font-bold text-[#E8E6E1] text-lg">NET 30</span>
              <span className="text-[11px] font-body uppercase text-[#6B7178]">Institutional Accounts</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
