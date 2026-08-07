import React from 'react';
import { IconAlertTriangle } from '../components/ui/Icons';

export const LegalPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-body space-y-8 bg-theme-canvas transition-colors duration-150">
      {/* Header in Söhne Breit / Söhne */}
      <div className="space-y-3 border-b border-theme pb-6">
        <span className="text-[11px] font-mono text-[#BE7A28] font-bold uppercase tracking-widest block">
          [ SECTION 14 — COMPLIANCE & LEGAL SPECIFICATION ]
        </span>
        <h1 className="font-display text-3xl font-bold text-theme-primary uppercase tracking-tight">
          Terms of Sale & Research Use Disclaimer
        </h1>
        <p className="text-xs text-theme-muted font-mono">
          EFFECTIVE DATE: AUGUST 2024 · GOVERNING REGULATION: UNITED STATES JURISDICTION
        </p>
      </div>

      {/* RUO Disclaimer Highlight Box */}
      <div className="bg-theme-surface p-6 border border-theme space-y-3 font-body transition-colors">
        <div className="flex items-center gap-2 text-theme-primary font-heading font-bold text-xs uppercase">
          <IconAlertTriangle size={16} amberAccent={true} />
          <span>RESEARCH USE ONLY DISCLAIMER (§ 8.7 COMPLIANCE SPECIFICATION)</span>
        </div>
        <p className="text-xs text-theme-secondary leading-relaxed font-body">
          All products supplied by BioScience Depot are intended exclusively for laboratory research conducted by qualified individuals. Products sold on this website are not drugs, foods, cosmetics, medical devices, or dietary supplements, and are not intended for human consumption or veterinary use.
        </p>
      </div>

      {/* Legal Articles in Söhne */}
      <div className="space-y-6 text-xs font-body">
        {/* Article 1 */}
        <div className="space-y-1.5 bg-theme-surface p-5 border border-theme transition-colors">
          <h3 className="font-heading text-xs font-bold text-theme-primary uppercase tracking-wider">
            1. Purchaser Qualifications & Order Restrictions
          </h3>
          <p className="text-theme-secondary leading-relaxed">
            Purchasers must be 21 years of age or older and acquiring materials strictly for legitimate research purposes in academic, university, biotech, or industrial settings. BioScience Depot reserves the right to decline any order where intended application appears inconsistent with laboratory research use.
          </p>
        </div>

        {/* Article 2 */}
        <div className="space-y-1.5 bg-theme-surface p-5 border border-theme transition-colors">
          <h3 className="font-heading text-xs font-bold text-theme-primary uppercase tracking-wider">
            2. Institutional Procurement & Net 30 Terms
          </h3>
          <p className="text-theme-secondary leading-relaxed">
            Qualified universities and corporate accounts may issue formal Purchase Orders (Net 30 terms). Invoices must be settled in full within 30 days of shipment dispatch.
          </p>
        </div>

        {/* Article 3 */}
        <div className="space-y-1.5 bg-theme-surface p-5 border border-theme transition-colors">
          <h3 className="font-heading text-xs font-bold text-theme-primary uppercase tracking-wider">
            3. Cold Chain Shipping & Chain of Custody
          </h3>
          <p className="text-theme-secondary leading-relaxed">
            All temperature-sensitive materials are packaged in insulated shippers with validated coolant packs. Due to chain of custody preservation requirements, opened or delivered chemical inventory cannot be returned to saleable stock.
          </p>
        </div>

        {/* Article 4 */}
        <div className="space-y-1.5 bg-theme-surface p-5 border border-theme transition-colors">
          <h3 className="font-heading text-xs font-bold text-theme-primary uppercase tracking-wider">
            4. Privacy & Data Handling
          </h3>
          <p className="text-theme-secondary leading-relaxed">
            BioScience Depot processes transaction data solely to fulfill orders, issue documentation, and comply with regulatory recordkeeping. We do not sell or share customer data with third-party advertisers.
          </p>
        </div>
      </div>
    </div>
  );
};
