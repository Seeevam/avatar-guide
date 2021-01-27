module.exports = {
  purge: {
    enabled: true,
    mode : 'layers',
    content : ['./src/**/*.jsx','./public/**/*.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
