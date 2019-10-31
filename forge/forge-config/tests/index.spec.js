const { parse } = require('../lib');

describe('#parse', () => {
  test('should be a function', () => {
    expect(typeof parse).toEqual('function');
  });

  test('should throw error if invalid file', () => {
    try {
      parse('./tmp/file');
    } catch (err) {
      expect(err).toBeTruthy();
    }
  });
});
