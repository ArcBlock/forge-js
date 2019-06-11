// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

/**
 * Validates if a value is an Uint8Array.
 *
 * @public
 * @static
 * @param {*} value - value to validate
 * @returns {Boolean} boolean indicating if a value is an Uint8Array
 */
declare function isUint8Array(value: any): boolean;
/**
 * Generate a random UUID
 *
 * @returns {string} generated uuid
 */
declare function UUID(): string;
/**
 * Check if a string is valid UUID
 *
 * @param {string} str
 * @returns {boolean}
 */
declare function isUUID(str: string): boolean;
declare const _Lib: _Lib.T100;
declare namespace _Lib {
  export interface T100 {
    isBN: (object: any) => boolean;
    isBigNumber: (object: any) => boolean;
    isHexPrefixed: (str: string) => boolean;
    stripHexPrefix: (str: string) => any;
    utf8ToHex: (str: string) => string;
    hexToUtf8: (hex: string) => string;
    numberToHex: (value: any) => string;
    hexToNumber: (value: any) => number;
    hexToNumberString: (value: any) => string;
    numberToBN: any;
    isHex: (hex: string) => boolean;
    isHexStrict: (hex: string) => boolean;
    isUint8Array: typeof isUint8Array;
    hexToBytes: (hex: string) => any[];
    bytesToHex: (bytes: any[]) => string;
    toHex: (value: any, returnType: boolean) => string;
    numberToString: (arg: any) => any;
    fromUnitToToken: (input: string | number, decimal?: number, optionsInput: any) => string;
    fromTokenToUnit: (input: string, decimal?: number) => any;
    toBN: (number: any) => any;
    UUID: typeof UUID;
    isUUID: typeof isUUID;
  }
}
export = _Lib;
