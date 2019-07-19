const { fromRandom } = require('@arcblock/forge-wallet');
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
  test('should have alias methods', () => {
    expect(typeof client.checkin).toEqual('function');
  });

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
      const wallet = fromRandom();
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
      const wallet = fromRandom();
      try {
        await client.sendDeclareTx({
          tx: {
            itx: {
              moniker: 'abc',
            },
          },
          wallet,
        });
      } catch (err) {
        expect(err.message.includes('This moniker is invalid')).toBeTruthy();
        expect(err.message.includes('invalid_moniker')).toBeTruthy();
      }
    });
  }
});
