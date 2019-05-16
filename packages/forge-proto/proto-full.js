// Auto generated code (2019-05-15T09:29:55.568Z), DO NOT EDIT
const typePb = require('./lib/type_pb.js');
const txPb = require('./lib/tx_pb.js');
const traceTypePb = require('./lib/trace_type_pb.js');
const enumPb = require('./lib/enum_pb.js');
const statePb = require('./lib/state_pb.js');
const servicePb = require('./lib/service_pb.js');
const rpcPb = require('./lib/rpc_pb.js');
const withdrawTetherTxPb = require('./lib/withdraw_tether_tx_pb.js');
const deployProtocolTxPb = require('./lib/deploy_protocol_tx_pb.js');
const accountMigrateTxPb = require('./lib/account_migrate_tx_pb.js');
const declareTxPb = require('./lib/declare_tx_pb.js');
const acquireAssetTxPb = require('./lib/acquire_asset_tx_pb.js');
const declareFileTxPb = require('./lib/declare_file_tx_pb.js');
const stakeTxPb = require('./lib/stake_tx_pb.js');
const createAssetTxPb = require('./lib/create_asset_tx_pb.js');
const exchangeTxPb = require('./lib/exchange_tx_pb.js');
const depositTetherTxPb = require('./lib/deposit_tether_tx_pb.js');
const approveTetherTxPb = require('./lib/approve_tether_tx_pb.js');
const consumeAssetTxPb = require('./lib/consume_asset_tx_pb.js');
const upgradeNodeTxPb = require('./lib/upgrade_node_tx_pb.js');
const updateAssetTxPb = require('./lib/update_asset_tx_pb.js');
const transferTxPb = require('./lib/transfer_tx_pb.js');
const exchangeTetherTxPb = require('./lib/exchange_tether_tx_pb.js');
const pokeTxPb = require('./lib/poke_tx_pb.js');
const revokeTetherTxPb = require('./lib/revoke_tether_tx_pb.js');
const serviceGrpcPb = require('./lib/service_grpc_pb.js');
const vendorPb = require('./lib/vendor_pb.js');

const forgeTypes = Object.assign(
  {},
  typePb,
  txPb,
  traceTypePb,
  enumPb,
  statePb,
  servicePb,
  rpcPb,
  withdrawTetherTxPb,
  deployProtocolTxPb,
  accountMigrateTxPb,
  declareTxPb,
  acquireAssetTxPb,
  declareFileTxPb,
  stakeTxPb,
  createAssetTxPb,
  exchangeTxPb,
  depositTetherTxPb,
  approveTetherTxPb,
  consumeAssetTxPb,
  upgradeNodeTxPb,
  updateAssetTxPb,
  transferTxPb,
  exchangeTetherTxPb,
  pokeTxPb,
  revokeTetherTxPb
);
const forgeServices = Object.assign({}, serviceGrpcPb);
const vendorTypes = Object.assign({}, vendorPb);
const vendorServices = {};

module.exports = {
  types: forgeTypes,
  services: forgeServices,
  vendorTypes: vendorTypes,
  vendorServices: vendorServices,
};
