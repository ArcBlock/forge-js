const path = require('path');
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

  test('should parse config as expected', () => {
    const config = parse(path.resolve(__dirname, '../../../examples/kvstore/config/forge.toml'));
    expect(config.app).toBeTruthy();
    expect(config.forge.decimal).toBeTruthy();
    expect(config.forge.web).toBeTruthy();
  });
});
