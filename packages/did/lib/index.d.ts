// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

/**
 * Convert did to address: remove `did:abt:` prefix if exists
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
declare const _Lib: _Lib.T100;
declare namespace _Lib {
  export interface T100 {
    types: T107;
    toStrictHex: (hex: string, length: number) => string;
    fromSecretKey: (sk: string, type: any) => string;
    fromPublicKey: (pk: string, type: any) => string;
    fromPublicKeyHash: (buffer: any, type: any) => any;
    fromHash: (hash: string, role: any) => string;
    toTypeInfo: (did: string, returnString?: boolean) => any;
    toAddress: typeof toAddress;
    toDid: typeof toDid;
    fromTypeInfo: (type: any) => string;
    isFromPublicKey: (did: string, pk: string) => boolean;
    isValid: (did: string) => boolean;
    jwtSign: (did: string, sk: string, payload?: any) => string;
    jwtVerify: (
      token: string,
      pk: string,
      tolerance?: number,
      verifyTimestamp?: boolean
    ) => boolean;
    jwtDecode: (token: string, payloadOnly?: boolean) => any;
  }
}
export = _Lib;
