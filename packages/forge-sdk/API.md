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
  CONSUME_ASSET: 25,
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
  from: '9e532c06a04ed086e4480c9b10e3549111703308',
  nonce: 91858,
  wallet: {
    type: {
      pk: 1,
      hash: 6,
      address: 0,
      role: 5
    },
    sk: Uint8Array [
      207
    ],
    pk: Uint8Array [
      220
    ],
    address: '1f79635a2554487ae32dc27a8fa2c739e654adf2'
  },
  token: 'Illinois'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 24,
  tx: {
    from: '50a698e88b514966a189c74553e4c56e4cfb9b6d',
    nonce: 10043,
    signature: Uint8Array [
      85
    ],
    chainId: 'hacking',
    signatures: [
      {
        signer: 'Awesome Steel Cheese',
        signature: Uint8Array [
          148
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'Buckinghamshire',
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
  }
}
});
```

### createWallet

```js
const result = await client.createWallet({
  passphrase: 'Pants',
  type: {
    pk: 1,
    hash: 6,
    address: 0,
    role: 7
  },
  moniker: 'national'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 31,
  token: 'Salad',
  wallet: {
    type: {
      pk: 0,
      hash: 13,
      address: 0,
      role: 7
    },
    sk: Uint8Array [
      233
    ],
    pk: Uint8Array [
      50
    ],
    address: '99b1ff6dc97cfddcec6f6539450d40e2bcc26a2c'
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
      hash: 1,
      address: 1,
      role: 6
    },
    sk: Uint8Array [
      16
    ],
    pk: Uint8Array [
      149
    ],
    address: 'b036f53d2e914ae6855069e7f16d74536bf1a031'
  }
}
});
```

### getAccountState

```js
const stream = client.getAccountState({
  address: 'ec092402bea9335359db680ebbbe05a3a02d48b6',
  keys: [
    'compress',
    'evolve'
  ],
  height: 8723
});

// output
{
  code: 35,
  state: {
    balance: '64496',
    nonce: 15423,
    numTxs: 15828,
    address: '9d86b25b6ee27956432677c5ad57ffa2c2911534',
    pk: Uint8Array [
      216
    ],
    type: {
      pk: 1,
      hash: 6,
      address: 0,
      role: 5
    },
    moniker: 'invoice',
    context: {
      genesisTx: 'copying',
      renaissanceTx: 'PCI',
      genesisTime: '2019-03-05T02:54:13.058Z',
      renaissanceTime: '2019-03-05T02:54:13.058Z'
    },
    issuer: 'parse',
    migratedTo: [
      'Nakfa',
      'Wisconsin'
    ],
    migratedFrom: [
      'architecture',
      'supply-chains'
    ],
    numAssets: 52186,
    stake: {
      totalStakes: '44608',
      totalUnstakes: '52561',
      totalReceivedStakes: '83289',
      recentStakes: {
        items: [
          Uint8Array [
            62
          ],
          Uint8Array [
            95
          ]
        ],
        typeUrl: 'Avon',
        maxItems: 57108,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [
            2
          ],
          Uint8Array [
            96
          ]
        ],
        typeUrl: 'copying',
        maxItems: 15722,
        circular: undefined,
        fifo: undefined
      }
    },
    pinnedFiles: {
      items: [
        Uint8Array [
          27
        ],
        Uint8Array [
          151
        ]
      ],
      typeUrl: 'PNG',
      maxItems: 18374,
      circular: undefined,
      fifo: undefined
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
  senderAddress: 'Bolivar Fuerte',
  itx: {
    moniker: 'Rubber',
    data: {
      type: 'fg:x:random_data',
      value: 'ABCD 1234'
    },
    readonly: undefined,
    transferrable: undefined,
    ttl: 47032,
    parent: 'Handmade'
  },
  walletType: {
    pk: 0,
    hash: 0,
    address: 0,
    role: 6
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 41,
  assetAddress: '24/7'
}
});
```

### getAssetState

```js
const stream = client.getAssetState({
  address: '7c3f936d4f3529f3a4f77797325d7022edddbcac',
  keys: [
    'Mouse',
    'Sleek Rubber Pants'
  ],
  height: 87332
});

// output
{
  code: 6,
  state: {
    address: 'db778672bfcf3da9bb2c8a7050679f5096c9fa07',
    owner: 'Handcrafted Concrete Mouse',
    moniker: 'bypass',
    readonly: undefined,
    transferrable: undefined,
    ttl: 44350,
    consumedTime: '2019-03-05T02:54:13.059Z',
    issuer: 'azure',
    stake: {
      totalStakes: '64056',
      totalUnstakes: '44279',
      totalReceivedStakes: '33153',
      recentStakes: {
        items: [
          Uint8Array [
            67
          ],
          Uint8Array [
            80
          ]
        ],
        typeUrl: 'syndicate',
        maxItems: 39188,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [
            19
          ],
          Uint8Array [
            190
          ]
        ],
        typeUrl: 'model',
        maxItems: 50410,
        circular: undefined,
        fifo: undefined
      }
    },
    context: {
      genesisTx: 'system',
      renaissanceTx: 'Open-source',
      genesisTime: '2019-03-05T02:54:13.060Z',
      renaissanceTime: '2019-03-05T02:54:13.060Z'
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
    cursor: 'Panama',
    size: 65440,
    order: [
      {
        field: 'Intelligent Rubber Towels',
        type: 'monetize'
      },
      {
        field: 'secondary',
        type: 'Beauty'
      }
    ]
  },
  ownerAddress: 'Mouse'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 2,
  page: {
    cursor: 'Bedfordshire',
    next: undefined,
    total: 64974
  },
  assets: [
    {
      address: '5497d9d253389f4ba572b50082ee88110a5211aa',
      owner: 'Illinois',
      genesisTime: 'Guyana Dollar',
      renaissanceTime: 'customer loyalty',
      moniker: 'National',
      readonly: undefined
    },
    {
      address: '814b735f4c51950d158da57312992152263d03e1',
      owner: 'red',
      genesisTime: 'primary',
      renaissanceTime: 'Harbor',
      moniker: 'partnerships',
      readonly: undefined
    }
  ]
}
});
```

### getBlock

```js
const stream = client.getBlock({
  height: 3576
});

