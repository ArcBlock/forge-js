/* eslint no-console:"off" */
/* eslint indent:"off" */
const fs = require('fs');
const path = require('path');
const get = require('lodash/get');
const { compactSpec } = require('@arcblock/forge-proto');
const { fakeMessage } = require('@arcblock/forge-message');
const specs = require('@arcblock/forge-proto/lib/spec.json');

const GRpcClient = require('../');

const client = new GRpcClient('tcp://127.0.0.1:28210');
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

const printExample = name => {
  let example = examples[name];
  if (name.endsWith('Tx')) {
    example = JSON.stringify(fakeMessage(name), true, '  ');
  }
  if (example) {
    return `
 *
\`\`\`javascript
${example}
\`\`\``;
  }

  return '';
};

const generateInterface = ({ fields, name }, ns = '') => `
/**
 * Structure of ${ns}.${name} ${printExample(name)}
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
const methods = client.getRpcMethods();
const docs = Object.keys(methods).map(x => {
  const { requestType, responseType, responseStream } = methods[x];
  const returns = responseStream ? 'EventEmitter' : `Promise.<${namespace}.${responseType}>`;
  const method = client[x];
  examples[requestType] = JSON.stringify(method.$requestExample(), true, '  ');
  examples[responseType] = JSON.stringify(method.$responseExample(), true, '  ');

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
const getTxSendTypes = (name, tx, ns) => `
/**
 * @memberof ${ns}
 * @typedef {Object} ${ns}.${tx}Input
 * @prop {object} input
 * @prop {object} input.tx - data of the transaction
 * @prop {${ns}.${tx}} input.tx.itx - the actual transaction object
 * @prop {string} [input.tx.pk] - the sender pk
 * @prop {string} [input.tx.from] - the sender address, can be derived from wallet
 * @prop {number} [input.tx.nonce] - the tx nonce, defaults to Date.now if not set
 * @prop {string} [input.tx.chainId] - the chainId
 * @prop {string} [input.tx.signature] - transaction signature
 * @prop {array} [input.tx.signatures] - transaction signatures, should be set when it's a multisig transaction
 * @prop {object} input.wallet - the wallet used to sign the transaction, either a forge managed wallet or user managed wallet
 * @prop {string} [input.signature] - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send ${tx} transaction and get the hash, use {@link ${ns}#getTx} to get transaction detail
 *
 * @memberof ${ns}
 * @function
 * @name ${ns}#${name}
 * @param {${ns}.${tx}Input} params
 * @returns {Promise<string>} returns transaction hash if success, otherwise error was thrown
 */
`;

const getTxEncodeTypes = (name, tx, ns) => `
/**
 * Encode a ${tx} transaction for later use
 *
 * @name ${ns}#${name}
 * @function
 * @memberof ${ns}
 * @param {${ns}.${tx}Input} params
 * @returns {Promise<${ns}.TxEncodeOutput>} result - we provide two formats of the encoding result, binary presentation and human readable object
 */
`;

const sendMethods = client.getTxSendMethods();
const sendMethodDocs = Object.keys(sendMethods).map(x =>
  getTxSendTypes(x, sendMethods[x], namespace)
);
const encodeMethods = client.getTxEncodeMethods();
const encodeMethodDocs = Object.keys(encodeMethods).map(x =>
  getTxEncodeTypes(x, encodeMethods[x], namespace)
);

// 3. Generate typedef for all types
const namespaces = ['forge_abi', 'google.protobuf', 'abci_vendor']
  .map(ns => generateNamespace(getTypesArray(ns), namespace))
  .reduce((acc, x) => acc.concat(x), []);

namespaces.unshift(`
/**
 * Structure of ${namespace}.TxEncodeOutput
 *
 * @memberof ${namespace}
 * @typedef {object} ${namespace}.TxEncodeOutput
 * @property {object} object - the transaction object, human readable
 * @property {buffer} buffer - the transaction binary presentation, can be used to signing, encoding to other formats
 */
`);

fs.writeFileSync(
  path.resolve(__dirname, '../lib/types.js'),
  namespaces.concat(docs, sendMethodDocs, encodeMethodDocs).join('\n')
);
console.log('generated jsdoc types to types.js');
