import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Compound } from '../types/compound';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { useCart } from '../context/CartContext';
import {
  IconArrowLeft,
  IconShieldCheck,
  IconFileText,
  IconSnowflake,
  IconClock,
  IconDownload,
  IconShoppingBag
} from '../components/ui/Icons';

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
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-body space-y-8"
    >
      {/* Back Button */}
      <button
        onClick={onBack}
        className="font-interface text-xs text-theme-secondary hover:text-theme-primary transition-colors flex items-center gap-2 uppercase tracking-wider font-semibold"
      >
        <IconArrowLeft size={14} />
        <span>Return to Research Products</span>
      </button>

      {/* Main Spec Sheet Header Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Product Info & Technical Specifications */}
        <div className="lg:col-span-8 space-y-6">
          <div>
            <div className="flex items-center gap-3 font-mono mb-2">
              <Badge variant="amber">
                SPECIFICATION: {compound.specificationPurity.replace('(HPLC)', '(HPLC, area normalised)')}
              </Badge>
              <span className="text-xs text-verified font-bold uppercase flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-verified" />
                {compound.stockStatus}
              </span>
            </div>

            {/* Product Title in Söhne */}
            <h1 className="font-heading text-2xl sm:text-4xl font-bold text-theme-primary uppercase tracking-tight">
              {compound.name}
            </h1>
            {/* SKU and CAS in Söhne Mono */}
            <p className="font-mono text-xs text-theme-muted mt-1 uppercase font-semibold">
              SKU: {compound.sku} · CAS REGISTRY: {compound.casNumber}
            </p>
          </div>

          {/* Monospace Chemical Sequence Banner */}
          <div className="bg-theme-surface p-5 border border-theme space-y-2 font-mono text-xs transition-colors">
            <span className="text-[#BE7A28] font-bold uppercase tracking-widest block text-[11px]">
              [ CHEMICAL SEQUENCE STRUCTURE ]
            </span>
            <div className="p-3 bg-theme-canvas border border-theme text-theme-primary font-bold tracking-wider overflow-x-auto">
              {compound.sequence}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 text-[11px] text-theme-secondary">
              <div>
                <span className="text-theme-muted block text-[10px]">MOLECULAR FORMULA:</span>
                <span className="text-theme-primary font-bold">{compound.molecularFormula}</span>
              </div>
              <div>
                <span className="text-theme-muted block text-[10px]">CALCULATED MASS:</span>
                <span className="text-theme-primary font-bold">{compound.calculatedMass}</span>
              </div>
              <div>
                <span className="text-theme-muted block text-[10px]">RETEST INTERVAL:</span>
                <span className="text-theme-primary font-bold">{compound.retestInterval}</span>
              </div>
            </div>
          </div>

          {/* Technical Description & Applications in Söhne */}
          <div className="space-y-4">
            <h3 className="font-heading text-sm font-bold uppercase text-theme-primary tracking-wider border-b border-theme pb-2">
              Product Overview & Research Applications
            </h3>
            <p className="text-xs sm:text-sm text-theme-secondary leading-relaxed font-body">
              {compound.description}
            </p>

            <div className="bg-theme-surface p-4 border border-theme space-y-2 transition-colors">
              <h4 className="font-heading text-xs font-bold text-theme-primary uppercase tracking-wider">
                Primary In Vitro Laboratory Applications:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-theme-secondary font-body">
                {compound.applications.map((app, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#BE7A28] flex-shrink-0" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Reconstitution & Storage Protocol */}
          <div className="bg-theme-surface p-5 border border-theme space-y-3 font-body text-xs transition-colors">
            <div className="flex items-center gap-2 text-theme-primary font-heading font-bold uppercase tracking-wider text-xs">
              <IconSnowflake size={15} amberAccent={true} />
              <span>Storage & Reconstitution Handling Protocol</span>
            </div>
            <p className="text-theme-secondary text-xs leading-relaxed">
              {compound.handlingProtocol}
            </p>
            <div className="pt-2 text-[11px] font-mono text-theme-muted flex items-center gap-2 border-t border-theme">
              <IconClock size={13} />
              <span>STORAGE ADVICE: {compound.storageCondition}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Order Module & Lot Verification Link */}
        <div className="lg:col-span-4 space-y-5">
          {/* Order Module Card */}
          <div className="bg-theme-surface p-5 border border-theme space-y-5 font-interface transition-colors">
            <div className="flex justify-between items-end border-b border-theme pb-3">
              <div>
                <span className="text-[10px] font-mono text-theme-muted uppercase block">UNIT SPECIFICATION</span>
                <span className="font-heading font-bold text-theme-primary text-sm">{compound.vialSize} VIAL</span>
              </div>
              <span className="text-xl font-mono font-bold text-theme-primary">${compound.price.toFixed(2)}</span>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-1.5 font-interface text-xs">
              <label className="block text-[11px] uppercase text-theme-secondary font-semibold">
                Select Vial Quantity:
              </label>
              <div className="flex items-center justify-between bg-theme-canvas border border-theme p-1.5">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="px-3 py-1 bg-theme-surface text-theme-primary hover:text-amber-hover font-bold text-xs"
                >
                  -
                </button>
                <span className="font-mono font-bold text-theme-primary text-xs">{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="px-3 py-1 bg-theme-surface text-theme-primary hover:text-amber-hover font-bold text-xs"
                >
                  +
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <Button
                variant="amber"
                size="md"
                onClick={() => addToCart(compound, qty)}
                className="w-full flex items-center justify-center gap-2 text-xs"
              >
                <IconShoppingBag size={15} />
                <span>Add to Manifest (${(compound.price * qty).toFixed(2)})</span>
              </Button>
            </div>

            {/* Lot Verification Quick Trigger */}
            <div className="pt-3 border-t border-theme space-y-1.5 font-mono text-xs">
              <span className="text-[10px] text-theme-muted uppercase block">CURRENT RELEASE LOT</span>
              <button
                onClick={() => onOpenLotLookup(compound.latestLot)}
                className="w-full bg-theme-canvas hover:bg-theme-raised border border-theme hover:border-theme-amber p-2 text-theme-primary font-bold text-xs flex items-center justify-between transition-colors"
              >
                <span className="flex items-center gap-1.5 text-xs text-theme-primary">
                  <IconFileText size={13} amberAccent={true} />
                  <span>{compound.latestLot}</span>
                </span>
                <span className="text-[10px] text-amber-hover">VIEW COA →</span>
              </button>
            </div>

            {/* Compliance Note */}
            <div className="bg-theme-canvas p-3 border border-theme text-[10px] text-theme-secondary space-y-1 font-body">
              <div className="flex items-center gap-1 text-theme-primary font-mono font-bold uppercase">
                <IconShieldCheck size={13} />
                <span>RESEARCH USE ONLY</span>
              </div>
              <p>Ships strictly under validated cold pack with lot-specific Certificate of Analysis.</p>
            </div>
          </div>

          {/* SDS Download Callout */}
          <div className="bg-theme-surface p-4 border border-theme font-interface text-xs flex items-center justify-between text-theme-secondary transition-colors">
            <div>
              <p className="font-heading font-bold text-theme-primary uppercase text-xs">Safety Data Sheet (SDS)</p>
              <p className="text-[10px] font-mono text-theme-muted">OSHA GHS COMPLIANT FORMAT</p>
            </div>
            <button
              onClick={e => {
                e.preventDefault();
                alert(`Downloading SDS for ${compound.name} (GHS Standard)...`);
              }}
              className="p-2 border border-theme text-theme-primary hover:border-theme-amber hover:text-amber-hover transition-colors"
              title="Download Safety Data Sheet"
            >
              <IconDownload size={14} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
