import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'amber';
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
  const baseClasses = 'inline-flex items-center justify-center font-mono text-sm tracking-wider uppercase font-semibold transition-all duration-140 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed rounded-none border focus:outline-none';

  const variants = {
    primary: 'bg-theme-surface text-theme-primary border-theme hover:border-amber-500 hover:text-amber-500 shadow-md',
    amber: 'bg-amber-500 text-obsidian-950 border-amber-400 hover:bg-amber-400 font-bold shadow-[0_0_15px_rgba(245,158,11,0.3)]',
    secondary: 'bg-theme-bg text-theme-secondary border-theme hover:bg-theme-surface',
    outline: 'bg-transparent text-amber-500 border-amber-500/50 hover:border-amber-500 hover:bg-amber-500/10',
    ghost: 'bg-transparent text-theme-secondary border-transparent hover:text-amber-500 hover:bg-theme-surface',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-xs',
    lg: 'px-7 py-3.5 text-sm',
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
