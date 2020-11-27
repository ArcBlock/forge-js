/* eslint-disable no-shadow */
const ForgeSDK = require('@arcblock/forge-sdk');
const { verifyTx, verifyAccount, verifyAsset } = require('../lib');
const { verifyTxAsync, verifyAccountAsync, verifyAssetAsync } = require('../lib');

describe('#createVerifier', () => {
  test('should be a function', () => {
    expect(typeof verifyTx).toEqual('function');
    expect(typeof verifyAccount).toEqual('function');
    expect(typeof verifyAsset).toEqual('function');
    expect(typeof verifyTxAsync).toEqual('function');
    expect(typeof verifyAccountAsync).toEqual('function');
    expect(typeof verifyAssetAsync).toEqual('function');
  });

  const chainId = 'playground';
  const chainHost = 'https://playground.network.arcblockio.cn/api';
  const tx = '5FA1CC5BF7FE549228306B76A1DBB1E9BC061C5F1AABCCA3A2EE401D02FBB57E';
  const account = 'zNKmY4bw8VYDCCpYdYKM92GFiQ1xQYMCN4ug';
  const asset = 'zjdjkYwSFyRMM8VwkyEdpTBEaUV4cnfPU5wK';

  test('should verify tx', done => {
    const verifier = verifyTx({ hash: tx, chainId, chainHost });
    verifier.on('done', ({ data }) => {
      expect(data.info).toBeTruthy();
      expect(data.info.code).toBeTruthy();
      expect(data.info.hash).toEqual(tx);
      done();
    });
  });

  test('should verify account', done => {
    const verifier = verifyAccount({ address: account, chainId, chainHost });
    verifier.on('done', ({ data }) => {
      expect(data.state).toBeTruthy();
      expect(data.state.address).toEqual(account);
      done();
    });
  });

  test('should verify asset', done => {
    const verifier = verifyAsset({ address: asset, chainId, chainHost });
    verifier.on('done', ({ data }) => {
      expect(data.state).toBeTruthy();
      expect(data.state.address).toEqual(asset);
      done();
    });
  });

  test('should verify tx async', async () => {
    const { data } = await verifyTxAsync({ hash: tx, chainId, chainHost });
    expect(data.info).toBeTruthy();
    expect(data.info.code).toBeTruthy();
    expect(data.info.hash).toEqual(tx);
  });

  test('should verify account async', async () => {
    const { data } = await verifyAccountAsync({ address: account, chainId, chainHost });
    expect(data.state).toBeTruthy();
    expect(data.state.address).toEqual(account);
  });

  test('should verify asset async', async () => {
    const { data } = await verifyAssetAsync({ address: asset, chainId, chainHost });
    expect(data.state).toBeTruthy();
    expect(data.state.address).toEqual(asset);
  });

  test.skip('should verify tx and account dynamic', async () => {
    const wallet = ForgeSDK.Wallet.fromRandom();
    const chainId = 'zinc-2019-05-17';
    const chainHost = 'https://zinc.abtnetwork.io/api';
    ForgeSDK.connect(chainHost, { name: 'zinc', chainId });
    const hash = await ForgeSDK.declare({ moniker: 'test', wallet }, { conn: 'zinc' });
    const [res1, res2] = await Promise.all([
      verifyTxAsync({ hash, chainId, chainHost }),
      verifyAccountAsync({ address: wallet.toAddress(), chainId, chainHost }),
    ]);
    expect(res1).toBeTruthy();
    expect(res2).toBeTruthy();
  }, 30000);
});
