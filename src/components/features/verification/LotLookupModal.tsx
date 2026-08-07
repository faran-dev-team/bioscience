import React, { useState, useEffect } from 'react';
import { Modal } from '../../ui/Modal';
import { LOT_RECORDS } from '../../../data/lotRecords';
import { LotVerificationRecord } from '../../../types/compound';
import { COADocumentView } from './COADocumentView';
import { Search, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { Button } from '../../ui/Button';

interface LotLookupModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialLotNumber?: string;
}

export const LotLookupModal: React.FC<LotLookupModalProps> = ({
  isOpen,
  onClose,
  initialLotNumber = '',
}) => {
  const [searchTerm, setSearchTerm] = useState(initialLotNumber);
  const [activeRecord, setActiveRecord] = useState<LotVerificationRecord | null>(
    LOT_RECORDS[initialLotNumber] || null
  );
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (initialLotNumber) {
      setSearchTerm(initialLotNumber);
      if (LOT_RECORDS[initialLotNumber]) {
        setActiveRecord(LOT_RECORDS[initialLotNumber]);
        setErrorMsg('');
      } else {
        setActiveRecord(null);
        setErrorMsg(`Lot number '${initialLotNumber}' not recognised in current release database.`);
      }
    }
  }, [initialLotNumber]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchTerm.trim().toUpperCase();
    if (!query) return;

    if (LOT_RECORDS[query]) {
      setActiveRecord(LOT_RECORDS[query]);
      setErrorMsg('');
    } else {
      setActiveRecord(null);
      setErrorMsg(`Lot number '${query}' not recognised. Check the vial label or Certificate of Analysis.`);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Analytical Verification & Lot Retrieval"
      maxWidth="max-w-4xl"
    >
      <div className="space-y-6">
        {/* Search Bar Input */}
        <form onSubmit={handleSearch} className="flex gap-2">
          <div className="relative flex-1 font-mono">
            <input
              type="text"
              placeholder="ENTER LOT NUMBER (e.g. LOT 24-0817-C, LOT 24-0902-A)..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full bg-theme-bg border border-theme focus:border-amber-500 font-mono text-xs pl-4 pr-10 py-3 text-theme-primary placeholder-theme-muted uppercase tracking-widest focus:outline-none"
            />
            <Search className="w-4 h-4 text-amber-500 absolute right-3.5 top-3.5 transition-transform duration-140 hover:scale-125 cursor-pointer" />
          </div>
          <Button variant="amber" size="md" type="submit">
            VERIFY LOT
          </Button>
        </form>

        {/* Available Sample Lots Quick Picker */}
        <div className="bg-obsidian-950 p-3 border border-white/10 font-mono text-[11px] flex items-center gap-3">
          <span className="text-alloy-500 uppercase">TRY SAMPLE LOTS:</span>
          <div className="flex flex-wrap gap-2">
            {Object.keys(LOT_RECORDS).map(lot => (
              <button
                key={lot}
                type="button"
                onClick={() => {
                  setSearchTerm(lot);
                  setActiveRecord(LOT_RECORDS[lot]);
                  setErrorMsg('');
                }}
                className="px-2 py-1 bg-obsidian-850 hover:bg-amber-500 hover:text-obsidian-950 border border-amber-500/30 text-amber-400 font-bold transition-colors"
              >
                {lot}
              </button>
            ))}
          </div>
        </div>

        {/* Error Notification */}
        {errorMsg && (
          <div className="bg-rose-500/10 border border-rose-500/30 p-4 text-rose-400 font-mono text-xs flex items-center gap-3">
            <ShieldAlert className="w-5 h-5 flex-shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* COA Document Display */}
        {activeRecord ? (
          <div className="mt-4">
            <div className="bg-emerald-500/10 border border-emerald-500/30 p-3 mb-4 font-mono text-xs text-emerald-400 flex items-center justify-between">
              <span className="flex items-center gap-2 font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                VERIFIED RELEASE RECORD FOUND: {activeRecord.lotNumber}
              </span>
              <span className="text-[11px] text-alloy-400">HPLC PURITY: {activeRecord.purity}%</span>
            </div>
            <COADocumentView record={activeRecord} />
          </div>
        ) : (
          !errorMsg && (
            <div className="text-center py-12 text-alloy-500 font-mono text-xs space-y-2">
              <p>[ ENTER A 10-CHARACTER LOT NUMBER TO GENERATE CERTIFICATE ]</p>
              <p className="text-[11px] text-alloy-600">
                Every unit shipped carries a lot number printed directly on the vial label and carton.
              </p>
            </div>
          )
        )}
      </div>
    </Modal>
  );
};
