/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'header-green': '#1A4D2E',
      'category-title-green': '#4F6F52',
      'category-odd-child-beige': '#E8DFCA',
      'background-beige': '#F5EFE6'
      }
    },
  },
  plugins: [],
}

