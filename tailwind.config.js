/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      rmDarkGrey: '#14171a',
      rmDarkestGrey: '#14181d',
      rmLightGrey: '#313131',
      rmLighterGrey: '#2a2b2d',
      rmTan: '#6a512e',
      rmGrey: '#16181d',
      rmMediumGrey: '#1f2126',
    },
    extend: {},
  },
  plugins: [],
};
