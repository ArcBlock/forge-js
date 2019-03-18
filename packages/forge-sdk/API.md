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
  from: '9a705ade1e29a259b50e08a2081e02a3b4f1c888',
  nonce: 65589,
  wallet: {
    type: {
      pk: 0,
      hash: 0,
      address: 1,
      role: 1
    },
    sk: Uint8Array [
      39
    ],
    pk: Uint8Array [
      120
    ],
    address: '3c33bf6e29c746a97044e8de40c8cea3bdf1af06'
  },
  token: 'Awesome Steel Chicken'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 0,
  tx: {
    from: 'b2f8d2c700fcd84b5e43dda4ec7e0260b70a2266',
    nonce: 1874,
    signature: Uint8Array [
      181
    ],
    chainId: 'white',
    signatures: [
      {
        signer: 'Washington',
        signature: Uint8Array [
          136
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'Direct',
        signature: Uint8Array [
          82
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
  passphrase: 'Unbranded',
  type: {
    pk: 1,
    hash: 14,
    address: 1,
    role: 3
  },
  moniker: 'Gold'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 41,
  token: 'Direct',
  wallet: {
    type: {
      pk: 0,
      hash: 14,
      address: 0,
      role: 6
    },
    sk: Uint8Array [
      50
    ],
    pk: Uint8Array [
      75
    ],
    address: '400f5fd89f37fcaaee2d994c43e985d21d3784ed'
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
  code: 40,
  wallet: {
    type: {
      pk: 1,
      hash: 6,
      address: 1,
      role: 2
    },
    sk: Uint8Array [
      215
    ],
    pk: Uint8Array [
      218
    ],
    address: 'be02974c8c9ace4945e2540c3ab961e10e68078d'
  }
}
});
```

### getAccountState

```js
const stream = client.getAccountState({
  address: '56f0aebeb51ea5c285350036bf6e26151b2d84a1',
  keys: [
    'Fiji',
    'Bacon'
  ],
  height: 40187
});

// output
{
  code: 27,
  state: {
    balance: '43469',
    nonce: 8248,
    numTxs: 40902,
    address: '5f3d40fc5f2475ddf4eb172b3bc95cef8c04c3b4',
    pk: Uint8Array [
      6
    ],
    type: {
      pk: 0,
      hash: 0,
      address: 0,
      role: 5
    },
    moniker: 'Kids',
    context: {
      genesisTx: 'FTP',
      renaissanceTx: 'target',
      genesisTime: '2019-03-18T01:32:03.591Z',
      renaissanceTime: '2019-03-18T01:32:03.591Z'
    },
    issuer: 'Won',
    migratedTo: [
      'Liberia',
      'Analyst'
    ],
    migratedFrom: [
      'non-volatile',
      'Frozen'
    ],
    numAssets: 13594,
    stake: {
      totalStakes: '96832',
      totalUnstakes: '94878',
      totalReceivedStakes: '69252',
      recentStakes: {
        items: [
          Uint8Array [
            162
          ],
          Uint8Array [
            206
          ]
        ],
        typeUrl: 'Factors',
        maxItems: 85380,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [
            165
          ],
          Uint8Array [
            241
          ]
        ],
        typeUrl: 'black',
        maxItems: 60134,
        circular: undefined,
        fifo: undefined
      }
    },
    pinnedFiles: {
      items: [
        Uint8Array [
          166
        ],
        Uint8Array [
          160
        ]
      ],
      typeUrl: 'methodologies',
      maxItems: 28064,
      circular: undefined,
      fifo: undefined
    },
    poke: {
      dailyLimit: '51415',
      leftover: '90386',
      amount: '4559'
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
  senderAddress: 'Executive',
  itx: {
    moniker: 'Avon',
    data: {
      type: 'fg:x:random_data',
      value: 'ABCD 1234'
    },
    readonly: undefined,
    transferrable: undefined,
    ttl: 7882,
    parent: 'array'
  },
  walletType: {
    pk: 1,
    hash: 1,
    address: 0,
    role: 2
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 504,
  assetAddress: 'bypass'
}
});
```

### getAssetState

```js
const stream = client.getAssetState({
  address: '92ca824becf86187743d6a579f7787271afaad59',
  keys: [
    'array',
    'Orchestrator'
  ],
  height: 58439
});

// output
{
  code: 22,
  state: {
    address: 'd7368c990356408ae64daadda26385022cec42b8',
    owner: 'wireless',
    moniker: 'yellow',
    readonly: undefined,
    transferrable: undefined,
    ttl: 88951,
    consumedTime: '2019-03-18T01:32:03.592Z',
    issuer: 'impactful',
    stake: {
      totalStakes: '20385',
      totalUnstakes: '50338',
      totalReceivedStakes: '17847',
      recentStakes: {
        items: [
          Uint8Array [
            254
          ],
          Uint8Array [
            41
          ]
        ],
        typeUrl: 'Soap',
        maxItems: 94863,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [
            49
          ],
          Uint8Array [
            245
          ]
        ],
        typeUrl: 'Generic Rubber Ball',
        maxItems: 87945,
        circular: undefined,
        fifo: undefined
      }
    },
    context: {
      genesisTx: 'Trafficway',
      renaissanceTx: 'Proactive',
      genesisTime: '2019-03-18T01:32:03.592Z',
      renaissanceTime: '2019-03-18T01:32:03.592Z'
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
    cursor: 'Accountability',
    size: 16633,
    order: [
      {
        field: 'Re-engineered',
        type: 'Clothing'
      },
      {
        field: 'redundant',
        type: 'Unbranded Granite Towels'
      }
    ]
  },
  ownerAddress: 'Officer'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 10,
  page: {
    cursor: 'FTP',
    next: undefined,
    total: 2937
  },
  assets: [
    {
      address: '832421ebebd03a26a03a829600c21a66c6134587',
      owner: 'synthesize',
      genesisTime: 'Soft',
      renaissanceTime: 'turquoise',
      moniker: 'approach',
      readonly: undefined
    },
    {
      address: 'c43dde296fc52f82b87644e87e308fde5349a30b',
      owner: 'Bedfordshire',
      genesisTime: 'driver',
      renaissanceTime: 'Assistant',
      moniker: 'redundant',
      readonly: undefined
    }
  ]
}
});
```

### getBlock

```js
const stream = client.getBlock({
  height: 21403
});

// output
{
  code: 1,
  block: {
    height: 49442,
    numTxs: 79393,
    time: '2019-03-18T01:32:03.593Z',
    appHash: '85c93edcb3fa16cc1598da253c2737d47181d870',
    proposer: 'de4764ed641cafc0dcdb0db80c53175b4e1e034c',
    txs: [
      {
        tx: {
          from: '6233e7034bf8f89d65b738a06e5e19891ccf00f4',
          nonce: 60584,
          signature: Uint8Array [
            226
          ],
          chainId: 'Manager',
          signatures: [
            {
              signer: 'North Carolina',
              signature: Uint8Array [
                83
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'next generation',
              signature: Uint8Array [
                246
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
        height: 20532,
        index: 72032,
        hash: 'c6296af6dc4486f76348fbcc531772b49d226a37',
        tags: [
          {
            key: Uint8Array [
              182
            ],
            value: Uint8Array [
              45
            ]
          },
          {
            key: Uint8Array [
              157
            ],
            value: Uint8Array [
              18
            ]
          }
        ],
        code: 30,
        time: '2019-03-18T01:32:03.594Z',
        createAsset: {
          asset: 'Awesome'
        },
        accountMigrate: {
          address: 'e69ec94e388709722d56a0efa51905347f50b63c'
        }
      },
      {
        tx: {
          from: 'ec9bdf7e31a7f945bba2aca9097a22ef6070ff79',
          nonce: 12170,
          signature: Uint8Array [
            143
          ],
          chainId: 'withdrawal',
          signatures: [
            {
              signer: 'interactive',
              signature: Uint8Array [
                119
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'Cotton',
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
        height: 67197,
        index: 73643,
        hash: 'cc61ab1feb067ab112242ac0ef5ed27a282515c8',
        tags: [
          {
            key: Uint8Array [
              180
            ],
            value: Uint8Array [
              148
            ]
          },
          {
            key: Uint8Array [
              220
            ],
            value: Uint8Array [
              170
            ]
          }
        ],
        code: 504,
        time: '2019-03-18T01:32:03.594Z',
        createAsset: {
          asset: 'Clothing'
        },
        accountMigrate: {
          address: 'c69ddb4bd62d46e6097d3428740855eb300e96b7'
        }
      }
    ],
    totalTxs: 23217,
    invalidTxs: [
      {
        tx: {
          from: '0244163e7e0e3e0bb3e3edaa4477aa056ce32df1',
          nonce: 34700,
          signature: Uint8Array [
            54
          ],
          chainId: 'web-readiness',
          signatures: [
            {
              signer: 'local',
              signature: Uint8Array [
                243
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'Automotive',
              signature: Uint8Array [
                201
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
        height: 94440,
        index: 16260,
        hash: '262132d6fd9c8e5b170250d3d09ebfaaacecb2ad',
        tags: [
          {
            key: Uint8Array [
              170
            ],
            value: Uint8Array [
              16
            ]
          },
          {
            key: Uint8Array [
              36
            ],
            value: Uint8Array [
              35
            ]
          }
        ],
        code: 500,
        time: '2019-03-18T01:32:03.595Z',
        createAsset: {
          asset: 'transmit'
        },
        accountMigrate: {
          address: 'cde0ef8a00a9303df2769a7a12d6a8a3ab36098e'
        }
      },
      {
        tx: {
          from: '9b5c9dcf5105598ccba27ee8668626b07fc2156c',
          nonce: 92186,
          signature: Uint8Array [
            49
          ],
          chainId: 'neutral',
          signatures: [
            {
              signer: 'navigating',
              signature: Uint8Array [
                152
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'Directives',
              signature: Uint8Array [
                50
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
        height: 68761,
        index: 43370,
        hash: '4708a480a524e79e91d3a534ee3ee43a838c7edc',
        tags: [
          {
            key: Uint8Array [
              197
            ],
            value: Uint8Array [
              208
            ]
          },
          {
            key: Uint8Array [
              146
            ],
            value: Uint8Array [
              209
            ]
          }
        ],
        code: 16,
        time: '2019-03-18T01:32:03.595Z',
        createAsset: {
          asset: 'deposit'
        },
        accountMigrate: {
          address: '437e6e2efa439c238e17b9f84483874157adda39'
        }
      }
    ],
    txsHashes: [
      'Assimilated',
      'Shoes'
    ],
    invalidTxsHashes: [
      'olive',
      'redundant'
    ],
    consensusHash: Uint8Array [
      79
    ],
    dataHash: Uint8Array [
      64
    ],
    evidenceHash: Uint8Array [
      117
    ],
    lastCommitHash: Uint8Array [
      73
    ],
    lastResultsHash: Uint8Array [
      155
    ],
    nextValidatorsHash: Uint8Array [
      97
    ],
    validatorsHash: Uint8Array [
      3
    ],
    version: {
      Block: 2989,
      App: 34107
    },
    lastBlockId: {
      hash: 'dbdece0d72a258ac942ae96e7a9c7cdab969b5c6',
      partsHeader: undefined
    }
  }
}
```

### getBlocks

```js
const result = await client.getBlocks({
  paging: {
    cursor: 'Plain',
    size: 32454,
    order: [
      {
        field: 'ubiquitous',
        type: 'Legacy'
      },
      {
        field: 'Organic',
        type: 'invoice'
      }
    ]
  },
  minHeight: 15439,
  maxHeight: 94294,
  emptyExcluded: undefined
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 20,
  page: {
    cursor: 'synergy',
    next: undefined,
    total: 69591
  },
  blocks: [
    {
      height: 76637,
      numTxs: 98748,
      time: '2019-03-18T01:32:03.597Z',
      appHash: '6ef0d646afba70e84defcc2ed1c8a12a04d8b3ed',
      proposer: '9ebda4e8df25c016d4cba36f216cf2224082e93c',
      txs: [
        {
          tx: {
            from: '963f85733385cf7717d53ab221078af2ac18a160',
            nonce: 71918,
            signature: Uint8Array [
              75
            ],
            chainId: 'Ethiopia',
            signatures: [
              {
                signer: 'override',
                signature: Uint8Array [
                  15
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Lempira',
                signature: Uint8Array [
                  7
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
          height: 81390,
          index: 40992,
          hash: 'c73ddf3b5b8bab3330085ebd2d2b32b18800c1d6',
          tags: [
            {
              key: Uint8Array [
                185
              ],
              value: Uint8Array [
                164
              ]
            },
            {
              key: Uint8Array [
                156
              ],
              value: Uint8Array [
                80
              ]
            }
          ],
          code: 504,
          time: '2019-03-18T01:32:03.597Z',
          createAsset: {
            asset: 'Terrace'
          },
          accountMigrate: {
            address: '8a7cd9059d724a39c55b2ee178fe2c94782ae418'
          }
        },
        {
          tx: {
            from: 'ab0cdf5b59b7f7e4573e1b414739745b598f0589',
            nonce: 29015,
            signature: Uint8Array [
              230
            ],
            chainId: 'bluetooth',
            signatures: [
              {
                signer: 'Toys',
                signature: Uint8Array [
                  97
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'transform',
                signature: Uint8Array [
                  191
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
          height: 60757,
          index: 4496,
          hash: '6bace0cf4a42253101de87b8f99764502a5c14f5',
          tags: [
            {
              key: Uint8Array [
                171
              ],
              value: Uint8Array [
                241
              ]
            },
            {
              key: Uint8Array [
                34
              ],
              value: Uint8Array [
                108
              ]
            }
          ],
          code: 27,
          time: '2019-03-18T01:32:03.597Z',
          createAsset: {
            asset: 'Games'
          },
          accountMigrate: {
            address: 'e0c697ec77a8ca86b9acacf9abcb3cdf38a51ea3'
          }
        }
      ],
      totalTxs: 49519,
      invalidTxs: [
        {
          tx: {
            from: '12a804725dfc2ff92d6b3382283699e452f59c57',
            nonce: 80571,
            signature: Uint8Array [
              239
            ],
            chainId: 'alliance',
            signatures: [
              {
                signer: 'exuding',
                signature: Uint8Array [
                  121
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Cotton',
                signature: Uint8Array [
                  132
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
          height: 15045,
          index: 36660,
          hash: '1924ff40d6c923592fb92792d7b926cf97650379',
          tags: [
            {
              key: Uint8Array [
                40
              ],
              value: Uint8Array [
                36
              ]
            },
            {
              key: Uint8Array [
                149
              ],
              value: Uint8Array [
                23
              ]
            }
          ],
          code: 10,
          time: '2019-03-18T01:32:03.598Z',
          createAsset: {
            asset: 'tan'
          },
          accountMigrate: {
            address: '20a8a2a25e7fec750dd523e637bc7c8a6a7b007e'
          }
        },
        {
          tx: {
            from: 'ffad04a5f636a15426a6a11e27d871b48c0133ab',
            nonce: 50247,
            signature: Uint8Array [
              250
            ],
            chainId: 'transmitting',
            signatures: [
              {
                signer: 'transitional',
                signature: Uint8Array [
                  101
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'payment',
                signature: Uint8Array [
                  84
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
          height: 42343,
          index: 91080,
          hash: 'b7f8d88facdc74c7b6a3510ceea347d54eca3ae8',
          tags: [
            {
              key: Uint8Array [
                189
              ],
              value: Uint8Array [
                164
              ]
            },
            {
              key: Uint8Array [
                68
              ],
              value: Uint8Array [
                148
              ]
            }
          ],
          code: 1,
          time: '2019-03-18T01:32:03.598Z',
          createAsset: {
            asset: 'database'
          },
          accountMigrate: {
            address: '6728d5fde92393d3621f3f7ab4c31f16749ac54c'
          }
        }
      ],
      txsHashes: [
        'Sports',
        'Future'
      ],
      invalidTxsHashes: [
        'Reverse-engineered',
        'parallelism'
      ],
      consensusHash: Uint8Array [
        1
      ],
      dataHash: Uint8Array [
        187
      ],
      evidenceHash: Uint8Array [
        173
      ],
      lastCommitHash: Uint8Array [
        26
      ],
      lastResultsHash: Uint8Array [
        224
      ],
      nextValidatorsHash: Uint8Array [
        155
      ],
      validatorsHash: Uint8Array [
        145
      ],
      version: {
        Block: 86608,
        App: 89455
      },
      lastBlockId: {
        hash: 'd8a37f1d3e5993a718ab62d1d77d0aff25d5a330',
        partsHeader: undefined
      }
    },
    {
      height: 16327,
      numTxs: 41994,
      time: '2019-03-18T01:32:03.598Z',
      appHash: '547b7732d331a39fd886448697ae027f70ed274a',
      proposer: '4d9e4323ced0c21c15749be2a3e10e7965871a7b',
      txs: [
        {
          tx: {
            from: '01e8d7a51778370297c769ea351c221d648c3046',
            nonce: 78932,
            signature: Uint8Array [
              123
            ],
            chainId: 'District',
            signatures: [
              {
                signer: 'North Carolina',
                signature: Uint8Array [
                  251
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Congo',
                signature: Uint8Array [
                  130
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
          height: 72020,
          index: 48831,
          hash: 'c80a55b13ff078ffaa0137b7138a6e15d4a21591',
          tags: [
            {
              key: Uint8Array [
                249
              ],
              value: Uint8Array [
                160
              ]
            },
            {
              key: Uint8Array [
                209
              ],
              value: Uint8Array [
                120
              ]
            }
          ],
          code: 8,
          time: '2019-03-18T01:32:03.598Z',
          createAsset: {
            asset: 'Rand Namibia Dollar'
          },
          accountMigrate: {
            address: '5e4abdb850cdfbf6ebe247e4e439ed5ffb7fb660'
          }
        },
        {
          tx: {
            from: '1b5bd0d8f890842bb13c5b391ef82ab8c6324f52',
            nonce: 78461,
            signature: Uint8Array [
              167
            ],
            chainId: 'Licensed',
            signatures: [
              {
                signer: 'monetize',
                signature: Uint8Array [
                  21
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Fresh',
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
          height: 17287,
          index: 9310,
          hash: 'dd6e1cce4fe9ded654073c35e35ebdb18dff24ce',
          tags: [
            {
              key: Uint8Array [
                49
              ],
              value: Uint8Array [
                174
              ]
            },
            {
              key: Uint8Array [
                139
              ],
              value: Uint8Array [
                22
              ]
            }
          ],
          code: 500,
          time: '2019-03-18T01:32:03.599Z',
          createAsset: {
            asset: 'Unbranded Plastic Shoes'
          },
          accountMigrate: {
            address: '3676660d5ab441a817c0edce5ffad648c5aabd2c'
          }
        }
      ],
      totalTxs: 40097,
      invalidTxs: [
        {
          tx: {
            from: '825584cbe0671786943bb992309322f60dad5384',
            nonce: 42011,
            signature: Uint8Array [
              85
            ],
            chainId: 'Lebanese Pound',
            signatures: [
              {
                signer: 'Tuna',
                signature: Uint8Array [
                  46
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Concrete',
                signature: Uint8Array [
                  244
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
          height: 95731,
          index: 16273,
          hash: '69a71c415808ab01af70cebf6f3555beb2f4ce48',
          tags: [
            {
              key: Uint8Array [
                174
              ],
              value: Uint8Array [
                54
              ]
            },
            {
              key: Uint8Array [
                248
              ],
              value: Uint8Array [
                181
              ]
            }
          ],
          code: 26,
          time: '2019-03-18T01:32:03.599Z',
          createAsset: {
            asset: 'Networked'
          },
          accountMigrate: {
            address: 'd2911e9c5c8e2e4125fbadb3c9e8f1da4470cb2a'
          }
        },
        {
          tx: {
            from: '5fe2b2d30709ab9e25dc8a6e78860a42402a5b60',
            nonce: 81626,
            signature: Uint8Array [
              15
            ],
            chainId: 'driver',
            signatures: [
              {
                signer: 'sky blue',
                signature: Uint8Array [
                  206
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'seamless',
                signature: Uint8Array [
                  128
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
          height: 24643,
          index: 75760,
          hash: '8c811b458e8ceb508a71550aa907f11ce6be81a8',
          tags: [
            {
              key: Uint8Array [
                224
              ],
              value: Uint8Array [
                70
              ]
            },
            {
              key: Uint8Array [
                189
              ],
              value: Uint8Array [
                230
              ]
            }
          ],
          code: 33,
          time: '2019-03-18T01:32:03.600Z',
          createAsset: {
            asset: 'Operations'
          },
          accountMigrate: {
            address: '8406e684c5683c1d6cee7739f80700e2e90d086a'
          }
        }
      ],
      txsHashes: [
        'Advanced',
        'bandwidth'
      ],
      invalidTxsHashes: [
        'HDD',
        'Practical Granite Chair'
      ],
      consensusHash: Uint8Array [
        86
      ],
      dataHash: Uint8Array [
        26
      ],
      evidenceHash: Uint8Array [
        206
      ],
      lastCommitHash: Uint8Array [
        129
      ],
      lastResultsHash: Uint8Array [
        206
      ],
      nextValidatorsHash: Uint8Array [
        245
      ],
      validatorsHash: Uint8Array [
        24
      ],
      version: {
        Block: 83316,
        App: 59445
      },
      lastBlockId: {
        hash: '4763593d2448249463cf95d53421f18462b3d349',
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
  code: 17,
  info: {
    id: 'transmitting',
    network: 'tan',
    moniker: 'PNG',
    consensusVersion: 'Licensed',
    synced: undefined,
    appHash: '2c8b9b71f602591b6f487b5f603449dbdcfdc835',
    blockHash: Uint8Array [
      173
    ],
    blockHeight: 94658,
    blockTime: '2019-03-18T01:32:03.601Z',
    address: 'a486838a26fe5a259d7234c05997538638f0f480',
    votingPower: 88158,
    totalTxs: 30060,
    version: 'fuchsia',
    dataVersion: 'Yen',
    forgeAppsVersion: {
      'Equatorial Guinea': 'Lead'
    },
    supportedTxs: [
      'Fantastic',
      'Awesome Rubber Chips'
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
  code: 27,
  config: 'connect'
}
});
```

### getForgeState

```js
const result = await client.getForgeState({
  keys: [
    'Principal',
    'Dynamic'
  ],
  height: 45164
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 6,
  state: {
    address: '466e915421366d1b9cf2b01ac4a730de368d1fcf',
    consensus: {
      maxBytes: 37817,
      maxGas: 89098,
      maxValidators: 8808,
      maxCandidates: 43670,
      pubKeyTypes: [
        'revolutionize',
        'payment'
      ],
      validators: [
        {
          address: '8b48113ded11d9d672766b11110ffc49a8936447',
          power: 4718
        },
        {
          address: '175ae05c2a1a7b6eb906b410a9e6b5a28e6b8c38',
          power: 39688
        }
      ],
      validatorChanged: undefined,
      paramChanged: undefined
    },
    tasks: {
      '62923': {
        item: [
          {
            type: 1,
            dataHash: 'New Leu',
            actions: [
              undefined,
              undefined
            ]
          },
          {
            type: 2,
            dataHash: 'Corporate',
            actions: [
              undefined,
              undefined
            ]
          }
        ]
      }
    },
    stakeSummary: {
      '3434': {
        totalStakes: '43369',
        totalUnstakes: '47273',
        context: {
          genesisTx: 'Operative',
          renaissanceTx: 'Security',
          genesisTime: '2019-03-18T01:32:03.601Z',
          renaissanceTime: '2019-03-18T01:32:03.601Z'
        }
      }
    },
    version: 'Integration',
    dataVersion: 'task-force',
    forgeAppHash: Uint8Array [
      181
    ],
    token: {
      name: 'Investment Account',
      symbol: '24/365',
      unit: 'Granite',
      description: 'Tactics',
      icon: Uint8Array [
        121
      ],
      decimal: 90044,
      initialSupply: 14100,
      totalSupply: 97018,
      inflationRate: 18175
    },
    txConfig: {
      maxAssetSize: 63506,
      maxListSize: 61668,
      maxMultisig: 95432,
      minimumStake: 87275
    },
    stakeConfig: {
      timeoutGeneral: 28105,
      timeoutStakeForNode: 29816
    },
    pokeConfig: {
      address: '859c1d46460d5dd6a3faca7634696852fe23eb2a',
      dailyLimit: 86772,
      balance: 93098,
      amount: 91460
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
    startDate: 'Fresh',
    endDate: 'Investment Account'
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 6,
  forgeStatistics: {
    numBlocks: [
      9870,
      77253
    ],
    numTxs: [
      21371,
      37180
    ],
    numStakes: [
      '88853',
      '19001'
    ],
    numValidators: [
      23113,
      26565
    ],
    numAccountMigrateTxs: [
      51490,
      59844
    ],
    numCreateAssetTxs: [
      4796,
      58953
    ],
    numConsensusUpgradeTxs: [
      47479,
      59381
    ],
    numDeclareTxs: [
      19871,
      53817
    ],
    numDeclareFileTxs: [
      33515,
      43643
    ],
    numExchangeTxs: [
      26490,
      3666
    ],
    numStakeTxs: [
      53277,
      93906
    ],
    numSysUpgradeTxs: [
      25695,
      12259
    ],
    numTransferTxs: [
      62163,
      50894
    ],
    numUpdateAssetTxs: [
      1401,
      48711
    ],
    numConsumeAssetTxs: [
      46554,
      81651
    ],
    numPokeTxs: [
      3090,
      60433
    ],
    tps: [
      42939,
      13747
    ],
    maxTps: 63960,
    avgTps: 89575
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
  code: 42,
  netInfo: {
    listening: undefined,
    listeners: [
      'Alley',
      'haptic'
    ],
    nPeers: 61871,
    peers: [
      {
        id: 'Montana',
        network: 'transmitting',
        consensusVersion: 'well-modulated',
        moniker: 'B2B',
        ip: 'Rubber',
        geoInfo: {
          city: 'bypassing',
          country: 'Delaware',
          latitude: 71725.78,
          longitude: 96898.13
        }
      },
      {
        id: 'Chad',
        network: 'Nevada',
        consensusVersion: 'matrix',
        moniker: 'Licensed Metal Mouse',
        ip: 'connect',
        geoInfo: {
          city: 'client-server',
          country: 'fuchsia',
          latitude: 18792.79,
          longitude: 8171.74
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
  code: 0,
  info: {
    id: 'Intelligent Plastic Chips',
    network: 'Connecticut',
    moniker: 'Rustic Cotton Cheese',
    consensusVersion: 'synthesizing',
    synced: undefined,
    appHash: '13a0febd5dc111c15bd9bd1422ee8b7a87d10490',
    blockHash: Uint8Array [
      159
    ],
    blockHeight: 71511,
    blockTime: '2019-03-18T01:32:03.603Z',
    address: '6ec90e10118534dd9710086d6752fb00b21ae2f7',
    votingPower: 49469,
    totalTxs: 29980,
    version: 'Cotton',
    dataVersion: 'Regional',
    forgeAppsVersion: {
      deposit: 'Hills'
    },
    supportedTxs: [
      'green',
      'data-warehouse'
    ],
    ip: 'Divide',
    geoInfo: {
      city: 'Future-proofed',
      country: 'Kroon',
      latitude: 30634.12,
      longitude: 62962.5
    },
    p2pAddress: 'New Hampshire'
  }
}
});
```

### getStakeState

```js
const stream = client.getStakeState({
  address: 'f1e81ce8d77639043f5c8fe96cecb06ddbb88081',
  keys: [
    'Fantastic Steel Chicken',
    'connecting'
  ],
  height: 76509
});

// output
{
  code: 17,
  state: {
    address: 'de7f59ec5b9595fc17bb8ec522cfa4f76d4139ce',
    from: '31da642e935e85481cfb8df48f4fb2d69e8cc60f',
    to: 'dbda8b7720ec47413ee355da685f18dbd4efabb7',
    balance: '62955',
    message: 'Communications',
    context: {
      genesisTx: 'recontextualize',
      renaissanceTx: 'Ball',
      genesisTime: '2019-03-18T01:32:03.604Z',
      renaissanceTime: '2019-03-18T01:32:03.604Z'
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
    cursor: 'Supervisor',
    size: 91699,
    order: [
      {
        field: 'SQL',
        type: 'Networked'
      },
      {
        field: 'Principal',
        type: 'CSS'
      }
    ]
  },
  addressFilter: {
    sender: 'Virtual',
    receiver: 'CFA Franc BEAC',
    direction: 2
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 5,
  page: {
    cursor: 'ivory',
    next: undefined,
    total: 15277
  },
  stakes: [
    {
      address: '38e1d155a3f3ee89b2064fc532d1bb4be76aa63d',
      balance: '4780',
      sender: 'United Arab Emirates',
      receiver: 'Awesome',
      genesisTime: 'Towels',
      renaissanceTime: 'Avon',
      message: 'upward-trending',
      type: 12966
    },
    {
      address: '775871a4d0e6f4f24676eeb7c7f6d1388b443444',
      balance: '99101',
      sender: 'Vermont',
      receiver: 'deliver',
      genesisTime: 'Toys',
      renaissanceTime: 'Senior',
      message: 'Future',
      type: 92426
    }
  ]
}
});
```

### getTopAccounts

```js
const result = await client.getTopAccounts({
  paging: {
    cursor: 'innovative',
    size: 61500,
    order: [
      {
        field: 'Research',
        type: 'Bermudian Dollar ' +
          '(customarily known as ' +
          'Bermuda Dollar)'
      },
      {
        field: 'backing up',
        type: 'payment'
      }
    ]
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 10,
  page: {
    cursor: 'Denar',
    next: undefined,
    total: 65669
  },
  accounts: [
    {
      address: '5d701c2f521c89a8cb4169547c5808acbc3f4713',
      balance: '66040',
      numAssets: 50017,
      numTxs: 14562,
      nonce: 23205,
      genesisTime: 'Prairie',
      renaissanceTime: 'deposit',
      moniker: 'moderator',
      migratedFrom: 'Point',
      migratedTo: 'data-warehouse',
      totalReceivedStakes: '19836',
      totalStakes: '60670',
      totalUnstakes: '75540',
      recentNumTxs: [
        76691,
        82477
      ]
    },
    {
      address: '6e86d7ebb3a1e6089cb36a729396e869ed690824',
      balance: '46840',
      numAssets: 18726,
      numTxs: 76392,
      nonce: 49326,
      genesisTime: 'compress',
      renaissanceTime: 'Intelligent Rubber Mouse',
      moniker: 'Assimilated',
      migratedFrom: 'Buckinghamshire',
      migratedTo: 'New Jersey',
      totalReceivedStakes: '24923',
      totalStakes: '28273',
      totalUnstakes: '44274',
      recentNumTxs: [
        81861,
        73034
      ]
    }
  ]
}
});
```

### getTx

```js
const stream = client.getTx({
  hash: '6ffd7e2578a1254bb751b4565d48adcbd2eb6003'
});

// output
{
  code: 22,
  info: {
    tx: {
      from: '974c9fceb3d76fb308f07cfe0150bbdef243dfc1',
      nonce: 52234,
      signature: Uint8Array [
        44
      ],
      chainId: 'capacity',
      signatures: [
        {
          signer: '5th generation',
          signature: Uint8Array [
            217
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        {
          signer: 'override',
          signature: Uint8Array [
            55
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
    height: 24997,
    index: 56279,
    hash: '9dfe87d223b304c7bf3b90e0e104015011a2ec49',
    tags: [
      {
        key: Uint8Array [
          185
        ],
        value: Uint8Array [
          57
        ]
      },
      {
        key: Uint8Array [
          31
        ],
        value: Uint8Array [
          31
        ]
      }
    ],
    code: 35,
    time: '2019-03-18T01:32:03.605Z',
    createAsset: {
      asset: 'Specialist'
    },
    accountMigrate: {
      address: '516256f95572710b099afe546c597b29fb48e331'
    }
  }
}
```

### getUnconfirmedTxs

```js
const result = await client.getUnconfirmedTxs({
  limit: 62584
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 11,
  unconfirmedTxs: {
    nTxs: 18207,
    txs: [
      {
        from: '910147a719e6bb9af6668d8957aacf47720988d3',
        nonce: 78856,
        signature: Uint8Array [
          155
        ],
        chainId: 'capacitor',
        signatures: [
          {
            signer: 'silver',
            signature: Uint8Array [
              160
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'hard drive',
            signature: Uint8Array [
              149
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
        from: 'b29dba77ee15177c93ad4003d1938f8184e27d7e',
        nonce: 62067,
        signature: Uint8Array [
          5
        ],
        chainId: 'copying',
        signatures: [
          {
            signer: 'Functionality',
            signature: Uint8Array [
              13
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'backing up',
            signature: Uint8Array [
              170
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
  code: 10,
  validatorsInfo: {
    blockHeight: 82959,
    validators: [
      {
        address: '230881988a12f14bb820e3d67cfea272e39bbc80',
        pubKey: {
          type: 'turquoise',
          data: Uint8Array [
            254
          ]
        },
        votingPower: 64288,
        proposerPriority: 'Island',
        name: 'Small Wooden Soap'
      },
      {
        address: 'e7608abf03aeb439f2f38a62f759a9036b592b66',
        pubKey: {
          type: 'calculate',
          data: Uint8Array [
            106
          ]
        },
        votingPower: 97178,
        proposerPriority: 'Uganda',
        name: 'Corporate'
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
    cursor: 'capacitor',
    size: 60438,
    order: [
      {
        field: 'initiatives',
        type: 'next generation'
      },
      {
        field: 'gold',
        type: 'cyan'
      }
    ]
  },
  address: '23e1311b543de6d46b4752d5b30c3684c43a4164'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 16,
  page: {
    cursor: 'salmon',
    next: undefined,
    total: 92937
  },
  transactions: [
    {
      consumeAsset: {
        asset: 'Parkways'
      }
    },
    {
      consumeAsset: {
        asset: 'Beauty'
      }
    }
  ]
}
});
```

### listBlocks

```js
const result = await client.listBlocks({
  paging: {
    cursor: 'Tools',
    size: 37742,
    order: [
      {
        field: 'Games',
        type: 'Wisconsin'
      },
      {
        field: 'azure',
        type: 'calculate'
      }
    ]
  },
  proposer: 'f165e0cccca8964ef7570b6f9d684e4295df93d1',
  timeFilter: {
    startDateTime: 'explicit',
    endDateTime: 'virtual'
  },
  heightFilter: {
    fromHeight: 55097,
    toHeight: 41451
  },
  numTxsFilter: {
    minNumTxs: 5033,
    maxNumTxs: 23270
  },
  numInvalidTxsFilter: {
    minNumInvalidTxs: 38095,
    maxNumInvalidTxs: 9420
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 27,
  page: {
    cursor: 'utilisation',
    next: undefined,
    total: 69065
  },
  blocks: [
    {
      height: 27954,
      time: 'RSS',
      proposer: '53787e9759e9f04b3bb127380aac97ad51978c82',
      numTxs: 86751,
      numInvalidTxs: 39657
    },
    {
      height: 95142,
      time: 'morph',
      proposer: 'bf54a4c6a3ded7be207d3ed0633f7e6afeff5621',
      numTxs: 67898,
      numInvalidTxs: 90469
    }
  ]
}
});
```

### listTransactions

```js
const result = await client.listTransactions({
  paging: {
    cursor: 'Avon',
    size: 25956,
    order: [
      {
        field: 'utilisation',
        type: 'Technician'
      },
      {
        field: 'Lead',
        type: 'Croatian Kuna'
      }
    ]
  },
  timeFilter: {
    startDateTime: 'invoice',
    endDateTime: 'deposit'
  },
  addressFilter: {
    sender: 'International',
    receiver: 'AI',
    direction: 2
  },
  typeFilter: {
    types: [
      'Borders',
      'transmit'
    ]
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 8,
  page: {
    cursor: 'Forward',
    next: undefined,
    total: 74805
  },
  transactions: [
    {
      consumeAsset: {
        asset: 'Coves'
      }
    },
    {
      consumeAsset: {
        asset: 'Investor'
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
  code: 504,
  address: '16a9134beb9d10b860e024b178e9b1ce4ea14039'
}
```

### loadFile

```js
const stream = client.loadFile({
  hash: 'a022d7ab3fa192256cf7866aaaefcf82d3b75e63'
});

// output
{
  code: 500,
  chunk: Uint8Array [
    16
  ]
}
```

### loadWallet

```js
const result = await client.loadWallet({
  address: 'caecead2ffe02dcb87791c284bb341669e66ad84',
  passphrase: 'Tools'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 32,
  token: 'Overpass',
  wallet: {
    type: {
      pk: 0,
      hash: 6,
      address: 1,
      role: 4
    },
    sk: Uint8Array [
      62
    ],
    pk: Uint8Array [
      67
    ],
    address: 'b05f631895cbe646e03ecd971c2c84049fa53996'
  }
}
});
```

### multisig

```js
const result = await client.multisig({
  tx: {
    from: 'a58dfed676e3ae9b9c8accbed9354239a510c2c7',
    nonce: 9050,
    signature: Uint8Array [
      50
    ],
    chainId: 'connecting',
    signatures: [
      {
        signer: 'Tuna',
        signature: Uint8Array [
          117
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'hack',
        signature: Uint8Array [
          234
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
      address: 0,
      role: 1
    },
    sk: Uint8Array [
      215
    ],
    pk: Uint8Array [
      218
    ],
    address: '4550c7f02936144551eda8f3d4cd68983d5e2bca'
  },
  token: 'bricks-and-clicks'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 16,
  tx: {
    from: '5f4302dfc73dcf94572b1b08a7b0c1acf046e085',
    nonce: 5101,
    signature: Uint8Array [
      155
    ],
    chainId: 'client-driven',
    signatures: [
      {
        signer: 'navigating',
        signature: Uint8Array [
          91
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'bypassing',
        signature: Uint8Array [
          165
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
  hash: '0b14d2657362a0b231309ea9cd1632543b8db126'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 504
}
});
```

### process

```js
const stream = client.process({
  verifyTx: {
    tx: {
      from: 'c7f139138867207a98e53cab26817f669e8c33ac',
      nonce: 79469,
      signature: Uint8Array [
        66
      ],
      chainId: 'Gorgeous Cotton Soap',
      signatures: [
        {
          signer: 'Monitored',
          signature: Uint8Array [
            23
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        {
          signer: 'Small Steel Keyboard',
          signature: Uint8Array [
            112
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
        balance: '92829',
        nonce: 8508,
        numTxs: 54353,
        address: '65a4217e73148b200fa95fa37b3deeeeaf16c437',
        pk: Uint8Array [
          251
        ],
        type: {
          pk: 1,
          hash: 1,
          address: 1,
          role: 1
        },
        moniker: 'parsing',
        context: {
          genesisTx: 'withdrawal',
          renaissanceTx: 'Convertible Marks',
          genesisTime: '2019-03-18T01:32:03.609Z',
          renaissanceTime: '2019-03-18T01:32:03.609Z'
        },
        issuer: 'Executive',
        migratedTo: [
          'Vermont',
          'killer'
        ],
        migratedFrom: [
          'Senior',
          'experiences'
        ],
        numAssets: 38351,
        stake: {
          totalStakes: '42851',
          totalUnstakes: '37668',
          totalReceivedStakes: '21536',
          recentStakes: {
            items: [
              Uint8Array [
                38
              ],
              Uint8Array [
                143
              ]
            ],
            typeUrl: 'protocol',
            maxItems: 16224,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                94
              ],
              Uint8Array [
                252
              ]
            ],
            typeUrl: 'viral',
            maxItems: 96984,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              136
            ],
            Uint8Array [
              35
            ]
          ],
          typeUrl: 'Serbia',
          maxItems: 17529,
          circular: undefined,
          fifo: undefined
        },
        poke: {
          dailyLimit: '66096',
          leftover: '94427',
          amount: '43253'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        balance: '79208',
        nonce: 30616,
        numTxs: 16061,
        address: '58f7e750a535975beb233d5dac47b2abc946a9d1',
        pk: Uint8Array [
          59
        ],
        type: {
          pk: 0,
          hash: 2,
          address: 1,
          role: 5
        },
        moniker: 'Mouse',
        context: {
          genesisTx: 'Internal',
          renaissanceTx: 'incubate',
          genesisTime: '2019-03-18T01:32:03.609Z',
          renaissanceTime: '2019-03-18T01:32:03.609Z'
        },
        issuer: 'Mountain',
        migratedTo: [
          'Rustic Cotton Towels',
          'Home Loan Account'
        ],
        migratedFrom: [
          'Rubber',
          'Mobility'
        ],
        numAssets: 40451,
        stake: {
          totalStakes: '82852',
          totalUnstakes: '54672',
          totalReceivedStakes: '28655',
          recentStakes: {
            items: [
              Uint8Array [
                109
              ],
              Uint8Array [
                183
              ]
            ],
            typeUrl: 'Steel',
            maxItems: 29787,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                121
              ],
              Uint8Array [
                99
              ]
            ],
            typeUrl: 'monetize',
            maxItems: 46054,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              157
            ],
            Uint8Array [
              155
            ]
          ],
          typeUrl: 'Usability',
          maxItems: 93485,
          circular: undefined,
          fifo: undefined
        },
        poke: {
          dailyLimit: '27261',
          leftover: '55881',
          amount: '49945'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    assets: [
      {
        address: '38645adcbb83c9fe0d7ab70defb5805ab15efdc1',
        owner: 'IB',
        moniker: 'monitor',
        readonly: undefined,
        transferrable: undefined,
        ttl: 69667,
        consumedTime: '2019-03-18T01:32:03.610Z',
        issuer: 'monetize',
        stake: {
          totalStakes: '18664',
          totalUnstakes: '43580',
          totalReceivedStakes: '24437',
          recentStakes: {
            items: [
              Uint8Array [
                169
              ],
              Uint8Array [
                57
              ]
            ],
            typeUrl: 'maximized',
            maxItems: 24171,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                206
              ],
              Uint8Array [
                32
              ]
            ],
            typeUrl: 'lime',
            maxItems: 34296,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'application',
          renaissanceTx: 'markets',
          genesisTime: '2019-03-18T01:32:03.610Z',
          renaissanceTime: '2019-03-18T01:32:03.610Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: '8e5ea6030f741a14c95e6620e3ffda43def928d4',
        owner: 'Kip',
        moniker: 'Singapore Dollar',
        readonly: undefined,
        transferrable: undefined,
        ttl: 85693,
        consumedTime: '2019-03-18T01:32:03.610Z',
        issuer: 'Berkshire',
        stake: {
          totalStakes: '99732',
          totalUnstakes: '54463',
          totalReceivedStakes: '72663',
          recentStakes: {
            items: [
              Uint8Array [
                34
              ],
              Uint8Array [
                81
              ]
            ],
            typeUrl: 'turn-key',
            maxItems: 59375,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                39
              ],
              Uint8Array [
                85
              ]
            ],
            typeUrl: 'synergies',
            maxItems: 61053,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Concrete',
          renaissanceTx: 'redundant',
          genesisTime: '2019-03-18T01:32:03.610Z',
          renaissanceTime: '2019-03-18T01:32:03.610Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    stakes: [
      {
        address: 'a4745070a67496878e58a00a38929425842c57fc',
        from: '44c1fff07a366fd9e2d52e30309968c07e3767ce',
        to: 'd7e299945710e444a5784ffff468dd46dd7a3040',
        balance: '95240',
        message: 'GB',
        context: {
          genesisTx: 'encoding',
          renaissanceTx: 'back-end',
          genesisTime: '2019-03-18T01:32:03.610Z',
          renaissanceTime: '2019-03-18T01:32:03.610Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: 'b36679cd45d05ee808cbb8cb749581ad11918198',
        from: '42af67cabb0a847d621cdfb3afa4fff922001303',
        to: '713b4ce2bfeb4f30f6c8fbcf3b3f175ea8871d9a',
        balance: '45404',
        message: 'Clothing',
        context: {
          genesisTx: 'e-markets',
          renaissanceTx: 'ROI',
          genesisTime: '2019-03-18T01:32:03.611Z',
          renaissanceTime: '2019-03-18T01:32:03.611Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    context: {
      txHash: 'd0f358e6e480e0c2e7f93e455f4dddf7db4b9c80',
      blockHeight: 57900,
      blockTime: '2019-03-18T01:32:03.611Z',
      totalTxs: 54322,
      txStatistics: {
        numAccountMigrateTxs: 88853,
        numCreateAssetTxs: 67680,
        numConsensusUpgradeTxs: 72707,
        numDeclareTxs: 8845,
        numDeclareFileTxs: 26982,
        numExchangeTxs: 99316,
        numStakeTxs: 9836,
        numSysUpgradeTxs: 72454,
        numTransferTxs: 373,
        numUpdateAssetTxs: 90237,
        numConsumeAssetTxs: 94113,
        numPokeTxs: 91468
      },
      txIndex: 58,
      lastBlockTime: '2019-03-18T01:32:03.611Z'
    },
    appState: {
      address: '03b297f330bb72cd8921c652fda6d4f6036e7fd8',
      consensus: {
        maxBytes: 76133,
        maxGas: 78464,
        maxValidators: 54132,
        maxCandidates: 25145,
        pubKeyTypes: [
          'Plain',
          '1080p'
        ],
        validators: [
          {
            address: '80181dff9dcdbe2c57a6d6a9ab9e7bda3747738f',
            power: 49177
          },
          {
            address: '7071c0ed019c36df5c48b733b93f3cb6229a217a',
            power: 76640
          }
        ],
        validatorChanged: undefined,
        paramChanged: undefined
      },
      tasks: {
        '50180': {
          item: [
            {
              type: 12,
              dataHash: 'Total',
              actions: [
                undefined,
                undefined
              ]
            },
            {
              type: 2,
              dataHash: 'dot-com',
              actions: [
                undefined,
                undefined
              ]
            }
          ]
        }
      },
      stakeSummary: {
        '13525': {
          totalStakes: '89728',
          totalUnstakes: '96506',
          context: {
            genesisTx: 'withdrawal',
            renaissanceTx: 'compress',
            genesisTime: '2019-03-18T01:32:03.611Z',
            renaissanceTime: '2019-03-18T01:32:03.611Z'
          }
        }
      },
      version: 'Connecticut',
      dataVersion: 'index',
      forgeAppHash: Uint8Array [
        95
      ],
      token: {
        name: 'Gabon',
        symbol: 'standardization',
        unit: 'ROI',
        description: 'COM',
        icon: Uint8Array [
          98
        ],
        decimal: 63485,
        initialSupply: 27693,
        totalSupply: 66070,
        inflationRate: 70895
      },
      txConfig: {
        maxAssetSize: 56730,
        maxListSize: 63896,
        maxMultisig: 3790,
        minimumStake: 57113
      },
      stakeConfig: {
        timeoutGeneral: 38233,
        timeoutStakeForNode: 74276
      },
      pokeConfig: {
        address: '369c88992b86bb6c5fe5f28573ceadc739be01a0',
        dailyLimit: 44579,
        balance: 15975,
        amount: 84457
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
    code: 41
  }
}
```

### processOne

```js
const result = await client.processOne({
  verifyTx: {
    tx: {
      from: '104fd31409ae42231a51b57d9364f096a6ad6aef',
      nonce: 16059,
      signature: Uint8Array [
        3
      ],
      chainId: 'firewall',
      signatures: [
        {
          signer: 'reboot',
          signature: Uint8Array [
            95
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        {
          signer: 'unleash',
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
    states: [
      {
        balance: '46384',
        nonce: 93695,
        numTxs: 70878,
        address: '568267a9366f93d2a1b8f6dd57abc067ff4c801c',
        pk: Uint8Array [
          103
        ],
        type: {
          pk: 1,
          hash: 0,
          address: 0,
          role: 5
        },
        moniker: 'quantifying',
        context: {
          genesisTx: 'index',
          renaissanceTx: 'circuit',
          genesisTime: '2019-03-18T01:32:03.612Z',
          renaissanceTime: '2019-03-18T01:32:03.612Z'
        },
        issuer: 'Sri Lanka Rupee',
        migratedTo: [
          'Chips',
          'Program'
        ],
        migratedFrom: [
          'Savings Account',
          'grow'
        ],
        numAssets: 78757,
        stake: {
          totalStakes: '35755',
          totalUnstakes: '87370',
          totalReceivedStakes: '22507',
          recentStakes: {
            items: [
              Uint8Array [
                178
              ],
              Uint8Array [
                66
              ]
            ],
            typeUrl: 'Manager',
            maxItems: 37304,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                84
              ],
              Uint8Array [
                18
              ]
            ],
            typeUrl: 'Coordinator',
            maxItems: 20996,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              166
            ],
            Uint8Array [
              100
            ]
          ],
          typeUrl: 'Auto Loan Account',
          maxItems: 97268,
          circular: undefined,
          fifo: undefined
        },
        poke: {
          dailyLimit: '26701',
          leftover: '73194',
          amount: '4841'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        balance: '4121',
        nonce: 88705,
        numTxs: 32608,
        address: '1991dbc3c3cd0b466c431a9502ab51db35be23a4',
        pk: Uint8Array [
          196
        ],
        type: {
          pk: 1,
          hash: 14,
          address: 0,
          role: 7
        },
        moniker: 'feed',
        context: {
          genesisTx: 'compress',
          renaissanceTx: 'Fantastic',
          genesisTime: '2019-03-18T01:32:03.613Z',
          renaissanceTime: '2019-03-18T01:32:03.613Z'
        },
        issuer: 'transform',
        migratedTo: [
          'Trail',
          'Sleek Wooden Sausages'
        ],
        migratedFrom: [
          'Tuna',
          'application'
        ],
        numAssets: 48012,
        stake: {
          totalStakes: '97190',
          totalUnstakes: '47875',
          totalReceivedStakes: '9328',
          recentStakes: {
            items: [
              Uint8Array [
                222
              ],
              Uint8Array [
                111
              ]
            ],
            typeUrl: 'Money Market Account',
            maxItems: 1710,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                21
              ],
              Uint8Array [
                18
              ]
            ],
            typeUrl: 'Alabama',
            maxItems: 14083,
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
              230
            ]
          ],
          typeUrl: 'motivating',
          maxItems: 67727,
          circular: undefined,
          fifo: undefined
        },
        poke: {
          dailyLimit: '21642',
          leftover: '81839',
          amount: '16570'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    assets: [
      {
        address: 'b99a0aca6bca4e797cee4d0aaee6304805aa0139',
        owner: 'virtual',
        moniker: 'optical',
        readonly: undefined,
        transferrable: undefined,
        ttl: 47300,
        consumedTime: '2019-03-18T01:32:03.613Z',
        issuer: 'copy',
        stake: {
          totalStakes: '84528',
          totalUnstakes: '77604',
          totalReceivedStakes: '55469',
          recentStakes: {
            items: [
              Uint8Array [
                25
              ],
              Uint8Array [
                188
              ]
            ],
            typeUrl: 'Auto Loan Account',
            maxItems: 26490,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                31
              ],
              Uint8Array [
                103
              ]
            ],
            typeUrl: 'Analyst',
            maxItems: 42697,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Borders',
          renaissanceTx: 'Borders',
          genesisTime: '2019-03-18T01:32:03.614Z',
          renaissanceTime: '2019-03-18T01:32:03.614Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: '974ee66955d92a0502b4c79d579af651581805d3',
        owner: 'Quality-focused',
        moniker: 'XSS',
        readonly: undefined,
        transferrable: undefined,
        ttl: 38474,
        consumedTime: '2019-03-18T01:32:03.614Z',
        issuer: 'Hat',
        stake: {
          totalStakes: '30715',
          totalUnstakes: '21251',
          totalReceivedStakes: '61940',
          recentStakes: {
            items: [
              Uint8Array [
                46
              ],
              Uint8Array [
                180
              ]
            ],
            typeUrl: 'Shoes',
            maxItems: 22160,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                172
              ],
              Uint8Array [
                199
              ]
            ],
            typeUrl: 'Shirt',
            maxItems: 27185,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'payment',
          renaissanceTx: 'revolutionize',
          genesisTime: '2019-03-18T01:32:03.614Z',
          renaissanceTime: '2019-03-18T01:32:03.614Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    stakes: [
      {
        address: '6492ea76a255b896660f9159462e8bc0cb022b20',
        from: '164a6e2d807121811925c9f7b803693a303f349b',
        to: '1643c8fcaf43cd87831248578b34ffe4449b988a',
        balance: '99937',
        message: 'Licensed Soft Cheese',
        context: {
          genesisTx: 'wireless',
          renaissanceTx: 'Technician',
          genesisTime: '2019-03-18T01:32:03.614Z',
          renaissanceTime: '2019-03-18T01:32:03.614Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: '5663d57f1375e3f65adbdb6d5d8ed85ff7e88cc0',
        from: '834093f0e61b2864e316c81ce94c1e0eb156c8c3',
        to: 'fa31bcdacfa6609cca023ae64477e8409a32684a',
        balance: '94581',
        message: 'leading edge',
        context: {
          genesisTx: 'Oklahoma',
          renaissanceTx: 'quantify',
          genesisTime: '2019-03-18T01:32:03.614Z',
          renaissanceTime: '2019-03-18T01:32:03.614Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    context: {
      txHash: '4aa585ba1a92510db0cb4b6f72d0cde3ee759722',
      blockHeight: 64257,
      blockTime: '2019-03-18T01:32:03.614Z',
      totalTxs: 65089,
      txStatistics: {
        numAccountMigrateTxs: 27089,
        numCreateAssetTxs: 21981,
        numConsensusUpgradeTxs: 41256,
        numDeclareTxs: 28284,
        numDeclareFileTxs: 33610,
        numExchangeTxs: 41733,
        numStakeTxs: 41197,
        numSysUpgradeTxs: 13738,
        numTransferTxs: 32271,
        numUpdateAssetTxs: 42712,
        numConsumeAssetTxs: 29830,
        numPokeTxs: 78333
      },
      txIndex: 12052,
      lastBlockTime: '2019-03-18T01:32:03.614Z'
    },
    appState: {
      address: '6bcb766299ee8374dc0ce5f9fc3162d4dd36f069',
      consensus: {
        maxBytes: 15578,
        maxGas: 91256,
        maxValidators: 38750,
        maxCandidates: 4431,
        pubKeyTypes: [
          'Assistant',
          'installation'
        ],
        validators: [
          {
            address: 'bce57fd48c5e7c4ab0807c085957fb0d7d20272b',
            power: 62143
          },
          {
            address: '2847a59ca5c1837b0929d8edd8ef5e1882671a70',
            power: 21390
          }
        ],
        validatorChanged: undefined,
        paramChanged: undefined
      },
      tasks: {
        '35927': {
          item: [
            {
              type: 12,
              dataHash: 'tertiary',
              actions: [
                undefined,
                undefined
              ]
            },
            {
              type: 13,
              dataHash: 'Fantastic',
              actions: [
                undefined,
                undefined
              ]
            }
          ]
        }
      },
      stakeSummary: {
        '96410': {
          totalStakes: '5235',
          totalUnstakes: '90652',
          context: {
            genesisTx: 'Auto Loan Account',
            renaissanceTx: 'Manager',
            genesisTime: '2019-03-18T01:32:03.614Z',
            renaissanceTime: '2019-03-18T01:32:03.614Z'
          }
        }
      },
      version: 'Silver',
      dataVersion: 'Auto Loan Account',
      forgeAppHash: Uint8Array [
        155
      ],
      token: {
        name: 'silver',
        symbol: 'Handmade',
        unit: 'Phased',
        description: 'green',
        icon: Uint8Array [
          198
        ],
        decimal: 29526,
        initialSupply: 98526,
        totalSupply: 63765,
        inflationRate: 98201
      },
      txConfig: {
        maxAssetSize: 43207,
        maxListSize: 11261,
        maxMultisig: 19911,
        minimumStake: 34282
      },
      stakeConfig: {
        timeoutGeneral: 78132,
        timeoutStakeForNode: 30367
      },
      pokeConfig: {
        address: 'fed7f5e313da4295089a89641a7f637ac6d39662',
        dailyLimit: 51919,
        balance: 74805,
        amount: 57442
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
    code: 39
  }
}
});
```

### recoverWallet

```js
const result = await client.recoverWallet({
  data: Uint8Array [
    102
  ],
  type: {
    pk: 1,
    hash: 1,
    address: 0,
    role: 8
  },
  passphrase: 'Garden',
  moniker: 'Home Loan Account'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 39,
  token: 'Outdoors',
  wallet: {
    type: {
      pk: 0,
      hash: 0,
      address: 1,
      role: 4
    },
    sk: Uint8Array [
      28
    ],
    pk: Uint8Array [
      207
    ],
    address: 'e1ff39038be6fb00eaa4a7a4f2dbbc09f08c71c1'
  }
}
});
```

### removeWallet

```js
const result = await client.removeWallet({
  address: 'b5b8f2e7ef1cbf9fb6d90bef662dcae9e3377c3c'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 33
}
});
```

### search

```js
const result = await client.search({
  key: 'Ball',
  value: 'quantify'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 17,
  txs: [
    {
      tx: {
        from: '8e36de091332a126a0685db4c63e5e19015158d8',
        nonce: 78046,
        signature: Uint8Array [
          62
        ],
        chainId: 'Assistant',
        signatures: [
          {
            signer: 'Iceland Krona',
            signature: Uint8Array [
              85
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'Granite',
            signature: Uint8Array [
              91
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
      height: 82027,
      index: 22009,
      hash: 'a753f00a9c9da06ce37eade10827e107d6a9f15c',
      tags: [
        {
          key: Uint8Array [
            34
          ],
          value: Uint8Array [
            128
          ]
        },
        {
          key: Uint8Array [
            254
          ],
          value: Uint8Array [
            25
          ]
        }
      ],
      code: 33,
      time: '2019-03-18T01:32:03.616Z',
      createAsset: {
        asset: 'Gorgeous Metal Chair'
      },
      accountMigrate: {
        address: 'f0e49a75d4838e716784ecef54fd3bc4f588d2f6'
      }
    },
    {
      tx: {
        from: '1197811680ff50f418c00957e90b6e41bd204519',
        nonce: 50797,
        signature: Uint8Array [
          112
        ],
        chainId: 'SMTP',
        signatures: [
          {
            signer: 'Senegal',
            signature: Uint8Array [
              152
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'Concrete',
            signature: Uint8Array [
              120
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
      height: 62933,
      index: 95708,
      hash: '0cea5bd447b09a744019268a7931e609dccc9166',
      tags: [
        {
          key: Uint8Array [
            12
          ],
          value: Uint8Array [
            62
          ]
        },
        {
          key: Uint8Array [
            196
          ],
          value: Uint8Array [
            177
          ]
        }
      ],
      code: 33,
      time: '2019-03-18T01:32:03.616Z',
      createAsset: {
        asset: 'Arkansas'
      },
      accountMigrate: {
        address: 'f9e5207a4891d4e020390e5918138498279575ce'
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
    from: 'c106690dbccd9800c10e9028f259df7ec0a2fdfd',
    nonce: 57551,
    signature: Uint8Array [
      139
    ],
    chainId: 'Licensed',
    signatures: [
      {
        signer: 'Analyst',
        signature: Uint8Array [
          198
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'back-end',
        signature: Uint8Array [
          145
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
      hash: 7,
      address: 1,
      role: 8
    },
    sk: Uint8Array [
      183
    ],
    pk: Uint8Array [
      12
    ],
    address: '511f4ee4c10bb88303914e30965504c2f015bbc6'
  },
  token: 'Jordanian Dinar',
  commit: undefined
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 20,
  hash: '2a9c099f4b0c96e9004646dd7c19c835c37854b3'
}
});
```

### signData

```js
const result = await client.signData({
  data: Uint8Array [
    55
  ],
  wallet: {
    type: {
      pk: 0,
      hash: 1,
      address: 1,
      role: 8
    },
    sk: Uint8Array [
      149
    ],
    pk: Uint8Array [
      226
    ],
    address: '80190002332e0ef426b3b324518b2d725eadcd3f'
  },
  token: 'Generic'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 7,
  signature: Uint8Array [
    48
  ]
}
});
```

### storeFile

```js
const result = await client.storeFile({
  chunk: Uint8Array [
    144
  ]
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 7,
  hash: '604e3b3314a5220c3873c53970fa076c266cb409'
}
});
```

### subscribe

```js
const stream = client.subscribe({
  type: 25,
  filter: 'Investment Account'
});

// output
{
  topic: 'Strategist'
}
```

### unsubscribe

```js
const result = await client.unsubscribe({
  topic: 'Investment Account'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 30
}
});
```


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |
