/* eslint-disable global-require */
const { getAllKeys } = require('../lib/sdk');

const sdk = {
  ForgeSDK: require('../index'),
  ForgeSDKLite: require('../lite'),
};

Object.keys(sdk).forEach(x => {
  describe(x, () => {
    jest.setTimeout(10000);

    const SDK = sdk[x];

    test('should have connect function', () => {
      expect(typeof SDK.connect).toEqual('function');
    });

    // const testChain = 'http://47.104.23.85:8211/api';
    const testChain = 'https://argon.abtnetwork.io/api';
    test('should delegate to graphql-client after connect', async () => {
      SDK.connect(testChain, { name: 'test' });
      expect(typeof SDK.getChainInfo).toEqual('function');
      expect(typeof SDK.doRawQuery).toEqual('function');
      expect(typeof SDK.getQueries).toEqual('function');
      expect(typeof SDK.getMutations).toEqual('function');
      if (x === 'ForgeSDK') {
        expect(typeof SDK.getType).toEqual('function');
        expect(typeof SDK.decodeTx).toEqual('function');
      }
      const res = await SDK.getChainInfo();
      expect(res.info).toBeTruthy();
    });

    test('should respect conn param when connected to multiple methods', async () => {
      SDK.connect(testChain, { name: 'test' });
      SDK.connect('https://zinc.abtnetwork.io/api', { name: 'zinc' });
      expect(typeof SDK.getChainInfo).toEqual('function');
      const res = await SDK.getChainInfo({ conn: 'test' });
      expect(res.info.network).toContain('argon-2019-10-11');
      const res2 = await SDK.getChainInfo({ conn: 'zinc' });
      expect(res2.info.network).toContain('zinc');
    });

    if (x === 'ForgeSDK') {
      test('should delegate to forge-message', async () => {
        expect(typeof SDK.Message.formatMessage).toEqual('function');
      });

      test('should delegate to forge-wallet', async () => {
        expect(typeof SDK.Wallet.fromSecretKey).toEqual('function');
      });

      test('should delegate to did-util', async () => {
        expect(typeof SDK.Util.toAssetAddress).toEqual('function');
      });
    }

    test('should delegate to forge-util', async () => {
      expect(typeof SDK.Util.fromUnitToToken).toEqual('function');
    });

    test('should format tokens', async () => {
      SDK.connect(testChain, { name: 'test' });
      SDK.connect('https://zinc.abtnetwork.io/api', { name: 'zinc' });

      expect(typeof SDK.fromUnitToToken).toEqual('function');
      expect(typeof SDK.fromTokenToUnit).toEqual('function');

      const amount = await SDK.fromUnitToToken('180000000000000000', { conn: 'zinc' });
      expect(amount.toString()).toEqual('18');

      const amount2 = await SDK.fromTokenToUnit(0.18, { conn: 'zinc' });
      expect(amount2.toString()).toEqual('1800000000000000');
    });
  });
});

describe('#getAllKeys', () => {
  test('should work with object', () => {
    expect(getAllKeys(Array.prototype).includes('push')).toBeTruthy();
  });

  test('includeObjectPrototype option', () => {
    class Parent {
      foo() {}
    }

    class Child extends Parent {
      bar() {}
    }

    expect(getAllKeys(Child.prototype).includes('foo')).toBeTruthy();
    expect(getAllKeys(Child.prototype).includes('bar')).toBeTruthy();
    expect(getAllKeys(new Child()).includes('foo')).toBeTruthy();
    expect(getAllKeys(new Child()).includes('bar')).toBeTruthy();
  });
});
