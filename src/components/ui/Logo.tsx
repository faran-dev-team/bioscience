import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showText = true,
  className = '',
}) => {
  const sizes = {
    sm: { box: 'w-7 h-7', svg: 'w-5 h-5', title: 'text-xs', sub: 'text-[9px]' },
    md: { box: 'w-9 h-9', svg: 'w-6 h-6', title: 'text-sm', sub: 'text-[10px]' },
    lg: { box: 'w-12 h-12', svg: 'w-8 h-8', title: 'text-lg', sub: 'text-xs' },
  };

  const currentSize = sizes[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Precision Calibrated Instrument Mark */}
      <div
        className={`${currentSize.box} relative flex items-center justify-center bg-theme-surface border border-amber-500/50 shadow-[0_0_12px_rgba(245,158,11,0.2)] transition-all duration-140 hover:border-amber-500`}
      >
        <svg
          className={`${currentSize.svg} text-amber-500`}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Scribed Precision Ring */}
          <circle
            cx="16"
            cy="16"
            r="12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="4 2"
            className="opacity-75"
          />
          {/* Inner Core Precision Mark */}
          <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="1.5" />
          {/* Vertical Calibration Axis Line (Bio Gold Amber) */}
          <line
            x1="16"
            y1="2"
            x2="16"
            y2="30"
            stroke="#F59E0B"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Horizontal Tick Marks */}
          <line x1="8" y1="16" x2="11" y2="16" stroke="currentColor" strokeWidth="1.5" />
          <line x1="21" y1="16" x2="24" y2="16" stroke="currentColor" strokeWidth="1.5" />
          {/* Center Point */}
          <circle cx="16" cy="16" r="1.5" fill="#F59E0B" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className={`font-mono font-bold tracking-widest uppercase text-theme-primary leading-tight ${currentSize.title}`}>
            BioScience Depot
          </span>
          <span className={`font-mono text-amber-500 tracking-wider uppercase ${currentSize.sub}`}>
            Research Peptides — US
          </span>
        </div>
      )}
    </div>
  );
};
