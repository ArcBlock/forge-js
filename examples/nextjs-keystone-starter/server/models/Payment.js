const keystone = require('keystone');

const { Types } = keystone.Field;

const Payment = new keystone.List('Payment', {
  label: '支付',
  plural: '支付',
  track: true,
  noedit: true,
  nodelete: true,
  map: { name: 'hash' },
  searchFields: 'did hash',
  schema: { collection: 'payments' },
});

Payment.add({
  did: {
    type: Types.Text,
    label: 'DID',
  },
  hash: {
    type: Types.Text,
    label: 'TxHash',
  },
  block: {
    type: Types.Number,
    label: 'Block',
  },
  status: {
    type: Types.Select,
    options: 'created, signed, confirmed',
    default: 'created',
  },
});

Payment.defaultColumns = 'did, hash, block, status, createdAt';
Payment.register();
