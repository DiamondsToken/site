/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        yellow: {
          300: '#fca311',
          400: '#fca311',
        },
      },
    },
  },
  plugins: [],
};