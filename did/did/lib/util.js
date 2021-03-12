const padStart = require('lodash/padStart');
const { toBN, fromBase58, isHexStrict, stripHexPrefix } = require('@arcblock/forge-util');

const DID_PREFIX = 'did:abt:';

/**
 * Convert did to bytes with length of 26
 *
 * @param {string} did
 * @returns {Buffer}
 */
const toBytes = did => {
  try {
    if (isHexStrict(did)) {
      return Buffer.from(stripHexPrefix(did), 'hex');
    }

    let bytes = fromBase58(did.replace(DID_PREFIX, ''));
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
};
