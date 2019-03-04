const padStart = require('lodash/padStart');
const { toBN } = require('@arcblock/forge-util');
const Mcrypto = require('@arcblock/mcrypto');
const multibase = require('multibase');

const DID_PREFIX = /^did:abt:/i;

const enums = Object.freeze({
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
});

const signer = Object.freeze({
  [enums.KeyType.ED25519]: Mcrypto.Signer.Ed25519,
  [enums.KeyType.SECP256K1]: Mcrypto.Signer.Secp256k1,
});

const hasher = Object.freeze({
  [enums.HashType.KECCAK]: Mcrypto.Hasher.Keccak.hash256,
  [enums.HashType.KECCAK_384]: Mcrypto.Hasher.Keccak.hash384,
  [enums.HashType.KECCAK_512]: Mcrypto.Hasher.Keccak.hash512,
  [enums.HashType.SHA3]: Mcrypto.Hasher.SHA3.hash256,
  [enums.HashType.SHA3_384]: Mcrypto.Hasher.SHA3.hash384,
  [enums.HashType.SHA3_512]: Mcrypto.Hasher.SHA3.hash512,
});

/**
 * Convert did to bytes with length of 26
 *
 * @param {string} did
 * @returns {Buffer}
 */
const toBytes = did => {
  try {
    let bytes = multibase.decode(did.replace(DID_PREFIX, ''));
    while (bytes.length < 26) {
      bytes = Buffer.concat([Buffer.from([0]), bytes]);
    }

    return bytes;
  } catch (err) {
    throw new Error(`Cannot convert DID string to byte array: ${err.message}`);
  }
};

/**
 * Convert number to bit string with predefined length
 *
 * @param {string} decimal
 * @param {number} length
 * @returns String
 */
const toBits = (decimal, length) => padStart(toBN(decimal).toString(2), length, '0');

/**
 * Ensure the hex length is even number, 2, 4, 6, 8
 *
 * @param {string} hex
 * @param {number} length
 * @returns {string} hex
 */
const toStrictHex = (hex, length) => {
  const str = hex.replace(/^0x/i, '');

  if (typeof length === 'number' && length % 2 === 0) {
    return padStart(hex, length, '0');
  }

  return str.length % 2 === 0 ? str : `0${str}`;
};

module.exports = {
  DID_PREFIX,
  toBits,
  toBytes,
  toStrictHex,
  signer,
  hasher,
  types: enums,
};
