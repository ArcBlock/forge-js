// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

import { EventEmitter } from 'events';
declare const _Lib: _Lib.T101;
declare namespace _Lib {
  export interface T100 {
    hash: string;
    chainHost: string;
    chainId: string;
    checkInterval: number;
    autoStart: boolean;
    maxRetry: number;
  }
  export interface T101 {
    createVerifier: (params: _Lib.T100) => EventEmitter;
  }
}
export = _Lib;
