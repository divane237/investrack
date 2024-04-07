/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        loop: {
          from: { transform: 'translate(0%, -50%)' },

          to: { transform: 'translate(-100%, -50%)' },
        },
      },
      animation: {
        'crypto-loop': 'loop 15s linear infinite',
      },
    },
  },
  plugins: [],
};
