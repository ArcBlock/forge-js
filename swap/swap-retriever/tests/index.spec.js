const { createRetriever, verifyUserSwap } = require('../lib');

describe('#createRetriever', () => {
  test('should be a function', () => {
    expect(typeof createRetriever).toEqual('function');
  });
});

describe('#verifyUserSwap', () => {
  test('should be a function', () => {
    expect(typeof verifyUserSwap).toEqual('function');
  });
});
