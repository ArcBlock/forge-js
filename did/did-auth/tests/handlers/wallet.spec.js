const Handlers = require('../../lib').WalletHandlers;

describe('#Handlers', () => {
  test('should be a function', () => {
    expect(typeof Handlers).toEqual('function');
  });
});
