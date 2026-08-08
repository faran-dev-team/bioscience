import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RUOComplianceStrip } from '../components/features/hero/RUOComplianceStrip';
import { FAQS_DATA, FAQItem } from '../data/faqs';
import { Button } from '../components/ui/Button';
import {
  IconSearch,
  IconChevronDown,
  IconChevronUp,
  IconArrowRight,
  IconFileText
} from '../components/ui/Icons';

interface FAQPageProps {
  setActiveTab?: (tab: string) => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ setActiveTab }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const categories = [
    'All',
    'Research Use Only',
    'Products & Quality',
    'Documentation',
    'Ordering',
    'Shipping',
    'Storage & Handling',
    'Compliance',
    'Company'
  ];

  const filteredFaqs = FAQS_DATA.filter(faq => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesQuery =
      searchQuery === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="space-y-12 bg-[#0A0B0D] text-[#E8E6E1] font-body"
    >
      {/* HERO (PAGE 06) */}
      <section className="pt-12 pb-14 px-4 sm:px-6 lg:px-8 border-b border-[#2A2E33] bg-[#0E1012]">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-[11px] font-mono text-[#BE7A28] font-bold uppercase tracking-widest block">
            [ PAGE 06 — 50-QUESTION MASTER KNOWLEDGE BASE ]
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#E8E6E1]">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base text-[#B9BEC4] font-body leading-relaxed max-w-3xl">
            Direct answers on research use, quality, documentation, storage, shipping, and compliance.
          </p>

          {/* Real-time FAQ Search Bar */}
          <div className="pt-4 max-w-xl">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search all 50 questions (e.g. purity, cold chain, reconstitution, lot...)"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full bg-[#16181B] border border-[#2A2E33] px-4 py-3 pl-10 text-xs font-mono text-[#E8E6E1] placeholder:text-[#6B7178] focus:border-[#BE7A28] focus:outline-none"
              />
              <IconSearch size={16} className="absolute left-3.5 text-[#6B7178]" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 text-xs font-mono text-[#6B7178] hover:text-[#E8E6E1]"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Strip */}
      <RUOComplianceStrip />

      {/* CATEGORY FILTER TABS & FAQS LIST */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 font-interface text-xs">
          {categories.map(cat => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 font-semibold uppercase tracking-wider text-[11px] border transition-colors ${
                  isSelected
                    ? 'bg-[#BE7A28] text-[#0A0B0D] border-[#BE7A28] font-bold'
                    : 'bg-[#16181B] text-[#B9BEC4] border-[#2A2E33] hover:text-[#E8E6E1] hover:border-[#BE7A28]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* FAQ Count Indicator */}
        <div className="flex items-center justify-between text-xs font-mono text-[#6B7178] border-b border-[#2A2E33] pb-2">
          <span>Showing {filteredFaqs.length} of {FAQS_DATA.length} answers</span>
          {selectedCategory !== 'All' && (
            <span>Category: {selectedCategory}</span>
          )}
        </div>

        {/* Questions Accordion List */}
        <div className="space-y-3 font-interface text-xs">
          {filteredFaqs.length === 0 ? (
            <div className="bg-[#16181B] border border-[#2A2E33] p-8 text-center space-y-3">
              <p className="text-xs font-mono text-[#B9BEC4]">
                No results for "{searchQuery}". Try a broader term such as "storage", "reconstitution", or "lot".
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
              >
                <span>Reset Filters</span>
              </Button>
            </div>
          ) : (
            filteredFaqs.map(faq => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-[#16181B] border border-[#2A2E33] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-4 sm:p-5 text-left font-semibold text-[#E8E6E1] uppercase tracking-wide flex justify-between items-center hover:text-[#BE7A28] transition-colors"
                  >
                    <span className="pr-4 leading-snug">
                      <strong className="text-[#BE7A28] font-mono mr-2">{faq.num}.</strong>
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <IconChevronUp size={16} className="text-[#BE7A28] flex-shrink-0" />
                    ) : (
                      <IconChevronDown size={16} className="text-[#6B7178] flex-shrink-0" />
                    )}
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-4 sm:px-5 pb-5 font-body text-xs text-[#B9BEC4] border-t border-[#2A2E33] pt-3 leading-relaxed space-y-2"
                      >
                        <div className="text-[10px] font-mono text-[#BE7A28] uppercase">
                          CATEGORY: {faq.category}
                        </div>
                        <p>{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Question Escalation */}
        <div className="bg-[#16181B] border border-[#2A2E33] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase tracking-wide">
              Question not answered above?
            </h3>
            <p className="text-xs text-[#B9BEC4] font-body">
              Contact our team directly. We answer specific laboratory and specification questions directly and tell you plainly when something falls outside what we can address.
            </p>
          </div>

          <Button
            variant="amber"
            size="md"
            onClick={() => {
              if (setActiveTab) setActiveTab('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex-shrink-0"
          >
            <span>Contact Our Team →</span>
          </Button>
        </div>
      </section>
    </motion.div>
  );
};
