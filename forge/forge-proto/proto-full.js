// Auto generated code (2020-06-12T22:20:55.081Z), DO NOT EDIT
const rpcPb = require('./lib/rpc_pb.js');
const statePb = require('./lib/state_pb.js');
const enumPb = require('./lib/enum_pb.js');
const traceTypePb = require('./lib/trace_type_pb.js');
const txPb = require('./lib/tx_pb.js');
const typePb = require('./lib/type_pb.js');
const serviceGrpcPb = require('./lib/service_grpc_pb.js');
const vendorPb = require('./lib/vendor_pb.js');

const forgeTypes = Object.assign({}, rpcPb, statePb, enumPb, traceTypePb, txPb, typePb);
const forgeServices = Object.assign({}, serviceGrpcPb);
const vendorTypes = Object.assign({}, vendorPb);
const vendorServices = {};

module.exports = {
  types: forgeTypes,
  services: forgeServices,
  vendorTypes,
  vendorServices,
};
