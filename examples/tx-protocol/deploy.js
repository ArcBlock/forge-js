/* eslint-disable no-console */
// const fs = require('fs');
// const path = require('path');
const base64 = require('base64-url');
const Mcrypto = require('@arcblock/mcrypto');
const GRpcClient = require('@arcblock/grpc-client');
const provider = require('@arcblock/forge-proto/provider');
const { addProvider } = require('@arcblock/forge-message');
const { fromSecretKey, WalletType } = require('@arcblock/forge-wallet');
const types = require('./gen_js/protocol_pb');
const json = require('./gen_js/protocol.json');
addProvider(provider(types, json));

const endpoint = 'http://127.0.0.1:8210';
const client = new GRpcClient({ endpoint: 'tcp://127.0.0.1:28210' });

const type = WalletType({
  role: Mcrypto.types.RoleType.ROLE_ACCOUNT,
  pk: Mcrypto.types.KeyType.ED25519,
  hash: Mcrypto.types.HashType.SHA3,
});

(async () => {
  try {
    const moderator = fromSecretKey(process.env.FORGE_MODERATOR_SK, type);
    const address = moderator.toAddress();

    console.log({ moderator: address });

    const stream = await client.getAccountState({ address });
    stream.on('data', async ({ state }) => {
      // 1. declare owner
      if (!state) {
        const hash = await client.sendDeclareTx({
          tx: {
            itx: {
              moniker: 'moderator',
            },
          },
          wallet: moderator,
        });
        console.log('moderator declare tx', hash);
        console.log('moderator view link', `${endpoint}/node/explorer/accounts/${address}`);
      }

      const itxB64 = base64.unescape(
        require('./GEN/create_stock/create_stock.itx.json').create_stock
      );
      console.log(itxB64);
      const itxBuffer = Buffer.from(itxB64, 'base64');
      console.log(itxBuffer);
      const DeployProtocolTx = client.getType('DeployProtocolTx');
      const itxObj = DeployProtocolTx.deserializeBinary(itxBuffer);
      console.log(itxObj.toObject());

      const hash = await client.sendDeployProtocolTx({
        tx: { itx: itxObj },
        wallet: moderator,
      });
      console.log('protocol deploy tx', hash);
      console.log('protocol deploy link', `${endpoint}/node/explorer/txs/${hash}`);
    });
  } catch (err) {
    console.error(err);
    console.log(JSON.stringify(err.errors));
  }
})();
