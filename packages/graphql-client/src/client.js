/**
 * @fileOverview This module defines basic interface for an client that can interact with forge powered node
 * @module graphql-client
 */
const BaseClient = require('@arcblock/sdk-util');
const md5 = require('blueimp-md5');
const camelcase = require('camelcase');
const base64 = require('base64-url');
const { transactions, getMessageType } = require('@arcblock/forge-proto/lite');
const { createMessage } = require('@arcblock/forge-message/lite');
const { hexToBytes, bytesToHex, stripHexPrefix } = require('@arcblock/forge-util');

const debug = require('debug')(require('../package.json').name);

const graphqlSchema = require('./schema/graphql.json');

/**
 * An http client that can read/write data to a forge powered blockchain node, can be used in both node.js and browser.
 *
 * Please note that, due to internal implementation of google-protobuf, all `repeated fields` names are suffixed with `List`
 *
 * @class
 * @memberof graphql-client
 * @namespace GraphQLClient
 */
class GraphQLClient extends BaseClient {
  /**
   * Create an instance of GraphQLClient
   *
   * @constructor
   * @param {string} [httpEndpoint='http://localhost:8210/api']
   */
  constructor(httpEndpoint = 'http://localhost:8210/api') {
    super({
      dataSource: 'forge',
      httpEndpoint,
      enableQuery: true,
      enableSubscription: true,
      enableMutation: true,
      maxQueryDepth: 6,
    });

    this._initTxMethods();
  }

  getType(x) {
    return getMessageType(x).fn;
  }

  /**
   * List all transaction send methods, each method can send one kind of transactions supported by forge core, such as `DeclareTx`, `PokeTx`
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
       * @param {object} { data, wallet } data is the itx object, and wallet is an Wallet instance
       * @returns Promise
       */
      const txEncodeFn = async ({ data, wallet }) => {
        // Determine sender address
        const address = data.from || wallet.toAddress();
        const pk = data.pk || Uint8Array.from(hexToBytes(wallet.publicKey));

        // Determine chainId & nonce, only attach new one when not exist
        let nonce = typeof data.nonce === 'undefined' ? Date.now() : data.nonce;
        let chainId = data.chainId;
        if (!chainId) {
          const { info } = await this.getChainInfo();
          chainId = info.network;
        }

        // Determine signatures for multi sig
        let signatures = [];
        if (Array.isArray(data.signatures)) {
          signatures = data.signatures;
        }
        if (Array.isArray(data.signaturesList)) {
          signatures = data.signaturesList;
        }

        const txObj = {
          from: address,
          nonce,
          pk,
          chainId,
          signature: data.signature || '',
          signatures,
          itx: {
            type: x,
            value: data,
          },
        };

        const tx = createMessage('Transaction', txObj);
        const txToSignBytes = tx.serializeBinary();
        debug(`encodeTx.${x}.txObj`, tx.toObject());
        debug(`encodeTx.${x}.txBytes`, txToSignBytes.toString());
        debug(`encodeTx.${x}.txHex`, toHex(txToSignBytes));

        return { object: tx.toObject(), buffer: Uint8Array.from(txToSignBytes) };
      };

      const encodeMethod = camelcase(`encode_${x}`);
      txEncodeFn.__tx__ = encodeMethod;
      this[encodeMethod] = txEncodeFn;

      /**
       * Generate an transaction sender function
       *
       * @param {object} input - input used to construct the transaction
       * @param {object} input.data - should be the itx object in most simple case
       * @param {object} input.wallet - should be a wallet instance constructed using `Wallet`
       * @param {object} input.signature - the signature of the tx, if this parameter exist, we will not sign the transaction
       * @returns Promise
       */
      const txSendFn = async ({ data, wallet, signature }) => {
        let txObj;
        if (signature) {
          txObj = data;
          txObj.signature = Uint8Array.from(hexToBytes(signature));
          debug(`sendTx.${x}.hasSignature`, txObj);
        } else {
          const { object, buffer: txToSignBytes } = await txEncodeFn({ data, wallet });
          const signature = wallet.sign(bytesToHex(txToSignBytes));
          txObj = object;
          txObj.signature = Uint8Array.from(hexToBytes(signature));
        }

        const tx = createMessage('Transaction', txObj);
        const txBytes = tx.serializeBinary();
        const txStr = base64.escape(Buffer.from(txBytes).toString('base64'));
        debug(`sendTx.${x}.txObj`, tx.toObject());
        debug(`sendTx.${x}.txBytes`, txBytes.toString());
        debug(`sendTx.${x}.txHex`, toHex(txBytes));
        debug(`sendTx.${x}.txB64`, txStr);

        return this.sendTx({ tx: txStr });
      };

      const sendMethod = camelcase(`send_${x}`);
      txSendFn.__tx__ = sendMethod;
      this[sendMethod] = txSendFn;
    });
  }

  _getSchema() {
    return graphqlSchema;
  }

  _getIgnoreFields() {
    return [];
  }

  _getQueryId(query) {
    return md5(query);
  }
}

module.exports = GraphQLClient;
