/* eslint no-console:"off" */

/**
 * This script demonstrates how to declare account and get some free token for the account
 *
 * Run script with: `DEBUG=@arcblock/grpc-client node examples/get_free_token.js`
 */
const moment = require('moment');
const Mcrypto = require('@arcblock/mcrypto');
const GRpcClient = require('@arcblock/grpc-client');
const { fromRandom, WalletType } = require('@arcblock/forge-wallet');

const endpoint = 'http://localhost:8210';
const client = new GRpcClient({ endpoint: 'tcp://127.0.0.1:28210' });
const type = WalletType({
  role: Mcrypto.types.RoleType.ROLE_ACCOUNT,
  pk: Mcrypto.types.KeyType.ED25519,
  hash: Mcrypto.types.HashType.SHA3,
});

(async () => {
  try {
    const wallet = fromRandom(type);
    let res = await client.sendDeclareTx({
      tx: {
        itx: {
          moniker: `poke_user_${Math.round(Math.random() * 10000)}`,
          type,
        },
      },
      wallet,
    });

    console.log('declare.result', res);
    console.log('view account', `${endpoint}/node/explorer/accounts/${wallet.toAddress()}`);

    res = await client.sendPokeTx({
      tx: {
        nonce: 0,
        itx: {
          date: moment(new Date().toISOString())
            .utc()
            .format('YYYY-MM-DD'),
          address: 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
        },
      },
      wallet,
    });
    console.log('poke.result', res);
    console.log('view tx', `${endpoint}/node/explorer/txs/${res}`);
  } catch (err) {
    console.error(err);
    console.log(JSON.stringify(err.errors));
  }
})();
