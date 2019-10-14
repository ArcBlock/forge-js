const Handlers = require('../../lib').AppHandlers;

describe('#Handlers', () => {
  test('should be a function', () => {
    expect(typeof Handlers).toEqual('function');
  });
});
