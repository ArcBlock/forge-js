const multibase = require('multibase');
const base64 = require('base64-url');
const { bytesToHex } = require('@arcblock/forge-util');
const Mcrypto = require('@arcblock/mcrypto');
const {
  types,
  fromSecretKey,
  fromPublicKey,
  fromPublicKeyHash,
  fromHash,
  toTypeInfo,
  fromTypeInfo,
  isValid,
  isFromPublicKey,
  jwtSign,
  jwtVerify,
} = require('../lib/index');

const sk = '0xD67C071B6F51D2B61180B9B1AA9BE0DD0704619F0E30453AB4A592B036EDE644E4852B7091317E3622068E62A5127D1FB0D4AE2FC50213295E10652D2F0ABFC7';
const pk = '0xE4852B7091317E3622068E62A5127D1FB0D4AE2FC50213295E10652D2F0ABFC7';
const appId = 'zNKtCNqYWLYWYW3gWRA1vnRykfCBZYHZvzKr';
const appIdSecp256k1 = 'zNYm1gM23ZGHNYDYyBwSaywzTqLKoj4WuTeC';
const userId = 'z1nfCgfPqvSQCaZ2EVZPXbwPjKCkMrqfTUu';
const appType = {
  role: types.RoleType.ROLE_APPLICATION,
  pk: types.KeyType.ED25519,
  hash: types.HashType.SHA3,
};

