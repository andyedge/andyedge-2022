/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.andyedge.com',
  generateRobotsTxt: true, // (optional)
  transform: async (config, path) => {
    const splittedPath = path.split('/')[1]

    switch (splittedPath) {
      case '':
        return {
          loc: path,
          priority: 1.0,
          changefreq: config.changefreq,
          lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        }
      case 'customer-experience':
      case 'how':
        return {
          loc: path,
          priority: 0.9,
          changefreq: config.changefreq,
          lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        }
      case 'design-thinking':
      case 'design-system':
      case 'branding-design':
      case 'portfolio':
        return {
          loc: path,
          priority: 0.8,
          changefreq: config.changefreq,
          lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        }
      case 'privacy':
      case '404':
        return {
          loc: path,
          priority: 0.3,
          changefreq: config.changefreq,
          lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        }
      default:
        return {
          loc: path,
          priority: 0.7,
          changefreq: config.changefreq,
          lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        }
    }
  },
}