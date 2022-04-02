const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'dark-navy': '#1A2A33',
      'semi-dark-navy': '#1F3641',
      silver: '#A8BFC9',
      'silver-hover': '#DBE8ED',
      'light-blue': '#31C3BD',
      'light-blue-hover': '#65E9E4',
      'light-yellow': '#F2B137',
      'light-yellow-hover': '#FFC860',
    },
    extend: {
      fontFamily: {
        sans: ['Outfit', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
