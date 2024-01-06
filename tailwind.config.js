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
        '4xl': '10px 20px 60px -5px rgba(173, 255, 47, 0.4)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          'from': { opacity: '1' },
          'to': { opacity: '0' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-in-out',
        fadeOut: 'fadeOut 0.5s ease-in-out forwards',

      },
    },
  },
  plugins: [],
}

