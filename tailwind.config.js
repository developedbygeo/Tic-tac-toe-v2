const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'dark-navy': '#1A2A33',
      'semi-dark-navy': '#1F3641',
      'custom-silver': '#A8BFC9',
      'custom-silver-hover': '#DBE8ED',
      'selection-inactive': '#A8A8A8',
      'light-blue': '#31C3BD',
      'light-blue-hover': '#65E9E4',
      'light-yellow': '#F2B137',
      'light-yellow-hover': '#FFC860'
    },
    extend: {
      fontFamily: {
        sans: ['Outfit', ...defaultTheme.fontFamily.sans]
      },
      boxShadow: {
        primaryButtonOne: '0px 8px 0px 0px #CC8B13',
        primaryButtonOneActive: 'inset 0px 9px 14px 5px #CC8B13',
        primaryButtonTwo: '0px 8px 0px 0px #118C87',
        primaryButtonTwoActive: 'inset 0px 9px 14px 5px #118C87',
        secondaryButton: '0px 8px 0px 0px #6B8997',
        secondaryButtonActive: 'inset 0px 9px 14px 5px #6B8997',
        cardShadow: '0px 8px 0px 0px #10212A'
      }
    }
  },
  plugins: []
};
