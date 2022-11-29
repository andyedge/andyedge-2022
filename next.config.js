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
    GA_TRACKING_ID: process.env.GA_TRACKING_ID,
    GTM_ID: process.env.GTM_ID
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
        permanent: true
      },
      {
        source: '/graphic-designer.htm',
        destination: '/articles/graphic-designer',
        permanent: true
      },
      {
        source: '/graphic-designer.html',
        destination: '/articles/graphic-designer',
        permanent: true
      },
      {
        source: '/experience-designer.html',
        destination: '/',
        permanent: true
      },
      {
        source: '/ecampusontario-brand-design.html',
        destination: '/design-thinking',
        permanent: true
      },
      {
        source: '/personal-brand-stories-lebron-james-basketball-branding.html',
        destination: '/articles/personal-branding',
        permanent: true
      },
      {
        source: '/about-brand-identity-design.html',
        destination: '/branding-design',
        permanent: true
      },
      {
        source: '/ecampusontario-brand-ux-design.html',
        destination: '/design-thinking',
        permanent: true
      },
    ]
  }
  // assetPrefix: './'
}

module.exports = nextConfig
