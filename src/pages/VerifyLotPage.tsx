import React, { useState } from 'react';
import { LOT_RECORDS } from '../data/lotRecords';
import { LotVerificationRecord } from '../types/compound';
import { COADocumentView } from '../components/features/verification/COADocumentView';
import { Search, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const VerifyLotPage: React.FC = () => {
  const [lotInput, setLotInput] = useState('LOT 24-0817-C');
  const [activeRecord, setActiveRecord] = useState<LotVerificationRecord | null>(LOT_RECORDS['LOT 24-0817-C']);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = lotInput.trim().toUpperCase();
    if (LOT_RECORDS[query]) {
      setActiveRecord(LOT_RECORDS[query]);
      setErrorMsg('');
    } else {
      setActiveRecord(null);
      setErrorMsg(`Lot number '${query}' not recognised in release database. Check vial label.`);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-sans space-y-10">
      <div className="max-w-3xl space-y-4 font-mono">
        <span className="text-xs text-amber-500 font-bold uppercase tracking-widest block">
          [ LOT RETRIEVAL & COA HUB ]
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-alloy-100 uppercase tracking-tight">
          Retrieve Official Analytical Verification Records
        </h1>
        <p className="text-sm font-sans text-alloy-300 leading-relaxed">
          Four seconds, no account required. Enter the 10-character Lot Number printed on your vial or packaging to view and download the official Certificate of Analysis.
        </p>
      </div>

      {/* Input Form Box */}
      <form onSubmit={handleSearch} className="max-w-3xl flex flex-col sm:flex-row gap-3 font-mono text-xs">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="ENTER VIAL LOT NUMBER (e.g. LOT 24-0817-C)..."
            value={lotInput}
            onChange={e => setLotInput(e.target.value)}
            className="w-full bg-theme-surface border border-theme focus:border-amber-500 pl-4 pr-10 py-3.5 text-theme-primary placeholder-theme-muted uppercase tracking-widest focus:outline-none"
          />
          <Search className="w-4 h-4 text-amber-500 absolute right-3.5 top-4 transition-transform duration-140 hover:scale-125 cursor-pointer" />
        </div>
        <Button variant="amber" size="lg" type="submit">
          RETRIEVE RECORD →
        </Button>
      </form>

      {/* Quick Lot Selectors */}
      <div className="max-w-3xl bg-obsidian-950 p-4 border border-white/10 font-mono text-xs flex flex-wrap items-center gap-3">
        <span className="text-alloy-500 uppercase text-[11px]">AVAILABLE LOT DATABASE:</span>
        {Object.keys(LOT_RECORDS).map(lot => (
          <button
            key={lot}
            onClick={() => {
              setLotInput(lot);
              setActiveRecord(LOT_RECORDS[lot]);
              setErrorMsg('');
            }}
            className="px-3 py-1 bg-obsidian-850 hover:bg-amber-500 hover:text-obsidian-950 border border-amber-500/30 text-amber-400 font-bold transition-colors text-xs"
          >
            {lot}
          </button>
        ))}
      </div>

      {/* Error Message */}
      {errorMsg && (
        <div className="max-w-3xl bg-rose-500/10 border border-rose-500/30 p-4 text-rose-400 font-mono text-xs flex items-center gap-3">
          <ShieldAlert className="w-5 h-5 flex-shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Active Record Display */}
      {activeRecord && (
        <div className="max-w-4xl space-y-4">
          <div className="bg-emerald-500/10 border border-emerald-500/30 p-3 font-mono text-xs text-emerald-400 flex items-center justify-between">
            <span className="flex items-center gap-2 font-bold">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              VERIFIED RELEASE RECORD FOUND: {activeRecord.lotNumber}
            </span>
            <span className="text-alloy-400">STATUS: {activeRecord.status}</span>
          </div>
          <COADocumentView record={activeRecord} />
        </div>
      )}
    </div>
  );
};
