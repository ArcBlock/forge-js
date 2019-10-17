/* eslint-disable no-underscore-dangle */
const camelCase = require('lodash/camelCase');
const snakeCase = require('lodash/snakeCase');
const errorCodes = require('@arcblock/forge-proto/lib/status_code.json');
const { transactions, multiSignTxs } = require('@arcblock/forge-proto/lite');
const { createMessage, getMessageType } = require('@arcblock/forge-message/lite');
const { bytesToHex, toBase58, toBase64, toHex } = require('@arcblock/forge-util');

const debug = require('debug')(require('../package.json').name);

const GraphQLClientBase = require('./base');

// Alias methods
const aliases = {
  PokeTx: 'checkin',
};

/**
 * An http client that can read/write data to a forge powered blockchain node, can be used in both node.js and browser.
 *
 * Please note that, due to internal implementation of google-protobuf, all `repeated fields` names are suffixed with `List`
 *
 * @class
 * @example
 * const GraphQLClient = require('@arcblock/graphql-client');
 *
 * const client = new GraphQLClient('https://argon.abtnetwork.io/api');
 * // const client = new GraphQLClient({ endpoint: 'https://argon.abtnetwork.io/api' });
 *
 * const res = await client.getChainInfo();
 */
class GraphQLClient extends GraphQLClientBase {
  /**
   * Create an instance of GraphQLClient
   *
   * @constructor
   * @param {object|string} config - config object, if a string passed, will be used as the endpoint
   * @param {string} [config.endpoint='http://localhost:8210/api'] - the graphql endpoint
   * @param {string} [config.chainId=''] - the chainId of the network
   * @see GraphQLClient#getQueries
   * @see GraphQLClient#getMutations
   * @see GraphQLClient#getSubscriptions
   * @see GraphQLClient#getTxSendMethods
   * @see GraphQLClient#getTxEncodeMethods
   */
  constructor(config = 'http://localhost:8210/api') {
    super(config);
    this._initTxMethods();
  }

  /**
   * List all transaction send methods
   * Each method can send one kind of transactions supported by forge core, such as `DeclareTx`, `PokeTx`
   *
   * @method
   * @returns {Array<string>} method name list
   */
  getTxSendMethods() {
    return transactions.map(x => camelCase(`send_${x}`));
  }

  /**
   * List all transaction encode methods, each method can be used to encode transaction to buffer and object
   *
   * @method
   * @returns {Array<string>} method name list
   */
  getTxEncodeMethods() {
    return transactions.map(x => camelCase(`encode_${x}`));
  }

  /**
   * List all transaction sign methods, each method can be used to sign transaction to an object
   *
   * @method
   * @returns {Array<string>} method name list
   */
  getTxSignMethods() {
    return transactions.map(x => camelCase(`sign_${x}`));
  }

