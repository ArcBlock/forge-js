// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

import { EventEmitter } from 'events';
/**
 * Defines the interface of DID-Auth Token Storage
 * Which is used to persist state during the DID-Auth process in a dApp
 *
 * @class AuthStorage
 * @see @arcblock/did-auth-storage-firebase
 * @see @arcblock/did-auth-storage-mongo
 * @see @arcblock/did-auth-storage-keystone
 * @extends {EventEmitter}
 */
declare class AuthStorage extends EventEmitter {
  /**
   * Creates an instance of AuthStorage.
   *
   * @class
   * @param {object} options
   */
  constructor(options: any);
  create(token: any, status?: string): void;
  read(token: any): void;
  update(token: any, updates: any): void;
  delete(token: any): void;
  exist(token: any, did: any): void;
}
declare class MongoAuthStorage extends AuthStorage {
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
  update(token: any, updates: any, upsert?: boolean): any;
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
