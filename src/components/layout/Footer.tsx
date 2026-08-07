import React from 'react';
import { Logo } from '../ui/Logo';
import {
  IconShieldCheck,
  IconLock,
  IconFileText,
  IconCheckCircle
} from '../ui/Icons';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenLotLookup: (lotNum?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenLotLookup }) => {
  return (
    <footer className="bg-[#16181B] border-t border-[#2A2E33] text-[#B9BEC4] font-body text-xs pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-[#2A2E33]">
          {/* Col 1: Brand Logo & Purpose */}
          <div className="space-y-3">
            <Logo size="md" />
            <p className="text-[#6B7178] text-[11px] leading-relaxed font-body">
              American supplier of analytically verified research peptides. Every compound is released against a written specification and accompanied by a lot-specific Certificate of Analysis.
            </p>
            <div className="flex items-center gap-1.5 text-[#528B66] text-[11px] font-mono">
              <IconCheckCircle size={14} />
              <span>UNITED STATES REGISTERED ENTITY</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="font-interface">
            <h4 className="text-[#E8E6E1] uppercase tracking-wider font-bold mb-3 text-xs font-heading">
              Catalogue & Search
            </h4>
            <ul className="space-y-2 text-[11px]">
              <li>
                <button
                  onClick={() => setActiveTab('catalogue')}
                  className="hover:text-[#E3A455] transition-colors text-left"
                >
                  Tissue Repair Peptides
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('catalogue')}
                  className="hover:text-[#E3A455] transition-colors text-left"
                >
                  Metabolic & GLP-1 Analogs
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('catalogue')}
                  className="hover:text-[#E3A455] transition-colors text-left"
                >
                  Cellular & Telomerase Compounds
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLotLookup('LOT 24-0817-C')}
                  className="text-[#BE7A28] font-bold hover:underline flex items-center gap-1.5"
                >
                  <IconFileText size={13} amberAccent={true} />
                  <span>Verify a Lot / COA Hub</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Quality & Methods */}
          <div className="font-interface">
            <h4 className="text-[#E8E6E1] uppercase tracking-wider font-bold mb-3 text-xs font-heading">
              Quality & Methods
            </h4>
            <ul className="space-y-2 text-[11px]">
              <li>
                <button
                  onClick={() => setActiveTab('quality')}
                  className="hover:text-[#E3A455] transition-colors text-left"
                >
                  HPLC Area Normalisation
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('quality')}
                  className="hover:text-[#E3A455] transition-colors text-left"
                >
                  Mass Spectrometry Verification
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('quality')}
                  className="hover:text-[#E3A455] transition-colors text-left"
                >
                  Karl Fischer Water Titration
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('research')}
                  className="hover:text-[#E3A455] transition-colors text-[#BE7A28] font-semibold text-left"
                >
                  Reconstitution & Storage Protocol
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Institutional Contact */}
          <div className="font-interface">
            <h4 className="text-[#E8E6E1] uppercase tracking-wider font-bold mb-3 text-xs font-heading">
              About & Contact
            </h4>
            <ul className="space-y-2 text-[11px]">
              <li className="text-[#B9BEC4]">
                Institutional Support: <a href="mailto:support@bioscience.co" className="text-[#E8E6E1] font-mono hover:underline">support@bioscience.co</a>
              </li>
              <li className="text-[#B9BEC4]">
                Quality & Release: <a href="mailto:qc@bioscience.co" className="text-[#E8E6E1] font-mono hover:underline">qc@bioscience.co</a>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('about')}
                  className="hover:text-[#E3A455] transition-colors underline text-left"
                >
                  About BioScience Depot & Facilities
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('legal')}
                  className="hover:text-[#E3A455] transition-colors underline text-left"
                >
                  Terms of Sale & Research Disclaimer
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Mandatory Research Disclaimer Box */}
        <div className="my-6 bg-[#0A0B0D] border border-[#2A2E33] p-4 space-y-1.5 font-body text-xs">
          <div className="flex items-center gap-1.5 text-[#E8E6E1] font-heading font-bold text-xs uppercase tracking-wider">
            <IconShieldCheck size={14} amberAccent={true} />
            <span>MANDATORY RESEARCH DISCLAIMER (§ 8.7 COMPLIANCE SPECIFICATION)</span>
          </div>
          <p className="text-[11px] text-[#6B7178] leading-relaxed font-body">
            FOR RESEARCH USE ONLY. NOT FOR HUMAN, CLINICAL, OR VETERINARY USE. All products supplied by BioScience Depot are intended exclusively for laboratory research conducted by qualified individuals. Products are not drugs, foods, cosmetics, medical devices, or dietary supplements. Nothing on this website constitutes clinical, therapeutic, or medical advice.
          </p>
        </div>

        {/* Bottom Rights */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[10px] text-[#6B7178] font-mono pt-3 border-t border-[#2A2E33] gap-2">
          <p>© {new Date().getFullYear()} BioScience Depot Inc. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <IconLock size={11} />
              <span>256-BIT ENCRYPTED PROCUREMENT</span>
            </span>
            <span>UNITED STATES DOMESTIC SUPPLY</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
