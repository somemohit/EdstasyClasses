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
        cursive: ['IBM Plex Mono', 'monospace'],
      },
      boxShadow: {
        'nimble': '4.0px 8.0px 8.0px rgba(0,0,0,0.38);',
      }
    },
  },
  plugins: [],
};
