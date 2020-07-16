/* eslint-disable @typescript-eslint/no-var-requires */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        'gray-150': '#f0fafc',
        'title-highlight': '#4876E3',
      },
      textColor: {
        primary: defaultTheme.colors.gray[800],
      },
    },
  },
  variants: {},
  plugins: [],
};
