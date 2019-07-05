// Auto generated code (2019-07-05T07:53:01.727Z), DO NOT EDIT
const enumPb = require('./lib/enum_pb.js');
const typePb = require('./lib/type_pb.js');
const accountMigrateTxPb = require('./lib/account_migrate_tx_pb.js');
const acquireAssetTxPb = require('./lib/acquire_asset_tx_pb.js');
const approveTetherTxPb = require('./lib/approve_tether_tx_pb.js');
const consumeAssetTxPb = require('./lib/consume_asset_tx_pb.js');
const createAssetTxPb = require('./lib/create_asset_tx_pb.js');
const declareTxPb = require('./lib/declare_tx_pb.js');
const deployProtocolTxPb = require('./lib/deploy_protocol_tx_pb.js');
const depositTetherTxPb = require('./lib/deposit_tether_tx_pb.js');
const exchangeTetherTxPb = require('./lib/exchange_tether_tx_pb.js');
const exchangeTxPb = require('./lib/exchange_tx_pb.js');
const pokeTxPb = require('./lib/poke_tx_pb.js');
const retrieveSwapTxPb = require('./lib/retrieve_swap_tx_pb.js');
const revokeSwapTxPb = require('./lib/revoke_swap_tx_pb.js');
const revokeTetherTxPb = require('./lib/revoke_tether_tx_pb.js');
const setupSwapTxPb = require('./lib/setup_swap_tx_pb.js');
const stakeTxPb = require('./lib/stake_tx_pb.js');
const transferTxPb = require('./lib/transfer_tx_pb.js');
const updateAssetTxPb = require('./lib/update_asset_tx_pb.js');
const upgradeNodeTxPb = require('./lib/upgrade_node_tx_pb.js');
const withdrawTetherTxPb = require('./lib/withdraw_tether_tx_pb.js');

const vendorPb = require('./lib/vendor_pb.js');

const forgeTypes = Object.assign(
  {},
  enumPb,
  typePb,
  accountMigrateTxPb,
  acquireAssetTxPb,
  approveTetherTxPb,
  consumeAssetTxPb,
  createAssetTxPb,
  declareTxPb,
  deployProtocolTxPb,
  depositTetherTxPb,
  exchangeTetherTxPb,
  exchangeTxPb,
  pokeTxPb,
  retrieveSwapTxPb,
  revokeSwapTxPb,
  revokeTetherTxPb,
  setupSwapTxPb,
  stakeTxPb,
  transferTxPb,
  updateAssetTxPb,
  upgradeNodeTxPb,
  withdrawTetherTxPb
);
const forgeServices = {};
const vendorTypes = Object.assign({}, vendorPb);
const vendorServices = {};

module.exports = {
  types: forgeTypes,
  services: forgeServices,
  vendorTypes,
  vendorServices,
};
