const { types, getSigner, getHasher } = require('../lib/index');

describe('#Mcrypto', () => {
  test('should be function', () => {
    expect(typeof getSigner).toEqual('function');
    expect(typeof getHasher).toEqual('function');
    expect(typeof types).toEqual('object');
  });

  test('should throw error on unsupported type', () => {
    try {
      getSigner(123);
    } catch (err) {
      expect(err).toBeTruthy();
    }
  });

  test('should return signer on supported signer type', () => {
    const signer = getSigner(types.KeyType.ED25519);
    expect(typeof signer.sign).toEqual('function');
    expect(typeof signer.verify).toEqual('function');
  });

  test('should return signer on supported hash type', () => {
    const hasher = getHasher(types.HashType.SHA3);
    expect(typeof hasher).toEqual('function');
  });
});
