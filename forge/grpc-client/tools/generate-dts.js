/* eslint no-console:"off" */
/* eslint indent:"off" */
const fs = require('fs');
const path = require('path');
const get = require('lodash/get');
const camelcase = require('lodash/camelcase');
const { compactSpec } = require('@arcblock/forge-proto');
const specs = require('@arcblock/forge-proto/lib/spec.json');
const GRpcClient = require('../');

const client = new GRpcClient('tcp://127.0.0.1:28210');
const ns = 'GRpcClient';

const types = compactSpec(specs);

const scalarTypes = {
  bytes: 'Uint8Array',
  bool: 'boolean',
  string: 'string',
  double: 'number',
  float: 'number',
  sint32: 'number',
  uint32: 'number',
  sfixed32: 'number',
  sint64: 'number',
  uint64: 'number',
  sfixed64: 'number',
};

const getFieldType = (field, ns = '') => {
  const namespace = ns ? `${ns}.` : '';
  const prefix = field.type.indexOf('.') > 0 ? '' : namespace;

  if (field.rule === 'repeated') {
    return `Array<${scalarTypes[field.type] ? scalarTypes[field.type] : `${prefix}${field.type}`}>`;
  }

  if (scalarTypes[field.type]) {
    return scalarTypes[field.type];
  }

  return `${prefix}${field.type}`;
};

const generateInterface = ({ fields, name }, ns = '', action = 'export') => `
${action} interface ${name} {
${Object.keys(fields || {})
  .map(x => `  ${x}: ${getFieldType(fields[x], ns)};`)
  .join('\n')}
}`;

// const generateUnion = ({ possibleTypes, name }, ns = '', action = 'export') => `
// ${action} type ${name} = ${possibleTypes.map(x => getFieldType(x, ns)).join(' | ')};`;

const generateEnum = ({ name, values }, ns = '', action = 'export') => `
${action} enum ${name} {
${Object.keys(values || {})
  .map(x => `  ${x.toUpperCase()} = ${values[x]},`)
  .join('\n')}
}`;

const generateTypeExport = (type, ns) => {
  if (type.values) {
    return generateEnum(type, ns);
  }

  if (type.fields) {
    return generateInterface(type, ns);
  }
};

const generateMethods = (methods, ns, ns2) =>
  Object.keys(methods)
    .map(name => {
      const fn = camelcase(name);
      const namespace = ns ? `${ns}.` : '';
      const namespace2 = ns2 ? `${ns2}.` : '';
      const { requestType, responseType, requestStream, responseStream } = methods[name];
      const resultType = responseStream ? 'StreamResult' : 'UnaryResult';
      let params = `request: ${namespace}${requestType}`;
      if (requestStream) {
        params += ` | Array<${namespace}${requestType}>`;
      }
      return `${fn}(${params}): ${namespace2}${resultType}<${namespace}${responseType}>;`;
    })
    .join('\n');

// 1. generate type definitions
const generateNamespace = (types, ns) => `
declare namespace ${ns} {
${types.map(x => generateTypeExport(x, ns)).join('\n')}
}`;
const getTypesArray = namespace => {
  const obj = get(types, namespace);
  return Object.keys(obj).map(x => Object.assign(obj[x], { name: x }));
};
const namespaces = ['forge_abi', 'google.protobuf', 'abci_vendor'].map(ns =>
  generateNamespace(getTypesArray(ns), ns)
);

// Extra namespace to make rpc methods work
namespaces.push(`
declare namespace GRpcClient {
  export interface UnaryResult<T> {
    then(fn: (result: T) => any): Promise<any>;
    catch(fn: (err: Error) => any): Promise<any>;
  }

  export interface StreamResult<T> {
    on(event: 'data', fn: (data: T) => any): this;
    on(event: 'error', fn: (err: Error) => void): this;
  }

  export interface TxParam<T> {
    tx: ItxParam<T>;
    wallet: GRpcClient.WalletObject,
    delegatee: string;
    signature: string;
  }

  export interface ItxParam<T> {
    nonce: number;
    from: string;
    pk: string;
    chainId: string;
    signature: string;
    delegator: string;
    signatures: array;
    itx: T;
  }

  export interface WalletObject {
    publicKey: string;
    secretKey: string;
    type: GRpcClient.WalletTypeObject,
    sign(message: string): string;
    verify(message: string, signature: string): boolean;
    toJSON(): object;
    toAddress(): string;
  }

  export interface WalletTypeObject {
    pk: number;
    role: number;
    address: number;
    hash: number;
  }

  export interface EncodeTxResult {
    object: object;
    buffer: buffer;
  }
}
`);
console.log('rpc namespaces generated', namespaces.length);

// 2. generate standard grpc methods
const services = getTypesArray('forge_abi').filter(x => x.methods);
const methods = services.map(x => generateMethods(x.methods, 'forge_abi', 'GRpcClient'));
console.log('rpc services generated', methods.length);

// 3. generate shortcut transaction send/encode methods
const encodeMethods = client.getTxEncodeMethods();
const encodeMethodDocs = encodeMethods.map(
  x => `${x}(param: ${ns}.TxParam<${ns}.${encodeMethods[x]}>): Promise<${ns}.ResponseSendTx>;`
);

const sendMethods = client.getTxSendMethods();
const sendMethodDocs = sendMethods.map(
  x => `${x}(param: ${ns}.TxParam<${ns}.${sendMethods[x]}>): Promise<${ns}.EncodeTxResult>;`
);

const signMethods = client.getTxSignMethods();
const signMethodDocs = signMethods.map(
  x => `${x}(param: ${ns}.TxParam<${ns}.${signMethods[x]}>): Promise<${ns}.Transaction>;`
);

const multiSignMethods = client.getTxMultiSignMethods();
const multiSignMethodDocs = multiSignMethods.map(
  x => `${x}(param: ${ns}.TxParam<${ns}.${multiSignMethods[x]}>): Promise<${ns}.Transaction>;`
);

// 4. mix everything together
const filePath = path.join(__dirname, '../index.d.ts');
let fileContent = fs.readFileSync(filePath).toString();
fileContent = fileContent.replace(
  /__GRpcClientMethods__/,
  `\n${methods
    .concat(encodeMethodDocs, sendMethodDocs, signMethodDocs, multiSignMethodDocs)
    .join('\n')}\n`
);
fileContent = fileContent + namespaces.join('\n');
fs.writeFileSync(filePath, fileContent);

console.log('dts file written', filePath);
