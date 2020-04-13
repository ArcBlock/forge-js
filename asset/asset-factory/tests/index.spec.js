const ForgeSDK = require('@arcblock/forge-sdk');
const { fromRandom } = require('@arcblock/forge-wallet');
const { verify } = require('@arcblock/vc');
// eslint-disable-next-line import/no-extraneous-dependencies
const { verifyAccountAsync } = require('@arcblock/tx-util');

const AssetIssuer = require('../lib/issuer');
const AssetRecipient = require('../lib/recipient');
const AssetFactory = require('../lib/factory');
const { createSvgDisplay } = require('../lib/display');

const chainId = 'zinc-2019-05-17';
const chainHost = 'https://zinc.abtnetwork.io/api';
const issuer = fromRandom();
const owner = fromRandom();
const factory = new AssetFactory({
  chainId,
  chainHost,
  wallet: issuer,
  issuer: {
    name: 'test case',
    url: 'https://www.arcblock.io',
    logo: 'https://www.arcblock.io/favicon.ico',
  },
});

beforeAll(async () => {
  ForgeSDK.connect(chainHost, { chainId, name: chainId });
  await Promise.all([
    ForgeSDK.declare({ moniker: 'asset_factory_issuer', wallet: issuer }),
    ForgeSDK.declare({ moniker: 'asset_factory_owner', wallet: owner }),
  ]);
  await Promise.all([
    verifyAccountAsync({ chainId, chainHost, address: issuer.toAddress() }),
    verifyAccountAsync({ chainId, chainHost, address: owner.toAddress() }),
  ]);
}, 20000);

describe('AssetFactory.createTicket', () => {
  test('should be a function', () => {
    expect(typeof factory.createTicket).toEqual('function');
  });

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
          wallet: issuer,
          name: '万达影城',
          logo: 'https://www.baidu.com',
          url: 'https://www.baidu.com',
        }),
        recipient: new AssetRecipient({
          wallet: owner,
          name: '王仕军',
          location: '北京市朝阳区',
        }),
      },
    });

    expect(hash).toBeTruthy();
    expect(asset).toBeTruthy();
    expect(asset.address).toBeTruthy();
    expect(asset.data.value.signature).toBeTruthy();
  }, 20000);
});

