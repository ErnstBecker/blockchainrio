/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   extend: {
      colors: {
        orangeNew: '#f56c15',
        greenNew: '#31ff4e',
        greenHover: '#31ff4e',
        purpleNew: '#6a00de',
        blueNew: '#1842ff',
        blackNew: '#262626',
        whiteNew: "#e3e3e3"
      },
      fontFamily: {
        orbitron: ['"Orbitron", sans-serif'],
      },
    },
  },
  plugins: ["tailwindcss ,autoprefixer"],
}
