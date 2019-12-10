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
declare const _Lib: typeof DidAgentStorage;
export = _Lib;
