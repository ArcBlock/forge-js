const util = require('util');

const { isUint8Array } = util.types;

// FIXME: this code is fragile to changes
function decodeBinary(data, experimental = false) {
  if (isUint8Array(data)) {
    return Buffer.from(data).toString();
  }

  Object.keys(data).forEach(x => {
    if (isUint8Array(data[x])) {
      data[x] = Buffer.from(data[x]);
      if (experimental) {
        data[x] = data[x].toString(
          ['appHash', 'blockHash', 'signature', 'pk', 'token'].includes(x) ? 'hex' : 'utf8'
        );
      }
      return;
    }
    if (data[x] && typeof data[x] === 'object') {
      data[x] = decodeBinary(data[x], experimental);
      return;
    }
  });

  return data;
}

module.exports = {
  decodeBinary,
};
