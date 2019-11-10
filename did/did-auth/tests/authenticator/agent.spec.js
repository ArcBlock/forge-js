/* eslint-disable no-unused-vars */
const Mcrypto = require('@arcblock/mcrypto');
const { fromRandom, WalletType } = require('@arcblock/forge-wallet');
const { toBase58 } = require('@arcblock/forge-util');
const { toDid } = require('@arcblock/did');
const { AgentAuthenticator } = require('../../lib');
const Jwt = require('../../lib/jwt');

const type = WalletType({
  role: Mcrypto.types.RoleType.ROLE_APPLICATION,
  pk: Mcrypto.types.KeyType.ED25519,
  hash: Mcrypto.types.HashType.SHA3,
});

const agent = fromRandom(type).toJSON();
const chainHost = 'https://zinc.abtnetwork.io/api';
const chainId = 'zinc-2019-05-17';

describe('#AgentAuthenticator', () => {
  test('should be a function', () => {
    expect(typeof AgentAuthenticator).toEqual('function');
  });

  const auth = new AgentAuthenticator({
    wallet: agent,
    baseUrl: 'http://zinc.abtnetwork.io/webapp',
    appInfo: {
      name: 'Connect Service',
      description: 'Demo Service that uses Authorized DID Auth',
      icon: 'https://arcblock.oss-cn-beijing.aliyuncs.com/images/wallet-round.png',
    },
    chainInfo: {
      host: chainHost,
      id: chainId,
    },
  });

  test.only('should sign correct claims and verify those claims', async () => {
    const user = fromRandom();
    const userPk = toBase58(user.publicKey);
    const userDid = user.toAddress();

    const authorizer = fromRandom(type);

    const claims = {
      profile: () => ({
        fields: ['fullName', 'email'],
        description: 'Please provide these info to continue',
      }),
    };

    const authorization = Jwt.sign(authorizer.toAddress(), authorizer.secretKey, {
      sub: agent.address,
      ops: {
        profile: ['fullName', 'mobilePhone', 'mailingAddress'],
      },
    });
    const [, content, sig] = authorization.split('.');

    const signed = await auth.sign({
      token: '123',
      userPk,
      userDid,
      claims,
      appInfo: {
        name: 'ABT Wallet Demo',
        description: 'Demo application to show the potential of ABT Wallet',
        icon: 'https://arcblock.oss-cn-beijing.aliyuncs.com/images/wallet-round.png',
      },
      authorizer: { pk: authorizer.publicKey, did: authorizer.toAddress() },
      verifiableClaims: [{ content, sig }],
    });
    expect(signed.appPk).toEqual(toBase58(authorizer.publicKey));
    const decoded = Jwt.decode(signed.authInfo);
    expect(decoded.agentDid).toEqual(agent.address);
    expect(decoded.agentPk).toEqual(toBase58(agent.pk));
    expect(decoded.iss).toEqual(toDid(authorizer.toAddress()));
    expect(decoded.appInfo.publisher).toEqual(toDid(authorizer.toAddress()));
    expect(decoded.appInfo.name).toEqual('ABT Wallet Demo');
    expect(Array.isArray(decoded.requestedClaims)).toBeTruthy();
    expect(Array.isArray(decoded.verifiableClaims)).toBeTruthy();

    // TODO: can verify authorized claim
    // expect(Jwt.verify(signed.authInfo, agent.pk)).toBeTruthy();
  });
});
