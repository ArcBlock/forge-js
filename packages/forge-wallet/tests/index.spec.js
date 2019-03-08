const { fromPublicKey, fromSecretKey, fromJSON } = require('../lib');
const { types } = require('@arcblock/mcrypto');

const sk =
  '0xD67C071B6F51D2B61180B9B1AA9BE0DD0704619F0E30453AB4A592B036EDE644E4852B7091317E3622068E62A5127D1FB0D4AE2FC50213295E10652D2F0ABFC7';
const pk = '0xE4852B7091317E3622068E62A5127D1FB0D4AE2FC50213295E10652D2F0ABFC7';
const appId = 'zNKtCNqYWLYWYW3gWRA1vnRykfCBZYHZvzKr';
const sig =
  '0x08a102851c38c072e42756c1cc70938b5499c8e9358dfe5f383823f56cdb282ffda60fcd581a02c6c673069e5afc0bf09abbe3639b61b84d64fd58ef9f083003';
const type = {
  role: types.RoleType.ROLE_APPLICATION,
  key: types.KeyType.ED25519,
  hash: types.HashType.SHA3,
};

describe('#forge-wallet', () => {
  it('should have basic functions', () => {
    expect(typeof fromPublicKey).toEqual('function');
    expect(typeof fromSecretKey).toEqual('function');
    expect(typeof fromJSON).toEqual('function');
  });

  it('should serialize to json as expected', () => {
    const wallet = fromPublicKey(pk, type);
    const json = wallet.toJSON();
    expect(json.address).toEqual(appId);

    const wallet2 = fromJSON(json);
    expect(wallet2.toAddress()).toEqual(appId);
  });

  it('should throw error when sign without sk', () => {
    const wallet = fromPublicKey(pk, type);
    try {
      wallet.sign('data to sign');
    } catch (err) {
      expect(err).toBeTruthy();
    }
  });

  it('should sign when sk is provided', () => {
    const wallet = fromSecretKey(sk, type);
    const message = 'data to sign';
    const signature = wallet.sign(message);
    expect(signature).toEqual(sig);
    expect(wallet.verify(message, signature)).toEqual(true);
  });
});
