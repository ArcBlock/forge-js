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
  ACTIVATED_ASSET: 42,
  FORBIDDEN: 403,
  INTERNAL: 500
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
  ACTIVATE_ASSET: 25,
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
  'ActivateAssetTx',
  'ConsensusUpgradeTx',
  'CreateAssetTx',
  'DeclareFileTx',
  'DeclareTx',
  'ExchangeTx',
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
      pk: 1,
      hash: 7,
      address: 1,
      role: 6
    }
  },
  from: 'ffff25d5a8b19c18ea0e40139a3e4b41c2461910',
  nonce: 89543,
  wallet: {
    type: {
      pk: 0,
      hash: 13,
      address: 1,
      role: 7
    },
    sk: Uint8Array [
      222
    ],
    pk: Uint8Array [
      90
    ],
    address: '72135063024546d5a665444298a8cd1c20f1bc59'
  },
  token: 'cross-platform'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 22,
  tx: {
    from: 'a38158483858f6edd9c09728865a9e865007c0fc',
    nonce: 91801,
    signature: Uint8Array [
      218
    ],
    chainId: 'facilitate',
    signatures: [
      {
        key: Uint8Array [
          21
        ],
        value: Uint8Array [
          100
        ]
      },
      {
        key: Uint8Array [
          32
        ],
        value: Uint8Array [
          146
        ]
      }
    ],
    itx: {
      type: 'WalletType',
      value: {
        pk: 1,
        hash: 6,
        address: 0,
        role: 4
      }
    }
  }
}
});
```

### createWallet

```js
const result = await client.createWallet({
  passphrase: 'Ball',
  type: {
    pk: 0,
    hash: 14,
    address: 0,
    role: 1
  },
  moniker: 'Extended'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 22,
  token: 'HTTP',
  wallet: {
    type: {
      pk: 0,
      hash: 0,
      address: 0,
      role: 2
    },
    sk: Uint8Array [
      52
    ],
    pk: Uint8Array [
      163
    ],
    address: '987ca910a2a62d944b8862b43bfe0736a784ff2a'
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
      pk: 0,
      hash: 13,
      address: 0,
      role: 8
    },
    sk: Uint8Array [
      137
    ],
    pk: Uint8Array [
      67
    ],
    address: '840bb27812e5ebecdbc63821354be3159473eb47'
  }
}
});
```

### getAccountState

```js
const stream = client.getAccountState({
  address: 'df449c54b6b0c306d54b58c074e83d46e1ff5ee3',
  keys: [
    'Legacy',
    'RSS'
  ],
  height: 93655
});

// output
{
  code: 36,
  state: {
    balance: '12244',
    nonce: 48367,
    numTxs: 10042,
    address: 'a65aa101de3059b164d759ead06265835023f6c0',
    pk: Uint8Array [
      140
    ],
    type: {
      pk: 1,
      hash: 0,
      address: 0,
      role: 1
    },
    moniker: 'transmit',
    context: {
      genesisTx: 'Investment Account',
      renaissanceTx: 'Auto Loan Account',
      genesisTime: '2019-03-01T22:34:59.171Z',
      renaissanceTime: '2019-03-01T22:34:59.171Z'
    },
    migratedTo: [
      'RAM',
      'proactive'
    ],
    migratedFrom: [
      'Wooden',
      'teal'
    ],
    numAssets: 27939,
    stake: {
      totalStakes: '46662',
      totalUnstakes: '1621',
      totalReceivedStakes: '15367',
      recentStakes: {
        items: [
          Uint8Array [
            52
          ],
          Uint8Array [
            20
          ]
        ],
        typeUrl: 'Handcrafted Plastic Towels',
        maxItems: 37222,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [
            209
          ],
          Uint8Array [
            183
          ]
        ],
        typeUrl: 'Fish',
        maxItems: 79656,
        circular: undefined,
        fifo: undefined
      }
    },
    pinnedFiles: {
      items: [
        Uint8Array [
          52
        ],
        Uint8Array [
          249
        ]
      ],
      typeUrl: 'methodologies',
      maxItems: 71796,
      circular: undefined,
      fifo: undefined
    },
    data: {
      type: 'WalletType',
      value: {
        pk: 1,
        hash: 7,
        address: 1,
        role: 0
      }
    }
  }
}
```

### getAssetAddress

```js
const result = await client.getAssetAddress({
  senderAddress: 'Grocery',
  itx: {
    moniker: 'Dominican Peso',
    data: {
      type: 'WalletType',
      value: {
        pk: 1,
        hash: 13,
        address: 0,
        role: 8
      }
    },
    readonly: undefined,
    expiredAt: '2019-03-01T22:34:59.172Z'
  },
  walletType: {
    pk: 1,
    hash: 1,
    address: 1,
    role: 7
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 25,
  assetAddress: 'envisioneer'
}
});
```

### getAssetState

```js
const stream = client.getAssetState({
  address: '61269c1fb815116b4f316639d177f5d60c3a2fb6',
  keys: [
    'Universal',
    'Personal Loan Account'
  ],
  height: 84284
});

// output
{
  code: 16,
  state: {
    address: 'cdd533c9e616a287ab6231742bfd4c8f7fbc0773',
    owner: 'Buckinghamshire',
    moniker: 'Auto Loan Account',
    readonly: undefined,
    activated: undefined,
    expiredAt: '2019-03-01T22:34:59.172Z',
    stake: {
      totalStakes: '99600',
      totalUnstakes: '28212',
      totalReceivedStakes: '30648',
      recentStakes: {
        items: [
          Uint8Array [
            60
          ],
          Uint8Array [
            234
          ]
        ],
        typeUrl: 'Rustic',
        maxItems: 41041,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [
            12
          ],
          Uint8Array [
            153
          ]
        ],
        typeUrl: 'Washington',
        maxItems: 18969,
        circular: undefined,
        fifo: undefined
      }
    },
    context: {
      genesisTx: 'Alabama',
      renaissanceTx: 'Ohio',
      genesisTime: '2019-03-01T22:34:59.172Z',
      renaissanceTime: '2019-03-01T22:34:59.172Z'
    },
    data: {
      type: 'WalletType',
      value: {
        pk: 0,
        hash: 13,
        address: 1,
        role: 6
      }
    }
  }
}
```

### getAssets

```js
const result = await client.getAssets({
  paging: {
    cursor: 'XSS',
    size: 36506,
    order: [
      {
        field: 'Coordinator',
        type: 'Borders'
      },
      {
        field: 'Handcrafted',
        type: 'empower'
      }
    ]
  },
  ownerAddress: '6th generation'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 5,
  page: {
    cursor: 'Portugal',
    next: undefined,
    total: 15077
  },
  assets: [
    {
      address: '0cee60d9400a21fabb4735df7afc45c5eff624a2',
      owner: 'redefine',
      genesisTime: 'tan',
      renaissanceTime: 'Lithuanian Litas',
      moniker: 'Iowa',
      readonly: undefined
    },
    {
      address: 'cac7b0b234cc386b57e73767f2dc7e6863e218dc',
      owner: 'Optimization',
      genesisTime: 'parsing',
      renaissanceTime: 'Analyst',
      moniker: 'circuit',
      readonly: undefined
    }
  ]
}
});
```

### getBlock

```js
const stream = client.getBlock({
  height: 98455
});

