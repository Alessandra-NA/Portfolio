/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'amethyst': {
          '50': '#f9f6fd',
          '100': '#f4edfa',
          '200': '#e9daf4',
          '300': '#d9bdea',
          '400': '#c395dd',
          '500': '#9c56c2',
          '600': '#8c4cad',
          '700': '#753c8f',
          '800': '#613375',
          '900': '#532e61',
          '950': '#32143e',
        }
      }
    }
  },
  plugins: [],
}