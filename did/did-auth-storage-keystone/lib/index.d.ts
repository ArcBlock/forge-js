// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

import { EventEmitter } from 'events';
/**
 * Defines the interface of DID-Auth Token Storage
 * Which is used during the DID-Auth process in an typical application
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
declare class KeystoneStorage extends AuthStorage {
  /**
   * Creates an instance of AuthStorage.
   *
   * @class
   * @param {object} options
   */
  static init(): void;
  model: any;
  constructor();
  create(token: any, status?: string): any;
  read(token: any): any;
  update(token: any, updates: any): any;
  delete(token: any): any;
  exist(token: any, did: any): any;
}
declare const _Lib: typeof KeystoneStorage;
export = _Lib;
