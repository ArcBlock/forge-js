const ForgeSDK = require('..');

describe('#ForgeSDK', () => {
  test('should have connect function', () => {
    expect(typeof ForgeSDK.connect).toEqual('function');
  });

  test('should delegate to graphql-client after connect', async () => {
    ForgeSDK.connect('https://test.abtnetwork.io/api', { name: 'test' });
    expect(typeof ForgeSDK.getChainInfo).toEqual('function');
    const res = await ForgeSDK.getChainInfo();
    expect(res.info).toBeTruthy();
  });

  test('should delegate to forge-message', async () => {
    expect(typeof ForgeSDK.formatMessage).toEqual('function');
  });

  test('should delegate to forge-wallet', async () => {
    expect(typeof ForgeSDK.Wallet.fromSecretKey).toEqual('function');
  });

  test('should delegate to forge-util', async () => {
    expect(typeof ForgeSDK.Util.fromUnitToToken).toEqual('function');
  });

  test('should delegate to did-util', async () => {
    expect(typeof ForgeSDK.Util.toAssetAddress).toEqual('function');
  });
});
