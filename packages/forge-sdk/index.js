const GraphQLClient = require('@arcblock/graphql-client');
const GRpcClient = require('@arcblock/grpc-client');
const ForgeUtil = require('@arcblock/forge-util');
const ForgeWallet = require('@arcblock/forge-wallet');
const DidUtil = require('@arcblock/did-util');
const ForgeMessage = require('@arcblock/forge-message');

// Full version of forge sdk, can be used in node.js env
module.exports = require('./lib/sdk')({
  util: Object.assign({}, ForgeUtil, DidUtil),
  wallet: ForgeWallet,
  message: ForgeMessage,
  clients: {
    tcp: GRpcClient,
    http: GraphQLClient,
  },
});
