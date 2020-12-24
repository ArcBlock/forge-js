/* eslint-disable no-unused-vars */
const url = require('url');
const qs = require('querystring');
const Mcrypto = require('@arcblock/mcrypto');
const { fromRandom, WalletType } = require('@arcblock/forge-wallet');
const { toBase58 } = require('@arcblock/forge-util');
const { WalletAuthenticator } = require('../../lib');
const Jwt = require('../../lib/jwt');

const type = WalletType({
  role: Mcrypto.types.RoleType.ROLE_APPLICATION,
  pk: Mcrypto.types.KeyType.ED25519,
  hash: Mcrypto.types.HashType.SHA3,
});

const wallet = fromRandom(type).toJSON();
const chainHost = 'https://zinc.abtnetwork.io/api';
const chainId = 'zinc-2019-05-17';

describe('#WalletAuthenticator', () => {
  test('should be a function', () => {
    expect(typeof WalletAuthenticator).toEqual('function');
  });

  test('should throw error with invalid param', () => {
    try {
      const auth = new WalletAuthenticator({ baseUrl: chainHost });
    } catch (err) {
      expect(err.message.indexOf('wallet') > 0).toBeTruthy();
    }
    try {
      const auth = new WalletAuthenticator({ baseUrl: chainHost, wallet: { sk: '123', pk: '' } });
    } catch (err) {
      expect(err.message.indexOf('wallet.pk') > 0).toBeTruthy();
    }
    try {
      const auth = new WalletAuthenticator({
        baseUrl: chainHost,
        wallet: { sk: '123', pk: '456', address: '789' },
        appInfo: {},
      });
    } catch (err) {
      expect(err.message.indexOf('appInfo') > 0).toBeTruthy();
    }
    try {
      const auth = new WalletAuthenticator({
        baseUrl: chainHost,
        wallet: { sk: '123', pk: '456', address: '789' },
        appInfo: { name: '123', description: '456', icon: '789' },
        chainInfo: {},
      });
    } catch (err) {
      expect(err.message.indexOf('chainInfo.host') > 0).toBeTruthy();
    }
  });

  const auth = new WalletAuthenticator({
    wallet,
    baseUrl: 'http://zinc.abtnetwork.io/webapp',
    appInfo: {
      name: 'ABT Wallet Demo',
      description: 'Demo application to show the potential of ABT Wallet',
      icon: 'https://arcblock.oss-cn-beijing.aliyuncs.com/images/wallet-round.png',
      link: 'http://zinc.abtnetwork.io/webapp',
    },
    chainInfo: {
      host: chainHost,
      id: chainId,
    },
  });

  test('should create instance with certain methods', () => {
    expect(typeof auth.uri).toEqual('function');
    expect(typeof auth.sign).toEqual('function');
    expect(typeof auth.verify).toEqual('function');
    expect(typeof auth.signResponse).toEqual('function');
    expect(typeof auth.getPublicUrl).toEqual('function');

    expect(typeof auth.genRequestedClaims).toEqual('function');
    expect(typeof auth.getClaimInfo).toEqual('function');

    expect(typeof auth.agreement).toEqual('function');
    expect(typeof auth.profile).toEqual('function');
    expect(typeof auth.signature).toEqual('function');
    expect(typeof auth.authPrincipal).toEqual('function');
    expect(typeof auth.holdingOfAsset).toEqual('function');
    expect(typeof auth.swap).toEqual('function');
  });

  test('should generate correct chainInfo', async () => {
    auth.chainInfo = ({ locale }) => {
      if (locale === 'en') {
        return { host: 'https://www.arcblock.io', id: 123 };
      }

      return { host: 'https://www.arcblockio.cn', id: 456 };
    };

    const enChainInfo = await auth.getChainInfo({ locale: 'en' });
    expect(enChainInfo.host).toEqual('https://www.arcblock.io');
    expect(enChainInfo.id).toEqual(123);

    const zhChainInfo = await auth.getChainInfo({ locale: 'zh' });
    expect(zhChainInfo.host).toEqual('https://www.arcblockio.cn');
    expect(zhChainInfo.id).toEqual(456);
  });

  test('should generate correct uri', async () => {
    const uri = await auth.uri();
    const parsed = url.parse(uri);
    const params = qs.parse(parsed.query);
    expect(parsed.host).toEqual('abtwallet.io');
    expect(parsed.pathname).toEqual('/i/');
    expect(params.action).toEqual('requestAuth');
    expect(decodeURIComponent(params.url).indexOf('zinc.abtnetwork.io')).toBeTruthy();
  });

  test('should throw if sign without claims', async () => {
    try {
      const signed = await auth.sign({});
      expect(signed.appPk).toEqual(toBase58(wallet.pk));
    } catch (err) {
      expect(err).toBeTruthy();
    }
  });

  test('should sign correct claims and verify those claims', async () => {
    const user = fromRandom();
    const userPk = toBase58(user.publicKey);
    const userDid = user.toAddress();

    const claims = {
      profile: () => ({
        fields: ['fullName', 'email'],
        description: 'Please provide these info to continue',
      }),
    };

    const signed = await auth.sign({ context: { token: '123', userPk, userDid }, claims });
    expect(signed.appPk).toEqual(toBase58(wallet.pk));
    expect(Jwt.verify(signed.authInfo, wallet.pk)).toBeTruthy();
  });

  test('should be able to verify client signed', async () => {
    const user = fromRandom();
    const userPk = toBase58(user.publicKey);
    const userDid = user.toAddress();

    const claims = {
      profile: () => ({
        fields: ['fullName', 'email'],
        description: 'Please provide these info to continue',
      }),
    };

    const signed = await auth.sign({ context: { token: '123', userPk, userDid }, claims });
    const clientSigned = { userPk: signed.appPk, userInfo: signed.authInfo, token: '123' };
    expect(await auth.verify(clientSigned)).toBeTruthy();
  });
});
