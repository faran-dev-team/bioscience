import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface BadgeProps {
  variant?: 'amber' | 'emerald' | 'slate' | 'rose';
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'amber',
  children,
  className,
}) => {
  const baseClasses = 'inline-flex items-center px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest border';

  const variants = {
    amber: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    slate: 'bg-slate-800/80 text-alloy-400 border-slate-700',
    rose: 'bg-rose-500/10 text-rose-400 border-rose-500/30',
  };

  return (
    <span className={twMerge(clsx(baseClasses, variants[variant], className))}>
      {children}
    </span>
  );
};
