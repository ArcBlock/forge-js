// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

import { EventEmitter } from 'events';
declare const _Lib: _Lib.T100;
declare namespace _Lib {
  export interface T100 {
    createVerifier: (params: any) => EventEmitter;
    verifyTx: (params: any) => EventEmitter;
    verifyTxAsync: (params: any) => Promise<any>;
    verifyAccount: (params: any) => EventEmitter;
    verifyAccountAsync: (params: any) => Promise<any>;
    verifyAsset: (params: any) => EventEmitter;
    verifyAssetAsync: (params: any) => Promise<any>;
  }
}
export = _Lib;
