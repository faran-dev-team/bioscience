import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface BadgeProps {
  variant?: 'amber' | 'verified' | 'neutral' | 'slate';
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'amber',
  children,
  className,
}) => {
  const baseClasses = 'inline-flex items-center px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider border select-none';

  const variants = {
    amber: 'bg-[#BE7A28]/10 text-[#E3A455] border-[#BE7A28]/30',
    verified: 'bg-[#3F6B4E]/15 text-[#528B66] border-[#3F6B4E]/40',
    neutral: 'bg-[#1E2126] text-[#B9BEC4] border-[#2A2E33]',
    slate: 'bg-[#16181B] text-[#6B7178] border-[#2A2E33]',
  };

  return (
    <span className={twMerge(clsx(baseClasses, variants[variant], className))}>
      {children}
    </span>
  );
};
