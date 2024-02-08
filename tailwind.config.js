/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "transparent" : "transparent",
      "white": '#f8fafc',
      "black" : "#1f2937",
      "gray-1" : "#374151",
      "gray-2" : "#6b7280",
      "dense" : "#1b4965",
      "primary" : "#605DFF",
      "secondary" : "#1FA2D4",
      "tertiary" : "#1dd3b0",
      "danger" : "#E83845",
      "coal" : "#262e3f",
      "green" : "#14b8a6"
    }
  },
  // plugins: [require("daisyui")],
  // daisyui : {
  //   theme : false
  // }
}
// for customized color, override themes.js form node_modules/daisyui/src/theming
