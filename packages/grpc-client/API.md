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
  * [Validity](#validity)
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
  * [getHealthStatus](#gethealthstatus)
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

### Validity

```js
{
  BOTH: 0,
  VALID: 1,
  INVALID: 2
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
  from: '102140f5555b5572bea61375b77a4fead919d595',
  nonce: 46069,
  wallet: {
    type: {
      pk: 0,
      hash: 2,
      address: 1,
      role: 8
    },
    sk: Uint8Array [
      178
    ],
    pk: Uint8Array [
      78
    ],
    address: '771e5599dea6dd0d625b2f1fac3d56592081a017'
  },
  token: 'aggregate'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 9,
  tx: {
    from: 'f9e07f6b71e3c6c9057659b7e164f37017e6355f',
    nonce: 19869,
    chainId: 'invoice',
    pk: Uint8Array [
      125
    ],
    signature: Uint8Array [
      249
    ],
    signatures: [
      {
        signer: 'Games',
        pk: Uint8Array [
          46
        ],
        signature: Uint8Array [
          157
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'online',
        pk: Uint8Array [
          95
        ],
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
  }
}
});
```

### createWallet

```js
const result = await client.createWallet({
  passphrase: 'solution',
  type: {
    pk: 1,
    hash: 1,
    address: 1,
    role: 6
  },
  moniker: 'Global'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 500,
  token: 'compress',
  wallet: {
    type: {
      pk: 1,
      hash: 0,
      address: 0,
      role: 7
    },
    sk: Uint8Array [
      0
    ],
    pk: Uint8Array [
      53
    ],
    address: 'e6a20a0177722db41649e7e028e9a7165b94db7b'
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
  code: 34,
  wallet: {
    type: {
      pk: 1,
      hash: 7,
      address: 0,
      role: 8
    },
    sk: Uint8Array [
      101
    ],
    pk: Uint8Array [
      63
    ],
    address: 'e4428007e4b466f3e7ce68b5d28f6b58357994d8'
  }
}
});
```

### getAccountState

```js
const stream = client.getAccountState({
  address: 'f8af5024357c9b2fda29813b58131d49098aea53',
  keys: [
    'deposit',
    'parse'
  ],
  height: 31688
});

// output
{
  code: 36,
  state: {
    balance: '38806',
    nonce: 87718,
    numTxs: 70699,
    address: 'cc2f002c07c49841612dcc95c6e56d26b3685e18',
    pk: Uint8Array [
      60
    ],
    type: {
      pk: 0,
      hash: 7,
      address: 1,
      role: 5
    },
    moniker: 'Car',
    context: {
      genesisTx: 'Mouse',
      renaissanceTx: 'California',
      genesisTime: '2019-04-09T06:47:53.788Z',
      renaissanceTime: '2019-04-09T06:47:53.788Z'
    },
    issuer: 'back-end',
    migratedTo: [
      'Analyst',
      'Bike'
    ],
    migratedFrom: [
      'Lead',
      'protocol'
    ],
    numAssets: 87225,
    stake: {
      totalStakes: '85555',
      totalUnstakes: '77405',
      totalReceivedStakes: '60718',
      recentStakes: {
        items: [
          Uint8Array [
            153
          ],
          Uint8Array [
            82
          ]
        ],
        typeUrl: 'deposit',
        maxItems: 57795,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [
            27
          ],
          Uint8Array [
            164
          ]
        ],
        typeUrl: 'Norwegian Krone',
        maxItems: 47318,
        circular: undefined,
        fifo: undefined
      }
    },
    pinnedFiles: {
      items: [
        Uint8Array [
          123
        ],
        Uint8Array [
          112
        ]
      ],
      typeUrl: 'capability',
      maxItems: 91270,
      circular: undefined,
      fifo: undefined
    },
    poke: {
      dailyLimit: '97814',
      leftover: '25846',
      amount: '8707'
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
  senderAddress: 'well-modulated',
  itx: {
    moniker: 'Ball',
    data: {
      type: 'fg:x:random_data',
      value: 'ABCD 1234'
    },
    readonly: undefined,
    transferrable: undefined,
    ttl: 79180,
    parent: 'needs-based'
  },
  walletType: {
    pk: 1,
    hash: 1,
    address: 0,
    role: 5
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 17,
  assetAddress: 'Chicken'
}
});
```

### getAssetState

```js
const stream = client.getAssetState({
  address: 'dce987c9006e4f6f2e6d714b2100bf2f7f35f254',
  keys: [
    'connect',
    'web-enabled'
  ],
  height: 64567
});

// output
{
  code: 6,
  state: {
    address: 'a41731cb68a0cb0fb9b1da7f858991d501ca2b06',
    owner: 'maximize',
    moniker: 'Beauty',
    readonly: undefined,
    transferrable: undefined,
    ttl: 90479,
    consumedTime: '2019-04-09T06:47:53.789Z',
    issuer: 'robust',
    stake: {
      totalStakes: '46287',
      totalUnstakes: '84481',
      totalReceivedStakes: '21223',
      recentStakes: {
        items: [
          Uint8Array [
            75
          ],
          Uint8Array [
            128
          ]
        ],
        typeUrl: '24/365',
        maxItems: 75878,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [
            235
          ],
          Uint8Array [
            15
          ]
        ],
        typeUrl: 'Supervisor',
        maxItems: 81603,
        circular: undefined,
        fifo: undefined
      }
    },
    context: {
      genesisTx: 'Australia',
      renaissanceTx: 'Rubber',
      genesisTime: '2019-04-09T06:47:53.789Z',
      renaissanceTime: '2019-04-09T06:47:53.789Z'
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
    cursor: 'emulation',
    size: 90019,
    order: [
      {
        field: 'haptic',
        type: 'Lempira'
      },
      {
        field: 'XSS',
        type: 'Intelligent Cotton Mouse'
      }
    ]
  },
  ownerAddress: 'Licensed'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 40,
  page: {
    cursor: 'Dalasi',
    next: undefined,
    total: 96683
  },
  assets: [
    {
      address: '2c766acadd6d739edea1f2d009ebd8e6b432692a',
      owner: 'Director',
      genesisTime: 'Accountability',
      renaissanceTime: 'Handcrafted',
      moniker: 'bypass',
      readonly: undefined
    },
    {
      address: '0b6ab0c4357a0f7b08c29c24519b7ae2184b660f',
      owner: 'teal',
      genesisTime: 'next-generation',
      renaissanceTime: 'Product',
      moniker: 'compressing',
      readonly: undefined
    }
  ]
}
});
```

### getBlock

```js
const stream = client.getBlock({
  height: 53427
});

// output
{
  code: 22,
  block: {
    height: 22445,
    numTxs: 44249,
    time: '2019-04-09T06:47:53.790Z',
    appHash: '11f2377aeee511a314efaf98b36092c66a574ec2',
    proposer: '26508a5843e6a2555c8537bfad60ed0b3346ba56',
    txs: [
      {
        tx: {
          from: '561de3aec7ffeddd7a3895145011708387f57840',
          nonce: 47738,
          chainId: '4th generation',
          pk: Uint8Array [
            188
          ],
          signature: Uint8Array [
            22
          ],
          signatures: [
            {
              signer: 'Mississippi',
              pk: Uint8Array [
                174
              ],
              signature: Uint8Array [
                200
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'Table',
              pk: Uint8Array [
                210
              ],
              signature: Uint8Array [
                73
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
        height: 89539,
        index: 96326,
        hash: '1d3dc8e1d6d10c72648059da7e03f7850ad7cb5d',
        tags: [
          {
            key: Uint8Array [
              91
            ],
            value: Uint8Array [
              155
            ]
          },
          {
            key: Uint8Array [
              179
            ],
            value: Uint8Array [
              162
            ]
          }
        ],
        code: 32,
        time: '2019-04-09T06:47:53.790Z',
        createAsset: {
          asset: 'wireless'
        },
        accountMigrate: {
          address: 'a5fc934f5188bfccc35133f403d21c0e6f3ea5a7'
        }
      },
      {
        tx: {
          from: 'cf70b986ba712d42387eaf5089bc7acd7b0c0f57',
          nonce: 42751,
          chainId: 'Distributed',
          pk: Uint8Array [
            9
          ],
          signature: Uint8Array [
            230
          ],
          signatures: [
            {
              signer: 'Seamless',
              pk: Uint8Array [
                5
              ],
              signature: Uint8Array [
                165
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'Multi-tiered',
              pk: Uint8Array [
                34
              ],
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
        height: 89813,
        index: 73093,
        hash: '31f25d90f44a1f6e12c023ab921656902ad7b1f7',
        tags: [
          {
            key: Uint8Array [
              98
            ],
            value: Uint8Array [
              156
            ]
          },
          {
            key: Uint8Array [
              139
            ],
            value: Uint8Array [
              124
            ]
          }
        ],
        code: 40,
        time: '2019-04-09T06:47:53.790Z',
        createAsset: {
          asset: 'online'
        },
        accountMigrate: {
          address: '21f993779a5413a60e1423d9cc1d8e11f5256222'
        }
      }
    ],
    totalTxs: 61154,
    invalidTxs: [
      {
        tx: {
          from: '93254ce9c531bc8b6998bc142014c202c6bbd789',
          nonce: 48186,
          chainId: 'syndicate',
          pk: Uint8Array [
            2
          ],
          signature: Uint8Array [
            230
          ],
          signatures: [
            {
              signer: 'CSS',
              pk: Uint8Array [
                11
              ],
              signature: Uint8Array [
                111
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'California',
              pk: Uint8Array [
                250
              ],
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
        height: 56708,
        index: 26537,
        hash: 'efa5e4f8bf68941bd700a212cda86e9b3d9b4ecd',
        tags: [
          {
            key: Uint8Array [
              157
            ],
            value: Uint8Array [
              228
            ]
          },
          {
            key: Uint8Array [
              125
            ],
            value: Uint8Array [
              17
            ]
          }
        ],
        code: 500,
        time: '2019-04-09T06:47:53.790Z',
        createAsset: {
          asset: 'Regional'
        },
        accountMigrate: {
          address: 'da2fb43eb773b6772b157016e682080475eeed46'
        }
      },
      {
        tx: {
          from: 'af0a952dcd6c37a98be76ec03002b029237f3f85',
          nonce: 33231,
          chainId: 'monitor',
          pk: Uint8Array [
            238
          ],
          signature: Uint8Array [
            57
          ],
          signatures: [
            {
              signer: 'impactful',
              pk: Uint8Array [
                3
              ],
              signature: Uint8Array [
                26
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'bus',
              pk: Uint8Array [
                61
              ],
              signature: Uint8Array [
                28
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
        height: 28240,
        index: 78768,
        hash: '9b47e87d8a781213dfd5a4603dbe07626bbdbf75',
        tags: [
          {
            key: Uint8Array [
              6
            ],
            value: Uint8Array [
              19
            ]
          },
          {
            key: Uint8Array [
              174
            ],
            value: Uint8Array [
              135
            ]
          }
        ],
        code: 34,
        time: '2019-04-09T06:47:53.791Z',
        createAsset: {
          asset: 'Money Market Account'
        },
        accountMigrate: {
          address: '3c73fa35ae4cfc979a438dc260c56fa3e0bb5388'
        }
      }
    ],
    txsHashes: [
      'redundant',
      'Administrator'
    ],
    invalidTxsHashes: [
      'database',
      'bypassing'
    ],
    consensusHash: Uint8Array [
      234
    ],
    dataHash: Uint8Array [
      222
    ],
    evidenceHash: Uint8Array [
      31
    ],
    lastCommitHash: Uint8Array [
      227
    ],
    lastResultsHash: Uint8Array [
      179
    ],
    nextValidatorsHash: Uint8Array [
      101
    ],
    validatorsHash: Uint8Array [
      98
    ],
    version: {
      Block: 31641,
      App: 93577
    },
    lastBlockId: {
      hash: '8f29dec1265d0d12a560a04495bb09c3b14de583',
      partsHeader: {
        total: undefined,
        hash: '7fa76d88d0e1153610df3b85ee272674c055b8a8'
      }
    }
  }
}
```

### getBlocks

```js
const result = await client.getBlocks({
  paging: {
    cursor: 'Romania',
    size: 84909,
    order: [
      {
        field: 'dynamic',
        type: 'New York'
      },
      {
        field: 'Generic Metal Chicken',
        type: 'Pound Sterling'
      }
    ]
  },
  minHeight: 44692,
  maxHeight: 32717,
  emptyExcluded: undefined
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 32,
  page: {
    cursor: 'Brazil',
    next: undefined,
    total: 37325
  },
  blocks: [
    {
      height: 7559,
      numTxs: 12197,
      time: '2019-04-09T06:47:53.792Z',
      appHash: '13b143163919a921408da46fcc783405c37728de',
      proposer: '7d13f5be7de0ebd77695e416d950f75393054b1d',
      txs: [
        {
          tx: {
            from: '52ae491430b99332d7c25b29a1f59aefac38c56f',
            nonce: 51663,
            chainId: 'Awesome Fresh Ball',
            pk: Uint8Array [
              151
            ],
            signature: Uint8Array [
              109
            ],
            signatures: [
              {
                signer: '6th generation',
                pk: Uint8Array [
                  121
                ],
                signature: Uint8Array [
                  246
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'digital',
                pk: Uint8Array [
                  205
                ],
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
          height: 90450,
          index: 88784,
          hash: '61b454726dc681c6a9f7b5350f2fde471ae30f15',
          tags: [
            {
              key: Uint8Array [
                129
              ],
              value: Uint8Array [
                93
              ]
            },
            {
              key: Uint8Array [
                113
              ],
              value: Uint8Array [
                103
              ]
            }
          ],
          code: 35,
          time: '2019-04-09T06:47:53.792Z',
          createAsset: {
            asset: 'Rwanda Franc'
          },
          accountMigrate: {
            address: '87b3cd519ee340165e0900fa426122dd050209b6'
          }
        },
        {
          tx: {
            from: 'afab5717b75e4be2a80f17c4caf8d26424327e9a',
            nonce: 14772,
            chainId: 'Beauty',
            pk: Uint8Array [
              158
            ],
            signature: Uint8Array [
              154
            ],
            signatures: [
              {
                signer: 'Orchestrator',
                pk: Uint8Array [
                  58
                ],
                signature: Uint8Array [
                  130
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'open-source',
                pk: Uint8Array [
                  0
                ],
                signature: Uint8Array [
                  178
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
          height: 99060,
          index: 77624,
          hash: 'c7051fb072992c1b12538069078caa4c79908c6f',
          tags: [
            {
              key: Uint8Array [
                143
              ],
              value: Uint8Array [
                13
              ]
            },
            {
              key: Uint8Array [
                122
              ],
              value: Uint8Array [
                244
              ]
            }
          ],
          code: 27,
          time: '2019-04-09T06:47:53.793Z',
          createAsset: {
            asset: 'Developer'
          },
          accountMigrate: {
            address: '19d8b631cd18a27478906f2bad12d7f94b93b648'
          }
        }
      ],
      totalTxs: 8308,
      invalidTxs: [
        {
          tx: {
            from: '73c6a9e1da6bc60a50b0feec9ddfadc7c9ae66c9',
            nonce: 50298,
            chainId: 'JSON',
            pk: Uint8Array [
              48
            ],
            signature: Uint8Array [
              85
            ],
            signatures: [
              {
                signer: 'cyan',
                pk: Uint8Array [
                  168
                ],
                signature: Uint8Array [
                  16
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Squares',
                pk: Uint8Array [
                  110
                ],
                signature: Uint8Array [
                  60
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
          height: 50797,
          index: 54255,
          hash: '56a839341be043aa8523ed4113885525ade3fcee',
          tags: [
            {
              key: Uint8Array [
                182
              ],
              value: Uint8Array [
                35
              ]
            },
            {
              key: Uint8Array [
                0
              ],
              value: Uint8Array [
                230
              ]
            }
          ],
          code: 31,
          time: '2019-04-09T06:47:53.793Z',
          createAsset: {
            asset: 'backing up'
          },
          accountMigrate: {
            address: '111c6029e9f2e44398fbffab4d30806611c5eaa0'
          }
        },
        {
          tx: {
            from: '16fd074a111bfcd8a76a03093bc42e848e0ee9d3',
            nonce: 15664,
            chainId: 'Developer',
            pk: Uint8Array [
              206
            ],
            signature: Uint8Array [
              139
            ],
            signatures: [
              {
                signer: 'New Hampshire',
                pk: Uint8Array [
                  152
                ],
                signature: Uint8Array [
                  234
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Forward',
                pk: Uint8Array [
                  93
                ],
                signature: Uint8Array [
                  166
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
          height: 39667,
          index: 19113,
          hash: 'e5ead5c58a733f30c46bd9d386c27718965fbd53',
          tags: [
            {
              key: Uint8Array [
                31
              ],
              value: Uint8Array [
                242
              ]
            },
            {
              key: Uint8Array [
                27
              ],
              value: Uint8Array [
                228
              ]
            }
          ],
          code: 500,
          time: '2019-04-09T06:47:53.793Z',
          createAsset: {
            asset: 'static'
          },
          accountMigrate: {
            address: '5c22fb9ca32c39eaf990b9e474469f1f35328e8a'
          }
        }
      ],
      txsHashes: [
        'Wooden',
        'optical'
      ],
      invalidTxsHashes: [
        'deposit',
        'Future'
      ],
      consensusHash: Uint8Array [
        6
      ],
      dataHash: Uint8Array [
        217
      ],
      evidenceHash: Uint8Array [
        18
      ],
      lastCommitHash: Uint8Array [
        205
      ],
      lastResultsHash: Uint8Array [
        175
      ],
      nextValidatorsHash: Uint8Array [
        120
      ],
      validatorsHash: Uint8Array [
        235
      ],
      version: {
        Block: 14810,
        App: 92521
      },
      lastBlockId: {
        hash: 'c0c3478466f12a57ef1b3835ed582900f35f2af7',
        partsHeader: {
          total: undefined,
          hash: '4dd5dd7655c6615c300f08ad3b3f8ea85df7fbb0'
        }
      }
    },
    {
      height: 95849,
      numTxs: 72392,
      time: '2019-04-09T06:47:53.794Z',
      appHash: '94277d707fdb7692a1b852cd366a51ee631bb7d0',
      proposer: '46f2a4a7ff18edd249199e692886f81bedf6f274',
      txs: [
        {
          tx: {
            from: '6e57edae06697a41f165460d283f011543931a82',
            nonce: 76491,
            chainId: 'functionalities',
            pk: Uint8Array [
              18
            ],
            signature: Uint8Array [
              183
            ],
            signatures: [
              {
                signer: 'Industrial',
                pk: Uint8Array [
                  118
                ],
                signature: Uint8Array [
                  79
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'SSL',
                pk: Uint8Array [
                  120
                ],
                signature: Uint8Array [
                  4
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
          height: 46853,
          index: 3233,
          hash: 'e14b749aa6c17d6a5411d2876984714c2d697733',
          tags: [
            {
              key: Uint8Array [
                176
              ],
              value: Uint8Array [
                214
              ]
            },
            {
              key: Uint8Array [
                1
              ],
              value: Uint8Array [
                46
              ]
            }
          ],
          code: 37,
          time: '2019-04-09T06:47:53.794Z',
          createAsset: {
            asset: 'Sleek Granite Pants'
          },
          accountMigrate: {
            address: 'b40989d715fb8ca380d105df1f0057bd38008da6'
          }
        },
        {
          tx: {
            from: 'bc2d4202e4d2783cab2df4d0637362c5f1e57a33',
            nonce: 16480,
            chainId: 'white',
            pk: Uint8Array [
              97
            ],
            signature: Uint8Array [
              48
            ],
            signatures: [
              {
                signer: 'parsing',
                pk: Uint8Array [
                  93
                ],
                signature: Uint8Array [
                  245
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Manager',
                pk: Uint8Array [
                  161
                ],
                signature: Uint8Array [
                  14
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
          height: 80634,
          index: 40741,
          hash: '120e252e51005c8124fd60718e47644b88c92abf',
          tags: [
            {
              key: Uint8Array [
                237
              ],
              value: Uint8Array [
                149
              ]
            },
            {
              key: Uint8Array [
                17
              ],
              value: Uint8Array [
                190
              ]
            }
          ],
          code: 36,
          time: '2019-04-09T06:47:53.794Z',
          createAsset: {
            asset: 'Arizona'
          },
          accountMigrate: {
            address: 'b2a94dee6df5a768add3b52ae5f3a1f80df067ea'
          }
        }
      ],
      totalTxs: 84920,
      invalidTxs: [
        {
          tx: {
            from: 'e39b3ac7620175a7ba5c5c046476a7d950d7e224',
            nonce: 32093,
            chainId: 'Albania',
            pk: Uint8Array [
              147
            ],
            signature: Uint8Array [
              83
            ],
            signatures: [
              {
                signer: 'Cotton',
                pk: Uint8Array [
                  110
                ],
                signature: Uint8Array [
                  122
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'cross-platform',
                pk: Uint8Array [
                  210
                ],
                signature: Uint8Array [
                  251
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
          height: 42058,
          index: 54368,
          hash: '7cd8e18bf310c125fd198173369074f292790415',
          tags: [
            {
              key: Uint8Array [
                223
              ],
              value: Uint8Array [
                62
              ]
            },
            {
              key: Uint8Array [
                49
              ],
              value: Uint8Array [
                162
              ]
            }
          ],
          code: 504,
          time: '2019-04-09T06:47:53.795Z',
          createAsset: {
            asset: 'Checking Account'
          },
          accountMigrate: {
            address: '492ec0079008673c729f92daad83bec1d2e0467f'
          }
        },
        {
          tx: {
            from: '48a4684982549c705e5ec001a8e81c01e70dbc68',
            nonce: 81087,
            chainId: 'Idaho',
            pk: Uint8Array [
              203
            ],
            signature: Uint8Array [
              97
            ],
            signatures: [
              {
                signer: 'users',
                pk: Uint8Array [
                  33
                ],
                signature: Uint8Array [
                  66
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'intuitive',
                pk: Uint8Array [
                  19
                ],
                signature: Uint8Array [
                  224
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
          height: 81404,
          index: 21520,
          hash: 'a7777cdb16d660bf8ccc14798454e86b21b5f26d',
          tags: [
            {
              key: Uint8Array [
                44
              ],
              value: Uint8Array [
                114
              ]
            },
            {
              key: Uint8Array [
                25
              ],
              value: Uint8Array [
                6
              ]
            }
          ],
          code: 7,
          time: '2019-04-09T06:47:53.795Z',
          createAsset: {
            asset: 'bypassing'
          },
          accountMigrate: {
            address: '529c03a6fbb80a8e09172a627b6dcf3bad0196e8'
          }
        }
      ],
      txsHashes: [
        'navigating',
        'Handmade Granite Bike'
      ],
      invalidTxsHashes: [
        'Managed',
        'workforce'
      ],
      consensusHash: Uint8Array [
        15
      ],
      dataHash: Uint8Array [
        68
      ],
      evidenceHash: Uint8Array [
        178
      ],
      lastCommitHash: Uint8Array [
        45
      ],
      lastResultsHash: Uint8Array [
        162
      ],
      nextValidatorsHash: Uint8Array [
        160
      ],
      validatorsHash: Uint8Array [
        39
      ],
      version: {
        Block: 68564,
        App: 65966
      },
      lastBlockId: {
        hash: 'cacda963c776d5e6c768cbf231b44a28b399d857',
        partsHeader: {
          total: undefined,
          hash: 'e7c9d289f4054a6bdacf5f5e99d9ccb891c191fb'
        }
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
  code: 22,
  info: {
    id: 'Switchable',
    network: 'Administrator',
    moniker: 'cross-platform',
    consensusVersion: 'Awesome',
    synced: undefined,
    appHash: '511f03d0c1b092df80449f432fab295a3494962e',
    blockHash: Uint8Array [
      249
    ],
    blockHeight: 18060,
    blockTime: '2019-04-09T06:47:53.797Z',
    address: '4bf917f222ec719a2f9eb407b1e1d715855828e7',
    votingPower: 24521,
    totalTxs: 42747,
    version: 'Architect',
    dataVersion: 'global',
    forgeAppsVersion: {
      Global: 'copy'
    },
    supportedTxs: [
      'Synchronised',
      'definition'
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
  code: 2,
  config: 'Liaison'
}
});
```

### getForgeState

```js
const result = await client.getForgeState({
  keys: [
    'Chips',
    'Metal'
  ],
  height: 23437
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 42,
  state: {
    address: 'b29fdcbb7288170427d82bed30d4f95b9dc78425',
    consensus: {
      maxBytes: 10527,
      maxGas: 89177,
      maxValidators: 36002,
      maxCandidates: 8104,
      pubKeyTypes: [
        'North Dakota',
        'Investment Account'
      ],
      validators: [
        {
          address: 'f21e44b7133a3c11e34d7840ddabe32d70bd2867',
          power: 14990
        },
        {
          address: 'd3346b9a31565038e60c283b01e6287e31d8b87e',
          power: 90105
        }
      ],
      validatorChanged: undefined,
      paramChanged: undefined
    },
    tasks: {
      '86225': {
        item: [
          {
            type: 2,
            dataHash: 'Fish',
            actions: [
              undefined,
              undefined
            ]
          },
          {
            type: 10,
            dataHash: 'Movies',
            actions: [
              undefined,
              undefined
            ]
          }
        ]
      }
    },
    stakeSummary: {
      '8006': {
        totalStakes: '13308',
        totalUnstakes: '80715',
        context: {
          genesisTx: 'Sports',
          renaissanceTx: 'bleeding-edge',
          genesisTime: '2019-04-09T06:47:53.797Z',
          renaissanceTime: '2019-04-09T06:47:53.797Z'
        }
      }
    },
    version: 'Metal',
    dataVersion: 'bluetooth',
    forgeAppHash: Uint8Array [
      110
    ],
    token: {
      name: 'Radial',
      symbol: 'clear-thinking',
      unit: 'Rubber',
      description: 'ivory',
      icon: Uint8Array [
        179
      ],
      decimal: 23146,
      initialSupply: 37970,
      totalSupply: 98062,
      inflationRate: 78484
    },
    txConfig: {
      maxAssetSize: 22181,
      maxListSize: 6210,
      maxMultisig: 61694,
      minimumStake: 35851
    },
    stakeConfig: {
      timeoutGeneral: 3663,
      timeoutStakeForNode: 36508
    },
    pokeConfig: {
      address: '73601b2c2152134f50f0daf4942553e9a2429bd5',
      dailyLimit: 53793,
      balance: 33921,
      amount: 3612
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
    startDate: 'Cheese',
    endDate: 'Wyoming'
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 37,
  forgeStatistics: {
    numBlocks: [
      92193,
      82318
    ],
    numTxs: [
      13259,
      58868
    ],
    numStakes: [
      '90303',
      '81274'
    ],
    numValidators: [
      58549,
      1986
    ],
    numAccountMigrateTxs: [
      78157,
      13901
    ],
    numCreateAssetTxs: [
      20043,
      50128
    ],
    numConsensusUpgradeTxs: [
      19169,
      80247
    ],
    numDeclareTxs: [
      28791,
      19212
    ],
    numDeclareFileTxs: [
      81249,
      94118
    ],
    numExchangeTxs: [
      68979,
      58848
    ],
    numStakeTxs: [
      63592,
      90983
    ],
    numSysUpgradeTxs: [
      99053,
      42400
    ],
    numTransferTxs: [
      44093,
      38173
    ],
    numUpdateAssetTxs: [
      76004,
      72354
    ],
    numConsumeAssetTxs: [
      16744,
      8512
    ],
    numPokeTxs: [
      25679,
      4753
    ],
    tps: [
      30554,
      19214
    ],
    maxTps: 33810,
    avgTps: 71549,
    avgBlockTime: 64607.76
  }
}
});
```

### getHealthStatus

```js
const result = await client.getHealthStatus({});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 500,
  healthStatus: {
    consensus: {
      health: undefined,
      synced: undefined,
      blockHeight: 67522
    },
    network: {
      health: undefined,
      numPeers: 17121
    },
    storage: {
      health: undefined,
      indexerServer: 'Coordinator',
      stateDb: 'Keyboard',
      diskSpace: {
        forgeUsage: 'dedicated',
        total: 'tertiary'
      }
    },
    forge: {
      health: undefined,
      abiServer: 'Niue',
      forgeWeb: 'Awesome Plastic Chair',
      abciServer: {
        abciConsensus: 'AGP',
        abciInfo: 'backing up'
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
  code: 22,
  netInfo: {
    listening: undefined,
    listeners: [
      'invoice',
      'quantifying'
    ],
    nPeers: 10104,
    peers: [
      {
        id: 'integrate',
        network: 'Supervisor',
        consensusVersion: 'SCSI',
        moniker: 'Specialist',
        ip: 'static',
        geoInfo: {
          city: 'Baby',
          country: 'Gorgeous Steel Fish',
          latitude: 53194.15,
          longitude: 96485.85
        }
      },
      {
        id: 'homogeneous',
        network: 'Refined Metal Chips',
        consensusVersion: 'Money Market Account',
        moniker: 'connect',
        ip: 'Clothing',
        geoInfo: {
          city: 'drive',
          country: 'New Zealand Dollar',
          latitude: 67849.63,
          longitude: 52333.57
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
  code: 9,
  info: {
    id: 'hard drive',
    network: 'Handcrafted Rubber Shirt',
    moniker: 'primary',
    consensusVersion: 'Investment Account',
    synced: undefined,
    appHash: 'd79e786d85e68ca7e442a233119d6932dc6091fe',
    blockHash: Uint8Array [
      254
    ],
    blockHeight: 44123,
    blockTime: '2019-04-09T06:47:53.799Z',
    address: '4af5f2aad6f690f69a6a146e36d465baa13102be',
    votingPower: 87836,
    totalTxs: 78780,
    version: 'Buckinghamshire',
    dataVersion: 'bandwidth',
    forgeAppsVersion: {
      'Money Market Account': 'Tanzanian Shilling'
    },
    supportedTxs: [
      'Computers',
      'Berkshire'
    ],
    ip: 'Diverse',
    geoInfo: {
      city: 'Fresh',
      country: 'Executive',
      latitude: 14187.45,
      longitude: 25881.6
    },
    p2pAddress: 'leverage'
  }
}
});
```

### getStakeState

```js
const stream = client.getStakeState({
  address: '4214c5130c5c84d571302df8b7f27e880d60fa78',
  keys: [
    'Heard Island and McDonald Islands',
    'Investment Account'
  ],
  height: 13600
});

// output
{
  code: 0,
  state: {
    address: '589286570c9b1aec29e1f7ed58eca7162ba47ec5',
    from: 'bcacbaa6d844279c9b90653714eacd7c45be6274',
    to: 'f9ff7860c2b297626ae0e676b300ded44c88b9d2',
    balance: '82218',
    message: 'Granite',
    context: {
      genesisTx: 'connect',
      renaissanceTx: 'Summit',
      genesisTime: '2019-04-09T06:47:53.799Z',
      renaissanceTime: '2019-04-09T06:47:53.799Z'
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
    cursor: 'attitude',
    size: 14720,
    order: [
      {
        field: 'Hills',
        type: 'International'
      },
      {
        field: 'Intelligent',
        type: 'even-keeled'
      }
    ]
  },
  addressFilter: {
    sender: 'Research',
    receiver: 'Soft',
    direction: 2
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 24,
  page: {
    cursor: 'Monitored',
    next: undefined,
    total: 38882
  },
  stakes: [
    {
      address: '84c975534c2d2a9c76ee63b82a440fb73454ce31',
      balance: '45917',
      sender: 'silver',
      receiver: 'Buckinghamshire',
      genesisTime: 'Savings Account',
      renaissanceTime: 'intermediate',
      message: 'backing up',
      type: 39842
    },
    {
      address: '33cf3ef450fb3055a9d050998cf90b6ce2ec5f24',
      balance: '32934',
      sender: 'challenge',
      receiver: 'RSS',
      genesisTime: 'compress',
      renaissanceTime: 'mobile',
      message: 'Glens',
      type: 40763
    }
  ]
}
});
```

### getTopAccounts

```js
const result = await client.getTopAccounts({
  paging: {
    cursor: 'Plastic',
    size: 82413,
    order: [
      {
        field: 'multi-byte',
        type: 'Investment Account'
      },
      {
        field: 'yellow',
        type: 'Spurs'
      }
    ]
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 33,
  page: {
    cursor: 'Gloves',
    next: undefined,
    total: 81520
  },
  accounts: [
    {
      address: 'f0b9af3704668efc57f7e5c0a5695dc3400aa3d6',
      balance: '34679',
      numAssets: 75151,
      numTxs: 71687,
      nonce: 89602,
      genesisTime: 'Hong Kong Dollar',
      renaissanceTime: 'Sleek Granite Bike',
      moniker: 'Berkshire',
      migratedFrom: 'Antarctica (the territory South of 60 deg S)',
      migratedTo: 'microchip',
      totalReceivedStakes: '84029',
      totalStakes: '9175',
      totalUnstakes: '99923',
      recentNumTxs: [
        78928,
        39559
      ]
    },
    {
      address: '048955a6ca18c834dfb40b9dbe330ecd0bfecaa2',
      balance: '15100',
      numAssets: 85180,
      numTxs: 58517,
      nonce: 48792,
      genesisTime: 'Shirt',
      renaissanceTime: 'functionalities',
      moniker: 'cross-platform',
      migratedFrom: 'PCI',
      migratedTo: 'Dynamic',
      totalReceivedStakes: '45334',
      totalStakes: '86666',
      totalUnstakes: '49138',
      recentNumTxs: [
        87393,
        22411
      ]
    }
  ]
}
});
```

### getTx

```js
const stream = client.getTx({
  hash: 'f6ea248c1c8901de5b8f2c8993438f354e9ecb78'
});

// output
{
  code: 42,
  info: {
    tx: {
      from: 'd86ca547e592a737c4715d9bbe0e92b04877ed0f',
      nonce: 71288,
      chainId: 'Avon',
      pk: Uint8Array [
        144
      ],
      signature: Uint8Array [
        17
      ],
      signatures: [
        {
          signer: 'virtual',
          pk: Uint8Array [
            21
          ],
          signature: Uint8Array [
            23
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        {
          signer: 'AI',
          pk: Uint8Array [
            159
          ],
          signature: Uint8Array [
            163
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
    height: 31339,
    index: 75830,
    hash: '63cf4173af4d9cb6bc4c2c69ad1000474eb8a795',
    tags: [
      {
        key: Uint8Array [
          34
        ],
        value: Uint8Array [
          113
        ]
      },
      {
        key: Uint8Array [
          218
        ],
        value: Uint8Array [
          124
        ]
      }
    ],
    code: 10,
    time: '2019-04-09T06:47:53.801Z',
    createAsset: {
      asset: 'Rubber'
    },
    accountMigrate: {
      address: 'd79ae579824ac9aeca48311cb9ee086a9fb12a5d'
    }
  }
}
```

### getUnconfirmedTxs

```js
const result = await client.getUnconfirmedTxs({
  limit: 24095
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 17,
  unconfirmedTxs: {
    nTxs: 65911,
    txs: [
      {
        from: '6fd10edb7affb1d326491652f7482d27ff4608f6',
        nonce: 12144,
        chainId: 'Dale',
        pk: Uint8Array [
          102
        ],
        signature: Uint8Array [
          75
        ],
        signatures: [
          {
            signer: 'auxiliary',
            pk: Uint8Array [
              161
            ],
            signature: Uint8Array [
              97
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'mobile',
            pk: Uint8Array [
              46
            ],
            signature: Uint8Array [
              224
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
        from: 'e2b1b43ba0cd06973c2b9f54b041da488e98fe4c',
        nonce: 7659,
        chainId: 'B2B',
        pk: Uint8Array [
          244
        ],
        signature: Uint8Array [
          97
        ],
        signatures: [
          {
            signer: 'Business-focused',
            pk: Uint8Array [
              244
            ],
            signature: Uint8Array [
              175
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'Configuration',
            pk: Uint8Array [
              37
            ],
            signature: Uint8Array [
              96
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
  code: 24,
  validatorsInfo: {
    blockHeight: 52096,
    validators: [
      {
        address: 'ce94873485f03434f8f691d6c60ba5127ac16145',
        pubKey: {
          type: 'methodologies',
          data: Uint8Array [
            123
          ]
        },
        votingPower: 45993,
        proposerPriority: 'leverage',
        name: 'Ouguiya',
        geoInfo: {
          city: 'intranet',
          country: 'Ball',
          latitude: 724.41,
          longitude: 4637.41
        }
      },
      {
        address: '81f635ba309d7a29ca516d15b578b00ce29cf0af',
        pubKey: {
          type: 'Operations',
          data: Uint8Array [
            222
          ]
        },
        votingPower: 34964,
        proposerPriority: 'red',
        name: 'New Jersey',
        geoInfo: {
          city: 'Senior',
          country: 'Strategist',
          latitude: 58823.83,
          longitude: 38660.95
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
    cursor: 'maroon',
    size: 82422,
    order: [
      {
        field: 'synthesizing',
        type: 'transmitter'
      },
      {
        field: 'Technician',
        type: 'Credit Card Account'
      }
    ]
  },
  address: '8f5ebe332bde2810c585b9da399b6c714e2722b6'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 4,
  page: {
    cursor: 'evolve',
    next: undefined,
    total: 49342
  },
  transactions: [
    {
      consumeAsset: {
        asset: 'Personal Loan Account'
      }
    },
    {
      consumeAsset: {
        asset: 'Portugal'
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
    cursor: 'Bedfordshire',
    size: 69332,
    order: [
      {
        field: 'indigo',
        type: 'Automotive'
      },
      {
        field: 'Chips',
        type: 'alliance'
      }
    ]
  },
  ownerAddress: 'Investment Account'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 3,
  page: {
    cursor: '5th generation',
    next: undefined,
    total: 22820
  },
  account: {
    address: '2016a239aa3ec53de2b55ebc80705334fabd1edb',
    balance: '9398',
    numAssets: 33048,
    numTxs: 80152,
    nonce: 11014,
    genesisTime: 'upward-trending',
    renaissanceTime: 'matrix',
    moniker: 'strategize',
    migratedFrom: 'Handmade',
    migratedTo: 'Jewelery',
    totalReceivedStakes: '44532',
    totalStakes: '93854',
    totalUnstakes: '44943',
    recentNumTxs: [
      48284,
      5465
    ]
  },
  assets: [
    {
      address: '744eda8c5f448556b362e061f1b8332696fda476',
      owner: 'parallelism',
      genesisTime: 'Niue',
      renaissanceTime: 'Avon',
      moniker: 'Organized',
      readonly: undefined
    },
    {
      address: 'd90354ee9f655ee4ed54c049335a7094bff56796',
      owner: 'optical',
      genesisTime: 'Washington',
      renaissanceTime: 'Money Market Account',
      moniker: 'Books',
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
    cursor: 'compressing',
    size: 6442,
    order: [
      {
        field: 'Wooden',
        type: 'digital'
      },
      {
        field: 'synergistic',
        type: 'Jewelery'
      }
    ]
  },
  proposer: '08b7e6d8f3135cf43772e2b8f53b67350375d48f',
  timeFilter: {
    startDateTime: 'Bedfordshire',
    endDateTime: 'Spur'
  },
  heightFilter: {
    fromHeight: 54501,
    toHeight: 97484
  },
  numTxsFilter: {
    minNumTxs: 80193,
    maxNumTxs: 89336
  },
  numInvalidTxsFilter: {
    minNumInvalidTxs: 67422,
    maxNumInvalidTxs: 83823
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 17,
  page: {
    cursor: 'back up',
    next: undefined,
    total: 86149
  },
  blocks: [
    {
      height: 2181,
      time: 'Delaware',
      proposer: '0400de554e82e443a30c54e8f3c8e158d87249a8',
      numTxs: 27595,
      numInvalidTxs: 19489
    },
    {
      height: 40046,
      time: 'deposit',
      proposer: '114344e5730fd66a33a1aef6b1625dea736281ea',
      numTxs: 92270,
      numInvalidTxs: 26974
    }
  ]
}
});
```

### listTransactions

```js
const result = await client.listTransactions({
  paging: {
    cursor: 'Investment Account',
    size: 78420,
    order: [
      {
        field: 'Tools',
        type: 'Direct'
      },
      {
        field: 'Computer',
        type: 'grey'
      }
    ]
  },
  timeFilter: {
    startDateTime: 'web services',
    endDateTime: 'sky blue'
  },
  addressFilter: {
    sender: 'Wooden',
    receiver: 'one-to-one',
    direction: 0
  },
  typeFilter: {
    types: [
      'Manager',
      'Oval'
    ]
  },
  validityFilter: {
    validity: 1
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 8,
  page: {
    cursor: 'Intelligent Steel Hat',
    next: undefined,
    total: 24
  },
  transactions: [
    {
      consumeAsset: {
        asset: 'West Virginia'
      }
    },
    {
      consumeAsset: {
        asset: 'bus'
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
  address: '9ac33d296758384c872ca04c8d2d2221ca42c429'
}
```

### loadFile

```js
const stream = client.loadFile({
  hash: '30d662bcea3ee46c6e6729950c6255a47abcef62'
});

// output
{
  code: 35,
  chunk: Uint8Array [
    149
  ]
}
```

### loadWallet

```js
const result = await client.loadWallet({
  address: '940c5d7abebded11a19a07ec4933185d97f7393e',
  passphrase: 'Money Market Account'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 10,
  token: 'Avon',
  wallet: {
    type: {
      pk: 0,
      hash: 0,
      address: 1,
      role: 6
    },
    sk: Uint8Array [
      116
    ],
    pk: Uint8Array [
      143
    ],
    address: '641406d6db6cd37d8b236363242e9cbbd1a079a5'
  }
}
});
```

### multisig

```js
const result = await client.multisig({
  tx: {
    from: 'ee79ca2f448dfd80eec29b748f0e255077269e4b',
    nonce: 83416,
    chainId: 'Nepalese Rupee',
    pk: Uint8Array [
      240
    ],
    signature: Uint8Array [
      226
    ],
    signatures: [
      {
        signer: 'cross-platform',
        pk: Uint8Array [
          253
        ],
        signature: Uint8Array [
          22
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'application',
        pk: Uint8Array [
          228
        ],
        signature: Uint8Array [
          252
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
      pk: 0,
      hash: 0,
      address: 0,
      role: 5
    },
    sk: Uint8Array [
      44
    ],
    pk: Uint8Array [
      158
    ],
    address: '10fe0fb3ca7ae03fb587cc732ba459e2f422c184'
  },
  token: 'Rustic'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 35,
  tx: {
    from: 'd02d064578167ee23959dbd4f07f1399fef58e30',
    nonce: 48265,
    chainId: 'sensor',
    pk: Uint8Array [
      204
    ],
    signature: Uint8Array [
      199
    ],
    signatures: [
      {
        signer: 'index',
        pk: Uint8Array [
          52
        ],
        signature: Uint8Array [
          33
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'Rustic Rubber Salad',
        pk: Uint8Array [
          173
        ],
        signature: Uint8Array [
          227
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
  hash: 'f50f0869b4f3e5f415a79d2907cce5f2536a952b'
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
      from: '6c3645f549aa56127354f70169a12474807c2482',
      nonce: 81489,
      chainId: 'Associate',
      pk: Uint8Array [
        13
      ],
      signature: Uint8Array [
        117
      ],
      signatures: [
        {
          signer: 'bus',
          pk: Uint8Array [
            168
          ],
          signature: Uint8Array [
            102
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        {
          signer: 'dot-com',
          pk: Uint8Array [
            182
          ],
          signature: Uint8Array [
            241
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
        balance: '48003',
        nonce: 99772,
        numTxs: 69159,
        address: '6a437de662c676e16c29f3d18bcd17e080bb5165',
        pk: Uint8Array [
          57
        ],
        type: {
          pk: 0,
          hash: 0,
          address: 1,
          role: 0
        },
        moniker: 'Virginia',
        context: {
          genesisTx: 'Graphic Interface',
          renaissanceTx: 'benchmark',
          genesisTime: '2019-04-09T06:47:53.806Z',
          renaissanceTime: '2019-04-09T06:47:53.806Z'
        },
        issuer: 'Tuna',
        migratedTo: [
          'index',
          'Cotton'
        ],
        migratedFrom: [
          'invoice',
          'open-source'
        ],
        numAssets: 79587,
        stake: {
          totalStakes: '43321',
          totalUnstakes: '25678',
          totalReceivedStakes: '85219',
          recentStakes: {
            items: [
              Uint8Array [
                146
              ],
              Uint8Array [
                84
              ]
            ],
            typeUrl: 'success',
            maxItems: 69180,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                160
              ],
              Uint8Array [
                238
              ]
            ],
            typeUrl: 'Orchestrator',
            maxItems: 28768,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              67
            ],
            Uint8Array [
              107
            ]
          ],
          typeUrl: 'firewall',
          maxItems: 90054,
          circular: undefined,
          fifo: undefined
        },
        poke: {
          dailyLimit: '67316',
          leftover: '97592',
          amount: '56873'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        balance: '83398',
        nonce: 79022,
        numTxs: 50055,
        address: 'dde3e57842e3a110c79534a634155c89a68a693e',
        pk: Uint8Array [
          28
        ],
        type: {
          pk: 0,
          hash: 1,
          address: 0,
          role: 5
        },
        moniker: 'Books',
        context: {
          genesisTx: 'Dong',
          renaissanceTx: 'bus',
          genesisTime: '2019-04-09T06:47:53.806Z',
          renaissanceTime: '2019-04-09T06:47:53.806Z'
        },
        issuer: 'proactive',
        migratedTo: [
          'Bypass',
          'payment'
        ],
        migratedFrom: [
          'port',
          'Assistant'
        ],
        numAssets: 19258,
        stake: {
          totalStakes: '42320',
          totalUnstakes: '63826',
          totalReceivedStakes: '77379',
          recentStakes: {
            items: [
              Uint8Array [
                96
              ],
              Uint8Array [
                211
              ]
            ],
            typeUrl: 'Corporate',
            maxItems: 68396,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                221
              ],
              Uint8Array [
                93
              ]
            ],
            typeUrl: 'feed',
            maxItems: 55728,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              20
            ],
            Uint8Array [
              161
            ]
          ],
          typeUrl: 'Barbados Dollar',
          maxItems: 56842,
          circular: undefined,
          fifo: undefined
        },
        poke: {
          dailyLimit: '70016',
          leftover: '27982',
          amount: '83966'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    assets: [
      {
        address: '74dd74fc1acacd1547c9db25064e37cb712ba8cd',
        owner: 'Generic',
        moniker: 'Indiana',
        readonly: undefined,
        transferrable: undefined,
        ttl: 81331,
        consumedTime: '2019-04-09T06:47:53.807Z',
        issuer: 'SSL',
        stake: {
          totalStakes: '68586',
          totalUnstakes: '96035',
          totalReceivedStakes: '66872',
          recentStakes: {
            items: [
              Uint8Array [
                231
              ],
              Uint8Array [
                159
              ]
            ],
            typeUrl: 'turn-key',
            maxItems: 67169,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                195
              ],
              Uint8Array [
                224
              ]
            ],
            typeUrl: 'Utah',
            maxItems: 60604,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'South Dakota',
          renaissanceTx: 'evolve',
          genesisTime: '2019-04-09T06:47:53.807Z',
          renaissanceTime: '2019-04-09T06:47:53.807Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: '9bf520fce4f7dc1dd3a33e85ad9487b073daf56d',
        owner: 'Brazilian Real',
        moniker: 'Steel',
        readonly: undefined,
        transferrable: undefined,
        ttl: 92122,
        consumedTime: '2019-04-09T06:47:53.807Z',
        issuer: 'Cambridgeshire',
        stake: {
          totalStakes: '16155',
          totalUnstakes: '74280',
          totalReceivedStakes: '98913',
          recentStakes: {
            items: [
              Uint8Array [
                11
              ],
              Uint8Array [
                72
              ]
            ],
            typeUrl: 'Niue',
            maxItems: 46914,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                165
              ],
              Uint8Array [
                186
              ]
            ],
            typeUrl: 'Global',
            maxItems: 72258,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Small Cotton Table',
          renaissanceTx: 'Wooden',
          genesisTime: '2019-04-09T06:47:53.807Z',
          renaissanceTime: '2019-04-09T06:47:53.807Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    stakes: [
      {
        address: '2be7e9041bf993dbaf0887cf055fb73cbd12c033',
        from: '6ccca7c25449f27b97fe78905bd91c408b34222f',
        to: 'ff85ee01558c533abf8c841d67ba82f16ff1a2b9',
        balance: '86742',
        message: 'Garden',
        context: {
          genesisTx: 'Strategist',
          renaissanceTx: 'array',
          genesisTime: '2019-04-09T06:47:53.807Z',
          renaissanceTime: '2019-04-09T06:47:53.807Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: '61fc767d95fd469dcf4d75e671e710ba8821e3f3',
        from: 'feec4eaf825250885396efa62b453e71ef8c696e',
        to: 'cd5e82aab72a57212137e3a39e13af6bb075d729',
        balance: '34126',
        message: 'Group',
        context: {
          genesisTx: 'District',
          renaissanceTx: 'XML',
          genesisTime: '2019-04-09T06:47:53.807Z',
          renaissanceTime: '2019-04-09T06:47:53.807Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    context: {
      txHash: '17120892aaf3d94d0ad6cfae61bfe7b21b4f5282',
      blockHeight: 46332,
      blockTime: '2019-04-09T06:47:53.807Z',
      totalTxs: 74534,
      txStatistics: {
        numAccountMigrateTxs: 63953,
        numCreateAssetTxs: 9441,
        numConsensusUpgradeTxs: 31954,
        numDeclareTxs: 13371,
        numDeclareFileTxs: 1722,
        numExchangeTxs: 47588,
        numStakeTxs: 80343,
        numSysUpgradeTxs: 63972,
        numTransferTxs: 89111,
        numUpdateAssetTxs: 10347,
        numConsumeAssetTxs: 36714,
        numPokeTxs: 47045
      },
      txIndex: 95262,
      lastBlockTime: '2019-04-09T06:47:53.807Z'
    },
    appState: {
      address: '795d8cdc2f7b415e138dd971823f731086c77a45',
      consensus: {
        maxBytes: 5855,
        maxGas: 91520,
        maxValidators: 66513,
        maxCandidates: 47799,
        pubKeyTypes: [
          'bypass',
          'Frozen'
        ],
        validators: [
          {
            address: '380d5e470053b37a0ffe521c0b8b888e003ff5ec',
            power: 16267
          },
          {
            address: 'ea51cd30c44a6d40c7677c3a941041576f869f9d',
            power: 96534
          }
        ],
        validatorChanged: undefined,
        paramChanged: undefined
      },
      tasks: {
        '56554': {
          item: [
            {
              type: 0,
              dataHash: '5th generation',
              actions: [
                undefined,
                undefined
              ]
            },
            {
              type: 1,
              dataHash: 'foreground',
              actions: [
                undefined,
                undefined
              ]
            }
          ]
        }
      },
      stakeSummary: {
        '74516': {
          totalStakes: '29011',
          totalUnstakes: '75221',
          context: {
            genesisTx: 'Practical Rubber Chips',
            renaissanceTx: 'function',
            genesisTime: '2019-04-09T06:47:53.808Z',
            renaissanceTime: '2019-04-09T06:47:53.808Z'
          }
        }
      },
      version: 'deposit',
      dataVersion: 'Administrator',
      forgeAppHash: Uint8Array [
        80
      ],
      token: {
        name: 'approach',
        symbol: 'Money Market Account',
        unit: 'hack',
        description: 'Web',
        icon: Uint8Array [
          176
        ],
        decimal: 24185,
        initialSupply: 22199,
        totalSupply: 85129,
        inflationRate: 92531
      },
      txConfig: {
        maxAssetSize: 97382,
        maxListSize: 19771,
        maxMultisig: 31008,
        minimumStake: 32871
      },
      stakeConfig: {
        timeoutGeneral: 12335,
        timeoutStakeForNode: 75192
      },
      pokeConfig: {
        address: '63d62d500e3d1288c471391d9ad3d8b117cfb7b4',
        dailyLimit: 14478,
        balance: 61840,
        amount: 24016
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
    code: 27
  }
}
```

### processOne

```js
const result = await client.processOne({
  verifyTx: {
    tx: {
      from: 'dde425f17dc02023043441c952b331a4961e903b',
      nonce: 95776,
      chainId: 'hub',
      pk: Uint8Array [
        17
      ],
      signature: Uint8Array [
        107
      ],
      signatures: [
        {
          signer: 'Organized',
          pk: Uint8Array [
            254
          ],
          signature: Uint8Array [
            46
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        {
          signer: 'hack',
          pk: Uint8Array [
            159
          ],
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
    states: [
      {
        balance: '46019',
        nonce: 2377,
        numTxs: 21013,
        address: 'bfb7215e5b56f5425418f5922112c3a23819c7a9',
        pk: Uint8Array [
          33
        ],
        type: {
          pk: 0,
          hash: 0,
          address: 0,
          role: 2
        },
        moniker: 'Administrator',
        context: {
          genesisTx: 'holistic',
          renaissanceTx: 'South Carolina',
          genesisTime: '2019-04-09T06:47:53.809Z',
          renaissanceTime: '2019-04-09T06:47:53.809Z'
        },
        issuer: 'Bike',
        migratedTo: [
          'Stream',
          '24/7'
        ],
        migratedFrom: [
          'Junctions',
          'Intelligent'
        ],
        numAssets: 51909,
        stake: {
          totalStakes: '70676',
          totalUnstakes: '51595',
          totalReceivedStakes: '81424',
          recentStakes: {
            items: [
              Uint8Array [
                144
              ],
              Uint8Array [
                171
              ]
            ],
            typeUrl: 'empower',
            maxItems: 53332,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                34
              ],
              Uint8Array [
                0
              ]
            ],
            typeUrl: 'Avon',
            maxItems: 21744,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              1
            ],
            Uint8Array [
              139
            ]
          ],
          typeUrl: 'CSS',
          maxItems: 76285,
          circular: undefined,
          fifo: undefined
        },
        poke: {
          dailyLimit: '39351',
          leftover: '80965',
          amount: '72450'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        balance: '54636',
        nonce: 13016,
        numTxs: 96670,
        address: 'e031a639d51c70ed2fd414a80dfca314d6aa5970',
        pk: Uint8Array [
          222
        ],
        type: {
          pk: 0,
          hash: 14,
          address: 0,
          role: 7
        },
        moniker: 'hack',
        context: {
          genesisTx: 'collaborative',
          renaissanceTx: 'protocol',
          genesisTime: '2019-04-09T06:47:53.809Z',
          renaissanceTime: '2019-04-09T06:47:53.809Z'
        },
        issuer: 'Tasty Soft Shoes',
        migratedTo: [
          'Avon',
          'Small'
        ],
        migratedFrom: [
          'AI',
          'Communications'
        ],
        numAssets: 17448,
        stake: {
          totalStakes: '32021',
          totalUnstakes: '12620',
          totalReceivedStakes: '45621',
          recentStakes: {
            items: [
              Uint8Array [
                220
              ],
              Uint8Array [
                251
              ]
            ],
            typeUrl: 'transmit',
            maxItems: 15990,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                4
              ],
              Uint8Array [
                22
              ]
            ],
            typeUrl: 'viral',
            maxItems: 66040,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              106
            ],
            Uint8Array [
              158
            ]
          ],
          typeUrl: 'Bedfordshire',
          maxItems: 21955,
          circular: undefined,
          fifo: undefined
        },
        poke: {
          dailyLimit: '82410',
          leftover: '24824',
          amount: '27879'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    assets: [
      {
        address: 'cedd1ed8c2839c19589fa18db81380e0d25a0e58',
        owner: 'Points',
        moniker: 'auxiliary',
        readonly: undefined,
        transferrable: undefined,
        ttl: 68334,
        consumedTime: '2019-04-09T06:47:53.810Z',
        issuer: '1080p',
        stake: {
          totalStakes: '61960',
          totalUnstakes: '51145',
          totalReceivedStakes: '72753',
          recentStakes: {
            items: [
              Uint8Array [
                157
              ],
              Uint8Array [
                53
              ]
            ],
            typeUrl: 'Planner',
            maxItems: 13156,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                2
              ],
              Uint8Array [
                214
              ]
            ],
            typeUrl: 'bandwidth',
            maxItems: 98403,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Implementation',
          renaissanceTx: 'circuit',
          genesisTime: '2019-04-09T06:47:53.810Z',
          renaissanceTime: '2019-04-09T06:47:53.810Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: 'a0dd5af9ecacbaeecd3db7208aa111ba872221ce',
        owner: 'bypass',
        moniker: 'Home Loan Account',
        readonly: undefined,
        transferrable: undefined,
        ttl: 84468,
        consumedTime: '2019-04-09T06:47:53.810Z',
        issuer: 'Metrics',
        stake: {
          totalStakes: '22379',
          totalUnstakes: '51847',
          totalReceivedStakes: '37153',
          recentStakes: {
            items: [
              Uint8Array [
                228
              ],
              Uint8Array [
                132
              ]
            ],
            typeUrl: 'value-added',
            maxItems: 87414,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                109
              ],
              Uint8Array [
                113
              ]
            ],
            typeUrl: 'reintermediate',
            maxItems: 51242,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'neural',
          renaissanceTx: 'Kansas',
          genesisTime: '2019-04-09T06:47:53.810Z',
          renaissanceTime: '2019-04-09T06:47:53.810Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    stakes: [
      {
        address: '15d4cc9b219961213eefd8a315c49ff78372cdca',
        from: '1e262458a589295a5e0fdcc55b004efd50f4012f',
        to: 'c85d419b366c62575c94b21c8855b57c6b5b01b4',
        balance: '19589',
        message: 'Kentucky',
        context: {
          genesisTx: 'ivory',
          renaissanceTx: 'Handmade',
          genesisTime: '2019-04-09T06:47:53.810Z',
          renaissanceTime: '2019-04-09T06:47:53.810Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: 'f644a2ca177dcd0380e7a001c0218fc7f5ff6a1d',
        from: '033a10c6ec2462b916d1b7294f0a5298416a2c67',
        to: '1bdc24a804b0a2567c3fa502b1df3df489957b3a',
        balance: '96231',
        message: 'redundant',
        context: {
          genesisTx: 'e-services',
          renaissanceTx: 'Incredible Metal Computer',
          genesisTime: '2019-04-09T06:47:53.810Z',
          renaissanceTime: '2019-04-09T06:47:53.810Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    context: {
      txHash: '8c838e9c664f13bf27581c26d9fa2c194538d609',
      blockHeight: 94686,
      blockTime: '2019-04-09T06:47:53.810Z',
      totalTxs: 52610,
      txStatistics: {
        numAccountMigrateTxs: 31561,
        numCreateAssetTxs: 11654,
        numConsensusUpgradeTxs: 12969,
        numDeclareTxs: 59180,
        numDeclareFileTxs: 45646,
        numExchangeTxs: 29876,
        numStakeTxs: 54450,
        numSysUpgradeTxs: 764,
        numTransferTxs: 15129,
        numUpdateAssetTxs: 57547,
        numConsumeAssetTxs: 39366,
        numPokeTxs: 95793
      },
      txIndex: 19234,
      lastBlockTime: '2019-04-09T06:47:53.810Z'
    },
    appState: {
      address: 'edef4a75f9e44c4c92608f9ad7b39d4201cf3671',
      consensus: {
        maxBytes: 40364,
        maxGas: 73763,
        maxValidators: 79716,
        maxCandidates: 77455,
        pubKeyTypes: [
          'Checking Account',
          'networks'
        ],
        validators: [
          {
            address: '26983a35f52b4e360cdaa3d3b49d08c483f01190',
            power: 20258
          },
          {
            address: '5d220887d431c0244a59cc84d8baf0b0920dc99d',
            power: 14675
          }
        ],
        validatorChanged: undefined,
        paramChanged: undefined
      },
      tasks: {
        '35543': {
          item: [
            {
              type: 0,
              dataHash: 'override',
              actions: [
                undefined,
                undefined
              ]
            },
            {
              type: 11,
              dataHash: 'models',
              actions: [
                undefined,
                undefined
              ]
            }
          ]
        }
      },
      stakeSummary: {
        '54891': {
          totalStakes: '14823',
          totalUnstakes: '16132',
          context: {
            genesisTx: 'Checking Account',
            renaissanceTx: 'Fresh',
            genesisTime: '2019-04-09T06:47:53.810Z',
            renaissanceTime: '2019-04-09T06:47:53.810Z'
          }
        }
      },
      version: 'orange',
      dataVersion: 'Bedfordshire',
      forgeAppHash: Uint8Array [
        165
      ],
      token: {
        name: 'Shirt',
        symbol: 'open-source',
        unit: 'Small Soft Cheese',
        description: 'Norfolk Island',
        icon: Uint8Array [
          116
        ],
        decimal: 92157,
        initialSupply: 61592,
        totalSupply: 86335,
        inflationRate: 18255
      },
      txConfig: {
        maxAssetSize: 20921,
        maxListSize: 51676,
        maxMultisig: 85815,
        minimumStake: 36151
      },
      stakeConfig: {
        timeoutGeneral: 22385,
        timeoutStakeForNode: 48057
      },
      pokeConfig: {
        address: 'fe661de0adbf8ae56ce4365701e4af5e35751d0e',
        dailyLimit: 44985,
        balance: 7163,
        amount: 16988
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
    code: 38
  }
}
});
```

### recoverWallet

```js
const result = await client.recoverWallet({
  data: Uint8Array [
    26
  ],
  type: {
    pk: 1,
    hash: 14,
    address: 0,
    role: 8
  },
  passphrase: 'value-added',
  moniker: 'digital'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 21,
  token: 'Terrace',
  wallet: {
    type: {
      pk: 0,
      hash: 13,
      address: 0,
      role: 8
    },
    sk: Uint8Array [
      77
    ],
    pk: Uint8Array [
      87
    ],
    address: 'd39e90cd39680c1855656687416050363eab6a97'
  }
}
});
```

### removeWallet

```js
const result = await client.removeWallet({
  address: '99d80901cd68eb3399dbd1c569aadbdd2034866e'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 504
}
});
```

### search

```js
const result = await client.search({
  key: 'invoice',
  value: 'Compatible'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 37,
  txs: [
    {
      tx: {
        from: '33b348a32fd14c1b1ca6846e47c18b344edd5a8e',
        nonce: 53816,
        chainId: 'navigating',
        pk: Uint8Array [
          119
        ],
        signature: Uint8Array [
          73
        ],
        signatures: [
          {
            signer: 'Reverse-engineered',
            pk: Uint8Array [
              36
            ],
            signature: Uint8Array [
              64
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'Legacy',
            pk: Uint8Array [
              106
            ],
            signature: Uint8Array [
              181
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
      height: 61500,
      index: 89688,
      hash: 'b8438a1cbf7351b0d5aac63204dfccd3d3ecda4b',
      tags: [
        {
          key: Uint8Array [
            102
          ],
          value: Uint8Array [
            51
          ]
        },
        {
          key: Uint8Array [
            151
          ],
          value: Uint8Array [
            223
          ]
        }
      ],
      code: 38,
      time: '2019-04-09T06:47:53.812Z',
      createAsset: {
        asset: 'Solomon Islands Dollar'
      },
      accountMigrate: {
        address: '351eeea4db7e3987f32b86889df2c841e0765086'
      }
    },
    {
      tx: {
        from: 'fd7a400e7294453c1d911a694355b0e17bc5fedb',
        nonce: 96982,
        chainId: 'Credit Card Account',
        pk: Uint8Array [
          178
        ],
        signature: Uint8Array [
          130
        ],
        signatures: [
          {
            signer: 'e-tailers',
            pk: Uint8Array [
              112
            ],
            signature: Uint8Array [
              8
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'aggregate',
            pk: Uint8Array [
              71
            ],
            signature: Uint8Array [
              214
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
      height: 37580,
      index: 3444,
      hash: 'b3fbf484fe6c505ae1e56422a8e263b7f3b80a36',
      tags: [
        {
          key: Uint8Array [
            55
          ],
          value: Uint8Array [
            18
          ]
        },
        {
          key: Uint8Array [
            196
          ],
          value: Uint8Array [
            250
          ]
        }
      ],
      code: 6,
      time: '2019-04-09T06:47:53.812Z',
      createAsset: {
        asset: 'invoice'
      },
      accountMigrate: {
        address: '4178817b8fd66c67fef74763742d80163cd4e21c'
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
    from: 'e0ceb6db7562f4bbe229a91ccddb1f74174f157a',
    nonce: 54022,
    chainId: 'Global',
    pk: Uint8Array [
      58
    ],
    signature: Uint8Array [
      68
    ],
    signatures: [
      {
        signer: 'Cambridgeshire',
        pk: Uint8Array [
          221
        ],
        signature: Uint8Array [
          155
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'violet',
        pk: Uint8Array [
          128
        ],
        signature: Uint8Array [
          39
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
      hash: 13,
      address: 0,
      role: 0
    },
    sk: Uint8Array [
      133
    ],
    pk: Uint8Array [
      216
    ],
    address: 'c02dd51da507d5b8623f9a0c0a42ddeddc3523ae'
  },
  token: 'Money Market Account',
  commit: undefined
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 3,
  hash: 'b940abc7abc4484e2650bf3d5911bba82fc3bbce'
}
});
```

### signData

```js
const result = await client.signData({
  data: Uint8Array [
    243
  ],
  wallet: {
    type: {
      pk: 1,
      hash: 7,
      address: 1,
      role: 8
    },
    sk: Uint8Array [
      35
    ],
    pk: Uint8Array [
      108
    ],
    address: '7d723ae603f05a61744e7135f1bbd179835affd3'
  },
  token: 'Connecticut'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 10,
  signature: Uint8Array [
    37
  ]
}
});
```

### storeFile

```js
const result = await client.storeFile({
  chunk: Uint8Array [
    241
  ]
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 31,
  hash: '5a3798fbf8c49320a011593a1674aa43799b1355'
}
});
```

### subscribe

```js
const stream = client.subscribe({
  type: 25,
  filter: 'Chips'
});

// output
{
  topic: 'Legacy'
}
```

### unsubscribe

```js
const result = await client.unsubscribe({
  topic: 'users'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 11
}
});
```


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |
