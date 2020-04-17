const path = require('path');
const { DuplicatesPlugin } = require('inspectpack/plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  entry: ['react-app-polyfill/ie9', 'react-app-polyfill/stable', './dist/lite.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'ForgeGraphqlClient',
    libraryTarget: 'window',
  },
  resolve: {
    alias: {
      'bn.js': require.resolve('bn.js'),
      ms: require.resolve('ms'),
      axios: require.resolve('axios'),
      debug: require.resolve('debug'),
    },
  },
  plugins: [
    new BundleAnalyzerPlugin({ analyzerMode: 'static', openAnalyzer: false }),
    new DuplicatesPlugin({
      emitErrors: false,
      emitHandler: undefined,
      verbose: false,
    }),
  ],
};
