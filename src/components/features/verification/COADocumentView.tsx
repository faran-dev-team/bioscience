import React from 'react';
import { LotVerificationRecord } from '../../../types/compound';
import { COMPOUNDS_DATA } from '../../../data/compounds';
import { Printer, CheckCircle2, ShieldCheck } from 'lucide-react';

interface COADocumentViewProps {
  record: LotVerificationRecord;
  onPrint?: () => void;
}

export const COADocumentView: React.FC<COADocumentViewProps> = ({ record, onPrint }) => {
  const compound = COMPOUNDS_DATA.find(c => c.id === record.compoundId);

  return (
    <div className="bg-white text-slate-900 p-8 border border-slate-300 font-sans shadow-xl relative text-xs">
      {/* Print Button (Hidden during print) */}
      <div className="no-print flex justify-end mb-6">
        <button
          onClick={onPrint || (() => window.print())}
          className="bg-slate-900 text-white font-mono text-xs px-4 py-2 hover:bg-amber-600 transition-colors flex items-center gap-2 font-bold uppercase tracking-wider"
        >
          <Printer className="w-4 h-4" /> PRINT / DOWNLOAD OFFICIAL COA
        </button>
      </div>

      {/* Official Header */}
      <div className="border-b-2 border-slate-900 pb-4 mb-6 flex justify-between items-end">
        <div>
          <h2 className="font-mono text-xl font-bold tracking-widest text-slate-900 uppercase">
            BioScience Depot
          </h2>
          <p className="font-mono text-[10px] text-slate-600 uppercase tracking-wider">
            Analytical Services & Release Documentation — United States
          </p>
        </div>
        <div className="text-right font-mono">
          <span className="inline-block bg-slate-900 text-amber-400 font-bold px-3 py-1 text-xs">
            CERTIFICATE OF ANALYSIS
          </span>
          <p className="text-[10px] text-slate-500 mt-1">ISO 9001:2015 ALIGNED METHODOLOGY</p>
        </div>
      </div>

      {/* Lot Metadata Block */}
      <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 border border-slate-200 mb-6 font-mono text-[11px]">
        <div>
          <p className="text-slate-500 uppercase text-[9px]">PRODUCT NAME:</p>
          <p className="font-bold text-slate-900 text-sm mb-2">{record.compoundName}</p>

          <p className="text-slate-500 uppercase text-[9px]">CAS REGISTRY NUMBER:</p>
          <p className="font-bold text-slate-800">{compound?.casNumber || 'N/A'}</p>
        </div>

        <div>
          <p className="text-slate-500 uppercase text-[9px]">ANALYSIS LOT NUMBER:</p>
          <p className="font-bold text-amber-700 text-sm mb-2">{record.lotNumber}</p>

          <p className="text-slate-500 uppercase text-[9px]">RELEASE DATE:</p>
          <p className="font-bold text-slate-800">{record.analysisDate}</p>
        </div>
      </div>

      {/* Chemical Specifications */}
      <div className="mb-6">
        <h4 className="font-mono font-bold text-xs uppercase text-slate-900 border-b border-slate-300 pb-1 mb-3">
          1. CHEMICAL SPECIFICATIONS & MOLECULAR METRICS
        </h4>
        <table className="w-full text-left font-mono text-[11px] border border-slate-200">
          <thead className="bg-slate-100 border-b border-slate-300 text-slate-700">
            <tr>
              <th className="p-2 border-r border-slate-200">PARAMETER</th>
              <th className="p-2 border-r border-slate-200">SPECIFICATION</th>
              <th className="p-2">RESULT</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-200">
              <td className="p-2 border-r border-slate-200 font-semibold">Sequence</td>
              <td className="p-2 border-r border-slate-200">{compound?.sequence}</td>
              <td className="p-2 text-emerald-700 font-bold">MATCHES SPECIFICATION</td>
            </tr>
            <tr className="border-b border-slate-200">
              <td className="p-2 border-r border-slate-200 font-semibold">Molecular Mass</td>
              <td className="p-2 border-r border-slate-200">{compound?.calculatedMass}</td>
              <td className="p-2 font-bold">{compound?.calculatedMass} (MS Confirmed)</td>
            </tr>
            <tr>
              <td className="p-2 border-r border-slate-200 font-semibold">Storage Condition</td>
              <td className="p-2 border-r border-slate-200">-20 °C, Desiccated</td>
              <td className="p-2 font-bold">COMPLIANT</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Analytical Test Results Table */}
      <div className="mb-6">
        <h4 className="font-mono font-bold text-xs uppercase text-slate-900 border-b border-slate-300 pb-1 mb-3">
          2. ANALYTICAL TESTING RESULTS
        </h4>
        <table className="w-full text-left font-mono text-[11px] border border-slate-200">
          <thead className="bg-slate-100 border-b border-slate-300 text-slate-700">
            <tr>
              <th className="p-2 border-r border-slate-200">TEST ITEM</th>
              <th className="p-2 border-r border-slate-200">TEST METHOD</th>
              <th className="p-2 border-r border-slate-200">SPECIFICATION</th>
              <th className="p-2">ACTUAL RESULT</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-200 bg-amber-50/50">
              <td className="p-2 border-r border-slate-200 font-bold text-amber-900">Peptide Purity</td>
              <td className="p-2 border-r border-slate-200">{record.method}</td>
              <td className="p-2 border-r border-slate-200">≥ 99.0%</td>
              <td className="p-2 font-bold text-emerald-700">{record.purity.toFixed(1)}%</td>
            </tr>
            <tr className="border-b border-slate-200">
              <td className="p-2 border-r border-slate-200 font-semibold">Identity (ESI-MS)</td>
              <td className="p-2 border-r border-slate-200">Mass Spectrometry</td>
              <td className="p-2 border-r border-slate-200">Conforms to Sequence</td>
              <td className="p-2 font-bold text-emerald-700">CONFORMS</td>
            </tr>
            <tr>
              <td className="p-2 border-r border-slate-200 font-semibold">Moisture Content</td>
              <td className="p-2 border-r border-slate-200">Karl Fischer Titration</td>
              <td className="p-2 border-r border-slate-200">≤ 5.0%</td>
              <td className="p-2 font-bold">{record.waterContent}%</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Simulated HPLC Chromatogram Box */}
      <div className="mb-6 bg-slate-50 border border-slate-300 p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="font-mono font-bold text-[10px] uppercase text-slate-700">
            CHROMATOGRAM PROFILE — HPLC RUN LOT #{record.lotNumber}
          </span>
          <span className="font-mono text-[9px] text-emerald-700 font-bold flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> PRINCIPAL PEAK INTEGRATED: {record.purity}%
          </span>
        </div>
        <div className="h-28 bg-white border border-slate-300 flex items-end justify-between px-6 py-2 relative">
          <div className="absolute inset-x-0 bottom-2 border-b border-slate-200" />
          <div className="w-2 bg-slate-300 h-4" title="1.0 min" />
          <div className="w-2 bg-slate-300 h-6" title="2.5 min" />
          <div className="w-4 bg-emerald-600 h-full relative" title="Principal Peak - 5.2 min (99.1%)">
            <span className="absolute -top-4 -left-4 text-[9px] font-mono font-bold text-emerald-800">
              5.2 min ({record.purity}%)
            </span>
          </div>
          <div className="w-2 bg-slate-300 h-5" title="6.5 min" />
          <div className="w-2 bg-slate-300 h-3" title="8.0 min" />
        </div>
        <p className="text-[9px] font-mono text-slate-500 text-center mt-1">
          RETENTION TIME (MINUTES) vs DETECTOR RESPONSE (mAU)
        </p>
      </div>

      {/* Release Lead Signature Block */}
      <div className="border-t border-slate-300 pt-4 flex justify-between items-end font-mono text-[10px]">
        <div>
          <p className="text-slate-500 uppercase">ANALYTICAL RELEASE SIGNATORY:</p>
          <p className="font-bold text-slate-900 text-xs mt-1">{record.analyst}</p>
          <p className="text-slate-500">Quality Assurance & Analytical Release Lead</p>
        </div>
        <div className="text-right">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold px-3 py-1">
            <ShieldCheck className="w-4 h-4 text-emerald-700" /> LOT STATUS: {record.status}
          </div>
        </div>
      </div>
    </div>
  );
};
