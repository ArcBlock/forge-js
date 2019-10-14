/* eslint-disable import/no-extraneous-dependencies */
/* eslint no-console:"off" */

/**
 * This script demonstrates how to do atomic swap between two chains
 * This script requires 2 running chain
 *
 * Run script with: `DEBUG=@arcblock/graphql-client node examples/atomic_swap.js`
 */

const moment = require('moment');
const GraphQLClient = require('@arcblock/graphql-client');
const { getRandomBytes, Hasher } = require('@arcblock/mcrypto');
const { toAssetAddress, toSwapAddress } = require('@arcblock/did-util');
const { fromRandom } = require('@arcblock/forge-wallet');
const { fromTokenToUnit } = require('@arcblock/forge-util');

const appChain = new GraphQLClient({ endpoint: 'http://localhost:8211/api' });
const assetChain = new GraphQLClient({ endpoint: 'http://localhost:8212/api' });

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
      let res = await appChain.sendDeclareTx({
        tx: {
          itx: {
            moniker,
          },
        },
        wallet,
      });
      console.log(`declare.appChain.${moniker}`, res);

      res = await assetChain.sendDeclareTx({
        tx: {
          itx: {
            moniker,
          },
        },
        wallet,
      });
      console.log(`declare.assetChain.${moniker}`, res);
    };

    // declare
    await declare(buyer, 'buyer');
    await declare(seller, 'seller');

    // 3. ensure asset for seller on app chain
    const ensureSellerAsset = async () => {
      const asset = {
        moniker: 'asset',
        readonly: true,
        transferrable: true,
        data: {
          typeUrl: 'json',
          value: {
            key: 'value2',
            sn: Math.random(),
          },
        },
      };
      const assetAddress = toAssetAddress(asset);
      asset.address = assetAddress;
      const res = await appChain.sendCreateAssetTx({
        tx: { itx: asset },
        wallet: seller,
      });
      console.log('ensureSellerAsset', res, assetAddress);
      return asset;
    };

    // ensure token for buyer on asset chain
    const ensureBuyerToken = async () => {
      const res = await assetChain.sendPokeTx({
        tx: {
          nonce: 0,
          itx: {
            date: moment(new Date().toISOString())
              .utc()
              .format('YYYY-MM-DD'),
            address: 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
          },
        },
        wallet: buyer,
      });
      console.log('ensureSellerAsset', res);
    };

    // setup swap on asset chain
    const doBuyerSetup = async (asset, hashlock) => {
      const res = await assetChain.sendSetupSwapTx({
        tx: {
          itx: {
            value: fromTokenToUnit(10),
            assets: [],
            receiver: seller.toAddress(),
            hashlock,
            locktime: 999999, // TODO: make this dynamic calculated
          },
        },
        wallet: buyer,
      });
      console.log('doBuyerSetup', res);
      return res;
    };

    // setup swap on app chain
    const doSellerSetup = async (asset, hashlock) => {
      const res = await appChain.sendSetupSwapTx({
        tx: {
          itx: {
            value: fromTokenToUnit(0),
            assets: [asset.address],
            receiver: buyer.toAddress(),
            hashlock,
            locktime: 99999, // TODO: make this dynamic calculated and different from above
          },
        },
        wallet: seller,
      });
      console.log('doSellerSetup', res);
      return res;
    };

    // retrieve swap on app chain
    const doBuyerRetrieve = async (address, hashkey) => {
      const res = await appChain.sendRetrieveSwapTx({
        tx: {
          itx: {
            address,
            hashkey,
          },
        },
        wallet: buyer,
      });
      console.log('doBuyerRetrieve', res);
    };

    // retrieve swap on asset chain
    const doSellerRetrieve = async (address, hashkey) => {
      const res = await assetChain.sendRetrieveSwapTx({
        tx: {
          itx: {
            address,
            hashkey,
          },
        },
        wallet: seller,
      });
      console.log('doSellerRetrieve', res);
    };

    // token and asset
    const asset = await ensureSellerAsset();
    console.log('asset', asset);
    await ensureBuyerToken();
    await sleep(3000);

    // Setup swap by buyer
    const hashkey = getRandomBytes(32);
    const hashlock = Hasher.SHA3.hash256(hashkey);
    console.log('hashkey', hashkey);
    console.log('hashlock', hashlock);
    const buyerSetupHash = await doBuyerSetup(asset, hashlock);
    const sellerSetupHash = await doSellerSetup(asset, hashlock);
    await sleep(3000);

    // Retrieve swap
    const buyerSwapAddress = toSwapAddress(`0x${buyerSetupHash}`);
    const sellerSwapAddress = toSwapAddress(`0x${sellerSetupHash}`);
    console.log('buyerSwapAddress', buyerSwapAddress);
    console.log('sellerSwapAddress', sellerSwapAddress);
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
