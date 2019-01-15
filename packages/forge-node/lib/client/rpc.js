const grpc = require('grpc');
const camelcase = require('camelcase');
const { EventEmitter } = require('events');
const { messages, rpcs, getMessageType } = require('@arcblock/forge-proto');
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

    this.initRpcClients();
    this.initRpcMethods();
  }

  initRpcClients() {
    const socket = this.config.forge.sockGrpc.split('//').pop();
    this.clients = Object.keys(rpcs).reduce((acc, x) => {
      debug('initRpcClient', x);
      acc[x] = new rpcs[x](socket, grpc.credentials.createInsecure());
      return acc;
    }, {});
  }

  initRpcMethods() {
    Object.keys(rpcs).forEach(x =>
      Object.keys(rpcs[x].methods).forEach(m => this.initRpcMethod(x, m))
    );
  }

  initRpcMethod(group, method) {
    const client = this.clients[group];
    const rpc = client[method].bind(client);
    const spec = rpcs[group].methods[method];
    const { requestStream = false, responseStream = false, requestType, responseType } = spec;
    debug('initRpcMethod', { method, requestStream, responseStream, requestType, responseType });

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
          const request = this._createRequest(requestType, params);
          const stream = rpc(
            this._createResponseHandler({ method, resolve, reject, responseType })
          );
          stream.write(request);
          stream.end();
        });

      // request & response streaming: return EventEmitter
    } else {
      fn = params => {
        const request = this._createRequest(requestType, params);
        const stream = rpc();
        const emitter = this._createStreamHandler({ method, stream, responseType });
        stream.write(request);
        stream.end();
        return emitter;
      };
    }

    fn.rpc = true;
    fn.meta = { group, requestStream, responseStream };
    fn.format = data => formatMessage(responseType, data);
    attachExampleFn(requestType, fn, '$requestExample');
    attachExampleFn(responseType, fn, '$responseExample');

    this[camelcase(method)] = fn;
  }

  listRpcMethods() {
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
