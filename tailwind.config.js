/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto-slab': ['Roboto Slab', 'serif', 'bold'],

      },
      fontWeight: {
        thin: 100,
        normal: 400,
        bold: 700,
        black: 900,
      },
      colors: {
        'bg-vinho': '#440003',
        'amarelo': '#F29A23',
      },
      backgroundImage: {
        'background-itapedro': "url('./assets/background-header.png')",
      }
    },
  },
  plugins: [],
}

