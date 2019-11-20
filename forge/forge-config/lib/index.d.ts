// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

/**
 * Parse config from a standard forge release configuration file
 *
 * @public
 * @static
 * @param {string} configPath
 * @returns {object}
 * @throws Error when file not found
 * @example
 const { parse } = require('@arcblock/forge-config');
 const config = parse('./forge.toml');
 */
declare function parse(configPath: string): any;
declare const _Lib: _Lib.T100;
declare namespace _Lib {
  export interface T100 {
    parse: typeof parse;
  }
}
export = _Lib;
