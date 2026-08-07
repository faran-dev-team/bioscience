import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPOUNDS_DATA } from '../../../data/compounds';
import { CategoryType, Compound } from '../../../types/compound';
import { ProductCard } from './ProductCard';
import { Search, SlidersHorizontal } from 'lucide-react';

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
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8 font-sans">
      {/* Category Tabs & Search HUD */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-theme pb-6">
          <div>
            <span className="font-mono text-xs text-amber-500 uppercase tracking-widest font-bold block mb-1">
              [ CATALOGUE SPECIFICATION ]
            </span>
            <h2 className="font-mono text-2xl font-bold text-theme-primary uppercase tracking-wider">
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
              className="w-full bg-theme-surface border border-theme focus:border-amber-500 text-xs px-4 py-2.5 text-theme-primary placeholder-theme-muted uppercase tracking-wider focus:outline-none transition-colors"
            />
            <Search className="w-4 h-4 text-amber-500 absolute right-3 top-3" />
          </div>
        </div>

        {/* Filters HUD */}
        <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs bg-theme-surface p-4 border border-theme">
          {/* Category Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 uppercase tracking-wider transition-all border ${
                  selectedCategory === cat
                    ? 'border-amber-500 bg-amber-500/10 text-amber-500 font-bold'
                    : 'border-theme bg-theme-bg text-theme-secondary hover:text-amber-500 hover:border-amber-500/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Purity Threshold Filter */}
          <div className="flex items-center gap-2 text-theme-secondary">
            <SlidersHorizontal className="w-4 h-4 text-amber-500" />
            <span>MIN PURITY:</span>
            <select
              value={minPurity}
              onChange={e => setMinPurity(Number(e.target.value))}
              className="bg-theme-bg border border-theme text-amber-500 font-bold px-2 py-1 focus:outline-none"
            >
              <option value={99.0}>≥ 99.0% (HPLC Standard)</option>
              <option value={99.4}>≥ 99.4% (Ultra Purity)</option>
              <option value={99.8}>≥ 99.8% (Maximum Grade)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid Results with AnimatePresence */}
      {filteredCompounds.length === 0 ? (
        <div className="text-center py-20 font-mono text-xs text-theme-muted border border-dashed border-theme space-y-2">
          <p>[ NO MATCHING COMPOUNDS FOUND ]</p>
          <p className="text-[11px]">
            Try adjusting your search term or category filters.
          </p>
        </div>
      ) : (
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
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
        </motion.div>
      )}
    </section>
  );
};
