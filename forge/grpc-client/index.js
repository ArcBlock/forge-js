/**
 * @fileOverview Defines the most efficient client library that can connect an app with forge powered blockchain through gRPC: {@link GRpcClient}
 *
 * GRpcClient can only be used in node.js, and is more efficient thant {@link GraphQLClient} which connect your app with forge node through http endpoint.
 *
 * @module @arcblock/grpc-client
 * @requires @arcblock/forge-proto
 * @requires @arcblock/forge-wallet
 * @requires @arcblock/forge-message
 * @requires @arcblock/forge-util
 * @see GRpcClient
 * @see GraphQLClient
 */

module.exports = require('./lib/client');
