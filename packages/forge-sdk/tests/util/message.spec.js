const { BigInteger } = require('jsbn');
const {
  createMessage,
  formatMessage,
  fakeMessage,
  decodeAny,
  encodeAny,
  encodeTimestamp,
  decodeTimestamp,
  encodeBigInt,
  decodeBigInt,
} = require('../../lib/util/message');

describe('#createMessage', () => {
  test('should create simple message', () => {
    const message = createMessage('RequestGetBlock', { height: 1 });
    expect(typeof message).toEqual('object');
    expect(typeof message.toObject).toEqual('function');
    expect(message.getHeight()).toEqual(1);
  });

  test('should support nested message', () => {
    const params = {
      passphrase: '123456',
      moniker: 'wangshijun',
      type: {
        pk: 0,
        hash: 0,
        address: 0,
      },
    };

    const message = createMessage('RequestCreateWallet', params);
    expect(message.getPassphrase()).toEqual('123456');
    expect(message.getMoniker()).toEqual('wangshijun');

    const type = message.getType();
    expect(type.getPk()).toEqual(0);
    expect(type.getHash()).toEqual(0);
    expect(type.getAddress()).toEqual(0);
  });

  test('should support scalar repeated fields', () => {
    const params = {
      address: '123456',
      moniker: 'wangshijun',
      migratedFrom: ['123', '456'],
    };

    const message = createMessage('AccountState', params);
    expect(message.getAddress()).toEqual(params.address);
    expect(message.getMoniker()).toEqual(params.moniker);
    expect(message.getMigratedFromList()).toEqual(params.migratedFrom);
  });

  test('should support complex repeated fields', () => {
    const params = {
      tx: {
        from: '123',
      },
      states: [{ address: 'states1', nonce: 24 }, { address: 'states2', nonce: 32 }],
    };

    const message = createMessage('RequestVerifyTx', params);
    expect(message.getTx().toObject().from).toEqual(params.tx.from);
    const states = message.getStatesList().map(x => x.toObject());
    expect(states[0].address).toEqual('states1');
    expect(states[1].address).toEqual('states2');
  });

  test('should support complex repeated fields', () => {
    const params = {
      code: 0,
      states: [{ address: 'states1', nonce: 24 }],
    };

    const message = createMessage('ResponseUpdateState', params);
    expect(message.getCode()).toEqual(params.code);
    const states = message.getStatesList().map(x => x.toObject());
    expect(states[0].address).toEqual('states1');
  });

  test('should support nested complex repeated fields', () => {
    const params = {
      updateState: {
        code: 0,
        states: [
          {
            address: 'states1',
            nonce: 24,
            data: {
              type: 'AccountKvState',
              value: {
                store: [{ key: '123', value: '456' }, { key: '234', value: '567' }],
              },
            },
          },
          {
            address: 'states2',
            nonce: 32,
            data: {
              type: 'AccountKvState',
              value: {
                store: [{ key: '123', value: '456' }, { key: '234', value: '567' }],
              },
            },
          },
        ],
      },
    };

    const message = createMessage('Response', params);
    const states = message
      .getUpdateState()
      .getStatesList()
      .map(x => x.toObject());
    expect(states.length).toEqual(2);
    const stores = states.map(x => decodeAny(x.data).value.storeList);
    stores.forEach(store => {
      expect(store.length).toEqual(2);
      expect(store[0].key).toEqual('123');
      expect(store[0].value).toEqual('456');
      expect(store[1].key).toEqual('234');
      expect(store[1].value).toEqual('567');
    });
  });

  test('should support timestamp fields', () => {
    const params = {
      address: '123456',
      context: {
        genesisTime: { seconds: 1547179509, nanos: 471813322 },
      },
    };

    const message = createMessage('AccountState', params).toObject();
    const timestamp = message.context.genesisTime;
    expect(timestamp).toEqual(params.context.genesisTime);
  });

  test('should support bigInt fields', () => {
    let message = createMessage('TransferTx', { value: 123456 }).toObject();
    expect(message.value.minus).toEqual(false);
    expect(Buffer.from(message.value.value).toString('hex')).toEqual('01e240');

    message = createMessage('TransferTx', { value: -123456 }).toObject();
    expect(message.value.minus).toEqual(true);
    expect(Buffer.from(message.value.value).toString('hex')).toEqual('01e240');
  });

  test('should support really big number fields', () => {
    const v = new BigInteger('100', 10);
    const d = new BigInteger('10').pow(16);
    const bigNumber = v.multiply(d).toString('10');
    const message = createMessage('TransferTx', { value: bigNumber }).toObject();
    const decoded = formatMessage('TransferTx', message);
    expect(decoded.value).toEqual(bigNumber);
  });
});