// output
{
  code: 0,
  block: {
    height: 92036,
    numTxs: 31312,
    time: '2019-03-01T22:34:59.173Z',
    appHash: 'fe19bfa9f626c8f9a62c67d7903a7589bde2e875',
    proposer: 'ac1165249eadca553541c279e38cb0edfbf610af',
    txs: [
      {
        tx: {
          from: '026ec3ee40609010b27f3ba7162e9cb5fea7ca11',
          nonce: 22836,
          signature: Uint8Array [
            11
          ],
          chainId: 'Associate',
          signatures: [
            {
              key: Uint8Array [
                70
              ],
              value: Uint8Array [
                190
              ]
            },
            {
              key: Uint8Array [
                165
              ],
              value: Uint8Array [
                63
              ]
            }
          ],
          itx: {
            type: 'WalletType',
            value: {
              pk: 1,
              hash: 0,
              address: 0,
              role: 0
            }
          }
        },
        height: 47431,
        index: 24328,
        hash: 'f68ea98793339edb7a2e6eab8e43f07ce4fa92c2',
        tags: [
          {
            key: Uint8Array [
              137
            ],
            value: Uint8Array [
              169
            ]
          },
          {
            key: Uint8Array [
              221
            ],
            value: Uint8Array [
              25
            ]
          }
        ],
        code: 27
      },
      {
        tx: {
          from: '8ea8b2db60c019263d858399a9d091b02cb9ea31',
          nonce: 38920,
          signature: Uint8Array [
            53
          ],
          chainId: 'cutting-edge',
          signatures: [
            {
              key: Uint8Array [
                1
              ],
              value: Uint8Array [
                3
              ]
            },
            {
              key: Uint8Array [
                34
              ],
              value: Uint8Array [
                73
              ]
            }
          ],
          itx: {
            type: 'WalletType',
            value: {
              pk: 1,
              hash: 0,
              address: 1,
              role: 5
            }
          }
        },
        height: 24038,
        index: 91169,
        hash: '871c7c8e47ab7c0cda65e96dc78ea6cc475beef2',
        tags: [
          {
            key: Uint8Array [
              145
            ],
            value: Uint8Array [
              200
            ]
          },
          {
            key: Uint8Array [
              137
            ],
            value: Uint8Array [
              241
            ]
          }
        ],
        code: 6
      }
    ],
    totalTxs: 21692
  }
}
```

### getBlocks

```js
const result = await client.getBlocks({
  paging: {
    cursor: 'Guyana',
    size: 42437,
    order: [
      {
        field: 'JSON',
        type: 'Practical Granite Table'
      },
      {
        field: 'Mississippi',
        type: 'Concrete'
      }
    ]
  },
  minHeight: 67091,
  maxHeight: 17285,
  emptyExcluded: undefined
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 3,
  page: {
    cursor: 'Officer',
    next: undefined,
    total: 95106
  },
  blocks: [
    {
      height: 47509,
      numTxs: 8716,
      time: '2019-03-01T22:34:59.174Z',
      appHash: '921e4c59ed80d98b72e84790ca1faaedb17963cc',
      proposer: 'fcf33f28f0584a6835cc755ef07c25886e2632e0',
      txs: [
        {
          tx: {
            from: '0cdca576769f7fa77a20c2591763c2d14b41770e',
            nonce: 35002,
            signature: Uint8Array [
              255
            ],
            chainId: 'withdrawal',
            signatures: [
              {
                key: Uint8Array [
                  73
                ],
                value: Uint8Array [
                  126
                ]
              },
              {
                key: Uint8Array [
                  196
                ],
                value: Uint8Array [
                  238
                ]
              }
            ],
            itx: {
              type: 'WalletType',
              value: {
                pk: 0,
                hash: 7,
                address: 1,
                role: 7
              }
            }
          },
          height: 27414,
          index: 3482,
          hash: 'd993e6633b4ec3032cf0cef72e1851595b69da9a',
          tags: [
            {
              key: Uint8Array [
                133
              ],
              value: Uint8Array [
                87
              ]
            },
            {
              key: Uint8Array [
                94
              ],
              value: Uint8Array [
                119
              ]
            }
          ],
          code: 5
        },
        {
          tx: {
            from: '81204b49dc7924515f0feb0d5f4bc7041d62f9a7',
            nonce: 82107,
            signature: Uint8Array [
              72
            ],
            chainId: 'Universal',
            signatures: [
              {
                key: Uint8Array [
                  96
                ],
                value: Uint8Array [
                  92
                ]
              },
              {
                key: Uint8Array [
                  150
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
                hash: 0,
                address: 0,
                role: 3
              }
            }
          },
          height: 30322,
          index: 48528,
          hash: '16e3b22fb669fde6096953e3060c6546afef8641',
          tags: [
            {
              key: Uint8Array [
                219
              ],
              value: Uint8Array [
                52
              ]
            },
            {
              key: Uint8Array [
                40
              ],
              value: Uint8Array [
                179
              ]
            }
          ],
          code: 17
        }
      ],
      totalTxs: 56685
    },
    {
      height: 14436,
      numTxs: 92326,
      time: '2019-03-01T22:34:59.175Z',
      appHash: '39ecacaf388dc8652de51e3903be0884a502cf55',
      proposer: '2b566e1b43081d1939a4ff9f5cf6d556e767055c',
      txs: [
        {
          tx: {
            from: 'b7ad4d0edd61d431f90f0515a8f69d34c7c0a38e',
            nonce: 30333,
            signature: Uint8Array [
              101
            ],
            chainId: 'Circles',
            signatures: [
              {
                key: Uint8Array [
                  203
                ],
                value: Uint8Array [
                  59
                ]
              },
              {
                key: Uint8Array [
                  113
                ],
                value: Uint8Array [
                  176
                ]
              }
            ],
            itx: {
              type: 'WalletType',
              value: {
                pk: 0,
                hash: 14,
                address: 1,
                role: 4
              }
            }
          },
          height: 99363,
          index: 56890,
          hash: '8334657735ea7270cb17505f36e0fe0323373102',
          tags: [
            {
              key: Uint8Array [
                1
              ],
              value: Uint8Array [
                184
              ]
            },
            {
              key: Uint8Array [
                200
              ],
              value: Uint8Array [
                22
              ]
            }
          ],
          code: 3
        },
        {
          tx: {
            from: '2d38200b0c02665d39ea9a6c6d0faab0b11ea3b2',
            nonce: 53971,
            signature: Uint8Array [
              76
            ],
            chainId: 'Producer',
            signatures: [
              {
                key: Uint8Array [
                  138
                ],
                value: Uint8Array [
                  40
                ]
              },
              {
                key: Uint8Array [
                  147
                ],
                value: Uint8Array [
                  56
                ]
              }
            ],
            itx: {
              type: 'WalletType',
              value: {
                pk: 0,
                hash: 1,
                address: 1,
                role: 7
              }
            }
          },
          height: 31691,
          index: 70946,
          hash: 'e62f2bbfea39d9fccc4505df9248066afe186131',
          tags: [
            {
              key: Uint8Array [
                38
              ],
              value: Uint8Array [
                68
              ]
            },
            {
              key: Uint8Array [
                110
              ],
              value: Uint8Array [
                83
              ]
            }
          ],
          code: 38
        }
      ],
      totalTxs: 78518
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
  code: 34,
  info: {
    id: 'override',
    network: 'Soft',
    moniker: 'Computer',
    consensusVersion: 'Investment Account',
    synced: undefined,
    appHash: 'b44c2c4d59ea234164790ff1704f0084a57e2097',
    blockHash: Uint8Array [
      69
    ],
    blockHeight: 50808,
    blockTime: '2019-03-01T22:34:59.176Z',
    address: '7c2799efeabe7ff264417090a3b50968909aa23b',
    votingPower: 57848,
    totalTxs: 90263,
    version: 'red',
    dataVersion: 'sky blue',
    forgeAppsVersion: {
      'function randomWord (type) {\n\n    var wordMethods = [\n    \'commerce.department\',\n    \'commerce.productName\',\n    \'commerce.productAdjective\',\n    \'commerce.productMaterial\',\n    \'commerce.product\',\n    \'commerce.color\',\n\n    \'company.catchPhraseAdjective\',\n    \'company.catchPhraseDescriptor\',\n    \'company.catchPhraseNoun\',\n    \'company.bsAdjective\',\n    \'company.bsBuzz\',\n    \'company.bsNoun\',\n    \'address.streetSuffix\',\n    \'address.county\',\n    \'address.country\',\n    \'address.state\',\n\n    \'finance.accountName\',\n    \'finance.transactionType\',\n    \'finance.currencyName\',\n\n    \'hacker.noun\',\n    \'hacker.verb\',\n    \'hacker.adjective\',\n    \'hacker.ingverb\',\n    \'hacker.abbreviation\',\n\n    \'name.jobDescriptor\',\n    \'name.jobArea\',\n    \'name.jobType\'];\n\n    // randomly pick from the many faker methods that can generate words\n    var randomWordMethod = faker.random.arrayElement(wordMethods);\n    return faker.fake(\'{{\' + randomWordMethod + \'}}\');\n\n  }': 'Savings Account'
    },
    supportedTxs: [
      'Slovenia',
      'Slovakia (Slovak Republic)'
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
  code: 42,
  config: 'web-readiness'
}
});
```

### getForgeState

```js
const result = await client.getForgeState({
  keys: [
    'empower',
    'Salad'
  ],
  height: 96972
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 24,
  state: {
    address: '9d5375313d1385e5334f20f585065b49b6742296',
    consensus: {
      maxBytes: 75769,
      maxGas: 50091,
      maxValidators: 93071,
      maxCandidates: 57317,
      pubKeyTypes: [
        'Secured',
        'Sri Lanka Rupee'
      ],
      validators: [
        {
          address: '2a69af06617a8cc20376278a542404083c111305',
          power: 39763
        },
        {
          address: '24e4c9c0660b4a4a828941fcf7d6e2a021f61745',
          power: 73689
        }
      ],
      validatorChanged: undefined,
      paramChanged: undefined
    },
    tasks: {
      'function (options) {\n\n    if (typeof options === "number") {\n      options = {\n        max: options\n      };\n    }\n\n    options = options || {};\n\n    if (typeof options.min === "undefined") {\n      options.min = 0;\n    }\n\n    if (typeof options.max === "undefined") {\n      options.max = 99999;\n    }\n    if (typeof options.precision === "undefined") {\n      options.precision = 1;\n    }\n\n    // Make the range inclusive of the max value\n    var max = options.max;\n    if (max >= 0) {\n      max += options.precision;\n    }\n\n    var randomNumber = Math.floor(\n      mersenne.rand(max / options.precision, options.min / options.precision));\n    // Workaround problem in Float point arithmetics for e.g. 6681493 / 0.01\n    randomNumber = randomNumber / (1 / options.precision);\n\n    return randomNumber;\n\n  }': {
        item: [
          {
            type: 12,
            dataHash: 'Romania',
            actions: [
              undefined,
              undefined
            ]
          },
          {
            type: 4,
            dataHash: 'productize',
            actions: [
              undefined,
              undefined
            ]
          }
        ]
      }
    },
    stakeSummary: {
      'function (options) {\n\n    if (typeof options === "number") {\n      options = {\n        max: options\n      };\n    }\n\n    options = options || {};\n\n    if (typeof options.min === "undefined") {\n      options.min = 0;\n    }\n\n    if (typeof options.max === "undefined") {\n      options.max = 99999;\n    }\n    if (typeof options.precision === "undefined") {\n      options.precision = 1;\n    }\n\n    // Make the range inclusive of the max value\n    var max = options.max;\n    if (max >= 0) {\n      max += options.precision;\n    }\n\n    var randomNumber = Math.floor(\n      mersenne.rand(max / options.precision, options.min / options.precision));\n    // Workaround problem in Float point arithmetics for e.g. 6681493 / 0.01\n    randomNumber = randomNumber / (1 / options.precision);\n\n    return randomNumber;\n\n  }': {
        totalStakes: '16003',
        totalUnstakes: '9596',
        context: {
          genesisTx: 'SQL',
          renaissanceTx: 'even-keeled',
          genesisTime: '2019-03-01T22:34:59.176Z',
          renaissanceTime: '2019-03-01T22:34:59.176Z'
        }
      }
    },
    version: 'National',
    dataVersion: 'overriding',
    forgeAppHash: Uint8Array [
      30
    ],
    data: {
      type: 'WalletType',
      value: {
        pk: 1,
        hash: 7,
        address: 1,
        role: 7
      }
    }
  }
}
});
```

### getForgeStatistics

```js
const result = await client.getForgeStatistics({
  dayInfo: {
    startDate: 'Soft',
    endDate: 'solutions'
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 6,
  forgeStatistics: {
    numBlocks: [
      8844,
      21742
    ],
    numTxs: [
      36840,
      9570
    ],
    numStakes: [
      '47750',
      '73031'
    ],
    numValidators: [
      158,
      85776
    ],
    numAccountMigrateTxs: [
      55747,
      25155
    ],
    numCreateAssetTxs: [
      39247,
      38471
    ],
    numConsensusUpgradeTxs: [
      4626,
      99597
    ],
    numDeclareTxs: [
      60575,
      69975
    ],
    numDeclareFileTxs: [
      97640,
      56829
    ],
    numExchangeTxs: [
      76268,
      31355
    ],
    numStakeTxs: [
      6844,
      77547
    ],
    numSysUpgradeTxs: [
      33344,
      66064
    ],
    numTransferTxs: [
      89275,
      70733
    ],
    numUpdateAssetTxs: [
      22956,
      4202
    ],
    numActivateAssetTxs: [
      83434,
      61522
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
  code: 30,
  netInfo: {
    listening: undefined,
    listeners: [
      'GB',
      'asynchronous'
    ],
    nPeers: 57793,
    peers: [
      {
        id: 'application',
        network: 'bypass',
        consensusVersion: 'Fields',
        moniker: 'Direct',
        ip: 'PNG',
        geoInfo: {
          city: 'Regional',
          country: 'GB',
          latitude: 50425.42,
          longitude: 91232.6
        }
      },
      {
        id: 'Cordoba Oro',
        network: 'Compatible',
        consensusVersion: 'Handcrafted',
        moniker: 'revolutionary',
        ip: 'redundant',
        geoInfo: {
          city: 'multi-byte',
          country: 'Avon',
          latitude: 39739.01,
          longitude: 56905.78
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
  code: 41,
  info: {
    id: 'morph',
    network: 'Legacy',
    moniker: 'Computer',
    consensusVersion: 'Product',
    synced: undefined,
    appHash: '3d0e5542fe23cbc3def0c39b1891b4bf0acda6fc',
    blockHash: Uint8Array [
      79
    ],
    blockHeight: 96295,
    blockTime: '2019-03-01T22:34:59.177Z',
    address: '15d3174e8314bb2063b121f857704e83b57e6553',
    votingPower: 52110,
    totalTxs: 62354,
    version: 'SMTP',
    dataVersion: 'Rubber',
    forgeAppsVersion: {
      'function randomWord (type) {\n\n    var wordMethods = [\n    \'commerce.department\',\n    \'commerce.productName\',\n    \'commerce.productAdjective\',\n    \'commerce.productMaterial\',\n    \'commerce.product\',\n    \'commerce.color\',\n\n    \'company.catchPhraseAdjective\',\n    \'company.catchPhraseDescriptor\',\n    \'company.catchPhraseNoun\',\n    \'company.bsAdjective\',\n    \'company.bsBuzz\',\n    \'company.bsNoun\',\n    \'address.streetSuffix\',\n    \'address.county\',\n    \'address.country\',\n    \'address.state\',\n\n    \'finance.accountName\',\n    \'finance.transactionType\',\n    \'finance.currencyName\',\n\n    \'hacker.noun\',\n    \'hacker.verb\',\n    \'hacker.adjective\',\n    \'hacker.ingverb\',\n    \'hacker.abbreviation\',\n\n    \'name.jobDescriptor\',\n    \'name.jobArea\',\n    \'name.jobType\'];\n\n    // randomly pick from the many faker methods that can generate words\n    var randomWordMethod = faker.random.arrayElement(wordMethods);\n    return faker.fake(\'{{\' + randomWordMethod + \'}}\');\n\n  }': 'neural'
    },
    supportedTxs: [
      'calculating',
      'reboot'
    ],
    ip: 'action-items',
    geoInfo: {
      city: 'multi-state',
      country: 'port',
      latitude: 35275.1,
      longitude: 75956.02
    }
  }
}
});
```

### getStakeState

```js
const stream = client.getStakeState({
  address: '51ea3200a333046f58cab61ed218cca8c25d5604',
  keys: [
    'program',
    'wireless'
  ],
  height: 70523
});

// output
{
  code: 42,
  state: {
    address: '854024e6e07ff61ac13f4eadbfc8575a23a7dec9',
    from: 'a9628d28a5b5d3c681dc478e7d430887544d007d',
    to: '0c7e2e54d61e1e3703917f776ef297fedb01ffd4',
    balance: '54772',
    message: 'Architect',
    context: {
      genesisTx: 'knowledge user',
      renaissanceTx: 'Agent',
      genesisTime: '2019-03-01T22:34:59.178Z',
      renaissanceTime: '2019-03-01T22:34:59.178Z'
    },
    data: {
      type: 'WalletType',
      value: {
        pk: 1,
        hash: 14,
        address: 1,
        role: 4
      }
    }
  }
}
```

### getStakes

```js
const result = await client.getStakes({
  paging: {
    cursor: 'AGP',
    size: 8283,
    order: [
      {
        field: 'Industrial',
        type: 'Portugal'
      },
      {
        field: 'payment',
        type: 'Drive'
      }
    ]
  },
  addressFilter: {
    sender: 'Integration',
    receiver: 'Refined',
    direction: 0
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 10,
  page: {
    cursor: 'policy',
    next: undefined,
    total: 16643
  },
  stakes: [
    {
      address: '11acb5934ec546f431876c2e461e4fe717ee757f',
      balance: '17032',
      sender: 'navigate',
      receiver: 'District',
      genesisTime: 'RSS',
      renaissanceTime: 'Venezuela',
      message: 'Home Loan Account',
      type: 98839
    },
    {
      address: '88d2ad31dbc5d3a0ce0a639386d0e3f062c1e338',
      balance: '99015',
      sender: 'Texas',
      receiver: 'navigate',
      genesisTime: 'Checking Account',
      renaissanceTime: 'User-centric',
      message: 'Organic',
      type: 88646
    }
  ]
}
});
```

### getTopAccounts

```js
const result = await client.getTopAccounts({
  paging: {
    cursor: 'Towels',
    size: 55974,
    order: [
      {
        field: 'program',
        type: 'withdrawal'
      },
      {
        field: 'Gorgeous',
        type: 'EXE'
      }
    ]
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 26,
  page: {
    cursor: 'Ethiopian Birr',
    next: undefined,
    total: 99393
  },
  accounts: [
    {
      address: '18bbcd5edcb58eb71c78aa913a32a1b26929c6ba',
      balance: '56348',
      numAssets: 84253,
      numTxs: 67938,
      nonce: 14297,
      genesisTime: 'Health',
      renaissanceTime: 'SMTP',
      moniker: 'hack',
      migratedFrom: 'Checking Account',
      migratedTo: 'Rubber',
      totalReceivedStakes: '86722',
      totalStakes: '89386',
      totalUnstakes: '46604',
      recentNumTxs: [
        68203,
        93442
      ]
    },
    {
      address: '4f5e1545d331944581a73617dfdc98e6231bd343',
      balance: '57295',
      numAssets: 5676,
      numTxs: 91597,
      nonce: 78200,
      genesisTime: 'program',
      renaissanceTime: 'Engineer',
      moniker: 'cross-platform',
      migratedFrom: 'Pakistan Rupee',
      migratedTo: 'Checking Account',
      totalReceivedStakes: '61579',
      totalStakes: '96244',
      totalUnstakes: '54603',
      recentNumTxs: [
        3742,
        74718
      ]
    }
  ]
}
});
```

### getTx

```js
const stream = client.getTx({
  hash: '78711ad838b8a3fad1110925e53c0acb06413133'
});

// output
{
  code: 38,
  info: {
    tx: {
      from: 'a3d1d5d9ab5e811345477cf68d7a7f5076868a01',
      nonce: 27456,
      signature: Uint8Array [
        56
      ],
      chainId: 'Netherlands Antilles',
      signatures: [
        {
          key: Uint8Array [
            29
          ],
          value: Uint8Array [
            121
          ]
        },
        {
          key: Uint8Array [
            106
          ],
          value: Uint8Array [
            0
          ]
        }
      ],
      itx: {
        type: 'WalletType',
        value: {
          pk: 1,
          hash: 0,
          address: 0,
          role: 5
        }
      }
    },
    height: 41392,
    index: 43674,
    hash: '71de11da636e77b9ff3c654f80158d88e6e5ab1c',
    tags: [
      {
        key: Uint8Array [
          20
        ],
        value: Uint8Array [
          181
        ]
      },
      {
        key: Uint8Array [
          5
        ],
        value: Uint8Array [
          122
        ]
      }
    ],
    code: 7
  }
}
```

### getUnconfirmedTxs

```js
const result = await client.getUnconfirmedTxs({
  limit: 32360
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 9,
  unconfirmedTxs: {
    nTxs: 12247,
    txs: [
      {
        from: '53a0453c5a8d3070b0927cd68c9f07731dd88ebf',
        nonce: 56368,
        signature: Uint8Array [
          220
        ],
        chainId: 'French Southern Territories',
        signatures: [
          {
            key: Uint8Array [
              34
            ],
            value: Uint8Array [
              6
            ]
          },
          {
            key: Uint8Array [
              112
            ],
            value: Uint8Array [
              223
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 6,
            address: 1,
            role: 8
          }
        }
      },
      {
        from: 'cd58804dd0655cb0d8e17e37f66f76b9ec7a4513',
        nonce: 95514,
        signature: Uint8Array [
          28
        ],
        chainId: 'Response',
        signatures: [
          {
            key: Uint8Array [
              123
            ],
            value: Uint8Array [
              212
            ]
          },
          {
            key: Uint8Array [
              188
            ],
            value: Uint8Array [
              202
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 13,
            address: 0,
            role: 1
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
  code: 16,
  validatorsInfo: {
    blockHeight: 68141,
    validators: [
      {
        address: 'd98c43136e3860830992105777282c3951ee985d',
        pubKey: {
          type: 'Generic',
          data: Uint8Array [
            231
          ]
        },
        votingPower: 55733,
        proposerPriority: 'Representative',
        name: 'invoice'
      },
      {
        address: '2785601cb463fce0bb51c2dff38f5c1fabd6707a',
        pubKey: {
          type: 'Small',
          data: Uint8Array [
            243
          ]
        },
        votingPower: 46272,
        proposerPriority: 'XSS',
        name: 'interface'
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
    cursor: 'architect',
    size: 97405,
    order: [
      {
        field: 'Managed',
        type: 'Home'
      },
      {
        field: 'Trace',
        type: 'Savings Account'
      }
    ]
  },
  address: '945285090d432a2d8f9519b4b13bb0f62d98c121'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 25,
  page: {
    cursor: 'Legacy',
    next: undefined,
    total: 2526
  },
  transactions: [
    {
      hash: '9b573664da034711d840c656936ed9fb152983d8',
      sender: 'Auto Loan Account',
      receiver: 'Optimization',
      time: 'Liaison',
      type: 'Paraguay',
      tx: {
        from: '98cac4115767d5beaa9a10d9b5eb4430bf77a1df',
        nonce: 49741,
        signature: Uint8Array [
          121
        ],
        chainId: 'Intuitive',
        signatures: [
          {
            key: Uint8Array [
              78
            ],
            value: Uint8Array [
              49
            ]
          },
          {
            key: Uint8Array [
              69
            ],
            value: Uint8Array [
              49
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 13,
            address: 0,
            role: 8
          }
        }
      }
    },
    {
      hash: '33dd6e718f09ddd14f96af0e2f05b0c25b034e02',
      sender: 'Cheese',
      receiver: 'Hat',
      time: 'Internal',
      type: 'Ways',
      tx: {
        from: '3310a6bccc3df2ffed55a9749f868e28cb09e64b',
        nonce: 97819,
        signature: Uint8Array [
          86
        ],
        chainId: 'quantifying',
        signatures: [
          {
            key: Uint8Array [
              18
            ],
            value: Uint8Array [
              54
            ]
          },
          {
            key: Uint8Array [
              2
            ],
            value: Uint8Array [
              46
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 6,
            address: 1,
            role: 6
          }
        }
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
    cursor: 'Handcrafted Wooden Computer',
    size: 74971,
    order: [
      {
        field: 'UAE Dirham',
        type: 'niches'
      },
      {
        field: 'Table',
        type: 'maximize'
      }
    ]
  },
  timeFilter: {
    startDateTime: 'Sleek',
    endDateTime: 'maroon'
  },
  addressFilter: {
    sender: 'Corner',
    receiver: 'card',
    direction: 2
  },
  typeFilter: {
    types: [
      'New Israeli Sheqel',
      'Bedfordshire'
    ]
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 25,
  page: {
    cursor: 'Ohio',
    next: undefined,
    total: 50472
  },
  transactions: [
    {
      hash: '08734e775585fff4971a6f53e4e332f2f87cb307',
      sender: 'Technician',
      receiver: 'Cambridgeshire',
      time: 'Director',
      type: 'Configurable',
      tx: {
        from: '704825bc50f4d2956c083ff9572604a6b68f4385',
        nonce: 16538,
        signature: Uint8Array [
          114
        ],
        chainId: 'Ergonomic Rubber Sausages',
        signatures: [
          {
            key: Uint8Array [
              153
            ],
            value: Uint8Array [
              224
            ]
          },
          {
            key: Uint8Array [
              166
            ],
            value: Uint8Array [
              212
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 13,
            address: 1,
            role: 6
          }
        }
      }
    },
    {
      hash: '6a4147ae5744b76fb645b8c03b0e25eb670aed32',
      sender: 'TCP',
      receiver: 'Oklahoma',
      time: 'maximized',
      type: 'Intelligent',
      tx: {
        from: 'cdbc840afaa7d86343f11a6b98216fc67e4b9744',
        nonce: 41417,
        signature: Uint8Array [
          236
        ],
        chainId: 'New Hampshire',
        signatures: [
          {
            key: Uint8Array [
              144
            ],
            value: Uint8Array [
              117
            ]
          },
          {
            key: Uint8Array [
              57
            ],
            value: Uint8Array [
              222
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 6,
            address: 0,
            role: 1
          }
        }
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
  code: 403,
  address: 'd898853aca14cb3368ffe9e1f79eafbc6ce7bb68'
}
```

### loadFile

```js
const stream = client.loadFile({
  hash: 'd42ff327ca3942cc4f4cfa826ab685fad571310e'
});

// output
{
  code: 33,
  chunk: Uint8Array [
    133
  ]
}
```

### loadWallet

```js
const result = await client.loadWallet({
  address: 'e02a93babe161db183a8ad68ba2d7be69598cdb2',
  passphrase: 'reboot'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 3,
  token: 'Pizza',
  wallet: {
    type: {
      pk: 0,
      hash: 6,
      address: 1,
      role: 3
    },
    sk: Uint8Array [
      132
    ],
    pk: Uint8Array [
      162
    ],
    address: 'ad667f755ad6dbe153824532622e19b654e8571f'
  }
}
});
```

### multisig

```js
const result = await client.multisig({
  tx: {
    from: 'b1c8a65389d9aefc688ab1871908ea8d1dfe853e',
    nonce: 1664,
    signature: Uint8Array [
      89
    ],
    chainId: 'Tuna',
    signatures: [
      {
        key: Uint8Array [
          31
        ],
        value: Uint8Array [
          207
        ]
      },
      {
        key: Uint8Array [
          69
        ],
        value: Uint8Array [
          39
        ]
      }
    ],
    itx: {
      type: 'WalletType',
      value: {
        pk: 1,
        hash: 1,
        address: 1,
        role: 6
      }
    }
  },
  wallet: {
    type: {
      pk: 0,
      hash: 7,
      address: 1,
      role: 0
    },
    sk: Uint8Array [
      25
    ],
    pk: Uint8Array [
      92
    ],
    address: '3a50e058bb5f4e9d9c36699bed95e0478eb11ddb'
  },
  token: 'Money Market Account'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 5,
  tx: {
    from: '2161eaed41d7a8653307439c19be49a9827ce7b7',
    nonce: 60674,
    signature: Uint8Array [
      67
    ],
    chainId: 'bandwidth',
    signatures: [
      {
        key: Uint8Array [
          187
        ],
        value: Uint8Array [
          197
        ]
      },
      {
        key: Uint8Array [
          87
        ],
        value: Uint8Array [
          201
        ]
      }
    ],
    itx: {
      type: 'WalletType',
      value: {
        pk: 0,
        hash: 1,
        address: 0,
        role: 4
      }
    }
  }
}
});
```

### pinFile

```js
const result = await client.pinFile({
  hash: 'e5814034041b0c58040ad9ea46cfef83ab008940'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 500
}
});
```

### process

```js
const stream = client.process({
  verifyTx: {
    tx: {
      from: 'b9cf2e99de66b23e1bfd3114d4fb183db7cc6966',
      nonce: 36316,
      signature: Uint8Array [
        128
      ],
      chainId: 'optical',
      signatures: [
        {
          key: Uint8Array [
            107
          ],
          value: Uint8Array [
            39
          ]
        },
        {
          key: Uint8Array [
            47
          ],
          value: Uint8Array [
            151
          ]
        }
      ],
      itx: {
        type: 'WalletType',
        value: {
          pk: 0,
          hash: 14,
          address: 0,
          role: 8
        }
      }
    },
    states: [
      {
        balance: '68750',
        nonce: 86171,
        numTxs: 21638,
        address: '87cd980b5d2271b2e2c5aadca0d20f5283468c03',
        pk: Uint8Array [
          53
        ],
        type: {
          pk: 0,
          hash: 1,
          address: 0,
          role: 5
        },
        moniker: 'Jordanian Dinar',
        context: {
          genesisTx: 'payment',
          renaissanceTx: 'Rubber',
          genesisTime: '2019-03-01T22:34:59.184Z',
          renaissanceTime: '2019-03-01T22:34:59.184Z'
        },
        migratedTo: [
          'navigate',
          'Buckinghamshire'
        ],
        migratedFrom: [
          'Unbranded Wooden Gloves',
          'platforms'
        ],
        numAssets: 42540,
        stake: {
          totalStakes: '98552',
          totalUnstakes: '89600',
          totalReceivedStakes: '4026',
          recentStakes: {
            items: [
              Uint8Array [
                90
              ],
              Uint8Array [
                146
              ]
            ],
            typeUrl: 'Tunisian Dinar',
            maxItems: 74647,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                146
              ],
              Uint8Array [
                90
              ]
            ],
            typeUrl: 'Automotive',
            maxItems: 14233,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              112
            ],
            Uint8Array [
              152
            ]
          ],
          typeUrl: 'Planner',
          maxItems: 2617,
          circular: undefined,
          fifo: undefined
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 7,
            address: 0,
            role: 4
          }
        }
      },
      {
        balance: '45923',
        nonce: 86820,
        numTxs: 27060,
        address: '70245993c4ef4f91c3c36175c331c88540657f42',
        pk: Uint8Array [
          183
        ],
        type: {
          pk: 1,
          hash: 6,
          address: 0,
          role: 3
        },
        moniker: 'Health',
        context: {
          genesisTx: 'XML',
          renaissanceTx: 'Realigned',
          genesisTime: '2019-03-01T22:34:59.184Z',
          renaissanceTime: '2019-03-01T22:34:59.184Z'
        },
        migratedTo: [
          'cultivate',
          'Intranet'
        ],
        migratedFrom: [
          'Savings Account',
          'Steel'
        ],
        numAssets: 98365,
        stake: {
          totalStakes: '48071',
          totalUnstakes: '45998',
          totalReceivedStakes: '52103',
          recentStakes: {
            items: [
              Uint8Array [
                160
              ],
              Uint8Array [
                210
              ]
            ],
            typeUrl: 'upward-trending',
            maxItems: 73570,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                169
              ],
              Uint8Array [
                167
              ]
            ],
            typeUrl: 'Sports',
            maxItems: 47037,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              109
            ],
            Uint8Array [
              100
            ]
          ],
          typeUrl: 'backing up',
          maxItems: 90496,
          circular: undefined,
          fifo: undefined
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 0,
            address: 1,
            role: 1
          }
        }
      }
    ],
    assets: [
      {
        address: '4939817d7b58197f282b96fdaf2fb9d1b91cf90b',
        owner: 'Refined',
        moniker: 'Directives',
        readonly: undefined,
        activated: undefined,
        expiredAt: '2019-03-01T22:34:59.184Z',
        stake: {
          totalStakes: '79487',
          totalUnstakes: '39662',
          totalReceivedStakes: '21939',
          recentStakes: {
            items: [
              Uint8Array [
                12
              ],
              Uint8Array [
                200
              ]
            ],
            typeUrl: 'bluetooth',
            maxItems: 48126,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                98
              ],
              Uint8Array [
                126
              ]
            ],
            typeUrl: 'policy',
            maxItems: 1346,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Ohio',
          renaissanceTx: 'open-source',
          genesisTime: '2019-03-01T22:34:59.184Z',
          renaissanceTime: '2019-03-01T22:34:59.184Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 14,
            address: 1,
            role: 1
          }
        }
      },
      {
        address: 'db4c49162e298bb2218e72f3823b0cbb0fa89808',
        owner: 'Analyst',
        moniker: 'Planner',
        readonly: undefined,
        activated: undefined,
        expiredAt: '2019-03-01T22:34:59.185Z',
        stake: {
          totalStakes: '54471',
          totalUnstakes: '60789',
          totalReceivedStakes: '87922',
          recentStakes: {
            items: [
              Uint8Array [
                104
              ],
              Uint8Array [
                246
              ]
            ],
            typeUrl: 'RSS',
            maxItems: 56052,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                129
              ],
              Uint8Array [
                229
              ]
            ],
            typeUrl: 'Hill',
            maxItems: 91596,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Ball',
          renaissanceTx: 'Shoes',
          genesisTime: '2019-03-01T22:34:59.185Z',
          renaissanceTime: '2019-03-01T22:34:59.185Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 1,
            address: 0,
            role: 3
          }
        }
      }
    ],
    stakes: [
      {
        address: 'ca73a0669ca660470d70cf2d03c0d3f2f4fab0ae',
        from: '0ce39d2a0508105f9d52de9f5f3a1b86ab0f06a2',
        to: '0cbfbd314334a8f1f2ea3fab2439535c7a76d0d3',
        balance: '51870',
        message: 'user-centric',
        context: {
          genesisTx: 'Beauty',
          renaissanceTx: 'Computers',
          genesisTime: '2019-03-01T22:34:59.185Z',
          renaissanceTime: '2019-03-01T22:34:59.185Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 14,
            address: 0,
            role: 4
          }
        }
      },
      {
        address: '1b7e062af2dd9fc0ba7cfe54744a84915b364791',
        from: '4a1085f4303f10e0f85868673a8cf32469e2e15b',
        to: 'f5a7cdb41d13b7db85a7cbd7803206f38a6963a1',
        balance: '92121',
        message: 'product',
        context: {
          genesisTx: 'deposit',
          renaissanceTx: 'fault-tolerant',
          genesisTime: '2019-03-01T22:34:59.186Z',
          renaissanceTime: '2019-03-01T22:34:59.186Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 6,
            address: 1,
            role: 8
          }
        }
      }
    ],
    context: {
      txHash: 'd46b9289ce034380984573efb73cd9a47d7ea2c8',
      blockHeight: 75025,
      blockTime: '2019-03-01T22:34:59.186Z',
      totalTxs: 28487,
      txStatistics: {
        numAccountMigrateTxs: 62226,
        numCreateAssetTxs: 44536,
        numConsensusUpgradeTxs: 88109,
        numDeclareTxs: 64828,
        numDeclareFileTxs: 31554,
        numExchangeTxs: 53924,
        numStakeTxs: 5875,
        numSysUpgradeTxs: 49018,
        numTransferTxs: 9688,
        numUpdateAssetTxs: 38681,
        numActivateAssetTxs: 31422
      },
      txIndex: 12689,
      lastBlockTime: '2019-03-01T22:34:59.186Z'
    },
    appState: {
      address: '756abfee3093bb5fead707ac0241e36304d21447',
      consensus: {
        maxBytes: 17341,
        maxGas: 89276,
        maxValidators: 12959,
        maxCandidates: 90167,
        pubKeyTypes: [
          'Personal Loan Account',
          'Tunisia'
        ],
        validators: [
          {
            address: 'f3c9d52e7f820840afd338d06be8b2b585a7ec83',
            power: 42206
          },
          {
            address: '41ca8ed4e96b0818488330d7f8eba9eaae7dae77',
            power: 30273
          }
        ],
        validatorChanged: undefined,
        paramChanged: undefined
      },
      tasks: {
        'function (options) {\n\n    if (typeof options === "number") {\n      options = {\n        max: options\n      };\n    }\n\n    options = options || {};\n\n    if (typeof options.min === "undefined") {\n      options.min = 0;\n    }\n\n    if (typeof options.max === "undefined") {\n      options.max = 99999;\n    }\n    if (typeof options.precision === "undefined") {\n      options.precision = 1;\n    }\n\n    // Make the range inclusive of the max value\n    var max = options.max;\n    if (max >= 0) {\n      max += options.precision;\n    }\n\n    var randomNumber = Math.floor(\n      mersenne.rand(max / options.precision, options.min / options.precision));\n    // Workaround problem in Float point arithmetics for e.g. 6681493 / 0.01\n    randomNumber = randomNumber / (1 / options.precision);\n\n    return randomNumber;\n\n  }': {
          item: [
            {
              type: 0,
              dataHash: 'Home',
              actions: [
                undefined,
                undefined
              ]
            },
            {
              type: 1,
              dataHash: 'Ohio',
              actions: [
                undefined,
                undefined
              ]
            }
          ]
        }
      },
      stakeSummary: {
        'function (options) {\n\n    if (typeof options === "number") {\n      options = {\n        max: options\n      };\n    }\n\n    options = options || {};\n\n    if (typeof options.min === "undefined") {\n      options.min = 0;\n    }\n\n    if (typeof options.max === "undefined") {\n      options.max = 99999;\n    }\n    if (typeof options.precision === "undefined") {\n      options.precision = 1;\n    }\n\n    // Make the range inclusive of the max value\n    var max = options.max;\n    if (max >= 0) {\n      max += options.precision;\n    }\n\n    var randomNumber = Math.floor(\n      mersenne.rand(max / options.precision, options.min / options.precision));\n    // Workaround problem in Float point arithmetics for e.g. 6681493 / 0.01\n    randomNumber = randomNumber / (1 / options.precision);\n\n    return randomNumber;\n\n  }': {
          totalStakes: '22671',
          totalUnstakes: '72012',
          context: {
            genesisTx: 'wireless',
            renaissanceTx: 'methodologies',
            genesisTime: '2019-03-01T22:34:59.186Z',
            renaissanceTime: '2019-03-01T22:34:59.186Z'
          }
        }
      },
      version: 'Dynamic',
      dataVersion: 'pixel',
      forgeAppHash: Uint8Array [
        71
      ],
      data: {
        type: 'WalletType',
        value: {
          pk: 1,
          hash: 13,
          address: 0,
          role: 7
        }
      }
    }
  }
});

// output
{
  verifyTx: {
    code: 0
  }
}
```

### processOne

```js
const result = await client.processOne({
  verifyTx: {
    tx: {
      from: '1cb5c536df9e97e74f682cf9ad0e0dd52e39b381',
      nonce: 91550,
      signature: Uint8Array [
        247
      ],
      chainId: 'quantifying',
      signatures: [
        {
          key: Uint8Array [
            50
          ],
          value: Uint8Array [
            229
          ]
        },
        {
          key: Uint8Array [
            165
          ],
          value: Uint8Array [
            181
          ]
        }
      ],
      itx: {
        type: 'WalletType',
        value: {
          pk: 1,
          hash: 0,
          address: 1,
          role: 4
        }
      }
    },
    states: [
      {
        balance: '40424',
        nonce: 51539,
        numTxs: 85389,
        address: 'c93f6e9d09970195ec7ebc7f055387e7add5b440',
        pk: Uint8Array [
          38
        ],
        type: {
          pk: 1,
          hash: 7,
          address: 1,
          role: 4
        },
        moniker: 'Table',
        context: {
          genesisTx: 'partnerships',
          renaissanceTx: 'capacitor',
          genesisTime: '2019-03-01T22:34:59.187Z',
          renaissanceTime: '2019-03-01T22:34:59.187Z'
        },
        migratedTo: [
          'Home Loan Account',
          'Wooden'
        ],
        migratedFrom: [
          'Implementation',
          'harness'
        ],
        numAssets: 94632,
        stake: {
          totalStakes: '74998',
          totalUnstakes: '19399',
          totalReceivedStakes: '86088',
          recentStakes: {
            items: [
              Uint8Array [
                181
              ],
              Uint8Array [
                76
              ]
            ],
            typeUrl: 'Road',
            maxItems: 51351,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                175
              ],
              Uint8Array [
                216
              ]
            ],
            typeUrl: 'toolset',
            maxItems: 31053,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              93
            ],
            Uint8Array [
              237
            ]
          ],
          typeUrl: 'Gloves',
          maxItems: 62408,
          circular: undefined,
          fifo: undefined
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 0,
            address: 0,
            role: 5
          }
        }
      },
      {
        balance: '98607',
        nonce: 5656,
        numTxs: 65811,
        address: '98085d38d57bb7bb154dd92413041b7aebc4fbf1',
        pk: Uint8Array [
          63
        ],
        type: {
          pk: 1,
          hash: 7,
          address: 0,
          role: 5
        },
        moniker: 'Officer',
        context: {
          genesisTx: 'Health',
          renaissanceTx: 'Music',
          genesisTime: '2019-03-01T22:34:59.187Z',
          renaissanceTime: '2019-03-01T22:34:59.187Z'
        },
        migratedTo: [
          'Electronics',
          'payment'
        ],
        migratedFrom: [
          'open-source',
          'Security'
        ],
        numAssets: 98734,
        stake: {
          totalStakes: '70625',
          totalUnstakes: '13958',
          totalReceivedStakes: '55852',
          recentStakes: {
            items: [
              Uint8Array [
                146
              ],
              Uint8Array [
                120
              ]
            ],
            typeUrl: 'Coordinator',
            maxItems: 32189,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                130
              ],
              Uint8Array [
                167
              ]
            ],
            typeUrl: 'experiences',
            maxItems: 2293,
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
              104
            ]
          ],
          typeUrl: 'Mexico',
          maxItems: 33187,
          circular: undefined,
          fifo: undefined
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 7,
            address: 1,
            role: 4
          }
        }
      }
    ],
    assets: [
      {
        address: '3ac63ed2fbd84836db4e3df2ca45a0a6714b1f72',
        owner: 'navigating',
        moniker: 'interactive',
        readonly: undefined,
        activated: undefined,
        expiredAt: '2019-03-01T22:34:59.187Z',
        stake: {
          totalStakes: '34786',
          totalUnstakes: '17862',
          totalReceivedStakes: '17037',
          recentStakes: {
            items: [
              Uint8Array [
                233
              ],
              Uint8Array [
                106
              ]
            ],
            typeUrl: 'AGP',
            maxItems: 31705,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                10
              ],
              Uint8Array [
                109
              ]
            ],
            typeUrl: 'Money Market Account',
            maxItems: 37532,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'French Polynesia',
          renaissanceTx: 'asynchronous',
          genesisTime: '2019-03-01T22:34:59.187Z',
          renaissanceTime: '2019-03-01T22:34:59.187Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 13,
            address: 0,
            role: 5
          }
        }
      },
      {
        address: '839950f1f7ef8572805f6dedbe8a8e2c6895f32a',
        owner: 'Fantastic',
        moniker: 'Facilitator',
        readonly: undefined,
        activated: undefined,
        expiredAt: '2019-03-01T22:34:59.188Z',
        stake: {
          totalStakes: '13202',
          totalUnstakes: '96871',
          totalReceivedStakes: '73210',
          recentStakes: {
            items: [
              Uint8Array [
                28
              ],
              Uint8Array [
                70
              ]
            ],
            typeUrl: 'zero defect',
            maxItems: 34073,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                108
              ],
              Uint8Array [
                34
              ]
            ],
            typeUrl: 'collaboration',
            maxItems: 57624,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'payment',
          renaissanceTx: 'Granite',
          genesisTime: '2019-03-01T22:34:59.188Z',
          renaissanceTime: '2019-03-01T22:34:59.188Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 14,
            address: 1,
            role: 6
          }
        }
      }
    ],
    stakes: [
      {
        address: '4f8c86a7b194322e50531fab76391510ec5e60f0',
        from: '33fdae50b3aa61d5dd02ef2659b7e39454335cf3',
        to: '12f45e8face54a84a237b28a56e3ad575f195302',
        balance: '88642',
        message: 'Computer',
        context: {
          genesisTx: 'COM',
          renaissanceTx: 'mint green',
          genesisTime: '2019-03-01T22:34:59.188Z',
          renaissanceTime: '2019-03-01T22:34:59.188Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 13,
            address: 0,
            role: 1
          }
        }
      },
      {
        address: 'c6c65535edb9c8be4fb60be87c7d85861d735050',
        from: 'e67eecfd0ad04cce4d3497547c32ac34a29dde4d',
        to: '27c91d9919a24eaaf3321330ceea6081f8edbe33',
        balance: '32532',
        message: 'proactive',
        context: {
          genesisTx: 'Configuration',
          renaissanceTx: 'Borders',
          genesisTime: '2019-03-01T22:34:59.188Z',
          renaissanceTime: '2019-03-01T22:34:59.188Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 14,
            address: 1,
            role: 5
          }
        }
      }
    ],
    context: {
      txHash: '5d1230b065b169fac2982726d9e49ba3a0a2612b',
      blockHeight: 59409,
      blockTime: '2019-03-01T22:34:59.188Z',
      totalTxs: 62640,
      txStatistics: {
        numAccountMigrateTxs: 79416,
        numCreateAssetTxs: 40536,
        numConsensusUpgradeTxs: 67658,
        numDeclareTxs: 88804,
        numDeclareFileTxs: 57139,
        numExchangeTxs: 42302,
        numStakeTxs: 63077,
        numSysUpgradeTxs: 85568,
        numTransferTxs: 79328,
        numUpdateAssetTxs: 92424,
        numActivateAssetTxs: 64207
      },
      txIndex: 49145,
      lastBlockTime: '2019-03-01T22:34:59.188Z'
    },
    appState: {
      address: 'd22ef9365eedf65dbaf9c38f1b778e42b29efcd1',
      consensus: {
        maxBytes: 21746,
        maxGas: 60436,
        maxValidators: 53970,
        maxCandidates: 58715,
        pubKeyTypes: [
          'Nuevo Sol',
          'Small'
        ],
        validators: [
          {
            address: 'dec1b842b4ade2134bf19d0f36fe5275556fa434',
            power: 33713
          },
          {
            address: 'cd2f8a556c4e681fae87f382f8608ff992cba010',
            power: 19542
          }
        ],
        validatorChanged: undefined,
        paramChanged: undefined
      },
      tasks: {
        'function (options) {\n\n    if (typeof options === "number") {\n      options = {\n        max: options\n      };\n    }\n\n    options = options || {};\n\n    if (typeof options.min === "undefined") {\n      options.min = 0;\n    }\n\n    if (typeof options.max === "undefined") {\n      options.max = 99999;\n    }\n    if (typeof options.precision === "undefined") {\n      options.precision = 1;\n    }\n\n    // Make the range inclusive of the max value\n    var max = options.max;\n    if (max >= 0) {\n      max += options.precision;\n    }\n\n    var randomNumber = Math.floor(\n      mersenne.rand(max / options.precision, options.min / options.precision));\n    // Workaround problem in Float point arithmetics for e.g. 6681493 / 0.01\n    randomNumber = randomNumber / (1 / options.precision);\n\n    return randomNumber;\n\n  }': {
          item: [
            {
              type: 11,
              dataHash: 'Pula',
              actions: [
                undefined,
                undefined
              ]
            },
            {
              type: 10,
              dataHash: 'Personal Loan Account',
              actions: [
                undefined,
                undefined
              ]
            }
          ]
        }
      },
      stakeSummary: {
        'function (options) {\n\n    if (typeof options === "number") {\n      options = {\n        max: options\n      };\n    }\n\n    options = options || {};\n\n    if (typeof options.min === "undefined") {\n      options.min = 0;\n    }\n\n    if (typeof options.max === "undefined") {\n      options.max = 99999;\n    }\n    if (typeof options.precision === "undefined") {\n      options.precision = 1;\n    }\n\n    // Make the range inclusive of the max value\n    var max = options.max;\n    if (max >= 0) {\n      max += options.precision;\n    }\n\n    var randomNumber = Math.floor(\n      mersenne.rand(max / options.precision, options.min / options.precision));\n    // Workaround problem in Float point arithmetics for e.g. 6681493 / 0.01\n    randomNumber = randomNumber / (1 / options.precision);\n\n    return randomNumber;\n\n  }': {
          totalStakes: '12880',
          totalUnstakes: '43578',
          context: {
            genesisTx: 'primary',
            renaissanceTx: 'Avon',
            genesisTime: '2019-03-01T22:34:59.188Z',
            renaissanceTime: '2019-03-01T22:34:59.188Z'
          }
        }
      },
      version: 'input',
      dataVersion: 'Tuna',
      forgeAppHash: Uint8Array [
        102
      ],
      data: {
        type: 'WalletType',
        value: {
          pk: 1,
          hash: 6,
          address: 0,
          role: 5
        }
      }
    }
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  verifyTx: {
    code: 9
  }
}
});
```

### recoverWallet

```js
const result = await client.recoverWallet({
  data: Uint8Array [
    137
  ],
  type: {
    pk: 1,
    hash: 1,
    address: 0,
    role: 0
  },
  passphrase: 'transition',
  moniker: 'radical'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 25,
  token: 'Agent',
  wallet: {
    type: {
      pk: 0,
      hash: 6,
      address: 0,
      role: 3
    },
    sk: Uint8Array [
      148
    ],
    pk: Uint8Array [
      162
    ],
    address: 'e5ac20848af5b2590777d6e73d54dbf14d15d1b0'
  }
}
});
```

### removeWallet

```js
const result = await client.removeWallet({
  address: '9cbf0fd9fba242b05869d0e5be0fd9b94113cc16'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 21
}
});
```

### search

```js
const result = await client.search({
  key: 'River',
  value: 'Clothing'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 27,
  txs: [
    {
      tx: {
        from: '2b48640e84364569b42970241a935e556a5ce293',
        nonce: 71422,
        signature: Uint8Array [
          41
        ],
        chainId: 'Automotive',
        signatures: [
          {
            key: Uint8Array [
              133
            ],
            value: Uint8Array [
              62
            ]
          },
          {
            key: Uint8Array [
              135
            ],
            value: Uint8Array [
              230
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 14,
            address: 0,
            role: 1
          }
        }
      },
      height: 94759,
      index: 74977,
      hash: 'b21940e26c0b770d928e60223bc77caef5c6b690',
      tags: [
        {
          key: Uint8Array [
            161
          ],
          value: Uint8Array [
            204
          ]
        },
        {
          key: Uint8Array [
            114
          ],
          value: Uint8Array [
            106
          ]
        }
      ],
      code: 7
    },
    {
      tx: {
        from: 'df81826dc95dce3362fa240b5855f985a16564ef',
        nonce: 24125,
        signature: Uint8Array [
          13
        ],
        chainId: 'B2B',
        signatures: [
          {
            key: Uint8Array [
              224
            ],
            value: Uint8Array [
              27
            ]
          },
          {
            key: Uint8Array [
              89
            ],
            value: Uint8Array [
              124
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 0,
            address: 1,
            role: 4
          }
        }
      },
      height: 39041,
      index: 5789,
      hash: '9d90d5a0a7bc2973acaf21857ed48c253fab2f92',
      tags: [
        {
          key: Uint8Array [
            18
          ],
          value: Uint8Array [
            160
          ]
        },
        {
          key: Uint8Array [
            216
          ],
          value: Uint8Array [
            34
          ]
        }
      ],
      code: 0
    }
  ]
}
});
```

### sendTx

```js
const result = await client.sendTx({
  tx: {
    from: 'ca665f96c8894d88f82506324ec34bf4b8bde235',
    nonce: 72613,
    signature: Uint8Array [
      141
    ],
    chainId: 'Hill',
    signatures: [
      {
        key: Uint8Array [
          192
        ],
        value: Uint8Array [
          111
        ]
      },
      {
        key: Uint8Array [
          107
        ],
        value: Uint8Array [
          151
        ]
      }
    ],
    itx: {
      type: 'WalletType',
      value: {
        pk: 1,
        hash: 6,
        address: 0,
        role: 2
      }
    }
  },
  wallet: {
    type: {
      pk: 0,
      hash: 6,
      address: 0,
      role: 8
    },
    sk: Uint8Array [
      5
    ],
    pk: Uint8Array [
      154
    ],
    address: '76704b602a87cdcbc4686622f61f7dda4f317301'
  },
  token: 'withdrawal',
  commit: undefined
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 30,
  hash: '77d70f751d5076432f1283d3d3b5e69c9948fd0e'
}
});
```

### signData

```js
const result = await client.signData({
  data: Uint8Array [
    120
  ],
  wallet: {
    type: {
      pk: 1,
      hash: 7,
      address: 0,
      role: 5
    },
    sk: Uint8Array [
      229
    ],
    pk: Uint8Array [
      33
    ],
    address: '6010db0ac03930600687b5cdbd6019d047874ba7'
  },
  token: 'Horizontal'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 500,
  signature: Uint8Array [
    177
  ]
}
});
```

### storeFile

```js
const result = await client.storeFile({
  chunk: Uint8Array [
    189
  ]
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 26,
  hash: '12448738406814c0c5deeedad3e86e19706cf9f7'
}
});
```

### subscribe

```js
const stream = client.subscribe({
  type: 130,
  filter: 'portals'
});

// output
{
  topic: 'Fish'
}
```

### unsubscribe

```js
const result = await client.unsubscribe({
  topic: 'backing up'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 33
}
});
```


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |
