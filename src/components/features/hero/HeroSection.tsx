import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../ui/Button';
import { ShieldCheck, Search, Cpu, ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
  onLotVerifyClick: (lotNum: string) => void;
  onSynthesisClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onLotVerifyClick,
  onSynthesisClick,
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
    <section className="relative overflow-hidden pt-12 pb-16 border-b border-theme bg-theme-surface transition-colors duration-140">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(#F59E0B 1px, transparent 1px), radial-gradient(#F59E0B 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.2, 0, 0.2, 1] }}
          className="max-w-3xl space-y-6"
        >
          {/* Top Compliance Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-500 font-mono text-xs uppercase tracking-widest font-semibold">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            UNITED STATES RESEARCH PEPTIDE SUPPLIER — AMERICAN QUALITY STANDARD
          </div>

          {/* Main Headline */}
          <h1 className="font-mono text-3xl sm:text-5xl font-bold tracking-tight text-theme-primary uppercase leading-tight">
            The interesting number on the vial <br />
            <span className="text-amber-500 underline decoration-amber-500/40 underline-offset-8">
              isn't the price.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-theme-secondary font-sans leading-relaxed max-w-2xl">
            BioScience Depot supplies high-purity research peptides to laboratories, universities, and biotech institutions across the United States. Every lot is released against a written specification and backed by lot-specific HPLC and mass spectrometry documentation.
          </p>

          {/* Instant Lot Lookup HUD Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.35, ease: [0.2, 0, 0.2, 1] }}
            className="bg-theme-bg border-2 border-amber-500/40 p-5 shadow-[0_0_30px_rgba(245,158,11,0.1)] space-y-3"
          >
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="text-amber-500 font-bold uppercase tracking-widest flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-500" />
                INSTANT LOT RETRIEVAL & COA ENGINE
              </span>
              <span className="text-theme-muted text-[11px] hidden sm:inline">
                TRY SAMPLE: <strong className="text-amber-500 cursor-pointer hover:underline" onClick={() => setHeroLot('LOT 24-0817-C')}>LOT 24-0817-C</strong>
              </span>
            </div>

            <form onSubmit={handleHeroLotSubmit} className="flex flex-col sm:flex-row gap-2 font-mono">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="ENTER VIAL LOT NUMBER (e.g. LOT 24-0817-C)..."
                  value={heroLot}
                  onChange={e => setHeroLot(e.target.value)}
                  className="w-full bg-theme-surface border border-theme focus:border-amber-500 text-xs pl-4 pr-10 py-3 text-theme-primary placeholder-theme-muted uppercase tracking-widest focus:outline-none"
                />
                <Search className="w-4 h-4 text-amber-500 absolute right-3 top-3.5 transition-transform duration-140 hover:scale-125 cursor-pointer" />
              </div>
              <Button variant="amber" size="lg" type="submit" className="flex items-center justify-center gap-2 group">
                <Search className="w-4 h-4 transition-transform duration-140 group-hover:scale-125" /> VERIFY LOT & VIEW COA
              </Button>
            </form>
          </motion.div>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Button variant="primary" size="lg" onClick={onExploreClick} className="flex items-center gap-2">
              EXPLORE RESEARCH CATALOGUE <ArrowRight className="w-4 h-4 text-amber-500" />
            </Button>
            <Button variant="outline" size="lg" onClick={onSynthesisClick} className="flex items-center gap-2">
              <Cpu className="w-4 h-4" /> CUSTOM SYNTHESIS ENQUIRY
            </Button>
          </div>

          {/* Trust Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-theme font-mono text-xs text-theme-secondary">
            <div>
              <span className="block font-bold text-amber-500 text-lg">≥ 99.0%</span>
              <span className="text-[11px] uppercase text-theme-muted">HPLC (Area Normalised)</span>
            </div>
            <div>
              <span className="block font-bold text-amber-500 text-lg">-20 °C</span>
              <span className="text-[11px] uppercase text-theme-muted">Validated Cold Chain</span>
            </div>
            <div>
              <span className="block font-bold text-amber-500 text-lg">100%</span>
              <span className="text-[11px] uppercase text-theme-muted">Analytically Documented</span>
            </div>
            <div>
              <span className="block font-bold text-amber-500 text-lg">NET 30</span>
              <span className="text-[11px] uppercase text-theme-muted">Institutional Purchase Orders</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
