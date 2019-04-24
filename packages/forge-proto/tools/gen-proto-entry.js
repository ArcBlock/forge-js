/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const camelcase = require('camelcase');

const mode = ['full', 'lite'].includes(process.argv[2]) ? process.argv[2] : 'full';

const files = fs
  .readdirSync(path.join(__dirname, '../lib/'))
  .filter(x => /\.js$/.test(x))
  // Make sure all tx protocol overwrites the built-in ones
  .sort((a, b) => {
    if (/_tx_pb\.js$/.test(a)) {
      return 1;
    }
    if (/_tx_pb\.js$/.test(b)) {
      return -1;
    }
    return 0;
  })
  .filter(x => {
    const file = path.join(__dirname, '../lib/', x);
    const module = require(file);
    if (Object.keys(module).length === 0) {
      fs.unlinkSync(file);
      return false;
    }

    return true;
  });

function toMap(list) {
  return list.reduce((acc, x) => {
    acc[camelcase(x.replace(/\.js$/, ''))] = `./lib/${x}`;
    return acc;
  }, {});
}

function toConst(map) {
  return Object.keys(map)
    .map(x => `const ${x} = require('${map[x]}');`)
    .join('\n');
}

function toAssign(map) {
  if (Object.keys(map).length) {
    return `Object.assign({}, ${Object.keys(map).join(', ')})`;
  }

  return '{}';
}

let forgeTypeFiles = files.filter(
  x => !/^vendor_/.test(x) && /_pb\.js$/.test(x) && !/_grpc_pb\.js$/.test(x)
);
let forgeServiceFiles = files.filter(x => !/^vendor_/.test(x) && /_grpc_pb\.js$/.test(x));
let vendorTypeFiles = files.filter(
  x => /^vendor_/.test(x) && /_pb\.js$/.test(x) && !/_grpc_pb\.js$/.test(x)
);
let vendorServiceFiles = files.filter(x => /^vendor_/.test(x) && /_grpc_pb\.js$/.test(x));

if (mode === 'lite') {
  forgeTypeFiles = forgeTypeFiles.filter(
    x => /_tx_pb\.js$/.test(x) || ['type_pb.js', 'enum_pb.js'].includes(x)
  );
  forgeServiceFiles = [];
  vendorServiceFiles = [];
} else {
  vendorServiceFiles = [];
}

console.log({ forgeTypeFiles, forgeServiceFiles, vendorTypeFiles, vendorServiceFiles });

forgeTypeFiles = toMap(forgeTypeFiles);
forgeServiceFiles = toMap(forgeServiceFiles);
vendorTypeFiles = toMap(vendorTypeFiles);
vendorServiceFiles = toMap(vendorServiceFiles);

const code = `// Auto generated code (${new Date().toISOString()}), DO NOT EDIT
${toConst(forgeTypeFiles)}
${toConst(forgeServiceFiles)}
${toConst(vendorTypeFiles)}
${toConst(vendorServiceFiles)}

const forgeTypes = ${toAssign(forgeTypeFiles)};
const forgeServices = ${toAssign(forgeServiceFiles)};
const vendorTypes = ${toAssign(vendorTypeFiles)};
const vendorServices = ${toAssign(vendorServiceFiles)};

module.exports = {
  types: forgeTypes,
  services: forgeServices,
  vendorTypes: vendorTypes,
  vendorServices: vendorServices,
};
`;

fs.writeFileSync(path.join(__dirname, `../proto-${mode}.js`), code);
console.log(`proto entry file ${mode} mode generated`);
