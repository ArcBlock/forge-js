module.exports = {
  signer: {
    ed25519: require('./signer/ed25519'),
    secp256k1: require('./signer/secp256k1'),
  },
  hasher: {
    sha2: require('./hasher/sha2'),
    sha3: require('./hasher/sha3'),
    keccak: require('./hasher/keccak'),
  },
  crypter: {
    aes: require('./crypter/aes'),
  },
};
