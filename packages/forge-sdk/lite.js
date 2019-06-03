const GraphQLClient = require('@arcblock/graphql-client');
const message = require('@arcblock/forge-message/lite');
// FIXME: this polyfill does not support method call delegation
// const polyfill = require('proxy-polyfill/src/proxy');

module.exports = require('./lib/sdk')({
  message,
  // proxy: polyfill(), // use polyfill for browsers
  proxy: Proxy,
  clients: {
    http: GraphQLClient,
  },
});
