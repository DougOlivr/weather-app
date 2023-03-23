/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'],
  theme: {
    extend: {
      colors: {
        'bg-sidebar': '#1E213A',
        'bg-main': '#100E1D',
        'bg-button': '#585676',
        'text-shower': '#A09FB1',
        'text-location': '#88869D'
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"]
      },
      backgroundImage: {
        'sidebar': "url('src/assets/Cloud-background.png')",
      },
    
    },
  },
  plugins: [],
}
