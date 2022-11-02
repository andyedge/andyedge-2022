/** @type {import('next').NextConfig} */
const { redirect } = require('next/dist/server/api-utils')
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
    defaultLocale: 'en-US',
    domains: [
      {
        domain: 'andyedge.com',
        defaultLocale: 'en-US'
      }
    ]
  },

  async redirects() {
    return [
      {
        source: '/graphic-design.html',
        destination: '/articles/graphic-designer',
        locale: false,
        permanent: true
      },
      {
        source: '/graphic-designer.htm',
        destination: '/articles/graphic-designer',
        locale: false,
        permanent: true
      },
    ]
  }
  // assetPrefix: './'
}

module.exports = nextConfig
