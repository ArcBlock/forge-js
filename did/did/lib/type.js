const BN = require('bn.js');
const upperFirst = require('lodash/upperFirst');
const isEqual = require('lodash/isEqual');
const pick = require('lodash/pick');
const { types, Hasher } = require('@arcblock/mcrypto');
const { numberToHex, stripHexPrefix } = require('@arcblock/forge-util');
const { toBits, toBytes, toStrictHex } = require('./util');

// eslint-disable-next-line
const debug = require('debug')(require('../package.json').name);

const mapping = {
  pk: 'key',
  address: 'encoding',
};

const DID_TYPE_FORGE = {
  role: types.RoleType.ROLE_ACCOUNT,
  pk: types.KeyType.ED25519,
  hash: types.HashType.SHA3,
  address: types.EncodingType.BASE58,
};

const DID_TYPE_ETHEREUM = {
  role: types.RoleType.ROLE_ACCOUNT, // this field does not have any effect for eth address
  pk: types.KeyType.ETHEREUM,
  hash: types.HashType.KECCAK,
  address: types.EncodingType.BASE16,
};

const isEthereumType = type => {
  const props = ['pk', 'hash', 'address'];
  return isEqual(pick(type, props), pick(DID_TYPE_ETHEREUM, props));
};

/**
 * Checks if the given string is an address
 *
 * @method isEthereumAddress
 * @param {String} address the given HEX address
 * @return {Boolean}
 */
const isEthereumAddress = address => {
  // check if it has the basic requirements of an address
  if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
    return false;
  }

  // If it's ALL lowercase or ALL upppercase
  if (/^(0x|0X)?[0-9a-f]{40}$/.test(address) || /^(0x|0X)?[0-9A-F]{40}$/.test(address)) {
    return true;
  }

  // Otherwise check each case
  return checkAddressChecksum(address);
};

/**
 * Checks if the given string is a checksummed address
 *
 * @method checkAddressChecksum
 * @param {String} address the given HEX address
 * @return {Boolean}
 */
const checkAddressChecksum = address => {
  // Check each case
  const origin = address.replace(/^0x/i, '');
  const addressHash = Hasher.Keccak.hash256(origin.toLowerCase()).replace(/^0x/i, '');

  for (let i = 0; i < 40; i++) {
    // the nth letter should be uppercase if the nth digit of casemap is 1
    if (
      (parseInt(addressHash[i], 16) > 7 && origin[i].toUpperCase() !== origin[i]) ||
      (parseInt(addressHash[i], 16) <= 7 && origin[i].toLowerCase() !== origin[i])
    ) {
      return false;
    }
  }
  return true;
};

/**
 * Converts to a checksum address
 *
 * @method toChecksumAddress
 * @param {String} address the given HEX address
 * @return {String}
 */
const toChecksumAddress = address => {
  if (typeof address === 'undefined') {
    return '';
  }

  if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
    throw new Error(`Given address "${address}" is not a valid Ethereum address.`);
  }

  const lower = address.toLowerCase().replace(/^0x/i, '');
  const addressHash = Hasher.Keccak.hash256(lower).replace(/^0x/i, '');
  let checksumAddress = '0x';

  for (let i = 0; i < lower.length; i++) {
    // If ith character is 8 to f then make it uppercase
    if (parseInt(addressHash[i], 16) > 7) {
      checksumAddress += lower[i].toUpperCase();
    } else {
      checksumAddress += lower[i];
    }
  }

  return checksumAddress;
};

/**
 * The structure of a forge wallet type
 *
 * @public
 * @static
 * @global
 * @typedef {Object} DidType
 * @prop {number} role - Enum field to identify wallet role type
 * @prop {number} pk - Crypto algorithm to derive publicKey from the secretKey
 * @prop {number} hash - Hash algorithm used to hash data before sign them
 */

/**
 * Create an wallet type object that be used as param to create a new wallet
 *
 * @public
 * @static
 * @param {DidType|string} [type='default']
 * @returns {object}
 * @example
 * const assert = require('assert');
 * const { DidType } = require('@arcblock/did');
 * const { types } = require('@arcblock/mcrypto');
 *
 * const type = DidType({
 *   role: types.RoleType.ROLE_APPLICATION,
 *   pk: types.KeyType.ED25519,
 *   hash: types.HashType.SHA3,
 * });
 */
function DidType(type = 'default') {
  let input = null;
  if (type === 'default' || type === 'forge') {
    input = DID_TYPE_FORGE;
  } else if (type === 'eth') {
    input = DID_TYPE_ETHEREUM;
  } else {
    input = Object.assign({}, DID_TYPE_FORGE, type);
  }

  const { role, pk, hash, address } = input;
  Object.keys(input).forEach(x => {
    const key = upperFirst(`${mapping[x] || x}Type`);
    if (Object.values(types[key]).includes(input[x]) === false) {
      throw new Error(`Unsupported ${x} type: ${input[x]}`);
    }
  });

  const output = { role, pk, hash, address };

  // Overwrite hash methods for some role type if we are not eth-type
  if (isEthereumType(output) === false) {
    const sha2Roles = [
      types.RoleType.ROLE_NODE,
      types.RoleType.ROLE_VALIDATOR,
      types.RoleType.ROLE_TETHER,
      types.RoleType.ROLE_SWAP,
    ];
    if (sha2Roles.includes(output.role)) {
      output.hash = types.HashType.SHA2;
    }
  }

  return output;
}

DidType.toJSON = type =>
  Object.keys(type).reduce((acc, x) => {
    const key = upperFirst(`${mapping[x] || x}Type`);
    const typeStr = Object.keys(types[key]);
    const typeValues = Object.values(types[key]);
    acc[x] = typeStr[typeValues.indexOf(type[x])];
    return acc;
  }, {});

DidType.fromJSON = json =>
  Object.keys(json).reduce((acc, x) => {
    const key = upperFirst(`${mapping[x] || x}Type`);
    const typeStr = Object.keys(types[key]);
    const typeValues = Object.values(types[key]);
    acc[x] = typeValues[typeStr.indexOf(json[x])];
    return acc;
  }, {});

/**
 * Convert type info object to hex string
 *
 * @public
 * @static
 * @param {object} type - wallet type, {@see @arcblock/did#DidType}
 * @returns string
 */
const fromTypeInfo = type => {
  const info = DidType(type || {});

  const roleBits = toBits(info.role, 6);
  const keyBits = toBits(info.pk, 5);
  const hashBits = toBits(info.hash, 5);
  const infoBits = `${roleBits}${keyBits}${hashBits}`;
  const infoHex = stripHexPrefix(numberToHex(parseInt(infoBits, 2)));
  // debug('fromTypeInfo', info, roleBits, hashBits, infoBits, infoHex);
  return toStrictHex(infoHex, 4);
};

/**
 * Get type info from did (base58 format)
 *
 * @public
 * @static
 * @param {string} did - address string
 * @param {boolean} [returnString=true]
 * @returns {object} wallet type {@see @arcblock/did#DidType}
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

module.exports = {
  DID_TYPE_FORGE,
  DID_TYPE_ETHEREUM,
  fromTypeInfo,
  toTypeInfo,
  isEthereumType,
  isEthereumAddress,
  toChecksumAddress,
  DidType,
};
