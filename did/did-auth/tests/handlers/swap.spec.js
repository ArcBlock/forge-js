const axios = require('axios');
const qs = require('querystring');
const url = require('url');
const ForgeSDK = require('@arcblock/forge-sdk');
const Mcrypto = require('@arcblock/mcrypto');
const MemoryAuthStorage = require('@arcblock/did-auth-storage-memory');
const MemorySwapStorage = require('@arcblock/swap-storage-memory');
const createTestServer = require('create-test-server');
const { fromRandom, WalletType } = require('@arcblock/forge-wallet');
const { toBase58 } = require('@arcblock/forge-util');

const { SwapHandlers, WalletAuthenticator } = require('../../lib');
const Jwt = require('../../lib/jwt');

const type = WalletType({
  role: Mcrypto.types.RoleType.ROLE_APPLICATION,
  pk: Mcrypto.types.KeyType.ED25519,
  hash: Mcrypto.types.HashType.SHA3,
});

const user = fromRandom();
const app = fromRandom(type);
const chainHost = 'http://47.104.23.85:8213/api';
const chainId = 'playground';
const assetChainHost = 'https://zinc.network.arcblockio.cn/api';
const assetChainId = 'zinc-2019-05-17';
const sleep = timeout => new Promise(resolve => setTimeout(resolve, timeout));

