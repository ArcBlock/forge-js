const ForgeSDK = require('@arcblock/forge-sdk');

const AssetIssuer = require('../lib/issuer');
const AssetRecipient = require('../lib/recipient');
const AssetFactory = require('../lib/factory');

const chainId = 'zinc-2019-05-17';
const chainHost = 'https://zinc.abtnetwork.io/api';
const wallet = ForgeSDK.Wallet.fromRandom();
const factory = new AssetFactory({
  chainId,
  chainHost,
  wallet,
  issuer: {
    name: 'test case',
    url: 'https://www.arcblock.io',
    logo: 'https://www.arcblock.io/favicon.ico',
  },
});

if (!process.env.CI) {
  beforeAll(async () => {
    ForgeSDK.connect(chainHost, { chainId, name: chainId });
    await ForgeSDK.declare({ moniker: 'asset_factory_issuer', wallet });
  });
}

describe('AssetFactory.createTicket', () => {
  test('should be a function', () => {
    expect(typeof factory.createTicket).toEqual('function');
  });

  if (process.env.CI) {
    return;
  }

  test('should return asset and names', async () => {
    const [asset, hash] = await factory.createTicket({
      backgroundUrl: 'https://www.arcblock.io',
      data: {
        name: '复仇者联盟4的电影票',
        description: '单场次单人座',
        location: '北京市朝阳区青年路朝阳大悦城万达影院',
        startTime: Date.now(),
        endTime: Date.now() + 24 * 60 * 60 * 1000,
        host: new AssetIssuer({
          wallet,
          name: '万达影城',
          logo: 'https://www.baidu.com',
          url: 'https://www.baidu.com',
        }),
      },
    });

    expect(hash).toBeTruthy();
    expect(asset).toBeTruthy();
    expect(asset.address).toBeTruthy();
    expect(asset.data.value.signature).toBeTruthy();
  });
});

describe('AssetFactory.createCoupon', () => {
  test('should be a function', () => {
    expect(typeof factory.createCoupon).toEqual('function');
  });

  if (process.env.CI) {
    return;
  }

  test('should return asset and names', async () => {
    const [asset, hash] = await factory.createCoupon({
      backgroundUrl: 'https://www.arcblock.io',
      data: {
        name: '图书类满减优惠券',
        description: '全场通用',
        minAmount: 100,
        amount: 50,
        ratio: -1,
        startTime: Date.now(),
        expireTime: Date.now() + 24 * 60 * 60 * 1000,
      },
    });

    expect(hash).toBeTruthy();
    expect(asset).toBeTruthy();
    expect(asset.address).toBeTruthy();
    expect(asset.data.value.signature).toBeTruthy();
  });
});

describe('AssetFactory.createCertificate', () => {
  test('should be a function', () => {
    expect(typeof factory.createCertificate).toEqual('function');
  });

  if (process.env.CI) {
    return;
  }

  test('should return asset and names', async () => {
    const [asset, hash] = await factory.createCertificate({
      backgroundUrl: 'https://www.arcblock.io',
      data: {
        name: 'Forge 认证讲师',
        description: '该证书证明获得者对 Forge 区块链框架有深入了解，为官方认证的技术讲师',
        reason: '完成了 ArcBlock 官方培训',
        logoUrl: 'https://www.arcblock.io',
        issueTime: Date.now(),
        expireTime: Date.now() + 360 * 100 * 60 * 60 * 1000,
        recipient: new AssetRecipient({
          wallet,
          name: '王仕军',
          location: '北京市朝阳区',
        }),
      },
    });

    expect(hash).toBeTruthy();
    expect(asset).toBeTruthy();
    expect(asset.address).toBeTruthy();
    expect(asset.data.value.signature).toBeTruthy();
  });
});

describe('AssetFactory.createBadge', () => {
  test('should be a function', () => {
    expect(typeof factory.createBadge).toEqual('function');
  });

  if (process.env.CI) {
    return;
  }

  test('should return asset and names', async () => {
    const [asset, hash] = await factory.createBadge({
      backgroundUrl: 'https://www.arcblock.io',
      data: {
        name: 'DevCon0 参与者',
        description: '你的参与票号是 XXXXXX',
        reason: '报名并现场参加了 ArcBlock 的 DevCon0',
        logoUrl: 'https://www.arcblock.io',
        issueTime: Date.now(),
        expireTime: -1,
        recipient: new AssetRecipient({
          wallet,
          name: '王仕军',
          location: '北京市朝阳区',
        }),
      },
    });

    expect(hash).toBeTruthy();
    expect(asset).toBeTruthy();
    expect(asset.address).toBeTruthy();
    expect(asset.data.value.signature).toBeTruthy();
  });
});
