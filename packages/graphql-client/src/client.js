const BaseClient = require('@arcblock/sdk-util');
const md5 = require('blueimp-md5');
const camelcase = require('camelcase');
const base64 = require('base64-url');
const { hexToBytes, bytesToHex, stripHexPrefix } = require('@arcblock/forge-util');
const { processSchema } = require('./protobuf');
const debug = require('debug')(require('../package.json').name);

const graphqlSchema = require('./schema/graphql.json');
const protobufSchema = require('./schema/protobuf.json');
const { transactions, typeUrls, getType } = processSchema(protobufSchema);

class GraphqlClient extends BaseClient {
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
    return getType(x);
  }

  getTxSendMethods() {
    return transactions.map(x => camelcase(`send_${x}`));
  }

  getTxEncodeMethods() {
    return transactions.map(x => camelcase(`encode_${x}`));
  }

  decodeTx(buffer) {
    const Transaction = getType('Transaction');
    return Transaction.decode(buffer);
  }

  _initTxMethods() {
    const toHex = bytes => stripHexPrefix(bytesToHex(bytes)).toUpperCase();

    transactions.forEach(x => {
      const Any = getType('google.protobuf.Any');
      const Transaction = getType('Transaction');

      /**
       * Generate an transaction encoding function
       *
       * @param {object} { data, wallet } data is the itx object, and wallet is an Wallet instance
       * @returns Promise
       */
      const txEncodeFn = async ({ data, wallet }) => {
        // Determine sender address
        const address = data.from || wallet.toAddress();

        // Determine chainId & nonce, only attach new one when not exist
        let nonce = data.nonce || Date.now();
        let chainId = data.chainId;
        if (!chainId) {
          const { info } = await this.getChainInfo();
          chainId = info.network;
        }

        const ItxType = getType(x);

        const itx = ItxType.fromObject(data);
        const itxBytes = ItxType.encode(itx).finish();
        debug({ itx, itxBytes, itxHex: toHex(itxBytes) });

        const txObj = {
          from: address,
          nonce,
          chainId: chainId,
          itx: Any.fromObject({
            type_url: typeUrls[x],
            value: itxBytes,
          }),
        };

        const txToSign = Transaction.fromObject(txObj);
        const txToSignBytes = Transaction.encode(txToSign).finish();

        return { object: txObj, buffer: txToSignBytes };
      };

      const encodeMethod = camelcase(`encode_${x}`);
      txEncodeFn.__tx__ = encodeMethod;
      this[encodeMethod] = txEncodeFn;

      /**
       * Generate an transaction sender function
       *
       * @param {object} { data, wallet } data is the itx object, and wallet is an Wallet instance
       * @returns Promise
       */
      const txSendFn = async ({ data, wallet, signature }) => {
        let txObj;
        if (signature) {
          txObj = data;
          txObj.signature = Buffer.from(hexToBytes(signature));
        } else {
          const { object, buffer: txToSignBytes } = await txEncodeFn({ data, wallet });
          const signature = wallet.sign(bytesToHex(txToSignBytes));
          txObj = object;
          txObj.signature = Buffer.from(hexToBytes(signature));
        }

        const tx = Transaction.fromObject(txObj);
        const txBytes = Transaction.encode(tx).finish();
        const txStr = base64.escape(Buffer.from(txBytes).toString('base64'));
        debug({ tx, txBytes, txHex: toHex(txBytes), txStr });

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

module.exports = GraphqlClient;
