const path = require('path');
const { RpcClient, parseConfig } = require('../../');
const client = new RpcClient(
  parseConfig(path.resolve(__dirname, '../../../../examples/simple/forge.toml'))
);

describe('#fromUnitToToken & fromTokenToUnit', () => {
  test('should be function', () => {
    expect(typeof client.fromUnitToToken).toEqual('function');
    expect(typeof client.fromTokenToUnit).toEqual('function');
  });

  test('should return same for number and string', () => {
    expect(client.fromTokenToUnit(100)).toEqual(client.fromTokenToUnit('100'));
    expect(client.fromTokenToUnit(-100)).toEqual(client.fromTokenToUnit('-100'));
    expect(client.fromTokenToUnit(10000000000)).toEqual(client.fromTokenToUnit('10000000000'));
    expect(client.fromTokenToUnit(9.87643)).toEqual(client.fromTokenToUnit('9.87643'));
  });

  [100, -100, 10000000000000].forEach(x => {
    test(`should support reverse op on integer: ${x}`, () => {
      const encoded = client.fromTokenToUnit(x);
      const decoded = client.fromUnitToToken(encoded);
      expect(decoded).toEqual(x.toString());
    });
  });

  [8.8888, -8.8888, 3.3333333333333, 44444444444444444.5555].forEach(x => {
    test(`should support reverse op decimal: ${x}`, () => {
      const encoded = client.fromTokenToUnit(x);
      const decoded = client.fromUnitToToken(encoded);
      expect(decoded).toEqual(x.toString());
    });
  });
});

describe('#listRpcMethods', () => {
  test('should be function', () => {
    expect(typeof client.listRpcMethods).toEqual('function');
  });

  test('should have at least getBlock method', () => {
    const methods = client.listRpcMethods();
    expect(typeof methods.getBlock).toEqual('object');
  });
});

describe('#listTxMethods', () => {
  test('should be function', () => {
    expect(typeof client.listTxMethods).toEqual('function');
  });

  test('should have at least sendTransferTx method', () => {
    const methods = client.listTxMethods();
    expect(typeof client.sendTransferTx).toEqual('function');
    expect(methods.sendTransferTx).toEqual('TransferTx');
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
});
