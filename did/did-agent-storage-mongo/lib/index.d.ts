// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

import { EventEmitter } from 'events';
/**
 * Defines the interface of authorized did auth storage
 * Which is used when building an centralized service that do did-auth on behalf of many applications
 * The service can implement a version of itself
 *
 * @class DidAgentStorage
 * @see @arcblock/did-agent-storage-memory
 * @see @arcblock/did-agent-storage-mongo
 * @extends {EventEmitter}
 */
declare class DidAgentStorage extends EventEmitter {
  requiredFields: string[];
  /**
   * Creates an instance of DidAgentStorage.
   *
   * @class
   * @param {object} options
   */
  constructor(options: any);
  create(authorizeId: any, payload: any): void;
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
  /**
   * Creates an instance of MongoAgentStorage.
   *
   * @class
   * @param {Object} options { collection, url }
   * @param {string} options.url - mongodb connection string
   * @param {string} [options.collection='did_agent_authorizations'] - which collection to store agent authorizations
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
