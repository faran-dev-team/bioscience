import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
}

interface LogoMarkProps {
  size: number;
}

const LogoMark: React.FC<LogoMarkProps> = ({ size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect width="24" height="24" fill="#0A0B0D" />
    <rect x="0" y="0" width="2" height="24" fill="#BE7A28" />
    <circle cx="12" cy="12" r="9" stroke="#E8E6E1" strokeWidth="1.8" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} />
    <circle cx="12" cy="12" r="4.5" stroke="#E8E6E1" strokeWidth="1.8" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} />
    <line x1="12" y1="2" x2="12" y2="22" stroke="#BE7A28" strokeWidth="1.8" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} />
    <line x1="3" y1="12" x2="6.5" y2="12" stroke="#E8E6E1" strokeWidth="1.8" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} />
    <line x1="17.5" y1="12" x2="21" y2="12" stroke="#E8E6E1" strokeWidth="1.8" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} />
    <line x1="12" y1="3" x2="12" y2="5.5" stroke="#6B7178" strokeWidth="1.2" strokeLinecap="butt" />
    <line x1="12" y1="18.5" x2="12" y2="21" stroke="#6B7178" strokeWidth="1.2" strokeLinecap="butt" />
    <line x1="3" y1="12" x2="5.5" y2="12" stroke="#6B7178" strokeWidth="1.2" strokeLinecap="butt" />
    <line x1="18.5" y1="12" x2="21" y2="12" stroke="#6B7178" strokeWidth="1.2" strokeLinecap="butt" />
    <circle cx="12" cy="12" r="2.2" fill="#BE7A28" fillOpacity="0.25" />
    <circle cx="12" cy="12" r="1.2" fill="#BE7A28" />
  </svg>
);

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showSubtitle = true,
  className = '',
}) => {
  const sizes = {
    sm: { box: 'w-7 h-7', svg: 28, title: 'text-xs', sub: 'text-[9px]', gap: 'gap-2', showRule: false },
    md: { box: 'w-9 h-9', svg: 36, title: 'text-sm sm:text-base', sub: 'text-[10px]', gap: 'gap-2.5', showRule: true },
    lg: { box: 'w-11 h-11', svg: 44, title: 'text-base sm:text-lg', sub: 'text-xs', gap: 'gap-3', showRule: true },
  };

  const currentSize = sizes[size];

  return (
    <div className={`inline-flex items-center ${currentSize.gap} select-none ${className}`}>
      <div
        className={`${currentSize.box} flex items-center justify-center flex-shrink-0 overflow-hidden border border-[#2A2E33] shadow-[0_0_12px_rgba(190,122,40,0.12)]`}
      >
        <LogoMark size={currentSize.svg} />
      </div>

      {currentSize.showRule && (
        <div className="hidden sm:block w-px h-6 bg-[#BE7A28]/60 flex-shrink-0" aria-hidden="true" />
      )}

      <div className="flex flex-col justify-center min-w-0">
        <span className={`font-display font-bold tracking-tight uppercase leading-none ${currentSize.title}`}>
          <span className="text-zinc-900 dark:text-[#E8E6E1]">BioScience </span>
          <span className="text-[#BE7A28]">Depot</span>
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
