/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'platinum': '#DFE0E2',
        'cadet-gray': '#A2AEBB',
        'moonstone': '#75ABBC',
        'pacific-cyan': '#23b5d3',
        'rich-black': '#071013'
      },
      scale: {
        '10': '0.1'
      }
    },
  },
  plugins: [],
}

