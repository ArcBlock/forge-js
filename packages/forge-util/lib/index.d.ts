// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

import { Buffer } from 'node/globals';
/**
 * Validates if a value is an Uint8Array.
 *
 * @public
 * @static
 * @param {*} value - value to validate
 * @returns {Boolean} boolean indicating if a value is an Uint8Array
 */
declare function isUint8Array(value: any): boolean;
declare function toUint8Array(v: any, autoHex?: boolean): Uint8Array;
declare function toBuffer(v: any, autoHex?: boolean): Buffer;
declare function toBase58(v: any, autoHex?: boolean): any;
declare function fromBase58(v: any): any;
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
    toUint8Array: typeof toUint8Array;
    toBuffer: typeof toBuffer;
    toBase58: typeof toBase58;
    fromBase58: typeof fromBase58;
    UUID: typeof UUID;
    isUUID: typeof isUUID;
  }
}
export = _Lib;
