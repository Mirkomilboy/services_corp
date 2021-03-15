module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '4rem',
          lg: '6rem',
          xl: '10rem',
        }
      },
      fontFamily: {
        openSans: ['Open Sans'],
        shippori: ['Shippori Minch']
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '90%': '90%',
        '16': '4rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
