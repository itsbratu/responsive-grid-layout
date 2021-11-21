module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors : {
      'primary' : '#ADD8E6',
      'dark' : '#333',
      'light' : '#fff'
    },
    fontFamily : {
      'general' : ['Oswald'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
