/**
 * @fileOverview Utility functions to create/inspect did, and do did-based auth, an implementation of abt-did-protocol
 *
 * @module @arcblock/did
 * @requires @arcblock/mcrypto
 * @requires @arcblock/forge-util
 */
const Mcrypto = require('@arcblock/mcrypto');
const { stripHexPrefix, toBase58, toAddress, toDid } = require('@arcblock/forge-util');
const { DID_PREFIX, toBytes, toStrictHex } = require('./util');
const {
  DidType,
  toTypeInfo,
  fromTypeInfo,
  isEthereumType,
  isEthereumAddress,
  DID_TYPE_FORGE,
  DID_TYPE_ETHEREUM,
  toChecksumAddress,
} = require('./type');

// eslint-disable-next-line
const debug = require('debug')(require('../package.json').name);

const { types, getSigner, getHasher } = Mcrypto;

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
  const info = DidType(type || {});
  const pub = getSigner(info.pk).getPublicKey(sk);
  // debug('fromSecretKey', { sk, pub });
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
  const info = DidType(type || {});
  const hashFn = getHasher(info.hash);
  const pkHash = hashFn(pk, 1);
  // debug('fromPublicKey', pkHash);
  return fromPublicKeyHash(pkHash, info);
};

const fromPublicKeyHash = (buffer, type) => {
  const info = DidType(type || {});
  const pkHash = stripHexPrefix(buffer).slice(0, 40); // 20 bytes
  const hashFn = getHasher(info.hash);
  const typeHex = fromTypeInfo(info);
  const checksum = stripHexPrefix(hashFn(`0x${typeHex}${pkHash}`, 1)).slice(0, 8); // 4 bytes
  const didHash = `0x${typeHex}${pkHash}${checksum}`;
  // debug('fromPublicKeyHash', { buffer, info, pkHash, typeHex, checksum, didHash });

  // ethereum-compatible address, this address does not contain any type info
  // but we can infer from the address itself
  if (isEthereumType(info)) {
    return toChecksumAddress(`0x${buffer.slice(-40)}`);
  }

  // default forge-compatible did
  if (info.address === types.EncodingType.BASE58) {
    return toBase58(didHash);
  }

  // fallback base16 encoding
  return didHash;
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

  const type = DidType({
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

  if (isEthereumAddress(did)) {
    return true;
  }

  const hashFn = getHasher(hash);
  const bytes = toBytes(did);
  const bytesHex = toStrictHex(Buffer.from(bytes.slice(0, 22)).toString('hex'));
  const didChecksum = toStrictHex(Buffer.from(bytes.slice(22, 26)).toString('hex'));
  const checksum = stripHexPrefix(hashFn(`0x${bytesHex}`, 1)).slice(0, 8);

  return didChecksum === checksum;
};

module.exports = {
  types,

  toStrictHex,
  fromSecretKey,
  fromPublicKey,
  fromPublicKeyHash,
  fromHash,

  toAddress,
  toDid,

  isFromPublicKey,
  isValid,

  toTypeInfo,
  fromTypeInfo,
  DidType,
  DID_TYPE_FORGE,
  DID_TYPE_ETHEREUM,
};
