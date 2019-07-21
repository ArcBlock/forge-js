/* eslint-disable no-underscore-dangle */
import packedSchema from './schema/graphql.txt';

const BaseClient = require('@arcblock/sdk-util');
const jsonpack = require('jsonpack');
const md5 = require('blueimp-md5');

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
      socketEndpoint: () => this._getSocketEndpoint(httpEndpoint),
      enableQuery: true,
      enableSubscription: true,
      enableMutation: true,
      maxQueryDepth: 6,
    });

    this._endpoint = httpEndpoint;
    this._chainId = chainId;
  }

  _getSocketEndpoint(endpoint) {
    let socketEndpoint = endpoint.replace(/https?:\/\//, 'ws://');
    if (endpoint.indexOf('https://') === 0) {
      socketEndpoint = socketEndpoint.replace('ws://', 'wss://');
    }

    return `${socketEndpoint}/socket`;
  }

  _getSchema() {
    return jsonpack.unpack(packedSchema);
  }

  _getIgnoreFields() {
    return [];
  }

  _getQueryId(query) {
    return md5(query);
  }
}

module.exports = GraphQLClientBase;
