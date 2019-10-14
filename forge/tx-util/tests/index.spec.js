const { createVerifier } = require('../lib');

describe('#createVerifier', () => {
  test('should be a function', () => {
    expect(typeof createVerifier).toEqual('function');
  });
});
