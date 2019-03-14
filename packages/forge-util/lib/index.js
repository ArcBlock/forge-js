// most functions are from: https://github.com/ethereum/web3.js/blob/1.0/packages/web3-utils/src/Utils.js
const isBoolean = require('lodash/isBoolean');
const isString = require('lodash/isString');
const isNumber = require('lodash/isNumber');
const isObject = require('lodash/isObject');
const isNull = require('lodash/isNull');
const numberToBN = require('number-to-bn');
const utf8 = require('utf8');
const BN = require('bn.js');

const zero = new BN(0);
const negative1 = new BN(-1);

/**
 * Returns a `Boolean` on whether or not the a `String` starts with '0x'
 * @param {String} str the string input value
 * @return {Boolean} a boolean if it is or is not hex prefixed
 * @throws if the str input is not a string
 */
const isHexPrefixed = str => {
  if (typeof str !== 'string') {
    throw new Error('[is-hex-prefixed] value must be type string');
  }

  return str.slice(0, 2).toLowerCase() === '0x';
};

/**
 * Removes '0x' from a given `String` if present
 * @param {String} str the string value
 * @return {String|Optional} a string by pass if necessary
 */
const stripHexPrefix = str => {
  if (typeof str !== 'string') {
    return str;
  }

  return isHexPrefixed(str) ? str.slice(2) : str;
};

/**
 * Returns true if object is BN, otherwise false
 *
 * @method isBN
 *
 * @param {Object} object
 *
 * @returns {Boolean}
 */
const isBN = object => {
  return object instanceof BN || (object && object.constructor && object.constructor.name === 'BN');
};

/**
 * Returns true if object is BigNumber, otherwise false
 *
 * @method isBigNumber
 *
 * @param {Object} object
 *
 * @returns {Boolean}
 */
const isBigNumber = object => {
  return object && object.constructor && object.constructor.name === 'BigNumber';
};

/**
 * Takes an input and transforms it into an BN
 *
 * @method toBN
 *
 * @param {Number|String|BN} number, string, HEX string or BN
 *
 * @returns {BN} BN
 */
const toBN = number => {
  try {
    return numberToBN(number);
  } catch (error) {
    throw new Error(`${error} Given value: "${number}"`);
  }
};

/**
 * Should be called to get hex representation (prefixed by 0x) of utf8 string
 *
 * @method utf8ToHex
 *
 * @param {String} str
 *
 * @returns {String} hex representation of input string
 */
const utf8ToHex = str => {
  str = utf8.encode(str);
  let hex = '';

  /* eslint-disable no-control-regex */
  // remove \u0000 padding from either side
  str = str.replace(/^(?:\u0000)*/, '');
  str = str
    .split('')
    .reverse()
    .join('');
  str = str.replace(/^(?:\u0000)*/, '');
  str = str
    .split('')
    .reverse()
    .join('');
  /* eslint-enable no-control-regex */

  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);
    // if (code !== 0) {
    const n = code.toString(16);
    hex += n.length < 2 ? `0${n}` : n;
    // }
  }

  return `0x${hex}`;
};

/**
 * Should be called to get utf8 from it's hex representation
 *
 * @method hexToUtf8
 *
 * @param {String} hex
 *
 * @returns {String} ascii string representation of hex value
 */
const hexToUtf8 = hex => {
  if (!isHexStrict(hex)) throw new Error(`The parameter "${hex}" must be a valid HEX string.`);

  let str = '';
  let code = 0;
  hex = hex.replace(/^0x/i, '');

  // remove 00 padding from either side
  hex = hex.replace(/^(?:00)*/, '');
  hex = hex
    .split('')
    .reverse()
    .join('');
  hex = hex.replace(/^(?:00)*/, '');
  hex = hex
    .split('')
    .reverse()
    .join('');

  const l = hex.length;

  for (let i = 0; i < l; i += 2) {
    code = parseInt(hex.substr(i, 2), 16);
    // if (code !== 0) {
    str += String.fromCharCode(code);
    // }
  }

  return utf8.decode(str);
};

/**
 * Converts value to it's number representation
 *
 * @method hexToNumber
 *
 * @param {String|Number|BN} value
 *
 * @returns {Number}
 */
const hexToNumber = value => {
  if (!value) {
    return value;
  }

  return toBN(value).toNumber();
};

/**
 * Converts value to it's decimal representation in string
 *
 * @method hexToNumberString
 *
 * @param {String|Number|BN} value
 *
 * @returns {String}
 */
const hexToNumberString = value => {
  if (!value) return value;

  return toBN(value).toString(10);
};

/**
 * Converts value to it's hex representation
 *
 * @method numberToHex
 *
 * @param {String|Number|BN} value
 *
 * @returns {String}
 */
const numberToHex = value => {
  if (isNull(value) || typeof value === 'undefined') {
    return value;
  }

  if (!isFinite(value) && !isHex(value)) {
    throw new Error(`Given input "${value}" is not a number.`);
  }

  const number = toBN(value);
  const result = number.toString(16);

  return number.lt(new BN(0)) ? `-0x${result.substr(1)}` : `0x${result}`;
};

/**
 * Convert a byte array to a hex string
 *
 * Note: Implementation from crypto-js
 *
 * @method bytesToHex
 *
 * @param {Array} bytes
 *
 * @returns {String} the hex string
 */
const bytesToHex = bytes => {
  let hex = [];

  for (let i = 0; i < bytes.length; i++) {
    hex.push((bytes[i] >>> 4).toString(16));
    hex.push((bytes[i] & 0xf).toString(16));
  }

  return `0x${hex.join('')}`;
};

