/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: 'var(--bg-canvas)',
        surface: 'var(--bg-surface)',
        raised: 'var(--bg-raised)',
        border: {
          DEFAULT: 'var(--border-color)',
          subtle: 'var(--border-color)',
          strong: 'var(--border-highlight)',
        },
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-metadata)',
        amber: {
          400: '#E3A455',
          500: '#BE7A28',
          600: '#A4661E',
          700: '#895215',
          DEFAULT: '#BE7A28',
          hover: '#E3A455',
        },
        verified: {
          DEFAULT: '#3F6B4E',
          light: '#528B66',
          bg: '#18241C',
        },
      },
      fontFamily: {
        display: ['"Söhne Breit"', '"Soehne Breit"', '"Cabinet Grotesk"', 'Inter', 'sans-serif'],
        heading: ['"Söhne"', '"Soehne"', 'Inter', '-apple-system', 'sans-serif'],
        body: ['"Söhne"', '"Soehne"', 'Inter', '-apple-system', 'sans-serif'],
        sans: ['"Söhne"', '"Soehne"', 'Inter', '-apple-system', 'sans-serif'],
        mono: ['"Söhne Mono"', '"Soehne Mono"', '"JetBrains Mono"', 'Menlo', 'Monaco', 'monospace'],
        interface: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        none: '0px',
        sm: '0px',
        DEFAULT: '0px',
        md: '0px',
        lg: '0px',
        xl: '0px',
        '2xl': '0px',
        '3xl': '0px',
      },
      boxShadow: {
        none: 'none',
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.4)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.4)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
};
