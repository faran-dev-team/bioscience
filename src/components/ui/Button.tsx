import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'amber' | 'verified';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-interface text-xs tracking-wider uppercase font-semibold transition-all duration-120 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed border select-none';

  const variants = {
    primary: 'bg-[#1E2126] text-[#E8E6E1] border-[#2A2E33] hover:border-[#BE7A28] hover:text-[#E8E6E1] active:bg-[#16181B]',
    amber: 'bg-[#BE7A28] text-[#0A0B0D] border-[#BE7A28] hover:bg-[#E3A455] hover:border-[#E3A455] font-bold',
    secondary: 'bg-[#16181B] text-[#B9BEC4] border-[#2A2E33] hover:text-[#E8E6E1] hover:border-[#3A3F45]',
    outline: 'bg-transparent text-[#E8E6E1] border-[#2A2E33] hover:border-[#BE7A28] hover:text-[#E3A455] hover:bg-[#16181B]',
    ghost: 'bg-transparent text-[#B9BEC4] border-transparent hover:text-[#E8E6E1] hover:bg-[#1E2126]',
    verified: 'bg-[#3F6B4E] text-[#E8E6E1] border-[#3F6B4E] hover:bg-[#528B66] hover:border-[#528B66] font-bold',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-[11px]',
    md: 'px-4 py-2 text-xs',
    lg: 'px-6 py-3 text-xs sm:text-sm',
  };

  return (
    <button
      className={twMerge(clsx(baseClasses, variants[variant], sizes[size], className))}
      {...props}
    >
      {children}
    </button>
  );
};
