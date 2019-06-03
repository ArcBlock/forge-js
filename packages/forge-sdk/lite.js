const GraphQLClient = require('@arcblock/graphql-client');
const message = require('@arcblock/forge-message/lite');
const proxy = require('proxy-polyfill/src/proxy');

module.exports = require('./lib/sdk')({
  message,
  proxy, // use polyfill for browsers
  clients: {
    http: GraphQLClient,
  },
});
