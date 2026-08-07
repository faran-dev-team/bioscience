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
    <section className="relative overflow-hidden pt-12 pb-14 bg-theme-canvas border-b border-theme transition-colors duration-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.2, 0, 0.2, 1] }}
          className="max-w-4xl space-y-6"
        >
          {/* Top Compliance Badge */}
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-theme-surface border border-theme text-[11px] font-mono text-theme-secondary transition-colors">
            <span className="w-1.5 h-1.5 bg-verified" />
            <span className="uppercase tracking-wider">UNITED STATES RESEARCH PEPTIDE SUPPLIER · AMERICAN QUALITY STANDARD</span>
          </div>

          {/* Final H1 Marketing Headline in Söhne Breit (NOT monospace) */}
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-theme-primary leading-[1.08] uppercase transition-colors">
            Research-grade peptides. <br />
            <span className="text-theme-primary">
              Held to a harder standard.
            </span>
          </h1>

          {/* Subheading in Söhne */}
          <p className="text-sm sm:text-base text-theme-secondary font-body leading-relaxed max-w-3xl transition-colors">
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
          <div className="bg-theme-surface border border-theme p-5 mt-6 space-y-3 transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-interface text-xs">
              <span className="text-theme-primary font-bold uppercase tracking-wider flex items-center gap-2">
                <IconShieldCheck size={16} amberAccent={true} />
                Instant Lot Retrieval & COA Engine
              </span>
              <span className="text-theme-muted text-[11px] font-mono">
                TRY SAMPLE:{' '}
                <strong
                  className="text-amber-hover cursor-pointer hover:underline"
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
                  className="w-full bg-theme-canvas border border-theme focus:border-theme-amber text-xs pl-3 pr-9 py-2.5 text-theme-primary placeholder-theme-muted uppercase tracking-wider focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-2.5 top-2.5 text-theme-muted hover:text-amber-hover transition-colors"
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
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-theme">
            <div>
              <span className="block font-mono font-bold text-theme-primary text-lg">≥ 99.0%</span>
              <span className="text-[11px] font-body uppercase text-theme-muted">HPLC (Area Normalised)</span>
            </div>
            <div>
              <span className="block font-mono font-bold text-theme-primary text-lg">-20 °C</span>
              <span className="text-[11px] font-body uppercase text-theme-muted">Validated Cold Chain</span>
            </div>
            <div>
              <span className="block font-mono font-bold text-theme-primary text-lg">100%</span>
              <span className="text-[11px] font-body uppercase text-theme-muted">Analytically Documented</span>
            </div>
            <div>
              <span className="block font-mono font-bold text-theme-primary text-lg">NET 30</span>
              <span className="text-[11px] font-body uppercase text-theme-muted">Institutional Accounts</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
