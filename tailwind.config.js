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
      "black" : "#0f172a",
      "gray-1" : "#374151",
      "gray-2" : "#e2e8f0",
      "dense" : "#1b4965",
      "primary" : "#605DFF",
      "secondary" : "#5DA8FF",
      "tertiary" : "#5DDFFF",
      "danger" : "#E83845"
    }
  },
  plugins: [],
}

