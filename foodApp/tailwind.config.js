/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        darkBg: '#000000',
        darkText: '#ffffff',
        darkSecText: '#9b9a9a',
        darkTheme: '#0e0d0d',
        darkShadow: '#ffffff',
        lightBg: '#ffffff',
        lightText: '#181a1b',
        lightSecText: '#4b5563',
        lightTheme: '#FB923C',
        lightSecTheme: '#fde5d3',
        lightShadow: '#FB923C',
      },
    },
  },
  plugins: [],
};
