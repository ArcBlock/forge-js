/* eslint-disable no-underscore-dangle */
const camelcase = require('camelcase');
const base64 = require('base64-url');
const { transactions } = require('@arcblock/forge-proto/lite');
const { createMessage, getMessageType } = require('@arcblock/forge-message/lite');
const { bytesToHex, stripHexPrefix } = require('@arcblock/forge-util');

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
    Object.freeze(this);
  }

  /**
   * List all transaction send methods
   * Each method can send one kind of transactions supported by forge core, such as `DeclareTx`, `PokeTx`
   *
   * @method
   * @returns {Array<string>} method name list
   */
  getTxSendMethods() {
    return transactions.map(x => camelcase(`send_${x}`));
  }

  /**
   * List all transaction encode methods, each method can be used to encode transaction to buffer and object
   *
   * @method
   * @returns {Array<string>} method name list
   */
  getTxEncodeMethods() {
    return transactions.map(x => camelcase(`encode_${x}`));
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
    const toHex = bytes => stripHexPrefix(bytesToHex(bytes)).toUpperCase();

    transactions.forEach(x => {
      /**
       * Generate an transaction encoding function
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
       * @returns Promise
       */
      const txEncodeFn = async ({ tx, wallet }) => {
        // Determine sender address
        const address = tx.from || wallet.toAddress();
        const pk = tx.pk || wallet.publicKey;

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

        const txObj = createMessage('Transaction', {
          from: address,
          nonce,
          pk,
          chainId,
          signature: tx.signature || Buffer.from([]),
          signatures,
          itx: {
            type: x,
            value: tx.itx,
          },
        });
        const txToSignBytes = txObj.serializeBinary();

        debug(`encodeTx.${x}.txObj`, txObj.toObject());
        debug(`encodeTx.${x}.txHex`, toHex(txToSignBytes));

        return { object: txObj.toObject(), buffer: Buffer.from(txToSignBytes) };
      };

      const encodeMethod = camelcase(`encode_${x}`);
      txEncodeFn.__tx__ = encodeMethod;
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
       * @param {object} [input.tx.signature] - the chainId
       * @param {object} [input.tx.signatures] - the chainId
       * @param {object} input.wallet - the wallet used to sign the transaction, either a forge managed wallet or user managed wallet
       * @param {object} [input.signature] - the signature of the tx, if this parameter exist, we will not sign the transaction
       * @returns Promise
       */
      const txSendFn = async ({ tx, wallet, signature }) => {
        let encoded;
        if (signature) {
          encoded = tx;
          encoded.signature = signature;
          debug(`sendTx.${x}.hasSignature`, encoded);
        } else {
          const res = await txEncodeFn({ tx, wallet });
          // eslint-disable-next-line prefer-destructuring
          encoded = res.object;
          encoded.signature = wallet.sign(bytesToHex(res.buffer));
        }

        const txObj = createMessage('Transaction', encoded);
        const txBytes = txObj.serializeBinary();
        const txStr = base64.escape(Buffer.from(txBytes).toString('base64'));
        debug(`sendTx.${x}.txObj`, txObj.toObject());
        debug(`sendTx.${x}.txHex`, toHex(txBytes));
        debug(`sendTx.${x}.txB64`, txStr);

        return new Promise(async (resolve, reject) => {
          try {
            const { hash } = await this.sendTx({ tx: txStr });
            resolve(hash);
          } catch (err) {
            reject(err);
          }
        });
      };

      const sendMethod = camelcase(`send_${x}`);
      txSendFn.__tx__ = sendMethod;
      this[sendMethod] = txSendFn;

      if (aliases[x]) {
        this[aliases[x]] = txSendFn;
      }
    });
  }
}

module.exports = GraphQLClient;
