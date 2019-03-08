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
  from: '3568871d5a1f0ac8ea80cb2ed6071dcc0a5ef40c',
  nonce: 22730,
  wallet: {
    type: {
      pk: 0,
      hash: 14,
      address: 1,
      role: 7
    },
    sk: Uint8Array [
      218
    ],
    pk: Uint8Array [
      49
    ],
    address: '06cb6e5b87a4001ddc5c8151c509996e9f827dde'
  },
  token: 'Table'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 403,
  tx: {
    from: '3baaf3ee85b82f9aab779b1dc5c32938a7248de8',
    nonce: 11696,
    signature: Uint8Array [
      1
    ],
    chainId: 'calculating',
    signatures: [
      {
        signer: 'Valley',
        signature: Uint8Array [
          1
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'Customer',
        signature: Uint8Array [
          151
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
  passphrase: 'Security',
  type: {
    pk: 0,
    hash: 14,
    address: 1,
    role: 6
  },
  moniker: 'strategy'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 26,
  token: 'Iceland',
  wallet: {
    type: {
      pk: 0,
      hash: 14,
      address: 0,
      role: 2
    },
    sk: Uint8Array [
      195
    ],
    pk: Uint8Array [
      215
    ],
    address: 'e3b86f0cfe014e9134adf1d4afb0a793007c400c'
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
  code: 500,
  wallet: {
    type: {
      pk: 1,
      hash: 14,
      address: 0,
      role: 1
    },
    sk: Uint8Array [
      116
    ],
    pk: Uint8Array [
      2
    ],
    address: '58b7dd3f97b90d55aafb34d449f5daf801352274'
  }
}
});
```

### getAccountState

```js
const stream = client.getAccountState({
  address: '6f13fc75cc49c0acaf4855d138ac8402bcaf8fb5',
  keys: [
    'deposit',
    'platforms'
  ],
  height: 72918
});

// output
{
  code: 2,
  state: {
    balance: '9238',
    nonce: 74837,
    numTxs: 98153,
    address: '2c287e575dd4aa719fcc4b8e6426ac1d10591e1f',
    pk: Uint8Array [
      205
    ],
    type: {
      pk: 0,
      hash: 7,
      address: 0,
      role: 0
    },
    moniker: 'eco-centric',
    context: {
      genesisTx: 'multimedia',
      renaissanceTx: 'synthesizing',
      genesisTime: '2019-03-08T03:14:07.466Z',
      renaissanceTime: '2019-03-08T03:14:07.466Z'
    },
    issuer: 'capacitor',
    migratedTo: [
      'Technician',
      'orange'
    ],
    migratedFrom: [
      'deposit',
      'Dynamic'
    ],
    numAssets: 76881,
    stake: {
      totalStakes: '48778',
      totalUnstakes: '44073',
      totalReceivedStakes: '30840',
      recentStakes: {
        items: [
          Uint8Array [
            111
          ],
          Uint8Array [
            58
          ]
        ],
        typeUrl: 'XSS',
        maxItems: 21840,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [
            90
          ],
          Uint8Array [
            79
          ]
        ],
        typeUrl: 'implement',
        maxItems: 84115,
        circular: undefined,
        fifo: undefined
      }
    },
    pinnedFiles: {
      items: [
        Uint8Array [
          200
        ],
        Uint8Array [
          160
        ]
      ],
      typeUrl: 'utilize',
      maxItems: 67555,
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
  senderAddress: 'Salad',
  itx: {
    moniker: 'withdrawal',
    data: {
      type: 'fg:x:random_data',
      value: 'ABCD 1234'
    },
    readonly: undefined,
    transferrable: undefined,
    ttl: 22973,
    parent: 'sky blue'
  },
  walletType: {
    pk: 1,
    hash: 6,
    address: 0,
    role: 6
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 39,
  assetAddress: 'Soap'
}
});
```

### getAssetState

```js
const stream = client.getAssetState({
  address: '42f6d46b3729d737843e701b8f1da0fe875287f3',
  keys: [
    'Bridge',
    'generating'
  ],
  height: 18724
});

// output
{
  code: 39,
  state: {
    address: '0996be85b75725c2cc3f5657175893db83779c23',
    owner: 'Curve',
    moniker: 'transmit',
    readonly: undefined,
    transferrable: undefined,
    ttl: 47677,
    consumedTime: '2019-03-08T03:14:07.466Z',
    issuer: 'digital',
    stake: {
      totalStakes: '89833',
      totalUnstakes: '35409',
      totalReceivedStakes: '99488',
      recentStakes: {
        items: [
          Uint8Array [
            46
          ],
          Uint8Array [
            119
          ]
        ],
        typeUrl: 'Home Loan Account',
        maxItems: 79397,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [
            9
          ],
          Uint8Array [
            31
          ]
        ],
        typeUrl: 'deposit',
        maxItems: 74723,
        circular: undefined,
        fifo: undefined
      }
    },
    context: {
      genesisTx: 'Malaysian Ringgit',
      renaissanceTx: 'Mountain',
      genesisTime: '2019-03-08T03:14:07.467Z',
      renaissanceTime: '2019-03-08T03:14:07.467Z'
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
    cursor: 'redundant',
    size: 59146,
    order: [
      {
        field: 'parsing',
        type: 'action-items'
      },
      {
        field: 'Licensed Concrete Ball',
        type: 'mint green'
      }
    ]
  },
  ownerAddress: 'generate'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 26,
  page: {
    cursor: 'Montana',
    next: undefined,
    total: 17267
  },
  assets: [
    {
      address: 'a4a29efb41dc150204e438948a642f07a41f838b',
      owner: 'reinvent',
      genesisTime: 'HTTP',
      renaissanceTime: 'tan',
      moniker: 'array',
      readonly: undefined
    },
    {
      address: 'b177d276b08863a23c0bfb1ac86c3a75610e2045',
      owner: 'Movies',
      genesisTime: 'Specialist',
      renaissanceTime: 'generating',
      moniker: 'Cambridgeshire',
      readonly: undefined
    }
  ]
}
});
```

### getBlock

```js
const stream = client.getBlock({
  height: 2622
});

// output
{
  code: 35,
  block: {
    height: 91311,
    numTxs: 98440,
    time: '2019-03-08T03:14:07.467Z',
    appHash: '17ba92ae6a7e9d80510a9364f4bf8f0eaca15c02',
    proposer: 'e874778b2e2f15dfb17c44e8e2d89f33916c7fa7',
    txs: [
      {
        tx: {
          from: 'dd0519bfdbab592de233c044273c0cbe0c73a49b',
          nonce: 24989,
          signature: Uint8Array [
            245
          ],
          chainId: 'black',
          signatures: [
            {
              signer: 'Awesome Rubber Sausages',
              signature: Uint8Array [
                58
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'mobile',
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
        },
        height: 67672,
        index: 57599,
        hash: 'eb516a389b7e8049bbd43052d10a8ac95e96256b',
        tags: [
          {
            key: Uint8Array [
              106
            ],
            value: Uint8Array [
              25
            ]
          },
          {
            key: Uint8Array [
              137
            ],
            value: Uint8Array [
              228
            ]
          }
        ],
        code: 24,
        time: '2019-03-08T03:14:07.468Z'
      },
      {
        tx: {
          from: '10a93d8fe9031e47e4e554c508829a111bf1a412',
          nonce: 744,
          signature: Uint8Array [
            232
          ],
          chainId: 'Developer',
          signatures: [
            {
              signer: 'lime',
              signature: Uint8Array [
                85
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'Mali',
              signature: Uint8Array [
                2
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
        height: 22314,
        index: 71912,
        hash: '9554ca6b4576830e288e31bb84c0d57559b40af7',
        tags: [
          {
            key: Uint8Array [
              60
            ],
            value: Uint8Array [
              120
            ]
          },
          {
            key: Uint8Array [
              85
            ],
            value: Uint8Array [
              162
            ]
          }
        ],
        code: 3,
        time: '2019-03-08T03:14:07.469Z'
      }
    ],
    totalTxs: 94419,
    invalidTxs: [
      {
        tx: {
          from: '0700e403df5a20d6d41b087668bc28fc7f105d7c',
          nonce: 45214,
          signature: Uint8Array [
            99
          ],
          chainId: 'South Carolina',
          signatures: [
            {
              signer: 'payment',
              signature: Uint8Array [
                98
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'Lithuanian Litas',
              signature: Uint8Array [
                175
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
        height: 77925,
        index: 33775,
        hash: '7169b78de83ad146140e465b97fd193aea165d2a',
        tags: [
          {
            key: Uint8Array [
              52
            ],
            value: Uint8Array [
              46
            ]
          },
          {
            key: Uint8Array [
              118
            ],
            value: Uint8Array [
              88
            ]
          }
        ],
        code: 22,
        time: '2019-03-08T03:14:07.469Z'
      },
      {
        tx: {
          from: '22702f5eb5ce98077d28c516938fa3575cddd7c0',
          nonce: 74468,
          signature: Uint8Array [
            26
          ],
          chainId: 'Corner',
          signatures: [
            {
              signer: 'Aruban Guilder',
              signature: Uint8Array [
                121
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'Money Market Account',
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
        height: 71090,
        index: 79943,
        hash: '4e19d9ef0b7a93128c65c91de7b377894820f6f0',
        tags: [
          {
            key: Uint8Array [
              66
            ],
            value: Uint8Array [
              143
            ]
          },
          {
            key: Uint8Array [
              243
            ],
            value: Uint8Array [
              16
            ]
          }
        ],
        code: 34,
        time: '2019-03-08T03:14:07.469Z'
      }
    ],
    txsHashes: [
      'Hawaii',
      'Small Steel Chair'
    ],
    invalidTxsHashes: [
      'SQL',
      'Intelligent'
    ]
  }
}
```

### getBlocks

```js
const result = await client.getBlocks({
  paging: {
    cursor: 'Metal',
    size: 14736,
    order: [
      {
        field: 'Nigeria',
        type: 'Unbranded'
      },
      {
        field: 'bottom-line',
        type: 'Radial'
      }
    ]
  },
  minHeight: 78157,
  maxHeight: 19939,
  emptyExcluded: undefined
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 31,
  page: {
    cursor: 'Rhode Island',
    next: undefined,
    total: 4597
  },
  blocks: [
    {
      height: 76479,
      numTxs: 31594,
      time: '2019-03-08T03:14:07.470Z',
      appHash: 'cc8fcc9aed4e415d91278b8517762937c88f24f2',
      proposer: 'e30a70cb198f1eab94be5f98e59ff5a85b45765d',
      txs: [
        {
          tx: {
            from: 'd86104ae11491fbc58e9c4b341bc7e7f4bbda927',
            nonce: 65437,
            signature: Uint8Array [
              95
            ],
            chainId: 'Program',
            signatures: [
              {
                signer: 'Maryland',
                signature: Uint8Array [
                  242
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'reintermediate',
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
          height: 42972,
          index: 65881,
          hash: '166eb7a6b33c40ddd081b6c397153b2b9695cab4',
          tags: [
            {
              key: Uint8Array [
                235
              ],
              value: Uint8Array [
                92
              ]
            },
            {
              key: Uint8Array [
                17
              ],
              value: Uint8Array [
                77
              ]
            }
          ],
          code: 22,
          time: '2019-03-08T03:14:07.470Z'
        },
        {
          tx: {
            from: '5b0df675fb8141ffdca71ab421c478877346fce1',
            nonce: 58088,
            signature: Uint8Array [
              191
            ],
            chainId: 'SDD',
            signatures: [
              {
                signer: 'Ferry',
                signature: Uint8Array [
                  249
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Computer',
                signature: Uint8Array [
                  212
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
          height: 37856,
          index: 31749,
          hash: '8f511575af4cd043fff82587edd62d85525d13f7',
          tags: [
            {
              key: Uint8Array [
                217
              ],
              value: Uint8Array [
                212
              ]
            },
            {
              key: Uint8Array [
                133
              ],
              value: Uint8Array [
                250
              ]
            }
          ],
          code: 8,
          time: '2019-03-08T03:14:07.470Z'
        }
      ],
      totalTxs: 87768,
      invalidTxs: [
        {
          tx: {
            from: '17db9378cec729153a9d67058947e9f2c3439afb',
            nonce: 8083,
            signature: Uint8Array [
              201
            ],
            chainId: 'Analyst',
            signatures: [
              {
                signer: 'Innovative',
                signature: Uint8Array [
                  148
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'tan',
                signature: Uint8Array [
                  32
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
          height: 13286,
          index: 63498,
          hash: 'c9bd21cda689682b4249257bffc9a34c47cd4c16',
          tags: [
            {
              key: Uint8Array [
                181
              ],
              value: Uint8Array [
                161
              ]
            },
            {
              key: Uint8Array [
                246
              ],
              value: Uint8Array [
                162
              ]
            }
          ],
          code: 5,
          time: '2019-03-08T03:14:07.470Z'
        },
        {
          tx: {
            from: 'b05be61b68b303a232afc0316acfa7107a6b9072',
            nonce: 42981,
            signature: Uint8Array [
              214
            ],
            chainId: 'generate',
            signatures: [
              {
                signer: 'Toys',
                signature: Uint8Array [
                  14
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'core',
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
          height: 37388,
          index: 66729,
          hash: 'bd7861a29ad6230308f52037cf13be109b9b6cee',
          tags: [
            {
              key: Uint8Array [
                210
              ],
              value: Uint8Array [
                210
              ]
            },
            {
              key: Uint8Array [
                222
              ],
              value: Uint8Array [
                98
              ]
            }
          ],
          code: 17,
          time: '2019-03-08T03:14:07.470Z'
        }
      ],
      txsHashes: [
        'reboot',
        'reboot'
      ],
      invalidTxsHashes: [
        'real-time',
        'Chair'
      ]
    },
    {
      height: 83619,
      numTxs: 33015,
      time: '2019-03-08T03:14:07.470Z',
      appHash: 'd05e6c9151e1ad344dc0fa4c4e42408a80c76d36',
      proposer: '97411f8433018d94085ab266662575b6fdba36e8',
      txs: [
        {
          tx: {
            from: 'a0c9a9066a57413d2e92f4f217738ffb9bfe6bd7',
            nonce: 46337,
            signature: Uint8Array [
              149
            ],
            chainId: 'Trace',
            signatures: [
              {
                signer: 'Steel',
                signature: Uint8Array [
                  160
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'cross-media',
                signature: Uint8Array [
                  254
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
          height: 37467,
          index: 49754,
          hash: 'd7532ef98fbe86e861ccf0f7bd0e62f9c34ebffd',
          tags: [
            {
              key: Uint8Array [
                188
              ],
              value: Uint8Array [
                95
              ]
            },
            {
              key: Uint8Array [
                121
              ],
              value: Uint8Array [
                44
              ]
            }
          ],
          code: 33,
          time: '2019-03-08T03:14:07.471Z'
        },
        {
          tx: {
            from: '181e472f98af0ad8a8ce16ff9f6bdafb79fc51f9',
            nonce: 27713,
            signature: Uint8Array [
              249
            ],
            chainId: 'Rupiah',
            signatures: [
              {
                signer: 'Factors',
                signature: Uint8Array [
                  68
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'compressing',
                signature: Uint8Array [
                  11
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
          height: 93776,
          index: 11700,
          hash: '9353d71f88475619d37bae78212daf5f6f3519b2',
          tags: [
            {
              key: Uint8Array [
                93
              ],
              value: Uint8Array [
                84
              ]
            },
            {
              key: Uint8Array [
                126
              ],
              value: Uint8Array [
                230
              ]
            }
          ],
          code: 37,
          time: '2019-03-08T03:14:07.471Z'
        }
      ],
      totalTxs: 89668,
      invalidTxs: [
        {
          tx: {
            from: 'a0eae9962abc9f6d7f5cb7dc76841effa833794f',
            nonce: 74516,
            signature: Uint8Array [
              129
            ],
            chainId: 'Accounts',
            signatures: [
              {
                signer: 'Tunnel',
                signature: Uint8Array [
                  73
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'withdrawal',
                signature: Uint8Array [
                  69
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
          height: 26,
          index: 67859,
          hash: '03cb6c2adefc0a5873ff4c46ac51f11d0192c9aa',
          tags: [
            {
              key: Uint8Array [
                14
              ],
              value: Uint8Array [
                184
              ]
            },
            {
              key: Uint8Array [
                55
              ],
              value: Uint8Array [
                11
              ]
            }
          ],
          code: 9,
          time: '2019-03-08T03:14:07.471Z'
        },
        {
          tx: {
            from: 'a35b5f70c51874b9604d8cfed72b86cd359bae15',
            nonce: 87330,
            signature: Uint8Array [
              104
            ],
            chainId: 'Web',
            signatures: [
              {
                signer: 'Refined Metal Cheese',
                signature: Uint8Array [
                  11
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'indexing',
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
          },
          height: 55190,
          index: 43200,
          hash: 'ae468224c059e70fc9cbc00996feed773d2d6997',
          tags: [
            {
              key: Uint8Array [
                210
              ],
              value: Uint8Array [
                57
              ]
            },
            {
              key: Uint8Array [
                10
              ],
              value: Uint8Array [
                117
              ]
            }
          ],
          code: 0,
          time: '2019-03-08T03:14:07.471Z'
        }
      ],
      txsHashes: [
        'Tugrik',
        'Orchestrator'
      ],
      invalidTxsHashes: [
        'Fish',
        'Sleek'
      ]
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
    id: 'SQL',
    network: 'withdrawal',
    moniker: 'backing up',
    consensusVersion: 'Kentucky',
    synced: undefined,
    appHash: '0c3645b41716859edb4ba18eafa1c934b7892ec0',
    blockHash: Uint8Array [
      241
    ],
    blockHeight: 83929,
    blockTime: '2019-03-08T03:14:07.472Z',
    address: '243ba204dda3478956cce2807f1282e290dc7e1e',
    votingPower: 64009,
    totalTxs: 27718,
    version: 'hack',
    dataVersion: 'primary',
    forgeAppsVersion: {
      'function randomWord (type) {\n\n    var wordMethods = [\n    \'commerce.department\',\n    \'commerce.productName\',\n    \'commerce.productAdjective\',\n    \'commerce.productMaterial\',\n    \'commerce.product\',\n    \'commerce.color\',\n\n    \'company.catchPhraseAdjective\',\n    \'company.catchPhraseDescriptor\',\n    \'company.catchPhraseNoun\',\n    \'company.bsAdjective\',\n    \'company.bsBuzz\',\n    \'company.bsNoun\',\n    \'address.streetSuffix\',\n    \'address.county\',\n    \'address.country\',\n    \'address.state\',\n\n    \'finance.accountName\',\n    \'finance.transactionType\',\n    \'finance.currencyName\',\n\n    \'hacker.noun\',\n    \'hacker.verb\',\n    \'hacker.adjective\',\n    \'hacker.ingverb\',\n    \'hacker.abbreviation\',\n\n    \'name.jobDescriptor\',\n    \'name.jobArea\',\n    \'name.jobType\'];\n\n    // randomly pick from the many faker methods that can generate words\n    var randomWordMethod = faker.random.arrayElement(wordMethods);\n    return faker.fake(\'{{\' + randomWordMethod + \'}}\');\n\n  }': 'Lek'
    },
    supportedTxs: [
      'Bridge',
      'Guatemala'
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
  code: 5,
  config: 'Barbados Dollar'
}
});
```

### getForgeState

```js
const result = await client.getForgeState({
  keys: [
    'Borders',
    'impactful'
  ],
  height: 9915
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 17,
  state: {
    address: 'cfa7e4245f45ec851c8fb36550d2b380a3eb6b37',
    consensus: {
      maxBytes: 98417,
      maxGas: 25444,
      maxValidators: 54483,
      maxCandidates: 6958,
      pubKeyTypes: [
        'system-worthy',
        'Soft'
      ],
      validators: [
        {
          address: '767966fa173f8f263c4f7b4f05d4a3697e3afdaf',
          power: 91337
        },
        {
          address: '9e46d4a601c8fc59726dbcf628046185ca1c7cd0',
          power: 41756
        }
      ],
      validatorChanged: undefined,
      paramChanged: undefined
    },
    tasks: {
      'function (options) {\n\n    if (typeof options === "number") {\n      options = {\n        max: options\n      };\n    }\n\n    options = options || {};\n\n    if (typeof options.min === "undefined") {\n      options.min = 0;\n    }\n\n    if (typeof options.max === "undefined") {\n      options.max = 99999;\n    }\n    if (typeof options.precision === "undefined") {\n      options.precision = 1;\n    }\n\n    // Make the range inclusive of the max value\n    var max = options.max;\n    if (max >= 0) {\n      max += options.precision;\n    }\n\n    var randomNumber = Math.floor(\n      mersenne.rand(max / options.precision, options.min / options.precision));\n    // Workaround problem in Float point arithmetics for e.g. 6681493 / 0.01\n    randomNumber = randomNumber / (1 / options.precision);\n\n    return randomNumber;\n\n  }': {
        item: [
          {
            type: 3,
            dataHash: 'brand',
            actions: [
              undefined,
              undefined
            ]
          },
          {
            type: 4,
            dataHash: 'withdrawal',
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
        totalStakes: '58654',
        totalUnstakes: '25095',
        context: {
          genesisTx: 'alarm',
          renaissanceTx: 'turquoise',
          genesisTime: '2019-03-08T03:14:07.473Z',
          renaissanceTime: '2019-03-08T03:14:07.473Z'
        }
      }
    },
    version: 'magnetic',
    dataVersion: 'Wooden',
    forgeAppHash: Uint8Array [
      183
    ],
    token: {
      name: 'auxiliary',
      symbol: 'eco-centric',
      unit: 'Handmade',
      description: 'grey',
      icon: Uint8Array [
        197
      ],
      decimal: 22788,
      initialSupply: 67341,
      totalSupply: 53185,
      inflationRate: 66121
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
    startDate: 'Fantastic Soft Gloves',
    endDate: 'Buckinghamshire'
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 37,
  forgeStatistics: {
    numBlocks: [
      50153,
      5315
    ],
    numTxs: [
      25937,
      12448
    ],
    numStakes: [
      '95295',
      '12955'
    ],
    numValidators: [
      17503,
      49023
    ],
    numAccountMigrateTxs: [
      58247,
      19827
    ],
    numCreateAssetTxs: [
      6559,
      32013
    ],
    numConsensusUpgradeTxs: [
      69631,
      34793
    ],
    numDeclareTxs: [
      8853,
      16666
    ],
    numDeclareFileTxs: [
      1951,
      85711
    ],
    numExchangeTxs: [
      85987,
      83960
    ],
    numStakeTxs: [
      56167,
      76541
    ],
    numSysUpgradeTxs: [
      58177,
      65011
    ],
    numTransferTxs: [
      27045,
      91311
    ],
    numUpdateAssetTxs: [
      31211,
      6669
    ],
    numConsumeAssetTxs: [
      80993,
      53278
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
  code: 6,
  netInfo: {
    listening: undefined,
    listeners: [
      'generate',
      'Michigan'
    ],
    nPeers: 37493,
    peers: [
      {
        id: 'connecting',
        network: 'backing up',
        consensusVersion: 'optical',
        moniker: 'Savings Account',
        ip: 'Producer',
        geoInfo: {
          city: 'website',
          country: 'Avon',
          latitude: 46167,
          longitude: 27486.73
        }
      },
      {
        id: 'engineer',
        network: 'Tuna',
        consensusVersion: 'override',
        moniker: 'asymmetric',
        ip: 'Roads',
        geoInfo: {
          city: 'Avon',
          country: 'Minnesota',
          latitude: 59933.88,
          longitude: 98737.25
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
    id: 'auxiliary',
    network: 'Handcrafted Steel Keyboard',
    moniker: 'Pants',
    consensusVersion: 'Greece',
    synced: undefined,
    appHash: '35fab7bdcea5fab8e20063853a01e9ca3bbb6d76',
    blockHash: Uint8Array [
      112
    ],
    blockHeight: 18867,
    blockTime: '2019-03-08T03:14:07.474Z',
    address: 'a545dfd28d82cfb63ed6e9c3bec58121fe2f1022',
    votingPower: 79828,
    totalTxs: 95765,
    version: 'Well',
    dataVersion: 'override',
    forgeAppsVersion: {
      'function randomWord (type) {\n\n    var wordMethods = [\n    \'commerce.department\',\n    \'commerce.productName\',\n    \'commerce.productAdjective\',\n    \'commerce.productMaterial\',\n    \'commerce.product\',\n    \'commerce.color\',\n\n    \'company.catchPhraseAdjective\',\n    \'company.catchPhraseDescriptor\',\n    \'company.catchPhraseNoun\',\n    \'company.bsAdjective\',\n    \'company.bsBuzz\',\n    \'company.bsNoun\',\n    \'address.streetSuffix\',\n    \'address.county\',\n    \'address.country\',\n    \'address.state\',\n\n    \'finance.accountName\',\n    \'finance.transactionType\',\n    \'finance.currencyName\',\n\n    \'hacker.noun\',\n    \'hacker.verb\',\n    \'hacker.adjective\',\n    \'hacker.ingverb\',\n    \'hacker.abbreviation\',\n\n    \'name.jobDescriptor\',\n    \'name.jobArea\',\n    \'name.jobType\'];\n\n    // randomly pick from the many faker methods that can generate words\n    var randomWordMethod = faker.random.arrayElement(wordMethods);\n    return faker.fake(\'{{\' + randomWordMethod + \'}}\');\n\n  }': 'turn-key'
    },
    supportedTxs: [
      'Executive',
      'cultivate'
    ],
    ip: 'Future',
    geoInfo: {
      city: 'Buckinghamshire',
      country: 'SCSI',
      latitude: 69747.63,
      longitude: 78156.23
    }
  }
}
});
```

### getStakeState

```js
const stream = client.getStakeState({
  address: '15b8f4a9a56f507538b355acc6ff7b4c0c571c69',
  keys: [
    'Interactions',
    'Trail'
  ],
  height: 64047
});

// output
{
  code: 38,
  state: {
    address: 'e512e8a1933667504ec6c0596189b0733a068f59',
    from: 'e75a732c55ee129104ec10cc6c4cae185b2cc1a4',
    to: '98db0ac6114116874c32f7cacdcbeeef759f3a82',
    balance: '62032',
    message: 'alarm',
    context: {
      genesisTx: 'Berkshire',
      renaissanceTx: 'Vermont',
      genesisTime: '2019-03-08T03:14:07.475Z',
      renaissanceTime: '2019-03-08T03:14:07.475Z'
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
    cursor: 'Chicken',
    size: 52088,
    order: [
      {
        field: 'Yemeni Rial',
        type: 'paradigms'
      },
      {
        field: 'Kina',
        type: 'orange'
      }
    ]
  },
  addressFilter: {
    sender: 'directional',
    receiver: 'productivity',
    direction: 2
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 2,
  page: {
    cursor: 'Legacy',
    next: undefined,
    total: 66749
  },
  stakes: [
    {
      address: '7156e4f02382ee0cc12131fce9256a0c7074d401',
      balance: '97986',
      sender: 'Shoes',
      receiver: 'override',
      genesisTime: 'fuchsia',
      renaissanceTime: 'optical',
      message: 'payment',
      type: 35862
    },
    {
      address: '992a643d78d5ad02cdd64afbd0a4dd0e2a0aefbb',
      balance: '32072',
      sender: 'Danish Krone',
      receiver: 'input',
      genesisTime: 'value-added',
      renaissanceTime: 'Research',
      message: 'Legacy',
      type: 69453
    }
  ]
}
});
```

### getTopAccounts

```js
const result = await client.getTopAccounts({
  paging: {
    cursor: 'pixel',
    size: 48407,
    order: [
      {
        field: 'Bacon',
        type: 'connect'
      },
      {
        field: 'Refined Steel Shirt',
        type: 'Re-engineered'
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
    cursor: 'Licensed Fresh Car',
    next: undefined,
    total: 45873
  },
  accounts: [
    {
      address: '254d8586933e849cdafc1ed88b3560fde4fbb706',
      balance: '55956',
      numAssets: 10272,
      numTxs: 80807,
      nonce: 11766,
      genesisTime: 'Leone',
      renaissanceTime: 'partnerships',
      moniker: 'Sleek Rubber Gloves',
      migratedFrom: 'invoice',
      migratedTo: 'modular',
      totalReceivedStakes: '64282',
      totalStakes: '74661',
      totalUnstakes: '47865',
      recentNumTxs: [
        88010,
        41436
      ]
    },
    {
      address: 'f208370c43a38d1f646f793a32833cc86f591418',
      balance: '95040',
      numAssets: 87614,
      numTxs: 18284,
      nonce: 82311,
      genesisTime: 'Auto Loan Account',
      renaissanceTime: 'tan',
      moniker: 'Rand Loti',
      migratedFrom: 'ROI',
      migratedTo: 'Metal',
      totalReceivedStakes: '79095',
      totalStakes: '3974',
      totalUnstakes: '34016',
      recentNumTxs: [
        13700,
        42271
      ]
    }
  ]
}
});
```

### getTx

```js
const stream = client.getTx({
  hash: '10dd85805156c1319ecb2154991b9bc610585663'
});

// output
{
  code: 17,
  info: {
    tx: {
      from: '87edc57252819954feaae0d818f7981887dcb2df',
      nonce: 40994,
      signature: Uint8Array [
        186
      ],
      chainId: 'systematic',
      signatures: [
        {
          signer: 'California',
          signature: Uint8Array [
            185
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        {
          signer: 'interfaces',
          signature: Uint8Array [
            54
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
    height: 9038,
    index: 10661,
    hash: 'a2df9f586966c04ee127f7ee59fdbd840065353c',
    tags: [
      {
        key: Uint8Array [
          244
        ],
        value: Uint8Array [
          146
        ]
      },
      {
        key: Uint8Array [
          98
        ],
        value: Uint8Array [
          177
        ]
      }
    ],
    code: 39,
    time: '2019-03-08T03:14:07.477Z'
  }
}
```

### getUnconfirmedTxs

```js
const result = await client.getUnconfirmedTxs({
  limit: 3983
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 2,
  unconfirmedTxs: {
    nTxs: 79235,
    txs: [
      {
        from: '1c4b3767e8b215411e7997e87d3dd932d5616aba',
        nonce: 91921,
        signature: Uint8Array [
          30
        ],
        chainId: 'GB',
        signatures: [
          {
            signer: 'Senior',
            signature: Uint8Array [
              39
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'mission-critical',
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
      {
        from: 'e2cd46a7e3a6529cc6240fd4d6138f2ac09c39b9',
        nonce: 33064,
        signature: Uint8Array [
          204
        ],
        chainId: 'interactive',
        signatures: [
          {
            signer: 'input',
            signature: Uint8Array [
              17
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'visionary',
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
    blockHeight: 62600,
    validators: [
      {
        address: 'ea0c5a6b10affb7ed0c14a0582a0379f809839bf',
        pubKey: {
          type: 'Tools',
          data: Uint8Array [
            137
          ]
        },
        votingPower: 26911,
        proposerPriority: 'quantifying',
        name: 'Grocery'
      },
      {
        address: '9c657d5839102db10a911156e7f5be5e7dbe3e98',
        pubKey: {
          type: 'Investment Account',
          data: Uint8Array [
            123
          ]
        },
        votingPower: 49562,
        proposerPriority: 'application',
        name: 'end-to-end'
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
    cursor: 'Baby',
    size: 27128,
    order: [
      {
        field: 'port',
        type: 'EXE'
      },
      {
        field: 'Tasty',
        type: 'strategy'
      }
    ]
  },
  address: '8b8a1a0ad9f5ae7219c3e566bd9c1f6a770edbe1'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 21,
  page: {
    cursor: 'Granite',
    next: undefined,
    total: 41100
  },
  transactions: [
    {
      consumeAsset: {
        asset: 'Walks'
      }
    },
    {
      consumeAsset: {
        asset: 'calculate'
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
    cursor: 'programming',
    size: 22629,
    order: [
      {
        field: 'payment',
        type: 'strategize'
      },
      {
        field: 'Kenyan Shilling',
        type: 'rich'
      }
    ]
  },
  timeFilter: {
    startDateTime: 'Senior',
    endDateTime: 'Avon'
  },
  addressFilter: {
    sender: 'Brand',
    receiver: 'infrastructure',
    direction: 1
  },
  typeFilter: {
    types: [
      'Bermuda',
      'Auto Loan Account'
    ]
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 37,
  page: {
    cursor: 'Licensed',
    next: undefined,
    total: 47023
  },
  transactions: [
    {
      consumeAsset: {
        asset: 'CFA Franc BEAC'
      }
    },
    {
      consumeAsset: {
        asset: 'Senior'
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
  code: 34,
  address: '10d0d6696bbe6e5b9981a1bb1c62de2fa452b39a'
}
```

### loadFile

```js
const stream = client.loadFile({
  hash: '500da96e49d4a9edfce47cebfac0ea654f3eea4f'
});

// output
{
  code: 22,
  chunk: Uint8Array [
    198
  ]
}
```

### loadWallet

```js
const result = await client.loadWallet({
  address: 'b7e77bb07331718f25aa2418a5c9269913e96a0c',
  passphrase: 'Representative'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 33,
  token: 'withdrawal',
  wallet: {
    type: {
      pk: 1,
      hash: 7,
      address: 1,
      role: 6
    },
    sk: Uint8Array [
      181
    ],
    pk: Uint8Array [
      117
    ],
    address: '202583f202bad7628921fef9462832aa51057a04'
  }
}
});
```

### multisig

```js
const result = await client.multisig({
  tx: {
    from: 'c75a98cca46acf86fe7a6fd525c413126ea5aaa3',
    nonce: 83108,
    signature: Uint8Array [
      86
    ],
    chainId: 'B2C',
    signatures: [
      {
        signer: 'Lodge',
        signature: Uint8Array [
          157
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'bus',
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
  data: {
    type: 'fg:x:random_data',
    value: 'ABCD 1234'
  },
  wallet: {
    type: {
      pk: 0,
      hash: 0,
      address: 1,
      role: 6
    },
    sk: Uint8Array [
      143
    ],
    pk: Uint8Array [
      148
    ],
    address: '60c9247acc4cb57e50cc6a19c10f469115bcc849'
  },
  token: 'back-end'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 36,
  tx: {
    from: 'd57343ced88c4f2416db66efc0e632574bb44e5b',
    nonce: 58639,
    signature: Uint8Array [
      154
    ],
    chainId: 'Ways',
    signatures: [
      {
        signer: 'Djibouti Franc',
        signature: Uint8Array [
          27
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'Security',
        signature: Uint8Array [
          114
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
  hash: 'b4e69544795e682848249b6857fb9dd09a86ccbf'
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
      from: 'ccfcfc47b03d8e9905f79069688b9a128a8f0dc2',
      nonce: 37116,
      signature: Uint8Array [
        36
      ],
      chainId: 'intranet',
      signatures: [
        {
          signer: 'Egyptian Pound',
          signature: Uint8Array [
            41
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        {
          signer: 'Refined Granite Shirt',
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
    states: [
      {
        balance: '21052',
        nonce: 3088,
        numTxs: 20204,
        address: '50c1c242478e49296ddcfc9afad06bbe9a5d7e2f',
        pk: Uint8Array [
          1
        ],
        type: {
          pk: 0,
          hash: 13,
          address: 1,
          role: 3
        },
        moniker: 'Trail',
        context: {
          genesisTx: 'Metal',
          renaissanceTx: 'Buckinghamshire',
          genesisTime: '2019-03-08T03:14:07.479Z',
          renaissanceTime: '2019-03-08T03:14:07.479Z'
        },
        issuer: 'Practical',
        migratedTo: [
          'Granite',
          'high-level'
        ],
        migratedFrom: [
          'fuchsia',
          'backing up'
        ],
        numAssets: 86631,
        stake: {
          totalStakes: '93927',
          totalUnstakes: '73713',
          totalReceivedStakes: '56020',
          recentStakes: {
            items: [
              Uint8Array [
                27
              ],
              Uint8Array [
                41
              ]
            ],
            typeUrl: 'parsing',
            maxItems: 42518,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                176
              ],
              Uint8Array [
                146
              ]
            ],
            typeUrl: 'synergies',
            maxItems: 72672,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              214
            ],
            Uint8Array [
              251
            ]
          ],
          typeUrl: 'Architect',
          maxItems: 44583,
          circular: undefined,
          fifo: undefined
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        balance: '8862',
        nonce: 42216,
        numTxs: 52307,
        address: '1e3439d20850cefb35e916bbfe48825d6d3e7987',
        pk: Uint8Array [
          104
        ],
        type: {
          pk: 0,
          hash: 1,
          address: 0,
          role: 6
        },
        moniker: 'foreground',
        context: {
          genesisTx: 'salmon',
          renaissanceTx: 'bluetooth',
          genesisTime: '2019-03-08T03:14:07.480Z',
          renaissanceTime: '2019-03-08T03:14:07.480Z'
        },
        issuer: 'Handmade Metal Pizza',
        migratedTo: [
          'invoice',
          'generate'
        ],
        migratedFrom: [
          'capability',
          'Savings Account'
        ],
        numAssets: 37618,
        stake: {
          totalStakes: '64318',
          totalUnstakes: '57095',
          totalReceivedStakes: '33365',
          recentStakes: {
            items: [
              Uint8Array [
                51
              ],
              Uint8Array [
                37
              ]
            ],
            typeUrl: 'extend',
            maxItems: 93545,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                158
              ],
              Uint8Array [
                238
              ]
            ],
            typeUrl: 'cross-platform',
            maxItems: 50166,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              16
            ],
            Uint8Array [
              156
            ]
          ],
          typeUrl: 'matrix',
          maxItems: 70621,
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
        address: 'a3eecb15a8c4c5d5f1a557f03c49ce08cbd25985',
        owner: 'web-enabled',
        moniker: 'Investor',
        readonly: undefined,
        transferrable: undefined,
        ttl: 15522,
        consumedTime: '2019-03-08T03:14:07.480Z',
        issuer: 'Extensions',
        stake: {
          totalStakes: '5599',
          totalUnstakes: '97325',
          totalReceivedStakes: '74280',
          recentStakes: {
            items: [
              Uint8Array [
                157
              ],
              Uint8Array [
                19
              ]
            ],
            typeUrl: 'Checking Account',
            maxItems: 35325,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                203
              ],
              Uint8Array [
                252
              ]
            ],
            typeUrl: 'SMS',
            maxItems: 42889,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Vermont',
          renaissanceTx: 'experiences',
          genesisTime: '2019-03-08T03:14:07.480Z',
          renaissanceTime: '2019-03-08T03:14:07.480Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: 'ae4981c2cbc5fe6299e28d690b027bc8dcb32454',
        owner: 'deposit',
        moniker: 'PNG',
        readonly: undefined,
        transferrable: undefined,
        ttl: 43207,
        consumedTime: '2019-03-08T03:14:07.480Z',
        issuer: 'IB',
        stake: {
          totalStakes: '1622',
          totalUnstakes: '56308',
          totalReceivedStakes: '37696',
          recentStakes: {
            items: [
              Uint8Array [
                248
              ],
              Uint8Array [
                73
              ]
            ],
            typeUrl: 'Direct',
            maxItems: 4159,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                71
              ],
              Uint8Array [
                120
              ]
            ],
            typeUrl: 'transmitter',
            maxItems: 77030,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'tan',
          renaissanceTx: 'help-desk',
          genesisTime: '2019-03-08T03:14:07.480Z',
          renaissanceTime: '2019-03-08T03:14:07.480Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    stakes: [
      {
        address: 'e6dd8a62379e9869b4e61140ecd31f7d0ca36d24',
        from: '2fbc71342c500442b5c35ac83339799ddbe6dc29',
        to: '229ff5c7b32c5e1d0223d6585312e4954ffa7a9f',
        balance: '9935',
        message: 'Savings Account',
        context: {
          genesisTx: 'firewall',
          renaissanceTx: 'Village',
          genesisTime: '2019-03-08T03:14:07.480Z',
          renaissanceTime: '2019-03-08T03:14:07.480Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: '75eb8d54f04bc00f81c008f7590cc25e2b3b8c99',
        from: 'e5110fbbb287ebc06672d87e41195c222aaeef35',
        to: '4c4b72ed10e101ff928e548561d95edbac33d0e7',
        balance: '27089',
        message: 'Drives',
        context: {
          genesisTx: 'black',
          renaissanceTx: 'Borders',
          genesisTime: '2019-03-08T03:14:07.480Z',
          renaissanceTime: '2019-03-08T03:14:07.480Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    context: {
      txHash: 'ed8813c319bd69e5aa9031903c16e83e7e66b52a',
      blockHeight: 50000,
      blockTime: '2019-03-08T03:14:07.480Z',
      totalTxs: 39950,
      txStatistics: {
        numAccountMigrateTxs: 98474,
        numCreateAssetTxs: 45209,
        numConsensusUpgradeTxs: 25011,
        numDeclareTxs: 11408,
        numDeclareFileTxs: 7960,
        numExchangeTxs: 46794,
        numStakeTxs: 99858,
        numSysUpgradeTxs: 97339,
        numTransferTxs: 32257,
        numUpdateAssetTxs: 97185,
        numConsumeAssetTxs: 22648
      },
      txIndex: 17744,
      lastBlockTime: '2019-03-08T03:14:07.480Z'
    },
    appState: {
      address: 'cd4d26574b395ac47c8279784668a0db2c7db1ba',
      consensus: {
        maxBytes: 78445,
        maxGas: 97010,
        maxValidators: 79622,
        maxCandidates: 87855,
        pubKeyTypes: [
          'bus',
          'primary'
        ],
        validators: [
          {
            address: '094be7404b7851839ba4dd7fb7266ee2be95c438',
            power: 34283
          },
          {
            address: '866db535057bbd0e6a7c940c72f4f1675f8edc40',
            power: 7738
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
              dataHash: 'Cambridgeshire',
              actions: [
                undefined,
                undefined
              ]
            },
            {
              type: 0,
              dataHash: 'client-driven',
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
          totalStakes: '84248',
          totalUnstakes: '79226',
          context: {
            genesisTx: 'Games',
            renaissanceTx: 'recontextualize',
            genesisTime: '2019-03-08T03:14:07.481Z',
            renaissanceTime: '2019-03-08T03:14:07.481Z'
          }
        }
      },
      version: 'Berkshire',
      dataVersion: 'Quality',
      forgeAppHash: Uint8Array [
        255
      ],
      token: {
        name: 'Forward',
        symbol: 'open-source',
        unit: 'Agent',
        description: 'Toys',
        icon: Uint8Array [
          91
        ],
        decimal: 22922,
        initialSupply: 57765,
        totalSupply: 13743,
        inflationRate: 96211
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
      from: '4b9d64536337a6c00b2cec3c1c9bc7812d2ed4f8',
      nonce: 13412,
      signature: Uint8Array [
        35
      ],
      chainId: '1080p',
      signatures: [
        {
          signer: 'Customer',
          signature: Uint8Array [
            230
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        {
          signer: 'mobile',
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
    states: [
      {
        balance: '26685',
        nonce: 45239,
        numTxs: 15316,
        address: '7d6820c5e560188194f146b22ae50f21e8ac76d5',
        pk: Uint8Array [
          52
        ],
        type: {
          pk: 0,
          hash: 7,
          address: 0,
          role: 0
        },
        moniker: 'vortals',
        context: {
          genesisTx: 'monetize',
          renaissanceTx: 'Incredible',
          genesisTime: '2019-03-08T03:14:07.482Z',
          renaissanceTime: '2019-03-08T03:14:07.482Z'
        },
        issuer: 'Malawi',
        migratedTo: [
          'payment',
          'budgetary management'
        ],
        migratedFrom: [
          '6th generation',
          'Village'
        ],
        numAssets: 85591,
        stake: {
          totalStakes: '87213',
          totalUnstakes: '80109',
          totalReceivedStakes: '65024',
          recentStakes: {
            items: [
              Uint8Array [
                94
              ],
              Uint8Array [
                90
              ]
            ],
            typeUrl: 'Awesome',
            maxItems: 77971,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                249
              ],
              Uint8Array [
                230
              ]
            ],
            typeUrl: 'mesh',
            maxItems: 96014,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              208
            ],
            Uint8Array [
              196
            ]
          ],
          typeUrl: 'Checking Account',
          maxItems: 5376,
          circular: undefined,
          fifo: undefined
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        balance: '44552',
        nonce: 50804,
        numTxs: 14316,
        address: 'd5adba8c4a2aafc57c0746c9f9278ca44f526fbc',
        pk: Uint8Array [
          81
        ],
        type: {
          pk: 0,
          hash: 13,
          address: 0,
          role: 0
        },
        moniker: 'payment',
        context: {
          genesisTx: 'customized',
          renaissanceTx: 'Savings Account',
          genesisTime: '2019-03-08T03:14:07.482Z',
          renaissanceTime: '2019-03-08T03:14:07.482Z'
        },
        issuer: 'copying',
        migratedTo: [
          'Corporate',
          'transmitting'
        ],
        migratedFrom: [
          'National',
          'bluetooth'
        ],
        numAssets: 14167,
        stake: {
          totalStakes: '46575',
          totalUnstakes: '45577',
          totalReceivedStakes: '60429',
          recentStakes: {
            items: [
              Uint8Array [
                253
              ],
              Uint8Array [
                18
              ]
            ],
            typeUrl: 'Rustic Concrete Hat',
            maxItems: 61683,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                98
              ],
              Uint8Array [
                79
              ]
            ],
            typeUrl: 'SAS',
            maxItems: 65475,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              155
            ],
            Uint8Array [
              169
            ]
          ],
          typeUrl: 'Curve',
          maxItems: 84145,
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
        address: '270e93d65abebe69bee28c5b7c560efcc35bc28b',
        owner: 'AGP',
        moniker: 'intranet',
        readonly: undefined,
        transferrable: undefined,
        ttl: 7758,
        consumedTime: '2019-03-08T03:14:07.482Z',
        issuer: 'Home Loan Account',
        stake: {
          totalStakes: '27496',
          totalUnstakes: '221',
          totalReceivedStakes: '11610',
          recentStakes: {
            items: [
              Uint8Array [
                103
              ],
              Uint8Array [
                163
              ]
            ],
            typeUrl: 'XML',
            maxItems: 51011,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                147
              ],
              Uint8Array [
                195
              ]
            ],
            typeUrl: 'Berkshire',
            maxItems: 70341,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Bedfordshire',
          renaissanceTx: 'grey',
          genesisTime: '2019-03-08T03:14:07.482Z',
          renaissanceTime: '2019-03-08T03:14:07.482Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: 'ee56caae0128b2e4f880bd4f7a4980f31b8a0e0a',
        owner: 'Rubber',
        moniker: 'indigo',
        readonly: undefined,
        transferrable: undefined,
        ttl: 33041,
        consumedTime: '2019-03-08T03:14:07.482Z',
        issuer: 'mint green',
        stake: {
          totalStakes: '41806',
          totalUnstakes: '89037',
          totalReceivedStakes: '61873',
          recentStakes: {
            items: [
              Uint8Array [
                245
              ],
              Uint8Array [
                226
              ]
            ],
            typeUrl: 'Principal',
            maxItems: 38953,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                159
              ],
              Uint8Array [
                250
              ]
            ],
            typeUrl: 'Pass',
            maxItems: 70952,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Practical',
          renaissanceTx: 'parsing',
          genesisTime: '2019-03-08T03:14:07.482Z',
          renaissanceTime: '2019-03-08T03:14:07.482Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    stakes: [
      {
        address: '3f7a7d36e95591882312e406f64d7a9b238a7bea',
        from: '93065b93537c04ed5762639351e8ac0134c1cd17',
        to: 'c1b4eeed252ac0a4fd30df803c27c51bf04fb6e5',
        balance: '19212',
        message: 'Uzbekistan',
        context: {
          genesisTx: 'adapter',
          renaissanceTx: 'azure',
          genesisTime: '2019-03-08T03:14:07.482Z',
          renaissanceTime: '2019-03-08T03:14:07.482Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: '764b30737ff1aabec112832811068a7a52cad930',
        from: '10a8564ab1ae56169c994807dcebf3b4ee4d77b2',
        to: 'fe96069af0cf385ae862e200283cb75d5235e001',
        balance: '45411',
        message: 'Direct',
        context: {
          genesisTx: 'Electronics',
          renaissanceTx: 'IB',
          genesisTime: '2019-03-08T03:14:07.482Z',
          renaissanceTime: '2019-03-08T03:14:07.482Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    context: {
      txHash: '1d7998d7cb946cb0d1841b99e0296e04b15a4ead',
      blockHeight: 58228,
      blockTime: '2019-03-08T03:14:07.482Z',
      totalTxs: 17413,
      txStatistics: {
        numAccountMigrateTxs: 70262,
        numCreateAssetTxs: 32804,
        numConsensusUpgradeTxs: 2578,
        numDeclareTxs: 16837,
        numDeclareFileTxs: 29851,
        numExchangeTxs: 21495,
        numStakeTxs: 72782,
        numSysUpgradeTxs: 36351,
        numTransferTxs: 72565,
        numUpdateAssetTxs: 70094,
        numConsumeAssetTxs: 24424
      },
      txIndex: 49372,
      lastBlockTime: '2019-03-08T03:14:07.482Z'
    },
    appState: {
      address: 'def7ea2a893d995594a7bb46d1b37dee2b7b6dae',
      consensus: {
        maxBytes: 42589,
        maxGas: 31676,
        maxValidators: 2454,
        maxCandidates: 66065,
        pubKeyTypes: [
          'Tuna',
          'parse'
        ],
        validators: [
          {
            address: 'f5f3a987bcd03c925d86f9a9ec372dcb9b69af1d',
            power: 17769
          },
          {
            address: '3a31cb4c209849eefd3acb6bb3ffc8267e1b81a5',
            power: 64430
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
              dataHash: 'invoice',
              actions: [
                undefined,
                undefined
              ]
            },
            {
              type: 10,
              dataHash: 'compress',
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
          totalStakes: '33609',
          totalUnstakes: '12745',
          context: {
            genesisTx: 'Persevering',
            renaissanceTx: 'Incredible',
            genesisTime: '2019-03-08T03:14:07.483Z',
            renaissanceTime: '2019-03-08T03:14:07.483Z'
          }
        }
      },
      version: 'fresh-thinking',
      dataVersion: 'Auto Loan Account',
      forgeAppHash: Uint8Array [
        175
      ],
      token: {
        name: 'Bedfordshire',
        symbol: 'transmitting',
        unit: 'purple',
        description: 'synthesizing',
        icon: Uint8Array [
          132
        ],
        decimal: 39112,
        initialSupply: 31607,
        totalSupply: 50574,
        inflationRate: 78687
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
    code: 26
  }
}
});
```

### recoverWallet

```js
const result = await client.recoverWallet({
  data: Uint8Array [
    25
  ],
  type: {
    pk: 1,
    hash: 0,
    address: 1,
    role: 8
  },
  passphrase: 'Rubber',
  moniker: 'multimedia'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 0,
  token: 'internet solution',
  wallet: {
    type: {
      pk: 1,
      hash: 0,
      address: 1,
      role: 7
    },
    sk: Uint8Array [
      174
    ],
    pk: Uint8Array [
      186
    ],
    address: 'b28710fa9715a05ae6f5a9e471d131a1d586dce8'
  }
}
});
```

### removeWallet

```js
const result = await client.removeWallet({
  address: '91d7d98cdf1bda1f6acb925ef062a040e55fa50a'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 4
}
});
```

### search

```js
const result = await client.search({
  key: 'JSON',
  value: 'Vietnam'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 26,
  txs: [
    {
      tx: {
        from: 'd2efaac782e8ef7d3f03ac7ff4a9272c048cd485',
        nonce: 4857,
        signature: Uint8Array [
          167
        ],
        chainId: 'Forward',
        signatures: [
          {
            signer: 'hacking',
            signature: Uint8Array [
              44
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'Cambridgeshire',
            signature: Uint8Array [
              239
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
      height: 28531,
      index: 55838,
      hash: '6dd31c249b1a56ea4dabd398db534e2b41206349',
      tags: [
        {
          key: Uint8Array [
            75
          ],
          value: Uint8Array [
            165
          ]
        },
        {
          key: Uint8Array [
            180
          ],
          value: Uint8Array [
            121
          ]
        }
      ],
      code: 7,
      time: '2019-03-08T03:14:07.484Z'
    },
    {
      tx: {
        from: '58d957b8c8bebe6e09ac782290ccbbdf305c4d53',
        nonce: 91192,
        signature: Uint8Array [
          33
        ],
        chainId: 'Tunisia',
        signatures: [
          {
            signer: 'Unbranded',
            signature: Uint8Array [
              171
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'Dynamic',
            signature: Uint8Array [
              175
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
      height: 29821,
      index: 87292,
      hash: 'efb7681433fb7d6ab034ef01e76e67e8eb556ede',
      tags: [
        {
          key: Uint8Array [
            46
          ],
          value: Uint8Array [
            123
          ]
        },
        {
          key: Uint8Array [
            16
          ],
          value: Uint8Array [
            8
          ]
        }
      ],
      code: 16,
      time: '2019-03-08T03:14:07.484Z'
    }
  ]
}
});
```

### sendTx

```js
const result = await client.sendTx({
  tx: {
    from: '52b9bb0fef56ec124b0b4f2be3e8ac59e6ca66ea',
    nonce: 79903,
    signature: Uint8Array [
      62
    ],
    chainId: 'multi-byte',
    signatures: [
      {
        signer: 'Steel',
        signature: Uint8Array [
          146
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'Personal Loan Account',
        signature: Uint8Array [
          51
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
      hash: 14,
      address: 1,
      role: 4
    },
    sk: Uint8Array [
      48
    ],
    pk: Uint8Array [
      170
    ],
    address: '8c961045fea176cde6b0e58f68a1f7e656906492'
  },
  token: 'attitude-oriented',
  commit: undefined
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 22,
  hash: '8967a78d1c0fd6b76b66b95b6be8b4fd9ebc364b'
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
      hash: 0,
      address: 0,
      role: 3
    },
    sk: Uint8Array [
      168
    ],
    pk: Uint8Array [
      210
    ],
    address: '21ef71356d0c4f6f83f6e728ac2e2747f1c5172e'
  },
  token: 'Architect'
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
    27
  ]
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 38,
  hash: '1c5a694e04fb99e8fc07e0a5350d16d854d95982'
}
});
```

### subscribe

```js
const stream = client.subscribe({
  type: 3,
  filter: 'Soap'
});

// output
{
  topic: 'deploy'
}
```

### unsubscribe

```js
const result = await client.unsubscribe({
  topic: 'Practical Frozen Pants'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 21
}
});
```


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |
