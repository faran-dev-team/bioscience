import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RUOComplianceStrip } from '../components/features/hero/RUOComplianceStrip';
import { Button } from '../components/ui/Button';
import {
  IconShieldCheck,
  IconCheckCircle,
  IconCheckSquare,
  IconSquare,
  IconCpu,
  IconFileText,
  IconLock,
  IconArrowRight
} from '../components/ui/Icons';

interface ContactPageProps {
  onOpenSynthesis?: () => void;
  setActiveTab?: (tab: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenSynthesis, setActiveTab }) => {
  const [fullName, setFullName] = useState('');
  const [institution, setInstitution] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [enquiryType, setEnquiryType] = useState('Technical Support');
  const [compoundOrLot, setCompoundOrLot] = useState('');
  const [enquiry, setEnquiry] = useState('');
  const [confirmedRUO, setConfirmedRUO] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!institution.trim()) {
      setErrorMsg('Please enter your institution or company name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMsg('Please enter a valid institutional email address.');
      return;
    }
    if (!enquiry.trim()) {
      setErrorMsg('Please enter your enquiry.');
      return;
    }
    if (!confirmedRUO) {
      setErrorMsg('Please confirm eligibility and Research Use Only before submitting.');
      return;
    }

    setErrorMsg('');
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleRouteClick = (type: string) => {
    setEnquiryType(type);
    const formEl = document.getElementById('contact-form');
    if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="space-y-14 bg-[#0A0B0D] text-[#E8E6E1] font-body"
    >
      {/* 1. HERO (PAGE 07) */}
      <section className="pt-12 pb-14 px-4 sm:px-6 lg:px-8 border-b border-[#2A2E33] bg-[#0E1012]">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-[11px] font-mono text-[#BE7A28] font-bold uppercase tracking-widest block">
            [ PAGE 07 — CONTACT & INSTITUTIONAL PROCUREMENT ]
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#E8E6E1]">
            Contact Our Team
          </h1>
          <p className="text-sm sm:text-base text-[#B9BEC4] font-body leading-relaxed max-w-3xl">
            Technical enquiries, procurement requirements, custom synthesis, and partnership discussions — answered directly by people who know the specification.
          </p>
        </div>
      </section>

      {/* Compliance Strip */}
      <RUOComplianceStrip />

      {/* 2. SECTION 01 — ENQUIRY ROUTING (4 CARDS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-2">
          <span className="text-[11px] font-mono text-[#BE7A28] font-bold uppercase tracking-widest block">
            [ ROUTING DIRECTORY ]
          </span>
          <h2 className="font-heading text-2xl font-bold text-[#E8E6E1] uppercase tracking-wide">
            Where to direct your enquiry
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs font-body">
          <div className="bg-[#16181B] border border-[#2A2E33] p-6 space-y-3 flex flex-col justify-between hover:border-[#BE7A28] transition-colors">
            <div className="space-y-2">
              <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase tracking-wider">
                Research and Technical Support
              </h3>
              <p className="text-[#B9BEC4] leading-relaxed">
                Solubility, reconstitution, storage conditions, stability considerations, certificate interpretation, and characterisation requirements.
              </p>
            </div>
            <button
              onClick={() => handleRouteClick('Technical Support')}
              className="text-xs font-mono font-bold text-[#BE7A28] hover:underline text-left inline-flex items-center gap-1 pt-2 border-t border-[#2A2E33]"
            >
              <span>Submit a Technical Enquiry</span>
              <IconArrowRight size={12} />
            </button>
          </div>

          <div className="bg-[#16181B] border border-[#2A2E33] p-6 space-y-3 flex flex-col justify-between hover:border-[#BE7A28] transition-colors">
            <div className="space-y-2">
              <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase tracking-wider">
                Orders and Account Support
              </h3>
              <p className="text-[#B9BEC4] leading-relaxed">
                Order status, documentation retrieval, shipment issues, returns, invoicing, and account administration.
              </p>
            </div>
            <button
              onClick={() => handleRouteClick('Order Support')}
              className="text-xs font-mono font-bold text-[#BE7A28] hover:underline text-left inline-flex items-center gap-1 pt-2 border-t border-[#2A2E33]"
            >
              <span>Contact Order Support</span>
              <IconArrowRight size={12} />
            </button>
          </div>

          <div className="bg-[#16181B] border border-[#2A2E33] p-6 space-y-3 flex flex-col justify-between hover:border-[#BE7A28] transition-colors">
            <div className="space-y-2">
              <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase tracking-wider">
                Business and Procurement
              </h3>
              <p className="text-[#B9BEC4] leading-relaxed">
                Institutional accounts, purchase order workflows, vendor onboarding, quotations, volume and recurring supply.
              </p>
            </div>
            <button
              onClick={() => handleRouteClick('Procurement and Quotations')}
              className="text-xs font-mono font-bold text-[#BE7A28] hover:underline text-left inline-flex items-center gap-1 pt-2 border-t border-[#2A2E33]"
            >
              <span>Contact Business Development</span>
              <IconArrowRight size={12} />
            </button>
          </div>

          <div className="bg-[#16181B] border border-[#2A2E33] p-6 space-y-3 flex flex-col justify-between hover:border-[#BE7A28] transition-colors">
            <div className="space-y-2">
              <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase tracking-wider">
                Laboratory Partnerships & Custom Synthesis
              </h3>
              <p className="text-[#B9BEC4] leading-relaxed">
                Non-catalogue sequences, specified modifications, dedicated supply arrangements, and long-term programmes.
              </p>
            </div>
            <button
              onClick={() => handleRouteClick('Custom Synthesis')}
              className="text-xs font-mono font-bold text-[#BE7A28] hover:underline text-left inline-flex items-center gap-1 pt-2 border-t border-[#2A2E33]"
            >
              <span>Discuss a Partnership</span>
              <IconArrowRight size={12} />
            </button>
          </div>
        </div>
      </section>

      {/* 3. SECTION 02 & 03 — DIRECT CONTACT & RESPONSE STANDARDS */}
      <section className="bg-[#111315] border-y border-[#2A2E33] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 text-xs font-body">
          {/* Direct Contact Details */}
          <div className="bg-[#16181B] border border-[#2A2E33] p-6 sm:p-8 space-y-4">
            <h2 className="font-heading text-lg font-bold text-[#E8E6E1] uppercase tracking-wider border-b border-[#2A2E33] pb-3">
              Direct contact
            </h2>
            <div className="space-y-3 text-[#B9BEC4]">
              <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-[#2A2E33]/50">
                <span className="font-semibold text-[#E8E6E1]">General enquiries:</span>
                <span className="font-mono text-[#BE7A28]">info@biosciencedepot.com</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-[#2A2E33]/50">
                <span className="font-semibold text-[#E8E6E1]">Technical support:</span>
                <span className="font-mono text-[#BE7A28]">technical@biosciencedepot.com</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-[#2A2E33]/50">
                <span className="font-semibold text-[#E8E6E1]">Procurement & institutional accounts:</span>
                <span className="font-mono text-[#BE7A28]">procurement@biosciencedepot.com</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-[#2A2E33]/50">
                <span className="font-semibold text-[#E8E6E1]">Documentation requests:</span>
                <span className="font-mono text-[#BE7A28]">documentation@biosciencedepot.com</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-[#2A2E33]/50">
                <span className="font-semibold text-[#E8E6E1]">Telephone:</span>
                <span className="font-mono text-[#E8E6E1]">+1 (800) 555-0199 · 9:00 AM – 5:00 PM EST</span>
              </div>
              <div className="pt-2 text-[11px] text-[#6B7178]">
                <strong>Correspondence:</strong> BioScience Depot Inc., United States Domestic Logistics & Warehousing Facility.
                <p className="text-[10px] mt-1 text-[#8C3A3A]">
                  * Please do not send material to correspondence address without a returns authorisation issued by our team.
                </p>
              </div>
            </div>
          </div>

          {/* Response Standards */}
          <div className="bg-[#16181B] border border-[#2A2E33] p-6 sm:p-8 space-y-4">
            <h2 className="font-heading text-lg font-bold text-[#E8E6E1] uppercase tracking-wider border-b border-[#2A2E33] pb-3">
              What to expect (Response Standards)
            </h2>
            <ul className="space-y-2.5 text-[#B9BEC4]">
              <li className="flex items-start gap-2">
                <span className="text-[#BE7A28] font-bold mt-0.5">•</span>
                <span><strong>General and order enquiries:</strong> Acknowledged within one business day.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#BE7A28] font-bold mt-0.5">•</span>
                <span><strong>Technical enquiries:</strong> Routed to qualified personnel and answered substantively within 1 to 2 business days. We would rather take an extra day than give an imprecise answer.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#BE7A28] font-bold mt-0.5">•</span>
                <span><strong>Quotations:</strong> Issued within 1 to 2 business days for catalogue items; custom synthesis requires feasibility assessment with expected date confirmed on receipt.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#BE7A28] font-bold mt-0.5">•</span>
                <span><strong>Documentation requests:</strong> Certificates and safety data sheets (SDS) are generally supplied same day during business hours.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#BE7A28] font-bold mt-0.5">•</span>
                <span><strong>Shipment issues:</strong> Treated as priority. Contact us on the day of receipt for any temperature or damage concern, before opening vials.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. SECTION 04 & 05 — SYNTHESIS ENQUIRIES & INSTITUTIONAL SUPPLY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 text-xs font-body">
        <div className="bg-[#16181B] border border-[#2A2E33] p-6 sm:p-8 space-y-4">
          <h2 className="font-heading text-lg font-bold text-[#E8E6E1] uppercase tracking-wider border-b border-[#2A2E33] pb-2">
            What to include in a synthesis request
          </h2>
          <p className="text-[#B9BEC4]">
            To return a useful response on the first exchange, please provide:
          </p>
          <ul className="space-y-1.5 text-[#B9BEC4] font-mono text-[11px]">
            <li>• Sequence in single- or three-letter amino acid code</li>
            <li>• Required quantity and number of vials</li>
            <li>• Minimum acceptable purity threshold</li>
            <li>• N-terminal or C-terminal modifications</li>
            <li>• Cyclisation, labelling, conjugation, or non-natural residues</li>
            <li>• Preferred counter-ion (TFA, Acetate, HCl)</li>
            <li>• Supplementary characterisation required</li>
            <li>• Required delivery date and research context</li>
          </ul>
        </div>

        <div className="bg-[#16181B] border border-[#2A2E33] p-6 sm:p-8 space-y-4">
          <h2 className="font-heading text-lg font-bold text-[#E8E6E1] uppercase tracking-wider border-b border-[#2A2E33] pb-2">
            Volume, recurring, and multi-site supply
          </h2>
          <p className="text-[#B9BEC4]">
            For institutions consuming material at scale, we structure supply arrangements addressing operational volume requirements:
          </p>
          <ul className="space-y-1.5 text-[#B9BEC4]">
            <li>• Consolidated accounts across departments or sites with unified documentation</li>
            <li>• Single-lot reservation for long-running studies to prevent lot-to-lot variance</li>
            <li>• Scheduled resupply aligned to programme timelines</li>
            <li>• Purchase order and Net 30 terms workflows</li>
            <li>• Named account contact with technical escalation path</li>
            <li>• Structured institutional pricing tied to volume commitment</li>
          </ul>
        </div>
      </section>

      {/* 5. SECTION 06 — INTERACTIVE CONTACT FORM */}
      <section id="contact-form" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="bg-[#16181B] border border-[#2A2E33] p-6 sm:p-8 space-y-6">
          <div className="border-b border-[#2A2E33] pb-4">
            <span className="text-[10px] font-mono text-[#BE7A28] font-bold uppercase tracking-widest block">
              SECTION 06
            </span>
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#E8E6E1] uppercase tracking-wide">
              Submit an Enquiry
            </h2>
            <p className="text-xs text-[#B9BEC4] mt-1">
              Please complete all required fields. Institutional requests receive priority response.
            </p>
          </div>

          {submitted ? (
            <div className="bg-[#0A0B0D] border border-[#3F6B4E] p-8 text-center space-y-4">
              <div className="w-12 h-12 bg-[#3F6B4E]/20 text-[#3F6B4E] flex items-center justify-center mx-auto rounded-full">
                <IconCheckCircle size={24} />
              </div>
              <h3 className="font-heading text-lg font-bold text-[#E8E6E1] uppercase tracking-wider">
                Enquiry received.
              </h3>
              <p className="text-xs text-[#B9BEC4] font-body max-w-md mx-auto leading-relaxed">
                Our team will respond within one business day. A confirmation has been transmitted for institutional record.
              </p>
              <div className="pt-2">
                <Button variant="outline" size="sm" onClick={() => setSubmitted(false)}>
                  <span>Submit Another Enquiry</span>
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-interface">
              {errorMsg && (
                <div className="bg-[#8C3A3A]/20 border border-[#8C3A3A] p-3 text-xs text-[#E8E6E1] font-mono">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-[11px] font-mono uppercase text-[#E8E6E1]">
                    Full Name <span className="text-[#BE7A28]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                    placeholder="e.g. Dr. Eleanor Vance"
                    className="w-full bg-[#0A0B0D] border border-[#2A2E33] px-3.5 py-2 text-xs font-mono text-[#E8E6E1] placeholder:text-[#6B7178] focus:border-[#BE7A28] focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-[11px] font-mono uppercase text-[#E8E6E1]">
                    Institution or Company <span className="text-[#BE7A28]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={institution}
                    onChange={e => setInstitution(e.target.value)}
                    placeholder="e.g. Department of Biochemistry, University Lab"
                    className="w-full bg-[#0A0B0D] border border-[#2A2E33] px-3.5 py-2 text-xs font-mono text-[#E8E6E1] placeholder:text-[#6B7178] focus:border-[#BE7A28] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-[11px] font-mono uppercase text-[#E8E6E1]">
                    Institutional Email Address <span className="text-[#BE7A28]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="e.g. e.vance@university.edu"
                    className="w-full bg-[#0A0B0D] border border-[#2A2E33] px-3.5 py-2 text-xs font-mono text-[#E8E6E1] placeholder:text-[#6B7178] focus:border-[#BE7A28] focus:outline-none"
                  />
                  <p className="text-[10px] text-[#6B7178]">
                    Please use your institutional or company address where possible — it helps us route your enquiry correctly.
                  </p>
                </div>

                <div className="space-y-1">
                  <label className="block text-[11px] font-mono uppercase text-[#E8E6E1]">
                    Telephone <span className="text-[#6B7178] font-normal">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="e.g. +1 (555) 012-3456"
                    className="w-full bg-[#0A0B0D] border border-[#2A2E33] px-3.5 py-2 text-xs font-mono text-[#E8E6E1] placeholder:text-[#6B7178] focus:border-[#BE7A28] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-[11px] font-mono uppercase text-[#E8E6E1]">
                    Enquiry Type <span className="text-[#BE7A28]">*</span>
                  </label>
                  <select
                    value={enquiryType}
                    onChange={e => setEnquiryType(e.target.value)}
                    className="w-full bg-[#0A0B0D] border border-[#2A2E33] px-3.5 py-2 text-xs font-mono text-[#E8E6E1] focus:border-[#BE7A28] focus:outline-none"
                  >
                    <option value="Technical Support">Technical Support</option>
                    <option value="Order Support">Order Support</option>
                    <option value="Procurement and Quotations">Procurement and Quotations</option>
                    <option value="Custom Synthesis">Custom Synthesis</option>
                    <option value="Wholesale and Institutional">Wholesale and Institutional</option>
                    <option value="Laboratory Partnership">Laboratory Partnership</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="block text-[11px] font-mono uppercase text-[#E8E6E1]">
                    Compound or Lot Number <span className="text-[#6B7178] font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={compoundOrLot}
                    onChange={e => setCompoundOrLot(e.target.value)}
                    placeholder="e.g. LOT 24-0817-C or GHK-Cu"
                    className="w-full bg-[#0A0B0D] border border-[#2A2E33] px-3.5 py-2 text-xs font-mono text-[#E8E6E1] placeholder:text-[#6B7178] focus:border-[#BE7A28] focus:outline-none"
                  />
                  <p className="text-[10px] text-[#6B7178]">
                    If concerning a specific shipment, including the lot number lets us answer without follow-up.
                  </p>
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-[11px] font-mono uppercase text-[#E8E6E1]">
                  Your Enquiry <span className="text-[#BE7A28]">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={enquiry}
                  onChange={e => setEnquiry(e.target.value)}
                  placeholder="Please include as much detail as you can. Specific questions receive specific answers."
                  className="w-full bg-[#0A0B0D] border border-[#2A2E33] p-3.5 text-xs font-mono text-[#E8E6E1] placeholder:text-[#6B7178] focus:border-[#BE7A28] focus:outline-none"
                />
              </div>

              {/* Mandatory RUO Checkbox */}
              <div className="bg-[#0A0B0D] p-3.5 border border-[#2A2E33]">
                <label
                  onClick={() => setConfirmedRUO(!confirmedRUO)}
                  className="flex items-start gap-2.5 cursor-pointer group select-none"
                >
                  <div className="mt-0.5 flex-shrink-0">
                    {confirmedRUO ? (
                      <IconCheckSquare size={16} amberAccent={true} />
                    ) : (
                      <IconSquare size={16} className="text-[#6B7178] group-hover:text-[#E8E6E1]" />
                    )}
                  </div>
                  <span className="text-xs text-[#E8E6E1] leading-relaxed font-body">
                    I confirm that I am <strong>21 years of age or older</strong> and that any materials supplied will be used solely for laboratory research purposes.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <Button variant="amber" size="md" type="submit" disabled={submitting}>
                  <span>{submitting ? 'Sending your enquiry...' : 'Send Enquiry'}</span>
                </Button>
              </div>

              {/* Form Footer Compliance */}
              <p className="text-[10px] text-[#6B7178] font-body leading-relaxed border-t border-[#2A2E33] pt-3">
                We do not provide dosing, administration, or protocol guidance, and we cannot answer questions regarding use of these materials outside a controlled research setting. All products are supplied for Research Use Only.
              </p>
            </form>
          )}
        </div>
      </section>
    </motion.div>
  );
};
