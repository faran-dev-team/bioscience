import React from 'react';
import { ShieldCheck, Lock, FileText, AlertTriangle } from 'lucide-react';

export const LegalPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-sans space-y-10">
      {/* Header */}
      <div className="space-y-4 font-mono border-b border-white/10 pb-6">
        <span className="text-xs text-amber-500 font-bold uppercase tracking-widest block">
          [ SECTION 14 — COMPLIANCE & LEGAL SPECIFICATION ]
        </span>
        <h1 className="text-3xl font-bold text-alloy-100 uppercase tracking-tight">
          Terms of Sale & Research Use Disclaimer
        </h1>
        <p className="text-xs text-alloy-400 font-mono">
          EFFECTIVE DATE: AUGUST 2024 | GOVERNING REGULATION: UNITED STATES JURISDICTION
        </p>
      </div>

      {/* RUO Disclaimer Highlight Box */}
      <div className="bg-obsidian-950 p-6 border-2 border-amber-500/40 font-mono space-y-3">
        <div className="flex items-center gap-2 text-amber-400 font-bold text-sm uppercase">
          <AlertTriangle className="w-5 h-5 text-amber-500" />
          RESEARCH USE ONLY DISCLAIMER (§ 8.7 COMPLIANCE SPECIFICATION)
        </div>
        <p className="text-xs text-alloy-300 leading-relaxed font-sans">
          All products supplied by BioScience Depot are intended exclusively for laboratory research conducted by qualified individuals. Products sold on this website are not drugs, foods, cosmetics, medical devices, or dietary supplements, and are not intended for human consumption or veterinary use.
        </p>
      </div>

      {/* Legal Articles */}
      <div className="space-y-8 font-mono text-xs">
        {/* Article 1 */}
        <div className="space-y-2">
          <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider">
            1. Purchaser Qualifications & Order Restrictions
          </h3>
          <p className="text-alloy-300 font-sans leading-relaxed text-xs">
            Purchasers must be 21 years of age or older and acquiring materials strictly for legitimate research purposes in academic, university, biotech, or industrial settings. BioScience Depot reserves the right to decline any order where intended application appears inconsistent with laboratory research use.
          </p>
        </div>

        {/* Article 2 */}
        <div className="space-y-2">
          <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider">
            2. Institutional Procurement & Net 30 Terms
          </h3>
          <p className="text-alloy-300 font-sans leading-relaxed text-xs">
            Qualified universities and corporate accounts may issue formal Purchase Orders (Net 30 terms). Invoices must be settled in full within 30 days of shipment dispatch.
          </p>
        </div>

        {/* Article 3 */}
        <div className="space-y-2">
          <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider">
            3. Cold Chain Shipping & Chain of Custody
          </h3>
          <p className="text-alloy-300 font-sans leading-relaxed text-xs">
            All temperature-sensitive materials are packaged in insulated shippers with validated coolant packs. Due to chain of custody preservation requirements, opened or delivered chemical inventory cannot be returned to saleable stock.
          </p>
        </div>

        {/* Article 4 */}
        <div className="space-y-2">
          <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider">
            4. Privacy & Data Handling
          </h3>
          <p className="text-alloy-300 font-sans leading-relaxed text-xs">
            BioScience Depot processes transaction data solely to fulfill orders, issue documentation, and comply with regulatory recordkeeping. We do not sell or share customer data with third-party advertisers.
          </p>
        </div>
      </div>
    </div>
  );
};
