import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#0A1628', light: '#0f2040', dark: '#060f1a' },
        gold: { DEFAULT: '#C9A84C', light: '#F5E6C8', dark: '#a8893d' },
        champagne: '#F5E6C8',
        offwhite: '#FAF9F6',
        charcoal: '#1A1A2E',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A84C 0%, #F5E6C8 50%, #C9A84C 100%)',
        'navy-gradient': 'linear-gradient(135deg, #0A1628 0%, #0f2040 50%, #0A1628 100%)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-gold': 'pulse-gold 2s infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        fadeInUp: { from: { opacity: '0', transform: 'translateY(40px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        float: { '0%, 100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-20px)' } },
      },
    },
  },
  plugins: [],
}
export default config
