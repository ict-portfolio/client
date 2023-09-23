/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "white": '#f8fafc',
      "gray-1" : "#374151",
      "gray-2" : "#e2e8f0",
      "dense" : "#1b4965",
      "primary" : "#3cd8b9",
      "secondary" : "#a4cde8"
    }
  },
  plugins: [],
}

