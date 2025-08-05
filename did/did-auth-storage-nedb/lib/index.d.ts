// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

import * as events from 'events';
/**
 * Defines the interface of DID-Auth Token Storage
 * Which is used to persist state during the DID-Auth process in a dApp
 *
 * @class AuthStorage
 * @see @arcblock/did-connect-storage-firebase
 * @see @arcblock/did-connect-storage-mongo
 * @see @arcblock/did-connect-storage-keystone
 * @extends {EventEmitter}
 */
declare class AuthStorage extends events {
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
declare class DiskAuthStorage extends AuthStorage {
  options: _Lib.T100;
  db: any;
  /**
   * Creates an instance of DiskAuthStorage.
   *
   * @class
   * @param {Object} options { dbPath }
   * @param {string} options.dbPath - where to store the database on disk
   */
  constructor(options?: _Lib.T100);
  read(token: any): Promise<any>;
  create(token: any, status?: string): Promise<any>;
  update(token: any, updates?: _Lib.T101): Promise<any>;
  delete(token: any): Promise<any>;
  exist(token: any, did: any): Promise<any>;
  clear(): Promise<any>;
}
declare const _Lib: typeof DiskAuthStorage;
declare namespace _Lib {
  export interface T100 {
    dbPath: string;
  }
  export interface T101 {
    [key: string]: any;
  }
}
export = _Lib;
