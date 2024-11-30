/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'stockholm': "url('/public/stockholm.jpg')",
      }
    },
  },
  plugins: [],
}

