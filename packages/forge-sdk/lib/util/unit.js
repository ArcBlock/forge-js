const BN = require('bn.js');
const numberToBN = require('number-to-bn');

const zero = new BN(0);
const negative1 = new BN(-1);

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

const fromArc = (input, decimal, optionsInput) => {
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

const toArc = (input, decimal) => {
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

const toBN = number => {
  try {
    return numberToBN(number);
  } catch (error) {
    throw new Error(`${error} Given value: "${number}"`);
  }
};

module.exports = {
  numberToString,
  fromArc,
  toArc,
  toBN,
};

// console.log(toArc(8.8888, 16).toArray());
// console.log(fromArc(new BN([1, 59, 203, 42, 64, 203, 128, 0]), 16).toString(10));
// console.log(fromArc(new BN([1, 59, 203, 42, 64, 203, 128, 0]), 16));
