const path = require('path');
const { parseConfig, createMessage } = require('../lib/util');

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
    const config = parseConfig(path.resolve(__dirname, '../docs/test.toml'));
    expect(config.app).toBeTruthy();
    expect(config.forge.decimal).toBeTruthy();
    expect(config.forge.sdk).toBeTruthy();
    expect(config.forge.web).toBeTruthy();
  });
});

describe('#createMessage', () => {
  test('should create simple message', () => {
    const message = createMessage('RequestGetBlock', { height: 1 });
    expect(typeof message).toEqual('object');
    expect(typeof message.toObject).toEqual('function');
    expect(message.getHeight()).toEqual(1);
  });

  test('should create nested message', () => {
    const params = {
      passphrase: '123456',
      moniker: 'wangshijun',
      type: {
        pk: 0,
        hash: 0,
        address: 0,
      },
    };

    const message = createMessage('RequestCreateWallet', params);
    expect(message.getPassphrase()).toEqual('123456');
    expect(message.getMoniker()).toEqual('wangshijun');

    const type = message.getType();
    expect(type.getPk()).toEqual(0);
    expect(type.getHash()).toEqual(0);
    expect(type.getAddress()).toEqual(0);
  });
});
