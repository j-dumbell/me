/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#0a192f'
      },
      animationDuration: {
        '2s': '2s'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
}
