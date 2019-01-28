/* eslint no-console:"off" */
/* eslint indent:"off" */
const fs = require('fs');
const path = require('path');
const { print, parse } = require('graphql');
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
                        `* **${arg.name}**, ${
                          arg.type.kind === 'NON_NULL' ? '**required**' : 'optional'
                        }, ${arg.description}`
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

const paging = { size: 10 };
const getResultFormat = m => {
  const args = client[m].args;
  const argValues = Object.values(args)
    .filter(x => x.type.kind === 'NON_NULL')
    .reduce((obj, x) => {
      if (x.name === 'paging') {
        obj.paging = paging;
      } else {
        obj[x.name] = x.type.ofType.name === 'String' ? 'abc' : 123;
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
