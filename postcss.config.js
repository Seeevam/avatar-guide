const nested = require("postcss-nested");

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('postcss-nested'),
    require('autoprefixer')
  ]
}
