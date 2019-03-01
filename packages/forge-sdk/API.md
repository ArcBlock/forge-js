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
      hash: 0,
      address: 0,
      role: 2
    }
  },
  from: 'caeac4fbc557b909acf5303fcea6122637556078',
  nonce: 35382,
  wallet: {
    type: {
      pk: 0,
      hash: 14,
      address: 0,
      role: 2
    },
    sk: Uint8Array [
      2
    ],
    pk: Uint8Array [
      74
    ],
    address: 'dec6484b326aa92491cbfb9aa92a96f0322a2589'
  },
  token: 'Rest'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 6,
  tx: {
    from: '3b55e84a2fdcf2099d171bb0bdac37d63c7d53ed',
    nonce: 14447,
    signature: Uint8Array [
      202
    ],
    chainId: 'Ergonomic Granite Salad',
    signatures: [
      {
        key: Uint8Array [
          78
        ],
        value: Uint8Array [
          248
        ]
      },
      {
        key: Uint8Array [
          136
        ],
        value: Uint8Array [
          229
        ]
      }
    ],
    itx: {
      type: 'WalletType',
      value: {
        pk: 1,
        hash: 6,
        address: 0,
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
  passphrase: 'Optimization',
  type: {
    pk: 1,
    hash: 14,
    address: 0,
    role: 6
  },
  moniker: 'Liaison'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 37,
  token: 'North Dakota',
  wallet: {
    type: {
      pk: 0,
      hash: 1,
      address: 1,
      role: 0
    },
    sk: Uint8Array [
      18
    ],
    pk: Uint8Array [
      157
    ],
    address: '4a7cb22bdbe6e1b158804eafc8a5798906258348'
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
  code: 32,
  wallet: {
    type: {
      pk: 0,
      hash: 7,
      address: 1,
      role: 5
    },
    sk: Uint8Array [
      76
    ],
    pk: Uint8Array [
      238
    ],
    address: 'a79993b1ba98c9053b974659dbe8a2b365f9e1da'
  }
}
});
```

### getAccountState

```js
const stream = client.getAccountState({
  address: '3e43f14b189eda11a80d195609fe879fae770764',
  keys: [
    'Kuwaiti Dinar',
    'digital'
  ],
  height: 39292
});

// output
{
  code: 35,
  state: {
    balance: '70745',
    nonce: 13254,
    numTxs: 1787,
    address: '2c9020abe46855d153d70927a64fddacbdb5f427',
    pk: Uint8Array [
      201
    ],
    type: {
      pk: 1,
      hash: 13,
      address: 0,
      role: 3
    },
    moniker: 'web-enabled',
    context: {
      genesisTx: 'Panama',
      renaissanceTx: 'encompassing',
      genesisTime: '2019-02-28T21:54:49.370Z',
      renaissanceTime: '2019-02-28T21:54:49.370Z'
    },
    migratedTo: [
      'withdrawal',
      'Tajikistan'
    ],
    migratedFrom: [
      'interfaces',
      'HDD'
    ],
    numAssets: 72654,
    stake: {
      totalStakes: '183',
      totalUnstakes: '63355',
      totalReceivedStakes: '18342',
      recentStakes: {
        items: [
          Uint8Array [
            140
          ],
          Uint8Array [
            2
          ]
        ],
        typeUrl: 'user-centric',
        maxItems: 95469,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [
            72
          ],
          Uint8Array [
            247
          ]
        ],
        typeUrl: 'Supervisor',
        maxItems: 42920,
        circular: undefined,
        fifo: undefined
      }
    },
    pinnedFiles: {
      items: [
        Uint8Array [
          68
        ],
        Uint8Array [
          45
        ]
      ],
      typeUrl: 'Borders',
      maxItems: 90732,
      circular: undefined,
      fifo: undefined
    },
    data: {
      type: 'WalletType',
      value: {
        pk: 1,
        hash: 13,
        address: 1,
        role: 1
      }
    }
  }
}
```

### getAssetAddress

```js
const result = await client.getAssetAddress({
  senderAddress: 'Bacon',
  itx: {
    moniker: 'best-of-breed',
    data: {
      type: 'WalletType',
      value: {
        pk: 0,
        hash: 7,
        address: 0,
        role: 3
      }
    },
    readonly: undefined,
    expiredAt: '2019-02-28T21:54:49.371Z'
  },
  walletType: {
    pk: 0,
    hash: 14,
    address: 0,
    role: 1
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 35,
  assetAddress: 'reboot'
}
});
```

### getAssetState

```js
const stream = client.getAssetState({
  address: '4e1581ace40fda1a3c28cee77f065f8734837eab',
  keys: [
    'applications',
    'Sports'
  ],
  height: 31765
});

// output
{
  code: 3,
  state: {
    address: 'e5d9a6279c6d4d744c7bd63fae9688980729ce1e',
    owner: 'withdrawal',
    moniker: 'Analyst',
    readonly: undefined,
    activated: undefined,
    expiredAt: '2019-02-28T21:54:49.371Z',
    stake: {
      totalStakes: '82361',
      totalUnstakes: '84602',
      totalReceivedStakes: '81950',
      recentStakes: {
        items: [
          Uint8Array [
            247
          ],
          Uint8Array [
            0
          ]
        ],
        typeUrl: 'emulation',
        maxItems: 63376,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [
            166
          ],
          Uint8Array [
            110
          ]
        ],
        typeUrl: 'microchip',
        maxItems: 2815,
        circular: undefined,
        fifo: undefined
      }
    },
    context: {
      genesisTx: 'transparent',
      renaissanceTx: 'Awesome Metal Tuna',
      genesisTime: '2019-02-28T21:54:49.372Z',
      renaissanceTime: '2019-02-28T21:54:49.372Z'
    },
    data: {
      type: 'WalletType',
      value: {
        pk: 0,
        hash: 14,
        address: 1,
        role: 7
      }
    }
  }
}
```

### getAssets

```js
const result = await client.getAssets({
  paging: {
    cursor: 'orchestrate',
    size: 28406,
    order: [
      {
        field: 'navigate',
        type: 'integrated'
      },
      {
        field: 'SQL',
        type: 'Morocco'
      }
    ]
  },
  ownerAddress: 'hack'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 22,
  page: {
    cursor: 'ubiquitous',
    next: undefined,
    total: 16225
  },
  assets: [
    {
      address: '5b90d44cb98492b6d320837b006ccfaf000b088d',
      owner: 'Montana',
      genesisTime: 'Lebanese Pound',
      renaissanceTime: 'Ethiopia',
      moniker: 'ADP',
      readonly: undefined
    },
    {
      address: '2c1e90c4b3d6f38089a65193ad593526051c97ae',
      owner: 'Graphic Interface',
      genesisTime: 'Mouse',
      renaissanceTime: 'disintermediate',
      moniker: 'Product',
      readonly: undefined
    }
  ]
}
});
```

### getBlock

```js
const stream = client.getBlock({
  height: 67760
});

