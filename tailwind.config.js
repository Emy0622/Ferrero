/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: { amarelo: '#F3CC4D', marrom: '#2E1012', fonte: '#f00000'}
    },
    fontFamily: {
      fonte: ['Indie Flower', 'cursive']
    }
  },
  plugins: [],
}