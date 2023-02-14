/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "base": "#49BBBD",
        "light-base": "#49BBBD",
        "highlight-yellow": "#FFD166",
        "highlight-red": "#EF476F",
        "highlight-purple": "#9B5DE5",
        "highlight-blue": "#00AAFF",
        "highlight-green": "#0BCB99",

      },
    },
  },
  plugins: [],
}
