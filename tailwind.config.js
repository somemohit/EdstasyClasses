/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        '2xs': '10px',
        '3xs': '8px',
      },
      fontFamily: {
        Rampart: ['Jost', 'sans-serif'],
        cursive: ['Lobster', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