  /**
   * List all transaction multi sign methods, each method can be used to do multi sign a transaction
   *
   * @method
   * @returns {Array<string>} method name list
   */
  getTxMultiSignMethods() {
    return multiSignTxs.map(x => camelCase(`multi_sign_${x}`));
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
   * Decode transaction buffer to an object
   *
   * @method
   * @param {buffer} buffer
   * @returns {object} transaction object
   */
  decodeTx(buffer) {
    const Transaction = this.getType('Transaction');
    return Transaction.deserializeBinary(buffer).toObject();
  }

  _initTxMethods() {
    transactions.forEach(x => {
      /**
       * Encode a transaction
       *
       * @param {object} input
       * @param {object} input.tx - data of the transaction
       * @param {object} input.tx.itx - the actual transaction object
       * @param {object} [input.tx.from] - the sender address, can be derived from wallet
       * @param {object} [input.tx.nonce] - the tx nonce, defaults to Date.now if not set
       * @param {object} [input.tx.chainId] - the chainId
       * @param {object} [input.tx.signature] - the chainId
       * @param {object} [input.tx.signatures] - the chainId
       * @param {object} input.wallet - the wallet used to sign the transaction, either a forge managed wallet or user managed wallet
       * @param {object} input.delegatee - the wallet address that delegated permissions to the `input.wallet` address
       * @returns Promise
       */
      const txEncodeFn = async ({ tx, wallet, delegatee }) => {
        // Determine sender address
        const address = tx.from || wallet.toAddress();
        const pk = tx.pk || wallet.publicKey;

        // Determine chainId & nonce, only attach new one when not exist
        const nonce = typeof tx.nonce === 'undefined' ? Date.now() : tx.nonce;
        let chainId = tx.chainId || this._chainId;
        if (!chainId) {
          const { info } = await this.getChainInfo();
          chainId = info.network;
          this._chainId = chainId;
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
          from: tx.delegator ? address : delegatee || address,
          nonce,
          pk,
          chainId,
          signature: tx.signature || Buffer.from([]),
          signatures,
          delegator: tx.delegator || (delegatee ? address : ''),
          itx,
        });
        const txToSignBytes = txObj.serializeBinary();

        debug(`encodeTx.${x}.txObj`, txObj.toObject());

        return { object: txObj.toObject(), buffer: Buffer.from(txToSignBytes) };
      };

      const encodeMethod = camelCase(`encode_${x}`);
      txEncodeFn.__tx__ = encodeMethod;
      this[encodeMethod] = txEncodeFn;

      /**
       * Send a transaction
       *
       * @param {object} input
       * @param {object} input.tx - data of the transaction
       * @param {object} input.tx.itx - the actual transaction object
       * @param {object} [input.tx.from] - the sender address, can be derived from wallet
       * @param {object} [input.tx.nonce] - the tx nonce, defaults to Date.now if not set
       * @param {object} [input.tx.chainId] - the chainId
       * @param {object} [input.tx.signature] - the chainId
       * @param {object} [input.tx.signatures] - the chainId
       * @param {object} [input.commit=false] - whether we should wait for transaction commit
       * @param {object} input.wallet - the wallet used to sign the transaction, either a forge managed wallet or user managed wallet
       * @param {object} [input.signature] - the signature of the tx, if this parameter exist, we will not sign the transaction
       * @param {object} input.delegatee - the wallet address that delegated permissions to the `input.wallet` address
       * @returns Promise
       */
      const txSendFn = async ({ tx, wallet, signature, delegatee, commit = false }) => {
        let encoded;
        if (signature) {
          encoded = tx;
          encoded.signature = signature;
        } else if (tx.signature) {
          const res = await txEncodeFn({ tx, wallet, delegatee });
          encoded = res.object;
        } else {
          const res = await txEncodeFn({ tx, wallet, delegatee });
          // eslint-disable-next-line prefer-destructuring
          encoded = res.object;
          encoded.signature = wallet.sign(bytesToHex(res.buffer));
        }

        const txObj = createMessage('Transaction', encoded);
        const txBytes = txObj.serializeBinary();
        const txStr = toBase64(txBytes);
        debug(`sendTx.${x}.txObj`, txObj.toObject());

        return new Promise(async (resolve, reject) => {
          try {
            const { hash } = await this.sendTx({ tx: txStr, commit });
            resolve(hash);
          } catch (err) {
            if (Array.isArray(err.errors)) {
              const code = err.errors[0].message;
              if (errorCodes[code]) {
                const error = this._createResponseError(code, x);
                error.errors = err.errors;
                reject(error);
                return;
              }
            }

            reject(err);
          }
        });
      };

      const sendMethod = camelCase(`send_${x}`);
      txSendFn.__tx__ = sendMethod;
      this[sendMethod] = txSendFn;
      // Add alias
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
      txSignFn.__tx__ = signMethod;
      this[signMethod] = txSignFn;

      // TODO: verify existing signatures before adding new signatures
      // Generate transaction multi sign function
      if (multiSignTxs.includes(x)) {
        const txMultiSignFn = async ({ tx, wallet, delegatee, data, encoding = '' }) => {
          if (typeof wallet.toAddress !== 'function') {
            throw new Error('Multisig requires a valid wallet');
          }
          tx.signaturesList = tx.signatures || tx.signaturesList || [];
          tx.signaturesList.unshift({
            pk: wallet.publicKey,
            signer: wallet.toAddress(),
            delegator: delegatee || '',
            data,
          });

          const { object, buffer } = await txEncodeFn({ tx, wallet });
          object.signaturesList[0].signature = wallet.sign(bytesToHex(buffer));
          return _formatEncodedTx(object, encoding);
        };
        const multiSignMethod = camelCase(`multi_sign_${x}`);
        txMultiSignFn.__tx__ = multiSignMethod;
        this[multiSignMethod] = txMultiSignFn;
      }
    });
  }

  _createResponseError(code, method) {
    const type = snakeCase(method);
    const message = (errorCodes[code][type] || errorCodes[code].default || code).trim();
    const error = new Error(`${code}: ${message}`);
    error.code = code;
    error.type = type;
    return error;
  }
}

module.exports = GraphQLClient;
