module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fill: theme => ({
      'vanilla': theme('colors.vanilla.500'),
      'chocolate': theme('colors.chocolate.500'),
      'strawberry': theme('colors.strawberry.500'),
      'greentea': theme('colors.greentea.500'),
      'mango': theme('colors.mango.500'),
      'mint': theme('colors.mint.500'),
      'banana': theme('colors.banana.500'),
      'blueberry': theme('colors.blueberry.500'),
    }),
    extend: {
      colors: {
        vanilla: {
          500: '#f3e5ab'
        },
        chocolate: {
          500: '#9b6549'
        },
        strawberry: {
          500: '#E53939'
        },
        greentea: {
          500: '#97CE94'
        },
        mango: {
          500: '#FFCC22'
        },
        mint: {
          500: '#ACEBDE'
        },
        banana: {
          500: '#FFE135'
        },
        blueberry: {
          500: '#496898'
        },
        topping: {
          no: '#FFFFFF',
          chocolate: '#9b6549',
          cheese: '#FFF5AF',
          caramel: '#BB7843',
          strawberry: '#E53939'
        }
      },
      fontFamily: {
        'body': ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        DEFAULT: '2px 2px 10px -2px rgba(0,0,0,0.3)'
      },
      borderRadius: {
        'full-50': '50%'
      },
    },
  },
  variants: {
    extend: {
      margin: ['last'], 
    },
  },
  plugins: [],
}
