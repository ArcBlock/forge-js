// Auto generated code (2019-05-05T01:32:09.092Z), DO NOT EDIT
const typePb = require('./lib/type_pb.js');
const enumPb = require('./lib/enum_pb.js');
const declareTxPb = require('./lib/declare_tx_pb.js');
const accountMigrateTxPb = require('./lib/account_migrate_tx_pb.js');
const declareFileTxPb = require('./lib/declare_file_tx_pb.js');
const exchangeTetherTxPb = require('./lib/exchange_tether_tx_pb.js');
const transferTxPb = require('./lib/transfer_tx_pb.js');
const pokeTxPb = require('./lib/poke_tx_pb.js');
const depositTetherTxPb = require('./lib/deposit_tether_tx_pb.js');
const upgradeNodeTxPb = require('./lib/upgrade_node_tx_pb.js');
const updateAssetTxPb = require('./lib/update_asset_tx_pb.js');
const consumeAssetTxPb = require('./lib/consume_asset_tx_pb.js');
const createAssetTxPb = require('./lib/create_asset_tx_pb.js');
const deployProtocolTxPb = require('./lib/deploy_protocol_tx_pb.js');
const acquireAssetTxPb = require('./lib/acquire_asset_tx_pb.js');
const exchangeTxPb = require('./lib/exchange_tx_pb.js');
const stakeTxPb = require('./lib/stake_tx_pb.js');

const vendorPb = require('./lib/vendor_pb.js');

const forgeTypes = Object.assign(
  {},
  typePb,
  enumPb,
  declareTxPb,
  accountMigrateTxPb,
  declareFileTxPb,
  exchangeTetherTxPb,
  transferTxPb,
  pokeTxPb,
  depositTetherTxPb,
  upgradeNodeTxPb,
  updateAssetTxPb,
  consumeAssetTxPb,
  createAssetTxPb,
  deployProtocolTxPb,
  acquireAssetTxPb,
  exchangeTxPb,
  stakeTxPb
);
const forgeServices = {};
const vendorTypes = Object.assign({}, vendorPb);
const vendorServices = {};

module.exports = {
  types: forgeTypes,
  services: forgeServices,
  vendorTypes: vendorTypes,
  vendorServices: vendorServices,
};
