import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EEF2FF',
          200: '#C6D2FF',
          600: '#4F39F6',
          700: '#432DD7',
          900: '#1E1A4D',
        },
        neutral: {
          white: '#FFFFFF',
          50: '#FAFAFA',
          200: '#CFCFD3',
          300: '#B0AFB6',
          400: '#908F99',
          500: '#73727E',
          black: '#000000',
          900: '#0F0F10',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      keyframes: {
        shine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        shine: 'shine 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
};

export default config;
