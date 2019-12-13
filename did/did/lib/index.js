/**
 * @fileOverview Utility functions to create/inspect did, and do did-based auth, an implementation of abt-did-protocol
 *
 * @module @arcblock/did
 * @requires @arcblock/mcrypto
 * @requires @arcblock/forge-util
 */
const upperFirst = require('lodash/upperFirst');
const Mcrypto = require('@arcblock/mcrypto');
const BN = require('bn.js');
const { numberToHex, stripHexPrefix, toBase58, toAddress, toDid } = require('@arcblock/forge-util');
const { DID_PREFIX, toBits, toBytes, toStrictHex } = require('./util');

// eslint-disable-next-line
const debug = require('debug')(require('../package.json').name);

const { types, getSigner, getHasher } = Mcrypto;

const mapping = {
  pk: 'key',
};

/**
 * Make a type info complete
 *
 * @param {object} info - { pk, role, hash }
 * @returns {object}
 */
const toCompleteType = info => {
  const type = Object.assign(
    {
      pk: types.KeyType.ED25519,
      role: types.RoleType.ROLE_ACCOUNT,
      hash: types.HashType.SHA3,
    },
    info || {}
  );

  const sha2Roles = [
    types.RoleType.ROLE_NODE,
    types.RoleType.ROLE_VALIDATOR,
    types.RoleType.ROLE_TETHER,
    types.RoleType.ROLE_SWAP,
  ];
  if (sha2Roles.includes(type.role)) {
    type.hash = types.HashType.SHA2;
  }

  return type;
};

/**
 * Gen DID from private key and type config
 *
 * Spec: https://github.com/ArcBlock/ABT-DID-Protocol#create-did
 *
 * @public
 * @static
 * @param {string} sk - hex encoded secret key string
 * @param {object} type - wallet type, {@see @arcblock/forge-wallet#WalletType}
 * @returns {string} DID string
 */
const fromSecretKey = (sk, type) => {
  const info = toCompleteType(type || {});
  const pub = getSigner(info.pk).getPublicKey(sk);
  debug('fromSecretKey', pub);
  return fromPublicKey(pub.indexOf('0x') === 0 ? pub : `0x${pub}`, info);
};

/**
 * Gen DID from public key and type config
 *
 * @public
 * @static
 * @param {string} pk - hex encoded public key
 * @param {object} type - wallet type, {@see @arcblock/forge-wallet#WalletType}
 * @returns {string} DID string
 */
const fromPublicKey = (pk, type) => {
  const info = toCompleteType(type || {});
  const hashFn = getHasher(info.hash);
  const pkHash = hashFn(pk, 1);
  debug('fromPublicKey', pkHash);
  return fromPublicKeyHash(pkHash, info);
};

const fromPublicKeyHash = (buffer, type) => {
  const info = toCompleteType(type || {});
  const pkHash = stripHexPrefix(buffer).slice(0, 40); // 20 bytes
  const hashFn = getHasher(info.hash);
  const typeHex = fromTypeInfo(info);
  const checksum = stripHexPrefix(hashFn(`0x${typeHex}${pkHash}`, 1)).slice(0, 8); // 4 bytes
  const didHash = `0x${typeHex}${pkHash}${checksum}`;
  debug('fromPublicKeyHash', { info, pkHash, typeHex, checksum, didHash });

  return toBase58(didHash);
};

/**
 * Gen DID from an hex encoded hash and role type
 *
 * @public
 * @static
 * @param {string} hash - hex encoded hash
 * @param {enum} role - role type, {@see @arcblock/mcrypto#types}
 * @returns {string} DID string
 */
const fromHash = (hash, role = types.RoleType.ROLE_ACCOUNT) => {
  const roleKeys = Object.keys(types.RoleType);
  const roleValues = Object.values(types.RoleType);
  if (roleValues.indexOf(role) === -1) {
    throw new Error(`Unsupported role type ${role} when gen ddi from hash`);
  }

  const type = toCompleteType({
    role: types.RoleType[roleKeys[roleValues.indexOf(role)]],
  });

  // debug('fromHash', { hash, role, type });
  return fromPublicKeyHash(hash, type);
};

/**
 * Check if an DID is generated from a publicKey
 *
 * @public
 * @static
 * @param {string} did - string of the did, usually base58btc format
 * @param {string} pk - hex encoded publicKey string
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
 * @public
 * @static
 * @param {object} type - wallet type, {@see @arcblock/forge-wallet#WalletType}
 * @returns string
 */
const fromTypeInfo = type => {
  const info = toCompleteType(type || {});

  const roleBits = toBits(info.role, 6);
  const keyBits = toBits(info.pk, 5);
  const hashBits = toBits(info.hash, 5);
  const infoBits = `${roleBits}${keyBits}${hashBits}`;
  const infoHex = stripHexPrefix(numberToHex(parseInt(infoBits, 2)));
  debug('fromTypeInfo', info, roleBits, hashBits, infoBits, infoHex);
  return toStrictHex(infoHex, 4);
};

/**
 * Get type info from did (base58 format)
 *
 * @public
 * @static
 * @param {string} did - address string
 * @param {boolean} [returnString=true]
 * @returns {object} wallet type {@see @arcblock/forge-wallet#WalletType}
 */
const toTypeInfo = (did, returnString = false) => {
  try {
    const bytes = toBytes(did);
    const typeBytes = bytes.slice(0, 2);
    const typeHex = toStrictHex(Buffer.from(typeBytes).toString('hex'));
    const typeBits = toBits(new BN(typeHex, 16), 16);
    const roleBits = typeBits.slice(0, 6);
    const keyBits = typeBits.slice(6, 11);
    const hashBits = typeBits.slice(11, 16);
    const type = {
      role: parseInt(roleBits, 2),
      pk: parseInt(keyBits, 2),
      hash: parseInt(hashBits, 2),
    };

    // remove unsupported types
    Object.keys(type).forEach(x => {
      const enums = Object.values(types[`${upperFirst(mapping[x] || x)}Type`]);
      if (enums.includes(type[x]) === false) {
        delete type[x];
      }
    });

    const typeStr = Object.keys(type).reduce((acc, x) => {
      const enums = types[`${upperFirst(mapping[x] || x)}Type`];
      acc[x] = Object.keys(enums).find(d => enums[d] === type[x]);
      return acc;
    }, {});

    return returnString ? typeStr : type;
  } catch (err) {
    debug('AbtDid.toTypeInfo.decodeError', err);
    return {};
  }
};

/**
 * Check if a DID string is valid
 *
 * @public
 * @static
 * @param {string} did - address string
 * @returns {boolean}
 */
const isValid = did => {
  const { hash } = toTypeInfo(did);
  if (typeof hash === 'undefined') {
    return false;
  }

  const hashFn = getHasher(hash);
  const bytes = toBytes(did);
  const bytesHex = toStrictHex(Buffer.from(bytes.slice(0, 22)).toString('hex'));
  const didChecksum = toStrictHex(Buffer.from(bytes.slice(22, 26)).toString('hex'));
  const checksum = stripHexPrefix(hashFn(`0x${bytesHex}`)).slice(0, 8);

  return didChecksum === checksum;
};

module.exports = {
  types,
  toStrictHex,
  fromSecretKey,
  fromPublicKey,
  fromPublicKeyHash,
  fromHash,
  toTypeInfo,
  toAddress,
  toDid,
  toCompleteType,
  fromTypeInfo,
  isFromPublicKey,
  isValid,
};
