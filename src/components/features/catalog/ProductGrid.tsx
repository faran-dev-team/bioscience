import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPOUNDS_DATA } from '../../../data/compounds';
import { Compound } from '../../../types/compound';
import { ProductCard } from './ProductCard';
import { IconSearch } from '../../ui/Icons';

interface ProductGridProps {
  onSelectCompound: (compound: Compound) => void;
  onOpenLotLookup: (lotNum: string) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  onSelectCompound,
  onOpenLotLookup,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [minPurity, setMinPurity] = useState<number>(99.0);

  const categories: string[] = [
    'All',
    'Catalogue Research Peptides',
    'Peptide Fragments and Analogues',
    'Cyclic and Modified Peptides',
    'Reference Standards',
    'Laboratory Consumables',
  ];

  const filteredCompounds = useMemo(() => {
    return COMPOUNDS_DATA.filter(compound => {
      const matchesSearch =
        compound.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        compound.sequence.toLowerCase().includes(searchTerm.toLowerCase()) ||
        compound.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
        compound.casNumber.includes(searchTerm);

      const matchesCategory =
        selectedCategory === 'All' || compound.categoryName === selectedCategory;

      const matchesPurity = compound.purity >= minPurity;

      return matchesSearch && matchesCategory && matchesPurity;
    });
  }, [searchTerm, selectedCategory, minPurity]);

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6 font-body">
      {/* Category Tabs & Search HUD */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#2A2E33] pb-4">
          <div>
            <span className="font-mono text-[11px] text-[#BE7A28] uppercase tracking-widest font-bold block mb-1">
              [ RESEARCH CATALOGUE SPECIFICATION ]
            </span>
            <h2 className="font-heading text-2xl font-bold text-[#E8E6E1] uppercase tracking-wider">
              Analytically Verified Research Peptides
            </h2>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search compounds or CAS #..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full bg-[#16181B] border border-[#2A2E33] pl-9 pr-4 py-2 text-xs font-mono text-[#E8E6E1] placeholder:text-[#6B7178] focus:border-[#BE7A28] focus:outline-none transition-colors"
            />
            <IconSearch size={14} className="absolute left-3 top-3 text-[#6B7178]" />
          </div>
        </div>

        {/* Filters Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 font-interface text-xs">
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map(cat => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 uppercase tracking-wider text-[11px] font-semibold transition-colors border ${
                    isSelected
                      ? 'bg-[#BE7A28] text-[#0A0B0D] border-[#BE7A28] font-bold'
                      : 'bg-[#16181B] text-[#B9BEC4] border-[#2A2E33] hover:text-[#E8E6E1]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="text-[#6B7178]">Min Purity:</span>
            <select
              value={minPurity}
              onChange={e => setMinPurity(Number(e.target.value))}
              className="bg-[#16181B] border border-[#2A2E33] px-2 py-1 text-xs text-[#E8E6E1] focus:border-[#BE7A28] focus:outline-none"
            >
              <option value={99.0}>≥ 99.0% (HPLC)</option>
              <option value={99.5}>≥ 99.5% (HPLC)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredCompounds.map(compound => (
            <ProductCard
              key={compound.id}
              compound={compound}
              onSelect={onSelectCompound}
              onOpenLotLookup={onOpenLotLookup}
            />
          ))}
        </AnimatePresence>
      </div>

      {filteredCompounds.length === 0 && (
        <div className="bg-[#16181B] border border-[#2A2E33] p-12 text-center space-y-3 font-mono">
          <p className="text-sm text-[#E8E6E1]">No research compounds matched your filter criteria.</p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('All');
              setMinPurity(99.0);
            }}
            className="text-xs text-[#BE7A28] font-bold hover:underline"
          >
            Reset Filters
          </button>
        </div>
      )}
    </section>
  );
};
