const GraphQLClient = require('@arcblock/graphql-client/dist/lite');
const ForgeUtil = require('@arcblock/forge-util');

// Lite version of forge sdk, better used in browser
module.exports = require('./lib/sdk')({
  util: ForgeUtil,
  clients: {
    http: GraphQLClient,
  },
});
