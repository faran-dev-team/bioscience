import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RUOComplianceStrip } from '../components/features/hero/RUOComplianceStrip';
import { CATEGORIES_DATA } from '../data/categories';
import { COMPOUNDS_DATA } from '../data/compounds';
import { FAQS_DATA } from '../data/faqs';
import { Compound, CategorySlug } from '../types/compound';
import { Button } from '../components/ui/Button';
import {
  IconArrowRight,
  IconCheckCircle,
  IconFileText,
  IconShieldCheck
} from '../components/ui/Icons';

interface CategoryPageProps {
  categorySlug: CategorySlug;
  onSelectCompound: (compound: Compound) => void;
  onOpenLotLookup: (lotNum?: string) => void;
  setActiveTab: (tab: string) => void;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({
  categorySlug,
  onSelectCompound,
  onOpenLotLookup,
  setActiveTab,
}) => {
  const [selectedPurity, setSelectedPurity] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('Name');

  const category = CATEGORIES_DATA.find(c => c.slug === categorySlug) || CATEGORIES_DATA[0];

  // Compounds belonging to this category
  let compounds = COMPOUNDS_DATA.filter(
    c => c.categorySlug === category.slug || category.slug === 'catalogue'
  );

  if (selectedPurity !== 'All') {
    if (selectedPurity === '99.5+') {
      compounds = compounds.filter(c => c.purity >= 99.5);
    } else if (selectedPurity === '99.0+') {
      compounds = compounds.filter(c => c.purity >= 99.0);
    }
  }

  if (sortBy === 'Name') {
    compounds.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === 'Purity') {
    compounds.sort((a, b) => b.purity - a.purity);
  } else if (sortBy === 'Price') {
    compounds.sort((a, b) => a.price - b.price);
  }

  const categoryFaqs = FAQS_DATA.slice(0, 5);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="space-y-12 bg-[#0A0B0D] text-[#E8E6E1] font-body"
    >
      {/* 1. HERO (PAGE 09.1) */}
      <section className="pt-12 pb-14 px-4 sm:px-6 lg:px-8 border-b border-[#2A2E33] bg-[#0E1012]">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono text-[#BE7A28] font-bold uppercase tracking-widest">
              RESEARCH COMPOUND CATEGORY
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#E8E6E1]">
            {category.title}
          </h1>

          <p className="text-sm sm:text-base text-[#B9BEC4] font-body leading-relaxed max-w-3xl">
            {category.shortDesc}
          </p>
        </div>
      </section>

      {/* Compliance Strip */}
      <RUOComplianceStrip />

      {/* 2. ABOUT THIS CATEGORY & STANDARDS APPLIED */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 bg-[#16181B] border border-[#2A2E33] p-6 sm:p-8 space-y-4 text-xs font-body text-[#B9BEC4] leading-relaxed">
            <h2 className="font-heading text-lg font-bold text-[#E8E6E1] uppercase tracking-wider border-b border-[#2A2E33] pb-2">
              About this category
            </h2>
            {category.aboutDesc.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          <div className="lg:col-span-5 bg-[#16181B] border border-[#2A2E33] p-6 sm:p-8 space-y-4 text-xs font-body text-[#B9BEC4]">
            <h2 className="font-heading text-lg font-bold text-[#E8E6E1] uppercase tracking-wider border-b border-[#2A2E33] pb-2">
              Standards applied across this category
            </h2>
            <ul className="space-y-2">
              {category.standards.map((std, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <IconCheckCircle size={14} className="text-[#3F6B4E] flex-shrink-0 mt-0.5" />
                  <span className="text-[11px] leading-relaxed">{std}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2 border-t border-[#2A2E33]">
              <button
                onClick={() => {
                  setActiveTab('quality');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs font-mono font-bold text-[#BE7A28] hover:underline inline-flex items-center gap-1.5"
              >
                <span>View our full Quality Assurance standards</span>
                <IconArrowRight size={12} />
              </button>
            </div>
          </div>
        </div>

        {/* 3. PRODUCT GRID & FILTERS */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#2A2E33] pb-4">
            <div>
              <h2 className="font-heading text-xl font-bold text-[#E8E6E1] uppercase tracking-wider">
                Available Compounds ({compounds.length})
              </h2>
              <p className="text-xs font-mono text-[#6B7178]">
                Released against written specifications with lot-specific Certificate of Analysis.
              </p>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="text-[#6B7178]">Purity:</span>
                <select
                  value={selectedPurity}
                  onChange={e => setSelectedPurity(e.target.value)}
                  className="bg-[#16181B] border border-[#2A2E33] px-2.5 py-1 text-xs text-[#E8E6E1] focus:border-[#BE7A28] focus:outline-none"
                >
                  <option value="All">All Grades</option>
                  <option value="99.0+">≥ 99.0%</option>
                  <option value="99.5+">≥ 99.5%</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[#6B7178]">Sort:</span>
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                  className="bg-[#16181B] border border-[#2A2E33] px-2.5 py-1 text-xs text-[#E8E6E1] focus:border-[#BE7A28] focus:outline-none"
                >
                  <option value="Name">Compound Name</option>
                  <option value="Purity">Highest Purity</option>
                  <option value="Price">Price</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {compounds.map(compound => (
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
                    <div><span className="text-[#6B7178]">Purity:</span> ≥{compound.purity}% (RP-HPLC)</div>
                    <div><span className="text-[#6B7178]">Format:</span> {compound.vialSize} / {compound.format}</div>
                    <div><span className="text-[#6B7178]">Counter-ion:</span> {compound.counterIon}</div>
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
                    <span>View Product Details →</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. SELECTING WITHIN THIS CATEGORY */}
        <div className="bg-[#16181B] border border-[#2A2E33] p-6 sm:p-8 space-y-4 text-xs font-body text-[#B9BEC4]">
          <h2 className="font-heading text-lg font-bold text-[#E8E6E1] uppercase tracking-wider border-b border-[#2A2E33] pb-2">
            Selecting within this category
          </h2>
          {category.selectionGuidance.map((sg, idx) => (
            <p key={idx} className="leading-relaxed">{sg}</p>
          ))}
          <div className="pt-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setActiveTab('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <span>Contact Our Team for Specification Advice</span>
            </Button>
          </div>
        </div>

        {/* 5. CATEGORY FAQ */}
        <div className="space-y-4">
          <h2 className="font-heading text-lg font-bold text-[#E8E6E1] uppercase tracking-wider">
            Category Guidance & FAQ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-body">
            {categoryFaqs.map(faq => (
              <div key={faq.id} className="bg-[#16181B] border border-[#2A2E33] p-5 space-y-2">
                <h3 className="font-heading font-bold text-xs text-[#E8E6E1] uppercase tracking-wider">
                  {faq.question}
                </h3>
                <p className="text-[#B9BEC4] leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Category Footer Note */}
        <div className="bg-[#0A0B0D] border border-[#2A2E33] p-5 text-xs text-[#6B7178] font-body space-y-3">
          <p>
            Products in this category are supplied exclusively for laboratory research. BioScience Depot makes no medical, therapeutic, diagnostic, or clinical claims regarding any product, and provides no guidance on use outside a controlled research setting.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-1 font-interface">
            <Button
              variant="amber"
              size="sm"
              onClick={() => {
                setActiveTab('catalogue');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <span>Explore Research Products</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setActiveTab('quality');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <span>View Quality Standards</span>
            </Button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
