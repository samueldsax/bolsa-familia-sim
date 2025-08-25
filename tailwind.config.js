// Salve este código em: my-bolsa-familia-sim/tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  // A propriedade 'content' informa ao Tailwind onde procurar por classes.
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // A propriedade 'theme' permite personalizar o design do Tailwind.
  theme: {
    extend: {
      // Define a nova fonte 'Poppins' como a fonte padrão.
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
