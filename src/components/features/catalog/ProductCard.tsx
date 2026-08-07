import React from 'react';
import { motion } from 'framer-motion';
import { Compound } from '../../../types/compound';
import { Badge } from '../../ui/Badge';
import { Button } from '../../ui/Button';
import { useCart } from '../../../context/CartContext';
import { FileCheck } from 'lucide-react';

interface ProductCardProps {
  compound: Compound;
  onSelect: (compound: Compound) => void;
  onOpenLotLookup: (lotNum: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  compound,
  onSelect,
  onOpenLotLookup,
}) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: [0.2, 0, 0.2, 1] }}
      whileHover={{ y: -3, transition: { duration: 0.14 } }}
      className="glass-panel p-6 flex flex-col justify-between relative group border border-theme hover:border-amber-500/50 bg-theme-card"
    >
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3 font-mono">
          <Badge variant="amber">
            PURITY {compound.purity.toFixed(1)}% (HPLC, area normalised)
          </Badge>
          <span className="text-[10px] text-emerald-500 font-bold uppercase tracking-wider flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            {compound.stockStatus}
          </span>
        </div>

        <h3
          onClick={() => onSelect(compound)}
          className="font-mono text-base font-bold text-theme-primary group-hover:text-amber-500 transition-colors cursor-pointer mb-1 line-clamp-1"
        >
          {compound.name}
        </h3>

        <p className="font-mono text-[11px] text-amber-500/90 mb-3 tracking-wide font-semibold">
          SKU: {compound.sku} | {compound.vialSize} VIAL
        </p>

        {/* Chemical Sequence Callout */}
        <div className="bg-theme-bg p-2.5 border border-theme mb-4 font-mono text-[11px] text-theme-secondary truncate">
          <span className="text-theme-muted text-[9px] block uppercase">SEQUENCE:</span>
          <span className="text-theme-primary font-semibold">{compound.sequence}</span>
        </div>

        <p className="text-xs text-theme-secondary line-clamp-2 leading-relaxed mb-4 font-sans">
          {compound.description}
        </p>
      </div>

      {/* Footer Info & Buttons */}
      <div className="pt-4 border-t border-theme space-y-3 font-mono">
        <div className="flex justify-between items-center text-xs">
          <button
            onClick={() => onOpenLotLookup(compound.latestLot)}
            className="text-[10px] text-theme-secondary hover:text-amber-500 transition-colors flex items-center gap-1 underline font-semibold"
          >
            <FileCheck className="w-3 h-3 text-amber-500" />
            {compound.latestLot}
          </button>
          <span className="text-base font-bold text-amber-500">${compound.price.toFixed(2)}</span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onSelect(compound)}
            className="w-full text-[11px]"
          >
            SPEC SHEET →
          </Button>
          <Button
            variant="amber"
            size="sm"
            onClick={() => addToCart(compound)}
            className="w-full text-[11px]"
          >
            ADD TO CART
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
