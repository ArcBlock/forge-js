// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

declare class MongoStorage {
  collectionName: any;
  options: any;
  /**
   * Creates an instance of MongoStorage.
   *
   * @param {*} options { collection, url }
   */
  constructor(options: any);
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
declare const _Lib: typeof MongoStorage;
export = _Lib;
