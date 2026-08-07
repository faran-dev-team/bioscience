import React from 'react';
import { QualityProcessTimeline } from '../components/features/quality/QualityProcessTimeline';
import {
  IconShieldCheck,
  IconFileText,
  IconCpu,
  IconBarChart
} from '../components/ui/Icons';
import { Button } from '../components/ui/Button';

interface QualityPageProps {
  onOpenLotLookup: (lotNum?: string) => void;
}

export const QualityPage: React.FC<QualityPageProps> = ({ onOpenLotLookup }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-body space-y-12 bg-theme-canvas transition-colors duration-150">
      {/* Header in Söhne Breit / Söhne */}
      <div className="max-w-3xl space-y-3">
        <span className="text-[11px] font-mono text-[#BE7A28] font-bold uppercase tracking-widest block">
          [ QUALITY ASSURANCE & ANALYTICAL METHODS ]
        </span>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-theme-primary uppercase tracking-tight">
          A complete account of how material enters our inventory
        </h1>
        <p className="text-sm text-theme-secondary leading-relaxed font-body">
          Predictability is the product. We enforce strict written qualification, analytical verification, and cold chain shipping controls on every lot released to American laboratories.
        </p>
      </div>

      {/* 5-Step Process Timeline Component */}
      <QualityProcessTimeline />

      {/* Analytical Instrumentation Specifications */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
        <div className="bg-theme-surface p-5 border border-theme space-y-3 transition-colors">
          <div className="flex items-center gap-2 text-theme-primary font-heading font-bold uppercase">
            <IconBarChart size={18} amberAccent={true} />
            <span>HPLC Area Normalisation</span>
          </div>
          <p className="text-theme-secondary font-body leading-relaxed text-xs">
            Area normalisation at dual UV wavelengths (214 nm and 220 nm) quantifies the principal peptide peak against deletion sequences, truncated synthesis fragments, and process impurities.
          </p>
          <span className="text-[10px] font-mono text-theme-primary font-semibold block border-t border-theme pt-2">
            THRESHOLD: ≥ 99.0% PURITY
          </span>
        </div>

        <div className="bg-theme-surface p-5 border border-theme space-y-3 transition-colors">
          <div className="flex items-center gap-2 text-theme-primary font-heading font-bold uppercase">
            <IconCpu size={18} amberAccent={true} />
            <span>ESI Mass Spectrometry</span>
          </div>
          <p className="text-theme-secondary font-body leading-relaxed text-xs">
            Electrospray Ionisation Mass Spectrometry (ESI-MS) confirms the exact molecular mass of the peptide sequence, verifying sequence accuracy and target MW before lot release.
          </p>
          <span className="text-[10px] font-mono text-theme-primary font-semibold block border-t border-theme pt-2">
            ACCURACY: ± 0.5 Da MATCH
          </span>
        </div>

        <div className="bg-theme-surface p-5 border border-theme space-y-3 transition-colors">
          <div className="flex items-center gap-2 text-theme-primary font-heading font-bold uppercase">
            <IconShieldCheck size={18} amberAccent={true} />
            <span>Karl Fischer Water Titration</span>
          </div>
          <p className="text-theme-secondary font-body leading-relaxed text-xs">
            Coulometric Karl Fischer titration determines residual moisture content to ensure proper lyophilized cake stability and desiccation integrity during -20 °C storage.
          </p>
          <span className="text-[10px] font-mono text-theme-primary font-semibold block border-t border-theme pt-2">
            MOISTURE: ≤ 5.0% WATER
          </span>
        </div>
      </div>

      {/* COA Lookup CTA Card */}
      <div className="bg-theme-surface p-6 border border-theme text-xs flex flex-col md:flex-row items-center justify-between gap-6 transition-colors">
        <div className="space-y-1.5">
          <h3 className="text-sm font-heading font-bold text-theme-primary uppercase tracking-widest flex items-center gap-2">
            <IconFileText size={16} amberAccent={true} />
            <span>Retrieve Official Certificate of Analysis</span>
          </h3>
          <p className="text-theme-secondary text-xs font-body max-w-xl">
            Enter any 10-character Lot Number printed on your vial or carton to generate a live Certificate of Analysis with HPLC chromatogram data.
          </p>
        </div>
        <Button variant="amber" size="md" onClick={() => onOpenLotLookup('LOT 24-0817-C')}>
          <span>Open Lot Retrieval Hub →</span>
        </Button>
      </div>
    </div>
  );
};
