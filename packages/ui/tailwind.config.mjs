/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem'
    },
    extend: {
      screens: {
        xs: '280px',
        '2xl': '1400px'
      }
    }
  },
  // Animation utilities (animate-in/out, accordion-down/up, etc.) come from
  // tw-animate-css, imported directly in app/globals.css - see that file.
  // (Also note: this file isn't loaded by the actual Tailwind v4 build, which
  // is CSS-first; it's kept only for shadcn/ui CLI metadata - see components.json.)
  plugins: []
}
