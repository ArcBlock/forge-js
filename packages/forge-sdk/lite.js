const GraphQLClient = require('@arcblock/graphql-client');

module.exports = require('./lib/sdk')({
  http: GraphQLClient,
});
