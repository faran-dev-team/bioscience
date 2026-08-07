import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  amberAccent?: boolean;
}

const defaultProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '1.6',
  strokeLinecap: 'butt' as const,
  strokeLinejoin: 'miter' as const,
  strokeMiterlimit: 10,
};

// 1. Search Icon (24x24, 45° angle handle, real circle lens, single amber focal point)
export const IconSearch: React.FC<IconProps> = ({ size = 20, className = '', amberAccent = false, ...props }) => (
  <svg width={size} height={size} {...defaultProps} className={className} {...props}>
    <circle cx="10" cy="10" r="6.5" />
    <line x1="15" y1="15" x2="21" y2="21" />
    {amberAccent && <circle cx="10" cy="10" r="1.5" fill="#BE7A28" stroke="none" />}
  </svg>
);

// 2. Shield Check / Quality Verification Icon (0°, 45°, 90° angles, sharp mitre joins)
export const IconShieldCheck: React.FC<IconProps> = ({ size = 20, className = '', amberAccent = false, ...props }) => (
  <svg width={size} height={size} {...defaultProps} className={className} {...props}>
    {/* Geometric Shield outline */}
    <path d="M4 4h16v8l-8 8-8-8V4z" />
    {/* Internal check mark: 45° angles */}
    <path d="M8 12l3 3 5-6" stroke={amberAccent ? '#BE7A28' : 'currentColor'} />
  </svg>
);

// 3. Synthesis / Microprocessor / Solid-Phase Unit (0° and 90° angles, sharp butt joints)
export const IconCpu: React.FC<IconProps> = ({ size = 20, className = '', amberAccent = false, ...props }) => (
  <svg width={size} height={size} {...defaultProps} className={className} {...props}>
    <rect x="5" y="5" width="14" height="14" />
    <line x1="9" y1="2" x2="9" y2="5" />
    <line x1="15" y1="2" x2="15" y2="5" />
    <line x1="9" y1="19" x2="9" y2="22" />
    <line x1="15" y1="19" x2="15" y2="22" />
    <line x1="2" y1="9" x2="5" y2="9" />
    <line x1="2" y1="15" x2="5" y2="15" />
    <line x1="19" y1="9" x2="22" y2="9" />
    <line x1="19" y1="15" x2="22" y2="15" />
    <rect x="9" y="9" width="6" height="6" stroke={amberAccent ? '#BE7A28' : 'currentColor'} />
  </svg>
);

// 4. Shopping Bag / Manifest Icon (Sharp rectangle, butt caps)
export const IconShoppingBag: React.FC<IconProps> = ({ size = 20, className = '', amberAccent = false, ...props }) => (
  <svg width={size} height={size} {...defaultProps} className={className} {...props}>
    <path d="M4 7h16v14H4V7z" />
    <path d="M8 7V4h8v3" />
    {amberAccent && <line x1="4" y1="11" x2="20" y2="11" stroke="#BE7A28" />}
  </svg>
);

// 5. Laboratory Flask (45° angle neck to body, flat 0° bottom)
export const IconFlask: React.FC<IconProps> = ({ size = 20, className = '', amberAccent = false, ...props }) => (
  <svg width={size} height={size} {...defaultProps} className={className} {...props}>
    <line x1="9" y1="3" x2="15" y2="3" />
    <path d="M10 3v5l-6 10v2h16v-2l-6-10V3" />
    <line x1="7" y1="16" x2="17" y2="16" stroke={amberAccent ? '#BE7A28' : 'currentColor'} />
  </svg>
);

// 6. Bar Chart / Analytical Chromatogram (0° and 90° peaks)
export const IconBarChart: React.FC<IconProps> = ({ size = 20, className = '', amberAccent = false, ...props }) => (
  <svg width={size} height={size} {...defaultProps} className={className} {...props}>
    <line x1="3" y1="21" x2="21" y2="21" />
    <line x1="3" y1="3" x2="3" y2="21" />
    <line x1="7" y1="21" x2="7" y2="14" />
    <line x1="12" y1="21" x2="12" y2="6" stroke={amberAccent ? '#BE7A28' : 'currentColor'} />
    <line x1="17" y1="21" x2="17" y2="10" />
  </svg>
);

