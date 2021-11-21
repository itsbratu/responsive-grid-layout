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
    },
    backgroundImage : {
      'laptop' : "url('https://images.pexels.com/photos/129208/pexels-photo-129208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
    },
    screens: {
      '2xl': {'max': '1535px'},
      'xl': {'max': '1279px'},
      'lg': {'max': '1023px'},
      'md': {'max': '767px'},
      'sm': {'max': '500px'},
    },
    gridTemplateAreas: {
      'topContainer' : [
        'showcase showcase top-box-a',
        'showcase showcase top-box-b'
      ],
      'topContainerMobile' : [
        'showcase showcase',
        'top-box-a top-box-b'
      ],
    }
  },
  variants: {
    gridTemplateAreas: ['responsive']
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas')
  ],
}
