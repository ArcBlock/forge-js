const multibase = require('multibase');
const { isHexStrict, bytesToHex, isHex } = require('@arcblock/forge-util');

const toHex = appPk => {
  let appPkHex = '';
  if (isHex(appPk)) {
    appPkHex = isHexStrict(appPk) ? appPk : `0x${appPk}`;
  } else if (multibase.isEncoded(appPk)) {
    appPkHex = bytesToHex(multibase.decode(appPk));
  }

  return appPkHex;
};

const base58Encode = buffer => multibase.encode('base58btc', buffer).toString();

module.exports = {
  toHex,
  base58Encode,
};
