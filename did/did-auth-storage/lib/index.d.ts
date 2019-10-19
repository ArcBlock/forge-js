// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

import { EventEmitter } from 'events';
declare class AuthStorage extends EventEmitter {
  create(token: any, status?: string): void;
  read(token: any): void;
  update(token: any, updates: any): void;
  delete(token: any): void;
  exist(token: any, did: any): void;
}
declare const _Lib: typeof AuthStorage;
export = _Lib;
