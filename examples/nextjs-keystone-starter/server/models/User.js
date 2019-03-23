const keystone = require('keystone');

const types = keystone.Field.Types;

const User = new keystone.List('User', {
  label: '用户',
  plural: '用户',
  track: true,
  noedit: true,
  nodelete: true,
  map: { name: 'name' },
  searchFields: 'did name email',
  schema: { collection: 'users' },
});

User.add({
  did: {
    type: types.Text,
    label: 'DID',
    unique: true,
    required: true,
    initial: true,
  },
  name: {
    type: types.Text,
    label: '用户名',
    required: true,
    initial: true,
    index: true,
  },
  email: {
    type: types.Text,
    label: '邮箱',
    default: '',
    required: false,
  },
  mobile: {
    type: types.Text,
    label: '电话',
    default: '',
    required: false,
  },
});

User.defaultColumns = 'did, name, email, createdAt';
User.register();
