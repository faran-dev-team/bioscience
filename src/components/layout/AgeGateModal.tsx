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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A0B0D]/90 backdrop-blur-sm">
      <div className="w-full max-w-xl bg-[#16181B] border border-[#2A2E33] p-6 sm:p-8 relative">
        <div className="flex items-center justify-between gap-3 mb-5 pb-3 border-b border-[#2A2E33]">
          <Logo size="lg" />
          <div className="flex items-center gap-1.5 text-[#E8E6E1] font-mono text-[11px] font-bold uppercase">
            <IconAlertTriangle size={15} amberAccent={true} />
            <span>21+ RUO VERIFICATION</span>
          </div>
        </div>

        <h2 className="font-heading text-xs uppercase tracking-widest font-bold text-[#E8E6E1] mb-2">
          Research Access Protocol & Age Verification
        </h2>

        <p className="text-xs text-[#B9BEC4] font-body mb-5 leading-relaxed">
          BioScience Depot supplies high-purity research compounds strictly for legitimate laboratory, academic, and industrial research in the United States. Please confirm your eligibility before entering the catalogue.
        </p>

        <div className="space-y-3 mb-6 bg-[#0A0B0D] p-4 border border-[#2A2E33] font-body text-xs">
          <label
            onClick={() => setChecked21(!checked21)}
            className="flex items-start gap-2.5 cursor-pointer group select-none"
          >
            <div className="mt-0.5 text-[#E8E6E1]">
              {checked21 ? (
                <IconCheckSquare size={16} amberAccent={true} />
              ) : (
                <IconSquare size={16} className="text-[#6B7178] group-hover:text-[#E8E6E1]" />
              )}
            </div>
            <span className="text-[#E8E6E1] leading-snug">
              I confirm that I am <strong>21 years of age or older</strong> and possess legal capacity to acquire research materials.
            </span>
          </label>

          <label
            onClick={() => setCheckedRUO(!checkedRUO)}
            className="flex items-start gap-2.5 cursor-pointer group select-none"
          >
            <div className="mt-0.5 text-[#E8E6E1]">
              {checkedRUO ? (
                <IconCheckSquare size={16} amberAccent={true} />
              ) : (
                <IconSquare size={16} className="text-[#6B7178] group-hover:text-[#E8E6E1]" />
              )}
            </div>
            <span className="text-[#E8E6E1] leading-snug">
              I understand that all materials supplied are strictly <strong>FOR RESEARCH USE ONLY</strong>. Not for human, veterinary, or clinical use.
            </span>
          </label>

          <label
            onClick={() => setCheckedProf(!checkedProf)}
            className="flex items-start gap-2.5 cursor-pointer group select-none"
          >
            <div className="mt-0.5 text-[#E8E6E1]">
              {checkedProf ? (
                <IconCheckSquare size={16} amberAccent={true} />
              ) : (
                <IconSquare size={16} className="text-[#6B7178] group-hover:text-[#E8E6E1]" />
              )}
            </div>
            <span className="text-[#E8E6E1] leading-snug">
              I am acquiring materials in a professional, academic, or institutional research capacity.
            </span>
          </label>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 font-interface">
          <p className="text-[10px] font-mono text-[#6B7178]">
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
