// const randomBytes = require('randombytes');
// const { } = require('@arcblock/forge-util');
const { types, fromAppDID } = require('./lib/index');

const appDID = 'zNKtCNqYWLYWYW3gWRA1vnRykfCBZYHZvzKr';
const seedHex =
  'a0c42a9c3ac6abf2ba6a9946ae83af18f51bf1c9fa7dacc4c92513cc4dd015834341c775dcd4c0fac73547c5662d81a9e9361a0aac604a73a321bd9103bce8af';
const userDID = fromAppDID(appDID, seedHex, {
  keyType: types.KeyType.ED25519,
  hashType: types.HashType.SHA3,
  roleType: types.RoleType.ROLE_ACCOUNT,
});

console.log({ userDID });
