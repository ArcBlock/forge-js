const keystone = require('keystone');

const types = keystone.Field.Types;

const LoginToken = new keystone.List('LoginToken', {
  label: '登录状态',
  plural: '登录状态',
  track: true,
  noedit: true,
  nodelete: true,
  map: { name: 'token' },
  searchFields: 'did token',
  schema: { collection: 'login_tokens' },
});

LoginToken.add({
  token: {
    type: types.Text,
    label: 'TOKEN',
    unique: true,
    index: true,
  },
  did: {
    type: types.Text,
    label: 'DID',
    index: true,
  },
  uid: {
    type: types.Text,
    label: 'UID',
    index: true,
  },
  status: {
    type: types.Select,
    options: 'created, scanned, succeed, failed, completed',
    label: '状态',
    default: 'created',
  },
});

LoginToken.defaultColumns = 'token, did, uid, status, createdAt';
LoginToken.register();