describe('AssetFactory.createCoupon', () => {
  test.only('create svg', () => {
    // tslint:disable-next-line:max-line-length
    const svg = createSvgDisplay(
      '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48"> <defs> <linearGradient id="linear-gradient" x1="13.01" y1="44.49" x2="13.01" y2="-7.46" gradientUnits="userSpaceOnUse"> <stop offset="0" stop-color="#273a9b"/> <stop offset="0.56" stop-color="#202f65"/> <stop offset="1" stop-color="#021e2f"/> </linearGradient> <linearGradient id="linear-gradient-2" x1="330.04" y1="44.49" x2="330.04" y2="-7.46" gradientTransform="matrix(-1, 0, 0, 1, 365.03, 0)" xlink:href="#linear-gradient"/> <linearGradient id="linear-gradient-3" x1="33.57" y1="54.11" x2="33.57" y2="21.06" xlink:href="#linear-gradient"/> <linearGradient id="linear-gradient-4" x1="14.43" y1="54.11" x2="14.43" y2="21.06" xlink:href="#linear-gradient"/> <linearGradient id="linear-gradient-5" x1="24" y1="55.74" x2="24" y2="-21.45" gradientUnits="userSpaceOnUse"> <stop offset="0" stop-color="#f3c57a"/> <stop offset="0.49" stop-color="#f39369"/> <stop offset="1" stop-color="#e94867"/> </linearGradient> <linearGradient id="linear-gradient-6" x1="24.02" y1="47.32" x2="24.02" y2="8.57" xlink:href="#linear-gradient-5"/> <linearGradient id="linear-gradient-7" x1="24" y1="34.6" x2="24" y2="-15.97" xlink:href="#linear-gradient-5"/> <linearGradient id="linear-gradient-8" x1="24" y1="30.49" x2="24" y2="-40.22" xlink:href="#linear-gradient-5"/> <linearGradient id="linear-gradient-9" x1="24" y1="39.99" x2="24" y2="-2.77" xlink:href="#linear-gradient-5"/> <linearGradient id="linear-gradient-10" x1="22.28" y1="39.99" x2="22.28" y2="-2.77" xlink:href="#linear-gradient-5"/> <linearGradient id="linear-gradient-11" x1="19.26" y1="39.99" x2="19.26" y2="-2.77" xlink:href="#linear-gradient-5"/> <linearGradient id="linear-gradient-12" x1="31.28" y1="39.99" x2="31.28" y2="-2.77" gradientTransform="matrix(-1, 0, 0, 1, 57, 0)" xlink:href="#linear-gradient-5"/> <linearGradient id="linear-gradient-13" x1="28.26" y1="39.99" x2="28.26" y2="-2.77" gradientTransform="matrix(-1, 0, 0, 1, 57, 0)" xlink:href="#linear-gradient-5"/> <linearGradient id="linear-gradient-14" x1="24" y1="27.84" x2="24" y2="3.7" gradientUnits="userSpaceOnUse"> <stop offset="0" stop-color="#fff"/> <stop offset="0.52" stop-color="#cce2e6"/> <stop offset="1" stop-color="#8fa1bb"/> </linearGradient> <linearGradient id="linear-gradient-15" x1="22.28" y1="19.24" x2="22.28" y2="7.18" xlink:href="#linear-gradient-14"/> <linearGradient id="linear-gradient-16" x1="19.26" y1="21.4" x2="19.26" y2="9.33" xlink:href="#linear-gradient-14"/> <linearGradient id="linear-gradient-17" x1="31.28" y1="19.24" x2="31.28" y2="7.18" gradientTransform="matrix(-1, 0, 0, 1, 57, 0)" xlink:href="#linear-gradient-14"/> <linearGradient id="linear-gradient-18" x1="28.26" y1="21.4" x2="28.26" y2="9.33" gradientTransform="matrix(-1, 0, 0, 1, 57, 0)" xlink:href="#linear-gradient-14"/> </defs> <title> pet, animal, pedigree, badge, pawprint </title> <path d="M4.75,39H9v4.26a1.75,1.75,0,0,0,3,1.24l11-11L14.54,25l-11,11A1.75,1.75,0,0,0,4.75,39Z" style="fill:url(#linear-gradient)"/> <path d="M43.25,39H39v4.26a1.75,1.75,0,0,1-3,1.24l-11-11L33.46,25l11,11A1.75,1.75,0,0,1,43.25,39Z" style="fill:url(#linear-gradient-2)"/> <path d="M38.84,35.87a7.37,7.37,0,0,0,3.33-2.18L33.46,25,25,33.47l8,8a7.35,7.35,0,0,0,2.72-2.89A5.37,5.37,0,0,1,38.84,35.87Z" style="fill:url(#linear-gradient-3)"/> <path d="M14.54,25,5.83,33.69a7.36,7.36,0,0,0,3.33,2.18,5.37,5.37,0,0,1,3.19,2.67,7.36,7.36,0,0,0,2.72,2.89l8-8Z" style="fill:url(#linear-gradient-4)"/> <path d="M42.08,18.16a6.22,6.22,0,0,0-2.45-4A4.09,4.09,0,0,1,38,11.3,6.37,6.37,0,0,0,31.5,5.79a4.48,4.48,0,0,1-3.26-1.19,6.36,6.36,0,0,0-8.49,0A4.47,4.47,0,0,1,16.5,5.79,6.37,6.37,0,0,0,10,11.25a4.48,4.48,0,0,1-1.73,3,6.36,6.36,0,0,0-1.47,8.37A4.46,4.46,0,0,1,7.39,26a6.35,6.35,0,0,0,4.24,7.35,4.48,4.48,0,0,1,2.65,2.23,6.37,6.37,0,0,0,8,2.89,4.09,4.09,0,0,1,3.29,0,6.36,6.36,0,0,0,8.12-2.85,4.48,4.48,0,0,1,2.65-2.23A6.37,6.37,0,0,0,40.62,26a4.48,4.48,0,0,1,.6-3.41A6.22,6.22,0,0,0,42.08,18.16Z" style="fill:url(#linear-gradient-5)"/> <path d="M12,33.55a4.46,4.46,0,0,1,2.28,2.07,6.37,6.37,0,0,0,8,2.89,4.09,4.09,0,0,1,3.29,0,6.36,6.36,0,0,0,8.12-2.85A4.46,4.46,0,0,1,36,33.53V21H12Z" style="fill:url(#linear-gradient-6)"/> <circle cx="24" cy="20.99" r="11.99" style="fill:url(#linear-gradient-7)"/> <circle cx="24" cy="20.99" r="10.5" style="fill:url(#linear-gradient-8)"/> <path d="M27.51,22.51l-.12-.06a2.33,2.33,0,0,1-1-.85,2.85,2.85,0,0,0-4.84,0,2.33,2.33,0,0,1-1,.85l-.12.06c-1.95.94-1.84,2.82-1.17,4.19s1.63,1.72,3.58.78h0a2.49,2.49,0,0,1,2.18,0h0c1.95.94,2.91.59,3.58-.78S29.45,23.45,27.51,22.51Z" style="fill:url(#linear-gradient-9)"/> <path d="M23.57,18.11c0,1.19-.58,1.73-1.29,1.73S21,19.29,21,18.11,21.56,16,22.28,16,23.57,16.92,23.57,18.11Z" style="fill:url(#linear-gradient-10)"/> <path d="M20.56,20.26c0,1.19-.58,1.73-1.29,1.73S18,21.45,18,20.26s.58-2.15,1.29-2.15S20.56,19.07,20.56,20.26Z" style="fill:url(#linear-gradient-11)"/> <path d="M24.43,18.11c0,1.19.58,1.73,1.29,1.73S27,19.29,27,18.11,26.44,16,25.72,16,24.43,16.92,24.43,18.11Z" style="fill:url(#linear-gradient-12)"/> <path d="M27.44,20.26c0,1.19.58,1.73,1.29,1.73S30,21.45,30,20.26s-.58-2.15-1.29-2.15S27.44,19.07,27.44,20.26Z" style="fill:url(#linear-gradient-13)"/> <path d="M27.51,21.51l-.12-.05a2.33,2.33,0,0,1-1-.85,2.85,2.85,0,0,0-4.84,0,2.33,2.33,0,0,1-1,.85l-.12.06c-1.95.94-1.84,2.82-1.17,4.19s1.63,1.72,3.58.78h0a2.49,2.49,0,0,1,2.18,0h0c1.95.94,2.91.59,3.58-.78S29.45,22.45,27.51,21.51Z" style="fill:url(#linear-gradient-14)"/> <path d="M23.57,17.11c0,1.19-.58,1.73-1.29,1.73S21,18.29,21,17.11,21.56,15,22.28,15,23.57,15.92,23.57,17.11Z" style="fill:url(#linear-gradient-15)"/> <path d="M20.56,19.26c0,1.19-.58,1.73-1.29,1.73S18,20.45,18,19.26s.58-2.15,1.29-2.15S20.56,18.07,20.56,19.26Z" style="fill:url(#linear-gradient-16)"/> <path d="M24.43,17.11c0,1.19.58,1.73,1.29,1.73S27,18.29,27,17.11,26.44,15,25.72,15,24.43,15.92,24.43,17.11Z" style="fill:url(#linear-gradient-17)"/> <path d="M27.44,19.26c0,1.19.58,1.73,1.29,1.73S30,20.45,30,19.26s-.58-2.15-1.29-2.15S27.44,18.07,27.44,19.26Z" style="fill:url(#linear-gradient-18)"/> </svg>'
    );
    console.log(svg);
  });

  test('should be a function', () => {
    expect(typeof factory.createCoupon).toEqual('function');
  });

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
  }, 20000);
});

