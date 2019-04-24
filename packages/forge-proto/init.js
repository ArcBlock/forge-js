const get = require('lodash.get');
const json = require('./lib/spec.json');

module.exports = function(proto) {
  const { types, services, vendorTypes } = proto;

  const txTypePattern = /Tx$/;
  const stateTypePattern = /State$/;
  const stakeTypePattern = /^StakeFor/i;
  const requestTypePattern = /^Request/i;
  const responseTypePattern = /^Response/i;
  const lowerUnder = x =>
    x
      .split(/(?=[A-Z])/)
      .join('_')
      .toLowerCase();

  // extract spec
  const compactSpec = object => {
    if (object.nested) {
      object = object.nested;
    }

    Object.keys(object).forEach(x => {
      if (object[x] && typeof object[x] === 'object') {
        object[x] = compactSpec(object[x]);
      }
    });

    return object;
  };

  // extract client constructors
  const clients = Object.keys(services)
    .filter(x => x.includes('Client'))
    .map(x => x.replace(/Client$/, ''))
    .reduce((clients, x) => {
      clients[x] = services[`${x}Client`];
      return clients;
    }, {});

  // extract rpc descriptors
  const packageName = 'forge_abi';
  const spec = compactSpec(json);

  const { [packageName]: abi } = spec;
  Object.assign(spec, spec[packageName]);

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

  // extract rpcs
  const rpcs = Object.keys(abi)
    .filter(x => abi[x].methods)
    .reduce((rpcs, x) => {
      rpcs[x] = abi[x].methods;
      return rpcs;
    }, {});

  // extract typeUrls
  const typeUrls = createTypeUrls(abi);

  // extract transactions and stakes
  enums.SupportedTxs = Object.keys(types).filter(
    x => txTypePattern.test(x) && !requestTypePattern.test(x) && !responseTypePattern.test(x)
  );
  enums.SupportedStakes = Object.keys(types).filter(x => stakeTypePattern.test(x));

  /**
   * Generate type_url field for google.protobuf.Any
   *
   * @param {*} type
   * @returns String
   */
  function createTypeUrls(abi) {
    return Object.keys(abi).reduce((typeUrls, type) => {
      let typeUrl = type;
      if (!requestTypePattern.test(type) && !responseTypePattern.test(type)) {
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

  // Search for a type and its fields descriptor
  function getMessageType(type) {
    const { fields, oneofs } = get(spec, type) || get(spec, `abci_vendor.${type}`) || {};
    return {
      fn: get(types, type) || get(vendorTypes, type),
      fields,
      oneofs,
    };
  }

  function toTypeUrl(type) {
    return get(typeUrls, type) || type;
  }

  function fromTypeUrl(url) {
    const found = Object.entries(typeUrls).find(([, value]) => value === url);
    if (found) {
      return found[0];
    }

    return url;
  }

  return {
    enums,
    messages,
    transactions: enums.SupportedTxs,
    stakes: enums.SupportedStakes,
    rpcs: Object.keys(clients).reduce((acc, x) => {
      acc[x] = clients[x];
      acc[x].methods = rpcs[x];
      return acc;
    }, {}),
    compactSpec,
    getMessageType,
    typeUrls,
    toTypeUrl,
    fromTypeUrl,
  };
};
