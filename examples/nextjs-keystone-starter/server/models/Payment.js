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
    index: true,
  },
  hash: {
    type: Types.Text,
    label: 'TxHash',
    index: true,
  },
  block: {
    type: Types.Number,
    label: 'Block',
    index: true,
  },
  status: {
    type: Types.Select,
    options: 'created, signed, confirmed',
    default: 'created',
    index: true,
  },
});

Payment.defaultColumns = 'did, hash, block, status, createdAt';
Payment.register();
