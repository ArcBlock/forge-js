/* eslint-disable no-underscore-dangle */
const BaseClient = require('@arcblock/sdk-util');
const md5 = require('blueimp-md5');

const graphqlSchema = require('./schema/graphql.json');

/**
 * Provides a readonly client to forge
 * Its recommended to use this version in browser to get smaller bundle size
 *
 * @class GraphQLClientBase
 * @extends {BaseClient}
 */
class GraphQLClientBase extends BaseClient {
  constructor(config = 'http://localhost:8210/api') {
    let httpEndpoint = '';
    let chainId = '';
    if (typeof config === 'string') {
      httpEndpoint = config;
    } else {
      httpEndpoint = config.endpoint;
      // eslint-disable-next-line prefer-destructuring
      chainId = config.chainId;
    }

    super({
      dataSource: 'forge',
      httpEndpoint,
      enableQuery: true,
      enableSubscription: true,
      enableMutation: true,
      maxQueryDepth: 6,
    });

    this._endpoint = httpEndpoint;
    this._chainId = chainId;

    this._initTxMethods();
  }

  _getSchema() {
    return graphqlSchema;
  }

  _getIgnoreFields() {
    return [];
  }

  _getQueryId(query) {
    return md5(query);
  }
}

module.exports = GraphQLClientBase;
