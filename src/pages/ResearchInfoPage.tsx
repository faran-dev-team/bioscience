import React, { useState } from 'react';
import { Snowflake, FlaskConical, Clock, AlertTriangle, CheckCircle2, Calculator } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const ResearchInfoPage: React.FC = () => {
  const [peptideWeightMg, setPeptideWeightMg] = useState<number>(10);
  const [targetConcMgMl, setTargetConcMgMl] = useState<number>(2);

  const calculatedSolventMl = (peptideWeightMg / targetConcMgMl).toFixed(2);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-sans space-y-12">
      {/* Header */}
      <div className="max-w-3xl space-y-4 font-mono">
        <span className="text-xs text-amber-500 font-bold uppercase tracking-widest block">
          [ EDUCATIONAL CENTER & RECONSTITUTION GUIDANCE ]
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-alloy-100 uppercase tracking-tight">
          Handling & Reconstitution Protocols
        </h1>
        <p className="text-sm font-sans text-alloy-300 leading-relaxed">
          Best practices for lyophilized peptide reconstitution, thermal equilibration, solvent selection, and handling in laboratory assay preparations.
        </p>
      </div>

      {/* Interactive Reconstitution Calculator Box */}
      <div className="glass-panel p-6 border-2 border-amber-500/40 font-mono text-xs space-y-6">
        <div className="flex items-center gap-2 text-amber-400 font-bold uppercase text-sm border-b border-white/10 pb-3">
          <Calculator className="w-5 h-5 text-amber-500" />
          INTERACTIVE LABORATORY RECONSTITUTION CALCULATOR
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          <div>
            <label className="block text-alloy-400 uppercase font-bold mb-1">
              PEPTIDE QUANTITY IN VIAL (mg):
            </label>
            <input
              type="number"
              min={1}
              value={peptideWeightMg}
              onChange={e => setPeptideWeightMg(Number(e.target.value))}
              className="w-full bg-obsidian-850 border border-white/20 p-2.5 text-amber-400 font-bold text-sm focus:outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <label className="block text-alloy-400 uppercase font-bold mb-1">
              TARGET CONCENTRATION (mg/mL):
            </label>
            <input
              type="number"
              step={0.5}
              min={0.1}
              value={targetConcMgMl}
              onChange={e => setTargetConcMgMl(Number(e.target.value))}
              className="w-full bg-obsidian-850 border border-white/20 p-2.5 text-amber-400 font-bold text-sm focus:outline-none focus:border-amber-500"
            />
          </div>

          <div className="bg-obsidian-950 p-3 border border-amber-500/30 text-center">
            <span className="text-[10px] text-alloy-500 block uppercase">REQUIRED SOLVENT VOLUME:</span>
            <span className="text-xl font-bold text-amber-400">{calculatedSolventMl} mL</span>
          </div>
        </div>
      </div>

      {/* Protocol Steps Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-mono text-xs">
        {/* Card 1: Thermal Equilibration */}
        <div className="glass-panel p-6 border border-white/10 space-y-4">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-sm uppercase">
            <Clock className="w-5 h-5 text-amber-500" />
            1. Thermal Equilibration Step (20–30 Minutes)
          </div>
          <p className="text-alloy-300 font-sans text-xs leading-relaxed">
            Vials stored at -20 °C must be allowed to equilibrate sealed at room temperature (20-25 °C) for 20-30 minutes prior to opening. Opening cold vials introduces atmospheric moisture condensation, accelerating hydrolytic peptide degradation.
          </p>
          <div className="bg-amber-500/10 p-3 border border-amber-500/30 text-amber-400 text-[11px]">
            Equilibrating the sealed vial first is a 20-minute step that prevents irreversible degradation.
          </div>
        </div>

        {/* Card 2: Solvent Selection */}
        <div className="glass-panel p-6 border border-white/10 space-y-4">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-sm uppercase">
            <FlaskConical className="w-5 h-5 text-amber-500" />
            2. Solvent & Buffer Selection
          </div>
          <p className="text-alloy-300 font-sans text-xs leading-relaxed">
            For hydrophobic or acidic sequences, initial dissolution in a minimal volume of sterile 0.1% acetic acid or DMSO before dilution with PBS prevents aggregation or precipitation.
          </p>
          <ul className="space-y-1 text-[11px] text-alloy-400">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Hydrophilic Peptides: Bacteriostatic Water / 0.9% NaCl
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Basic Peptides: Mildly Acidic Vehicle (pH 4.5 - 6.0)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
