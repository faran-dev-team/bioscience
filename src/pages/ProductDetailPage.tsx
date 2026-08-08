import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Compound } from '../types/compound';
import { useCart } from '../context/CartContext';
import { RUOComplianceStrip } from '../components/features/hero/RUOComplianceStrip';
import { Button } from '../components/ui/Button';
import { COMPOUNDS_DATA } from '../data/compounds';
import {
  IconShieldCheck,
  IconBarChart,
  IconCpu,
  IconFileText,
  IconSnowflake,
  IconArrowLeft,
  IconArrowRight,
  IconCheckCircle,
  IconAlertTriangle,
  IconShoppingBag
} from '../components/ui/Icons';

interface ProductDetailPageProps {
  compound: Compound;
  onBack: () => void;
  onOpenLotLookup: (lotNum?: string) => void;
  onOpenSynthesis?: () => void;
  setActiveTab?: (tab: string) => void;
  onSelectCompound?: (compound: Compound) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  compound,
  onBack,
  onOpenLotLookup,
  onOpenSynthesis,
  setActiveTab,
  onSelectCompound,
}) => {
  const { addToCart, setIsCartOpen } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [addedNotice, setAddedNotice] = useState(false);
  const [quoteRequested, setQuoteRequested] = useState(false);

  const handleAddToCart = () => {
    addToCart(compound, quantity);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2500);
  };

  const handleRequestQuote = () => {
    setQuoteRequested(true);
    setTimeout(() => setQuoteRequested(false), 3000);
  };

  const relatedCompounds = COMPOUNDS_DATA.filter(
    c => c.id !== compound.id && (c.categorySlug === compound.categorySlug || true)
  ).slice(0, 4);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="space-y-12 bg-[#0A0B0D] text-[#E8E6E1] font-body"
    >
      {/* 1. PRODUCT HERO (PAGE 09.2) */}
      <section className="pt-8 pb-12 px-4 sm:px-6 lg:px-8 border-b border-[#2A2E33] bg-[#0E1012]">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Back button */}
          <button
            onClick={onBack}
            className="text-xs font-mono text-[#6B7178] hover:text-[#BE7A28] inline-flex items-center gap-1.5 transition-colors uppercase tracking-wider font-semibold"
          >
            <IconArrowLeft size={13} />
            <span>Back to Research Catalogue</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Title & Specs */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono text-[#BE7A28] uppercase font-bold tracking-widest">
                  SKU: {compound.sku}
                </span>
                <span className="text-[#6B7178]">·</span>
                <span className="text-[10px] font-mono text-[#3F6B4E] uppercase font-bold">
                  {compound.stockStatus}
                </span>
                <span className="text-[#6B7178]">·</span>
                <span className="text-[10px] font-mono text-[#E8E6E1] uppercase">
                  CAS: {compound.casNumber}
                </span>
              </div>

              <h1 className="font-heading text-2xl sm:text-4xl font-bold uppercase tracking-tight text-[#E8E6E1]">
                {compound.name}
              </h1>

              {/* Subheading */}
              <div className="text-xs font-mono text-[#B9BEC4] bg-[#16181B] p-3 border border-[#2A2E33] space-y-1">
                <div><strong className="text-[#E8E6E1]">Sequence:</strong> {compound.sequence}</div>
                <div className="text-[#6B7178]">{compound.sequenceLength} · {compound.molecularFormula} · {compound.calculatedMass}</div>
              </div>

              {/* Specification Summary Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono bg-[#16181B] p-4 border border-[#2A2E33]">
                <div>
                  <span className="text-[10px] text-[#6B7178] block">Purity:</span>
                  <strong className="text-[#BE7A28]">{compound.specificationPurity}</strong>
                </div>
                <div>
                  <span className="text-[10px] text-[#6B7178] block">Identity:</span>
                  <strong className="text-[#E8E6E1]">Mass Spectrometry</strong>
                </div>
                <div>
                  <span className="text-[10px] text-[#6B7178] block">Quantity:</span>
                  <strong className="text-[#E8E6E1]">{compound.vialSize} / vial</strong>
                </div>
                <div>
                  <span className="text-[10px] text-[#6B7178] block">Format:</span>
                  <strong className="text-[#E8E6E1]">{compound.format}</strong>
                </div>
                <div>
                  <span className="text-[10px] text-[#6B7178] block">Counter-ion:</span>
                  <strong className="text-[#E8E6E1]">{compound.counterIon}</strong>
                </div>
                <div>
                  <span className="text-[10px] text-[#6B7178] block">Storage:</span>
                  <strong className="text-[#E8E6E1]">-20 °C, desiccated</strong>
                </div>
                <div>
                  <span className="text-[10px] text-[#6B7178] block">Documentation:</span>
                  <strong className="text-[#3F6B4E]">Lot-specific CoA</strong>
                </div>
                <div>
                  <span className="text-[10px] text-[#6B7178] block">Availability:</span>
                  <strong className="text-[#E8E6E1]">Immediate Dispatch</strong>
                </div>
              </div>
            </div>

            {/* Order / Procurement Action Box */}
            <div className="lg:col-span-4 bg-[#16181B] border border-[#2A2E33] p-6 space-y-5 font-interface text-xs">
              <div className="border-b border-[#2A2E33] pb-3 flex items-baseline justify-between">
                <span className="text-2xl font-bold font-mono text-[#E8E6E1]">
                  ${compound.price.toFixed(2)}
                </span>
                <span className="text-[11px] font-mono text-[#6B7178]">USD / {compound.vialSize} vial</span>
              </div>

              {/* Quantity Selector */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono uppercase text-[#6B7178] block">
                  Vial Quantity
                </label>
                <div className="flex items-center">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="bg-[#0A0B0D] border border-[#2A2E33] px-3.5 py-2 text-xs font-mono hover:bg-[#1E2227]"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={e => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-16 text-center bg-[#0A0B0D] border-y border-[#2A2E33] py-2 text-xs font-mono text-[#E8E6E1] focus:outline-none"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="bg-[#0A0B0D] border border-[#2A2E33] px-3.5 py-2 text-xs font-mono hover:bg-[#1E2227]"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <Button
                  variant="amber"
                  size="md"
                  onClick={handleAddToCart}
                  className="w-full justify-center"
                >
                  <IconShoppingBag size={14} />
                  <span>Add to Order (${(compound.price * quantity).toFixed(2)})</span>
                </Button>

                {addedNotice && (
                  <div className="bg-[#111315] border border-[#3F6B4E] p-2 text-center text-[11px] font-mono text-[#3F6B4E]">
                    Added to order. <button onClick={() => setIsCartOpen(true)} className="underline font-bold text-[#BE7A28]">View Order</button>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleRequestQuote}
                    className="w-full justify-center text-[10px]"
                  >
                    <span>Request Quotation</span>
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onOpenLotLookup(compound.latestLot)}
                    className="w-full justify-center text-[10px]"
                  >
                    <span>Request Docs</span>
                  </Button>
                </div>

                {quoteRequested && (
                  <div className="bg-[#111315] border border-[#BE7A28] p-2 text-center text-[11px] font-mono text-[#E8E6E1]">
                    Quotation requested. We will issue your quote within 1-2 business days.
                  </div>
                )}
              </div>

              {/* Verified Lot Banner */}
              <div className="pt-2 border-t border-[#2A2E33] text-[10px] font-mono text-[#6B7178] flex items-center justify-between">
                <span>ACTIVE RELEASE LOT:</span>
                <button
                  onClick={() => onOpenLotLookup(compound.latestLot)}
                  className="text-[#BE7A28] font-bold hover:underline"
                >
                  {compound.latestLot} →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Persistent Compliance Strip */}
      <RUOComplianceStrip />

      {/* 2. SPECIFICATION TABLE & SCIENTIFIC OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Specification Table (12 parameters) */}
        <div className="space-y-4">
          <div className="border-b border-[#2A2E33] pb-2">
            <span className="text-[10px] font-mono text-[#BE7A28] uppercase font-bold tracking-widest block">
              CHEMICAL AND STRUCTURAL DATA
            </span>
            <h2 className="font-heading text-xl font-bold text-[#E8E6E1] uppercase tracking-wide">
              Compound specification
            </h2>
          </div>

          <p className="text-xs text-[#B9BEC4] font-body leading-relaxed max-w-4xl">
            {compound.description}
          </p>

          <div className="overflow-x-auto border border-[#2A2E33]">
            <table className="w-full text-left font-mono text-xs min-w-[500px]">
              <thead className="bg-[#16181B] text-[#BE7A28] uppercase text-[10px] border-b border-[#2A2E33]">
                <tr>
                  <th className="p-3 w-1/3 border-r border-[#2A2E33]">Parameter</th>
                  <th className="p-3">Specification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2A2E33] text-[#B9BEC4] bg-[#0E1012]">
                <tr>
                  <td className="p-3 font-semibold text-[#E8E6E1] border-r border-[#2A2E33]">Sequence</td>
                  <td className="p-3 text-[#E8E6E1]">{compound.sequence}</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-[#E8E6E1] border-r border-[#2A2E33]">Sequence length</td>
                  <td className="p-3">{compound.sequenceLength}</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-[#E8E6E1] border-r border-[#2A2E33]">Molecular formula</td>
                  <td className="p-3">{compound.molecularFormula}</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-[#E8E6E1] border-r border-[#2A2E33]">Calculated average mass</td>
                  <td className="p-3">{compound.calculatedMass}</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-[#E8E6E1] border-r border-[#2A2E33]">Modifications</td>
                  <td className="p-3">{compound.modifications}</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-[#E8E6E1] border-r border-[#2A2E33]">Appearance</td>
                  <td className="p-3">{compound.appearance}</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-[#E8E6E1] border-r border-[#2A2E33]">Counter-ion</td>
                  <td className="p-3">{compound.counterIon}</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-[#E8E6E1] border-r border-[#2A2E33]">Minimum purity</td>
                  <td className="p-3 text-[#BE7A28] font-bold">{compound.specificationPurity}</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-[#E8E6E1] border-r border-[#2A2E33]">Identity method</td>
                  <td className="p-3">{compound.identityMethod}</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-[#E8E6E1] border-r border-[#2A2E33]">Net peptide content</td>
                  <td className="p-3">{compound.netPeptideContent}</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-[#E8E6E1] border-r border-[#2A2E33]">Solubility</td>
                  <td className="p-3">{compound.solubility}</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-[#E8E6E1] border-r border-[#2A2E33]">Storage & Recommended retest</td>
                  <td className="p-3">{compound.storageCondition} (Retest: {compound.retestInterval})</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 3. RESEARCH DESCRIPTION & HANDLING NOTES */}
        <div className="bg-[#16181B] border border-[#2A2E33] p-6 sm:p-8 space-y-4 text-xs font-body text-[#B9BEC4]">
          <h2 className="font-heading text-lg font-bold text-[#E8E6E1] uppercase tracking-wider border-b border-[#2A2E33] pb-2">
            Handling and characterisation notes
          </h2>
          <p className="leading-relaxed">
            {compound.handlingNotes}
          </p>

          <div className="bg-[#0A0B0D] p-3.5 border border-[#2A2E33] text-[11px] text-[#6B7178] italic">
            [Static compliance line — mandatory, non-editable] This description addresses chemical and physical characteristics only. BioScience Depot makes no representation regarding biological activity, effect, or suitability for any application, and provides no guidance on use outside a controlled laboratory research setting.
          </div>
        </div>

        {/* 4. QUALITY STANDARDS & LOT VERIFICATION */}
        <div className="bg-[#16181B] border border-[#2A2E33] p-6 sm:p-8 space-y-4 text-xs font-body text-[#B9BEC4]">
          <h2 className="font-heading text-lg font-bold text-[#E8E6E1] uppercase tracking-wider border-b border-[#2A2E33] pb-2">
            How this lot was verified
          </h2>
          <p className="leading-relaxed">
            Every unit of <strong>{compound.name}</strong> is released against a written specification and accompanied by a lot-specific Certificate of Analysis reporting:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-mono text-[#E8E6E1] bg-[#0A0B0D] p-4 border border-[#2A2E33]">
            <li>• Purity by RP-HPLC, with detection wavelength stated</li>
            <li>• Identity by mass spectrometry, observed vs calculated mass</li>
            <li>• Appearance & physical cake integrity</li>
            <li>• Net peptide content, where determined</li>
            <li>• Counter-ion & moisture limits</li>
            <li>• Lot number ({compound.latestLot}), analysis date, and release date</li>
            <li>• Recommended storage condition and retest interval</li>
          </ul>
          <p className="pt-1">
            Material that does not meet specification is rejected, not regraded.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2 font-interface">
            <button
              onClick={() => onOpenLotLookup(compound.latestLot)}
              className="text-xs font-mono font-bold text-[#BE7A28] hover:underline inline-flex items-center gap-1.5"
            >
              <span>View representative Certificate of Analysis</span>
              <IconArrowRight size={12} />
            </button>
            <span className="text-[#6B7178]">·</span>
            <button
              onClick={() => {
                if (setActiveTab) setActiveTab('quality');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-mono font-bold text-[#B9BEC4] hover:underline"
            >
              Read full Quality Assurance standards
            </button>
          </div>
        </div>

        {/* 5. PACKAGING & STORAGE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-body text-[#B9BEC4]">
          <div className="bg-[#16181B] border border-[#2A2E33] p-6 space-y-3">
            <h2 className="font-heading text-base font-bold text-[#E8E6E1] uppercase tracking-wider border-b border-[#2A2E33] pb-2">
              How this product is supplied
            </h2>
            <ul className="space-y-1.5 list-disc list-inside text-[11px]">
              <li>Amber borosilicate glass vial, {compound.vialSize}</li>
              <li>Butyl rubber stopper with aluminium crimp seal</li>
              <li>Tamper-evident closure</li>
              <li>Argon/nitrogen inert headspace flush</li>
              <li>Cryogenic-rated barcode label: compound, lot, storage, and RUO notice</li>
              <li>Insulated shipper with coolant configured for transit window</li>
            </ul>
          </div>

          <div className="bg-[#16181B] border border-[#2A2E33] p-6 space-y-3">
            <h2 className="font-heading text-base font-bold text-[#E8E6E1] uppercase tracking-wider border-b border-[#2A2E33] pb-2">
              Storage and stability
            </h2>
            <ul className="space-y-1.5 list-disc list-inside text-[11px]">
              <li><strong>Lyophilised long-term:</strong> -20 °C or below, protected from light and moisture.</li>
              <li><strong>Reconstituted:</strong> Store frozen in single-use aliquots. Avoid freeze-thaw cycling.</li>
              <li><strong>Before opening:</strong> Equilibrate sealed vial to room temperature to prevent condensation.</li>
              <li><strong>Recommended retest interval:</strong> {compound.retestInterval}, as stated on the Certificate of Analysis.</li>
            </ul>
          </div>
        </div>

        {/* 6. PRODUCT FAQ */}
        <div className="space-y-4">
          <h2 className="font-heading text-lg font-bold text-[#E8E6E1] uppercase tracking-wider">
            Product Specific Inquiries
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-body">
            <div className="bg-[#16181B] border border-[#2A2E33] p-5 space-y-2">
              <h3 className="font-heading font-bold text-xs text-[#E8E6E1] uppercase tracking-wider">
                What documentation is supplied with this product?
              </h3>
              <p className="text-[#B9BEC4] leading-relaxed">
                A lot-specific Certificate of Analysis accompanies every unit, reporting purity, identity, appearance, and storage conditions for the exact material shipped. A safety data sheet (SDS) is available on request.
              </p>
            </div>

            <div className="bg-[#16181B] border border-[#2A2E33] p-5 space-y-2">
              <h3 className="font-heading font-bold text-xs text-[#E8E6E1] uppercase tracking-wider">
                Can I obtain a certificate before ordering?
              </h3>
              <p className="text-[#B9BEC4] leading-relaxed">
                Yes. A representative certificate is available on request, and institutional environmental health and safety (EHS) approval processes are routinely supported.
              </p>
            </div>

            <div className="bg-[#16181B] border border-[#2A2E33] p-5 space-y-2">
              <h3 className="font-heading font-bold text-xs text-[#E8E6E1] uppercase tracking-wider">
                Is a different purity grade or quantity available?
              </h3>
              <p className="text-[#B9BEC4] leading-relaxed">
                Alternative purity grades, quantities, counter-ions, and supplementary characterisation can be arranged. Contact our team with your specification.
              </p>
            </div>

            <div className="bg-[#16181B] border border-[#2A2E33] p-5 space-y-2">
              <h3 className="font-heading font-bold text-xs text-[#E8E6E1] uppercase tracking-wider">
                Can a single lot be reserved for a long study?
              </h3>
              <p className="text-[#B9BEC4] leading-relaxed">
                Yes. Where a programme will consume material over an extended period, single-lot reservation avoids introducing a lot change as an uncontrolled variable.
              </p>
            </div>

            <div className="bg-[#16181B] border border-[#2A2E33] p-5 space-y-2">
              <h3 className="font-heading font-bold text-xs text-[#E8E6E1] uppercase tracking-wider">
                How should this compound be reconstituted?
              </h3>
              <p className="text-[#B9BEC4] leading-relaxed">
                Solubility characteristics are noted in the specification above. General reconstitution practice is covered on our Research Information page.
              </p>
            </div>

            <div className="bg-[#16181B] border border-[#2A2E33] p-5 space-y-2">
              <h3 className="font-heading font-bold text-xs text-[#E8E6E1] uppercase tracking-wider">
                How is this product shipped?
              </h3>
              <p className="text-[#B9BEC4] leading-relaxed">
                In insulated packaging with coolant configured for the transit window and season, scheduled to avoid weekend dwell in carrier facilities.
              </p>
            </div>
          </div>
        </div>

        {/* 7. MANDATORY RESEARCH DISCLAIMER (Section 9.2) */}
        <div className="bg-[#111315] border border-[#2A2E33] p-6 space-y-3 font-body text-xs text-[#8D9299]">
          <div className="flex items-center gap-2 text-[#E8E6E1] font-heading font-bold text-xs uppercase tracking-wider">
            <IconShieldCheck size={16} amberAccent={true} />
            <span>FOR RESEARCH USE ONLY</span>
          </div>
          <p className="leading-relaxed">
            <strong>{compound.name}</strong> is supplied exclusively for laboratory research conducted by qualified professionals. It is not a drug, food, dietary supplement, cosmetic, or medical device. It has not been approved or evaluated by any regulatory authority for use in humans or animals. It is not intended to diagnose, treat, cure, mitigate, or prevent any disease or condition, and it must not be administered to humans or animals.
          </p>
          <p className="leading-relaxed">
            BioScience Depot makes no medical, therapeutic, diagnostic, clinical, nutritional, or performance claims regarding this product, and provides no dosing, administration, or protocol guidance for any use outside a controlled laboratory research setting.
          </p>
          <p className="leading-relaxed">
            Purchase requires that the buyer be 21 years of age or older. The buyer assumes full responsibility for safe, lawful, and appropriate handling, storage, use, and disposal.
          </p>
        </div>

        {/* 8. CLOSING CTA & RELATED COMPOUNDS */}
        <div className="space-y-6 pt-4 border-t border-[#2A2E33]">
          <div className="bg-[#16181B] border border-[#2A2E33] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <h2 className="font-heading font-bold text-base text-[#E8E6E1] uppercase tracking-wide">
                {compound.name}
              </h2>
              <p className="text-xs text-[#BE7A28] font-mono font-semibold">
                Verified per lot. Documented per lot. Shipped under controlled conditions.
              </p>
            </div>

            <div className="flex items-center gap-3 font-interface">
              <Button variant="amber" size="md" onClick={handleAddToCart}>
                <span>Add to Order</span>
              </Button>
              <Button variant="outline" size="md" onClick={handleRequestQuote}>
                <span>Request Quotation</span>
              </Button>
            </div>
          </div>

          {/* Related products */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase tracking-wider">
              Compounds in this category
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedCompounds.map(rel => (
                <div
                  key={rel.id}
                  onClick={() => onSelectCompound && onSelectCompound(rel)}
                  className="bg-[#16181B] border border-[#2A2E33] p-4 space-y-2 cursor-pointer hover:border-[#BE7A28] transition-colors"
                >
                  <span className="text-[9px] font-mono text-[#BE7A28] uppercase font-bold">{rel.sku}</span>
                  <h4 className="font-heading text-xs font-bold text-[#E8E6E1] line-clamp-1">{rel.name}</h4>
                  <div className="text-[10px] font-mono text-[#6B7178]">${rel.price.toFixed(2)} USD · ≥{rel.purity}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
