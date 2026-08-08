import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { useCart } from '../../context/CartContext';
import { Logo } from '../ui/Logo';
import {
  IconSearch,
  IconShoppingBag,
  IconSun,
  IconMoon,
  IconShieldCheck,
  IconMenu,
  IconClose,
  IconFileText,
  IconArrowRight
} from '../ui/Icons';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenLotLookup: (lotNum?: string) => void;
  onOpenSynthesis: () => void;
  onOpenSearch?: (query?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenLotLookup,
  onOpenSynthesis,
  onOpenSearch,
}) => {
  const { theme, toggleTheme } = useTheme();
  const { cartItemCount, setIsCartOpen } = useCart();
  const [quickLot, setQuickLot] = useState('');
  const [quickSearch, setQuickSearch] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLotSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (quickLot.trim()) {
      onOpenLotLookup(quickLot.trim().toUpperCase());
      setQuickLot('');
      setMobileMenuOpen(false);
    } else {
      onOpenLotLookup('LOT 24-0817-C');
      setMobileMenuOpen(false);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onOpenSearch) {
      onOpenSearch(quickSearch);
    } else {
      setActiveTab('search');
    }
    setIsSearchOpen(false);
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'catalogue', label: 'Research Products' },
    { id: 'quality', label: 'Quality Assurance' },
    { id: 'research', label: 'Research Information' },
    { id: 'why-choose-us', label: 'Why Choose Us' },
    { id: 'about', label: 'About' },
    { id: 'faqs', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 dark:bg-[#111315]/95 text-zinc-900 dark:text-[#E8E6E1] border-b border-zinc-200 dark:border-[#2A2E33] shadow-sm dark:shadow-none backdrop-blur-md transition-colors duration-150">
      {/* Top Banner Notice */}
      <div className="bg-zinc-100 dark:bg-[#0A0B0D] border-b border-zinc-200 dark:border-[#1E2227] py-1 px-4 text-[10px] font-mono text-zinc-600 dark:text-[#6B7178] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[#BE7A28] rounded-full inline-block animate-pulse" />
          <span className="font-semibold text-zinc-700 dark:text-[#A0A5AB]">
            DOMESTIC SHIPMENTS DISPATCHED FROM U.S. REFRIGERATED STORAGE
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <button 
            onClick={() => setActiveTab('verify')}
            className="font-medium hover:text-[#BE7A28] dark:hover:text-[#BE7A28] transition-colors"
          >
            VERIFY CERTIFICATE OF ANALYSIS
          </button>
          <span>·</span>
          <button 
            onClick={() => setActiveTab('legal')}
            className="font-medium hover:text-[#BE7A28] dark:hover:text-[#BE7A28] transition-colors"
          >
            RESEARCH USE ONLY (§ 8.7)
          </button>
        </div>
      </div>

      {/* Primary Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div
          onClick={() => {
            setActiveTab('home');
            setMobileMenuOpen(false);
          }}
          className="cursor-pointer flex-shrink-0"
          title="BioScience Depot — Home"
        >
          <Logo size="md" showSubtitle={false} className="hidden sm:inline-flex" />
          <Logo size="sm" showSubtitle={false} className="sm:hidden" />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1 font-interface text-xs">
          {navLinks.map(link => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => {
                  setActiveTab(link.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`px-3 py-2 transition-colors uppercase tracking-wider font-semibold text-[11px] ${
                  isActive
                    ? 'text-[#BE7A28] border-b-2 border-[#BE7A28]'
                    : 'text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 dark:text-[#B9BEC4] dark:hover:text-[#E8E6E1] dark:hover:bg-[#16181B]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Action Controls & Lot Verification Input */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Lot Lookup Form (Desktop) */}
          <form onSubmit={handleLotSearch} className="hidden md:flex items-center">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="LOT # (e.g. 24-0817-C)"
                value={quickLot}
                onChange={e => setQuickLot(e.target.value)}
                className="w-40 xl:w-48 bg-zinc-50 dark:bg-[#0A0B0D] border border-zinc-300 dark:border-[#2A2E33] px-2.5 py-1.5 text-[11px] font-mono text-zinc-900 dark:text-[#E8E6E1] placeholder:text-zinc-400 dark:placeholder:text-[#6B7178] focus:border-[#BE7A28] focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="bg-zinc-200 hover:bg-[#BE7A28] hover:text-white dark:bg-[#1E2227] dark:hover:bg-[#BE7A28] dark:hover:text-[#0A0B0D] text-zinc-800 dark:text-[#B9BEC4] border border-l-0 border-zinc-300 dark:border-[#2A2E33] px-2.5 py-1.5 text-[10px] font-mono font-bold uppercase transition-colors"
                title="Verify Certificate of Analysis"
              >
                CoA
              </button>
            </div>
          </form>

          {/* Quick Search Button */}
          <button
            onClick={() => {
              if (onOpenSearch) onOpenSearch();
              else setActiveTab('search');
            }}
            className="p-2 bg-zinc-50 dark:bg-transparent text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 dark:text-[#B9BEC4] dark:hover:text-[#E8E6E1] dark:hover:bg-[#1E2227] border border-zinc-300 dark:border-[#2A2E33] transition-colors"
            title="Search catalogue and sequences"
          >
            <IconSearch size={15} />
          </button>

          {/* Cart Icon & Manifest Drawer Trigger */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 bg-zinc-50 dark:bg-transparent text-zinc-700 hover:text-[#BE7A28] hover:bg-zinc-100 dark:text-[#B9BEC4] dark:hover:text-[#BE7A28] dark:hover:bg-[#1E2227] border border-zinc-300 dark:border-[#2A2E33] transition-colors"
            title="View Order Manifest"
          >
            <IconShoppingBag size={15} />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#BE7A28] text-white dark:text-[#0A0B0D] text-[9px] font-mono font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </button>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="p-2 bg-zinc-50 dark:bg-transparent text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 dark:text-[#B9BEC4] dark:hover:text-[#E8E6E1] dark:hover:bg-[#1E2227] border border-zinc-300 dark:border-[#2A2E33] transition-colors"
            title={theme === 'dark' ? 'Switch to Light View' : 'Switch to Dark View'}
          >
            {theme === 'dark' ? <IconSun size={15} /> : <IconMoon size={15} />}
          </button>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 bg-zinc-50 dark:bg-transparent text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 dark:text-[#B9BEC4] dark:hover:text-[#E8E6E1] dark:hover:bg-[#1E2227] border border-zinc-300 dark:border-[#2A2E33] transition-colors"
            title="Toggle Menu"
          >
            {mobileMenuOpen ? <IconClose size={18} /> : <IconMenu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="xl:hidden bg-white dark:bg-[#16181B] border-b border-zinc-200 dark:border-[#2A2E33] px-4 py-6 space-y-5 shadow-lg dark:shadow-none"
          >
            {/* Quick Lot Lookup for Mobile */}
            <form onSubmit={handleLotSearch} className="space-y-2">
              <label className="text-[10px] font-mono text-zinc-500 dark:text-[#6B7178] uppercase tracking-wider block">
                Certificate of Analysis Retrieval
              </label>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Enter Lot # (e.g. LOT 24-0817-C)"
                  value={quickLot}
                  onChange={e => setQuickLot(e.target.value)}
                  className="flex-1 bg-zinc-50 dark:bg-[#0A0B0D] border border-zinc-300 dark:border-[#2A2E33] px-3 py-2 text-xs font-mono text-zinc-900 dark:text-[#E8E6E1] placeholder:text-zinc-400 dark:placeholder:text-[#6B7178] focus:border-[#BE7A28] focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#BE7A28] text-white dark:text-[#0A0B0D] px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider"
                >
                  Verify
                </button>
              </div>
            </form>

            {/* Navigation Links */}
            <div className="grid grid-cols-1 gap-1 border-t border-zinc-200 dark:border-[#2A2E33] pt-4 font-interface">
              {navLinks.map(link => {
                const isActive = activeTab === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => {
                      setActiveTab(link.id);
                      setMobileMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`text-left px-3 py-2.5 text-xs font-semibold uppercase tracking-wider flex items-center justify-between transition-colors ${
                      isActive
                        ? 'bg-zinc-100 dark:bg-[#1E2227] text-[#BE7A28]'
                        : 'text-zinc-800 dark:text-[#B9BEC4] hover:bg-zinc-100 dark:hover:bg-[#1E2227] hover:text-zinc-950 dark:hover:text-[#E8E6E1]'
                    }`}
                  >
                    <span>{link.label}</span>
                    <IconArrowRight size={12} className="text-zinc-400 dark:text-[#6B7178]" />
                  </button>
                );
              })}

              <button
                onClick={() => {
                  setActiveTab('verify');
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-left px-3 py-2.5 text-xs font-semibold uppercase tracking-wider text-zinc-800 dark:text-[#B9BEC4] hover:bg-zinc-100 dark:hover:bg-[#1E2227] flex items-center justify-between transition-colors"
              >
                <span>Lot Verification Hub</span>
                <IconFileText size={12} className="text-[#BE7A28]" />
              </button>

              <button
                onClick={() => {
                  setActiveTab('legal');
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-left px-3 py-2.5 text-xs font-semibold uppercase tracking-wider text-zinc-800 dark:text-[#B9BEC4] hover:bg-zinc-100 dark:hover:bg-[#1E2227] flex items-center justify-between transition-colors"
              >
                <span>Legal & Compliance Hub</span>
                <IconShieldCheck size={12} className="text-zinc-500 dark:text-[#6B7178]" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
