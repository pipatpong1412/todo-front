/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'myGreen': '#D9EDBF',
        'myRed': '#FFB996',
        'myOrange':  '#FFCF81'
      },
      fontFamily: {
        sans: ['IBM Plex Sans Thai', 'sans-serif']
      },
    }
  },
      
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}

