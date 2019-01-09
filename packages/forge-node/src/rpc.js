const grpc = require('grpc');
const camelcase = require('camelcase');
const { get } = require('lodash');
const { EventEmitter } = require('events');
const {
  enums,
  messages,
  rpcs,
  clients,
  types,
  vendorTypes,
  spec,
} = require('@arcblock/forge-proto');
const debug = require('debug')(`${require('../package.json').name}:grpc`);
const { decodeBinary } = require('./util');

// TODO: Due to limitations of protobuf, some types of data are base64 encoded from response
// - BigUint & BigSint
// - bytes
// - google.protobuf.Timestamp
// - google.protobuf.Any

class ForgeRpc {
  constructor(config) {
    this.config = Object.assign({ enableBinaryDecoding: false }, config || {});
    this.initRpcClients();
    this.initRpcMethods();
  }

  initRpcClients() {
    this.clients = Object.keys(clients).reduce((acc, x) => {
      // TODO: use forge.socket_grpc from config
      acc[x] = new clients[x]('127.0.0.1:28210', grpc.credentials.createInsecure());

      return acc;
    }, {});
  }

  initRpcMethods() {
    Object.keys(rpcs).forEach(x => Object.keys(rpcs[x]).forEach(m => this.initRpcMethod(x, m)));
  }

  initRpcMethod(group, method) {
    const client = this.clients[group];
    const rpc = client[method].bind(client);
    const { requestStream = false, responseStream = false, requestType } = rpcs[group][method];

    debug('generate', { method, requestStream, responseStream });

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

    this[camelcase(method)] = fn;
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
    const RequestMessage = types[type] || vendorTypes[type];
    if (!RequestMessage) {
      throw new Error(`Unsupported requestType: ${type}`);
    }
    const messageSpec = spec[type];
    if (!messageSpec) {
      throw new Error(`Unsupported messageSpec: ${type}`);
    }

    const params = _params || {};
    const request = this.createMessage(RequestMessage, messageSpec.fields, params);
    debug('createRequest', { type, request: request.toObject() });
    return request;
  }

  createMessage(Message, fields, params) {
    const message = new Message();
    const enumTypes = Object.keys(enums);
    Object.keys(fields).forEach(key => {
      const value = params[key];
      const { type, rule } = fields[key]; // FIXME: support repeated
      if (value === undefined) {
        return;
      }

      const set = camelcase(`set_${key}`);
      // enum types
      if (enumTypes.includes(type)) {
        message[set](value);
        return;
      }

      // FIXME: google builtin types
      if (type === 'google.protobuf.Timestamp') {
        return;
      }
      if (type === 'google.protobuf.Any') {
        return;
      }

      const SubMessage = get(types, type) || get(vendorTypes, type);
      // complex types
      if (SubMessage) {
        const subMessageSpec = get(spec, type);
        if (!subMessageSpec || !subMessageSpec.fields) {
          throw new Error(`Unsupported subMessageSpec: ${type}`);
        }

        const subMessage = this.createMessage(SubMessage, subMessageSpec.fields, value);
        message[set](subMessage);
        return;
      }

      // primitive types
      message[set](value);
    });

    return message;
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
