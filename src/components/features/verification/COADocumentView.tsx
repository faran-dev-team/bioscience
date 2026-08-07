import React from 'react';
import { LotVerificationRecord } from '../../../types/compound';
import { COMPOUNDS_DATA } from '../../../data/compounds';
import { IconPrinter, IconCheckCircle, IconShieldCheck } from '../../ui/Icons';

interface COADocumentViewProps {
  record: LotVerificationRecord;
  onPrint?: () => void;
}

export const COADocumentView: React.FC<COADocumentViewProps> = ({ record, onPrint }) => {
  const compound = COMPOUNDS_DATA.find(c => c.id === record.compoundId);

  return (
    <div className="bg-[#FFFFFF] text-[#18181B] p-4 sm:p-8 border border-[#D4D4D8] font-sans shadow-none relative text-xs overflow-x-hidden">
      {/* Print Button (Hidden during print) */}
      <div className="no-print flex justify-end mb-4 sm:mb-6">
        <button
          onClick={onPrint || (() => window.print())}
          className="w-full sm:w-auto bg-[#16181B] text-[#E8E6E1] font-mono text-xs px-4 py-2 hover:bg-[#BE7A28] hover:text-[#0A0B0D] transition-colors flex items-center justify-center gap-2 font-bold uppercase tracking-wider border border-[#2A2E33]"
        >
          <IconPrinter size={15} />
          <span>Print / Download Official COA</span>
        </button>
      </div>

      {/* Official Header */}
      <div className="border-b-2 border-[#18181B] pb-4 mb-4 sm:mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3">
        <div>
          <h2 className="font-mono text-lg sm:text-xl font-bold tracking-widest text-[#18181B] uppercase">
            BioScience Depot
          </h2>
          <p className="font-mono text-[10px] text-[#52525B] uppercase tracking-wider">
            Analytical Services & Release Documentation — United States
          </p>
        </div>
        <div className="text-left sm:text-right font-mono">
          <span className="inline-block bg-[#18181B] text-[#E8E6E1] font-bold px-2.5 py-1 text-xs">
            CERTIFICATE OF ANALYSIS
          </span>
          <p className="text-[10px] text-[#71717A] mt-1">ISO 9001:2015 ALIGNED METHODOLOGY</p>
        </div>
      </div>

      {/* Lot Metadata Block */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#F4F4F5] p-3.5 sm:p-4 border border-[#E4E4E7] mb-6 font-mono text-[11px]">
        <div>
          <p className="text-[#71717A] uppercase text-[9px]">PRODUCT NAME:</p>
          <p className="font-bold text-[#18181B] text-sm mb-2">{record.compoundName}</p>

          <p className="text-[#71717A] uppercase text-[9px]">CAS REGISTRY NUMBER:</p>
          <p className="font-bold text-[#27272A]">{compound?.casNumber || 'N/A'}</p>
        </div>

        <div>
          <p className="text-[#71717A] uppercase text-[9px]">ANALYSIS LOT NUMBER:</p>
          <p className="font-bold text-[#BE7A28] text-sm mb-2">{record.lotNumber}</p>

          <p className="text-[#71717A] uppercase text-[9px]">RELEASE DATE:</p>
          <p className="font-bold text-[#27272A]">{record.analysisDate}</p>
        </div>
      </div>

      {/* Chemical Specifications */}
      <div className="mb-6">
        <h4 className="font-mono font-bold text-xs uppercase text-[#18181B] border-b border-[#D4D4D8] pb-1 mb-3">
          1. Chemical Specifications & Molecular Metrics
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[320px] text-left font-mono text-[11px] border border-[#E4E4E7]">
            <thead className="bg-[#F4F4F5] border-b border-[#E4E4E7] text-[#52525B]">
              <tr>
                <th className="p-2 border-r border-[#E4E4E7]">PARAMETER</th>
                <th className="p-2 border-r border-[#E4E4E7]">SPECIFICATION</th>
                <th className="p-2">RESULT</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#E4E4E7]">
                <td className="p-2 border-r border-[#E4E4E7] font-semibold">Sequence</td>
                <td className="p-2 border-r border-[#E4E4E7]">{compound?.sequence}</td>
                <td className="p-2 text-[#3F6B4E] font-bold">MATCHES SPECIFICATION</td>
              </tr>
              <tr className="border-b border-[#E4E4E7]">
                <td className="p-2 border-r border-[#E4E4E7] font-semibold">Molecular Mass</td>
                <td className="p-2 border-r border-[#E4E4E7]">{compound?.calculatedMass}</td>
                <td className="p-2 font-bold">{compound?.calculatedMass} (MS Confirmed)</td>
              </tr>
              <tr>
                <td className="p-2 border-r border-[#E4E4E7] font-semibold">Storage Condition</td>
                <td className="p-2 border-r border-[#E4E4E7]">-20 °C, Desiccated</td>
                <td className="p-2 font-bold">COMPLIANT</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Analytical Test Results Table */}
      <div className="mb-6">
        <h4 className="font-mono font-bold text-xs uppercase text-[#18181B] border-b border-[#D4D4D8] pb-1 mb-3">
          2. Analytical Testing Results
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[320px] text-left font-mono text-[11px] border border-[#E4E4E7]">
            <thead className="bg-[#F4F4F5] border-b border-[#E4E4E7] text-[#52525B]">
              <tr>
                <th className="p-2 border-r border-[#E4E4E7]">TEST ITEM</th>
                <th className="p-2 border-r border-[#E4E4E7]">TEST METHOD</th>
                <th className="p-2 border-r border-[#E4E4E7]">SPECIFICATION</th>
                <th className="p-2">ACTUAL RESULT</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#E4E4E7] bg-[#FFFBEB]/40">
                <td className="p-2 border-r border-[#E4E4E7] font-bold text-[#78350F]">Peptide Purity</td>
                <td className="p-2 border-r border-[#E4E4E7]">{record.method}</td>
                <td className="p-2 border-r border-[#E4E4E7]">≥ 99.0%</td>
                <td className="p-2 font-bold text-[#3F6B4E]">{record.purity.toFixed(1)}%</td>
              </tr>
              <tr className="border-b border-[#E4E4E7]">
                <td className="p-2 border-r border-[#E4E4E7] font-semibold">Identity (ESI-MS)</td>
                <td className="p-2 border-r border-[#E4E4E7]">Mass Spectrometry</td>
                <td className="p-2 border-r border-[#E4E4E7]">Conforms to Sequence</td>
                <td className="p-2 font-bold text-[#3F6B4E]">CONFORMS</td>
              </tr>
              <tr>
                <td className="p-2 border-r border-[#E4E4E7] font-semibold">Moisture Content</td>
                <td className="p-2 border-r border-[#E4E4E7]">Karl Fischer Titration</td>
                <td className="p-2 border-r border-[#E4E4E7]">≤ 5.0%</td>
                <td className="p-2 font-bold">{record.waterContent}%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Simulated HPLC Chromatogram Box */}
      <div className="mb-6 bg-[#F4F4F5] border border-[#E4E4E7] p-3.5 sm:p-4 overflow-hidden">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-1 mb-2">
          <span className="font-mono font-bold text-[9px] sm:text-[10px] uppercase text-[#3F3F46]">
            CHROMATOGRAM PROFILE — HPLC RUN LOT #{record.lotNumber}
          </span>
          <span className="font-mono text-[9px] text-[#3F6B4E] font-bold flex items-center gap-1">
            <IconCheckCircle size={12} />
            <span>PRINCIPAL PEAK INTEGRATED: {record.purity}%</span>
          </span>
        </div>
        <div className="h-24 bg-white border border-[#D4D4D8] flex items-end justify-between px-3 sm:px-6 py-2 relative">
          <div className="absolute inset-x-0 bottom-2 border-b border-[#E4E4E7]" />
          <div className="w-1.5 bg-[#A1A1AA] h-4" />
          <div className="w-1.5 bg-[#A1A1AA] h-6" />
          <div className="w-3 bg-[#3F6B4E] h-full relative">
            <span className="absolute -top-4 -left-3 text-[9px] font-mono font-bold text-[#3F6B4E] whitespace-nowrap">
              {record.purity}%
            </span>
          </div>
          <div className="w-1.5 bg-[#A1A1AA] h-5" />
          <div className="w-1.5 bg-[#A1A1AA] h-3" />
        </div>
        <p className="text-[9px] font-mono text-[#71717A] text-center mt-1">
          RETENTION TIME (MINUTES) vs DETECTOR RESPONSE (mAU @ 214 nm)
        </p>
      </div>

      {/* Release Lead Signature Block */}
      <div className="border-t border-[#D4D4D8] pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-end font-mono text-[10px] gap-3">
        <div>
          <p className="text-[#71717A] uppercase">ANALYTICAL RELEASE SIGNATORY:</p>
          <p className="font-bold text-[#18181B] text-xs mt-0.5">{record.analyst}</p>
          <p className="text-[#71717A]">Quality Assurance & Analytical Release Lead</p>
        </div>
        <div className="text-left sm:text-right">
          <div className="inline-flex items-center gap-1.5 bg-[#ECFDF5] text-[#065F46] border border-[#A7F3D0] font-bold px-3 py-1">
            <IconShieldCheck size={13} />
            <span>LOT STATUS: {record.status}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
