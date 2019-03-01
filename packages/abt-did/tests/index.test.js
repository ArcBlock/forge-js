const { types, fromSecretKey, fromPublicKey, fromAppDID } = require('../lib/index');

const seed =
  '0xa0c42a9c3ac6abf2ba6a9946ae83af18f51bf1c9fa7dacc4c92513cc4dd015834341c775dcd4c0fac73547c5662d81a9e9361a0aac604a73a321bd9103bce8af';
const sk =
  '0xD67C071B6F51D2B61180B9B1AA9BE0DD0704619F0E30453AB4A592B036EDE644E4852B7091317E3622068E62A5127D1FB0D4AE2FC50213295E10652D2F0ABFC7';
const pk = '0xE4852B7091317E3622068E62A5127D1FB0D4AE2FC50213295E10652D2F0ABFC7';
const appId = 'zNKtCNqYWLYWYW3gWRA1vnRykfCBZYHZvzKr';
const userId = 'znfCgfPqvSQCaZ2EVZPXbwPjKCkMwey1Mu';

describe('abt-did', () => {
  it('should have fromSecretKey & fromPublicKey function', () => {
    expect(typeof fromSecretKey).toEqual('function');
    expect(typeof fromPublicKey).toEqual('function');
    expect(typeof fromAppDID).toEqual('function');
  });

  it('should generate expected did from secretKey', () => {
    const address = fromSecretKey(sk, {
      roleType: types.RoleType.ROLE_APPLICATION,
      keyType: types.KeyType.ED25519,
      hashType: types.HashType.SHA3,
    });

    expect(address).toEqual(appId);
  });

  it('should generate expected did from publicKey', () => {
    const address = fromPublicKey(pk, {
      roleType: types.RoleType.ROLE_APPLICATION,
      keyType: types.KeyType.ED25519,
      hashType: types.HashType.SHA3,
    });

    expect(address).toEqual(appId);
  });
  it('should generate expected did from appId', () => {
    const uid = fromAppDID(appId, seed, {
      keyType: types.KeyType.ED25519,
      hashType: types.HashType.SHA3,
      roleType: types.RoleType.ROLE_ACCOUNT,
    });

    expect(uid).toEqual(userId);
  });
});
