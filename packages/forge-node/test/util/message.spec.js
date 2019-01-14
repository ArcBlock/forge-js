const { createMessage, formatMessage, decodeAny, encodeAny } = require('../../lib/util/message');

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
      sender: {
        address: 'sender',
      },
      states: [{ address: 'states1', nonce: 24 }, { address: 'states2', nonce: 32 }],
    };

    const message = createMessage('RequestVerifyTx', params);
    expect(message.getTx().toObject().from).toEqual(params.tx.from);
    expect(message.getSender().toObject().address).toEqual(params.sender.address);
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
      genesisTime: { seconds: 1547179509, nanos: 471813322 },
    };

    const message = createMessage('AccountState', params);
    const timestamp = message.getGenesisTime().toObject();
    expect(timestamp).toEqual(params.genesisTime);
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
      genesisTime: { seconds: 1547461548, nanos: 207882515 },
      migratedFrom: ['123456', '234567'],
    });
    expect(message.balance).toEqual('1000000000000000000');
    expect(message.pk).toEqual('fWQg');
    expect(message.type.pk).toEqual('SECP256K1');
    expect(message.type.hash).toEqual('KECCAK');
    expect(message.type.address).toEqual('BASE16');
    expect(message.genesisTime).toEqual('2019-01-14T10:25:48.208Z');
    expect(message.migratedFrom[0]).toEqual('123456');
  });

  test('should decode repeated data as expected', () => {
    const message = formatMessage('ChannelState', {
      address: '123456',
      waiting: [{ height: 123 }, { height: 230, hash: 'abcd' }],
    });
    expect(message.address).toEqual('123456');
    expect(message.waiting[0].height).toEqual(123);
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
    expect(message.typeUrl).toEqual('ft/Transfer');
    expect(message.value).toEqual('');
  });

  test('should support non-empty value', () => {
    const message = encodeAny({
      type: 'TransferTx',
      value: { to: 'abc' },
    }).toObject();
    expect(typeof message).toEqual('object');
    expect(message.typeUrl).toEqual('ft/Transfer');
    expect(message.value).toEqual('CgNhYmM=');
  });
});
