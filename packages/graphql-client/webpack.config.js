const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  entry: ['@babel/polyfill', './dist/lite.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'ForgeGraphqlClient',
    libraryTarget: 'window',
  },
  plugins: [new BundleAnalyzerPlugin({ analyzerMode: 'static', openAnalyzer: false })],
};
