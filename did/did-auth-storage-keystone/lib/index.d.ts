// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

declare class KeystoneStorage {
  /**
   * Creates an instance of AuthStorage.
   *
   * @class
   * @param {object} options
   */
  static init(): void;
  model: any;
  constructor();
  create(token: any, status?: string): any;
  read(token: any): any;
  update(token: any, updates: any): any;
  delete(token: any): any;
  exist(token: any, did: any): any;
}
declare const _Lib: typeof KeystoneStorage;
export = _Lib;