describe('AssetFactory.createCertificate', () => {
  test('should be a function', () => {
    expect(typeof factory.createCertificate).toEqual('function');
  });

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
          wallet: owner,
          name: '王仕军',
          location: '北京市朝阳区',
        }),
      },
    });

    expect(hash).toBeTruthy();
    expect(asset).toBeTruthy();
    expect(asset.address).toBeTruthy();
    expect(asset.data.value.signature).toBeTruthy();
  }, 20000);
});

describe('AssetFactory.createBadge', () => {
  test('should be a function', () => {
    expect(typeof factory.createBadge).toEqual('function');
  });

  test('should return asset and names', async () => {
    const [asset, hash] = await factory.createBadge({
      data: {
        name: 'DevCon0 参与者',
        description: '你的参与票号是 XXXXXX',
        reason: '报名并现场参加了 ArcBlock 的 DevCon0',
        logoUrl: 'https://www.arcblock.io',
        issueTime: Date.now(),
        expireTime: -1,

        // VC attributes
        type: 'WalletPlaygroundAchievement',
        display: 'abc',

        host: new AssetIssuer({
          wallet: owner,
          name: 'ArcBlock',
        }),
        recipient: new AssetRecipient({
          wallet: owner,
          name: '王仕军',
          location: '北京市朝阳区',
        }),
      },
    });

    expect(hash).toBeTruthy();
    expect(asset).toBeTruthy();
    expect(asset.address).toBeTruthy();
    expect(asset.moniker === 'DevCon0 参与者').toBeTruthy();

    const vc = factory.getVCBody(asset);
    expect(verify({ vc, ownerDid: owner.toAddress(), trustedIssuers: issuer.toAddress() })).toBeTruthy();
  }, 20000);
});
