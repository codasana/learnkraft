/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Inter', 'sans-serif'],
      'serif': ['Domine', 'ui-serif'],
    },
    extend: {
      colors: {
        brand: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#4A6CF6',
          500: '#4353FF',
          600: '#3C4AE6',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
        }
      }
    },
  },
  plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
}
