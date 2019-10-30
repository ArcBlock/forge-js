/* eslint-disable import/no-extraneous-dependencies */
/* eslint no-console:"off" */

/**
 * This script demonstrates how to do atomic swap between two chains
 * This script requires 2 running chain
 *
 * Run script with: `DEBUG=@arcblock/graphql-client node examples/atomic_swap.js`
 */

const GraphQLClient = require('@arcblock/graphql-client');
const { getRandomBytes, Hasher } = require('@arcblock/mcrypto');
const { fromRandom } = require('@arcblock/forge-wallet');

const appChain = new GraphQLClient({ endpoint: 'http://localhost:8210/api' });
const assetChain = new GraphQLClient({ endpoint: 'http://localhost:8211/api' });

const sleep = timeout => new Promise(resolve => setTimeout(resolve, timeout));

(async () => {
  try {
    const alice = fromRandom(); // buyer
    const bob = fromRandom(); // seller
    const betty = fromRandom();
    const lily = fromRandom();
    console.log({
      alice: alice.toAddress(),
      bob: bob.toAddress(),
      betty: betty.toAddress(),
      lily: lily.toAddress(),
    });

    const declare = async (wallet, moniker) => {
      let hash = await appChain.declare({ moniker, wallet });
      console.log(`declare.appChain.${moniker}`, hash);

      hash = await assetChain.declare({ moniker, wallet });
      console.log(`declare.assetChain.${moniker}`, hash);
    };

    const delegate = async (from, to) => {
      const params = {
        from,
        to,
        privileges: [
          { typeUrl: 'fg:t:setup_swap', rules: [] },
          { typeUrl: 'fg:t:revoke_swap', rules: [] },
          { typeUrl: 'fg:t:retrieve_swap', rules: [] },
        ],
      };

      let [hash] = await appChain.delegate(params);
      console.log('delegate.appChain.hash', hash);

      [hash] = await assetChain.delegate(params);
      console.log('delegate.assetChain.hash', hash);
    };

    // declare
    await declare(alice, 'user_alice');
    await declare(bob, 'user_bob');
    await declare(betty, 'user_betty');
    await declare(lily, 'user_lily');
    await sleep(3000);

    // delegate
    await delegate(alice, betty);
    await delegate(bob, lily);
    await sleep(3000);

    // 3. ensure asset for seller on app chain
    const ensureSellerAsset = async () => {
      const [hash, address] = await appChain.createAsset({
        moniker: 'asset',
        data: {
          typeUrl: 'json',
          value: {
            key: 'value2',
            sn: Math.random(),
          },
        },
        wallet: bob,
      });
      console.log('ensureSellerAsset', hash, address);
      return address;
    };

    // ensure token for buyer on asset chain
    const ensureBuyerToken = async () => {
      const hash = await assetChain.checkin({ wallet: alice });
      console.log('ensureSellerAsset', hash);
    };

    // setup swap on asset chain
    const doBuyerSetup = async (asset, hashlock) => {
      const hash = await assetChain.setupSwap({
        token: 10,
        assets: [],
        receiver: bob.toAddress(),
        delegator: alice.toAddress(),
        hashlock,
        wallet: betty,
      });
      console.log('doBuyerSetup', hash);
      return hash;
    };

    // setup swap on app chain
    const doSellerSetup = async (asset, hashlock) => {
      const hash = await appChain.setupSwap({
        token: 0,
        assets: [asset],
        receiver: alice.toAddress(),
        delegator: bob.toAddress(),
        hashlock,
        wallet: lily,
      });
      console.log('doSellerSetup', hash);
      return hash;
    };

    // retrieve swap on app chain
    const doBuyerRetrieve = async (address, hashkey) => {
      const hash = await appChain.retrieveSwap({
        address,
        hashkey,
        delegator: alice.toAddress(),
        wallet: betty,
      });
      console.log('doBuyerRetrieve', hash);
    };

    // retrieve swap on asset chain
    const doSellerRetrieve = async (address, hashkey) => {
      const hash = await assetChain.retrieveSwap({
        address,
        hashkey,
        delegator: bob.toAddress(),
        wallet: lily,
      });
      console.log('doSellerRetrieve', hash);
    };

    // token and asset
    const asset = await ensureSellerAsset();
    console.log('asset', asset);
    await ensureBuyerToken();
    await sleep(3000);

    // Setup swap by buyer
    const hashkey = getRandomBytes(32);
    const hashlock = Hasher.SHA3.hash256(hashkey);
    const [buyerSetupHash, buyerSwapAddress] = await doBuyerSetup(asset, hashlock);
    const [sellerSetupHash, sellerSwapAddress] = await doSellerSetup(asset, hashlock);
    console.log('setup', {
      hashkey,
      hashlock,
      buyerSetupHash,
      buyerSwapAddress,
      sellerSetupHash,
      sellerSwapAddress,
    });
    await sleep(5000);

    // Inspect swap
    const buyerSwapState = await assetChain.getSwapState({ address: buyerSwapAddress });
    const sellerSwapState = await appChain.getSwapState({ address: sellerSwapAddress });
    console.log('buyerSwapState', buyerSwapState);
    console.log('sellerSwapState', sellerSwapState);

    await doBuyerRetrieve(sellerSwapAddress, hashkey);
    await doSellerRetrieve(buyerSwapAddress, hashkey);
  } catch (err) {
    console.error(err);
    console.log(JSON.stringify(err.errors));
  }
})();
