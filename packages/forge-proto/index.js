const fs = require('fs');
const path = require('path');

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
const processJson = filePath => {
  const json = fs.existsSync(filePath) ? require(filePath) : json;
  const spec = compactSpec(json);
  Object.assign(spec, spec.forge_abi);

  const { forge_abi: abi } = spec;

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

  return { messages, enums, rpcs, spec };
};

const { types, vendorTypes, clients } = processJs(path.resolve(__dirname, './lib/'));
const { messages, enums, rpcs, spec } = processJson(path.resolve(__dirname, './lib/spec.json'));

module.exports = Object.freeze({
  enums,
  messages,
  rpcs,
  clients,
  types,
  vendorTypes,
  spec,
  compactSpec,
  processJs,
  processJson,
});

// console.log({ rpc: rpcs.ChainRpc, client: clients.ChainRpc, service: services.ChainRpcService });
// console.log({ rpcs, clients, service: services.ChainRpcService });
// console.log(spec);
