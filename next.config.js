// next.config.js
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')

const configWithSass = withSass({

})
const configWithSassAndCss = withCSS(configWithSass)
module.exports = configWithSassAndCss
