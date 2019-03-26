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
  from: '40f8bfae2bc4a610ca6930b8833c125ece41157e',
  nonce: 81025,
  wallet: {
    type: {
      pk: 0,
      hash: 7,
      address: 0,
      role: 7
    },
    sk: Uint8Array [
      53
    ],
    pk: Uint8Array [
      58
    ],
    address: 'd5ef56d43ba3b2cf1abed1470a81516a0f3ba7a8'
  },
  token: 'Incredible Cotton Hat'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 17,
  tx: {
    from: '197be47b8d597f9b064f12cdab33b4ed9d0c2c05',
    nonce: 30522,
    chainId: '1080p',
    pk: Uint8Array [
      5
    ],
    signature: Uint8Array [
      189
    ],
    signatures: [
      {
        signer: 'Shirt',
        pk: Uint8Array [
          214
        ],
        signature: Uint8Array [
          63
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'Handmade',
        pk: Uint8Array [
          36
        ],
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
  }
}
});
```

### createWallet

```js
const result = await client.createWallet({
  passphrase: 'Designer',
  type: {
    pk: 0,
    hash: 1,
    address: 0,
    role: 3
  },
  moniker: 'Computers'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 7,
  token: 'hacking',
  wallet: {
    type: {
      pk: 1,
      hash: 13,
      address: 1,
      role: 7
    },
    sk: Uint8Array [
      206
    ],
    pk: Uint8Array [
      163
    ],
    address: 'fc0e9d45aaf189e6191890a468de1f1d7c52cd24'
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
  code: 22,
  wallet: {
    type: {
      pk: 1,
      hash: 2,
      address: 1,
      role: 8
    },
    sk: Uint8Array [
      40
    ],
    pk: Uint8Array [
      40
    ],
    address: '6349929339dd0b123ad12065f00d97385c973d5d'
  }
}
});
```

### getAccountState

```js
const stream = client.getAccountState({
  address: 'a93d9348267620041ee7eb6d2428930eb6ba5b36',
  keys: [
    'mobile',
    'program'
  ],
  height: 35102
});

// output
{
  code: 16,
  state: {
    balance: '13365',
    nonce: 47520,
    numTxs: 51690,
    address: '5411960258f09b3b29cfcb98c830724b17bab1de',
    pk: Uint8Array [
      181
    ],
    type: {
      pk: 1,
      hash: 14,
      address: 1,
      role: 7
    },
    moniker: 'benchmark',
    context: {
      genesisTx: 'Plastic',
      renaissanceTx: 'paradigms',
      genesisTime: '2019-03-26T10:52:40.087Z',
      renaissanceTime: '2019-03-26T10:52:40.087Z'
    },
    issuer: 'Public-key',
    migratedTo: [
      'CSS',
      'ivory'
    ],
    migratedFrom: [
      'invoice',
      '6th generation'
    ],
    numAssets: 37061,
    stake: {
      totalStakes: '90465',
      totalUnstakes: '77927',
      totalReceivedStakes: '56077',
      recentStakes: {
        items: [
          Uint8Array [
            148
          ],
          Uint8Array [
            35
          ]
        ],
        typeUrl: 'Som',
        maxItems: 16180,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [
            222
          ],
          Uint8Array [
            194
          ]
        ],
        typeUrl: 'Investment Account',
        maxItems: 2651,
        circular: undefined,
        fifo: undefined
      }
    },
    pinnedFiles: {
      items: [
        Uint8Array [
          127
        ],
        Uint8Array [
          149
        ]
      ],
      typeUrl: 'Fresh',
      maxItems: 23314,
      circular: undefined,
      fifo: undefined
    },
    poke: {
      dailyLimit: '49804',
      leftover: '52486',
      amount: '77995'
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
  senderAddress: 'Computers',
  itx: {
    moniker: 'Throughway',
    data: {
      type: 'fg:x:random_data',
      value: 'ABCD 1234'
    },
    readonly: undefined,
    transferrable: undefined,
    ttl: 12626,
    parent: 'archive'
  },
  walletType: {
    pk: 1,
    hash: 6,
    address: 1,
    role: 5
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 37,
  assetAddress: 'synthesizing'
}
});
```

### getAssetState

```js
const stream = client.getAssetState({
  address: 'ae6f1009e4a06bb5f862c70014c17c395159353c',
  keys: [
    'Forward',
    'Monitored'
  ],
  height: 31348
});

// output
{
  code: 9,
  state: {
    address: '97f9ae84705e8704e35e0db1d331d64274f6b9fd',
    owner: 'COM',
    moniker: 'Personal Loan Account',
    readonly: undefined,
    transferrable: undefined,
    ttl: 58889,
    consumedTime: '2019-03-26T10:52:40.089Z',
    issuer: 'SAS',
    stake: {
      totalStakes: '64744',
      totalUnstakes: '48727',
      totalReceivedStakes: '19392',
      recentStakes: {
        items: [
          Uint8Array [
            47
          ],
          Uint8Array [
            111
          ]
        ],
        typeUrl: 'Gibraltar Pound',
        maxItems: 18352,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [
            124
          ],
          Uint8Array [
            119
          ]
        ],
        typeUrl: 'Ergonomic',
        maxItems: 60091,
        circular: undefined,
        fifo: undefined
      }
    },
    context: {
      genesisTx: 'Licensed Granite Car',
      renaissanceTx: 'Towels',
      genesisTime: '2019-03-26T10:52:40.089Z',
      renaissanceTime: '2019-03-26T10:52:40.089Z'
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
    cursor: 'Palladium',
    size: 26014,
    order: [
      {
        field: 'port',
        type: 'revolutionary'
      },
      {
        field: 'contextually-based',
        type: 'deliverables'
      }
    ]
  },
  ownerAddress: 'Avon'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 22,
  page: {
    cursor: 'yellow',
    next: undefined,
    total: 7255
  },
  assets: [
    {
      address: 'b91af8902ac181aa59f6674ce1e9b3113c94eb84',
      owner: 'Bedfordshire',
      genesisTime: 'Money Market Account',
      renaissanceTime: 'invoice',
      moniker: 'withdrawal',
      readonly: undefined
    },
    {
      address: '1850a5226344692ccf634c2bc314d92b61ff67ff',
      owner: 'Credit Card Account',
      genesisTime: 'Money Market Account',
      renaissanceTime: 'mobile',
      moniker: 'Slovenia',
      readonly: undefined
    }
  ]
}
});
```

### getBlock

```js
const stream = client.getBlock({
  height: 41215
});

