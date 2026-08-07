import React, { useState } from 'react';
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
  IconCpu
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

  const handleLotSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (quickLot.trim()) {
      onOpenLotLookup(quickLot.trim().toUpperCase());
      setQuickLot('');
    } else {
      onOpenLotLookup('LOT 24-0817-C');
    }
  };

  const navLinks = [
    { id: 'catalogue', label: 'Research Products' },
    { id: 'quality', label: 'Quality Assurance' },
    { id: 'research', label: 'Research Information' },
    { id: 'about', label: 'About and Contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#16181B] border-b border-[#2A2E33]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
        {/* Approved Horizontal Brand Logo */}
        <div
          onClick={() => setActiveTab('home')}
          className="cursor-pointer flex-shrink-0"
          title="BioScience Depot — Home"
        >
          <Logo size="md" />
        </div>

        {/* Simplified Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 font-interface text-xs">
          {navLinks.map(link => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => setActiveTab(link.id)}
                className={`px-3 py-2 transition-colors uppercase tracking-wider font-semibold ${
                  isActive
                    ? 'text-[#E8E6E1] bg-[#1E2126] border-b-2 border-[#BE7A28]'
                    : 'text-[#B9BEC4] hover:text-[#E8E6E1] hover:bg-[#1E2126]/60'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right-Side Utilities: Quick Lot Search, "Verify a Lot" CTA, Theme Toggle, Cart */}
        <div className="flex items-center gap-2 flex-shrink-0">
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
              className="w-full bg-[#0A0B0D] border border-[#2A2E33] focus:border-[#BE7A28] text-[11px] pl-3 pr-8 py-1.5 text-[#E8E6E1] placeholder-[#6B7178] uppercase tracking-wider focus:outline-none"
            />
            <button
              type="submit"
              className="absolute right-2 text-[#6B7178] hover:text-[#E3A455] transition-colors"
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
            className="flex items-center gap-1.5 text-[11px] text-[#E8E6E1] hover:text-[#E3A455]"
          >
            <IconShieldCheck size={14} amberAccent={true} />
            <span className="hidden sm:inline">Verify a Lot</span>
            <span className="sm:hidden">Verify</span>
          </Button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 border border-[#2A2E33] text-[#B9BEC4] hover:text-[#E8E6E1] hover:border-[#3A3F45] transition-colors bg-[#16181B] flex-shrink-0"
            title="Toggle Light/Dark Theme"
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
            className="relative p-2 border border-[#2A2E33] bg-[#1E2126] text-[#E8E6E1] hover:border-[#BE7A28] transition-colors flex-shrink-0"
            title="Manifest Cart"
          >
            <IconShoppingBag size={15} />
            {cartItemCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#BE7A28] text-[#0A0B0D] font-mono font-bold text-[9px] w-4 h-4 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Strip */}
      <div className="lg:hidden flex items-center justify-between overflow-x-auto px-4 py-2 border-t border-[#2A2E33] bg-[#0A0B0D] text-[11px] font-interface gap-2">
        {navLinks.map(link => {
          const isActive = activeTab === link.id;
          return (
            <button
              key={link.id}
              onClick={() => setActiveTab(link.id)}
              className={`px-2 py-1 whitespace-nowrap uppercase tracking-wider font-semibold ${
                isActive
                  ? 'text-[#E8E6E1] bg-[#1E2126] border-b border-[#BE7A28]'
                  : 'text-[#B9BEC4]'
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
