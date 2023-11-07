/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      fontFamily: {
        inter: "'Inter', sans-serif",
      },
    colors: {
      red: "#e02b20",
      secondary: "#b80604",
      primary: '#fff8f8d2',
      light: "#ffffff",
      dark: '#333333',
    },

    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["fantasy"],
  },
}
