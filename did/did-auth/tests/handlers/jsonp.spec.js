/* eslint-disable import/no-extraneous-dependencies */
Error.stackTraceLimit = Infinity;

const axios = require('axios');
const qs = require('querystring');
const url = require('url');
const Mcrypto = require('@arcblock/mcrypto');
const MemoryAuthStorage = require('@arcblock/did-auth-storage-memory');
const { fromRandom, WalletType } = require('@arcblock/forge-wallet');
const { toBase58 } = require('@arcblock/forge-util');

const createTestServer = require('@arcblock/did-auth/tools/util');
const { WalletHandlers, WalletAuthenticator: Authenticator } = require('@arcblock/did-auth');
const Jwt = require('@arcblock/did-auth/lib/jwt');

const type = WalletType({
  role: Mcrypto.types.RoleType.ROLE_APPLICATION,
  pk: Mcrypto.types.KeyType.ED25519,
  hash: Mcrypto.types.HashType.SHA3,
});

const user = fromRandom();
const app = fromRandom(type);
const chainHost = 'https://playground.abtnetwork.io/api';
const chainId = 'playground';
const headers = {
  'User-Agent': 'ArcWallet/1.3.29 iPhone12,3 iOS/13.0 CFNetwork/1098.7 Darwin/19.0.0',
};

describe('#JsonpWalletHandlers', () => {
  let server;

  beforeAll(async () => {
    server = await createTestServer();
    server.set('trust proxy', true);
  });

  // Attach challenge
  test('should handle common did-auth attach use jsonp as expected', async () => {
    const tokenStorage = new MemoryAuthStorage();
    const authenticator = new Authenticator({
      wallet: app.toJSON(),
      // baseUrl: server.url,
      appInfo: ({ baseUrl }) => ({
        name: 'ABT Wallet Demo',
        description: 'Demo application to show the potential of ABT Wallet',
        icon: 'https://arcblock.oss-cn-beijing.aliyuncs.com/images/wallet-round.png',
        link: baseUrl,
      }),
      chainInfo: ({ baseUrl }) => ({
        host: chainHost,
        id: chainId,
        baseUrl,
      }),
    });
    const handlers = new WalletHandlers({ tokenStorage, authenticator });

    handlers.attach({
      app: server,
      action: 'login',
      claims: {
        profile: ({ userDid, walletOS, walletVersion }) => {
          expect(userDid).toEqual(user.toAddress());
          expect(walletOS).toEqual('ios');
          expect(walletVersion).toEqual('1.3.29');
          return {
            fields: ['fullName', 'email'],
            description: 'test',
          };
        },
      },
      onAuth: async ({ claims, walletOS, walletVersion }) => {
        const profile = claims.find(x => x.type === 'profile');
        // eslint-disable-next-line no-console
        console.log({ profile, walletOS, walletVersion });
        expect(profile).toBeTruthy();
        expect(profile.email).toEqual('shijun@arcblock.io');
        expect(profile.fullName).toEqual('wangshijun');
        expect(walletOS).toEqual('ios');
        expect(walletVersion).toEqual('1.3.29');
      },
    });

    // Test api endpoint
    const { data: info } = await axios.get(`${server.url}/api/did/login/token`);
    const getTokenState = () => axios.get(`${server.url}/api/did/login/status?_t_=${info.token}`);
    expect(info.token).toBeTruthy();
    expect(info.url.indexOf(info.token) > 0).toBeTruthy();

    // Parse auth url from wallet
    const parsed = url.parse(info.url);
    const authUrl = decodeURIComponent(qs.parse(parsed.search).url);
    expect(authUrl.indexOf(info.token) > 0).toBeTruthy();

    // Check token status
    const { data: info2 } = await getTokenState();
    expect(info2.token).toEqual(info.token);
    expect(info2.status).toEqual('created');
    expect(info2.currentStep).toEqual(0);

    // Simulate wallet scan
    const { data: info3 } = await axios.get(authUrl, { headers });
    expect(info3.appPk).toEqual(toBase58(app.publicKey));
    expect(Jwt.verify(info3.authInfo, info3.appPk)).toEqual(true);

    // Check token status
    const { data: info4 } = await getTokenState();
    expect(info4.token).toEqual(info.token);
    expect(info4.status).toEqual('scanned');
    expect(info4.currentStep).toEqual(0);

    const authInfo1 = Jwt.decode(info3.authInfo);
    expect(authInfo1.iss).toEqual(`did:abt:${app.toAddress()}`);
    expect(authInfo1.appInfo.link).toEqual(server.url);
    expect(authInfo1.chainInfo.baseUrl).toEqual(server.url);

    const { origin, pathname, search } = new URL(authInfo1.url);
    const submitAuthUrl = `${origin}${pathname}/submit${search}`;

    // Submit auth principal
    const { data: info5 } = await axios.get(submitAuthUrl, {
      params: {
        userPk: toBase58(user.publicKey),
        userInfo: Jwt.sign(user.toAddress(), user.secretKey, { requestedClaims: [], challenge: authInfo1.challenge }),
      },
      headers,
    });

    const authInfo2 = Jwt.decode(info5.authInfo);

    expect(authInfo1.challenge).toBeTruthy();
    expect(authInfo2.challenge).toBeTruthy();
    expect(authInfo1.challenge).not.toEqual(authInfo2.challenge);

    // Check store status: scanned
    const { data: info6 } = await getTokenState();
    expect(info6.token).toEqual(info.token);
    expect(info6.status).toEqual('scanned');
    expect(info6.currentStep).toEqual(1);

    const { origin: origin1, pathname: pathname1, search: search1 } = new URL(authInfo2.url);
    const submitAuth2Url = `${origin1}${pathname1}/submit${search1}`;

    const { data: info7 } = await axios.get(submitAuth2Url, {
      params: {
        userPk: toBase58(user.publicKey),
        userInfo: Jwt.sign(user.toAddress(), user.secretKey, {
          requestedClaims: [{ type: 'profile', email: 'shijun@arcblock.io', fullName: 'wangshijun' }],
          challenge: authInfo2.challenge,
        }),
      },
      headers,
    });
    const authInfo3 = Jwt.decode(info7.authInfo);
    // eslint-disable-next-line no-console
    console.log('authInfo3', authInfo3);

    // Check store status: succeed
    const { data: info8 } = await getTokenState();
    expect(info8.token).toEqual(info.token);
    expect(info8.status).toEqual('succeed');
    expect(info8.currentStep).toEqual(1);
  });

  afterAll(async () => {
    await server.close();
  });
});
