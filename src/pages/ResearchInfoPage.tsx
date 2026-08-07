import React, { useState } from 'react';
import {
  IconSnowflake,
  IconFlask,
  IconClock,
  IconCheckCircle,
  IconSliders
} from '../components/ui/Icons';

export const ResearchInfoPage: React.FC = () => {
  const [peptideWeightMg, setPeptideWeightMg] = useState<number>(10);
  const [targetConcMgMl, setTargetConcMgMl] = useState<number>(2);

  const calculatedSolventMl = (peptideWeightMg / targetConcMgMl).toFixed(2);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-body space-y-12 bg-[#0A0B0D]">
      {/* Header in Söhne Breit / Söhne */}
      <div className="max-w-3xl space-y-3">
        <span className="text-[11px] font-mono text-[#BE7A28] font-bold uppercase tracking-widest block">
          [ RESEARCH INFORMATION & RECONSTITUTION GUIDANCE ]
        </span>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#E8E6E1] uppercase tracking-tight">
          Handling & Reconstitution Protocols
        </h1>
        <p className="text-sm font-body text-[#B9BEC4] leading-relaxed">
          Best practices for lyophilized peptide reconstitution, thermal equilibration, solvent selection, and handling in laboratory assay preparations.
        </p>
      </div>

      {/* Interactive Reconstitution Calculator Box */}
      <div className="bg-[#16181B] p-6 border border-[#2A2E33] space-y-6">
        <div className="flex items-center gap-2 text-[#E8E6E1] font-heading font-bold uppercase text-xs border-b border-[#2A2E33] pb-3">
          <IconSliders size={16} amberAccent={true} />
          <span>Interactive Laboratory Reconstitution Calculator</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-end font-interface text-xs">
          <div>
            <label className="block text-[#B9BEC4] uppercase font-semibold mb-1 text-[11px]">
              Peptide Quantity in Vial (mg):
            </label>
            <input
              type="number"
              min={1}
              value={peptideWeightMg}
              onChange={e => setPeptideWeightMg(Number(e.target.value))}
              className="w-full bg-[#0A0B0D] border border-[#2A2E33] p-2.5 text-[#E8E6E1] font-mono font-bold text-xs focus:outline-none focus:border-[#BE7A28]"
            />
          </div>

          <div>
            <label className="block text-[#B9BEC4] uppercase font-semibold mb-1 text-[11px]">
              Target Concentration (mg/mL):
            </label>
            <input
              type="number"
              step={0.5}
              min={0.1}
              value={targetConcMgMl}
              onChange={e => setTargetConcMgMl(Number(e.target.value))}
              className="w-full bg-[#0A0B0D] border border-[#2A2E33] p-2.5 text-[#E8E6E1] font-mono font-bold text-xs focus:outline-none focus:border-[#BE7A28]"
            />
          </div>

          <div className="bg-[#0A0B0D] p-3 border border-[#2A2E33] text-center">
            <span className="text-[10px] font-mono text-[#6B7178] block uppercase">REQUIRED SOLVENT VOLUME:</span>
            <span className="text-lg font-mono font-bold text-[#E8E6E1]">{calculatedSolventMl} mL</span>
          </div>
        </div>
      </div>

      {/* Protocol Steps Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
        {/* Card 1: Thermal Equilibration */}
        <div className="bg-[#16181B] p-6 border border-[#2A2E33] space-y-3 font-body">
          <div className="flex items-center gap-2 text-[#E8E6E1] font-heading font-bold text-xs uppercase">
            <IconClock size={16} amberAccent={true} />
            <span>1. Thermal Equilibration Step (20–30 Minutes)</span>
          </div>
          <p className="text-[#B9BEC4] text-xs leading-relaxed">
            Vials stored at -20 °C must be allowed to equilibrate sealed at room temperature (20-25 °C) for 20-30 minutes prior to opening. Opening cold vials introduces atmospheric moisture condensation, accelerating hydrolytic peptide degradation.
          </p>
          <div className="bg-[#0A0B0D] p-3 border border-[#2A2E33] text-[#B9BEC4] text-[11px] font-mono">
            Equilibrating the sealed vial first is a 20-minute step that prevents irreversible degradation.
          </div>
        </div>

        {/* Card 2: Solvent Selection */}
        <div className="bg-[#16181B] p-6 border border-[#2A2E33] space-y-3 font-body">
          <div className="flex items-center gap-2 text-[#E8E6E1] font-heading font-bold text-xs uppercase">
            <IconFlask size={16} amberAccent={true} />
            <span>2. Solvent & Buffer Selection</span>
          </div>
          <p className="text-[#B9BEC4] text-xs leading-relaxed">
            For hydrophobic or acidic sequences, initial dissolution in a minimal volume of sterile 0.1% acetic acid or DMSO before dilution with PBS prevents aggregation or precipitation.
          </p>
          <ul className="space-y-1.5 text-[11px] text-[#B9BEC4] font-mono pt-1">
            <li className="flex items-center gap-2">
              <IconCheckCircle size={14} className="text-[#3F6B4E]" />
              <span>Hydrophilic Peptides: Bacteriostatic Water / 0.9% NaCl</span>
            </li>
            <li className="flex items-center gap-2">
              <IconCheckCircle size={14} className="text-[#3F6B4E]" />
              <span>Basic Peptides: Mildly Acidic Vehicle (pH 4.5 - 6.0)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
