const padStart = require('lodash/padStart');
const upperFirst = require('lodash/upperFirst');
const { toBN, toHex, numberToHex, isHexStrict } = require('@arcblock/forge-util');
const Mcrypto = require('@arcblock/mcrypto');
const multibase = require('multibase');
const hdkey = require('hdkey');

const DID_PREFIX = /^abt:did:/i;

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

/**
 * Gen DID from appDID and seed
 *
 * Spec: https://github.com/ArcBlock/ABT-DID-Protocol#request-did-authentication
 *
 * @param {string} appDID
 * @param {string} seed
 * @param {object} [type={}]
 * @param {number} [index=0]
 * @returns DID string
 */
const fromAppDID = (appDID, seed, type = {}, index = 0) => {
  if (!isValid(appDID)) {
    return null;
  }

  const hash = Mcrypto.Hasher.SHA3.hash256(toBytes(appDID));
  const hashSlice = hash.slice(0, 16);
  const s1 = hashSlice.slice(0, 8);
  const s2 = hashSlice.slice(8, 16);

  // We have to ensure the number parsed from s1, s2 to be a valid index
  const b1 = toBits(toBN(s1).toTwos(), 8, '0').split('');
  const b2 = toBits(toBN(s2).toTwos(), 8, '0').split('');
  // set highest bit to zero, since s1 and s2 are 32 bits long
  b1[0] = 0;
  b2[0] = 0;

  const n1 = parseInt(b1.join(''), 2);
  const n2 = parseInt(b2.join(''), 2);

  const seedHex = (isHexStrict(seed) ? seed : toHex(seed)).replace(/^0x/i, '');
  const master = hdkey.fromMasterSeed(Buffer.from(seedHex, 'hex'));
  const derivePath = `m/44'/260'/${n1}'/${n2}'/${index}`;
  const child = master.derive(derivePath);

  const { key = enums.KeyType.ED25519 } = type;
  let sk;
  if (key === enums.KeyType.ED25519) {
    // HACK: because tweetnacl requires a 64 byte sk
    sk = Buffer.concat([child.privateKey, child.chainCode]);
  } else {
    sk = child.privateKey;
  }

  return fromSecretKey(sk, type);
};

/**
 * Gen DID from private key and type config
 *
 * Spec: https://github.com/ArcBlock/ABT-DID-Protocol#create-did
 *
 * @param {string} sk
 * @param {object} type
 * @returns DID string
 */
const fromSecretKey = (sk, type) => {
  const { key = enums.KeyType.ED25519 } = type || {};
  const pk = signer[key].getPublicKey(sk);
  return fromPublicKey(pk, type);
};

/**
 * Gen DID from public key and type config
 *
 * @param {string} pk
 * @param {object} type
 * @returns DID string
 */
const fromPublicKey = (pk, type) => {
  const { hash = enums.HashType.SHA3 } = type || {};

  const typeHex = fromTypeInfo(type);
  const pkHash = hasher[hash](pk);

  const checksum = hasher[hash](`0x${typeHex}${pkHash.slice(0, 40)}`).slice(0, 8);
  const didHash = `${typeHex}${pkHash.slice(0, 40)}${checksum}`;

  const address = multibase.encode('base58btc', Buffer.from(didHash, 'hex'));
  return address.toString();
};

/**
 * Check if an DID is generated from a publicKey
 *
 * @param {string} did
 * @param {string} pk
 * @returns {boolean}
 */
const isFromPublicKey = (did, pk) => {
  if (isValid(did) === false) {
    return false;
  }

  const type = toTypeInfo(did);
  const didNew = fromPublicKey(pk, type);
  const didClean = did.replace(DID_PREFIX, '');

  return didNew === didClean;
};

/**
 * Convert type info object to hex string
 *
 * @param {object} type
 * @returns string
 */
const fromTypeInfo = type => {
  const {
    role = enums.RoleType.ROLE_ACCOUNT,
    key = enums.KeyType.ED25519,
    hash = enums.HashType.SHA3,
  } = type || {};

  const infoBits = `${toBits(role, 6)}${toBits(key, 5)}${toBits(hash, 5)}`;
  const infoHex = numberToHex(parseInt(infoBits, 2)).replace(/^0x/i, '');
  return toStrictHex(infoHex, 4);
};

/**
 * Get type info from did (base58 format)
 *
 * @param {string} did
 * @param {boolean} [returnString=true]
 * @returns {object}
 */
const toTypeInfo = (did, returnString = false) => {
  try {
    const bytes = toBytes(did);
    const typeBytes = bytes.slice(0, 2);
    const typeHex = toStrictHex(Buffer.from(typeBytes).toString('hex'));
    const typeBits = toBits(typeHex, 16);
    const roleBits = typeBits.slice(0, 6);
    const keyBits = typeBits.slice(6, 11);
    const hashBits = typeBits.slice(11, 16);
    const type = {
      role: parseInt(roleBits, 2),
      key: parseInt(keyBits, 2),
      hash: parseInt(hashBits, 2),
    };

    const typeStr = Object.keys(type).reduce((acc, x) => {
      const types = enums[`${upperFirst(x)}Type`];
      acc[x] = Object.keys(types).find(d => types[d] === type[x]);
      return acc;
    }, {});

    return returnString ? typeStr : type;
  } catch (err) {
    // eslint-disable-next-line
    console.warn('AbtDid.toTypeInfo.decodeError', err);
    return {};
  }
};

/**
 * Check if a DID string is valid
 *
 * @param {string} did
 * @returns {boolean}
 */
const isValid = did => {
  const { hash } = toTypeInfo(did);
  if (typeof hash === 'undefined') {
    return false;
  }

  const bytes = toBytes(did);
  const bytesHex = toStrictHex(Buffer.from(bytes.slice(0, 22)).toString('hex'));
  const didChecksum = toStrictHex(Buffer.from(bytes.slice(22, 26)).toString('hex'));
  const checksum = hasher[hash](`0x${bytesHex}`).slice(0, 8);
  return didChecksum === checksum;
};

module.exports = {
  types: enums,
  toBits,
  toBytes,
  toStrictHex,
  fromAppDID,
  fromSecretKey,
  fromPublicKey,
  toTypeInfo,
  fromTypeInfo,
  isFromPublicKey,
  isValid,
};
