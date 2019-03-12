/* eslint no-console:"off" */
const decamelize = require('decamelize');
const protobuf = require('protobufjs');

const txTypePattern = /Tx$/;
const stateTypePattern = /State$/;
const stakeTypePattern = /^StakeFor/i;
const requestTypePattern = /^Request/i;
const responseTypePattern = /^Response/i;
const packageName = 'forge_abi';
const lowerUnder = x => decamelize(x).toLowerCase();

const compactSchema = object => {
  if (object.nested) {
    object = object.nested;
  }

  Object.keys(object).forEach(x => {
    if (object[x] && typeof object[x] === 'object') {
      object[x] = compactSchema(object[x]);
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
 * @param {*} json
 * @param {*} packageName
 * @returns Object
 */
function processSchema(json) {
  const types = protobuf.Root.fromJSON(json);

  const spec = compactSchema(json);
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

  return {
    messages,
    enums,
    transactions,
    stakes,
    typeUrls,
    getType: key => {
      if (key.split('.').length > 1) {
        return types.lookupType(key);
      }

      return types.lookupType(`${packageName}.${key}`);
    },
  };
}

module.exports = {
  compactSchema,
  processSchema,
  createTypeUrls,
};
