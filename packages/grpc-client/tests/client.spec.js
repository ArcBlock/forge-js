const GRpcClient = require('..');
const client = new GRpcClient('tcp://127.0.0.1:28210');

describe('#listRpcMethods', () => {
  test('should be function', () => {
    expect(typeof client.listRpcMethods).toEqual('function');
  });

  test('should have at least getBlock method', () => {
    const methods = client.listRpcMethods();
    expect(typeof methods.getBlock).toEqual('object');
  });
});

describe('#listTxSendMethods', () => {
  test('should be function', () => {
    expect(typeof client.listTxSendMethods).toEqual('function');
  });

  test('should have at least sendTransferTx method', () => {
    const methods = client.listTxSendMethods();
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
