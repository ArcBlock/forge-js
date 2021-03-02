// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

import * as events from 'events';
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
declare class DidAgentStorage extends events {
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
declare class DiskAgentStorage extends DidAgentStorage {
  options: _Lib.T100;
  db: any;
  /**
   * Creates an instance of DiskAgentStorage.
   *
   * @class
   * @param {Object} options { collection, url }
   * @param {string} options.url - mongodb connection string
   * @param {string} [options.collection='did_agent_authorizations'] - which collection to store agent authorizations
   */
  constructor(options?: _Lib.T100);
  read(authorizeId: any): Promise<any>;
  create(authorizeId: any, payloads: any): Promise<any>;
  update(authorizeId: any, updates: any): Promise<any>;
  delete(authorizeId: any): Promise<any>;
  clear(): Promise<any>;
  listByOwner(ownerDid: any): Promise<any>;
  listByApp(appDid: any): Promise<any>;
  listByAgent(agentDid: any): Promise<any>;
}
declare const _Lib: typeof DiskAgentStorage;
declare namespace _Lib {
  export interface T100 {
    url: string;
    collection?: string;
  }
}
export = _Lib;
