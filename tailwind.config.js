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
      "secondary" : "#5DA8FF",
      "tertiary" : "#1dd3b0",
      "danger" : "#E83845",
      "coal" : "#262e3f"
    }
  },
  // plugins: [require("daisyui")],
}

