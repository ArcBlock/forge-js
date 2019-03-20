const { fromRandom, WalletType } = require('@arcblock/forge-wallet');
const Mcrypto = require('@arcblock/mcrypto');
const { hexToBytes } = require('@arcblock/forge-util');
const GraphqlClient = require('../src/client');

describe('GraphqlClient', () => {
  test('should be a function', () => {
    expect(typeof GraphqlClient).toEqual('function');
  });

  const client = new GraphqlClient('http://localhost:8210/api');

  test('should have many query methods', () => {
    expect(client.getQueries().length).toBeGreaterThan(0);
  });

  test('should have many mutation methods', () => {
    expect(client.getMutations().length).toBeGreaterThan(0);
  });

  test('should have many subscription methods', () => {
    expect(client.getSubscriptions().length).toBeGreaterThan(0);
  });

  test.skip('should support getBlock', async () => {
    const res = await client.getBlock({ height: 2 });
    expect(res.code).toEqual('OK');
    expect(res.block.height).toEqual(2);
  });

  test('should support getType', async () => {
    const type = client.getType('Transaction');
    expect(typeof type.fromObject).toEqual('function');
    expect(typeof type.encode).toEqual('function');
  });

  test.skip('should support declare account', async () => {
    const type = WalletType({
      role: Mcrypto.types.RoleType.ROLE_ACCOUNT,
      pk: Mcrypto.types.KeyType.ED25519,
      hash: Mcrypto.types.HashType.SHA3,
    });

    const wallet = fromRandom(type);
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
  });
});
