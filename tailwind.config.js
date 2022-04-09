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
      'light-yellow-hover': '#FFC860',
      black: '#000000'
    },
    fontSize: {
      base: ['clamp(1rem, 0.9244rem + 0.4651vw, 1.5rem)', '1.5'],
      s: ['clamp(1.25rem, 1.2122rem + 0.2326vw, 1.5rem)', '1.5'],
      sm: ['clamp(1.35rem, 1.4244rem + 0.4651vw, 1.75rem)', '1.5'],
      md: ['clamp(1.8rem, 1.7698rem + 0.1860vw, 2rem)', '1.5'],
      lg: ['clamp(2rem, 1.9244rem + 0.4651vw, 2.5rem)', '1.5'],
      xl: ['clamp(2.25rem, 2.1488rem + 0.4302vw, 3rem)', '1.5']
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
      },
      height: {
        90: '90%',
        95: '95%'
      },
      width: {
        half: '50%'
      },
      screens: {
        landmobileSS: {
          raw: '(min-width: 319px) and (max-height: 450px) and (orientation: landscape)'
        },
        landmobileS: {
          raw: '(min-width: 568px) and (max-height: 450px) and (orientation: landscape)'
        },
        landmobileSM: {
          raw: '(min-width: 812px) and (max-height: 450px) and (orientation: landscape)'
        },
        landscapeL: {
          raw: '(min-width: 925px) and (max-height: 450px) and (orientation: landscape)'
        },
        sxl: {
          raw: '(min-width: 1100px) and (max-width: 1279px)'
        },
        desktop: {
          raw: '(min-width: 2560px)'
        },
        fourK: {
          raw: '(min-width: 3840px)'
        },
        ...defaultTheme.screens
      }
    }
  },
  plugins: []
};
