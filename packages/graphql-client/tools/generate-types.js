/* eslint no-console:"off" */
/* eslint indent:"off" */
const fs = require('fs');
const path = require('path');
const sortBy = require('lodash/sortBy');
const camelcase = require('lodash/camelcase');
const upperFirst = require('lodash/upperFirst');
const { fakeMessage } = require('@arcblock/sdk-util/lib/util');

const Client = require('../src/client');

const client = new Client('http://localhost:4000/api');
const schema = client._getSchema();
const { types, queryType, mutationType, subscriptionType } = schema;

const typesMap = types.reduce((acc, x) => {
  if (x.name.startsWith('__') === false) {
    acc[x.name] = x;
  }
  return acc;
}, {});

const queries = queryType.name ? typesMap[queryType.name].fields : [];
const mutations = mutationType.name ? typesMap[mutationType.name].fields : [];
const subscriptions = subscriptionType.name ? typesMap[subscriptionType.name].fields : [];
const namespace = 'GraphQLClient';

const scalarTypes = {
  Int: 'number',
  Float: 'number',
  String: 'string',
  HexString: 'string',
  DateTime: 'string',
  Boolean: 'boolean',
};

const getFieldType = (type, ns = '') => {
  if (type.kind === 'NON_NULL') {
    return getFieldType(type.ofType);
  }

  if (type.kind === 'SCALAR') {
    return scalarTypes[type.name];
  }

  if (type.kind === 'LIST') {
    return `Array<...${ns ? `${ns}.` : ''}${
      type.ofType.kind === 'SCALAR' ? scalarTypes[type.ofType.name] : type.ofType.name
    }>`;
  }

  if (['OBJECT', 'ENUM', 'UNION', 'INPUT_OBJECT'].includes(type.kind)) {
    return `...${ns ? `${ns}.` : ''}${type.name}`;
  }
};

const printFakeMessage = (name, originName) => {
  try {
    let type = typesMap[name];
    if (originName && !type) {
      type =
        queries.find(x => x.name === originName) ||
        mutations.find(x => x.name === originName) ||
        subscriptions.find(x => x.name === originName);

      if (type) {
        type.fields = type.args;
      }
    }
    return `
 *
 * Checkout the following snippet for the format of ${name}:
 * \`\`\`json
${JSON.stringify(fakeMessage(type, typesMap, 'fields'), true, '  ')}
 * \`\`\``;
  } catch (err) {
    console.error('cannot print fake message', name);
    return '';
  }
};

const generateInterface = ({ fields, name, originName }, ns = '') => `
/**
 * Structure of ${ns}.${name} ${
  name.startsWith('Response') ||
  name.startsWith('Request') ||
  name.endsWith('Params') ||
  name.endsWith('Tx')
    ? printFakeMessage(name, originName)
    : ''
}
 *
 * @memberof ${ns}
 * @typedef {object} ${ns}.${name}
${(fields || []).map(x => ` * @property {${getFieldType(x.type, ns)}} ${x.name}`).join('\n')}
 */`;

const generateTypeExport = (type, ns) => {
  if (type.kind === 'ENUM') {
    return '';
  }
  if (type.kind === 'UNION') {
    return '';
  }
  if (type.kind === 'INPUT_OBJECT') {
    console.log('generate input object', type.name);
    return generateInterface({ name: type.name, fields: type.inputFields }, ns);
  }

  return generateInterface(type, ns);
};

const getArgTypeName = type =>
  Array.isArray(type.args) && type.args.length ? upperFirst(camelcase(`${type.name}_params`)) : '';

const generateArgType = (type, ns) =>
  generateInterface(
    {
      fields: type.args,
      name: getArgTypeName(type),
      originName: type.name,
    },
    ns
  );

const generateArgs = (methods, ns) =>
  methods
    .filter(x => Array.isArray(x.args) && x.args.length)
    .map(x => generateArgType(x, ns))
    .join('\n');

