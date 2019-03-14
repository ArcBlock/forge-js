/* eslint no-unused-vars:"off" */
const util = require('util');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');

const debug = (label, d) => console.log(label, util.inspect(d, { depth: 8, colors: true }));

module.exports = {
  webpack(config, env) {
    // fixes https://github.com/graphql/graphql-js/issues/1272
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    });

    // Add entries
    const oldEntry = config.entry.slice(0, config.entry.length - 1);
    config.entry = {
      web: oldEntry.concat([paths.appJs]),
      explorer: oldEntry.concat([paths.appExplorerJs]),
    };

    // Add html outputs
    const index = config.plugins.findIndex(
      x => x.options && x.options.template && x.options.filename
    );
    if (index > -1) {
      config.plugins.splice(index, 1);
    }

    const minify = {
      removeComments: true,
      collapseWhitespace: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      removeEmptyAttributes: true,
      removeStyleLinkTypeAttributes: true,
      keepClosingSlash: true,
      minifyJS: true,
      minifyCSS: true,
      minifyURLs: true,
    };

    config.plugins.splice(
      index,
      0,
      new HtmlWebpackPlugin({
        chunks: ['web'],
        template: paths.appHtml,
        filename: 'forge-web.html',
        inject: true,
        hash: false,
        compile: true,
        favicon: false,
        minify: env === 'production' ? minify : false,
        cache: true,
        showErrors: true,
        chunksSortMode: 'auto',
        title: 'ABT Chain Node',
      })
    );
    config.plugins.splice(
      index,
      0,
      new HtmlWebpackPlugin({
        chunks: ['explorer'],
        template: paths.appHtml,
        filename: 'abt-explorer.html',
        inject: true,
        hash: false,
        compile: true,
        favicon: false,
        minify: env === 'production' ? minify : false,
        cache: true,
        showErrors: true,
        chunksSortMode: 'auto',
        title: 'ABT Network Explorer',
      })
    );

    // debug('webpack', { config, env });
    // process.exit(1);

    return config;
  },

  devServer(configFunction) {
    return (proxy, allowedHost) => {
      const config = configFunction(proxy, allowedHost);

      config.historyApiFallback = {
        disableDotRule: true,
        rewrites: [
          { from: /^\/forge-web.html/, to: '/build/forge-web.html' },
          { from: /^\/abt-explorer.html/, to: '/build/abt-explorer.html' },
        ],
      };

      // debug('devServer', { paths, config });
      return config;
    };
  },

  paths(config, env) {
    // debug('paths', { paths, config, env });
    return Object.assign(config, paths);
  },
};
