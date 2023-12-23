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
        fadeOut: 'fadeOut 0.5s ease-in-out forwards', // 'forwards' mantém o estado final

      },
    },
  },
  plugins: [],
}

