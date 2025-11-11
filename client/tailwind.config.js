/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Use 'class' strategy so you can toggle dark mode manually
  content: [
    './app/**/*.{ts,tsx}', 
    './pages/**/*.{ts,tsx}', 
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
