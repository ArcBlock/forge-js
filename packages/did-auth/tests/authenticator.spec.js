const Authenticator = require('../lib/authenticator');

describe('#Authenticator', () => {
  test('should be a function', () => {
    expect(typeof Authenticator).toEqual('function');
  });
});
