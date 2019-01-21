const fs = require('fs');
const path = require('path');
const decamelize = require('decamelize');
const { get } = require('lodash');
const debug = require('debug')(`${require('./package.json').name}`);

const txTypePattern = /Tx$/;
const stakeTypePattern = /^StakeFor/;
const lowerUnder = x => decamelize(x).toLowerCase();

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

/**
 * extract types and services from javascript code
 *
 * @param {FilePath} baseDir
 * @returns Object
 */
function processJs(baseDir) {
  if (!fs.existsSync(baseDir)) {
    throw new Error('ForgeProto.processJs.baseDir: folder does not exist');
  }

  const types = {};
  const vendorTypes = {};
  const services = {};
  fs.readdirSync(baseDir)
    .filter(x => /\.js$/.test(x))
    .forEach(x => {
      const filePath = path.join(baseDir, x);
      if (/^vendor_/.test(x)) {
        if (/_grpc_pb\.js$/.test(x)) {
          // Ignore vendor services
        } else if (/_pb\.js$/.test(x)) {
          const content = require(filePath);
          Object.assign(vendorTypes, content);
        }
      } else {
        const content = require(filePath);
        if (/_grpc_pb\.js$/.test(x)) {
          Object.assign(services, content);
        } else if (/_pb\.js$/.test(x)) {
          Object.assign(types, content);
        }
      }
    });

  // extract client constructors
  const clients = Object.keys(services)
    .filter(x => x.includes('Client'))
    .map(x => x.replace(/Client$/, ''))
    .reduce((clients, x) => {
      clients[x] = services[`${x}Client`];
      return clients;
    }, {});

  const transactions = Object.keys(types).filter(x => txTypePattern.test(x));
  const stakes = Object.keys(types).filter(x => stakeTypePattern.test(x));

  return { types, vendorTypes, services, clients, transactions, stakes };
}

/**
 * Generate type_url field for google.protobuf.Any
 *
 * @param {*} type
 * @returns String
 */
function createTypeUrls(abi) {
  return Object.keys(abi).reduce((typeUrls, type) => {
    let typeUrl = type;
    if (!/^Request/.test(type) && !/^Response/.test(type)) {
      if (/Tx$/.test(type)) {
        typeUrl = `fg:t:${lowerUnder(type.replace(/Tx$/, ''))}`;
      }
      if (/State$/.test(type)) {
        typeUrl = `fg:s:${lowerUnder(type.replace(/State$/, ''))}`;
      }
      if (/^StakeFor/.test(type)) {
        typeUrl = `fg:x:${lowerUnder(`Stake${type.replace(/^StakeFor/, '')}`)}`;
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
function processJson(filePath, packageName) {
  const json = fs.existsSync(filePath) ? require(filePath) : json;
  const spec = compactSpec(json);

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

  // extract rpcs
  const rpcs = Object.keys(abi)
    .filter(x => abi[x].methods)
    .reduce((rpcs, x) => {
      rpcs[x] = abi[x].methods;
      return rpcs;
    }, {});

  // extract typeUrls
  const typeUrls = createTypeUrls(abi);

  Object.assign(spec, spec[packageName]);
  return { messages, enums, rpcs, spec, typeUrls };
}

const extraTypes = {};
const extraSpec = {};
const extraTypeUrls = {};
const { types, vendorTypes, clients, transactions, stakes } = processJs(
  path.resolve(__dirname, './lib/')
);
const { messages, enums, rpcs, spec, typeUrls } = processJson(
  path.resolve(__dirname, './lib/spec.json'),
  'forge_abi'
);

enums.SupportedTxs = transactions;
enums.SupportedStakes = stakes;

// Append app specific proto definition into search space
function addSource({ baseDir, packageName, typeUrls: _typeUrls }) {
  if (!fs.existsSync(baseDir)) {
    throw new Error('baseDir does not exists');
  }

  const jsResult = processJs(baseDir);
  Object.assign(extraTypes, jsResult.types);
  debug('addSource.types', jsResult.types);
  Object.keys(jsResult.types)
    .filter(x => txTypePattern.test(x))
    .forEach(x => transactions.push(x));

  if (fs.existsSync(path.join(baseDir, 'spec.json'))) {
    const jsonResult = processJson(path.join(baseDir, 'spec.json'), packageName);
    Object.assign(extraSpec, jsonResult.spec[packageName]);
    Object.assign(extraTypeUrls, createTypeUrls(jsonResult.spec[packageName]), _typeUrls);
    debug('addSource.spec', jsonResult.spec[packageName]);
  }
}

// Search for a type and its fields descriptor
function getMessageType(type) {
  const { fields, oneofs } = get(spec, type) || get(extraSpec, type) || {};
  return {
    fn: get(types, type) || get(vendorTypes, type) || get(extraTypes, type),
    fields,
    oneofs,
  };
}

function toTypeUrl(type) {
  return get(typeUrls, type) || get(extraTypeUrls, type) || type;
}

function fromTypeUrl(url) {
  let found = Object.entries(typeUrls).find(([, value]) => value === url);
  if (found) {
    return found[0];
  }
  found = Object.entries(extraTypeUrls).find(([, value]) => value === url);
  if (found) {
    return found[0];
  }

  return url;
}

module.exports = {
  enums,
  messages,
  rpcs: Object.keys(clients).reduce((acc, x) => {
    acc[x] = clients[x];
    acc[x].methods = rpcs[x];
    return acc;
  }, {}),
  processJs,
  processJson,
  getMessageType,
  toTypeUrl,
  fromTypeUrl,
  addSource,
};
