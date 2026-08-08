import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RUOComplianceStrip } from '../components/features/hero/RUOComplianceStrip';
import { IconAlertTriangle, IconShieldCheck, IconLock, IconFileText, IconCheckCircle } from '../components/ui/Icons';

interface LegalPageProps {
  initialPolicy?: string;
  setActiveTab?: (tab: string) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ initialPolicy = 'terms', setActiveTab }) => {
  const [activePolicy, setActivePolicy] = useState<string>(initialPolicy);

  const policies = [
    { id: 'privacy', label: '8.1 Privacy Policy' },
    { id: 'terms', label: '8.2 Terms of Sale' },
    { id: 'research-disclaimer', label: '8.3 Research Disclaimer' },
    { id: 'shipping-disclaimer', label: '8.4 Shipping Policy & Disclaimer' },
    { id: 'compliance-notice', label: '8.6 Compliance Notice' },
    { id: 'product-disclaimer', label: '8.7 Product Disclaimer' },
    { id: 'educational-disclaimer', label: '8.8 Educational Disclaimer' },
    { id: 'website-disclaimer', label: '8.9 Website Disclaimer' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="space-y-12 bg-[#0A0B0D] text-[#E8E6E1] font-body"
    >
      {/* 1. HERO (PAGE 08) */}
      <section className="pt-12 pb-14 px-4 sm:px-6 lg:px-8 border-b border-[#2A2E33] bg-[#0E1012]">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-[11px] font-mono text-[#BE7A28] font-bold uppercase tracking-widest block">
            [ PAGE 08 — LEGAL AND COMPLIANCE SPECIFICATIONS ]
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#E8E6E1]">
            Legal & Compliance Hub
          </h1>
          <p className="text-xs sm:text-sm text-[#B9BEC4] font-body leading-relaxed max-w-3xl">
            Governing terms of sale, research-use boundaries, domestic shipping policies, and operational disclaimers under United States jurisdiction.
          </p>
        </div>
      </section>

      {/* Compliance Strip */}
      <RUOComplianceStrip />

      {/* 2. POLICY NAVIGATION TABS & CONTENT */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 font-interface border-b border-[#2A2E33] pb-4 text-xs">
          {policies.map(p => (
            <button
              key={p.id}
              onClick={() => setActivePolicy(p.id)}
              className={`px-3.5 py-2 font-semibold uppercase tracking-wider text-[11px] border transition-colors ${
                activePolicy === p.id
                  ? 'bg-[#BE7A28] text-[#0A0B0D] border-[#BE7A28] font-bold'
                  : 'bg-[#16181B] text-[#B9BEC4] border-[#2A2E33] hover:text-[#E8E6E1] hover:border-[#BE7A28]'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* POLICY DISPLAY */}
        <div className="bg-[#16181B] border border-[#2A2E33] p-6 sm:p-10 space-y-8 text-xs font-body text-[#B9BEC4] leading-relaxed">
          
          {/* 8.1 — PRIVACY POLICY */}
          {activePolicy === 'privacy' && (
            <div className="space-y-6">
              <div className="border-b border-[#2A2E33] pb-3">
                <span className="text-[10px] font-mono text-[#BE7A28] uppercase font-bold tracking-widest block">
                  SECTION 8.1
                </span>
                <h2 className="font-heading text-2xl font-bold text-[#E8E6E1] uppercase tracking-wide">
                  Privacy Policy
                </h2>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase mb-1">In short</h3>
                  <p>We collect the minimum information required to fulfil orders, provide support, meet our record-keeping obligations, and operate this website. We do not sell personal information.</p>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase mb-1">Information we collect</h3>
                  <ul className="space-y-1.5 list-disc list-inside">
                    <li><strong>Information you provide:</strong> Name, institution, business address, delivery address, email address, telephone number, account credentials, purchase order references, and enquiry content.</li>
                    <li><strong>Transaction information:</strong> Order history, lot numbers supplied, shipment records, invoices, and documentation issued. Payment card details are processed by our payment provider; we do not store full card numbers.</li>
                    <li><strong>Verification information:</strong> Confirmations of age (21+) and research purpose, and any institutional verification information you supply.</li>
                    <li><strong>Technical information:</strong> IP address, browser/device characteristics, pages viewed, and referral source via standard web analytics.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase mb-1">How we use it</h3>
                  <p>To process and fulfil orders; to provide technical and account support; to issue and retrieve documentation; to verify eligibility to purchase; to meet legal, tax, and record-retention obligations; to maintain traceability and contact affected customers in the event of a quality notification; to improve the website; and, where you have opted in, to send occasional research notes.</p>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase mb-1">Sharing & Retention</h3>
                  <p>We share information only with parties necessary to operate: payment processors, carriers and logistics providers, hosting providers, and professional advisers under confidentiality obligations. We do not sell personal information. Traceability and order records are retained under our retention policy to support audit and documentation retrieval.</p>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase mb-1">Your rights & Children (21+ Rule)</h3>
                  <p>Subject to applicable law, you may request access, correction, or deletion of personal info where retention is not legally required. This website and products are not directed to anyone under 21. Contact: privacy@biosciencedepot.com.</p>
                </div>
              </div>
            </div>
          )}

          {/* 8.2 — TERMS OF SALE */}
          {activePolicy === 'terms' && (
            <div className="space-y-6">
              <div className="border-b border-[#2A2E33] pb-3">
                <span className="text-[10px] font-mono text-[#BE7A28] uppercase font-bold tracking-widest block">
                  SECTION 8.2
                </span>
                <h2 className="font-heading text-2xl font-bold text-[#E8E6E1] uppercase tracking-wide">
                  Terms of Sale
                </h2>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase mb-1">Agreement & Eligibility</h3>
                  <p>These terms govern all sales by BioScience Depot. Placing an order constitutes acceptance. You must be 21 years of age or older, legally able to enter contracts, and acquiring materials solely for legitimate laboratory research. We may decline or cancel any order at our discretion without stating a reason.</p>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase mb-1">Research Use Only</h3>
                  <p>All products are supplied strictly for Research Use Only. They are not drugs, foods, supplements, cosmetics, or medical devices. They are not for human or veterinary consumption and not for diagnostic, therapeutic, or clinical use. You agree not to administer them to humans or animals, and not to supply them onward for such use.</p>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase mb-1">Buyer Responsibility & Pricing</h3>
                  <p>You are solely responsible for determining material suitability for your research; for compliance with all federal, state, and local law; and for containment and protective equipment. Risk transfers on delivery. Prices are in USD and quotations remain valid for the period stated.</p>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase mb-1">Returns & Temperature Preservation</h3>
                  <p>Owing to the temperature-sensitive nature of these materials and the impossibility of verifying storage conditions after leaving our control, material that has left our custody cannot be returned to saleable inventory. Returns are accepted only where shipped in error, did not meet specification on arrival, or failed cold chain — subject to prompt day-of-receipt notification.</p>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase mb-1">Warranty & Limitation of Liability</h3>
                  <p>We warrant that material conforms to its written specification and accompanying Certificate of Analysis at dispatch. To the maximum extent permitted by law, our aggregate liability is limited to the purchase price of the material giving rise to the claim. We are not liable for consequential damages or lost research results.</p>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase mb-1">Governing Law</h3>
                  <p>These terms are governed by the laws of the United States without regard to conflict of law principles.</p>
                </div>
              </div>
            </div>
          )}

          {/* 8.3 — RESEARCH DISCLAIMER */}
          {activePolicy === 'research-disclaimer' && (
            <div className="space-y-6">
              <div className="border-b border-[#2A2E33] pb-3">
                <span className="text-[10px] font-mono text-[#BE7A28] uppercase font-bold tracking-widest block">
                  SECTION 8.3
                </span>
                <h2 className="font-heading text-2xl font-bold text-[#E8E6E1] uppercase tracking-wide">
                  Research Disclaimer
                </h2>
              </div>

              <div className="space-y-4">
                <p className="font-semibold text-[#E8E6E1]">
                  All products supplied by BioScience Depot are intended exclusively for laboratory research conducted by qualified professionals in appropriate facilities.
                </p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Not drugs, medicines, dietary supplements, foods, cosmetics, or medical devices</li>
                  <li>Not approved or evaluated by the U.S. Food and Drug Administration or any regulatory authority for use in humans or animals</li>
                  <li>Not intended to diagnose, treat, cure, mitigate, or prevent any disease or condition</li>
                  <li>Not for human consumption, veterinary use, clinical use, or diagnostic use in any form</li>
                  <li>Not supplied with any representation of safety or efficacy for any use in any organism</li>
                </ul>
                <p>
                  BioScience Depot makes no medical, therapeutic, diagnostic, clinical, nutritional, or performance claims regarding any product. The purchaser assumes full and sole responsibility for safe and lawful handling, storage, use, and disposal.
                </p>
              </div>
            </div>
          )}

          {/* 8.4 — SHIPPING DISCLAIMER */}
          {activePolicy === 'shipping-disclaimer' && (
            <div className="space-y-6">
              <div className="border-b border-[#2A2E33] pb-3">
                <span className="text-[10px] font-mono text-[#BE7A28] uppercase font-bold tracking-widest block">
                  SECTION 8.4
                </span>
                <h2 className="font-heading text-2xl font-bold text-[#E8E6E1] uppercase tracking-wide">
                  Shipping Policy and Disclaimer
                </h2>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase mb-1">Dispatch & Packaging</h3>
                  <p>In-stock orders placed before the daily cut-off are dispatched same or next business day. Cold-chain shipments are scheduled to avoid weekend dwell in carrier facilities. Packed in insulated shippers with coolant configured for transit duration and season.</p>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase mb-1">Receipt Responsibility</h3>
                  <p>The purchaser is responsible for ensuring a person is available to receive the shipment and promptly transfer material to -20 °C storage. We are not responsible for degradation from delay after delivery in mail-room facilities.</p>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase mb-1">Damage, Loss & Temperature Excursion</h3>
                  <p>Report any damage, loss, or temperature concern on the day of receipt, before opening vials, with photographs of exterior packaging, coolant condition, and vials.</p>
                </div>
              </div>
            </div>
          )}

          {/* 8.6 — COMPLIANCE NOTICE */}
          {activePolicy === 'compliance-notice' && (
            <div className="space-y-6">
              <div className="border-b border-[#2A2E33] pb-3">
                <span className="text-[10px] font-mono text-[#BE7A28] uppercase font-bold tracking-widest block">
                  SECTION 8.6
                </span>
                <h2 className="font-heading text-2xl font-bold text-[#E8E6E1] uppercase tracking-wide">
                  Compliance Notice
                </h2>
              </div>

              <div className="space-y-4">
                <p>BioScience Depot operates as a Research Use Only supplier. This classification governs our entire operation.</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-[#0A0B0D] p-4 border border-[#2A2E33] space-y-2">
                    <h4 className="font-mono text-[#BE7A28] font-bold uppercase text-[11px]">What we do:</h4>
                    <ul className="space-y-1 list-disc list-inside text-[11px]">
                      <li>Supply research materials to qualified professionals for laboratory research</li>
                      <li>Characterise and document every lot before release</li>
                      <li>Verify age and research purpose at purchase</li>
                      <li>Maintain full traceability records</li>
                      <li>Describe products in chemical and physical terms only</li>
                    </ul>
                  </div>

                  <div className="bg-[#0A0B0D] p-4 border border-[#2A2E33] space-y-2">
                    <h4 className="font-mono text-[#8C3A3A] font-bold uppercase text-[11px]">What we do not do:</h4>
                    <ul className="space-y-1 list-disc list-inside text-[11px]">
                      <li>Make medical, therapeutic, or performance claims</li>
                      <li>Provide dosing or protocol guidance</li>
                      <li>Supply materials for human or veterinary use</li>
                      <li>Represent products as approved by FDA</li>
                      <li>Complete orders with non-research intent</li>
                    </ul>
                  </div>
                </div>

                <p className="pt-2 text-[11px]">
                  <strong>Reporting a concern:</strong> Contact compliance@biosciencedepot.com. We respond to every report.
                </p>
              </div>
            </div>
          )}

          {/* 8.7 — PRODUCT DISCLAIMER */}
          {activePolicy === 'product-disclaimer' && (
            <div className="space-y-6">
              <div className="border-b border-[#2A2E33] pb-3">
                <span className="text-[10px] font-mono text-[#BE7A28] uppercase font-bold tracking-widest block">
                  SECTION 8.7
                </span>
                <h2 className="font-heading text-2xl font-bold text-[#E8E6E1] uppercase tracking-wide">
                  Product Disclaimer (Mandatory Specification)
                </h2>
              </div>

              <div className="bg-[#0A0B0D] p-5 border border-[#BE7A28] space-y-3">
                <p className="font-semibold text-[#E8E6E1]">
                  FOR RESEARCH USE ONLY. Not for human or veterinary consumption. Not a drug, food, supplement, cosmetic, or medical device. Not approved or evaluated by any regulatory authority for use in humans or animals. Not intended to diagnose, treat, cure, or prevent any disease or condition.
                </p>
                <p>
                  Purchase requires that the buyer be 21 years of age or older and use the material solely for legitimate laboratory research. The buyer assumes full responsibility for safe, lawful, and appropriate handling, use, and disposal.
                </p>
              </div>
            </div>
          )}

          {/* 8.8 — EDUCATIONAL DISCLAIMER */}
          {activePolicy === 'educational-disclaimer' && (
            <div className="space-y-6">
              <div className="border-b border-[#2A2E33] pb-3">
                <span className="text-[10px] font-mono text-[#BE7A28] uppercase font-bold tracking-widest block">
                  SECTION 8.8
                </span>
                <h2 className="font-heading text-2xl font-bold text-[#E8E6E1] uppercase tracking-wide">
                  Educational Disclaimer
                </h2>
              </div>

              <div className="space-y-3">
                <p>
                  Educational and technical content published by BioScience Depot is provided as general reference for qualified laboratory professionals. It describes general practice in the handling, storage, and characterisation of research materials.
                </p>
                <p>
                  It is not a protocol, not experimental design guidance, and not medical, clinical, veterinary, legal, or regulatory advice. Researchers are responsible for the design, conduct, safety, and compliance of their own work.
                </p>
              </div>
            </div>
          )}

          {/* 8.9 — WEBSITE DISCLAIMER */}
          {activePolicy === 'website-disclaimer' && (
            <div className="space-y-6">
              <div className="border-b border-[#2A2E33] pb-3">
                <span className="text-[10px] font-mono text-[#BE7A28] uppercase font-bold tracking-widest block">
                  SECTION 8.9
                </span>
                <h2 className="font-heading text-2xl font-bold text-[#E8E6E1] uppercase tracking-wide">
                  Website Disclaimer & Accessibility
                </h2>
              </div>

              <div className="space-y-3">
                <p>
                  The content of this website is provided for general information to qualified research professionals. The Certificate of Analysis supplied with a specific lot is the authoritative document for that material and supersedes any general product page content.
                </p>
                <p>
                  Nothing on this website constitutes an offer capable of acceptance; all orders are subject to acceptance by BioScience Depot and to our Terms of Sale.
                </p>
                <p className="pt-2 text-[11px] font-mono text-[#6B7178]">
                  <strong>Accessibility:</strong> We aim to meet recognized accessibility standards across this website. If you encounter a barrier, contact accessibility@biosciencedepot.com.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </motion.div>
  );
};
