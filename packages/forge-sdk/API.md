# API Documentation


## Table of Contents

* [Enums](#enums)
  * [StatusCode](#statuscode)
  * [TopicType](#topictype)
  * [KeyType](#keytype)
  * [HashType](#hashtype)
  * [EncodingType](#encodingtype)
  * [UpgradeType](#upgradetype)
  * [UpgradeAction](#upgradeaction)
  * [StateType](#statetype)
  * [StakeType](#staketype)
  * [SupportedTxs](#supportedtxs)
  * [SupportedStakes](#supportedstakes)
* [RPC Methods](#rpc-methods)
  * [createTx](#createtx)
  * [createWallet](#createwallet)
  * [declareNode](#declarenode)
  * [getAccountState](#getaccountstate)
  * [getAssetState](#getassetstate)
  * [getBlock](#getblock)
  * [getChainInfo](#getchaininfo)
  * [getChannelState](#getchannelstate)
  * [getForgeState](#getforgestate)
  * [getNetInfo](#getnetinfo)
  * [getStakeState](#getstakestate)
  * [getTx](#gettx)
  * [getUnconfirmedTxs](#getunconfirmedtxs)
  * [getValidatorsInfo](#getvalidatorsinfo)
  * [listWallet](#listwallet)
  * [loadFile](#loadfile)
  * [loadWallet](#loadwallet)
  * [process](#process)
  * [processOne](#processone)
  * [recoverWallet](#recoverwallet)
  * [removeWallet](#removewallet)
  * [search](#search)
  * [sendTx](#sendtx)
  * [storeFile](#storefile)
  * [subscribe](#subscribe)
  * [unsubscribe](#unsubscribe)


## Enums

### StatusCode

```js
{
  OK: 0,
  INVALID_NONCE: 1,
  INVALID_SIGNATURE: 2,
  INVALID_SENDER_STATE: 3,
  INVALID_RECEIVER_STATE: 4,
  INSUFFICIENT_DATA: 5,
  INSUFFICIENT_FUND: 6,
  INVALID_OWNER: 7,
  INVALID_TX: 8,
  UNSUPPORTED_TX: 9,
  INVALID_MONIKER: 16,
  INVALID_PASSPHRASE: 17,
  INVALID_CHANNEL: 18,
  INVALID_CHANNEL_WAITING_DATA: 19,
  INVALID_MULTISIG: 20,
  INVALID_WALLET: 21,
  INVALID_CHAIN_ID: 22,
  NEED_CONFIRMATION: 23,
  CONSENSUS_RPC_ERROR: 24,
  STORAGE_RPC_ERROR: 25,
  NOENT: 26,
  ACCOUNT_MIGRATED: 27,
  CHANNEL_IS_FULL: 28,
  REVOKED_TX: 29,
  UNSUPPORTED_STAKE: 30,
  INSUFFICIENT_STAKE: 31,
  INVALID_STAKE_STATE: 32,
  EXPIRED_WALLET_TOKEN: 33,
  BANNED_UNSTAKE: 34,
  INVALID_ASSET: 35,
  INVALID_TX_SIZE: 36,
  FORBIDDEN: 403,
  INTERNAL: 500
}
```

### TopicType

```js
{
  TRANSFER: 0,
  ACCOUNT_MIGRATE: 1,
  CONFIRM: 2,
  CREATE_ASSET: 3,
  EXCHANGE: 4,
  REVOKE: 5,
  BEGIN_BLOCK: 16,
  END_BLOCK: 17,
  DECLARE: 19,
  UPDATE_ASSET: 20,
  CONSENSUS_UPGRADE: 21,
  DECLARE_FILE: 22,
  SYS_UPGRADE: 23,
  STAKE: 24,
  ACCOUNT_STATE: 129,
  ASSET_STATE: 130,
  CHANNEL_STATE: 131,
  FORGE_STATE: 132,
  STAKE_STATE: 133
}
```

### KeyType

```js
{
  ED25519: 0,
  SECP256K1: 1
}
```

### HashType

```js
{
  KECCAK: 0,
  SHA3: 1,
  SHA2: 2,
  KECCAK_384: 6,
  SHA3_384: 7,
  SHA2_384: 9,
  KECCAK_512: 13,
  SHA3_512: 14,
  SHA2_512: 15
}
```

### EncodingType

```js
{
  BASE16: 0,
  BASE58: 1
}
```

### UpgradeType

```js
{
  CONFIG_APP: 0,
  CONFIG_FORGE: 1,
  CONFIG_DFS: 2,
  CONFIG_CONSENSUS: 3,
  CONFIG_P2P: 4,
  EXE_APP: 10,
  EXE_FORGE: 11,
  EXE_DFS: 12,
  EXE_CONSENSUS: 13,
  EXE_P2P: 14
}
```

### UpgradeAction

```js
{
  VERIFY: 0,
  BACKUP: 1,
  REPLACE: 2,
  RESTART_APP: 10,
  RESTART_DFS: 11,
  RESTART_CONSENSUS: 12,
  RESTART_P2P: 13,
  RESTART_FORGE: 14,
  ROLLBACK_IF_FAIL: 30,
  RESTART_ALL_IF_FAIL: 31,
  CRASH_IF_FAIL: 33,
  DROP_ADDRESS_BOOK: 50
}
```

### StateType

```js
{
  STATE_ACCOUNT: 0,
  STATE_ASSET: 1,
  STATE_CHANNEL: 2,
  STATE_FORGE: 3,
  STATE_STAKE: 4
}
```

### StakeType

```js
{
  STAKE_NODE: 0,
  STAKE_USER: 1,
  STAKE_ASSET: 2,
  STAKE_CHAIN: 3
}
```

### SupportedTxs

```js
[
  'AccountMigrateTx',
  'ConfirmTx',
  'ConsensusUpgradeTx',
  'CreateAssetTx',
  'DeclareFileTx',
  'DeclareTx',
  'ExchangeTx',
  'RevokeTx',
  'StakeTx',
  'SysUpgradeTx',
  'TransferTx',
  'UpdateAssetTx'
]
```

### SupportedStakes

```js
[
  'StakeForNode',
  'stakeForAsset',
  'stakeForChain',
  'stakeForUser'
]
```


## RPC Methods

> RPC response contains an `code` field, when `code=0` means success
> Binary data in RPC response are `UInt8Array` instance and can be safely encoded to base64 string

### createTx

```js
const result = await client.createTx({
  itx: {
    type: 'WalletType',
    value: {
      pk: 0,
      hash: 6,
      address: 1
    }
  },
  from: '24ec8e6199681a32deb56aec206e341347f85047',
  nonce: 82260,
  wallet: {
    type: {
      pk: 0,
      hash: 0,
      address: 1
    },
    sk: Uint8Array [
      188
    ],
    pk: Uint8Array [
      246
    ],
    address: '133b7022df75196ed14e6e1c45c3fc2b6d99153d'
  },
  token: 'Ohio'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 20,
  tx: {
    from: 'dc210ed6507eae10440ab46456f75202124a2151',
    nonce: 83776,
    signature: Uint8Array [
      76
    ],
    chainId: 10838,
    signatures: [
      {
        key: Uint8Array [
          210
        ],
        value: Uint8Array [
          80
        ]
      },
      {
        key: Uint8Array [
          91
        ],
        value: Uint8Array [
          98
        ]
      }
    ],
    itx: {
      type: 'WalletType',
      value: {
        pk: 0,
        hash: 9,
        address: 1
      }
    }
  }
}
});
```

### createWallet

```js
const result = await client.createWallet({
  passphrase: 'Metal',
  type: {
    pk: 1,
    hash: 6,
    address: 1
  },
  moniker: 'Avon'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 500,
  token: 'Car',
  wallet: {
    type: {
      pk: 1,
      hash: 2,
      address: 1
    },
    sk: Uint8Array [
      117
    ],
    pk: Uint8Array [
      187
    ],
    address: 'cde84c861092d5ca3b17d2a0041e8f9f2b55e6bd'
  }
}
});
```

### declareNode

```js
const result = await client.declareNode({});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 31,
  wallet: {
    type: {
      pk: 0,
      hash: 14,
      address: 1
    },
    sk: Uint8Array [
      85
    ],
    pk: Uint8Array [
      49
    ],
    address: '26e4660690e3d58f15c3139fa2333178373314c6'
  }
}
});
```

### getAccountState

```js
const stream = client.getAccountState({
  address: '9196151bccb3c0d1f2cdd60ec18beeeddfda7f00',
  keys: [
    'Books',
    'stable'
  ],
  appHash: '3a81a6aac87aae6311af6438074a5bc69c6a959c'
});

// output
{
  code: 0,
  state: {
    balance: '40660',
    nonce: 544,
    numTxs: 55420,
    address: '21625a7db8f376a9448b368045b41fc2f321bdab',
    pk: Uint8Array [
      17
    ],
    type: {
      pk: 1,
      hash: 14,
      address: 0
    },
    moniker: 'protocol',
    context: {
      genesisTx: 'demand-driven',
      renaissanceTx: 'system-worthy',
      genesisTime: '2019-01-25T07:59:10.247Z',
      renaissanceTime: '2019-01-25T07:59:10.247Z'
    },
    migratedTo: 'Direct',
    migratedFrom: [
      'Awesome Rubber Chair',
      'distributed'
    ],
    numAssets: 52187,
    stake: {
      totalStakes: '11162',
      totalUnstakes: '14807',
      totalReceivedStakes: '90578',
      recentStakes: {
        items: [
          {
            type_url: 'Rustic',
            value: Uint8Array [
              43
            ]
          },
          {
            type_url: 'channels',
            value: Uint8Array [
              1
            ]
          }
        ],
        typeUrl: 'tan',
        maxItems: 70684,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          {
            type_url: 'wireless',
            value: Uint8Array [
              121
            ]
          },
          {
            type_url: 'Bulgarian Lev',
            value: Uint8Array [
              115
            ]
          }
        ],
        typeUrl: 'Views',
        maxItems: 29589,
        circular: undefined,
        fifo: undefined
      }
    },
    data: {
      type: 'WalletType',
      value: {
        pk: 0,
        hash: 6,
        address: 1
      }
    }
  }
}
```

### getAssetState

```js
const stream = client.getAssetState({
  address: 'be6585a5bf7527e3be07616ce18ae280583bcf96',
  keys: [
    'Kentucky',
    'portals'
  ],
  appHash: 'f99b941b9404efc188fb1558cba02f05525a17d0'
});

// output
{
  code: 3,
  state: {
    address: '6cd83ee48dfda30c1fad63a267cc68ddacf7d82b',
    owner: 'Bacon',
    moniker: 'Ohio',
    readonly: undefined,
    stake: {
      totalStakes: '63767',
      totalUnstakes: '92992',
      totalReceivedStakes: '3757',
      recentStakes: {
        items: [
          {
            type_url: 'SMS',
            value: Uint8Array [
              146
            ]
          },
          {
            type_url: 'orchestrate',
            value: Uint8Array [
              187
            ]
          }
        ],
        typeUrl: 'blockchains',
        maxItems: 62691,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          {
            type_url: 'Avon',
            value: Uint8Array [
              138
            ]
          },
          {
            type_url: 'quantifying',
            value: Uint8Array [
              140
            ]
          }
        ],
        typeUrl: 'e-markets',
        maxItems: 43559,
        circular: undefined,
        fifo: undefined
      }
    },
    context: {
      genesisTx: 'Metal',
      renaissanceTx: 'Intelligent Fresh Keyboard',
      genesisTime: '2019-01-25T07:59:10.249Z',
      renaissanceTime: '2019-01-25T07:59:10.249Z'
    },
    data: {
      type: 'WalletType',
      value: {
        pk: 0,
        hash: 0,
        address: 0
      }
    }
  }
}
```

### getBlock

```js
const stream = client.getBlock({
  height: 63880
});

// output
{
  code: 21,
  block: {
    height: 12976,
    numTxs: 29187,
    time: '2019-01-25T07:59:10.249Z',
    appHash: '8d9ed4b87b9ce93d41083cd201f0e9ecc2ea35ce',
    proposer: '86e46550544251d0ad54115b32013ff83d0abaaf',
    txs: [
      {
        from: '2aba7b5cba485de7080d0a5949205a48f1a6c559',
        nonce: 43781,
        signature: Uint8Array [
          221
        ],
        chainId: 27732,
        signatures: [
          {
            key: Uint8Array [
              150
            ],
            value: Uint8Array [
              194
            ]
          },
          {
            key: Uint8Array [
              160
            ],
            value: Uint8Array [
              174
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 13,
            address: 1
          }
        }
      },
      {
        from: 'b3b8cb6d369d081737d56245ea23f195af63705d',
        nonce: 34644,
        signature: Uint8Array [
          2
        ],
        chainId: 8482,
        signatures: [
          {
            key: Uint8Array [
              219
            ],
            value: Uint8Array [
              5
            ]
          },
          {
            key: Uint8Array [
              19
            ],
            value: Uint8Array [
              140
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 15,
            address: 0
          }
        }
      }
    ],
    totalTxs: 26301
  }
}
```

### getChainInfo

```js
const result = await client.getChainInfo({});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 32,
  info: {
    id: 'tangible',
    network: 'Games',
    moniker: 'multi-byte',
    version: 'solid state',
    synced: undefined,
    appHash: 'ddf2a88e392827105541552bfb58a46c4260f757',
    blockHash: Uint8Array [
      29
    ],
    blockHeight: 97826,
    blockTime: '2019-01-25T07:59:10.250Z',
    address: '4f180f8132513d2463748a9cdc2bbf8b0449f6db',
    votingPower: 77449,
    totalTxs: 55043
  }
}
});
```

### getChannelState

```js
const stream = client.getChannelState({
  address: '12bb559f39651a6674add832950cc35f193b3b3c',
  keys: [
    'networks',
    'bypassing'
  ],
  appHash: '379493e09e006812ad9ad173a2e86108d517f254'
});

// output
{
  code: 30,
  state: {
    address: '28995b2b442783782dc6977b03d498e0f9deddaa',
    totalConfirmed: 70071,
    maxWaiting: 50820,
    maxConfirmed: 23979,
    waiting: {
      items: [
        {
          type_url: 'Applications',
          value: Uint8Array [
            120
          ]
        },
        {
          type_url: 'interface',
          value: Uint8Array [
            47
          ]
        }
      ],
      typeUrl: 'synthesize',
      maxItems: 29997,
      circular: undefined,
      fifo: undefined
    },
    confirmed: {
      items: [
        {
          type_url: 'microchip',
          value: Uint8Array [
            161
          ]
        },
        {
          type_url: 'Berkshire',
          value: Uint8Array [
            85
          ]
        }
      ],
      typeUrl: 'collaborative',
      maxItems: 95959,
      circular: undefined,
      fifo: undefined
    },
    context: {
      genesisTx: 'Clothing',
      renaissanceTx: 'Movies',
      genesisTime: '2019-01-25T07:59:10.251Z',
      renaissanceTime: '2019-01-25T07:59:10.251Z'
    },
    data: {
      type: 'WalletType',
      value: {
        pk: 0,
        hash: 2,
        address: 0
      }
    }
  }
}
```

### getForgeState

```js
const result = await client.getForgeState({
  keys: [
    'Angola',
    'New Hampshire'
  ],
  appHash: '6dacfad4f7b3964471fde9560e555d4804396073'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 9,
  state: {
    consensus: {
      maxBytes: 29865,
      maxGas: 7129,
      maxValidators: 8652,
      maxCandidates: 64992,
      pubKeyTypes: [
        'open-source',
        'Ethiopia'
      ],
      validators: [
        {
          address: 'ddced5dd1dff2f270e21cbe0174f19da3c8721b6',
          power: 28546
        },
        {
          address: '28a2a4f005a99091cdd98c95efafc71aabfeee27',
          power: 71033
        }
      ],
      validatorChanged: undefined,
      paramChanged: undefined
    },
    tasks: {
      item: [
        {
          type: 12,
          dataHash: 'compress',
          actions: [
            undefined,
            undefined
          ]
        },
        {
          type: 3,
          dataHash: 'HTTP',
          actions: [
            undefined,
            undefined
          ]
        }
      ]
    },
    stakeSummary: {
      totalStakes: '26514',
      totalUnstakes: '18049',
      context: {
        genesisTx: 'Investor',
        renaissanceTx: 'Jewelery',
        genesisTime: '2019-01-25T07:59:10.252Z',
        renaissanceTime: '2019-01-25T07:59:10.252Z'
      }
    },
    data: {
      type: 'WalletType',
      value: {
        pk: 1,
        hash: 7,
        address: 1
      }
    }
  }
}
});
```

### getNetInfo

```js
const result = await client.getNetInfo({});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 29,
  netInfo: {
    listening: undefined,
    listeners: [
      'Alaska',
      'generating'
    ],
    nPeers: 40566,
    peers: [
      {
        nodeInfo: {
          id: 'Money Market Account',
          network: 'Electronics',
          version: 'IB',
          moniker: 'Fresh',
          ip: 'back-end',
          geoInfo: {
            city: 'connect',
            country: 'bandwidth',
            latitude: 84516.24,
            longitude: 34080.42
          }
        }
      },
      {
        nodeInfo: {
          id: 'Ergonomic Steel Fish',
          network: 'maroon',
          version: 'Licensed Metal Shoes',
          moniker: 'XML',
          ip: 'turquoise',
          geoInfo: {
            city: 'initiative',
            country: 'Money Market Account',
            latitude: 68543.13,
            longitude: 87055.81
          }
        }
      }
    ]
  }
}
});
```

### getStakeState

```js
const stream = client.getStakeState({
  address: '65378d3fc2e3f1f3991b6879fe074968a84b4482',
  keys: [
    'Analyst',
    'recontextualize'
  ],
  appHash: 'd6f9da0681d0960ffbc98c54675b5e274e33ea92'
});

// output
{
  code: 23,
  state: {
    address: '0e2f856b3f2c96527f57bdd5e0eb6faec290da08',
    from: 'a0794e8e1cefe7cfc3e5bec8292dbfa58442235f',
    to: '71ec6c40c2ea77e79c7a3c6ece559ce9e0df5888',
    balance: '815',
    message: 'South Carolina',
    context: {
      genesisTx: 'Keyboard',
      renaissanceTx: 'COM',
      genesisTime: '2019-01-25T07:59:10.255Z',
      renaissanceTime: '2019-01-25T07:59:10.255Z'
    },
    data: {
      type: 'WalletType',
      value: {
        pk: 1,
        hash: 14,
        address: 0
      }
    }
  }
}
```

### getTx

```js
const stream = client.getTx({
  hash: '647156ea09346a81d18e2e25503e83f3f9273082'
});

// output
{
  code: 33,
  info: {
    tx: {
      from: '60207b82509541b07db4d5a1f967a13778fcc619',
      nonce: 71398,
      signature: Uint8Array [
        3
      ],
      chainId: 47787,
      signatures: [
        {
          key: Uint8Array [
            146
          ],
          value: Uint8Array [
            176
          ]
        },
        {
          key: Uint8Array [
            190
          ],
          value: Uint8Array [
            138
          ]
        }
      ],
      itx: {
        type: 'WalletType',
        value: {
          pk: 0,
          hash: 15,
          address: 0
        }
      }
    },
    height: 7322,
    index: 93402,
    hash: 'df6f5f568f3ac76991637e263a2a9beb4d3cdd69',
    tags: [
      {
        key: Uint8Array [
          47
        ],
        value: Uint8Array [
          199
        ]
      },
      {
        key: Uint8Array [
          249
        ],
        value: Uint8Array [
          63
        ]
      }
    ]
  }
}
```

### getUnconfirmedTxs

```js
const result = await client.getUnconfirmedTxs({
  limit: 4603
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 31,
  unconfirmedTxs: {
    nTxs: 8425,
    txs: [
      {
        from: '12ec49470527fd57a13abec4c5455cd3c462fc1b',
        nonce: 26719,
        signature: Uint8Array [
          159
        ],
        chainId: 83682,
        signatures: [
          {
            key: Uint8Array [
              215
            ],
            value: Uint8Array [
              105
            ]
          },
          {
            key: Uint8Array [
              67
            ],
            value: Uint8Array [
              154
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 15,
            address: 1
          }
        }
      },
      {
        from: 'f009aa498f4474707c4d5b71b3e2ba18f8f01300',
        nonce: 25921,
        signature: Uint8Array [
          65
        ],
        chainId: 76749,
        signatures: [
          {
            key: Uint8Array [
              196
            ],
            value: Uint8Array [
              22
            ]
          },
          {
            key: Uint8Array [
              95
            ],
            value: Uint8Array [
              156
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 7,
            address: 1
          }
        }
      }
    ]
  }
}
});
```

### getValidatorsInfo

```js
const result = await client.getValidatorsInfo({});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 18,
  validatorsInfo: {
    blockHeight: 24383,
    validators: [
      {
        address: '3c1b8dfab2d183d53a0e7beeba3f9a3ae0602342',
        votingPower: 50188,
        proposerPriority: 'Shoes'
      },
      {
        address: 'ee11babb2f5dbef877ec1765d9cac3f3bfa675d2',
        votingPower: 23292,
        proposerPriority: 'Jewelery'
      }
    ]
  }
}
});
```

### listWallet

```js
const stream = client.listWallet({});

// output
{
  code: 0,
  address: '03826f09de24919d3b8c504ff0c2427d0ddccb6f'
}
```

### loadFile

```js
const stream = client.loadFile({
  hash: '9209b20fe6927b652bdf79951df54521ed725948'
});

// output
{
  code: 23,
  chunk: Uint8Array [
    215
  ]
}
```

### loadWallet

```js
const result = await client.loadWallet({
  address: '5ef675b11d0c01bd039ad6f6d849634d5b7dad7c',
  passphrase: 'Books'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 8,
  token: 'Administrator'
}
});
```

### process

```js
const stream = client.process({
  verifyTx: {
    tx: {
      from: 'd0663c0b7ddcb57b881eac0962bcf38369971788',
      nonce: 30776,
      signature: Uint8Array [
        210
      ],
      chainId: 66960,
      signatures: [
        {
          key: Uint8Array [
            1
          ],
          value: Uint8Array [
            212
          ]
        },
        {
          key: Uint8Array [
            85
          ],
          value: Uint8Array [
            91
          ]
        }
      ],
      itx: {
        type: 'WalletType',
        value: {
          pk: 1,
          hash: 1,
          address: 0
        }
      }
    },
    sender: {
      balance: '90477',
      nonce: 66222,
      numTxs: 16498,
      address: 'bf82de4b9568e555bb6ac9dfe1b64459e23d2527',
      pk: Uint8Array [
        30
      ],
      type: {
        pk: 0,
        hash: 0,
        address: 1
      },
      moniker: 'robust',
      context: {
        genesisTx: 'International',
        renaissanceTx: 'transmitter',
        genesisTime: '2019-01-25T07:59:10.256Z',
        renaissanceTime: '2019-01-25T07:59:10.256Z'
      },
      migratedTo: 'technologies',
      migratedFrom: [
        'Czech Koruna',
        'tan'
      ],
      numAssets: 34283,
      stake: {
        totalStakes: '49754',
        totalUnstakes: '59896',
        totalReceivedStakes: '85972',
        recentStakes: {
          items: [
            {
              type_url: 'navigating',
              value: Uint8Array [
                152
              ]
            },
            {
              type_url: 'Rubber',
              value: Uint8Array [
                46
              ]
            }
          ],
          typeUrl: 'Wooden',
          maxItems: 78772,
          circular: undefined,
          fifo: undefined
        },
        recentReceivedStakes: {
          items: [
            {
              type_url: 'optimal',
              value: Uint8Array [
                228
              ]
            },
            {
              type_url: 'Bedfordshire',
              value: Uint8Array [
                204
              ]
            }
          ],
          typeUrl: 'multi-byte',
          maxItems: 29854,
          circular: undefined,
          fifo: undefined
        }
      },
      data: {
        type: 'WalletType',
        value: {
          pk: 0,
          hash: 14,
          address: 0
        }
      }
    },
    states: [
      {
        balance: '9461',
        nonce: 19993,
        numTxs: 28897,
        address: '81d0bc1672a3fc201e8f470b4419d2c6debb7746',
        pk: Uint8Array [
          172
        ],
        type: {
          pk: 0,
          hash: 0,
          address: 1
        },
        moniker: 'IB',
        context: {
          genesisTx: 'SCSI',
          renaissanceTx: 'Rand',
          genesisTime: '2019-01-25T07:59:10.257Z',
          renaissanceTime: '2019-01-25T07:59:10.257Z'
        },
        migratedTo: 'open-source',
        migratedFrom: [
          'Response',
          'integrated'
        ],
        numAssets: 75160,
        stake: {
          totalStakes: '18477',
          totalUnstakes: '42621',
          totalReceivedStakes: '10684',
          recentStakes: {
            items: [
              {
                type_url: 'multi-byte',
                value: Uint8Array [
                  211
                ]
              },
              {
                type_url: 'Integrated',
                value: Uint8Array [
                  108
                ]
              }
            ],
            typeUrl: 'Alley',
            maxItems: 68737,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              {
                type_url: 'e-commerce',
                value: Uint8Array [
                  176
                ]
              },
              {
                type_url: 'synthesizing',
                value: Uint8Array [
                  106
                ]
              }
            ],
            typeUrl: 'matrix',
            maxItems: 26970,
            circular: undefined,
            fifo: undefined
          }
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 13,
            address: 1
          }
        }
      },
      {
        balance: '54634',
        nonce: 94768,
        numTxs: 17677,
        address: 'afa2fc114c65ea0aa9b7c52bf18d539cbcd34b41',
        pk: Uint8Array [
          225
        ],
        type: {
          pk: 0,
          hash: 1,
          address: 1
        },
        moniker: 'Refined',
        context: {
          genesisTx: 'Stand-alone',
          renaissanceTx: 'yellow',
          genesisTime: '2019-01-25T07:59:10.258Z',
          renaissanceTime: '2019-01-25T07:59:10.258Z'
        },
        migratedTo: 'Investor',
        migratedFrom: [
          'reboot',
          'Music'
        ],
        numAssets: 97132,
        stake: {
          totalStakes: '67336',
          totalUnstakes: '16306',
          totalReceivedStakes: '60321',
          recentStakes: {
            items: [
              {
                type_url: 'Frozen',
                value: Uint8Array [
                  127
                ]
              },
              {
                type_url: 'seize',
                value: Uint8Array [
                  137
                ]
              }
            ],
            typeUrl: 'needs-based',
            maxItems: 45162,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              {
                type_url: 'parse',
                value: Uint8Array [
                  53
                ]
              },
              {
                type_url: 'withdrawal',
                value: Uint8Array [
                  175
                ]
              }
            ],
            typeUrl: 'Industrial',
            maxItems: 85861,
            circular: undefined,
            fifo: undefined
          }
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 15,
            address: 0
          }
        }
      }
    ]
  }
});

// output
{
  verifyTx: {
    code: 4
  }
}
```

### processOne

```js
const result = await client.processOne({
  verifyTx: {
    tx: {
      from: 'f1dd44d7d4a84bda42818a67af339f4d0c78ac2f',
      nonce: 42796,
      signature: Uint8Array [
        69
      ],
      chainId: 82539,
      signatures: [
        {
          key: Uint8Array [
            191
          ],
          value: Uint8Array [
            51
          ]
        },
        {
          key: Uint8Array [
            218
          ],
          value: Uint8Array [
            18
          ]
        }
      ],
      itx: {
        type: 'WalletType',
        value: {
          pk: 0,
          hash: 2,
          address: 1
        }
      }
    },
    sender: {
      balance: '92407',
      nonce: 51028,
      numTxs: 83694,
      address: '721b6c53da69c558531aae48f30c5870b7291ecb',
      pk: Uint8Array [
        85
      ],
      type: {
        pk: 0,
        hash: 7,
        address: 0
      },
      moniker: 'pink',
      context: {
        genesisTx: 'Montana',
        renaissanceTx: 'Gloves',
        genesisTime: '2019-01-25T07:59:10.259Z',
        renaissanceTime: '2019-01-25T07:59:10.259Z'
      },
      migratedTo: 'asynchronous',
      migratedFrom: [
        'Bolivar Fuerte',
        'River'
      ],
      numAssets: 51217,
      stake: {
        totalStakes: '13377',
        totalUnstakes: '74370',
        totalReceivedStakes: '54247',
        recentStakes: {
          items: [
            {
              type_url: 'virtual',
              value: Uint8Array [
                74
              ]
            },
            {
              type_url: 'Guyana',
              value: Uint8Array [
                148
              ]
            }
          ],
          typeUrl: 'Haiti',
          maxItems: 72812,
          circular: undefined,
          fifo: undefined
        },
        recentReceivedStakes: {
          items: [
            {
              type_url: 'Tasty',
              value: Uint8Array [
                255
              ]
            },
            {
              type_url: 'Configuration',
              value: Uint8Array [
                49
              ]
            }
          ],
          typeUrl: 'frictionless',
          maxItems: 54051,
          circular: undefined,
          fifo: undefined
        }
      },
      data: {
        type: 'WalletType',
        value: {
          pk: 1,
          hash: 2,
          address: 1
        }
      }
    },
    states: [
      {
        balance: '55330',
        nonce: 70596,
        numTxs: 24825,
        address: 'b1029eb84175a566a0936912d2a3056f13fdb7a5',
        pk: Uint8Array [
          195
        ],
        type: {
          pk: 1,
          hash: 9,
          address: 0
        },
        moniker: 'Small',
        context: {
          genesisTx: 'Avon',
          renaissanceTx: 'Causeway',
          genesisTime: '2019-01-25T07:59:10.259Z',
          renaissanceTime: '2019-01-25T07:59:10.259Z'
        },
        migratedTo: 'convergence',
        migratedFrom: [
          'Representative',
          'plum'
        ],
        numAssets: 74746,
        stake: {
          totalStakes: '97705',
          totalUnstakes: '82078',
          totalReceivedStakes: '19420',
          recentStakes: {
            items: [
              {
                type_url: 'incentivize',
                value: Uint8Array [
                  74
                ]
              },
              {
                type_url: 'Islands',
                value: Uint8Array [
                  84
                ]
              }
            ],
            typeUrl: 'alarm',
            maxItems: 54210,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              {
                type_url: 'Massachusetts',
                value: Uint8Array [
                  247
                ]
              },
              {
                type_url: 'Facilitator',
                value: Uint8Array [
                  174
                ]
              }
            ],
            typeUrl: 'extensible',
            maxItems: 44125,
            circular: undefined,
            fifo: undefined
          }
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 1,
            address: 1
          }
        }
      },
      {
        balance: '51828',
        nonce: 9787,
        numTxs: 60669,
        address: '079b64ee30b4b8206ca587bcc804faa363e650d3',
        pk: Uint8Array [
          111
        ],
        type: {
          pk: 1,
          hash: 9,
          address: 0
        },
        moniker: 'integrate',
        context: {
          genesisTx: 'capacitor',
          renaissanceTx: 'one-to-one',
          genesisTime: '2019-01-25T07:59:10.260Z',
          renaissanceTime: '2019-01-25T07:59:10.260Z'
        },
        migratedTo: 'bluetooth',
        migratedFrom: [
          'transmitting',
          'Extension'
        ],
        numAssets: 54372,
        stake: {
          totalStakes: '33002',
          totalUnstakes: '78542',
          totalReceivedStakes: '65091',
          recentStakes: {
            items: [
              {
                type_url: 'B2B',
                value: Uint8Array [
                  126
                ]
              },
              {
                type_url: 'neural',
                value: Uint8Array [
                  206
                ]
              }
            ],
            typeUrl: 'open-source',
            maxItems: 64177,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              {
                type_url: 'Legacy',
                value: Uint8Array [
                  197
                ]
              },
              {
                type_url: 'East Caribbean Dollar',
                value: Uint8Array [
                  166
                ]
              }
            ],
            typeUrl: 'Berkshire',
            maxItems: 71312,
            circular: undefined,
            fifo: undefined
          }
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 7,
            address: 0
          }
        }
      }
    ]
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  verifyTx: {
    code: 20
  }
}
});
```

### recoverWallet

```js
const result = await client.recoverWallet({
  data: Uint8Array [
    33
  ],
  type: {
    pk: 0,
    hash: 7,
    address: 1
  },
  passphrase: 'deposit',
  moniker: 'Fantastic Metal Cheese'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 5,
  token: 'SMS',
  wallet: {
    type: {
      pk: 1,
      hash: 7,
      address: 0
    },
    sk: Uint8Array [
      233
    ],
    pk: Uint8Array [
      206
    ],
    address: '6c938a956bec8ac897198a01029dc8145317dbd5'
  }
}
});
```

### removeWallet

```js
const result = await client.removeWallet({
  address: '1593452f16f309e86af313f4506c1261f7f7269b'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 16
}
});
```

### search

```js
const result = await client.search({
  key: 'Product',
  value: 'AI'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 3,
  txs: [
    {
      tx: {
        from: '83d8c146cada3dce4857db460e9d4664c4afd0f5',
        nonce: 39250,
        signature: Uint8Array [
          50
        ],
        chainId: 9316,
        signatures: [
          {
            key: Uint8Array [
              210
            ],
            value: Uint8Array [
              23
            ]
          },
          {
            key: Uint8Array [
              97
            ],
            value: Uint8Array [
              3
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 6,
            address: 1
          }
        }
      },
      height: 11630,
      index: 97434,
      hash: '17b9ffb0ddb0c3ee9f0c24bdcbf81bddb390bfdc',
      tags: [
        {
          key: Uint8Array [
            200
          ],
          value: Uint8Array [
            225
          ]
        },
        {
          key: Uint8Array [
            23
          ],
          value: Uint8Array [
            221
          ]
        }
      ]
    },
    {
      tx: {
        from: 'fbb4069bb294ef943c7c1bc32096381b3c229cc6',
        nonce: 97926,
        signature: Uint8Array [
          76
        ],
        chainId: 62609,
        signatures: [
          {
            key: Uint8Array [
              152
            ],
            value: Uint8Array [
              129
            ]
          },
          {
            key: Uint8Array [
              206
            ],
            value: Uint8Array [
              52
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 2,
            address: 1
          }
        }
      },
      height: 9000,
      index: 8736,
      hash: '168edd94ce1560a9ec707a1cc45c511ff14ed1e6',
      tags: [
        {
          key: Uint8Array [
            168
          ],
          value: Uint8Array [
            124
          ]
        },
        {
          key: Uint8Array [
            128
          ],
          value: Uint8Array [
            79
          ]
        }
      ]
    }
  ]
}
});
```

### sendTx

```js
const result = await client.sendTx({
  tx: {
    from: 'cfb14419c033c8f85dc064d775963f70a5c4226f',
    nonce: 88519,
    signature: Uint8Array [
      90
    ],
    chainId: 39364,
    signatures: [
      {
        key: Uint8Array [
          127
        ],
        value: Uint8Array [
          101
        ]
      },
      {
        key: Uint8Array [
          125
        ],
        value: Uint8Array [
          113
        ]
      }
    ],
    itx: {
      type: 'WalletType',
      value: {
        pk: 0,
        hash: 9,
        address: 0
      }
    }
  },
  wallet: {
    type: {
      pk: 1,
      hash: 6,
      address: 1
    },
    sk: Uint8Array [
      155
    ],
    pk: Uint8Array [
      140
    ],
    address: 'cae8147e61b988f39672626a8576e7867cbf7f3a'
  },
  token: '1080p',
  commit: undefined
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 2,
  hash: 'e63f485d2c225bc8b8b3146eb5a3697772cfaef7'
}
});
```

### storeFile

```js
const result = await client.storeFile({
  chunk: Uint8Array [
    84
  ]
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 9,
  hash: 'd204433901051005d1b9a0253b4ecad8f7922fbc'
}
});
```

### subscribe

```js
const stream = client.subscribe({
  type: 1,
  filter: 'Practical'
});

// output
{
  topic: 'throughput'
}
```

### unsubscribe

```js
const result = await client.unsubscribe({
  topic: 'RSS'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 32
}
});
```


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |
