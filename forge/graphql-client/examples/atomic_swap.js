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
    const buyer = fromRandom();
    const seller = fromRandom();
    console.log({
      buyer: buyer.toJSON(),
      seller: seller.toJSON(),
    });

    const declare = async (wallet, moniker) => {
      let hash = await appChain.declare({ moniker, wallet });
      console.log(`declare.appChain.${moniker}`, hash);

      hash = await assetChain.declare({ moniker, wallet });
      console.log(`declare.assetChain.${moniker}`, hash);
    };

    // declare
    await declare(buyer, 'buyer');
    await declare(seller, 'seller');

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
        wallet: seller,
      });
      console.log('ensureSellerAsset', hash, address);
      return address;
    };

    // ensure token for buyer on asset chain
    const ensureBuyerToken = async () => {
      const hash = await assetChain.checkin({ wallet: buyer });
      console.log('ensureSellerAsset', hash);
    };

    // setup swap on asset chain
    const doBuyerSetup = async (asset, hashlock) => {
      const hash = await assetChain.setupSwap({
        token: 10,
        assets: [],
        receiver: seller.toAddress(),
        hashlock,
        wallet: buyer,
      });
      console.log('doBuyerSetup', hash);
      return hash;
    };

    // setup swap on app chain
    const doSellerSetup = async (asset, hashlock) => {
      const hash = await appChain.setupSwap({
        token: 0,
        assets: [asset],
        receiver: buyer.toAddress(),
        hashlock,
        wallet: seller,
      });
      console.log('doSellerSetup', hash);
      return hash;
    };

    // retrieve swap on app chain
    const doBuyerRetrieve = async (address, hashkey) => {
      const hash = await appChain.retrieveSwap({
        address,
        hashkey,
        wallet: buyer,
      });
      console.log('doBuyerRetrieve', hash);
    };

    // retrieve swap on asset chain
    const doSellerRetrieve = async (address, hashkey) => {
      const hash = await assetChain.retrieveSwap({
        address,
        hashkey,
        wallet: seller,
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
    await sleep(3000);

    // Inspect swap
    const buyerSwapState = await assetChain.getSwapState({ address: buyerSwapAddress });
    const sellerSwapState = await appChain.getSwapState({ address: sellerSwapAddress });
    console.log('buyerSwapState', buyerSwapState);
    console.log('sellerSwapState', sellerSwapState);

    await doBuyerRetrieve(sellerSwapAddress, hashkey);
    await doSellerRetrieve(buyerSwapAddress, hashkey);

    // TODO: validate swap
  } catch (err) {
    console.error(err);
    console.log(JSON.stringify(err.errors));
  }
})();
