require('dotenv-flow').config()

const path = require('path')

class Extractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:/]+/g) || []
  }
}

const rootDir = path.resolve(__dirname)

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter Typescript',
    description:
      'Kick off your next, great Gatsby project with this default typescript starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    author: '@cj',
    siteUrl: process.env.SITE_URL,
  },
  plugins: [
    'gatsby-plugin-webpack-size',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        implementation: require('sass'),
        precision: 10,
        data: '@import "styles/globals";',
        includePaths: [
          path.join(rootDir, 'src'),
          path.join(rootDir, 'node_modules'),
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        whitelist: ['app', 'html', 'body', 'fa', 'svg', 'animated'],
        whitelistPatterns: [
          /[A-Za-z0-9_-]+__[A-Za-z0-9_-]+/,
          /^fa-.*/,
          /^svg-.*/,
          /^animated.*/,
          /^slide.*/,
        ],
        extractors: [
          {
            extractor: Extractor,
            extensions: ['html', 'js', 'jsx', 'ts', 'tsx', 'css', 'scss'],
          },
        ],
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      /* eslint-disable @typescript-eslint/camelcase */
      options: {
        name: 'GatsbyJS Starter Typescript',
        short_name: 'GatsbyJS',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'standalone',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
      /* eslint-enable @typescript-eslint/camelcase */
    },
    'gatsby-plugin-sitemap',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
  ],
}
