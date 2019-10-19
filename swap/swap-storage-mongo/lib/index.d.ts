// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

import { EventEmitter } from 'events';
declare class SwapStorage extends EventEmitter {
  payloadFields: string[];
  constructor(options: any);
  create(params: any): void;
  read(traceId: any): void;
  update(traceId: any, updates: any): void;
  finalize(traceId: any, payload: any): void;
  listByStatus(status: any): void;
  listByOfferAddress(address: any, status: any): void;
  listByDemandAddress(address: any, status: any): void;
  delete(traceId: any): void;
  exist(traceId: any): void;
}
declare class MongoStorage extends SwapStorage {
  collectionName: string;
  options: _Lib.T100;
  /**
   * Creates an instance of MongoStorage.
   *
   * @param {Object} options { collection, url }
   * @param {string} options.collection - which collection to store the swap records
   * @param {string} options.url - mongodb connection string
   */
  constructor(options: _Lib.T100);
  connectionFailed(err: any): void;
  handleNewConnectionAsync(client: any): void;
  changeState(newState: any): void;
  setCollection(collection: any): this;
  collectionReady(): any;
  read(traceId: any): any;
  create(traceId: any, attributes: any): any;
  finalize(traceId: any, payload: any): any;
  update(traceId: any, updates: any): any;
  delete(traceId: any): any;
  exist(traceId: any, did: any): any;
  listByStatus(status: any): any;
  listByOfferAddress(address: any, status?: string): any;
  listByDemandAddress(address: any, status?: string): any;
  close(): void;
}
declare const _Lib: typeof MongoStorage;
declare namespace _Lib {
  export interface T100 {
    collection: string;
    url: string;
  }
}
export = _Lib;
