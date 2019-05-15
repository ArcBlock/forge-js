// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

/**
 * Create an asset address
 *
 * @public
 * @static
 * @param {object} itx - an object of `CreateAssetTx`
 * @returns {string} asset address without `did:abt:` prefix
 */
declare function toAssetAddress(itx: any): string;
/**
 * Create an asset did
 *
 * @public
 * @static
 * @param {object} itx - an object of `CreateAssetTx`
 * @returns {string} asset address without `did:abt:` prefix
 */
declare function toAssetDid(itx: any): string;
/**
 * Create an itx address
 *
 * @public
 * @static
 * @param {object} itx - an object of forge supported itx
 * @returns {string} itx address without `did:abt:` prefix
 */
declare function toItxAddress(itx: any, type: any): string;
/**
 * Create an itx did
 *
 * @public
 * @static
 * @param {object} itx - an object of forge supported itx
 * @returns {string} itx address without `did:abt:` prefix
 */
declare function toItxDid(itx: any, type: any): string;
/**
 * Generate an stake address, eg: the did of the stake
 *
 * @public
 * @static
 * @param {string} sender - sender address
 * @param {string} receiver - receiver address
 * @returns {string} stake address without `did:abt:` prefix
 */
declare function toStakeAddress(sender: string, receiver: string): string;
/**
 * Generate an stake address, eg: the did of the stake
 *
 * @public
 * @static
 * @param {string} sender - sender address
 * @param {string} receiver - receiver address
 * @returns {string} stake address without `did:abt:` prefix
 */
declare function toStakeDid(sender: string, receiver: string): string;
declare const _Lib: _Lib.T100;
declare namespace _Lib {
  export interface T100 {
    toAssetAddress: typeof toAssetAddress;
    toAssetDid: typeof toAssetDid;
    toItxAddress: typeof toItxAddress;
    toItxDid: typeof toItxDid;
    toStakeAddress: typeof toStakeAddress;
    toStakeDid: typeof toStakeDid;
  }
}
export = _Lib;
