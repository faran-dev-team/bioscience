import React from 'react';
import { QualityProcessTimeline } from '../components/features/quality/QualityProcessTimeline';
import { ShieldCheck, CheckCircle2, FileText, Cpu, BarChart2 } from 'lucide-react';
import { Button } from '../components/ui/Button';

interface QualityPageProps {
  onOpenLotLookup: (lotNum?: string) => void;
}

export const QualityPage: React.FC<QualityPageProps> = ({ onOpenLotLookup }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-sans space-y-12">
      {/* Header */}
      <div className="max-w-3xl space-y-4 font-mono">
        <span className="text-xs text-amber-500 font-bold uppercase tracking-widest block">
          [ QUALITY ASSURANCE & ANALYTICAL METHODS ]
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-alloy-100 uppercase tracking-tight">
          A complete account of how material enters our inventory
        </h1>
        <p className="text-sm font-sans text-alloy-300 leading-relaxed">
          Predictability is the product. We enforce strict written qualification, analytical verification, and cold chain shipping controls on every lot released to American laboratories.
        </p>
      </div>

      {/* 5-Step Process Timeline Component */}
      <QualityProcessTimeline />

      {/* Analytical Instrumentation Specifications */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
        <div className="glass-panel p-6 border border-white/10 space-y-3">
          <div className="flex items-center gap-2 text-amber-400 font-bold uppercase">
            <BarChart2 className="w-5 h-5 text-amber-500" />
            HPLC Area Normalisation
          </div>
          <p className="text-alloy-300 font-sans leading-relaxed text-xs">
            Area normalisation at dual UV wavelengths (214 nm and 220 nm) quantifies the principal peptide peak against deletion sequences, truncated synthesis fragments, and process impurities.
          </p>
          <span className="text-[10px] text-amber-500 font-semibold block">
            THRESHOLD: ≥ 99.0% PURITY
          </span>
        </div>

        <div className="glass-panel p-6 border border-white/10 space-y-3">
          <div className="flex items-center gap-2 text-amber-400 font-bold uppercase">
            <Cpu className="w-5 h-5 text-amber-500" />
            ESI Mass Spectrometry
          </div>
          <p className="text-alloy-300 font-sans leading-relaxed text-xs">
            Electrospray Ionisation Mass Spectrometry (ESI-MS) confirms the exact molecular mass of the peptide sequence, verifying sequence accuracy and target MW before lot release.
          </p>
          <span className="text-[10px] text-amber-500 font-semibold block">
            ACCURACY: ± 0.5 Da MATCH
          </span>
        </div>

        <div className="glass-panel p-6 border border-white/10 space-y-3">
          <div className="flex items-center gap-2 text-amber-400 font-bold uppercase">
            <ShieldCheck className="w-5 h-5 text-amber-500" />
            Karl Fischer Water Titration
          </div>
          <p className="text-alloy-300 font-sans leading-relaxed text-xs">
            Coulometric Karl Fischer titration determines residual moisture content to ensure proper lyophilized cake stability and desiccation integrity during -20 °C storage.
          </p>
          <span className="text-[10px] text-amber-500 font-semibold block">
            MOISTURE: ≤ 5.0% WATER
          </span>
        </div>
      </div>

      {/* COA Lookup CTA Card */}
      <div className="bg-obsidian-950 p-8 border-2 border-amber-500/40 font-mono text-xs flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <h3 className="text-base font-bold text-amber-400 uppercase tracking-widest flex items-center gap-2">
            <FileText className="w-5 h-5 text-amber-500" />
            Retrieve Official Certificate of Analysis
          </h3>
          <p className="text-alloy-400 text-xs font-sans max-w-xl">
            Enter any 10-character Lot Number printed on your vial or carton to generate a live Certificate of Analysis with HPLC chromatogram data.
          </p>
        </div>
        <Button variant="amber" size="lg" onClick={() => onOpenLotLookup('LOT 24-0817-C')}>
          OPEN LOT RETRIEVAL HUB →
        </Button>
      </div>
    </div>
  );
};
