import React, { useState } from 'react';
import { useAgeGate } from '../../context/AgeGateContext';
import { Button } from '../ui/Button';
import { Logo } from '../ui/Logo';
import { IconAlertTriangle, IconCheckSquare, IconSquare, IconArrowRight } from '../ui/Icons';

export const AgeGateModal: React.FC = () => {
  const { isVerified, verifyAge } = useAgeGate();
  const [checkedAge, setCheckedAge] = useState(false);
  const [checkedCapacity, setCheckedCapacity] = useState(false);
  const [checkedRUO, setCheckedRUO] = useState(false);
  const [isDeclined, setIsDeclined] = useState(false);

  if (isVerified) return null;

  const canProceed = checkedAge && checkedCapacity && checkedRUO;

  const handleExit = () => {
    setIsDeclined(true);
  };

  const handleReturnToConfirm = () => {
    setIsDeclined(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A0B0D]/95 backdrop-blur-md">
      <div className="w-full max-w-xl bg-[#16181B] border border-[#2A2E33] p-6 sm:p-8 relative shadow-2xl transition-colors duration-150">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-[#2A2E33]">
          <Logo size="lg" />
          <div className="flex items-center gap-1.5 text-[#BE7A28] font-mono text-[11px] font-bold uppercase">
            <IconAlertTriangle size={15} amberAccent={true} />
            <span>21+ RUO VERIFICATION</span>
          </div>
        </div>

        {isDeclined ? (
          /* Declined Exit State (Document Section 8.5 & 10.6) */
          <div className="space-y-5 text-center py-4">
            <div className="w-12 h-12 bg-[#8C3A3A]/20 border border-[#8C3A3A] text-[#8C3A3A] flex items-center justify-center mx-auto">
              <IconAlertTriangle size={24} />
            </div>
            <div className="space-y-2">
              <h2 className="font-heading text-lg font-bold text-[#E8E6E1] uppercase tracking-wider">
                Access not confirmed
              </h2>
              <p className="text-xs text-[#B9BEC4] font-body leading-relaxed max-w-md mx-auto">
                This website is intended for qualified research professionals aged 21 or over. If you reached this page in error, you may return and confirm your eligibility.
              </p>
            </div>
            <div className="pt-2">
              <button
                onClick={handleReturnToConfirm}
                className="text-xs text-[#BE7A28] font-mono font-bold hover:underline inline-flex items-center gap-1.5"
              >
                <span>Return to confirmation</span>
                <IconArrowRight size={13} />
              </button>
            </div>
          </div>
        ) : (
          /* Verification Form State */
          <div className="space-y-5">
            <div className="space-y-1.5">
              <h2 className="font-heading text-lg font-bold text-[#E8E6E1] uppercase tracking-wider">
                Confirm your eligibility
              </h2>
              <p className="text-xs text-[#B9BEC4] font-body leading-relaxed">
                BioScience Depot supplies research materials intended exclusively for laboratory research by qualified professionals.
              </p>
            </div>

            {/* Checklist */}
            <div className="space-y-3 bg-[#0A0B0D] p-4 border border-[#2A2E33] font-body text-xs">
              <p className="text-[11px] font-mono text-[#6B7178] uppercase tracking-wider font-semibold">
                To continue, please confirm:
              </p>

              <label
                onClick={() => setCheckedAge(!checkedAge)}
                className="flex items-start gap-3 cursor-pointer group select-none py-1"
              >
                <div className="mt-0.5 flex-shrink-0">
                  {checkedAge ? (
                    <IconCheckSquare size={16} amberAccent={true} />
                  ) : (
                    <IconSquare size={16} className="text-[#6B7178] group-hover:text-[#E8E6E1]" />
                  )}
                </div>
                <span className="text-[#E8E6E1] leading-relaxed">
                  I am 21 years of age or older
                </span>
              </label>

              <label
                onClick={() => setCheckedCapacity(!checkedCapacity)}
                className="flex items-start gap-3 cursor-pointer group select-none py-1"
              >
                <div className="mt-0.5 flex-shrink-0">
                  {checkedCapacity ? (
                    <IconCheckSquare size={16} amberAccent={true} />
                  ) : (
                    <IconSquare size={16} className="text-[#6B7178] group-hover:text-[#E8E6E1]" />
                  )}
                </div>
                <span className="text-[#E8E6E1] leading-relaxed">
                  I am accessing this site in a professional or research capacity
                </span>
              </label>

              <label
                onClick={() => setCheckedRUO(!checkedRUO)}
                className="flex items-start gap-3 cursor-pointer group select-none py-1"
              >
                <div className="mt-0.5 flex-shrink-0">
                  {checkedRUO ? (
                    <IconCheckSquare size={16} amberAccent={true} />
                  ) : (
                    <IconSquare size={16} className="text-[#6B7178] group-hover:text-[#E8E6E1]" />
                  )}
                </div>
                <span className="text-[#E8E6E1] leading-relaxed">
                  I understand that all products are for Research Use Only and are not for human or veterinary consumption
                </span>
              </label>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 font-interface">
              <Button
                variant="outline"
                size="md"
                onClick={handleExit}
                className="w-full sm:w-auto order-2 sm:order-1 text-[#6B7178] hover:text-[#E8E6E1]"
              >
                <span>Exit</span>
              </Button>

              <Button
                variant="amber"
                size="md"
                disabled={!canProceed}
                onClick={verifyAge}
                className="w-full sm:w-auto order-1 sm:order-2"
              >
                <span>Confirm — Enter Site</span>
              </Button>
            </div>

            {/* Footer Compliance Notice */}
            <div className="border-t border-[#2A2E33] pt-3">
              <p className="text-[10px] text-[#6B7178] font-body leading-relaxed">
                Products sold by BioScience Depot are not drugs, foods, supplements, or medical devices, and are not intended to diagnose, treat, cure, or prevent any condition.
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