/**
 * Convert a hex string to a byte array
 *
 * Note: Implementation from crypto-js
 *
 * @method hexToBytes
 *
 * @param {String} hex
 *
 * @returns {Array} the byte array
 */
const hexToBytes = hex => {
  hex = hex.toString(16);

  if (!isHex(hex)) {
    throw new Error(`Given value "${hex}" is not a valid hex string.`);
  }

  hex = hex.replace(/^0x/i, '');
  hex = hex.length % 2 ? '0' + hex : hex;

  let bytes = [];
  for (let c = 0; c < hex.length; c += 2) {
    bytes.push(parseInt(hex.substr(c, 2), 16));
  }

  return bytes;
};

/**
 * Auto converts any given value into it's hex representation.
 * And even stringifys objects before.
 *
 * @method toHex
 *
 * @param {String|Number|BN|Object|TypedArray|Buffer} value
 * @param {Boolean} returnType
 *
 * @returns {String}
 */
const toHex = (value, returnType) => {
  if (isBoolean(value)) {
    return returnType ? 'bool' : value ? '0x01' : '0x00';
  }

  if (isObject(value) && !isBigNumber(value) && !isBN(value)) {
    return returnType ? 'string' : utf8ToHex(JSON.stringify(value));
  }

  // if its a negative number, pass it through numberToHex
  if (isString(value)) {
    if (value.indexOf('-0x') === 0 || value.indexOf('-0X') === 0) {
      return returnType ? 'int256' : numberToHex(value);
    } else if (value.indexOf('0x') === 0 || value.indexOf('0X') === 0) {
      return returnType ? 'bytes' : value;
    } else if (!isFinite(value)) {
      return returnType ? 'string' : utf8ToHex(value);
    }
  }

  return returnType ? (value < 0 ? 'int256' : 'uint256') : numberToHex(value);
};

/**
 * Check if string is HEX, requires a 0x in front
 *
 * @method isHexStrict
 *
 * @param {String} hex to be checked
 *
 * @returns {Boolean}
 */
const isHexStrict = hex => {
  return (isString(hex) || isNumber(hex)) && /^(-)?0x[0-9a-f]*$/i.test(hex);
};

/**
 * Check if string is HEX
 *
 * @method isHex
 *
 * @param {String} hex to be checked
 *
 * @returns {Boolean}
 */
const isHex = hex => {
  return (isString(hex) || isNumber(hex)) && /^(-0x|0x)?[0-9a-f]*$/i.test(hex);
};

const numberToString = arg => {
  if (typeof arg === 'string') {
    if (!arg.match(/^-?[0-9.]+$/)) {
      throw new Error(
        `while converting number to string, invalid number value '${arg}', should be a number matching (^-?[0-9.]+).`
      );
    }
    return arg;
  } else if (typeof arg === 'number') {
    return String(arg);
  } else if (typeof arg === 'object' && arg.toString && (arg.toTwos || arg.dividedToIntegerBy)) {
    if (arg.toPrecision) {
      return String(arg.toPrecision());
    } else {
      // eslint-disable-line
      return arg.toString(10);
    }
  }
  throw new Error(
    `while converting number to string, invalid number value '${arg}' type ${typeof arg}.`
  );
};

const fromUnitToToken = (input, decimal = 16, optionsInput) => {
  let arc = numberToBN(input);
  const negative = arc.lt(zero);
  const base = toBN(`1${'0'.repeat(decimal)}`, 10);
  const baseLength = base.toString(10).length - 1 || 1;
  const options = optionsInput || {};

  if (negative) {
    arc = arc.mul(negative1);
  }

  let fraction = arc.mod(base).toString(10);
  while (fraction.length < baseLength) {
    fraction = `0${fraction}`;
  }

  if (!options.pad) {
    fraction = fraction.match(/^([0-9]*[1-9]|0)(0*)/)[1];
  }

  let whole = arc.div(base).toString(10);
  if (options.commify) {
    whole = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  let value = `${whole}${fraction == '0' ? '' : `.${fraction}`}`;
  if (negative) {
    value = `-${value}`;
  }

  return value;
};

const fromTokenToUnit = (input, decimal = 16) => {
  let ether = numberToString(input);
  const base = toBN(`1${'0'.repeat(decimal)}`, 10);
  const baseLength = base.toString(10).length - 1 || 1;

  // Is it negative?
  let negative = ether.substring(0, 1) === '-';
  if (negative) {
    ether = ether.substring(1);
  }

  if (ether === '.') {
    throw new Error(`error converting number ${input} to arc, invalid value`);
  }

  // Split it into a whole and fractional part
  let comps = ether.split('.');
  if (comps.length > 2) {
    throw new Error(`error converting number ${input} to arc, too many decimal points`);
  }

  let whole = comps[0];
  let fraction = comps[1];

  if (!whole) {
    whole = '0';
  }
  if (!fraction) {
    fraction = '0';
  }
  if (fraction.length > baseLength) {
    throw new Error(`error converting number ${input} to arc, too many decimal places`);
  }

  while (fraction.length < baseLength) {
    fraction += '0';
  }

  whole = new BN(whole);
  fraction = new BN(fraction);
  let arc = whole.mul(base).add(fraction);

  if (negative) {
    arc = arc.mul(negative1);
  }

  return new BN(arc.toString(10), 10);
};

module.exports = {
  isBN,
  isBigNumber,
  isHexPrefixed,
  stripHexPrefix,
  utf8ToHex,
  hexToUtf8,
  numberToHex,
  hexToNumber,
  hexToNumberString,
  numberToBN,
  isHex,
  isHexStrict,
  hexToBytes,
  bytesToHex,
  toHex,
  numberToString,
  fromUnitToToken,
  fromTokenToUnit,
  toBN,
};
