const types = {
  KeyType: {
    ED25519: 0,
    SECP256K1: 1,
  },
  HashType: {
    KECCAK: 0,
    SHA3: 1,
    KECCAK_384: 6,
    SHA3_384: 7,
    KECCAK_512: 13,
    SHA3_512: 14,
  },
  RoleType: {
    ROLE_ACCOUNT: 0,
    ROLE_NODE: 1,
    ROLE_DEVICE: 2,
    ROLE_APPLICATION: 3,
    ROLE_SMART_CONTRACT: 4,
    ROLE_BOT: 5,
    ROLE_ASSET: 6,
    ROLE_STAKE: 7,
    ROLE_VALIDATOR: 8,
  },
};

const Mcrypto = {
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
    AES: require('./crypter/aes'),
  },

  types,
  getSigner(type) {
    if (typeof Signers[type] === 'undefined') {
      throw new Error(`Unsupported signer type: ${type}`);
    }

    return Signers[type];
  },
  getHasher(type) {
    if (typeof Hashers[type] === 'undefined') {
      throw new Error(`Unsupported hash type: ${type}`);
    }

    return Hashers[type];
  },
};

const Signers = Object.freeze({
  [types.KeyType.ED25519]: Mcrypto.Signer.Ed25519,
  [types.KeyType.SECP256K1]: Mcrypto.Signer.Secp256k1,
});

const Hashers = Object.freeze({
  [types.HashType.KECCAK]: Mcrypto.Hasher.Keccak.hash256,
  [types.HashType.KECCAK_384]: Mcrypto.Hasher.Keccak.hash384,
  [types.HashType.KECCAK_512]: Mcrypto.Hasher.Keccak.hash512,
  [types.HashType.SHA3]: Mcrypto.Hasher.SHA3.hash256,
  [types.HashType.SHA3_384]: Mcrypto.Hasher.SHA3.hash384,
  [types.HashType.SHA3_512]: Mcrypto.Hasher.SHA3.hash512,
});

module.exports = Mcrypto;
