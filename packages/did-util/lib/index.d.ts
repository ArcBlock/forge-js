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
 * @param {string} type - itx type string
 * @param {enum} [role=types.RoleType.ROLE_TX] - role type
 * @returns {string} itx address without `did:abt:` prefix
 */
declare function toItxAddress(itx: any, type: string, role?: any): string;
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
 * Generate an delegate address, eg: the did of the delegation
 *
 * @public
 * @static
 * @param {string} addr1 - delegator address
 * @param {string} addr2 - delegatee address
 * @returns {string} delegation address that can be used to retrieve delegation state
 */
declare function toDelegateAddress(addr1: string, addr2: string): string;
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
/**
 * Generate a tether address from the deposit tether tx hash
 *
 * @public
 * @static
 * @param {string} hash - DepositTetherTx hash
 * @returns {string} stake address without `did:abt:` prefix
 */
declare function toTetherAddress(hash: string): string;
/**
 * Generate a swap address from the setup swap tx hash
 *
 * @public
 * @static
 * @param {string} hash - SetupSwapTx hash
 * @returns {string} swap address without `did:abt:` prefix
 */
declare function toSwapAddress(hash: string): string;
declare const _Lib: _Lib.T100;
declare namespace _Lib {
  export interface T100 {
    toAssetAddress: typeof toAssetAddress;
    toAssetDid: typeof toAssetDid;
    toItxAddress: typeof toItxAddress;
    toItxDid: typeof toItxDid;
    toStakeAddress: typeof toStakeAddress;
    toDelegateAddress: typeof toDelegateAddress;
    toStakeDid: typeof toStakeDid;
    toTetherAddress: typeof toTetherAddress;
    toSwapAddress: typeof toSwapAddress;
  }
}
export = _Lib;
