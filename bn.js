const { toBN, fromTokenToUnit, toHex } = require('@arcblock/forge-util');

console.log(toBN('35C9ADC5DEA00000').toString());
console.log(toHex(fromTokenToUnit(10000, 16).toBuffer()));
