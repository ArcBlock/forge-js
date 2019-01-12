const { createMessage, decodeAny } = require('../../');

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
      expect(store[0].key).toBeTruthy();
      expect(store[0].value).toBeTruthy();
      expect(store[1].key).toBeTruthy();
      expect(store[1].value).toBeTruthy();
    });
    // TODO: check key value match
    // console.log(require('util').inspect(stores, { depth: 5 }));
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

  // TODO: support timestamp
  // TODO: support biguint/bigsint
  // TODO: support encodeAny and decodeAny
});
