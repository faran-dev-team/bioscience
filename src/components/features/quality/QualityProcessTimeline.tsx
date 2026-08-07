import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, FlaskConical, BarChart2, Snowflake } from 'lucide-react';

export const QualityProcessTimeline: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Specification Before Synthesis',
      desc: 'Each compound is defined by a written specification: sequence, molecular formula, calculated average mass, purity threshold, and retest interval.',
      icon: ShieldCheck,
    },
    {
      num: '02',
      title: 'Solid-Phase Assembly',
      desc: 'Stepwise solid-phase peptide synthesis (SPPS) using FMOC chemistry with automated microwave coupling and in-process coupling checks.',
      icon: Cpu,
    },
    {
      num: '03',
      title: 'Chromatographic Purification',
      desc: 'Preparative reverse-phase HPLC purifies target peptide from deletion sequences and truncated synthesis side-products.',
      icon: FlaskConical,
    },
    {
      num: '04',
      title: 'Analytical Verification',
      desc: 'Area-normalised analytical HPLC quantifies purity (≥ 99.0%), ESI mass spec verifies molecular weight, and Karl Fischer quantifies moisture.',
      icon: BarChart2,
    },
    {
      num: '05',
      title: 'Controlled Cold Fulfillment',
      desc: 'Verified lots enter temperature-controlled inventory at -20 °C and ship with validated cold packs in insulated shippers.',
      icon: Snowflake,
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      <div className="text-center max-w-2xl mx-auto space-y-3 font-mono">
        <span className="text-xs text-amber-500 font-bold uppercase tracking-widest block">
          [ SECTION 07 — THE SCIENTIFIC PROCESS ]
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-theme-primary uppercase tracking-wider">
          How Material Enters Our Inventory
        </h2>
        <p className="text-xs text-theme-secondary font-sans leading-relaxed">
          Predictability is the product. Every step from written spec to receiving dock is governed by written operational controls.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 font-mono">
        {steps.map((s, idx) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.3 }}
              className="glass-panel p-5 border border-theme flex flex-col justify-between relative group hover:border-amber-500/50 transition-all duration-140 bg-theme-card shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-amber-500 group-hover:scale-110 transition-transform">
                    {s.num}
                  </span>
                  <Icon className="w-5 h-5 text-amber-500" />
                </div>
                <h3 className="text-xs font-bold text-theme-primary uppercase tracking-wider mb-2 leading-snug">
                  {s.title}
                </h3>
                <p className="text-[11px] font-sans text-theme-secondary leading-relaxed">
                  {s.desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-theme text-[9px] text-amber-500 uppercase tracking-widest font-bold">
                STAGE {idx + 1} CONTROL OK
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
