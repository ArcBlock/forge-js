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
 * Convert input to Uint8Array on best effort, base64 node supported
 *
 * @public
 * @static
 * @param {buffer|base58|hex|Uint8Array|string} v
 * @returns {Uint8Array}
 * @throws {Error}
 */
declare function toUint8Array(v: any): Uint8Array;
/**
 * Convert input to Buffer on best effort, base64 not supported
 *
 * @public
 * @static
 * @param {buffer|base58|hex|Uint8Array} v
 * @returns {buffer}
 * @throws {Error}
 */
declare function toBuffer(v: any): any;
/**
 * Convert input to base58btc format on best effort
 *
 * @public
 * @static
 * @param {buffer|base58|hex|Uint8Array} v
 * @returns {string}
 * @throws {Error}
 */
declare function toBase58(v: any): string;
/**
 * Decode base58 string
 *
 * @public
 * @static
 * @param {string} v
 * @returns {buffer}
 */
declare function fromBase58(v: string): any;
/**
 * Convert input to base64 format
 *
 * @public
 * @static
 * @param {buffer|base58|hex|Uint8Array} v
 * @param {escape} [escape=true]
 * @returns {string}
 * @throws {Error}
 */
declare function toBase64(v: any, escape?: typeof escape): string;
/**
 * Decode base64(base64_url) string to buffer
 *
 * @public
 * @static
 * @param {string} v
 * @returns {buffer}
 */
declare function fromBase64(v: string): any;
/**
 * Generate a random UUID
 *
 * @public
 * @static
 * @returns {string} Generated uuid
 */
declare function UUID(): string;
/**
 * Check if a string is valid UUID
 *
 * @public
 * @static
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
 * Convert did to address: remove `did:abt:` prefix
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
    isHex: (hex: string) => boolean;
    isHexStrict: (hex: string) => boolean;
    isUint8Array: typeof isUint8Array;
    hexToBytes: (hex: string) => any[];
    bytesToHex: (bytes: any[]) => string;
    toHex: (value: any, returnType: boolean) => string;
    numberToString: (arg: any) => any;
    fromUnitToToken: (input: string | number, decimal?: number, optionsInput?: any) => string;
    fromTokenToUnit: (input: string, decimal?: number) => any;
    toBN: (number: any) => any;
    toUint8Array: typeof toUint8Array;
    toBuffer: typeof toBuffer;
    toBase58: typeof toBase58;
    fromBase58: typeof fromBase58;
    toBase64: typeof toBase64;
    fromBase64: typeof fromBase64;
    UUID: typeof UUID;
    isUUID: typeof isUUID;
    toDid: typeof toDid;
    toAddress: typeof toAddress;
  }
}
export = _Lib;
