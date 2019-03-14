/* eslint no-unused-vars:"off" */
const util = require('util');
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
    config.entry = oldEntry.concat([
      process.env.REACT_APP_NAME === 'explorer' ? paths.appExplorerJs : paths.appJs,
    ]);

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
