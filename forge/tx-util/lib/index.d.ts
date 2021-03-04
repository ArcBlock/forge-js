// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

import * as events from 'events';
declare const _Lib: _Lib.T100;
declare namespace _Lib {
  export interface T100 {
    createVerifier: (params: any) => events;
    verifyTx: (params: any) => events;
    verifyTxAsync: (params: any) => Promise<any>;
    verifyAccount: (params: any) => events;
    verifyAccountAsync: (params: any) => Promise<any>;
    verifyAsset: (params: any) => events;
    verifyAssetAsync: (params: any) => Promise<any>;
  }
}
export = _Lib;
