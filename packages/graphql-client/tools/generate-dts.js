/* eslint no-console:"off" */
/* eslint indent:"off" */
const fs = require('fs');
const path = require('path');
const sortBy = require('lodash/sortBy');
const camelcase = require('lodash/camelcase');
const upperFirst = require('lodash/upperFirst');

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
    return `Array<${
      type.ofType.kind === 'SCALAR' ? scalarTypes[type.ofType.name] : type.ofType.name
    }>`;
  }

  if (['OBJECT', 'ENUM', 'UNION'].includes(type.kind)) {
    return `${ns ? `${ns}.` : ''}${type.name}`;
  }
};

const generateInterface = ({ fields, name }, ns = '', action = 'export') => `
${action} interface ${name} {
${(fields || []).map(x => `  ${x.name}: ${getFieldType(x.type, ns)};`).join('\n')}
}`;

const generateUnion = ({ possibleTypes, name }, ns = '', action = 'export') => `
${action} type ${name} = ${possibleTypes.map(x => getFieldType(x, ns)).join(' | ')};`;

const generateEnum = ({ name, enumValues }, ns = '', action = 'export') => `
${action} enum ${name} {
${(enumValues || []).map(x => `  ${x.name},`).join('\n')}
}`;

const generateTypeExport = (type, ns) => {
  if (type.kind === 'ENUM') {
    return generateEnum(type, ns);
  }
  if (type.kind === 'UNION') {
    return generateUnion(type, ns);
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

const generateMethods = (methods, ns, resultType) =>
  methods
    .map(x => {
      const namespace = ns ? `${ns}.` : '';
      const argType = getArgTypeName(x);
      const params = argType ? `params: ${namespace}${argType}` : '';
      const returnType = getFieldType(x.type, ns) || 'void';
      return `${x.name}(${params}): ${namespace}${resultType}<${returnType}>`;
    })
    .join('\n');

const dtsContent = `export as namespace ${namespace};

/*~ This declaration specifies that the class constructor function
 *~ is the exported object from the file
 */
export = GraphQLClient;

/*~ Write your module's methods and properties in this class */
declare class GraphQLClient {
  config: any;
  schema: void;
  constructor(httpEndpoint: string);

  getQueries(): string[];
  getSubscriptions(): string[];
  getMutations(): string[];

  /**
   * Send raw query to ocap and return results
   *
   * @param {*} query
   * @memberof BaseClient
   * @return Promise
   */
  doRawQuery(query: any, requestOptions?: any): Promise<any>;
  doRawSubscription(query: any): Promise<any>;

  generateQueryFns(): void;
  generateSubscriptionFns(): void;
  generateMutationFns(): void;

  ${client
    .getTxMethods()
    .map(
      x =>
        `${x}(param: GraphQLClient.TxParam<GraphQLClient.${x.replace(
          /^send/,
          ''
        )}>): Promise<GraphQLClient.ResponseSendTx>;`
    )
    .join('\n')}
  ${generateMethods(queries, namespace, 'QueryResult')}
  ${generateMethods(mutations, namespace, 'QueryResult')}
  ${generateMethods(subscriptions, namespace, 'SubscriptionResult')}
}

declare namespace ${namespace} {
  export interface QueryResult<T> {
    then(fn: (result: T) => any): Promise<any>;
    catch(fn: (err: Error) => any): Promise<any>;
  }

  export interface SubscriptionResult<T> {
    then(fn: (result: GraphQLClient.Subscription<T>) => any): Promise<any>;
    catch(fn: (err: Error) => any): Promise<any>;
  }

  export interface Subscription<T> {
    on(event: 'data', fn: (data: T) => any): this;
    on(event: 'error', fn: (err: Error) => void): this;
  }

  export interface TxParam<T> {
    data: T;
    wallet: GraphQLClient.WalletObject,
  }

  export interface WalletObject {
    publicKey: string;
    secretKey: string;
    type: GraphQLClient.WalletTypeObject,
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

${sortBy(types, ['kind', 'name'])
  .filter(x => !x.name.startsWith('__'))
  .filter(x => !x.name.startsWith('Root'))
  .filter(x => x.kind !== 'SCALAR')
  .map(x => generateTypeExport(x, namespace))
  .join('\n')}

${generateMethodsExports(queries, namespace)}
${generateMethodsExports(mutations, namespace)}
${generateMethodsExports(subscriptions, namespace)}
}
`;

const environments = ['browser', 'node'];
environments.forEach(env => {
  const dtsFile = path.join(__dirname, `../src/${env}.d.ts`);
  fs.writeFileSync(dtsFile, dtsContent);
  console.log('generated typescript definitions: ', dtsFile);
});
