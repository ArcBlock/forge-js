/* eslint no-console:"off" */
/* eslint indent:"off" */
const fs = require('fs');
const path = require('path');
const util = require('util');
const sdk = require('../');
const pretty = data => util.inspect(data, { depth: 8, colors: false, compact: false });
const { enums } = require('@arcblock/forge-proto');
const { RpcClient, parseConfig } = sdk;
const client = new RpcClient(
  parseConfig(path.resolve(__dirname, '../../../examples/simple/forge.toml'))
);

const rpcMethods = client.listRpcMethods();
// const shortcutMethods = []; // client.listShortcutMethods();

const generateEnumDocs = () => `## Enums
${Object.keys(enums)
  .map(
    x => `
### ${x}

\`\`\`js
${pretty(enums[x])}
\`\`\`
`
  )
  .join('')}`;

const generateMethodDocs = (title, methods) => `
## ${title} Methods

> RPC response contains an \`code\` field, when \`code=0\` means success
> Binary data in RPC response are \`UInt8Array\` instance and can be safely encoded to base64 string

${Object.keys(methods)
  .sort()
  .map(x => {
    const method = client[x];
    const { responseStream } = method.meta;
    const result = responseStream ? 'stream' : 'result';
    const _await = responseStream ? '' : 'await ';

    return `
### ${x}

\`\`\`js
const ${result} = ${_await}client.${x}(${pretty(method.$requestExample())});
${
      responseStream
        ? `
// output
${pretty(method.$responseExample())}
`
        : `
// response is a stream
${result}.on('data', data => {
  // response data format
  ${pretty(method.$responseExample())}
});
`
    }
\`\`\`
`;
  })
  .join('')}
`;

fs.writeFileSync(
  './API.md',
  `# API Documentation

## Table of Contents

${generateEnumDocs()}

${generateMethodDocs('RPC', rpcMethods)}
`
);

console.log('generated api documentation to API.md');