// 7. Cold Chain / Snowflake (0°, 45°, 90° cross-axis, sharp angles)
export const IconSnowflake: React.FC<IconProps> = ({ size = 20, className = '', amberAccent = false, ...props }) => (
  <svg width={size} height={size} {...defaultProps} className={className} {...props}>
    <line x1="12" y1="2" x2="12" y2="22" stroke={amberAccent ? '#BE7A28' : 'currentColor'} />
    <line x1="2" y1="12" x2="22" y2="12" />
    <line x1="5" y1="5" x2="19" y2="19" />
    <line x1="5" y1="19" x2="19" y2="5" />
    <path d="M10 4l2-2 2 2M10 20l2 2 2-2M4 10l-2 2 2 2M20 10l2 2-2 2" />
  </svg>
);

// 8. Arrow Right (0° shaft, 45° head)
export const IconArrowRight: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg width={size} height={size} {...defaultProps} className={className} {...props}>
    <line x1="4" y1="12" x2="20" y2="12" />
    <path d="M14 6l6 6-6 6" />
  </svg>
);

// 9. Arrow Left (0° shaft, 45° head)
export const IconArrowLeft: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg width={size} height={size} {...defaultProps} className={className} {...props}>
    <line x1="20" y1="12" x2="4" y2="12" />
    <path d="M10 6L4 12l6 6" />
  </svg>
);

// 10. Chevron Down (45° angle)
export const IconChevronDown: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg width={size} height={size} {...defaultProps} className={className} {...props}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);

// 11. Chevron Up (45° angle)
export const IconChevronUp: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg width={size} height={size} {...defaultProps} className={className} {...props}>
    <path d="M6 15l6-6 6 6" />
  </svg>
);

// 12. Document / Spec Sheet / COA (0° and 90° lines, 45° dog-ear corner)
export const IconFileText: React.FC<IconProps> = ({ size = 20, className = '', amberAccent = false, ...props }) => (
  <svg width={size} height={size} {...defaultProps} className={className} {...props}>
    <path d="M4 2h10l6 6v14H4V2z" />
    <path d="M14 2v6h6" />
    <line x1="8" y1="12" x2="16" y2="12" stroke={amberAccent ? '#BE7A28' : 'currentColor'} />
    <line x1="8" y1="16" x2="16" y2="16" />
  </svg>
);

// 13. Check Circle (True circle + 45° angle checkmark)
export const IconCheckCircle: React.FC<IconProps> = ({ size = 20, className = '', amberAccent = false, ...props }) => (
  <svg width={size} height={size} {...defaultProps} className={className} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M8 12l3 3 5-6" stroke={amberAccent ? '#BE7A28' : 'currentColor'} />
  </svg>
);

// 14. Square (Rectangular checkbox outline)
export const IconSquare: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg width={size} height={size} {...defaultProps} className={className} {...props}>
    <rect x="4" y="4" width="16" height="16" />
  </svg>
);

// 15. Check Square (Rectangular box + 45° check)
export const IconCheckSquare: React.FC<IconProps> = ({ size = 20, className = '', amberAccent = false, ...props }) => (
  <svg width={size} height={size} {...defaultProps} className={className} {...props}>
    <rect x="4" y="4" width="16" height="16" />
    <path d="M8 12l3 3 5-6" stroke={amberAccent ? '#BE7A28' : '#3F6B4E'} />
  </svg>
);

// 16. Printer (0° and 90° angles)
export const IconPrinter: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg width={size} height={size} {...defaultProps} className={className} {...props}>
    <path d="M6 7V2h12v5" />
    <rect x="4" y="7" width="16" height="10" />
    <path d="M6 14v8h12v-8" />
  </svg>
);

// 17. Download (0°, 90°, 45° arrow downward)
export const IconDownload: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg width={size} height={size} {...defaultProps} className={className} {...props}>
    <path d="M4 17v4h16v-4" />
    <line x1="12" y1="3" x2="12" y2="15" />
    <path d="M7 10l5 5 5-5" />
  </svg>
);

// 18. Clock (Real circle with 90° angle hands)
export const IconClock: React.FC<IconProps> = ({ size = 20, className = '', amberAccent = false, ...props }) => (
  <svg width={size} height={size} {...defaultProps} className={className} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5h5" stroke={amberAccent ? '#BE7A28' : 'currentColor'} />
  </svg>
);

// 19. Lock (Rectangular body, 0° & 90° shackle)
export const IconLock: React.FC<IconProps> = ({ size = 20, className = '', amberAccent = false, ...props }) => (
  <svg width={size} height={size} {...defaultProps} className={className} {...props}>
    <rect x="5" y="10" width="14" height="11" />
    <path d="M8 10V6a4 4 0 0 1 8 0v4" />
    <line x1="12" y1="14" x2="12" y2="17" stroke={amberAccent ? '#BE7A28' : 'currentColor'} />
  </svg>
);

