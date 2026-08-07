import React from 'react';
import { ProductGrid } from '../components/features/catalog/ProductGrid';
import { Compound } from '../types/compound';

interface CataloguePageProps {
  onSelectCompound: (compound: Compound) => void;
  onOpenLotLookup: (lotNum: string) => void;
}

export const CataloguePage: React.FC<CataloguePageProps> = ({
  onSelectCompound,
  onOpenLotLookup,
}) => {
  return (
    <div className="py-6">
      <ProductGrid
        onSelectCompound={onSelectCompound}
        onOpenLotLookup={onOpenLotLookup}
      />
    </div>
  );
};
