/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        main: "#ff9601",
        secondary: "#182d5f",
      },
    },
  },
  plugins: [],
}

