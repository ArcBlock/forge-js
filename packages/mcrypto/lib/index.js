module.exports = {
  Signer: {
    Ed25519: require('./signer/ed25519'),
    Secp256k1: require('./signer/secp256k1'),
  },
  Hasher: {
    SHA2: require('./hasher/sha2'),
    SHA3: require('./hasher/sha3'),
    Keccak: require('./hasher/keccak'),
  },
  Crypter: {
    aes: require('./crypter/aes'),
  },
};
