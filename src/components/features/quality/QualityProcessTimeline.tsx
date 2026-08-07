import React from 'react';
import { motion } from 'framer-motion';
import {
  IconShieldCheck,
  IconCpu,
  IconFlask,
  IconBarChart,
  IconSnowflake
} from '../../ui/Icons';

export const QualityProcessTimeline: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Specification Before Synthesis',
      desc: 'Each compound is defined by a written specification: sequence, molecular formula, calculated average mass, purity threshold, and retest interval.',
      icon: IconShieldCheck,
    },
    {
      num: '02',
      title: 'Solid-Phase Assembly',
      desc: 'Stepwise solid-phase peptide synthesis (SPPS) using FMOC chemistry with automated microwave coupling and in-process coupling checks.',
      icon: IconCpu,
    },
    {
      num: '03',
      title: 'Chromatographic Purification',
      desc: 'Preparative reverse-phase HPLC purifies target peptide from deletion sequences and truncated synthesis side-products.',
      icon: IconFlask,
    },
    {
      num: '04',
      title: 'Analytical Verification',
      desc: 'Area-normalised analytical HPLC quantifies purity (≥ 99.0%), ESI mass spec verifies molecular weight, and Karl Fischer quantifies moisture.',
      icon: IconBarChart,
    },
    {
      num: '05',
      title: 'Controlled Cold Fulfillment',
      desc: 'Verified lots enter temperature-controlled inventory at -20 °C and ship with validated cold packs in insulated shippers.',
      icon: IconSnowflake,
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <span className="text-[11px] font-mono text-[#BE7A28] font-bold uppercase tracking-widest block">
          [ SECTION 07 — THE SCIENTIFIC PROCESS ]
        </span>
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#E8E6E1] uppercase tracking-wider">
          How Material Enters Our Inventory
        </h2>
        <p className="text-xs text-[#B9BEC4] font-body leading-relaxed">
          Predictability is the product. Every step from written spec to receiving dock is governed by written operational controls.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5">
        {steps.map((s, idx) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06, duration: 0.25 }}
              className="bg-[#16181B] p-5 border border-[#2A2E33] hover:border-[#3A3F45] flex flex-col justify-between relative group transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xl font-bold text-[#E8E6E1]">
                    {s.num}
                  </span>
                  <span className="text-[#6B7178] group-hover:text-[#E3A455] transition-colors">
                    <Icon size={18} amberAccent={true} />
                  </span>
                </div>
                <h3 className="font-heading text-xs font-bold text-[#E8E6E1] uppercase tracking-wider mb-2 leading-snug">
                  {s.title}
                </h3>
                <p className="text-[11px] font-body text-[#B9BEC4] leading-relaxed">
                  {s.desc}
                </p>
              </div>
              <div className="mt-4 pt-2.5 border-t border-[#2A2E33] text-[9px] font-mono text-[#528B66] uppercase tracking-widest font-bold">
                STAGE {idx + 1} CONTROL OK
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
