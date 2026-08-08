import React from 'react';

interface RUOComplianceStripProps {
  className?: string;
}

export const RUOComplianceStrip: React.FC<RUOComplianceStripProps> = ({ className = '' }) => {
  return (
    <div className={`w-full bg-zinc-100 dark:bg-[#111315] border-y border-zinc-200 dark:border-[#2A2E33] py-2.5 px-4 sm:px-6 lg:px-8 transition-colors duration-150 ${className}`}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <p className="text-[11px] font-mono tracking-wider text-zinc-700 dark:text-[#A0A5AB] uppercase leading-snug">
          <strong className="text-[#BE7A28] font-bold">FOR RESEARCH USE ONLY.</strong> Not for human or veterinary consumption. Not for diagnostic, therapeutic, or clinical use.
        </p>
        <span className="text-[10px] font-mono text-zinc-500 dark:text-[#6B7178] uppercase tracking-widest flex-shrink-0">
          U.S. DOMESTIC SUPPLY · § 8.7 COMPLIANCE
        </span>
      </div>
    </div>
  );
};
