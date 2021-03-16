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
        '100': '100%',
      },
      backgroundImage: theme => ({
        'footer': "url('/public/img/bg-footer.png')",
        'banner': "url('/public/img/banner-bg.png')",
      }),
      gridTemplateRows: {
        '1-11px-1': '1fr 11px 1fr',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
