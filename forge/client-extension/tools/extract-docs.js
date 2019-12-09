/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs');
const os = require('os');
const path = require('path');
const extract = require('esprima-extract-comments');
const prettier = require('prettier');

const source = fs.readFileSync(path.join(__dirname, '../lib/index.js')).toString();
const comments = extract(source).filter(
  x => x.type === 'BlockComment' && x.value.indexOf('@memberof GraphQLClient') > 0
);
const methods = prettier.format(comments.map(x => `/*${x.value}*/${os.EOL}`).join(os.EOL), {
  parser: 'babel',
});

const targets = {
  GRpcClient: path.join(__dirname, '../../grpc-client/lib/methods.js'),
  GraphQLClient: path.join(__dirname, '../../graphql-client/src/methods.js'),
};

Object.keys(targets).forEach(x => {
  const content = methods.replace(/GraphQLClient/g, x);
  fs.writeFileSync(
    targets[x],
    `// This file is generated automatically, do not edit\n\n${content}`
  );
  console.log(`updated ${targets[x]}`);
});
