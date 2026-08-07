import React, { useState } from 'react';
import { LOT_RECORDS } from '../data/lotRecords';
import { LotVerificationRecord } from '../types/compound';
import { COADocumentView } from '../components/features/verification/COADocumentView';
import { IconSearch, IconAlertTriangle, IconCheckCircle } from '../components/ui/Icons';
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-body space-y-10 bg-theme-canvas transition-colors duration-150">
      <div className="max-w-3xl space-y-3">
        <span className="text-[11px] font-mono text-[#BE7A28] font-bold uppercase tracking-widest block">
          [ LOT RETRIEVAL & COA HUB ]
        </span>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-theme-primary uppercase tracking-tight">
          Retrieve Official Analytical Verification Records
        </h1>
        <p className="text-sm text-theme-secondary leading-relaxed">
          Four seconds, no account required. Enter the 10-character Lot Number printed on your vial or packaging to view and download the official Certificate of Analysis.
        </p>
      </div>

      {/* Input Form Box */}
      <form onSubmit={handleSearch} className="max-w-3xl flex flex-col sm:flex-row gap-2.5 font-mono text-xs">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="ENTER VIAL LOT NUMBER (e.g. LOT 24-0817-C)..."
            value={lotInput}
            onChange={e => setLotInput(e.target.value)}
            className="w-full bg-theme-surface border border-theme focus:border-theme-amber pl-3.5 pr-10 py-3 text-theme-primary placeholder-theme-muted uppercase tracking-widest focus:outline-none text-xs transition-colors"
          />
          <button
            type="submit"
            className="absolute right-3 top-3 text-theme-muted hover:text-amber-hover transition-colors"
            title="Retrieve Record"
          >
            <IconSearch size={16} />
          </button>
        </div>
        <Button variant="primary" size="md" type="submit">
          <span>Retrieve Record →</span>
        </Button>
      </form>

      {/* Quick Lot Selectors */}
      <div className="max-w-3xl bg-theme-surface p-4 border border-theme font-mono text-xs flex flex-wrap items-center gap-2.5 transition-colors">
        <span className="text-theme-muted uppercase text-[11px]">AVAILABLE LOT DATABASE:</span>
        {Object.keys(LOT_RECORDS).map(lot => (
          <button
            key={lot}
            onClick={() => {
              setLotInput(lot);
              setActiveRecord(LOT_RECORDS[lot]);
              setErrorMsg('');
            }}
            className="px-2.5 py-1 bg-theme-canvas hover:bg-theme-raised hover:text-theme-primary border border-theme text-theme-secondary font-bold transition-colors text-xs"
          >
            {lot}
          </button>
        ))}
      </div>

      {/* Error Message */}
      {errorMsg && (
        <div className="max-w-3xl bg-theme-surface border border-[#BE7A28] p-4 text-[#BE7A28] font-mono text-xs flex items-center gap-3">
          <IconAlertTriangle size={18} amberAccent={true} />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Active Record Display */}
      {activeRecord && (
        <div className="max-w-4xl space-y-4">
          <div className="bg-verified-bg border border-verified p-3 font-mono text-xs text-verified-light flex items-center justify-between">
            <span className="flex items-center gap-2 font-bold">
              <IconCheckCircle size={15} />
              VERIFIED RELEASE RECORD FOUND: {activeRecord.lotNumber}
            </span>
            <span className="text-theme-secondary text-[11px]">STATUS: {activeRecord.status}</span>
          </div>
          <COADocumentView record={activeRecord} />
        </div>
      )}
    </div>
  );
};
