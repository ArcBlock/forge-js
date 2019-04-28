/* eslint-disable no-console */
const { randomArg, randomArgs } = require('@arcblock/sdk-util/lib/util');

const Client = require('../src/client');

const client = new Client();
const map = {
  Queries: client.getQueries(),
  Subscriptions: client.getSubscriptions(),
  Mutations: client.getMutations(),
};

const { types } = client._getSchema();
const typesMap = types.reduce((map, x) => {
  map[x.name] = x;
  return map;
}, {});

const getResultFormat = m => {
  const args = client[m].args;
  const argValues = Object.values(args)
    // .filter(x => x.type.kind === 'NON_NULL') // Uncomment this to random only required fields
    .reduce((obj, x) => {
      if (x.type.ofType) {
        if (x.type.kind === 'LIST') {
          obj[x.name] = [randomArg(x.type.ofType, typesMap)];
        } else if (x.type.ofType.kind === 'SCALAR') {
          obj[x.name] = randomArg(x.type.ofType, typesMap);
        } else if (['INPUT_OBJECT', 'OBJECT'].includes(x.type.ofType.kind)) {
          obj[x.name] = randomArgs(typesMap[x.type.ofType.name], typesMap);
        } else {
          console.log('ignoreX', x);
        }
      } else {
        if (x.type.kind === 'SCALAR') {
          obj[x.name] = randomArg(x.type, typesMap);
        }
      }

      return obj;
    }, {});

  console.log(m, argValues);

  return client[m].builder(argValues);
};

const generateFormats = (grouped = true) => {
  const keys = Object.keys(map);
  const formats = keys.map(x =>
    map[x].map(m => ({ name: m, type: x, args: client[m].args || {}, result: getResultFormat(m) }))
  );

  if (grouped) {
    return keys.reduce((memo, x, i) => {
      memo[x] = formats[i];
      return memo;
    }, {});
  }

  return formats
    .reduce((memo, x, i) => {
      return memo.concat(formats[i]);
    }, [])
    .reduce((memo, x) => {
      memo[x.name] = x;
      return memo;
    }, {});
};

module.exports = {
  getResultFormat,
  generateFormats,
};
