/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': "'Roboto', 'sans-serif'",
        'poppins': "font-family: 'Lato', sans-serif'"
      },
      colors: {
        'primary': '#2A9D54',
        'headingColor': '#282938',
        'bgShade': '#CCFFDE',
        'dribble': '#E62872',
        'body': '#008080',
        'myColor': '#78CC96'
      }
    },
  },
  plugins: [],
}

