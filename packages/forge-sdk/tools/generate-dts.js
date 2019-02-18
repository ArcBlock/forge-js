/* eslint no-console:"off" */
/* eslint indent:"off" */
const fs = require('fs');
const path = require('path');
const get = require('lodash/get');
const camelcase = require('lodash/camelcase');
const { compactSpec } = require('@arcblock/forge-proto');
const specs = require('@arcblock/forge-proto/lib/spec.json');

const types = compactSpec(specs);

const scalarTypes = {
  bytes: 'Uint8Array',
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
declare namespace RpcClient {
  export interface UnaryResult<T> {
    then(fn: (result: T) => any): Promise<any>;
    catch(fn: (err: Error) => any): Promise<any>;
  }

  export interface StreamResult<T> {
    on(event: 'data', fn: (data: T) => any): this;
    on(event: 'error', fn: (err: Error) => void): this;
  }
}
`);
console.log('rpc namespaces generated', namespaces.length);

const services = getTypesArray('forge_abi').filter(x => x.methods);
const methods = services.map(x => generateMethods(x.methods, 'forge_abi', 'RpcClient'));
console.log('rpc services generated', methods.length);

// TODO: generate shortcut methods

const filePath = path.join(__dirname, '../index.d.ts');
let fileContent = fs.readFileSync(filePath).toString();
fileContent = fileContent.replace(/__RpcClientMethods__/, `\n${methods.join('\n')}\n`);
fileContent = fileContent + namespaces.join('\n');
fs.writeFileSync(filePath, fileContent);

console.log('dts file written', filePath);
