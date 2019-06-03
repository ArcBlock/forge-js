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
      const res = await SDK.getChainInfo();
      expect(res.info).toBeTruthy();
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
