/* eslint-disable operator-linebreak */
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
  toDid,
  toAddress,
  DidType,
  DID_TYPE_FORGE,
  DID_TYPE_ETHEREUM,
} = require('../lib/index');

const sk =
  '0xD67C071B6F51D2B61180B9B1AA9BE0DD0704619F0E30453AB4A592B036EDE644E4852B7091317E3622068E62A5127D1FB0D4AE2FC50213295E10652D2F0ABFC7';
const pk = '0xE4852B7091317E3622068E62A5127D1FB0D4AE2FC50213295E10652D2F0ABFC7';
const appId = 'zNKtCNqYWLYWYW3gWRA1vnRykfCBZYHZvzKr';
const appIdSecp256k1 = 'zNYm1gM23ZGHNYDYyBwSaywzTqLKoj4WuTeC';
const userId = 'z1nfCgfPqvSQCaZ2EVZPXbwPjKCkMrqfTUu';
const appType = {
  role: types.RoleType.ROLE_APPLICATION,
  pk: types.KeyType.ED25519,
  hash: types.HashType.SHA3,
  address: types.EncodingType.BASE58,
};

const ethereumCases = [
  {
    secretKey: '0x4646464646464646464646464646464646464646464646464646464646464646',
    publicKey:
      '0x4bc2a31265153f07e70e0bab08724e6b85e217f8cd628ceb62974247bb493382ce28cab79ad7119ee1ad3ebcdb98a16805211530ecc6cfefa1b88e6dff99232a',
    address: '0x9d8A62f656a8d1615C1294fd71e9CFb3E4855A4F',
  },
  {
    secretKey: '0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef',
    publicKey:
      '0x4646ae5047316b4230d0086c8acec687f00b1cd9d1dc634f6cb358ac0a9a8ffffe77b4dd0a4bfb95851f3b7355c781dd60f8418fc8a65d14907aff47c903a559',
    address: '0xFCAd0B19bB29D4674531d6f115237E16AfCE377c',
  },
];

