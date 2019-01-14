const { enums, messages, rpcs, getMessageType, toTypeUrl, fromTypeUrl } = require('../index');

describe('#enums', () => {
  test('should have status code fields', () => {
    expect(enums).toBeTruthy();
    expect(enums.StatusCode).toBeTruthy();
    expect(enums.StatusCode.OK).toEqual(0);
  });
});

describe('#messages', () => {
  test('should have status code fields', () => {
    expect(messages).toBeTruthy();
    expect(messages.StatusCode).toBeTruthy();
    expect(messages.StatusCode[0]).toEqual('OK');
  });
});

describe('#rpcs', () => {
  test('should have chain related rpcs', () => {
    expect(rpcs).toBeTruthy();
    expect(rpcs.ChainRpc).toBeTruthy();
    expect(rpcs.ChainRpc.methods).toBeTruthy();
    expect(rpcs.ChainRpc.methods.get_block).toBeTruthy();
  });
});

describe('#getMessageType', () => {
  test('should be a function', () => {
    expect(typeof getMessageType === 'function').toBeTruthy();
  });

  test('should return struct', () => {
    const { fn, fields } = getMessageType('AccountState');

    expect(typeof fn === 'function').toBeTruthy();
    expect(fields.balance).toBeTruthy();
    expect(fields.balance.type).toEqual('BigUint');
    expect(fields.nonce).toBeTruthy();
    expect(fields.nonce.type).toEqual('uint64');
  });
});

describe('#toTypeUrl', () => {
  test('should be a function', () => {
    expect(typeof toTypeUrl === 'function').toBeTruthy();
  });

  test('should return correct type_url', () => {
    expect(toTypeUrl('AccountState')).toEqual('fs/Account');
    expect(toTypeUrl('TransferTx')).toEqual('ft/Transfer');
    expect(toTypeUrl('RequestCreateTx')).toEqual('RequestCreateTx');
  });
});

describe('#fromTypeUrl', () => {
  test('should be a function', () => {
    expect(typeof fromTypeUrl === 'function').toBeTruthy();
  });

  test('should return correct type', () => {
    expect(fromTypeUrl('fs/Account')).toEqual('AccountState');
    expect(fromTypeUrl('ft/Transfer')).toEqual('TransferTx');
    expect(fromTypeUrl('RequestCreateTx')).toEqual('RequestCreateTx');
  });
});
