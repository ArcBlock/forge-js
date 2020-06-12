/* eslint-disable no-underscore-dangle */
const grpc = require('@grpc/grpc-js');
const camelCase = require('lodash/camelCase');
const snakeCase = require('lodash/snakeCase');
const { EventEmitter } = require('events');
const { messages, rpcs } = require('@arcblock/forge-proto');
const { createExtensionMethods } = require('@arcblock/client-extension');
const {
  formatMessage,
  createMessage,
  attachFormatFn,
  attachExampleFn,
  getMessageType,
} = require('@arcblock/forge-message');
const errorCodes = require('@arcblock/forge-proto/lib/status_code.json');
// eslint-disable-next-line global-require
const debug = require('debug')(`${require('../package.json').name}`);

/**
 * An grpc client that can read/write data to a forge powered blockchain node, can be used only in node.js
 *
 * Please note that, due to internal implementation of google-protobuf, all `repeated fields` names are suffixed with `List`
 *
 * @class
 */
class GRpcClient {
  /**
   * Creates an instance of GRpcClient, and generate transaction sending and receiving methods
   *
   * @param {object|string} config - config object, if a string passed, will be used as the endpoint
   * @param {string} [config.endpoint="tcp://127.0.0.1:28210"] - grpc endpoint the client can connect to
   * @param {string} [config.chainId=""] - chainId used to construct transaction
   * @see GRpcClient.getRpcMethods
   */
  constructor(config = 'tcp://127.0.0.1:28210') {
    let endpoint = '';
    let chainId = '';
    if (typeof config === 'string') {
      endpoint = config;
    } else {
      // eslint-disable-next-line prefer-destructuring
      endpoint = config.endpoint;
      // eslint-disable-next-line prefer-destructuring
      chainId = config.chainId;
    }

    if (!endpoint) {
      throw new Error('GRpcClient requires a valid `endpoint` to initialize');
    }

    this._endpoint = endpoint;
    this._chainId = chainId;

    this._initRpcClients();
    this._initRpcMethods();

    createExtensionMethods(this, { encodeTxAsBase64: false });
  }

  /**
   * Initialize grpc-node clients for each rpc service, lazy connection under the surface
   *
   * @private
   */
  _initRpcClients() {
    const socket = this._endpoint.split('//').pop();
    this.clients = Object.keys(rpcs).reduce((acc, x) => {
      debug('initRpcClient', x);
      acc[x] = new rpcs[x](socket, grpc.credentials.createInsecure());
      return acc;
    }, {});
  }

  /**
   * Initialize standard rpc methods defined in protobuf
   *
   * @private
   */
  _initRpcMethods() {
    const groups = Object.keys(rpcs);
    groups.forEach(x => Object.keys(rpcs[x].methods).forEach(m => this._initRpcMethod(x, m)));
  }

  _initRpcMethod(group, method) {
    const client = this.clients[group];
    const rpc = client[method].bind(client);
    const spec = rpcs[group].methods[method];
    const { requestStream = false, responseStream = false, requestType, responseType } = spec;
    // debug('_initRpcMethod', { method, requestStream, responseStream, requestType, responseType });

    let fn = null;
    // unary call, return Promise
    if (requestStream === false && responseStream === false) {
      fn = params =>
        new Promise((resolve, reject) => {
          const request = this._createRequest(requestType, params);
          rpc(request, this._createResponseHandler({ method, resolve, reject, responseType }));
        });

      // response streaming: return EventEmitter
    } else if (requestStream === false && responseStream) {
      fn = params => {
        const request = this._createRequest(requestType, params);
        const stream = rpc(request);
        const emitter = this._createStreamHandler({ method, stream, responseType });
        return emitter;
      };

      // request streaming: return Promise
    } else if (requestStream && responseStream === false) {
      fn = params =>
        new Promise((resolve, reject) => {
          const stream = rpc(this._createResponseHandler({ method, resolve, reject, responseType }));
          (Array.isArray(params) ? params : [params]).forEach(x => {
            const request = this._createRequest(requestType, x);
            stream.write(request);
          });
          stream.end();
        });

      // request & response streaming: return EventEmitter
    } else {
      fn = params => {
        const stream = rpc();
        const emitter = this._createStreamHandler({ method, stream, responseType });
        (Array.isArray(params) ? params : [params]).forEach(x => {
          debug('stream request', { method, requestType, x });
          const request = this._createRequest(requestType, x);
          stream.write(request);
        });
        stream.end();
        return emitter;
      };
    }

    fn.rpc = true;
    fn.meta = { group, requestStream, responseStream, requestType, responseType };
    fn.$format = data => formatMessage(responseType, data);
    attachExampleFn(requestType, fn, '$requestExample');
    attachExampleFn(responseType, fn, '$responseExample');

    this[camelCase(method)] = fn;
  }

