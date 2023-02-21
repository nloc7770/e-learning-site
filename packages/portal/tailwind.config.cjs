/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "base": "#49BBBD",
        "light-base": "#92D6D7",
      },
    },
  },
  plugins: [],
}
