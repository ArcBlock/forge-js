const axios = require('axios');
const qs = require('querystring');
const url = require('url');
const Mcrypto = require('@arcblock/mcrypto');
const MemoryAuthStorage = require('@arcblock/did-auth-storage-memory');
const MemoryAgentStorage = require('@arcblock/did-agent-storage-memory');
const createTestServer = require('create-test-server');
const { fromRandom, WalletType } = require('@arcblock/forge-wallet');
const { toBase58 } = require('@arcblock/forge-util');

const { AgentWalletHandlers, AgentAuthenticator } = require('../../../lib');
const Jwt = require('../../../lib/jwt');

const type = WalletType({
  role: Mcrypto.types.RoleType.ROLE_APPLICATION,
  pk: Mcrypto.types.KeyType.ED25519,
  hash: Mcrypto.types.HashType.SHA3,
});

const user = fromRandom();
const agent = fromRandom(type);
const authorizer = fromRandom(type);
const chainHost = 'http://47.104.23.85:8213/api';
const chainId = 'playground';

describe('#WalletHandlers', () => {
  let server;

  beforeEach(async () => {
    server = await createTestServer();
  });

  test('should handle common did-auth attach as expected', async () => {
    const tokenStorage = new MemoryAuthStorage();
    const agentStorage = new MemoryAgentStorage();
    const authenticator = new AgentAuthenticator({
      wallet: agent.toJSON(),
      baseUrl: server.url,
      appInfo: {
        name: 'Connect Service',
        description: 'Connect Service',
        icon: 'https://arcblock.oss-cn-beijing.aliyuncs.com/images/wallet-round.png',
      },
      chainInfo: {
        host: chainHost,
        id: chainId,
      },
    });
    const handlers = new AgentWalletHandlers({ tokenStorage, agentStorage, authenticator });

    // Create an authorization record
    const authorizeId = authorizer.toAddress();
    const authorization = Jwt.sign(authorizeId, authorizer.secretKey, {
      sub: agent.toAddress(),
      ops: {
        profile: ['fullName', 'mobilePhone', 'mailingAddress'],
      },
    });
    const [, content, sig] = authorization.split('.');
    agentStorage.create(authorizeId, {
      agentDid: agent.toAddress(),
      ownerDid: user.toAddress(),
      appDid: authorizeId,
      appPk: authorizer.publicKey,
      appName: 'ABT Wallet Demo',
      appDescription: 'Demo application to show the potential of ABT Wallet',
      appIcon: 'https://arcblock.oss-cn-beijing.aliyuncs.com/images/wallet-round.png',
      chainHost,
      certificateContent: content,
      certificateSignature: sig,
    });

    handlers.attach({
      app: server,
      action: 'login',
      claims: {
        profile: () => ({
          fields: ['fullName', 'email'],
          description: 'test',
        }),
      },
      onAuth: async ({ claims }) => {
        const profile = claims.find(x => x.type === 'profile');
        // eslint-disable-next-line no-console
        console.log('profile.onAuth', profile);
      },
    });

    // eslint-disable-next-line no-console
    console.log({
      agent: agent.toAddress(),
      user: user.toAddress(),
      authorizer: authorizer.toAddress(),
    });

    // Test api endpoint
    const { data: info } = await axios.get(`${server.url}/api/agent/${authorizeId}/login/token`);
    const getTokenState = () =>
      axios.get(`${server.url}/api/agent/${authorizeId}/login/status?_t_=${info.token}`);
    expect(info.token).toBeTruthy();

    // Parse auth url from wallet
    const parsed = url.parse(info.url);
    const authUrl = decodeURIComponent(qs.parse(parsed.search).url);
    expect(authUrl.indexOf(info.token) > 0).toBeTruthy();
    expect(authUrl.indexOf(authorizeId) > 0).toBeTruthy();

    // Check token status
    const { data: info2 } = await getTokenState();
    expect(info2.token).toEqual(info.token);
    expect(info2.status).toEqual('created');
    expect(info2.currentStep).toEqual(0);

    // Simulate wallet scan
    const { data: info3 } = await axios.get(authUrl);
    expect(info3.appPk).toEqual(toBase58(authorizer.publicKey));
    expect(Jwt.verify(info3.authInfo, agent.publicKey, { signerKey: 'agentDid' })).toEqual(true);

    // Check token status
    const { data: info4 } = await getTokenState();
    expect(info4.token).toEqual(info.token);
    expect(info4.status).toEqual('scanned');
    expect(info4.currentStep).toEqual(0);

    const authInfo1 = Jwt.decode(info3.authInfo);
    // console.log('authInfo1', authInfo1);
    expect(authInfo1.status).toEqual('ok');
    expect(authInfo1.iss).toEqual(`did:abt:${authorizer.toAddress()}`);
    expect(authInfo1.agentDid).toEqual(agent.toAddress());
    expect(authInfo1.agentPk).toEqual(toBase58(agent.publicKey));
    expect(Array.isArray(authInfo1.verifiableClaims)).toEqual(true);
    const [claim] = authInfo1.verifiableClaims;
    expect(claim).toBeTruthy();
    expect(claim.type).toEqual('certificate');
    expect(claim.content).toEqual(content);
    expect(claim.sig).toEqual(sig);

    // Submit auth principal
    const { data: info5 } = await axios.post(authInfo1.url, {
      userPk: toBase58(user.publicKey),
      userInfo: Jwt.sign(user.toAddress(), user.secretKey, { requestedClaims: [] }),
    });
    const authInfo2 = Jwt.decode(info5.authInfo);
    expect(authInfo2.status).toEqual('ok');
    // console.log('authInfo2', authInfo2);

    // Check store status: scanned
    const { data: info6 } = await getTokenState();
    expect(info6.token).toEqual(info.token);
    expect(info6.status).toEqual('scanned');
    expect(info6.currentStep).toEqual(1);

    // Submit profile claim
    const { data: info7 } = await axios.post(authInfo2.url, {
      userPk: toBase58(user.publicKey),
      userInfo: Jwt.sign(user.toAddress(), user.secretKey, {
        requestedClaims: [{ type: 'profile', email: 'shijun@arcblock.io', fullName: 'wangshijun' }],
      }),
    });
    const authInfo3 = Jwt.decode(info7.authInfo);
    expect(authInfo3.status).toEqual('ok');
    // console.log('authInfo3', authInfo3);

    // Check store status: succeed
    const { data: info8 } = await getTokenState();
    expect(info8.token).toEqual(info.token);
    expect(info8.status).toEqual('succeed');
    expect(info8.currentStep).toEqual(1);
  });

  afterEach(async () => {
    await server.close();
  });
});
