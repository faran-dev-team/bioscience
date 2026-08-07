import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import {
  IconShieldCheck,
  IconCpu,
  IconBarChart,
  IconSnowflake,
  IconLock,
  IconCheckCircle
} from '../components/ui/Icons';

export const AboutContactPage: React.FC = () => {
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquirySubject, setInquirySubject] = useState('Institutional Procurement');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inquiryName && inquiryEmail) {
      setSubmitted(true);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-body space-y-12">
      {/* Header in Söhne Breit / Söhne */}
      <div className="max-w-3xl space-y-3">
        <span className="text-[11px] font-mono text-[#BE7A28] uppercase tracking-widest block font-bold">
          [ ABOUT & INSTITUTIONAL CONTACT ]
        </span>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#E8E6E1] uppercase tracking-tight">
          About BioScience Depot & Institutional Services
        </h1>
        <p className="text-sm text-[#B9BEC4] leading-relaxed">
          BioScience Depot is an American scientific supplier dedicated strictly to verified high-purity research peptides. We serve university laboratories, academic medical centers, pharmaceutical researchers, and biotechnology institutions nationwide.
        </p>
      </div>

      {/* Grid of Institutional Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#16181B] border border-[#2A2E33] p-6 space-y-3">
          <div className="flex items-center gap-2 text-[#E8E6E1] font-heading font-bold text-sm uppercase">
            <IconShieldCheck size={18} amberAccent={true} />
            Written Specification Standard
          </div>
          <p className="text-xs text-[#B9BEC4] leading-relaxed">
            Every peptide in our catalogue is synthesized against an explicit target specification, defining sequence fidelity, calculated molecular weight, counter-ion balance, and chromatographic purity threshold.
          </p>
        </div>

        <div className="bg-[#16181B] border border-[#2A2E33] p-6 space-y-3">
          <div className="flex items-center gap-2 text-[#E8E6E1] font-heading font-bold text-sm uppercase">
            <IconBarChart size={18} amberAccent={true} />
            Dual-Wavelength HPLC Release
          </div>
          <p className="text-xs text-[#B9BEC4] leading-relaxed">
            No lot enters distribution without area-normalised HPLC analysis (214/220 nm) and electrospray ionization mass spectrometry (ESI-MS). Live COA records are instantly verifiable online.
          </p>
        </div>

        <div className="bg-[#16181B] border border-[#2A2E33] p-6 space-y-3">
          <div className="flex items-center gap-2 text-[#E8E6E1] font-heading font-bold text-sm uppercase">
            <IconSnowflake size={18} amberAccent={true} />
            Validated Cold-Chain Node
          </div>
          <p className="text-xs text-[#B9BEC4] leading-relaxed">
            Inventory is maintained in dedicated -20 °C desiccation freezers with automated logging. All domestic shipments dispatch in insulated containers with temperature-stabilized gel coolant.
          </p>
        </div>
      </div>

      {/* Contact & Procurement Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Inquiries */}
        <div className="lg:col-span-7 bg-[#16181B] border border-[#2A2E33] p-6 space-y-6">
          <div className="border-b border-[#2A2E33] pb-3">
            <h2 className="font-heading text-base font-bold text-[#E8E6E1] uppercase tracking-wider">
              Institutional Inquiry & Technical Support
            </h2>
            <p className="text-xs text-[#6B7178] font-mono mt-1">
              Direct communication with analytical chemists and order fulfillment specialists.
            </p>
          </div>

          {submitted ? (
            <div className="bg-[#1E2126] border border-[#3F6B4E] p-6 text-center space-y-3 font-mono">
              <div className="w-10 h-10 bg-[#3F6B4E]/20 text-[#528B66] flex items-center justify-center mx-auto">
                <IconCheckCircle size={20} />
              </div>
              <h3 className="text-sm font-bold text-[#E8E6E1] uppercase">INQUIRY TRANSMITTED</h3>
              <p className="text-xs text-[#B9BEC4] font-body">
                Thank you, {inquiryName}. An institutional specialist will review your message and reply to <span className="text-[#E8E6E1] font-mono">{inquiryEmail}</span> within 2 to 4 business hours.
              </p>
              <Button variant="outline" size="sm" onClick={() => setSubmitted(false)}>
                SEND ANOTHER INQUIRY
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-interface text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#B9BEC4] uppercase text-[11px] font-semibold mb-1">
                    Researcher / Officer Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={inquiryName}
                    onChange={e => setInquiryName(e.target.value)}
                    placeholder="Dr. Jordan Miller"
                    className="w-full bg-[#0A0B0D] border border-[#2A2E33] focus:border-[#BE7A28] p-2.5 text-[#E8E6E1] placeholder-[#6B7178] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[#B9BEC4] uppercase text-[11px] font-semibold mb-1">
                    Institutional Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={inquiryEmail}
                    onChange={e => setInquiryEmail(e.target.value)}
                    placeholder="j.miller@university.edu"
                    className="w-full bg-[#0A0B0D] border border-[#2A2E33] focus:border-[#BE7A28] p-2.5 text-[#E8E6E1] placeholder-[#6B7178] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#B9BEC4] uppercase text-[11px] font-semibold mb-1">
                  Inquiry Department *
                </label>
                <select
                  value={inquirySubject}
                  onChange={e => setInquirySubject(e.target.value)}
                  className="w-full bg-[#0A0B0D] border border-[#2A2E33] focus:border-[#BE7A28] p-2.5 text-[#E8E6E1] focus:outline-none"
                >
                  <option value="Institutional Procurement">Institutional Procurement / Net 30 Terms</option>
                  <option value="Quality Assurance & COA">Quality Assurance & Analytical COA Inquiries</option>
                  <option value="Custom Peptide Synthesis">Custom Peptide Synthesis Specification</option>
                  <option value="Cold Chain & Delivery">Cold-Chain Logistics & Delivery Status</option>
                </select>
              </div>

              <div>
                <label className="block text-[#B9BEC4] uppercase text-[11px] font-semibold mb-1">
                  Message / Specification Details *
                </label>
                <textarea
                  required
                  rows={4}
                  value={inquiryMessage}
                  onChange={e => setInquiryMessage(e.target.value)}
                  placeholder="Provide compound details, catalog SKU, or purchase order requirements..."
                  className="w-full bg-[#0A0B0D] border border-[#2A2E33] focus:border-[#BE7A28] p-2.5 text-[#E8E6E1] placeholder-[#6B7178] focus:outline-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#6B7178]">
                  SECURE RESEARCH COMMUNICATION
                </span>
                <Button variant="amber" size="md" type="submit">
                  TRANSMIT INQUIRY →
                </Button>
              </div>
            </form>
          )}
        </div>

        {/* Right Column: Institutional Contact Channels */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-[#16181B] border border-[#2A2E33] p-5 space-y-4 font-mono text-xs">
            <h3 className="text-xs font-bold text-[#E8E6E1] uppercase tracking-wider border-b border-[#2A2E33] pb-2 font-heading">
              Direct Contact Coordinates
            </h3>

            <div className="space-y-3">
              <div>
                <span className="text-[#6B7178] text-[10px] uppercase block">General & Institutional Support:</span>
                <a href="mailto:support@bioscience.co" className="text-[#E3A455] font-semibold hover:underline">
                  support@bioscience.co
                </a>
              </div>

              <div>
                <span className="text-[#6B7178] text-[10px] uppercase block">Quality Control & Analytical Release:</span>
                <a href="mailto:qc@bioscience.co" className="text-[#E3A455] font-semibold hover:underline">
                  qc@bioscience.co
                </a>
              </div>

              <div>
                <span className="text-[#6B7178] text-[10px] uppercase block">Domestic Distribution Hub:</span>
                <p className="text-[#E8E6E1] font-body text-xs mt-0.5">
                  BioScience Depot Fulfillment Facilities<br />
                  United States Domestic Cold-Chain Center
                </p>
              </div>

              <div>
                <span className="text-[#6B7178] text-[10px] uppercase block">Business Hours:</span>
                <p className="text-[#E8E6E1] text-[11px]">
                  Monday – Friday: 08:00 – 18:00 EST
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#16181B] border border-[#2A2E33] p-5 space-y-3 font-mono text-xs">
            <div className="flex items-center gap-2 text-[#528B66] font-bold">
              <IconShieldCheck size={16} />
              <span>INSTITUTIONAL NET 30 TERMS</span>
            </div>
            <p className="text-[11px] text-[#B9BEC4] font-body leading-relaxed">
              We gladly accept formal Purchase Orders from accredited universities, research foundations, and biotech corporate accounts. Contact support with your institutional PO document.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
