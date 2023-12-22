/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], theme: {
    extend: {
      boxShadow: {
        '3xl': '10px 25px 60px -5px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}

