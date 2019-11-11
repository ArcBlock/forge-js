// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

import { EventEmitter } from 'events';
declare const _Lib: _Lib.T101;
declare namespace _Lib {
  export interface T100 {
    traceId: string;
    offerUserAddress: string;
    offerSwapAddress: string;
    demandUserAddress: string;
    demandSwapAddress: string;
    offerChainId: string;
    offerChainHost: string;
    demandChainId: string;
    demandChainHost: string;
    checkInterval: number;
    autoStart: boolean;
    maxRetry: number;
  }
  export interface T101 {
    createRetriever: (params: _Lib.T100) => EventEmitter;
    verifyUserSwap: (swapState: any, swapStore: any) => boolean;
  }
}
export = _Lib;
