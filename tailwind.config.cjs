/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('./src/assets/imgs/banner.jpg')"
      }
    },
    fontFamily: { 
      'jetbrains': ['JetBrains Mono', 'mono']
    }
  },
  plugins: [],
}
