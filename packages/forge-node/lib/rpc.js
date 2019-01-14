const grpc = require('grpc');
const camelcase = require('camelcase');
const { EventEmitter } = require('events');
const { messages, rpcs, getMessageType } = require('@arcblock/forge-proto');
const { decodeBinary, createMessage } = require('./util/message');
const debug = require('debug')(`${require('../package.json').name}:ForgeRpc`);

class ForgeRpc {
  constructor(config) {
    this.config = Object.assign({ enableBinaryDecoding: false }, config || {});
    debug('new', this.config);
    if (!this.config.sockGrpc) {
      throw new Error('ForgeRpc requires a valid `sockGrpc` to start');
    }

    this.initRpcClients();
    this.initRpcMethods();
  }

  initRpcClients() {
    const socket = this.config.sockGrpc.split('//').pop();
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
    const { requestStream = false, responseStream = false, requestType } = spec;

    debug('initRpcMethod', { method, requestStream, responseStream });

    let fn = null;
    // unary call, return Promise
    if (requestStream === false && responseStream === false) {
      fn = params =>
        new Promise((resolve, reject) => {
          const request = this.createRequest(requestType, params);
          rpc(request, this.createResponseHandler(method, resolve, reject));
        });

      // response streaming: return EventEmitter
    } else if (requestStream === false && responseStream) {
      fn = params => {
        const request = this.createRequest(requestType, params);
        const stream = rpc(request);
        const emitter = this.createStreamHandler(method, stream);
        return emitter;
      };

      // request streaming: return Promise
    } else if (requestStream && responseStream === false) {
      fn = params =>
        new Promise((resolve, reject) => {
          const request = this.createRequest(requestType, params);
          const stream = rpc(this.createResponseHandler(method, resolve, reject));
          stream.write(request);
          stream.end();
        });

      // request & response streaming: return EventEmitter
    } else {
      fn = params => {
        const request = this.createRequest(requestType, params);
        const stream = rpc();
        const emitter = this.createStreamHandler(method, stream);
        stream.write(request);
        stream.end();
        return emitter;
      };
    }

    fn.rpc = true;
    fn.meta = { group, requestStream, responseStream };

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
   * @memberof ForgeRpc
   */
  createRequest(type, _params) {
    const { fn: Message, fields } = getMessageType(type);
    if (!Message) {
      throw new Error(`Unsupported messageType: ${type}`);
    }
    if (!fields) {
      throw new Error(`Unsupported messageFields: ${type}`);
    }

    const request = createMessage(type, _params || {});
    debug('createRequest', { type, request: request.toObject() });
    return request;
  }

  /**
   * Create unary response handler
   *
   * @param {*} method
   * @param {*} resolve
   * @param {*} reject
   * @returns
   * @memberof ForgeRpc
   */
  createResponseHandler(method, resolve, reject) {
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

      return resolve(decodeBinary(res, this.config.enableBinaryDecoding));
    };
  }

  /**
   * Create stream response handler
   *
   * @param {*} method
   * @param {*} stream
   * @returns
   * @memberof ForgeRpc
   */
  createStreamHandler(method, stream) {
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
        emitter.emit('data', decodeBinary(res, this.config.enableBinaryDecoding));
      })
      .on('error', err => {
        emitter.emit('error', err);
      });

    return emitter;
  }
}

module.exports = ForgeRpc;
