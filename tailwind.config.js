/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-green': '#39FF14',
        'neon-cyan': '#38E8FF',
        'panel-deep': '#05070A',
        'panel-mid': '#080E14',
        'panel-light': '#0B1118',
      },
      fontFamily: {
        instrument: ['"Instrument Serif"', 'serif'],
      },
    },
  },
  plugins: [],
}
