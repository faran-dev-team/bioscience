import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RUOComplianceStrip } from '../components/features/hero/RUOComplianceStrip';
import { COMPOUNDS_DATA } from '../data/compounds';
import { Compound } from '../types/compound';
import { Button } from '../components/ui/Button';
import {
  IconSearch,
  IconShoppingBag,
  IconFileText,
  IconArrowRight
} from '../components/ui/Icons';

interface SearchResultsPageProps {
  initialQuery?: string;
  onSelectCompound: (compound: Compound) => void;
  onOpenLotLookup: (lotNum?: string) => void;
  setActiveTab: (tab: string) => void;
  onOpenSynthesis?: () => void;
}

export const SearchResultsPage: React.FC<SearchResultsPageProps> = ({
  initialQuery = '',
  onSelectCompound,
  onOpenLotLookup,
  setActiveTab,
  onOpenSynthesis,
}) => {
  const [query, setQuery] = useState(initialQuery);
  const [activeQuery, setActiveQuery] = useState(initialQuery);

  const suggestedTerms = ['GHK-Cu', 'BPC-157', 'Semaglutide', 'Tirzepatide', 'TB-500', 'Epithalon', 'LOT 24-0817-C'];

  const results = COMPOUNDS_DATA.filter(compound => {
    if (!activeQuery.trim()) return true;
    const q = activeQuery.toLowerCase().trim();
    return (
      compound.name.toLowerCase().includes(q) ||
      compound.sequence.toLowerCase().includes(q) ||
      compound.sku.toLowerCase().includes(q) ||
      compound.latestLot.toLowerCase().includes(q) ||
      compound.categoryName.toLowerCase().includes(q) ||
      compound.casNumber.includes(q)
    );
  });

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveQuery(query);
  };

  const handleSuggestionClick = (term: string) => {
    setQuery(term);
    setActiveQuery(term);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="space-y-12 bg-[#0A0B0D] text-[#E8E6E1] font-body"
    >
      {/* 1. HERO & SEARCH BAR */}
      <section className="pt-12 pb-14 px-4 sm:px-6 lg:px-8 border-b border-[#2A2E33] bg-[#0E1012]">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-[11px] font-mono text-[#BE7A28] font-bold uppercase tracking-widest block">
            [ SECTION 10.3 — CATALOGUE SEARCH SYSTEM ]
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#E8E6E1]">
            Search Catalogue
          </h1>

          <form onSubmit={handleSearchSubmit} className="pt-2 max-w-2xl space-y-2">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search compounds, sequences, or lot numbers"
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="w-full bg-[#16181B] border border-[#2A2E33] px-4 py-3.5 pl-10 text-xs font-mono text-[#E8E6E1] placeholder:text-[#6B7178] focus:border-[#BE7A28] focus:outline-none"
              />
              <IconSearch size={16} className="absolute left-3.5 text-[#6B7178]" />
              <button
                type="submit"
                className="absolute right-2 bg-[#BE7A28] text-[#0A0B0D] px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-wider"
              >
                Search
              </button>
            </div>
            <p className="text-[11px] text-[#6B7178] font-mono">
              Search by compound name, sequence identifier, catalogue number, or lot number.
            </p>
          </form>

          {/* Suggested / Recent Searches */}
          <div className="flex flex-wrap items-center gap-2 pt-2 text-[11px] font-mono">
            <span className="text-[#6B7178] uppercase font-bold">Suggested:</span>
            {suggestedTerms.map(term => (
              <button
                key={term}
                onClick={() => handleSuggestionClick(term)}
                className="bg-[#16181B] border border-[#2A2E33] px-2.5 py-1 text-[#B9BEC4] hover:text-[#E8E6E1] hover:border-[#BE7A28] transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Strip */}
      <RUOComplianceStrip />

      {/* 2. SEARCH RESULTS DISPLAY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-[#2A2E33] pb-3 flex items-center justify-between">
          <h2 className="font-heading text-xl font-bold text-[#E8E6E1] uppercase tracking-wide">
            {activeQuery ? (
              results.length === 1
                ? `1 result for "${activeQuery}"`
                : `${results.length} results for "${activeQuery}"`
            ) : (
              `Full Standing Catalogue (${results.length} compounds)`
            )}
          </h2>
        </div>

        {results.length === 0 ? (
          /* Zero Results State (Section 10.3) */
          <div className="bg-[#16181B] border border-[#2A2E33] p-8 sm:p-12 text-center space-y-6 max-w-2xl mx-auto">
            <div className="w-12 h-12 bg-[#2A2E33]/50 text-[#6B7178] flex items-center justify-center mx-auto rounded-full">
              <IconSearch size={22} />
            </div>

            <div className="space-y-2">
              <h3 className="font-heading text-lg font-bold text-[#E8E6E1] uppercase tracking-wide">
                No results for "{activeQuery}".
              </h3>
              <p className="text-xs text-[#B9BEC4] font-body leading-relaxed">
                Try a compound name, sequence identifier, or catalogue number. If you are looking for a compound not currently listed, our custom synthesis team can discuss it with you.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2 font-interface">
              <Button
                variant="amber"
                size="md"
                onClick={() => {
                  setActiveTab('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <span>Contact Our Team</span>
              </Button>

              <Button
                variant="outline"
                size="md"
                onClick={() => {
                  setActiveQuery('');
                  setQuery('');
                  setActiveTab('catalogue');
                }}
              >
                <span>Browse All Categories</span>
              </Button>
            </div>
          </div>
        ) : (
          /* Results Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map(compound => (
              <div
                key={compound.id}
                className="bg-[#16181B] border border-[#2A2E33] p-6 space-y-4 flex flex-col justify-between hover:border-[#BE7A28] transition-colors group"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className="text-[#BE7A28] font-bold">{compound.sku}</span>
                    <span className="text-[#3F6B4E] bg-[#3F6B4E]/10 px-1.5 py-0.5 border border-[#3F6B4E]/30">
                      {compound.stockStatus}
                    </span>
                  </div>

                  <h3 className="font-heading text-base font-bold text-[#E8E6E1] group-hover:text-[#BE7A28] transition-colors uppercase tracking-wide">
                    {compound.name}
                  </h3>

                  <div className="bg-[#0A0B0D] p-3 border border-[#2A2E33] text-[11px] font-mono space-y-1 text-[#B9BEC4]">
                    <div><span className="text-[#6B7178]">Sequence:</span> <span className="line-clamp-1">{compound.sequence}</span></div>
                    <div><span className="text-[#6B7178]">Purity:</span> ≥{compound.purity}% (RP-HPLC)</div>
                    <div><span className="text-[#6B7178]">Format:</span> {compound.vialSize} / {compound.format}</div>
                  </div>

                  <p className="text-xs text-[#B9BEC4] line-clamp-2 leading-relaxed">
                    {compound.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#2A2E33] flex items-center justify-between font-interface">
                  <div className="font-mono text-sm font-bold text-[#E8E6E1]">
                    ${compound.price.toFixed(2)} <span className="text-[10px] font-normal text-[#6B7178]">USD</span>
                  </div>

                  <Button
                    variant="amber"
                    size="sm"
                    onClick={() => onSelectCompound(compound)}
                  >
                    <span>View Details →</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </motion.div>
  );
};
