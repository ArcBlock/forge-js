// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

declare class MongoAuthStorage {
  collectionName: string;
  options: _Lib.T100;
  /**
   * Creates an instance of MongoAuthStorage.
   *
   * @class
   * @param {Object} options { collection, url }
   * @param {string} options.url - mongodb connection string
   * @param {string} [options.collection='did_auth_tokens'] - which collection to store did auth tokens
   */
  constructor(options: _Lib.T100);
  connectionFailed(err: any): void;
  handleNewConnectionAsync(client: any): void;
  changeState(newState: any): void;
  setCollection(collection: any): this;
  collectionReady(): any;
  read(token: any): any;
  create(token: any, status?: string): any;
  update(token: any, updates: any): any;
  delete(token: any): any;
  exist(token: any, did: any): any;
  clear(): any;
  close(): void;
}
declare const _Lib: typeof MongoAuthStorage;
declare namespace _Lib {
  export interface T100 {
    url: string;
    collection?: string;
  }
}
export = _Lib;
