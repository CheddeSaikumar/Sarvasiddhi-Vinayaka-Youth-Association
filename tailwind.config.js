/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        saffron: {
          50: '#fff8ed',
          100: '#ffefd3',
          200: '#ffdba5',
          300: '#ffc06d',
          400: '#ff9a33',
          500: '#ff7a0f',
          600: '#f05e06',
          700: '#c74708',
          800: '#9e380f',
          900: '#7f3010',
          950: '#451606',
        },
        maroon: {
          50: '#fef2f2',
          100: '#fde3e3',
          200: '#fbcccc',
          300: '#f7aaaa',
          400: '#f07d7d',
          500: '#e45757',
          600: '#cf3838',
          700: '#af2a2a',
          800: '#902626',
          900: '#772424',
          950: '#410e0e',
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        cream: {
          50: '#fdfbf6',
          100: '#faf5e9',
          200: '#f4ebcf',
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'pulse-slow': 'pulseSlow 4s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
};
