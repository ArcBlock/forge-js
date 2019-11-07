/* eslint-disable prefer-const */
/* eslint-disable no-console */
require('./contract/.compiled/create_product/javascript/index');

const GraphqlClient = require('@arcblock/graphql-client');
const { fromRandom } = require('@arcblock/forge-wallet');

const endpoint = process.env.FORGE_API_HOST || 'http://127.0.0.1:8210'; // testnet

const client = new GraphqlClient(`${endpoint}/api`);
const sleep = timeout => new Promise(resolve => setTimeout(resolve, timeout));

(async () => {
  try {
    const merchant = fromRandom();
    const customer = fromRandom();
    console.log({ merchant: merchant.toAddress(), customer: customer.toAddress() });

    // 1. declare merchant
    let hash = await client.declare({ moniker: 'merchant', wallet: merchant });
    console.log('merchant declare tx', hash);
    console.log('merchant view link', `${endpoint}/node/explorer/accounts/${merchant.toAddress()}`);

    // 2. create vendor machine
    let factoryAddress;
    [hash, factoryAddress] = await client.createAssetFactory({
      moniker: `Vending_Machine_${merchant.toAddress()}`,
      readonly: false, // if we want to update the machine, we should set this to false
      transferrable: false,
      factory: {
        description: 'Unlimited Vending Machine',
        limit: 99999,
        price: 1,
        template: JSON.stringify({ name: '{{name}}', brand: '{{brand}}' }),
        templateVariables: ['name', 'brand'],
        assetName: 'Product',
        attributes: {
          transferrable: true,
          ttl: 3600 * 2,
        },
      },
      wallet: merchant,
    });
    console.log('view machine state', `${endpoint}/node/explorer/assets/${factoryAddress}`);
    console.log('create machine tx', `${endpoint}/node/explorer/txs/${hash}`);

    // wait for machine state consolidates
    await sleep(3000);

    // 3. read machine
    const { state } = await client.getAssetState({ address: factoryAddress });
    console.log('machine state', state);

    // 4. declare customer
    hash = await client.declare({ moniker: 'customer', wallet: customer });
    console.log('customer declare tx', hash);
    console.log('customer view link', `${endpoint}/node/explorer/accounts/${customer.toAddress()}`);

    // 5. get some money
    hash = await client.checkin({ wallet: customer });
    console.log('poke tx', hash);
    console.log('poke link', `${endpoint}/node/explorer/txs/${hash}`);
    await sleep(3000);

    // 6. acquire asset
    let assetAddress;
    [hash, [assetAddress]] = await client.acquireAsset({
      assetFactory: factoryAddress,
      assetVariables: [{ name: 'Coca', brand: 'Pepsi' }],
      wallet: customer,
    });
    console.log('product address', assetAddress);
    console.log('acquire tx', hash);
    console.log('acquire link', `${endpoint}/node/explorer/txs/${hash}`);
  } catch (err) {
    console.error(err);
    console.log(JSON.stringify(err.errors));
  }
})();
