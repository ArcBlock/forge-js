/* eslint-disable no-console */
const { fromRandom, WalletType } = require('@arcblock/forge-wallet');
const Mcrypto = require('@arcblock/mcrypto');
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

  test('should support declare account', async () => {
    const type = WalletType({
      role: Mcrypto.types.RoleType.ROLE_ACCOUNT,
      pk: Mcrypto.types.KeyType.ED25519,
      hash: Mcrypto.types.HashType.SHA3,
    });

    const wallet = fromRandom(type);
    const hash = await client.sendDeclareTx({
      tx: {
        itx: {
          moniker: `graphql_client_test_${Math.round(Math.random() * 10000)}`,
          type,
        },
      },
      wallet,
    });

    expect(hash).toBeTruthy();
  });
});
