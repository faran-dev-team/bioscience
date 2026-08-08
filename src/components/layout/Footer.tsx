import React, { useState } from 'react';
import { Logo } from '../ui/Logo';
import {
  IconShieldCheck,
  IconLock,
  IconFileText,
  IconCheckCircle,
  IconArrowRight
} from '../ui/Icons';
import { Button } from '../ui/Button';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenLotLookup: (lotNum?: string) => void;
  onSelectCategory?: (categorySlug: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  setActiveTab,
  onOpenLotLookup,
  onSelectCategory,
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'success' | 'error' | 'already'>('idle');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      setNewsletterStatus('error');
      return;
    }
    if (newsletterEmail.toLowerCase().includes('already')) {
      setNewsletterStatus('already');
      return;
    }
    setNewsletterStatus('success');
  };

  const handleCategoryClick = (slug: string) => {
    if (onSelectCategory) {
      onSelectCategory(slug);
    } else {
      setActiveTab('catalogue');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0B0D] border-t border-[#2A2E33] text-[#B9BEC4] font-body text-xs pt-14 pb-10 transition-colors duration-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Newsletter Section matching Section 10.5 */}
        <div className="bg-[#16181B] border border-[#2A2E33] p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7 space-y-2">
            <span className="text-[10px] font-mono text-[#BE7A28] font-bold uppercase tracking-widest block">
              [ TECHNICAL NEWSLETTER ]
            </span>
            <h3 className="font-heading text-lg sm:text-xl font-bold text-[#E8E6E1] uppercase tracking-wider">
              Research notes from BioScience Depot.
            </h3>
            <p className="text-xs text-[#B9BEC4] font-body leading-relaxed max-w-xl">
              Occasional updates on catalogue additions, quality documentation, and laboratory reference material. No promotional messaging, no urgency, no discounts.
            </p>
          </div>

          <div className="lg:col-span-5 space-y-2">
            {newsletterStatus === 'success' ? (
              <div className="bg-[#111315] border border-[#3F6B4E] p-3.5 text-xs text-[#E8E6E1] font-mono flex items-center gap-2">
                <IconCheckCircle size={16} className="text-[#3F6B4E] flex-shrink-0" />
                <span>Subscribed. You will receive research notes occasionally — and nothing else.</span>
              </div>
            ) : newsletterStatus === 'already' ? (
              <div className="bg-[#111315] border border-[#BE7A28] p-3.5 text-xs text-[#E8E6E1] font-mono flex items-center gap-2">
                <span>This address is already on the list. Nothing further is needed.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Institutional email address"
                    value={newsletterEmail}
                    onChange={e => {
                      setNewsletterEmail(e.target.value);
                      if (newsletterStatus !== 'idle') setNewsletterStatus('idle');
                    }}
                    className="flex-1 bg-[#0A0B0D] border border-[#2A2E33] px-3.5 py-2 text-xs font-mono text-[#E8E6E1] placeholder:text-[#6B7178] focus:border-[#BE7A28] focus:outline-none"
                  />
                  <Button variant="amber" size="md" type="submit" className="rounded-none">
                    <span>Subscribe</span>
                  </Button>
                </div>
                {newsletterStatus === 'error' && (
                  <p className="text-[10px] text-[#8C3A3A] font-mono">
                    That address was not accepted. Please check it, or contact us.
                  </p>
                )}
                <p className="text-[10px] text-[#6B7178] font-body">
                  We send infrequently and never share your address. Unsubscribe at any time.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* 4-Column Exact Footer Grid (Page 8 & 56) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-[#2A2E33]">
          
          {/* Column 1 — Research Products */}
          <div className="space-y-3 font-interface">
            <h4 className="text-[#E8E6E1] uppercase tracking-wider font-bold text-xs font-heading border-b border-[#2A2E33] pb-2">
              Research Products
            </h4>
            <ul className="space-y-2 text-[11px]">
              <li>
                <button
                  onClick={() => handleCategoryClick('catalogue')}
                  className="hover:text-[#BE7A28] transition-colors text-left"
                >
                  Catalogue Research Peptides
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick('fragments')}
                  className="hover:text-[#BE7A28] transition-colors text-left"
                >
                  Peptide Fragments and Analogues
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick('cyclic-modified')}
                  className="hover:text-[#BE7A28] transition-colors text-left"
                >
                  Cyclic and Modified Peptides
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick('reference-standards')}
                  className="hover:text-[#BE7A28] transition-colors text-left"
                >
                  Reference Standards
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick('custom-synthesis')}
                  className="hover:text-[#BE7A28] transition-colors text-left"
                >
                  Custom Synthesis
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick('consumables')}
                  className="hover:text-[#BE7A28] transition-colors text-left"
                >
                  Laboratory Consumables
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2 — Company */}
          <div className="space-y-3 font-interface">
            <h4 className="text-[#E8E6E1] uppercase tracking-wider font-bold text-xs font-heading border-b border-[#2A2E33] pb-2">
              Company
            </h4>
            <ul className="space-y-2 text-[11px]">
              <li>
                <button
                  onClick={() => {
                    setActiveTab('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#BE7A28] transition-colors text-left"
                >
                  About BioScience Depot
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('why-choose-us');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#BE7A28] transition-colors text-left"
                >
                  Why Choose Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('quality');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#BE7A28] transition-colors text-left"
                >
                  Quality Assurance
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('research');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#BE7A28] transition-colors text-left"
                >
                  Research Information
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('faqs');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#BE7A28] transition-colors text-left"
                >
                  Frequently Asked Questions (50)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#BE7A28] transition-colors text-left"
                >
                  Contact Our Team
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3 — Support & Operations */}
          <div className="space-y-3 font-interface">
            <h4 className="text-[#E8E6E1] uppercase tracking-wider font-bold text-xs font-heading border-b border-[#2A2E33] pb-2">
              Support & Logistics
            </h4>
            <ul className="space-y-2 text-[11px]">
              <li>
                <button
                  onClick={() => {
                    setActiveTab('research');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#BE7A28] transition-colors text-left"
                >
                  Shipping and Handling
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('research');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#BE7A28] transition-colors text-left"
                >
                  Storage Guidance
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLotLookup('LOT 24-0817-C')}
                  className="text-[#BE7A28] font-bold hover:underline flex items-center gap-1.5"
                >
                  <IconFileText size={13} amberAccent={true} />
                  <span>Retrieve CoA by Lot Number</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#BE7A28] transition-colors text-left"
                >
                  Wholesale and Institutional Accounts
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#BE7A28] transition-colors text-left"
                >
                  Laboratory Partnerships
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4 — Legal and Compliance */}
          <div className="space-y-3 font-interface">
            <h4 className="text-[#E8E6E1] uppercase tracking-wider font-bold text-xs font-heading border-b border-[#2A2E33] pb-2">
              Legal & Compliance
            </h4>
            <ul className="space-y-2 text-[11px]">
              <li>
                <button
                  onClick={() => {
                    setActiveTab('legal');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#BE7A28] transition-colors text-left"
                >
                  Privacy Policy (§ 8.1)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('legal');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#BE7A28] transition-colors text-left"
                >
                  Terms of Sale (§ 8.2)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('legal');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#BE7A28] transition-colors text-left"
                >
                  Research Disclaimer (§ 8.3)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('legal');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#BE7A28] transition-colors text-left"
                >
                  Shipping Disclaimer (§ 8.4)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('legal');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#BE7A28] transition-colors text-left"
                >
                  Compliance Notice (§ 8.6)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('legal');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#BE7A28] transition-colors text-left"
                >
                  Educational & Website Disclaimers
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Short-form Product Disclaimer (§ 8.7) */}
        <div className="bg-[#111315] border border-[#2A2E33] p-4 sm:p-5 space-y-2 font-body text-xs">
          <div className="flex items-center gap-2 text-[#E8E6E1] font-heading font-bold text-xs uppercase tracking-wider">
            <IconShieldCheck size={15} amberAccent={true} />
            <span>Product Disclaimer (§ 8.7 Compliance Specification)</span>
          </div>
          <p className="text-[11px] text-[#8D9299] leading-relaxed font-body">
            FOR RESEARCH USE ONLY. Not for human or veterinary consumption. Not a drug, food, supplement, cosmetic, or medical device. Not approved or evaluated by any regulatory authority for use in humans or animals. Not intended to diagnose, treat, cure, or prevent any disease or condition. Purchase requires that the buyer be 21 years of age or older and use the material solely for legitimate laboratory research. The buyer assumes full responsibility for safe, lawful, and appropriate handling, use, and disposal.
          </p>
        </div>

        {/* Bottom Rights & Domestic Verification */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#6B7178] font-mono pt-4 gap-4">
          <div className="flex items-center gap-3">
            <Logo size="sm" showSubtitle={false} />
            <p>© {new Date().getFullYear()} BioScience Depot Inc. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1 text-[#E8E6E1]">
              <IconLock size={12} />
              <span>UNITED STATES DOMESTIC SUPPLY</span>
            </span>
            <span>·</span>
            <span>256-BIT ENCRYPTED PROCUREMENT</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
