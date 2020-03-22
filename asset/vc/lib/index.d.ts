// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

/**
 * Create a valid verifiable credential
 *
 * @param {object} params
 * @param {string} params.type - The type of credential
 * @param {object} params.subject - The content of credential
 * @param {object} params.issuer - The issuer name and wallet
 * @param {Date} params.issuanceDate
 * @param {Date} params.expirationDate
 * @returns {object}
 */
declare function create(T100: _Lib.T101): any;
/**
 * Verify that the verifiable credential is valid
 *  - It is signed by a whitelist of issuers
 *  - It is owned by the vc.subject.id
 *  - It has valid signature by the issuer
 *  - It is not expired
 *
 * @param {object} vc - the verifiable credential object
 * @param {string} ownerDid - vc holder/owner did
 * @param {Array} trustedIssuers - list of issuer did
 * @throws {Error}
 * @returns {boolean}
 */
declare function verify(T102: any): boolean;
declare const _Lib: _Lib.T103;
declare namespace _Lib {
  export interface T101 {
    type: string;
    subject: any;
    issuer: any;
    issuanceDate: Date;
    expirationDate: Date;
  }
  export interface T103 {
    create: typeof create;
    verify: typeof verify;
  }
}
export = _Lib;
