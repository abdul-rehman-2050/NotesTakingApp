/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
          openmenu:  'openmenu 1s ease-in',
          closemenu:  'closemenu 1s ease-in',
      },
      keyframes: {
          openmenu: {
          // initial position
              '0%': {left:  '-224px'},
          // final position
              '100%': {left:  '0px'}
          },
          closemenu: {
          // initial position
              '0%': {left:  '0px'},
          // final position
              '100%': {left:  '-224px'}
          },
      }
  },
  },
  plugins: [],
}
