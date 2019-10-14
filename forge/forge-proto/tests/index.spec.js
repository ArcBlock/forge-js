const { enums, messages, rpcs, getMessageType, toTypeUrl, fromTypeUrl } = require('../index');

describe('#enums', () => {
  test('should have status code fields', () => {
    expect(enums).toBeTruthy();
    expect(enums.StatusCode).toBeTruthy();
    expect(enums.StatusCode.OK).toEqual(0);
    expect(Array.isArray(enums.SupportedTxs)).toBeTruthy();
    expect(Array.isArray(enums.SupportedStakes)).toBeTruthy();
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

  test('should return forge type', () => {
    const { fn, fields } = getMessageType('AccountState');

    expect(typeof fn === 'function').toBeTruthy();
    expect(fields.balance).toBeTruthy();
    expect(fields.balance.type).toEqual('BigUint');
    expect(fields.nonce).toBeTruthy();
    expect(fields.nonce.type).toEqual('uint64');
  });

  test('should return vendor type', () => {
    const { fn, fields } = getMessageType('abci_vendor.Version');

    expect(typeof fn === 'function').toBeTruthy();
    expect(Object.keys(fields).length).toBeGreaterThan(1);
  });
});

describe('#toTypeUrl', () => {
  test('should be a function', () => {
    expect(typeof toTypeUrl === 'function').toBeTruthy();
  });

  test('should return correct type_url', () => {
    expect(toTypeUrl('AccountState')).toEqual('fg:s:account');
    expect(toTypeUrl('TransferTx')).toEqual('fg:t:transfer');
    expect(toTypeUrl('StakeTx')).toEqual('fg:t:stake');
    expect(toTypeUrl('StakeForNode')).toEqual('fg:x:stake_node');
    expect(toTypeUrl('TransactionInfo')).toEqual('fg:x:transaction_info');
    expect(toTypeUrl('TxStatus')).toEqual('fg:x:tx_status');
    expect(toTypeUrl('RequestCreateTx')).toEqual('RequestCreateTx');
  });
});

describe('#fromTypeUrl', () => {
  test('should be a function', () => {
    expect(typeof fromTypeUrl === 'function').toBeTruthy();
  });

  test('should return correct type', () => {
    expect(fromTypeUrl('fg:s:account')).toEqual('AccountState');
    expect(fromTypeUrl('fg:t:transfer')).toEqual('TransferTx');
    expect(fromTypeUrl('fg:x:stake_node')).toEqual('StakeForNode');
    expect(fromTypeUrl('fg:x:transaction_info')).toEqual('TransactionInfo');
    // expect(fromTypeUrl('fg:x:address')).toEqual('DummyCodec');
    expect(fromTypeUrl('RequestCreateTx')).toEqual('RequestCreateTx');
  });
});
