/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    GA_TRACKING_ID: process.env.GA_TRACKING_ID
  },
  images: {
    domains: ['images.ctfassets.net'],
    loader: 'custom'
  },
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US'
  }
  // assetPrefix: './'
}

module.exports = nextConfig
