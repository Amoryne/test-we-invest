/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myblue: "#24e0e5",
      },
      fontFamily: {
        borealis: ["Borealis", "sans-serif"],
      },
    },
  },
  plugins: [],
};
