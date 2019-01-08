/* eslint no-console:"off" */
const grpc = require('grpc');
const camelcase = require('camelcase');
const { EventEmitter } = require('events');
const types = require('@arcblock/forge-proto/lib/type_pb');
const rpcTypes = require('@arcblock/forge-proto/lib/rpc_pb');
const rpcClients = require('@arcblock/forge-proto/lib/rpc_grpc_pb');
// const txTypes = require('@arcblock/forge-proto/lib/tx_pb');
// const eventTypes = require('@arcblock/forge-proto/lib/event_pb');
const eventClients = require('@arcblock/forge-proto/lib/event_grpc_pb');
const codeTypes = require('@arcblock/forge-proto/lib/code_pb');
// const abi = require('@arcblock/forge-proto/lib/rpc.pb').forge_abi;
const debug = require('debug')(require('./package.json').name);

const constants = Object.freeze({
  StatusCode: codeTypes.StatusCode,
  KeyType: types.KeyType,
  HashType: types.HashType,
  EncodingType: types.EncodingType,
  UpgradeAction: types.UpgradeAction,
  UpgradeType: types.UpgradeType,
});

// const encoders = Object.keys(abi).filter(x => x.includes('Request')).reduce((memo, x) => {
//   memo[x] = abi[x];
//   return memo;
// }, {});

// console.log(encoders);

const specs = Object.assign({}, rpcClients, eventClients);
const clients = Object.keys(specs)
  .filter(x => x.includes('Client'))
  .reduce((memo, x) => {
    memo[x] = new specs[x]('127.0.0.1:28210', grpc.credentials.createInsecure());

    return memo;
  }, {});

const sdk = Object.keys(specs)
  .filter(x => x.includes('Service'))
  .reduce((memo, x) => {
    Object.keys(specs[x]).forEach(m => {
      const client = clients[x.replace('Service', 'Client')];
      const method = camelcase(m);
      const spec = specs[x][m];
      const { requestStream, responseStream, requestType } = spec;

      const createRequest = (RequestType, params = {}) => {
        const request = new RequestType();
        if (params && typeof params === 'object') {
          // FIXME: support complex/nested types
          Object.keys(params).forEach(key => {
            const fn = camelcase(`set_${key}`);
            request[fn](params[key]);
          });
        }

        debug('createRequest', { method, request: request.toObject() });
        return request;
      };

      const createResponseHandler = (resolve, reject) => (err, response) => {
        if (err) {
          return reject(err);
        }

        const res = response.toObject();
        if (res.code) {
          return reject(new Error(`gRPC response error ${m} => ${method}, errorCode: ${res.code}`));
        }

        return resolve(res);
      };

      const wrapStreamResponse = stream => {
        const emitter = new EventEmitter();

        stream
          .on('data', function(response) {
            const res = response.toObject();
            if (res.code) {
              emitter.emit('error', new Error(`gRPC response error: ${res.code}`));
              return;
            }
            emitter.emit('data', res);
          })
          .on('error', err => {
            emitter.emit('error', err);
          });

        return emitter;
      };

      debug('generate', { method, requestStream, responseStream });

      // unary call, return Promise
      if (requestStream === false && responseStream === false) {
        memo[method] = params =>
          new Promise((resolve, reject) => {
            const request = createRequest(requestType, params);
            client[m](request, createResponseHandler(resolve, reject));
          });

        // response streaming: return EventEmitter, TODO: wrap stream handling?
      } else if (requestStream === false && responseStream) {
        memo[method] = params => {
          const request = createRequest(requestType, params);
          const stream = client[m](request);
          const emitter = wrapStreamResponse(stream);
          return emitter;
        };

        // request streaming: return Promise
      } else if (requestStream && responseStream === false) {
        memo[method] = params =>
          new Promise((resolve, reject) => {
            const request = createRequest(requestType, params);
            const stream = client[m](createResponseHandler(resolve, reject));
            stream.write(request);
            stream.end();
          });

        // request & response streaming: return EventEmitter
      } else {
        memo[method] = params => {
          const request = createRequest(requestType, params);
          const stream = client[m]();
          const emitter = wrapStreamResponse(stream);
          stream.write(request);
          stream.end();
          return emitter;
        };
      }

      memo[method].spec = spec;
    });
    return memo;
  }, {});

(async () => {
  try {
    const res = await sdk.getChainInfo();
    debug('chainInfo', res.info);

    const stream = sdk.getBlock({ height: 11 });
    stream
      .on('data', function({ block }) {
        debug('blockInfo:', block);
      })
      .on('error', err => {
        console.error('error', err);
      });
  } catch (err) {
    console.error('error', err);
  }
})();

// Send transaction
// function createWallet() {
//   const walletType = new types.WalletType();
//   walletType.setPk(constants.KeyType.SECP256K1);
//   walletType.setHash(constants.HashType.KECCAK);
//   walletType.setAddress(constants.EncodingType.BASE16);

//   const request = new rpcTypes.RequestCreateWallet();
//   request.setPassphrase('123456');
//   request.setType(walletType);
//   request.setMoniker('wangshijun');

//   const client = new rpcClients.WalletRpcClient(
//     '127.0.0.1:28210',
//     grpc.credentials.createInsecure()
//   );

//   client.create_wallet(request, (err, response) => {
//     if (err) {
//       return console.error(err);
//     }
//     const { code, token, wallet } = response.toObject();
//     if (code) {
//       throw new Error('wallet create error', code);
//     }
//     console.log('sessionToken:', token);
//     console.log('walletInfo:', wallet);
//   });
// }

// createWallet();
