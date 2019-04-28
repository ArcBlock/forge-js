/* eslint no-console:"off" */
/* eslint indent:"off" */
const fs = require('fs');
const path = require('path');
const util = require('util');
const get = require('lodash/get');
const { parse } = require('@arcblock/forge-config');
const { compactSpec } = require('@arcblock/forge-proto');
const specs = require('@arcblock/forge-proto/lib/spec.json');

const { RpcClient } = require('../');

const pretty = data => util.inspect(data, { depth: 8, colors: false, compact: false });
const client = new RpcClient(parse(path.resolve(__dirname, '../../../examples/simple/forge.toml')));
const namespace = 'GRpcClient';
const examples = {};

const types = compactSpec(specs);

const scalarTypes = {
  bytes: 'Uint8Array',
  bool: 'boolean',
  string: 'string',
  double: 'number',
  float: 'number',
  int32: 'number',
  sint32: 'number',
  uint32: 'number',
  sfixed32: 'number',
  int64: 'number',
  sint64: 'number',
  uint64: 'number',
  sfixed64: 'number',
};

const getFieldType = (field, ns = '') => {
  const namespace = ns ? `${ns}.` : '';
  const prefix = namespace;
  const type = field.type.split('.').pop();

  if (field.rule === 'repeated') {
    return `Array<${scalarTypes[type] ? scalarTypes[type] : `${prefix}${type}`}>`;
  }

  if (scalarTypes[type]) {
    return scalarTypes[type];
  }

  return `${prefix}${type}`;
};

const generateInterface = ({ fields, name }, ns = '') => `
/**
 * Structure of ${ns}.${name}
 *
${
  examples[name]
    ? `
\`\`\`javascript
${examples[name]}
\`\`\`
`
    : ''
}
 *
 * @memberof ${ns}
 * @typedef {object} ${ns}.${name}
${Object.keys(fields || {})
  .map(x => ` * @prop {${getFieldType(fields[x], ns)}} ${x}`)
  .join('\n')}
 */`;

const generateTypeExport = (type, ns) => {
  if (type.values) {
    // return generateEnum(type, ns);
    return '';
  }

  if (type.fields) {
    return generateInterface(type, ns);
  }
};

const generateNamespace = (types, ns) => types.map(x => generateTypeExport(x, ns)).join('\n');

const getTypesArray = namespace => {
  const obj = get(types, namespace);
  return Object.keys(obj).map(x => Object.assign(obj[x], { name: x }));
};

// 1. Generate typedef for all rpc methods
const methods = client.listRpcMethods();
const docs = Object.keys(methods).map(x => {
  const { requestType, responseType, responseStream } = methods[x];
  const returns = responseStream ? 'EventEmitter' : `Promise.<${namespace}.${responseType}>`;
  const method = client[x];
  examples[requestType] = pretty(method.$requestExample());
  examples[responseType] = pretty(method.$responseExample());

  return `
/**
 * Send gRPC call and return the result
 *
 * @memberof ${namespace}
 * @function
 * @name ${namespace}#${x}
 * @param {${namespace}.${requestType}} params
 * @returns {${returns}} ${
    responseStream
      ? `EventEmitter that emits \`data\` event when new data received, checkout {@link ${namespace}.${responseType}} for payload format.`
      : ''
  }
 */`;
});

// 2. Generate typedef for all tx send/encode methods

// 3. Generate typedef for all types
const namespaces = ['forge_abi', 'google.protobuf', 'abci_vendor']
  .map(ns => generateNamespace(getTypesArray(ns), namespace))
  .reduce((acc, x) => acc.concat(x), []);

fs.writeFileSync(path.resolve(__dirname, '../lib/types.js'), namespaces.concat(docs).join('\n'));
console.log('generated jsdoc types to types.js');

//  * Request sample:
// \`\`\`js
// ${requestExample}
// \`\`\`
//  *
//  * ${responseStream ? 'data event param' : 'response' } sample:
// \`\`\`js
// ${responseExample}
// \`\`\`
