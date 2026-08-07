import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { useCart } from '../../context/CartContext';
import { Button } from '../ui/Button';
import { Logo } from '../ui/Logo';
import {
  IconSearch,
  IconShoppingBag,
  IconSun,
  IconMoon,
  IconShieldCheck,
  IconMenu,
  IconClose,
  IconCpu,
  IconArrowRight
} from '../ui/Icons';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenLotLookup: (lotNum?: string) => void;
  onOpenSynthesis: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenLotLookup,
  onOpenSynthesis,
}) => {
  const { theme, toggleTheme } = useTheme();
  const { cartItemCount, setIsCartOpen } = useCart();
  const [quickLot, setQuickLot] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile drawer on route change or screen resize
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

  const navLinks = [
    { id: 'catalogue', label: 'Research Products', desc: 'Browse HPLC-verified peptide catalog' },
    { id: 'quality', label: 'Quality Assurance', desc: 'Analytical testing & HPLC methodologies' },
    { id: 'research', label: 'Research Information', desc: 'Reconstitution & handling protocols' },
    { id: 'about', label: 'About and Contact', desc: 'US domestic operations & support' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-theme-surface/95 backdrop-blur-md border-b border-theme transition-colors duration-150">
      {/* Primary Top Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-2 sm:gap-4">
        {/* Approved Horizontal Brand Logo */}
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

        {/* Desktop Simplified Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 font-interface text-xs">
          {navLinks.map(link => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => setActiveTab(link.id)}
                className={`px-3 py-2 transition-colors uppercase tracking-wider font-semibold ${
                  isActive
                    ? 'text-theme-primary bg-theme-raised border-b-2 border-theme-amber'
                    : 'text-theme-secondary hover:text-theme-primary hover:bg-theme-raised/60'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right-Side Utilities: Search, Verify a Lot, Theme Toggle, Cart, Mobile Menu */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
          {/* Quick Lot Input for large screens */}
          <form
            onSubmit={handleLotSearch}
            className="hidden xl:flex items-center relative w-56 font-mono"
          >
            <input
              type="text"
              placeholder="LOT NO. (24-0817)..."
              value={quickLot}
              onChange={e => setQuickLot(e.target.value)}
              className="w-full bg-theme-canvas border border-theme focus:border-theme-amber text-[11px] pl-3 pr-8 py-1.5 text-theme-primary placeholder-theme-muted uppercase tracking-wider focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="absolute right-2 text-theme-muted hover:text-amber-hover transition-colors"
              title="Verify Lot"
            >
              <IconSearch size={14} />
            </button>
          </form>

          {/* Right-side utility: "Verify a Lot" Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => onOpenLotLookup('LOT 24-0817-C')}
            className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-[11px] px-2 sm:px-3 py-1.5 h-8 sm:h-9"
          >
            <IconShieldCheck size={13} amberAccent={true} />
            <span className="hidden sm:inline">Verify a Lot</span>
            <span className="sm:hidden text-[10px]">Verify</span>
          </Button>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 border border-theme text-theme-secondary hover:text-theme-primary hover:border-theme-amber transition-colors bg-theme-surface flex items-center justify-center h-8 sm:h-9 w-8 sm:w-9 flex-shrink-0"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <IconSun size={15} />
            ) : (
              <IconMoon size={15} />
            )}
          </button>

          {/* Shopping Cart Drawer Trigger */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 border border-theme bg-theme-raised text-theme-primary hover:border-theme-amber transition-colors flex items-center justify-center h-8 sm:h-9 w-8 sm:w-9 flex-shrink-0"
            title="Order Manifest Cart"
            aria-label="View Cart"
          >
            <IconShoppingBag size={15} />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#BE7A28] text-[#0A0B0D] font-mono font-bold text-[9px] w-4 h-4 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 border border-theme text-theme-primary hover:border-theme-amber transition-colors bg-theme-surface flex items-center justify-center h-8 sm:h-9 w-8 sm:w-9 flex-shrink-0"
            title={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? (
              <IconClose size={16} />
            ) : (
              <IconMenu size={16} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Animated Slide-down Full Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: [0.2, 0, 0.2, 1] }}
            className="lg:hidden border-t border-theme bg-theme-surface px-4 py-4 space-y-4 font-interface overflow-hidden shadow-2xl transition-colors duration-150"
          >
            {/* Mobile Quick Lot Lookup Input */}
            <form onSubmit={handleLotSearch} className="flex gap-2 font-mono text-xs">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="ENTER VIAL LOT NUMBER..."
                  value={quickLot}
                  onChange={e => setQuickLot(e.target.value)}
                  className="w-full bg-theme-canvas border border-theme focus:border-theme-amber text-xs pl-3 pr-9 py-2.5 text-theme-primary placeholder-theme-muted uppercase tracking-wider focus:outline-none"
                />
                <button
                  type="submit"
                  className="absolute right-2.5 top-2.5 text-theme-muted hover:text-amber-hover"
                  title="Search Lot"
                >
                  <IconSearch size={15} />
                </button>
              </div>
              <Button variant="amber" size="sm" type="submit" className="px-3 py-2.5 text-xs">
                <span>Verify</span>
              </Button>
            </form>

            {/* Mobile Navigation Links with Rich Context */}
            <div className="space-y-1 pt-1 border-t border-theme">
              {navLinks.map(link => {
                const isActive = activeTab === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => {
                      setActiveTab(link.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2.5 text-xs flex items-center justify-between transition-colors ${
                      isActive
                        ? 'text-theme-primary bg-theme-raised border-l-2 border-theme-amber font-bold'
                        : 'text-theme-secondary hover:text-theme-primary hover:bg-theme-raised/50'
                    }`}
                  >
                    <div>
                      <p className="uppercase tracking-wider font-semibold">{link.label}</p>
                      <p className="text-[10px] text-theme-muted font-normal normal-case">{link.desc}</p>
                    </div>
                    <IconArrowRight size={13} className={isActive ? 'text-amber-hover' : 'text-theme-muted'} />
                  </button>
                );
              })}
            </div>

            {/* Quick Action Buttons in Mobile Menu */}
            <div className="pt-2 border-t border-theme grid grid-cols-2 gap-2 text-xs">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  onOpenLotLookup('LOT 24-0817-C');
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-1.5 text-[11px] py-2"
              >
                <IconShieldCheck size={13} amberAccent={true} />
                <span>Verify a Lot</span>
              </Button>

              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  onOpenSynthesis();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-1.5 text-[11px] py-2"
              >
                <IconCpu size={13} />
                <span>Synthesis</span>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Horizontal Quick-Scroll Tab Strip */}
      <div className="lg:hidden flex items-center justify-between overflow-x-auto px-3 sm:px-4 py-2 border-t border-theme bg-theme-canvas text-[11px] font-interface gap-1.5 no-scrollbar">
        {navLinks.map(link => {
          const isActive = activeTab === link.id;
          return (
            <button
              key={link.id}
              onClick={() => {
                setActiveTab(link.id);
                setMobileMenuOpen(false);
              }}
              className={`px-2.5 py-1 whitespace-nowrap uppercase tracking-wider font-semibold text-[10.5px] transition-colors ${
                isActive
                  ? 'text-theme-primary bg-theme-raised border-b-2 border-theme-amber'
                  : 'text-theme-secondary hover:text-theme-primary'
              }`}
            >
              {link.label}
            </button>
          );
        })}
      </div>
    </header>
  );
};
