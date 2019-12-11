require('dotenv').config();

const fs = require('fs');
const path = require('path');

const version = fs
  .readFileSync(path.resolve(__dirname, '../version'))
  .toString()
  .trim();

module.exports = {
  plugins: [
    {
      resolve: require.resolve('@arcblock/www'),
    },
    {
      resolve: require.resolve('@arcblock/gatsby-theme-docs'),
      options: {
        version: `v${version}`,
        sourceDirs: [path.resolve(__dirname, 'src')],
        siteMetadata: {
          title: 'Forge Javascript SDK',
          description: 'Forge SDK Documentation',
          logoUrl: '/packages/',
          sidebarWidth: 360,
        },
        algoliaSearch: {
          enabled: process.env.NODE_ENV !== 'production',
          appId: process.env.GATSBY_ALGOLIA_APP_ID,
          adminKey: process.env.GATSBY_ALGOLIA_ADMIN_KEY,
          searchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
        },
        navItems: [],
        extraPlugins: [],
      },
    },
    // Speed up netlify build
    {
      resolve: 'gatsby-plugin-netlify-cache',
      options: {
        cachePublic: true,
      },
    },
  ],
};
