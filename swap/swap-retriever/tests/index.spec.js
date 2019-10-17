const { createRetriever } = require('../lib');

describe('#createRetriever', () => {
  test('should be a function', () => {
    expect(typeof createRetriever).toEqual('function');
  });
});
