/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx', // Para dizer que dentro de src em qualquer pasta onde houver arquivos .tsx ele vai ter estilização
    './index.html' // Para estilizar também o index
  ],
  theme: {
    extend: {
      colors:{
        background: '#09090A'
      },
      gridTemplateRows: {
        7:'repeat(7, minmax(0, 1fr))'
      }
    },
  },
  plugins: [],
}
