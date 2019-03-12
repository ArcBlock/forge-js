const BaseClient = require('@arcblock/sdk-util');
const md5 = require('blueimp-md5');
const camelcase = require('camelcase');
const base64 = require('base64-url');
const { hexToBytes, bytesToHex, stripHexPrefix } = require('@arcblock/forge-util');
const { processSchema } = require('./protobuf');
const debug = require('debug')('forge-graphql-client');

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

    if (['getChainInfo', 'getAccountState', 'sendTx'].every(x => typeof this[x] === 'function')) {
      this._initTxMethods();
    }
  }

  getTxMethods() {
    return transactions.map(x => camelcase(`send_${x}`));
  }

  _initTxMethods() {
    const toHex = bytes => stripHexPrefix(bytesToHex(bytes)).toUpperCase();

    transactions.forEach(x => {
      const method = camelcase(`send_${x}`);

      /**
       * Generate an transaction sender function
       *
       * @param {object} { data, wallet } data is the itx object, and wallet is an Wallet instance
       * @returns Promise
       */
      const txSendFn = async ({ data, wallet }) => {
        // Determine sender address
        const address = wallet.toAddress();

        // Determine chainId
        const { info } = await this.getChainInfo();
        const chainId = info.network;

        // Determine nonce
        let nonce = 1;
        if (x !== 'DeclareTx') {
          const res = await this.getAccountState({ address });
          // console.log(`getAccountState.${address}`, res);
          if (!res.state) {
            throw new Error(
              `Address ${address} not declared on chain, please declare before send tx`
            );
          }
          nonce = res.state.nonce;
        }

        debug({
          pk: stripHexPrefix(wallet.publicKey).toUpperCase(),
          sk: stripHexPrefix(wallet.secretKey).toUpperCase(),
          address,
          nonce,
          chainId,
        });

        const Any = getType('google.protobuf.Any');
        const Transaction = getType('Transaction');
        const ItxType = getType(x);

        const itx = ItxType.fromObject(data);
        const itxBytes = ItxType.encode(itx).finish();
        debug({ itxBytes, itxHex: toHex(itxBytes) });

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

        const signature = wallet.sign(txToSignBytes);
        debug({
          txToSignBytes,
          txToSignHex: toHex(txToSignBytes),
          signature: stripHexPrefix(signature).toUpperCase(),
        });

        txObj.signature = Buffer.from(hexToBytes(signature));
        const tx = Transaction.fromObject(txObj);
        const txBytes = Transaction.encode(tx).finish();
        const txStr = base64.escape(Buffer.from(txBytes).toString('base64'));
        debug({ txBytes, txHex: toHex(txBytes), txStr });

        return this.sendTx({ tx: txStr });
      };

      txSendFn.__tx__ = method;
      this[method] = txSendFn;
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
