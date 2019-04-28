/* eslint no-console:"off" */
/* eslint indent:"off" */
const fs = require('fs');
const path = require('path');
const sortBy = require('lodash/sortBy');
const camelcase = require('lodash/camelcase');
const upperFirst = require('lodash/upperFirst');
const { print, parse } = require('graphql');

const Client = require('../src/client');
const { generateFormats } = require('./doc-util');

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
const formats = generateFormats(false);
const namespace = 'GraphQLClient';

const scalarTypes = {
  Int: 'number',
  Float: 'number',
  String: 'string',
  HexString: 'string',
  DateTime: 'string',
  Boolean: 'boolean',
};

const printFormat = name => {
  if (formats[name] && formats[name].result) {
    const gql = print(parse(formats[name].result));
    return gql
      .split('\n')
      .map(x => ` * ${x}`)
      .join('\n');
  }

  return '';
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

const generateInterface = ({ fields, name }, ns = '') => `
/**
 * Structure of ${ns}.${name}
 *
 * @typedef {Object} ${ns}.${name}
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
    },
    ns
  );

const generateMethodsExports = (methods, ns) =>
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
 * Use following query for result format reference
 *
 * \`\`\`graphql
${printFormat(x.name)}
 * \`\`\`
 *
 * @method
 * @name ${namespace}#${x.name}${argType ? `\n * @param {...${ns}.${argType}}` : ''}
 * @returns {Promise<${resultType}>} Checkout {@link ${resultType}} for resolved data format
 */
`;
    })
    .join('\n');

const getTxSendTypes = (name, tx, ns) => `
/**
 * Structure of param.data for transaction sending/encoding method ${name}
 *
 * @typedef {Object} ${ns}.${tx}InputData
 * @prop {...${ns}.${tx}}
 * @prop {...${ns}.TxInputExtra}
 */

/**
 * Structure of param for transaction sending/encoding method ${name}
 *
 * @typedef {Object} ${ns}.${tx}Input
 * @prop {...${ns}.${tx}SendInputData} input.data - should be the ${tx} object in most simple case
 * @prop {object} input.wallet - should be a wallet instance constructed using forge-wallet
 * @prop {object} input.signature - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send transaction and get the hash, if you want to get transaction detail please use {@link ${ns}#getTx}
 *
 * @method
 * @name ${ns}#${name}
 * @param {${ns}.${tx}Input}
 * @returns {Promise} returns transaction hash if success, otherwise error was thrown
 */
`;

const getTxEncodeTypes = (name, tx, ns) => `
/**
 * Encode transaction, users can pass plain objects for itx.data field
 *
 * @method
 * @name ${ns}#${name}
 * @param {${ns}.${tx}Input}
 * @returns {object} result - we provide two formats of the encoding result
 * @returns {buffer} result.buffer - binary presentation of the tx, can be used for further encoding or signing
 * @returns {object} result.object - human readable tx object
 */
`;

const dtsContent = `
/**
 * List all query method names
 *
 * @method
 * @name ${namespace}#getQueries
 * @returns {Array<string>} method name list
 */

/**
 * List all mutation method names
 *
 * @method
 * @name ${namespace}#getMutations
 * @returns {Array<string>} method name list
 */

/**
 * List all subscription method names
 *
 * @method
 * @name ${namespace}#getSubscription
 * @returns {Array<string>} method name list
 */

/**
 * Send raw graphql query to forge graphql endpoint
 *
 * @method
 * @name ${namespace}#doRawQuery
 * @param {string} query - graphql query string
 * @returns {Promise} usually axios response data
 */

/**
 * Send raw graphql subscription to forge graphql endpoint
 *
 * @method
 * @name ${namespace}#doRawSubscription
 * @param {string} query - graphql query string
 * @returns {Promise} usually axios response data
 */

/**
 * Common props for sending or encoding a transaction
 *
 * @typedef {Object} ${namespace}.TxInputExtra
 * @prop {string} chainId - if not specified, will fetch from graphql endpoint
 * @prop {number} nonce - if not specified, will use Date.now as nonce
 * @prop {string} from - sender address, if not specified, will use wallet.toAddress
 * @prop {string} pk - sender publicKey, if not specified, will use wallet.publicKey
 */

/**
 * Structure of GraphQLClient.WalletObject
 *
 * @typedef {Object} GraphQLClient.WalletObject
 * @property {string} publicKey
 * @property {string} secretKey
 * @property {GraphQLClient~WalletTypeObject} type
 */

/**
 * Structure of GraphQLClient.WalletTypeObject
 *
 * @typedef {Object} GraphQLClient.WalletTypeObject
 * @property {number} pk
 * @property {number} role
 * @property {number} hash
 * @property {number} address - defaults to base58btc
 */

/**
 * Structure of GraphQLClient.EncodeTxResult
 *
 * @typedef {Object} GraphQLClient.EncodeTxResult
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

${generateMethodsExports(queries, namespace)}
${generateMethodsExports(mutations, namespace)}
${generateMethodsExports(subscriptions, namespace)}

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
