const GraphQLClient = require('@arcblock/graphql-client');
const GRpcClient = require('@arcblock/grpc-client');
const message = require('@arcblock/forge-message');

module.exports = require('./lib/sdk')({
  message,
  clients: {
    tcp: GRpcClient,
    http: GraphQLClient,
  },
});
