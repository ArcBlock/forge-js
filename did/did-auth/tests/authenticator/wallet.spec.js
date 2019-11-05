const Mcrypto = require('@arcblock/mcrypto');
const { fromRandom, WalletType } = require('@arcblock/forge-wallet');
const Authenticator = require('../../lib').WalletAuthenticator;

const type = WalletType({
  role: Mcrypto.types.RoleType.ROLE_APPLICATION,
  pk: Mcrypto.types.KeyType.ED25519,
  hash: Mcrypto.types.HashType.SHA3,
});

const wallet = fromRandom(type).toJSON();
const chainHost = 'https://test.abtnetwork.io/api';
const chainId = 'test-2019-05-09';

describe('#Authenticator', () => {
  it('should be a function', () => {
    expect(typeof Authenticator).toEqual('function');
  });

  it('should create instance with certain methods', () => {
    const auth = new Authenticator({
      wallet,
      baseUrl: process.env.GATSBY_BASE_URL,
      appInfo: {
        name: 'ABT Wallet Demo',
        description: 'Demo application to show the potential of ABT Wallet',
        icon: 'https://arcblock.oss-cn-beijing.aliyuncs.com/images/wallet-round.png',
        path: 'https://abtwallet.io/i/',
        publisher: `did:abt:${wallet.address}`,
      },
      chainInfo: {
        host: chainHost,
        id: chainId,
      },
    });

    expect(typeof auth.uri).toEqual('function');
    expect(typeof auth.sign).toEqual('function');
    expect(typeof auth.verify).toEqual('function');
    expect(typeof auth.genRequestedClaims).toEqual('function');
    expect(typeof auth.getClaimInfo).toEqual('function');
    expect(typeof auth.agreement).toEqual('function');
    expect(typeof auth.profile).toEqual('function');
    expect(typeof auth.signature).toEqual('function');
  });
});
