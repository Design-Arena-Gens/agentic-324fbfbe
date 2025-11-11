import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif']
      },
      colors: {
        brand: {
          DEFAULT: '#6366f1',
          foreground: '#0f172a'
        }
      },
      boxShadow: {
        glow: '0 20px 45px -20px rgba(99, 102, 241, 0.35)'
      }
    }
  },
  plugins: []
};

export default config;