describe('@arcblock/did', () => {
  test('should have functions', () => {
    expect(typeof fromSecretKey).toEqual('function');
    expect(typeof fromPublicKey).toEqual('function');
    expect(typeof fromPublicKeyHash).toEqual('function');
    expect(typeof fromHash).toEqual('function');

    expect(typeof fromTypeInfo).toEqual('function');
    expect(typeof toTypeInfo).toEqual('function');
    expect(typeof isValid).toEqual('function');
    expect(typeof isFromPublicKey).toEqual('function');
  });

  test('should generate expected did from secretKey', () => {
    const address = fromSecretKey(sk, appType);
    expect(address).toEqual(appId);
  });

  test('should generate expected did from publicKey', () => {
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

  test('should generate expected did from public key hash', () => {
    const address = fromPublicKeyHash(Mcrypto.Hasher.SHA3.hash256(pk), appType);
    expect(address).toEqual(appId);
  });

  test('should generate expected did from hash', () => {
    const address = fromHash(Mcrypto.Hasher.SHA3.hash256(pk), types.RoleType.ROLE_APPLICATION);
    expect(address).toEqual(appId);
  });

  test('should validate did as expected', () => {
    // base48 support
    expect(isValid(appId)).toEqual(true);
    expect(isValid(userId)).toEqual(true);
    expect(isValid(`did:abt:${appId}`)).toEqual(true);
    expect(isValid(`did:abt:${userId}`)).toEqual(true);
    expect(isValid('abc')).toEqual(false);
    expect(isValid('did:abt:z1muQ3xqHQK2uiACHyChikobsiY5kLqtShA')).toEqual(true);
    expect(isValid('z1muQ3xqHQK2uiACHyChikobsiY5kLqtShA')).toEqual(true);
    expect(isValid('z2muQ3xqHQK2uiACHyChikobsiY5kLqtShA')).toEqual(false);
    expect(isValid('z1muQ3xqHQK2uiACHyChikobsiY5kLqtSha')).toEqual(false);

    // base16 support
    expect(isValid('0x0021e4b8f62674897ed75df0f7356e82c6f9a64a5c13f3cc0cd3')).toEqual(true);
    expect(isValid('did:abt:0x0021e4b8f62674897ed75df0f7356e82c6f9a64a5c13f3cc0cd3')).toEqual(true);

    // ethereum support
    ethereumCases.forEach(({ address }) => {
      expect(isValid(address)).toEqual(true);
      expect(isValid(`did:abt:${address}`)).toEqual(true);
    });
  });

  test('should match did and pk work as expected', () => {
    expect(isFromPublicKey(appId, pk)).toEqual(true);
    expect(isFromPublicKey('abc', pk)).toEqual(false);
  });

  test('should match elixir did test case', () => {
    const sk1 = '0x3E0F9A313300226D51E33D5D98A126E86396956122E97E32D31CEE2277380B83FF47B3022FA503EAA1E9FA4B20FA8B16694EA56096F3A2E9109714062B3486D9'; // prettier-ignore
    expect(fromSecretKey(sk1)).toEqual('z1ioGHFYiEemfLa3hQjk4JTwWTQPu1g2YxP');
    expect(fromSecretKey(sk1, { role: types.RoleType.ROLE_NODE })).toEqual('z89nF4GRYvgw5mqk8NqVVC7NeZLWKbcbQY7V');
    expect(fromSecretKey(sk1, { role: types.RoleType.ROLE_VALIDATOR })).toEqual('zyt2vg6n8424c9xdXLGj1g27finM77ZN5KQL');

    const pk1 = '0xFF47B3022FA503EAA1E9FA4B20FA8B16694EA56096F3A2E9109714062B3486D9';
    expect(fromPublicKey(pk1)).toEqual('z1ioGHFYiEemfLa3hQjk4JTwWTQPu1g2YxP');
    expect(fromPublicKey(pk1, { role: types.RoleType.ROLE_NODE })).toEqual('z89nF4GRYvgw5mqk8NqVVC7NeZLWKbcbQY7V');
    expect(fromPublicKey(pk1, { role: types.RoleType.ROLE_VALIDATOR })).toEqual('zyt2vg6n8424c9xdXLGj1g27finM77ZN5KQL');

    expect(
      fromSecretKey('0x26954E19E8781905E2CF91A18AE4F36A954C142176EE1BC27C2635520C49BC55', {
        pk: types.KeyType.SECP256K1,
      })
    ).toEqual('z1Ee1H8g248HqroacmEnZzMYgbhjz1Z2WSvv');

    expect(
      fromSecretKey('0x26954E19E8781905E2CF91A18AE4F36A954C142176EE1BC27C2635520C49BC55', {
        pk: types.KeyType.SECP256K1,
        address: types.EncodingType.BASE16,
      })
    ).toEqual('0x0021e4b8f62674897ed75df0f7356e82c6f9a64a5c13f3cc0cd3');
  });

  test('should generate eth address from privateKey as expected', () => {
    ethereumCases.forEach(({ secretKey, address }) => {
      expect(fromSecretKey(secretKey, 'eth')).toEqual(address);
    });
  });

  test('should generate eth address from publicKey as expected', () => {
    ethereumCases.forEach(({ publicKey, address }) => {
      expect(fromPublicKey(publicKey, 'eth')).toEqual(address);
    });
  });

  test('should validate eth address from publicKey as expected', () => {
    ethereumCases.forEach(({ publicKey, address }) => {
      expect(isFromPublicKey(address, publicKey)).toEqual(true);
    });
  });
});

describe('toDid & toAddress', () => {
  test('should remove prefix', () => {
    expect(toDid('did:abt:z1muQ3xqHQK2uiACHyChikobsiY5kLqtShA')).toEqual('did:abt:z1muQ3xqHQK2uiACHyChikobsiY5kLqtShA');
    expect(toDid('z1muQ3xqHQK2uiACHyChikobsiY5kLqtShA')).toEqual('did:abt:z1muQ3xqHQK2uiACHyChikobsiY5kLqtShA');
  });

  test('should prepend prefix', () => {
    expect(toAddress('did:abt:z1muQ3xqHQK2uiACHyChikobsiY5kLqtShA')).toEqual('z1muQ3xqHQK2uiACHyChikobsiY5kLqtShA');
    expect(toAddress('z1muQ3xqHQK2uiACHyChikobsiY5kLqtShA')).toEqual('z1muQ3xqHQK2uiACHyChikobsiY5kLqtShA');
  });
});

describe('DidType', () => {
  test('should merge default wallet-type', () => {
    let t = DidType();
    expect(t).toEqual(DID_TYPE_FORGE);

    t = DidType({ role: types.RoleType.ROLE_ACCOUNT });
    expect(t).toEqual(DID_TYPE_FORGE);
  });

  test('should fromJson and toJson work', () => {
    const t = DidType();
    const json = {
      address: 'BASE58',
      hash: 'SHA3',
      pk: 'ED25519',
      role: 'ROLE_ACCOUNT',
    };
    expect(DidType.toJSON(t)).toEqual(json);
    expect(DidType.fromJSON(json)).toEqual(t);
  });

  test('should string defaults work', () => {
    expect(DidType('default')).toEqual(DID_TYPE_FORGE);
    expect(DidType('forge')).toEqual(DID_TYPE_FORGE);
    expect(DidType('eth')).toEqual(DID_TYPE_ETHEREUM);
  });

  test('should get type info as expected', () => {
    const typeInfo = toTypeInfo(appId);
    expect(typeInfo).toEqual(appType);
  });

  test('should get type info as expected: string', () => {
    const typeInfo = toTypeInfo(appId, true);
    expect(typeInfo.role).toEqual('ROLE_APPLICATION');
    expect(typeInfo.pk).toEqual('ED25519');
    expect(typeInfo.hash).toEqual('SHA3');
  });

  test('should get type info as expected: bot', () => {
    const typeInfo = toTypeInfo('zcXdrcDeYJgZ5Nkc3eBgXQKTrXc2B7hwzoiy', true);
    expect(typeInfo.role).toEqual('ROLE_BOT');
    expect(typeInfo.pk).toEqual('ED25519');
    expect(typeInfo.hash).toEqual('SHA3');
  });

  test('should get type info as expected: ethereum', () => {
    const address = '0xFCAd0B19bB29D4674531d6f115237E16AfCE377c';
    let typeInfo = toTypeInfo(address);
    expect(typeInfo).toEqual(DID_TYPE_ETHEREUM);

    typeInfo = toTypeInfo(`did:abt:${address}`);
    expect(typeInfo).toEqual(DID_TYPE_ETHEREUM);

    typeInfo = toTypeInfo(address, true);
    expect(typeInfo.role).toEqual('ROLE_ACCOUNT');
    expect(typeInfo.pk).toEqual('ETHEREUM');
    expect(typeInfo.hash).toEqual('KECCAK');
  });

  test('should get type info as expected: base16', () => {
    const address = '0x0021e4b8f62674897ed75df0f7356e82c6f9a64a5c13f3cc0cd3';
    const typeInfo = toTypeInfo(address);
    expect(typeInfo).toEqual({
      role: types.RoleType.ROLE_ACCOUNT,
      pk: types.KeyType.SECP256K1,
      hash: types.HashType.SHA3,
      address: types.EncodingType.BASE16,
    });
  });

  test('should get type hex as expected', () => {
    const typeHex = fromTypeInfo(appType);
    expect(typeHex).toEqual('0c01');
  });
});
