// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

/**
 * Convert did to address: remove `did:abt:` prefix
 *
 * @public
 * @static
 * @param {string} did - address string
 * @returns {string}
 */
declare function toAddress(did: string): string;
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
 * The structure of a forge wallet type
 *
 * @public
 * @static
 * @global
 * @typedef {Object} DidType
 * @prop {number} role - Enum field to identify wallet role type
 * @prop {number} pk - Crypto algorithm to derive publicKey from the secretKey
 * @prop {number} hash - Hash algorithm used to hash data before sign them
 */

/**
 * Create an wallet type object that be used as param to create a new wallet
 *
 * @public
 * @static
 * @param {DidType|string} [type='default']
 * @returns {object}
 * @example
 * const assert = require('assert');
 * const { DidType } = require('@arcblock/did');
 * const { types } = require('@arcblock/mcrypto');
 *
 * const type = DidType({
 *   role: types.RoleType.ROLE_APPLICATION,
 *   pk: types.KeyType.ED25519,
 *   hash: types.HashType.SHA3,
 * });
 */
declare function DidType(type?: string | DidType_1): any;
declare const _Lib: _Lib.T102;
declare namespace _Lib {
  export interface T100 {
    [key: string]: any;
  }
  export interface T101 {
    role: any;
    pk: any;
    hash: any;
    address: any;
  }
  export interface T102 {
    types: any;
    toStrictHex: (hex: string, length: number) => string;
    fromSecretKey: (sk: string, type: any) => string;
    fromPublicKey: (pk: string, type: any) => string;
    fromPublicKeyHash: (buffer: any, type: any) => string;
    fromHash: (hash: string, role?: any) => string;
    toTypeInfo: (did: string, returnString?: boolean) => any;
    toAddress: typeof toAddress;
    toDid: typeof toDid;
    fromTypeInfo: (type: any) => string;
    isFromPublicKey: (did: string, pk: string) => boolean;
    isValid: (did: string) => boolean;
    DidType: typeof DidType;
    DID_TYPE_FORGE: _Lib.T101;
    DID_TYPE_ETHEREUM: _Lib.T101;
  }
}
export = _Lib;
