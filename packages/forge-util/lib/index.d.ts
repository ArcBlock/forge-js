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
 * Convert input to Uint8Array on best effort
 *
 * @param {buffer|base58|hex|Uint8Array} v
 * @param {boolean} [autoHex=false]
 * @param {boolean} [enforceStrictHex=false]
 * @returns {Uint8Array}
 * @throws {Error}
 */
declare function toUint8Array(v: any, autoHex?: boolean, enforceStrictHex?: boolean): Uint8Array;
/**
 * Convert input to Buffer on best effort
 *
 * @param {buffer|base58|hex|Uint8Array} v
 * @param {boolean} [autoHex=false]
 * @param {boolean} [enforceStrictHex=false]
 * @returns {buffer}
 * @throws {Error}
 */
declare function toBuffer(v: any, autoHex?: boolean, enforceStrictHex?: boolean): any;
/**
 * Convert input to base58btc format on best effort
 *
 * @param {buffer|base58|hex|Uint8Array} v
 * @param {boolean} [autoHex=false]
 * @param {boolean} [enforceStrictHex=false]
 * @returns {string}
 * @throws {Error}
 */
declare function toBase58(v: any, autoHex?: boolean, enforceStrictHex?: boolean): string;
/**
 * Decode base58 string
 *
 * @param {string} v
 * @returns {buffer}
 */
declare function fromBase58(v: string): any;
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
/**
 * Convert address to did: prepend `did:abt:` prefix
 *
 * @public
 * @static
 * @param {string} did - address string
 * @returns {string}
 */
declare function toDid(address: any): string;
/**
 * Convert did to address: remove `did:abt:` prefix if exists
 *
 * @public
 * @static
 * @param {string} did - address string
 * @returns {string}
 */
declare function toAddress(did: string): string;
declare const _Lib: _Lib.T100;
declare namespace _Lib {
  export interface T100 {
    BN: any;
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
    toDid: typeof toDid;
    toAddress: typeof toAddress;
  }
}
export = _Lib;
