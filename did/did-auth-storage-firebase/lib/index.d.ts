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
declare class FirebaseStorage extends AuthStorage {
  database: any;
  tokens: string;
  /**
   * Creates an instance of AuthStorage.
   *
   * @class
   * @param {object} options
   */
  constructor(config: any);
  /**
   * Replace disallowed characters in a Firebase reference key.
   *
   * @param  {String} str A child reference key
   * @return {String}     A valid child reference key
   */
  cleanRef(str: string): string;
  create(token: any, status?: string): Promise<any>;
  read(token: any): Promise<any>;
  update(token: any, updates: any): Promise<any>;
  delete(token: any): Promise<any>;
  exist(token: any, did: any): Promise<any>;
}
declare const _Lib: typeof FirebaseStorage;
export = _Lib;
