/* eslint no-console:"off" */
/* eslint indent:"off" */
const fs = require('fs');
const path = require('path');
const { print, parse } = require('graphql');
const { randomArg, randomArgs } = require('@arcblock/sdk-util/lib/util');
const Client = require('../src/client');

const genSectionDoc = (title, methods) => {
  return `
## ${title}
${
  methods.length > 0
    ? methods
        .map(
          method => `
### ${method.name}

#### Arguments

${
  Object.values(method.args).length
    ? Object.values(method.args)
        .map(
          arg =>
            `* **${arg.name}**, ${arg.type.kind === 'NON_NULL' ? '**required**' : 'optional'}, ${
              arg.description
            }`
        )
        .join('\n')
    : 'No arguments'
}

#### Result Format

\`\`\`graphql
${print(parse(method.result))}
\`\`\``
        )
        .join('\n')
    : `\nNo ${title} supported yet.\n`
}`;
};

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

const docs = Object.keys(map).map(x =>
  genSectionDoc(
    x,
    map[x].map(m => ({ name: m, args: client[m].args || {}, result: getResultFormat(m) }))
  )
);

const docFile = path.join(__dirname, '../docs/API.md');
fs.writeFileSync(
  docFile,
  `# Forge GraphQL API List\n

> Updated on ${new Date().toISOString()}

## Table of Contents

${docs.join('\n')}`
);
console.log('generated docs: ', docFile);
