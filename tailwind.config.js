module.exports = {
  purge: ['./src/**/*.{js,tsx,ts,jsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'mono': ['JetBrains Mono'],
      'sans': ['Inter', 'sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
