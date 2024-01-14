/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      signature: ["Lobster"]
    },
    lineHeight: {
      'Home': '5rem',
      'Content': '6rem',
      'Mobile': '7rem',
      'Desktop': '2rem'
    },
  },
  plugins: [],
}