const generateMethods = (methods, ns) =>
  methods
    .map(x => {
      const namespace = ns ? `${ns}` : '';
      const argType = getArgTypeName(x);
      const returnType = getFieldType(x.type, ns) || 'void';
      const resultType = returnType.replace('...', '');
      return `
/**
 * ${x.name}
 *
 * @name ${namespace}#${x.name}${argType ? `\n * @param {${ns}.${argType}} params` : ''}
 * @function
 * @memberof ${ns}
 * @returns {Promise<${resultType}>} Checkout {@link ${resultType}} for resolved data format
 */
`;
    })
    .join('\n');

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

const dtsContent = `
/**
 * List all query method names
 *
 * @name ${namespace}#getQueries
 * @function
 * @memberof ${namespace}
 * @returns {Array<string>} method name list
 */

/**
 * List all mutation method names
 *
 * @name ${namespace}#getMutations
 * @function
 * @memberof ${namespace}
 * @returns {Array<string>} method name list
 */

/**
 * List all subscription method names
 *
 * @name ${namespace}#getSubscription
 * @function
 * @memberof ${namespace}
 * @returns {Array<string>} method name list
 */

/**
 * Send raw graphql query to forge graphql endpoint
 *
 * @name ${namespace}#doRawQuery
 * @function
 * @memberof ${namespace}
 * @param {string} query - graphql query string
 * @returns {Promise} usually axios response data
 * @example
 * const res = await client.doRawQuery('
 *   getChainInfo {
 *     code
 *     info {
 *       address
 *       blockHeight
 *     }
 *   }
 * ');
 *
 * // Then
 * // res.getChainInfo.code
 * // res.getChainInfo.info
 */

/**
 * Send raw graphql subscription to forge graphql endpoint
 *
 * @name ${namespace}#doRawSubscription
 * @function
 * @memberof ${namespace}
 * @param {string} query - graphql query string
 * @returns {Promise} usually axios response data
 */

/**
 * Structure of GraphQLClient.WalletObject
 *
 * @memberof ${namespace}
 * @typedef {Object} GraphQLClient.WalletObject
 * @property {string} publicKey
 * @property {string} secretKey
 * @property {GraphQLClient~WalletTypeObject} type
 */

/**
 * Structure of GraphQLClient.WalletTypeObject
 *
 * @memberof ${namespace}
 * @typedef {Object} GraphQLClient.WalletTypeObject
 * @property {number} pk
 * @property {number} role
 * @property {number} hash
 * @property {number} address - defaults to base58btc
 */

/**
 * Structure of ${namespace}.TxEncodeOutput
 *
 * @memberof ${namespace}
 * @typedef {object} ${namespace}.TxEncodeOutput
 * @property {object} object - the transaction object, human readable
 * @property {buffer} buffer - the transaction binary presentation, can be used to signing, encoding to other formats
 */

${sortBy(types, ['kind', 'name'])
  .filter(x => !x.name.startsWith('__'))
  .filter(x => !x.name.startsWith('Root'))
  .filter(x => x.kind !== 'SCALAR')
  .map(x => generateTypeExport(x, namespace))
  .filter(Boolean)
  .join('\n')}

${generateArgs(queries, namespace)}
${generateArgs(mutations, namespace)}
${generateArgs(subscriptions, namespace)}

${client
  .getTxSendMethods()
  .map(x => getTxSendTypes(x, x.replace(/^send/, ''), namespace))
  .join('\n')}

${client
  .getTxEncodeMethods()
  .map(x => getTxEncodeTypes(x, x.replace(/^encode/, ''), namespace))
  .join('\n')}

${generateMethods(queries, namespace, 'QueryResult')}
${generateMethods(mutations, namespace, 'QueryResult')}
${generateMethods(subscriptions, namespace, 'SubscriptionResult')}
`;

const dtsFile = path.join(__dirname, '../src/types.js');
fs.writeFileSync(dtsFile, dtsContent);
console.log('generated types definitions: ', dtsFile);
