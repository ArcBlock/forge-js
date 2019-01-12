const path = require('path');
const { parseConfig } = require('../../');

describe('#parseConfig', () => {
  test('should be a function', () => {
    expect(typeof parseConfig).toEqual('function');
  });

  test('should throw error if invalid file', () => {
    try {
      parseConfig('./tmp/file');
    } catch (err) {
      expect(err).toBeTruthy();
    }
  });

  test('should parse config as expected', () => {
    const config = parseConfig(path.resolve(__dirname, '../../examples/kvstore/kv.toml'));
    expect(config.app).toBeTruthy();
    expect(config.forge.decimal).toBeTruthy();
    expect(config.forge.sdk).toBeTruthy();
    expect(config.forge.web).toBeTruthy();
  });
});
