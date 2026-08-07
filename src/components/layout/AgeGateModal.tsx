import React, { useState } from 'react';
import { useAgeGate } from '../../context/AgeGateContext';
import { Button } from '../ui/Button';
import { Logo } from '../ui/Logo';
import { IconAlertTriangle, IconCheckSquare, IconSquare } from '../ui/Icons';

export const AgeGateModal: React.FC = () => {
  const { isVerified, verifyAge } = useAgeGate();
  const [checked21, setChecked21] = useState(false);
  const [checkedRUO, setCheckedRUO] = useState(false);
  const [checkedProf, setCheckedProf] = useState(false);

  if (isVerified) return null;

  const canProceed = checked21 && checkedRUO && checkedProf;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="w-full max-w-xl bg-theme-surface border border-theme p-6 sm:p-8 relative transition-colors duration-150">
        <div className="flex items-center justify-between gap-3 mb-5 pb-3 border-b border-theme">
          <Logo size="lg" />
          <div className="flex items-center gap-1.5 text-theme-primary font-mono text-[11px] font-bold uppercase">
            <IconAlertTriangle size={15} amberAccent={true} />
            <span>21+ RUO VERIFICATION</span>
          </div>
        </div>

        <h2 className="font-heading text-xs uppercase tracking-widest font-bold text-theme-primary mb-2">
          Research Access Protocol & Age Verification
        </h2>

        <p className="text-xs text-theme-secondary font-body mb-5 leading-relaxed">
          BioScience Depot supplies high-purity research compounds strictly for legitimate laboratory, academic, and industrial research in the United States. Please confirm your eligibility before entering the catalogue.
        </p>

        <div className="space-y-3 mb-6 bg-theme-canvas p-4 border border-theme font-body text-xs transition-colors">
          <label
            onClick={() => setChecked21(!checked21)}
            className="flex items-start gap-2.5 cursor-pointer group select-none"
          >
            <div className="mt-0.5 text-theme-primary">
              {checked21 ? (
                <IconCheckSquare size={16} amberAccent={true} />
              ) : (
                <IconSquare size={16} className="text-theme-muted group-hover:text-theme-primary" />
              )}
            </div>
            <span className="text-theme-primary leading-snug">
              I confirm that I am <strong>21 years of age or older</strong> and possess legal capacity to acquire research materials.
            </span>
          </label>

          <label
            onClick={() => setCheckedRUO(!checkedRUO)}
            className="flex items-start gap-2.5 cursor-pointer group select-none"
          >
            <div className="mt-0.5 text-theme-primary">
              {checkedRUO ? (
                <IconCheckSquare size={16} amberAccent={true} />
              ) : (
                <IconSquare size={16} className="text-theme-muted group-hover:text-theme-primary" />
              )}
            </div>
            <span className="text-theme-primary leading-snug">
              I understand that all materials supplied are strictly <strong>FOR RESEARCH USE ONLY</strong>. Not for human, veterinary, or clinical use.
            </span>
          </label>

          <label
            onClick={() => setCheckedProf(!checkedProf)}
            className="flex items-start gap-2.5 cursor-pointer group select-none"
          >
            <div className="mt-0.5 text-theme-primary">
              {checkedProf ? (
                <IconCheckSquare size={16} amberAccent={true} />
              ) : (
                <IconSquare size={16} className="text-theme-muted group-hover:text-theme-primary" />
              )}
            </div>
            <span className="text-theme-primary leading-snug">
              I am acquiring materials in a professional, academic, or institutional research capacity.
            </span>
          </label>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 font-interface">
          <p className="text-[10px] font-mono text-theme-muted">
            REQUIREMENT SPECIFICATION § 14.1 COMPLIANCE
          </p>
          <Button
            variant="amber"
            size="md"
            disabled={!canProceed}
            onClick={verifyAge}
            className="w-full sm:w-auto"
          >
            <span>Enter Research Catalogue →</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
