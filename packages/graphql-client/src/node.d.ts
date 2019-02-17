export as namespace GraphQLClient;

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
  getAccountState(params: any): GraphQLClient.QueryResult<any>;
  getAssetState(params: any): GraphQLClient.QueryResult<any>;
  getBlock(params: any): GraphQLClient.QueryResult<any>;
  getBlocks(params: any): GraphQLClient.QueryResult<any>;
  getChainInfo(params: any): GraphQLClient.QueryResult<any>;
  getConfig(params: any): GraphQLClient.QueryResult<any>;
  getForgeState(params: any): GraphQLClient.QueryResult<any>;
  getForgeStatistics(params: any): GraphQLClient.QueryResult<any>;
  getForgeStatisticsByDay(params: any): GraphQLClient.QueryResult<any>;
  getForgeStatisticsByHour(params: any): GraphQLClient.QueryResult<any>;
  getNetInfo(params: any): GraphQLClient.QueryResult<any>;
  getStakeState(params: any): GraphQLClient.QueryResult<any>;
  getTx(params: any): GraphQLClient.QueryResult<any>;
  getUnconfirmedTxs(params: any): GraphQLClient.QueryResult<any>;
  getValidatorsInfo(params: any): GraphQLClient.QueryResult<any>;
  listWallet(params: any): GraphQLClient.QueryResult<any>;
  loadFile(params: any): GraphQLClient.QueryResult<any>;
  loadWallet(params: any): GraphQLClient.QueryResult<any>;
  multisig(params: any): GraphQLClient.QueryResult<any>;
  pinFile(params: any): GraphQLClient.QueryResult<any>;
  search(params: any): GraphQLClient.QueryResult<any>;

  // mutations
  createTx(params: any): GraphQLClient.QueryResult<any>;
  createWallet(params: any): GraphQLClient.QueryResult<any>;
  declare(params: any): GraphQLClient.QueryResult<any>;
  declareNode(params: any): GraphQLClient.QueryResult<any>;
  recoverWallet(params: any): GraphQLClient.QueryResult<any>;
  removeWallet(params: any): GraphQLClient.QueryResult<any>;
  sendTx(params: any): GraphQLClient.QueryResult<any>;
  storeFile(params: any): GraphQLClient.QueryResult<any>;
  unsubscribe(params: any): GraphQLClient.QueryResult<any>;

  // subscriptions
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
