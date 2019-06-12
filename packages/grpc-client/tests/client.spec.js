const { fromRandom, WalletType } = require('@arcblock/forge-wallet');
const Mcrypto = require('@arcblock/mcrypto');
const GRpcClient = require('..');

const client = new GRpcClient('tcp://127.0.0.1:28210');

describe('#getRpcMethods', () => {
  test('should be function', () => {
    expect(typeof client.getRpcMethods).toEqual('function');
  });

  test('should have at least getBlock method', () => {
    const methods = client.getRpcMethods();
    expect(typeof methods.getBlock).toEqual('object');
  });
});

describe('#getTxSendMethods', () => {
  test('should be function', () => {
    expect(typeof client.getTxSendMethods).toEqual('function');
    expect(typeof client.getTxEncodeMethods).toEqual('function');
  });

  test('should have at least sendTransferTx method', () => {
    const methods = client.getTxSendMethods();
    expect(typeof client.sendTransferTx).toEqual('function');
    expect(methods.sendTransferTx).toEqual('TransferTx');
  });

  test('should have at least encodeTransferTx method', () => {
    const methods = client.getTxEncodeMethods();
    expect(typeof client.encodeTransferTx).toEqual('function');
    expect(methods.encodeTransferTx).toEqual('TransferTx');
  });
});

describe('#magicMethods', () => {
  test('should be function', () => {
    expect(typeof client.getBlock).toEqual('function');
  });

  test('should support reverse op', () => {
    const method = client.getBlock;
    expect(typeof method.$format).toEqual('function');
    expect(typeof method.$requestExample).toEqual('function');
    expect(typeof method.$responseExample).toEqual('function');

    const example = method.$responseExample();
    expect(example.code).toBeDefined();
    expect(example.block).toBeDefined();
  });

  if (!process.env.CI) {
    test('should support getBlock', done => {
      const stream = client.getBlock({ height: 1 });
      stream.on('data', res => {
        expect(res.code).toEqual(0);
        expect(res.block.height).toEqual(1);
        done();
      });
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
  }
});
