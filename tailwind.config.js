/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#35A12C',
        'secondary-color': '#0891b2',
      },
    },
  },
  plugins: [],
}