// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  corePlugins: {
    container: false
  },
  theme: {
    extend: {
      fontSize: {
        xtiny: '0.8125rem'
      },
      backgroundImage: {
        homeBg: 'url(https://bostamireact.ibthemespro.com/static/media/bg.54122ef3ac6eced211d3.jpg)',
        'homeTwoBg-dark': 'url(https://bostamireact.ibthemespro.com/static/media/bgtwo.181487f3237d7ff109fa.jpg)'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.container': {
          maxWidth: theme('columns.7xl'),
          marginLeft: 'auto',
          marginRight: 'auto'
        }
      })
    })
  ]
}
