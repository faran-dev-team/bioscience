import React, { useState } from 'react';
import { Modal } from '../../ui/Modal';
import { Button } from '../../ui/Button';
import { Cpu, CheckCircle2, FlaskConical, AlertCircle } from 'lucide-react';
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
      title="Custom Peptide Synthesis Enquiry Builder"
      maxWidth="max-w-3xl"
    >
      {submitted ? (
        <div className="text-center py-12 space-y-4 font-mono">
          <div className="w-16 h-16 bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400 rounded-full flex items-center justify-center mx-auto animate-pulse">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-theme-primary uppercase tracking-widest">
            SYNTHESIS ENQUIRY TRANSMITTED
          </h3>
          <p className="text-xs text-theme-secondary max-w-md mx-auto leading-relaxed">
            Your synthesis specification for sequence <span className="text-amber-500 font-bold">{formData.sequence}</span> has been assigned reference ID <span className="text-emerald-500 font-bold">SYN-2024-8841</span>. Our analytical team will respond with a formal quotation within 4 business hours.
          </p>
          <Button variant="amber" size="md" onClick={handleReset} className="mt-4">
            CLOSE & RETURN TO CATALOGUE
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5 font-mono text-xs">
          <div className="bg-theme-bg p-4 border border-amber-500/30 flex items-start gap-3">
            <FlaskConical className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <p className="text-theme-secondary text-[11px] leading-relaxed font-sans">
              We produce custom sequences using solid-phase peptide synthesis (SPPS) with automated microwave coupling. Every custom batch is HPLC purified and analytically verified before shipment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Sequence */}
            <div className="md:col-span-2">
              <label className="block text-amber-500 uppercase tracking-widest font-bold mb-1">
                AMINO ACID SEQUENCE (Single- or Three-Letter Code) *
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
                className={`w-full bg-theme-surface border p-3 text-theme-primary placeholder-theme-muted font-mono text-xs tracking-wider focus:outline-none ${
                  errors.sequence ? 'border-rose-500' : 'border-theme focus:border-amber-500'
                }`}
              />
              {errors.sequence && (
                <p className="text-rose-500 text-[10px] mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.sequence}
                </p>
              )}
            </div>

            {/* Target Purity */}
            <div>
              <label className="block text-amber-500 uppercase tracking-widest font-bold mb-1">
                TARGET PURITY (HPLC) *
              </label>
              <select
                value={formData.targetPurity}
                onChange={e => setFormData({ ...formData, targetPurity: e.target.value as any })}
                className="w-full bg-theme-surface border border-theme focus:border-amber-500 p-2.5 text-theme-primary font-mono text-xs"
              >
                <option value="95%">≥ 95.0% (HPLC Area Normalised)</option>
                <option value="98%">≥ 98.0% (HPLC Area Normalised)</option>
                <option value="99%+">≥ 99.0%+ (Ultra-Pure Analytical Grade)</option>
              </select>
            </div>

            {/* Counter Ion */}
            <div>
              <label className="block text-amber-500 uppercase tracking-widest font-bold mb-1">
                COUNTER-ION PREFERENCE *
              </label>
              <select
                value={formData.counterIon}
                onChange={e => setFormData({ ...formData, counterIon: e.target.value as any })}
                className="w-full bg-theme-surface border border-theme focus:border-amber-500 p-2.5 text-theme-primary font-mono text-xs"
              >
                <option value="Trifluoroacetate (TFA)">Trifluoroacetate (TFA)</option>
                <option value="Acetate">Acetate (Salt Exchange)</option>
              </select>
            </div>

            {/* Quantity mg */}
            <div>
              <label className="block text-amber-500 uppercase tracking-widest font-bold mb-1">
                TOTAL PEPTIDE QUANTITY (mg) *
              </label>
              <input
                type="number"
                min={1}
                required
                value={formData.quantityMg}
                onChange={e => setFormData({ ...formData, quantityMg: Number(e.target.value) })}
                className="w-full bg-theme-surface border border-theme focus:border-amber-500 p-2.5 text-theme-primary font-mono text-xs"
              />
            </div>

            {/* Number of Vials */}
            <div>
              <label className="block text-amber-500 uppercase tracking-widest font-bold mb-1">
                NUMBER OF VIAL ALIQUOTS *
              </label>
              <input
                type="number"
                min={1}
                required
                value={formData.vialQuantity}
                onChange={e => setFormData({ ...formData, vialQuantity: Number(e.target.value) })}
                className="w-full bg-theme-surface border border-theme focus:border-amber-500 p-2.5 text-theme-primary font-mono text-xs"
              />
            </div>

            {/* Researcher Contact Name */}
            <div>
              <label className="block text-amber-500 uppercase tracking-widest font-bold mb-1">
                RESEARCHER CONTACT NAME *
              </label>
              <input
                type="text"
                required
                value={formData.researcherName}
                onChange={e => {
                  setFormData({ ...formData, researcherName: e.target.value });
                  if (errors.researcherName) setErrors({ ...errors, researcherName: '' });
                }}
                className={`w-full bg-theme-surface border p-2.5 text-theme-primary font-mono text-xs focus:outline-none ${
                  errors.researcherName ? 'border-rose-500' : 'border-theme focus:border-amber-500'
                }`}
              />
              {errors.researcherName && (
                <p className="text-rose-500 text-[10px] mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.researcherName}
                </p>
              )}
            </div>

            {/* Institution & Contact */}
            <div>
              <label className="block text-amber-500 uppercase tracking-widest font-bold mb-1">
                INSTITUTION / UNIVERSITY NAME *
              </label>
              <input
                type="text"
                required
                value={formData.institution}
                onChange={e => {
                  setFormData({ ...formData, institution: e.target.value });
                  if (errors.institution) setErrors({ ...errors, institution: '' });
                }}
                className={`w-full bg-theme-surface border p-2.5 text-theme-primary font-mono text-xs focus:outline-none ${
                  errors.institution ? 'border-rose-500' : 'border-theme focus:border-amber-500'
                }`}
              />
              {errors.institution && (
                <p className="text-rose-500 text-[10px] mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.institution}
                </p>
              )}
            </div>

            <div className="md:col-span-2">
              <label className="block text-amber-500 uppercase tracking-widest font-bold mb-1">
                RESEARCHER EMAIL *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={e => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) setErrors({ ...errors, email: '' });
                }}
                className={`w-full bg-theme-surface border p-2.5 text-theme-primary font-mono text-xs focus:outline-none ${
                  errors.email ? 'border-rose-500' : 'border-theme focus:border-amber-500'
                }`}
              />
              {errors.email && (
                <p className="text-rose-500 text-[10px] mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.email}
                </p>
              )}
            </div>
          </div>

          <div className="pt-4 border-t border-theme flex items-center justify-between">
            <span className="text-[10px] text-theme-muted">
              FORMAL QUOTATION GENERATION WITHIN 4 HOURS
            </span>
            <Button variant="amber" size="lg" type="submit" className="flex items-center gap-2">
              <Cpu className="w-4 h-4" /> SUBMIT SYNTHESIS SPECIFICATION
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
};
