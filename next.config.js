/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
// next.config.js
const withCss = require('@zeit/next-css')
const withPurgeCss = require('next-purgecss')

module.exports = withCss(withPurgeCss())
module.exports = nextConfig
module.exports = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};