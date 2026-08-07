import React, { useState } from 'react';
import { Search, ShoppingBag, Sun, Moon, ShieldCheck, Cpu } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useCart } from '../../context/CartContext';
import { Button } from '../ui/Button';
import { Logo } from '../ui/Logo';

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
    }
  };

  const navLinks = [
    { id: 'home', label: 'Overview' },
    { id: 'catalogue', label: 'Catalogue' },
    { id: 'quality', label: 'Quality & Process' },
    { id: 'research', label: 'Educational Center' },
    { id: 'legal', label: 'Compliance' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-theme shadow-md">
      {/* Top Protocol Status Bar */}
      <div className="bg-theme-surface px-4 py-1.5 border-b border-theme text-[11px] font-mono flex items-center justify-between text-theme-secondary">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-emerald-500 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            ANALYTICAL VERIFICATION: ACTIVE
          </span>
          <span className="hidden md:inline text-theme-muted">
            US DOMESTIC COLD-CHAIN SUPPLY
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => onOpenLotLookup('LOT 24-0817-C')}
            className="hover:text-amber-500 transition-colors flex items-center gap-1 text-amber-500 font-bold"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            LOT RETRIEVAL HUB
          </button>
          <span className="text-theme-muted">|</span>
          <span className="hidden sm:inline font-mono text-theme-muted">FOR RESEARCH USE ONLY</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Official Brand Logo SVG */}
        <div onClick={() => setActiveTab('home')} className="cursor-pointer">
          <Logo size="md" />
        </div>

        {/* Center Quick Lot Lookup Field with Magnifier Hover Effect */}
        <form
          onSubmit={handleLotSearch}
          className="hidden lg:flex items-center relative w-80 font-mono"
        >
          <input
            type="text"
            placeholder="VERIFY LOT (e.g. 24-0817)..."
            value={quickLot}
            onChange={e => setQuickLot(e.target.value)}
            className="w-full bg-theme-bg border border-theme focus:border-amber-500 text-xs pl-3 pr-10 py-2 text-theme-primary placeholder-theme-muted uppercase tracking-wider focus:outline-none transition-colors"
          />
          <button
            type="submit"
            className="absolute right-2 text-amber-500 hover:text-amber-400 p-1 group flex items-center justify-center"
            title="Search & Verify Lot"
          >
            <Search className="w-4 h-4 transition-transform duration-140 group-hover:scale-125" />
          </button>
        </form>

        {/* Navigation Tabs */}
        <nav className="hidden md:flex items-center gap-1 font-mono text-xs">
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => setActiveTab(link.id)}
              className={`px-3 py-2 transition-all uppercase tracking-wider ${
                activeTab === link.id
                  ? 'text-amber-500 font-bold border-b-2 border-amber-500 bg-amber-500/10'
                  : 'text-theme-secondary hover:text-amber-500 hover:bg-theme-surface'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={onOpenSynthesis}
            className="hidden sm:flex items-center gap-1.5 text-[11px]"
          >
            <Cpu className="w-3.5 h-3.5" />
            SYNTHESIS ENQUIRY
          </Button>

          <button
            onClick={toggleTheme}
            className="p-2 border border-theme text-theme-primary hover:text-amber-500 hover:border-amber-500 transition-colors bg-theme-surface"
            title="Toggle Light/Dark Theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-amber-600" />
            )}
          </button>

          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 border border-amber-500/40 bg-theme-surface text-amber-500 hover:bg-amber-500 hover:text-obsidian-950 transition-colors"
            title="Cart"
          >
            <ShoppingBag className="w-4 h-4" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-amber-500 text-obsidian-950 font-mono font-bold text-[10px] w-4 h-4 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
