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
declare class MongoAgentStorage extends DidAgentStorage {
  collectionName: string;
  options: _Lib.T100;
  requiredFields: string[];
  /**
   * Creates an instance of MongoAgentStorage.
   *
   * @class
   * @param {Object} options { collection, url }
   * @param {string} options.url - mongodb connection string
   * @param {string} [options.collection='app-agent-authorizations'] - which collection to store agent authorizations
   */
  constructor(options: _Lib.T100);
  connectionFailed(err: any): void;
  handleNewConnectionAsync(client: any): void;
  changeState(newState: any): void;
  setCollection(collection: any): this;
  collectionReady(): any;
  read(authorizeId: any): any;
  create(authorizeId: any, payloads: any): any;
  update(authorizeId: any, updates: any): any;
  delete(authorizeId: any): any;
  clear(): any;
  listByOwner(ownerDid: any): any;
  listByApp(appDid: any): any;
  listByAgent(agentDid: any): any;
  close(): void;
}
declare const _Lib: typeof MongoAgentStorage;
declare namespace _Lib {
  export interface T100 {
    url: string;
    collection?: string;
  }
}
export = _Lib;
