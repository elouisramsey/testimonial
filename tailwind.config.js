module.exports = {
  purge: {
    enabled: true,
    content: ['./components/**/*.js', './pages/**/*.js']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme('colors'),
        heroEllipse: '#FFF8F5',
        elipse: '#2e2e2e',
        story: '#222222',
        josBg: 'rgba(255, 92, 0, 0.03)',
        footerBg: '#25201D'
      }),
      colors: {
        link: '#242120',
        btn: '#FF5C00',
        summary: '#494949',
        borderColor: 'rgba(0, 0, 0, 0.08)',
        otherBorder: 'rgba(255, 255, 255, 0.4)',
        vendors: '#474747',
        venTest: '#535353',
        cusText: '#0D019A',
        cusBg: '#EEF8FF',
        vendText: '#049A01',
        vendBg: '#F0FFEE',
        form: '#4c4c4c',
        input: '#676767',
        success: '#4A4A4A'
      },
      width: {
        '8/11': '73%',
        '1/7': '39%'
      },
      fontSize: {
        tiny: '0.6rem',
        smaller: '0.8125rem',
        medium: '2rem'
      },
      height: {
        ellipH: '36rem'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
