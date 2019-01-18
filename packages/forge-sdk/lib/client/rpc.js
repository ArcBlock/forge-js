const grpc = require('grpc');
const camelcase = require('camelcase');
const BN = require('bignumber.js');
const { EventEmitter } = require('events');
const { messages, transactions, rpcs, getMessageType } = require('@arcblock/forge-proto');
const {
  formatMessage,
  createMessage,
  attachFormatFn,
  attachExampleFn,
} = require('../util/message');
const debug = require('debug')(`${require('../../package.json').name}:Client`);

class Client {
  constructor(config) {
    this.config = config || {};
    debug('new', this.config);
    if (!this.config.forge.sockGrpc) {
      throw new Error('Client requires a valid `forge.sockGrpc` to start');
    }

    this._initRpcClients();
    this._initRpcMethods();
    this._initTxMethods();
  }

  /**
   * Arc is the smallest, infungible unit used for Forge Apps. If app define decimal as 16,
   * then 1 token (e.g. ABT) = 10^16 arc. When sending transfer tx or exchange tx,
   * the value shall be created with Arc.
   */
  fromArc(value) {
    return BN(value, 10)
      .div(BN(`1e${this.config.decimal || 16}`))
      .toString(10);
  }
  toArc(value) {
    return BN(value, 10)
      .times(BN(`1e${this.config.decimal || 16}`))
      .toString(10);
  }

  /**
   * Initialize grpc-node clients for each rpc service, lazy connection under the surface
   *
   * @memberof Client
   */
  _initRpcClients() {
    const socket = this.config.forge.sockGrpc.split('//').pop();
    this.clients = Object.keys(rpcs).reduce((acc, x) => {
      debug('initRpcClient', x);
      acc[x] = new rpcs[x](socket, grpc.credentials.createInsecure());
      return acc;
    }, {});
  }

  /**
   * Initialize standard rpc methods defined in protobuf
   *
   * @memberof Client
   */
  _initRpcMethods() {
    Object.keys(rpcs).forEach(x =>
      Object.keys(rpcs[x].methods).forEach(m => this._initRpcMethod(x, m))
    );
  }
  _initRpcMethod(group, method) {
    const client = this.clients[group];
    const rpc = client[method].bind(client);
    const spec = rpcs[group].methods[method];
    const { requestStream = false, responseStream = false, requestType, responseType } = spec;
    debug('_initRpcMethod', { method, requestStream, responseStream, requestType, responseType });

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
          const stream = rpc(
            this._createResponseHandler({ method, resolve, reject, responseType })
          );
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
    fn.meta = { group, requestStream, responseStream };
    fn.$format = data => formatMessage(responseType, data);
    attachExampleFn(requestType, fn, '$requestExample');
    attachExampleFn(responseType, fn, '$responseExample');

    this[camelcase(method)] = fn;
  }

  /**
   * List standard rpc methods
   *
   * @returns Object
   * @memberof Client
   */
  listRpcMethods() {
    return Object.keys(this)
      .filter(x => typeof this[x] === 'function' && this[x].rpc)
      .reduce((acc, x) => {
        acc[x] = this[x].meta;
        return acc;
      }, {});
  }

  /**
   * Generate shortcut methods for creating and sending transactions on all supported itx
   * With these shortcut methods, developers can sign/send with just one call
   *
   * @memberof Client
   */
  _initTxMethods() {
    const requiredRpcMethods = ['getAccountState', 'createTx', 'sendTx'];
    if (requiredRpcMethods.every(x => typeof this[x] === 'function' && this[x].rpc)) {
      transactions.forEach(x => this._initTxMethod(x));
    }
  }
  _initTxMethod(x) {
    const method = camelcase(`send_${x}`);
    debug('_initTxMethod', method);
    const fn = params =>
      new Promise(async (resolve, reject) => {
        try {
          params.itx = { type: x, value: params.itx };
          params.nonce = await this._getNonce(params);

          const { tx } = await this.createTx(params);
          const { hash } = await this.sendTx({
            tx,
            token: params.token,
            wallet: params.wallet,
            commit: params.commit,
          });

          resolve(hash);
        } catch (err) {
          console.error(err); // eslint-disable-line
          reject(new Error(`Tx failed ${method} with error: ${err.message}`));
        }
      });

    fn.tx = true;
    fn.itx = x;
    this[method] = fn;
  }

  /**
   * List standard rpc methods
   *
   * @returns Object
   * @memberof Client
   */
  listTxMethods() {
    return Object.keys(this)
      .filter(x => typeof this[x] === 'function' && this[x].tx)
      .reduce((acc, x) => {
        acc[x] = this[x].itx;
        return acc;
      }, {});
  }

  /**
   * Ensure we have an correct nonce set before sending transaction
   *
   * @param {*} params
   * @returns
   * @memberof Client
   */
  _getNonce(params) {
    if (typeof params.nonce === 'number') {
      return params.nonce;
    }

    return new Promise((resolve, reject) => {
      const stream = this.getAccountState({ address: params.from });
      stream.on('data', ({ state }) => resolve(state.nonce));
      stream.on('error', err => reject(err));
    });
  }

  /**
   * Create an request object from params object
   *
   * @param {String} requestType
   * @param {Object} [params={}]
   * @returns
   * @memberof Client
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
   * @param {*} method
   * @param {*} resolve
   * @param {*} reject
   * @returns
   * @memberof Client
   */
  _createResponseHandler({ method, resolve, reject, responseType }) {
    return (err, response) => {
      if (err) {
        return reject(err);
      }

      const res = response.toObject();
      if (res.code) {
        return reject(
          new Error(`gRPC response error: ${messages.StatusCode[res.code]}, method: ${method}`)
        );
      }

      attachFormatFn(responseType, res);
      return resolve(res);
    };
  }

  /**
   * Create stream response handler
   *
   * @param {*} method
   * @param {*} stream
   * @returns
   * @memberof Client
   */
  _createStreamHandler({ method, stream, responseType }) {
    const emitter = new EventEmitter();

    stream
      .on('data', response => {
        const res = response.toObject();
        if (res.code) {
          emitter.emit(
            'error',
            new Error(
              `gRPC stream response error: ${messages.StatusCode[res.code]}, method: ${method}`
            )
          );
          return;
        }

        attachFormatFn(responseType, res);
        emitter.emit('data', res);
      })
      .on('error', err => {
        emitter.emit('error', err);
      });

    return emitter;
  }
}

module.exports = Client;
