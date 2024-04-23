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
        menu: {
          '0%': {
            transform: 'translateX(-50%)',
          },
          '100%': {
            transform: 'translateX(0%)',
          },
        },
      },
      animation: {
        'crypto-loop': 'loop 15s linear infinite',
        'mobile-menu': 'menu 0.3s linear',
      },
    },
  },
  plugins: [],
};
