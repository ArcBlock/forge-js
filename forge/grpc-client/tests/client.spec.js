const { fromRandom } = require('@arcblock/forge-wallet');
const { fromTokenToUnit } = require('@arcblock/forge-util');
const { toAssetAddress } = require('@arcblock/did-util');
const GRpcClient = require('..');

const client = new GRpcClient('tcp://127.0.0.1:28210');
const sleep = timeout => new Promise(resolve => setTimeout(resolve, timeout));

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
    expect(typeof client.sendTransferTx).toEqual('function');
  });

  test('should have at least encodeTransferTx method', () => {
    expect(typeof client.encodeTransferTx).toEqual('function');
  });

  test('should have tx sign methods', () => {
    expect(typeof client.signTransferTx).toEqual('function');
  });

  test('should have tx multi sign methods', () => {
    expect(typeof client.multiSignExchangeTx).toEqual('function');
  });

  if (!process.env.CI) {
    test('should format tokens', async () => {
      expect(typeof client.getTx).toEqual('function');
      expect(typeof client.decodeTx).toEqual('function');
      expect(typeof client.toLocktime).toEqual('function');
      expect(typeof client.fromUnitToToken).toEqual('function');
      expect(typeof client.fromTokenToUnit).toEqual('function');

      const amount = await client.fromUnitToToken('18000000000000000000');
      expect(amount.toString()).toEqual('18');

      const amount2 = await client.fromTokenToUnit(0.18);
      expect(amount2.toString()).toEqual('180000000000000000');
    });
  }
});

describe('#magicMethods', () => {
  test('should have alias methods', () => {
    expect(typeof client.checkin).toEqual('function');
    expect(typeof client.transfer).toEqual('function');
    expect(typeof client.toLocktime).toEqual('function');
    expect(typeof client.fromUnitToToken).toEqual('function');
    expect(typeof client.fromTokenToUnit).toEqual('function');
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

    const wallet = fromRandom();
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
  }
});
