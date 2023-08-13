/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#fdfcfb",
        "primary-dark": "#010101",
        paragraph: "#242ac2",
        accentOrange: "#e81e6b",
        accentGreen: "#188a0e",
        accentAqua: "#242ac2",
        accentRed: "#881a45",
        "primary-blue": "#1b6cbb",
        "primary-purple": "#a92e7a",
      },
      fontFamily: {
        paragraph: ["Open Sans", "sans-serif"],
        tusker: ["TuskerRegular"],
        "tusker-bold": ["TuskerBold"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
}
