/* eslint no-console:"off" */
/* eslint indent:"off" */
const fs = require('fs');
const path = require('path');

const Client = require('../src/client');

const client = new Client('http://localhost:4000/api');
const queries = client.getQueries();
const mutations = client.getMutations();
const subscriptions = client.getSubscriptions();

// return console.log({ queries, mutations, subscriptions });

const dtsContent = `export as namespace GraphQLClient;

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
  doRawQuery(query: any, requestOptions?: _Src.T100): Promise<any>;
  doRawSubscription(query: any): Promise<any>;

  generateQueryFns(): void;
  generateSubscriptionFns(): void;
  generateMutationFns(): void;

  // queries
${queries.map(x => `  ${x}(params: any): GraphQLClient.QueryResult<any>;`).join('\n')}

  // mutations
${mutations.map(x => `  ${x}(params: any): GraphQLClient.QueryResult<any>;`).join('\n')}

  // subscriptions
${subscriptions.map(x => `  ${x}(params: any): GraphQLClient.SubscriptionResult;`).join('\n')}
}

/*~ If you want to expose types from your module as well, you can
 *~ place them in this block.
 */
declare namespace GraphQLClient {
  export interface QueryResult<T> {
    then(fn: (result: T) => any): Promise<any>;
    catch(fn: (err: Error) => any): Promise<any>;
  }

  export interface SubscriptionResult {
    then(fn: (result: GraphQLClient.Subscription) => any): Promise<any>;
    catch(fn: (err: Error) => any): Promise<any>;
  }

  export interface Subscription {
    on(event: string, callback: function): void;
  }
}
`;

const environments = ['browser', 'node'];
environments.forEach(env => {
  const dtsFile = path.join(__dirname, `../src/${env}.d.ts`);
  fs.writeFileSync(dtsFile, dtsContent);
  console.log('generated typescript definitions: ', dtsFile);
});
