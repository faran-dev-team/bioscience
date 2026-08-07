import React from 'react';
import { ShieldCheck, Lock, FileText, CheckCircle2 } from 'lucide-react';
import { Logo } from '../ui/Logo';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenLotLookup: (lotNum?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenLotLookup }) => {
  return (
    <footer className="bg-theme-surface border-t border-theme text-theme-secondary font-mono text-xs pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-theme">
          {/* Col 1: Brand Logo & Purpose */}
          <div className="space-y-4">
            <Logo size="md" />
            <p className="text-theme-muted text-[11px] leading-relaxed font-sans">
              American supplier of analytically verified research peptides. Every compound is released against a written specification and accompanied by a lot-specific Certificate of Analysis.
            </p>
            <div className="flex items-center gap-2 text-emerald-500 text-[10px]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>UNITED STATES REGISTERED ENTITY</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-amber-500 uppercase tracking-widest font-bold mb-4">
              Catalogue & Search
            </h4>
            <ul className="space-y-2 text-[11px]">
              <li>
                <button
                  onClick={() => setActiveTab('catalogue')}
                  className="hover:text-amber-500 transition-colors"
                >
                  Tissue Repair Peptides
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('catalogue')}
                  className="hover:text-amber-500 transition-colors"
                >
                  Metabolic & GLP-1 Analogs
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('catalogue')}
                  className="hover:text-amber-500 transition-colors"
                >
                  Cellular & Telomerase Compounds
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLotLookup('LOT 24-0817-C')}
                  className="text-amber-500 font-bold hover:underline flex items-center gap-1"
                >
                  <FileText className="w-3 h-3" />
                  COA / Lot Verification Hub
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Quality & Methods */}
          <div>
            <h4 className="text-amber-500 uppercase tracking-widest font-bold mb-4">
              Quality Controls
            </h4>
            <ul className="space-y-2 text-[11px]">
              <li>
                <button
                  onClick={() => setActiveTab('quality')}
                  className="hover:text-amber-500 transition-colors"
                >
                  HPLC Area Normalisation
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('quality')}
                  className="hover:text-amber-500 transition-colors"
                >
                  Mass Spectrometry Verification
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('quality')}
                  className="hover:text-amber-500 transition-colors"
                >
                  Karl Fischer Water Titration
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('research')}
                  className="hover:text-amber-500 transition-colors text-amber-500 font-semibold"
                >
                  Reconstitution & Storage Protocol
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Institutional Contact */}
          <div>
            <h4 className="text-amber-500 uppercase tracking-widest font-bold mb-4">
              Procurement & Legal
            </h4>
            <ul className="space-y-2 text-[11px]">
              <li className="text-theme-secondary">
                Institutional Support: <span className="text-amber-500 font-mono">support@bioscience.co</span>
              </li>
              <li className="text-theme-secondary">
                Quality & Release: <span className="text-amber-500 font-mono">qc@bioscience.co</span>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('legal')}
                  className="hover:text-amber-500 transition-colors underline"
                >
                  Terms of Sale & Research Disclaimer
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Mandatory Research Disclaimer Box */}
        <div className="my-8 bg-theme-bg border border-amber-500/30 p-5 space-y-2">
          <div className="flex items-center gap-2 text-amber-500 font-bold text-xs uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" />
            <span>MANDATORY RESEARCH DISCLAIMER (§ 8.7 COMPLIANCE SPECIFICATION)</span>
          </div>
          <p className="text-[11px] text-theme-secondary leading-relaxed font-mono">
            FOR RESEARCH USE ONLY. NOT FOR HUMAN OR VETERINARY USE. All products supplied by BioScience Depot are intended exclusively for laboratory research conducted by qualified individuals. Products are not drugs, foods, cosmetics, medical devices, or dietary supplements. Nothing on this website constitutes clinical, therapeutic, or medical advice.
          </p>
        </div>

        {/* Bottom Rights */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[10px] text-theme-muted font-mono pt-4 border-t border-theme gap-2">
          <p>© {new Date().getFullYear()} BioScience Depot Inc. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Lock className="w-3 h-3 text-amber-500" />
              256-BIT ENCRYPTED PROCUREMENT
            </span>
            <span>UNITED STATES DOMESTIC SUPPLY</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
