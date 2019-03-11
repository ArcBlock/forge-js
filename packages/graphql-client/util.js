/* eslint no-console:"off" */
const decamelize = require('decamelize');

const txTypePattern = /Tx$/;
const stateTypePattern = /State$/;
const stakeTypePattern = /^StakeFor/i;
const requestTypePattern = /^Request/i;
const responseTypePattern = /^Response/i;
const lowerUnder = x => decamelize(x).toLowerCase();

const compactJson = object => {
  if (object.nested) {
    object = object.nested;
  }

  Object.keys(object).forEach(x => {
    if (object[x] && typeof object[x] === 'object') {
      object[x] = compactJson(object[x]);
    }
  });

  return object;
};

/**
 * Generate type_url field for google.protobuf.Any
 *
 * @param {*} type
 * @returns String
 */
function createTypeUrls(abi) {
  return Object.keys(abi).reduce((typeUrls, type) => {
    let typeUrl = type;
    if (
      !requestTypePattern.test(type) &&
      !responseTypePattern.test(type) &&
      type.startsWith('Indexed') === false
    ) {
      if (txTypePattern.test(type)) {
        typeUrl = `fg:t:${lowerUnder(type.replace(txTypePattern, ''))}`;
      }
      if (stateTypePattern.test(type)) {
        typeUrl = `fg:s:${lowerUnder(type.replace(stateTypePattern, ''))}`;
      }
      if (stakeTypePattern.test(type)) {
        typeUrl = `fg:x:${lowerUnder(`Stake${type.replace(stakeTypePattern, '')}`)}`;
      }
      if (['TransactionInfo', 'TxStatus'].includes(type)) {
        typeUrl = `fg:x:${lowerUnder(type)}`;
      }
      if (type === 'DummyCodec') {
        typeUrl = 'fg:x:address';
      }
    }

    typeUrls[type] = typeUrl;
    return typeUrls;
  }, {});
}

/**
 * extract rpc descriptors
 *
 * @param {*} filePath
 * @param {*} packageName
 * @returns Object
 */
function processJson(json, packageName) {
  const spec = compactJson(json);

  const { [packageName]: abi } = spec;

  // extract messages and enums
  const messages = {};
  const enums = Object.keys(abi)
    .filter(x => abi[x].values)
    .reduce((enums, x) => {
      messages[x] = {};
      enums[x] = Object.keys(abi[x].values).reduce((values, k) => {
        values[k.toUpperCase()] = abi[x].values[k];
        messages[x][abi[x].values[k]] = k.toUpperCase();
        return values;
      }, {});

      return enums;
    }, {});

  // extract typeUrls
  const typeUrls = createTypeUrls(abi);
  const transactions = Object.keys(spec[packageName]).filter(
    x => txTypePattern.test(x) && !requestTypePattern.test(x) && !responseTypePattern.test(x)
  );
  const stakes = Object.keys(spec[packageName]).filter(x => stakeTypePattern.test(x));

  Object.assign(spec, spec[packageName]);
  return { messages, enums, spec, transactions, stakes, typeUrls };
}

module.exports = {
  compactJson,
  processJson,
  createTypeUrls,
};
