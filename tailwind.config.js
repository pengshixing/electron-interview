/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

const percenMap = {
  '7/10': '70%',
  '1/5': '20%',
  '3/20': '15%',
};

module.exports = {
  content: ['./app/renderer/**/*.{tsx,ts}'],
  corePlugins: {
    preflight: false, // 禁用tailwind的预设样式
  },
  theme: {
    colors: {
      white: colors.white,
      black: colors.black,
      warning: 'rgb(240, 70, 70)',
      base: '#27292c',
    },
    extend: {
      spacing: { ...percenMap },
      // width: {
      //   ...percenMap,
      // },
      // top: {
      //   ...percenMap,
      // },
    },
  },
  plugins: [],
};
