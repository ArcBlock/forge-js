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
  from: 'd2c695fd4f1a72c9e42bf88bc24780ed4db0e099',
  nonce: 69554,
  wallet: {
    type: {
      pk: 1,
      hash: 6,
      address: 0,
      role: 3
    },
    sk: Uint8Array [
      206
    ],
    pk: Uint8Array [
      192
    ],
    address: '5138890d8c98ffe43bb6a460789f8ab313908dae'
  },
  token: 'Seychelles Rupee'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 35,
  tx: {
    from: '1f39214195e75c1cc9b01ae9e1b749e6b1fa74f4',
    nonce: 10154,
    signature: Uint8Array [
      35
    ],
    chainId: 'approach',
    signatures: [
      {
        signer: '3rd generation',
        signature: Uint8Array [
          52
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'alarm',
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

### createWallet

```js
const result = await client.createWallet({
  passphrase: 'benchmark',
  type: {
    pk: 1,
    hash: 6,
    address: 0,
    role: 2
  },
  moniker: 'evolve'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 403,
  token: 'plum',
  wallet: {
    type: {
      pk: 1,
      hash: 1,
      address: 0,
      role: 4
    },
    sk: Uint8Array [
      245
    ],
    pk: Uint8Array [
      156
    ],
    address: '496894acd48a309eeacf8f0174ebc989ed0f492d'
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
  code: 20,
  wallet: {
    type: {
      pk: 0,
      hash: 13,
      address: 0,
      role: 5
    },
    sk: Uint8Array [
      199
    ],
    pk: Uint8Array [
      84
    ],
    address: '94a08d25d24844affa3a0c5c01c3be1e11f65d71'
  }
}
});
```

### getAccountState

```js
const stream = client.getAccountState({
  address: '100da3beb6dfd0df2be1254a9375a1639d683976',
  keys: [
    'copy',
    'withdrawal'
  ],
  height: 70302
});

// output
{
  code: 42,
  state: {
    balance: '41829',
    nonce: 43008,
    numTxs: 9031,
    address: '0ea06459777570e842505836485ed024058f0895',
    pk: Uint8Array [
      131
    ],
    type: {
      pk: 1,
      hash: 0,
      address: 0,
      role: 7
    },
    moniker: 'Cambridgeshire',
    context: {
      genesisTx: 'cutting-edge',
      renaissanceTx: 'Cedi',
      genesisTime: '2019-03-05T22:33:02.695Z',
      renaissanceTime: '2019-03-05T22:33:02.695Z'
    },
    issuer: 'application',
    migratedTo: [
      'Mouse',
      'expedite'
    ],
    migratedFrom: [
      'Front-line',
      'Road'
    ],
    numAssets: 51931,
    stake: {
      totalStakes: '15525',
      totalUnstakes: '74528',
      totalReceivedStakes: '26349',
      recentStakes: {
        items: [
          Uint8Array [
            52
          ],
          Uint8Array [
            83
          ]
        ],
        typeUrl: 'Refined Metal Sausages',
        maxItems: 2278,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [
            154
          ],
          Uint8Array [
            55
          ]
        ],
        typeUrl: 'Checking Account',
        maxItems: 96376,
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
          88
        ]
      ],
      typeUrl: 'connect',
      maxItems: 79712,
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
  senderAddress: 'interfaces',
  itx: {
    moniker: 'extensible',
    data: {
      type: 'fg:x:random_data',
      value: 'ABCD 1234'
    },
    readonly: undefined,
    transferrable: undefined,
    ttl: 80357,
    parent: 'XML'
  },
  walletType: {
    pk: 1,
    hash: 0,
    address: 0,
    role: 1
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 39,
  assetAddress: 'Customer'
}
});
```

### getAssetState

```js
const stream = client.getAssetState({
  address: '5a3f6fdfc8663221f2ae8c22416bc29000b8c4d2',
  keys: [
    'Chair',
    'Home'
  ],
  height: 53766
});

// output
{
  code: 38,
  state: {
    address: 'fb9fd4c1149b9ac4f3f6be0e825b2ba3501aaab8',
    owner: 'Buckinghamshire',
    moniker: 'Gloves',
    readonly: undefined,
    transferrable: undefined,
    ttl: 37993,
    consumedTime: '2019-03-05T22:33:02.697Z',
    issuer: 'hard drive',
    stake: {
      totalStakes: '74997',
      totalUnstakes: '93659',
      totalReceivedStakes: '53511',
      recentStakes: {
        items: [
          Uint8Array [
            181
          ],
          Uint8Array [
            110
          ]
        ],
        typeUrl: 'deposit',
        maxItems: 15762,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [
            122
          ],
          Uint8Array [
            49
          ]
        ],
        typeUrl: 'Handmade',
        maxItems: 83917,
        circular: undefined,
        fifo: undefined
      }
    },
    context: {
      genesisTx: 'AGP',
      renaissanceTx: 'Supervisor',
      genesisTime: '2019-03-05T22:33:02.697Z',
      renaissanceTime: '2019-03-05T22:33:02.697Z'
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
    cursor: 'Auto Loan Account',
    size: 71567,
    order: [
      {
        field: 'Mobility',
        type: 'Nicaragua'
      },
      {
        field: 'Metrics',
        type: 'USB'
      }
    ]
  },
  ownerAddress: 'deposit'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 25,
  page: {
    cursor: 'primary',
    next: undefined,
    total: 12621
  },
  assets: [
    {
      address: '2ae17b02e98db0385da425da353c6fea6b26f409',
      owner: 'Home Loan Account',
      genesisTime: 'Centralized',
      renaissanceTime: 'Berkshire',
      moniker: 'Fish',
      readonly: undefined
    },
    {
      address: '547b6fcc7f18ba445c0ee3aef238a8af0f0284d9',
      owner: 'Rwanda Franc',
      genesisTime: 'Bermuda',
      renaissanceTime: 'Italy',
      moniker: 'Chicken',
      readonly: undefined
    }
  ]
}
});
```

### getBlock

```js
const stream = client.getBlock({
  height: 67384
});

// output
{
  code: 41,
  block: {
    height: 48507,
    numTxs: 23329,
    time: '2019-03-05T22:33:02.698Z',
    appHash: '928ca6f3ec0ed3a556984236c1c2982d978467d7',
    proposer: '823f7a13c19d2cf517be40b3ff0bf7696923e418',
    txs: [
      {
        tx: {
          from: 'c911cab73bc900fbfe428e6641503561ce309c9a',
          nonce: 21788,
          signature: Uint8Array [
            157
          ],
          chainId: 'District',
          signatures: [
            {
              signer: 'Quetzal',
              signature: Uint8Array [
                78
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'back up',
              signature: Uint8Array [
                240
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
        height: 31803,
        index: 5190,
        hash: '3acd9027757f00f7fbc50ca661cc98d45bd65ef5',
        tags: [
          {
            key: Uint8Array [
              210
            ],
            value: Uint8Array [
              58
            ]
          },
          {
            key: Uint8Array [
              146
            ],
            value: Uint8Array [
              218
            ]
          }
        ],
        code: 7
      },
      {
        tx: {
          from: 'd3ed1b9d7d8dd4f07d3da3b244da7fab0b37c788',
          nonce: 44106,
          signature: Uint8Array [
            67
          ],
          chainId: 'payment',
          signatures: [
            {
              signer: 'Concrete',
              signature: Uint8Array [
                87
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'Plastic',
              signature: Uint8Array [
                26
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
        height: 87718,
        index: 62241,
        hash: '7e928f3df9ec88816cd75bad6cdecb1279a228aa',
        tags: [
          {
            key: Uint8Array [
              47
            ],
            value: Uint8Array [
              242
            ]
          },
          {
            key: Uint8Array [
              85
            ],
            value: Uint8Array [
              148
            ]
          }
        ],
        code: 32
      }
    ],
    totalTxs: 10147
  }
}
```

### getBlocks

```js
const result = await client.getBlocks({
  paging: {
    cursor: 'Cambridgeshire',
    size: 71749,
    order: [
      {
        field: 'deposit',
        type: 'Infrastructure'
      },
      {
        field: 'SAS',
        type: 'transmitting'
      }
    ]
  },
  minHeight: 59794,
  maxHeight: 65829,
  emptyExcluded: undefined
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 36,
  page: {
    cursor: 'Ohio',
    next: undefined,
    total: 4125
  },
  blocks: [
    {
      height: 41060,
      numTxs: 68212,
      time: '2019-03-05T22:33:02.700Z',
      appHash: '2b1471ea30e21bb3a8fb1aec5f7a784e1d94e133',
      proposer: 'aecffbb74a54ca5fc268afc14969b4f0aeed3784',
      txs: [
        {
          tx: {
            from: '9089670ea8c5a7310d401a726fbd464081fac9d6',
            nonce: 68741,
            signature: Uint8Array [
              129
            ],
            chainId: 'projection',
            signatures: [
              {
                signer: 'Plastic',
                signature: Uint8Array [
                  85
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Nicaragua',
                signature: Uint8Array [
                  117
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
          height: 11465,
          index: 67709,
          hash: '705da844579bd409ec6a8ccfc1f1a3d29a2c799c',
          tags: [
            {
              key: Uint8Array [
                171
              ],
              value: Uint8Array [
                195
              ]
            },
            {
              key: Uint8Array [
                69
              ],
              value: Uint8Array [
                235
              ]
            }
          ],
          code: 41
        },
        {
          tx: {
            from: 'f67915cd02fb852280a75cc0175acc2c8eb8f50b',
            nonce: 31771,
            signature: Uint8Array [
              237
            ],
            chainId: 'calculating',
            signatures: [
              {
                signer: 'USB',
                signature: Uint8Array [
                  230
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'connect',
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
          height: 26542,
          index: 34329,
          hash: '02f48a6e9be807bd979c3a164e443abfd7742c53',
          tags: [
            {
              key: Uint8Array [
                210
              ],
              value: Uint8Array [
                248
              ]
            },
            {
              key: Uint8Array [
                176
              ],
              value: Uint8Array [
                76
              ]
            }
          ],
          code: 17
        }
      ],
      totalTxs: 56282
    },
    {
      height: 24138,
      numTxs: 58830,
      time: '2019-03-05T22:33:02.701Z',
      appHash: '35bdba563f3e293b20630f515adb7524037f29c1',
      proposer: 'f57c6604e10ddeb57d5dbeb493f9c7d492b863db',
      txs: [
        {
          tx: {
            from: 'aac4bd8439daa3a0cc7b2ad4ad7be8467b387e74',
            nonce: 1411,
            signature: Uint8Array [
              155
            ],
            chainId: 'solid state',
            signatures: [
              {
                signer: 'Silver',
                signature: Uint8Array [
                  226
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'calculating',
                signature: Uint8Array [
                  117
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
          height: 96072,
          index: 91537,
          hash: '23a6118501da6b1a58b795e6c20e998206071345',
          tags: [
            {
              key: Uint8Array [
                14
              ],
              value: Uint8Array [
                173
              ]
            },
            {
              key: Uint8Array [
                104
              ],
              value: Uint8Array [
                142
              ]
            }
          ],
          code: 500
        },
        {
          tx: {
            from: 'd8889dc25e5b724c188314fd201528504b109c5b',
            nonce: 68779,
            signature: Uint8Array [
              109
            ],
            chainId: 'payment',
            signatures: [
              {
                signer: 'teal',
                signature: Uint8Array [
                  160
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'SMS',
                signature: Uint8Array [
                  53
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
          height: 42851,
          index: 77657,
          hash: '1fc7fdec458b9ff190cea898778bcbdfd3ea9af5',
          tags: [
            {
              key: Uint8Array [
                243
              ],
              value: Uint8Array [
                72
              ]
            },
            {
              key: Uint8Array [
                51
              ],
              value: Uint8Array [
                88
              ]
            }
          ],
          code: 42
        }
      ],
      totalTxs: 41549
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
    id: 'Program',
    network: 'Response',
    moniker: 'JSON',
    consensusVersion: 'portals',
    synced: undefined,
    appHash: '3935cf0ca88dcdef408b72121f9983488768e619',
    blockHash: Uint8Array [
      89
    ],
    blockHeight: 53039,
    blockTime: '2019-03-05T22:33:02.702Z',
    address: 'c06a0b90637bb4a3a3666b5f0d27dd90816b9501',
    votingPower: 98510,
    totalTxs: 31312,
    version: 'Division',
    dataVersion: 'firewall',
    forgeAppsVersion: {
      'function randomWord (type) {\n\n    var wordMethods = [\n    \'commerce.department\',\n    \'commerce.productName\',\n    \'commerce.productAdjective\',\n    \'commerce.productMaterial\',\n    \'commerce.product\',\n    \'commerce.color\',\n\n    \'company.catchPhraseAdjective\',\n    \'company.catchPhraseDescriptor\',\n    \'company.catchPhraseNoun\',\n    \'company.bsAdjective\',\n    \'company.bsBuzz\',\n    \'company.bsNoun\',\n    \'address.streetSuffix\',\n    \'address.county\',\n    \'address.country\',\n    \'address.state\',\n\n    \'finance.accountName\',\n    \'finance.transactionType\',\n    \'finance.currencyName\',\n\n    \'hacker.noun\',\n    \'hacker.verb\',\n    \'hacker.adjective\',\n    \'hacker.ingverb\',\n    \'hacker.abbreviation\',\n\n    \'name.jobDescriptor\',\n    \'name.jobArea\',\n    \'name.jobType\'];\n\n    // randomly pick from the many faker methods that can generate words\n    var randomWordMethod = faker.random.arrayElement(wordMethods);\n    return faker.fake(\'{{\' + randomWordMethod + \'}}\');\n\n  }': 'teal'
    },
    supportedTxs: [
      'methodologies',
      'bandwidth-monitored'
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
  code: 20,
  config: 'Accountability'
}
});
```

### getForgeState

```js
const result = await client.getForgeState({
  keys: [
    'Computer',
    'interactive'
  ],
  height: 8605
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 31,
  state: {
    address: '39e547d3954b690cb990aaf7756fde519d4c01a3',
    consensus: {
      maxBytes: 59480,
      maxGas: 9727,
      maxValidators: 79588,
      maxCandidates: 89461,
      pubKeyTypes: [
        'Syrian Arab Republic',
        'parsing'
      ],
      validators: [
        {
          address: 'fa3108e47c05d68b92fbdad6146fcf667cc7f837',
          power: 89753
        },
        {
          address: '866a7f9548fe35de3924adc31680ef4fa372d41d',
          power: 59237
        }
      ],
      validatorChanged: undefined,
      paramChanged: undefined
    },
    tasks: {
      'function (options) {\n\n    if (typeof options === "number") {\n      options = {\n        max: options\n      };\n    }\n\n    options = options || {};\n\n    if (typeof options.min === "undefined") {\n      options.min = 0;\n    }\n\n    if (typeof options.max === "undefined") {\n      options.max = 99999;\n    }\n    if (typeof options.precision === "undefined") {\n      options.precision = 1;\n    }\n\n    // Make the range inclusive of the max value\n    var max = options.max;\n    if (max >= 0) {\n      max += options.precision;\n    }\n\n    var randomNumber = Math.floor(\n      mersenne.rand(max / options.precision, options.min / options.precision));\n    // Workaround problem in Float point arithmetics for e.g. 6681493 / 0.01\n    randomNumber = randomNumber / (1 / options.precision);\n\n    return randomNumber;\n\n  }': {
        item: [
          {
            type: 13,
            dataHash: 'payment',
            actions: [
              undefined,
              undefined
            ]
          },
          {
            type: 3,
            dataHash: 'modular',
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
        totalStakes: '14690',
        totalUnstakes: '37976',
        context: {
          genesisTx: 'Facilitator',
          renaissanceTx: 'Borders',
          genesisTime: '2019-03-05T22:33:02.703Z',
          renaissanceTime: '2019-03-05T22:33:02.703Z'
        }
      }
    },
    version: 'Manager',
    dataVersion: 'override',
    forgeAppHash: Uint8Array [
      216
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
    startDate: 'Shoes',
    endDate: 'Incredible Fresh Soap'
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 33,
  forgeStatistics: {
    numBlocks: [
      51335,
      22262
    ],
    numTxs: [
      94876,
      96973
    ],
    numStakes: [
      '50262',
      '16927'
    ],
    numValidators: [
      89589,
      41699
    ],
    numAccountMigrateTxs: [
      55819,
      18910
    ],
    numCreateAssetTxs: [
      55877,
      49384
    ],
    numConsensusUpgradeTxs: [
      72653,
      54206
    ],
    numDeclareTxs: [
      61641,
      88393
    ],
    numDeclareFileTxs: [
      95000,
      58979
    ],
    numExchangeTxs: [
      15000,
      23647
    ],
    numStakeTxs: [
      73419,
      8224
    ],
    numSysUpgradeTxs: [
      86016,
      79591
    ],
    numTransferTxs: [
      74008,
      63047
    ],
    numUpdateAssetTxs: [
      32092,
      9082
    ],
    numConsumeAssetTxs: [
      85331,
      70400
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
  code: 7,
  netInfo: {
    listening: undefined,
    listeners: [
      'invoice',
      'Toys'
    ],
    nPeers: 11973,
    peers: [
      {
        id: 'Lead',
        network: 'connecting',
        consensusVersion: 'alarm',
        moniker: 'virtual',
        ip: 'Kwanza',
        geoInfo: {
          city: 'blue',
          country: 'Money Market Account',
          latitude: 10015.89,
          longitude: 62933.85
        }
      },
      {
        id: 'Delaware',
        network: 'Bedfordshire',
        consensusVersion: 'Plastic',
        moniker: 'directional',
        ip: 'Persevering',
        geoInfo: {
          city: 'Refined Steel Ball',
          country: 'Orchestrator',
          latitude: 34669.53,
          longitude: 84018.64
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
  code: 10,
  info: {
    id: 'initiatives',
    network: 'neural',
    moniker: 'generate',
    consensusVersion: 'Fort',
    synced: undefined,
    appHash: 'f15a6c97409c8dca55330a1e06809b0771ca1ff8',
    blockHash: Uint8Array [
      21
    ],
    blockHeight: 33947,
    blockTime: '2019-03-05T22:33:02.705Z',
    address: 'cca231778dcd3525525ef1f075ab43636582a56e',
    votingPower: 85789,
    totalTxs: 66453,
    version: 'engineer',
    dataVersion: 'Legacy',
    forgeAppsVersion: {
      'function randomWord (type) {\n\n    var wordMethods = [\n    \'commerce.department\',\n    \'commerce.productName\',\n    \'commerce.productAdjective\',\n    \'commerce.productMaterial\',\n    \'commerce.product\',\n    \'commerce.color\',\n\n    \'company.catchPhraseAdjective\',\n    \'company.catchPhraseDescriptor\',\n    \'company.catchPhraseNoun\',\n    \'company.bsAdjective\',\n    \'company.bsBuzz\',\n    \'company.bsNoun\',\n    \'address.streetSuffix\',\n    \'address.county\',\n    \'address.country\',\n    \'address.state\',\n\n    \'finance.accountName\',\n    \'finance.transactionType\',\n    \'finance.currencyName\',\n\n    \'hacker.noun\',\n    \'hacker.verb\',\n    \'hacker.adjective\',\n    \'hacker.ingverb\',\n    \'hacker.abbreviation\',\n\n    \'name.jobDescriptor\',\n    \'name.jobArea\',\n    \'name.jobType\'];\n\n    // randomly pick from the many faker methods that can generate words\n    var randomWordMethod = faker.random.arrayElement(wordMethods);\n    return faker.fake(\'{{\' + randomWordMethod + \'}}\');\n\n  }': 'Intranet'
    },
    supportedTxs: [
      'index',
      'maroon'
    ],
    ip: 'Dominica',
    geoInfo: {
      city: 'wireless',
      country: 'Sri Lanka',
      latitude: 78344.99,
      longitude: 79272.79
    }
  }
}
});
```

### getStakeState

```js
const stream = client.getStakeState({
  address: '871b29988fcb60ba778548101272c1f8568a4acc',
  keys: [
    'Savings Account',
    'transmit'
  ],
  height: 49513
});

// output
{
  code: 30,
  state: {
    address: 'cf2453bfb58242dc790db7a930844d9576b1ecd7',
    from: '66855b48276907646bab355c14d89e0afcd5693f',
    to: '351b1dfec7e4abd12164964bec76238b68d9c25e',
    balance: '52359',
    message: 'maximize',
    context: {
      genesisTx: 'back up',
      renaissanceTx: 'connecting',
      genesisTime: '2019-03-05T22:33:02.706Z',
      renaissanceTime: '2019-03-05T22:33:02.706Z'
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
    cursor: 'Integrated',
    size: 32231,
    order: [
      {
        field: 'Legacy',
        type: 'Generic Soft Hat'
      },
      {
        field: 'generating',
        type: 'explicit'
      }
    ]
  },
  addressFilter: {
    sender: 'Beauty',
    receiver: 'SDR',
    direction: 0
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 31,
  page: {
    cursor: 'transmit',
    next: undefined,
    total: 63415
  },
  stakes: [
    {
      address: '86226ba5fedc3ebed1d569e26464350aeb93f1f7',
      balance: '47888',
      sender: 'Handmade Cotton Chicken',
      receiver: 'Expressway',
      genesisTime: 'Internal',
      renaissanceTime: 'Light',
      message: 'Frozen',
      type: 96593
    },
    {
      address: 'ff75824a8628416537a0295e4e9cd69be5aae688',
      balance: '58947',
      sender: 'maximize',
      receiver: 'virtual',
      genesisTime: 'Forest',
      renaissanceTime: 'Robust',
      message: 'blockchains',
      type: 62071
    }
  ]
}
});
```

### getTopAccounts

```js
const result = await client.getTopAccounts({
  paging: {
    cursor: 'parsing',
    size: 66753,
    order: [
      {
        field: 'Borders',
        type: 'Croatia'
      },
      {
        field: 'North Carolina',
        type: 'North Dakota'
      }
    ]
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 35,
  page: {
    cursor: 'Rufiyaa',
    next: undefined,
    total: 22194
  },
  accounts: [
    {
      address: '478d8d6cdd1e8be07a83c8bea630fb8e06f36b0e',
      balance: '68389',
      numAssets: 37455,
      numTxs: 55523,
      nonce: 14060,
      genesisTime: 'Wooden',
      renaissanceTime: 'deposit',
      moniker: 'Usability',
      migratedFrom: 'Computers',
      migratedTo: 'Buckinghamshire',
      totalReceivedStakes: '83747',
      totalStakes: '30579',
      totalUnstakes: '30291',
      recentNumTxs: [
        91745,
        4607
      ]
    },
    {
      address: '10bd4469c685e110d22aa067d783060bfa694f3d',
      balance: '38344',
      numAssets: 60400,
      numTxs: 88552,
      nonce: 34341,
      genesisTime: 'bypass',
      renaissanceTime: 'didactic',
      moniker: 'e-business',
      migratedFrom: 'infrastructure',
      migratedTo: 'SAS',
      totalReceivedStakes: '79559',
      totalStakes: '39099',
      totalUnstakes: '88759',
      recentNumTxs: [
        13872,
        40713
      ]
    }
  ]
}
});
```

### getTx

```js
const stream = client.getTx({
  hash: '40816477a5c63486b2ea6079cfe03b602d957ca8'
});

// output
{
  code: 7,
  info: {
    tx: {
      from: 'adb72041315e5e2fedcb07212f8971966f7626f3',
      nonce: 62726,
      signature: Uint8Array [
        131
      ],
      chainId: 'Bedfordshire',
      signatures: [
        {
          signer: 'extensible',
          signature: Uint8Array [
            37
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        {
          signer: 'back-end',
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
    height: 85374,
    index: 88940,
    hash: '2f6084a885b9eb14621b7c18b724ee775ec5ca26',
    tags: [
      {
        key: Uint8Array [
          94
        ],
        value: Uint8Array [
          105
        ]
      },
      {
        key: Uint8Array [
          119
        ],
        value: Uint8Array [
          246
        ]
      }
    ],
    code: 22
  }
}
```

### getUnconfirmedTxs

```js
const result = await client.getUnconfirmedTxs({
  limit: 6669
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 22,
  unconfirmedTxs: {
    nTxs: 32358,
    txs: [
      {
        from: '987d8ed6771580f9a7e5f36e5d5b0f0ac91d4035',
        nonce: 20168,
        signature: Uint8Array [
          17
        ],
        chainId: 'groupware',
        signatures: [
          {
            signer: 'Cambridgeshire',
            signature: Uint8Array [
              128
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'ivory',
            signature: Uint8Array [
              182
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
        from: '08d8129f1d416814714078f0c3765b402571d2c8',
        nonce: 32643,
        signature: Uint8Array [
          83
        ],
        chainId: 'Auto Loan Account',
        signatures: [
          {
            signer: 'deposit',
            signature: Uint8Array [
              161
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'innovative',
            signature: Uint8Array [
              117
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
  code: 26,
  validatorsInfo: {
    blockHeight: 42238,
    validators: [
      {
        address: '988c45b0350bb2618056a4a7de08041dd404d4f4',
        pubKey: {
          type: 'Granite',
          data: Uint8Array [
            25
          ]
        },
        votingPower: 89859,
        proposerPriority: 'Rustic',
        name: 'online'
      },
      {
        address: '6f231d4538ef0f970303ff3a89c51dc82e2f7be1',
        pubKey: {
          type: 'methodology',
          data: Uint8Array [
            126
          ]
        },
        votingPower: 56585,
        proposerPriority: 'Savings Account',
        name: '6th generation'
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
    cursor: 'withdrawal',
    size: 39140,
    order: [
      {
        field: 'Incredible Fresh Bacon',
        type: 'implement'
      },
      {
        field: 'invoice',
        type: 'visionary'
      }
    ]
  },
  address: '7015179a838f8fa93e3d3093fe64152b0226bb75'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 30,
  page: {
    cursor: 'Armenian Dram',
    next: undefined,
    total: 28671
  },
  transactions: [
    {
      hash: '92f7ccb8b7fe90addb2603bd9149a2457be70b53',
      sender: 'multi-byte',
      receiver: 'Plastic',
      time: 'Total',
      type: 'Bedfordshire',
      tx: {
        from: 'f3167ad03398df0979a286be063e9b0b94904f1c',
        nonce: 81828,
        signature: Uint8Array [
          192
        ],
        chainId: '1080p',
        signatures: [
          {
            signer: 'Shoes',
            signature: Uint8Array [
              149
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'paradigms',
            signature: Uint8Array [
              223
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
      hash: '50e565ad83affe80cdf919542d667488a020021d',
      sender: 'South Carolina',
      receiver: 'Response',
      time: 'Nebraska',
      type: 'connecting',
      tx: {
        from: '782c2eb1da7388f4e7b4b2d02812682ed5fc8cd9',
        nonce: 67681,
        signature: Uint8Array [
          45
        ],
        chainId: 'Bedfordshire',
        signatures: [
          {
            signer: 'Refined Plastic Chicken',
            signature: Uint8Array [
              115
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'synthesize',
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
    cursor: 'invoice',
    size: 35186,
    order: [
      {
        field: 'maroon',
        type: 'forecast'
      },
      {
        field: 'index',
        type: 'grey'
      }
    ]
  },
  timeFilter: {
    startDateTime: 'Investment Account',
    endDateTime: 'Turks and Caicos Islands'
  },
  addressFilter: {
    sender: 'vortals',
    receiver: 'Refined',
    direction: 0
  },
  typeFilter: {
    types: [
      'Democratic People\'s Republic of Korea',
      'directional'
    ]
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 32,
  page: {
    cursor: 'Refined',
    next: undefined,
    total: 53325
  },
  transactions: [
    {
      hash: 'e6c80c8fb3f59022331dd5aff4e38d66b680b51a',
      sender: 'invoice',
      receiver: 'olive',
      time: 'Views',
      type: 'overriding',
      tx: {
        from: 'ed894ff9f16d281e6d1bf29d9da9f6582deba397',
        nonce: 51491,
        signature: Uint8Array [
          247
        ],
        chainId: 'Surinam Dollar',
        signatures: [
          {
            signer: 'payment',
            signature: Uint8Array [
              134
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'Handmade',
            signature: Uint8Array [
              217
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
      hash: 'e3b2543e048f1eb186125147f89b575957a74407',
      sender: 'Auto Loan Account',
      receiver: 'Table',
      time: 'Representative',
      type: 'Views',
      tx: {
        from: '6dff0c6e3495ca9851ece9657d1cc904a344801a',
        nonce: 85371,
        signature: Uint8Array [
          32
        ],
        chainId: 'Tasty',
        signatures: [
          {
            signer: 'Creative',
            signature: Uint8Array [
              46
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'Marketing',
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
  code: 37,
  address: 'f5b64d4f4aa9a87de1250a7f89775bba81bb2a08'
}
```

### loadFile

```js
const stream = client.loadFile({
  hash: '234f53942f7a9ab67d68b8e31cc5fd185c997655'
});

// output
{
  code: 0,
  chunk: Uint8Array [
    63
  ]
}
```

### loadWallet

```js
const result = await client.loadWallet({
  address: 'e4dfc3f4ee3a472720ba6d359c5dc269ebde6c28',
  passphrase: 'Rubber'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 17,
  token: 'Object-based',
  wallet: {
    type: {
      pk: 1,
      hash: 6,
      address: 0,
      role: 4
    },
    sk: Uint8Array [
      125
    ],
    pk: Uint8Array [
      169
    ],
    address: '650e77d4563c999e35eceabfafad7664b1c459c2'
  }
}
});
```

### multisig

```js
const result = await client.multisig({
  tx: {
    from: 'e5d583d75a688afcfe4f0eddce67a87560cf694b',
    nonce: 13446,
    signature: Uint8Array [
      24
    ],
    chainId: 'Concrete',
    signatures: [
      {
        signer: 'Configuration',
        signature: Uint8Array [
          224
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'e-markets',
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
  data: {
    type: 'fg:x:random_data',
    value: 'ABCD 1234'
  },
  wallet: {
    type: {
      pk: 1,
      hash: 0,
      address: 1,
      role: 3
    },
    sk: Uint8Array [
      186
    ],
    pk: Uint8Array [
      22
    ],
    address: '1ba4888936407ee44a898d7917093ce9bd2589a5'
  },
  token: 'circuit'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 40,
  tx: {
    from: 'ec9bbab9da406b86683d4174483639740ddd03ea',
    nonce: 75184,
    signature: Uint8Array [
      210
    ],
    chainId: 'optimizing',
    signatures: [
      {
        signer: 'auxiliary',
        signature: Uint8Array [
          187
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'transmitting',
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
  }
}
});
```

### pinFile

```js
const result = await client.pinFile({
  hash: '6e006195dfacd00f54239ca1eb9cd8c75f4f5611'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 26
}
});
```

### process

```js
const stream = client.process({
  verifyTx: {
    tx: {
      from: '4ac07f7adc56822719cb18542b6ff824e2c922ee',
      nonce: 50768,
      signature: Uint8Array [
        47
      ],
      chainId: 'RAM',
      signatures: [
        {
          signer: 'Markets',
          signature: Uint8Array [
            127
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        {
          signer: 'Cheese',
          signature: Uint8Array [
            186
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
        balance: '62096',
        nonce: 51355,
        numTxs: 59411,
        address: 'e439c08145f3ed4ed9067f01e7fc6d85b5326fe7',
        pk: Uint8Array [
          37
        ],
        type: {
          pk: 1,
          hash: 14,
          address: 1,
          role: 1
        },
        moniker: 'Pines',
        context: {
          genesisTx: 'hub',
          renaissanceTx: 'salmon',
          genesisTime: '2019-03-05T22:33:02.714Z',
          renaissanceTime: '2019-03-05T22:33:02.714Z'
        },
        issuer: 'Direct',
        migratedTo: [
          'circuit',
          'Baht'
        ],
        migratedFrom: [
          'FTP',
          'withdrawal'
        ],
        numAssets: 2679,
        stake: {
          totalStakes: '63844',
          totalUnstakes: '96500',
          totalReceivedStakes: '87430',
          recentStakes: {
            items: [
              Uint8Array [
                253
              ],
              Uint8Array [
                191
              ]
            ],
            typeUrl: 'Configurable',
            maxItems: 45036,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                233
              ],
              Uint8Array [
                198
              ]
            ],
            typeUrl: 'installation',
            maxItems: 15359,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              29
            ],
            Uint8Array [
              148
            ]
          ],
          typeUrl: 'bus',
          maxItems: 48289,
          circular: undefined,
          fifo: undefined
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        balance: '43992',
        nonce: 32872,
        numTxs: 63457,
        address: '00fb5f03a3c8b43c38fa29416d9e7e021bc81bef',
        pk: Uint8Array [
          198
        ],
        type: {
          pk: 1,
          hash: 7,
          address: 0,
          role: 8
        },
        moniker: 'generating',
        context: {
          genesisTx: 'partnerships',
          renaissanceTx: 'Home Loan Account',
          genesisTime: '2019-03-05T22:33:02.714Z',
          renaissanceTime: '2019-03-05T22:33:02.714Z'
        },
        issuer: 'Intelligent',
        migratedTo: [
          'e-tailers',
          'Home Loan Account'
        ],
        migratedFrom: [
          'productize',
          'ubiquitous'
        ],
        numAssets: 89889,
        stake: {
          totalStakes: '70784',
          totalUnstakes: '67676',
          totalReceivedStakes: '78410',
          recentStakes: {
            items: [
              Uint8Array [
                136
              ],
              Uint8Array [
                218
              ]
            ],
            typeUrl: 'transparent',
            maxItems: 31718,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                166
              ],
              Uint8Array [
                4
              ]
            ],
            typeUrl: 'Checking Account',
            maxItems: 13612,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              38
            ],
            Uint8Array [
              238
            ]
          ],
          typeUrl: 'seize',
          maxItems: 1937,
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
        address: '7087bef280ff4cab0ce8938c6846f805388cb04e',
        owner: 'payment',
        moniker: 'Games',
        readonly: undefined,
        transferrable: undefined,
        ttl: 91378,
        consumedTime: '2019-03-05T22:33:02.714Z',
        issuer: 'Bedfordshire',
        stake: {
          totalStakes: '31466',
          totalUnstakes: '78842',
          totalReceivedStakes: '75262',
          recentStakes: {
            items: [
              Uint8Array [
                215
              ],
              Uint8Array [
                180
              ]
            ],
            typeUrl: 'array',
            maxItems: 81962,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                96
              ],
              Uint8Array [
                137
              ]
            ],
            typeUrl: 'synthesizing',
            maxItems: 5394,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Representative',
          renaissanceTx: 'plum',
          genesisTime: '2019-03-05T22:33:02.715Z',
          renaissanceTime: '2019-03-05T22:33:02.715Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: '242170099bde2cdbce97c0968db0e3f7d40efa86',
        owner: 'challenge',
        moniker: 'Hat',
        readonly: undefined,
        transferrable: undefined,
        ttl: 91934,
        consumedTime: '2019-03-05T22:33:02.715Z',
        issuer: 'Brand',
        stake: {
          totalStakes: '16974',
          totalUnstakes: '56427',
          totalReceivedStakes: '2053',
          recentStakes: {
            items: [
              Uint8Array [
                122
              ],
              Uint8Array [
                133
              ]
            ],
            typeUrl: 'parallelism',
            maxItems: 63345,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                128
              ],
              Uint8Array [
                153
              ]
            ],
            typeUrl: 'Berkshire',
            maxItems: 94460,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Fish',
          renaissanceTx: 'evolve',
          genesisTime: '2019-03-05T22:33:02.715Z',
          renaissanceTime: '2019-03-05T22:33:02.715Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    stakes: [
      {
        address: 'd3878e34082acf706edc23896b8a2e59232b95e1',
        from: 'f321b5b6b2d9de8cc2e0578675eadc2a7764325b',
        to: '9703b0ccf73603d83a312b38bc7e97943904c211',
        balance: '81579',
        message: 'Metal',
        context: {
          genesisTx: 'eyeballs',
          renaissanceTx: 'navigating',
          genesisTime: '2019-03-05T22:33:02.715Z',
          renaissanceTime: '2019-03-05T22:33:02.715Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: '602f867f34ae0425502a14e7f95e59c7bb9c6819',
        from: '4e9a618b7c2ede943df0a7ab368599b23b9a8788',
        to: '35b99cf18ee8cdb1ef8096e53e5aee8595490214',
        balance: '12813',
        message: 'Louisiana',
        context: {
          genesisTx: 'Chair',
          renaissanceTx: 'Indiana',
          genesisTime: '2019-03-05T22:33:02.715Z',
          renaissanceTime: '2019-03-05T22:33:02.715Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    context: {
      txHash: '7c21f559547ad140b68d8975b17dc515782deece',
      blockHeight: 66152,
      blockTime: '2019-03-05T22:33:02.716Z',
      totalTxs: 42467,
      txStatistics: {
        numAccountMigrateTxs: 9154,
        numCreateAssetTxs: 82652,
        numConsensusUpgradeTxs: 55795,
        numDeclareTxs: 65753,
        numDeclareFileTxs: 56644,
        numExchangeTxs: 19462,
        numStakeTxs: 16840,
        numSysUpgradeTxs: 75944,
        numTransferTxs: 52285,
        numUpdateAssetTxs: 73809,
        numConsumeAssetTxs: 2371
      },
      txIndex: 97826,
      lastBlockTime: '2019-03-05T22:33:02.716Z'
    },
    appState: {
      address: 'd2c040b836e7668093b677fc82cb9b95f921d734',
      consensus: {
        maxBytes: 34034,
        maxGas: 51268,
        maxValidators: 24912,
        maxCandidates: 91593,
        pubKeyTypes: [
          'enterprise',
          'withdrawal'
        ],
        validators: [
          {
            address: 'eb1b5373ac84460317bc21b638748a41cea09577',
            power: 32817
          },
          {
            address: 'f71dca7cdf44404464c837ddf95b191f20e48265',
            power: 85323
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
              dataHash: 'Martinique',
              actions: [
                undefined,
                undefined
              ]
            },
            {
              type: 0,
              dataHash: 'transition',
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
          totalStakes: '77890',
          totalUnstakes: '60140',
          context: {
            genesisTx: 'Avon',
            renaissanceTx: 'Cheese',
            genesisTime: '2019-03-05T22:33:02.716Z',
            renaissanceTime: '2019-03-05T22:33:02.716Z'
          }
        }
      },
      version: 'Armenian Dram',
      dataVersion: 'grey',
      forgeAppHash: Uint8Array [
        202
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
    code: 10
  }
}
```

### processOne

```js
const result = await client.processOne({
  verifyTx: {
    tx: {
      from: '07ee727ef9ed63da1eefa6def18f84a47951a164',
      nonce: 72469,
      signature: Uint8Array [
        226
      ],
      chainId: 'Program',
      signatures: [
        {
          signer: 'Checking Account',
          signature: Uint8Array [
            156
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        {
          signer: 'transform',
          signature: Uint8Array [
            188
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
        balance: '59166',
        nonce: 29054,
        numTxs: 41958,
        address: '569f15f8e3effabedb3cd82ca96231a8eda1bedf',
        pk: Uint8Array [
          176
        ],
        type: {
          pk: 0,
          hash: 13,
          address: 0,
          role: 5
        },
        moniker: 'Fish',
        context: {
          genesisTx: 'Granite',
          renaissanceTx: 'Cambridgeshire',
          genesisTime: '2019-03-05T22:33:02.717Z',
          renaissanceTime: '2019-03-05T22:33:02.717Z'
        },
        issuer: 'Rubber',
        migratedTo: [
          'Gloves',
          'Avon'
        ],
        migratedFrom: [
          'Kids',
          'Licensed'
        ],
        numAssets: 4757,
        stake: {
          totalStakes: '28810',
          totalUnstakes: '64027',
          totalReceivedStakes: '90031',
          recentStakes: {
            items: [
              Uint8Array [
                71
              ],
              Uint8Array [
                62
              ]
            ],
            typeUrl: 'grey',
            maxItems: 37350,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                174
              ],
              Uint8Array [
                110
              ]
            ],
            typeUrl: 'architect',
            maxItems: 81028,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              84
            ],
            Uint8Array [
              98
            ]
          ],
          typeUrl: 'Taka',
          maxItems: 10223,
          circular: undefined,
          fifo: undefined
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        balance: '36520',
        nonce: 87114,
        numTxs: 7443,
        address: '7a2060208a005ec445aa617fb7fb93d84693664d',
        pk: Uint8Array [
          136
        ],
        type: {
          pk: 1,
          hash: 0,
          address: 1,
          role: 2
        },
        moniker: 'transform',
        context: {
          genesisTx: 'Savings Account',
          renaissanceTx: 'blue',
          genesisTime: '2019-03-05T22:33:02.717Z',
          renaissanceTime: '2019-03-05T22:33:02.717Z'
        },
        issuer: 'Personal Loan Account',
        migratedTo: [
          'deposit',
          'Internal'
        ],
        migratedFrom: [
          'Sports',
          'Producer'
        ],
        numAssets: 52837,
        stake: {
          totalStakes: '71643',
          totalUnstakes: '66895',
          totalReceivedStakes: '78408',
          recentStakes: {
            items: [
              Uint8Array [
                134
              ],
              Uint8Array [
                119
              ]
            ],
            typeUrl: 'Intelligent',
            maxItems: 81962,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                224
              ],
              Uint8Array [
                64
              ]
            ],
            typeUrl: 'Pound Sterling',
            maxItems: 51877,
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
              233
            ]
          ],
          typeUrl: 'Iraq',
          maxItems: 36726,
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
        address: 'e059998a89a0e11577dd51415ce43b29f751684f',
        owner: 'Implemented',
        moniker: 'Accounts',
        readonly: undefined,
        transferrable: undefined,
        ttl: 55031,
        consumedTime: '2019-03-05T22:33:02.718Z',
        issuer: 'Kids',
        stake: {
          totalStakes: '23280',
          totalUnstakes: '35152',
          totalReceivedStakes: '80651',
          recentStakes: {
            items: [
              Uint8Array [
                227
              ],
              Uint8Array [
                198
              ]
            ],
            typeUrl: 'Indiana',
            maxItems: 45946,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                191
              ],
              Uint8Array [
                100
              ]
            ],
            typeUrl: 'Wooden',
            maxItems: 71013,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Berkshire',
          renaissanceTx: 'Money Market Account',
          genesisTime: '2019-03-05T22:33:02.718Z',
          renaissanceTime: '2019-03-05T22:33:02.718Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: '4e3e267a071d7982a3476e2a70502930c213446f',
        owner: 'microchip',
        moniker: 'lavender',
        readonly: undefined,
        transferrable: undefined,
        ttl: 1654,
        consumedTime: '2019-03-05T22:33:02.718Z',
        issuer: 'Tools',
        stake: {
          totalStakes: '9464',
          totalUnstakes: '71006',
          totalReceivedStakes: '43528',
          recentStakes: {
            items: [
              Uint8Array [
                186
              ],
              Uint8Array [
                22
              ]
            ],
            typeUrl: 'dedicated',
            maxItems: 71767,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                45
              ],
              Uint8Array [
                131
              ]
            ],
            typeUrl: 'SAS',
            maxItems: 72421,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Generic',
          renaissanceTx: 'Credit Card Account',
          genesisTime: '2019-03-05T22:33:02.718Z',
          renaissanceTime: '2019-03-05T22:33:02.718Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    stakes: [
      {
        address: 'bc34055dbd13590e6d78549e387e1c9a7140c93e',
        from: 'b1b2a5efaf445ea1643bfa4c94ec48f7959813c2',
        to: '81f1ffcda0d7a802630ad49f594edc80112b9ff9',
        balance: '86129',
        message: 'Montana',
        context: {
          genesisTx: 'Books',
          renaissanceTx: 'web-enabled',
          genesisTime: '2019-03-05T22:33:02.718Z',
          renaissanceTime: '2019-03-05T22:33:02.718Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: 'dd399a81f51c6901f15dc6dc406b3b8046cf65bc',
        from: '23e2400a7843d585d7b0a61d108d004583906763',
        to: 'a00083f0ed50d298588d0d57e94aed7fb6da191a',
        balance: '84824',
        message: 'Concrete',
        context: {
          genesisTx: 'Cheese',
          renaissanceTx: 'China',
          genesisTime: '2019-03-05T22:33:02.718Z',
          renaissanceTime: '2019-03-05T22:33:02.718Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    context: {
      txHash: '83b091423416291f58236772b690cb9a55604e05',
      blockHeight: 38687,
      blockTime: '2019-03-05T22:33:02.718Z',
      totalTxs: 97970,
      txStatistics: {
        numAccountMigrateTxs: 2101,
        numCreateAssetTxs: 46277,
        numConsensusUpgradeTxs: 25435,
        numDeclareTxs: 57449,
        numDeclareFileTxs: 86395,
        numExchangeTxs: 65036,
        numStakeTxs: 7455,
        numSysUpgradeTxs: 27755,
        numTransferTxs: 50868,
        numUpdateAssetTxs: 9929,
        numConsumeAssetTxs: 5423
      },
      txIndex: 75047,
      lastBlockTime: '2019-03-05T22:33:02.718Z'
    },
    appState: {
      address: '6f7cf3cf58c1c3346362cf3f037561b1c8e0eb5f',
      consensus: {
        maxBytes: 1310,
        maxGas: 18397,
        maxValidators: 28964,
        maxCandidates: 703,
        pubKeyTypes: [
          'open-source',
          'Bedfordshire'
        ],
        validators: [
          {
            address: '42b333bf1f09b0239926fc60fbb6ae1c8d83cc64',
            power: 99920
          },
          {
            address: 'e0b611218b4831ab5fb33255fdc8f946fae68acb',
            power: 70047
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
              dataHash: 'olive',
              actions: [
                undefined,
                undefined
              ]
            },
            {
              type: 14,
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
          totalStakes: '93657',
          totalUnstakes: '60404',
          context: {
            genesisTx: 'Metal',
            renaissanceTx: 'Springs',
            genesisTime: '2019-03-05T22:33:02.718Z',
            renaissanceTime: '2019-03-05T22:33:02.718Z'
          }
        }
      },
      version: 'programming',
      dataVersion: 'teal',
      forgeAppHash: Uint8Array [
        159
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
    code: 26
  }
}
});
```

### recoverWallet

```js
const result = await client.recoverWallet({
  data: Uint8Array [
    52
  ],
  type: {
    pk: 0,
    hash: 0,
    address: 1,
    role: 0
  },
  passphrase: 'white',
  moniker: 'Row'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 0,
  token: 'synthesize',
  wallet: {
    type: {
      pk: 1,
      hash: 0,
      address: 1,
      role: 3
    },
    sk: Uint8Array [
      242
    ],
    pk: Uint8Array [
      229
    ],
    address: '4fe982bcc6e9dd50e3457ddd2de30996661725a6'
  }
}
});
```

### removeWallet

```js
const result = await client.removeWallet({
  address: 'e81c5262efce93afba19248cbc8a208f060c286a'
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
  key: 'Grocery',
  value: 'Money Market Account'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 38,
  txs: [
    {
      tx: {
        from: '65ad4c75bfdca8ef122421b2f98d697171ff3b28',
        nonce: 52644,
        signature: Uint8Array [
          214
        ],
        chainId: 'flexibility',
        signatures: [
          {
            signer: 'Euro',
            signature: Uint8Array [
              119
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'Buckinghamshire',
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
      height: 25593,
      index: 31150,
      hash: '07ad2a9fb4b090a455dc865d0de569d4a10a06fb',
      tags: [
        {
          key: Uint8Array [
            1
          ],
          value: Uint8Array [
            88
          ]
        },
        {
          key: Uint8Array [
            190
          ],
          value: Uint8Array [
            234
          ]
        }
      ],
      code: 500
    },
    {
      tx: {
        from: 'e20195c193d9c1e43cbd31a0c2bdc8f46aa114ac',
        nonce: 35991,
        signature: Uint8Array [
          62
        ],
        chainId: 'Lead',
        signatures: [
          {
            signer: 'Iowa',
            signature: Uint8Array [
              91
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'Shirt',
            signature: Uint8Array [
              23
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
      height: 65821,
      index: 45738,
      hash: '452a7a4bc6b2a75989c2e41a44803e7a3b805a6c',
      tags: [
        {
          key: Uint8Array [
            171
          ],
          value: Uint8Array [
            194
          ]
        },
        {
          key: Uint8Array [
            63
          ],
          value: Uint8Array [
            215
          ]
        }
      ],
      code: 35
    }
  ]
}
});
```

### sendTx

```js
const result = await client.sendTx({
  tx: {
    from: 'f4f14d0320b23e23f3c5f2221c1dfced6e18d96a',
    nonce: 75618,
    signature: Uint8Array [
      240
    ],
    chainId: 'Auto Loan Account',
    signatures: [
      {
        signer: 'Jewelery',
        signature: Uint8Array [
          194
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'Auto Loan Account',
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
  wallet: {
    type: {
      pk: 0,
      hash: 14,
      address: 1,
      role: 7
    },
    sk: Uint8Array [
      137
    ],
    pk: Uint8Array [
      138
    ],
    address: 'f23269e6b46257a086ab22b27dd416c131ad7d7b'
  },
  token: 'Jordan',
  commit: undefined
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 4,
  hash: 'a1ffc396c40528bd43eafc0b372b114833a66755'
}
});
```

### signData

```js
const result = await client.signData({
  data: Uint8Array [
    91
  ],
  wallet: {
    type: {
      pk: 0,
      hash: 13,
      address: 1,
      role: 1
    },
    sk: Uint8Array [
      167
    ],
    pk: Uint8Array [
      222
    ],
    address: 'cd36de9e161cf97b50586106cd34bd1955b3d588'
  },
  token: 'integrated'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 20,
  signature: Uint8Array [
    85
  ]
}
});
```

### storeFile

```js
const result = await client.storeFile({
  chunk: Uint8Array [
    19
  ]
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 20,
  hash: 'ffba79686923f2c24731f805d03676bfc3cf8f9d'
}
});
```

### subscribe

```js
const stream = client.subscribe({
  type: 5,
  filter: 'driver'
});

// output
{
  topic: 'orchestration'
}
```

### unsubscribe

```js
const result = await client.unsubscribe({
  topic: 'Bahamas'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 40
}
});
```


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |
