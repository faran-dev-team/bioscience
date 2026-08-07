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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-body space-y-12 bg-theme-canvas transition-colors duration-150">
      {/* Header in Söhne Breit / Söhne */}
      <div className="max-w-3xl space-y-3">
        <span className="text-[11px] font-mono text-[#BE7A28] font-bold uppercase tracking-widest block">
          [ RESEARCH INFORMATION & RECONSTITUTION GUIDANCE ]
        </span>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-theme-primary uppercase tracking-tight">
          Handling & Reconstitution Protocols
        </h1>
        <p className="text-sm font-body text-theme-secondary leading-relaxed">
          Best practices for lyophilized peptide reconstitution, thermal equilibration, solvent selection, and handling in laboratory assay preparations.
        </p>
      </div>

      {/* Interactive Reconstitution Calculator Box */}
      <div className="bg-theme-surface p-6 border border-theme space-y-6 transition-colors">
        <div className="flex items-center gap-2 text-theme-primary font-heading font-bold uppercase text-xs border-b border-theme pb-3">
          <IconSliders size={16} amberAccent={true} />
          <span>Interactive Laboratory Reconstitution Calculator</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-end font-interface text-xs">
          <div>
            <label className="block text-theme-secondary uppercase font-semibold mb-1 text-[11px]">
              Peptide Quantity in Vial (mg):
            </label>
            <input
              type="number"
              min={1}
              value={peptideWeightMg}
              onChange={e => setPeptideWeightMg(Number(e.target.value))}
              className="w-full bg-theme-canvas border border-theme p-2.5 text-theme-primary font-mono font-bold text-xs focus:outline-none focus:border-theme-amber transition-colors"
            />
          </div>

          <div>
            <label className="block text-theme-secondary uppercase font-semibold mb-1 text-[11px]">
              Target Concentration (mg/mL):
            </label>
            <input
              type="number"
              step={0.5}
              min={0.1}
              value={targetConcMgMl}
              onChange={e => setTargetConcMgMl(Number(e.target.value))}
              className="w-full bg-theme-canvas border border-theme p-2.5 text-theme-primary font-mono font-bold text-xs focus:outline-none focus:border-theme-amber transition-colors"
            />
          </div>

          <div className="bg-theme-canvas p-3 border border-theme text-center transition-colors">
            <span className="text-[10px] font-mono text-theme-muted block uppercase">REQUIRED SOLVENT VOLUME:</span>
            <span className="text-lg font-mono font-bold text-theme-primary">{calculatedSolventMl} mL</span>
          </div>
        </div>
      </div>

      {/* Protocol Steps Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
        {/* Card 1: Thermal Equilibration */}
        <div className="bg-theme-surface p-6 border border-theme space-y-3 font-body transition-colors">
          <div className="flex items-center gap-2 text-theme-primary font-heading font-bold text-xs uppercase">
            <IconClock size={16} amberAccent={true} />
            <span>1. Thermal Equilibration Step (20–30 Minutes)</span>
          </div>
          <p className="text-theme-secondary text-xs leading-relaxed">
            Vials stored at -20 °C must be allowed to equilibrate sealed at room temperature (20-25 °C) for 20-30 minutes prior to opening. Opening cold vials introduces atmospheric moisture condensation, accelerating hydrolytic peptide degradation.
          </p>
          <div className="bg-theme-canvas p-3 border border-theme text-theme-secondary text-[11px] font-mono transition-colors">
            Equilibrating the sealed vial first is a 20-minute step that prevents irreversible degradation.
          </div>
        </div>

        {/* Card 2: Solvent Selection */}
        <div className="bg-theme-surface p-6 border border-theme space-y-3 font-body transition-colors">
          <div className="flex items-center gap-2 text-theme-primary font-heading font-bold text-xs uppercase">
            <IconFlask size={16} amberAccent={true} />
            <span>2. Solvent & Buffer Selection</span>
          </div>
          <p className="text-theme-secondary text-xs leading-relaxed">
            For hydrophobic or acidic sequences, initial dissolution in a minimal volume of sterile 0.1% acetic acid or DMSO before dilution with PBS prevents aggregation or precipitation.
          </p>
          <ul className="space-y-1.5 text-[11px] text-theme-secondary font-mono pt-1">
            <li className="flex items-center gap-2">
              <IconCheckCircle size={14} className="text-verified" />
              <span>Hydrophilic Peptides: Bacteriostatic Water / 0.9% NaCl</span>
            </li>
            <li className="flex items-center gap-2">
              <IconCheckCircle size={14} className="text-verified" />
              <span>Basic Peptides: Mildly Acidic Vehicle (pH 4.5 - 6.0)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
