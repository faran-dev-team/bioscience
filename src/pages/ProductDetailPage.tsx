import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Compound } from '../types/compound';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { useCart } from '../context/CartContext';
import {
  ArrowLeft,
  ShieldCheck,
  FileCheck,
  Snowflake,
  Clock,
  Download,
  ShoppingBag
} from 'lucide-react';

interface ProductDetailPageProps {
  compound: Compound;
  onBack: () => void;
  onOpenLotLookup: (lotNum: string) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  compound,
  onBack,
  onOpenLotLookup,
}) => {
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-sans space-y-10"
    >
      {/* Back Button */}
      <button
        onClick={onBack}
        className="font-mono text-xs text-theme-secondary hover:text-amber-500 transition-colors flex items-center gap-2 uppercase tracking-wider font-semibold"
      >
        <ArrowLeft className="w-4 h-4" /> RETURN TO CATALOGUE
      </button>

      {/* Main Spec Sheet Header Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Product Info & Specifications */}
        <div className="lg:col-span-8 space-y-8">
          <div>
            <div className="flex items-center gap-3 font-mono mb-2">
              <Badge variant="amber">SPECIFICATION VERIFIED: {compound.specificationPurity.replace('(HPLC)', '(HPLC, area normalised)')}</Badge>
              <span className="text-xs text-emerald-500 font-bold uppercase flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                {compound.stockStatus}
              </span>
            </div>

            <h1 className="font-mono text-2xl sm:text-4xl font-bold text-theme-primary uppercase tracking-tight">
              {compound.name}
            </h1>
            <p className="font-mono text-xs text-amber-500 mt-1 uppercase font-bold">
              SKU: {compound.sku} | CAS REGISTRY: {compound.casNumber}
            </p>
          </div>

          {/* Monospace Sequence Banner */}
          <div className="bg-theme-bg p-5 border border-amber-500/30 space-y-2 font-mono text-xs">
            <span className="text-amber-500 font-bold uppercase tracking-widest block">
              [ CHEMICAL SEQUENCE STRUCTURE ]
            </span>
            <div className="p-3 bg-theme-surface border border-theme text-theme-primary font-bold tracking-wider overflow-x-auto">
              {compound.sequence}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 text-[11px] text-theme-secondary">
              <div>
                <span className="text-theme-muted block">MOLECULAR FORMULA:</span>
                <span className="text-theme-primary font-bold">{compound.molecularFormula}</span>
              </div>
              <div>
                <span className="text-theme-muted block">CALCULATED MASS:</span>
                <span className="text-theme-primary font-bold">{compound.calculatedMass}</span>
              </div>
              <div>
                <span className="text-theme-muted block">RETEST INTERVAL:</span>
                <span className="text-theme-primary font-bold">{compound.retestInterval}</span>
              </div>
            </div>
          </div>

          {/* Technical Description & Applications */}
          <div className="space-y-4">
            <h3 className="font-mono text-sm font-bold uppercase text-amber-500 tracking-wider">
              Product Overview & Research Context
            </h3>
            <p className="text-sm text-theme-secondary leading-relaxed font-sans">
              {compound.description}
            </p>

            <div className="bg-theme-surface p-4 border border-theme space-y-2">
              <h4 className="font-mono text-xs font-bold text-theme-primary uppercase tracking-wider">
                Primary Laboratory Applications:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-theme-secondary font-mono">
                {compound.applications.map((app, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-amber-500" />
                    {app}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Reconstitution & Storage Protocol */}
          <div className="glass-panel p-5 border border-theme space-y-3 font-mono text-xs bg-theme-card">
            <div className="flex items-center gap-2 text-amber-500 font-bold uppercase tracking-wider">
              <Snowflake className="w-4 h-4 text-amber-500" />
              STORAGE & RECONSTITUTION HANDLING PROTOCOL
            </div>
            <p className="text-theme-secondary font-sans text-xs leading-relaxed">
              {compound.handlingProtocol}
            </p>
            <div className="pt-2 text-[11px] text-theme-muted flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-amber-500" />
              <span>STORAGE ADVICE: {compound.storageCondition}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Order Box & Lot Verification Link */}
        <div className="lg:col-span-4 space-y-6">
          {/* Order Module Card */}
          <div className="glass-panel p-6 border-2 border-amber-500/40 space-y-6 bg-theme-surface shadow-xl font-mono">
            <div className="flex justify-between items-end border-b border-theme pb-4">
              <div>
                <span className="text-[10px] text-theme-muted uppercase block">UNIT SPECIFICATION</span>
                <span className="font-bold text-theme-primary text-sm">{compound.vialSize} VIAL</span>
              </div>
              <span className="text-2xl font-bold text-amber-500">${compound.price.toFixed(2)}</span>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-2">
              <label className="block text-xs uppercase text-theme-secondary font-bold">
                SELECT VIAL QUANTITY:
              </label>
              <div className="flex items-center justify-between bg-theme-bg border border-theme p-2">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="px-3 py-1 bg-theme-surface text-theme-primary hover:text-amber-500 font-bold text-sm"
                >
                  -
                </button>
                <span className="font-bold text-theme-primary text-sm">{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="px-3 py-1 bg-theme-surface text-theme-primary hover:text-amber-500 font-bold text-sm"
                >
                  +
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <Button
                variant="amber"
                size="lg"
                onClick={() => addToCart(compound, qty)}
                className="w-full flex items-center justify-center gap-2 text-xs"
              >
                <ShoppingBag className="w-4 h-4" /> ADD TO MANIFEST (${(compound.price * qty).toFixed(2)})
              </Button>
            </div>

            {/* Lot Verification Quick Trigger */}
            <div className="pt-4 border-t border-theme space-y-2">
              <span className="text-[10px] text-theme-muted uppercase block">CURRENT RELEASE LOT</span>
              <button
                onClick={() => onOpenLotLookup(compound.latestLot)}
                className="w-full bg-theme-bg hover:bg-amber-500/10 border border-amber-500/30 p-2.5 text-amber-500 font-bold text-xs flex items-center justify-between transition-colors"
              >
                <span className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-amber-500" />
                  {compound.latestLot}
                </span>
                <span className="text-[10px] underline">VIEW COA →</span>
              </button>
            </div>

            {/* Compliance Note */}
            <div className="bg-theme-bg p-3 border border-theme text-[10px] text-theme-secondary space-y-1">
              <div className="flex items-center gap-1 text-amber-500 font-bold">
                <ShieldCheck className="w-3.5 h-3.5" /> RESEARCH USE ONLY
              </div>
              <p>Ships in temperature-validated cold pack with lot-specific Certificate of Analysis.</p>
            </div>
          </div>

          {/* SDS Download Callout */}
          <div className="bg-theme-surface p-4 border border-theme font-mono text-xs flex items-center justify-between text-theme-secondary">
            <div>
              <p className="font-bold text-theme-primary uppercase">SAFETY DATA SHEET (SDS)</p>
              <p className="text-[10px] text-theme-muted">OSHA GHS COMPLIANT FORMAT</p>
            </div>
            <a
              href="#sds"
              onClick={e => {
                e.preventDefault();
                alert(`Downloading SDS for ${compound.name} (GHS Standard)...`);
              }}
              className="p-2 border border-amber-500/40 text-amber-500 hover:bg-amber-500 hover:text-obsidian-950 transition-colors"
            >
              <Download className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
