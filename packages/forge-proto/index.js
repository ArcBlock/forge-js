const fs = require('fs');
const path = require('path');
const json = require('./lib/spec.json');

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
const spec = compactSpec(json);

// extract types and services
const types = {};
const vendorTypes = {};
const services = {};
fs.readdirSync(path.join(__dirname, './lib/'))
  .filter(x => /\.js$/.test(x))
  .forEach(x => {
    if (/^vendor_/.test(x)) {
      if (/_grpc_pb\.js$/.test(x)) {
        // Ignore vendor services
      } else if (/_pb\.js$/.test(x)) {
        const content = require(path.join(__dirname, './lib/', x));
        Object.assign(vendorTypes, content);
      }
    } else {
      const content = require(path.join(__dirname, './lib/', x));
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

// extract messages and enums
const { forge_abi: abi } = spec;
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

Object.assign(spec, spec.forge_abi);
delete spec.forge_abi;

module.exports = Object.freeze({ enums, messages, rpcs, clients, types, vendorTypes, spec });
// console.log({ rpc: rpcs.ChainRpc, client: clients.ChainRpc, service: services.ChainRpcService });
// console.log({ rpcs, clients, service: services.ChainRpcService });
// console.log(spec);
