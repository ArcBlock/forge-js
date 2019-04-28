/* eslint no-console:"off" */
/* eslint indent:"off" */
const fs = require('fs');
const path = require('path');
const { print, parse } = require('graphql');
const { generateFormats } = require('./doc-util');

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

const map = generateFormats(true);
const docs = Object.keys(map).map(x => genSectionDoc(x, map[x]));

const docFile = path.join(__dirname, '../QUERIES.md');
fs.writeFileSync(
  docFile,
  `# Forge GraphQL API List\n

> Updated on ${new Date().toISOString()}

## Table of Contents

${docs.join('\n')}`
);
console.log('generated docs: ', docFile);
