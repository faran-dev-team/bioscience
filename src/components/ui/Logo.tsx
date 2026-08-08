import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showSubtitle = true,
  className = '',
}) => {
  const sizes = {
    sm: { box: 'w-6 h-6', svg: 18, title: 'text-xs', sub: 'text-[9px]' },
    md: { box: 'w-8 h-8', svg: 22, title: 'text-sm sm:text-base', sub: 'text-[10px]' },
    lg: { box: 'w-10 h-10', svg: 26, title: 'text-base sm:text-lg', sub: 'text-xs' },
  };

  const currentSize = sizes[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Precision Calibrated Instrument Mark */}
      <div
        className={`${currentSize.box} flex items-center justify-center bg-zinc-100 dark:bg-[#16181B] border border-zinc-300 dark:border-[#2A2E33] hover:border-[#BE7A28] transition-colors flex-shrink-0`}
      >
        <svg
          width={currentSize.svg}
          height={currentSize.svg}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit={10}
          className="text-zinc-900 dark:text-[#E8E6E1]"
        >
          {/* Outer Scribed Precision Ring */}
          <circle cx="12" cy="12" r="9" stroke="currentColor" />
          {/* Inner Core Precision Mark */}
          <circle cx="12" cy="12" r="4.5" stroke="currentColor" />
          {/* Vertical Calibration Axis (Reagent Amber #BE7A28) */}
          <line x1="12" y1="2" x2="12" y2="22" stroke="#BE7A28" />
          {/* Horizontal Reticle Marks */}
          <line x1="3" y1="12" x2="6.5" y2="12" stroke="currentColor" />
          <line x1="17.5" y1="12" x2="21" y2="12" stroke="currentColor" />
          {/* Center Point */}
          <circle cx="12" cy="12" r="1.2" fill="#BE7A28" stroke="none" />
        </svg>
      </div>

      {/* Horizontal Brand Typography */}
      <div className="flex flex-col justify-center">
        <span className={`font-display font-bold tracking-tight uppercase text-zinc-900 dark:text-[#E8E6E1] leading-none ${currentSize.title}`}>
          BioScience Depot
        </span>
        {showSubtitle && (
          <span className={`font-mono text-zinc-600 dark:text-[#6B7178] tracking-wider uppercase mt-1 leading-none ${currentSize.sub}`}>
            Analytical Research Supply · US
          </span>
        )}
      </div>
    </div>
  );
};
