/* eslint-disable global-require */
const sdk = {
  ForgeSDK: require('../index'),
  ForgeSDKLite: require('../lite'),
};

Object.keys(sdk).forEach(x => {
  describe(x, () => {
    const SDK = sdk[x];

    test('should have connect function', () => {
      expect(typeof SDK.connect).toEqual('function');
    });

    test('should delegate to graphql-client after connect', async () => {
      SDK.connect('https://test.abtnetwork.io/api', { name: 'test' });
      expect(typeof SDK.getChainInfo).toEqual('function');
      expect(typeof SDK.getType).toEqual('function');
      expect(typeof SDK.doRawQuery).toEqual('function');
      expect(typeof SDK.getQueries).toEqual('function');
      expect(typeof SDK.getMutations).toEqual('function');
      expect(typeof SDK.decodeTx).toEqual('function');
      const res = await SDK.getChainInfo();
      expect(res.info).toBeTruthy();
    });

    test('should respect conn param when connected to multiple methods', async () => {
      SDK.connect('https://test.abtnetwork.io/api', { name: 'test' });
      SDK.connect('https://zinc.abtnetwork.io/api', { name: 'zinc' });
      expect(typeof SDK.getChainInfo).toEqual('function');
      const res = await SDK.getChainInfo({ conn: 'test' });
      expect(res.info.network).toContain('test');
      const res2 = await SDK.getChainInfo({ conn: 'zinc' });
      expect(res2.info.network).toContain('zinc');
    });

    test('should delegate to forge-message', async () => {
      expect(typeof SDK.formatMessage).toEqual('function');
    });

    test('should delegate to forge-wallet', async () => {
      expect(typeof SDK.Wallet.fromSecretKey).toEqual('function');
    });

    test('should delegate to forge-util', async () => {
      expect(typeof SDK.Util.fromUnitToToken).toEqual('function');
    });

    test('should delegate to did-util', async () => {
      expect(typeof SDK.Util.toAssetAddress).toEqual('function');
    });
  });
});
