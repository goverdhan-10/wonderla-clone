/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      zIndex: {
        '15': '15',
      },
      spacing: {
        '15': '3.75rem', // if you need left-15/right-15
      }
    },
  },
  plugins: [],
}

