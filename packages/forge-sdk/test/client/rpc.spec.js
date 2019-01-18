const path = require('path');
const { RpcClient, parseConfig } = require('../../');
const client = new RpcClient(
  parseConfig(path.resolve(__dirname, '../../../../examples/simple/forge.toml'))
);

describe('#fromArc & toArc', () => {
  test('should be function', () => {
    expect(typeof client.fromArc).toEqual('function');
    expect(typeof client.toArc).toEqual('function');
  });

  test('should support reverse op', () => {
    const value = '100';
    const encoded = client.toArc(value);
    const decoded = client.fromArc(encoded);
    expect(decoded).toEqual(value);
    expect(client.toArc(100)).toEqual(client.toArc('100'));
    expect(client.toArc(-100)).toEqual(client.toArc('-100'));
    expect(client.toArc(10000000000)).toEqual(client.toArc('10000000000'));
    expect(client.toArc(9.87643)).toEqual(client.toArc('9.87643'));
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
