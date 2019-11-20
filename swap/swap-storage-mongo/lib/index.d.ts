// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

import { EventEmitter } from 'events';
/**
 * Defines the interface of atomic-swap storage
 * Which should be implemented to use in dApps that uses atomic-swap capability
 *
 * @class SwapStorage
 * @see @arcblock/swap-storage-memory
 * @see @arcblock/swap-storage-mongo
 * @extends {EventEmitter}
 */
declare class SwapStorage extends EventEmitter {
  payloadFields: string[];
  /**
   * Creates an instance of SwapStorage.
   *
   * @class
   * @param {object} options
   */
  constructor(options: any);
  /**
   * Create new atomic-swap order, traceId should be generated by user
   *
   * @method
   * @param {string} traceId
   * @param {object} initialAttributes
   * @returns {Promise<object>}
   */
  create(traceId: string, initialAttributes?: any): Promise<any>;
  /**
   * Get an atomic-swap order by traceId
   *
   * @method
   * @param {string} traceId - the uuid of the swap order
   * @returns {Promise<object>} the atomic-swap-order
   */
  read(traceId: string): Promise<any>;
  /**
   * Update the status of an atomic-swap order, will not allow payload fields to be updated
   *
   * @method
   * @param {string} traceId
   * @param {object} updates
   * @returns {Promise<object>}
   */
  update(traceId: string, updates: any): Promise<any>;
  /**
   * Finalize the payload of atomic-swap
   *
   * @method
   * @param {string} traceId
   * @param {object} payload
   * @returns {Promise<object>}
   */
  finalize(traceId: string, payload: any): Promise<any>;
  /**
   * Find atomic swap records by status
   *
   * @method
   * @param {string} status - check out list of supported status here
   * @returns {Promise<Array>}
   * TODO: add pagination for this
   */
  listByStatus(status: string): Promise<any[]>;
  /**
   * Find atomic swap records by offer address and status
   *
   * @method
   * @param {string} address
   * @param {string} [status='']
   * @returns {Promise<Array>}
   * TODO: add pagination for this
   */
  listByOfferAddress(address: string, status: string): Promise<any[]>;
  /**
   * Find atomic swap records by demand address and status
   *
   * @method
   * @param {string} address
   * @param {string} [status='']
   * @returns {Promise<Array>}
   * TODO: add pagination for this
   */
  listByDemandAddress(address: string, status: string): Promise<any[]>;
  /**
   * Delete atomic swap order by traceId
   *
   * @method
   * @param {string} traceId
   * @returns void
   */
  delete(traceId: string): void;
}
declare class MongoSwapStorage extends SwapStorage {
  collectionName: string;
  options: _Lib.T100;
  /**
   * Creates an instance of MongoSwapStorage.
   *
   * @class
   * @param {Object} options { collection, url }
   * @param {string} options.url - mongodb connection string
   * @param {string} [options.collection='abt_forge_swaps'] - which collection to store the swap records
   */
  constructor(options: _Lib.T100);
  connectionFailed(err: any): void;
  handleNewConnectionAsync(client: any): void;
  changeState(newState: any): void;
  setCollection(collection: any): this;
  collectionReady(): any;
  /**
   * Create new atomic-swap order, traceId should be generated by user
   *
   * @method
   * @param {string} traceId
   * @param {object} initialAttributes
   * @returns {Promise<object>}
   */
  create(traceId: string, initialAttributes?: any): Promise<any>;
  /**
   * Get an atomic-swap order by traceId
   *
   * @method
   * @param {string} traceId - the uuid of the swap order
   * @returns {Promise<object>} the atomic-swap-order
   */
  read(traceId: string): Promise<any>;
  /**
   * Finalize the payload of atomic-swap
   *
   * @method
   * @param {string} traceId
   * @param {object} payload
   * @returns {Promise<object>}
   */
  finalize(traceId: string, payload: any): Promise<any>;
  /**
   * Update the status of an atomic-swap order, will not allow payload fields to be updated
   *
   * @method
   * @param {string} traceId
   * @param {object} updates
   * @returns {Promise<object>}
   */
  update(traceId: string, updates: any): Promise<any>;
  /**
   * Delete atomic swap order by traceId
   *
   * @method
   * @param {string} traceId
   * @returns void
   */
  delete(traceId: string): any;
  /**
   * Find atomic swap records by status
   *
   * @method
   * @param {string} status - check out list of supported status here
   * @returns {Promise<Array>}
   * TODO: add pagination for this
   */
  listByStatus(status: string): Promise<any[]>;
  /**
   * Find atomic swap records by offer address and status
   *
   * @method
   * @param {string} address
   * @param {string} [status='']
   * @returns {Promise<Array>}
   * TODO: add pagination for this
   */
  listByOfferAddress(address: string, status?: string): Promise<any[]>;
  /**
   * Find atomic swap records by demand address and status
   *
   * @method
   * @param {string} address
   * @param {string} [status='']
   * @returns {Promise<Array>}
   * TODO: add pagination for this
   */
  listByDemandAddress(address: string, status?: string): Promise<any[]>;
  close(): void;
}
declare const _Lib: typeof MongoSwapStorage;
declare namespace _Lib {
  export interface T100 {
    url: string;
    collection?: string;
  }
}
export = _Lib;
