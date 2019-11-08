/* eslint-disable no-continue */
/* eslint-disable global-require */
/**
 * @fileOverview Contains basic helper methods to encode/format/mock a protobuf message
 * @module @arcblock/forge-sdk
 * @requires @arcblock/forge-util
 * @requires @arcblock/forge-message
 * @requires @arcblock/forge-wallet
 * @requires @arcblock/grpc-client
 * @requires @arcblock/graphql-client
 * @requires @arcblock/did-util
 * @example
 * yarn add @arcblock/forge-sdk
 *
 * const ForgeSDK = require('@arcblock/forge-sdk');
 * ForgeSDK.connect('tcp://127.0.0.1:28211', { default: true });
 * ForgeSDK.getChainInfo().then(console.log);
 */

const url = require('url');
const debug = require('debug')(`${require('../package.json').name}`);

/**
 * Get all keys of an object including its inherited
 *
 * @private
 * @param {*} object
 * @param {*} opts
 * @returns {array}
 */
const getAllKeys = (object, keyFilter = () => true) => {
  let getKeys = Object.keys;
  if (typeof Object.getOwnPropertyNames === 'function') {
    getKeys = Object.getOwnPropertyNames;
  }

  let proto = object;
  const properties = {};

  // eslint-disable-next-line no-cond-assign
  do {
    // eslint-disable-next-line no-restricted-syntax
    for (const key of getKeys(proto)) {
      if (keyFilter(key)) {
        properties[key] = true;
      }
    }
  } while ((proto = Object.getPrototypeOf(proto)) && proto !== Object.prototype);

  return Object.keys(properties);
};

module.exports = ({ message, util, wallet, clients }) => {
  const connections = {};

  /**
   * Get current connection from connection pool
   *
   * @private
   * @param {string} [conn=undefined] - connection name
   */
  const getConnection = (conn = undefined) => {
    const names = Object.keys(connections);
    if (names.length === 0) {
      throw new Error('ForgeSDK not connected to any endpoint');
    }

    if (conn) {
      if (connections[conn]) {
        // debug('pick connection by name', conn);
        return connections[conn];
      }

      throw new Error(`ForgeSDK not connected to ${conn}`);
    }

    for (let i = 0; i < names.length; i++) {
      if (connections[names[i]].options.default) {
        // debug('pick default connection', names[i]);
        return connections[names[i]];
      }
    }

    // debug('pick first connection', names[0]);
    return connections[names[0]];
  };

  const getClient = (conn = undefined) => getConnection(conn).client;

  /**
   * Wrap all methods from `source` object and attach them to target object
   * We can have a much cleaner implementation with ES6 proxy here
   * But because it's not well supported by js runtime environments yet
   *
   * @param {*} source
   * @param {*} target
   */
  const wrapMethods = (source, target) => {
    if (typeof source !== 'object') {
      return;
    }

    // We want all methods on the `source` prototype chain
    const keys = getAllKeys(source, key => {
      if (['constructor'].includes(key)) {
        return false;
      }

      if (key.startsWith('_')) {
        return false;
      }

      if (typeof source[key] !== 'function') {
        return false;
      }

      if (target[key]) {
        return false;
      }

      return true;
    });

    keys.forEach(key => {
      // debug('proxy method', key);
      target[key] = function proxyMethod(...args) {
        const options = Array.from(args).pop() || {};
        const client = getClient(options.conn);
        const method = client[key];
        if (typeof method === 'function') {
          return method.apply(client, args);
        }

        throw new Error(`ForgeSDK.${key} is not supported in current connection`);
      };
    });
  };

  const sdk = {
    /**
     * Helper functions to do data encoding/decoding and did address generating
     *
     * @public
     * @see @arcblock/forge-util
     * @see @arcblock/did-util
     */
    Util: util,

    /**
     * Helper functions to manipulate wallets
     *
     * @public
     * @see @arcblock/forge-util
     * @see @arcblock/did-util
     */
    Wallet: wallet,

    /**
     * Helper functions to manipulate messages
     *
     * @public
     * @see @arcblock/forge-message
     */
    Message: message,

    /**
     * Connect to a forge grpc/graphql endpoint
     * Then switch the current connection of ForgeSDK to that connection
     *
     * @public
     * @function
     * @param {string} endpoint - endpoint url string
     * @param {object} options - connection config
     * @param {string} options.name - connection name
     * @param {string} options.default - set this connection as default?
     * @see GraphQLClient for methods available when connected to graphql endpoint
     * @see GRpcClient for methods available when connected to grpc endpoint
     */
    connect(endpoint, options = {}) {
      const parsed = url.parse(endpoint);
      parsed.protocol = (parsed.protocol || '').replace(/s?:$/, '');
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

      // Do not create duplication connections
      const name = options.name || endpoint;
      if (connections[name]) {
        return;
      }

      debug(`create connection ${endpoint}`);
      if (parsed.protocol === 'tcp') {
        const ForgeClient = clients.tcp;
        const client = new ForgeClient(Object.assign({ endpoint }, options));
        connections[name] = { name, client, options };
        wrapMethods(client, sdk);
      }

      if (['http', 'https'].includes(parsed.protocol)) {
        const ForgeClient = clients.http;
        const client = new ForgeClient(Object.assign({ endpoint }, options));
        connections[name] = { name, client, options };
        wrapMethods(client, sdk);
      }
    },
  };

  return sdk;
};

module.exports.getAllKeys = getAllKeys;