describe('@arcblock/did', () => {
  it('should have functions', () => {
    expect(typeof fromSecretKey).toEqual('function');
    expect(typeof fromPublicKey).toEqual('function');
    expect(typeof fromPublicKeyHash).toEqual('function');
    expect(typeof fromHash).toEqual('function');

    expect(typeof fromTypeInfo).toEqual('function');
    expect(typeof toTypeInfo).toEqual('function');
    expect(typeof isValid).toEqual('function');
    expect(typeof isFromPublicKey).toEqual('function');

    expect(typeof jwtSign).toEqual('function');
    expect(typeof jwtVerify).toEqual('function');
  });

  it('should generate expected did from secretKey', () => {
    const address = fromSecretKey(sk, appType);
    expect(address).toEqual(appId);
  });

  it('should generate expected did from publicKey', () => {
    const address = fromPublicKey(pk, appType);
    expect(address).toEqual(appId);
    expect(
      fromPublicKey(pk, {
        role: types.RoleType.ROLE_APPLICATION,
        pk: types.KeyType.SECP256K1,
        hash: types.HashType.SHA3,
      })
    ).toEqual(appIdSecp256k1);
  });

  it('should generate expected did from public key hash', () => {
    const address = fromPublicKeyHash(Mcrypto.Hasher.SHA3.hash256(pk), appType);
    expect(address).toEqual(appId);
  });

  it('should generate expected did from hash', () => {
    const address = fromHash(Mcrypto.Hasher.SHA3.hash256(pk), types.RoleType.ROLE_APPLICATION);
    expect(address).toEqual(appId);
  });

  it('should get type info as expected', () => {
    const typeInfo = toTypeInfo(appId);
    expect(typeInfo).toEqual(appType);
  });

  it('should get type info as expected: string', () => {
    const typeInfo = toTypeInfo(appId, true);
    expect(typeInfo.role).toEqual('ROLE_APPLICATION');
    expect(typeInfo.pk).toEqual('ED25519');
    expect(typeInfo.hash).toEqual('SHA3');
  });

  it('should get type hex as expected', () => {
    const typeHex = fromTypeInfo(appType);
    expect(typeHex).toEqual('0c01');
  });

  it('should validate did as expected', () => {
    expect(isValid(appId)).toEqual(true);
    expect(isValid(userId)).toEqual(true);
    expect(isValid(`did:abt:${appId}`)).toEqual(true);
    expect(isValid(`did:abt:${userId}`)).toEqual(true);
    expect(isValid('abc')).toEqual(false);
  });

  it('should match did and pk work as expected', () => {
    expect(isFromPublicKey(appId, pk)).toEqual(true);
    expect(isFromPublicKey('abc', pk)).toEqual(false);
  });

  it('should match elixir did test case', () => {
    expect(
      fromSecretKey(
        '0x3E0F9A313300226D51E33D5D98A126E86396956122E97E32D31CEE2277380B83FF47B3022FA503EAA1E9FA4B20FA8B16694EA56096F3A2E9109714062B3486D9'
      )
    ).toEqual('z1ioGHFYiEemfLa3hQjk4JTwWTQPu1g2YxP');

    expect(
      fromSecretKey('0x26954E19E8781905E2CF91A18AE4F36A954C142176EE1BC27C2635520C49BC55', {
        pk: types.KeyType.SECP256K1,
      })
    ).toEqual('z1Ee1H8g248HqroacmEnZzMYgbhjz1Z2WSvv');

    expect(isValid('did:abt:z1muQ3xqHQK2uiACHyChikobsiY5kLqtShA')).toEqual(true);
    expect(isValid('z1muQ3xqHQK2uiACHyChikobsiY5kLqtShA')).toEqual(true);
    expect(isValid('z2muQ3xqHQK2uiACHyChikobsiY5kLqtShA')).toEqual(false);
    expect(isValid('z1muQ3xqHQK2uiACHyChikobsiY5kLqtSha')).toEqual(false);
  });

  it('should do stable sort on sign', () => {
    const token1 = jwtSign(appId, sk, {
      key: 'value',
      value: 'key',
      iat: 123,
      nbf: 123,
      exp: 123,
    });
    const token2 = jwtSign(appId, sk, {
      value: 'key',
      key: 'value',
      iat: 123,
      nbf: 123,
      exp: 123,
    });
    expect(token1).toEqual(token2);
  });

  it('should sign and verify jwt token', () => {
    const token = jwtSign(appId, sk, { key: 'value' });
    const [, bodyB64] = token.split('.');
    const body = JSON.parse(base64.decode(base64.unescape(bodyB64)));
    const result = jwtVerify(token, pk);
    expect(result).toEqual(true);
    expect(body.key).toEqual('value');
  });

  it('should be able to verify jwt token signed by elixir', () => {
    const pk = '0xE4852B7091317E3622068E62A5127D1FB0D4AE2FC50213295E10652D2F0ABFC7';
    const token = 'eyJhbGciOiJFZDI1NTE5IiwidHlwIjoiSldUIn0.eyJrZXkiOiJ2YWx1ZSIsImlzcyI6ImRpZDphYnQ6ek5LdENOcVlXTFlXWVczZ1dSQTF2blJ5a2ZDQlpZSFp2ektyIn0.5cP-B1SCbPUZsq9NeFSRyRXBncvljUrowHd6EWCPrK-LP2j7pHQb1j9h2ZdaU2435HXL_EYChN7teilTa6xYDA';
    const result = jwtVerify(token, pk);
    expect(result).toEqual(true);
  });

  // FIXME: this signature is valid in both java and elixir
  it.skip('should be able to verify jwt token signed by java', () => {
    const pk = bytesToHex(multibase.decode('z2wxiRgf3fm2hmBGPJRbhLhMhYLzU5UviMitDnpELJz9a'));
    const token = 'eyJhbGciOiJFZDI1NTE5IiwidHlwIjoiSldUIn0.eyJleHAiOiIxNTU4MzQ1NDExIiwiaWF0IjoiMTU1ODM0NTM1MSIsImlzcyI6ImRpZDphYnQ6ejFiWVhqWWR0ZE52MlZoM0doSGlFYlg1ZkRmc2JiV1NjWlgiLCJuYmYiOiIxNTU4MzQ1MzUxIiwicmVxdWVzdGVkQ2xhaW1zIjpbeyJ0eXBlIjoicHJvZmlsZSIsImZ1bGxOYW1lIjoiYnVkZHkiLCJlbWFpbCI6IjE4NDYxMzIzM0BxcS5jb20ifV19.HxPj8bbKFYDSK_rdRe2BdK_7YJ_cP-MLiXOVqqUlF34hTlwLAjgHXZs5z6EiASFCDLz2Q622JbJbsiLKz558Cg';
    const result = jwtVerify(token, pk);
    expect(result).toEqual(true);
  });
});
