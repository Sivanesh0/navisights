/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#151515",
        maroon: "#A91D3A",
        "dark-maroon": "#5D0E41",
        red: "#C73659",
        "bright-red": "#FF204E",
        grey: "#EEEEEE",
        navy: "#00224D",
      },
      fontFamily: {
        "afacad-flux": ["Afacad Flux", "sans-serif"],
        "cormorant-garamond": ["Cormorant Garamond", "serif"],
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
