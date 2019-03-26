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
  * [listAssets](#listassets)
  * [listBlocks](#listblocks)
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
  TOO_MANY_TXS: 11,
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
  SHA2: 2,
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
  from: '5afccea7f368c4286cc3c972243d139bef574d47',
  nonce: 27488,
  wallet: {
    type: {
      pk: 0,
      hash: 1,
      address: 1,
      role: 3
    },
    sk: Uint8Array [
      237
    ],
    pk: Uint8Array [
      62
    ],
    address: '9b3763644a0af5f464a306701d747bb3bb502dc9'
  },
  token: 'Drive'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 5,
  tx: {
    from: '7167456dc1c234ee5e6996944ead36d3d3c08cd7',
    nonce: 95212,
    signature: Uint8Array [
      103
    ],
    chainId: 'well-modulated',
    signatures: [
      {
        signer: 'withdrawal',
        signature: Uint8Array [
          168
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'seamless',
        signature: Uint8Array [
          222
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
  passphrase: 'middleware',
  type: {
    pk: 0,
    hash: 6,
    address: 1,
    role: 3
  },
  moniker: 'Radial'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 41,
  token: 'dynamic',
  wallet: {
    type: {
      pk: 0,
      hash: 13,
      address: 1,
      role: 8
    },
    sk: Uint8Array [
      5
    ],
    pk: Uint8Array [
      97
    ],
    address: 'cd067aef55c4202d25432552effd1c6ee54a3c42'
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
  code: 2,
  wallet: {
    type: {
      pk: 1,
      hash: 6,
      address: 0,
      role: 5
    },
    sk: Uint8Array [
      212
    ],
    pk: Uint8Array [
      64
    ],
    address: '8091c2646100788b873ba3d51a1e10ad3a4d005f'
  }
}
});
```

### getAccountState

```js
const stream = client.getAccountState({
  address: 'af58adfe8ae7781d6e89594f3c31c6f5a8dc5093',
  keys: [
    'USB',
    'Optimized'
  ],
  height: 86420
});

// output
{
  code: 25,
  state: {
    balance: '98265',
    nonce: 63597,
    numTxs: 83154,
    address: '9752a71ddb803c70d377a5d53b6d948ad2deeb8c',
    pk: Uint8Array [
      34
    ],
    type: {
      pk: 1,
      hash: 0,
      address: 1,
      role: 5
    },
    moniker: 'Connecticut',
    context: {
      genesisTx: 'Phased',
      renaissanceTx: 'Rubber',
      genesisTime: '2019-03-26T10:10:40.169Z',
      renaissanceTime: '2019-03-26T10:10:40.169Z'
    },
    issuer: 'synthesize',
    migratedTo: [
      'deposit',
      'turquoise'
    ],
    migratedFrom: [
      'Arkansas',
      'Usability'
    ],
    numAssets: 50520,
    stake: {
      totalStakes: '56867',
      totalUnstakes: '96085',
      totalReceivedStakes: '65766',
      recentStakes: {
        items: [
          Uint8Array [
            51
          ],
          Uint8Array [
            57
          ]
        ],
        typeUrl: 'compress',
        maxItems: 71872,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [
            1
          ],
          Uint8Array [
            103
          ]
        ],
        typeUrl: 'program',
        maxItems: 77650,
        circular: undefined,
        fifo: undefined
      }
    },
    pinnedFiles: {
      items: [
        Uint8Array [
          15
        ],
        Uint8Array [
          173
        ]
      ],
      typeUrl: 'Oval',
      maxItems: 69500,
      circular: undefined,
      fifo: undefined
    },
    poke: {
      dailyLimit: '54103',
      leftover: '73195',
      amount: '36410'
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
  senderAddress: 'Keyboard',
  itx: {
    moniker: 'Jewelery',
    data: {
      type: 'fg:x:random_data',
      value: 'ABCD 1234'
    },
    readonly: undefined,
    transferrable: undefined,
    ttl: 53838,
    parent: 'Chief'
  },
  walletType: {
    pk: 1,
    hash: 6,
    address: 1,
    role: 2
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 42,
  assetAddress: 'Illinois'
}
});
```

### getAssetState

```js
const stream = client.getAssetState({
  address: '1c9dcdfe31f73fc79f9c81f167f3fcfab6820b91',
  keys: [
    'Greenland',
    'Bahrain'
  ],
  height: 33555
});

// output
{
  code: 32,
  state: {
    address: '66f6c60f3171719b63e75a218a5585f754c8a8b0',
    owner: 'Arkansas',
    moniker: 'Re-engineered',
    readonly: undefined,
    transferrable: undefined,
    ttl: 7924,
    consumedTime: '2019-03-26T10:10:40.170Z',
    issuer: 'Seychelles Rupee',
    stake: {
      totalStakes: '21852',
      totalUnstakes: '52921',
      totalReceivedStakes: '47429',
      recentStakes: {
        items: [
          Uint8Array [
            3
          ],
          Uint8Array [
            56
          ]
        ],
        typeUrl: 'Agent',
        maxItems: 69695,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [
            230
          ],
          Uint8Array [
            118
          ]
        ],
        typeUrl: 'XSS',
        maxItems: 82859,
        circular: undefined,
        fifo: undefined
      }
    },
    context: {
      genesisTx: 'SMTP',
      renaissanceTx: 'optical',
      genesisTime: '2019-03-26T10:10:40.170Z',
      renaissanceTime: '2019-03-26T10:10:40.170Z'
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
    cursor: 'Keyboard',
    size: 80536,
    order: [
      {
        field: 'Awesome',
        type: 'Forward'
      },
      {
        field: 'Checking Account',
        type: 'Books'
      }
    ]
  },
  ownerAddress: 'mobile'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 27,
  page: {
    cursor: 'Knoll',
    next: undefined,
    total: 51944
  },
  assets: [
    {
      address: '4516d56c978fdfb6dec0a8923f7e16abd3dcae77',
      owner: 'fuchsia',
      genesisTime: 'Salad',
      renaissanceTime: 'Nevada',
      moniker: 'Investor',
      readonly: undefined
    },
    {
      address: '831583193d0a7cf5353169347e825194b6097381',
      owner: 'Expanded',
      genesisTime: 'HTTP',
      renaissanceTime: 'Vision-oriented',
      moniker: 'Uzbekistan Sum',
      readonly: undefined
    }
  ]
}
});
```

### getBlock

```js
const stream = client.getBlock({
  height: 65451
});

// output
{
  code: 39,
  block: {
    height: 48922,
    numTxs: 2416,
    time: '2019-03-26T10:10:40.171Z',
    appHash: '06d730555e625e941698b2373a6b36a15456d1bd',
    proposer: 'af0af9d3f91831189500a3a595fc2d3d977d7b70',
    txs: [
      {
        tx: {
          from: 'bbd3866a2c476a15f39932f564d45a7f0fba113b',
          nonce: 89441,
          signature: Uint8Array [
            114
          ],
          chainId: 'global',
          signatures: [
            {
              signer: 'navigating',
              signature: Uint8Array [
                174
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'Tuna',
              signature: Uint8Array [
                255
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
        height: 86926,
        index: 40653,
        hash: '7f41c7107754a9e578fd48563ef465e41d70b4f7',
        tags: [
          {
            key: Uint8Array [
              109
            ],
            value: Uint8Array [
              51
            ]
          },
          {
            key: Uint8Array [
              100
            ],
            value: Uint8Array [
              224
            ]
          }
        ],
        code: 20,
        time: '2019-03-26T10:10:40.172Z',
        createAsset: {
          asset: 'Plastic'
        },
        accountMigrate: {
          address: '5fbaa5000c2f269cbdf285a35b8a5ae5a1327390'
        }
      },
      {
        tx: {
          from: '67bbbe1481d9c93dee5f7ce83fb552f3b92b8497',
          nonce: 95891,
          signature: Uint8Array [
            254
          ],
          chainId: 'Pizza',
          signatures: [
            {
              signer: 'Integration',
              signature: Uint8Array [
                208
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'vortals',
              signature: Uint8Array [
                207
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
        height: 41706,
        index: 8871,
        hash: '3c4af8dab11f9f29bfa1bfe582a3468d154c0925',
        tags: [
          {
            key: Uint8Array [
              56
            ],
            value: Uint8Array [
              123
            ]
          },
          {
            key: Uint8Array [
              145
            ],
            value: Uint8Array [
              60
            ]
          }
        ],
        code: 34,
        time: '2019-03-26T10:10:40.172Z',
        createAsset: {
          asset: 'grey'
        },
        accountMigrate: {
          address: '6cbc889ab21802ea591a71386acdfa98b7f8dc21'
        }
      }
    ],
    totalTxs: 50206,
    invalidTxs: [
      {
        tx: {
          from: '0a47785634b9ba3018427fac29cf653290ba3a97',
          nonce: 73847,
          signature: Uint8Array [
            222
          ],
          chainId: 'matrix',
          signatures: [
            {
              signer: 'Product',
              signature: Uint8Array [
                62
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'ADP',
              signature: Uint8Array [
                146
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
        height: 50453,
        index: 59021,
        hash: '0726e5588947569578237fac0784eb316aff8d52',
        tags: [
          {
            key: Uint8Array [
              93
            ],
            value: Uint8Array [
              72
            ]
          },
          {
            key: Uint8Array [
              111
            ],
            value: Uint8Array [
              110
            ]
          }
        ],
        code: 5,
        time: '2019-03-26T10:10:40.172Z',
        createAsset: {
          asset: 'cross-platform'
        },
        accountMigrate: {
          address: 'f5316ef60886595755c88db79d3a1bdde750c880'
        }
      },
      {
        tx: {
          from: '8004e9646c6eec9e4146cd1b87424d51ad1380c6',
          nonce: 47509,
          signature: Uint8Array [
            157
          ],
          chainId: 'concept',
          signatures: [
            {
              signer: 'turquoise',
              signature: Uint8Array [
                13
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'models',
              signature: Uint8Array [
                180
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
        height: 83866,
        index: 46402,
        hash: 'c9cd62eb02065fc3a8212878a04bbb1041ba71f4',
        tags: [
          {
            key: Uint8Array [
              46
            ],
            value: Uint8Array [
              233
            ]
          },
          {
            key: Uint8Array [
              243
            ],
            value: Uint8Array [
              192
            ]
          }
        ],
        code: 30,
        time: '2019-03-26T10:10:40.172Z',
        createAsset: {
          asset: 'Dynamic'
        },
        accountMigrate: {
          address: 'fce013aa546b81c839ecc983e95a339d7800bded'
        }
      }
    ],
    txsHashes: [
      'Vietnam',
      'invoice'
    ],
    invalidTxsHashes: [
      'Direct',
      'Pants'
    ],
    consensusHash: Uint8Array [
      97
    ],
    dataHash: Uint8Array [
      88
    ],
    evidenceHash: Uint8Array [
      66
    ],
    lastCommitHash: Uint8Array [
      68
    ],
    lastResultsHash: Uint8Array [
      252
    ],
    nextValidatorsHash: Uint8Array [
      4
    ],
    validatorsHash: Uint8Array [
      16
    ],
    version: {
      Block: 55959,
      App: 20484
    },
    lastBlockId: {
      hash: '6f176c76346b7e3405a1a1aa695aae9ad8e58d79',
      partsHeader: undefined
    }
  }
}
```

### getBlocks

```js
const result = await client.getBlocks({
  paging: {
    cursor: 'SSL',
    size: 82725,
    order: [
      {
        field: 'Principal',
        type: 'Automotive'
      },
      {
        field: 'Communications',
        type: 'Gloves'
      }
    ]
  },
  minHeight: 17821,
  maxHeight: 5137,
  emptyExcluded: undefined
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 5,
  page: {
    cursor: 'Connecticut',
    next: undefined,
    total: 14626
  },
  blocks: [
    {
      height: 75771,
      numTxs: 41500,
      time: '2019-03-26T10:10:40.173Z',
      appHash: '8884eee6447772e08b9c1ff29170f44ee0c4b3d9',
      proposer: '760fbed3db8021737b01917033c56fc5d2727fb5',
      txs: [
        {
          tx: {
            from: '16106ab9108d2c8d1beea705119dbc79222f9785',
            nonce: 53750,
            signature: Uint8Array [
              63
            ],
            chainId: 'Intelligent Wooden Table',
            signatures: [
              {
                signer: 'payment',
                signature: Uint8Array [
                  6
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Metrics',
                signature: Uint8Array [
                  143
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
          height: 75196,
          index: 38148,
          hash: 'd85ce26adaded1351eda02f4c356e381de07b34c',
          tags: [
            {
              key: Uint8Array [
                136
              ],
              value: Uint8Array [
                254
              ]
            },
            {
              key: Uint8Array [
                198
              ],
              value: Uint8Array [
                102
              ]
            }
          ],
          code: 6,
          time: '2019-03-26T10:10:40.173Z',
          createAsset: {
            asset: 'Norway'
          },
          accountMigrate: {
            address: '5cc2958f5a77aa3cafe26061e8fb199cadc45592'
          }
        },
        {
          tx: {
            from: '14adbb2acb51c9ddea11826d736af7852b17f4c0',
            nonce: 5179,
            signature: Uint8Array [
              24
            ],
            chainId: 'transmitter',
            signatures: [
              {
                signer: 'Handmade Plastic Pants',
                signature: Uint8Array [
                  83
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'productivity',
                signature: Uint8Array [
                  106
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
          height: 49814,
          index: 264,
          hash: '0b2d1a62150e3548a01359633f179f175c926398',
          tags: [
            {
              key: Uint8Array [
                9
              ],
              value: Uint8Array [
                146
              ]
            },
            {
              key: Uint8Array [
                120
              ],
              value: Uint8Array [
                46
              ]
            }
          ],
          code: 37,
          time: '2019-03-26T10:10:40.174Z',
          createAsset: {
            asset: 'back-end'
          },
          accountMigrate: {
            address: '380390a5e7b65af2502d78c9bc45d4e65b2c7256'
          }
        }
      ],
      totalTxs: 26483,
      invalidTxs: [
        {
          tx: {
            from: '96c086e3f521fde35d030001fa26cafa015697e9',
            nonce: 96583,
            signature: Uint8Array [
              85
            ],
            chainId: 'payment',
            signatures: [
              {
                signer: 'attitude-oriented',
                signature: Uint8Array [
                  251
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Customer',
                signature: Uint8Array [
                  67
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
          height: 45916,
          index: 15137,
          hash: 'fb529288548ac6a22d1f7fd7593ce7095e1c7886',
          tags: [
            {
              key: Uint8Array [
                182
              ],
              value: Uint8Array [
                144
              ]
            },
            {
              key: Uint8Array [
                238
              ],
              value: Uint8Array [
                249
              ]
            }
          ],
          code: 41,
          time: '2019-03-26T10:10:40.174Z',
          createAsset: {
            asset: 'Rand Namibia Dollar'
          },
          accountMigrate: {
            address: '40f204b11d6f5cb44d143285052252ae5ea7a5ac'
          }
        },
        {
          tx: {
            from: 'c0a1480c982ff68779d48d50c5e9e02935a9fd61',
            nonce: 24189,
            signature: Uint8Array [
              153
            ],
            chainId: 'Generic Metal Tuna',
            signatures: [
              {
                signer: 'auxiliary',
                signature: Uint8Array [
                  247
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'blue',
                signature: Uint8Array [
                  13
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
          height: 94640,
          index: 42539,
          hash: '1ae6347cfa37e17443fd5a54859bf2b027abc952',
          tags: [
            {
              key: Uint8Array [
                110
              ],
              value: Uint8Array [
                148
              ]
            },
            {
              key: Uint8Array [
                42
              ],
              value: Uint8Array [
                252
              ]
            }
          ],
          code: 38,
          time: '2019-03-26T10:10:40.175Z',
          createAsset: {
            asset: 'Infrastructure'
          },
          accountMigrate: {
            address: 'ad7968d10fb325d59e25f4a27abbf3ae2f40e309'
          }
        }
      ],
      txsHashes: [
        'Analyst',
        'calculate'
      ],
      invalidTxsHashes: [
        'matrices',
        'innovative'
      ],
      consensusHash: Uint8Array [
        6
      ],
      dataHash: Uint8Array [
        85
      ],
      evidenceHash: Uint8Array [
        59
      ],
      lastCommitHash: Uint8Array [
        249
      ],
      lastResultsHash: Uint8Array [
        81
      ],
      nextValidatorsHash: Uint8Array [
        195
      ],
      validatorsHash: Uint8Array [
        32
      ],
      version: {
        Block: 56703,
        App: 88335
      },
      lastBlockId: {
        hash: '029e0c3f063c7807a828ef4a75c225117e855dc5',
        partsHeader: undefined
      }
    },
    {
      height: 79800,
      numTxs: 16005,
      time: '2019-03-26T10:10:40.175Z',
      appHash: '46c75365e91b037605599fd9b899149a37c4d9e7',
      proposer: '07672d33d9d18ba5ee51880ac20ee7dbc34f4ef2',
      txs: [
        {
          tx: {
            from: 'b4dc324a7d24d5f03b99aea4ba77a35f53138ab1',
            nonce: 6823,
            signature: Uint8Array [
              30
            ],
            chainId: 'red',
            signatures: [
              {
                signer: 'Orchestrator',
                signature: Uint8Array [
                  236
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Sleek',
                signature: Uint8Array [
                  30
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
          height: 50616,
          index: 85492,
          hash: 'b2f9a1fcf95c925e5d28405076f2d230fb7f4ba7',
          tags: [
            {
              key: Uint8Array [
                144
              ],
              value: Uint8Array [
                198
              ]
            },
            {
              key: Uint8Array [
                40
              ],
              value: Uint8Array [
                81
              ]
            }
          ],
          code: 403,
          time: '2019-03-26T10:10:40.175Z',
          createAsset: {
            asset: 'cross-platform'
          },
          accountMigrate: {
            address: '8bc3777db2836f84b3283964d76c6e71d8ec5972'
          }
        },
        {
          tx: {
            from: 'e0a2bf83847eb987f45863e7f878703dde015f46',
            nonce: 63024,
            signature: Uint8Array [
              220
            ],
            chainId: 'mint green',
            signatures: [
              {
                signer: 'Rupiah',
                signature: Uint8Array [
                  130
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'disintermediate',
                signature: Uint8Array [
                  139
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
          height: 82288,
          index: 58662,
          hash: '472d0901da4f9f60985e3b9163247b25c347f201',
          tags: [
            {
              key: Uint8Array [
                251
              ],
              value: Uint8Array [
                47
              ]
            },
            {
              key: Uint8Array [
                186
              ],
              value: Uint8Array [
                221
              ]
            }
          ],
          code: 1,
          time: '2019-03-26T10:10:40.175Z',
          createAsset: {
            asset: 'Michigan'
          },
          accountMigrate: {
            address: '0b0f506651ea1957778bb3e29367af3766b4a7f7'
          }
        }
      ],
      totalTxs: 84717,
      invalidTxs: [
        {
          tx: {
            from: '58b95d227deab8c6861978c8aa2d286b8fcd03b5',
            nonce: 60677,
            signature: Uint8Array [
              6
            ],
            chainId: 'Soft',
            signatures: [
              {
                signer: 'withdrawal',
                signature: Uint8Array [
                  106
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Wooden',
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
          height: 93881,
          index: 80958,
          hash: 'e8c957234ba4a1741915af40742c8454c582a6ba',
          tags: [
            {
              key: Uint8Array [
                24
              ],
              value: Uint8Array [
                114
              ]
            },
            {
              key: Uint8Array [
                238
              ],
              value: Uint8Array [
                216
              ]
            }
          ],
          code: 6,
          time: '2019-03-26T10:10:40.176Z',
          createAsset: {
            asset: 'Savings Account'
          },
          accountMigrate: {
            address: 'e5eb885bd41bcba076a3426c2b188762adff3ed9'
          }
        },
        {
          tx: {
            from: 'b58977233f8aab06dccaeb3a1e0b17f586561ede',
            nonce: 3379,
            signature: Uint8Array [
              158
            ],
            chainId: 'Implementation',
            signatures: [
              {
                signer: 'calculating',
                signature: Uint8Array [
                  127
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Tuna',
                signature: Uint8Array [
                  144
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
          height: 31305,
          index: 62613,
          hash: 'c754acc38f6d3d82ba76535dbd05cae013f566c0',
          tags: [
            {
              key: Uint8Array [
                174
              ],
              value: Uint8Array [
                147
              ]
            },
            {
              key: Uint8Array [
                160
              ],
              value: Uint8Array [
                164
              ]
            }
          ],
          code: 6,
          time: '2019-03-26T10:10:40.176Z',
          createAsset: {
            asset: 'calculating'
          },
          accountMigrate: {
            address: 'b3e009c32bb87523edf388b3f7961feb79f385a3'
          }
        }
      ],
      txsHashes: [
        'overriding',
        'Salad'
      ],
      invalidTxsHashes: [
        'Madagascar',
        'Money Market Account'
      ],
      consensusHash: Uint8Array [
        44
      ],
      dataHash: Uint8Array [
        161
      ],
      evidenceHash: Uint8Array [
        30
      ],
      lastCommitHash: Uint8Array [
        56
      ],
      lastResultsHash: Uint8Array [
        79
      ],
      nextValidatorsHash: Uint8Array [
        25
      ],
      validatorsHash: Uint8Array [
        168
      ],
      version: {
        Block: 70231,
        App: 32677
      },
      lastBlockId: {
        hash: '559fb5f6c2c13c5d72375e6a4b4f7b3805fd8e04',
        partsHeader: undefined
      }
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
  code: 16,
  info: {
    id: 'Iceland',
    network: 'encoding',
    moniker: 'transmitting',
    consensusVersion: 'compress',
    synced: undefined,
    appHash: '3427bc16366d8ea268fc674dc53f730b7458f00d',
    blockHash: Uint8Array [
      211
    ],
    blockHeight: 64266,
    blockTime: '2019-03-26T10:10:40.178Z',
    address: '4da5b66a6d67f3ea0fa051480ec6551acc3ca1b1',
    votingPower: 16033,
    totalTxs: 30603,
    version: 'Wooden',
    dataVersion: 'Small Steel Sausages',
    forgeAppsVersion: {
      leverage: 'Solutions'
    },
    supportedTxs: [
      'mission-critical',
      'frictionless'
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
  code: 41,
  config: 'tan'
}
});
```

### getForgeState

```js
const result = await client.getForgeState({
  keys: [
    'Shirt',
    'Sports'
  ],
  height: 17737
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 4,
  state: {
    address: '624947feede94dced3acee4cabddaf7bcaa41719',
    consensus: {
      maxBytes: 38774,
      maxGas: 28798,
      maxValidators: 96780,
      maxCandidates: 41288,
      pubKeyTypes: [
        'Syrian Pound',
        'Zambian Kwacha'
      ],
      validators: [
        {
          address: '3e04076b2e1aa929e12365f1734eb34fed6acab0',
          power: 91033
        },
        {
          address: '47d210b2377cd41f6c6bf8295b18841883339e87',
          power: 30342
        }
      ],
      validatorChanged: undefined,
      paramChanged: undefined
    },
    tasks: {
      '16321': {
        item: [
          {
            type: 13,
            dataHash: 'olive',
            actions: [
              undefined,
              undefined
            ]
          },
          {
            type: 4,
            dataHash: 'Checking Account',
            actions: [
              undefined,
              undefined
            ]
          }
        ]
      }
    },
    stakeSummary: {
      '90364': {
        totalStakes: '70584',
        totalUnstakes: '51301',
        context: {
          genesisTx: 'Inlet',
          renaissanceTx: 'Associate',
          genesisTime: '2019-03-26T10:10:40.178Z',
          renaissanceTime: '2019-03-26T10:10:40.178Z'
        }
      }
    },
    version: 'SCSI',
    dataVersion: 'deposit',
    forgeAppHash: Uint8Array [
      10
    ],
    token: {
      name: 'Generic Fresh Towels',
      symbol: 'Orchestrator',
      unit: 'Sleek',
      description: 'Dynamic',
      icon: Uint8Array [
        248
      ],
      decimal: 48545,
      initialSupply: 87582,
      totalSupply: 67846,
      inflationRate: 57232
    },
    txConfig: {
      maxAssetSize: 8780,
      maxListSize: 98686,
      maxMultisig: 65954,
      minimumStake: 97255
    },
    stakeConfig: {
      timeoutGeneral: 81814,
      timeoutStakeForNode: 42986
    },
    pokeConfig: {
      address: '0eadb75b00fee9eb6ebbb5f06059828d85d29d2e',
      dailyLimit: 84712,
      balance: 60667,
      amount: 36019
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
    startDate: 'impactful',
    endDate: 'engage'
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 8,
  forgeStatistics: {
    numBlocks: [
      11573,
      18630
    ],
    numTxs: [
      43947,
      70481
    ],
    numStakes: [
      '63721',
      '15361'
    ],
    numValidators: [
      24705,
      69534
    ],
    numAccountMigrateTxs: [
      8629,
      1424
    ],
    numCreateAssetTxs: [
      41274,
      4175
    ],
    numConsensusUpgradeTxs: [
      15883,
      33701
    ],
    numDeclareTxs: [
      84405,
      64283
    ],
    numDeclareFileTxs: [
      6180,
      61263
    ],
    numExchangeTxs: [
      30110,
      90497
    ],
    numStakeTxs: [
      48530,
      8973
    ],
    numSysUpgradeTxs: [
      89744,
      60028
    ],
    numTransferTxs: [
      43597,
      81779
    ],
    numUpdateAssetTxs: [
      9224,
      62352
    ],
    numConsumeAssetTxs: [
      76668,
      49005
    ],
    numPokeTxs: [
      91231,
      98527
    ],
    tps: [
      59404,
      19015
    ],
    maxTps: 2751,
    avgTps: 561
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
  code: 3,
  netInfo: {
    listening: undefined,
    listeners: [
      'online',
      'PCI'
    ],
    nPeers: 40712,
    peers: [
      {
        id: 'Tunnel',
        network: 'Bedfordshire',
        consensusVersion: 'Incredible Fresh Shoes',
        moniker: 'haptic',
        ip: 'tertiary',
        geoInfo: {
          city: 'Jordanian Dinar',
          country: 'Steel',
          latitude: 27878.06,
          longitude: 21763.42
        }
      },
      {
        id: 'killer',
        network: 'Nevada',
        consensusVersion: 'mobile',
        moniker: 'Total',
        ip: 'Kuwait',
        geoInfo: {
          city: 'Norfolk Island',
          country: 'Sausages',
          latitude: 6440.21,
          longitude: 15549.96
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
  code: 1,
  info: {
    id: 'hard drive',
    network: 'Guarani',
    moniker: 'Chicken',
    consensusVersion: 'parsing',
    synced: undefined,
    appHash: 'ba927a360f0115ef3277dbe41e56a910531bf22c',
    blockHash: Uint8Array [
      119
    ],
    blockHeight: 11339,
    blockTime: '2019-03-26T10:10:40.180Z',
    address: '8cf77823b27e4e7c4e129be994af8d4c04782876',
    votingPower: 18394,
    totalTxs: 30390,
    version: 'Health',
    dataVersion: 'content-based',
    forgeAppsVersion: {
      integrate: 'e-business'
    },
    supportedTxs: [
      'cross-platform',
      'bottom-line'
    ],
    ip: 'open-source',
    geoInfo: {
      city: 'copying',
      country: 'Bedfordshire',
      latitude: 49224.6,
      longitude: 65137.94
    },
    p2pAddress: 'microchip'
  }
}
});
```

### getStakeState

```js
const stream = client.getStakeState({
  address: '27503d167a698e6fb74c720ee6dbe78370be5b5c',
  keys: [
    'mint green',
    'Rapid'
  ],
  height: 25675
});

// output
{
  code: 33,
  state: {
    address: '08d3e592240bf3fa40faa57bdb1b9a2966336b5c',
    from: '303b580ee2ffaae440a11cd8568e05c79bca3fd8',
    to: '1e055adff577337e3b236bdc87df27d70bac84f3',
    balance: '63190',
    message: 'invoice',
    context: {
      genesisTx: 'Reduced',
      renaissanceTx: 'Unbranded Granite Shoes',
      genesisTime: '2019-03-26T10:10:40.181Z',
      renaissanceTime: '2019-03-26T10:10:40.181Z'
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
    cursor: 'Oklahoma',
    size: 48039,
    order: [
      {
        field: 'Key',
        type: 'Expressway'
      },
      {
        field: 'Avon',
        type: 'deposit'
      }
    ]
  },
  addressFilter: {
    sender: 'Savings Account',
    receiver: 'Small',
    direction: 1
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 6,
  page: {
    cursor: 'Gorgeous',
    next: undefined,
    total: 21357
  },
  stakes: [
    {
      address: '1bd39a096857520fadafbff15ec538c4b43b8538',
      balance: '50268',
      sender: 'capacitor',
      receiver: 'out-of-the-box',
      genesisTime: 'South Dakota',
      renaissanceTime: 'Auto Loan Account',
      message: 'circuit',
      type: 93355
    },
    {
      address: 'b7db4e98e7c6372c616d4e3d3257eed190c7689c',
      balance: '31907',
      sender: 'Coordinator',
      receiver: 'utilize',
      genesisTime: 'value-added',
      renaissanceTime: 'lime',
      message: 'Avon',
      type: 70467
    }
  ]
}
});
```

### getTopAccounts

```js
const result = await client.getTopAccounts({
  paging: {
    cursor: 'port',
    size: 64886,
    order: [
      {
        field: 'ubiquitous',
        type: 'invoice'
      },
      {
        field: 'Quality',
        type: 'IB'
      }
    ]
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 8,
  page: {
    cursor: 'RSS',
    next: undefined,
    total: 94921
  },
  accounts: [
    {
      address: 'c47eadc4284cec54135019d7c8ec05d81922d97c',
      balance: '60044',
      numAssets: 77122,
      numTxs: 12272,
      nonce: 13928,
      genesisTime: 'extend',
      renaissanceTime: 'calculate',
      moniker: 'Bedfordshire',
      migratedFrom: 'deposit',
      migratedTo: 'solutions',
      totalReceivedStakes: '5612',
      totalStakes: '83186',
      totalUnstakes: '79535',
      recentNumTxs: [
        42164,
        8856
      ]
    },
    {
      address: 'ff412be2507119a28059eefd35a2d39b4c909a2e',
      balance: '46977',
      numAssets: 48221,
      numTxs: 24667,
      nonce: 807,
      genesisTime: 'Auto Loan Account',
      renaissanceTime: 'Rufiyaa',
      moniker: 'indexing',
      migratedFrom: 'Tuvalu',
      migratedTo: 'SDD',
      totalReceivedStakes: '86325',
      totalStakes: '11942',
      totalUnstakes: '73997',
      recentNumTxs: [
        72443,
        69193
      ]
    }
  ]
}
});
```

### getTx

```js
const stream = client.getTx({
  hash: '1f48ce43543ae951f394fa53cec842531a6426e8'
});

// output
{
  code: 32,
  info: {
    tx: {
      from: 'e559882f78d447b5d74d4c6f6d016691ead45652',
      nonce: 17553,
      signature: Uint8Array [
        201
      ],
      chainId: 'explicit',
      signatures: [
        {
          signer: 'Generic',
          signature: Uint8Array [
            70
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        {
          signer: 'Generic Frozen Mouse',
          signature: Uint8Array [
            221
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
    height: 10580,
    index: 85983,
    hash: 'ad49f7248f9d39b39f795d028f19297f24ed7082',
    tags: [
      {
        key: Uint8Array [
          79
        ],
        value: Uint8Array [
          89
        ]
      },
      {
        key: Uint8Array [
          34
        ],
        value: Uint8Array [
          106
        ]
      }
    ],
    code: 0,
    time: '2019-03-26T10:10:40.183Z',
    createAsset: {
      asset: 'Handcrafted'
    },
    accountMigrate: {
      address: '683346899d5604d3005822c4a6420fbf2de69505'
    }
  }
}
```

### getUnconfirmedTxs

```js
const result = await client.getUnconfirmedTxs({
  limit: 56225
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 35,
  unconfirmedTxs: {
    nTxs: 5133,
    txs: [
      {
        from: '3b41874774e3a6c85d18043610da633ce1c27619',
        nonce: 4983,
        signature: Uint8Array [
          128
        ],
        chainId: 'Open-architected',
        signatures: [
          {
            signer: 'Central',
            signature: Uint8Array [
              117
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'Gorgeous',
            signature: Uint8Array [
              74
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
        from: 'd576b8cf83053ca7dd2a9f9ec6cb650a4a9f08cc',
        nonce: 13769,
        signature: Uint8Array [
          177
        ],
        chainId: 'Fiji Dollar',
        signatures: [
          {
            signer: 'niches',
            signature: Uint8Array [
              216
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'end-to-end',
            signature: Uint8Array [
              203
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
  code: 30,
  validatorsInfo: {
    blockHeight: 79549,
    validators: [
      {
        address: '78d50088dabc0b8146c176e3a4988770c303bd07',
        pubKey: {
          type: 'functionalities',
          data: Uint8Array [
            120
          ]
        },
        votingPower: 67948,
        proposerPriority: 'Representative',
        name: 'Lane',
        geoInfo: {
          city: 'generate',
          country: 'invoice',
          latitude: 88865.99,
          longitude: 32804.79
        }
      },
      {
        address: '89e6405560b77dcc51c7cb398b75b2054b3bdcf5',
        pubKey: {
          type: 'one-to-one',
          data: Uint8Array [
            146
          ]
        },
        votingPower: 83953,
        proposerPriority: 'payment',
        name: 'convergence',
        geoInfo: {
          city: 'one-to-one',
          country: 'Buckinghamshire',
          latitude: 89441.27,
          longitude: 90064.54
        }
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
    cursor: 'blue',
    size: 71856,
    order: [
      {
        field: 'optimize',
        type: 'Plastic'
      },
      {
        field: 'concept',
        type: 'Sudan'
      }
    ]
  },
  address: '3514ba173573e2ac6c2562cada13a0e6cc310298'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 7,
  page: {
    cursor: 'Avon',
    next: undefined,
    total: 66770
  },
  transactions: [
    {
      consumeAsset: {
        asset: 'Auto Loan Account'
      }
    },
    {
      consumeAsset: {
        asset: 'engineer'
      }
    }
  ]
}
});
```

### listAssets

```js
const result = await client.listAssets({
  paging: {
    cursor: 'Reduced',
    size: 65983,
    order: [
      {
        field: 'Awesome Cotton Bacon',
        type: 'New Taiwan Dollar'
      },
      {
        field: 'Program',
        type: 'back-end'
      }
    ]
  },
  ownerAddress: 'concept'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 22,
  page: {
    cursor: 'Personal Loan Account',
    next: undefined,
    total: 10530
  },
  account: {
    address: '1ccdef31f2751a4ed3e587fcb73395a9383fec1b',
    balance: '84831',
    numAssets: 92930,
    numTxs: 97629,
    nonce: 74579,
    genesisTime: 'Buckinghamshire',
    renaissanceTime: 'system',
    moniker: 'complexity',
    migratedFrom: 'scalable',
    migratedTo: 'Markets',
    totalReceivedStakes: '87628',
    totalStakes: '85285',
    totalUnstakes: '38654',
    recentNumTxs: [
      89194,
      81956
    ]
  },
  assets: [
    {
      address: '86802fdb41d88911efd35356e0710d67b951db86',
      owner: 'bi-directional',
      genesisTime: 'heuristic',
      renaissanceTime: 'Computer',
      moniker: 'Alabama',
      readonly: undefined
    },
    {
      address: 'a776d35e3e163326a184ec3dd5fdaf39740d9e18',
      owner: 'Licensed Granite Bike',
      genesisTime: 'system',
      renaissanceTime: 'hacking',
      moniker: 'e-services',
      readonly: undefined
    }
  ]
}
});
```

### listBlocks

```js
const result = await client.listBlocks({
  paging: {
    cursor: 'Home Loan Account',
    size: 32143,
    order: [
      {
        field: 'Plastic',
        type: 'alarm'
      },
      {
        field: 'gold',
        type: 'Wooden'
      }
    ]
  },
  proposer: '9a6e66a13972b76a99f3cbf14aa875e2bf08bdba',
  timeFilter: {
    startDateTime: 'Consultant',
    endDateTime: 'mobile'
  },
  heightFilter: {
    fromHeight: 39655,
    toHeight: 62181
  },
  numTxsFilter: {
    minNumTxs: 80171,
    maxNumTxs: 60490
  },
  numInvalidTxsFilter: {
    minNumInvalidTxs: 43990,
    maxNumInvalidTxs: 31993
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 7,
  page: {
    cursor: 'Technician',
    next: undefined,
    total: 85822
  },
  blocks: [
    {
      height: 64359,
      time: 'partnerships',
      proposer: '15117e47da6c42db0859295f17fc12b3b8936bc0',
      numTxs: 70574,
      numInvalidTxs: 10102
    },
    {
      height: 60839,
      time: 'Texas',
      proposer: '4a699d93d4db1e86359ec243313fbf59c0229774',
      numTxs: 89226,
      numInvalidTxs: 99956
    }
  ]
}
});
```

### listTransactions

```js
const result = await client.listTransactions({
  paging: {
    cursor: 'Outdoors',
    size: 37094,
    order: [
      {
        field: 'transmitter',
        type: 'reintermediate'
      },
      {
        field: 'Avon',
        type: 'Trail'
      }
    ]
  },
  timeFilter: {
    startDateTime: 'vertical',
    endDateTime: 'generating'
  },
  addressFilter: {
    sender: 'Response',
    receiver: 'matrix',
    direction: 2
  },
  typeFilter: {
    types: [
      'Mississippi',
      'Supervisor'
    ]
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 32,
  page: {
    cursor: 'Swaziland',
    next: undefined,
    total: 32181
  },
  transactions: [
    {
      consumeAsset: {
        asset: 'violet'
      }
    },
    {
      consumeAsset: {
        asset: 'Kentucky'
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
  code: 11,
  address: '254468b1ff972286419af01d4bc1ccac4904f6bc'
}
```

### loadFile

```js
const stream = client.loadFile({
  hash: '2daf1103ebcc8840b68c45f2f150c70ffae327ca'
});

// output
{
  code: 33,
  chunk: Uint8Array [
    217
  ]
}
```

### loadWallet

```js
const result = await client.loadWallet({
  address: '1366374b32192dd027738878041215dde937371f',
  passphrase: 'web-enabled'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 403,
  token: 'Shoes',
  wallet: {
    type: {
      pk: 0,
      hash: 7,
      address: 1,
      role: 3
    },
    sk: Uint8Array [
      28
    ],
    pk: Uint8Array [
      124
    ],
    address: 'b6199a2621d4d8dd136b6d34ff5b84baf60a5222'
  }
}
});
```

### multisig

```js
const result = await client.multisig({
  tx: {
    from: 'f5bbeabb9389eedc3cee6cd08052539c03451542',
    nonce: 34888,
    signature: Uint8Array [
      180
    ],
    chainId: 'International',
    signatures: [
      {
        signer: 'Avon',
        signature: Uint8Array [
          73
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'implement',
        signature: Uint8Array [
          205
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
      hash: 14,
      address: 1,
      role: 6
    },
    sk: Uint8Array [
      255
    ],
    pk: Uint8Array [
      194
    ],
    address: 'ccaf1d8d363c1181699091a9012c1534741cec9c'
  },
  token: 'backing up'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 10,
  tx: {
    from: '3e1c710a0a645aca987e47226fb4526aeff30afa',
    nonce: 41758,
    signature: Uint8Array [
      132
    ],
    chainId: 'Square',
    signatures: [
      {
        signer: 'Cambridgeshire',
        signature: Uint8Array [
          200
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'digital',
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
  }
}
});
```

### pinFile

```js
const result = await client.pinFile({
  hash: 'a695232cb0af92c3edd19e3c5183c7f0c2e73a22'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 32
}
});
```

### process

```js
const stream = client.process({
  verifyTx: {
    tx: {
      from: 'b856ea048fbf2a7a3095bfb0ac36ddb8bab88c77',
      nonce: 43688,
      signature: Uint8Array [
        106
      ],
      chainId: 'lime',
      signatures: [
        {
          signer: 'copying',
          signature: Uint8Array [
            169
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        {
          signer: 'deposit',
          signature: Uint8Array [
            90
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
        balance: '44362',
        nonce: 3316,
        numTxs: 34330,
        address: 'cade8e173a027194d17f28408d823f09cd66af48',
        pk: Uint8Array [
          42
        ],
        type: {
          pk: 0,
          hash: 6,
          address: 0,
          role: 0
        },
        moniker: 'Awesome',
        context: {
          genesisTx: 'monitor',
          renaissanceTx: 'backing up',
          genesisTime: '2019-03-26T10:10:40.187Z',
          renaissanceTime: '2019-03-26T10:10:40.187Z'
        },
        issuer: 'CSS',
        migratedTo: [
          'Executive',
          'deposit'
        ],
        migratedFrom: [
          'Engineer',
          'Data'
        ],
        numAssets: 24519,
        stake: {
          totalStakes: '86342',
          totalUnstakes: '6860',
          totalReceivedStakes: '95487',
          recentStakes: {
            items: [
              Uint8Array [
                2
              ],
              Uint8Array [
                249
              ]
            ],
            typeUrl: 'redundant',
            maxItems: 57669,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                188
              ],
              Uint8Array [
                85
              ]
            ],
            typeUrl: 'Handcrafted Rubber Bacon',
            maxItems: 53438,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              7
            ],
            Uint8Array [
              118
            ]
          ],
          typeUrl: 'Tools',
          maxItems: 24575,
          circular: undefined,
          fifo: undefined
        },
        poke: {
          dailyLimit: '15256',
          leftover: '60240',
          amount: '15372'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        balance: '50249',
        nonce: 27172,
        numTxs: 48366,
        address: 'c185763dc2f06dc52599bf47bfa2a1b5d4b09550',
        pk: Uint8Array [
          7
        ],
        type: {
          pk: 0,
          hash: 7,
          address: 0,
          role: 1
        },
        moniker: 'Personal Loan Account',
        context: {
          genesisTx: 'Villages',
          renaissanceTx: 'program',
          genesisTime: '2019-03-26T10:10:40.187Z',
          renaissanceTime: '2019-03-26T10:10:40.187Z'
        },
        issuer: 'panel',
        migratedTo: [
          'Small',
          'calculate'
        ],
        migratedFrom: [
          'Books',
          'Saudi Arabia'
        ],
        numAssets: 36143,
        stake: {
          totalStakes: '53770',
          totalUnstakes: '26639',
          totalReceivedStakes: '11281',
          recentStakes: {
            items: [
              Uint8Array [
                120
              ],
              Uint8Array [
                9
              ]
            ],
            typeUrl: 'Credit Card Account',
            maxItems: 67011,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                226
              ],
              Uint8Array [
                6
              ]
            ],
            typeUrl: 'Games',
            maxItems: 72627,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              179
            ],
            Uint8Array [
              150
            ]
          ],
          typeUrl: 'calculating',
          maxItems: 52953,
          circular: undefined,
          fifo: undefined
        },
        poke: {
          dailyLimit: '76787',
          leftover: '75626',
          amount: '38104'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    assets: [
      {
        address: '2143284a70e85120a80a26e1d393d4c350422ff9',
        owner: 'Handcrafted Wooden Fish',
        moniker: 'Auto Loan Account',
        readonly: undefined,
        transferrable: undefined,
        ttl: 97829,
        consumedTime: '2019-03-26T10:10:40.188Z',
        issuer: 'Developer',
        stake: {
          totalStakes: '59441',
          totalUnstakes: '75765',
          totalReceivedStakes: '6187',
          recentStakes: {
            items: [
              Uint8Array [
                149
              ],
              Uint8Array [
                12
              ]
            ],
            typeUrl: 'Up-sized',
            maxItems: 6207,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                188
              ],
              Uint8Array [
                66
              ]
            ],
            typeUrl: 'Home Loan Account',
            maxItems: 27578,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Personal Loan Account',
          renaissanceTx: 'Court',
          genesisTime: '2019-03-26T10:10:40.188Z',
          renaissanceTime: '2019-03-26T10:10:40.188Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: '5bb7b73faf824a4f37fbda9564961201f6c2fb0f',
        owner: 'Idaho',
        moniker: 'Unbranded Rubber Keyboard',
        readonly: undefined,
        transferrable: undefined,
        ttl: 44714,
        consumedTime: '2019-03-26T10:10:40.188Z',
        issuer: 'Swedish Krona',
        stake: {
          totalStakes: '30611',
          totalUnstakes: '92096',
          totalReceivedStakes: '79388',
          recentStakes: {
            items: [
              Uint8Array [
                70
              ],
              Uint8Array [
                151
              ]
            ],
            typeUrl: 'Configurable',
            maxItems: 21696,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                229
              ],
              Uint8Array [
                166
              ]
            ],
            typeUrl: 'Switchable',
            maxItems: 2397,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'parsing',
          renaissanceTx: 'Dobra',
          genesisTime: '2019-03-26T10:10:40.188Z',
          renaissanceTime: '2019-03-26T10:10:40.188Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    stakes: [
      {
        address: 'b8db08bd0f27eae83f8842eb96281096e574a398',
        from: '03d7a7731328a17d21cc257e09d88218e1b98d65',
        to: '3b01a9f093ea7a7ae00e3b62007f90cf4143b0b8',
        balance: '99994',
        message: '3rd generation',
        context: {
          genesisTx: 'Group',
          renaissanceTx: 'Investment Account',
          genesisTime: '2019-03-26T10:10:40.188Z',
          renaissanceTime: '2019-03-26T10:10:40.188Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: 'e8a31c3619816e3c499529a47a844d5f523b9227',
        from: '658ecd949a539c1f0ac208db0c7cc773e2382b2e',
        to: 'ef174ae226654a4cfd414724d89bfc0bc98487d7',
        balance: '63631',
        message: 'Station',
        context: {
          genesisTx: 'Won',
          renaissanceTx: 'Wooden',
          genesisTime: '2019-03-26T10:10:40.188Z',
          renaissanceTime: '2019-03-26T10:10:40.188Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    context: {
      txHash: 'cfb32ed1cf522c4632fb37d84ee4caff9c53b3d3',
      blockHeight: 85226,
      blockTime: '2019-03-26T10:10:40.188Z',
      totalTxs: 78233,
      txStatistics: {
        numAccountMigrateTxs: 56637,
        numCreateAssetTxs: 43336,
        numConsensusUpgradeTxs: 62774,
        numDeclareTxs: 43592,
        numDeclareFileTxs: 52278,
        numExchangeTxs: 28941,
        numStakeTxs: 54359,
        numSysUpgradeTxs: 26814,
        numTransferTxs: 1598,
        numUpdateAssetTxs: 34427,
        numConsumeAssetTxs: 65802,
        numPokeTxs: 59974
      },
      txIndex: 18752,
      lastBlockTime: '2019-03-26T10:10:40.188Z'
    },
    appState: {
      address: 'bb59fc9b8ee372afead2c362c1ff05f743d72af1',
      consensus: {
        maxBytes: 60535,
        maxGas: 88009,
        maxValidators: 21766,
        maxCandidates: 56876,
        pubKeyTypes: [
          'Integration',
          'Niue'
        ],
        validators: [
          {
            address: 'bdc9671f7dcf20a1c3f487ddda9815b705ff2967',
            power: 42753
          },
          {
            address: '1cde8f375d3dd3a3a5c63f70b9d52b22f44a4d2c',
            power: 15854
          }
        ],
        validatorChanged: undefined,
        paramChanged: undefined
      },
      tasks: {
        '28483': {
          item: [
            {
              type: 10,
              dataHash: 'Missouri',
              actions: [
                undefined,
                undefined
              ]
            },
            {
              type: 3,
              dataHash: 'matrix',
              actions: [
                undefined,
                undefined
              ]
            }
          ]
        }
      },
      stakeSummary: {
        '75027': {
          totalStakes: '66865',
          totalUnstakes: '95931',
          context: {
            genesisTx: 'Refined',
            renaissanceTx: 'Self-enabling',
            genesisTime: '2019-03-26T10:10:40.188Z',
            renaissanceTime: '2019-03-26T10:10:40.188Z'
          }
        }
      },
      version: 'haptic',
      dataVersion: 'Locks',
      forgeAppHash: Uint8Array [
        21
      ],
      token: {
        name: 'Bedfordshire',
        symbol: 'Senior',
        unit: 'auxiliary',
        description: 'Sri Lanka Rupee',
        icon: Uint8Array [
          163
        ],
        decimal: 25706,
        initialSupply: 98162,
        totalSupply: 42713,
        inflationRate: 84614
      },
      txConfig: {
        maxAssetSize: 16896,
        maxListSize: 84623,
        maxMultisig: 83676,
        minimumStake: 93539
      },
      stakeConfig: {
        timeoutGeneral: 74087,
        timeoutStakeForNode: 27163
      },
      pokeConfig: {
        address: '2a0594a78b48a1a6b234c8777f79217274da3c23',
        dailyLimit: 37253,
        balance: 16378,
        amount: 28210
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
    code: 39
  }
}
```

### processOne

```js
const result = await client.processOne({
  verifyTx: {
    tx: {
      from: '6229ed27ad9650fd2b4736c3ca5359b248e29687',
      nonce: 54469,
      signature: Uint8Array [
        97
      ],
      chainId: 'USB',
      signatures: [
        {
          signer: 'neural',
          signature: Uint8Array [
            238
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        {
          signer: 'invoice',
          signature: Uint8Array [
            206
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
        balance: '12031',
        nonce: 7402,
        numTxs: 5516,
        address: 'd76ce2318b7065eacfb84c9242bc6808c70f2235',
        pk: Uint8Array [
          89
        ],
        type: {
          pk: 0,
          hash: 7,
          address: 0,
          role: 5
        },
        moniker: 'Vietnam',
        context: {
          genesisTx: 'Principal',
          renaissanceTx: 'withdrawal',
          genesisTime: '2019-03-26T10:10:40.190Z',
          renaissanceTime: '2019-03-26T10:10:40.190Z'
        },
        issuer: 'Rubber',
        migratedTo: [
          'Grocery',
          'Home Loan Account'
        ],
        migratedFrom: [
          'deploy',
          'azure'
        ],
        numAssets: 5475,
        stake: {
          totalStakes: '23076',
          totalUnstakes: '85481',
          totalReceivedStakes: '15437',
          recentStakes: {
            items: [
              Uint8Array [
                208
              ],
              Uint8Array [
                10
              ]
            ],
            typeUrl: 'SAS',
            maxItems: 74172,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                24
              ],
              Uint8Array [
                166
              ]
            ],
            typeUrl: 'Auto Loan Account',
            maxItems: 8696,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              218
            ],
            Uint8Array [
              174
            ]
          ],
          typeUrl: 'Dynamic',
          maxItems: 64876,
          circular: undefined,
          fifo: undefined
        },
        poke: {
          dailyLimit: '2749',
          leftover: '8388',
          amount: '54912'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        balance: '83455',
        nonce: 57625,
        numTxs: 11382,
        address: '9ef887335e5aa7a85a23ae8043de4932092e0892',
        pk: Uint8Array [
          55
        ],
        type: {
          pk: 0,
          hash: 13,
          address: 0,
          role: 0
        },
        moniker: 'Soft',
        context: {
          genesisTx: 'stable',
          renaissanceTx: 'Data',
          genesisTime: '2019-03-26T10:10:40.190Z',
          renaissanceTime: '2019-03-26T10:10:40.190Z'
        },
        issuer: 'Corporate',
        migratedTo: [
          'Global',
          'invoice'
        ],
        migratedFrom: [
          'transmitting',
          'Forks'
        ],
        numAssets: 53067,
        stake: {
          totalStakes: '58940',
          totalUnstakes: '69748',
          totalReceivedStakes: '18841',
          recentStakes: {
            items: [
              Uint8Array [
                171
              ],
              Uint8Array [
                228
              ]
            ],
            typeUrl: 'withdrawal',
            maxItems: 48864,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                38
              ],
              Uint8Array [
                26
              ]
            ],
            typeUrl: 'Intelligent',
            maxItems: 7370,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              55
            ],
            Uint8Array [
              78
            ]
          ],
          typeUrl: 'whiteboard',
          maxItems: 35914,
          circular: undefined,
          fifo: undefined
        },
        poke: {
          dailyLimit: '10885',
          leftover: '44378',
          amount: '70851'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    assets: [
      {
        address: '6361fc0968c2290fa04f0e999702821647c0bd62',
        owner: 'Ohio',
        moniker: 'Rwanda',
        readonly: undefined,
        transferrable: undefined,
        ttl: 45216,
        consumedTime: '2019-03-26T10:10:40.190Z',
        issuer: 'Passage',
        stake: {
          totalStakes: '32736',
          totalUnstakes: '45381',
          totalReceivedStakes: '57567',
          recentStakes: {
            items: [
              Uint8Array [
                54
              ],
              Uint8Array [
                100
              ]
            ],
            typeUrl: 'Armenian Dram',
            maxItems: 9871,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                39
              ],
              Uint8Array [
                115
              ]
            ],
            typeUrl: 'Dynamic',
            maxItems: 97297,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Forint',
          renaissanceTx: 'integrate',
          genesisTime: '2019-03-26T10:10:40.190Z',
          renaissanceTime: '2019-03-26T10:10:40.190Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: '60c38feaf25173a92070c19420adbaff3a154270',
        owner: 'Open-architected',
        moniker: 'PNG',
        readonly: undefined,
        transferrable: undefined,
        ttl: 88597,
        consumedTime: '2019-03-26T10:10:40.190Z',
        issuer: 'Street',
        stake: {
          totalStakes: '47247',
          totalUnstakes: '76244',
          totalReceivedStakes: '46681',
          recentStakes: {
            items: [
              Uint8Array [
                143
              ],
              Uint8Array [
                153
              ]
            ],
            typeUrl: 'Fish',
            maxItems: 91998,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                244
              ],
              Uint8Array [
                138
              ]
            ],
            typeUrl: 'deposit',
            maxItems: 47298,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'deposit',
          renaissanceTx: 'attitude-oriented',
          genesisTime: '2019-03-26T10:10:40.191Z',
          renaissanceTime: '2019-03-26T10:10:40.191Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    stakes: [
      {
        address: 'e91955fbfe78219b1996786c342a7460206cd59e',
        from: '8a860233575739d671d5da42e935a86b08660c29',
        to: '5fed84af2f0357932f6a8fad74c3c69ec7c62c45',
        balance: '42192',
        message: 'fuchsia',
        context: {
          genesisTx: 'Security',
          renaissanceTx: 'Accounts',
          genesisTime: '2019-03-26T10:10:40.191Z',
          renaissanceTime: '2019-03-26T10:10:40.191Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: '7cbc746491cbd20e009f7af4e8e5d6fa61db6192',
        from: '1123a259587afac01967ac00904019b29f4b2cba',
        to: '6e2a643b95c72eb042df37803ca65c668475b3d1',
        balance: '5921',
        message: 'Innovative',
        context: {
          genesisTx: 'Sausages',
          renaissanceTx: 'orange',
          genesisTime: '2019-03-26T10:10:40.191Z',
          renaissanceTime: '2019-03-26T10:10:40.191Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    context: {
      txHash: 'c17657d501cf4356527bfc5ec87d8e0eb169d4d2',
      blockHeight: 21506,
      blockTime: '2019-03-26T10:10:40.191Z',
      totalTxs: 28121,
      txStatistics: {
        numAccountMigrateTxs: 46641,
        numCreateAssetTxs: 59283,
        numConsensusUpgradeTxs: 99647,
        numDeclareTxs: 95481,
        numDeclareFileTxs: 52839,
        numExchangeTxs: 57837,
        numStakeTxs: 53240,
        numSysUpgradeTxs: 54814,
        numTransferTxs: 41035,
        numUpdateAssetTxs: 45151,
        numConsumeAssetTxs: 75215,
        numPokeTxs: 20654
      },
      txIndex: 30548,
      lastBlockTime: '2019-03-26T10:10:40.191Z'
    },
    appState: {
      address: '801c1a3b2e9aecee9fcc4d33f73599cd60610cc9',
      consensus: {
        maxBytes: 35549,
        maxGas: 55963,
        maxValidators: 3278,
        maxCandidates: 45742,
        pubKeyTypes: [
          'PCI',
          'California'
        ],
        validators: [
          {
            address: 'cc0e33ee42d2650d3b7442cd8d1de591a138d840',
            power: 60877
          },
          {
            address: '04b56d136e7925efbcca5e5331c7a8ce9b95510c',
            power: 26051
          }
        ],
        validatorChanged: undefined,
        paramChanged: undefined
      },
      tasks: {
        '24946': {
          item: [
            {
              type: 13,
              dataHash: 'Nevada',
              actions: [
                undefined,
                undefined
              ]
            },
            {
              type: 12,
              dataHash: 'explicit',
              actions: [
                undefined,
                undefined
              ]
            }
          ]
        }
      },
      stakeSummary: {
        '85414': {
          totalStakes: '82397',
          totalUnstakes: '99942',
          context: {
            genesisTx: 'metrics',
            renaissanceTx: 'approach',
            genesisTime: '2019-03-26T10:10:40.191Z',
            renaissanceTime: '2019-03-26T10:10:40.191Z'
          }
        }
      },
      version: 'Saint Barthelemy',
      dataVersion: 'Shoal',
      forgeAppHash: Uint8Array [
        128
      ],
      token: {
        name: 'paradigms',
        symbol: 'Movies',
        unit: 'Granite',
        description: 'Bedfordshire',
        icon: Uint8Array [
          4
        ],
        decimal: 37950,
        initialSupply: 67048,
        totalSupply: 76055,
        inflationRate: 35896
      },
      txConfig: {
        maxAssetSize: 74897,
        maxListSize: 89047,
        maxMultisig: 5076,
        minimumStake: 78812
      },
      stakeConfig: {
        timeoutGeneral: 30739,
        timeoutStakeForNode: 44026
      },
      pokeConfig: {
        address: 'd51269c76b97dd2eaa705f2d02be308f1965deed',
        dailyLimit: 68511,
        balance: 49572,
        amount: 53778
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
    code: 25
  }
}
});
```

### recoverWallet

```js
const result = await client.recoverWallet({
  data: Uint8Array [
    77
  ],
  type: {
    pk: 1,
    hash: 7,
    address: 1,
    role: 1
  },
  passphrase: 'connect',
  moniker: 'Soap'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 40,
  token: 'override',
  wallet: {
    type: {
      pk: 1,
      hash: 13,
      address: 1,
      role: 0
    },
    sk: Uint8Array [
      150
    ],
    pk: Uint8Array [
      143
    ],
    address: '1b19c294aaa13a36d7d8d5a8e34ca487c8a3ee8e'
  }
}
});
```

### removeWallet

```js
const result = await client.removeWallet({
  address: 'ab3ce419a7b19c73b009322c598b20dcdfc533ed'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 8
}
});
```

### search

```js
const result = await client.search({
  key: 'deposit',
  value: 'dedicated'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 21,
  txs: [
    {
      tx: {
        from: 'bd333c4d4ddae7a98d9a2ec0638280c24a984abd',
        nonce: 80877,
        signature: Uint8Array [
          172
        ],
        chainId: 'Idaho',
        signatures: [
          {
            signer: 'invoice',
            signature: Uint8Array [
              46
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'indexing',
            signature: Uint8Array [
              116
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
      height: 60557,
      index: 33568,
      hash: 'c030eff83c5ead68e421ce1237257c377aa24dfc',
      tags: [
        {
          key: Uint8Array [
            192
          ],
          value: Uint8Array [
            237
          ]
        },
        {
          key: Uint8Array [
            246
          ],
          value: Uint8Array [
            85
          ]
        }
      ],
      code: 32,
      time: '2019-03-26T10:10:40.193Z',
      createAsset: {
        asset: 'Auto Loan Account'
      },
      accountMigrate: {
        address: '42b34c37639530509d35605cd5aadc905114ab26'
      }
    },
    {
      tx: {
        from: '4b49442decedb97c671dfbcf55a012ead6787c8a',
        nonce: 46099,
        signature: Uint8Array [
          30
        ],
        chainId: 'virtual',
        signatures: [
          {
            signer: 'navigate',
            signature: Uint8Array [
              245
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'optimal',
            signature: Uint8Array [
              75
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
      height: 3149,
      index: 21203,
      hash: '4d7f02322bfb0d45b05ff9bfa22a9309391fa013',
      tags: [
        {
          key: Uint8Array [
            56
          ],
          value: Uint8Array [
            139
          ]
        },
        {
          key: Uint8Array [
            173
          ],
          value: Uint8Array [
            63
          ]
        }
      ],
      code: 504,
      time: '2019-03-26T10:10:40.193Z',
      createAsset: {
        asset: 'Borders'
      },
      accountMigrate: {
        address: '84b5835ec7925a6202f9f702f3100dab76d80704'
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
    from: 'deb43d7c0aa5a24725ea09142b00fe2718c76ec0',
    nonce: 64882,
    signature: Uint8Array [
      78
    ],
    chainId: 'open-source',
    signatures: [
      {
        signer: 'foreground',
        signature: Uint8Array [
          21
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'Synergistic',
        signature: Uint8Array [
          138
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
      pk: 0,
      hash: 0,
      address: 1,
      role: 6
    },
    sk: Uint8Array [
      196
    ],
    pk: Uint8Array [
      221
    ],
    address: 'c675ec3758b1980827587ffe65c0c5de3831a824'
  },
  token: 'Generic',
  commit: undefined
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 30,
  hash: '97d6fc6af41b4c6c576355b56c8392c78bb35bce'
}
});
```

### signData

```js
const result = await client.signData({
  data: Uint8Array [
    49
  ],
  wallet: {
    type: {
      pk: 0,
      hash: 1,
      address: 0,
      role: 8
    },
    sk: Uint8Array [
      35
    ],
    pk: Uint8Array [
      77
    ],
    address: 'b55fcfef9e867164aebb8d56ae27fc6abb70ace1'
  },
  token: 'B2C'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 0,
  signature: Uint8Array [
    231
  ]
}
});
```

### storeFile

```js
const result = await client.storeFile({
  chunk: Uint8Array [
    143
  ]
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 38,
  hash: '50ab1b1407e2fdd97fae19f11b6bf452ade0f1c5'
}
});
```

### subscribe

```js
const stream = client.subscribe({
  type: 130,
  filter: 'Auto Loan Account'
});

// output
{
  topic: 'Organic'
}
```

### unsubscribe

```js
const result = await client.unsubscribe({
  topic: 'supply-chains'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 39
}
});
```


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |
