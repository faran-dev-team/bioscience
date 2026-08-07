import React, { useState, useEffect } from 'react';
import { Modal } from '../../ui/Modal';
import { LOT_RECORDS } from '../../../data/lotRecords';
import { LotVerificationRecord } from '../../../types/compound';
import { COADocumentView } from './COADocumentView';
import { IconSearch, IconAlertTriangle, IconCheckCircle } from '../../ui/Icons';
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
      <div className="space-y-5 font-body">
        {/* Search Bar Input */}
        <form onSubmit={handleSearch} className="flex gap-2">
          <div className="relative flex-1 font-mono">
            <input
              type="text"
              placeholder="ENTER LOT NUMBER (e.g. LOT 24-0817-C)..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full bg-[#0A0B0D] border border-[#2A2E33] focus:border-[#BE7A28] font-mono text-xs pl-3.5 pr-10 py-2.5 text-[#E8E6E1] placeholder-[#6B7178] uppercase tracking-widest focus:outline-none"
            />
            <button
              type="submit"
              className="absolute right-3 top-2.5 text-[#6B7178] hover:text-[#E3A455] transition-colors"
              title="Search Lot"
            >
              <IconSearch size={15} />
            </button>
          </div>
          <Button variant="primary" size="md" type="submit">
            <span>Verify Lot</span>
          </Button>
        </form>

        {/* Available Sample Lots Quick Picker */}
        <div className="bg-[#0A0B0D] p-3 border border-[#2A2E33] font-mono text-[11px] flex flex-wrap items-center gap-2">
          <span className="text-[#6B7178] uppercase">SAMPLE RELEASES:</span>
          {Object.keys(LOT_RECORDS).map(lot => (
            <button
              key={lot}
              type="button"
              onClick={() => {
                setSearchTerm(lot);
                setActiveRecord(LOT_RECORDS[lot]);
                setErrorMsg('');
              }}
              className="px-2 py-0.5 bg-[#16181B] hover:bg-[#1E2126] hover:text-[#E8E6E1] border border-[#2A2E33] text-[#B9BEC4] font-bold transition-colors"
            >
              {lot}
            </button>
          ))}
        </div>

        {/* Error Notification */}
        {errorMsg && (
          <div className="bg-[#16181B] border border-[#BE7A28] p-3.5 text-[#E3A455] font-mono text-xs flex items-center gap-2.5">
            <IconAlertTriangle size={16} amberAccent={true} />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* COA Document Display */}
        {activeRecord ? (
          <div className="mt-4">
            <div className="bg-[#18241C] border border-[#3F6B4E] p-2.5 mb-3 font-mono text-xs text-[#528B66] flex items-center justify-between">
              <span className="flex items-center gap-2 font-bold">
                <IconCheckCircle size={14} />
                VERIFIED RELEASE RECORD FOUND: {activeRecord.lotNumber}
              </span>
              <span className="text-[11px] text-[#B9BEC4]">HPLC PURITY: {activeRecord.purity}%</span>
            </div>
            <COADocumentView record={activeRecord} />
          </div>
        ) : (
          !errorMsg && (
            <div className="text-center py-10 text-[#6B7178] font-mono text-xs space-y-1">
              <p>[ ENTER A 10-CHARACTER LOT NUMBER TO GENERATE CERTIFICATE ]</p>
              <p className="text-[11px] text-[#6B7178]">
                Every unit shipped carries a lot number printed directly on the vial label and carton.
              </p>
            </div>
          )
        )}
      </div>
    </Modal>
  );
};
