/* eslint-disable global-require */
/**
 * @fileOverview Contains basic helper methods to encode/format/mock a protobuf message
 * @module @arcblock/forge-sdk
 * @requires @arcblock/forge-util
 * @requires @arcblock/forge-proto
 * @example
 * yarn add @arcblock/forge-sdk
 *
 * const ForgeSDK = require('@arcblock/forge-sdk');
 * ForgeSDK.connect('tcp://127.0.0.1:28211', { default: true });
 * ForgeSDK.createWallet({});
 */

const url = require('url');
const debug = require('debug')(`${require('../package.json').name}`);

module.exports = function bootstrap(clients) {
  const connections = {};

  const sdk = {
    /**
     * Connect to a forge grpc/graphql endpoint
     * Then switch the current connection of ForgeSDK to that connection
     *
     * @param {string} endpoint - endpoint url string
     * @param {object} options - connection config
     * @param {string} options.name - connection name
     * @param {string} options.default - set this connection as default?
     */
    connect(endpoint, options = {}) {
      const parsed = url.parse(endpoint);
      parsed.protocol = (parsed.protocol || '').replace(/:$/, '');
      debug('parsed endpoint', parsed);
      if (!parsed.protocol || !['tcp', 'http', 'https'].includes(parsed.protocol)) {
        throw new Error(
          'ForgeSDK.connect expects endpoint to be valid url, only tcp and http protocol supported'
        );
      }

      if (!clients[parsed.protocol]) {
        throw new Error(
          `The ForgeSDK bundle you are using does not support ${parsed.protocol} protocol`
        );
      }

      const name = options.name || endpoint;
      debug(`create connection ${endpoint}`);
      if (parsed.protocol === 'tcp') {
        const ForgeClient = clients.tcp;
        connections[name] = {
          client: new ForgeClient(Object.assign({ endpoint }, options)),
          options,
        };
      }

      if (['http', 'https'].includes(parsed.protocol)) {
        const ForgeClient = clients.http;
        connections[name] = {
          client: new ForgeClient(Object.assign({ endpoint }, options)),
          options,
        };
      }
    },
  };

  /**
   * Get current connection
   *
   * @param {string} [conn=undefined] - connection name
   */
  const getClient = (conn = undefined) => {
    const names = Object.keys(connections);
    if (names.length === 0) {
      throw new Error('ForgeSDK not connected to any endpoint');
    }

    if (conn) {
      if (connections[conn]) {
        return connections[conn].client;
      }

      throw new Error(`ForgeSDK not connected to ${conn}`);
    }

    for (let i = 0; i < names.length; i++) {
      if (connections[names[i]].options.default) {
        return connections[names[i]].client;
      }
    }

    return connections[names[0]].client;
  };

  /**
   * Proxy any further method call to the current connection object
   *
   * @param {object} target
   * @param {string} propKey
   */
  const methodProxy = (target, propKey) =>
    function proxyMethod(args, options) {
      if (propKey === 'connect') {
        return sdk.connect(args, options);
      }

      const client = getClient(options);
      const method = client[propKey];
      if (typeof method === 'function') {
        return method.call(client, args);
      }

      throw new Error(`ForgeSDK.${propKey} is not supported in current connection`);
    };

  return new Proxy(sdk, { get: methodProxy });
};
