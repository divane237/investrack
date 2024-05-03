import { color, transform } from 'framer-motion';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        loop: {
          from: { transform: 'translate(1%, -50%)' },

          to: { transform: 'translate(-105%, -50%)' },
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
            opacity: 0.3,
          },
          '50%': {
            transform: 'translate(-8%, -50%)',
            opacity: 0.5,
          },

          '100%': {
            transform: 'translate(4%, -50%)',
            backgroundColor: 'gold',
            opacity: 0.7,
          },
        },
        //
        'dark-mode': {
          '0%': {
            transform: 'translate(0%, -50%)',
            opacity: 0.3,
          },
          '50%': {
            transform: 'translate(108%, -50%)',
            opacity: 0.5,
            animationTimingFunction: 'linear',
          },

          '100%': {
            transform: 'translate(100%, -50%)',
            backgroundColor: 'purple',
            opacity: 0.7,
          },
        },
        'show-password': {
          '0%': {
            transform: 'translateY(10%)',
          },
          '100%': {
            transform: 'translateY(-50%)',
          },
        },
        'hide-password': {
          '0%': {
            transform: 'translateY(0)',
          },
          '100%': {
            transform: 'translateY(50%)',
          },
        },
      },
      animation: {
        'crypto-loop': 'loop 120s linear infinite',
        'mobile-menu': 'menu 0.3s linear',
        'light-mode': 'light-mode 1s ease 0s  forwards',
        'dark-mode': 'dark-mode 1s ease 0s forwards',
        'show-password': 'show-password 0.3s ease-in-out forwards',
        'hide-password': 'hide-password 0.1s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
