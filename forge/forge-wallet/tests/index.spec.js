const { types } = require('@arcblock/mcrypto');
const { fromRandom, fromPublicKey, fromSecretKey, fromJSON, fromAddress, isValid } = require('../lib');

const sk =
  '0xD67C071B6F51D2B61180B9B1AA9BE0DD0704619F0E30453AB4A592B036EDE644E4852B7091317E3622068E62A5127D1FB0D4AE2FC50213295E10652D2F0ABFC7';
const pk = '0xE4852B7091317E3622068E62A5127D1FB0D4AE2FC50213295E10652D2F0ABFC7';
const appId = 'zNKtCNqYWLYWYW3gWRA1vnRykfCBZYHZvzKr';
const sig =
  '0x8122c608f61b04f6b574f005dc8e0463d393a7fb50e0426bca587b20778a8a9f6376bab87bc3983b0a5f1c9581f6d94162317c715a3c1c0f086be1e514399109';

const type = {
  role: types.RoleType.ROLE_APPLICATION,
  pk: types.KeyType.ED25519,
  hash: types.HashType.SHA3,
  address: types.EncodingType.BASE58,
};

describe('#forge-wallet', () => {
  test('should have basic functions', () => {
    expect(typeof fromPublicKey).toEqual('function');
    expect(typeof fromSecretKey).toEqual('function');
    expect(typeof fromJSON).toEqual('function');
  });

  test('should serialize to json as expected', () => {
    const wallet = fromPublicKey(pk, type);
    const json = wallet.toJSON();
    expect(json.address).toEqual(appId);

    const wallet2 = fromJSON(json);
    expect(wallet2.toAddress()).toEqual(appId);
  });

  test('should throw error when sign without sk', () => {
    const wallet = fromPublicKey(pk, type);
    try {
      wallet.sign('data to sign');
    } catch (err) {
      expect(err).toBeTruthy();
    }
  });

  test('should sign when sk is provided', () => {
    const wallet = fromSecretKey(sk, type);
    const message = 'data to sign';
    const signature = wallet.sign(message);
    expect(signature).toEqual(sig);
    expect(wallet.verify(message, signature)).toEqual(true);
  });

  test('should gen type from address', () => {
    const wallet = fromAddress(appId);
    expect(wallet.type.pk).toEqual(type.pk);
    expect(wallet.type.hash).toEqual(type.hash);
    expect(wallet.type.role).toEqual(type.role);
  });

  test('should detect invalid wallets', () => {
    const wallet = fromRandom();
    expect(isValid(wallet)).toEqual(true);

    const wallet2 = fromPublicKey(pk, type);
    expect(isValid(wallet2, false)).toEqual(true);
  });

  test('should generate base58 address', () => {
    const wallet = fromRandom();
    expect(wallet.toAddress().startsWith('z')).toBeTruthy();
  });

  test('should generate base16 address', () => {
    const wallet = fromRandom('eth');
    expect(wallet.toAddress().startsWith('0x')).toBeTruthy();
  });
});
