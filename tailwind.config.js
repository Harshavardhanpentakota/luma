/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'lama-bg':"#dbfdd5",
      'lama-bg-lite':"#ceedc3",
      'lama-card-bg':"#e6fef5",
      'lama-card-bg-lite':"#def6e4",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    }},
  },
  plugins: [],
}