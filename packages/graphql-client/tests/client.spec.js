/* eslint-disable no-console */
const { fromRandom } = require('@arcblock/forge-wallet');
const { bytesToHex } = require('@arcblock/forge-util');
const GraphqlClient = require('../');

describe('GraphqlClient', () => {
  test('should be a function', () => {
    expect(typeof GraphqlClient).toEqual('function');
  });

  let client = new GraphqlClient('http://127.0.0.1:8210/api');
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

  test('should support getType', async () => {
    const type = client.getType('Transaction');
    expect(typeof type.deserializeBinary).toEqual('function');
  });

  client = new GraphqlClient('https://zinc.abtnetwork.io/api');
  test('should support getBlock', async () => {
    try {
      const res = await client.getBlock({ height: 1 });
      expect(res.code).toEqual('OK');
      expect(res.block.height).toEqual('1');
    } catch (err) {
      console.log(err.errors);
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

  test.skip('should sign tx correctly', async () => {
    const tx = {
      nonce: 1,
      itx: {
        moniker: 'test',
      },
    };
    const object = await client.signDeclareTx({ tx, wallet });
    const buffer = await client.signDeclareTx({ tx, wallet, encoding: 'buffer' });
    const signature = wallet.sign(buffer);
    console.log({ object, buffer: bytesToHex(buffer), signature });
    expect(wallet.verify(bytesToHex(buffer), object.signature)).toBeTruthy();
  });
});