  /**
   * List standard rpc methods
   *
   * @returns {object}
   */
  getRpcMethods() {
    return Object.keys(this)
      .filter(x => typeof this[x] === 'function' && this[x].rpc)
      .reduce((acc, x) => {
        acc[x] = this[x].meta;
        return acc;
      }, {});
  }

  /**
   * Create an request object from params object
   *
   * @private
   * @param {String} requestType
   * @param {Object} [params={}]
   */
  _createRequest(type, _params) {
    const { fn: Message, fields } = getMessageType(type);
    if (!Message) {
      throw new Error(`Unsupported messageType: ${type}`);
    }
    if (!fields) {
      throw new Error(`Unsupported messageFields: ${type}`);
    }

    const request = createMessage(type, _params || {});
    debug('_createRequest', { type, request: request.toObject() });
    return request;
  }

  /**
   * Create unary response handler
   *
   * @private
   * @param {*} method
   * @param {*} resolve
   * @param {*} reject
   */
  _createResponseHandler({ method, resolve, reject, responseType }) {
    return (err, response) => {
      if (err) {
        return reject(err);
      }

      const res = response.toObject();
      debug('Rpc Response', method, res);
      if (res.code) {
        return reject(this._createResponseError(res.code, method));
      }

      attachFormatFn(responseType, res);
      return resolve(res);
    };
  }

  /**
   * Create stream response handler
   *
   * @private
   * @param {*} method
   * @param {*} stream
   */
  _createStreamHandler({ method, stream, responseType }) {
    const emitter = new EventEmitter();

    stream
      .on('data', response => {
        const res = response.toObject();
        if (res.code) {
          emitter.emit('error', this._createResponseError(res.code, method));
          return;
        }

        attachFormatFn(responseType, res);
        emitter.emit('data', res);
      })
      .on('error', err => emitter.emit('error', err))
      .on('close', () => emitter.emit('close', undefined))
      .on('end', () => emitter.emit('end', undefined));

    return emitter;
  }

  _createResponseError(status, method) {
    const code = messages.StatusCode[status].toLowerCase();
    if (errorCodes[code]) {
      const type = snakeCase(method);
      const message = (errorCodes[code][type] || errorCodes[code].default || code).trim();
      const error = new Error(`${method} failed with status ${code}, possible reason: ${message}`);
      error.code = code;
      error.type = type;
      return error;
    }

    const error = new Error(`gRPC response error: ${code}, method: ${method}`);
    error.errcode = code;
    error.errno = status;
    return error;
  }

  /**
   * Prepare an declare transaction when the chain has enabled restricted declare
   *
   * @memberof GRpcClient
   * @function
   * @param {object} params
   * @param {string} params.moniker - account moniker
   * @param {string} params.issuer - issuer address
   * @param {string} params.delegator - the delegator address
   * @param {WalletObject} params.wallet - the wallet that want to do the declare
   * @param {object} extra - other param to underlying client implementation
   * @returns {Promise} the `transaction` object once resolved
   */
  // prepareDeclareNode({ moniker, issuer, wallet, data, delegator = '' }, extra) {
  //   return this.signDeclareTx(
  //     {
  //       tx: {
  //         itx: {
  //           moniker,
  //           issuer,
  //           data,
  //         },
  //       },
  //       delegator,
  //       wallet,
  //     },
  //     extra
  //   );
  // }

  /**
   * Finalize an declare transaction using the issuer's account
   *
   * @memberof GRpcClient
   * @function
   * @param {object} params
   * @param {object} params.tx - the transaction object from `prepareExchange`
   * @param {string} params.delegator - who authorized this transaction
   * @param {object} params.data - extra data in the multi sig
   * @param {WalletObject} params.wallet - issuer's wallet
   * @param {object} extra - other param to underlying client implementation
   * @returns {Promise} the `transaction` object once resolved
   */
  // finalizeDeclareNode({ tx, delegator = '', data, wallet }, extra) {
  //   return this.multiSignDeclareTx(
  //     {
  //       tx,
  //       delegator,
  //       data,
  //       wallet,
  //     },
  //     extra
  //   );
  // }
}

module.exports = GRpcClient;
