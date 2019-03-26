const Mcrypto = require('@arcblock/mcrypto');
const { fromSecretKey, WalletType } = require('@arcblock/forge-wallet');
const Authenticator = require('./authenticator');

const type = WalletType({
  role: Mcrypto.types.RoleType.ROLE_APPLICATION,
  pk: Mcrypto.types.KeyType.ED25519,
  hash: Mcrypto.types.HashType.SHA3,
});

const wallet = fromSecretKey(process.env.APP_SK, type).toJSON();

module.exports = new Authenticator({
  wallet,
  baseUrl: 'http://wangshijun.natapp1.cc',
  appInfo: {
    chainHost: 'http://did-workshop.arcblock.co:8210/api',
    chainId: 'forge',
    chainToken: 'TBA',
    copyright: 'https://example-application/copyright',
    decimals: 16,
    description: 'Starter projects to develop web application on forge',
    icon: '/images/logo@2x.png',
    name: 'Forge Web Starter',
    path: 'https://arcwallet.io/i/',
    publisher: `did:abt:${wallet.address}`,
    subtitle: 'Starter projects to develop web application on forge',
  },
});
