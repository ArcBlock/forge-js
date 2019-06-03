const GraphQLClient = require('@arcblock/graphql-client');
const GRpcClient = require('@arcblock/grpc-client');

module.exports = require('./lib/sdk')({
  tcp: GRpcClient,
  http: GraphQLClient,
});
