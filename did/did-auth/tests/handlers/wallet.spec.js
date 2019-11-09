const Mcrypto = require('@arcblock/mcrypto');
const { fromRandom, WalletType } = require('@arcblock/forge-wallet');
const Authenticator = require('../../lib').WalletAuthenticator;
const Handlers = require('../../lib').WalletHandlers;

const type = WalletType({
  role: Mcrypto.types.RoleType.ROLE_APPLICATION,
  pk: Mcrypto.types.KeyType.ED25519,
  hash: Mcrypto.types.HashType.SHA3,
});

const wallet = fromRandom(type).toJSON();
const chainHost = 'https://zinc.abtnetwork.io/api';
const chainId = 'zinc-2019-05-17';

const authenticator = new Authenticator({
  wallet,
  baseUrl: 'http://zinc.abtnetwork.io/webapp',
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

describe('#Handlers', () => {
  test('should be a function', () => {
    expect(typeof Handlers).toEqual('function');
  });

  test('should be a function', () => {
    expect(typeof Handlers).toEqual('function');
  });
});
