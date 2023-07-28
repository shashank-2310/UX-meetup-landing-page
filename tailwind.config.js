/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "xs": "450px",
        "mxs": { 'max': '450px' },
      },
      fontFamily: {
        'Neucha': ['Neucha', 'cursive'],
        'Mulish': ['Mulish', 'sans-serif'],
        'Pompiere': ['Pompiere', 'cursive'],
      },
      height: {
        screen: "100dvh",
      },
      colors: {
        "brown": "#312A2B",
        "sepia": "#D8D3C9",
        "purple": "#C281D1",
        "yellow": "#EDCE92",
      },

    },
  },
  plugins: [],
}