// output
{
  code: 37,
  block: {
    height: 80016,
    numTxs: 29859,
    time: '2019-02-28T21:54:49.372Z',
    appHash: '89e9e563989412cc3060cc33b287b32300b8aa28',
    proposer: '12fed49dd4b0ed455974fa339e864cb38d2d045f',
    txs: [
      {
        tx: {
          from: '07d7ffdb69c741b954434e87edcd0652e521fdbc',
          nonce: 28809,
          signature: Uint8Array [
            23
          ],
          chainId: 'enhance',
          signatures: [
            {
              key: Uint8Array [
                255
              ],
              value: Uint8Array [
                27
              ]
            },
            {
              key: Uint8Array [
                58
              ],
              value: Uint8Array [
                127
              ]
            }
          ],
          itx: {
            type: 'WalletType',
            value: {
              pk: 0,
              hash: 1,
              address: 0,
              role: 5
            }
          }
        },
        height: 39306,
        index: 26914,
        hash: 'f3ad4abe8a7e1c00723714facfbcb74413b3db82',
        tags: [
          {
            key: Uint8Array [
              249
            ],
            value: Uint8Array [
              198
            ]
          },
          {
            key: Uint8Array [
              244
            ],
            value: Uint8Array [
              55
            ]
          }
        ],
        code: 20
      },
      {
        tx: {
          from: 'b06368daea5bf3968fec3ce9495c4c90e530706c',
          nonce: 26463,
          signature: Uint8Array [
            71
          ],
          chainId: 'North Carolina',
          signatures: [
            {
              key: Uint8Array [
                207
              ],
              value: Uint8Array [
                91
              ]
            },
            {
              key: Uint8Array [
                153
              ],
              value: Uint8Array [
                157
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
        },
        height: 74710,
        index: 79907,
        hash: '8ab7cb179fa128ea63cd7e3dad54a937ff4d2329',
        tags: [
          {
            key: Uint8Array [
              35
            ],
            value: Uint8Array [
              35
            ]
          },
          {
            key: Uint8Array [
              168
            ],
            value: Uint8Array [
              178
            ]
          }
        ],
        code: 37
      }
    ],
    totalTxs: 48860
  }
}
```

### getBlocks

```js
const result = await client.getBlocks({
  paging: {
    cursor: 'Organic',
    size: 43753,
    order: [
      {
        field: 'Intranet',
        type: 'Unbranded Rubber Car'
      },
      {
        field: 'reboot',
        type: 'Taka'
      }
    ]
  },
  minHeight: 7829,
  maxHeight: 17884,
  emptyExcluded: undefined
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 0,
  page: {
    cursor: 'panel',
    next: undefined,
    total: 87721
  },
  blocks: [
    {
      height: 98411,
      numTxs: 96222,
      time: '2019-02-28T21:54:49.374Z',
      appHash: '4686b526dc5c9c26b92ae7d1c3dd0b37794d8a91',
      proposer: '688ec3986e89edb3999d2baa83075f50bee54e7e',
      txs: [
        {
          tx: {
            from: '4595f31cab54fdd8bcd26ec748bdb4a395bfe6ac',
            nonce: 82863,
            signature: Uint8Array [
              106
            ],
            chainId: 'e-business',
            signatures: [
              {
                key: Uint8Array [
                  136
                ],
                value: Uint8Array [
                  35
                ]
              },
              {
                key: Uint8Array [
                  45
                ],
                value: Uint8Array [
                  203
                ]
              }
            ],
            itx: {
              type: 'WalletType',
              value: {
                pk: 0,
                hash: 13,
                address: 1,
                role: 2
              }
            }
          },
          height: 38789,
          index: 2766,
          hash: 'd7fcc34f597d48b7bd9d891390862e012fcf450c',
          tags: [
            {
              key: Uint8Array [
                77
              ],
              value: Uint8Array [
                102
              ]
            },
            {
              key: Uint8Array [
                19
              ],
              value: Uint8Array [
                191
              ]
            }
          ],
          code: 27
        },
        {
          tx: {
            from: 'a4de45e3b96509859b17ef0de182296b33060713',
            nonce: 76490,
            signature: Uint8Array [
              249
            ],
            chainId: 'interfaces',
            signatures: [
              {
                key: Uint8Array [
                  110
                ],
                value: Uint8Array [
                  25
                ]
              },
              {
                key: Uint8Array [
                  101
                ],
                value: Uint8Array [
                  200
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
          height: 74853,
          index: 73185,
          hash: '0052a4feb67d0d7c3d2cd1e5d07639ec11b49da2',
          tags: [
            {
              key: Uint8Array [
                228
              ],
              value: Uint8Array [
                175
              ]
            },
            {
              key: Uint8Array [
                179
              ],
              value: Uint8Array [
                79
              ]
            }
          ],
          code: 38
        }
      ],
      totalTxs: 65398
    },
    {
      height: 481,
      numTxs: 11385,
      time: '2019-02-28T21:54:49.374Z',
      appHash: 'f24236d0332dc6bdca6847585f5a3c12702f8420',
      proposer: 'efaad07cc8330a9af04932f5d8d8ba9b9aa5cf6b',
      txs: [
        {
          tx: {
            from: '974b15640a03e73108d9fb02411397278dc7dc72',
            nonce: 91693,
            signature: Uint8Array [
              132
            ],
            chainId: 'invoice',
            signatures: [
              {
                key: Uint8Array [
                  31
                ],
                value: Uint8Array [
                  4
                ]
              },
              {
                key: Uint8Array [
                  196
                ],
                value: Uint8Array [
                  141
                ]
              }
            ],
            itx: {
              type: 'WalletType',
              value: {
                pk: 1,
                hash: 0,
                address: 0,
                role: 6
              }
            }
          },
          height: 67452,
          index: 99265,
          hash: 'eff037f2a95de0c1b4f5c3e85cb7ae997244359a',
          tags: [
            {
              key: Uint8Array [
                42
              ],
              value: Uint8Array [
                75
              ]
            },
            {
              key: Uint8Array [
                246
              ],
              value: Uint8Array [
                29
              ]
            }
          ],
          code: 9
        },
        {
          tx: {
            from: 'ba5ed9a1d9d5483fb849337aceb01f2d5b340f02',
            nonce: 83763,
            signature: Uint8Array [
              88
            ],
            chainId: 'Shirt',
            signatures: [
              {
                key: Uint8Array [
                  179
                ],
                value: Uint8Array [
                  98
                ]
              },
              {
                key: Uint8Array [
                  49
                ],
                value: Uint8Array [
                  52
                ]
              }
            ],
            itx: {
              type: 'WalletType',
              value: {
                pk: 0,
                hash: 7,
                address: 1,
                role: 5
              }
            }
          },
          height: 95370,
          index: 71770,
          hash: '55481fc8ee3d962746615e9759778ac271fdbc58',
          tags: [
            {
              key: Uint8Array [
                101
              ],
              value: Uint8Array [
                208
              ]
            },
            {
              key: Uint8Array [
                175
              ],
              value: Uint8Array [
                89
              ]
            }
          ],
          code: 8
        }
      ],
      totalTxs: 19888
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
  code: 26,
  info: {
    id: 'Bedfordshire',
    network: 'Directives',
    moniker: 'online',
    consensusVersion: 'Secured',
    synced: undefined,
    appHash: 'dd84c194e046810c7e5e4b6c3b64967e689d6253',
    blockHash: Uint8Array [
      92
    ],
    blockHeight: 98943,
    blockTime: '2019-02-28T21:54:49.376Z',
    address: '8e7c472bf59a94ea39099b6360cc00b921f176dd',
    votingPower: 33776,
    totalTxs: 88682,
    version: 'Rand Loti',
    dataVersion: 'New Jersey',
    forgeAppsVersion: {
      'function randomWord (type) {\n\n    var wordMethods = [\n    \'commerce.department\',\n    \'commerce.productName\',\n    \'commerce.productAdjective\',\n    \'commerce.productMaterial\',\n    \'commerce.product\',\n    \'commerce.color\',\n\n    \'company.catchPhraseAdjective\',\n    \'company.catchPhraseDescriptor\',\n    \'company.catchPhraseNoun\',\n    \'company.bsAdjective\',\n    \'company.bsBuzz\',\n    \'company.bsNoun\',\n    \'address.streetSuffix\',\n    \'address.county\',\n    \'address.country\',\n    \'address.state\',\n\n    \'finance.accountName\',\n    \'finance.transactionType\',\n    \'finance.currencyName\',\n\n    \'hacker.noun\',\n    \'hacker.verb\',\n    \'hacker.adjective\',\n    \'hacker.ingverb\',\n    \'hacker.abbreviation\',\n\n    \'name.jobDescriptor\',\n    \'name.jobArea\',\n    \'name.jobType\'];\n\n    // randomly pick from the many faker methods that can generate words\n    var randomWordMethod = faker.random.arrayElement(wordMethods);\n    return faker.fake(\'{{\' + randomWordMethod + \'}}\');\n\n  }': 'Robust'
    },
    supportedTxs: [
      'portals',
      'Berkshire'
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
  code: 8,
  config: 'models'
}
});
```

### getForgeState

```js
const result = await client.getForgeState({
  keys: [
    'mesh',
    'driver'
  ],
  height: 66103
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 17,
  state: {
    address: '775269faabb181ad56662030faae895d5373be20',
    consensus: {
      maxBytes: 22261,
      maxGas: 9249,
      maxValidators: 9628,
      maxCandidates: 96427,
      pubKeyTypes: [
        'Open-architected',
        'GB'
      ],
      validators: [
        {
          address: '8216a210d8d4066a015ea6ac8b2e13f623f4ef13',
          power: 81863
        },
        {
          address: 'b80ee75803fd44d3268d7dee0c96657e848610fa',
          power: 95117
        }
      ],
      validatorChanged: undefined,
      paramChanged: undefined
    },
    tasks: {
      'function (options) {\n\n    if (typeof options === "number") {\n      options = {\n        max: options\n      };\n    }\n\n    options = options || {};\n\n    if (typeof options.min === "undefined") {\n      options.min = 0;\n    }\n\n    if (typeof options.max === "undefined") {\n      options.max = 99999;\n    }\n    if (typeof options.precision === "undefined") {\n      options.precision = 1;\n    }\n\n    // Make the range inclusive of the max value\n    var max = options.max;\n    if (max >= 0) {\n      max += options.precision;\n    }\n\n    var randomNumber = Math.floor(\n      mersenne.rand(max / options.precision, options.min / options.precision));\n    // Workaround problem in Float point arithmetics for e.g. 6681493 / 0.01\n    randomNumber = randomNumber / (1 / options.precision);\n\n    return randomNumber;\n\n  }': {
        item: [
          {
            type: 14,
            dataHash: 'content',
            actions: [
              undefined,
              undefined
            ]
          },
          {
            type: 4,
            dataHash: 'cyan',
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
        totalStakes: '25740',
        totalUnstakes: '18482',
        context: {
          genesisTx: 'Applications',
          renaissanceTx: 'Borders',
          genesisTime: '2019-02-28T21:54:49.377Z',
          renaissanceTime: '2019-02-28T21:54:49.377Z'
        }
      }
    },
    version: 'Ergonomic',
    dataVersion: 'invoice',
    forgeAppHash: Uint8Array [
      222
    ],
    data: {
      type: 'WalletType',
      value: {
        pk: 0,
        hash: 6,
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
    startDate: 'payment',
    endDate: 'Home Loan Account'
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 36,
  forgeStatistics: {
    numBlocks: [
      99364,
      85358
    ],
    numTxs: [
      64582,
      98534
    ],
    numStakes: [
      '18517',
      '5262'
    ],
    numValidators: [
      83840,
      76714
    ],
    numAccountMigrateTxs: [
      54675,
      67396
    ],
    numCreateAssetTxs: [
      75053,
      44634
    ],
    numConsensusUpgradeTxs: [
      64438,
      25958
    ],
    numDeclareTxs: [
      12118,
      66035
    ],
    numDeclareFileTxs: [
      81840,
      92264
    ],
    numExchangeTxs: [
      13170,
      41542
    ],
    numStakeTxs: [
      70289,
      30054
    ],
    numSysUpgradeTxs: [
      51292,
      99141
    ],
    numTransferTxs: [
      110,
      29261
    ],
    numUpdateAssetTxs: [
      325,
      40755
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
  code: 10,
  netInfo: {
    listening: undefined,
    listeners: [
      'IB',
      'Rubber'
    ],
    nPeers: 8396,
    peers: [
      {
        id: 'mesh',
        network: 'multi-tasking',
        consensusVersion: 'Metal',
        moniker: 'transmitting',
        ip: 'Shoes',
        geoInfo: {
          city: 'auxiliary',
          country: 'Brazil',
          latitude: 60387.56,
          longitude: 83754.78
        }
      },
      {
        id: 'Buckinghamshire',
        network: 'generate',
        consensusVersion: 'Dynamic',
        moniker: 'South Carolina',
        ip: 'proactive',
        geoInfo: {
          city: 'withdrawal',
          country: 'migration',
          latitude: 91043.94,
          longitude: 80916.4
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
  code: 38,
  info: {
    id: 'Bedfordshire',
    network: 'yellow',
    moniker: 'Djibouti Franc',
    consensusVersion: 'Savings Account',
    synced: undefined,
    appHash: '9f34892b3da60c555d7976e74bdaa29b5766778e',
    blockHash: Uint8Array [
      150
    ],
    blockHeight: 19949,
    blockTime: '2019-02-28T21:54:49.378Z',
    address: 'eef5a22cf9e6fa212f5e522a71eae8de9bad95fb',
    votingPower: 26906,
    totalTxs: 8835,
    version: 'Toys',
    dataVersion: 'scale',
    forgeAppsVersion: {
      'function randomWord (type) {\n\n    var wordMethods = [\n    \'commerce.department\',\n    \'commerce.productName\',\n    \'commerce.productAdjective\',\n    \'commerce.productMaterial\',\n    \'commerce.product\',\n    \'commerce.color\',\n\n    \'company.catchPhraseAdjective\',\n    \'company.catchPhraseDescriptor\',\n    \'company.catchPhraseNoun\',\n    \'company.bsAdjective\',\n    \'company.bsBuzz\',\n    \'company.bsNoun\',\n    \'address.streetSuffix\',\n    \'address.county\',\n    \'address.country\',\n    \'address.state\',\n\n    \'finance.accountName\',\n    \'finance.transactionType\',\n    \'finance.currencyName\',\n\n    \'hacker.noun\',\n    \'hacker.verb\',\n    \'hacker.adjective\',\n    \'hacker.ingverb\',\n    \'hacker.abbreviation\',\n\n    \'name.jobDescriptor\',\n    \'name.jobArea\',\n    \'name.jobType\'];\n\n    // randomly pick from the many faker methods that can generate words\n    var randomWordMethod = faker.random.arrayElement(wordMethods);\n    return faker.fake(\'{{\' + randomWordMethod + \'}}\');\n\n  }': 'Checking Account'
    },
    supportedTxs: [
      'synthesizing',
      'Intranet'
    ],
    ip: 'compress',
    geoInfo: {
      city: 'disintermediate',
      country: 'attitude',
      latitude: 7433.09,
      longitude: 85441.2
    }
  }
}
});
```

### getStakeState

```js
const stream = client.getStakeState({
  address: '7d928b7742a91ac70cb1527c19284e82029fc391',
  keys: [
    'Avon',
    'Cook Islands'
  ],
  height: 20599
});

// output
{
  code: 39,
  state: {
    address: 'dbebf6d8d2245064e856831f654bbb71c6fd5219',
    from: '583fc66924dbe773ecbacd9aff66be3ac59124d2',
    to: '5897995cfdff05d275af2b1dd2d5971ac4230c46',
    balance: '73477',
    message: 'Wooden',
    context: {
      genesisTx: 'Bedfordshire',
      renaissanceTx: 'index',
      genesisTime: '2019-02-28T21:54:49.380Z',
      renaissanceTime: '2019-02-28T21:54:49.380Z'
    },
    data: {
      type: 'WalletType',
      value: {
        pk: 1,
        hash: 1,
        address: 0,
        role: 2
      }
    }
  }
}
```

### getStakes

```js
const result = await client.getStakes({
  paging: {
    cursor: 'Fantastic Soft Ball',
    size: 57918,
    order: [
      {
        field: 'Table',
        type: 'ROI'
      },
      {
        field: 'index',
        type: 'Avon'
      }
    ]
  },
  addressFilter: {
    sender: 'Refined Soft Car',
    receiver: 'platforms',
    direction: 0
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 34,
  page: {
    cursor: 'alarm',
    next: undefined,
    total: 29807
  },
  stakes: [
    {
      address: '7f2165b36c18c7ec70f18c6adc0e42a8e810cd49',
      balance: '50874',
      sender: 'Soft',
      receiver: 'Taka',
      genesisTime: 'Licensed',
      renaissanceTime: 'Berkshire',
      message: 'Organized',
      type: 46703
    },
    {
      address: 'ac24ca7d2d05472c2be4cf1e59f6e64d245c5427',
      balance: '18691',
      sender: 'Generic',
      receiver: 'Toys',
      genesisTime: 'Checking Account',
      renaissanceTime: 'Practical',
      message: 'Malagasy Ariary',
      type: 51362
    }
  ]
}
});
```

### getTopAccounts

```js
const result = await client.getTopAccounts({
  paging: {
    cursor: 'withdrawal',
    size: 13296,
    order: [
      {
        field: 'Savings Account',
        type: 'Cameroon'
      },
      {
        field: 'Rustic Rubber Cheese',
        type: 'technologies'
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
    cursor: 'platforms',
    next: undefined,
    total: 83385
  },
  accounts: [
    {
      address: 'cd57e60baf5ebc77ffb9a1bf9608d41258bfe309',
      balance: '9972',
      numAssets: 31886,
      numTxs: 53400,
      nonce: 76222,
      genesisTime: 'purple',
      renaissanceTime: 'Mississippi',
      moniker: 'cutting-edge',
      migratedFrom: 'Cambridgeshire',
      migratedTo: 'solution-oriented',
      totalReceivedStakes: '60083',
      totalStakes: '64531',
      totalUnstakes: '89269'
    },
    {
      address: '8570f0796ae8ebdedc262462101c2e86b6a30900',
      balance: '15477',
      numAssets: 38273,
      numTxs: 91469,
      nonce: 69488,
      genesisTime: 'Computer',
      renaissanceTime: 'maximized',
      moniker: 'Guyana Dollar',
      migratedFrom: 'Intelligent Cotton Shirt',
      migratedTo: 'hack',
      totalReceivedStakes: '72508',
      totalStakes: '98305',
      totalUnstakes: '43808'
    }
  ]
}
});
```

### getTx

```js
const stream = client.getTx({
  hash: '0571261ac06acb579e90d47f9c9fb1e3603d357c'
});

// output
{
  code: 5,
  info: {
    tx: {
      from: '5d8179c23c7157d98edca52cedb2506388fbcfe0',
      nonce: 94628,
      signature: Uint8Array [
        181
      ],
      chainId: 'initiative',
      signatures: [
        {
          key: Uint8Array [
            179
          ],
          value: Uint8Array [
            142
          ]
        },
        {
          key: Uint8Array [
            58
          ],
          value: Uint8Array [
            209
          ]
        }
      ],
      itx: {
        type: 'WalletType',
        value: {
          pk: 1,
          hash: 1,
          address: 1,
          role: 4
        }
      }
    },
    height: 17953,
    index: 2889,
    hash: '3f8ade7424f757efb0f1c63bb03a7f91a8934dc0',
    tags: [
      {
        key: Uint8Array [
          16
        ],
        value: Uint8Array [
          191
        ]
      },
      {
        key: Uint8Array [
          84
        ],
        value: Uint8Array [
          144
        ]
      }
    ],
    code: 30
  }
}
```

### getUnconfirmedTxs

```js
const result = await client.getUnconfirmedTxs({
  limit: 66017
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 7,
  unconfirmedTxs: {
    nTxs: 3887,
    txs: [
      {
        from: '4a0a5a86259a1c7798f032dc73320c7f1708ef3a',
        nonce: 73505,
        signature: Uint8Array [
          9
        ],
        chainId: 'Dynamic',
        signatures: [
          {
            key: Uint8Array [
              207
            ],
            value: Uint8Array [
              55
            ]
          },
          {
            key: Uint8Array [
              38
            ],
            value: Uint8Array [
              119
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 13,
            address: 0,
            role: 4
          }
        }
      },
      {
        from: '3f712ad7544fbc45e0d10f24074a2ff028e93a46',
        nonce: 5630,
        signature: Uint8Array [
          51
        ],
        chainId: 'zero defect',
        signatures: [
          {
            key: Uint8Array [
              178
            ],
            value: Uint8Array [
              140
            ]
          },
          {
            key: Uint8Array [
              41
            ],
            value: Uint8Array [
              94
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 14,
            address: 0,
            role: 7
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
  code: 9,
  validatorsInfo: {
    blockHeight: 91838,
    validators: [
      {
        address: '80bcf3f80784196e6fee314746255fcbcc136c01',
        pubKey: {
          type: 'Senior',
          data: Uint8Array [
            0
          ]
        },
        votingPower: 90357,
        proposerPriority: 'Refined',
        name: 'Bhutan'
      },
      {
        address: 'c71636cd0238b041f9f8cf757815e41284da64eb',
        pubKey: {
          type: 'TCP',
          data: Uint8Array [
            82
          ]
        },
        votingPower: 88302,
        proposerPriority: 'Valleys',
        name: 'Sports'
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
    cursor: 'utilisation',
    size: 75302,
    order: [
      {
        field: 'back-end',
        type: 'Chair'
      },
      {
        field: 'Generic Metal Mouse',
        type: 'Handmade Soft Tuna'
      }
    ]
  },
  timeFilter: {
    startDateTime: 'New Jersey',
    endDateTime: 'Paradigm'
  },
  addressFilter: {
    sender: 'Oklahoma',
    receiver: 'Practical Concrete Tuna',
    direction: 1
  },
  typeFilter: {
    types: [
      'Operations',
      'payment'
    ]
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 37,
  page: {
    cursor: 'Ball',
    next: undefined,
    total: 40222
  },
  transactions: [
    {
      hash: '53de3b647a31d07fe0101cf239d10ce432fbfc5e',
      sender: 'Keyboard',
      receiver: 'Innovative',
      time: 'Outdoors',
      type: 'Credit Card Account',
      tx: {
        from: '21b9cb7ba36dbdbd9a9e4732ec3b50b11beb37fa',
        nonce: 68379,
        signature: Uint8Array [
          44
        ],
        chainId: 'Corporate',
        signatures: [
          {
            key: Uint8Array [
              165
            ],
            value: Uint8Array [
              20
            ]
          },
          {
            key: Uint8Array [
              224
            ],
            value: Uint8Array [
              157
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 1,
            address: 0,
            role: 4
          }
        }
      }
    },
    {
      hash: '5f1fdc9ab2abbda5600fdb9957bae1bb2e01bc69',
      sender: 'bypassing',
      receiver: 'Nepalese Rupee',
      time: 'connecting',
      type: 'Awesome Rubber Mouse',
      tx: {
        from: '6150317b4ee5944b5cc59605ccd3526a4c964035',
        nonce: 90968,
        signature: Uint8Array [
          62
        ],
        chainId: 'Martinique',
        signatures: [
          {
            key: Uint8Array [
              236
            ],
            value: Uint8Array [
              36
            ]
          },
          {
            key: Uint8Array [
              47
            ],
            value: Uint8Array [
              64
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 1,
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

### listWallet

```js
const stream = client.listWallet({});

// output
{
  code: 22,
  address: 'bf9fc8fd79d05d908bbb2f9d5a19ac864d6d44b7'
}
```

### loadFile

```js
const stream = client.loadFile({
  hash: 'd9d58923e4e783b02dc5617ed821ad855bedc4cd'
});

// output
{
  code: 41,
  chunk: Uint8Array [
    150
  ]
}
```

### loadWallet

```js
const result = await client.loadWallet({
  address: '363073ed534326270ef22afe2aa8fd18a99dd5ac',
  passphrase: 'Small Frozen Gloves'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 3,
  token: 'Buckinghamshire',
  wallet: {
    type: {
      pk: 1,
      hash: 14,
      address: 1,
      role: 8
    },
    sk: Uint8Array [
      231
    ],
    pk: Uint8Array [
      44
    ],
    address: '841b252858721be948a25c2f1318e7cf5d3cfb17'
  }
}
});
```

### multisig

```js
const result = await client.multisig({
  tx: {
    from: '2c293c1cac68ee157808a47933918f4985deaefe',
    nonce: 42602,
    signature: Uint8Array [
      66
    ],
    chainId: 'AI',
    signatures: [
      {
        key: Uint8Array [
          160
        ],
        value: Uint8Array [
          101
        ]
      },
      {
        key: Uint8Array [
          76
        ],
        value: Uint8Array [
          74
        ]
      }
    ],
    itx: {
      type: 'WalletType',
      value: {
        pk: 0,
        hash: 7,
        address: 0,
        role: 1
      }
    }
  },
  wallet: {
    type: {
      pk: 1,
      hash: 13,
      address: 1,
      role: 4
    },
    sk: Uint8Array [
      149
    ],
    pk: Uint8Array [
      169
    ],
    address: 'a195c0d9779f09c4c634755594809136970efd5d'
  },
  token: 'integrate'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 4,
  tx: {
    from: '29ffe1a906902861f328d486890bcfebe86c9a8f',
    nonce: 3210,
    signature: Uint8Array [
      85
    ],
    chainId: 'feed',
    signatures: [
      {
        key: Uint8Array [
          92
        ],
        value: Uint8Array [
          27
        ]
      },
      {
        key: Uint8Array [
          130
        ],
        value: Uint8Array [
          141
        ]
      }
    ],
    itx: {
      type: 'WalletType',
      value: {
        pk: 0,
        hash: 7,
        address: 1,
        role: 3
      }
    }
  }
}
});
```

### pinFile

```js
const result = await client.pinFile({
  hash: '6bc2668c91ebe61018a70a18cd73b92f8fd9bea1'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 0
}
});
```

### process

```js
const stream = client.process({
  verifyTx: {
    tx: {
      from: '34f155d16907ac3671f8e66b5a1147714c6f24ee',
      nonce: 13877,
      signature: Uint8Array [
        183
      ],
      chainId: 'orchestrate',
      signatures: [
        {
          key: Uint8Array [
            31
          ],
          value: Uint8Array [
            249
          ]
        },
        {
          key: Uint8Array [
            169
          ],
          value: Uint8Array [
            112
          ]
        }
      ],
      itx: {
        type: 'WalletType',
        value: {
          pk: 1,
          hash: 6,
          address: 1,
          role: 6
        }
      }
    },
    states: [
      {
        balance: '74943',
        nonce: 25673,
        numTxs: 38796,
        address: '2708e2e36ffca8556f8aca536b8a172b1e397f15',
        pk: Uint8Array [
          61
        ],
        type: {
          pk: 0,
          hash: 13,
          address: 0,
          role: 7
        },
        moniker: 'monetize',
        context: {
          genesisTx: 'Team-oriented',
          renaissanceTx: 'Forward',
          genesisTime: '2019-02-28T21:54:49.386Z',
          renaissanceTime: '2019-02-28T21:54:49.386Z'
        },
        migratedTo: [
          'black',
          'Awesome'
        ],
        migratedFrom: [
          'Soft',
          'Granite'
        ],
        numAssets: 12497,
        stake: {
          totalStakes: '73731',
          totalUnstakes: '62122',
          totalReceivedStakes: '47105',
          recentStakes: {
            items: [
              Uint8Array [
                243
              ],
              Uint8Array [
                234
              ]
            ],
            typeUrl: 'bandwidth',
            maxItems: 82388,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                11
              ],
              Uint8Array [
                0
              ]
            ],
            typeUrl: 'Metrics',
            maxItems: 95270,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              134
            ],
            Uint8Array [
              237
            ]
          ],
          typeUrl: 'auxiliary',
          maxItems: 18715,
          circular: undefined,
          fifo: undefined
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 0,
            address: 1,
            role: 6
          }
        }
      },
      {
        balance: '488',
        nonce: 3911,
        numTxs: 68709,
        address: '65db3ecb7baeb3ce777338cab974dc872b721a93',
        pk: Uint8Array [
          21
        ],
        type: {
          pk: 1,
          hash: 13,
          address: 1,
          role: 1
        },
        moniker: 'monitor',
        context: {
          genesisTx: 'Baby',
          renaissanceTx: 'overriding',
          genesisTime: '2019-02-28T21:54:49.386Z',
          renaissanceTime: '2019-02-28T21:54:49.386Z'
        },
        migratedTo: [
          'Fish',
          'one-to-one'
        ],
        migratedFrom: [
          'challenge',
          'Internal'
        ],
        numAssets: 76189,
        stake: {
          totalStakes: '37595',
          totalUnstakes: '46481',
          totalReceivedStakes: '71713',
          recentStakes: {
            items: [
              Uint8Array [
                36
              ],
              Uint8Array [
                117
              ]
            ],
            typeUrl: 'De-engineered',
            maxItems: 24677,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                10
              ],
              Uint8Array [
                43
              ]
            ],
            typeUrl: 'navigating',
            maxItems: 50732,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              119
            ],
            Uint8Array [
              16
            ]
          ],
          typeUrl: 'Haiti',
          maxItems: 55535,
          circular: undefined,
          fifo: undefined
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 1,
            address: 0,
            role: 5
          }
        }
      }
    ],
    assets: [
      {
        address: 'f88e2881a2b13919650c065f45a9dd940d3cbc36',
        owner: 'yellow',
        moniker: 'structure',
        readonly: undefined,
        activated: undefined,
        expiredAt: '2019-02-28T21:54:49.387Z',
        stake: {
          totalStakes: '70072',
          totalUnstakes: '93517',
          totalReceivedStakes: '92194',
          recentStakes: {
            items: [
              Uint8Array [
                45
              ],
              Uint8Array [
                88
              ]
            ],
            typeUrl: 'Junction',
            maxItems: 7125,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                7
              ],
              Uint8Array [
                158
              ]
            ],
            typeUrl: 'Money Market Account',
            maxItems: 61959,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'markets',
          renaissanceTx: 'Avenue',
          genesisTime: '2019-02-28T21:54:49.387Z',
          renaissanceTime: '2019-02-28T21:54:49.387Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 6,
            address: 1,
            role: 5
          }
        }
      },
      {
        address: '70fe29d61df8effa37868a2f5b27cc618e69e49e',
        owner: 'Industrial',
        moniker: 'Outdoors',
        readonly: undefined,
        activated: undefined,
        expiredAt: '2019-02-28T21:54:49.387Z',
        stake: {
          totalStakes: '74421',
          totalUnstakes: '70426',
          totalReceivedStakes: '10952',
          recentStakes: {
            items: [
              Uint8Array [
                139
              ],
              Uint8Array [
                142
              ]
            ],
            typeUrl: '24/365',
            maxItems: 71623,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                88
              ],
              Uint8Array [
                185
              ]
            ],
            typeUrl: 'Toys',
            maxItems: 22325,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Gloves',
          renaissanceTx: 'Maryland',
          genesisTime: '2019-02-28T21:54:49.387Z',
          renaissanceTime: '2019-02-28T21:54:49.387Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 7,
            address: 1,
            role: 6
          }
        }
      }
    ],
    stakes: [
      {
        address: '5c1a00588de70d8dcb159a7ab2eb3b099cc012fc',
        from: '0141540919ea61e1fc338df5b2a7d42551a1eacd',
        to: '9411503979c05f292ab31ed50a8e6cf03305b682',
        balance: '14992',
        message: 'methodical',
        context: {
          genesisTx: 'Optimized',
          renaissanceTx: 'Central',
          genesisTime: '2019-02-28T21:54:49.387Z',
          renaissanceTime: '2019-02-28T21:54:49.387Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 0,
            address: 1,
            role: 6
          }
        }
      },
      {
        address: 'fe6c6ac4778c05bcf105ded6eb49a46b698daabd',
        from: '56009a28609b82adfa91e7b6fe134cd1d26a71a4',
        to: '5476cc0b2de6b73237a647193fc279b27a6b5ec4',
        balance: '54286',
        message: 'national',
        context: {
          genesisTx: 'Communications',
          renaissanceTx: 'Syrian Pound',
          genesisTime: '2019-02-28T21:54:49.388Z',
          renaissanceTime: '2019-02-28T21:54:49.388Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 1,
            address: 0,
            role: 4
          }
        }
      }
    ],
    context: {
      txHash: '1cfba4b1e96cb6e2b84be10220ee46a44832e4bb',
      blockHeight: 27194,
      blockTime: '2019-02-28T21:54:49.388Z',
      totalTxs: 78314,
      txStatistics: {
        numAccountMigrateTxs: 88123,
        numCreateAssetTxs: 61677,
        numConsensusUpgradeTxs: 47824,
        numDeclareTxs: 68036,
        numDeclareFileTxs: 57789,
        numExchangeTxs: 59898,
        numStakeTxs: 61357,
        numSysUpgradeTxs: 48856,
        numTransferTxs: 68141,
        numUpdateAssetTxs: 40198
      },
      txIndex: 44341,
      lastBlockTime: '2019-02-28T21:54:49.389Z'
    },
    appState: {
      address: '1bb4c0c49a3bcf678b3baa6f299d14edb027c4c0',
      consensus: {
        maxBytes: 87492,
        maxGas: 3410,
        maxValidators: 91970,
        maxCandidates: 19850,
        pubKeyTypes: [
          'Lead',
          'paradigms'
        ],
        validators: [
          {
            address: '8e091a488d4bbd1d30a2ce6e033e64383147270c',
            power: 71084
          },
          {
            address: '4252409327cc4274e60be1de97878784b64cbecd',
            power: 90663
          }
        ],
        validatorChanged: undefined,
        paramChanged: undefined
      },
      tasks: {
        'function (options) {\n\n    if (typeof options === "number") {\n      options = {\n        max: options\n      };\n    }\n\n    options = options || {};\n\n    if (typeof options.min === "undefined") {\n      options.min = 0;\n    }\n\n    if (typeof options.max === "undefined") {\n      options.max = 99999;\n    }\n    if (typeof options.precision === "undefined") {\n      options.precision = 1;\n    }\n\n    // Make the range inclusive of the max value\n    var max = options.max;\n    if (max >= 0) {\n      max += options.precision;\n    }\n\n    var randomNumber = Math.floor(\n      mersenne.rand(max / options.precision, options.min / options.precision));\n    // Workaround problem in Float point arithmetics for e.g. 6681493 / 0.01\n    randomNumber = randomNumber / (1 / options.precision);\n\n    return randomNumber;\n\n  }': {
          item: [
            {
              type: 10,
              dataHash: 'Savings Account',
              actions: [
                undefined,
                undefined
              ]
            },
            {
              type: 14,
              dataHash: 'Auto Loan Account',
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
          totalStakes: '66049',
          totalUnstakes: '99234',
          context: {
            genesisTx: 'Outdoors',
            renaissanceTx: 'synthesizing',
            genesisTime: '2019-02-28T21:54:49.389Z',
            renaissanceTime: '2019-02-28T21:54:49.389Z'
          }
        }
      },
      version: 'Tasty',
      dataVersion: 'program',
      forgeAppHash: Uint8Array [
        207
      ],
      data: {
        type: 'WalletType',
        value: {
          pk: 0,
          hash: 7,
          address: 1,
          role: 8
        }
      }
    }
  }
});

// output
{
  verifyTx: {
    code: 5
  }
}
```

### processOne

```js
const result = await client.processOne({
  verifyTx: {
    tx: {
      from: '70d718be98b47904a1e48cd4ffe2ed2fe9c8c129',
      nonce: 33268,
      signature: Uint8Array [
        91
      ],
      chainId: 'invoice',
      signatures: [
        {
          key: Uint8Array [
            153
          ],
          value: Uint8Array [
            58
          ]
        },
        {
          key: Uint8Array [
            165
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
          hash: 6,
          address: 1,
          role: 0
        }
      }
    },
    states: [
      {
        balance: '2079',
        nonce: 48226,
        numTxs: 31426,
        address: '6e41b721a293e776a197e9e8b61cbf42e961b3bf',
        pk: Uint8Array [
          200
        ],
        type: {
          pk: 1,
          hash: 14,
          address: 1,
          role: 2
        },
        moniker: 'Mississippi',
        context: {
          genesisTx: 'panel',
          renaissanceTx: 'SDD',
          genesisTime: '2019-02-28T21:54:49.390Z',
          renaissanceTime: '2019-02-28T21:54:49.390Z'
        },
        migratedTo: [
          'Electronics',
          'override'
        ],
        migratedFrom: [
          'HDD',
          'Multi-lateral'
        ],
        numAssets: 48525,
        stake: {
          totalStakes: '62554',
          totalUnstakes: '60599',
          totalReceivedStakes: '86481',
          recentStakes: {
            items: [
              Uint8Array [
                140
              ],
              Uint8Array [
                207
              ]
            ],
            typeUrl: 'neural-net',
            maxItems: 56864,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                223
              ],
              Uint8Array [
                105
              ]
            ],
            typeUrl: 'SSL',
            maxItems: 87811,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              115
            ],
            Uint8Array [
              254
            ]
          ],
          typeUrl: 'Rustic Cotton Keyboard',
          maxItems: 73886,
          circular: undefined,
          fifo: undefined
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 6,
            address: 0,
            role: 6
          }
        }
      },
      {
        balance: '1306',
        nonce: 34831,
        numTxs: 16797,
        address: '1a34a763bec8278ccfb5761b353bc5463233f19d',
        pk: Uint8Array [
          222
        ],
        type: {
          pk: 1,
          hash: 1,
          address: 0,
          role: 0
        },
        moniker: 'teal',
        context: {
          genesisTx: 'Creative',
          renaissanceTx: 'mission-critical',
          genesisTime: '2019-02-28T21:54:49.390Z',
          renaissanceTime: '2019-02-28T21:54:49.390Z'
        },
        migratedTo: [
          'discrete',
          'Kenyan Shilling'
        ],
        migratedFrom: [
          'Bedfordshire',
          'feed'
        ],
        numAssets: 61174,
        stake: {
          totalStakes: '17181',
          totalUnstakes: '43829',
          totalReceivedStakes: '58298',
          recentStakes: {
            items: [
              Uint8Array [
                17
              ],
              Uint8Array [
                110
              ]
            ],
            typeUrl: 'Public-key',
            maxItems: 90306,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                142
              ],
              Uint8Array [
                54
              ]
            ],
            typeUrl: 'IB',
            maxItems: 26369,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              39
            ],
            Uint8Array [
              201
            ]
          ],
          typeUrl: 'input',
          maxItems: 35460,
          circular: undefined,
          fifo: undefined
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 7,
            address: 1,
            role: 1
          }
        }
      }
    ],
    assets: [
      {
        address: '6f49928c8cc7f61cae0159e0e262d99b742a0671',
        owner: 'Berkshire',
        moniker: 'Angola',
        readonly: undefined,
        activated: undefined,
        expiredAt: '2019-02-28T21:54:49.391Z',
        stake: {
          totalStakes: '31082',
          totalUnstakes: '21033',
          totalReceivedStakes: '50853',
          recentStakes: {
            items: [
              Uint8Array [
                137
              ],
              Uint8Array [
                228
              ]
            ],
            typeUrl: 'Granite',
            maxItems: 52478,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                77
              ],
              Uint8Array [
                194
              ]
            ],
            typeUrl: 'Creative',
            maxItems: 67568,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Awesome',
          renaissanceTx: 'visionary',
          genesisTime: '2019-02-28T21:54:49.391Z',
          renaissanceTime: '2019-02-28T21:54:49.391Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 6,
            address: 0,
            role: 4
          }
        }
      },
      {
        address: '0e44c73051e215e167bba9ffc1aaf5d3b62af308',
        owner: 'panel',
        moniker: 'optical',
        readonly: undefined,
        activated: undefined,
        expiredAt: '2019-02-28T21:54:49.391Z',
        stake: {
          totalStakes: '93828',
          totalUnstakes: '3473',
          totalReceivedStakes: '59544',
          recentStakes: {
            items: [
              Uint8Array [
                50
              ],
              Uint8Array [
                97
              ]
            ],
            typeUrl: 'fuchsia',
            maxItems: 65028,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                44
              ],
              Uint8Array [
                148
              ]
            ],
            typeUrl: 'Dominica',
            maxItems: 73595,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Optimization',
          renaissanceTx: 'array',
          genesisTime: '2019-02-28T21:54:49.391Z',
          renaissanceTime: '2019-02-28T21:54:49.391Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 1,
            address: 1,
            role: 2
          }
        }
      }
    ],
    stakes: [
      {
        address: '6bce4dbef5f5cdbcbd29abca58d3d11ea61c8c70',
        from: '3c1de76b16f7dd17878e99279424d76b9cfc20a7',
        to: 'dc4c3dc1157561fadcb25196647e9e2b93fed985',
        balance: '59666',
        message: 'Quality-focused',
        context: {
          genesisTx: 'purple',
          renaissanceTx: 'Rustic Rubber Pizza',
          genesisTime: '2019-02-28T21:54:49.391Z',
          renaissanceTime: '2019-02-28T21:54:49.391Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 13,
            address: 1,
            role: 3
          }
        }
      },
      {
        address: '40d3678d121e6c1645587bda295c5b01c15885f7',
        from: '1b971a2038b47f1d44971da529047d3c4ebc56e1',
        to: 'd0a0bdad6447dd8ccfd7c5c3d31e3f3ee278b199',
        balance: '95222',
        message: 'Cambridgeshire',
        context: {
          genesisTx: 'Wooden',
          renaissanceTx: 'Tools',
          genesisTime: '2019-02-28T21:54:49.391Z',
          renaissanceTime: '2019-02-28T21:54:49.391Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 0,
            address: 1,
            role: 7
          }
        }
      }
    ],
    context: {
      txHash: '58937d76444e235e6dde4e40cf575830668eb4a9',
      blockHeight: 33545,
      blockTime: '2019-02-28T21:54:49.391Z',
      totalTxs: 27299,
      txStatistics: {
        numAccountMigrateTxs: 71932,
        numCreateAssetTxs: 47114,
        numConsensusUpgradeTxs: 85169,
        numDeclareTxs: 72406,
        numDeclareFileTxs: 83443,
        numExchangeTxs: 83760,
        numStakeTxs: 16324,
        numSysUpgradeTxs: 12994,
        numTransferTxs: 72146,
        numUpdateAssetTxs: 17931
      },
      txIndex: 36639,
      lastBlockTime: '2019-02-28T21:54:49.391Z'
    },
    appState: {
      address: '5a995c1d2e3a4cdaf74bb390d6b77597858dd0ab',
      consensus: {
        maxBytes: 59280,
        maxGas: 18662,
        maxValidators: 51554,
        maxCandidates: 72768,
        pubKeyTypes: [
          'Svalbard & Jan Mayen Islands',
          'RSS'
        ],
        validators: [
          {
            address: '32205dc696cafce10aa5c6abf5bd257e20714843',
            power: 10245
          },
          {
            address: 'eea5b3f08492bafd6fa5b0020ac2a2edf4cb0244',
            power: 4758
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
              dataHash: 'Regional',
              actions: [
                undefined,
                undefined
              ]
            },
            {
              type: 10,
              dataHash: 'Chicken',
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
          totalStakes: '42870',
          totalUnstakes: '48651',
          context: {
            genesisTx: 'COM',
            renaissanceTx: 'Oklahoma',
            genesisTime: '2019-02-28T21:54:49.391Z',
            renaissanceTime: '2019-02-28T21:54:49.391Z'
          }
        }
      },
      version: 'Indiana',
      dataVersion: 'unleash',
      forgeAppHash: Uint8Array [
        87
      ],
      data: {
        type: 'WalletType',
        value: {
          pk: 1,
          hash: 1,
          address: 1,
          role: 6
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
    code: 30
  }
}
});
```

### recoverWallet

```js
const result = await client.recoverWallet({
  data: Uint8Array [
    248
  ],
  type: {
    pk: 0,
    hash: 0,
    address: 1,
    role: 1
  },
  passphrase: 'GB',
  moniker: 'Persistent'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 26,
  token: 'North Carolina',
  wallet: {
    type: {
      pk: 0,
      hash: 1,
      address: 1,
      role: 2
    },
    sk: Uint8Array [
      63
    ],
    pk: Uint8Array [
      132
    ],
    address: '7d896e09f6d6d407a172931b52b826857201a5db'
  }
}
});
```

### removeWallet

```js
const result = await client.removeWallet({
  address: '7fad52db97ba093c96996cd87135cdfaba0ef8df'
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
  key: 'Mississippi',
  value: 'facilitate'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 26,
  txs: [
    {
      tx: {
        from: '61ca2941f202cab24a6e658481974db175d588ad',
        nonce: 1800,
        signature: Uint8Array [
          222
        ],
        chainId: 'Practical',
        signatures: [
          {
            key: Uint8Array [
              214
            ],
            value: Uint8Array [
              80
            ]
          },
          {
            key: Uint8Array [
              0
            ],
            value: Uint8Array [
              188
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 0,
            address: 1,
            role: 3
          }
        }
      },
      height: 94825,
      index: 66686,
      hash: 'cdc72d0e1bff70745c290ed11612b7b2998cb2c6',
      tags: [
        {
          key: Uint8Array [
            235
          ],
          value: Uint8Array [
            88
          ]
        },
        {
          key: Uint8Array [
            227
          ],
          value: Uint8Array [
            183
          ]
        }
      ],
      code: 38
    },
    {
      tx: {
        from: 'b5232e3e75800293819a1eee4df58d8b4e6a6a7e',
        nonce: 46875,
        signature: Uint8Array [
          106
        ],
        chainId: 'Rustic Fresh Table',
        signatures: [
          {
            key: Uint8Array [
              199
            ],
            value: Uint8Array [
              53
            ]
          },
          {
            key: Uint8Array [
              166
            ],
            value: Uint8Array [
              183
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 13,
            address: 0,
            role: 0
          }
        }
      },
      height: 24206,
      index: 97237,
      hash: '99f21ab0ec4a60d52b4d005b3dfbbbb2fabeac15',
      tags: [
        {
          key: Uint8Array [
            147
          ],
          value: Uint8Array [
            21
          ]
        },
        {
          key: Uint8Array [
            161
          ],
          value: Uint8Array [
            70
          ]
        }
      ],
      code: 7
    }
  ]
}
});
```

### sendTx

```js
const result = await client.sendTx({
  tx: {
    from: '9e7d131bd72689b63ad49aadfcf8ef3e6cb626d7',
    nonce: 25522,
    signature: Uint8Array [
      42
    ],
    chainId: 'Gorgeous',
    signatures: [
      {
        key: Uint8Array [
          153
        ],
        value: Uint8Array [
          36
        ]
      },
      {
        key: Uint8Array [
          148
        ],
        value: Uint8Array [
          199
        ]
      }
    ],
    itx: {
      type: 'WalletType',
      value: {
        pk: 1,
        hash: 13,
        address: 1,
        role: 8
      }
    }
  },
  wallet: {
    type: {
      pk: 0,
      hash: 7,
      address: 1,
      role: 5
    },
    sk: Uint8Array [
      160
    ],
    pk: Uint8Array [
      210
    ],
    address: '9bfc0428be8126835949baa0a173fedb77180e29'
  },
  token: 'Clothing',
  commit: undefined
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 26,
  hash: 'dfcaa37a2ea5db9dcc1b9c66d6f2b8e8e6e6d2c4'
}
});
```

### signData

```js
const result = await client.signData({
  data: Uint8Array [
    81
  ],
  wallet: {
    type: {
      pk: 0,
      hash: 14,
      address: 1,
      role: 7
    },
    sk: Uint8Array [
      15
    ],
    pk: Uint8Array [
      31
    ],
    address: 'e15c517d9ae8c548cd7ab350d6bde8d58f257bc8'
  },
  token: 'schemas'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 21,
  signature: Uint8Array [
    123
  ]
}
});
```

### storeFile

```js
const result = await client.storeFile({
  chunk: Uint8Array [
    51
  ]
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 42,
  hash: '2cd64e3e7f006a56bcd384f66ceedd5e47be1379'
}
});
```

### subscribe

```js
const stream = client.subscribe({
  type: 130,
  filter: 'Quality'
});

// output
{
  topic: 'ivory'
}
```

### unsubscribe

```js
const result = await client.unsubscribe({
  topic: 'Inverse'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 8
}
});
```


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |
