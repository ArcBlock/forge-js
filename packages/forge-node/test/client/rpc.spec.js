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
  });
});

describe('#listRpcMethods', () => {
  test('should be function', () => {
    expect(typeof client.listRpcMethods).toEqual('function');
  });

  test('should support reverse op', () => {
    const method = client.listRpcMethods();
    expect(typeof method.getBlock).toEqual('object');
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
