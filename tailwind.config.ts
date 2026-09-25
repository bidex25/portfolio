import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        black:    '#050505',
        charcoal: { DEFAULT: '#1A1A1A', 2: '#222222' },
        gold:     { DEFAULT: '#D4AF37', dim: '#B8962A' },
        white:    '#FFFFFF',
        gray:     { DEFAULT: '#E0E0E0', dim: '#A0A0A0' },
      },
      fontFamily: {
        poppins:   ['Poppins', 'sans-serif'],
        inter:     ['Inter', 'sans-serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
      },
      keyframes: {
        shimmer: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%':     { backgroundPosition: '100% 50%' },
        },
        floatY: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-10px)' },
        },
        pulseRing: {
          '0%':   { transform: 'scale(1)', opacity: '0.6' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scrollHint: {
          '0%,100%': { opacity: '1', transform: 'translateY(0)' },
          '50%':     { opacity: '0.3', transform: 'translateY(8px)' },
        },
      },
      animation: {
        shimmer:    'shimmer 4s ease infinite',
        floatY:     'floatY 3s ease-in-out infinite',
        pulseRing:  'pulseRing 1.8s ease-out infinite',
        fadeInUp:   'fadeInUp 0.6s ease both',
        scrollHint: 'scrollHint 1.5s ease-in-out infinite',
      },
      backgroundSize: {
        '300': '300% 300%',
      },
    },
  },
  plugins: [forms],
} satisfies Config
