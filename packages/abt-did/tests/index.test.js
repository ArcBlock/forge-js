const { types, fromSecretKey, fromPublicKey } = require('../lib/index');

const sk =
  '0xD67C071B6F51D2B61180B9B1AA9BE0DD0704619F0E30453AB4A592B036EDE644E4852B7091317E3622068E62A5127D1FB0D4AE2FC50213295E10652D2F0ABFC7';
const pk = '0xE4852B7091317E3622068E62A5127D1FB0D4AE2FC50213295E10652D2F0ABFC7';

describe('abt-did', () => {
  it('should have fromSecretKey & fromPublicKey function', () => {
    expect(typeof fromSecretKey).toEqual('function');
  });

  it('should generate expected did from secretKey', () => {
    const address = fromSecretKey(sk, {
      roleType: types.RoleType.ROLE_APPLICATION,
      keyType: types.KeyType.ED25519,
      hashType: types.HashType.SHA3,
    });

    expect(address).toEqual('zNKtCNqYWLYWYW3gWRA1vnRykfCBZYHZvzKr');
  });

  it('should generate expected did from publicKey', () => {
    const address = fromPublicKey(pk, {
      roleType: types.RoleType.ROLE_APPLICATION,
      keyType: types.KeyType.ED25519,
      hashType: types.HashType.SHA3,
    });

    expect(address).toEqual('zNKtCNqYWLYWYW3gWRA1vnRykfCBZYHZvzKr');
  });
});
