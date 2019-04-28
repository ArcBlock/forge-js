/**
 * @fileOverview Forge [mcrypto](https://github.com/ArcBlock/mcrypto) implementation for javascript, just a wrapper around existing javascript crypto libraries.
 * @module @arcblock/mcrypto
 * @example
## Usage

yarn add @arcblock/mcrypto
 */

// FIXME: enum definition of forge-abi and abt-did-elixir are not exactly the same
const types = {
  KeyType: {
    ED25519: 0,
    SECP256K1: 1,
  },
  HashType: {
    KECCAK: 0,
    SHA3: 1,
    KECCAK_384: 2,
    SHA3_384: 3,
    KECCAK_512: 4,
    SHA3_512: 5,
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
    ROLE_GROUP: 9,
    ROLE_ANY: 63,
  },
  EncodingType: {
    BASE16: 0,
    BASE58: 1,
  },
};

const Mcrypto = (module.exports = {
  /**
   * Contains all supported signers, eg: `Ed25519` and `Secp256k1`
   *
   * @readonly
   * @type {object}
   * @name Signer
   * @static
   */
  Signer: {
    Ed25519: require('./signer/ed25519'),
    Secp256k1: require('./signer/secp256k1'),
  },

  /**
   * Contains all supported hasher, eg: `SHA2`,`SHA3` and `Keccak`, each of them supports `hash224`, `hash256`, `hash384`, `hash512`
   *
   * @readonly
   * @type {object}
   * @name Hasher
   * @static
   */
  Hasher: {
    SHA2: require('./hasher/sha2'),
    SHA3: require('./hasher/sha3'),
    Keccak: require('./hasher/keccak'),
  },

  /**
   * Contains all supported crypter, eg: `AES`, each of them supports `encrypt`, `decrypt`
   *
   * @name Crypter
   * @static
   */
  Crypter: {
    AES: require('./crypter/aes'),
  },

  /**
   * Contains type constants that represent can be used to compose different crypto method, each crypto method consist one of:
   *
   * - Signer
   * - Hahser
   *
   * @readonly
   * @type {object}
   * @name types
   * @static
   */
  types,

  /**
   * Get signer instance
   *
   * @function
   * @param {number} type - algorithm used to derive key pair, possible values are
   * - types.KeyType.ED25519
   * - types.KeyType.SECP256k1
   * @returns {object} signer instance
   * @example
   * const { Signer, getSigner, types } = require('@arcblock/mcrypto');
   * const message = 'some message to sign';
   *
   * // Use Signer directly
   * const keyPair = Signer.Ed25519.genKeyPair();
   * const signature = Signer.Ed25519.sign(message, keyPair.secretKey);
   * const result = Signer.Ed25519.verify(message, signature, keyPair.publicKey);
   * assert.ok(result);
   *
   * // Get signer on fly
   * const signer = getSigner(types.KeyType.ED25519);
   * const keyPair1 = signer.genKeyPair();
   * const signature1 = signer.sign(message, keyPair1.secretKey);
   * const result1 = signer.verify(message, signature1, keyPair1.publicKey);
   * assert.ok(result1);
   */
  getSigner(type) {
    if (typeof Signers[type] === 'undefined') {
      throw new Error(`Unsupported signer type: ${type}`);
    }

    return Signers[type];
  },

  /**
   * Get hasher instance
   *
   * @function
   * @param {number} type - algorithm used to hash data, possible values
   * - types.HashType.KECCAK
   * - types.HashType.KECCAK_384
   * - types.HashType.KECCAK_512
   * - types.HashType.SHA3
   * - types.HashType.SHA3_384
   * - types.HashType.SHA3_512
   * @returns {object} hasher instance
   * @example
   * const { Hasher, getHasher, types } = require('@arcblock/mcrypto');
   *
   * // Choose from Hasher
   * const message = 'message to hash';
   * const hash = Hasher.SHA2.hash256(message);
   *
   * // user getHasher
   * const hashFn = getHasher(types.HashType.SHA3);
   * const hash2 = hashFn(message);
   */
  getHasher(type) {
    if (typeof Hashers[type] === 'undefined') {
      throw new Error(`Unsupported hash type: ${type}`);
    }

    return Hashers[type];
  },
});

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
