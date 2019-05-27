/* eslint-disable no-console */
require('./.compiled/create_stock/javascript/index');

const moment = require('moment');
const Mcrypto = require('@arcblock/mcrypto');
const GraphqlClient = require('@arcblock/graphql-client');
const { toAssetAddress } = require('@arcblock/did-util');
const { fromTokenToUnit } = require('@arcblock/forge-util');
const { fromRandom, WalletType } = require('@arcblock/forge-wallet');

const endpoint = process.env.FORGE_API_HOST || 'http://127.0.0.1:8210'; // testnet

const client = new GraphqlClient(`${endpoint}/api`);
const sleep = timeout => new Promise(resolve => setTimeout(resolve, timeout));

const type = WalletType({
  role: Mcrypto.types.RoleType.ROLE_ACCOUNT,
  pk: Mcrypto.types.KeyType.ED25519,
  hash: Mcrypto.types.HashType.SHA3,
});

(async () => {
  try {
    const merchant = fromRandom(type);
    const customer = fromRandom(type);
    console.log({ merchant: merchant.toJSON(), customer: customer.toJSON() });

    // 1. declare merchant
    let res = await client.sendDeclareTx({
      tx: { itx: { moniker: 'merchant' } },
      wallet: merchant,
    });
    console.log('merchant declare tx', res);
    console.log('merchant view link', `${endpoint}/node/explorer/accounts/${merchant.toAddress()}`);

    // 2. create vendor machine
    const machine = {
      moniker: `Vending_Machine_${merchant.toAddress()}`,
      readonly: false, // if we want to update the machine, we should set this to false
      transferrable: false,
      data: {
        type: 'AssetFactory',
        value: {
          description: 'Unlimited Vending Machine',
          limit: 99999,
          price: {
            value: Buffer.from(fromTokenToUnit(1).toBuffer()),
          },
          template: JSON.stringify({ name: '{{name}}', brand: '{{brand}}' }),
          allowedSpecArgs: ['name', 'brand'],
          assetName: 'Stock',
          attributes: {
            transferrable: false,
          },
        },
      },
    };
    const assetAddress = toAssetAddress(machine);
    machine.address = assetAddress;
    res = await client.sendCreateAssetTx({ tx: { itx: machine }, wallet: merchant });
    console.log('factory template', machine.data.value.template);
    console.log('view machine state', `${endpoint}/node/explorer/assets/${assetAddress}`);
    console.log('create machine tx', `${endpoint}/node/explorer/txs/${res}`);

    // wait for machine state consolidates
    await sleep(3000);

    // 3. read machine
    const { state } = await client.getAssetState({ address: assetAddress });
    console.log('machine state', state);

    // 4. declare customer
    res = await client.sendDeclareTx({ tx: { itx: { moniker: 'customer' } }, wallet: customer });
    console.log('customer declare tx', res);
    console.log('customer view link', `${endpoint}/node/explorer/accounts/${customer.toAddress()}`);

    // 5. get some money
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
      wallet: customer,
    });
    console.log('poke tx', res);
    console.log('poke link', `${endpoint}/node/explorer/txs/${res}`);
    await sleep(3000);

    // 6. create good and its address
    const good = {
      ttl: 0,
      readonly: true,
      transferrable: false,
      parent: machine.address,
      data: {
        type: 'Stock',
        value: { name: 'Coca', brand: 'Pepsi' },
      },
    };
    const goodAddress = toAssetAddress(good);
    console.log('good value', good.data.value);

    // 7. acquire asset
    res = await client.sendAcquireAssetTx({
      tx: {
        itx: {
          to: machine.address,
          specs: [
            {
              address: goodAddress,
              data: JSON.stringify(good.data.value),
            },
          ],
        },
      },
      wallet: customer,
    });
    console.log('good spec', {
      address: goodAddress,
      data: JSON.stringify(good.data.value),
    });
    console.log('good address', goodAddress);
    console.log('acquire tx', res);
    console.log('acquire link', `${endpoint}/node/explorer/txs/${res}`);
  } catch (err) {
    console.error(err);
    console.log(JSON.stringify(err.errors));
  }
})();
