/* eslint-disable import/no-extraneous-dependencies */
/* eslint no-console:"off" */

/**
 * This script demonstrates how to do exchange tx with grpc-client
 * Since exchange tx requires multi-parti-signature, it's complicated
 *
 * How to do a multisig?
 * First of all, for a tx that you received, generate a new structure `Multisig`.
 * Add `signer` (the address of the signer) and `data` field
 * (if no extra data, please keep it as default value - `nil`).
 * Then put the new structure into the 1st element of the `tx.signatures`.
 * Then encode the entire tx and sign it with private key as normal.
 * Then put the signed result into the `signature` field of the `Multisig` structure
 * of the 1st element of `tx.signatures`.
 *
 * Run script with: `DEBUG=@arcblock/grpc-client node examples/exchange.js`
 */

const GRpcClient = require('@arcblock/grpc-client');
const { toAssetAddress } = require('@arcblock/did-util');
const { fromRandom } = require('@arcblock/forge-wallet');
const { fromTokenToUnit } = require('@arcblock/forge-util');

const endpoint = process.env.FORGE_API_HOST || 'http://127.0.0.1:8210'; // testnet
const client = new GRpcClient({ endpoint: 'tcp://127.0.0.1:28210' });
const sleep = timeout => new Promise(resolve => setTimeout(resolve, timeout));

(async () => {
  try {
    const sender = fromRandom();
    const receiver = fromRandom();
    console.log({
      sender: sender.toJSON(),
      receiver: receiver.toJSON(),
    });

    // 1. declare sender
    let res = await client.sendDeclareTx({
      tx: {
        itx: {
          moniker: 'sender',
        },
      },
      wallet: sender,
    });
    console.log('declare.sender.result', res);
    console.log('view sender account', `${endpoint}/node/explorer/accounts/${sender.toAddress()}`);

    // 2. declare receiver
    res = await client.sendDeclareTx({
      tx: {
        itx: {
          moniker: 'receiver',
        },
      },
      wallet: receiver,
    });
    console.log('declare.receiver.result', res);
    console.log(
      'view receiver account',
      `${endpoint}/node/explorer/accounts/${receiver.toAddress()}`
    );

    // 3. create asset for sender
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
    res = await client.sendCreateAssetTx({
      tx: { itx: asset },
      wallet: sender,
    });
    console.log('create_asset.result', res, assetAddress);
    console.log('view asset', `${endpoint}/node/explorer/assets/${assetAddress}`);

    // assemble exchange tx: multisig
    const exchange = {
      itx: {
        to: receiver.toAddress(),
        sender: {
          assets: [assetAddress],
        },
        receiver: {
          value: fromTokenToUnit(0),
        },
      },
    };

    console.log('exchange', exchange);

    // 4.1 Sender: encode and sign the transaction
    const encoded1 = await client.signExchangeTx({ tx: exchange, wallet: sender });

    // 4.2 Receiver: do the multi sig
    const encoded2 = await client.multiSignExchangeTx({
      tx: Object.assign(encoded1, exchange),
      wallet: receiver,
    });

    // 4.3 Send the exchange tx
    await sleep(5000);
    res = await client.sendExchangeTx({
      tx: encoded2,
      wallet: sender,
      signature: encoded1.signature,
    });

    console.log('exchange.result', res);
    console.log('view exchange tx', `${endpoint}/node/explorer/txs/${res}`);
  } catch (err) {
    console.error(err);
    console.log(JSON.stringify(err.errors));
  }
})();
