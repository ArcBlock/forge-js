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
  * [SupportedTxs](#supportedtxs)
  * [SupportedStakes](#supportedstakes)
* [RPC Methods](#rpc-methods)
  * [createTx](#createtx)
  * [createWallet](#createwallet)
  * [declareNode](#declarenode)
  * [getAccountState](#getaccountstate)
  * [getAssetAddress](#getassetaddress)
  * [getAssetState](#getassetstate)
  * [getBlock](#getblock)
  * [getBlocks](#getblocks)
  * [getChainInfo](#getchaininfo)
  * [getConfig](#getconfig)
  * [getForgeState](#getforgestate)
  * [getForgeStatistics](#getforgestatistics)
  * [getNetInfo](#getnetinfo)
  * [getStakeState](#getstakestate)
  * [getTx](#gettx)
  * [getUnconfirmedTxs](#getunconfirmedtxs)
  * [getValidatorsInfo](#getvalidatorsinfo)
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

### SupportedTxs

```js
[
  'AccountMigrateTx',
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
      pk: 0,
      hash: 13,
      address: 0,
      role: 4
    }
  },
  from: '482d1ccc2418adc008d8e1fe33c3be17ae38f41a',
  nonce: 81561,
  wallet: {
    type: {
      pk: 1,
      hash: 7,
      address: 1,
      role: 5
    },
    sk: Uint8Array [
      121
    ],
    pk: Uint8Array [
      157
    ],
    address: 'bed61624c86ed34ea6b2431e2f2015a2afea826a'
  },
  token: 'Universal'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 0,
  tx: {
    from: '8a987e1cf02b3752eee29aa5f7992a4eb3b4d4f5',
    nonce: 93534,
    signature: Uint8Array [
      217
    ],
    chainId: 'deposit',
    signatures: [
      {
        key: Uint8Array [
          241
        ],
        value: Uint8Array [
          141
        ]
      },
      {
        key: Uint8Array [
          5
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
        hash: 6,
        address: 1,
        role: 0
      }
    }
  }
}
});
```

### createWallet

```js
const result = await client.createWallet({
  passphrase: 'transparent',
  type: {
    pk: 0,
    hash: 13,
    address: 0,
    role: 0
  },
  moniker: 'leading edge'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 16,
  token: 'mission-critical',
  wallet: {
    type: {
      pk: 1,
      hash: 0,
      address: 0,
      role: 8
    },
    sk: Uint8Array [
      57
    ],
    pk: Uint8Array [
      214
    ],
    address: 'c6681dca7c938f2c2bd4880f577302e8fda05431'
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
  code: 6,
  wallet: {
    type: {
      pk: 0,
      hash: 13,
      address: 1,
      role: 1
    },
    sk: Uint8Array [
      213
    ],
    pk: Uint8Array [
      191
    ],
    address: 'a3434fdce00eee1d54fdcfcb4c39c7238709322a'
  }
}
});
```

### getAccountState

```js
const stream = client.getAccountState({
  address: 'b0f4b36dca5497a9ffea9bb87e3274e7ced41c61',
  keys: [
    'Licensed Fresh Mouse',
    'Bahamas'
  ],
  appHash: '39956dfe80e91f2ca52942dd532fd9bb73ab55c1'
});

// output
{
  code: 35,
  state: {
    balance: '17870',
    nonce: 98152,
    numTxs: 93085,
    address: 'eaa2ab58c83bbbe0c36f73d3b0a2b210350ed318',
    pk: Uint8Array [
      232
    ],
    type: {
      pk: 1,
      hash: 13,
      address: 1,
      role: 6
    },
    moniker: 'Awesome Soft Chicken',
    context: {
      genesisTx: 'collaboration',
      renaissanceTx: 'national',
      genesisTime: '2019-02-20T04:05:34.949Z',
      renaissanceTime: '2019-02-20T04:05:34.949Z'
    },
    migratedTo: [
      'Horizontal',
      'Bedfordshire'
    ],
    migratedFrom: [
      'Throughway',
      'cutting-edge'
    ],
    numAssets: 33649,
    stake: {
      totalStakes: '16290',
      totalUnstakes: '27282',
      totalReceivedStakes: '48317',
      recentStakes: {
        items: [
          Uint8Array [
            251
          ],
          Uint8Array [
            152
          ]
        ],
        typeUrl: 'engage',
        maxItems: 18001,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [
            62
          ],
          Uint8Array [
            205
          ]
        ],
        typeUrl: 'Savings Account',
        maxItems: 65114,
        circular: undefined,
        fifo: undefined
      }
    },
    pinnedFiles: {
      items: [
        Uint8Array [
          18
        ],
        Uint8Array [
          106
        ]
      ],
      typeUrl: 'Virgin Islands, British',
      maxItems: 8959,
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
  }
}
```

### getAssetAddress

```js
const result = await client.getAssetAddress({
  senderAddress: 'intangible',
  itx: {
    moniker: 'Towels',
    data: {
      type: 'WalletType',
      value: {
        pk: 1,
        hash: 13,
        address: 1,
        role: 4
      }
    },
    readonly: undefined
  },
  walletType: {
    pk: 0,
    hash: 6,
    address: 1,
    role: 8
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 27,
  assetAddress: 'array'
}
});
```

### getAssetState

```js
const stream = client.getAssetState({
  address: '00470ec17318984bd3f5bc4427191a8323758e5b',
  keys: [
    'Metal',
    'online'
  ],
  appHash: 'f018a48101930acf682793fc5039daa749cbef36'
});

// output
{
  code: 5,
  state: {
    address: '8e8b40c7da0c66351096078d521d54514cade299',
    owner: 'Arkansas',
    moniker: 'Marketing',
    readonly: undefined,
    stake: {
      totalStakes: '3196',
      totalUnstakes: '28556',
      totalReceivedStakes: '83355',
      recentStakes: {
        items: [
          Uint8Array [
            134
          ],
          Uint8Array [
            239
          ]
        ],
        typeUrl: 'Lakes',
        maxItems: 36170,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [
            244
          ],
          Uint8Array [
            211
          ]
        ],
        typeUrl: 'Club',
        maxItems: 33638,
        circular: undefined,
        fifo: undefined
      }
    },
    context: {
      genesisTx: 'hacking',
      renaissanceTx: 'Bike',
      genesisTime: '2019-02-20T04:05:34.950Z',
      renaissanceTime: '2019-02-20T04:05:34.950Z'
    },
    data: {
      type: 'WalletType',
      value: {
        pk: 0,
        hash: 14,
        address: 1,
        role: 8
      }
    }
  }
}
```

### getBlock

```js
const stream = client.getBlock({
  height: 30486
});

// output
{
  code: 36,
  block: {
    height: 83122,
    numTxs: 27477,
    time: '2019-02-20T04:05:34.950Z',
    appHash: '350eca88f6ceb110393c5d268fcac1ea677ddda6',
    proposer: '36d2d234b1d8f8c163417262009074446df63597',
    txs: [
      {
        tx: {
          from: '9c67304c24bb02bf47192d8d00d2df3033891237',
          nonce: 79704,
          signature: Uint8Array [
            10
          ],
          chainId: 'optimize',
          signatures: [
            {
              key: Uint8Array [
                136
              ],
              value: Uint8Array [
                31
              ]
            },
            {
              key: Uint8Array [
                94
              ],
              value: Uint8Array [
                5
              ]
            }
          ],
          itx: {
            type: 'WalletType',
            value: {
              pk: 1,
              hash: 13,
              address: 1,
              role: 4
            }
          }
        },
        height: 17315,
        index: 49810,
        hash: '3cd90399aec8ca4e05708b9a9f9b96b891263ce6',
        tags: [
          {
            key: Uint8Array [
              125
            ],
            value: Uint8Array [
              233
            ]
          },
          {
            key: Uint8Array [
              143
            ],
            value: Uint8Array [
              179
            ]
          }
        ],
        code: 37
      },
      {
        tx: {
          from: '9501cf2db59189df151be236b90681be015951cd',
          nonce: 27604,
          signature: Uint8Array [
            119
          ],
          chainId: 'Hat',
          signatures: [
            {
              key: Uint8Array [
                32
              ],
              value: Uint8Array [
                70
              ]
            },
            {
              key: Uint8Array [
                167
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
              hash: 7,
              address: 0,
              role: 8
            }
          }
        },
        height: 23829,
        index: 14635,
        hash: 'b362cf7d377434c4389a497450181373e4b416c1',
        tags: [
          {
            key: Uint8Array [
              86
            ],
            value: Uint8Array [
              47
            ]
          },
          {
            key: Uint8Array [
              79
            ],
            value: Uint8Array [
              130
            ]
          }
        ],
        code: 403
      }
    ],
    totalTxs: 45786
  }
}
```

### getBlocks

```js
const result = await client.getBlocks({
  minHeight: 69841,
  maxHeight: 9203
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 17,
  blocks: [
    {
      height: 83052,
      numTxs: 4816,
      time: '2019-02-20T04:05:34.950Z',
      appHash: '91e619a4b7528aa798522f0385157f5abffdaa99',
      proposer: 'b0b599765fc3488a22d0b7ce4354f43d1c0b3411',
      txs: [
        {
          tx: {
            from: 'cc3ed16707e102998d73e3c0d3f73e1b233deaef',
            nonce: 93555,
            signature: Uint8Array [
              22
            ],
            chainId: 'Chief',
            signatures: [
              {
                key: Uint8Array [
                  32
                ],
                value: Uint8Array [
                  198
                ]
              },
              {
                key: Uint8Array [
                  124
                ],
                value: Uint8Array [
                  21
                ]
              }
            ],
            itx: {
              type: 'WalletType',
              value: {
                pk: 0,
                hash: 14,
                address: 1,
                role: 7
              }
            }
          },
          height: 14169,
          index: 41027,
          hash: '01cda207683b1b9ac67a8cbb64d2551664f698d6',
          tags: [
            {
              key: Uint8Array [
                198
              ],
              value: Uint8Array [
                151
              ]
            },
            {
              key: Uint8Array [
                147
              ],
              value: Uint8Array [
                29
              ]
            }
          ],
          code: 34
        },
        {
          tx: {
            from: '43084bd5ce7dec07e5ee1b35212f88312e0d9a9e',
            nonce: 68399,
            signature: Uint8Array [
              193
            ],
            chainId: 'synthesize',
            signatures: [
              {
                key: Uint8Array [
                  241
                ],
                value: Uint8Array [
                  91
                ]
              },
              {
                key: Uint8Array [
                  19
                ],
                value: Uint8Array [
                  216
                ]
              }
            ],
            itx: {
              type: 'WalletType',
              value: {
                pk: 0,
                hash: 1,
                address: 1,
                role: 2
              }
            }
          },
          height: 19413,
          index: 30682,
          hash: '3705728f1a42c38b098d41c2d532213cc838849a',
          tags: [
            {
              key: Uint8Array [
                13
              ],
              value: Uint8Array [
                8
              ]
            },
            {
              key: Uint8Array [
                181
              ],
              value: Uint8Array [
                195
              ]
            }
          ],
          code: 25
        }
      ],
      totalTxs: 29375
    },
    {
      height: 63351,
      numTxs: 7199,
      time: '2019-02-20T04:05:34.951Z',
      appHash: '501ebe54bb3c2e9b5e46c19f1ea1f1e36f876063',
      proposer: '3f3bb65598d56ab386624b1eb9cabf4286e31588',
      txs: [
        {
          tx: {
            from: '0001e2759735f15ed14f63ce3ad81c708d564b8b',
            nonce: 5143,
            signature: Uint8Array [
              231
            ],
            chainId: 'Gourde US Dollar',
            signatures: [
              {
                key: Uint8Array [
                  17
                ],
                value: Uint8Array [
                  26
                ]
              },
              {
                key: Uint8Array [
                  66
                ],
                value: Uint8Array [
                  118
                ]
              }
            ],
            itx: {
              type: 'WalletType',
              value: {
                pk: 0,
                hash: 1,
                address: 0,
                role: 7
              }
            }
          },
          height: 10824,
          index: 79743,
          hash: '836e39179dcd1aa7c164414519bcb4f923f0a705',
          tags: [
            {
              key: Uint8Array [
                181
              ],
              value: Uint8Array [
                48
              ]
            },
            {
              key: Uint8Array [
                86
              ],
              value: Uint8Array [
                89
              ]
            }
          ],
          code: 7
        },
        {
          tx: {
            from: '51820c8030b93db3d3b0fb8a857f780e97e71254',
            nonce: 74326,
            signature: Uint8Array [
              76
            ],
            chainId: 'New Taiwan Dollar',
            signatures: [
              {
                key: Uint8Array [
                  54
                ],
                value: Uint8Array [
                  36
                ]
              },
              {
                key: Uint8Array [
                  199
                ],
                value: Uint8Array [
                  68
                ]
              }
            ],
            itx: {
              type: 'WalletType',
              value: {
                pk: 0,
                hash: 1,
                address: 1,
                role: 2
              }
            }
          },
          height: 92500,
          index: 81545,
          hash: 'ce71c97803be7a9c00f9c4e0b23260ab07b52c18',
          tags: [
            {
              key: Uint8Array [
                72
              ],
              value: Uint8Array [
                137
              ]
            },
            {
              key: Uint8Array [
                137
              ],
              value: Uint8Array [
                22
              ]
            }
          ],
          code: 4
        }
      ],
      totalTxs: 4405
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
  code: 403,
  info: {
    id: 'Mouse',
    network: 'Tasty',
    moniker: 'bypassing',
    consensusVersion: 'synthesize',
    synced: undefined,
    appHash: 'ba4ecfd77a9a9ef4575cbd9f1b9a0ab6d1ddb47e',
    blockHash: Uint8Array [
      30
    ],
    blockHeight: 52789,
    blockTime: '2019-02-20T04:05:34.952Z',
    address: 'a88ab6e3d84213dfb7a8095d1e1015d444a7454c',
    votingPower: 83948,
    totalTxs: 62059,
    version: 'deposit',
    dataVersion: 'auxiliary',
    forgeAppsVersion: {
      'function randomWord (type) {\n\n    var wordMethods = [\n    \'commerce.department\',\n    \'commerce.productName\',\n    \'commerce.productAdjective\',\n    \'commerce.productMaterial\',\n    \'commerce.product\',\n    \'commerce.color\',\n\n    \'company.catchPhraseAdjective\',\n    \'company.catchPhraseDescriptor\',\n    \'company.catchPhraseNoun\',\n    \'company.bsAdjective\',\n    \'company.bsBuzz\',\n    \'company.bsNoun\',\n    \'address.streetSuffix\',\n    \'address.county\',\n    \'address.country\',\n    \'address.state\',\n\n    \'finance.accountName\',\n    \'finance.transactionType\',\n    \'finance.currencyName\',\n\n    \'hacker.noun\',\n    \'hacker.verb\',\n    \'hacker.adjective\',\n    \'hacker.ingverb\',\n    \'hacker.abbreviation\',\n\n    \'name.jobDescriptor\',\n    \'name.jobArea\',\n    \'name.jobType\'];\n\n    // randomly pick from the many faker methods that can generate words\n    var randomWordMethod = faker.random.arrayElement(wordMethods);\n    return faker.fake(\'{{\' + randomWordMethod + \'}}\');\n\n  }': 'Berkshire'
    },
    supportedTxs: [
      'EXE',
      'Junctions'
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
  code: 22,
  config: 'Baby'
}
});
```

### getForgeState

```js
const result = await client.getForgeState({
  keys: [
    'Dynamic',
    'flexibility'
  ],
  appHash: '37e57ebd91a7c7607c9253dada3624a9ac1f7253'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 33,
  state: {
    address: 'a3880f06eb4041e5cd457db82fe5161ea40e76a6',
    consensus: {
      maxBytes: 45908,
      maxGas: 45392,
      maxValidators: 90518,
      maxCandidates: 54866,
      pubKeyTypes: [
        'Health',
        'Cross-group'
      ],
      validators: [
        {
          address: '8e3e497568226984657cf1ba4e6a64137d45cf68',
          power: 33842
        },
        {
          address: '964dfb0800e31d8c4a4b319d9298ec148d36b39c',
          power: 15507
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
            dataHash: 'Supervisor',
            actions: [
              undefined,
              undefined
            ]
          },
          {
            type: 4,
            dataHash: 'Colorado',
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
        totalStakes: '85714',
        totalUnstakes: '1417',
        context: {
          genesisTx: 'sky blue',
          renaissanceTx: 'Tools',
          genesisTime: '2019-02-20T04:05:34.953Z',
          renaissanceTime: '2019-02-20T04:05:34.953Z'
        }
      }
    },
    version: 'time-frame',
    dataVersion: 'Interactions',
    forgeAppHash: Uint8Array [
      164
    ],
    data: {
      type: 'WalletType',
      value: {
        pk: 1,
        hash: 0,
        address: 0,
        role: 3
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
    startDate: 'Handcrafted',
    endDate: 'user-centric'
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 0,
  forgeStatistics: {
    numBlocks: [
      94880,
      66698
    ],
    numTxs: [
      34447,
      31263
    ],
    numStakes: [
      '63738',
      '78806'
    ],
    numValidators: [
      85029,
      69041
    ],
    numAccountMigrateTxs: [
      77796,
      29089
    ],
    numCreateAssetTxs: [
      1991,
      3900
    ],
    numConsensusUpgradeTxs: [
      34925,
      45988
    ],
    numDeclareTxs: [
      78382,
      19339
    ],
    numDeclareFileTxs: [
      7001,
      62963
    ],
    numExchangeTxs: [
      82776,
      49193
    ],
    numStakeTxs: [
      948,
      17176
    ],
    numSysUpgradeTxs: [
      51833,
      69725
    ],
    numTransferTxs: [
      86549,
      20269
    ],
    numUpdateAssetTxs: [
      22873,
      56092
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
  code: 2,
  netInfo: {
    listening: undefined,
    listeners: [
      'Reactive',
      'Bedfordshire'
    ],
    nPeers: 23944,
    peers: [
      {
        nodeInfo: {
          id: 'array',
          network: 'Plaza',
          consensusVersion: 'Kansas',
          moniker: 'SMS',
          ip: 'Checking Account',
          geoInfo: {
            city: 'architectures',
            country: 'Consultant',
            latitude: 32944.03,
            longitude: 9269.75
          }
        }
      },
      {
        nodeInfo: {
          id: 'Future',
          network: 'bleeding-edge',
          consensusVersion: 'B2C',
          moniker: 'Missouri',
          ip: 'calculate',
          geoInfo: {
            city: 'Chair',
            country: 'Causeway',
            latitude: 11409.53,
            longitude: 24082.44
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
  address: 'c1d862875aa3e209260733b967cbcb793b88e686',
  keys: [
    'tertiary',
    'indexing'
  ],
  appHash: '6c70f1a275e5cc5ce4bf80e19400451240cbc4aa'
});

// output
{
  code: 33,
  state: {
    address: 'ab460571f9c4ab56bcf6cf65d145b7acf509d344',
    from: '9ee02062c3a9b72d13c8a11ecc00e5c99ca41303',
    to: '1971bcbec27583ff4ca98716a135476a00399c8d',
    balance: '23472',
    message: 'capacitor',
    context: {
      genesisTx: 'capacitor',
      renaissanceTx: 'Fundamental',
      genesisTime: '2019-02-20T04:05:34.954Z',
      renaissanceTime: '2019-02-20T04:05:34.954Z'
    },
    data: {
      type: 'WalletType',
      value: {
        pk: 0,
        hash: 1,
        address: 0,
        role: 7
      }
    }
  }
}
```

### getTx

```js
const stream = client.getTx({
  hash: '9671ed1c51a68a60820944f64d5451a6dc2eb00b'
});

// output
{
  code: 3,
  info: {
    tx: {
      from: '4ee91173eaceceaea009b1d5006ecb717279d5f3',
      nonce: 82717,
      signature: Uint8Array [
        160
      ],
      chainId: 'Soap',
      signatures: [
        {
          key: Uint8Array [
            2
          ],
          value: Uint8Array [
            13
          ]
        },
        {
          key: Uint8Array [
            8
          ],
          value: Uint8Array [
            184
          ]
        }
      ],
      itx: {
        type: 'WalletType',
        value: {
          pk: 0,
          hash: 0,
          address: 0,
          role: 0
        }
      }
    },
    height: 1319,
    index: 69261,
    hash: '1bedbf66e8eb547b61e557c758d54f1d8cb56ded',
    tags: [
      {
        key: Uint8Array [
          184
        ],
        value: Uint8Array [
          5
        ]
      },
      {
        key: Uint8Array [
          236
        ],
        value: Uint8Array [
          140
        ]
      }
    ],
    code: 21
  }
}
```

### getUnconfirmedTxs

```js
const result = await client.getUnconfirmedTxs({
  limit: 43114
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 16,
  unconfirmedTxs: {
    nTxs: 90846,
    txs: [
      {
        from: '5fcb9893250aa775f9a3c38b2eed7ab96d0864ea',
        nonce: 48116,
        signature: Uint8Array [
          152
        ],
        chainId: 'Analyst',
        signatures: [
          {
            key: Uint8Array [
              162
            ],
            value: Uint8Array [
              200
            ]
          },
          {
            key: Uint8Array [
              254
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
            hash: 6,
            address: 0,
            role: 0
          }
        }
      },
      {
        from: 'c552da39cbe5ea33b933815c34088ba67be082d5',
        nonce: 55414,
        signature: Uint8Array [
          195
        ],
        chainId: 'Bacon',
        signatures: [
          {
            key: Uint8Array [
              218
            ],
            value: Uint8Array [
              167
            ]
          },
          {
            key: Uint8Array [
              225
            ],
            value: Uint8Array [
              44
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 14,
            address: 0,
            role: 4
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
  code: 32,
  validatorsInfo: {
    blockHeight: 45727,
    validators: [
      {
        address: 'ea306f67422342ea5119bc60e80f8e4ab6674ed4',
        pubKey: {
          type: 'open-source',
          data: Uint8Array [
            239
          ]
        },
        votingPower: 39634,
        proposerPriority: 'parse',
        name: 'Small'
      },
      {
        address: '890f1c92b05330414a0ee76e2a62ac2940f6d6cb',
        pubKey: {
          type: 'Bedfordshire',
          data: Uint8Array [
            157
          ]
        },
        votingPower: 25830,
        proposerPriority: 'secondary',
        name: 'Intranet'
      }
    ]
  }
}
});
```

### listTransactions

```js
const result = await client.listTransactions({
  paging: {
    cursor: 'Gorgeous',
    size: 71335,
    order: [
      {
        field: 'azure',
        type: 'Borders'
      },
      {
        field: 'mobile',
        type: 'static'
      }
    ]
  },
  timeFilter: {
    startDateTime: 'Vanuatu',
    endDateTime: 'bus'
  },
  addressFilter: {
    sender: 'Officer',
    receiver: 'indexing'
  },
  typeFilter: {
    types: [
      'Indiana',
      'empowering'
    ]
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 37,
  page: {
    cursor: 'Ergonomic',
    next: undefined,
    total: 60976
  },
  transactions: [
    {
      hash: 'f7c0bb0d16d0f7017c5a5fcc43907b6196d48e5b',
      sender: 'Checking Account',
      receiver: 'Compatible',
      time: 'ability',
      type: 'Quality',
      tx: {
        from: 'ea12306dc9b1de4758339544a28f399653f97260',
        nonce: 50668,
        signature: Uint8Array [
          238
        ],
        chainId: 'Sausages',
        signatures: [
          {
            key: Uint8Array [
              130
            ],
            value: Uint8Array [
              245
            ]
          },
          {
            key: Uint8Array [
              87
            ],
            value: Uint8Array [
              109
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 13,
            address: 0,
            role: 6
          }
        }
      }
    },
    {
      hash: 'adc721bada9af9d3bbef2c31b31290a55d609295',
      sender: 'Customizable',
      receiver: 'access',
      time: 'Home',
      type: 'Investor',
      tx: {
        from: '4cc83c99b272d43644273fffb416ea58d2b3eb37',
        nonce: 42942,
        signature: Uint8Array [
          82
        ],
        chainId: 'Health',
        signatures: [
          {
            key: Uint8Array [
              0
            ],
            value: Uint8Array [
              252
            ]
          },
          {
            key: Uint8Array [
              91
            ],
            value: Uint8Array [
              150
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 14,
            address: 1,
            role: 2
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
  code: 500,
  address: '843ebc7fd3ed47cc79a5b5172bc2190345059687'
}
```

### loadFile

```js
const stream = client.loadFile({
  hash: '53ce91d2fc6df512d3e195e63fd53db3f92ab6c3'
});

// output
{
  code: 22,
  chunk: Uint8Array [
    203
  ]
}
```

### loadWallet

```js
const result = await client.loadWallet({
  address: '04ce15f3c2559bb39a616f09b1ab11f0f2fb33bb',
  passphrase: 'Denmark'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 20,
  token: 'back up',
  wallet: {
    type: {
      pk: 0,
      hash: 13,
      address: 1,
      role: 4
    },
    sk: Uint8Array [
      37
    ],
    pk: Uint8Array [
      67
    ],
    address: '9206eeedbe7709ae4027a306517108638bb10903'
  }
}
});
```

### multisig

```js
const result = await client.multisig({
  tx: {
    from: '631dbfc10ea2ed60cf026108392a1b3ee9a98818',
    nonce: 74608,
    signature: Uint8Array [
      99
    ],
    chainId: 'value-added',
    signatures: [
      {
        key: Uint8Array [
          232
        ],
        value: Uint8Array [
          233
        ]
      },
      {
        key: Uint8Array [
          17
        ],
        value: Uint8Array [
          137
        ]
      }
    ],
    itx: {
      type: 'WalletType',
      value: {
        pk: 1,
        hash: 7,
        address: 0,
        role: 7
      }
    }
  },
  wallet: {
    type: {
      pk: 0,
      hash: 13,
      address: 1,
      role: 8
    },
    sk: Uint8Array [
      198
    ],
    pk: Uint8Array [
      131
    ],
    address: 'af673f8478237c74cdfc945d059152e81c2d794c'
  },
  token: 'Virtual'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 0,
  tx: {
    from: '2de670ff4e50274c1eb05b1c9be48ec83a50b3fb',
    nonce: 58303,
    signature: Uint8Array [
      207
    ],
    chainId: 'Operative',
    signatures: [
      {
        key: Uint8Array [
          157
        ],
        value: Uint8Array [
          148
        ]
      },
      {
        key: Uint8Array [
          66
        ],
        value: Uint8Array [
          226
        ]
      }
    ],
    itx: {
      type: 'WalletType',
      value: {
        pk: 0,
        hash: 1,
        address: 0,
        role: 8
      }
    }
  }
}
});
```

### pinFile

```js
const result = await client.pinFile({
  hash: 'ed7cff4d03943a9d813161332bb268ffe7060949'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 21
}
});
```

### process

```js
const stream = client.process({
  verifyTx: {
    tx: {
      from: 'ed540332490e7015d632db55b7c16c381f4a5744',
      nonce: 85621,
      signature: Uint8Array [
        172
      ],
      chainId: 'e-commerce',
      signatures: [
        {
          key: Uint8Array [
            34
          ],
          value: Uint8Array [
            178
          ]
        },
        {
          key: Uint8Array [
            234
          ],
          value: Uint8Array [
            170
          ]
        }
      ],
      itx: {
        type: 'WalletType',
        value: {
          pk: 1,
          hash: 7,
          address: 0,
          role: 7
        }
      }
    },
    states: [
      {
        balance: '88271',
        nonce: 47574,
        numTxs: 30119,
        address: '9b2653f2dbba8f4ec111168e0269fc95b69cef57',
        pk: Uint8Array [
          83
        ],
        type: {
          pk: 1,
          hash: 14,
          address: 1,
          role: 5
        },
        moniker: 'violet',
        context: {
          genesisTx: 'Island',
          renaissanceTx: 'Harbors',
          genesisTime: '2019-02-20T04:05:34.957Z',
          renaissanceTime: '2019-02-20T04:05:34.957Z'
        },
        migratedTo: [
          'innovative',
          'Rubber'
        ],
        migratedFrom: [
          'national',
          'Money Market Account'
        ],
        numAssets: 71144,
        stake: {
          totalStakes: '5656',
          totalUnstakes: '5909',
          totalReceivedStakes: '35417',
          recentStakes: {
            items: [
              Uint8Array [
                173
              ],
              Uint8Array [
                88
              ]
            ],
            typeUrl: 'global',
            maxItems: 79735,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                98
              ],
              Uint8Array [
                166
              ]
            ],
            typeUrl: 'Buckinghamshire',
            maxItems: 6233,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              14
            ],
            Uint8Array [
              156
            ]
          ],
          typeUrl: 'time-frame',
          maxItems: 74892,
          circular: undefined,
          fifo: undefined
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 1,
            address: 1,
            role: 8
          }
        }
      },
      {
        balance: '4757',
        nonce: 71443,
        numTxs: 64758,
        address: '65c7b8c9e245078ba36339231201fc001cd5c58d',
        pk: Uint8Array [
          170
        ],
        type: {
          pk: 1,
          hash: 0,
          address: 0,
          role: 0
        },
        moniker: 'IB',
        context: {
          genesisTx: 'Cambridgeshire',
          renaissanceTx: 'Internal',
          genesisTime: '2019-02-20T04:05:34.957Z',
          renaissanceTime: '2019-02-20T04:05:34.957Z'
        },
        migratedTo: [
          'Licensed',
          'Movies'
        ],
        migratedFrom: [
          'deposit',
          'bus'
        ],
        numAssets: 51543,
        stake: {
          totalStakes: '38512',
          totalUnstakes: '50105',
          totalReceivedStakes: '10897',
          recentStakes: {
            items: [
              Uint8Array [
                231
              ],
              Uint8Array [
                80
              ]
            ],
            typeUrl: 'Tactics',
            maxItems: 91951,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                131
              ],
              Uint8Array [
                234
              ]
            ],
            typeUrl: 'Representative',
            maxItems: 60859,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              192
            ],
            Uint8Array [
              114
            ]
          ],
          typeUrl: 'connecting',
          maxItems: 14746,
          circular: undefined,
          fifo: undefined
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 0,
            address: 0,
            role: 2
          }
        }
      }
    ],
    assets: [
      {
        address: '36cc648cda73830c56c098165295dbf9bdc601f5',
        owner: 'scalable',
        moniker: 'Team-oriented',
        readonly: undefined,
        stake: {
          totalStakes: '23343',
          totalUnstakes: '14343',
          totalReceivedStakes: '99704',
          recentStakes: {
            items: [
              Uint8Array [
                85
              ],
              Uint8Array [
                81
              ]
            ],
            typeUrl: 'Product',
            maxItems: 11417,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                222
              ],
              Uint8Array [
                137
              ]
            ],
            typeUrl: 'multi-byte',
            maxItems: 45985,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Identity',
          renaissanceTx: 'Savings Account',
          genesisTime: '2019-02-20T04:05:34.957Z',
          renaissanceTime: '2019-02-20T04:05:34.957Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 1,
            address: 0,
            role: 3
          }
        }
      },
      {
        address: 'e7ad3b277924e72113fecf255fc75b5738e74b46',
        owner: 'Avon',
        moniker: 'Refined',
        readonly: undefined,
        stake: {
          totalStakes: '81452',
          totalUnstakes: '80692',
          totalReceivedStakes: '71669',
          recentStakes: {
            items: [
              Uint8Array [
                214
              ],
              Uint8Array [
                19
              ]
            ],
            typeUrl: 'transform',
            maxItems: 48057,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                136
              ],
              Uint8Array [
                162
              ]
            ],
            typeUrl: 'COM',
            maxItems: 66737,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Persevering',
          renaissanceTx: 'Minnesota',
          genesisTime: '2019-02-20T04:05:34.958Z',
          renaissanceTime: '2019-02-20T04:05:34.958Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 14,
            address: 0,
            role: 8
          }
        }
      }
    ],
    stakes: [
      {
        address: '833e0ba58dc55f317d3cec97ff861ce0f2c058b1',
        from: 'a352bfcbfca566adaffe6739a3377db6879418a9',
        to: '23caab2625f9d5dc0d1fc05d68abbcf098421f5a',
        balance: '73164',
        message: 'Lock',
        context: {
          genesisTx: 'Principal',
          renaissanceTx: 'West Virginia',
          genesisTime: '2019-02-20T04:05:34.958Z',
          renaissanceTime: '2019-02-20T04:05:34.958Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 0,
            address: 0,
            role: 4
          }
        }
      },
      {
        address: 'a1c6649a66d4c1ceaa4985804abc5e42b242bf1d',
        from: '9b2e180b27a907d4783f31668fab3ae6ffda2fcd',
        to: 'fe3dd05c54ca836e6471ecf0a14be6575d54d686',
        balance: '41194',
        message: 'Pre-emptive',
        context: {
          genesisTx: 'Checking Account',
          renaissanceTx: 'bluetooth',
          genesisTime: '2019-02-20T04:05:34.958Z',
          renaissanceTime: '2019-02-20T04:05:34.958Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 7,
            address: 0,
            role: 3
          }
        }
      }
    ],
    context: {
      txHash: '135c63920483ef7216c0da1387e1580f1c3d2880',
      blockHeight: 39906,
      blockTime: '2019-02-20T04:05:34.958Z',
      totalTxs: 74155,
      txStatistics: {
        numAccountMigrateTxs: 25374,
        numCreateAssetTxs: 7393,
        numConsensusUpgradeTxs: 10418,
        numDeclareTxs: 74946,
        numDeclareFileTxs: 20758,
        numExchangeTxs: 1656,
        numStakeTxs: 30069,
        numSysUpgradeTxs: 65384,
        numTransferTxs: 39732,
        numUpdateAssetTxs: 38013
      },
      txIndex: 66662
    },
    appState: {
      address: '329be0327247a70291672a5dbc4e12314b62b43a',
      consensus: {
        maxBytes: 65519,
        maxGas: 48937,
        maxValidators: 67934,
        maxCandidates: 85101,
        pubKeyTypes: [
          'teal',
          'reinvent'
        ],
        validators: [
          {
            address: 'f370328cb6f0606f5c6529f3ec2f8a12fe82949b',
            power: 5452
          },
          {
            address: 'aa081b8ed41ce5ed25045ccf8542d24c29452f7f',
            power: 96771
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
              dataHash: 'Marketing',
              actions: [
                undefined,
                undefined
              ]
            },
            {
              type: 2,
              dataHash: 'Tugrik',
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
          totalStakes: '16380',
          totalUnstakes: '91075',
          context: {
            genesisTx: 'matrix',
            renaissanceTx: 'Mountain',
            genesisTime: '2019-02-20T04:05:34.958Z',
            renaissanceTime: '2019-02-20T04:05:34.958Z'
          }
        }
      },
      version: 'pink',
      dataVersion: 'Argentine Peso',
      forgeAppHash: Uint8Array [
        119
      ],
      data: {
        type: 'WalletType',
        value: {
          pk: 1,
          hash: 6,
          address: 0,
          role: 3
        }
      }
    }
  }
});

// output
{
  verifyTx: {
    code: 36
  }
}
```

### processOne

```js
const result = await client.processOne({
  verifyTx: {
    tx: {
      from: '043bef2fa685b9debe387709251bb32bf2e6ff6f',
      nonce: 66199,
      signature: Uint8Array [
        159
      ],
      chainId: 'Sausages',
      signatures: [
        {
          key: Uint8Array [
            81
          ],
          value: Uint8Array [
            131
          ]
        },
        {
          key: Uint8Array [
            130
          ],
          value: Uint8Array [
            14
          ]
        }
      ],
      itx: {
        type: 'WalletType',
        value: {
          pk: 0,
          hash: 0,
          address: 1,
          role: 4
        }
      }
    },
    states: [
      {
        balance: '1012',
        nonce: 16975,
        numTxs: 37474,
        address: '022519d0a81ec04ba2c97a589f97d2eaa2294a8f',
        pk: Uint8Array [
          239
        ],
        type: {
          pk: 1,
          hash: 1,
          address: 1,
          role: 1
        },
        moniker: 'well-modulated',
        context: {
          genesisTx: 'Music',
          renaissanceTx: 'Steel',
          genesisTime: '2019-02-20T04:05:34.959Z',
          renaissanceTime: '2019-02-20T04:05:34.959Z'
        },
        migratedTo: [
          'azure',
          'Tools'
        ],
        migratedFrom: [
          'Checking Account',
          'Swedish Krona'
        ],
        numAssets: 18514,
        stake: {
          totalStakes: '36000',
          totalUnstakes: '25190',
          totalReceivedStakes: '26104',
          recentStakes: {
            items: [
              Uint8Array [
                64
              ],
              Uint8Array [
                249
              ]
            ],
            typeUrl: 'gold',
            maxItems: 15171,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                78
              ],
              Uint8Array [
                92
              ]
            ],
            typeUrl: 'global',
            maxItems: 68236,
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
              109
            ]
          ],
          typeUrl: 'Grocery',
          maxItems: 1887,
          circular: undefined,
          fifo: undefined
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 6,
            address: 0,
            role: 3
          }
        }
      },
      {
        balance: '38109',
        nonce: 46132,
        numTxs: 27741,
        address: 'de1b575072f5ab15386b4432cb576e0335fb5b77',
        pk: Uint8Array [
          0
        ],
        type: {
          pk: 0,
          hash: 1,
          address: 1,
          role: 7
        },
        moniker: 'evolve',
        context: {
          genesisTx: 'proactive',
          renaissanceTx: 'primary',
          genesisTime: '2019-02-20T04:05:34.960Z',
          renaissanceTime: '2019-02-20T04:05:34.960Z'
        },
        migratedTo: [
          'Awesome',
          'forecast'
        ],
        migratedFrom: [
          'Utah',
          'SMTP'
        ],
        numAssets: 11824,
        stake: {
          totalStakes: '69643',
          totalUnstakes: '50593',
          totalReceivedStakes: '53063',
          recentStakes: {
            items: [
              Uint8Array [
                244
              ],
              Uint8Array [
                138
              ]
            ],
            typeUrl: 'Wooden',
            maxItems: 77956,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                202
              ],
              Uint8Array [
                44
              ]
            ],
            typeUrl: 'regional',
            maxItems: 22902,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              148
            ],
            Uint8Array [
              183
            ]
          ],
          typeUrl: 'channels',
          maxItems: 51184,
          circular: undefined,
          fifo: undefined
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 7,
            address: 1,
            role: 4
          }
        }
      }
    ],
    assets: [
      {
        address: '78c3117fb67699ea683717c0b2e604eb1d001c0e',
        owner: 'Practical Steel Shoes',
        moniker: 'Licensed Soft Car',
        readonly: undefined,
        stake: {
          totalStakes: '76373',
          totalUnstakes: '49641',
          totalReceivedStakes: '29724',
          recentStakes: {
            items: [
              Uint8Array [
                244
              ],
              Uint8Array [
                245
              ]
            ],
            typeUrl: 'XML',
            maxItems: 67209,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                73
              ],
              Uint8Array [
                103
              ]
            ],
            typeUrl: 'overriding',
            maxItems: 95852,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Agent',
          renaissanceTx: 'leading-edge',
          genesisTime: '2019-02-20T04:05:34.960Z',
          renaissanceTime: '2019-02-20T04:05:34.960Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 6,
            address: 0,
            role: 2
          }
        }
      },
      {
        address: '30f6677b1c94b6ecb5b1d6fa2bcd5e53cbbebcf0',
        owner: 'circuit',
        moniker: 'Directives',
        readonly: undefined,
        stake: {
          totalStakes: '67336',
          totalUnstakes: '92247',
          totalReceivedStakes: '80056',
          recentStakes: {
            items: [
              Uint8Array [
                255
              ],
              Uint8Array [
                87
              ]
            ],
            typeUrl: 'Cross-group',
            maxItems: 95622,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                237
              ],
              Uint8Array [
                121
              ]
            ],
            typeUrl: 'deposit',
            maxItems: 75659,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Personal Loan Account',
          renaissanceTx: 'International',
          genesisTime: '2019-02-20T04:05:34.960Z',
          renaissanceTime: '2019-02-20T04:05:34.960Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 6,
            address: 1,
            role: 8
          }
        }
      }
    ],
    stakes: [
      {
        address: '838992a4ffe8413a49c1be494bc56247708fa7cb',
        from: 'bc3264c2edbdf0d3b249dbb2a0d619c0865daf8c',
        to: 'ceff6552b5b019fd6273c3d6ecc6a8859c302c84',
        balance: '18123',
        message: 'end-to-end',
        context: {
          genesisTx: 'National',
          renaissanceTx: 'Towels',
          genesisTime: '2019-02-20T04:05:34.960Z',
          renaissanceTime: '2019-02-20T04:05:34.960Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 6,
            address: 0,
            role: 4
          }
        }
      },
      {
        address: 'a25b8581a09dd56e4ee2ec2987e67517f1013632',
        from: '9a44a2ac6f03fd0abdf9b0058167f6cd9bc92ed2',
        to: '4c8145f9fc92aaeda9658f4d3cc9b14d29fce963',
        balance: '8423',
        message: 'Wooden',
        context: {
          genesisTx: 'Extended',
          renaissanceTx: 'Metal',
          genesisTime: '2019-02-20T04:05:34.960Z',
          renaissanceTime: '2019-02-20T04:05:34.960Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 14,
            address: 0,
            role: 8
          }
        }
      }
    ],
    context: {
      txHash: '35235dbb96cdf476ae416811ecc9f55489e92b82',
      blockHeight: 99443,
      blockTime: '2019-02-20T04:05:34.960Z',
      totalTxs: 68058,
      txStatistics: {
        numAccountMigrateTxs: 806,
        numCreateAssetTxs: 24749,
        numConsensusUpgradeTxs: 59435,
        numDeclareTxs: 68339,
        numDeclareFileTxs: 20948,
        numExchangeTxs: 49813,
        numStakeTxs: 64738,
        numSysUpgradeTxs: 41085,
        numTransferTxs: 31932,
        numUpdateAssetTxs: 80287
      },
      txIndex: 43169
    },
    appState: {
      address: 'a945cb839ec826c0deac26ac01270a3a7e509f5b',
      consensus: {
        maxBytes: 44185,
        maxGas: 9007,
        maxValidators: 99541,
        maxCandidates: 81891,
        pubKeyTypes: [
          'Interactions',
          'Auto Loan Account'
        ],
        validators: [
          {
            address: '2f42c1af512f9655a6afc21cba83f51c041fb1f4',
            power: 49808
          },
          {
            address: '557e776dbf5615ab4b3020223e7791f3bad3e01a',
            power: 4302
          }
        ],
        validatorChanged: undefined,
        paramChanged: undefined
      },
      tasks: {
        'function (options) {\n\n    if (typeof options === "number") {\n      options = {\n        max: options\n      };\n    }\n\n    options = options || {};\n\n    if (typeof options.min === "undefined") {\n      options.min = 0;\n    }\n\n    if (typeof options.max === "undefined") {\n      options.max = 99999;\n    }\n    if (typeof options.precision === "undefined") {\n      options.precision = 1;\n    }\n\n    // Make the range inclusive of the max value\n    var max = options.max;\n    if (max >= 0) {\n      max += options.precision;\n    }\n\n    var randomNumber = Math.floor(\n      mersenne.rand(max / options.precision, options.min / options.precision));\n    // Workaround problem in Float point arithmetics for e.g. 6681493 / 0.01\n    randomNumber = randomNumber / (1 / options.precision);\n\n    return randomNumber;\n\n  }': {
          item: [
            {
              type: 2,
              dataHash: 'Ergonomic',
              actions: [
                undefined,
                undefined
              ]
            },
            {
              type: 11,
              dataHash: 'transmitter',
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
          totalStakes: '904',
          totalUnstakes: '2828',
          context: {
            genesisTx: 'navigating',
            renaissanceTx: 'hack',
            genesisTime: '2019-02-20T04:05:34.960Z',
            renaissanceTime: '2019-02-20T04:05:34.960Z'
          }
        }
      },
      version: 'invoice',
      dataVersion: 'Money Market Account',
      forgeAppHash: Uint8Array [
        139
      ],
      data: {
        type: 'WalletType',
        value: {
          pk: 0,
          hash: 14,
          address: 1,
          role: 4
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
    code: 2
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
    pk: 0,
    hash: 6,
    address: 1,
    role: 6
  },
  passphrase: 'Direct',
  moniker: 'Markets'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 500,
  token: 'copy',
  wallet: {
    type: {
      pk: 1,
      hash: 0,
      address: 1,
      role: 2
    },
    sk: Uint8Array [
      198
    ],
    pk: Uint8Array [
      137
    ],
    address: '2789a1099d0c1d3a9c72d14661d3f0337f45070a'
  }
}
});
```

### removeWallet

```js
const result = await client.removeWallet({
  address: '5fce8a350bd26d0cfd35c97b94ac68cb204f6d0d'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 27
}
});
```

### search

```js
const result = await client.search({
  key: 'Brand',
  value: 'Small'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 9,
  txs: [
    {
      tx: {
        from: 'c679e69bfb4e1cf4b6b871565c0ca1414bceb5a2',
        nonce: 87646,
        signature: Uint8Array [
          224
        ],
        chainId: 'Licensed Granite Gloves',
        signatures: [
          {
            key: Uint8Array [
              46
            ],
            value: Uint8Array [
              207
            ]
          },
          {
            key: Uint8Array [
              2
            ],
            value: Uint8Array [
              21
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 1,
            address: 1,
            role: 8
          }
        }
      },
      height: 80273,
      index: 82441,
      hash: '83b70d36f033aa383c95c3bb051803bdb5ad5d1c',
      tags: [
        {
          key: Uint8Array [
            104
          ],
          value: Uint8Array [
            145
          ]
        },
        {
          key: Uint8Array [
            91
          ],
          value: Uint8Array [
            108
          ]
        }
      ],
      code: 500
    },
    {
      tx: {
        from: '25aa4da29576520bfeca51beb42454822cade72a',
        nonce: 13511,
        signature: Uint8Array [
          206
        ],
        chainId: '5th generation',
        signatures: [
          {
            key: Uint8Array [
              64
            ],
            value: Uint8Array [
              31
            ]
          },
          {
            key: Uint8Array [
              4
            ],
            value: Uint8Array [
              72
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 0,
            address: 0,
            role: 2
          }
        }
      },
      height: 69083,
      index: 64197,
      hash: '1217b0df8005234a0ba46683050bd4f228e6539a',
      tags: [
        {
          key: Uint8Array [
            73
          ],
          value: Uint8Array [
            103
          ]
        },
        {
          key: Uint8Array [
            0
          ],
          value: Uint8Array [
            42
          ]
        }
      ],
      code: 22
    }
  ]
}
});
```

### sendTx

```js
const result = await client.sendTx({
  tx: {
    from: 'ce079feefef38372f19d83a7d3459460b930d709',
    nonce: 71914,
    signature: Uint8Array [
      167
    ],
    chainId: 'brand',
    signatures: [
      {
        key: Uint8Array [
          58
        ],
        value: Uint8Array [
          122
        ]
      },
      {
        key: Uint8Array [
          244
        ],
        value: Uint8Array [
          135
        ]
      }
    ],
    itx: {
      type: 'WalletType',
      value: {
        pk: 1,
        hash: 14,
        address: 1,
        role: 6
      }
    }
  },
  wallet: {
    type: {
      pk: 1,
      hash: 0,
      address: 1,
      role: 8
    },
    sk: Uint8Array [
      0
    ],
    pk: Uint8Array [
      218
    ],
    address: '680df3c6f63618e838a4a90fc897ab1157c6e3da'
  },
  token: 'Ergonomic',
  commit: undefined
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 25,
  hash: 'b7f8754bc23bab20e2f79fca28ef7a1dee4b784e'
}
});
```

### signData

```js
const result = await client.signData({
  data: Uint8Array [
    219
  ],
  wallet: {
    type: {
      pk: 1,
      hash: 14,
      address: 0,
      role: 5
    },
    sk: Uint8Array [
      28
    ],
    pk: Uint8Array [
      145
    ],
    address: '4d920a903c4cb552580dfd6d7f35e5c42ac5ed4c'
  },
  token: 'Proactive'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 26,
  signedData: Uint8Array [
    40
  ]
}
});
```

### storeFile

```js
const result = await client.storeFile({
  chunk: Uint8Array [
    242
  ]
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 38,
  hash: 'c2f200286dd12746b52d5da01907cd9616faeeee'
}
});
```

### subscribe

```js
const stream = client.subscribe({
  type: 21,
  filter: 'blue'
});

// output
{
  topic: 'Corner'
}
```

### unsubscribe

```js
const result = await client.unsubscribe({
  topic: 'Interactions'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 24
}
});
```


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |
