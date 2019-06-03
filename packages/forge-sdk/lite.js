const GraphQLClient = require('@arcblock/graphql-client');
const message = require('@arcblock/forge-message/lite');

module.exports = require('./lib/sdk')({
  message,
  clients: {
    http: GraphQLClient,
  },
});