describe('#SwapHandlers', () => {
  let server;

  beforeAll(async () => {
    server = await createTestServer();
  });

  test('should be a function', () => {
    expect(typeof SwapHandlers).toEqual('function');
  });

  afterAll(async () => {
    await sleep(2000);
    await server.close();
  });

  if (process.env.CI) {
    return;
  }

  test('should handle atomic swap as expected', async () => {
    const tokenStorage = new MemoryAuthStorage();
    const swapStorage = new MemorySwapStorage();
    const authenticator = new WalletAuthenticator({
      wallet: app.toJSON(),
      baseUrl: server.url,
      appInfo: {
        name: 'ABT Wallet Demo',
        description: 'Demo application to show the potential of ABT Wallet',
        icon: 'https://arcblock.oss-cn-beijing.aliyuncs.com/images/wallet-round.png',
      },
      chainInfo: {
        host: chainHost,
        id: chainId,
      },
    });
    const handlers = new SwapHandlers({
      tokenStorage,
      swapStorage,
      authenticator,
      offerChainHost: chainHost,
      offerChainId: chainId,
      demandChainHost: assetChainHost,
      demandChainId: assetChainId,
    });

    const offerToken = (await ForgeSDK.fromTokenToUnit(5, { conn: chainId })).toString();
    const demandToken = (await ForgeSDK.fromTokenToUnit(1, { conn: assetChainId })).toString();

    handlers.attach({
      app: server,
      action: 'swap',
      claims: {
        swap: async ({ userDid, extraParams: { traceId } }) => {
          try {
            const payload = {
              offerAssets: [],
              offerToken,
              offerUserAddress: app.toAddress(), // 卖家地址
              demandAssets: [],
              demandToken,
              demandUserAddress: userDid, // 买家地址
              demandLocktime: await ForgeSDK.toLocktime(2400, { conn: assetChainId }),
            };

            const swap = await swapStorage.finalize(traceId, payload);

            return Object.assign(
              {
                swapId: traceId,
                receiver: app.toAddress(),
              },
              swap
            );
          } catch (err) {
            throw new Error('换币失败，请重试');
          }
        },
      },

      onAuth: async ({ claims, userDid }) => {
        // eslint-disable-next-line no-console
        console.log('swap.onAuth', { claims, userDid });
      },
    });

    // Declare account on-chain
    const hash1 = await ForgeSDK.declare({ moniker: 'user', wallet: user }, { conn: chainId });
    const hash2 = await ForgeSDK.declare({ moniker: 'user', wallet: user }, { conn: assetChainId });
    const hash3 = await ForgeSDK.declare({ moniker: 'application', wallet: app }, { conn: chainId });
    const hash4 = await ForgeSDK.declare({ moniker: 'application', wallet: app }, { conn: assetChainId });
    expect(hash1).toBeTruthy();
    expect(hash2).toBeTruthy();
    expect(hash3).toBeTruthy();
    expect(hash4).toBeTruthy();
    // console.log('declare', { hash1, hash2, hash3, hash4 });

    // Poke on chain
    const hash5 = await ForgeSDK.checkin({ wallet: user }, { conn: assetChainId });
    const hash6 = await ForgeSDK.checkin({ wallet: app }, { conn: chainId });
    expect(hash5).toBeTruthy();
    expect(hash6).toBeTruthy();
    // console.log('checkin', { hash5, hash6 });

    // Init new swap placeholder
    const {
      data: { status, traceId },
    } = await axios.post(`${server.url}/api/swap`, {});
    expect(traceId).toBeTruthy();
    expect(status).toEqual('not_started');

    // Test api endpoint
    const { data: info } = await axios.get(`${server.url}/api/did/swap/token?traceId=${traceId}`);
    expect(info.token).toBeTruthy();
    expect(info.url.indexOf(info.token) > 0).toBeTruthy();

    const getTokenState = () => axios.get(`${server.url}/api/did/swap/status?_t_=${info.token}&traceId=${traceId}`);
    const getSwapState = () => swapStorage.read(traceId);

    // Parse auth url from wallet
    const parsed = url.parse(info.url);
    const authUrl = decodeURIComponent(qs.parse(parsed.search).url);
    expect(authUrl.indexOf(info.token) > 0).toBeTruthy();
    expect(authUrl.indexOf(traceId) > 0).toBeTruthy();

    // Check token status
    const { data: info2 } = await getTokenState();
    expect(info2.token).toEqual(info.token);
    expect(info2.status).toEqual('created');
    expect(info2.currentStep).toEqual(0);

    // Simulate wallet scan
    const { data: info3 } = await axios.get(authUrl);
    expect(info3.appPk).toEqual(toBase58(app.publicKey));
    expect(Jwt.verify(info3.authInfo, info3.appPk)).toEqual(true);

    // Check token status
    const { data: info4 } = await getTokenState();
    expect(info4.token).toEqual(info.token);
    expect(info4.status).toEqual('scanned');
    expect(info4.currentStep).toEqual(0);

    const authInfo1 = Jwt.decode(info3.authInfo);
    expect(authInfo1.iss).toEqual(`did:abt:${app.toAddress()}`);
    // console.log('authInfo1', authInfo1);

    // Submit auth principal
    const { data: info5 } = await axios.post(authInfo1.url, {
      userPk: toBase58(user.publicKey),
      userInfo: Jwt.sign(user.toAddress(), user.secretKey, { requestedClaims: [] }),
    });
    const authInfo2 = Jwt.decode(info5.authInfo);
    const [claim] = authInfo2.requestedClaims;
    // console.log('authInfo2', authInfo2);
    expect(claim.receiver).toEqual(app.toAddress());
    expect(claim.swapId).toEqual(traceId);
    expect(claim.offerToken).toEqual(offerToken);
    expect(claim.demandToken).toEqual(demandToken);

    // Check store status: scanned
    const { data: info6 } = await getTokenState();
    expect(info6.token).toEqual(info.token);
    expect(info6.status).toEqual('scanned');
    expect(info6.currentStep).toEqual(1);

    // Setup swap for user
    const hashkey = Mcrypto.getRandomBytes(32);
    const hashlock = Mcrypto.Hasher.SHA3.hash256(hashkey);
    const [hash7, swapAddress] = await ForgeSDK.setupSwap(
      {
        token: 1,
        assets: [],
        receiver: claim.receiver,
        hashlock,
        locktime: claim.demandLocktime,
        isLocktimeAbsolute: true,
        wallet: user,
      },
      { conn: assetChainId }
    );
    expect(hash7).toBeTruthy();
    expect(swapAddress).toBeTruthy();
    await sleep(3000);
    // console.log('setup.swap', { hash7, swapAddress });

    // Submit swap claim
    const { data: info7 } = await axios.post(authInfo2.url, {
      userPk: toBase58(user.publicKey),
      userInfo: Jwt.sign(user.toAddress(), user.secretKey, {
        requestedClaims: [Object.assign({ address: swapAddress }, claim)],
      }),
    });
    const authInfo3 = Jwt.decode(info7.authInfo);
    expect(authInfo3.response).toBeTruthy();
    expect(authInfo3.response.callback).toBeTruthy();
    // console.log('authInfo3', authInfo3);

    // Check store status: succeed
    const { data: info8 } = await getTokenState();
    expect(info8.token).toEqual(info.token);
    expect(info8.status).toEqual('succeed');
    expect(info8.currentStep).toEqual(1);

    // Trigger server setup
    const retrieveUrl = authInfo3.response.callback;
    const payload = {
      userPk: toBase58(user.publicKey),
      userInfo: Jwt.sign(user.toAddress(), user.secretKey, {
        requestedClaims: [Object.assign({ address: swapAddress }, claim)],
      }),
    };

    const doRetrieve = () =>
      new Promise(resolve => {
        axios.post(retrieveUrl, payload).then(async res => {
          const { data: info9 } = res;
          const authInfo4 = Jwt.decode(info9.authInfo);
          // console.log('authInfo4', authInfo4);
          expect(authInfo4.response).toBeTruthy();
          expect(authInfo4.response.swapAddress).toBeTruthy();

          // User retrieve
          // eslint-disable-next-line no-unreachable
          const hash8 = await ForgeSDK.retrieveSwap(
            {
              address: authInfo4.response.swapAddress,
              hashkey,
              wallet: user,
            },
            { conn: chainId }
          );
          expect(hash8).toBeTruthy();
          await sleep(3000);

          // Check swap status
          const swap = await getSwapState();
          // expect(swap.status).toEqual('both_retrieve');
          expect(swap.offerToken).toEqual(offerToken);
          expect(swap.offerSetupHash).toBeTruthy();
          expect(swap.offerSwapAddress).toBeTruthy();
          // expect(swap.offerRetrieveHash).toEqual(hash8);

          expect(swap.demandToken).toEqual(demandToken);
          expect(swap.demandSetupHash).toEqual(hash7);
          expect(swap.demandSwapAddress).toEqual(swapAddress);
          // expect(swap.demandUserAddress).toEqual(user.toAddress());
          // expect(swap.demandRetrieveHash).toBeTruthy();

          resolve();
        });
      });

    const doRetrieveAgain = () =>
      new Promise(async resolve => {
        await sleep(100);

        // Simulator duplicate retrieve
        axios.post(retrieveUrl, payload).then(res => {
          const { data: info9 } = res;
          const authInfo4 = Jwt.decode(info9.authInfo);
          expect(authInfo4.status).toEqual('error');
          expect(authInfo4.errorMessage).toEqual('A retrieve is in progress, please retry if that retrieve failed');

          resolve();
        });
      });

    await Promise.all([doRetrieve(), doRetrieveAgain()]);
  }, 20000);
});
