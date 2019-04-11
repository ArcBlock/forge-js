/* eslint no-unused-vars:"off" */
const util = require('util');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const paths = require('./paths');

const debug = (label, d) => console.log(label, util.inspect(d, { depth: 9, colors: true }));

module.exports = {
  webpack(config, env) {
    // fixes https://github.com/graphql/graphql-js/issues/1272
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    });

    // Reduce recharts bundle size
    const rule = config.module.rules.find(x => x.oneOf);
    if (rule) {
      const loaders = rule.oneOf;
      const loader = loaders.find(
        x => x.test && x.test.toString().indexOf('(js|mjs|jsx|ts|tsx)') > 0
      );
      loader.options.plugins.push(require.resolve('babel-plugin-recharts'));
      debug('loader', loader);
    }

    // Add entries
    const oldEntry = config.entry.slice(0, config.entry.length - 1);
    config.entry = oldEntry.concat([
      process.env.REACT_APP_NAME.includes('explorer') ? paths.appExplorerJs : paths.appJs,
    ]);

    if (env === 'production') {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          openAnalyzer: false,
          generateStatsFile: true,
        })
      );
    }
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
