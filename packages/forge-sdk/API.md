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
  from: 'ace02913a16b61f05b9b94448d8708c2e08a25b9',
  nonce: 57306,
  wallet: {
    type: {
      pk: 0,
      hash: 7,
      address: 0,
      role: 3
    },
    sk: Uint8Array [
      155
    ],
    pk: Uint8Array [
      85
    ],
    address: '61aca044481eba1a2a764fa9c1fb8cdf4f2ed02c'
  },
  token: 'backing up'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 25,
  tx: {
    from: '0ca1a085fa183d0a5ffdab21c67588bc3bc400fc',
    nonce: 70190,
    signature: Uint8Array [
      77
    ],
    chainId: 'system engine',
    signatures: [
      {
        signer: 'auxiliary',
        signature: Uint8Array [
          73
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'e-services',
        signature: Uint8Array [
          168
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
  passphrase: 'Human',
  type: {
    pk: 1,
    hash: 13,
    address: 0,
    role: 2
  },
  moniker: 'New York'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 20,
  token: 'SAS',
  wallet: {
    type: {
      pk: 0,
      hash: 0,
      address: 1,
      role: 2
    },
    sk: Uint8Array [
      16
    ],
    pk: Uint8Array [
      74
    ],
    address: '0d54df0e1d00a781336add0b1789c2271baf2ad2'
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
  code: 16,
  wallet: {
    type: {
      pk: 0,
      hash: 13,
      address: 0,
      role: 6
    },
    sk: Uint8Array [
      241
    ],
    pk: Uint8Array [
      114
    ],
    address: 'c511763f8fdf988e44107404acc9832ae838eb1d'
  }
}
});
```

### getAccountState

```js
const stream = client.getAccountState({
  address: '365e08edfe2eb0b338e194a64c7c1f48e1f24d7a',
  keys: [
    'Fundamental',
    'yellow'
  ],
  height: 28636
});

// output
{
  code: 17,
  state: {
    balance: '93341',
    nonce: 9070,
    numTxs: 28268,
    address: '241bffd2f0c0e03669e426ac13b32693a2823e37',
    pk: Uint8Array [
      224
    ],
    type: {
      pk: 1,
      hash: 2,
      address: 1,
      role: 4
    },
    moniker: 'Wooden',
    context: {
      genesisTx: 'Concrete',
      renaissanceTx: 'deposit',
      genesisTime: '2019-03-21T01:09:03.892Z',
      renaissanceTime: '2019-03-21T01:09:03.892Z'
    },
    issuer: 'bluetooth',
    migratedTo: [
      'Kwacha',
      'Aruban Guilder'
    ],
    migratedFrom: [
      'Shoes',
      'Toys'
    ],
    numAssets: 24873,
    stake: {
      totalStakes: '35329',
      totalUnstakes: '26776',
      totalReceivedStakes: '97310',
      recentStakes: {
        items: [
          Uint8Array [
            117
          ],
          Uint8Array [
            194
          ]
        ],
        typeUrl: 'Borders',
        maxItems: 46094,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [
            29
          ],
          Uint8Array [
            130
          ]
        ],
        typeUrl: 'Designer',
        maxItems: 98012,
        circular: undefined,
        fifo: undefined
      }
    },
    pinnedFiles: {
      items: [
        Uint8Array [
          128
        ],
        Uint8Array [
          154
        ]
      ],
      typeUrl: 'Identity',
      maxItems: 81108,
      circular: undefined,
      fifo: undefined
    },
    poke: {
      dailyLimit: '97041',
      leftover: '39485',
      amount: '7513'
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
  senderAddress: 'payment',
  itx: {
    moniker: 'regional',
    data: {
      type: 'fg:x:random_data',
      value: 'ABCD 1234'
    },
    readonly: undefined,
    transferrable: undefined,
    ttl: 15842,
    parent: 'Ranch'
  },
  walletType: {
    pk: 1,
    hash: 0,
    address: 1,
    role: 0
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 36,
  assetAddress: 'deposit'
}
});
```

### getAssetState

```js
const stream = client.getAssetState({
  address: 'c3203436b4a1bfde9f10159f34331282cc98a9c9',
  keys: [
    'Berkshire',
    'Massachusetts'
  ],
  height: 93002
});

// output
{
  code: 11,
  state: {
    address: '8689e7cfbe23c9e52002392960a5eb2e4e55f562',
    owner: 'silver',
    moniker: 'Licensed Rubber Chair',
    readonly: undefined,
    transferrable: undefined,
    ttl: 46882,
    consumedTime: '2019-03-21T01:09:03.894Z',
    issuer: 'Street',
    stake: {
      totalStakes: '83961',
      totalUnstakes: '5130',
      totalReceivedStakes: '34895',
      recentStakes: {
        items: [
          Uint8Array [
            6
          ],
          Uint8Array [
            50
          ]
        ],
        typeUrl: 'Ranch',
        maxItems: 71190,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [
            3
          ],
          Uint8Array [
            93
          ]
        ],
        typeUrl: 'Stand-alone',
        maxItems: 12415,
        circular: undefined,
        fifo: undefined
      }
    },
    context: {
      genesisTx: 'Common',
      renaissanceTx: 'New Jersey',
      genesisTime: '2019-03-21T01:09:03.894Z',
      renaissanceTime: '2019-03-21T01:09:03.894Z'
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
    cursor: 'solid state',
    size: 41755,
    order: [
      {
        field: 'Bedfordshire',
        type: 'Wyoming'
      },
      {
        field: 'Quality-focused',
        type: 'actuating'
      }
    ]
  },
  ownerAddress: 'Administrator'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 32,
  page: {
    cursor: 'Small Frozen Cheese',
    next: undefined,
    total: 1446
  },
  assets: [
    {
      address: '357627e6843e9aa0c717e7e9a86811471d872108',
      owner: 'Ball',
      genesisTime: 'disintermediate',
      renaissanceTime: 'bus',
      moniker: 'transparent',
      readonly: undefined
    },
    {
      address: 'a677214055ad1abea899c3a8f085c2106134073a',
      owner: 'white',
      genesisTime: 'Tasty Granite Car',
      renaissanceTime: 'Pennsylvania',
      moniker: 'sticky',
      readonly: undefined
    }
  ]
}
});
```

### getBlock

```js
const stream = client.getBlock({
  height: 50636
});

// output
{
  code: 41,
  block: {
    height: 1902,
    numTxs: 34961,
    time: '2019-03-21T01:09:03.896Z',
    appHash: '734e8ab3a5e08b387c05d0db105e1a391db2e4e6',
    proposer: 'f46a37cbc026883a7de8999bc863151308d54bac',
    txs: [
      {
        tx: {
          from: '6dcb9c0f0b8a4b88ce5186f2a1a937a65c338081',
          nonce: 4002,
          signature: Uint8Array [
            128
          ],
          chainId: 'input',
          signatures: [
            {
              signer: 'Soap',
              signature: Uint8Array [
                175
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'synthesize',
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
        height: 61899,
        index: 57086,
        hash: '93cf09c794579e226cd14663ba2efe102fe1a59d',
        tags: [
          {
            key: Uint8Array [
              27
            ],
            value: Uint8Array [
              159
            ]
          },
          {
            key: Uint8Array [
              178
            ],
            value: Uint8Array [
              205
            ]
          }
        ],
        code: 22,
        time: '2019-03-21T01:09:03.897Z',
        createAsset: {
          asset: 'Plastic'
        },
        accountMigrate: {
          address: 'd5630d5f5d528c800e001602c713eeb297675410'
        }
      },
      {
        tx: {
          from: '997220376f320e75dbc27257548b0298b48eecc9',
          nonce: 29557,
          signature: Uint8Array [
            162
          ],
          chainId: 'Electronics',
          signatures: [
            {
              signer: 'Singapore Dollar',
              signature: Uint8Array [
                55
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'Trinidad and Tobago Dollar',
              signature: Uint8Array [
                27
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
        height: 82494,
        index: 90126,
        hash: 'f871d4290daa9c4b3cfe7e36655cc93fe6d360c0',
        tags: [
          {
            key: Uint8Array [
              110
            ],
            value: Uint8Array [
              95
            ]
          },
          {
            key: Uint8Array [
              28
            ],
            value: Uint8Array [
              39
            ]
          }
        ],
        code: 22,
        time: '2019-03-21T01:09:03.897Z',
        createAsset: {
          asset: 'visualize'
        },
        accountMigrate: {
          address: '83fc5a44748e73523eb804105c4193933749836f'
        }
      }
    ],
    totalTxs: 66378,
    invalidTxs: [
      {
        tx: {
          from: '7fcdeb99562886150cb881df9fe1dadf26e7c1d8',
          nonce: 65630,
          signature: Uint8Array [
            234
          ],
          chainId: 'Ukraine',
          signatures: [
            {
              signer: 'bandwidth',
              signature: Uint8Array [
                161
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'Interactions',
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
        height: 22176,
        index: 54733,
        hash: '29ba3abc6b7a83c08bf37ac73ea4fb798aa7d561',
        tags: [
          {
            key: Uint8Array [
              161
            ],
            value: Uint8Array [
              61
            ]
          },
          {
            key: Uint8Array [
              180
            ],
            value: Uint8Array [
              12
            ]
          }
        ],
        code: 6,
        time: '2019-03-21T01:09:03.898Z',
        createAsset: {
          asset: 'PNG'
        },
        accountMigrate: {
          address: '9a6ba389436072c6d4d5bfff38dc71df11a7d6de'
        }
      },
      {
        tx: {
          from: '2e7994b48ab2771df1c8facccfac9cd551ee6101',
          nonce: 60083,
          signature: Uint8Array [
            94
          ],
          chainId: 'Norway',
          signatures: [
            {
              signer: 'firewall',
              signature: Uint8Array [
                60
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'digital',
              signature: Uint8Array [
                176
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
        height: 57985,
        index: 37342,
        hash: 'd4afee39dcc1ab08658df5c90ce06da460836294',
        tags: [
          {
            key: Uint8Array [
              92
            ],
            value: Uint8Array [
              74
            ]
          },
          {
            key: Uint8Array [
              173
            ],
            value: Uint8Array [
              160
            ]
          }
        ],
        code: 33,
        time: '2019-03-21T01:09:03.898Z',
        createAsset: {
          asset: 'Steel'
        },
        accountMigrate: {
          address: 'a64659ff4dd857ceae289a16b4ed3cc1c6f17dd3'
        }
      }
    ],
    txsHashes: [
      'Netherlands Antillian Guilder',
      'SDD'
    ],
    invalidTxsHashes: [
      'Bacon',
      'Bedfordshire'
    ],
    consensusHash: Uint8Array [
      95
    ],
    dataHash: Uint8Array [
      240
    ],
    evidenceHash: Uint8Array [
      29
    ],
    lastCommitHash: Uint8Array [
      147
    ],
    lastResultsHash: Uint8Array [
      97
    ],
    nextValidatorsHash: Uint8Array [
      131
    ],
    validatorsHash: Uint8Array [
      30
    ],
    version: {
      Block: 49483,
      App: 11716
    },
    lastBlockId: {
      hash: 'd82eae5dbaf4f2d90337307620696dbb20a15a12',
      partsHeader: undefined
    }
  }
}
```

### getBlocks

```js
const result = await client.getBlocks({
  paging: {
    cursor: 'Persevering',
    size: 38648,
    order: [
      {
        field: 'Investment Account',
        type: 'Soft'
      },
      {
        field: 'Cotton',
        type: 'Squares'
      }
    ]
  },
  minHeight: 73987,
  maxHeight: 37994,
  emptyExcluded: undefined
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 5,
  page: {
    cursor: 'Lead',
    next: undefined,
    total: 31884
  },
  blocks: [
    {
      height: 17700,
      numTxs: 9747,
      time: '2019-03-21T01:09:03.900Z',
      appHash: '655edf0d74710d265be6c2e1e0f2d4bfe137ec64',
      proposer: '116db17e27ceb1cc9079a644f2a48d60c9381f22',
      txs: [
        {
          tx: {
            from: '5a82a7fb1c91b3f258960893e96afc643c4fa870',
            nonce: 27223,
            signature: Uint8Array [
              123
            ],
            chainId: 'Unbranded',
            signatures: [
              {
                signer: 'leverage',
                signature: Uint8Array [
                  37
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Cheese',
                signature: Uint8Array [
                  81
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
          height: 30120,
          index: 51334,
          hash: '758481fe09f8de0c9581d73a084d385d23d054a9',
          tags: [
            {
              key: Uint8Array [
                161
              ],
              value: Uint8Array [
                85
              ]
            },
            {
              key: Uint8Array [
                69
              ],
              value: Uint8Array [
                216
              ]
            }
          ],
          code: 33,
          time: '2019-03-21T01:09:03.900Z',
          createAsset: {
            asset: 'Handmade'
          },
          accountMigrate: {
            address: 'a917f75aa1d4ef3eed009db4d1b1f30fe1a7d4f6'
          }
        },
        {
          tx: {
            from: 'bb399e3cd664c13a5015461c030aaa0696255c7f',
            nonce: 76047,
            signature: Uint8Array [
              160
            ],
            chainId: 'Rustic Granite Soap',
            signatures: [
              {
                signer: 'partnerships',
                signature: Uint8Array [
                  24
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'hack',
                signature: Uint8Array [
                  153
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
          height: 31653,
          index: 39623,
          hash: '76138925967460577e0e586eb4ac0a11c5229f1a',
          tags: [
            {
              key: Uint8Array [
                93
              ],
              value: Uint8Array [
                191
              ]
            },
            {
              key: Uint8Array [
                230
              ],
              value: Uint8Array [
                97
              ]
            }
          ],
          code: 25,
          time: '2019-03-21T01:09:03.901Z',
          createAsset: {
            asset: 'Intelligent'
          },
          accountMigrate: {
            address: 'b3680d12fcce1a6a297e231698b75e8ae0060e7c'
          }
        }
      ],
      totalTxs: 70530,
      invalidTxs: [
        {
          tx: {
            from: 'ba54099536c760a45892092fd278dc8af4669ed1',
            nonce: 16639,
            signature: Uint8Array [
              51
            ],
            chainId: 'Rustic Fresh Salad',
            signatures: [
              {
                signer: 'Cotton',
                signature: Uint8Array [
                  165
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Lead',
                signature: Uint8Array [
                  37
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
          height: 15869,
          index: 90056,
          hash: '9fe878a0550063afc5fcebed75317b4c08fb2d99',
          tags: [
            {
              key: Uint8Array [
                242
              ],
              value: Uint8Array [
                248
              ]
            },
            {
              key: Uint8Array [
                82
              ],
              value: Uint8Array [
                102
              ]
            }
          ],
          code: 7,
          time: '2019-03-21T01:09:03.901Z',
          createAsset: {
            asset: 'payment'
          },
          accountMigrate: {
            address: 'b7211384a1247d90136fdc9530fdfb9999d539ec'
          }
        },
        {
          tx: {
            from: 'cb45bd51e7c59f0ffde10f1556f471078b265bf6',
            nonce: 95441,
            signature: Uint8Array [
              97
            ],
            chainId: 'Garden',
            signatures: [
              {
                signer: 'Realigned',
                signature: Uint8Array [
                  236
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Norwegian Krone',
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
          height: 34575,
          index: 9940,
          hash: 'c1159e8737c86fd9f7c8cc4eaae4576db2f5987d',
          tags: [
            {
              key: Uint8Array [
                34
              ],
              value: Uint8Array [
                34
              ]
            },
            {
              key: Uint8Array [
                124
              ],
              value: Uint8Array [
                185
              ]
            }
          ],
          code: 8,
          time: '2019-03-21T01:09:03.901Z',
          createAsset: {
            asset: 'magenta'
          },
          accountMigrate: {
            address: 'e2b724b44a3cbc5a0cf75e57a58d9d619abd5c98'
          }
        }
      ],
      txsHashes: [
        'Borders',
        'Wyoming'
      ],
      invalidTxsHashes: [
        'Principal',
        'driver'
      ],
      consensusHash: Uint8Array [
        0
      ],
      dataHash: Uint8Array [
        248
      ],
      evidenceHash: Uint8Array [
        235
      ],
      lastCommitHash: Uint8Array [
        102
      ],
      lastResultsHash: Uint8Array [
        98
      ],
      nextValidatorsHash: Uint8Array [
        190
      ],
      validatorsHash: Uint8Array [
        106
      ],
      version: {
        Block: 77535,
        App: 2129
      },
      lastBlockId: {
        hash: '1fea44cd103540025d5130cae3a0f18c2144adef',
        partsHeader: undefined
      }
    },
    {
      height: 33753,
      numTxs: 34879,
      time: '2019-03-21T01:09:03.902Z',
      appHash: 'd0df77511a2c9f00e6078a58e6c7ced7a9e9bcab',
      proposer: '188dee7858441b692f98dea1301727b083f30796',
      txs: [
        {
          tx: {
            from: '9311504d6ed07c9ad7c6f6c4666da7773f75a962',
            nonce: 62103,
            signature: Uint8Array [
              204
            ],
            chainId: 'Kansas',
            signatures: [
              {
                signer: 'Baby',
                signature: Uint8Array [
                  217
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'United States Minor Outlying Islands',
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
          height: 24395,
          index: 87117,
          hash: '3b2b8e76a89dceb8a2c50931b916cb9c664ca97e',
          tags: [
            {
              key: Uint8Array [
                19
              ],
              value: Uint8Array [
                23
              ]
            },
            {
              key: Uint8Array [
                20
              ],
              value: Uint8Array [
                213
              ]
            }
          ],
          code: 9,
          time: '2019-03-21T01:09:03.902Z',
          createAsset: {
            asset: 'Agent'
          },
          accountMigrate: {
            address: '5faf0c8abb025f5f4d7d4eec550589cce52a8f13'
          }
        },
        {
          tx: {
            from: '48f7936da92ebd4cd374f14ba1aec3e6391d4882',
            nonce: 76904,
            signature: Uint8Array [
              76
            ],
            chainId: 'Shoes',
            signatures: [
              {
                signer: 'Alaska',
                signature: Uint8Array [
                  247
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Credit Card Account',
                signature: Uint8Array [
                  243
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
          height: 69577,
          index: 79979,
          hash: '55a1358296c76dfe3aae4557fdef3b6c839904bd',
          tags: [
            {
              key: Uint8Array [
                38
              ],
              value: Uint8Array [
                29
              ]
            },
            {
              key: Uint8Array [
                218
              ],
              value: Uint8Array [
                113
              ]
            }
          ],
          code: 35,
          time: '2019-03-21T01:09:03.903Z',
          createAsset: {
            asset: 'Investment Account'
          },
          accountMigrate: {
            address: '359957be9b89082680519ccf2b6dd3d30ccd73d4'
          }
        }
      ],
      totalTxs: 9814,
      invalidTxs: [
        {
          tx: {
            from: 'e1cba1b8fe703a59efad20f1ea4273c70e0dd826',
            nonce: 23691,
            signature: Uint8Array [
              244
            ],
            chainId: 'Shores',
            signatures: [
              {
                signer: 'RAM',
                signature: Uint8Array [
                  145
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'back-end',
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
          height: 13844,
          index: 42391,
          hash: 'becfa166a1beedfee01e0ece1d8e26eb36ec72e8',
          tags: [
            {
              key: Uint8Array [
                236
              ],
              value: Uint8Array [
                188
              ]
            },
            {
              key: Uint8Array [
                93
              ],
              value: Uint8Array [
                92
              ]
            }
          ],
          code: 0,
          time: '2019-03-21T01:09:03.904Z',
          createAsset: {
            asset: 'Borders'
          },
          accountMigrate: {
            address: '62462e1719d3b642712b4e319929a3db049d82a0'
          }
        },
        {
          tx: {
            from: '2ded7ee3814cb5f49ec601f41eb50191c621fe9d',
            nonce: 32996,
            signature: Uint8Array [
              201
            ],
            chainId: 'Faroe Islands',
            signatures: [
              {
                signer: 'Handmade',
                signature: Uint8Array [
                  210
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Incredible',
                signature: Uint8Array [
                  172
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
          height: 45692,
          index: 27692,
          hash: '76fd8edf69805260611fecc59ea3aafc22363661',
          tags: [
            {
              key: Uint8Array [
                138
              ],
              value: Uint8Array [
                83
              ]
            },
            {
              key: Uint8Array [
                168
              ],
              value: Uint8Array [
                224
              ]
            }
          ],
          code: 35,
          time: '2019-03-21T01:09:03.904Z',
          createAsset: {
            asset: 'violet'
          },
          accountMigrate: {
            address: '3803288617579e4964fd361531d537a30b2bc254'
          }
        }
      ],
      txsHashes: [
        'disintermediate',
        'Multi-tiered'
      ],
      invalidTxsHashes: [
        'redundant',
        'Regional'
      ],
      consensusHash: Uint8Array [
        64
      ],
      dataHash: Uint8Array [
        233
      ],
      evidenceHash: Uint8Array [
        2
      ],
      lastCommitHash: Uint8Array [
        161
      ],
      lastResultsHash: Uint8Array [
        231
      ],
      nextValidatorsHash: Uint8Array [
        132
      ],
      validatorsHash: Uint8Array [
        31
      ],
      version: {
        Block: 95843,
        App: 4144
      },
      lastBlockId: {
        hash: '512137264b6847c8dd58ebd27cf8d38ae3ad2347',
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
  code: 39,
  info: {
    id: 'Indiana',
    network: 'bandwidth',
    moniker: 'Wooden',
    consensusVersion: 'Licensed Steel Computer',
    synced: undefined,
    appHash: '9ed94f7e30207f66ab1cf6d03553571163a6ffda',
    blockHash: Uint8Array [
      82
    ],
    blockHeight: 42586,
    blockTime: '2019-03-21T01:09:03.906Z',
    address: '438e928da10e23f6df258b7f07109d0046bc8a6b',
    votingPower: 41527,
    totalTxs: 73354,
    version: 'solid state',
    dataVersion: 'Licensed',
    forgeAppsVersion: {
      'Auto Loan Account': 'Quality'
    },
    supportedTxs: [
      'Minnesota',
      'system'
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
  config: 'optical'
}
});
```

### getForgeState

```js
const result = await client.getForgeState({
  keys: [
    'Ameliorated',
    'Architect'
  ],
  height: 87496
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 11,
  state: {
    address: '0f7daa63a301e451dce2730ffd54ad8fed52adea',
    consensus: {
      maxBytes: 6023,
      maxGas: 15378,
      maxValidators: 64477,
      maxCandidates: 15908,
      pubKeyTypes: [
        'Mouse',
        'auxiliary'
      ],
      validators: [
        {
          address: '22c266b46db402603af3b3c6cea6d5b01aecaf23',
          power: 21811
        },
        {
          address: 'e23e4ebbfaa8f0c99414aecc57562a784f5e74bd',
          power: 52639
        }
      ],
      validatorChanged: undefined,
      paramChanged: undefined
    },
    tasks: {
      '48840': {
        item: [
          {
            type: 13,
            dataHash: 'capacitor',
            actions: [
              undefined,
              undefined
            ]
          },
          {
            type: 0,
            dataHash: 'Park',
            actions: [
              undefined,
              undefined
            ]
          }
        ]
      }
    },
    stakeSummary: {
      '16063': {
        totalStakes: '33281',
        totalUnstakes: '17980',
        context: {
          genesisTx: 'Visionary',
          renaissanceTx: 'North Carolina',
          genesisTime: '2019-03-21T01:09:03.907Z',
          renaissanceTime: '2019-03-21T01:09:03.907Z'
        }
      }
    },
    version: 'Right-sized',
    dataVersion: 'Ameliorated',
    forgeAppHash: Uint8Array [
      203
    ],
    token: {
      name: 'Practical',
      symbol: 'collaborative',
      unit: 'Flats',
      description: 'Fantastic Concrete Pizza',
      icon: Uint8Array [
        153
      ],
      decimal: 82629,
      initialSupply: 43583,
      totalSupply: 23781,
      inflationRate: 71018
    },
    txConfig: {
      maxAssetSize: 8010,
      maxListSize: 11341,
      maxMultisig: 35956,
      minimumStake: 48221
    },
    stakeConfig: {
      timeoutGeneral: 16237,
      timeoutStakeForNode: 3445
    },
    pokeConfig: {
      address: 'bdb13920edd12f6cf3799184884e23c29abd251b',
      dailyLimit: 1831,
      balance: 86012,
      amount: 24490
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
    startDate: 'Health',
    endDate: 'Georgia'
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 10,
  forgeStatistics: {
    numBlocks: [
      24145,
      17682
    ],
    numTxs: [
      96952,
      95905
    ],
    numStakes: [
      '16558',
      '98909'
    ],
    numValidators: [
      38068,
      102
    ],
    numAccountMigrateTxs: [
      66055,
      77524
    ],
    numCreateAssetTxs: [
      96608,
      59385
    ],
    numConsensusUpgradeTxs: [
      78220,
      43522
    ],
    numDeclareTxs: [
      97331,
      68321
    ],
    numDeclareFileTxs: [
      59481,
      71397
    ],
    numExchangeTxs: [
      8636,
      87758
    ],
    numStakeTxs: [
      13498,
      34865
    ],
    numSysUpgradeTxs: [
      36195,
      86851
    ],
    numTransferTxs: [
      21432,
      56029
    ],
    numUpdateAssetTxs: [
      50347,
      97208
    ],
    numConsumeAssetTxs: [
      50234,
      57327
    ],
    numPokeTxs: [
      50617,
      5237
    ],
    tps: [
      14787,
      88288
    ],
    maxTps: 80126,
    avgTps: 73346
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
  code: 5,
  netInfo: {
    listening: undefined,
    listeners: [
      'HDD',
      'Graphic Interface'
    ],
    nPeers: 89705,
    peers: [
      {
        id: 'Ergonomic Cotton Pizza',
        network: 'compressing',
        consensusVersion: 'West Virginia',
        moniker: 'New Mexico',
        ip: 'Stream',
        geoInfo: {
          city: 'withdrawal',
          country: 'turquoise',
          latitude: 2455.21,
          longitude: 48619.25
        }
      },
      {
        id: 'synthesize',
        network: 'JBOD',
        consensusVersion: 'feed',
        moniker: 'CFA Franc BCEAO',
        ip: 'Ergonomic Metal Shoes',
        geoInfo: {
          city: 'SSL',
          country: 'Chief',
          latitude: 16446.83,
          longitude: 60886.88
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
    id: 'Shirt',
    network: 'Handmade',
    moniker: 'morph',
    consensusVersion: 'Sleek',
    synced: undefined,
    appHash: '4e455a81db95c7207909351a9c2275b3fef2a317',
    blockHash: Uint8Array [
      58
    ],
    blockHeight: 33111,
    blockTime: '2019-03-21T01:09:03.908Z',
    address: '649a8d446ce8d5a70f657f45bda6c00eec4c3741',
    votingPower: 12146,
    totalTxs: 63058,
    version: 'SCSI',
    dataVersion: 'portals',
    forgeAppsVersion: {
      secondary: 'withdrawal'
    },
    supportedTxs: [
      'Investment Account',
      'Avon'
    ],
    ip: 'COM',
    geoInfo: {
      city: 'product',
      country: 'Electronics',
      latitude: 24942.72,
      longitude: 20946.43
    },
    p2pAddress: 'Orchestrator'
  }
}
});
```

### getStakeState

```js
const stream = client.getStakeState({
  address: '0bb7859bbd5b81b3ea7df55912ba8f0c5b919175',
  keys: [
    'quantify',
    'French Polynesia'
  ],
  height: 79823
});

// output
{
  code: 6,
  state: {
    address: 'fa35946477a36099bfc74492850b888a8c326014',
    from: '3957542f401958af5afa3085643b5f0a5ddf9db5',
    to: 'ecd78900bc654ce06d8edf7b24de4785eaa5f5a6',
    balance: '79412',
    message: 'Berkshire',
    context: {
      genesisTx: 'Rubber',
      renaissanceTx: 'Applications',
      genesisTime: '2019-03-21T01:09:03.909Z',
      renaissanceTime: '2019-03-21T01:09:03.909Z'
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
    cursor: 'Toys',
    size: 68602,
    order: [
      {
        field: 'microchip',
        type: 'Health'
      },
      {
        field: 'gold',
        type: 'Analyst'
      }
    ]
  },
  addressFilter: {
    sender: 'Money Market Account',
    receiver: 'capacitor',
    direction: 1
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 9,
  page: {
    cursor: 'CFA Franc BEAC',
    next: undefined,
    total: 33918
  },
  stakes: [
    {
      address: '33a41b874fd647f7697b04bed298f8f75fd0a327',
      balance: '28533',
      sender: 'connecting',
      receiver: 'Enterprise-wide',
      genesisTime: 'navigating',
      renaissanceTime: 'Money Market Account',
      message: 'Gourde US Dollar',
      type: 78285
    },
    {
      address: 'fd9494075bee53a2125faaeb918abdc525ce5043',
      balance: '67490',
      sender: 'Developer',
      receiver: 'Run',
      genesisTime: 'Cedi',
      renaissanceTime: 'content',
      message: 'Canyon',
      type: 85800
    }
  ]
}
});
```

### getTopAccounts

```js
const result = await client.getTopAccounts({
  paging: {
    cursor: 'mint green',
    size: 44582,
    order: [
      {
        field: 'hierarchy',
        type: 'Corporate'
      },
      {
        field: 'wireless',
        type: 'Cambridgeshire'
      }
    ]
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 7,
  page: {
    cursor: 'interface',
    next: undefined,
    total: 6155
  },
  accounts: [
    {
      address: 'fadad0932af02e64dac54895e1108bbb367f1ef5',
      balance: '19839',
      numAssets: 65496,
      numTxs: 32064,
      nonce: 166,
      genesisTime: 'structure',
      renaissanceTime: 'alarm',
      moniker: 'payment',
      migratedFrom: 'sticky',
      migratedTo: 'Representative',
      totalReceivedStakes: '92460',
      totalStakes: '31277',
      totalUnstakes: '38991',
      recentNumTxs: [
        97210,
        39616
      ]
    },
    {
      address: 'a9dda7a839047c69920bedeba7ac656e6ae92eee',
      balance: '32806',
      numAssets: 51513,
      numTxs: 57270,
      nonce: 44250,
      genesisTime: 'SCSI',
      renaissanceTime: 'intranet',
      moniker: 'index',
      migratedFrom: 'leverage',
      migratedTo: 'alarm',
      totalReceivedStakes: '38090',
      totalStakes: '6835',
      totalUnstakes: '25212',
      recentNumTxs: [
        47876,
        17992
      ]
    }
  ]
}
});
```

### getTx

```js
const stream = client.getTx({
  hash: '24dbf81a3ff0120d85ffb90f28a36d17c53ca4d4'
});

// output
{
  code: 17,
  info: {
    tx: {
      from: 'fbe475c75c63fad7ce46f2dd136e09edeee90374',
      nonce: 77005,
      signature: Uint8Array [
        218
      ],
      chainId: 'whiteboard',
      signatures: [
        {
          signer: 'Licensed Fresh Bike',
          signature: Uint8Array [
            15
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        {
          signer: 'Automotive',
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
    height: 10869,
    index: 17681,
    hash: '8855a405280c80f728acb02ebfa4e7e0265ce8a3',
    tags: [
      {
        key: Uint8Array [
          218
        ],
        value: Uint8Array [
          132
        ]
      },
      {
        key: Uint8Array [
          131
        ],
        value: Uint8Array [
          182
        ]
      }
    ],
    code: 403,
    time: '2019-03-21T01:09:03.911Z',
    createAsset: {
      asset: 'Toys'
    },
    accountMigrate: {
      address: '78dccead4cf45a56be4de03186ac5fc1f16061a8'
    }
  }
}
```

### getUnconfirmedTxs

```js
const result = await client.getUnconfirmedTxs({
  limit: 89899
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 0,
  unconfirmedTxs: {
    nTxs: 17581,
    txs: [
      {
        from: '157682a40329c02d7870a177a5eed0f9ffa41169',
        nonce: 89937,
        signature: Uint8Array [
          63
        ],
        chainId: 'Agent',
        signatures: [
          {
            signer: 'deposit',
            signature: Uint8Array [
              186
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'cross-platform',
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
        from: '17986b7bedebdd13c6ebd1fc21048ec7683ea4e0',
        nonce: 73735,
        signature: Uint8Array [
          104
        ],
        chainId: 'Alaska',
        signatures: [
          {
            signer: 'deposit',
            signature: Uint8Array [
              153
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'generate',
            signature: Uint8Array [
              118
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
  code: 2,
  validatorsInfo: {
    blockHeight: 52619,
    validators: [
      {
        address: 'aec3d2db32c9041a27bf92cdd6b18b2779974e61',
        pubKey: {
          type: 'Regional',
          data: Uint8Array [
            234
          ]
        },
        votingPower: 42287,
        proposerPriority: 'Manager',
        name: 'Bedfordshire'
      },
      {
        address: '127b891260678f192b865169c20de5b2b2b5dcbf',
        pubKey: {
          type: 'Frozen',
          data: Uint8Array [
            100
          ]
        },
        votingPower: 68738,
        proposerPriority: 'Chicken',
        name: 'Engineer'
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
    cursor: 'knowledge base',
    size: 34454,
    order: [
      {
        field: 'Intelligent Metal Bike',
        type: 'EXE'
      },
      {
        field: 'JSON',
        type: 'back up'
      }
    ]
  },
  address: 'c8eaae6c090eb722947cac9263f036fa97c8fecf'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 34,
  page: {
    cursor: 'cross-media',
    next: undefined,
    total: 62657
  },
  transactions: [
    {
      consumeAsset: {
        asset: 'multi-byte'
      }
    },
    {
      consumeAsset: {
        asset: 'Fundamental'
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
    cursor: 'hack',
    size: 9878,
    order: [
      {
        field: 'Estates',
        type: 'Chief'
      },
      {
        field: 'deposit',
        type: 'knowledge base'
      }
    ]
  },
  proposer: '8640d7c9d75ddcc8ae41a15e48d872d5926c1138',
  timeFilter: {
    startDateTime: 'ivory',
    endDateTime: 'Intelligent Frozen Pizza'
  },
  heightFilter: {
    fromHeight: 96548,
    toHeight: 98151
  },
  numTxsFilter: {
    minNumTxs: 96080,
    maxNumTxs: 42927
  },
  numInvalidTxsFilter: {
    minNumInvalidTxs: 6752,
    maxNumInvalidTxs: 79140
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 39,
  page: {
    cursor: 'Configuration',
    next: undefined,
    total: 8622
  },
  blocks: [
    {
      height: 42008,
      time: 'Refined',
      proposer: 'fdc84669c1d3e5e79e5bebd72631fc4a41580895',
      numTxs: 81380,
      numInvalidTxs: 60767
    },
    {
      height: 21362,
      time: 'back-end',
      proposer: 'ab944b032b2e09c78bc2b9187111fa895ebef194',
      numTxs: 16247,
      numInvalidTxs: 29830
    }
  ]
}
});
```

### listTransactions

```js
const result = await client.listTransactions({
  paging: {
    cursor: 'evolve',
    size: 8137,
    order: [
      {
        field: 'Practical',
        type: 'Technician'
      },
      {
        field: 'payment',
        type: 'brand'
      }
    ]
  },
  timeFilter: {
    startDateTime: 'Generic Concrete Chair',
    endDateTime: 'Integration'
  },
  addressFilter: {
    sender: 'mindshare',
    receiver: 'application',
    direction: 1
  },
  typeFilter: {
    types: [
      'Credit Card Account',
      'programming'
    ]
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 3,
  page: {
    cursor: 'monitor',
    next: undefined,
    total: 33627
  },
  transactions: [
    {
      consumeAsset: {
        asset: 'bi-directional'
      }
    },
    {
      consumeAsset: {
        asset: 'Human'
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
  code: 26,
  address: '17e775782184794956d3c96f49254826318198bf'
}
```

### loadFile

```js
const stream = client.loadFile({
  hash: '42dfa4076f0f68dbf866ef3f9f49468b3a3759d8'
});

// output
{
  code: 34,
  chunk: Uint8Array [
    155
  ]
}
```

### loadWallet

```js
const result = await client.loadWallet({
  address: 'acdcf614aa31c56681257835d34dc19c777c3129',
  passphrase: 'Handmade'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 33,
  token: 'Personal Loan Account',
  wallet: {
    type: {
      pk: 1,
      hash: 0,
      address: 0,
      role: 4
    },
    sk: Uint8Array [
      44
    ],
    pk: Uint8Array [
      214
    ],
    address: '3247d1106862a9d13056f1d57088c57c76ba8dde'
  }
}
});
```

### multisig

```js
const result = await client.multisig({
  tx: {
    from: '2c4aa5ff13b4fb2c3d3bae9eed4448e634333125',
    nonce: 72093,
    signature: Uint8Array [
      152
    ],
    chainId: 'Metical',
    signatures: [
      {
        signer: 'Automated',
        signature: Uint8Array [
          165
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'Cambridgeshire',
        signature: Uint8Array [
          81
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
      hash: 1,
      address: 0,
      role: 5
    },
    sk: Uint8Array [
      96
    ],
    pk: Uint8Array [
      84
    ],
    address: 'ca519dd5492ba40924796763b54fd9ede639fc64'
  },
  token: '24/7'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 504,
  tx: {
    from: '6657bf9b76b9e96614d73452ffd4d91af23a3e75',
    nonce: 11782,
    signature: Uint8Array [
      249
    ],
    chainId: 'Books',
    signatures: [
      {
        signer: 'Mill',
        signature: Uint8Array [
          199
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'Producer',
        signature: Uint8Array [
          35
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
  hash: 'e52d8e2e411c3a2bbb8488a0e055d79f82e01b6b'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 24
}
});
```

### process

```js
const stream = client.process({
  verifyTx: {
    tx: {
      from: '2c5e893341063a6cf641f50dc790fc507b551946',
      nonce: 62865,
      signature: Uint8Array [
        3
      ],
      chainId: 'Integration',
      signatures: [
        {
          signer: 'Human',
          signature: Uint8Array [
            119
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        {
          signer: 'yellow',
          signature: Uint8Array [
            59
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
        balance: '46179',
        nonce: 79753,
        numTxs: 8224,
        address: '16bd83806b9564cf90c665292f2b16f577302db2',
        pk: Uint8Array [
          170
        ],
        type: {
          pk: 1,
          hash: 6,
          address: 0,
          role: 3
        },
        moniker: 'innovate',
        context: {
          genesisTx: 'Corporate',
          renaissanceTx: 'Supervisor',
          genesisTime: '2019-03-21T01:09:03.915Z',
          renaissanceTime: '2019-03-21T01:09:03.915Z'
        },
        issuer: 'Health',
        migratedTo: [
          'Global',
          'Metal'
        ],
        migratedFrom: [
          'Islands',
          'Awesome Frozen Bike'
        ],
        numAssets: 16553,
        stake: {
          totalStakes: '26628',
          totalUnstakes: '35975',
          totalReceivedStakes: '64966',
          recentStakes: {
            items: [
              Uint8Array [
                203
              ],
              Uint8Array [
                118
              ]
            ],
            typeUrl: 'multi-byte',
            maxItems: 35763,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                190
              ],
              Uint8Array [
                82
              ]
            ],
            typeUrl: 'Infrastructure',
            maxItems: 87134,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              107
            ],
            Uint8Array [
              233
            ]
          ],
          typeUrl: 'pricing structure',
          maxItems: 80220,
          circular: undefined,
          fifo: undefined
        },
        poke: {
          dailyLimit: '65698',
          leftover: '40541',
          amount: '11787'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        balance: '60070',
        nonce: 9384,
        numTxs: 61858,
        address: '6f61ae3f42c8aefc59166b340f1e5dea49e77882',
        pk: Uint8Array [
          58
        ],
        type: {
          pk: 1,
          hash: 7,
          address: 1,
          role: 7
        },
        moniker: 'extranet',
        context: {
          genesisTx: 'optical',
          renaissanceTx: 'card',
          genesisTime: '2019-03-21T01:09:03.915Z',
          renaissanceTime: '2019-03-21T01:09:03.915Z'
        },
        issuer: 'white',
        migratedTo: [
          'invoice',
          'holistic'
        ],
        migratedFrom: [
          'Salad',
          'Sleek Frozen Bacon'
        ],
        numAssets: 62565,
        stake: {
          totalStakes: '98951',
          totalUnstakes: '45091',
          totalReceivedStakes: '27806',
          recentStakes: {
            items: [
              Uint8Array [
                112
              ],
              Uint8Array [
                82
              ]
            ],
            typeUrl: 'Summit',
            maxItems: 51360,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                107
              ],
              Uint8Array [
                123
              ]
            ],
            typeUrl: 'real-time',
            maxItems: 53923,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              131
            ],
            Uint8Array [
              211
            ]
          ],
          typeUrl: 'Horizontal',
          maxItems: 90037,
          circular: undefined,
          fifo: undefined
        },
        poke: {
          dailyLimit: '20686',
          leftover: '96228',
          amount: '45754'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    assets: [
      {
        address: 'bcf6d8622d489c4ed943d67b8d82ba31779c22ce',
        owner: 'Martinique',
        moniker: 'Incredible',
        readonly: undefined,
        transferrable: undefined,
        ttl: 79229,
        consumedTime: '2019-03-21T01:09:03.915Z',
        issuer: 'intuitive',
        stake: {
          totalStakes: '62479',
          totalUnstakes: '3694',
          totalReceivedStakes: '15362',
          recentStakes: {
            items: [
              Uint8Array [
                56
              ],
              Uint8Array [
                15
              ]
            ],
            typeUrl: 'B2C',
            maxItems: 80367,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                37
              ],
              Uint8Array [
                16
              ]
            ],
            typeUrl: 'Supervisor',
            maxItems: 12544,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Belgium',
          renaissanceTx: 'Connecticut',
          genesisTime: '2019-03-21T01:09:03.916Z',
          renaissanceTime: '2019-03-21T01:09:03.916Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: 'fdfd12ebf81972f7f4b45f49e8704d7a62a0fbf3',
        owner: 'Oregon',
        moniker: 'invoice',
        readonly: undefined,
        transferrable: undefined,
        ttl: 52430,
        consumedTime: '2019-03-21T01:09:03.916Z',
        issuer: 'payment',
        stake: {
          totalStakes: '72676',
          totalUnstakes: '34772',
          totalReceivedStakes: '88958',
          recentStakes: {
            items: [
              Uint8Array [
                60
              ],
              Uint8Array [
                234
              ]
            ],
            typeUrl: 'Liaison',
            maxItems: 42388,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                125
              ],
              Uint8Array [
                165
              ]
            ],
            typeUrl: 'Indiana',
            maxItems: 99761,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Graphical User Interface',
          renaissanceTx: 'Steel',
          genesisTime: '2019-03-21T01:09:03.916Z',
          renaissanceTime: '2019-03-21T01:09:03.916Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    stakes: [
      {
        address: '1c7b51a0e961bd6eb38715f6d3940f47b620ffcf',
        from: 'becb78f37863b6ac8a69cfd3ab232e286cc11c5f',
        to: '8c88163f63c00ef3118750e36d16d12a62f1ee66',
        balance: '64979',
        message: 'fault-tolerant',
        context: {
          genesisTx: 'Car',
          renaissanceTx: 'Investment Account',
          genesisTime: '2019-03-21T01:09:03.916Z',
          renaissanceTime: '2019-03-21T01:09:03.916Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: '205796a532fe1316efb804a1642b8121d7d2a6b9',
        from: '6f635df3b4c664958a90a737c89ba9c63fe61b98',
        to: 'bb927644c3714cbc90af3791cee2cbd4300cab0a',
        balance: '36527',
        message: 'Tasty',
        context: {
          genesisTx: 'Forward',
          renaissanceTx: 'Personal Loan Account',
          genesisTime: '2019-03-21T01:09:03.916Z',
          renaissanceTime: '2019-03-21T01:09:03.916Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    context: {
      txHash: '408b82baba1209527ef894a81a5b4f2c63d4cdca',
      blockHeight: 98046,
      blockTime: '2019-03-21T01:09:03.916Z',
      totalTxs: 25539,
      txStatistics: {
        numAccountMigrateTxs: 90055,
        numCreateAssetTxs: 13708,
        numConsensusUpgradeTxs: 42017,
        numDeclareTxs: 59916,
        numDeclareFileTxs: 91361,
        numExchangeTxs: 58906,
        numStakeTxs: 13736,
        numSysUpgradeTxs: 29395,
        numTransferTxs: 47903,
        numUpdateAssetTxs: 41539,
        numConsumeAssetTxs: 94692,
        numPokeTxs: 97766
      },
      txIndex: 1929,
      lastBlockTime: '2019-03-21T01:09:03.916Z'
    },
    appState: {
      address: 'd7d5bea4457e2421e9c3f251e933e89d2928e7a4',
      consensus: {
        maxBytes: 81515,
        maxGas: 45538,
        maxValidators: 23383,
        maxCandidates: 40621,
        pubKeyTypes: [
          'open-source',
          'conglomeration'
        ],
        validators: [
          {
            address: 'a561e000fe13c4a3a6b61f8f40acc3e10d2df6a0',
            power: 37513
          },
          {
            address: 'ba2147e78e776d602e703e130202b118fafca626',
            power: 26053
          }
        ],
        validatorChanged: undefined,
        paramChanged: undefined
      },
      tasks: {
        '15406': {
          item: [
            {
              type: 12,
              dataHash: 'mesh',
              actions: [
                undefined,
                undefined
              ]
            },
            {
              type: 13,
              dataHash: 'Multi-layered',
              actions: [
                undefined,
                undefined
              ]
            }
          ]
        }
      },
      stakeSummary: {
        '64123': {
          totalStakes: '32429',
          totalUnstakes: '91438',
          context: {
            genesisTx: 'Integration',
            renaissanceTx: 'granular',
            genesisTime: '2019-03-21T01:09:03.916Z',
            renaissanceTime: '2019-03-21T01:09:03.916Z'
          }
        }
      },
      version: 'withdrawal',
      dataVersion: 'Personal Loan Account',
      forgeAppHash: Uint8Array [
        139
      ],
      token: {
        name: 'quantify',
        symbol: 'interface',
        unit: 'Bedfordshire',
        description: 'Gorgeous',
        icon: Uint8Array [
          154
        ],
        decimal: 78073,
        initialSupply: 62472,
        totalSupply: 60685,
        inflationRate: 56173
      },
      txConfig: {
        maxAssetSize: 80265,
        maxListSize: 77851,
        maxMultisig: 83666,
        minimumStake: 96843
      },
      stakeConfig: {
        timeoutGeneral: 62995,
        timeoutStakeForNode: 43861
      },
      pokeConfig: {
        address: '3774cc06c6b39cf4f7c8fdd60c94fe6098ab2de7',
        dailyLimit: 65245,
        balance: 24525,
        amount: 61218
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
    code: 0
  }
}
```

### processOne

```js
const result = await client.processOne({
  verifyTx: {
    tx: {
      from: 'b58109e03218721e7ab859b838d0ba53abc98a81',
      nonce: 9985,
      signature: Uint8Array [
        116
      ],
      chainId: 'Soft',
      signatures: [
        {
          signer: 'support',
          signature: Uint8Array [
            47
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        {
          signer: 'expedite',
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
    states: [
      {
        balance: '84260',
        nonce: 21562,
        numTxs: 89401,
        address: '6397bb90a542822a81029c5e67e30bc97fcefaf4',
        pk: Uint8Array [
          221
        ],
        type: {
          pk: 1,
          hash: 6,
          address: 0,
          role: 0
        },
        moniker: 'Pants',
        context: {
          genesisTx: 'lavender',
          renaissanceTx: 'bricks-and-clicks',
          genesisTime: '2019-03-21T01:09:03.918Z',
          renaissanceTime: '2019-03-21T01:09:03.918Z'
        },
        issuer: 'redundant',
        migratedTo: [
          'Designer',
          'deposit'
        ],
        migratedFrom: [
          'Baby',
          'Radial'
        ],
        numAssets: 11405,
        stake: {
          totalStakes: '82593',
          totalUnstakes: '54302',
          totalReceivedStakes: '52388',
          recentStakes: {
            items: [
              Uint8Array [
                85
              ],
              Uint8Array [
                15
              ]
            ],
            typeUrl: 'Avon',
            maxItems: 5602,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                9
              ],
              Uint8Array [
                152
              ]
            ],
            typeUrl: 'Rustic Rubber Soap',
            maxItems: 70981,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              66
            ],
            Uint8Array [
              37
            ]
          ],
          typeUrl: 'Persistent',
          maxItems: 2690,
          circular: undefined,
          fifo: undefined
        },
        poke: {
          dailyLimit: '33406',
          leftover: '3231',
          amount: '35190'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        balance: '90301',
        nonce: 89006,
        numTxs: 69874,
        address: '2b976e0c0731a4eb5f4a3df91907f923e13b56d0',
        pk: Uint8Array [
          182
        ],
        type: {
          pk: 0,
          hash: 14,
          address: 0,
          role: 8
        },
        moniker: 'Car',
        context: {
          genesisTx: 'Fish',
          renaissanceTx: 'bricks-and-clicks',
          genesisTime: '2019-03-21T01:09:03.918Z',
          renaissanceTime: '2019-03-21T01:09:03.918Z'
        },
        issuer: 'Developer',
        migratedTo: [
          'Hungary',
          'quantify'
        ],
        migratedFrom: [
          'Web',
          'pink'
        ],
        numAssets: 75053,
        stake: {
          totalStakes: '71739',
          totalUnstakes: '15794',
          totalReceivedStakes: '15964',
          recentStakes: {
            items: [
              Uint8Array [
                209
              ],
              Uint8Array [
                16
              ]
            ],
            typeUrl: 'Netherlands Antillian Guilder',
            maxItems: 91108,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                218
              ],
              Uint8Array [
                109
              ]
            ],
            typeUrl: 'withdrawal',
            maxItems: 49451,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              17
            ],
            Uint8Array [
              156
            ]
          ],
          typeUrl: 'Jewelery',
          maxItems: 50280,
          circular: undefined,
          fifo: undefined
        },
        poke: {
          dailyLimit: '59842',
          leftover: '33639',
          amount: '69336'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    assets: [
      {
        address: '3717254e664f25d50bbcfea5a3872c28fcb91ba6',
        owner: 'Metal',
        moniker: 'Mobility',
        readonly: undefined,
        transferrable: undefined,
        ttl: 24533,
        consumedTime: '2019-03-21T01:09:03.918Z',
        issuer: 'Intelligent',
        stake: {
          totalStakes: '46979',
          totalUnstakes: '75573',
          totalReceivedStakes: '75979',
          recentStakes: {
            items: [
              Uint8Array [
                168
              ],
              Uint8Array [
                34
              ]
            ],
            typeUrl: 'enhance',
            maxItems: 73075,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                3
              ],
              Uint8Array [
                147
              ]
            ],
            typeUrl: 'withdrawal',
            maxItems: 44277,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Refined Rubber Pizza',
          renaissanceTx: 'monitor',
          genesisTime: '2019-03-21T01:09:03.918Z',
          renaissanceTime: '2019-03-21T01:09:03.918Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: 'a7112a1f9c45060f59903cbb0c9e17bdaa68267b',
        owner: 'GB',
        moniker: 'Home Loan Account',
        readonly: undefined,
        transferrable: undefined,
        ttl: 60149,
        consumedTime: '2019-03-21T01:09:03.918Z',
        issuer: 'Station',
        stake: {
          totalStakes: '55498',
          totalUnstakes: '62705',
          totalReceivedStakes: '28082',
          recentStakes: {
            items: [
              Uint8Array [
                88
              ],
              Uint8Array [
                109
              ]
            ],
            typeUrl: 'Licensed Steel Shoes',
            maxItems: 14224,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                82
              ],
              Uint8Array [
                248
              ]
            ],
            typeUrl: 'Intelligent',
            maxItems: 61557,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'driver',
          renaissanceTx: 'bus',
          genesisTime: '2019-03-21T01:09:03.919Z',
          renaissanceTime: '2019-03-21T01:09:03.919Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    stakes: [
      {
        address: 'e5a16c003a97f33f1d61574867914b3f186686dc',
        from: '572d12689a21639eb14ed548ed38f8233f7c8a35',
        to: '0d8c1e8c99928ef0b06a5480a61f59a0ff0e80df',
        balance: '28312',
        message: 'South Dakota',
        context: {
          genesisTx: 'disintermediate',
          renaissanceTx: 'New Hampshire',
          genesisTime: '2019-03-21T01:09:03.919Z',
          renaissanceTime: '2019-03-21T01:09:03.919Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: '6f9e7fb8888fe6da0857446ea4a240edbc5c2526',
        from: '68b017b38177ed7d1204e439b38b2d53d43fc0c5',
        to: '16aa5c4976a018a07261fddb62ce22d7423edf25',
        balance: '7366',
        message: 'Baby',
        context: {
          genesisTx: 'indigo',
          renaissanceTx: 'XML',
          genesisTime: '2019-03-21T01:09:03.919Z',
          renaissanceTime: '2019-03-21T01:09:03.919Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    context: {
      txHash: 'ccb20b33d269b6ef7c174ec5a4602bc004990823',
      blockHeight: 8942,
      blockTime: '2019-03-21T01:09:03.919Z',
      totalTxs: 42998,
      txStatistics: {
        numAccountMigrateTxs: 57015,
        numCreateAssetTxs: 59085,
        numConsensusUpgradeTxs: 93860,
        numDeclareTxs: 83859,
        numDeclareFileTxs: 99545,
        numExchangeTxs: 66323,
        numStakeTxs: 84039,
        numSysUpgradeTxs: 86809,
        numTransferTxs: 95393,
        numUpdateAssetTxs: 74633,
        numConsumeAssetTxs: 5536,
        numPokeTxs: 22998
      },
      txIndex: 63759,
      lastBlockTime: '2019-03-21T01:09:03.919Z'
    },
    appState: {
      address: 'b4806c652782e42545e04adbb53f1de3dda54bee',
      consensus: {
        maxBytes: 91160,
        maxGas: 90461,
        maxValidators: 32076,
        maxCandidates: 41787,
        pubKeyTypes: [
          'demand-driven',
          'exploit'
        ],
        validators: [
          {
            address: '9f808a9aedcdb7439620459b7a712c4b28641455',
            power: 75918
          },
          {
            address: 'b20671e81a12cf240c7f758ff86a34abf3ee80ac',
            power: 36515
          }
        ],
        validatorChanged: undefined,
        paramChanged: undefined
      },
      tasks: {
        '22441': {
          item: [
            {
              type: 14,
              dataHash: 'Assurance',
              actions: [
                undefined,
                undefined
              ]
            },
            {
              type: 1,
              dataHash: 'Montserrat',
              actions: [
                undefined,
                undefined
              ]
            }
          ]
        }
      },
      stakeSummary: {
        '12265': {
          totalStakes: '60289',
          totalUnstakes: '84883',
          context: {
            genesisTx: 'Corner',
            renaissanceTx: 'UIC-Franc',
            genesisTime: '2019-03-21T01:09:03.919Z',
            renaissanceTime: '2019-03-21T01:09:03.919Z'
          }
        }
      },
      version: 'moderator',
      dataVersion: 'Granite',
      forgeAppHash: Uint8Array [
        220
      ],
      token: {
        name: 'Bahraini Dinar',
        symbol: 'Directives',
        unit: 'Applications',
        description: 'Home Loan Account',
        icon: Uint8Array [
          61
        ],
        decimal: 43168,
        initialSupply: 49771,
        totalSupply: 25491,
        inflationRate: 25896
      },
      txConfig: {
        maxAssetSize: 17981,
        maxListSize: 96643,
        maxMultisig: 79472,
        minimumStake: 73972
      },
      stakeConfig: {
        timeoutGeneral: 51214,
        timeoutStakeForNode: 57510
      },
      pokeConfig: {
        address: '00b2c5af7b7acd4c07d1c0a69d6c64933de0181c',
        dailyLimit: 3131,
        balance: 3199,
        amount: 74192
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
    code: 27
  }
}
});
```

### recoverWallet

```js
const result = await client.recoverWallet({
  data: Uint8Array [
    123
  ],
  type: {
    pk: 1,
    hash: 7,
    address: 0,
    role: 8
  },
  passphrase: 'Assurance',
  moniker: 'Chair'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 6,
  token: 'West Virginia',
  wallet: {
    type: {
      pk: 0,
      hash: 2,
      address: 1,
      role: 1
    },
    sk: Uint8Array [
      73
    ],
    pk: Uint8Array [
      240
    ],
    address: '3d2e3baf200eefe01d57c35d4e60d5912c3a2a10'
  }
}
});
```

### removeWallet

```js
const result = await client.removeWallet({
  address: '38830d96b14120167558a166b0b5f60d20d02858'
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
  key: 'Rial Omani',
  value: 'Central'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 22,
  txs: [
    {
      tx: {
        from: 'a451059ee6c88fa9e0352a6003657d10d2c4a1d4',
        nonce: 98573,
        signature: Uint8Array [
          218
        ],
        chainId: 'index',
        signatures: [
          {
            signer: 'Congolese Franc',
            signature: Uint8Array [
              133
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'Way',
            signature: Uint8Array [
              235
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
      height: 14821,
      index: 97553,
      hash: '068fa5137030a295a6bdce8e217e17d5095cc74f',
      tags: [
        {
          key: Uint8Array [
            208
          ],
          value: Uint8Array [
            119
          ]
        },
        {
          key: Uint8Array [
            216
          ],
          value: Uint8Array [
            107
          ]
        }
      ],
      code: 40,
      time: '2019-03-21T01:09:03.921Z',
      createAsset: {
        asset: 'Associate'
      },
      accountMigrate: {
        address: 'baedbb8ef79bdb92c2efdbf888f20a9f76270743'
      }
    },
    {
      tx: {
        from: 'dee80472445aa40f6e9ef21775cba633b84f8377',
        nonce: 36052,
        signature: Uint8Array [
          14
        ],
        chainId: 'transmitter',
        signatures: [
          {
            signer: 'Forward',
            signature: Uint8Array [
              146
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'technologies',
            signature: Uint8Array [
              168
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
      height: 5189,
      index: 99715,
      hash: '3df908b5d521557262cfd820cb7341fa9c19c71f',
      tags: [
        {
          key: Uint8Array [
            16
          ],
          value: Uint8Array [
            213
          ]
        },
        {
          key: Uint8Array [
            67
          ],
          value: Uint8Array [
            155
          ]
        }
      ],
      code: 16,
      time: '2019-03-21T01:09:03.921Z',
      createAsset: {
        asset: 'generate'
      },
      accountMigrate: {
        address: '8044686bca5483ca713a1ceb8d13781fcc1ad713'
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
    from: '7c2f65ef53279c8741829b81c3ad8dcae679a0e5',
    nonce: 66041,
    signature: Uint8Array [
      161
    ],
    chainId: 'South Africa',
    signatures: [
      {
        signer: 'SQL',
        signature: Uint8Array [
          149
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'capacitor',
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
  wallet: {
    type: {
      pk: 1,
      hash: 13,
      address: 1,
      role: 8
    },
    sk: Uint8Array [
      0
    ],
    pk: Uint8Array [
      143
    ],
    address: 'acb137374ab9940b97859e5a1662cc51c0b80f9f'
  },
  token: 'killer',
  commit: undefined
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 42,
  hash: '1b582114b7569f44df7c2a6f51289d26c7b1f088'
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
      hash: 1,
      address: 1,
      role: 7
    },
    sk: Uint8Array [
      150
    ],
    pk: Uint8Array [
      152
    ],
    address: 'd38a5d3368eff2dddf49d902b3fb78539086bee9'
  },
  token: 'Kansas'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 9,
  signature: Uint8Array [
    125
  ]
}
});
```

### storeFile

```js
const result = await client.storeFile({
  chunk: Uint8Array [
    21
  ]
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 1,
  hash: '7b88b9eef07fcfbe2ee8df0f6249113a4ef8c251'
}
});
```

### subscribe

```js
const stream = client.subscribe({
  type: 3,
  filter: 'Cambridgeshire'
});

// output
{
  topic: 'Switzerland'
}
```

### unsubscribe

```js
const result = await client.unsubscribe({
  topic: 'Steel'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 7
}
});
```


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |
