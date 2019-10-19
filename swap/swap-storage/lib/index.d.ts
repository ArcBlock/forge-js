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
declare const _Lib: typeof SwapStorage;
export = _Lib;
