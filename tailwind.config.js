module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
    // defaultLineHeights: true,
    // standardFontWeights: true
  },
  purge: [],
  theme: {
    colors: {
      grey: {darker: '#3E3E3E', dark: '##DBDBDB', lighter: '#F6F6F7', default: '#4DEEFF'},
      persimmon: '#FF634D',
      violet: '#A92FFF',
      pizzaz: '#FF9400',
      aquamarine: '#4DEEFF'
    },
    fontFamily: {
      display: ['Product Sans', 'sans-serif'],
      body: ['Product Sans', 'sans-serif'],
    },
    fontSize: {
      xs: '20px',
      sm: '25px',
      base: '35px',
      md: '50px',
      lg:'70px',
      xl: '120px',
    },
    opacity: {
      '0': '0',
      '30': '0.3',
      '60': '0.6',
      '90': '0.9',
      '100': '1'
    },
    extend: {
      screens: {
        xxl: '1640px',
      }
    }
  },
  variants: {},
  plugins: []
}
