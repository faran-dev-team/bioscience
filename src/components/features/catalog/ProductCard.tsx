import React from 'react';
import { motion } from 'framer-motion';
import { Compound } from '../../../types/compound';
import { Badge } from '../../ui/Badge';
import { Button } from '../../ui/Button';
import { useCart } from '../../../context/CartContext';
import { IconFileText } from '../../ui/Icons';

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
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: [0.2, 0, 0.2, 1] }}
      className="bg-theme-surface border border-theme hover:border-[#3A3F45] p-5 flex flex-col justify-between relative group transition-colors duration-150"
    >
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <Badge variant="amber">
            PURITY {compound.purity.toFixed(1)}% (HPLC)
          </Badge>
          <span className="text-[10px] text-verified font-mono font-bold uppercase tracking-wider flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-verified" />
            {compound.stockStatus}
          </span>
        </div>

        {/* Product Name in Söhne */}
        <h3
          onClick={() => onSelect(compound)}
          className="font-heading text-base font-bold text-theme-primary group-hover:text-amber-hover transition-colors cursor-pointer mb-1 line-clamp-1"
        >
          {compound.name}
        </h3>

        {/* SKU & Vial Size in Söhne Mono */}
        <p className="font-mono text-[11px] text-theme-muted mb-3 uppercase font-semibold">
          SKU: {compound.sku} · {compound.vialSize} VIAL
        </p>

        {/* Chemical Sequence Callout in Söhne Mono */}
        <div className="bg-theme-canvas p-2.5 border border-theme mb-4 font-mono text-[11px] text-theme-secondary truncate">
          <span className="text-theme-muted text-[9px] block uppercase">SEQUENCE:</span>
          <span className="text-theme-primary font-semibold">{compound.sequence}</span>
        </div>

        {/* Description in Söhne */}
        <p className="text-xs text-theme-secondary font-body line-clamp-2 leading-relaxed mb-4">
          {compound.description}
        </p>
      </div>

      {/* Footer Info & Action Buttons */}
      <div className="pt-3 border-t border-theme space-y-3 font-interface">
        <div className="flex justify-between items-center text-xs">
          <button
            onClick={() => onOpenLotLookup(compound.latestLot)}
            className="text-[11px] font-mono text-theme-secondary hover:text-amber-hover transition-colors flex items-center gap-1 font-semibold"
            title="Inspect Lot Certificate"
          >
            <IconFileText size={13} amberAccent={true} />
            <span>{compound.latestLot}</span>
          </button>
          <span className="text-sm font-mono font-bold text-theme-primary">
            ${compound.price.toFixed(2)}
          </span>
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
            ADD TO MANIFEST
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