describe('#formatMessage', () => {
  test('should be a function', () => {
    expect(typeof formatMessage).toEqual('function');
  });

  test('should decode nested data as expected', () => {
    const message = formatMessage('AccountState', {
      balance: { value: Uint8Array.from([13, 224, 182, 179, 167, 100, 0, 0]) },
      pk: Uint8Array.from([125, 100, 32]),
      address: '123',
      type: {
        pk: 1,
        hash: 0,
        address: 0,
      },
      context: {
        genesisTime: { seconds: 1547461548, nanos: 207882515 },
      },
      migratedFrom: ['123456', '234567'],
    });
    expect(message.balance).toEqual('1000000000000000000');
    expect(message.pk).toEqual('fWQg');
    expect(message.type.pk).toEqual('SECP256K1');
    expect(message.type.hash).toEqual('KECCAK');
    expect(message.type.address).toEqual('BASE16');
    expect(message.context.genesisTime).toEqual('2019-01-14T10:25:48.208Z');
    expect(message.migratedFrom[0]).toEqual('123456');
  });

  // FIXME: circular queue need custom encoding and decoding
  test('should decode repeated data as expected', () => {
    const message = formatMessage('ChannelState', {
      address: '123456',
      waiting: {
        items: [{ from: 'abcd' }],
        type_url: 'Transaction',
        maxItems: 10,
        circular: false,
        fifo: false,
      },
    });
    expect(message.address).toEqual('123456');
    expect(message.waiting.maxItems).toEqual(10);
  });

  test('should decode nested data as expected', () => {
    const message = formatMessage('ChainInfo', {
      appHash: Uint8Array.from([125, 100, 32]),
      blockHash: Uint8Array.from([125, 100, 32]),
    });
    expect(message.appHash).toEqual('7d6420');
    expect(message.blockHash).toEqual('7d6420');
  });
});

describe('#fakeMessage', () => {
  test('should be a function', () => {
    expect(typeof fakeMessage).toEqual('function');
  });

  test('should return undefined on invalid type', () => {
    expect(fakeMessage()).toBeUndefined();
    expect(fakeMessage('NotExist')).toBeUndefined();
  });

  test('should support simple type', () => {
    const message = fakeMessage('WalletType');
    expect(message.pk).not.toBeUndefined();
    expect(message.hash).not.toBeUndefined();
    expect(message.address).not.toBeUndefined();
  });

  test('should support timestamp type', () => {
    const message = fakeMessage('AbciContext');
    expect(message.blockHeight).toBeGreaterThan(0);
    expect(Date.parse(message.blockTime) > 0).toBeTruthy();
  });

  test('should support repeated type', () => {
    const message = fakeMessage('BlockInfo');
    // console.log(require('util').inspect(message, { depth: 5 }));
    expect(message.height).toBeGreaterThan(0);
    expect(Date.parse(message.time) > 0).toBeTruthy();
    expect(Array.isArray(message.txs)).toBeTruthy();
    const tx = message.txs[0];
    expect(tx.from).toBeTruthy();
    expect(tx.nonce).toBeTruthy();
    expect(tx.itx.type).toBeTruthy();
    expect(tx.itx.value).toBeTruthy();
  });
});

describe('#decodeAny', () => {
  test('should be a function', () => {
    expect(typeof decodeAny).toEqual('function');
  });

  test('should support empty value', () => {
    const message = decodeAny(null);
    expect(typeof message).toEqual('object');
    expect(message.type).toEqual('Unknown');
    expect(message.value).toEqual('');
  });
});

describe('#encodeAny', () => {
  test('should be a function', () => {
    expect(typeof encodeAny).toEqual('function');
  });

  test('should support empty value', () => {
    const message = encodeAny({
      type: 'TransferTx',
      value: { to: '' },
    }).toObject();
    expect(typeof message).toEqual('object');
    expect(message.typeUrl).toEqual('fg:t:transfer');
    expect(message.value).toEqual('');
  });

  test('should support non-empty value', () => {
    const message = encodeAny({
      type: 'TransferTx',
      value: { to: 'abc' },
    }).toObject();
    expect(typeof message).toEqual('object');
    expect(message.typeUrl).toEqual('fg:t:transfer');
    expect(message.value).toEqual('CgNhYmM=');
  });
});

describe('#encodeBigInt & decodeBitIng', () => {
  test('should be a function', () => {
    expect(typeof encodeBigInt).toEqual('function');
    expect(typeof decodeBigInt).toEqual('function');
  });

  test('should encode encoded properly', () => {
    let params = { value: Uint8Array.from([13, 224, 182, 179, 167, 100, 0, 0]) };
    let encoded = encodeBigInt(params, 'BigUint').toObject();
    expect(encoded.value).toEqual(params.value);
  });

  test('should support reverse op', () => {
    let value = '1234567890';
    let encoded = encodeBigInt(value, 'BigUint').toObject();
    let decoded = decodeBigInt(encoded);
    expect(value).toEqual(decoded);

    value = '123456789000000000000000000000000';
    encoded = encodeBigInt(value, 'BigUint').toObject();
    decoded = decodeBigInt(encoded);
    expect(value).toEqual(decoded);
  });
});

describe('#encodeTimestamp & decodeTimestamp', () => {
  test('should be a function', () => {
    expect(typeof encodeTimestamp).toEqual('function');
    expect(typeof decodeTimestamp).toEqual('function');
  });

  test('should encode timestamp properly', () => {
    const date = new Date();
    expect(encodeTimestamp()).toBeFalsy();
    expect(encodeTimestamp(date.toISOString()).getSeconds()).toEqual(
      Math.floor(date.getTime() / 1e3)
    );
    expect(encodeTimestamp({ seconds: 1 }).getSeconds()).toEqual(1);
  });

  test('should decode timestamp properly', () => {
    let params = { value: Uint8Array.from([13, 224, 182, 179, 167, 100, 0, 0]) };
    let encoded = encodeBigInt(params, 'BigUint').toObject();
    expect(encoded.value).toEqual(params.value);
  });

  test('should support reverse op', () => {
    const dateStr = new Date().toISOString();
    const encoded = encodeTimestamp(dateStr).toObject();
    const decoded = decodeTimestamp(encoded);
    expect(decoded).toEqual(dateStr);
  });
});
