module.exports = {
  signer: {
    ed25519: require('./signer/ed25519'),
    secp256k1: require('./signer/secp256k1'),
  },
  hasher: {
    sha2: require('./hasher/sha2'),
    sha3: require('./hasher/sha3'),
    keccakf1600: require('./hasher/keccakf1600'),
  },
  crypter: {
    aes: require('./crypter/aes'),
  },
};
