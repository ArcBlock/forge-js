/* eslint-disable no-console */
const { fromRandom } = require('@arcblock/forge-wallet');
const { fromTokenToUnit } = require('@arcblock/forge-util');
const { toAssetAddress } = require('@arcblock/did-util');

const GraphQLClient = require('../');

const sleep = timeout => new Promise(resolve => setTimeout(resolve, timeout));

describe('GraphQLClient', () => {
  test('should be a function', () => {
    expect(typeof GraphQLClient).toEqual('function');
  });

  let client = new GraphQLClient('http://127.0.0.1:8210/api');
  test('should have alias methods', () => {
    expect(typeof client.checkin).toEqual('function');
  });

  test('should have many query methods', () => {
    expect(client.getQueries().length).toBeGreaterThan(0);
  });

  test('should have many mutation methods', () => {
    expect(client.getMutations().length).toBeGreaterThan(0);
  });

  test('should have many subscription methods', () => {
    expect(client.getSubscriptions().length).toBeGreaterThan(0);
  });

  test('should have tx send methods', () => {
    expect(client.getTxSendMethods().length).toBeGreaterThan(0);
    expect(typeof client.sendTransferTx).toEqual('function');
  });

  test('should have tx encode methods', () => {
    expect(client.getTxEncodeMethods().length).toBeGreaterThan(0);
    expect(typeof client.encodeTransferTx).toEqual('function');
  });

  test('should have tx sign methods', () => {
    expect(client.getTxSignMethods().length).toBeGreaterThan(0);
    expect(typeof client.signTransferTx).toEqual('function');
  });

  test('should have tx multi sign methods', () => {
    expect(client.getTxMultiSignMethods().length).toBeGreaterThan(0);
    expect(typeof client.multiSignExchangeTx).toEqual('function');
  });

  test('should support getType', async () => {
    const type = client.getType('Transaction');
    expect(typeof type.deserializeBinary).toEqual('function');
  });

  // client = new GraphQLClient('http://182.92.167.126:8210/api');
  client = new GraphQLClient('https://zinc.abtnetwork.io/api');
  // client = new GraphQLClient('http://47.104.23.85:8211/api');
  test('should support getBlock', async () => {
    try {
      const res = await client.getBlock(
        { height: 1 },
        { ignoreFields: ['block.invalidTxs', 'block.txs'] }
      );
      expect(res.code).toEqual('OK');
      expect(res.block.height).toEqual('1');
    } catch (err) {
      console.error(err.errors);
      expect(err).toBeFalsy();
    }
  });

  const wallet = fromRandom();
  test('should support declare account', async () => {
    const hash = await client.sendDeclareTx({
      tx: {
        itx: {
          moniker: `graphql_client_test_${Math.round(Math.random() * 10000)}`,
        },
      },
      wallet,
    });

    expect(hash).toBeTruthy();
  });

  test('should support detailed error message', async () => {
    try {
      await client.sendDeclareTx({
        tx: {
          itx: {
            moniker: `graphql_client_test_${Math.round(Math.random() * 10000)}`,
          },
        },
        wallet,
      });
    } catch (err) {
      expect(err.message.includes('invalid_sender_state')).toBeTruthy();
      expect(err.message.includes('`tx.from` already exist')).toBeTruthy();
    }
  });

  test('should sign tx correctly: object', async () => {
    try {
      const tx = {
        itx: {
          moniker: 'test',
        },
      };

      const signed = await client.signDeclareTx({ tx, wallet });
      await client.sendDeclareTx({ tx: signed, wallet });
    } catch (err) {
      expect(err).toBeFalsy();
    }
  });

  test('should sign tx correctly: base64', async () => {
    try {
      const tx = {
        itx: {
          moniker: 'test',
        },
      };

      const base64 = await client.signDeclareTx({ tx, wallet, encoding: 'base64' });
      await client.sendTx({ tx: base64 });
    } catch (err) {
      expect(err).toBeFalsy();
    }
  });

  test('should multi sign tx correctly: object', async () => {
    try {
      const sender = fromRandom();
      const receiver = fromRandom();

      // 1. declare sender
      await client.sendDeclareTx({
        tx: {
          itx: {
            moniker: 'sender',
          },
        },
        wallet: sender,
      });

      // 2. declare receiver
      await client.sendDeclareTx({
        tx: {
          itx: {
            moniker: 'receiver',
          },
        },
        wallet: receiver,
      });

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
      await client.sendCreateAssetTx({
        tx: { itx: asset },
        wallet: sender,
      });

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

      // 4.1 Sender: encode and sign the transaction
      const encoded1 = await client.signExchangeTx({ tx: exchange, wallet: sender });

      // 4.2 Receiver: do the multi sig
      const encoded2 = await client.multiSignExchangeTx({
        tx: Object.assign(encoded1, exchange),
        wallet: receiver,
      });

      // 4.3 Send the exchange tx
      await sleep(3000);
      await client.sendExchangeTx({
        tx: encoded2,
        wallet: sender,
        signature: encoded1.signature,
      });
    } catch (err) {
      expect(err).toBeFalsy();
    }
  }, 10000);
});
