// Generate by [js2dts@0.3.2](https://github.com/whxaxes/js2dts#readme)

/**
 * Create an asset address, eg: the did of an asset
 *
 * @public
 * @static
 * @param {object} itx - an object of `CreateAssetTx`
 * @param {string} sender - creator address, also the initial owner of the asset
 * @returns {string} asset address without `did:abt:` prefix
 */
declare function toAssetAddress(itx: any, sender: string): string;
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
declare const _Lib: _Lib.T100;
declare namespace _Lib {
  export interface T100 {
    toAssetAddress: typeof toAssetAddress;
    toStakeAddress: typeof toStakeAddress;
  }
}
export = _Lib;
