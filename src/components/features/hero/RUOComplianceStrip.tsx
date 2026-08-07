import React from 'react';
import { IconShieldCheck, IconAlertTriangle, IconSnowflake, IconLock, IconFileText } from '../../ui/Icons';

export const RUOComplianceStrip: React.FC = () => {
  return (
    <div className="w-full bg-[#16181B] border-y border-[#2A2E33] py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-3">
        {/* Top Declaration Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 border-b border-[#2A2E33]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#BE7A28] inline-block flex-shrink-0" />
            <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#E8E6E1] flex items-center gap-2">
              <IconAlertTriangle size={15} amberAccent={true} />
              RESEARCH USE ONLY (RUO) COMPLIANCE SPECIFICATION
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[11px] font-mono text-[#B9BEC4]">
            <span className="inline-flex items-center gap-1.5 text-[#528B66]">
              <IconShieldCheck size={14} />
              21+ INSTITUTIONAL ACCESS
            </span>
            <span className="text-[#6B7178]">|</span>
            <span className="inline-flex items-center gap-1.5 text-[#E8E6E1]">
              <IconSnowflake size={14} />
              -20 °C COLD-CHAIN DISPATCH
            </span>
            <span className="text-[#6B7178]">|</span>
            <span className="inline-flex items-center gap-1.5 text-[#E3A455]">
              <IconFileText size={14} />
              LOT-SPECIFIC COA INCLUDED
            </span>
          </div>
        </div>

        {/* Complete Mandatory RUO Legal Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          <div className="lg:col-span-9">
            <p className="text-xs text-[#B9BEC4] font-body leading-relaxed">
              <strong className="text-[#E8E6E1] font-semibold">FOR RESEARCH USE ONLY. NOT FOR HUMAN, CLINICAL, OR VETERINARY USE.</strong> All products supplied by BioScience Depot are intended exclusively for qualified laboratory research, analytical testing, and in vitro assay development conducted by authorized personnel in academic, biotechnology, and institutional settings. Materials are not drugs, foods, medical devices, cosmetics, or dietary supplements.
            </p>
          </div>

          <div className="lg:col-span-3 flex lg:justify-end">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0A0B0D] border border-[#2A2E33] text-[10px] font-mono text-[#6B7178]">
              <IconLock size={12} />
              <span>US 21 CFR COMPLIANCE CONTROLS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
