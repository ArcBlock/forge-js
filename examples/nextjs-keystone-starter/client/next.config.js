/* eslint import/no-extraneous-dependencies:"off" */
const path = require('path');
const withCustomBabelConfigFile = require('next-plugin-custom-babel-config');

module.exports = withCustomBabelConfigFile({
  babelConfigFile: path.join(__dirname, './babel.config.js'),

  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    };

    // const originalEntry = config.entry;
    // config.entry = async () => {
    //   const entries = await originalEntry();
    //   if (entries['main.js']) {
    //     entries['main.js'].unshift('babel-polyfill');
    //   }
    //   return entries;
    // };

    // fixes https://github.com/graphql/graphql-js/issues/1272
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    });

    return config;
  },
});
