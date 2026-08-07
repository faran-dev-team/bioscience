import React, { useState } from 'react';
import { Modal } from '../../ui/Modal';
import { Button } from '../../ui/Button';
import {
  IconCpu,
  IconCheckCircle,
  IconFlask,
  IconAlertTriangle
} from '../../ui/Icons';
import { SynthesisEnquiry } from '../../../types/synthesis';
import { validateSynthesisForm } from '../../../utils/validation';

interface CustomSynthesisModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CustomSynthesisModal: React.FC<CustomSynthesisModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState<SynthesisEnquiry>({
    sequence: 'Ac-Gly-His-Lys-NH2',
    targetPurity: '98%',
    quantityMg: 50,
    vialQuantity: 5,
    counterIon: 'Trifluoroacetate (TFA)',
    modifications: 'N-terminal acetylation, C-terminal amidation',
    institution: 'Stanford University Biotechnology Department',
    researcherName: 'Dr. E. Vance',
    email: 'evance@stanford.edu',
    notes: 'Require analytical HPLC chromatogram and mass spec per vial aliquot.',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateSynthesisForm({
      sequence: formData.sequence,
      quantityMg: formData.quantityMg,
      vialQuantity: formData.vialQuantity,
      institution: formData.institution,
      email: formData.email,
      researcherName: formData.researcherName,
    });

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setErrors({});
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Custom Peptide Synthesis Specification Builder"
      maxWidth="max-w-3xl"
    >
      {submitted ? (
        <div className="text-center py-10 space-y-3 font-body">
          <div className="w-12 h-12 bg-[#18241C] border border-[#3F6B4E] text-[#528B66] flex items-center justify-center mx-auto">
            <IconCheckCircle size={24} />
          </div>
          <h3 className="text-base font-heading font-bold text-[#E8E6E1] uppercase tracking-wider">
            SYNTHESIS ENQUIRY TRANSMITTED
          </h3>
          <p className="text-xs text-[#B9BEC4] max-w-md mx-auto leading-relaxed">
            Your synthesis specification for sequence <span className="text-[#E8E6E1] font-mono font-bold">{formData.sequence}</span> has been assigned reference ID <span className="text-[#528B66] font-mono font-bold">SYN-2024-8841</span>. Our analytical team will respond with a formal quotation within 4 business hours.
          </p>
          <Button variant="primary" size="md" onClick={handleReset} className="mt-3">
            <span>Close & Return to Catalogue</span>
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 font-interface text-xs">
          <div className="bg-[#0A0B0D] p-3.5 border border-[#2A2E33] flex items-start gap-2.5">
            <IconFlask size={16} amberAccent={true} className="flex-shrink-0 mt-0.5" />
            <p className="text-[#B9BEC4] text-[11px] leading-relaxed font-body">
              We produce custom sequences using solid-phase peptide synthesis (SPPS) with automated microwave coupling. Every custom batch is HPLC purified and analytically verified before shipment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {/* Sequence */}
            <div className="md:col-span-2">
              <label className="block text-[#B9BEC4] uppercase tracking-wider font-semibold mb-1 text-[11px]">
                Amino Acid Sequence (Single- or Three-Letter Code) *
              </label>
              <textarea
                required
                rows={2}
                value={formData.sequence}
                onChange={e => {
                  setFormData({ ...formData, sequence: e.target.value });
                  if (errors.sequence) setErrors({ ...errors, sequence: '' });
                }}
                placeholder="e.g. Ac-His-D-2Nal-D-Phe-Lys-NH2..."
                className={`w-full bg-[#0A0B0D] border p-2.5 text-[#E8E6E1] placeholder-[#6B7178] font-mono text-xs tracking-wider focus:outline-none ${
                  errors.sequence ? 'border-[#BE7A28]' : 'border-[#2A2E33] focus:border-[#BE7A28]'
                }`}
              />
              {errors.sequence && (
                <p className="text-[#E3A455] text-[10px] mt-1 flex items-center gap-1 font-mono">
                  <IconAlertTriangle size={11} /> {errors.sequence}
                </p>
              )}
            </div>

            {/* Target Purity */}
            <div>
              <label className="block text-[#B9BEC4] uppercase tracking-wider font-semibold mb-1 text-[11px]">
                Target Purity (HPLC) *
              </label>
              <select
                value={formData.targetPurity}
                onChange={e => setFormData({ ...formData, targetPurity: e.target.value as any })}
                className="w-full bg-[#0A0B0D] border border-[#2A2E33] focus:border-[#BE7A28] p-2 text-[#E8E6E1] font-mono text-xs focus:outline-none"
              >
                <option value="95%">≥ 95.0% (HPLC Area Normalised)</option>
                <option value="98%">≥ 98.0% (HPLC Area Normalised)</option>
                <option value="99%+">≥ 99.0%+ (Ultra-Pure Analytical Grade)</option>
              </select>
            </div>

            {/* Counter Ion */}
            <div>
              <label className="block text-[#B9BEC4] uppercase tracking-wider font-semibold mb-1 text-[11px]">
                Counter-Ion Preference *
              </label>
              <select
                value={formData.counterIon}
                onChange={e => setFormData({ ...formData, counterIon: e.target.value as any })}
                className="w-full bg-[#0A0B0D] border border-[#2A2E33] focus:border-[#BE7A28] p-2 text-[#E8E6E1] font-mono text-xs focus:outline-none"
              >
                <option value="Trifluoroacetate (TFA)">Trifluoroacetate (TFA)</option>
                <option value="Acetate">Acetate (Salt Exchange)</option>
              </select>
            </div>

            {/* Quantity mg */}
            <div>
              <label className="block text-[#B9BEC4] uppercase tracking-wider font-semibold mb-1 text-[11px]">
                Total Peptide Quantity (mg) *
              </label>
              <input
                type="number"
                min={1}
                required
                value={formData.quantityMg}
                onChange={e => setFormData({ ...formData, quantityMg: Number(e.target.value) })}
                className="w-full bg-[#0A0B0D] border border-[#2A2E33] focus:border-[#BE7A28] p-2 text-[#E8E6E1] font-mono text-xs focus:outline-none"
              />
            </div>

            {/* Number of Vials */}
            <div>
              <label className="block text-[#B9BEC4] uppercase tracking-wider font-semibold mb-1 text-[11px]">
                Number of Vial Aliquots *
              </label>
              <input
                type="number"
                min={1}
                required
                value={formData.vialQuantity}
                onChange={e => setFormData({ ...formData, vialQuantity: Number(e.target.value) })}
                className="w-full bg-[#0A0B0D] border border-[#2A2E33] focus:border-[#BE7A28] p-2 text-[#E8E6E1] font-mono text-xs focus:outline-none"
              />
            </div>

            {/* Researcher Contact Name */}
            <div>
              <label className="block text-[#B9BEC4] uppercase tracking-wider font-semibold mb-1 text-[11px]">
                Researcher Contact Name *
              </label>
              <input
                type="text"
                required
                value={formData.researcherName}
                onChange={e => {
                  setFormData({ ...formData, researcherName: e.target.value });
                  if (errors.researcherName) setErrors({ ...errors, researcherName: '' });
                }}
                className={`w-full bg-[#0A0B0D] border p-2 text-[#E8E6E1] text-xs focus:outline-none ${
                  errors.researcherName ? 'border-[#BE7A28]' : 'border-[#2A2E33] focus:border-[#BE7A28]'
                }`}
              />
            </div>

            {/* Institution & Contact */}
            <div>
              <label className="block text-[#B9BEC4] uppercase tracking-wider font-semibold mb-1 text-[11px]">
                Institution / University Name *
              </label>
              <input
                type="text"
                required
                value={formData.institution}
                onChange={e => {
                  setFormData({ ...formData, institution: e.target.value });
                  if (errors.institution) setErrors({ ...errors, institution: '' });
                }}
                className={`w-full bg-[#0A0B0D] border p-2 text-[#E8E6E1] text-xs focus:outline-none ${
                  errors.institution ? 'border-[#BE7A28]' : 'border-[#2A2E33] focus:border-[#BE7A28]'
                }`}
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-[#B9BEC4] uppercase tracking-wider font-semibold mb-1 text-[11px]">
                Researcher Institutional Email *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={e => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) setErrors({ ...errors, email: '' });
                }}
                className={`w-full bg-[#0A0B0D] border p-2 text-[#E8E6E1] text-xs focus:outline-none ${
                  errors.email ? 'border-[#BE7A28]' : 'border-[#2A2E33] focus:border-[#BE7A28]'
                }`}
              />
            </div>
          </div>

          <div className="pt-3 border-t border-[#2A2E33] flex items-center justify-between">
            <span className="text-[10px] font-mono text-[#6B7178]">
              FORMAL QUOTATION GENERATION WITHIN 4 HOURS
            </span>
            <Button variant="amber" size="md" type="submit" className="flex items-center gap-2">
              <IconCpu size={14} />
              <span>Submit Synthesis Specification</span>
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
};