// 20. Trash / Delete
export const IconTrash: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg width={size} height={size} {...defaultProps} className={className} {...props}>
    <line x1="3" y1="5" x2="21" y2="5" />
    <path d="M6 5v15h12V5" />
    <path d="M9 5V3h6v2" />
    <line x1="10" y1="9" x2="10" y2="16" />
    <line x1="14" y1="9" x2="14" y2="16" />
  </svg>
);

// 21. Sun (Theme Mode, True circle with 0°, 45°, 90° rays)
export const IconSun: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg width={size} height={size} {...defaultProps} className={className} {...props}>
    <circle cx="12" cy="12" r="4" />
    <line x1="12" y1="2" x2="12" y2="5" stroke="#BE7A28" />
    <line x1="12" y1="19" x2="12" y2="22" stroke="#BE7A28" />
    <line x1="2" y1="12" x2="5" y2="12" stroke="#BE7A28" />
    <line x1="19" y1="12" x2="22" y2="12" stroke="#BE7A28" />
    <line x1="4.9" y1="4.9" x2="7.1" y2="7.1" stroke="#BE7A28" />
    <line x1="16.9" y1="16.9" x2="19.1" y2="19.1" stroke="#BE7A28" />
    <line x1="4.9" y1="19.1" x2="7.1" y2="16.9" stroke="#BE7A28" />
    <line x1="16.9" y1="7.1" x2="19.1" y2="4.9" stroke="#BE7A28" />
  </svg>
);

// 22. Moon (Sharp clean crescent)
export const IconMoon: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg width={size} height={size} {...defaultProps} className={className} {...props}>
    <path d="M20 13.5A8.5 8.5 0 1 1 10.5 4 6.5 6.5 0 0 0 20 13.5z" stroke="#BE7A28" />
  </svg>
);

// 23. Close / X (45° angles, butt caps)
export const IconClose: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg width={size} height={size} {...defaultProps} className={className} {...props}>
    <line x1="5" y1="5" x2="19" y2="19" />
    <line x1="19" y1="5" x2="5" y2="19" />
  </svg>
);

// 24. Alert Triangle (Equilateral 60°/30° sharp triangle)
export const IconAlertTriangle: React.FC<IconProps> = ({ size = 20, className = '', amberAccent = false, ...props }) => (
  <svg width={size} height={size} {...defaultProps} className={className} {...props}>
    <path d="M12 3l10 18H2L12 3z" />
    <line x1="12" y1="9" x2="12" y2="13" stroke={amberAccent ? '#BE7A28' : 'currentColor'} />
    <circle cx="12" cy="17" r="0.8" fill={amberAccent ? '#BE7A28' : 'currentColor'} stroke="none" />
  </svg>
);

// 25. Plus
export const IconPlus: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg width={size} height={size} {...defaultProps} className={className} {...props}>
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

// 26. Minus
export const IconMinus: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg width={size} height={size} {...defaultProps} className={className} {...props}>
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

// 27. Sliders / Filter (0° and 90° tracks and ticks)
export const IconSliders: React.FC<IconProps> = ({ size = 20, className = '', amberAccent = false, ...props }) => (
  <svg width={size} height={size} {...defaultProps} className={className} {...props}>
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="8" y1="3" x2="8" y2="9" stroke={amberAccent ? '#BE7A28' : 'currentColor'} />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="16" y1="9" x2="16" y2="15" stroke={amberAccent ? '#BE7A28' : 'currentColor'} />
    <line x1="4" y1="18" x2="20" y2="18" />
    <line x1="10" y1="15" x2="10" y2="21" stroke={amberAccent ? '#BE7A28' : 'currentColor'} />
  </svg>
);

// 28. Precision Instrument Mark / Calibrated Reticle
export const IconInstrument: React.FC<IconProps> = ({ size = 24, className = '', amberAccent = true, ...props }) => (
  <svg width={size} height={size} {...defaultProps} className={className} {...props}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="4.5" />
    <line x1="12" y1="2" x2="12" y2="22" stroke={amberAccent ? '#BE7A28' : 'currentColor'} />
    <line x1="2" y1="12" x2="6" y2="12" />
    <line x1="18" y1="12" x2="22" y2="12" />
    <circle cx="12" cy="12" r="1.2" fill={amberAccent ? '#BE7A28' : 'currentColor'} stroke="none" />
  </svg>
);

// 29. Menu / Hamburger Icon (0° horizontal bars, butt caps, 24x24 grid, 1.6px uniform stroke)
export const IconMenu: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg width={size} height={size} {...defaultProps} className={className} {...props}>
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);
