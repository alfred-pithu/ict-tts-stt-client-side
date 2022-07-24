/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        customFont: ['Nunito', 'sans-serif']
      }
    },
  },
  plugins: [require("daisyui")],
}
