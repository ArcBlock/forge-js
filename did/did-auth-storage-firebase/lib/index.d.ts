// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

declare class FirebaseStorage {
  database: any;
  tokens: string;
  constructor(config: any);
  /**
   * Replace disallowed characters in a Firebase reference key.
   *
   * @param  {String} str A child reference key
   * @return {String}     A valid child reference key
   */
  cleanRef(str: string): string;
  create(token: any, status?: string): Promise<any>;
  read(token: any): Promise<any>;
  update(token: any, updates: any): Promise<any>;
  delete(token: any): Promise<any>;
  exist(token: any, did: any): Promise<any>;
}
declare const _Lib: typeof FirebaseStorage;
export = _Lib;
