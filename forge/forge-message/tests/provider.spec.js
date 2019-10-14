const forge = require('@arcblock/forge-proto');
const {
  addProvider,
  resetProviders,
  getMessageType,
  toTypeUrl,
  fromTypeUrl,
} = require('../lib/provider');

describe('provider', () => {
  test('should be function', () => {
    expect(typeof addProvider).toEqual('function');
    expect(typeof getMessageType).toEqual('function');
    expect(typeof toTypeUrl).toEqual('function');
    expect(typeof fromTypeUrl).toEqual('function');
  });
});

describe('provider', () => {
  beforeEach(resetProviders);

  test('should return empty when no providers added', () => {
    expect(getMessageType('TransferTx')).toEqual({});
  });

  test('should return same url when no providers added', () => {
    expect(toTypeUrl('TransferTx')).toEqual('TransferTx');
  });

  test('should return same type when no providers added', () => {
    expect(fromTypeUrl('fg:t:transfer')).toEqual('fg:t:transfer');
  });
});

describe('provider', () => {
  beforeEach(() => {
    resetProviders();
    addProvider(forge);
  });

  test('should return fn when providers added', () => {
    expect(getMessageType('TransferTx').fn).toEqual(forge.getMessageType('TransferTx').fn);
  });

  test('should return correct url when providers added', () => {
    expect(toTypeUrl('TransferTx')).toEqual('fg:t:transfer');
  });

  test('should return correct type when providers added', () => {
    expect(fromTypeUrl('fg:t:transfer')).toEqual('TransferTx');
  });
});
