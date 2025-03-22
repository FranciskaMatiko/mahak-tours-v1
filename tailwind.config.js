/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'beige-100': '#f5f2e8',
        'green-700': '#4a7c59',
        'red-600': '#d04a35',
        'cyan-500': '#00b8d4',
        'yellow-400': '#f5d300',
      }
    },
  },
  plugins: [],
}