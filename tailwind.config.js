/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBackground: 'white',
        darkBackground: 'black',
        lightText: 'black',
        darkText: 'white',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}

