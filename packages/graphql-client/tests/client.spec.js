/* eslint-disable no-console */
const { fromRandom, WalletType } = require('@arcblock/forge-wallet');
const Mcrypto = require('@arcblock/mcrypto');
const { hexToBytes } = require('@arcblock/forge-util');
const GraphqlClient = require('../src/client');

describe('GraphqlClient', () => {
  test('should be a function', () => {
    expect(typeof GraphqlClient).toEqual('function');
  });

  let client;
  if (process.env.CI === 1) {
    client = new GraphqlClient('https://test.abtnetwork.io/api');
  } else {
    client = new GraphqlClient('http://127.0.0.1:8211/api');
  }

  test('should have many query methods', () => {
    expect(client.getQueries().length).toBeGreaterThan(0);
  });

  test('should have many mutation methods', () => {
    expect(client.getMutations().length).toBeGreaterThan(0);
  });

  test('should have many subscription methods', () => {
    expect(client.getSubscriptions().length).toBeGreaterThan(0);
  });

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

  test('should support getType', async () => {
    const type = client.getType('Transaction');
    expect(typeof type.fromObject).toEqual('function');
    expect(typeof type.encode).toEqual('function');
  });

  test('should support declare account', async () => {
    const type = WalletType({
      role: Mcrypto.types.RoleType.ROLE_ACCOUNT,
      pk: Mcrypto.types.KeyType.ED25519,
      hash: Mcrypto.types.HashType.SHA3,
    });

    const wallet = fromRandom(type);
    try {
      const res = await client.sendDeclareTx({
        data: {
          moniker: `wangshijun_${Math.round(Math.random() * 1000)}`,
          pk: Buffer.from(hexToBytes(wallet.publicKey)),
          type,
          issuer: '',
          data: null,
        },
        wallet,
      });

      expect(res.code).toEqual('OK');
      expect(res.hash).toBeTruthy();
    } catch (err) {
      console.log(err.errors);
      expect(err).toBeFalsy();
    }
  });
});
