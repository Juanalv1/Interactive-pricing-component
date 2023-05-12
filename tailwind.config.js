/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'Manrope': ['Manrope', 'sans-serif']
      },
    },
  },
  plugins: [require('@shrutibalasa/tailwind-grid-auto-fit')],
}

