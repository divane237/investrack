import { color, transform } from 'framer-motion';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        loop: {
          from: { transform: 'translate(0%, -50%)' },

          to: { transform: 'translate(-70%, -50%)' },
        },
        //
        menu: {
          '0%': {
            transform: 'translateX(-50%)',
          },
          '100%': {
            transform: 'translateX(0%)',
          },
        },
        //
        'light-mode': {
          '0%': {
            transform: 'translate(100%, -50%)',
          },
          '50%': {
            transform: 'translate(-5%, -50%)',
          },

          '100%': {
            transform: 'translate(5%, -50%)',
            backgroundColor: 'gold',
            opacity: 0.7,
          },
        },
        //
        'dark-mode': {
          '0%': {
            transform: 'translate(0%, -50%)',
          },
          '50%': {
            transform: 'translate(110%, -50%)',
          },

          '100%': {
            transform: 'translate(100%, -50%)',
            backgroundColor: 'purple',
            opacity: 0.7,
          },
        },
      },
      animation: {
        'crypto-loop': 'loop 15s linear infinite',
        'mobile-menu': 'menu 0.3s linear',
        'light-mode': 'light-mode 0.3s ease-in-out 0s forwards',
        'dark-mode': 'dark-mode 0.2s ease-in-out 0s forwards',
      },
    },
  },
  plugins: [],
};
// 'light-mode': 'lightMode 5s linear0.1s normal forwards',
// 'dark-mode': 'darkMode 5s linear  0.1s normal forwards',
