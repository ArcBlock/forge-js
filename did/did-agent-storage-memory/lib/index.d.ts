// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

import { EventEmitter } from 'events';
/**
 * Defines the interface of DID-Auth Token Storage
 * Which is used during the DID-Auth process in an typical application
 *
 * @class DidAgentStorage
 * @see @arcblock/did-auth-storage-firebase
 * @see @arcblock/did-auth-storage-mongo
 * @see @arcblock/did-auth-storage-keystone
 * @extends {EventEmitter}
 */
declare class DidAgentStorage extends EventEmitter {
  /**
   * Creates an instance of DidAgentStorage.
   *
   * @class
   * @param {object} options
   */
  constructor(options: any);
  create(authorizeId: any): void;
  update(authorizeId: any, updates: any): void;
  read(authorizeId: any): void;
  delete(authorizeId: any): void;
  listByOwner(ownerDid: any): void;
  listByApp(appDid: any): void;
  listByAgent(agentDid: any): void;
}
declare class MemoryAgentStorage extends DidAgentStorage {
  read(authorizeId: any): any;
  create(authorizeId: any, payload?: _Lib.T100): any;
  update(authorizeId: any, updates: any): any;
  delete(authorizeId: any): void;
  listByOwner(ownerDid: any): void;
  listByApp(appDid: any): void;
  clear(): void;
}
declare const _Lib: typeof MemoryAgentStorage;
declare namespace _Lib {
  export interface T100 {
    [key: string]: any;
  }
}
export = _Lib;
