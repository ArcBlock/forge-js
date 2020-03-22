const { create, createAsync } = require('./verifier');

/**
 * Generate a transaction verifier by tx hash
 * Emit events on transaction included in a block
 *
 *  - `error`: when there is something wrong when verify the transaction
 *  - `done`: when the transaction is successfully verified
 *
 * @param {object} params
 * @param {string} params.hash - tx hash to check
 * @param {string} params.chainHost - on which chain to check the tx
 * @param {string} params.chainId - on which chain to check the tx
 * @param {number} params.checkInterval - tx query interval to see the tx
 * @param {boolean} params.autoStart - should the verifier start on create
 * @param {number} params.maxRetry - max number of checks before mark the tx as expired
 * @returns {EventEmitter} verifier object
 */
const txVerifierParams = {
  key: 'hash',
  label: 'tx',
  fn: 'getTx',
  validate: res => {
    if (res.info) {
      if (res.info.code === 'OK') {
        return true;
      }

      // If the tx failed, we throw an error
      throw new Error(res.info.code);
    }

    return false;
  },
};
const verifyTx = create(txVerifierParams);
const verifyTxAsync = createAsync(txVerifierParams);

/**
 * Generate a account verifier by address
 * Emit events on account declared in a block
 *
 *  - `error`: when there is something wrong when verify the transaction
 *  - `done`: when the transaction is successfully verified
 *
 * @param {object} params
 * @param {string} params.address - account address to check
 * @param {string} params.chainHost - on which chain to check the account
 * @param {string} params.chainId - on which chain to check the account
 * @param {number} params.checkInterval - query interval to see the account
 * @param {boolean} params.autoStart - should the verifier start on create
 * @param {number} params.maxRetry - max number of checks before mark the check as expired
 * @returns {EventEmitter} verifier object
 */
const accountVerifierParams = {
  key: 'address',
  label: 'account',
  fn: 'getAccountState',
  validate: res => res.state,
};
const verifyAccount = create(accountVerifierParams);
const verifyAccountAsync = createAsync(accountVerifierParams);

/**
 * Generate a asset verifier by address
 * Emit events on asset can be found on chain
 *
 *  - `error`: when there is something wrong when verify the asset
 *  - `done`: when the asset is found
 *
 * @param {object} params
 * @param {string} params.address - asset address to check
 * @param {string} params.chainHost - on which chain to check the asset
 * @param {string} params.chainId - on which chain to check the asset
 * @param {number} params.checkInterval - query interval to see the asset
 * @param {boolean} params.autoStart - should the verifier start on create
 * @param {number} params.maxRetry - max number of checks before mark the check as expired
 * @returns {EventEmitter} verifier object
 */
const assetVerifierParams = {
  key: 'address',
  label: 'asset',
  fn: 'getAssetState',
  validate: res => res.state,
};
const verifyAsset = create(assetVerifierParams);
const verifyAssetAsync = createAsync(assetVerifierParams);

module.exports = {
  createVerifier: verifyTx,
  verifyTx,
  verifyTxAsync,
  verifyAccount,
  verifyAccountAsync,
  verifyAsset,
  verifyAssetAsync,
};
