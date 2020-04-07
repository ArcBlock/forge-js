/* eslint-disable no-console */
const { fromRandom } = require('@arcblock/forge-wallet');
const { fromTokenToUnit } = require('@arcblock/forge-util');
// eslint-disable-next-line import/no-extraneous-dependencies
const { verifyAccountAsync } = require('@arcblock/tx-util');

const GraphQLClient = require('../');

const sleep = timeout => new Promise(resolve => setTimeout(resolve, timeout));

describe('GraphQLClient', () => {
  test('should be a function', () => {
    expect(typeof GraphQLClient).toEqual('function');
  });

  let client = new GraphQLClient('https://playground.network.arcblockio.cn/api');
  if (process.env.CI) {
    client = new GraphQLClient('https://zinc.abtnetwork.io/api');
  }
  test('should have alias methods', () => {
    expect(typeof client.checkin).toEqual('function');
    expect(typeof client.transfer).toEqual('function');
    expect(typeof client.toLocktime).toEqual('function');
    expect(typeof client.fromUnitToToken).toEqual('function');
    expect(typeof client.fromTokenToUnit).toEqual('function');
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

  test('should support getBlock', async () => {
    try {
      const res = await client.getBlock({ height: 1000 }, { ignoreFields: ['block.invalidTxs', 'block.txs'] });
      expect(res.code).toEqual('OK');
      expect(res.block.height).toEqual('1000');
    } catch (err) {
      console.error(err.errors || err);
      expect(err).toBeFalsy();
    }
  });

  test('should format tokens', async () => {
    expect(typeof client.getTx).toEqual('function');
    expect(typeof client.decodeTx).toEqual('function');
    expect(typeof client.toLocktime).toEqual('function');
    expect(typeof client.fromUnitToToken).toEqual('function');
    expect(typeof client.fromTokenToUnit).toEqual('function');

    if (process.env.CI) {
      const amount = await client.fromUnitToToken('180000000000000000');
      expect(amount.toString()).toEqual('18');

      const amount2 = await client.fromTokenToUnit(0.18);
      expect(amount2.toString()).toEqual('1800000000000000');
    } else {
      const amount = await client.fromUnitToToken('18000000000000000000');
      expect(amount.toString()).toEqual('18');

      const amount2 = await client.fromTokenToUnit(0.18);
      expect(amount2.toString()).toEqual('180000000000000000');
    }
  });

  const wallet = fromRandom();
  test('should support declare account', async () => {
    const hash = await client.declare({
      moniker: `graphql_client_test_${Math.round(Math.random() * 10000)}`,
      wallet,
    });

    expect(hash).toBeTruthy();
  });

  test('should support detailed error message', async () => {
    try {
      await client.declare({
        moniker: `graphql_client_test_${Math.round(Math.random() * 10000)}`,
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
      console.error(err.errors);
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
      console.error(err.errors);
      expect(err).toBeFalsy();
    }
  });

  test('should multi sign tx correctly: object', async () => {
    try {
      const sender = fromRandom();
      const receiver = fromRandom();

      // 1. declare sender
      const [hash1, hash2] = await Promise.all([
        client.declare({ moniker: 'sender', wallet: sender }),
        client.declare({ moniker: 'receiver', wallet: receiver }),
      ]);
      await sleep(6000);
      expect(hash1).toBeTruthy();
      expect(hash2).toBeTruthy();

      const hash = await client.checkin({ wallet: receiver });
      expect(hash).toBeTruthy();

      // 3. create asset for sender
      const [, assetAddress] = await client.createAsset({
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
        wallet: sender,
      });
      await sleep(6000);
      expect(assetAddress).toBeTruthy();

      const options = { ignoreFields: [/\.withdrawItems/, /\.items/] };
      const { state: senderState } = await client.getAccountState({ address: sender.toAddress() }, options);
      const { state: receiverState } = await client.getAccountState({ address: receiver.toAddress() }, options);
      expect(senderState).toBeTruthy();
      expect(receiverState).toBeTruthy();

      // assemble exchange tx: multisig
      const exchange = {
        itx: {
          to: receiver.toAddress(),
          sender: {
            assets: [assetAddress],
          },
          receiver: {
            value: fromTokenToUnit(5),
          },
        },
      };

      // 4.1 Sender: encode and sign the transaction
      const encoded1 = await client.signExchangeTx({ tx: exchange, wallet: sender });

      // 4.2 Receiver: do the multi sig
      const encoded2 = await client.multiSignExchangeTx({
        tx: encoded1,
        wallet: receiver,
      });

      // 4.3 Send the exchange tx
      await client.sendExchangeTx({
        tx: encoded2,
        wallet: sender,
      });
    } catch (err) {
      console.error(err.errors);
      expect(err).toBeFalsy();
    }
  }, 20000);
});
