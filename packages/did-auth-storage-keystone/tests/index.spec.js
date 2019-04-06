const Storage = require('../lib');

describe('#Storage', () => {
  test('should be a function', () => {
    expect(typeof Storage).toEqual('function');
    expect(typeof Storage.init).toEqual('function');
  });
});
