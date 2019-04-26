// Auto generated code (2019-04-25T01:46:51.069Z), DO NOT EDIT
const servicePb = require('./lib/service_pb.js');
const typePb = require('./lib/type_pb.js');
const txPb = require('./lib/tx_pb.js');
const traceTypePb = require('./lib/trace_type_pb.js');
const enumPb = require('./lib/enum_pb.js');
const statePb = require('./lib/state_pb.js');
const rpcPb = require('./lib/rpc_pb.js');
const abiPb = require('./lib/abi_pb.js');
const declareFileTxPb = require('./lib/declare_file_tx_pb.js');
const createAssetTxPb = require('./lib/create_asset_tx_pb.js');
const stakeTxPb = require('./lib/stake_tx_pb.js');
const exchangeTxPb = require('./lib/exchange_tx_pb.js');
const accountMigrateTxPb = require('./lib/account_migrate_tx_pb.js');
const upgradeNodeTxPb = require('./lib/upgrade_node_tx_pb.js');
const updateAssetTxPb = require('./lib/update_asset_tx_pb.js');
const consumeAssetTxPb = require('./lib/consume_asset_tx_pb.js');
const deployProtocolTxPb = require('./lib/deploy_protocol_tx_pb.js');
const pokeTxPb = require('./lib/poke_tx_pb.js');
const declareTxPb = require('./lib/declare_tx_pb.js');
const transferTxPb = require('./lib/transfer_tx_pb.js');
const abiGrpcPb = require('./lib/abi_grpc_pb.js');
const serviceGrpcPb = require('./lib/service_grpc_pb.js');
const vendorPb = require('./lib/vendor_pb.js');

const forgeTypes = Object.assign(
  {},
  servicePb,
  typePb,
  txPb,
  traceTypePb,
  enumPb,
  statePb,
  rpcPb,
  abiPb,
  declareFileTxPb,
  createAssetTxPb,
  stakeTxPb,
  exchangeTxPb,
  accountMigrateTxPb,
  upgradeNodeTxPb,
  updateAssetTxPb,
  consumeAssetTxPb,
  deployProtocolTxPb,
  pokeTxPb,
  declareTxPb,
  transferTxPb
);
const forgeServices = Object.assign({}, abiGrpcPb, serviceGrpcPb);
const vendorTypes = Object.assign({}, vendorPb);
const vendorServices = {};

module.exports = {
  types: forgeTypes,
  services: forgeServices,
  vendorTypes: vendorTypes,
  vendorServices: vendorServices,
};
