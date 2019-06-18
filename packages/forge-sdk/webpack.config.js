const path = require('path');
const { DuplicatesPlugin } = require('inspectpack/plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  entry: ['@babel/polyfill', './lite.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'ForgeSDK',
    libraryTarget: 'window',
  },
  resolve: {
    alias: {
      'bn.js': require.resolve('bn.js'),
      ms: require.resolve('ms'),
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
