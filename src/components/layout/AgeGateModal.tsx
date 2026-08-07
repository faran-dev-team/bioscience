import React, { useState } from 'react';
import { useAgeGate } from '../../context/AgeGateContext';
import { ShieldAlert, CheckSquare, Square } from 'lucide-react';
import { Button } from '../ui/Button';
import { Logo } from '../ui/Logo';

export const AgeGateModal: React.FC = () => {
  const { isVerified, verifyAge } = useAgeGate();
  const [checked21, setChecked21] = useState(false);
  const [checkedRUO, setCheckedRUO] = useState(false);
  const [checkedProf, setCheckedProf] = useState(false);

  if (isVerified) return null;

  const canProceed = checked21 && checkedRUO && checkedProf;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian-950/90 backdrop-blur-xl">
      <div className="w-full max-w-xl glass-panel border-2 border-amber-500/50 p-8 shadow-[0_0_50px_rgba(245,158,11,0.2)] relative bg-theme-surface">
        <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-theme">
          <Logo size="lg" />
          <div className="flex items-center gap-1.5 text-amber-500 font-mono text-xs font-bold uppercase">
            <ShieldAlert className="w-5 h-5 animate-pulse" />
            21+ RUO VERIFICATION
          </div>
        </div>

        <h2 className="font-mono text-sm uppercase tracking-widest font-bold text-amber-500 mb-2">
          Research Access Protocol & Age Verification
        </h2>

        <p className="text-xs text-theme-secondary font-sans mb-6 leading-relaxed">
          BioScience Depot supplies high-purity research compounds strictly for legitimate laboratory, academic, and industrial research in the United States. Please confirm your eligibility before entering the catalogue.
        </p>

        <div className="space-y-4 mb-8 bg-theme-bg p-5 border border-theme font-mono">
          <label
            onClick={() => setChecked21(!checked21)}
            className="flex items-start gap-3 cursor-pointer group text-xs select-none"
          >
            <div className="mt-0.5 text-amber-500">
              {checked21 ? (
                <CheckSquare className="w-5 h-5" />
              ) : (
                <Square className="w-5 h-5 text-theme-muted group-hover:text-amber-500" />
              )}
            </div>
            <span className="text-theme-primary leading-snug">
              I confirm that I am <strong>21 years of age or older</strong> and possess legal capacity to acquire research materials.
            </span>
          </label>

          <label
            onClick={() => setCheckedRUO(!checkedRUO)}
            className="flex items-start gap-3 cursor-pointer group text-xs select-none"
          >
            <div className="mt-0.5 text-amber-500">
              {checkedRUO ? (
                <CheckSquare className="w-5 h-5" />
              ) : (
                <Square className="w-5 h-5 text-theme-muted group-hover:text-amber-500" />
              )}
            </div>
            <span className="text-theme-primary leading-snug">
              I understand that all materials supplied are strictly <strong>FOR RESEARCH USE ONLY</strong>. Not for human, veterinary, or clinical use.
            </span>
          </label>

          <label
            onClick={() => setCheckedProf(!checkedProf)}
            className="flex items-start gap-3 cursor-pointer group text-xs select-none"
          >
            <div className="mt-0.5 text-amber-500">
              {checkedProf ? (
                <CheckSquare className="w-5 h-5" />
              ) : (
                <Square className="w-5 h-5 text-theme-muted group-hover:text-amber-500" />
              )}
            </div>
            <span className="text-theme-primary leading-snug">
              I am acquiring materials in a professional, academic, or institutional research capacity.
            </span>
          </label>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <p className="text-[10px] font-mono text-theme-muted">
            REQUIREMENT SPECIFICATION § 14.1 COMPLIANCE CONTROL
          </p>
          <Button
            variant="amber"
            size="lg"
            disabled={!canProceed}
            onClick={verifyAge}
            className="w-full sm:w-auto"
          >
            ENTER RESEARCH CATALOGUE →
          </Button>
        </div>
      </div>
    </div>
  );
};
