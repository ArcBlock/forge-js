# API Documentation


## Table of Contents

* [Enums](#enums)
  * [StatusCode](#statuscode)
  * [TopicType](#topictype)
  * [KeyType](#keytype)
  * [HashType](#hashtype)
  * [EncodingType](#encodingtype)
  * [RoleType](#roletype)
  * [UpgradeType](#upgradetype)
  * [UpgradeAction](#upgradeaction)
  * [StateType](#statetype)
  * [StakeType](#staketype)
  * [Direction](#direction)
  * [SupportedTxs](#supportedtxs)
  * [SupportedStakes](#supportedstakes)
* [RPC Methods](#rpc-methods)
  * [createTx](#createtx)
  * [createWallet](#createwallet)
  * [declareNode](#declarenode)
  * [getAccountState](#getaccountstate)
  * [getAssetAddress](#getassetaddress)
  * [getAssetState](#getassetstate)
  * [getAssets](#getassets)
  * [getBlock](#getblock)
  * [getBlocks](#getblocks)
  * [getChainInfo](#getchaininfo)
  * [getConfig](#getconfig)
  * [getForgeState](#getforgestate)
  * [getForgeStatistics](#getforgestatistics)
  * [getNetInfo](#getnetinfo)
  * [getNodeInfo](#getnodeinfo)
  * [getStakeState](#getstakestate)
  * [getStakes](#getstakes)
  * [getTopAccounts](#gettopaccounts)
  * [getTx](#gettx)
  * [getUnconfirmedTxs](#getunconfirmedtxs)
  * [getValidatorsInfo](#getvalidatorsinfo)
  * [listAssetTransactions](#listassettransactions)
  * [listTransactions](#listtransactions)
  * [listWallet](#listwallet)
  * [loadFile](#loadfile)
  * [loadWallet](#loadwallet)
  * [multisig](#multisig)
  * [pinFile](#pinfile)
  * [process](#process)
  * [processOne](#processone)
  * [recoverWallet](#recoverwallet)
  * [removeWallet](#removewallet)
  * [search](#search)
  * [sendTx](#sendtx)
  * [signData](#signdata)
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
  EXPIRED_TX: 10,
  INVALID_MONIKER: 16,
  INVALID_PASSPHRASE: 17,
  INVALID_MULTISIG: 20,
  INVALID_WALLET: 21,
  INVALID_CHAIN_ID: 22,
  CONSENSUS_RPC_ERROR: 24,
  STORAGE_RPC_ERROR: 25,
  NOENT: 26,
  ACCOUNT_MIGRATED: 27,
  UNSUPPORTED_STAKE: 30,
  INSUFFICIENT_STAKE: 31,
  INVALID_STAKE_STATE: 32,
  EXPIRED_WALLET_TOKEN: 33,
  BANNED_UNSTAKE: 34,
  INVALID_ASSET: 35,
  INVALID_TX_SIZE: 36,
  INVALID_SIGNER_STATE: 37,
  INVALID_FORGE_STATE: 38,
  EXPIRED_ASSET: 39,
  UNTRANSFERRABLE_ASSET: 40,
  READONLY_ASSET: 41,
  CONSUMED_ASSET: 42,
  FORBIDDEN: 403,
  INTERNAL: 500,
  TIMEOUT: 504
}
```

### TopicType

```js
{
  TRANSFER: 0,
  EXCHANGE: 1,
  DECLARE: 2,
  CREATE_ASSET: 3,
  UPDATE_ASSET: 4,
  STAKE: 5,
  ACCOUNT_MIGRATE: 6,
  BEGIN_BLOCK: 16,
  END_BLOCK: 17,
  CONSENSUS_UPGRADE: 21,
  DECLARE_FILE: 22,
  SYS_UPGRADE: 23,
  APPLICATION: 24,
  CONSUME_ASSET: 25,
  POKE: 26,
  ACCOUNT_STATE: 129,
  ASSET_STATE: 130,
  FORGE_STATE: 131,
  STAKE_STATE: 132
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
  KECCAK_384: 6,
  SHA3_384: 7,
  KECCAK_512: 13,
  SHA3_512: 14
}
```

### EncodingType

```js
{
  BASE16: 0,
  BASE58: 1
}
```

### RoleType

```js
{
  ROLE_ACCOUNT: 0,
  ROLE_NODE: 1,
  ROLE_DEVICE: 2,
  ROLE_APPLICATION: 3,
  ROLE_SMART_CONTRACT: 4,
  ROLE_BOT: 5,
  ROLE_ASSET: 6,
  ROLE_STAKE: 7,
  ROLE_VALIDATOR: 8
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

### Direction

```js
{
  MUTUAL: 0,
  ONE_WAY: 1,
  UNION: 2
}
```

### SupportedTxs

```js
[
  'AccountMigrateTx',
  'ConsensusUpgradeTx',
  'ConsumeAssetTx',
  'CreateAssetTx',
  'DeclareFileTx',
  'DeclareTx',
  'ExchangeTx',
  'PokeTx',
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
    type: 'fg:x:random_data',
    value: 'ABCD 1234'
  },
  from: '7301f88b5240677d25a8abf9faa89ab90dba61f1',
  nonce: 77169,
  wallet: {
    type: {
      pk: 1,
      hash: 1,
      address: 1,
      role: 6
    },
    sk: Uint8Array [
      23
    ],
    pk: Uint8Array [
      97
    ],
    address: 'b2a249adba27e056256c22e9594bc82d2bb437e6'
  },
  token: 'salmon'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 1,
  tx: {
    from: 'a7b855cff99ad9ba4f2b3ac4e5d23f7ad139fe47',
    nonce: 89490,
    signature: Uint8Array [
      50
    ],
    chainId: 'card',
    signatures: [
      {
        signer: 'Usability',
        signature: Uint8Array [
          40
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'Checking Account',
        signature: Uint8Array [
          72
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    itx: {
      type: 'fg:x:random_data',
      value: 'ABCD 1234'
    }
  }
}
});
```

### createWallet

```js
const result = await client.createWallet({
  passphrase: 'input',
  type: {
    pk: 1,
    hash: 13,
    address: 0,
    role: 8
  },
  moniker: 'Buckinghamshire'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 21,
  token: 'Unbranded Steel Sausages',
  wallet: {
    type: {
      pk: 1,
      hash: 14,
      address: 1,
      role: 0
    },
    sk: Uint8Array [
      120
    ],
    pk: Uint8Array [
      142
    ],
    address: 'a2b537ab269006dba23f762d0a71a3b483adeb90'
  }
}
});
```

### declareNode

```js
const result = await client.declareNode({
  validator: undefined
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 31,
  wallet: {
    type: {
      pk: 0,
      hash: 6,
      address: 1,
      role: 4
    },
    sk: Uint8Array [
      132
    ],
    pk: Uint8Array [
      116
    ],
    address: 'd3e9061e22c32a9ca8c8981f29c8fb94a8c851fe'
  }
}
});
```

### getAccountState

```js
const stream = client.getAccountState({
  address: '613b9c87bd88886532da5d045e972b843b197870',
  keys: [
    'transmit',
    'AGP'
  ],
  height: 25340
});

// output
{
  code: 5,
  state: {
    balance: '21062',
    nonce: 91895,
    numTxs: 58209,
    address: '671bd74b572696708aa31a08a9e9190a6e03de41',
    pk: Uint8Array [
      165
    ],
    type: {
      pk: 1,
      hash: 7,
      address: 1,
      role: 7
    },
    moniker: 'Savings Account',
    context: {
      genesisTx: 'wireless',
      renaissanceTx: 'grey',
      genesisTime: '2019-03-13T07:20:08.291Z',
      renaissanceTime: '2019-03-13T07:20:08.291Z'
    },
    issuer: 'channels',
    migratedTo: [
      'internet solution',
      'Program'
    ],
    migratedFrom: [
      'maximized',
      'Communications'
    ],
    numAssets: 10917,
    stake: {
      totalStakes: '78368',
      totalUnstakes: '73464',
      totalReceivedStakes: '86355',
      recentStakes: {
        items: [
          Uint8Array [
            28
          ],
          Uint8Array [
            213
          ]
        ],
        typeUrl: 'Avon',
        maxItems: 35630,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [
            233
          ],
          Uint8Array [
            55
          ]
        ],
        typeUrl: 'Cotton',
        maxItems: 10123,
        circular: undefined,
        fifo: undefined
      }
    },
    pinnedFiles: {
      items: [
        Uint8Array [
          239
        ],
        Uint8Array [
          133
        ]
      ],
      typeUrl: 'Creative',
      maxItems: 13921,
      circular: undefined,
      fifo: undefined
    },
    poke: {
      dailyLimit: '12812',
      leftover: '20506',
      amount: '75835'
    },
    data: {
      type: 'fg:x:random_data',
      value: 'ABCD 1234'
    }
  }
}
```

### getAssetAddress

```js
const result = await client.getAssetAddress({
  senderAddress: 'South Carolina',
  itx: {
    moniker: 'leading edge',
    data: {
      type: 'fg:x:random_data',
      value: 'ABCD 1234'
    },
    readonly: undefined,
    transferrable: undefined,
    ttl: 71936,
    parent: 'Administrator'
  },
  walletType: {
    pk: 0,
    hash: 13,
    address: 1,
    role: 5
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 24,
  assetAddress: 'Enterprise-wide'
}
});
```

### getAssetState

```js
const stream = client.getAssetState({
  address: '4e8f19d0007fcd00d56ff0ab54be536ca17a9bfe',
  keys: [
    'Chief',
    'payment'
  ],
  height: 12162
});

// output
{
  code: 30,
  state: {
    address: 'aa5b9f90249184f3f1088cd917e21e84f39c52c3',
    owner: 'Spring',
    moniker: 'circuit',
    readonly: undefined,
    transferrable: undefined,
    ttl: 64429,
    consumedTime: '2019-03-13T07:20:08.293Z',
    issuer: 'Swedish Krona',
    stake: {
      totalStakes: '62335',
      totalUnstakes: '82159',
      totalReceivedStakes: '16056',
      recentStakes: {
        items: [
          Uint8Array [
            199
          ],
          Uint8Array [
            53
          ]
        ],
        typeUrl: 'Fantastic Rubber Chips',
        maxItems: 6461,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [
            114
          ],
          Uint8Array [
            157
          ]
        ],
        typeUrl: 'channels',
        maxItems: 17179,
        circular: undefined,
        fifo: undefined
      }
    },
    context: {
      genesisTx: 'Plastic',
      renaissanceTx: 'e-enable',
      genesisTime: '2019-03-13T07:20:08.293Z',
      renaissanceTime: '2019-03-13T07:20:08.293Z'
    },
    data: {
      type: 'fg:x:random_data',
      value: 'ABCD 1234'
    }
  }
}
```

### getAssets

```js
const result = await client.getAssets({
  paging: {
    cursor: 'Sausages',
    size: 17311,
    order: [
      {
        field: 'overriding',
        type: 'Silver'
      },
      {
        field: 'Fundamental',
        type: 'TCP'
      }
    ]
  },
  ownerAddress: 'SMS'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 3,
  page: {
    cursor: 'Small',
    next: undefined,
    total: 21968
  },
  assets: [
    {
      address: 'fd4f615c9f7a2e10bb98960bcfb57463090d8596',
      owner: 'Salad',
      genesisTime: 'Awesome',
      renaissanceTime: 'Practical Concrete Ball',
      moniker: 'Frozen',
      readonly: undefined
    },
    {
      address: '8b3a8fea7e72240e07d1cc384d5a5062ed3871e4',
      owner: 'microchip',
      genesisTime: 'Bike',
      renaissanceTime: 'Missouri',
      moniker: 'array',
      readonly: undefined
    }
  ]
}
});
```

### getBlock

```js
const stream = client.getBlock({
  height: 23924
});

// output
{
  code: 31,
  block: {
    height: 11029,
    numTxs: 78643,
    time: '2019-03-13T07:20:08.294Z',
    appHash: '1a1593304133ce469967ad2eb2ad53b964e2c4aa',
    proposer: '7fc8d38fb3aeede9ef06b1d7ea0b65b60f079770',
    txs: [
      {
        tx: {
          from: 'e93d518cdd5022dcde9404de2e285c2f0c295085',
          nonce: 3157,
          signature: Uint8Array [
            134
          ],
          chainId: 'radical',
          signatures: [
            {
              signer: 'Manors',
              signature: Uint8Array [
                0
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'compressing',
              signature: Uint8Array [
                247
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            }
          ],
          itx: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        height: 42484,
        index: 86639,
        hash: '7d42925de5f49011a0c5ee782d33051aa7091d8a',
        tags: [
          {
            key: Uint8Array [
              36
            ],
            value: Uint8Array [
              19
            ]
          },
          {
            key: Uint8Array [
              180
            ],
            value: Uint8Array [
              233
            ]
          }
        ],
        code: 10,
        time: '2019-03-13T07:20:08.295Z',
        createAsset: {
          asset: 'Crossing'
        },
        accountMigrate: {
          address: 'a65c9cd4ef5a954bed10ce00d9573df46823fb8e'
        }
      },
      {
        tx: {
          from: 'd31477efb22f6e882e45d9ea9d47e7fa050bd230',
          nonce: 63972,
          signature: Uint8Array [
            225
          ],
          chainId: 'redundant',
          signatures: [
            {
              signer: 'solution',
              signature: Uint8Array [
                109
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'Bulgarian Lev',
              signature: Uint8Array [
                185
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            }
          ],
          itx: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        height: 36936,
        index: 1638,
        hash: '097961a5ceac75ac61338d7a9ffc1810c62a1588',
        tags: [
          {
            key: Uint8Array [
              225
            ],
            value: Uint8Array [
              168
            ]
          },
          {
            key: Uint8Array [
              184
            ],
            value: Uint8Array [
              214
            ]
          }
        ],
        code: 30,
        time: '2019-03-13T07:20:08.295Z',
        createAsset: {
          asset: 'Illinois'
        },
        accountMigrate: {
          address: '8519a6ea0f55f325e2ff919f07b3aeecdb5f3bcc'
        }
      }
    ],
    totalTxs: 68044,
    invalidTxs: [
      {
        tx: {
          from: 'ce043f81f63346ce67a5b9376cae6b17f0d477c8',
          nonce: 60360,
          signature: Uint8Array [
            244
          ],
          chainId: 'Rustic Plastic Towels',
          signatures: [
            {
              signer: 'Cuban Peso Peso Convertible',
              signature: Uint8Array [
                144
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'Intelligent Metal Sausages',
              signature: Uint8Array [
                97
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            }
          ],
          itx: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        height: 28889,
        index: 79688,
        hash: '7b3f00397b1b0d9383fcb4a97846d56bb6738acb',
        tags: [
          {
            key: Uint8Array [
              77
            ],
            value: Uint8Array [
              92
            ]
          },
          {
            key: Uint8Array [
              59
            ],
            value: Uint8Array [
              211
            ]
          }
        ],
        code: 16,
        time: '2019-03-13T07:20:08.296Z',
        createAsset: {
          asset: 'virtual'
        },
        accountMigrate: {
          address: '2c9531bb97d53af23b8a225e2287f4fb2c2d961f'
        }
      },
      {
        tx: {
          from: '27c04e04451ca439d4904a2b0ac937e4fd03c3ed',
          nonce: 26689,
          signature: Uint8Array [
            15
          ],
          chainId: 'Cambridgeshire',
          signatures: [
            {
              signer: 'Developer',
              signature: Uint8Array [
                165
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'Ergonomic',
              signature: Uint8Array [
                202
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            }
          ],
          itx: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        height: 39841,
        index: 23012,
        hash: 'ddf62cbef4ce8d7655a6409a7dc2ec48bad245a3',
        tags: [
          {
            key: Uint8Array [
              19
            ],
            value: Uint8Array [
              8
            ]
          },
          {
            key: Uint8Array [
              171
            ],
            value: Uint8Array [
              114
            ]
          }
        ],
        code: 27,
        time: '2019-03-13T07:20:08.296Z',
        createAsset: {
          asset: 'Concrete'
        },
        accountMigrate: {
          address: '3077e4343923cc31c140249767f99f08e806217e'
        }
      }
    ],
    txsHashes: [
      'viral',
      'Concrete'
    ],
    invalidTxsHashes: [
      'Awesome Frozen Fish',
      'hacking'
    ]
  }
}
```

### getBlocks

```js
const result = await client.getBlocks({
  paging: {
    cursor: 'Self-enabling',
    size: 17159,
    order: [
      {
        field: 'Integration',
        type: 'white'
      },
      {
        field: 'functionalities',
        type: 'HDD'
      }
    ]
  },
  minHeight: 50895,
  maxHeight: 49838,
  emptyExcluded: undefined
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 403,
  page: {
    cursor: 'policy',
    next: undefined,
    total: 7809
  },
  blocks: [
    {
      height: 49092,
      numTxs: 98254,
      time: '2019-03-13T07:20:08.297Z',
      appHash: '875c6306729e8505fe5ac0c7fe8df2fbb9e70e65',
      proposer: 'ec98754a79c7310093c536b23a17048d0f5d1a56',
      txs: [
        {
          tx: {
            from: '4dced8b0bfd9107c891dfab076fb94d2ccff00b2',
            nonce: 9889,
            signature: Uint8Array [
              227
            ],
            chainId: 'Sleek Rubber Pizza',
            signatures: [
              {
                signer: 'Investment Account',
                signature: Uint8Array [
                  249
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Global',
                signature: Uint8Array [
                  48
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              }
            ],
            itx: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          height: 8230,
          index: 73666,
          hash: '87818755307ee12737c4653df782d823e00ea323',
          tags: [
            {
              key: Uint8Array [
                203
              ],
              value: Uint8Array [
                73
              ]
            },
            {
              key: Uint8Array [
                138
              ],
              value: Uint8Array [
                157
              ]
            }
          ],
          code: 22,
          time: '2019-03-13T07:20:08.297Z',
          createAsset: {
            asset: 'technologies'
          },
          accountMigrate: {
            address: '8373695892df1502e6822c12d29fb8b0609d0728'
          }
        },
        {
          tx: {
            from: 'bd5373dc4e5e641e66d01c5c9f6abee4ca6f5046',
            nonce: 80098,
            signature: Uint8Array [
              29
            ],
            chainId: 'Intelligent Metal Mouse',
            signatures: [
              {
                signer: 'District',
                signature: Uint8Array [
                  247
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Direct',
                signature: Uint8Array [
                  46
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              }
            ],
            itx: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          height: 81781,
          index: 30126,
          hash: 'b4eb4edffa7a7da33bcf5f97140ff18d72c85cea',
          tags: [
            {
              key: Uint8Array [
                214
              ],
              value: Uint8Array [
                187
              ]
            },
            {
              key: Uint8Array [
                215
              ],
              value: Uint8Array [
                247
              ]
            }
          ],
          code: 32,
          time: '2019-03-13T07:20:08.297Z',
          createAsset: {
            asset: 'connecting'
          },
          accountMigrate: {
            address: 'fb7f40e3d93d89da648fdaed6da8a44c5356fff9'
          }
        }
      ],
      totalTxs: 19416,
      invalidTxs: [
        {
          tx: {
            from: 'a03fd6f5d87f6bb7d596426123601a351a4134e5',
            nonce: 42118,
            signature: Uint8Array [
              201
            ],
            chainId: 'matrix',
            signatures: [
              {
                signer: 'Specialist',
                signature: Uint8Array [
                  84
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Nevada',
                signature: Uint8Array [
                  98
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              }
            ],
            itx: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          height: 92684,
          index: 83081,
          hash: 'd756f6593996f342edcc19c2767e8a2266c8a807',
          tags: [
            {
              key: Uint8Array [
                111
              ],
              value: Uint8Array [
                255
              ]
            },
            {
              key: Uint8Array [
                69
              ],
              value: Uint8Array [
                150
              ]
            }
          ],
          code: 17,
          time: '2019-03-13T07:20:08.298Z',
          createAsset: {
            asset: 'optical'
          },
          accountMigrate: {
            address: 'c429ed5e4c49aa9380ed578f1400c44252d5ba46'
          }
        },
        {
          tx: {
            from: '1511a76e7feef8aab457ccd9c2e671028fa44264',
            nonce: 20368,
            signature: Uint8Array [
              45
            ],
            chainId: 'Colorado',
            signatures: [
              {
                signer: 'Ergonomic Steel Cheese',
                signature: Uint8Array [
                  229
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Argentina',
                signature: Uint8Array [
                  162
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              }
            ],
            itx: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          height: 92410,
          index: 28277,
          hash: 'a3ed6cf2d75f4c64ccea629d4fd4e37fa21b6169',
          tags: [
            {
              key: Uint8Array [
                64
              ],
              value: Uint8Array [
                129
              ]
            },
            {
              key: Uint8Array [
                52
              ],
              value: Uint8Array [
                191
              ]
            }
          ],
          code: 21,
          time: '2019-03-13T07:20:08.299Z',
          createAsset: {
            asset: 'Multi-layered'
          },
          accountMigrate: {
            address: 'f500ab4831261f467fe85c540f9deb15b4e4da34'
          }
        }
      ],
      txsHashes: [
        'interface',
        'New York'
      ],
      invalidTxsHashes: [
        'connect',
        'target'
      ]
    },
    {
      height: 56495,
      numTxs: 85553,
      time: '2019-03-13T07:20:08.299Z',
      appHash: 'f4ff699092950eca6293048f552931fdb5fb79c9',
      proposer: 'a9d5af053355db5e10a7bfa837dbb043d9c76224',
      txs: [
        {
          tx: {
            from: '28ff3cf39e031dd0b6e1c1d6fbc2128248d23c29',
            nonce: 75347,
            signature: Uint8Array [
              111
            ],
            chainId: 'Mauritius',
            signatures: [
              {
                signer: 'Implemented',
                signature: Uint8Array [
                  242
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'cohesive',
                signature: Uint8Array [
                  34
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              }
            ],
            itx: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          height: 44183,
          index: 1125,
          hash: '4acf47181869f4e43526208cfdab482a149babc7',
          tags: [
            {
              key: Uint8Array [
                243
              ],
              value: Uint8Array [
                213
              ]
            },
            {
              key: Uint8Array [
                237
              ],
              value: Uint8Array [
                255
              ]
            }
          ],
          code: 17,
          time: '2019-03-13T07:20:08.299Z',
          createAsset: {
            asset: 'Public-key'
          },
          accountMigrate: {
            address: 'e30fb2e11ca8026727fc09a110c5bf554ca76b94'
          }
        },
        {
          tx: {
            from: '157f77affa4ab0b77980bd2cf104c3ad627cfe5c',
            nonce: 65202,
            signature: Uint8Array [
              155
            ],
            chainId: 'calculate',
            signatures: [
              {
                signer: 'Seychelles Rupee',
                signature: Uint8Array [
                  133
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Paradigm',
                signature: Uint8Array [
                  173
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              }
            ],
            itx: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          height: 97812,
          index: 38115,
          hash: '4442197ae1528bf230bc7bc47de1f72910694e58',
          tags: [
            {
              key: Uint8Array [
                72
              ],
              value: Uint8Array [
                3
              ]
            },
            {
              key: Uint8Array [
                22
              ],
              value: Uint8Array [
                141
              ]
            }
          ],
          code: 26,
          time: '2019-03-13T07:20:08.300Z',
          createAsset: {
            asset: 'mission-critical'
          },
          accountMigrate: {
            address: '5a7280162aea3fd2c2e7609acbf5dcd0f77b8607'
          }
        }
      ],
      totalTxs: 37395,
      invalidTxs: [
        {
          tx: {
            from: '9167cddbfae4659527ac04cc7933ab93658e8fce',
            nonce: 38159,
            signature: Uint8Array [
              38
            ],
            chainId: 'AI',
            signatures: [
              {
                signer: 'primary',
                signature: Uint8Array [
                  243
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Kina',
                signature: Uint8Array [
                  21
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              }
            ],
            itx: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          height: 13792,
          index: 87837,
          hash: 'f26797ec3cde49f7a14fb3d44f2024d4ba534c91',
          tags: [
            {
              key: Uint8Array [
                102
              ],
              value: Uint8Array [
                160
              ]
            },
            {
              key: Uint8Array [
                24
              ],
              value: Uint8Array [
                6
              ]
            }
          ],
          code: 42,
          time: '2019-03-13T07:20:08.300Z',
          createAsset: {
            asset: 'Salad'
          },
          accountMigrate: {
            address: '348d26d3aec0a5328abd3bfc06166c36096c6220'
          }
        },
        {
          tx: {
            from: 'ba04959380eae6d28152da30f9f8a1930dbd08c9',
            nonce: 57124,
            signature: Uint8Array [
              233
            ],
            chainId: 'Customer',
            signatures: [
              {
                signer: 'deposit',
                signature: Uint8Array [
                  6
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'generate',
                signature: Uint8Array [
                  86
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              }
            ],
            itx: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          height: 65541,
          index: 97869,
          hash: '241c68dc6e8d9d03871e4a8589b3fd832235c314',
          tags: [
            {
              key: Uint8Array [
                154
              ],
              value: Uint8Array [
                58
              ]
            },
            {
              key: Uint8Array [
                115
              ],
              value: Uint8Array [
                147
              ]
            }
          ],
          code: 24,
          time: '2019-03-13T07:20:08.301Z',
          createAsset: {
            asset: 'Unbranded Fresh Cheese'
          },
          accountMigrate: {
            address: 'b080c62b13f31ec834719dd5315d634a619361d1'
          }
        }
      ],
      txsHashes: [
        'Chilean Peso Unidades de fomento',
        'Coordinator'
      ],
      invalidTxsHashes: [
        'Oregon',
        'ROI'
      ]
    }
  ]
}
});
```

### getChainInfo

```js
const result = await client.getChainInfo({});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 22,
  info: {
    id: 'Vermont',
    network: 'Savings Account',
    moniker: 'hack',
    consensusVersion: 'Architect',
    synced: undefined,
    appHash: '61836f771997ea03b0c08f799c229b515845734d',
    blockHash: Uint8Array [
      67
    ],
    blockHeight: 42021,
    blockTime: '2019-03-13T07:20:08.302Z',
    address: 'c726749432cde2aa003404dd5d9d34b908323e59',
    votingPower: 49843,
    totalTxs: 77172,
    version: 'Wooden',
    dataVersion: 'Dynamic',
    forgeAppsVersion: {
      recontextualize: 'Tonga'
    },
    supportedTxs: [
      'innovative',
      'Credit Card Account'
    ]
  }
}
});
```

### getConfig

```js
const result = await client.getConfig({});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 35,
  config: 'override'
}
});
```

### getForgeState

```js
const result = await client.getForgeState({
  keys: [
    'Costa Rican Colon',
    'HTTP'
  ],
  height: 24117
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 35,
  state: {
    address: '4f86b3f17601e08266c43c0a9492615b7c181d48',
    consensus: {
      maxBytes: 15851,
      maxGas: 9541,
      maxValidators: 82161,
      maxCandidates: 21673,
      pubKeyTypes: [
        'Adaptive',
        'synthesize'
      ],
      validators: [
        {
          address: '63530679a48db91f969198a4588ea89b50cde6a6',
          power: 88554
        },
        {
          address: '4abe7d6d6d036e6dbab2a04be1f188d4f95c1839',
          power: 67968
        }
      ],
      validatorChanged: undefined,
      paramChanged: undefined
    },
    tasks: {
      '3729': {
        item: [
          {
            type: 14,
            dataHash: 'utilisation',
            actions: [
              undefined,
              undefined
            ]
          },
          {
            type: 12,
            dataHash: 'Integration',
            actions: [
              undefined,
              undefined
            ]
          }
        ]
      }
    },
    stakeSummary: {
      '18447': {
        totalStakes: '37646',
        totalUnstakes: '54108',
        context: {
          genesisTx: 'pink',
          renaissanceTx: 'Music',
          genesisTime: '2019-03-13T07:20:08.303Z',
          renaissanceTime: '2019-03-13T07:20:08.303Z'
        }
      }
    },
    version: 'structure',
    dataVersion: 'Barbados Dollar',
    forgeAppHash: Uint8Array [
      212
    ],
    token: {
      name: 'Maldives',
      symbol: 'Central',
      unit: 'bifurcated',
      description: 'payment',
      icon: Uint8Array [
        57
      ],
      decimal: 31223,
      initialSupply: 78853,
      totalSupply: 9562,
      inflationRate: 46147
    },
    data: {
      type: 'fg:x:random_data',
      value: 'ABCD 1234'
    }
  }
}
});
```

### getForgeStatistics

```js
const result = await client.getForgeStatistics({
  dayInfo: {
    startDate: 'Gorgeous Soft Pants',
    endDate: 'ivory'
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 42,
  forgeStatistics: {
    numBlocks: [
      20322,
      52501
    ],
    numTxs: [
      99247,
      36683
    ],
    numStakes: [
      '75262',
      '63247'
    ],
    numValidators: [
      12007,
      39238
    ],
    numAccountMigrateTxs: [
      90678,
      39158
    ],
    numCreateAssetTxs: [
      71656,
      95514
    ],
    numConsensusUpgradeTxs: [
      23748,
      49178
    ],
    numDeclareTxs: [
      26127,
      60478
    ],
    numDeclareFileTxs: [
      87413,
      90805
    ],
    numExchangeTxs: [
      20744,
      18785
    ],
    numStakeTxs: [
      60317,
      126
    ],
    numSysUpgradeTxs: [
      94735,
      66106
    ],
    numTransferTxs: [
      33696,
      1724
    ],
    numUpdateAssetTxs: [
      75726,
      905
    ],
    numConsumeAssetTxs: [
      86250,
      40662
    ],
    numPokeTxs: [
      82817,
      527
    ]
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
  code: 24,
  netInfo: {
    listening: undefined,
    listeners: [
      'Chips',
      'Marketing'
    ],
    nPeers: 55605,
    peers: [
      {
        id: 'FTP',
        network: 'Multi-lateral',
        consensusVersion: 'application',
        moniker: 'bluetooth',
        ip: 'Refined',
        geoInfo: {
          city: 'Marketing',
          country: 'optimizing',
          latitude: 73169.65,
          longitude: 72183.46
        }
      },
      {
        id: 'Data',
        network: 'enhance',
        consensusVersion: 'override',
        moniker: 'e-tailers',
        ip: 'Fresh',
        geoInfo: {
          city: 'Principal',
          country: 'Function-based',
          latitude: 76112.86,
          longitude: 62701.66
        }
      }
    ]
  }
}
});
```

### getNodeInfo

```js
const result = await client.getNodeInfo({});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 2,
  info: {
    id: 'Lesotho',
    network: 'next-generation',
    moniker: 'copying',
    consensusVersion: 'Director',
    synced: undefined,
    appHash: '1341fb6869fad9102f5d3b915b131f990fef3b55',
    blockHash: Uint8Array [
      203
    ],
    blockHeight: 76394,
    blockTime: '2019-03-13T07:20:08.305Z',
    address: '427f90df8dec430e0cfcfbd71dfd97a9813e1770',
    votingPower: 76457,
    totalTxs: 12181,
    version: 'Tactics',
    dataVersion: 'Serbian Dinar',
    forgeAppsVersion: {
      Identity: 'Row'
    },
    supportedTxs: [
      'deposit',
      'Berkshire'
    ],
    ip: 'Cross-platform',
    geoInfo: {
      city: 'Expanded',
      country: 'static',
      latitude: 37532.57,
      longitude: 27468.49
    }
  }
}
});
```

### getStakeState

```js
const stream = client.getStakeState({
  address: '89acb314fd73b82214606b92dda9c8c6f124658c',
  keys: [
    'Money Market Account',
    'Loop'
  ],
  height: 47366
});

// output
{
  code: 17,
  state: {
    address: '3329abffa0296f85ca7554ef7344ead840caa0d7',
    from: 'e867a8f3bc76a11f50c71c31869cbf92f5357f4f',
    to: '3f7c158c72678be55499ef92cbb23d633b76721e',
    balance: '85062',
    message: 'navigating',
    context: {
      genesisTx: 'Mexico',
      renaissanceTx: 'Dynamic',
      genesisTime: '2019-03-13T07:20:08.305Z',
      renaissanceTime: '2019-03-13T07:20:08.305Z'
    },
    data: {
      type: 'fg:x:random_data',
      value: 'ABCD 1234'
    }
  }
}
```

### getStakes

```js
const result = await client.getStakes({
  paging: {
    cursor: 'back up',
    size: 45822,
    order: [
      {
        field: 'Wooden',
        type: 'high-level'
      },
      {
        field: 'strategic',
        type: 'Rustic'
      }
    ]
  },
  addressFilter: {
    sender: 'Clothing',
    receiver: 'payment',
    direction: 0
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 9,
  page: {
    cursor: 'Handcrafted',
    next: undefined,
    total: 95316
  },
  stakes: [
    {
      address: '89c2abc6d27a76096b9804f339b80fbf84f3f69b',
      balance: '73313',
      sender: 'Plains',
      receiver: 'salmon',
      genesisTime: 'Granite',
      renaissanceTime: 'SQL',
      message: 'Buckinghamshire',
      type: 70621
    },
    {
      address: '2a36da7bd86dfcf6ad56e6503229fc3a195ec3a0',
      balance: '68472',
      sender: 'Delaware',
      receiver: 'haptic',
      genesisTime: 'Tasty',
      renaissanceTime: 'contingency',
      message: 'Personal Loan Account',
      type: 28095
    }
  ]
}
});
```

### getTopAccounts

```js
const result = await client.getTopAccounts({
  paging: {
    cursor: 'Assurance',
    size: 10745,
    order: [
      {
        field: 'fuchsia',
        type: 'TCP'
      },
      {
        field: 'Virginia',
        type: 'payment'
      }
    ]
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 25,
  page: {
    cursor: 'override',
    next: undefined,
    total: 88222
  },
  accounts: [
    {
      address: 'fc7b8b80875698c85cb0e0b783aa1f144daa85b9',
      balance: '42250',
      numAssets: 66518,
      numTxs: 82787,
      nonce: 35746,
      genesisTime: 'system',
      renaissanceTime: 'synthesizing',
      moniker: 'needs-based',
      migratedFrom: 'Communications',
      migratedTo: 'Checking Account',
      totalReceivedStakes: '89960',
      totalStakes: '30319',
      totalUnstakes: '83700',
      recentNumTxs: [
        9644,
        44004
      ]
    },
    {
      address: 'c2bbd47e6dfadd281d93f349db3b090978c1e002',
      balance: '20114',
      numAssets: 98608,
      numTxs: 90520,
      nonce: 85413,
      genesisTime: 'recontextualize',
      renaissanceTime: 'grow',
      moniker: 'knowledge base',
      migratedFrom: 'function',
      migratedTo: 'Group',
      totalReceivedStakes: '809',
      totalStakes: '1040',
      totalUnstakes: '79259',
      recentNumTxs: [
        41588,
        2999
      ]
    }
  ]
}
});
```

### getTx

```js
const stream = client.getTx({
  hash: '80f66220a9ed9f1f846554c5fbba770b962b478f'
});

// output
{
  code: 31,
  info: {
    tx: {
      from: '458970de21aa822cbe0f79407aadcda349501c41',
      nonce: 93432,
      signature: Uint8Array [
        75
      ],
      chainId: 'purple',
      signatures: [
        {
          signer: 'enable',
          signature: Uint8Array [
            230
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        {
          signer: 'Cotton',
          signature: Uint8Array [
            156
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        }
      ],
      itx: {
        type: 'fg:x:random_data',
        value: 'ABCD 1234'
      }
    },
    height: 77525,
    index: 62178,
    hash: 'c1fbc4acf2beac6aabb6c216cfc78ba59635725e',
    tags: [
      {
        key: Uint8Array [
          56
        ],
        value: Uint8Array [
          239
        ]
      },
      {
        key: Uint8Array [
          183
        ],
        value: Uint8Array [
          118
        ]
      }
    ],
    code: 33,
    time: '2019-03-13T07:20:08.307Z',
    createAsset: {
      asset: 'navigate'
    },
    accountMigrate: {
      address: 'c4fd0ef35ae8ef302c28c522cfb7509aa61937db'
    }
  }
}
```

### getUnconfirmedTxs

```js
const result = await client.getUnconfirmedTxs({
  limit: 88133
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 39,
  unconfirmedTxs: {
    nTxs: 14095,
    txs: [
      {
        from: '0d3c61a1a5595f1dc471c0e60d76dd8011d99c6e',
        nonce: 7552,
        signature: Uint8Array [
          111
        ],
        chainId: 'Toys',
        signatures: [
          {
            signer: 'B2C',
            signature: Uint8Array [
              22
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'compress',
            signature: Uint8Array [
              6
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          }
        ],
        itx: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        from: '7e3e844575d968743f02833e0c0d5ebef75150a4',
        nonce: 36067,
        signature: Uint8Array [
          23
        ],
        chainId: 'Home Loan Account',
        signatures: [
          {
            signer: 'maroon',
            signature: Uint8Array [
              96
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'Qatar',
            signature: Uint8Array [
              119
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          }
        ],
        itx: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
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
  code: 21,
  validatorsInfo: {
    blockHeight: 81645,
    validators: [
      {
        address: '4857d7f553932a4502ce515dee10ebad2846702b',
        pubKey: {
          type: 'Credit Card Account',
          data: Uint8Array [
            11
          ]
        },
        votingPower: 25126,
        proposerPriority: 'Clothing',
        name: 'Nebraska'
      },
      {
        address: '78a51523e3b806b4f84fb402a41d01d1a675e62a',
        pubKey: {
          type: 'Avon',
          data: Uint8Array [
            89
          ]
        },
        votingPower: 52190,
        proposerPriority: 'North Korean Won',
        name: 'evolve'
      }
    ]
  }
}
});
```

### listAssetTransactions

```js
const result = await client.listAssetTransactions({
  paging: {
    cursor: 'SCSI',
    size: 58963,
    order: [
      {
        field: 'Outdoors',
        type: 'web-readiness'
      },
      {
        field: 'Generic',
        type: 'Kids'
      }
    ]
  },
  address: '16452972f670e6256585dff52148ad9c0d2a9235'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 8,
  page: {
    cursor: 'Handcrafted',
    next: undefined,
    total: 94880
  },
  transactions: [
    {
      consumeAsset: {
        asset: 'salmon'
      }
    },
    {
      consumeAsset: {
        asset: 'plum'
      }
    }
  ]
}
});
```

### listTransactions

```js
const result = await client.listTransactions({
  paging: {
    cursor: 'Ergonomic Fresh Pizza',
    size: 58258,
    order: [
      {
        field: 'Associate',
        type: 'Up-sized'
      },
      {
        field: 'Automotive',
        type: 'Soap'
      }
    ]
  },
  timeFilter: {
    startDateTime: 'zero defect',
    endDateTime: 'Malaysian Ringgit'
  },
  addressFilter: {
    sender: 'Grocery',
    receiver: 'Liaison',
    direction: 1
  },
  typeFilter: {
    types: [
      'Unbranded Frozen Keyboard',
      'Agent'
    ]
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 504,
  page: {
    cursor: 'tan',
    next: undefined,
    total: 15813
  },
  transactions: [
    {
      consumeAsset: {
        asset: 'Object-based'
      }
    },
    {
      consumeAsset: {
        asset: 'payment'
      }
    }
  ]
}
});
```

### listWallet

```js
const stream = client.listWallet({});

// output
{
  code: 38,
  address: 'fcd3aebee7636f9ffd38449fd84a01acdbb441ac'
}
```

### loadFile

```js
const stream = client.loadFile({
  hash: 'b6717a54fdfde51d7d85be6042b5ef002ac3736d'
});

// output
{
  code: 10,
  chunk: Uint8Array [
    167
  ]
}
```

### loadWallet

```js
const result = await client.loadWallet({
  address: '43df71c489706ea5a0d71ec3e638c3522a11c06b',
  passphrase: 'EXE'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 7,
  token: 'Namibia',
  wallet: {
    type: {
      pk: 1,
      hash: 14,
      address: 1,
      role: 1
    },
    sk: Uint8Array [
      116
    ],
    pk: Uint8Array [
      132
    ],
    address: 'c58df50c78ff8569cf812705f7b3fe4839f6eec4'
  }
}
});
```

### multisig

```js
const result = await client.multisig({
  tx: {
    from: '26d26f51c6cf2ef190c0688f3a3c27c0bd823af4',
    nonce: 79278,
    signature: Uint8Array [
      149
    ],
    chainId: 'Designer',
    signatures: [
      {
        signer: 'Groves',
        signature: Uint8Array [
          54
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'Isle of Man',
        signature: Uint8Array [
          63
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    itx: {
      type: 'fg:x:random_data',
      value: 'ABCD 1234'
    }
  },
  data: {
    type: 'fg:x:random_data',
    value: 'ABCD 1234'
  },
  wallet: {
    type: {
      pk: 1,
      hash: 6,
      address: 1,
      role: 5
    },
    sk: Uint8Array [
      237
    ],
    pk: Uint8Array [
      215
    ],
    address: '6bd4425d0eaa494a7253e9110b24dca56ba84506'
  },
  token: 'Movies'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 8,
  tx: {
    from: '37bebe40eec4da89cea396f25a5fd26dfa39915a',
    nonce: 19311,
    signature: Uint8Array [
      166
    ],
    chainId: 'cross-platform',
    signatures: [
      {
        signer: 'bleeding-edge',
        signature: Uint8Array [
          187
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'robust',
        signature: Uint8Array [
          61
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    itx: {
      type: 'fg:x:random_data',
      value: 'ABCD 1234'
    }
  }
}
});
```

### pinFile

```js
const result = await client.pinFile({
  hash: '2515ea789dffb5e872f972c9b01f7d1d8548f744'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 30
}
});
```

### process

```js
const stream = client.process({
  verifyTx: {
    tx: {
      from: 'a4477cc475a1a6217fe590a9465a0ac9e8edad2b',
      nonce: 36624,
      signature: Uint8Array [
        100
      ],
      chainId: 'Checking Account',
      signatures: [
        {
          signer: 'Multi-tiered',
          signature: Uint8Array [
            154
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        {
          signer: 'Utah',
          signature: Uint8Array [
            229
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        }
      ],
      itx: {
        type: 'fg:x:random_data',
        value: 'ABCD 1234'
      }
    },
    states: [
      {
        balance: '53150',
        nonce: 16514,
        numTxs: 88063,
        address: '8aa04a1602962882123a577726b584208fe03bcf',
        pk: Uint8Array [
          175
        ],
        type: {
          pk: 0,
          hash: 13,
          address: 1,
          role: 8
        },
        moniker: 'schemas',
        context: {
          genesisTx: 'synthesize',
          renaissanceTx: 'connecting',
          genesisTime: '2019-03-13T07:20:08.311Z',
          renaissanceTime: '2019-03-13T07:20:08.311Z'
        },
        issuer: 'Regional',
        migratedTo: [
          'digital',
          'enable'
        ],
        migratedFrom: [
          'generate',
          'Intelligent'
        ],
        numAssets: 44386,
        stake: {
          totalStakes: '70189',
          totalUnstakes: '97643',
          totalReceivedStakes: '12932',
          recentStakes: {
            items: [
              Uint8Array [
                221
              ],
              Uint8Array [
                83
              ]
            ],
            typeUrl: 'scalable',
            maxItems: 51178,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                131
              ],
              Uint8Array [
                71
              ]
            ],
            typeUrl: 'transmit',
            maxItems: 26961,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              16
            ],
            Uint8Array [
              214
            ]
          ],
          typeUrl: 'TCP',
          maxItems: 47933,
          circular: undefined,
          fifo: undefined
        },
        poke: {
          dailyLimit: '91016',
          leftover: '71268',
          amount: '5618'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        balance: '82187',
        nonce: 46211,
        numTxs: 32043,
        address: '21ae0ec355fe4f224849ef012078182077f15fe2',
        pk: Uint8Array [
          45
        ],
        type: {
          pk: 0,
          hash: 13,
          address: 0,
          role: 0
        },
        moniker: 'Bedfordshire',
        context: {
          genesisTx: 'Louisiana',
          renaissanceTx: 'port',
          genesisTime: '2019-03-13T07:20:08.311Z',
          renaissanceTime: '2019-03-13T07:20:08.311Z'
        },
        issuer: 'Interactions',
        migratedTo: [
          'system-worthy',
          'metrics'
        ],
        migratedFrom: [
          'Functionality',
          'Integration'
        ],
        numAssets: 15520,
        stake: {
          totalStakes: '46605',
          totalUnstakes: '3754',
          totalReceivedStakes: '89123',
          recentStakes: {
            items: [
              Uint8Array [
                118
              ],
              Uint8Array [
                37
              ]
            ],
            typeUrl: 'ivory',
            maxItems: 58783,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                224
              ],
              Uint8Array [
                26
              ]
            ],
            typeUrl: 'neural',
            maxItems: 69025,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              203
            ],
            Uint8Array [
              126
            ]
          ],
          typeUrl: 'matrix',
          maxItems: 38142,
          circular: undefined,
          fifo: undefined
        },
        poke: {
          dailyLimit: '8025',
          leftover: '94392',
          amount: '11213'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    assets: [
      {
        address: '0ee7647c862097523720eb2c253ab44847f24950',
        owner: 'Zambia',
        moniker: 'hard drive',
        readonly: undefined,
        transferrable: undefined,
        ttl: 68727,
        consumedTime: '2019-03-13T07:20:08.312Z',
        issuer: 'compress',
        stake: {
          totalStakes: '77064',
          totalUnstakes: '49366',
          totalReceivedStakes: '4900',
          recentStakes: {
            items: [
              Uint8Array [
                106
              ],
              Uint8Array [
                84
              ]
            ],
            typeUrl: 'mesh',
            maxItems: 82047,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                171
              ],
              Uint8Array [
                53
              ]
            ],
            typeUrl: 'Intuitive',
            maxItems: 88411,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'utilize',
          renaissanceTx: 'Ridge',
          genesisTime: '2019-03-13T07:20:08.312Z',
          renaissanceTime: '2019-03-13T07:20:08.312Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: 'e8f69c39f448f602e802657c3c5df38701426c19',
        owner: 'SCSI',
        moniker: 'backing up',
        readonly: undefined,
        transferrable: undefined,
        ttl: 35302,
        consumedTime: '2019-03-13T07:20:08.312Z',
        issuer: 'Incredible',
        stake: {
          totalStakes: '41393',
          totalUnstakes: '51745',
          totalReceivedStakes: '75971',
          recentStakes: {
            items: [
              Uint8Array [
                137
              ],
              Uint8Array [
                33
              ]
            ],
            typeUrl: 'virtual',
            maxItems: 87928,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                57
              ],
              Uint8Array [
                155
              ]
            ],
            typeUrl: 'Credit Card Account',
            maxItems: 45732,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'infrastructure',
          renaissanceTx: 'Adaptive',
          genesisTime: '2019-03-13T07:20:08.312Z',
          renaissanceTime: '2019-03-13T07:20:08.312Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    stakes: [
      {
        address: 'f0c6f42fe39b4f1383a0e74f75e3aaf9895e950d',
        from: '282777c3c735535deca5bfa853fea84801049ae7',
        to: 'a74e80a40e24982c0ef4c320fc29e6bea7c0c3a9',
        balance: '37402',
        message: 'generating',
        context: {
          genesisTx: 'Refined',
          renaissanceTx: 'Streamlined',
          genesisTime: '2019-03-13T07:20:08.312Z',
          renaissanceTime: '2019-03-13T07:20:08.312Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: '459cd03728ee02bc32bfc156eb42985b3b121c4f',
        from: '0c5848e58be8536a9d5c3237dc80613741fd82b4',
        to: 'd92fe846558df1c74917243055c4aed522176137',
        balance: '26317',
        message: 'open-source',
        context: {
          genesisTx: 'withdrawal',
          renaissanceTx: 'quantify',
          genesisTime: '2019-03-13T07:20:08.312Z',
          renaissanceTime: '2019-03-13T07:20:08.312Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    context: {
      txHash: 'ccdd98ce67f046c17b4d15dc539bcd3ba4512db0',
      blockHeight: 55626,
      blockTime: '2019-03-13T07:20:08.312Z',
      totalTxs: 18038,
      txStatistics: {
        numAccountMigrateTxs: 26778,
        numCreateAssetTxs: 54883,
        numConsensusUpgradeTxs: 73936,
        numDeclareTxs: 24328,
        numDeclareFileTxs: 61034,
        numExchangeTxs: 52317,
        numStakeTxs: 88758,
        numSysUpgradeTxs: 48854,
        numTransferTxs: 68993,
        numUpdateAssetTxs: 19116,
        numConsumeAssetTxs: 14843,
        numPokeTxs: 16168
      },
      txIndex: 56824,
      lastBlockTime: '2019-03-13T07:20:08.312Z'
    },
    appState: {
      address: 'faf2a1d636ee42f8014f3f0892d9f65d892d5a57',
      consensus: {
        maxBytes: 48869,
        maxGas: 96092,
        maxValidators: 74135,
        maxCandidates: 55024,
        pubKeyTypes: [
          'payment',
          'Hat'
        ],
        validators: [
          {
            address: '7a7eb8a7f69a3e1a2b17283a4311a59f393c5f22',
            power: 217
          },
          {
            address: '6e2f7f12e8b8998e826ffd479dd7ca6844deaf3d',
            power: 50506
          }
        ],
        validatorChanged: undefined,
        paramChanged: undefined
      },
      tasks: {
        '19003': {
          item: [
            {
              type: 13,
              dataHash: 'Devolved',
              actions: [
                undefined,
                undefined
              ]
            },
            {
              type: 3,
              dataHash: 'overriding',
              actions: [
                undefined,
                undefined
              ]
            }
          ]
        }
      },
      stakeSummary: {
        '13053': {
          totalStakes: '32101',
          totalUnstakes: '20964',
          context: {
            genesisTx: 'Savings Account',
            renaissanceTx: 'Chair',
            genesisTime: '2019-03-13T07:20:08.313Z',
            renaissanceTime: '2019-03-13T07:20:08.313Z'
          }
        }
      },
      version: 'FTP',
      dataVersion: 'invoice',
      forgeAppHash: Uint8Array [
        25
      ],
      token: {
        name: 'New Taiwan Dollar',
        symbol: 'holistic',
        unit: 'generating',
        description: 'Idaho',
        icon: Uint8Array [
          168
        ],
        decimal: 28110,
        initialSupply: 11557,
        totalSupply: 14210,
        inflationRate: 85668
      },
      data: {
        type: 'fg:x:random_data',
        value: 'ABCD 1234'
      }
    }
  }
});

// output
{
  verifyTx: {
    code: 6
  }
}
```

### processOne

```js
const result = await client.processOne({
  verifyTx: {
    tx: {
      from: 'db516c229c01dcfab0454d90df4f9b4629e46232',
      nonce: 5842,
      signature: Uint8Array [
        14
      ],
      chainId: 'Hryvnia',
      signatures: [
        {
          signer: 'Forward',
          signature: Uint8Array [
            162
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        {
          signer: 'THX',
          signature: Uint8Array [
            15
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        }
      ],
      itx: {
        type: 'fg:x:random_data',
        value: 'ABCD 1234'
      }
    },
    states: [
      {
        balance: '65505',
        nonce: 34627,
        numTxs: 61896,
        address: '338f533ee764f839d9a6ec64f86808ee1dce93b9',
        pk: Uint8Array [
          252
        ],
        type: {
          pk: 0,
          hash: 0,
          address: 0,
          role: 3
        },
        moniker: 'secondary',
        context: {
          genesisTx: 'interfaces',
          renaissanceTx: 'Unbranded Concrete Chair',
          genesisTime: '2019-03-13T07:20:08.314Z',
          renaissanceTime: '2019-03-13T07:20:08.314Z'
        },
        issuer: 'Alabama',
        migratedTo: [
          'indigo',
          'Shoes'
        ],
        migratedFrom: [
          'iterate',
          'invoice'
        ],
        numAssets: 57638,
        stake: {
          totalStakes: '22243',
          totalUnstakes: '26430',
          totalReceivedStakes: '95858',
          recentStakes: {
            items: [
              Uint8Array [
                189
              ],
              Uint8Array [
                170
              ]
            ],
            typeUrl: 'strategize',
            maxItems: 22597,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                144
              ],
              Uint8Array [
                178
              ]
            ],
            typeUrl: 'deposit',
            maxItems: 56150,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              170
            ],
            Uint8Array [
              210
            ]
          ],
          typeUrl: 'Technician',
          maxItems: 14361,
          circular: undefined,
          fifo: undefined
        },
        poke: {
          dailyLimit: '47845',
          leftover: '95891',
          amount: '15394'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        balance: '67622',
        nonce: 25033,
        numTxs: 38798,
        address: '50d14d11aa22feb55b49af8359e8a24680a31926',
        pk: Uint8Array [
          81
        ],
        type: {
          pk: 0,
          hash: 6,
          address: 0,
          role: 5
        },
        moniker: 'Soap',
        context: {
          genesisTx: 'Personal Loan Account',
          renaissanceTx: 'Senior',
          genesisTime: '2019-03-13T07:20:08.314Z',
          renaissanceTime: '2019-03-13T07:20:08.314Z'
        },
        issuer: 'redundant',
        migratedTo: [
          'Compatible',
          'open architecture'
        ],
        migratedFrom: [
          'Credit Card Account',
          'Mount'
        ],
        numAssets: 34004,
        stake: {
          totalStakes: '91241',
          totalUnstakes: '64189',
          totalReceivedStakes: '97838',
          recentStakes: {
            items: [
              Uint8Array [
                66
              ],
              Uint8Array [
                179
              ]
            ],
            typeUrl: 'cross-platform',
            maxItems: 80771,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                44
              ],
              Uint8Array [
                164
              ]
            ],
            typeUrl: 'Credit Card Account',
            maxItems: 77924,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              252
            ],
            Uint8Array [
              95
            ]
          ],
          typeUrl: 'Personal Loan Account',
          maxItems: 86168,
          circular: undefined,
          fifo: undefined
        },
        poke: {
          dailyLimit: '26856',
          leftover: '5473',
          amount: '70182'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    assets: [
      {
        address: '08d3d4891ba6e56c2f683e386ef035dd4df61b14',
        owner: 'Dynamic',
        moniker: 'Markets',
        readonly: undefined,
        transferrable: undefined,
        ttl: 58248,
        consumedTime: '2019-03-13T07:20:08.314Z',
        issuer: 'Integration',
        stake: {
          totalStakes: '7477',
          totalUnstakes: '45767',
          totalReceivedStakes: '57460',
          recentStakes: {
            items: [
              Uint8Array [
                36
              ],
              Uint8Array [
                106
              ]
            ],
            typeUrl: 'Reactive',
            maxItems: 95494,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                44
              ],
              Uint8Array [
                218
              ]
            ],
            typeUrl: 'Pizza',
            maxItems: 98802,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Moldovan Leu',
          renaissanceTx: 'Identity',
          genesisTime: '2019-03-13T07:20:08.314Z',
          renaissanceTime: '2019-03-13T07:20:08.314Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: 'a64e19848ba5cb597e5afa0057f17326e3574c27',
        owner: 'Rustic Soft Soap',
        moniker: 'Personal Loan Account',
        readonly: undefined,
        transferrable: undefined,
        ttl: 12655,
        consumedTime: '2019-03-13T07:20:08.315Z',
        issuer: 'silver',
        stake: {
          totalStakes: '75573',
          totalUnstakes: '47958',
          totalReceivedStakes: '51180',
          recentStakes: {
            items: [
              Uint8Array [
                230
              ],
              Uint8Array [
                57
              ]
            ],
            typeUrl: 'Profit-focused',
            maxItems: 24322,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                20
              ],
              Uint8Array [
                81
              ]
            ],
            typeUrl: 'feed',
            maxItems: 43736,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Tuna',
          renaissanceTx: 'Japan',
          genesisTime: '2019-03-13T07:20:08.315Z',
          renaissanceTime: '2019-03-13T07:20:08.315Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    stakes: [
      {
        address: 'db51b540909c41fcb636973d0ed55da6fd151de6',
        from: '4132bccd3c97bcef304e376b6b2eeb1467c0a585',
        to: 'b9baaad411203b2b9c5a0fcf9034291b8a8096a1',
        balance: '91947',
        message: 'Business-focused',
        context: {
          genesisTx: 'Fork',
          renaissanceTx: 'withdrawal',
          genesisTime: '2019-03-13T07:20:08.315Z',
          renaissanceTime: '2019-03-13T07:20:08.315Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: '81c9004af8b9705dd7301780ed81e4981ed65831',
        from: 'd6f58a6b3242b353931843088bb760499d41ab09',
        to: 'f8c2549a73e4dd42d65050f24ffa5de6880d575a',
        balance: '44801',
        message: 'orchestration',
        context: {
          genesisTx: 'Pizza',
          renaissanceTx: 'overriding',
          genesisTime: '2019-03-13T07:20:08.315Z',
          renaissanceTime: '2019-03-13T07:20:08.315Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    context: {
      txHash: '76e62f722edca4a82ae024504db8a5b4ed578592',
      blockHeight: 27471,
      blockTime: '2019-03-13T07:20:08.315Z',
      totalTxs: 53000,
      txStatistics: {
        numAccountMigrateTxs: 85189,
        numCreateAssetTxs: 68524,
        numConsensusUpgradeTxs: 59590,
        numDeclareTxs: 66925,
        numDeclareFileTxs: 99067,
        numExchangeTxs: 72419,
        numStakeTxs: 98153,
        numSysUpgradeTxs: 4505,
        numTransferTxs: 22320,
        numUpdateAssetTxs: 13457,
        numConsumeAssetTxs: 48307,
        numPokeTxs: 53190
      },
      txIndex: 49379,
      lastBlockTime: '2019-03-13T07:20:08.315Z'
    },
    appState: {
      address: '1d30b837dc3c2bfc918a5368a49ed85f6023b415',
      consensus: {
        maxBytes: 31361,
        maxGas: 47460,
        maxValidators: 28978,
        maxCandidates: 82862,
        pubKeyTypes: [
          'Toys',
          'Bike'
        ],
        validators: [
          {
            address: '5dd8ed08bc0c8973247bd9dd5511c73e237fef8f',
            power: 93435
          },
          {
            address: '78e99d10f514a8a23d036b9b2db07a4f7bcfccf3',
            power: 5950
          }
        ],
        validatorChanged: undefined,
        paramChanged: undefined
      },
      tasks: {
        '6085': {
          item: [
            {
              type: 10,
              dataHash: 'navigating',
              actions: [
                undefined,
                undefined
              ]
            },
            {
              type: 14,
              dataHash: 'Gloves',
              actions: [
                undefined,
                undefined
              ]
            }
          ]
        }
      },
      stakeSummary: {
        '34891': {
          totalStakes: '56011',
          totalUnstakes: '32701',
          context: {
            genesisTx: 'hacking',
            renaissanceTx: 'invoice',
            genesisTime: '2019-03-13T07:20:08.318Z',
            renaissanceTime: '2019-03-13T07:20:08.318Z'
          }
        }
      },
      version: 'strategic',
      dataVersion: 'Stravenue',
      forgeAppHash: Uint8Array [
        57
      ],
      token: {
        name: 'capacitor',
        symbol: 'open-source',
        unit: 'Utah',
        description: 'deposit',
        icon: Uint8Array [
          2
        ],
        decimal: 33347,
        initialSupply: 60557,
        totalSupply: 83781,
        inflationRate: 46177
      },
      data: {
        type: 'fg:x:random_data',
        value: 'ABCD 1234'
      }
    }
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  verifyTx: {
    code: 35
  }
}
});
```

### recoverWallet

```js
const result = await client.recoverWallet({
  data: Uint8Array [
    113
  ],
  type: {
    pk: 0,
    hash: 13,
    address: 0,
    role: 2
  },
  passphrase: 'Bulgarian Lev',
  moniker: 'Connecticut'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 3,
  token: 'Grocery',
  wallet: {
    type: {
      pk: 0,
      hash: 13,
      address: 0,
      role: 4
    },
    sk: Uint8Array [
      13
    ],
    pk: Uint8Array [
      39
    ],
    address: 'cde2c3be87f61a127e41324fb14e6766dceb1c0f'
  }
}
});
```

### removeWallet

```js
const result = await client.removeWallet({
  address: 'c1ed578b8b90d220f1efde419b2a510d3a679034'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 35
}
});
```

### search

```js
const result = await client.search({
  key: 'global',
  value: 'Berkshire'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 39,
  txs: [
    {
      tx: {
        from: '6cb4584566bb97b05b35783f22da2e1f8a54febe',
        nonce: 7021,
        signature: Uint8Array [
          162
        ],
        chainId: 'Ergonomic Granite Chair',
        signatures: [
          {
            signer: 'Automotive',
            signature: Uint8Array [
              4
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'Centralized',
            signature: Uint8Array [
              184
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          }
        ],
        itx: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      height: 75878,
      index: 36841,
      hash: '04d504f8e512a751f7f38b9b03982359ad4aa28e',
      tags: [
        {
          key: Uint8Array [
            235
          ],
          value: Uint8Array [
            29
          ]
        },
        {
          key: Uint8Array [
            85
          ],
          value: Uint8Array [
            28
          ]
        }
      ],
      code: 24,
      time: '2019-03-13T07:20:08.320Z',
      createAsset: {
        asset: 'Forward'
      },
      accountMigrate: {
        address: 'b896d6c6ad1571cbc886e1707e978c2af496af01'
      }
    },
    {
      tx: {
        from: 'abad7b7eb62825c99dd8f4499de6279c92bfc649',
        nonce: 77763,
        signature: Uint8Array [
          25
        ],
        chainId: 'attitude-oriented',
        signatures: [
          {
            signer: 'SCSI',
            signature: Uint8Array [
              235
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'Principal',
            signature: Uint8Array [
              10
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          }
        ],
        itx: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      height: 80672,
      index: 29179,
      hash: '624b8d257cba4068c8870fc61aeda0c5fd3964d7',
      tags: [
        {
          key: Uint8Array [
            172
          ],
          value: Uint8Array [
            221
          ]
        },
        {
          key: Uint8Array [
            124
          ],
          value: Uint8Array [
            101
          ]
        }
      ],
      code: 35,
      time: '2019-03-13T07:20:08.320Z',
      createAsset: {
        asset: 'navigate'
      },
      accountMigrate: {
        address: '85b37fd5838988516bcf0b80bdac591734b6c8fc'
      }
    }
  ]
}
});
```

### sendTx

```js
const result = await client.sendTx({
  tx: {
    from: '3e0331bdfa9d02ea307496380b234d1bf78b5420',
    nonce: 71580,
    signature: Uint8Array [
      47
    ],
    chainId: 'Namibia',
    signatures: [
      {
        signer: 'innovate',
        signature: Uint8Array [
          26
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'Director',
        signature: Uint8Array [
          0
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    itx: {
      type: 'fg:x:random_data',
      value: 'ABCD 1234'
    }
  },
  wallet: {
    type: {
      pk: 1,
      hash: 6,
      address: 1,
      role: 4
    },
    sk: Uint8Array [
      122
    ],
    pk: Uint8Array [
      253
    ],
    address: '657b46b5003fd3af0709abf7a04a009e8348c6c8'
  },
  token: 'microchip',
  commit: undefined
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 2,
  hash: '95e06ccefd2f085b17f5ea04fc74a6cb98063c44'
}
});
```

### signData

```js
const result = await client.signData({
  data: Uint8Array [
    152
  ],
  wallet: {
    type: {
      pk: 0,
      hash: 13,
      address: 0,
      role: 2
    },
    sk: Uint8Array [
      15
    ],
    pk: Uint8Array [
      3
    ],
    address: '9dd688571de1402b12405003ec7afdb347fe0771'
  },
  token: 'Facilitator'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 21,
  signature: Uint8Array [
    188
  ]
}
});
```

### storeFile

```js
const result = await client.storeFile({
  chunk: Uint8Array [
    231
  ]
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 41,
  hash: '1a8b082457d1c5cbf3d0201e3ffcd3f64ef1e6a6'
}
});
```

### subscribe

```js
const stream = client.subscribe({
  type: 22,
  filter: 'deposit'
});

// output
{
  topic: 'neural'
}
```

### unsubscribe

```js
const result = await client.unsubscribe({
  topic: 'Mobility'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 38
}
});
```


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |
