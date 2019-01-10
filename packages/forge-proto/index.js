const fs = require('fs');
const path = require('path');
const { get } = require('lodash');
const debug = require('debug')(`${require('./package.json').name}`);

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

// extract types and services
const processJs = baseDir => {
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

  return { types, vendorTypes, services, clients };
};

// extract rpc descriptors
const processJson = (filePath, packageName) => {
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

  Object.assign(spec, spec[packageName]);
  return { messages, enums, rpcs, spec };
};

const extraTypes = {};
const extraSpec = {};
const { types, vendorTypes, clients } = processJs(path.resolve(__dirname, './lib/'));
const { messages, enums, rpcs, spec } = processJson(
  path.resolve(__dirname, './lib/spec.json'),
  'forge_abi'
);

// Append app specific proto definition into search space
const addSource = (baseDir, packageName) => {
  if (!fs.existsSync(baseDir)) {
    throw new Error('baseDir does not exists');
  }

  const jsResult = processJs(baseDir);
  Object.assign(extraTypes, jsResult.types);
  debug('addSource.types', jsResult.types);

  if (fs.existsSync(path.join(baseDir, 'spec.json'))) {
    const jsonResult = processJson(path.join(baseDir, 'spec.json'), packageName);
    Object.assign(extraSpec, jsonResult.spec[packageName]);
    debug('addSource.spec', jsonResult.spec[packageName]);
  }
};

// Search for a type and its fields descriptor
const getMessageType = type => {
  const { fields, oneofs } = (get(spec, type) || get(extraSpec, type) || {});
  return {
    fn: get(types, type) || get(vendorTypes, type) || get(extraTypes, type),
    fields,
    oneofs,
  };
};

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
  addSource,
};
