// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

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
declare function DidType(type?: string | any): any;
/**
 * Generate a wallet from secretKey
 *
 * @public
 * @static
 * @param {string} sk - the secret key, `hex encoded string`
 * @param {DidType} [type='default'] - wallet type
 * @returns {WalletObject} wallet object that can be used to sign/verify/getAddress
 * @example
 * const assert = require('assert');
 * const { fromSecretKey } = require('@arcblock/forge-wallet');
 *
 * const sk =
 *   '0xD67C071B6F51D2B61180B9B1AA9BE0DD0704619F0E30453AB4A592B036EDE644E4852B7091317E3622068E62A5127D1FB0D4AE2FC50213295E10652D2F0ABFC7';
 * const sig =
 *   '0x08a102851c38c072e42756c1cc70938b5499c8e9358dfe5f383823f56cdb282ffda60fcd581a02c6c673069e5afc0bf09abbe3639b61b84d64fd58ef9f083003';
 *
 * const wallet = fromSecretKey(sk, type);
 * const message = 'data to sign';
 * const signature = wallet.sign(message);
 * assert.equal(signature, sig, "signature should match");
 * assert.ok(wallet.verify(message, signature), "signature should be verified");
 */
declare function fromSecretKey(sk: string, _type?: string): WalletObject;
/**
 * Generate a wallet from publicKey
 *
 * @public
 * @static
 * @param {string} pk - the public key, `hex encoded string`
 * @param {DidType} [type='default'] - wallet type
 * @returns {WalletObject} wallet object that can be used to sign/verify/getAddress
 */
declare function fromPublicKey(pk: string, _type?: string): WalletObject;
/**
 * Generate a wallet by generating a random secretKey
 *
 * @public
 * @static
 * @param {DidType} [type='default'] - wallet type
 * @returns {WalletObject} wallet object that can be used to sign/verify/getAddress
 * @example
 * const { fromRandom } = require('@arcblock/forge-wallet');
 * const wallet = fromRandom();
 * // Do something with wallet
 */
declare function fromRandom(_type?: string): WalletObject;
/**
 * Generate a wallet from address (did)
 *
 * Since we do not know the publicKey and secretKey, this kind of wallet cannot be used for signing and verifying
 *
 * @public
 * @static
 * @param {string} address - the wallet address
 * @returns {WalletObject} wallet object that can be used to sign/verify/getAddress
 * @example
 * const assert = require('assert');
 * const { fromAddress } = require('@arcblock/forge-wallet');
 *
 * const address = 'zNKtCNqYWLYWYW3gWRA1vnRykfCBZYHZvzKr';
 * const wallet = fromAddress(address);
 * console.log(wallet.toJSON());
 */
declare function fromAddress(address: string): WalletObject;
/**
 * Generating a wallet from a serialized json presentation of another wallet
 *
 * @public
 * @static
 * @param {object} json - json presentation of a wallet
 * @returns {WalletObject} wallet object that can be used to sign/verify/getAddress
 * @example
 * const { fromJSON, fromRandom } = require('@arcblock/forge-wallet');
 * const wallet = fromRandom();
 * const wallet2 = fromJSON(wallet.toJSON());
 * // wallet2 is identical to wallet
 */
declare function fromJSON(json: any): WalletObject;
/**
 * Check if an object is valid wallet object
 *
 * @public
 * @static
 * @param {object} wallet
 * @param {boolean} canSign - should the wallet support sign
 */
declare function isValid(wallet: any, canSign?: boolean): boolean;
/**
 * @public
 * @static
 * @global
 * @name WalletObject
 * @typedef WalletObject
 * @prop {DidType} type - Indicates the wallet type
 * @prop {secretKey} secretKey - Wallet secretKey
 * @prop {publicKey} publicKey - Wallet publicKey
 * @prop {function} sign - Sign `data`, data is hashed using the `HashType` defined in type before signing
 * @prop {function} verify - Verify `signature`, data is hashed using the `HashType` defined in type before verifying
 * @prop {function} toAddress - Get wallet address without `did:abt:` prefix
 * @prop {function} toJSON - Serialize wallet to json object, checkout {@link fromJSON} for deserialisation
 */

/**
 * Generate an wallet instance that can be used to sign a message or verify a signature
 *
 * @public
 * @static
 * @param {object} keyPair - the key pair
 * @param {string} keyPair.sk - the secretKey
 * @param {string} keyPair.pk - the wallet publicKey
 * @param {DidType} [type='default'] - wallet type
 * @returns {WalletObject} wallet object that can be used to sign/verify/getAddress
 */
declare function Wallet(keyPair: _Lib.T100, type?: typeof DidType): WalletObject;
declare const _Lib: _Lib.T101;
declare namespace _Lib {
  export interface WalletObject {
    type: typeof DidType;
    secretKey: any;
    publicKey: any;
    sign: (...args: any[]) => any;
    verify: (...args: any[]) => any;
    toAddress: (...args: any[]) => any;
    toJSON: (...args: any[]) => any;
  }
  export interface T100 {
    sk: string;
    pk: string;
  }
  export interface T101 {
    fromSecretKey: typeof fromSecretKey;
    fromPublicKey: typeof fromPublicKey;
    fromRandom: typeof fromRandom;
    fromAddress: typeof fromAddress;
    fromDID: typeof fromAddress;
    fromJSON: typeof fromJSON;
    isValid: typeof isValid;
    Wallet: typeof Wallet;
    WalletType: typeof DidType;
    DidType: typeof DidType;
  }
}
export = _Lib;
