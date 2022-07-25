/** @type {import('tailwindcss').Config} */
// Customize the behavior of tailwind.
// Add custom colors
const colors = require('tailwindcss/colors')
module.exports = {
  mode:'jit', 
  darkMode: 'false',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray,
        900: "#202225",
        800: "#2f3136",
        700: "#36393f",
        600: "#4f545c",
        // 500: "#5C5F62",
        400: "#d4d7dc",
        300: "#e3e5e8",
        200: "#ebedef",
        100: "#f2f3f5",

    },
  },
  plugins: [],
}
}
