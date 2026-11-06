import type { Config } from 'tailwindcss';

/**
 * OTRO design DNA — shared theme tokens across all 6 sites.
 * Deep navy = authority/global competence; amber = bridge/energy (BD + CN warmth).
 */
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0B1F3A',
          ink: '#101828',
          blue: '#1657A8',
          sky: '#3E8FD6',
          amber: '#F5A623',
          cream: '#FAF7F0',
          mist: '#EEF3F9',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      maxWidth: { content: '72rem' },
    },
  },
  plugins: [],
};
export default config;