// output
{
  code: 22,
  block: {
    height: 60831,
    numTxs: 58130,
    time: '2019-03-05T02:54:13.060Z',
    appHash: 'ef5430a85c7d216cd9ec7c965e036b637a79402c',
    proposer: '0974a3a97881dfbf8ff58fa5c31301b1742480b6',
    txs: [
      {
        tx: {
          from: 'e09c801d5fff82dc43b34d264078187e39f7fe4e',
          nonce: 96775,
          signature: Uint8Array [
            229
          ],
          chainId: 'Vermont',
          signatures: [
            {
              signer: 'neural',
              signature: Uint8Array [
                185
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'Corporate',
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
        height: 26556,
        index: 90593,
        hash: 'ce87aa16d3266ab2dcc8457da30aa2e97478d3c4',
        tags: [
          {
            key: Uint8Array [
              39
            ],
            value: Uint8Array [
              136
            ]
          },
          {
            key: Uint8Array [
              199
            ],
            value: Uint8Array [
              22
            ]
          }
        ],
        code: 27
      },
      {
        tx: {
          from: 'cab739f32c4b4b43f2fdf528fd71096eb014c15a',
          nonce: 54851,
          signature: Uint8Array [
            82
          ],
          chainId: 'interactive',
          signatures: [
            {
              signer: 'Keyboard',
              signature: Uint8Array [
                22
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'Persistent',
              signature: Uint8Array [
                233
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
        height: 29468,
        index: 61803,
        hash: 'd6818972c1bc7d85bc85ca3df8c3bec88d460900',
        tags: [
          {
            key: Uint8Array [
              149
            ],
            value: Uint8Array [
              219
            ]
          },
          {
            key: Uint8Array [
              67
            ],
            value: Uint8Array [
              81
            ]
          }
        ],
        code: 403
      }
    ],
    totalTxs: 71104
  }
}
```

### getBlocks

```js
const result = await client.getBlocks({
  paging: {
    cursor: 'driver',
    size: 66024,
    order: [
      {
        field: 'navigate',
        type: 'invoice'
      },
      {
        field: 'US Dollar',
        type: 'Tools'
      }
    ]
  },
  minHeight: 48407,
  maxHeight: 43331,
  emptyExcluded: undefined
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 41,
  page: {
    cursor: 'Philippines',
    next: undefined,
    total: 30527
  },
  blocks: [
    {
      height: 93269,
      numTxs: 23548,
      time: '2019-03-05T02:54:13.062Z',
      appHash: '3d83fa64f51cb1d4d63e260dcda38ddd996606bc',
      proposer: '54d42d2a225a3758b73d12033ed252f981549c0d',
      txs: [
        {
          tx: {
            from: 'a18a611ae42ee454d667bd946d12d76e06ecc46c',
            nonce: 78728,
            signature: Uint8Array [
              14
            ],
            chainId: 'Jewelery',
            signatures: [
              {
                signer: 'indexing',
                signature: Uint8Array [
                  104
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Right-sized',
                signature: Uint8Array [
                  198
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
          height: 50779,
          index: 78007,
          hash: 'b944516865840244c11a6623d4b546b1a052e23c',
          tags: [
            {
              key: Uint8Array [
                241
              ],
              value: Uint8Array [
                156
              ]
            },
            {
              key: Uint8Array [
                140
              ],
              value: Uint8Array [
                17
              ]
            }
          ],
          code: 24
        },
        {
          tx: {
            from: 'e8d1331073b10ace51151c0a810896a9a8f85a38',
            nonce: 43857,
            signature: Uint8Array [
              168
            ],
            chainId: 'array',
            signatures: [
              {
                signer: 'metrics',
                signature: Uint8Array [
                  86
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Place',
                signature: Uint8Array [
                  152
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
          height: 81818,
          index: 99527,
          hash: 'c8e396be44d26d49200b833d8c7fd69229a189b4',
          tags: [
            {
              key: Uint8Array [
                21
              ],
              value: Uint8Array [
                16
              ]
            },
            {
              key: Uint8Array [
                106
              ],
              value: Uint8Array [
                23
              ]
            }
          ],
          code: 9
        }
      ],
      totalTxs: 58125
    },
    {
      height: 76351,
      numTxs: 19,
      time: '2019-03-05T02:54:13.062Z',
      appHash: '45c31ad72bb9012b992125608329d3fc81928d6d',
      proposer: 'b04824ea332dccd42575952071f542e875490685',
      txs: [
        {
          tx: {
            from: '35150c3ec48423d6973118940903e54163d4e0e4',
            nonce: 63493,
            signature: Uint8Array [
              174
            ],
            chainId: 'haptic',
            signatures: [
              {
                signer: 'grow',
                signature: Uint8Array [
                  22
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Savings Account',
                signature: Uint8Array [
                  193
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
          height: 94004,
          index: 38309,
          hash: '29907e89808d28ca2dd6357f1c974c02592a4340',
          tags: [
            {
              key: Uint8Array [
                161
              ],
              value: Uint8Array [
                174
              ]
            },
            {
              key: Uint8Array [
                143
              ],
              value: Uint8Array [
                177
              ]
            }
          ],
          code: 6
        },
        {
          tx: {
            from: 'ccec0398460e3113ce3f14060fa402099a1c5715',
            nonce: 9779,
            signature: Uint8Array [
              62
            ],
            chainId: 'Rial Omani',
            signatures: [
              {
                signer: 'CFA Franc BEAC',
                signature: Uint8Array [
                  114
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'payment',
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
          height: 39613,
          index: 87567,
          hash: 'c162105f82d8f0d42590d3a2e077b5fa940d3292',
          tags: [
            {
              key: Uint8Array [
                89
              ],
              value: Uint8Array [
                65
              ]
            },
            {
              key: Uint8Array [
                133
              ],
              value: Uint8Array [
                92
              ]
            }
          ],
          code: 5
        }
      ],
      totalTxs: 5496
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
  code: 27,
  info: {
    id: 'sticky',
    network: 'Representative',
    moniker: 'input',
    consensusVersion: 'deposit',
    synced: undefined,
    appHash: '79efb3022f4154537975d4df54aa092724b86a52',
    blockHash: Uint8Array [
      236
    ],
    blockHeight: 67495,
    blockTime: '2019-03-05T02:54:13.063Z',
    address: 'e9eb061c4db9abc64a27e059e35db036bd051f7d',
    votingPower: 56941,
    totalTxs: 41503,
    version: 'collaboration',
    dataVersion: 'extranet',
    forgeAppsVersion: {
      'function randomWord (type) {\n\n    var wordMethods = [\n    \'commerce.department\',\n    \'commerce.productName\',\n    \'commerce.productAdjective\',\n    \'commerce.productMaterial\',\n    \'commerce.product\',\n    \'commerce.color\',\n\n    \'company.catchPhraseAdjective\',\n    \'company.catchPhraseDescriptor\',\n    \'company.catchPhraseNoun\',\n    \'company.bsAdjective\',\n    \'company.bsBuzz\',\n    \'company.bsNoun\',\n    \'address.streetSuffix\',\n    \'address.county\',\n    \'address.country\',\n    \'address.state\',\n\n    \'finance.accountName\',\n    \'finance.transactionType\',\n    \'finance.currencyName\',\n\n    \'hacker.noun\',\n    \'hacker.verb\',\n    \'hacker.adjective\',\n    \'hacker.ingverb\',\n    \'hacker.abbreviation\',\n\n    \'name.jobDescriptor\',\n    \'name.jobArea\',\n    \'name.jobType\'];\n\n    // randomly pick from the many faker methods that can generate words\n    var randomWordMethod = faker.random.arrayElement(wordMethods);\n    return faker.fake(\'{{\' + randomWordMethod + \'}}\');\n\n  }': 'Norwegian Krone'
    },
    supportedTxs: [
      'Metal',
      'Keyboard'
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
  code: 38,
  config: 'customer loyalty'
}
});
```

### getForgeState

```js
const result = await client.getForgeState({
  keys: [
    'withdrawal',
    'invoice'
  ],
  height: 43089
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 22,
  state: {
    address: '881fb5df2cb725aee52f3b2d254bcd223b4cbe33',
    consensus: {
      maxBytes: 24257,
      maxGas: 7326,
      maxValidators: 24178,
      maxCandidates: 487,
      pubKeyTypes: [
        'Via',
        'Cayman Islands'
      ],
      validators: [
        {
          address: 'ddcd7bafa45879995171a898f616a49a4200b4ac',
          power: 38038
        },
        {
          address: 'b7bd232587e4dc26d722ce83bcd6b71bdeab900e',
          power: 64584
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
            dataHash: 'input',
            actions: [
              undefined,
              undefined
            ]
          },
          {
            type: 2,
            dataHash: 'fault-tolerant',
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
        totalStakes: '220',
        totalUnstakes: '87268',
        context: {
          genesisTx: 'calculate',
          renaissanceTx: 'monitor',
          genesisTime: '2019-03-05T02:54:13.064Z',
          renaissanceTime: '2019-03-05T02:54:13.064Z'
        }
      }
    },
    version: 'Toys',
    dataVersion: 'Planner',
    forgeAppHash: Uint8Array [
      132
    ],
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
    startDate: 'microchip',
    endDate: 'California'
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 0,
  forgeStatistics: {
    numBlocks: [
      40249,
      36428
    ],
    numTxs: [
      47196,
      39966
    ],
    numStakes: [
      '86540',
      '77881'
    ],
    numValidators: [
      48442,
      28216
    ],
    numAccountMigrateTxs: [
      44777,
      61985
    ],
    numCreateAssetTxs: [
      99166,
      39977
    ],
    numConsensusUpgradeTxs: [
      80153,
      29601
    ],
    numDeclareTxs: [
      97967,
      21436
    ],
    numDeclareFileTxs: [
      84859,
      37602
    ],
    numExchangeTxs: [
      42158,
      26396
    ],
    numStakeTxs: [
      55859,
      18533
    ],
    numSysUpgradeTxs: [
      7024,
      25613
    ],
    numTransferTxs: [
      92594,
      13171
    ],
    numUpdateAssetTxs: [
      65380,
      70341
    ],
    numConsumeAssetTxs: [
      85871,
      70827
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
  code: 3,
  netInfo: {
    listening: undefined,
    listeners: [
      'Walk',
      'application'
    ],
    nPeers: 7239,
    peers: [
      {
        id: 'Berkshire',
        network: 'firewall',
        consensusVersion: 'Guarani',
        moniker: 'Compatible',
        ip: 'Regional',
        geoInfo: {
          city: 'Cliff',
          country: 'interface',
          latitude: 32004.02,
          longitude: 40150.27
        }
      },
      {
        id: 'Tasty Wooden Chips',
        network: 'Coordinator',
        consensusVersion: 'Generic',
        moniker: 'Tasty',
        ip: 'Internal',
        geoInfo: {
          city: 'applications',
          country: 'invoice',
          latitude: 41564.75,
          longitude: 19678.68
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
    id: 'SCSI',
    network: 'Yemen',
    moniker: 'programming',
    consensusVersion: 'port',
    synced: undefined,
    appHash: '7e596aa4fdbed3645cc64d7bc108f2cadc0044c2',
    blockHash: Uint8Array [
      255
    ],
    blockHeight: 50718,
    blockTime: '2019-03-05T02:54:13.065Z',
    address: 'ffdb4d552482a6a4a4b67c82c7c3211d2f14201a',
    votingPower: 10197,
    totalTxs: 45714,
    version: 'Minnesota',
    dataVersion: 'target',
    forgeAppsVersion: {
      'function randomWord (type) {\n\n    var wordMethods = [\n    \'commerce.department\',\n    \'commerce.productName\',\n    \'commerce.productAdjective\',\n    \'commerce.productMaterial\',\n    \'commerce.product\',\n    \'commerce.color\',\n\n    \'company.catchPhraseAdjective\',\n    \'company.catchPhraseDescriptor\',\n    \'company.catchPhraseNoun\',\n    \'company.bsAdjective\',\n    \'company.bsBuzz\',\n    \'company.bsNoun\',\n    \'address.streetSuffix\',\n    \'address.county\',\n    \'address.country\',\n    \'address.state\',\n\n    \'finance.accountName\',\n    \'finance.transactionType\',\n    \'finance.currencyName\',\n\n    \'hacker.noun\',\n    \'hacker.verb\',\n    \'hacker.adjective\',\n    \'hacker.ingverb\',\n    \'hacker.abbreviation\',\n\n    \'name.jobDescriptor\',\n    \'name.jobArea\',\n    \'name.jobType\'];\n\n    // randomly pick from the many faker methods that can generate words\n    var randomWordMethod = faker.random.arrayElement(wordMethods);\n    return faker.fake(\'{{\' + randomWordMethod + \'}}\');\n\n  }': 'virtual'
    },
    supportedTxs: [
      'program',
      'Baby'
    ],
    ip: 'Soft',
    geoInfo: {
      city: 'Views',
      country: 'turquoise',
      latitude: 33806.02,
      longitude: 46525.76
    }
  }
}
});
```

### getStakeState

```js
const stream = client.getStakeState({
  address: '7fd8d2daaf8ba80b65105ff09e614000de4c92e0',
  keys: [
    'capacity',
    'encompassing'
  ],
  height: 71789
});

// output
{
  code: 9,
  state: {
    address: '1a470a59c6855cfb45481c0f4d1a8e3355176709',
    from: '66190cdd01e721edd0e0529e978fb643658306e3',
    to: 'a47add3f510a4ce5b99c698f2314b85e2689f3ef',
    balance: '19117',
    message: 'Dynamic',
    context: {
      genesisTx: 'best-of-breed',
      renaissanceTx: 'Small Cotton Shoes',
      genesisTime: '2019-03-05T02:54:13.066Z',
      renaissanceTime: '2019-03-05T02:54:13.066Z'
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
    cursor: 'Legacy',
    size: 95538,
    order: [
      {
        field: 'Regional',
        type: 'schemas'
      },
      {
        field: 'viral',
        type: 'protocol'
      }
    ]
  },
  addressFilter: {
    sender: 'Music',
    receiver: 'Handcrafted',
    direction: 1
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 32,
  page: {
    cursor: 'Credit Card Account',
    next: undefined,
    total: 47471
  },
  stakes: [
    {
      address: '5edca11b0e16782265de3349a8fd18f7bb89495f',
      balance: '91073',
      sender: 'open-source',
      receiver: 'Gorgeous',
      genesisTime: 'Bedfordshire',
      renaissanceTime: 'overriding',
      message: 'Keys',
      type: 88174
    },
    {
      address: 'b1aefbaa7a2215d2c49fe5586f1f4fd032b2bd2d',
      balance: '9443',
      sender: 'interface',
      receiver: 'encoding',
      genesisTime: 'Soft',
      renaissanceTime: 'Maine',
      message: 'Music',
      type: 70756
    }
  ]
}
});
```

### getTopAccounts

```js
const result = await client.getTopAccounts({
  paging: {
    cursor: 'Kentucky',
    size: 56311,
    order: [
      {
        field: 'Holy See (Vatican City State)',
        type: 'Table'
      },
      {
        field: 'Kina',
        type: 'Forges'
      }
    ]
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 32,
  page: {
    cursor: 'pixel',
    next: undefined,
    total: 88761
  },
  accounts: [
    {
      address: 'dd85efb69b5b4cf7586407e92d519936f6a66fbd',
      balance: '73011',
      numAssets: 64698,
      numTxs: 21982,
      nonce: 17852,
      genesisTime: 'Idaho',
      renaissanceTime: 'Investor',
      moniker: 'zero administration',
      migratedFrom: 'throughput',
      migratedTo: 'copy',
      totalReceivedStakes: '6521',
      totalStakes: '40800',
      totalUnstakes: '28397',
      recentNumTxs: [
        8719,
        9323
      ]
    },
    {
      address: '996c96ca68d975d233d14cb978cd0fc4ae6d7d0d',
      balance: '69006',
      numAssets: 86573,
      numTxs: 77734,
      nonce: 70438,
      genesisTime: 'Glens',
      renaissanceTime: 'Automotive',
      moniker: 'revolutionary',
      migratedFrom: 'New Mexico',
      migratedTo: 'Group',
      totalReceivedStakes: '22131',
      totalStakes: '10649',
      totalUnstakes: '50603',
      recentNumTxs: [
        16337,
        8146
      ]
    }
  ]
}
});
```

### getTx

```js
const stream = client.getTx({
  hash: 'fa21e0ee0eb8f89a2b972c078eecf25c36f98b8e'
});

// output
{
  code: 39,
  info: {
    tx: {
      from: '4c1d92b0577eaf9093815f10ae4f6faaef44e65a',
      nonce: 26740,
      signature: Uint8Array [
        43
      ],
      chainId: 'neutral',
      signatures: [
        {
          signer: 'systems',
          signature: Uint8Array [
            171
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        {
          signer: 'Factors',
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
    height: 65178,
    index: 62798,
    hash: '2a357193bb751ae6bddace82f3ac1d614ed15cc4',
    tags: [
      {
        key: Uint8Array [
          100
        ],
        value: Uint8Array [
          58
        ]
      },
      {
        key: Uint8Array [
          174
        ],
        value: Uint8Array [
          116
        ]
      }
    ],
    code: 35
  }
}
```

### getUnconfirmedTxs

```js
const result = await client.getUnconfirmedTxs({
  limit: 30072
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 24,
  unconfirmedTxs: {
    nTxs: 91913,
    txs: [
      {
        from: '9ef9731d6d238c3578010db035f9b4f9c384dfd4',
        nonce: 67309,
        signature: Uint8Array [
          165
        ],
        chainId: 'Music',
        signatures: [
          {
            signer: 'Configuration',
            signature: Uint8Array [
              138
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'optimal',
            signature: Uint8Array [
              164
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
        from: '3784eb4133dd8ac90ec4f47c606970d0aa9e2bc7',
        nonce: 43652,
        signature: Uint8Array [
          77
        ],
        chainId: 'payment',
        signatures: [
          {
            signer: 'Buckinghamshire',
            signature: Uint8Array [
              152
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'capacitor',
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
  code: 500,
  validatorsInfo: {
    blockHeight: 97012,
    validators: [
      {
        address: 'f59f68ea285a087a6aa6b945f1443dbfa4603252',
        pubKey: {
          type: 'Gorgeous Granite Bacon',
          data: Uint8Array [
            17
          ]
        },
        votingPower: 62727,
        proposerPriority: 'Peru',
        name: 'withdrawal'
      },
      {
        address: '73726c606c9f625ecea91b68f81c8eaa0a0bb865',
        pubKey: {
          type: 'Human',
          data: Uint8Array [
            135
          ]
        },
        votingPower: 52525,
        proposerPriority: 'navigate',
        name: 'transition'
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
    cursor: 'Future-proofed',
    size: 31273,
    order: [
      {
        field: 'Beauty',
        type: 'Rubber'
      },
      {
        field: 'Generic',
        type: 'Towels'
      }
    ]
  },
  address: '0fc15b18ec96eff86025df5d2f3cea5f343d25f4'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 33,
  page: {
    cursor: 'Fantastic',
    next: undefined,
    total: 40369
  },
  transactions: [
    {
      hash: '5c7b5074127d03cf87d0a752e0d69c4944fc866a',
      sender: 'Garden',
      receiver: 'website',
      time: 'Functionality',
      type: 'withdrawal',
      tx: {
        from: '2db2e84abcc5ed92d9d5a62668647ef94625db44',
        nonce: 82454,
        signature: Uint8Array [
          18
        ],
        chainId: 'Upgradable',
        signatures: [
          {
            signer: 'Automotive',
            signature: Uint8Array [
              0
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'Myanmar',
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
      }
    },
    {
      hash: '38375b1837d160c6cf033ef6dbff6366eca37aa1',
      sender: 'Computers',
      receiver: 'Expanded',
      time: 'reboot',
      type: 'compelling',
      tx: {
        from: '08dcf646d722ffc5d5cb820c1c53ac00120fe09f',
        nonce: 61247,
        signature: Uint8Array [
          134
        ],
        chainId: 'Rhode Island',
        signatures: [
          {
            signer: 'Program',
            signature: Uint8Array [
              227
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'attitude',
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
    cursor: 'Cape Verde Escudo',
    size: 56384,
    order: [
      {
        field: 'deposit',
        type: 'empowering'
      },
      {
        field: 'Central',
        type: 'Oregon'
      }
    ]
  },
  timeFilter: {
    startDateTime: 'Unbranded Fresh Pizza',
    endDateTime: 'Wisconsin'
  },
  addressFilter: {
    sender: 'Credit Card Account',
    receiver: 'Legacy',
    direction: 2
  },
  typeFilter: {
    types: [
      'whiteboard',
      'IB'
    ]
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 5,
  page: {
    cursor: 'Agent',
    next: undefined,
    total: 89192
  },
  transactions: [
    {
      hash: 'c2146c234d83a11eac4c532206a619769ea036a5',
      sender: 'Tasty Fresh Chicken',
      receiver: 'Central',
      time: 'Pataca',
      type: 'Tasty Plastic Chips',
      tx: {
        from: 'a57ba80759fe86a843e00399cc21bab6565dafd3',
        nonce: 15951,
        signature: Uint8Array [
          186
        ],
        chainId: 'Multi-tiered',
        signatures: [
          {
            signer: 'Industrial',
            signature: Uint8Array [
              146
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'open-source',
            signature: Uint8Array [
              196
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
    },
    {
      hash: '3eab0b90da9583f25a66a8b5a3698f80925df5aa',
      sender: 'Incredible',
      receiver: 'Plastic',
      time: 'Sports',
      type: 'District',
      tx: {
        from: '164e43a786b2163a56922201aef8c757a31b581a',
        nonce: 35418,
        signature: Uint8Array [
          154
        ],
        chainId: 'SAS',
        signatures: [
          {
            signer: 'override',
            signature: Uint8Array [
              204
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'AI',
            signature: Uint8Array [
              18
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
  ]
}
});
```

### listWallet

```js
const stream = client.listWallet({});

// output
{
  code: 1,
  address: '57f39687afc99ce32ed9cb516a4ff8867221dff7'
}
```

### loadFile

```js
const stream = client.loadFile({
  hash: '061bd810c2f7177d55c4d924375f94d4de0e7ab8'
});

// output
{
  code: 22,
  chunk: Uint8Array [
    124
  ]
}
```

### loadWallet

```js
const result = await client.loadWallet({
  address: 'a242f2225ec02a2ab6839da9221e8bd90cdbed04',
  passphrase: 'Licensed'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 8,
  token: 'Plastic',
  wallet: {
    type: {
      pk: 1,
      hash: 13,
      address: 1,
      role: 7
    },
    sk: Uint8Array [
      43
    ],
    pk: Uint8Array [
      16
    ],
    address: '8f7d5105fb5a2873cb4c396a07641f013bdd3fc9'
  }
}
});
```

### multisig

```js
const result = await client.multisig({
  tx: {
    from: 'a783d98afa3f9eede27835139c0d41f93a877c23',
    nonce: 48669,
    signature: Uint8Array [
      170
    ],
    chainId: 'Refined Concrete Chicken',
    signatures: [
      {
        signer: 'RAM',
        signature: Uint8Array [
          40
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'Response',
        signature: Uint8Array [
          49
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
      hash: 14,
      address: 1,
      role: 3
    },
    sk: Uint8Array [
      28
    ],
    pk: Uint8Array [
      236
    ],
    address: 'dd1c22698bb13457f98fc63fd43bd4549e6df429'
  },
  token: 'calculate'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 7,
  tx: {
    from: '75b256c0fe4948e8cbeb586cd8efe8c7860c539c',
    nonce: 5996,
    signature: Uint8Array [
      158
    ],
    chainId: 'CSS',
    signatures: [
      {
        signer: 'supply-chains',
        signature: Uint8Array [
          143
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'Face to face',
        signature: Uint8Array [
          136
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
  hash: '52930de3de1663aec4ed8afe967ae76cb7870fe6'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 36
}
});
```

### process

```js
const stream = client.process({
  verifyTx: {
    tx: {
      from: 'bdb5ea49f00808854016334d507f33e1b19f7f6a',
      nonce: 95196,
      signature: Uint8Array [
        128
      ],
      chainId: 'Bedfordshire',
      signatures: [
        {
          signer: 'Computer',
          signature: Uint8Array [
            101
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        {
          signer: 'Avon',
          signature: Uint8Array [
            31
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
        balance: '27903',
        nonce: 58919,
        numTxs: 65266,
        address: '91510eefad40f46e00fbf71ed45b4a8f44db5325',
        pk: Uint8Array [
          133
        ],
        type: {
          pk: 0,
          hash: 14,
          address: 1,
          role: 4
        },
        moniker: 'Tasty',
        context: {
          genesisTx: 'Internal',
          renaissanceTx: 'copying',
          genesisTime: '2019-03-05T02:54:13.072Z',
          renaissanceTime: '2019-03-05T02:54:13.072Z'
        },
        issuer: 'Home Loan Account',
        migratedTo: [
          'Liaison',
          'Awesome Steel Shirt'
        ],
        migratedFrom: [
          'Electronics',
          'transmit'
        ],
        numAssets: 59859,
        stake: {
          totalStakes: '39929',
          totalUnstakes: '97803',
          totalReceivedStakes: '80011',
          recentStakes: {
            items: [
              Uint8Array [
                50
              ],
              Uint8Array [
                165
              ]
            ],
            typeUrl: 'Unbranded',
            maxItems: 33287,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                223
              ],
              Uint8Array [
                230
              ]
            ],
            typeUrl: 'Orchestrator',
            maxItems: 97475,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              87
            ],
            Uint8Array [
              202
            ]
          ],
          typeUrl: 'salmon',
          maxItems: 24825,
          circular: undefined,
          fifo: undefined
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        balance: '31846',
        nonce: 91455,
        numTxs: 40846,
        address: 'c3e78468a84e8d6a9a03c19fbd946a37e387bef7',
        pk: Uint8Array [
          14
        ],
        type: {
          pk: 0,
          hash: 0,
          address: 0,
          role: 1
        },
        moniker: 'pixel',
        context: {
          genesisTx: 'Berkshire',
          renaissanceTx: 'Unbranded Concrete Computer',
          genesisTime: '2019-03-05T02:54:13.072Z',
          renaissanceTime: '2019-03-05T02:54:13.072Z'
        },
        issuer: 'system',
        migratedTo: [
          'cross-platform',
          'scalable'
        ],
        migratedFrom: [
          'Computer',
          'Refined'
        ],
        numAssets: 7879,
        stake: {
          totalStakes: '6182',
          totalUnstakes: '55819',
          totalReceivedStakes: '12355',
          recentStakes: {
            items: [
              Uint8Array [
                229
              ],
              Uint8Array [
                94
              ]
            ],
            typeUrl: 'channels',
            maxItems: 32772,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                37
              ],
              Uint8Array [
                205
              ]
            ],
            typeUrl: 'deposit',
            maxItems: 21238,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              244
            ],
            Uint8Array [
              3
            ]
          ],
          typeUrl: 'Practical',
          maxItems: 7881,
          circular: undefined,
          fifo: undefined
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    assets: [
      {
        address: '081bef96ede68d2081be17c0adfb0fc9bc1ed3e1',
        owner: 'Frozen',
        moniker: 'Table',
        readonly: undefined,
        transferrable: undefined,
        ttl: 92783,
        consumedTime: '2019-03-05T02:54:13.072Z',
        issuer: 'driver',
        stake: {
          totalStakes: '22688',
          totalUnstakes: '82716',
          totalReceivedStakes: '13973',
          recentStakes: {
            items: [
              Uint8Array [
                176
              ],
              Uint8Array [
                131
              ]
            ],
            typeUrl: 'Frozen',
            maxItems: 53626,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                74
              ],
              Uint8Array [
                109
              ]
            ],
            typeUrl: 'deposit',
            maxItems: 92683,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Engineer',
          renaissanceTx: 'Djibouti Franc',
          genesisTime: '2019-03-05T02:54:13.072Z',
          renaissanceTime: '2019-03-05T02:54:13.072Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: 'a596ecb11bd74723de23eaea831c26630090b8a5',
        owner: 'Fantastic',
        moniker: 'maximize',
        readonly: undefined,
        transferrable: undefined,
        ttl: 8842,
        consumedTime: '2019-03-05T02:54:13.072Z',
        issuer: 'Accountability',
        stake: {
          totalStakes: '27207',
          totalUnstakes: '73592',
          totalReceivedStakes: '71457',
          recentStakes: {
            items: [
              Uint8Array [
                61
              ],
              Uint8Array [
                132
              ]
            ],
            typeUrl: 'Tunisian Dinar',
            maxItems: 66400,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                151
              ],
              Uint8Array [
                105
              ]
            ],
            typeUrl: 'Analyst',
            maxItems: 70317,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Falls',
          renaissanceTx: 'Investment Account',
          genesisTime: '2019-03-05T02:54:13.072Z',
          renaissanceTime: '2019-03-05T02:54:13.072Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    stakes: [
      {
        address: '93c80eba4f319eab60647f964dca6d52c624557e',
        from: 'a9e6cc65ec168e43484868ecd392502182664961',
        to: '8168b6b20ff9c13a2b90579ece15089759eee9a2',
        balance: '36234',
        message: 'Interactions',
        context: {
          genesisTx: 'B2B',
          renaissanceTx: 'Extension',
          genesisTime: '2019-03-05T02:54:13.073Z',
          renaissanceTime: '2019-03-05T02:54:13.073Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: 'b5c3589ddfde08b79814bf238f66cb6d14632ef6',
        from: 'd14a30d7b8fcba63b3ea6b22f2d39602aea6828e',
        to: '2c4ab252ba315248b32e65c07eee81117f1f4827',
        balance: '73540',
        message: 'transmitter',
        context: {
          genesisTx: 'Phased',
          renaissanceTx: 'web-enabled',
          genesisTime: '2019-03-05T02:54:13.073Z',
          renaissanceTime: '2019-03-05T02:54:13.073Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    context: {
      txHash: '6cc8936dc3ac00b03f8d37d68f69b70c09915e10',
      blockHeight: 96224,
      blockTime: '2019-03-05T02:54:13.073Z',
      totalTxs: 10779,
      txStatistics: {
        numAccountMigrateTxs: 11293,
        numCreateAssetTxs: 70373,
        numConsensusUpgradeTxs: 61470,
        numDeclareTxs: 30849,
        numDeclareFileTxs: 28157,
        numExchangeTxs: 23884,
        numStakeTxs: 70395,
        numSysUpgradeTxs: 69034,
        numTransferTxs: 66653,
        numUpdateAssetTxs: 1573,
        numConsumeAssetTxs: 51612
      },
      txIndex: 16338,
      lastBlockTime: '2019-03-05T02:54:13.073Z'
    },
    appState: {
      address: 'eb7e067b225908e62770eb6c6acd84fc322bb0d3',
      consensus: {
        maxBytes: 96534,
        maxGas: 11129,
        maxValidators: 40464,
        maxCandidates: 4708,
        pubKeyTypes: [
          'e-markets',
          'Rustic'
        ],
        validators: [
          {
            address: '168d1f9f132bd90c419a65c1dd34d7960003d704',
            power: 39587
          },
          {
            address: '914d23d533d0d9f1bbd59555a0c21d5a2c5ad548',
            power: 50401
          }
        ],
        validatorChanged: undefined,
        paramChanged: undefined
      },
      tasks: {
        'function (options) {\n\n    if (typeof options === "number") {\n      options = {\n        max: options\n      };\n    }\n\n    options = options || {};\n\n    if (typeof options.min === "undefined") {\n      options.min = 0;\n    }\n\n    if (typeof options.max === "undefined") {\n      options.max = 99999;\n    }\n    if (typeof options.precision === "undefined") {\n      options.precision = 1;\n    }\n\n    // Make the range inclusive of the max value\n    var max = options.max;\n    if (max >= 0) {\n      max += options.precision;\n    }\n\n    var randomNumber = Math.floor(\n      mersenne.rand(max / options.precision, options.min / options.precision));\n    // Workaround problem in Float point arithmetics for e.g. 6681493 / 0.01\n    randomNumber = randomNumber / (1 / options.precision);\n\n    return randomNumber;\n\n  }': {
          item: [
            {
              type: 4,
              dataHash: 'matrix',
              actions: [
                undefined,
                undefined
              ]
            },
            {
              type: 1,
              dataHash: 'platforms',
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
          totalStakes: '66223',
          totalUnstakes: '7628',
          context: {
            genesisTx: 'Orchestrator',
            renaissanceTx: 'deposit',
            genesisTime: '2019-03-05T02:54:13.073Z',
            renaissanceTime: '2019-03-05T02:54:13.073Z'
          }
        }
      },
      version: 'Gardens',
      dataVersion: 'Accounts',
      forgeAppHash: Uint8Array [
        5
      ],
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
    code: 33
  }
}
```

### processOne

```js
const result = await client.processOne({
  verifyTx: {
    tx: {
      from: '0b4228e762902f8c83e294e4bb473cbd7472ae59',
      nonce: 38038,
      signature: Uint8Array [
        161
      ],
      chainId: 'Berkshire',
      signatures: [
        {
          signer: 'disintermediate',
          signature: Uint8Array [
            1
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        {
          signer: 'quantifying',
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
    states: [
      {
        balance: '28270',
        nonce: 82749,
        numTxs: 90643,
        address: '85126fba89534a2d0e07eb43b3f2229a0e749cf0',
        pk: Uint8Array [
          112
        ],
        type: {
          pk: 1,
          hash: 14,
          address: 0,
          role: 0
        },
        moniker: 'indexing',
        context: {
          genesisTx: 'Streets',
          renaissanceTx: 'Officer',
          genesisTime: '2019-03-05T02:54:13.074Z',
          renaissanceTime: '2019-03-05T02:54:13.074Z'
        },
        issuer: 'Program',
        migratedTo: [
          'lime',
          'wireless'
        ],
        migratedFrom: [
          'Consultant',
          'Liaison'
        ],
        numAssets: 56234,
        stake: {
          totalStakes: '64671',
          totalUnstakes: '79759',
          totalReceivedStakes: '66475',
          recentStakes: {
            items: [
              Uint8Array [
                114
              ],
              Uint8Array [
                46
              ]
            ],
            typeUrl: 'executive',
            maxItems: 5867,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                30
              ],
              Uint8Array [
                169
              ]
            ],
            typeUrl: 'violet',
            maxItems: 92579,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              40
            ],
            Uint8Array [
              226
            ]
          ],
          typeUrl: 'Metal',
          maxItems: 90517,
          circular: undefined,
          fifo: undefined
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        balance: '88340',
        nonce: 39746,
        numTxs: 26655,
        address: 'd8da2cde895345a1579b13905bd370cf5c0a48f6',
        pk: Uint8Array [
          180
        ],
        type: {
          pk: 0,
          hash: 14,
          address: 0,
          role: 8
        },
        moniker: 'Tunisia',
        context: {
          genesisTx: 'archive',
          renaissanceTx: 'Savings Account',
          genesisTime: '2019-03-05T02:54:13.074Z',
          renaissanceTime: '2019-03-05T02:54:13.074Z'
        },
        issuer: 'Operations',
        migratedTo: [
          'South Carolina',
          'Lead'
        ],
        migratedFrom: [
          'deposit',
          'Avon'
        ],
        numAssets: 54539,
        stake: {
          totalStakes: '54129',
          totalUnstakes: '59630',
          totalReceivedStakes: '87556',
          recentStakes: {
            items: [
              Uint8Array [
                132
              ],
              Uint8Array [
                37
              ]
            ],
            typeUrl: '24/365',
            maxItems: 36289,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                200
              ],
              Uint8Array [
                205
              ]
            ],
            typeUrl: 'online',
            maxItems: 55071,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              91
            ],
            Uint8Array [
              55
            ]
          ],
          typeUrl: 'Tasty Wooden Bacon',
          maxItems: 21074,
          circular: undefined,
          fifo: undefined
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    assets: [
      {
        address: '299c499cbc80a1bdbbe82ce06b962fe0353eeb30',
        owner: 'sensor',
        moniker: 'generating',
        readonly: undefined,
        transferrable: undefined,
        ttl: 1012,
        consumedTime: '2019-03-05T02:54:13.074Z',
        issuer: 'Berkshire',
        stake: {
          totalStakes: '30885',
          totalUnstakes: '41498',
          totalReceivedStakes: '6842',
          recentStakes: {
            items: [
              Uint8Array [
                12
              ],
              Uint8Array [
                219
              ]
            ],
            typeUrl: 'Manat',
            maxItems: 49003,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                29
              ],
              Uint8Array [
                92
              ]
            ],
            typeUrl: 'Jewelery',
            maxItems: 9296,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'infrastructures',
          renaissanceTx: 'Division',
          genesisTime: '2019-03-05T02:54:13.075Z',
          renaissanceTime: '2019-03-05T02:54:13.075Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: 'ecb426c4f506cd6edc1a5e76776b2ae87b3ce65e',
        owner: 'Cape Verde Escudo',
        moniker: 'Small',
        readonly: undefined,
        transferrable: undefined,
        ttl: 29266,
        consumedTime: '2019-03-05T02:54:13.075Z',
        issuer: 'Books',
        stake: {
          totalStakes: '14786',
          totalUnstakes: '55195',
          totalReceivedStakes: '71631',
          recentStakes: {
            items: [
              Uint8Array [
                50
              ],
              Uint8Array [
                178
              ]
            ],
            typeUrl: '24/365',
            maxItems: 66806,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                44
              ],
              Uint8Array [
                25
              ]
            ],
            typeUrl: 'Curve',
            maxItems: 7419,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Branding',
          renaissanceTx: 'Qatar',
          genesisTime: '2019-03-05T02:54:13.075Z',
          renaissanceTime: '2019-03-05T02:54:13.075Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    stakes: [
      {
        address: '0f1b00d9f9494bdb56658341916eaa31015b1696',
        from: '02a6c45cd474e5352310571b8b3c8200f6ce423a',
        to: '15d53ce26125f2446377524c6c2b6388dee021f0',
        balance: '97235',
        message: 'Agent',
        context: {
          genesisTx: 'New Zealand Dollar',
          renaissanceTx: 'e-business',
          genesisTime: '2019-03-05T02:54:13.075Z',
          renaissanceTime: '2019-03-05T02:54:13.075Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: 'e92a895555cf4d0aa10560384a3106497b9f54c1',
        from: 'a214b16ab0bf071f4947cbde5ba8526154441138',
        to: '3838908e068f8e42fbabf7a31ec1077c710280eb',
        balance: '73514',
        message: 'withdrawal',
        context: {
          genesisTx: 'facilitate',
          renaissanceTx: 'payment',
          genesisTime: '2019-03-05T02:54:13.075Z',
          renaissanceTime: '2019-03-05T02:54:13.075Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    context: {
      txHash: '1d8aa2191b47ca2d8d93a01e1224913981ed8d1b',
      blockHeight: 66132,
      blockTime: '2019-03-05T02:54:13.075Z',
      totalTxs: 14798,
      txStatistics: {
        numAccountMigrateTxs: 38039,
        numCreateAssetTxs: 49922,
        numConsensusUpgradeTxs: 54609,
        numDeclareTxs: 2326,
        numDeclareFileTxs: 69171,
        numExchangeTxs: 57370,
        numStakeTxs: 76279,
        numSysUpgradeTxs: 81741,
        numTransferTxs: 70716,
        numUpdateAssetTxs: 22153,
        numConsumeAssetTxs: 40479
      },
      txIndex: 37127,
      lastBlockTime: '2019-03-05T02:54:13.075Z'
    },
    appState: {
      address: '6c916faf890a535038f1d22cb09196fa44bdfc79',
      consensus: {
        maxBytes: 93613,
        maxGas: 83483,
        maxValidators: 85471,
        maxCandidates: 95144,
        pubKeyTypes: [
          'local area network',
          'Sleek Fresh Tuna'
        ],
        validators: [
          {
            address: 'b349f420b091bbc47a509e8af442ccf2fcbf146c',
            power: 13865
          },
          {
            address: '26aeaea8e4b9f5e29094f47b3509902bd8d214ff',
            power: 76883
          }
        ],
        validatorChanged: undefined,
        paramChanged: undefined
      },
      tasks: {
        'function (options) {\n\n    if (typeof options === "number") {\n      options = {\n        max: options\n      };\n    }\n\n    options = options || {};\n\n    if (typeof options.min === "undefined") {\n      options.min = 0;\n    }\n\n    if (typeof options.max === "undefined") {\n      options.max = 99999;\n    }\n    if (typeof options.precision === "undefined") {\n      options.precision = 1;\n    }\n\n    // Make the range inclusive of the max value\n    var max = options.max;\n    if (max >= 0) {\n      max += options.precision;\n    }\n\n    var randomNumber = Math.floor(\n      mersenne.rand(max / options.precision, options.min / options.precision));\n    // Workaround problem in Float point arithmetics for e.g. 6681493 / 0.01\n    randomNumber = randomNumber / (1 / options.precision);\n\n    return randomNumber;\n\n  }': {
          item: [
            {
              type: 1,
              dataHash: 'Nevada',
              actions: [
                undefined,
                undefined
              ]
            },
            {
              type: 3,
              dataHash: 'Montenegro',
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
          totalStakes: '35715',
          totalUnstakes: '25950',
          context: {
            genesisTx: 'virtual',
            renaissanceTx: 'Games',
            genesisTime: '2019-03-05T02:54:13.075Z',
            renaissanceTime: '2019-03-05T02:54:13.075Z'
          }
        }
      },
      version: 'Manager',
      dataVersion: 'Sports',
      forgeAppHash: Uint8Array [
        4
      ],
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
    code: 21
  }
}
});
```

### recoverWallet

```js
const result = await client.recoverWallet({
  data: Uint8Array [
    215
  ],
  type: {
    pk: 1,
    hash: 6,
    address: 0,
    role: 5
  },
  passphrase: 'azure',
  moniker: 'Florida'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 9,
  token: 'Pine',
  wallet: {
    type: {
      pk: 1,
      hash: 7,
      address: 0,
      role: 0
    },
    sk: Uint8Array [
      231
    ],
    pk: Uint8Array [
      78
    ],
    address: '9513ef4a2c71e1dfafdda64338bbc30fc53673ed'
  }
}
});
```

### removeWallet

```js
const result = await client.removeWallet({
  address: '1e1868ea03d8544598ee54a273911cd914030d15'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 31
}
});
```

### search

```js
const result = await client.search({
  key: 'synthesizing',
  value: 'SCSI'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 35,
  txs: [
    {
      tx: {
        from: '4e6ed2f1bd90187c176ff753b5f75a58e925bfb6',
        nonce: 94554,
        signature: Uint8Array [
          58
        ],
        chainId: 'Profound',
        signatures: [
          {
            signer: 'Industrial',
            signature: Uint8Array [
              21
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'monitoring',
            signature: Uint8Array [
              111
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
      height: 5221,
      index: 39738,
      hash: '05be6af7b0431f5d6907b937807e3b7204198ebf',
      tags: [
        {
          key: Uint8Array [
            115
          ],
          value: Uint8Array [
            100
          ]
        },
        {
          key: Uint8Array [
            193
          ],
          value: Uint8Array [
            222
          ]
        }
      ],
      code: 36
    },
    {
      tx: {
        from: '5b3807ad9746d43f204ed2f1677dce8706b4aafb',
        nonce: 76190,
        signature: Uint8Array [
          216
        ],
        chainId: 'Bedfordshire',
        signatures: [
          {
            signer: 'Grenada',
            signature: Uint8Array [
              219
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'Camp',
            signature: Uint8Array [
              160
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
      height: 93285,
      index: 23594,
      hash: '3dd221df5295be1ed561cbc4dac76d636a336a15',
      tags: [
        {
          key: Uint8Array [
            177
          ],
          value: Uint8Array [
            39
          ]
        },
        {
          key: Uint8Array [
            160
          ],
          value: Uint8Array [
            31
          ]
        }
      ],
      code: 21
    }
  ]
}
});
```

### sendTx

```js
const result = await client.sendTx({
  tx: {
    from: '223bb39a0f565a5e50d8ef8e51355cdcdfc90ad2',
    nonce: 42065,
    signature: Uint8Array [
      152
    ],
    chainId: 'transmitting',
    signatures: [
      {
        signer: 'Iraq',
        signature: Uint8Array [
          200
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'Global',
        signature: Uint8Array [
          68
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
      hash: 13,
      address: 1,
      role: 1
    },
    sk: Uint8Array [
      135
    ],
    pk: Uint8Array [
      146
    ],
    address: '0646976e1e74db6a905a25283860d7edbab3ce0a'
  },
  token: 'Gold',
  commit: undefined
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 32,
  hash: 'aa5a259a40ba76712b5931441ff0ef241bd980e8'
}
});
```

### signData

```js
const result = await client.signData({
  data: Uint8Array [
    57
  ],
  wallet: {
    type: {
      pk: 1,
      hash: 0,
      address: 1,
      role: 3
    },
    sk: Uint8Array [
      16
    ],
    pk: Uint8Array [
      253
    ],
    address: '56056dfd9493220b1b7f5f1e7f5752695dc64e1e'
  },
  token: 'unleash'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 500,
  signature: Uint8Array [
    244
  ]
}
});
```

### storeFile

```js
const result = await client.storeFile({
  chunk: Uint8Array [
    99
  ]
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 10,
  hash: 'be376e2407e77ef34621721739679d9cbf1232bc'
}
});
```

### subscribe

```js
const stream = client.subscribe({
  type: 17,
  filter: 'vertical'
});

// output
{
  topic: 'Alley'
}
```

### unsubscribe

```js
const result = await client.unsubscribe({
  topic: 'North Carolina'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 10
}
});
```


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |
