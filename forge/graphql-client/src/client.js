const { createExtensionMethods } = require('@arcblock/client-extension');

const GraphQLClientBase = require('./base');

/**
 * An http client that can read/write data to a forge powered blockchain node, can be used in both node.js and browser.
 *
 * Please note that, due to internal implementation of google-protobuf, all `repeated fields` names are suffixed with `List`
 *
 * @class
 * @example
 * const GraphQLClient = require('@arcblock/graphql-client');
 *
 * const client = new GraphQLClient('https://argon.abtnetwork.io/api');
 * // const client = new GraphQLClient({ endpoint: 'https://argon.abtnetwork.io/api' });
 *
 * const res = await client.getChainInfo();
 */
class GraphQLClient extends GraphQLClientBase {
  /**
   * Create an instance of GraphQLClient
   *
   * @constructor
   * @param {object|string} config - config object, if a string passed, will be used as the endpoint
   * @param {string} [config.endpoint='http://localhost:8210/api'] - the graphql endpoint
   * @param {string} [config.chainId=''] - the chainId of the network
   * @see GraphQLClient#getQueries
   * @see GraphQLClient#getMutations
   * @see GraphQLClient#getSubscriptions
   * @see GraphQLClient#getTxSendMethods
   * @see GraphQLClient#getTxEncodeMethods
   */
  constructor(config = 'http://localhost:8210/api') {
    super(config);
    createExtensionMethods(this, { encodeTxAsBase64: true });
  }
}

module.exports = GraphQLClient;
