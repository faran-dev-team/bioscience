import React from 'react';
import { motion } from 'framer-motion';
import { RUOComplianceStrip } from '../components/features/hero/RUOComplianceStrip';
import { Button } from '../components/ui/Button';
import {
  IconShieldCheck,
  IconBarChart,
  IconSnowflake,
  IconLock,
  IconFileText,
  IconCheckCircle,
  IconArrowRight
} from '../components/ui/Icons';

interface AboutPageProps {
  setActiveTab: (tab: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ setActiveTab }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="space-y-14 bg-[#0A0B0D] text-[#E8E6E1] font-body"
    >
      {/* 1. HERO (PAGE 02) */}
      <section className="pt-12 pb-14 px-4 sm:px-6 lg:px-8 border-b border-[#2A2E33] bg-[#0E1012]">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-[11px] font-mono text-[#BE7A28] font-bold uppercase tracking-widest block">
            [ PAGE 02 — ABOUT US ]
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#E8E6E1]">
            An American research supply company, built to a specification.
          </h1>
          <p className="text-sm sm:text-base text-[#B9BEC4] font-body leading-relaxed max-w-3xl">
            BioScience Depot exists because the integrity of a result depends on the integrity of the material that produced it.
          </p>
        </div>
      </section>

      {/* Persistent RUO Compliance Strip */}
      <RUOComplianceStrip />

      {/* 2. COMPANY STORY */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-2">
          <span className="text-[11px] font-mono text-[#BE7A28] font-bold uppercase tracking-widest block">
            [ COMPANY STORY ]
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#E8E6E1] uppercase tracking-wide">
            The problem we were built to solve
          </h2>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-[#B9BEC4] leading-relaxed">
          <p>
            Every research scientist has a version of the same story.
          </p>
          <p>
            A study that would not replicate. Weeks of troubleshooting instrumentation, buffers, technique, and personnel. A postdoc’s confidence quietly eroding. And then, eventually, the discovery that the compound itself was the issue — under-pure, misidentified, degraded on arrival, or simply different from the last lot, with nothing in the paperwork to indicate that anything had changed.
          </p>
          <p>
            The cost of that story is not measured in the price of the vial. It is measured in months of a funded programme, in the credibility of a dataset, and occasionally in a publication that has to be corrected.
          </p>
          <p>
            BioScience Depot was founded on a straightforward observation: the research peptide market has been priced as a commodity and behaves like one. Suppliers compete on catalogue length and cost per milligram. Documentation is treated as an optional extra. Cold chain is treated as a shipping label rather than a controlled process. Purity thresholds are quoted as marketing figures rather than release criteria.
          </p>
          <p className="text-[#E8E6E1] font-semibold">
            That model is efficient for the seller and expensive for the scientist.
          </p>
          <p>
            We built the opposite. A narrower catalogue. A specification for every compound. Analytical verification as a release gate rather than a sales claim. Documentation issued as standard. Packaging engineered for laboratory conditions rather than for the parcel network. And an operating discipline that treats a rejected lot as the system working, not as a loss.
          </p>
          <p>
            We are a smaller company than the multinationals whose standards we hold ourselves to. We think that is an advantage. It means the person who set the specification is reachable, the decision to reject a lot does not pass through four approval layers, and there is no volume target that can outrank a quality threshold.
          </p>
        </div>
      </section>

      {/* 3. MISSION & VISION */}
      <section className="bg-[#111315] border-y border-[#2A2E33] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#16181B] border border-[#2A2E33] p-6 space-y-3">
            <span className="text-[11px] font-mono text-[#BE7A28] font-bold uppercase tracking-widest block">
              [ MISSION ]
            </span>
            <h2 className="font-heading text-xl font-bold text-[#E8E6E1] uppercase tracking-wide">
              Our mission
            </h2>
            <p className="text-xs text-[#B9BEC4] leading-relaxed">
              To supply research peptides of verified identity, purity, and condition — with documentation complete enough, and consistency reliable enough, that the material becomes a controlled constant in the researcher’s experiment rather than an unexamined variable.
            </p>
          </div>

          <div className="bg-[#16181B] border border-[#2A2E33] p-6 space-y-3">
            <span className="text-[11px] font-mono text-[#BE7A28] font-bold uppercase tracking-widest block">
              [ VISION ]
            </span>
            <h2 className="font-heading text-xl font-bold text-[#E8E6E1] uppercase tracking-wide">
              Our vision
            </h2>
            <p className="text-xs text-[#B9BEC4] leading-relaxed">
              To become the default research peptide supplier for American laboratories that cannot afford to be wrong — and to demonstrate that rigour, transparency, and long-horizon thinking are a more durable commercial position than price.
            </p>
            <p className="text-xs text-[#B9BEC4] leading-relaxed">
              We intend to build slowly and correctly: expanding the catalogue only as compounds can be qualified to specification, deepening analytical capability, extending documentation infrastructure, and investing in reference material.
            </p>
          </div>
        </div>
      </section>

      {/* 4. VALUES */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-2">
          <span className="text-[11px] font-mono text-[#BE7A28] font-bold uppercase tracking-widest block">
            [ OPERATING VALUES ]
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#E8E6E1] uppercase tracking-wide">
            What we hold to
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs font-body">
          <div className="bg-[#16181B] border border-[#2A2E33] p-5 space-y-2">
            <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase tracking-wider">
              Evidence over assertion
            </h3>
            <p className="text-[#B9BEC4] leading-relaxed">
              If we cannot substantiate a statement with a document, a method, or a measurement, we do not make it. This applies to our marketing as strictly as it applies to our certificates.
            </p>
          </div>

          <div className="bg-[#16181B] border border-[#2A2E33] p-5 space-y-2">
            <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase tracking-wider">
              Compliance as architecture, not disclaimer
            </h3>
            <p className="text-[#B9BEC4] leading-relaxed">
              Research Use Only is not a footnote we add at the bottom of a page. It is the boundary that defines what we sell, how we describe it, who we sell it to, and what we are willing to discuss. We do not approach that boundary and we do not gesture past it.
            </p>
          </div>

          <div className="bg-[#16181B] border border-[#2A2E33] p-5 space-y-2">
            <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase tracking-wider">
              Consistency as a form of respect
            </h3>
            <p className="text-[#B9BEC4] leading-relaxed">
              Reproducibility is the researcher’s entire currency. A supplier who introduces variance is spending someone else’s credibility. We treat lot-to-lot consistency as a primary obligation.
            </p>
          </div>

          <div className="bg-[#16181B] border border-[#2A2E33] p-5 space-y-2">
            <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase tracking-wider">
              Transparency, including when unflattering
            </h3>
            <p className="text-[#B9BEC4] leading-relaxed">
              If a lot fails release, we say so. If a compound is out of stock, we say so rather than substituting. If a shipment was delayed by our error, we say that too. Trust survives bad news. It does not survive discovered omissions.
            </p>
          </div>

          <div className="bg-[#16181B] border border-[#2A2E33] p-5 space-y-2">
            <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase tracking-wider">
              Restraint
            </h3>
            <p className="text-[#B9BEC4] leading-relaxed">
              We do not list compounds we cannot qualify, make claims we cannot support, or expand faster than our controls can follow. Restraint is not caution. It is the discipline that makes scale survivable.
            </p>
          </div>

          <div className="bg-[#16181B] border border-[#2A2E33] p-5 space-y-2">
            <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase tracking-wider">
              American operational standards
            </h3>
            <p className="text-[#B9BEC4] leading-relaxed">
              Domestic warehousing, domestic fulfilment, domestic support, and accountability under United States law and regulation. Our customers know exactly where their material is held and who is answerable for it.
            </p>
          </div>
        </div>
      </section>

      {/* 5. SCIENTIFIC PHILOSOPHY */}
      <section className="bg-[#111315] border-y border-[#2A2E33] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="space-y-2">
            <span className="text-[11px] font-mono text-[#BE7A28] font-bold uppercase tracking-widest block">
              [ SCIENTIFIC PHILOSOPHY ]
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#E8E6E1] uppercase tracking-wide">
              How we think about the material
            </h2>
            <p className="text-xs sm:text-sm text-[#B9BEC4] font-body">
              A peptide is a defined molecular entity: a specific sequence of amino acids, of a specific length, with specific modifications, at a specific purity, in a specific salt form, at a specific moisture content. Each of those parameters is measurable. Each of them affects experimental behaviour. And each of them can drift.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-body">
            <div className="bg-[#16181B] border border-[#2A2E33] p-5 space-y-2">
              <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase tracking-wider">
                Purity is a distribution, not a number
              </h3>
              <p className="text-[#B9BEC4] leading-relaxed">
                "98% pure" describes a main peak. The remaining fraction is not empty space — it is deletion sequences, truncations, oxidation products, residual scavengers, counter-ion, and water. We report the analytical basis for the figures we publish, so the number can be interpreted rather than merely accepted.
              </p>
            </div>

            <div className="bg-[#16181B] border border-[#2A2E33] p-5 space-y-2">
              <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase tracking-wider">
                Mass matters as much as milligrams
              </h3>
              <p className="text-[#B9BEC4] leading-relaxed">
                Net peptide content — the actual peptide mass in a vial after counter-ion and residual moisture are accounted for — is frequently the difference between a calculated concentration and a real one. Where net peptide content is determined, we report it, because calculating molarity from gross weight is calculating an error.
              </p>
            </div>

            <div className="bg-[#16181B] border border-[#2A2E33] p-5 space-y-2">
              <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase tracking-wider">
                Condition on arrival is part of the specification
              </h3>
              <p className="text-[#B9BEC4] leading-relaxed">
                A compound released at 99% purity and shipped without temperature control is not a 99% compound at the point of use. Stability is a supply chain property, not merely a manufacturing one. We treat transit as part of the specification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. COMMITMENTS TO QUALITY & INTEGRITY */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-xs font-body">
        <div className="bg-[#16181B] border border-[#2A2E33] p-6 space-y-4">
          <h2 className="font-heading text-lg font-bold text-[#E8E6E1] uppercase tracking-wider border-b border-[#2A2E33] pb-2">
            Our commitment to quality
          </h2>
          <p className="text-[#B9BEC4]">
            Quality, in a research supply business, is not a department. It is a series of decisions made repeatedly under commercial pressure. We commit to the following, without qualification:
          </p>
          <ul className="space-y-2.5 text-[#B9BEC4]">
            <li className="flex items-start gap-2">
              <span className="text-[#BE7A28] font-bold mt-0.5">•</span>
              <span>Every lot is analytically verified before release, and no lot ships without a Certificate of Analysis specific to that lot.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#BE7A28] font-bold mt-0.5">•</span>
              <span>Material that does not meet its written specification is rejected. It is not repriced, relabelled, or blended into a conforming lot.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#BE7A28] font-bold mt-0.5">•</span>
              <span>Stock is held under controlled, monitored conditions, and monitoring is recorded.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#BE7A28] font-bold mt-0.5">•</span>
              <span>We do not substitute a different compound, a different lot specification, or a different supplier’s material without explicit agreement.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#BE7A28] font-bold mt-0.5">•</span>
              <span>Packaging is specified for the preservation of the material, not for the reduction of shipping cost.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#BE7A28] font-bold mt-0.5">•</span>
              <span>If we discover a quality issue after shipment, we contact affected customers directly. We do not wait to be asked.</span>
            </li>
          </ul>
        </div>

        <div className="bg-[#16181B] border border-[#2A2E33] p-6 space-y-4">
          <h2 className="font-heading text-lg font-bold text-[#E8E6E1] uppercase tracking-wider border-b border-[#2A2E33] pb-2">
            Our commitment to integrity
          </h2>
          <p className="text-[#B9BEC4]">
            There is a version of this industry that treats regulatory language as a costume — compliant wording wrapped around non-compliant intent. We are not building that company.
          </p>
          <ul className="space-y-2.5 text-[#B9BEC4]">
            <li className="flex items-start gap-2">
              <span className="text-[#BE7A28] font-bold mt-0.5">•</span>
              <span>We describe our products in terms of what they are, not what anyone might hope they do. We do not publish, imply, suggest, or hint at effects in humans.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#BE7A28] font-bold mt-0.5">•</span>
              <span>We do not provide dosing information, administration guidance, or any instruction relating to use outside a controlled laboratory setting.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#BE7A28] font-bold mt-0.5">•</span>
              <span>We verify that purchasers meet our age and purpose requirements, and decline orders where intended use appears inconsistent with research.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#BE7A28] font-bold mt-0.5">•</span>
              <span>We maintain records that would withstand regulatory examination, because we expect to be examined.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#BE7A28] font-bold mt-0.5">•</span>
              <span>We would rather lose an order than compromise the boundary that makes this business legitimate.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 7. AMERICAN BRAND POSITIONING & SUMMARY */}
      <section className="bg-[#111315] border-y border-[#2A2E33] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-2">
            <span className="text-[11px] font-mono text-[#BE7A28] font-bold uppercase tracking-widest block">
              [ AMERICAN IDENTITY ]
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#E8E6E1] uppercase tracking-wide">
              Made to an American standard
            </h2>
            <p className="text-xs sm:text-sm text-[#B9BEC4]">
              We are a United States company, and the phrase carries operational meaning rather than decorative meaning.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs font-body">
            <div className="bg-[#16181B] border border-[#2A2E33] p-5 space-y-2">
              <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase tracking-wider">
                Domestic infrastructure
              </h3>
              <p className="text-[#B9BEC4] leading-relaxed">
                Inventory is warehoused domestically under controlled conditions. Orders are picked, packed, and dispatched domestically. Cold-chain material spends its transit inside a single national network rather than crossing customs while relying on a coolant pack.
              </p>
            </div>

            <div className="bg-[#16181B] border border-[#2A2E33] p-5 space-y-2">
              <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase tracking-wider">
                Domestic accountability
              </h3>
              <p className="text-[#B9BEC4] leading-relaxed">
                We operate under United States law. Our documentation, our record retention, and our commercial terms are constructed for that jurisdiction. When something goes wrong, there is a company in the United States with a name on it and an obligation to answer.
              </p>
            </div>

            <div className="bg-[#16181B] border border-[#2A2E33] p-5 space-y-2">
              <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase tracking-wider">
                Domestic support
              </h3>
              <p className="text-[#B9BEC4] leading-relaxed">
                Technical and account enquiries are handled by personnel operating in United States business hours who can escalate to the people who set the specifications.
              </p>
            </div>

            <div className="bg-[#16181B] border border-[#2A2E33] p-5 space-y-2">
              <h3 className="font-heading font-bold text-sm text-[#E8E6E1] uppercase tracking-wider">
                A manufacturing culture, not a trading culture
              </h3>
              <p className="text-[#B9BEC4] leading-relaxed">
                Much of this market functions as arbitrage: buy anonymously, relabel, resell. We qualify our sources, hold written specifications, verify what arrives, and take responsibility for the result. That is a manufacturer’s posture, and we hold it deliberately.
              </p>
            </div>
          </div>

          <div className="bg-[#16181B] border border-[#2A2E33] p-6 space-y-3">
            <h2 className="font-heading text-lg font-bold text-[#E8E6E1] uppercase tracking-wide">
              The short version
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#B9BEC4]">
              <p>• <strong>Verified material:</strong> Identity and purity confirmed per lot, documented per lot.</p>
              <p>• <strong>Consistent material:</strong> Qualified sourcing so reorders behave like the original.</p>
              <p>• <strong>Protected material:</strong> Controlled storage and validated cold chain to the bench.</p>
              <p>• <strong>Documented material:</strong> Certificates, safety documentation, and traceability as standard.</p>
              <p>• <strong>Domestic operations:</strong> US warehousing, US fulfilment, US support, US accountability.</p>
              <p>• <strong>Uncompromised compliance:</strong> A clearly drawn Research Use Only boundary.</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2 font-interface">
            <Button
              variant="amber"
              size="md"
              onClick={() => {
                setActiveTab('catalogue');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <span>Explore Research Products</span>
            </Button>

            <Button
              variant="outline"
              size="md"
              onClick={() => {
                setActiveTab('quality');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <span>View Quality Standards</span>
            </Button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
