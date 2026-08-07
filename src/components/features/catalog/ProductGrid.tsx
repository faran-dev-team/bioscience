import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPOUNDS_DATA } from '../../../data/compounds';
import { CategoryType, Compound } from '../../../types/compound';
import { ProductCard } from './ProductCard';
import { IconSearch, IconSliders } from '../../ui/Icons';

interface ProductGridProps {
  onSelectCompound: (compound: Compound) => void;
  onOpenLotLookup: (lotNum: string) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  onSelectCompound,
  onOpenLotLookup,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('All');
  const [minPurity, setMinPurity] = useState<number>(99.0);

  const categories: CategoryType[] = [
    'All',
    'Tissue Repair & Recovery',
    'Metabolic & Incretin',
    'Anti-Aging & Cellular',
    'Growth Factor & GH Secretagogues',
  ];

  const filteredCompounds = useMemo(() => {
    return COMPOUNDS_DATA.filter(compound => {
      const matchesSearch =
        compound.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        compound.sequence.toLowerCase().includes(searchTerm.toLowerCase()) ||
        compound.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
        compound.casNumber.includes(searchTerm);

      const matchesCategory =
        selectedCategory === 'All' || compound.category === selectedCategory;

      const matchesPurity = compound.purity >= minPurity;

      return matchesSearch && matchesCategory && matchesPurity;
    });
  }, [searchTerm, selectedCategory, minPurity]);

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6">
      {/* Category Tabs & Search HUD */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-theme pb-4">
          <div>
            <span className="font-mono text-[11px] text-[#BE7A28] uppercase tracking-widest font-bold block mb-1">
              [ RESEARCH CATALOGUE SPECIFICATION ]
            </span>
            <h2 className="font-heading text-2xl font-bold text-theme-primary uppercase tracking-wider">
              Analytically Verified Research Peptides
            </h2>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80 font-mono">
            <input
              type="text"
              placeholder="SEARCH COMPOUND, SEQUENCE, CAS..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full bg-theme-surface border border-theme focus:border-theme-amber text-xs px-3.5 py-2.5 text-theme-primary placeholder-theme-muted uppercase tracking-wider focus:outline-none transition-colors"
            />
            <span className="absolute right-3 top-2.5 text-theme-muted">
              <IconSearch size={15} />
            </span>
          </div>
        </div>

        {/* Filters HUD */}
        <div className="flex flex-wrap items-center justify-between gap-3 font-interface text-xs bg-theme-surface p-3 border border-theme transition-colors">
          {/* Category Pills */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 uppercase tracking-wider text-[11px] font-semibold transition-colors border ${
                  selectedCategory === cat
                    ? 'border-theme-amber bg-theme-amber/10 text-theme-primary'
                    : 'border-theme bg-theme-canvas text-theme-secondary hover:text-theme-primary hover:border-[#3A3F45]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Purity Threshold Filter */}
          <div className="flex items-center gap-2 text-theme-secondary font-mono text-[11px]">
            <IconSliders size={14} className="text-theme-muted" />
            <span>MIN PURITY:</span>
            <select
              value={minPurity}
              onChange={e => setMinPurity(Number(e.target.value))}
              className="bg-theme-canvas border border-theme text-theme-primary font-bold px-2 py-1 focus:outline-none"
            >
              <option value={99.0}>≥ 99.0% (Standard HPLC)</option>
              <option value={99.4}>≥ 99.4% (Ultra Purity)</option>
              <option value={99.8}>≥ 99.8% (Maximum Grade)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid Results with AnimatePresence */}
      {filteredCompounds.length === 0 ? (
        <div className="text-center py-16 font-mono text-xs text-theme-muted border border-dashed border-theme space-y-2">
          <p>[ NO MATCHING COMPOUNDS FOUND ]</p>
          <p className="text-[11px]">
            Try adjusting your search keyword or category filter.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
      )}
    </section>
  );
};
