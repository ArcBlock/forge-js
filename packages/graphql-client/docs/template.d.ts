export as namespace GraphQLClient;

/*~ This declaration specifies that the class constructor function
 *~ is the exported object from the file
 */
export = GraphQLClient;

// declare function QueryFn(params: any): GraphQLClient.QueryResult;
// declare namespace QueryFn {
//   const name = 'query';
//   let args: object;
//   let builder: function;
// }

declare class GraphQLClient {
  config: any;
  schema: void;
  subscriptions: _Src.T100;
  constructor(config: any);
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
  doRawQuery(query: any): Promise<any>;
  doRawSubscription(query: any): Promise<any>;

  generateQueryFns(): void;
  generateSubscriptionFns(): void;
  generateMutationFns(): void;

  getAccountState(params: any): GraphQLClient.QueryResult<any>;
  subscribe(params: any): GraphQLClient.SubscriptionResult;
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
