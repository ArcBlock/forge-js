/* eslint-disable no-underscore-dangle */
const grpc = require('grpc');
const camelCase = require('lodash/camelCase');
const snakeCase = require('lodash/snakeCase');
const { EventEmitter } = require('events');
const { messages, enums, rpcs, multiSignTxs } = require('@arcblock/forge-proto');
const {
  formatMessage,
  createMessage,
  attachFormatFn,
  attachExampleFn,
  getMessageType,
} = require('@arcblock/forge-message');
const errorCodes = require('@arcblock/forge-proto/lib/status_code.json');
const {
  hexToBytes,
  bytesToHex,
  toBase58,
  toBase64,
  toBuffer,
  toHex,
  fromTokenToUnit,
  fromUnitToToken,
} = require('@arcblock/forge-util');
// eslint-disable-next-line global-require
const debug = require('debug')(`${require('../package.json').name}`);

// Alias methods
const aliases = {
  PokeTx: 'checkin',
};

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
   * @see GRpcClient.getTxSendMethods
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
    this._initTxMethods();
  }

  /**
   * Format big number presentation amount to token number
   *
   * @param {string} value
   * @returns {string}
   */
  async fromUnitToToken(value) {
    const { token } = await this._ensureContext();
    return fromUnitToToken(value, token.decimal);
  }

  /**
   * Encode amount to corresponding token big number presentation
   *
   * @param {number} amount
   * @returns {BN}
   */
  async fromTokenToUnit(amount) {
    const { token } = await this._ensureContext();
    return fromTokenToUnit(amount, token.decimal);
  }

  /**
   * Converts a relative locktime to absolute locktime
   *
   * @param {number} number - number of blocks want to lock
   * @returns {number}
   */
  async toLocktime(number) {
    const { info } = await this.getChainInfo();
    return +info.blockHeight + number;
  }

  /**
   * Get protobuf message class by name, only supports forge-built-in types
   *
   * @method
   * @param {string} x
   * @returns {class|null} message type
   */
  getType(x) {
    return getMessageType(x).fn;
  }

  /**
   * Decode transaction buffer/base64/base58 to an object
   *
   * @method
   * @param {buffer|hex|base48|base64} input
   * @returns {object} transaction object
   */
  decodeTx(input) {
    const Transaction = this.getType('Transaction');
    return Transaction.deserializeBinary(toBuffer(input)).toObject();
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
   * Generate shortcut methods for creating and sending transactions on all supported itx
   * With these shortcut methods, developers can sign/send with just one call
   *
   * @private
   */
  _initTxMethods() {
    // Unify a client wallet | forge managed wallet
    const getWallet = wallet => {
      if (typeof wallet.toAddress === 'function') {
        return {
          address: wallet.toAddress(),
          publicKey: Uint8Array.from(hexToBytes(wallet.publicKey)),
        };
      }

      return {
        address: wallet.address,
        publicKey: wallet.pk || wallet.publicKey || '',
      };
    };

    enums.SupportedTxs.forEach(x => {
      /**
       * Generate an transaction encoding function
       *
       * @param {object} input
       * @param {object} input.tx - data of the transaction
       * @param {object} input.tx.itx - the actual transaction object
       * @param {object} [input.tx.from] - the sender address, can be derived from wallet
       * @param {object} [input.tx.nonce] - the tx nonce, defaults to Date.now if not set
       * @param {object} [input.tx.chainId] - the chainId
       * @param {object} [input.tx.signature] - the signature
       * @param {object} [input.tx.signatures] - the signature list, should be set when it's a multisig transaction
       * @param {object} input.wallet - the wallet used to sign the transaction, either a forge managed wallet or user managed wallet
       * @param {object} input.delegatee - the wallet address that delegated permissions to the `input.wallet` address
       * @returns Promise
       */
      const txEncodeFn = async ({ tx, wallet, delegatee }) => {
        const w = getWallet(wallet);

        // Determine sender address
        const address = tx.from || w.address || '';
        const pk = tx.pk || w.publicKey || '';

        // Determine chainId & nonce, only attach new one when not exist
        const nonce = typeof tx.nonce === 'undefined' ? Date.now() : tx.nonce;
        let chainId = tx.chainId || this._chainId;
        if (!chainId) {
          const { info } = await this.getChainInfo();
          chainId = info.network;
        }

        // Determine signatures for multi sig
        let signatures = [];
        if (Array.isArray(tx.signatures)) {
          // eslint-disable-next-line prefer-destructuring
          signatures = tx.signatures;
        }
        if (Array.isArray(tx.signaturesList)) {
          signatures = tx.signaturesList;
        }

        // Determine itx
        let itx = null;
        if (tx.itx.typeUrl && tx.itx.value) {
          // eslint-disable-next-line prefer-destructuring
          itx = tx.itx;
        } else {
          itx = { type: x, value: tx.itx };
        }

        const txObj = createMessage('Transaction', {
          from: delegatee || address,
          nonce,
          pk,
          chainId,
          delegator: delegatee ? address : '',
          signature: tx.signature || '',
          signatures,
          itx,
        });
        const txToSignBytes = txObj.serializeBinary();

        debug(`encodeTx.${x}.txObj`, txObj.toObject());
        return { object: txObj.toObject(), buffer: Uint8Array.from(txToSignBytes) };
      };

      const encodeMethod = camelCase(`encode_${x}`);
      txEncodeFn.__type__ = 'encode';
      txEncodeFn.__tx__ = encodeMethod;
      txEncodeFn.__itx__ = x;
      this[encodeMethod] = txEncodeFn;

      /**
       * Generate an transaction sender function
       *
       *
       * @param {object} input
       * @param {object} input.tx - data of the transaction
       * @param {object} input.tx.itx - the actual transaction object
       * @param {object} [input.tx.from] - the sender address, can be derived from wallet
       * @param {object} [input.tx.nonce] - the tx nonce, defaults to Date.now if not set
       * @param {object} [input.tx.chainId] - the chainId
       * @param {object} [input.tx.signature] - the signature
       * @param {object} [input.tx.signatures] - the signature list, should be set when it's a multisig transaction
       * @param {object} input.wallet - the wallet used to sign the transaction, either a forge managed wallet or user managed wallet
       * @param {object} [input.signature] - the signature of the tx, if this parameter exist, we will not sign the transaction
       * @param {object} [input.commit=false] - whether we should wait for transaction commit
       * @param {object} [input.token=''] - token to unlock wallet
       * @param {object} input.delegatee - the wallet address that delegated permissions to the `input.wallet` address
       * @returns Promise
       */
      const txSendFn = async input => {
        const { tx, wallet, delegatee, signature = '', token = '', commit = false } = input;

        let txResult;
        let walletResult = wallet;

        // Native wallet
        if (wallet && typeof wallet.sign === 'function') {
          if (signature) {
            tx.signature = signature;
            txResult = tx;
          } else if (tx.signature) {
            txResult = tx;
          } else {
            const { object, buffer: txToSignBytes } = await txEncodeFn({ tx, wallet, delegatee });
            txResult = object;
            txResult.signature = wallet.sign(bytesToHex(txToSignBytes));
            debug(`send.${x}.sign`, txResult.signature);
          }

          // since we have signed the tx, wallet is not required when sent the tx
          walletResult = undefined;
        } else {
          const txParams = {
            itx: { type: x, value: tx.itx },
            nonce: Date.now(),
            chainId: this._chainId,
            wallet: walletResult,
            token: input.token,
          };

          const keys = ['from', 'pk', 'chainId', 'signature', 'signatures', 'nonce'];
          keys.forEach(k => {
            if (typeof tx[k] !== 'undefined') {
              txParams[k] = tx[k];
            }
          });

          if (!txParams.chainId) {
            const { info } = await this.getChainInfo();
            txParams.chainId = info.network;
          }

          debug(`${x}.create.params`, tx, txParams);
          const result = await this.createTx(txParams);
          debug(`${x}.create.result`, result);
          txResult = result.tx;
        }

        // Create tx using rpc, sign the transaction using forge
        return new Promise(async (resolve, reject) => {
          try {
            const sendParams = { tx: txResult, token, commit };
            if (walletResult) {
              sendParams.wallet = walletResult;
            }

            debug(`send.${x}.do`, sendParams);
            const { hash } = await this.sendTx(sendParams);
            resolve(hash);
          } catch (err) {
            reject(err);
          }
        });
      };

      const sendMethod = camelCase(`send_${x}`);
      txSendFn.__type__ = 'send';
      txSendFn.__tx__ = sendMethod;
      txSendFn.__itx__ = x;
      this[sendMethod] = txSendFn;

      if (aliases[x]) {
        this[aliases[x]] = txSendFn;
      }

      const _formatEncodedTx = async (tx, encoding) => {
        if (encoding) {
          const { buffer: txBytes } = await txEncodeFn({ tx });
          if (encoding === 'base64') {
            return toBase64(txBytes);
          }
          if (encoding === 'base58') {
            return toBase58(txBytes);
          }
          if (encoding === 'base16' || encoding === 'hex') {
            return toHex(txBytes);
          }
          return txBytes;
        }

        return tx;
      };

      // Generate transaction signing function
      const txSignFn = async ({ tx, wallet, delegatee, encoding = '' }) => {
        if (tx.signature) {
          delete tx.signature;
        }

        const { object, buffer } = await txEncodeFn({ tx, wallet, delegatee });
        object.signature = wallet.sign(buffer);

        return _formatEncodedTx(object, encoding);
      };
      const signMethod = camelCase(`sign_${x}`);
      txSignFn.__type__ = 'sign';
      txSignFn.__tx__ = signMethod;
      txSignFn.__itx__ = x;
      this[signMethod] = txSignFn;

      // TODO: verify existing signatures before adding new signatures
      // Generate transaction multi sign function
      if (multiSignTxs.includes(x)) {
        const txMultiSignFn = async ({ tx, wallet, delegatee, encoding = '' }) => {
          tx.signatures = tx.signatures || tx.signaturesList || [];
          tx.signatures.unshift({
            pk: wallet.publicKey,
            signer: wallet.toAddress(),
          });

          const { object, buffer } = await txEncodeFn({ tx, wallet, delegatee });
          object.signaturesList[0].signature = wallet.sign(bytesToHex(buffer));
          return _formatEncodedTx(object, encoding);
        };
        const multiSignMethod = camelCase(`multi_sign_${x}`);
        txMultiSignFn.__type__ = 'multiSign';
        txMultiSignFn.__tx__ = multiSignMethod;
        txMultiSignFn.__itx__ = x;
        this[multiSignMethod] = txMultiSignFn;
      }
    });
  }

  /**
   * List generated transaction send methods
   *
   * @returns {object}
   */
  getTxSendMethods() {
    return this._filterTxMethods('send');
  }

  /**
   * List generated transaction send methods
   *
   * @returns {object}
   */
  getTxEncodeMethods() {
    return this._filterTxMethods('encode');
  }

  /**
   * List generated transaction sign methods
   *
   * @returns {object}
   */
  getTxSignMethods() {
    return this._filterTxMethods('sign');
  }

  /**
   * List generated transaction multi sign methods
   *
   * @returns {object}
   */
  getTxMultiSignMethods() {
    return this._filterTxMethods('multiSign');
  }

  _filterTxMethods(type) {
    return Object.keys(this)
      .filter(x => typeof this[x] === 'function' && this[x].__type__ === type)
      .reduce((acc, x) => {
        acc[x] = this[x].__itx__;
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
   * Ensure a connection is bootstrapped with some meta info fetched from chain node
   *
   * @private
   * @param {string} [conn=undefined]
   * @returns {object}
   */
  async _ensureContext() {
    if (!this.context) {
      const [{ state }, { info }] = await Promise.all([this.getForgeState(), this.getChainInfo()]);

      this.context = {
        token: state.token,
        poke: state.txConfig.poke,
        chainId: info.network,
      };
    }

    return this.context;
  }
}

module.exports = GRpcClient;
