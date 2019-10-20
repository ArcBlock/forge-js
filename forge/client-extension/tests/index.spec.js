const { createExtensionMethods } = require('../lib');

describe('#createExtensionMethods', () => {
  test('should be a function', () => {
    expect(typeof createExtensionMethods).toEqual('function');
  });
});
