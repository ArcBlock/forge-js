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
declare const _Lib: typeof AuthStorage;
export = _Lib;