// output
{
  code: 36,
  block: {
    height: 60736,
    numTxs: 66839,
    time: '2019-03-26T10:52:40.090Z',
    appHash: 'bfc4f057ccedd07468500a55686acb51ae71a0b6',
    proposer: '6968b047f30ccbc10a4a0b3e60ce6b2a5c1006b6',
    txs: [
      {
        tx: {
          from: 'e5d5fd605bf82429faf973a7fe48199413e86d2d',
          nonce: 48100,
          chainId: 'core',
          pk: Uint8Array [
            8
          ],
          signature: Uint8Array [
            246
          ],
          signatures: [
            {
              signer: 'Bedfordshire',
              pk: Uint8Array [
                114
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
              signer: 'multi-byte',
              pk: Uint8Array [
                186
              ],
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
        height: 12984,
        index: 45908,
        hash: '1f341bc8231670103c372909c350049972703fb0',
        tags: [
          {
            key: Uint8Array [
              109
            ],
            value: Uint8Array [
              172
            ]
          },
          {
            key: Uint8Array [
              174
            ],
            value: Uint8Array [
              74
            ]
          }
        ],
        code: 0,
        time: '2019-03-26T10:52:40.091Z',
        createAsset: {
          asset: 'Human'
        },
        accountMigrate: {
          address: '9ad3209eb9028fe1356cfadec89369fd62886907'
        }
      },
      {
        tx: {
          from: '06ddc4ab463908fcab1f30552c45cfe6c190075e',
          nonce: 33995,
          chainId: 'Berkshire',
          pk: Uint8Array [
            191
          ],
          signature: Uint8Array [
            156
          ],
          signatures: [
            {
              signer: 'Borders',
              pk: Uint8Array [
                251
              ],
              signature: Uint8Array [
                250
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'invoice',
              pk: Uint8Array [
                50
              ],
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
        },
        height: 17707,
        index: 12380,
        hash: '41529e90073c1cd7675c184e9571b4930f7e0dda',
        tags: [
          {
            key: Uint8Array [
              223
            ],
            value: Uint8Array [
              129
            ]
          },
          {
            key: Uint8Array [
              102
            ],
            value: Uint8Array [
              156
            ]
          }
        ],
        code: 40,
        time: '2019-03-26T10:52:40.091Z',
        createAsset: {
          asset: 'quantify'
        },
        accountMigrate: {
          address: '0f0e1ad5a0c8534e9808b150a88de50e8d837ee1'
        }
      }
    ],
    totalTxs: 66142,
    invalidTxs: [
      {
        tx: {
          from: '0bd811ed359e87a7295064cd2f88b3c28eecf698',
          nonce: 6782,
          chainId: 'Lebanon',
          pk: Uint8Array [
            203
          ],
          signature: Uint8Array [
            220
          ],
          signatures: [
            {
              signer: 'Granite',
              pk: Uint8Array [
                140
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
              signer: 'Analyst',
              pk: Uint8Array [
                175
              ],
              signature: Uint8Array [
                83
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
        height: 85973,
        index: 99426,
        hash: '8d12e380f33eb7155eaae12e49c874036a407a2d',
        tags: [
          {
            key: Uint8Array [
              135
            ],
            value: Uint8Array [
              199
            ]
          },
          {
            key: Uint8Array [
              219
            ],
            value: Uint8Array [
              253
            ]
          }
        ],
        code: 37,
        time: '2019-03-26T10:52:40.091Z',
        createAsset: {
          asset: 'Plastic'
        },
        accountMigrate: {
          address: 'ec44e3a09411a8c40218805a6d8b03075b40e430'
        }
      },
      {
        tx: {
          from: '71baccb014e84b97c510225b92e368112de4fb0d',
          nonce: 23008,
          chainId: 'Licensed Rubber Mouse',
          pk: Uint8Array [
            97
          ],
          signature: Uint8Array [
            232
          ],
          signatures: [
            {
              signer: 'SDD',
              pk: Uint8Array [
                7
              ],
              signature: Uint8Array [
                144
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'orange',
              pk: Uint8Array [
                92
              ],
              signature: Uint8Array [
                230
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
        height: 53580,
        index: 76143,
        hash: '2603f12d8026d64d34071b030a6a632f45a0fc46',
        tags: [
          {
            key: Uint8Array [
              202
            ],
            value: Uint8Array [
              76
            ]
          },
          {
            key: Uint8Array [
              33
            ],
            value: Uint8Array [
              200
            ]
          }
        ],
        code: 0,
        time: '2019-03-26T10:52:40.092Z',
        createAsset: {
          asset: 'Square'
        },
        accountMigrate: {
          address: '07f52f5caeb70dfc2786586140ae0c9bed7c04da'
        }
      }
    ],
    txsHashes: [
      'program',
      'AI'
    ],
    invalidTxsHashes: [
      'silver',
      'Lodge'
    ],
    consensusHash: Uint8Array [
      8
    ],
    dataHash: Uint8Array [
      98
    ],
    evidenceHash: Uint8Array [
      125
    ],
    lastCommitHash: Uint8Array [
      212
    ],
    lastResultsHash: Uint8Array [
      45
    ],
    nextValidatorsHash: Uint8Array [
      215
    ],
    validatorsHash: Uint8Array [
      172
    ],
    version: {
      Block: 60767,
      App: 16592
    },
    lastBlockId: {
      hash: 'd75035d251c9d41a192423282b1268fb0cfac5df',
      partsHeader: undefined
    }
  }
}
```

### getBlocks

```js
const result = await client.getBlocks({
  paging: {
    cursor: 'Venezuela',
    size: 17769,
    order: [
      {
        field: 'bypassing',
        type: 'Associate'
      },
      {
        field: 'interface',
        type: 'Tennessee'
      }
    ]
  },
  minHeight: 18615,
  maxHeight: 95271,
  emptyExcluded: undefined
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 33,
  page: {
    cursor: 'bus',
    next: undefined,
    total: 44309
  },
  blocks: [
    {
      height: 26967,
      numTxs: 49086,
      time: '2019-03-26T10:52:40.093Z',
      appHash: '8a20adbed1829b1a2c751fb3d01e431568b5d896',
      proposer: '751651548cb2bd326d590ef71aa2f9494614eef3',
      txs: [
        {
          tx: {
            from: 'e0454dca8fefcff504798073a90e316d46b9e6a6',
            nonce: 48783,
            chainId: 'Investor',
            pk: Uint8Array [
              161
            ],
            signature: Uint8Array [
              234
            ],
            signatures: [
              {
                signer: 'instruction set',
                pk: Uint8Array [
                  236
                ],
                signature: Uint8Array [
                  238
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Rand Namibia Dollar',
                pk: Uint8Array [
                  181
                ],
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
          height: 51167,
          index: 85669,
          hash: '6906842ef046268ae3d0330360bf09de65ab860e',
          tags: [
            {
              key: Uint8Array [
                175
              ],
              value: Uint8Array [
                101
              ]
            },
            {
              key: Uint8Array [
                41
              ],
              value: Uint8Array [
                157
              ]
            }
          ],
          code: 39,
          time: '2019-03-26T10:52:40.093Z',
          createAsset: {
            asset: 'matrices'
          },
          accountMigrate: {
            address: 'daa2cac19319d325220bb77cc0fc5176333dc5f8'
          }
        },
        {
          tx: {
            from: 'aff5bf89f345c7050467e0b8d4e8507d4dec3760',
            nonce: 80764,
            chainId: 'reboot',
            pk: Uint8Array [
              85
            ],
            signature: Uint8Array [
              189
            ],
            signatures: [
              {
                signer: 'Generic',
                pk: Uint8Array [
                  211
                ],
                signature: Uint8Array [
                  98
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Chicken',
                pk: Uint8Array [
                  81
                ],
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
          height: 38702,
          index: 24825,
          hash: '129cddd31f47e6f1a7e25a3be7d79025e37ab1f8',
          tags: [
            {
              key: Uint8Array [
                129
              ],
              value: Uint8Array [
                67
              ]
            },
            {
              key: Uint8Array [
                74
              ],
              value: Uint8Array [
                182
              ]
            }
          ],
          code: 8,
          time: '2019-03-26T10:52:40.094Z',
          createAsset: {
            asset: 'Manor'
          },
          accountMigrate: {
            address: '396d32795a40375c434c917cb70b6781bfbfda4b'
          }
        }
      ],
      totalTxs: 28283,
      invalidTxs: [
        {
          tx: {
            from: '135cd75a194ef3af6fed9f4da4bed02e290a8989',
            nonce: 69508,
            chainId: 'Riel',
            pk: Uint8Array [
              63
            ],
            signature: Uint8Array [
              249
            ],
            signatures: [
              {
                signer: 'Washington',
                pk: Uint8Array [
                  222
                ],
                signature: Uint8Array [
                  72
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Administrator',
                pk: Uint8Array [
                  217
                ],
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
          height: 95576,
          index: 11260,
          hash: '37ec2550c6a4736dfe62d01455bc80e82fd18d5a',
          tags: [
            {
              key: Uint8Array [
                97
              ],
              value: Uint8Array [
                159
              ]
            },
            {
              key: Uint8Array [
                230
              ],
              value: Uint8Array [
                75
              ]
            }
          ],
          code: 24,
          time: '2019-03-26T10:52:40.094Z',
          createAsset: {
            asset: 'Small'
          },
          accountMigrate: {
            address: '51262f7b08e53dfd427cab27e1f1a91692cee58a'
          }
        },
        {
          tx: {
            from: '1d920f85dd1b4fe8f709dc4281b37592bb83d1ea',
            nonce: 72553,
            chainId: 'Fantastic Plastic Pants',
            pk: Uint8Array [
              191
            ],
            signature: Uint8Array [
              215
            ],
            signatures: [
              {
                signer: 'deposit',
                pk: Uint8Array [
                  38
                ],
                signature: Uint8Array [
                  138
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Practical',
                pk: Uint8Array [
                  83
                ],
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
          },
          height: 83168,
          index: 65736,
          hash: '17a54e1580026ab78ffee19a401a97e076f1c5f5',
          tags: [
            {
              key: Uint8Array [
                158
              ],
              value: Uint8Array [
                250
              ]
            },
            {
              key: Uint8Array [
                228
              ],
              value: Uint8Array [
                67
              ]
            }
          ],
          code: 10,
          time: '2019-03-26T10:52:40.095Z',
          createAsset: {
            asset: 'Accounts'
          },
          accountMigrate: {
            address: '39b98ffc4c1849c8f34db2d26c354c1f7c4f9f52'
          }
        }
      ],
      txsHashes: [
        'redundant',
        'Avon'
      ],
      invalidTxsHashes: [
        'Barbados',
        'seamless'
      ],
      consensusHash: Uint8Array [
        56
      ],
      dataHash: Uint8Array [
        43
      ],
      evidenceHash: Uint8Array [
        42
      ],
      lastCommitHash: Uint8Array [
        147
      ],
      lastResultsHash: Uint8Array [
        230
      ],
      nextValidatorsHash: Uint8Array [
        149
      ],
      validatorsHash: Uint8Array [
        16
      ],
      version: {
        Block: 56295,
        App: 34831
      },
      lastBlockId: {
        hash: '52045587af3b162a6fb4451a772707158c4cff10',
        partsHeader: undefined
      }
    },
    {
      height: 70900,
      numTxs: 82870,
      time: '2019-03-26T10:52:40.095Z',
      appHash: '6e4d5d404f957d09d873bf1a7454ecf522aeaf38',
      proposer: '44d3a8bb185365c7f8378199a9f2ef12130f4a37',
      txs: [
        {
          tx: {
            from: '691aea53b7a3f4dd621d52d4bd2aa5da8682a140',
            nonce: 15946,
            chainId: 'Computers',
            pk: Uint8Array [
              97
            ],
            signature: Uint8Array [
              209
            ],
            signatures: [
              {
                signer: 'Senior',
                pk: Uint8Array [
                  61
                ],
                signature: Uint8Array [
                  81
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Product',
                pk: Uint8Array [
                  192
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
          height: 39495,
          index: 29962,
          hash: '050b5fb3c20489da07ab2f48909a5455e1b3a008',
          tags: [
            {
              key: Uint8Array [
                106
              ],
              value: Uint8Array [
                250
              ]
            },
            {
              key: Uint8Array [
                158
              ],
              value: Uint8Array [
                19
              ]
            }
          ],
          code: 25,
          time: '2019-03-26T10:52:40.095Z',
          createAsset: {
            asset: 'Savings Account'
          },
          accountMigrate: {
            address: '9dab55a9a5fd7cc73b822a44add57e847f56de86'
          }
        },
        {
          tx: {
            from: '7768f9a80b1e9157409144f166022bc269a17da5',
            nonce: 1686,
            chainId: 'infrastructure',
            pk: Uint8Array [
              142
            ],
            signature: Uint8Array [
              19
            ],
            signatures: [
              {
                signer: 'copying',
                pk: Uint8Array [
                  205
                ],
                signature: Uint8Array [
                  126
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'enable',
                pk: Uint8Array [
                  217
                ],
                signature: Uint8Array [
                  183
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
          height: 73129,
          index: 6470,
          hash: 'db18a115a56a25a4c94350f10e5de47475b3811d',
          tags: [
            {
              key: Uint8Array [
                105
              ],
              value: Uint8Array [
                141
              ]
            },
            {
              key: Uint8Array [
                95
              ],
              value: Uint8Array [
                177
              ]
            }
          ],
          code: 21,
          time: '2019-03-26T10:52:40.096Z',
          createAsset: {
            asset: 'payment'
          },
          accountMigrate: {
            address: 'c1f2e41b554c4541ff5959ba27d93675ad442f64'
          }
        }
      ],
      totalTxs: 91865,
      invalidTxs: [
        {
          tx: {
            from: 'ed8000792d16d54124ddca7d2a601cfbf9c88f73',
            nonce: 85950,
            chainId: 'Argentine Peso',
            pk: Uint8Array [
              176
            ],
            signature: Uint8Array [
              157
            ],
            signatures: [
              {
                signer: 'Berkshire',
                pk: Uint8Array [
                  59
                ],
                signature: Uint8Array [
                  161
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'application',
                pk: Uint8Array [
                  227
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
          height: 38615,
          index: 18125,
          hash: '788c2760c4bf3713f1e4844e2d37a3da126b928e',
          tags: [
            {
              key: Uint8Array [
                204
              ],
              value: Uint8Array [
                181
              ]
            },
            {
              key: Uint8Array [
                196
              ],
              value: Uint8Array [
                101
              ]
            }
          ],
          code: 1,
          time: '2019-03-26T10:52:40.096Z',
          createAsset: {
            asset: 'frictionless'
          },
          accountMigrate: {
            address: '35479ac020f61cfd6a2c924e745d4f1878f1b0e0'
          }
        },
        {
          tx: {
            from: '729b479c1e72d597fab7f7e5b64484cf6c9d883f',
            nonce: 983,
            chainId: 'reboot',
            pk: Uint8Array [
              198
            ],
            signature: Uint8Array [
              192
            ],
            signatures: [
              {
                signer: 'deposit',
                pk: Uint8Array [
                  84
                ],
                signature: Uint8Array [
                  152
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'tangible',
                pk: Uint8Array [
                  105
                ],
                signature: Uint8Array [
                  38
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
          height: 3176,
          index: 94048,
          hash: '31af0cfa4434fb8c3dc983f02725a7cf8c86de8b',
          tags: [
            {
              key: Uint8Array [
                18
              ],
              value: Uint8Array [
                8
              ]
            },
            {
              key: Uint8Array [
                121
              ],
              value: Uint8Array [
                238
              ]
            }
          ],
          code: 11,
          time: '2019-03-26T10:52:40.097Z',
          createAsset: {
            asset: 'Data'
          },
          accountMigrate: {
            address: '1e85753a9bcea6a88747aef8a8402cfa41ae39c2'
          }
        }
      ],
      txsHashes: [
        'Saint Martin',
        'one-to-one'
      ],
      invalidTxsHashes: [
        'fresh-thinking',
        'Outdoors'
      ],
      consensusHash: Uint8Array [
        251
      ],
      dataHash: Uint8Array [
        218
      ],
      evidenceHash: Uint8Array [
        226
      ],
      lastCommitHash: Uint8Array [
        19
      ],
      lastResultsHash: Uint8Array [
        165
      ],
      nextValidatorsHash: Uint8Array [
        192
      ],
      validatorsHash: Uint8Array [
        44
      ],
      version: {
        Block: 36025,
        App: 52730
      },
      lastBlockId: {
        hash: '3f98b9e655769a6507a2e4591cf1eae52ecb5bbd',
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
  code: 24,
  info: {
    id: 'cyan',
    network: 'Gloves',
    moniker: 'Configurable',
    consensusVersion: 'Granite',
    synced: undefined,
    appHash: 'f198915cd0106f5c23455510ee51c377f0ce19f4',
    blockHash: Uint8Array [
      95
    ],
    blockHeight: 89927,
    blockTime: '2019-03-26T10:52:40.098Z',
    address: '543907cff92315c899da58a2bff244695c972df9',
    votingPower: 25513,
    totalTxs: 22225,
    version: 'Personal Loan Account',
    dataVersion: 'New Hampshire',
    forgeAppsVersion: {
      synthesize: 'Credit Card Account'
    },
    supportedTxs: [
      'Chair',
      'vortals'
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
  config: 'Pants'
}
});
```

### getForgeState

```js
const result = await client.getForgeState({
  keys: [
    'online',
    'Granite'
  ],
  height: 25273
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 20,
  state: {
    address: '60646652212f3ad2dd71a89b747023caef913d2c',
    consensus: {
      maxBytes: 35368,
      maxGas: 44744,
      maxValidators: 73050,
      maxCandidates: 29772,
      pubKeyTypes: [
        'benchmark',
        'Kentucky'
      ],
      validators: [
        {
          address: 'dd5728aa35ea7d50b605a2518648f8dfaf86e107',
          power: 13347
        },
        {
          address: 'e8d763a858009f7ddeea03a8a6a734b2610c2a84',
          power: 58271
        }
      ],
      validatorChanged: undefined,
      paramChanged: undefined
    },
    tasks: {
      '45924': {
        item: [
          {
            type: 4,
            dataHash: 'Frozen',
            actions: [
              undefined,
              undefined
            ]
          },
          {
            type: 0,
            dataHash: 'programming',
            actions: [
              undefined,
              undefined
            ]
          }
        ]
      }
    },
    stakeSummary: {
      '55061': {
        totalStakes: '48598',
        totalUnstakes: '93752',
        context: {
          genesisTx: 'Re-engineered',
          renaissanceTx: 'Platinum',
          genesisTime: '2019-03-26T10:52:40.099Z',
          renaissanceTime: '2019-03-26T10:52:40.099Z'
        }
      }
    },
    version: 'magenta',
    dataVersion: 'target',
    forgeAppHash: Uint8Array [
      133
    ],
    token: {
      name: 'networks',
      symbol: 'dedicated',
      unit: 'program',
      description: 'Cambridgeshire',
      icon: Uint8Array [
        218
      ],
      decimal: 86038,
      initialSupply: 65165,
      totalSupply: 67472,
      inflationRate: 53507
    },
    txConfig: {
      maxAssetSize: 77515,
      maxListSize: 33094,
      maxMultisig: 83972,
      minimumStake: 91283
    },
    stakeConfig: {
      timeoutGeneral: 688,
      timeoutStakeForNode: 90563
    },
    pokeConfig: {
      address: '82f4cffdebe67e6459045c28f3af03942ec32141',
      dailyLimit: 24444,
      balance: 65842,
      amount: 1699
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
    startDate: 'product',
    endDate: 'Chips'
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 403,
  forgeStatistics: {
    numBlocks: [
      18795,
      68758
    ],
    numTxs: [
      20146,
      71451
    ],
    numStakes: [
      '73274',
      '32390'
    ],
    numValidators: [
      12091,
      97312
    ],
    numAccountMigrateTxs: [
      43909,
      2661
    ],
    numCreateAssetTxs: [
      81441,
      60931
    ],
    numConsensusUpgradeTxs: [
      56398,
      95590
    ],
    numDeclareTxs: [
      95664,
      74096
    ],
    numDeclareFileTxs: [
      38674,
      74412
    ],
    numExchangeTxs: [
      15139,
      80438
    ],
    numStakeTxs: [
      26833,
      92717
    ],
    numSysUpgradeTxs: [
      32864,
      20180
    ],
    numTransferTxs: [
      20243,
      68965
    ],
    numUpdateAssetTxs: [
      37873,
      45873
    ],
    numConsumeAssetTxs: [
      71341,
      63571
    ],
    numPokeTxs: [
      15129,
      80078
    ],
    tps: [
      38428,
      84275
    ],
    maxTps: 43075,
    avgTps: 30777
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
  code: 9,
  healthStatus: {
    consensus: {
      health: undefined,
      synced: undefined,
      blockHeight: 82176
    },
    network: {
      health: undefined,
      numPeers: 46634
    },
    storage: {
      health: undefined,
      indexerServer: 'SMTP',
      stateDb: 'Bike',
      diskSpace: {
        forgeUsage: 'compressing',
        total: 'Maine'
      }
    },
    forge: {
      health: undefined,
      abiServer: 'transition',
      forgeWeb: 'Concrete',
      abciServer: {
        abciConsensus: 'Incredible Rubber Gloves',
        abciInfo: 'THX'
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
  code: 31,
  netInfo: {
    listening: undefined,
    listeners: [
      'Lead',
      'Park'
    ],
    nPeers: 83199,
    peers: [
      {
        id: 'Illinois',
        network: 'cyan',
        consensusVersion: 'software',
        moniker: 'B2C',
        ip: 'ivory',
        geoInfo: {
          city: '1080p',
          country: 'Bedfordshire',
          latitude: 44517.7,
          longitude: 85584.35
        }
      },
      {
        id: 'Steel',
        network: 'Pennsylvania',
        consensusVersion: 'Crescent',
        moniker: 'Small',
        ip: 'Senegal',
        geoInfo: {
          city: 'auxiliary',
          country: 'neural',
          latitude: 50590.79,
          longitude: 5606.47
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
  code: 32,
  info: {
    id: 'systematic',
    network: 'Handcrafted',
    moniker: 'Rwanda Franc',
    consensusVersion: 'syndicate',
    synced: undefined,
    appHash: '3cfe66f6b5882676e6f50b558ec35fea525b3846',
    blockHash: Uint8Array [
      199
    ],
    blockHeight: 87330,
    blockTime: '2019-03-26T10:52:40.101Z',
    address: '5c978b21011a81250df0d46f340d5baba8d94595',
    votingPower: 7391,
    totalTxs: 73557,
    version: 'Bangladesh',
    dataVersion: 'Developer',
    forgeAppsVersion: {
      Rustic: 'Money Market Account'
    },
    supportedTxs: [
      'deposit',
      'fault-tolerant'
    ],
    ip: 'Gloves',
    geoInfo: {
      city: 'Cotton',
      country: 'Global',
      latitude: 21368.23,
      longitude: 35837.15
    },
    p2pAddress: 'holistic'
  }
}
});
```

### getStakeState

```js
const stream = client.getStakeState({
  address: 'f428eba74703e42421f38e0ef86f366214f0242e',
  keys: [
    'leading edge',
    'mesh'
  ],
  height: 64543
});

// output
{
  code: 4,
  state: {
    address: 'a8468ee7f6549c88cfe12a179642de012c746a9c',
    from: '8798b3f49b055f04e3ed00b3d3f53b10b2b686d0',
    to: '2dfb9e6ce6dd8abe1c87b63dd69914fd6b123f06',
    balance: '24202',
    message: 'Frozen',
    context: {
      genesisTx: 'intangible',
      renaissanceTx: 'Direct',
      genesisTime: '2019-03-26T10:52:40.101Z',
      renaissanceTime: '2019-03-26T10:52:40.101Z'
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
    cursor: 'systematic',
    size: 80639,
    order: [
      {
        field: 'recontextualize',
        type: 'embrace'
      },
      {
        field: 'red',
        type: 'South Carolina'
      }
    ]
  },
  addressFilter: {
    sender: 'withdrawal',
    receiver: 'Wooden',
    direction: 0
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 8,
  page: {
    cursor: 'open-source',
    next: undefined,
    total: 8340
  },
  stakes: [
    {
      address: 'd2b1e92eb804464214b274d41be6f091fd066704',
      balance: '54426',
      sender: 'Handcrafted',
      receiver: 'vertical',
      genesisTime: 'methodology',
      renaissanceTime: 'Bedfordshire',
      message: 'open-source',
      type: 69379
    },
    {
      address: '9c27fd63ba979ccd5a72c09039bf119e0f3c7e9d',
      balance: '7880',
      sender: 'calculating',
      receiver: 'firewall',
      genesisTime: 'Re-contextualized',
      renaissanceTime: 'Incredible Concrete Tuna',
      message: 'support',
      type: 40473
    }
  ]
}
});
```

### getTopAccounts

```js
const result = await client.getTopAccounts({
  paging: {
    cursor: 'Unbranded',
    size: 4051,
    order: [
      {
        field: 'Electronics',
        type: 'Awesome Soft Pizza'
      },
      {
        field: 'Refined Concrete Towels',
        type: 'Enhanced'
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
    cursor: 'Configurable',
    next: undefined,
    total: 12143
  },
  accounts: [
    {
      address: '5b7bacc807e4b26ae609a3156951994996cd50fe',
      balance: '28403',
      numAssets: 71072,
      numTxs: 89647,
      nonce: 52901,
      genesisTime: 'Michigan',
      renaissanceTime: 'Investor',
      moniker: 'withdrawal',
      migratedFrom: 'synthesizing',
      migratedTo: 'Table',
      totalReceivedStakes: '9958',
      totalStakes: '42238',
      totalUnstakes: '99901',
      recentNumTxs: [
        48445,
        18548
      ]
    },
    {
      address: '5085a7b1cb7ce66bd3dd7f2a00c84607ab166a51',
      balance: '75665',
      numAssets: 50846,
      numTxs: 74152,
      nonce: 66373,
      genesisTime: 'visionary',
      renaissanceTime: 'Proactive',
      moniker: 'navigate',
      migratedFrom: 'Manager',
      migratedTo: 'grow',
      totalReceivedStakes: '22481',
      totalStakes: '30525',
      totalUnstakes: '64249',
      recentNumTxs: [
        22829,
        2785
      ]
    }
  ]
}
});
```

### getTx

```js
const stream = client.getTx({
  hash: '24abc7d8e4adcb7e63c355a2a1314a57ea935caa'
});

// output
{
  code: 35,
  info: {
    tx: {
      from: '0c68e4ef14f6cac56e10a0748b06ec713d0f1880',
      nonce: 38054,
      chainId: 'high-level',
      pk: Uint8Array [
        16
      ],
      signature: Uint8Array [
        7
      ],
      signatures: [
        {
          signer: 'Associate',
          pk: Uint8Array [
            110
          ],
          signature: Uint8Array [
            117
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        {
          signer: 'Nicaragua',
          pk: Uint8Array [
            111
          ],
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
    height: 56455,
    index: 26349,
    hash: '2e2fc4cac7a58727d2c7fb1ac974e4ce2921b159',
    tags: [
      {
        key: Uint8Array [
          203
        ],
        value: Uint8Array [
          4
        ]
      },
      {
        key: Uint8Array [
          126
        ],
        value: Uint8Array [
          129
        ]
      }
    ],
    code: 35,
    time: '2019-03-26T10:52:40.104Z',
    createAsset: {
      asset: 'sensor'
    },
    accountMigrate: {
      address: '18968829afdc4fc175eedcbe4157dbbed031a874'
    }
  }
}
```

### getUnconfirmedTxs

```js
const result = await client.getUnconfirmedTxs({
  limit: 43514
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 27,
  unconfirmedTxs: {
    nTxs: 45317,
    txs: [
      {
        from: '1dd0b580e3bd3840614fbad2a2a38216f6bceb61',
        nonce: 10516,
        chainId: 'wireless',
        pk: Uint8Array [
          226
        ],
        signature: Uint8Array [
          100
        ],
        signatures: [
          {
            signer: 'neural',
            pk: Uint8Array [
              29
            ],
            signature: Uint8Array [
              215
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'Credit Card Account',
            pk: Uint8Array [
              132
            ],
            signature: Uint8Array [
              17
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
        from: 'f5d1608b22a9eaa4513cc00e5778bac322d07cde',
        nonce: 70723,
        chainId: 'Car',
        pk: Uint8Array [
          153
        ],
        signature: Uint8Array [
          128
        ],
        signatures: [
          {
            signer: 'copy',
            pk: Uint8Array [
              89
            ],
            signature: Uint8Array [
              11
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'pink',
            pk: Uint8Array [
              241
            ],
            signature: Uint8Array [
              171
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
  code: 7,
  validatorsInfo: {
    blockHeight: 1634,
    validators: [
      {
        address: '0af890b9cde0d0ead0951f8163342d3428ec19fd',
        pubKey: {
          type: '1080p',
          data: Uint8Array [
            151
          ]
        },
        votingPower: 72594,
        proposerPriority: 'mobile',
        name: 'Buckinghamshire',
        geoInfo: {
          city: 'ability',
          country: 'SDD',
          latitude: 75661.3,
          longitude: 6600.26
        }
      },
      {
        address: 'e4038538ac9b5280fd03571c46e96dd3325b541a',
        pubKey: {
          type: 'Personal Loan Account',
          data: Uint8Array [
            216
          ]
        },
        votingPower: 32344,
        proposerPriority: 'brand',
        name: 'Communications',
        geoInfo: {
          city: 'Checking Account',
          country: 'National',
          latitude: 13648.48,
          longitude: 10807.03
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
    cursor: 'Home Loan Account',
    size: 62036,
    order: [
      {
        field: 'e-services',
        type: 'Investment Account'
      },
      {
        field: 'collaborative',
        type: 'programming'
      }
    ]
  },
  address: 'af009f81ac1698b1361cac7794465ba8e4a66166'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 34,
  page: {
    cursor: 'optimizing',
    next: undefined,
    total: 81669
  },
  transactions: [
    {
      consumeAsset: {
        asset: 'toolset'
      }
    },
    {
      consumeAsset: {
        asset: 'content'
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
    cursor: 'Regional',
    size: 13733,
    order: [
      {
        field: 'Plastic',
        type: 'impactful'
      },
      {
        field: 'Cote d\'Ivoire',
        type: 'Central'
      }
    ]
  },
  ownerAddress: 'quantifying'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 21,
  page: {
    cursor: 'Home Loan Account',
    next: undefined,
    total: 24869
  },
  account: {
    address: 'f3d91c3643b0db22063d27cedd62628c5abd603a',
    balance: '43130',
    numAssets: 40389,
    numTxs: 22080,
    nonce: 61426,
    genesisTime: 'Awesome',
    renaissanceTime: 'Generic Plastic Pizza',
    moniker: 'Money Market Account',
    migratedFrom: 'Legacy',
    migratedTo: 'Hat',
    totalReceivedStakes: '44846',
    totalStakes: '24666',
    totalUnstakes: '33956',
    recentNumTxs: [
      50217,
      91863
    ]
  },
  assets: [
    {
      address: 'e7377f3b5593e37c0b6b97ef9b09aff1ba64f276',
      owner: 'SSL',
      genesisTime: 'indexing',
      renaissanceTime: 'monitor',
      moniker: 'web services',
      readonly: undefined
    },
    {
      address: 'b0d4833752cf9926a3982e6cd22c0957ff87f3e9',
      owner: 'Home Loan Account',
      genesisTime: 'bluetooth',
      renaissanceTime: 'Licensed',
      moniker: 'withdrawal',
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
    cursor: 'superstructure',
    size: 87098,
    order: [
      {
        field: 'calculating',
        type: 'Ergonomic Granite Table'
      },
      {
        field: 'Technician',
        type: 'architectures'
      }
    ]
  },
  proposer: '4694208ae6f3a9ceebd361fe95200660687983eb',
  timeFilter: {
    startDateTime: 'Guinea Franc',
    endDateTime: 'mindshare'
  },
  heightFilter: {
    fromHeight: 94448,
    toHeight: 27268
  },
  numTxsFilter: {
    minNumTxs: 19641,
    maxNumTxs: 78126
  },
  numInvalidTxsFilter: {
    minNumInvalidTxs: 7069,
    maxNumInvalidTxs: 23080
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 500,
  page: {
    cursor: 'brand',
    next: undefined,
    total: 68088
  },
  blocks: [
    {
      height: 22080,
      time: 'scalable',
      proposer: '44434db290cea15aeec96f21035c21f90f294b94',
      numTxs: 43076,
      numInvalidTxs: 85119
    },
    {
      height: 45738,
      time: 'Home Loan Account',
      proposer: '1d42eea0be661c2d16e1789db77dab55dae4b439',
      numTxs: 31307,
      numInvalidTxs: 50766
    }
  ]
}
});
```

### listTransactions

```js
const result = await client.listTransactions({
  paging: {
    cursor: 'Infrastructure',
    size: 57711,
    order: [
      {
        field: 'reciprocal',
        type: 'Burgs'
      },
      {
        field: 'Idaho',
        type: 'Cheese'
      }
    ]
  },
  timeFilter: {
    startDateTime: 'Money Market Account',
    endDateTime: 'grey'
  },
  addressFilter: {
    sender: 'Markets',
    receiver: 'firewall',
    direction: 1
  },
  typeFilter: {
    types: [
      'invoice',
      'Landing'
    ]
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 27,
  page: {
    cursor: 'Rustic Metal Chicken',
    next: undefined,
    total: 31792
  },
  transactions: [
    {
      consumeAsset: {
        asset: 'Station'
      }
    },
    {
      consumeAsset: {
        asset: 'Home Loan Account'
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
  code: 10,
  address: '0f1cbe602945e3f4547841b260a0ad6d70311631'
}
```

### loadFile

```js
const stream = client.loadFile({
  hash: 'faf53a2b923a00f4866a291a3da613fad2d0088d'
});

// output
{
  code: 36,
  chunk: Uint8Array [
    24
  ]
}
```

### loadWallet

```js
const result = await client.loadWallet({
  address: 'fc4245e4b90b06d8f75cedd6d6caff049bd26fb1',
  passphrase: 'Principal'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 31,
  token: 'Car',
  wallet: {
    type: {
      pk: 0,
      hash: 1,
      address: 1,
      role: 4
    },
    sk: Uint8Array [
      199
    ],
    pk: Uint8Array [
      19
    ],
    address: '87c80d1495bb57aa272ad5f30389da7ae3bebeac'
  }
}
});
```

### multisig

```js
const result = await client.multisig({
  tx: {
    from: '1c2135386c37752e6c66cad7e9bddffa7d6d06d8',
    nonce: 11426,
    chainId: 'South Dakota',
    pk: Uint8Array [
      227
    ],
    signature: Uint8Array [
      242
    ],
    signatures: [
      {
        signer: 'Steel',
        pk: Uint8Array [
          252
        ],
        signature: Uint8Array [
          88
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'Designer',
        pk: Uint8Array [
          33
        ],
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
  data: {
    type: 'fg:x:random_data',
    value: 'ABCD 1234'
  },
  wallet: {
    type: {
      pk: 0,
      hash: 6,
      address: 1,
      role: 6
    },
    sk: Uint8Array [
      120
    ],
    pk: Uint8Array [
      52
    ],
    address: '528041b949ea8bccc4b2109e840337c26a0918e9'
  },
  token: 'application'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 39,
  tx: {
    from: '17a1d6d565f840411e5183814eb96133ad66d045',
    nonce: 87507,
    chainId: 'revolutionize',
    pk: Uint8Array [
      207
    ],
    signature: Uint8Array [
      74
    ],
    signatures: [
      {
        signer: 'quantifying',
        pk: Uint8Array [
          92
        ],
        signature: Uint8Array [
          134
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'Incredible',
        pk: Uint8Array [
          204
        ],
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
  }
}
});
```

### pinFile

```js
const result = await client.pinFile({
  hash: 'bf537523e1619db8be8995bd9cc7ce37d4852efe'
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
      from: '43e4e6fcf175c1b36f4d1645030d000d06b165eb',
      nonce: 39161,
      chainId: 'indexing',
      pk: Uint8Array [
        37
      ],
      signature: Uint8Array [
        118
      ],
      signatures: [
        {
          signer: 'transmitting',
          pk: Uint8Array [
            227
          ],
          signature: Uint8Array [
            61
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        {
          signer: 'Dynamic',
          pk: Uint8Array [
            3
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
    states: [
      {
        balance: '26948',
        nonce: 58277,
        numTxs: 34,
        address: '00e91c7517b3f28ad45748ca9877df2d561f5ea9',
        pk: Uint8Array [
          124
        ],
        type: {
          pk: 0,
          hash: 7,
          address: 1,
          role: 1
        },
        moniker: 'best-of-breed',
        context: {
          genesisTx: 'Rand Loti',
          renaissanceTx: 'Chips',
          genesisTime: '2019-03-26T10:52:40.108Z',
          renaissanceTime: '2019-03-26T10:52:40.108Z'
        },
        issuer: 'Investor',
        migratedTo: [
          'index',
          'Extension'
        ],
        migratedFrom: [
          'Egypt',
          'well-modulated'
        ],
        numAssets: 44055,
        stake: {
          totalStakes: '88458',
          totalUnstakes: '25479',
          totalReceivedStakes: '13777',
          recentStakes: {
            items: [
              Uint8Array [
                80
              ],
              Uint8Array [
                162
              ]
            ],
            typeUrl: 'Som',
            maxItems: 48641,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                201
              ],
              Uint8Array [
                207
              ]
            ],
            typeUrl: 'Plastic',
            maxItems: 45197,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              45
            ],
            Uint8Array [
              247
            ]
          ],
          typeUrl: 'interface',
          maxItems: 66504,
          circular: undefined,
          fifo: undefined
        },
        poke: {
          dailyLimit: '64205',
          leftover: '43277',
          amount: '57453'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        balance: '60529',
        nonce: 66155,
        numTxs: 39193,
        address: '9b14abffdae93de3d99ff502613d0835d7ebc497',
        pk: Uint8Array [
          242
        ],
        type: {
          pk: 1,
          hash: 0,
          address: 0,
          role: 3
        },
        moniker: 'XSS',
        context: {
          genesisTx: 'Plastic',
          renaissanceTx: 'Product',
          genesisTime: '2019-03-26T10:52:40.108Z',
          renaissanceTime: '2019-03-26T10:52:40.108Z'
        },
        issuer: 'payment',
        migratedTo: [
          'Tala',
          'Sharable'
        ],
        migratedFrom: [
          'Networked',
          'interfaces'
        ],
        numAssets: 61152,
        stake: {
          totalStakes: '87413',
          totalUnstakes: '26306',
          totalReceivedStakes: '49298',
          recentStakes: {
            items: [
              Uint8Array [
                20
              ],
              Uint8Array [
                128
              ]
            ],
            typeUrl: 'generating',
            maxItems: 96983,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                38
              ],
              Uint8Array [
                16
              ]
            ],
            typeUrl: 'rich',
            maxItems: 40644,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              159
            ],
            Uint8Array [
              61
            ]
          ],
          typeUrl: 'Islands',
          maxItems: 93989,
          circular: undefined,
          fifo: undefined
        },
        poke: {
          dailyLimit: '92587',
          leftover: '40160',
          amount: '23423'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    assets: [
      {
        address: '17cdfb721e91618c5dbbb5a2a49a1b888040772f',
        owner: 'Steel',
        moniker: 'architect',
        readonly: undefined,
        transferrable: undefined,
        ttl: 79638,
        consumedTime: '2019-03-26T10:52:40.109Z',
        issuer: 'input',
        stake: {
          totalStakes: '55050',
          totalUnstakes: '6597',
          totalReceivedStakes: '38147',
          recentStakes: {
            items: [
              Uint8Array [
                104
              ],
              Uint8Array [
                13
              ]
            ],
            typeUrl: 'applications',
            maxItems: 52489,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                134
              ],
              Uint8Array [
                47
              ]
            ],
            typeUrl: 'COM',
            maxItems: 22919,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'open-source',
          renaissanceTx: 'Berkshire',
          genesisTime: '2019-03-26T10:52:40.109Z',
          renaissanceTime: '2019-03-26T10:52:40.109Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: '4e79137183560a98a19a908c83dacea9dcba1d3e',
        owner: 'drive',
        moniker: 'North Dakota',
        readonly: undefined,
        transferrable: undefined,
        ttl: 88599,
        consumedTime: '2019-03-26T10:52:40.109Z',
        issuer: 'Bedfordshire',
        stake: {
          totalStakes: '78492',
          totalUnstakes: '99733',
          totalReceivedStakes: '52412',
          recentStakes: {
            items: [
              Uint8Array [
                69
              ],
              Uint8Array [
                224
              ]
            ],
            typeUrl: 'Usability',
            maxItems: 98867,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                33
              ],
              Uint8Array [
                246
              ]
            ],
            typeUrl: 'index',
            maxItems: 53979,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Sports',
          renaissanceTx: 'Direct',
          genesisTime: '2019-03-26T10:52:40.109Z',
          renaissanceTime: '2019-03-26T10:52:40.109Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    stakes: [
      {
        address: '8fcfe310b097bd4be0efc34c560a26d53a6fc054',
        from: '41a0ac159cefbfca96b87954e2a718e0fae14b5e',
        to: 'ca67335c45e3c760540ba8bde0ea2f6967068d9f',
        balance: '42648',
        message: 'communities',
        context: {
          genesisTx: 'monitor',
          renaissanceTx: 'Cuba',
          genesisTime: '2019-03-26T10:52:40.109Z',
          renaissanceTime: '2019-03-26T10:52:40.109Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: '6c57b82558f57b71ece6ba09e8848ef7448bc6dc',
        from: '4bf07dc4346fd1420422c02203e312807fb7b053',
        to: 'c1db9c1f306154290f04fad1f802a8026bb85712',
        balance: '21131',
        message: 'CSS',
        context: {
          genesisTx: 'matrices',
          renaissanceTx: 'program',
          genesisTime: '2019-03-26T10:52:40.109Z',
          renaissanceTime: '2019-03-26T10:52:40.109Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    context: {
      txHash: '217b6390b5e251876d8ce39d4307da2e3efd4f9f',
      blockHeight: 78948,
      blockTime: '2019-03-26T10:52:40.109Z',
      totalTxs: 57436,
      txStatistics: {
        numAccountMigrateTxs: 61025,
        numCreateAssetTxs: 33132,
        numConsensusUpgradeTxs: 27930,
        numDeclareTxs: 90838,
        numDeclareFileTxs: 59786,
        numExchangeTxs: 73463,
        numStakeTxs: 38192,
        numSysUpgradeTxs: 7355,
        numTransferTxs: 9177,
        numUpdateAssetTxs: 80545,
        numConsumeAssetTxs: 88688,
        numPokeTxs: 94055
      },
      txIndex: 73764,
      lastBlockTime: '2019-03-26T10:52:40.109Z'
    },
    appState: {
      address: '7f378f3a193fe3942163d96c7acf95e0746be90e',
      consensus: {
        maxBytes: 73028,
        maxGas: 40095,
        maxValidators: 58953,
        maxCandidates: 32003,
        pubKeyTypes: [
          'Norway',
          'Auto Loan Account'
        ],
        validators: [
          {
            address: '4a75c187401968ee7d9e0a97f3103ccd720c1fcb',
            power: 68241
          },
          {
            address: '91d792c3be92865c658e679ff69802e69b404289',
            power: 25579
          }
        ],
        validatorChanged: undefined,
        paramChanged: undefined
      },
      tasks: {
        '17222': {
          item: [
            {
              type: 12,
              dataHash: 'synthesize',
              actions: [
                undefined,
                undefined
              ]
            },
            {
              type: 14,
              dataHash: 'reboot',
              actions: [
                undefined,
                undefined
              ]
            }
          ]
        }
      },
      stakeSummary: {
        '68608': {
          totalStakes: '4619',
          totalUnstakes: '21354',
          context: {
            genesisTx: 'Investment Account',
            renaissanceTx: 'application',
            genesisTime: '2019-03-26T10:52:40.110Z',
            renaissanceTime: '2019-03-26T10:52:40.110Z'
          }
        }
      },
      version: 'whiteboard',
      dataVersion: 'orchestrate',
      forgeAppHash: Uint8Array [
        230
      ],
      token: {
        name: 'Checking Account',
        symbol: 'Metal',
        unit: 'Baby',
        description: 'Directives',
        icon: Uint8Array [
          49
        ],
        decimal: 97287,
        initialSupply: 45360,
        totalSupply: 74184,
        inflationRate: 59634
      },
      txConfig: {
        maxAssetSize: 49355,
        maxListSize: 13496,
        maxMultisig: 52717,
        minimumStake: 27050
      },
      stakeConfig: {
        timeoutGeneral: 22273,
        timeoutStakeForNode: 31962
      },
      pokeConfig: {
        address: 'f3345039f8aa70942759dab956936fd44d257e5e',
        dailyLimit: 91441,
        balance: 70104,
        amount: 67480
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
    code: 24
  }
}
```

### processOne

```js
const result = await client.processOne({
  verifyTx: {
    tx: {
      from: '94fb362240904548acd1422be2c5c87c6f9155d9',
      nonce: 34538,
      chainId: 'Swedish Krona',
      pk: Uint8Array [
        144
      ],
      signature: Uint8Array [
        88
      ],
      signatures: [
        {
          signer: 'parsing',
          pk: Uint8Array [
            7
          ],
          signature: Uint8Array [
            39
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        {
          signer: 'Seamless',
          pk: Uint8Array [
            195
          ],
          signature: Uint8Array [
            187
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
        balance: '8398',
        nonce: 903,
        numTxs: 96788,
        address: '47ca7e61403b807cb7dfaa7b497bd0061012d3de',
        pk: Uint8Array [
          188
        ],
        type: {
          pk: 0,
          hash: 13,
          address: 1,
          role: 6
        },
        moniker: 'SMTP',
        context: {
          genesisTx: 'Unbranded Granite Towels',
          renaissanceTx: 'dot-com',
          genesisTime: '2019-03-26T10:52:40.111Z',
          renaissanceTime: '2019-03-26T10:52:40.111Z'
        },
        issuer: 'Steel',
        migratedTo: [
          'intermediate',
          'turquoise'
        ],
        migratedFrom: [
          'collaboration',
          'Metal'
        ],
        numAssets: 61606,
        stake: {
          totalStakes: '28759',
          totalUnstakes: '77238',
          totalReceivedStakes: '7562',
          recentStakes: {
            items: [
              Uint8Array [
                138
              ],
              Uint8Array [
                105
              ]
            ],
            typeUrl: 'Handcrafted Cotton Shirt',
            maxItems: 80807,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                13
              ],
              Uint8Array [
                234
              ]
            ],
            typeUrl: 'Intelligent Rubber Table',
            maxItems: 10106,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              36
            ],
            Uint8Array [
              124
            ]
          ],
          typeUrl: 'unleash',
          maxItems: 51527,
          circular: undefined,
          fifo: undefined
        },
        poke: {
          dailyLimit: '27544',
          leftover: '48511',
          amount: '18042'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        balance: '72668',
        nonce: 91034,
        numTxs: 57683,
        address: '33b1f5fc01f075bc610d89e2e87ba07269c53119',
        pk: Uint8Array [
          10
        ],
        type: {
          pk: 1,
          hash: 7,
          address: 0,
          role: 1
        },
        moniker: 'Wooden',
        context: {
          genesisTx: 'withdrawal',
          renaissanceTx: 'e-business',
          genesisTime: '2019-03-26T10:52:40.111Z',
          renaissanceTime: '2019-03-26T10:52:40.111Z'
        },
        issuer: 'Soft',
        migratedTo: [
          'Avon',
          'copy'
        ],
        migratedFrom: [
          'IB',
          'Singapore'
        ],
        numAssets: 40366,
        stake: {
          totalStakes: '45826',
          totalUnstakes: '35801',
          totalReceivedStakes: '54644',
          recentStakes: {
            items: [
              Uint8Array [
                54
              ],
              Uint8Array [
                155
              ]
            ],
            typeUrl: 'Savings Account',
            maxItems: 59317,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                19
              ],
              Uint8Array [
                129
              ]
            ],
            typeUrl: 'deposit',
            maxItems: 56728,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              223
            ],
            Uint8Array [
              55
            ]
          ],
          typeUrl: 'Knoll',
          maxItems: 48340,
          circular: undefined,
          fifo: undefined
        },
        poke: {
          dailyLimit: '76949',
          leftover: '34960',
          amount: '79010'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    assets: [
      {
        address: '635c31b865fb9a6b4f43ff7743d6728ce403e75e',
        owner: 'synthesizing',
        moniker: 'Centers',
        readonly: undefined,
        transferrable: undefined,
        ttl: 85264,
        consumedTime: '2019-03-26T10:52:40.111Z',
        issuer: 'Timor-Leste',
        stake: {
          totalStakes: '36208',
          totalUnstakes: '30114',
          totalReceivedStakes: '87817',
          recentStakes: {
            items: [
              Uint8Array [
                228
              ],
              Uint8Array [
                5
              ]
            ],
            typeUrl: 'overriding',
            maxItems: 66248,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                43
              ],
              Uint8Array [
                42
              ]
            ],
            typeUrl: 'Mobility',
            maxItems: 74561,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Dynamic',
          renaissanceTx: 'solid state',
          genesisTime: '2019-03-26T10:52:40.112Z',
          renaissanceTime: '2019-03-26T10:52:40.112Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: '7115bd1db502059474faf4a109c9ce5ffac5e7be',
        owner: 'indigo',
        moniker: 'Direct',
        readonly: undefined,
        transferrable: undefined,
        ttl: 35747,
        consumedTime: '2019-03-26T10:52:40.112Z',
        issuer: 'synthesizing',
        stake: {
          totalStakes: '87658',
          totalUnstakes: '82836',
          totalReceivedStakes: '82493',
          recentStakes: {
            items: [
              Uint8Array [
                107
              ],
              Uint8Array [
                205
              ]
            ],
            typeUrl: 'Armenian Dram',
            maxItems: 4533,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                50
              ],
              Uint8Array [
                217
              ]
            ],
            typeUrl: 'Savings Account',
            maxItems: 6483,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Steel',
          renaissanceTx: 'programming',
          genesisTime: '2019-03-26T10:52:40.112Z',
          renaissanceTime: '2019-03-26T10:52:40.112Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    stakes: [
      {
        address: '627825d347bb9cee735c2138076aef1955065615',
        from: '726661b583ec45290fd289ef390acbd731368163',
        to: '48bde73a82ad4e84055ced24c9d2367e1d473bd7',
        balance: '99719',
        message: 'Gorgeous',
        context: {
          genesisTx: 'copying',
          renaissanceTx: 'Salad',
          genesisTime: '2019-03-26T10:52:40.112Z',
          renaissanceTime: '2019-03-26T10:52:40.112Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: 'f0dfa69a3baee3b9738d242969d108006b0c9bfd',
        from: '42c1b74a7c85c9296ecbb6fb870ec41132e914d2',
        to: '4868b88376bb1da812d1d67b40af0a13b53bd399',
        balance: '48028',
        message: 'black',
        context: {
          genesisTx: 'Guatemala',
          renaissanceTx: 'Center',
          genesisTime: '2019-03-26T10:52:40.112Z',
          renaissanceTime: '2019-03-26T10:52:40.112Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    context: {
      txHash: '3d761346e6840db06ed682eca849a676f088704a',
      blockHeight: 13852,
      blockTime: '2019-03-26T10:52:40.112Z',
      totalTxs: 60561,
      txStatistics: {
        numAccountMigrateTxs: 65678,
        numCreateAssetTxs: 10417,
        numConsensusUpgradeTxs: 20396,
        numDeclareTxs: 91156,
        numDeclareFileTxs: 60445,
        numExchangeTxs: 75234,
        numStakeTxs: 62656,
        numSysUpgradeTxs: 13013,
        numTransferTxs: 31824,
        numUpdateAssetTxs: 39574,
        numConsumeAssetTxs: 82512,
        numPokeTxs: 11290
      },
      txIndex: 44438,
      lastBlockTime: '2019-03-26T10:52:40.112Z'
    },
    appState: {
      address: '665a544c61db83e79e8080ea1a2aabaca150667d',
      consensus: {
        maxBytes: 98205,
        maxGas: 88533,
        maxValidators: 87879,
        maxCandidates: 84498,
        pubKeyTypes: [
          'Handcrafted',
          'array'
        ],
        validators: [
          {
            address: '8512500d5d6fcf28fdf7bb2b08f31b465fdbe183',
            power: 72036
          },
          {
            address: '0dfa741f09af9adae858721b6847237eac094bfe',
            power: 38498
          }
        ],
        validatorChanged: undefined,
        paramChanged: undefined
      },
      tasks: {
        '16268': {
          item: [
            {
              type: 4,
              dataHash: 'withdrawal',
              actions: [
                undefined,
                undefined
              ]
            },
            {
              type: 13,
              dataHash: 'Customer',
              actions: [
                undefined,
                undefined
              ]
            }
          ]
        }
      },
      stakeSummary: {
        '9769': {
          totalStakes: '9002',
          totalUnstakes: '26593',
          context: {
            genesisTx: 'deposit',
            renaissanceTx: 'backing up',
            genesisTime: '2019-03-26T10:52:40.112Z',
            renaissanceTime: '2019-03-26T10:52:40.112Z'
          }
        }
      },
      version: 'program',
      dataVersion: 'digital',
      forgeAppHash: Uint8Array [
        96
      ],
      token: {
        name: 'motivating',
        symbol: 'Pakistan',
        unit: 'Ergonomic',
        description: 'Face to face',
        icon: Uint8Array [
          166
        ],
        decimal: 93301,
        initialSupply: 41666,
        totalSupply: 31634,
        inflationRate: 13561
      },
      txConfig: {
        maxAssetSize: 31901,
        maxListSize: 87541,
        maxMultisig: 86533,
        minimumStake: 24759
      },
      stakeConfig: {
        timeoutGeneral: 79357,
        timeoutStakeForNode: 78466
      },
      pokeConfig: {
        address: 'daf140116954dbd6434b80afa718b198423914ff',
        dailyLimit: 52275,
        balance: 22995,
        amount: 22889
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
    code: 500
  }
}
});
```

### recoverWallet

```js
const result = await client.recoverWallet({
  data: Uint8Array [
    71
  ],
  type: {
    pk: 1,
    hash: 2,
    address: 1,
    role: 2
  },
  passphrase: 'pixel',
  moniker: 'copying'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 30,
  token: 'human-resource',
  wallet: {
    type: {
      pk: 0,
      hash: 1,
      address: 0,
      role: 2
    },
    sk: Uint8Array [
      90
    ],
    pk: Uint8Array [
      191
    ],
    address: '800a6bba8adb5ea23ff053d1b765c6f5a2465465'
  }
}
});
```

### removeWallet

```js
const result = await client.removeWallet({
  address: '49fe5b5808b2d7bafca49064bafd9770ae015e54'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 403
}
});
```

### search

```js
const result = await client.search({
  key: 'Home Loan Account',
  value: 'disintermediate'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 6,
  txs: [
    {
      tx: {
        from: 'a487f4eba7a0d2c24c7f0aabc4c42b65d193e823',
        nonce: 66736,
        chainId: 'Mouse',
        pk: Uint8Array [
          190
        ],
        signature: Uint8Array [
          215
        ],
        signatures: [
          {
            signer: 'world-class',
            pk: Uint8Array [
              185
            ],
            signature: Uint8Array [
              37
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'service-desk',
            pk: Uint8Array [
              248
            ],
            signature: Uint8Array [
              109
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
      height: 73221,
      index: 58594,
      hash: '3ff5ea07acebfe32356a06bffad0ff7d36d93a97',
      tags: [
        {
          key: Uint8Array [
            50
          ],
          value: Uint8Array [
            107
          ]
        },
        {
          key: Uint8Array [
            77
          ],
          value: Uint8Array [
            206
          ]
        }
      ],
      code: 500,
      time: '2019-03-26T10:52:40.114Z',
      createAsset: {
        asset: 'Paradigm'
      },
      accountMigrate: {
        address: '40932dc413e9318f0a07596b5b8b1456d8ead4e9'
      }
    },
    {
      tx: {
        from: 'b197c4154f65e19375e7c1d3f3f8e985aae06f3d',
        nonce: 31277,
        chainId: 'Granite',
        pk: Uint8Array [
          147
        ],
        signature: Uint8Array [
          11
        ],
        signatures: [
          {
            signer: 'Electronics',
            pk: Uint8Array [
              86
            ],
            signature: Uint8Array [
              241
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'Sleek Frozen Car',
            pk: Uint8Array [
              107
            ],
            signature: Uint8Array [
              100
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
      height: 21295,
      index: 58685,
      hash: 'ddd11797c4ebf49b065a3687180e3506ff713ba1',
      tags: [
        {
          key: Uint8Array [
            109
          ],
          value: Uint8Array [
            108
          ]
        },
        {
          key: Uint8Array [
            225
          ],
          value: Uint8Array [
            207
          ]
        }
      ],
      code: 500,
      time: '2019-03-26T10:52:40.114Z',
      createAsset: {
        asset: 'Walks'
      },
      accountMigrate: {
        address: 'd5b49d8a9ae3fad5570bc09c62118238a7803e80'
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
    from: 'bb225cd45d0d58502bc426aec739007e77661dec',
    nonce: 34811,
    chainId: 'model',
    pk: Uint8Array [
      225
    ],
    signature: Uint8Array [
      123
    ],
    signatures: [
      {
        signer: 'Internal',
        pk: Uint8Array [
          187
        ],
        signature: Uint8Array [
          32
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'Dynamic',
        pk: Uint8Array [
          21
        ],
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
  wallet: {
    type: {
      pk: 1,
      hash: 0,
      address: 1,
      role: 8
    },
    sk: Uint8Array [
      248
    ],
    pk: Uint8Array [
      38
    ],
    address: '5062933249851b05433ad9219c5799590a0ad72f'
  },
  token: 'blue',
  commit: undefined
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 34,
  hash: '1bdd907c36531b5cc08e42f7b6e6ed434defca0e'
}
});
```

### signData

```js
const result = await client.signData({
  data: Uint8Array [
    191
  ],
  wallet: {
    type: {
      pk: 0,
      hash: 6,
      address: 0,
      role: 2
    },
    sk: Uint8Array [
      14
    ],
    pk: Uint8Array [
      208
    ],
    address: '5959fab2ac4370a5ad196c2b1e5610c7ff7d26d9'
  },
  token: 'Steel'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 21,
  signature: Uint8Array [
    83
  ]
}
});
```

### storeFile

```js
const result = await client.storeFile({
  chunk: Uint8Array [
    86
  ]
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 35,
  hash: 'c1643780532c4e9b40a8eedd1bd27851395a3bd1'
}
});
```

### subscribe

```js
const stream = client.subscribe({
  type: 130,
  filter: 'Movies'
});

// output
{
  topic: '3rd generation'
}
```

### unsubscribe

```js
const result = await client.unsubscribe({
  topic: 'Berkshire'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 42
}
});
```


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |
