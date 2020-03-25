// Auto generated code (2020-03-25T23:21:59.921Z), DO NOT EDIT
const enumPb = require('./lib/enum_pb.js');
const rpcPb = require('./lib/rpc_pb.js');
const servicePb = require('./lib/service_pb.js');
const statePb = require('./lib/state_pb.js');
const traceTypePb = require('./lib/trace_type_pb.js');
const txPb = require('./lib/tx_pb.js');
const typePb = require('./lib/type_pb.js');

const vendorPb = require('./lib/vendor_pb.js');


const forgeTypes = Object.assign({}, enumPb, rpcPb, servicePb, statePb, traceTypePb, txPb, typePb);
const forgeServices = {};
const vendorTypes = Object.assign({}, vendorPb);
const vendorServices = {};

module.exports = {
  types: forgeTypes,
  services: forgeServices,
  vendorTypes,
  vendorServices,
};
