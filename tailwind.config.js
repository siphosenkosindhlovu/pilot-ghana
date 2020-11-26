module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
    // defaultLineHeights: true,
    // standardFontWeights: true
  },
  purge: [
    './src/**/*.{ejs,js}',
  ],
  theme: {
    fontFamily: {
      display: ['Product Sans', 'sans-serif'],
      body: ['Product Sans', 'sans-serif'],
    },
    opacity: {
      0: '0',
      30: '0.3',
      60: '0.6',
      90: '0.9',
      100: '1',
    },
    extend: {
      spacing: {
        '6half': '1.75rem',
        '7': '2.25rem',
      },
      fontSize: {
        xs: '0.574rem',
        sm: '0.714rem',
        base: '1rem',
        md: '1.429rem',
        lg: '2rem',
        '6half': '4.5rem',
        '7xl': '5rem',
        xlg: '2.857rem',
        xxl: '3.429rem',
        xxxl: '7.143rem',
      },
      screens: {
        xxl: '1640px',
      },
      borderRadius: {
        '4xl': '80px',
      },
      colors: {
        grey: { darker: '#3E3E3E', dark: '#DBDBDB', lighter: '#F6F6F7', default: '#C2C2C2'},
        persimmon: '#FF634D',
        violet: '#A92FFF',
        pizzaz: '#FF9400',
        aquamarine: '#4DEEFF',
      },
      height: {
        'fit-content': 'fit-content',
      }
    },
  },
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
    display: ['responsive', 'hover', 'focus', 'group-hover']
  },
  plugins: [],
};
