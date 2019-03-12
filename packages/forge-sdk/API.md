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
  from: 'b4c6945af8429744535b1e29ed49aa9d20726292',
  nonce: 29807,
  wallet: {
    type: {
      pk: 0,
      hash: 13,
      address: 0,
      role: 8
    },
    sk: Uint8Array [
      90
    ],
    pk: Uint8Array [
      240
    ],
    address: '7a0e3b8b8489646bee60ffe05a3749786d491e82'
  },
  token: 'Officer'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 42,
  tx: {
    from: '3fbb46c8373ca4ae001af35e38d61584f74c78a8',
    nonce: 40587,
    signature: Uint8Array [
      129
    ],
    chainId: 'driver',
    signatures: [
      {
        signer: 'Web',
        signature: Uint8Array [
          225
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'Personal Loan Account',
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
  }
}
});
```

### createWallet

```js
const result = await client.createWallet({
  passphrase: 'Dynamic',
  type: {
    pk: 0,
    hash: 13,
    address: 1,
    role: 3
  },
  moniker: 'hack'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 16,
  token: 'solid state',
  wallet: {
    type: {
      pk: 1,
      hash: 6,
      address: 0,
      role: 1
    },
    sk: Uint8Array [
      166
    ],
    pk: Uint8Array [
      91
    ],
    address: 'bc66b4d8e354eeae07057e0988cf9dc57051f776'
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
      address: 0,
      role: 6
    },
    sk: Uint8Array [
      214
    ],
    pk: Uint8Array [
      85
    ],
    address: '9815df0df6217ab851273afc4565f297fd8dcbcb'
  }
}
});
```

### getAccountState

```js
const stream = client.getAccountState({
  address: '4304540e62d7656df0fdc931cf23c84106297f66',
  keys: [
    'Incredible Fresh Computer',
    'Home'
  ],
  height: 55747
});

// output
{
  code: 7,
  state: {
    balance: '17294',
    nonce: 69112,
    numTxs: 42796,
    address: '9ed5fa97c89ad20c6e3e3dacd5537029b18dcf2d',
    pk: Uint8Array [
      203
    ],
    type: {
      pk: 1,
      hash: 7,
      address: 1,
      role: 5
    },
    moniker: 'Industrial',
    context: {
      genesisTx: 'Assistant',
      renaissanceTx: 'Mexican Peso Mexican Unidad de Inversion (UDI)',
      genesisTime: '2019-03-12T07:14:05.371Z',
      renaissanceTime: '2019-03-12T07:14:05.371Z'
    },
    issuer: 'Concrete',
    migratedTo: [
      'virtual',
      'EXE'
    ],
    migratedFrom: [
      'deposit',
      'Walks'
    ],
    numAssets: 18053,
    stake: {
      totalStakes: '81254',
      totalUnstakes: '63096',
      totalReceivedStakes: '13416',
      recentStakes: {
        items: [
          Uint8Array [
            58
          ],
          Uint8Array [
            207
          ]
        ],
        typeUrl: 'RSS',
        maxItems: 22701,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [
            114
          ],
          Uint8Array [
            184
          ]
        ],
        typeUrl: 'application',
        maxItems: 50661,
        circular: undefined,
        fifo: undefined
      }
    },
    pinnedFiles: {
      items: [
        Uint8Array [
          79
        ],
        Uint8Array [
          229
        ]
      ],
      typeUrl: 'Cambridgeshire',
      maxItems: 94775,
      circular: undefined,
      fifo: undefined
    },
    poke: {
      dailyLimit: '20276',
      leftover: '69243',
      amount: '62592'
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
  senderAddress: 'invoice',
  itx: {
    moniker: 'panel',
    data: {
      type: 'fg:x:random_data',
      value: 'ABCD 1234'
    },
    readonly: undefined,
    transferrable: undefined,
    ttl: 5302,
    parent: 'Pines'
  },
  walletType: {
    pk: 1,
    hash: 0,
    address: 0,
    role: 3
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 20,
  assetAddress: 'Practical Plastic Ball'
}
});
```

### getAssetState

```js
const stream = client.getAssetState({
  address: 'b33a24da753e1ec7b13e140541da5c2bb9e3d183',
  keys: [
    'Movies',
    'content'
  ],
  height: 81624
});

// output
{
  code: 31,
  state: {
    address: '9e3c0e753e8069caf3ab387193c1d9086919ed91',
    owner: 'synergy',
    moniker: 'Frozen',
    readonly: undefined,
    transferrable: undefined,
    ttl: 87665,
    consumedTime: '2019-03-12T07:14:05.372Z',
    issuer: 'exuding',
    stake: {
      totalStakes: '45482',
      totalUnstakes: '50971',
      totalReceivedStakes: '48830',
      recentStakes: {
        items: [
          Uint8Array [
            103
          ],
          Uint8Array [
            209
          ]
        ],
        typeUrl: 'compelling',
        maxItems: 17696,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [
            181
          ],
          Uint8Array [
            44
          ]
        ],
        typeUrl: 'Delaware',
        maxItems: 87526,
        circular: undefined,
        fifo: undefined
      }
    },
    context: {
      genesisTx: 'applications',
      renaissanceTx: 'SDD',
      genesisTime: '2019-03-12T07:14:05.372Z',
      renaissanceTime: '2019-03-12T07:14:05.372Z'
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
    cursor: 'empower',
    size: 67920,
    order: [
      {
        field: 'bleeding-edge',
        type: 'emulation'
      },
      {
        field: 'back up',
        type: 'Wooden'
      }
    ]
  },
  ownerAddress: 'invoice'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 40,
  page: {
    cursor: 'Manager',
    next: undefined,
    total: 1803
  },
  assets: [
    {
      address: '2ec89b23d259df8c3a46527a3e96ee6dfb893bf3',
      owner: 'Visionary',
      genesisTime: 'TCP',
      renaissanceTime: 'partnerships',
      moniker: 'evolve',
      readonly: undefined
    },
    {
      address: 'b4d6cfe18e6d8f953103618a792d76c5899ff18f',
      owner: 'monitor',
      genesisTime: 'Program',
      renaissanceTime: 'Human',
      moniker: 'reboot',
      readonly: undefined
    }
  ]
}
});
```

### getBlock

```js
const stream = client.getBlock({
  height: 17050
});

// output
{
  code: 5,
  block: {
    height: 76483,
    numTxs: 96291,
    time: '2019-03-12T07:14:05.373Z',
    appHash: '0c5641fa6aae20de2d63dc4f9a28597f48b3d977',
    proposer: '10816ed95450b7eb5f0f0396b9980407dc3622ab',
    txs: [
      {
        tx: {
          from: '115c23c3b2b2b58c3096d12d8fba8ff51f581781',
          nonce: 93907,
          signature: Uint8Array [
            97
          ],
          chainId: 'Mission',
          signatures: [
            {
              signer: 'transitional',
              signature: Uint8Array [
                5
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'Sleek Cotton Fish',
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
        height: 81204,
        index: 62080,
        hash: 'b685503649a6bcab2e49a03719eb07def8c75b71',
        tags: [
          {
            key: Uint8Array [
              57
            ],
            value: Uint8Array [
              144
            ]
          },
          {
            key: Uint8Array [
              225
            ],
            value: Uint8Array [
              184
            ]
          }
        ],
        code: 39,
        time: '2019-03-12T07:14:05.374Z',
        createAsset: {
          asset: 'vertical'
        },
        accountMigrate: {
          address: '25ab8410810dc729db58317a53fa2d10e57990c8'
        }
      },
      {
        tx: {
          from: 'd2a9d1052cafe974b677e3bca75c664da150cc43',
          nonce: 29277,
          signature: Uint8Array [
            242
          ],
          chainId: 'heuristic',
          signatures: [
            {
              signer: 'Public-key',
              signature: Uint8Array [
                109
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'Soap',
              signature: Uint8Array [
                225
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
        height: 49156,
        index: 29544,
        hash: '4457a2bfa92b79d89fa50d47ed152f2a282a691e',
        tags: [
          {
            key: Uint8Array [
              77
            ],
            value: Uint8Array [
              80
            ]
          },
          {
            key: Uint8Array [
              239
            ],
            value: Uint8Array [
              90
            ]
          }
        ],
        code: 24,
        time: '2019-03-12T07:14:05.374Z',
        createAsset: {
          asset: 'Rand Loti'
        },
        accountMigrate: {
          address: '4ce40e07a925694152389d68ef416d0198d087a5'
        }
      }
    ],
    totalTxs: 23923,
    invalidTxs: [
      {
        tx: {
          from: 'a8cfc9706154e4f980c64ee84d597ac350be4114',
          nonce: 2470,
          signature: Uint8Array [
            189
          ],
          chainId: 'overriding',
          signatures: [
            {
              signer: 'compress',
              signature: Uint8Array [
                255
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'real-time',
              signature: Uint8Array [
                25
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
        height: 8726,
        index: 66921,
        hash: '9b54602aef90470b1e501c91c2cefbf9d0f17a18',
        tags: [
          {
            key: Uint8Array [
              41
            ],
            value: Uint8Array [
              201
            ]
          },
          {
            key: Uint8Array [
              194
            ],
            value: Uint8Array [
              193
            ]
          }
        ],
        code: 24,
        time: '2019-03-12T07:14:05.374Z',
        createAsset: {
          asset: 'Fantastic'
        },
        accountMigrate: {
          address: '17d5cf2ba30b7ac05c6aa4fd0772724d43608a3b'
        }
      },
      {
        tx: {
          from: 'e0e04fd6e8a84342989ff76165d4fbebf05faefd',
          nonce: 57468,
          signature: Uint8Array [
            189
          ],
          chainId: 'Product',
          signatures: [
            {
              signer: 'microchip',
              signature: Uint8Array [
                166
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'multi-byte',
              signature: Uint8Array [
                218
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
        height: 44955,
        index: 81055,
        hash: '165f14bfb9cedbaab412754f3514a07875e5cc45',
        tags: [
          {
            key: Uint8Array [
              11
            ],
            value: Uint8Array [
              131
            ]
          },
          {
            key: Uint8Array [
              192
            ],
            value: Uint8Array [
              83
            ]
          }
        ],
        code: 6,
        time: '2019-03-12T07:14:05.374Z',
        createAsset: {
          asset: 'Jamaican Dollar'
        },
        accountMigrate: {
          address: '6c6d6bd7d0c6cb4f9a5a5d32f3972efef264bec2'
        }
      }
    ],
    txsHashes: [
      'Borders',
      'Alabama'
    ],
    invalidTxsHashes: [
      'bypass',
      'connecting'
    ]
  }
}
```

### getBlocks

```js
const result = await client.getBlocks({
  paging: {
    cursor: 'Gorgeous',
    size: 69858,
    order: [
      {
        field: 'Persistent',
        type: 'invoice'
      },
      {
        field: 'Hat',
        type: 'Auto Loan Account'
      }
    ]
  },
  minHeight: 41943,
  maxHeight: 52099,
  emptyExcluded: undefined
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 22,
  page: {
    cursor: 'superstructure',
    next: undefined,
    total: 73008
  },
  blocks: [
    {
      height: 80627,
      numTxs: 64908,
      time: '2019-03-12T07:14:05.375Z',
      appHash: '898625bf45031f9ee524f708568486f65ba0d066',
      proposer: '7a0eae759b9f7ca9e9d31bb0ea899ff25e61bde5',
      txs: [
        {
          tx: {
            from: 'd6c328c828ac19e4dd5e3839d5d89073de78dbb8',
            nonce: 91950,
            signature: Uint8Array [
              147
            ],
            chainId: 'copying',
            signatures: [
              {
                signer: 'Movies',
                signature: Uint8Array [
                  227
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Integrated',
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
          height: 65487,
          index: 64678,
          hash: 'e1f4fb63db9b0e05c02f19bbb2e0e55fe5ab740d',
          tags: [
            {
              key: Uint8Array [
                14
              ],
              value: Uint8Array [
                7
              ]
            },
            {
              key: Uint8Array [
                4
              ],
              value: Uint8Array [
                171
              ]
            }
          ],
          code: 16,
          time: '2019-03-12T07:14:05.375Z',
          createAsset: {
            asset: 'Fantastic Rubber Chair'
          },
          accountMigrate: {
            address: '995c86d351cf711e819e7c078604322f7eb2f4db'
          }
        },
        {
          tx: {
            from: 'b62e7e8597d3f9ed7d37d4a2d37f7f6cec312b92',
            nonce: 17168,
            signature: Uint8Array [
              138
            ],
            chainId: 'Regional',
            signatures: [
              {
                signer: 'alliance',
                signature: Uint8Array [
                  173
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Checking Account',
                signature: Uint8Array [
                  158
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
          height: 21347,
          index: 61001,
          hash: 'eb376374d15519929b4fb02335d9e4d27125e335',
          tags: [
            {
              key: Uint8Array [
                1
              ],
              value: Uint8Array [
                56
              ]
            },
            {
              key: Uint8Array [
                194
              ],
              value: Uint8Array [
                253
              ]
            }
          ],
          code: 37,
          time: '2019-03-12T07:14:05.376Z',
          createAsset: {
            asset: 'Enterprise-wide'
          },
          accountMigrate: {
            address: '1639b8aa23714b8a9a5681fdd7af0ee6868d4aec'
          }
        }
      ],
      totalTxs: 72076,
      invalidTxs: [
        {
          tx: {
            from: '2f7cea979b2a36ca6005547403aa7c94fdbf14a5',
            nonce: 52248,
            signature: Uint8Array [
              231
            ],
            chainId: 'Auto Loan Account',
            signatures: [
              {
                signer: 'New Mexico',
                signature: Uint8Array [
                  187
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Metal',
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
          height: 69963,
          index: 74939,
          hash: '805adc32d0aeacb49d9b516355666c192e12a529',
          tags: [
            {
              key: Uint8Array [
                60
              ],
              value: Uint8Array [
                36
              ]
            },
            {
              key: Uint8Array [
                103
              ],
              value: Uint8Array [
                81
              ]
            }
          ],
          code: 39,
          time: '2019-03-12T07:14:05.376Z',
          createAsset: {
            asset: 'Ridge'
          },
          accountMigrate: {
            address: '93466c4093391cd47ab60022c4b81d9a7dcdbd49'
          }
        },
        {
          tx: {
            from: 'f03121ad27f19dafc44ab665a9b27330a48d5eab',
            nonce: 82125,
            signature: Uint8Array [
              191
            ],
            chainId: 'SCSI',
            signatures: [
              {
                signer: 'parse',
                signature: Uint8Array [
                  15
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Cheese',
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
          height: 40907,
          index: 46983,
          hash: '517885796f9286e3f13e6edff423410ef13d5c92',
          tags: [
            {
              key: Uint8Array [
                44
              ],
              value: Uint8Array [
                111
              ]
            },
            {
              key: Uint8Array [
                145
              ],
              value: Uint8Array [
                115
              ]
            }
          ],
          code: 0,
          time: '2019-03-12T07:14:05.376Z',
          createAsset: {
            asset: 'Associate'
          },
          accountMigrate: {
            address: '5361c12b8a84152d7d893d64df4e381ecbc10401'
          }
        }
      ],
      txsHashes: [
        'Home Loan Account',
        'recontextualize'
      ],
      invalidTxsHashes: [
        'solid state',
        'SCSI'
      ]
    },
    {
      height: 48919,
      numTxs: 7255,
      time: '2019-03-12T07:14:05.376Z',
      appHash: '445608068f68045adebb9c60420f763fcbd10b54',
      proposer: '8fc67fd510892ed2bd94c5a75d093b428c6392e0',
      txs: [
        {
          tx: {
            from: 'e4a5b64a5f0e76976b77bed1289838d950920d08',
            nonce: 18050,
            signature: Uint8Array [
              190
            ],
            chainId: 'Alabama',
            signatures: [
              {
                signer: 'redundant',
                signature: Uint8Array [
                  211
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'hacking',
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
          height: 42330,
          index: 69515,
          hash: 'cd4918df290afdd82574dcba462085b057cbe91b',
          tags: [
            {
              key: Uint8Array [
                68
              ],
              value: Uint8Array [
                153
              ]
            },
            {
              key: Uint8Array [
                7
              ],
              value: Uint8Array [
                216
              ]
            }
          ],
          code: 20,
          time: '2019-03-12T07:14:05.377Z',
          createAsset: {
            asset: 'bluetooth'
          },
          accountMigrate: {
            address: '57c07335f9ed49011ca08dc2a35f474427a66c61'
          }
        },
        {
          tx: {
            from: '63c43cd6ea68df8d6999bcacaaeae7bf80ebbe4c',
            nonce: 54213,
            signature: Uint8Array [
              197
            ],
            chainId: 'SCSI',
            signatures: [
              {
                signer: 'Home Loan Account',
                signature: Uint8Array [
                  72
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Architect',
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
          height: 11833,
          index: 94153,
          hash: 'fa54280c45dabc9bda8cdf661afe948121bb32fd',
          tags: [
            {
              key: Uint8Array [
                224
              ],
              value: Uint8Array [
                103
              ]
            },
            {
              key: Uint8Array [
                63
              ],
              value: Uint8Array [
                54
              ]
            }
          ],
          code: 27,
          time: '2019-03-12T07:14:05.377Z',
          createAsset: {
            asset: 'Grocery'
          },
          accountMigrate: {
            address: 'f13b5286966450e87d0587aa97941ccdb5c2b566'
          }
        }
      ],
      totalTxs: 24298,
      invalidTxs: [
        {
          tx: {
            from: '52667c5a6e25cc007d7be4949dd8bf54ce768c2e',
            nonce: 42702,
            signature: Uint8Array [
              133
            ],
            chainId: 'end-to-end',
            signatures: [
              {
                signer: 'Plaza',
                signature: Uint8Array [
                  26
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Towels',
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
          },
          height: 33606,
          index: 43182,
          hash: '6b1d5aa2ef506a27af5fe73c2d0d09c1b4de7935',
          tags: [
            {
              key: Uint8Array [
                107
              ],
              value: Uint8Array [
                193
              ]
            },
            {
              key: Uint8Array [
                146
              ],
              value: Uint8Array [
                136
              ]
            }
          ],
          code: 33,
          time: '2019-03-12T07:14:05.377Z',
          createAsset: {
            asset: 'SMTP'
          },
          accountMigrate: {
            address: '7cb1743603aec9fae96da48f30c482b05a653d5d'
          }
        },
        {
          tx: {
            from: 'b8402b93776ad5d26a2a46f4585cbb242e286d1d',
            nonce: 20567,
            signature: Uint8Array [
              214
            ],
            chainId: 'deposit',
            signatures: [
              {
                signer: 'bandwidth',
                signature: Uint8Array [
                  216
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'bus',
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
          },
          height: 45080,
          index: 29690,
          hash: '65cc49e432173ff6b947075ac038aad503bc0032',
          tags: [
            {
              key: Uint8Array [
                11
              ],
              value: Uint8Array [
                107
              ]
            },
            {
              key: Uint8Array [
                204
              ],
              value: Uint8Array [
                247
              ]
            }
          ],
          code: 25,
          time: '2019-03-12T07:14:05.378Z',
          createAsset: {
            asset: 'Cotton'
          },
          accountMigrate: {
            address: '860f88107fab151c3f4169551411ce11c75d02d1'
          }
        }
      ],
      txsHashes: [
        'reintermediate',
        'paradigms'
      ],
      invalidTxsHashes: [
        'Customer',
        'actuating'
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
  code: 7,
  info: {
    id: 'North Carolina',
    network: 'Generic',
    moniker: 'Shoals',
    consensusVersion: 'connecting',
    synced: undefined,
    appHash: '23cb1f0f5b7822a9276e0e5d74c64eedc5ac481c',
    blockHash: Uint8Array [
      205
    ],
    blockHeight: 53658,
    blockTime: '2019-03-12T07:14:05.379Z',
    address: '3b37c0584f98ef29ce8fa384f3fe70b508afcf3a',
    votingPower: 9101,
    totalTxs: 5890,
    version: 'enhance',
    dataVersion: 'Rubber',
    forgeAppsVersion: {
      'function randomWord (type) {\n\n    var wordMethods = [\n    \'commerce.department\',\n    \'commerce.productName\',\n    \'commerce.productAdjective\',\n    \'commerce.productMaterial\',\n    \'commerce.product\',\n    \'commerce.color\',\n\n    \'company.catchPhraseAdjective\',\n    \'company.catchPhraseDescriptor\',\n    \'company.catchPhraseNoun\',\n    \'company.bsAdjective\',\n    \'company.bsBuzz\',\n    \'company.bsNoun\',\n    \'address.streetSuffix\',\n    \'address.county\',\n    \'address.country\',\n    \'address.state\',\n\n    \'finance.accountName\',\n    \'finance.transactionType\',\n    \'finance.currencyName\',\n\n    \'hacker.noun\',\n    \'hacker.verb\',\n    \'hacker.adjective\',\n    \'hacker.ingverb\',\n    \'hacker.abbreviation\',\n\n    \'name.jobDescriptor\',\n    \'name.jobArea\',\n    \'name.jobType\'];\n\n    // randomly pick from the many faker methods that can generate words\n    var randomWordMethod = faker.random.arrayElement(wordMethods);\n    return faker.fake(\'{{\' + randomWordMethod + \'}}\');\n\n  }': 'Health'
    },
    supportedTxs: [
      'payment',
      'Peso Uruguayo Uruguay Peso en Unidades Indexadas'
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
  code: 21,
  config: 'Computers'
}
});
```

### getForgeState

```js
const result = await client.getForgeState({
  keys: [
    'cohesive',
    'New Zealand'
  ],
  height: 26901
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 10,
  state: {
    address: 'baedecf5158cd1e5091b4cb0211b603a007d0ee1',
    consensus: {
      maxBytes: 94883,
      maxGas: 90021,
      maxValidators: 11486,
      maxCandidates: 2977,
      pubKeyTypes: [
        'needs-based',
        'CSS'
      ],
      validators: [
        {
          address: 'c476bc01dbfbe002b4662ce701b611cbf780c239',
          power: 89733
        },
        {
          address: 'a7d67d43f4016458bfcd7286c1967a8c33276aec',
          power: 50313
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
            dataHash: 'silver',
            actions: [
              undefined,
              undefined
            ]
          },
          {
            type: 1,
            dataHash: 'Home Loan Account',
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
        totalStakes: '25583',
        totalUnstakes: '25955',
        context: {
          genesisTx: 'Tasty',
          renaissanceTx: 'AGP',
          genesisTime: '2019-03-12T07:14:05.380Z',
          renaissanceTime: '2019-03-12T07:14:05.380Z'
        }
      }
    },
    version: 'lavender',
    dataVersion: 'bypass',
    forgeAppHash: Uint8Array [
      242
    ],
    token: {
      name: 'SAS',
      symbol: 'Kids',
      unit: 'database',
      description: 'user-facing',
      icon: Uint8Array [
        237
      ],
      decimal: 77904,
      initialSupply: 12484,
      totalSupply: 77384,
      inflationRate: 40448
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
    startDate: 'Avon',
    endDate: 'Director'
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 3,
  forgeStatistics: {
    numBlocks: [
      47678,
      9450
    ],
    numTxs: [
      39056,
      88632
    ],
    numStakes: [
      '62001',
      '12875'
    ],
    numValidators: [
      90884,
      18306
    ],
    numAccountMigrateTxs: [
      970,
      10391
    ],
    numCreateAssetTxs: [
      18741,
      19206
    ],
    numConsensusUpgradeTxs: [
      30735,
      24166
    ],
    numDeclareTxs: [
      37890,
      25035
    ],
    numDeclareFileTxs: [
      3553,
      74288
    ],
    numExchangeTxs: [
      45577,
      49085
    ],
    numStakeTxs: [
      64880,
      31868
    ],
    numSysUpgradeTxs: [
      56244,
      63640
    ],
    numTransferTxs: [
      75662,
      5312
    ],
    numUpdateAssetTxs: [
      31650,
      92222
    ],
    numConsumeAssetTxs: [
      90176,
      29563
    ],
    numPokeTxs: [
      20451,
      75303
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
  code: 16,
  netInfo: {
    listening: undefined,
    listeners: [
      'Granite',
      'Louisiana'
    ],
    nPeers: 87925,
    peers: [
      {
        id: 'Extended',
        network: 'Ferry',
        consensusVersion: 'Metal',
        moniker: 'Ports',
        ip: 'connect',
        geoInfo: {
          city: 'Usability',
          country: 'metrics',
          latitude: 92996.73,
          longitude: 91283.63
        }
      },
      {
        id: 'Tajikistan',
        network: 'payment',
        consensusVersion: 'moratorium',
        moniker: 'Dynamic',
        ip: 'Home',
        geoInfo: {
          city: 'Keyboard',
          country: 'hard drive',
          latitude: 73687.17,
          longitude: 47797.6
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
    id: 'Handcrafted Soft Fish',
    network: 'Small',
    moniker: 'plum',
    consensusVersion: 'program',
    synced: undefined,
    appHash: '59c42b9630fdda39d6377e2f32538e844f53ca9f',
    blockHash: Uint8Array [
      27
    ],
    blockHeight: 2975,
    blockTime: '2019-03-12T07:14:05.381Z',
    address: '7f9d096e68369f6095bbb78ef9d2eb15a98a4ea1',
    votingPower: 93914,
    totalTxs: 97921,
    version: 'synthesize',
    dataVersion: 'Kids',
    forgeAppsVersion: {
      'function randomWord (type) {\n\n    var wordMethods = [\n    \'commerce.department\',\n    \'commerce.productName\',\n    \'commerce.productAdjective\',\n    \'commerce.productMaterial\',\n    \'commerce.product\',\n    \'commerce.color\',\n\n    \'company.catchPhraseAdjective\',\n    \'company.catchPhraseDescriptor\',\n    \'company.catchPhraseNoun\',\n    \'company.bsAdjective\',\n    \'company.bsBuzz\',\n    \'company.bsNoun\',\n    \'address.streetSuffix\',\n    \'address.county\',\n    \'address.country\',\n    \'address.state\',\n\n    \'finance.accountName\',\n    \'finance.transactionType\',\n    \'finance.currencyName\',\n\n    \'hacker.noun\',\n    \'hacker.verb\',\n    \'hacker.adjective\',\n    \'hacker.ingverb\',\n    \'hacker.abbreviation\',\n\n    \'name.jobDescriptor\',\n    \'name.jobArea\',\n    \'name.jobType\'];\n\n    // randomly pick from the many faker methods that can generate words\n    var randomWordMethod = faker.random.arrayElement(wordMethods);\n    return faker.fake(\'{{\' + randomWordMethod + \'}}\');\n\n  }': 'schemas'
    },
    supportedTxs: [
      'knowledge base',
      'navigate'
    ],
    ip: 'Technician',
    geoInfo: {
      city: 'Lead',
      country: 'Yuan Renminbi',
      latitude: 10228.41,
      longitude: 40406.97
    }
  }
}
});
```

### getStakeState

```js
const stream = client.getStakeState({
  address: 'e8753034e2794d42bea8871a44a7561df98bf466',
  keys: [
    'Soap',
    'Manager'
  ],
  height: 38551
});

// output
{
  code: 17,
  state: {
    address: '308dfc1c0ab0737f12958575fd49cee39e5ef1ba',
    from: '1115b0502ca3abd7ae1ddeb5643ab1444a3b839b',
    to: '97e7e929b31fcb17a0c47f4c5c569d623b943fd7',
    balance: '7876',
    message: 'Bedfordshire',
    context: {
      genesisTx: 'synthesizing',
      renaissanceTx: 'paradigm',
      genesisTime: '2019-03-12T07:14:05.382Z',
      renaissanceTime: '2019-03-12T07:14:05.382Z'
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
    cursor: 'Corporate',
    size: 32688,
    order: [
      {
        field: 'access',
        type: 'Response'
      },
      {
        field: 'Mission',
        type: 'Toys'
      }
    ]
  },
  addressFilter: {
    sender: 'microchip',
    receiver: 'deliverables',
    direction: 1
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 31,
  page: {
    cursor: 'Parks',
    next: undefined,
    total: 77318
  },
  stakes: [
    {
      address: 'ca3c87b2fa2c57aa4923dacae91c4852c4e63cdb',
      balance: '89070',
      sender: 'transition',
      receiver: 'Malaysian Ringgit',
      genesisTime: 'parsing',
      renaissanceTime: 'South Dakota',
      message: 'monitoring',
      type: 64505
    },
    {
      address: '2d2a5cca32b3901d4a36781807755227cc520421',
      balance: '69528',
      sender: 'blue',
      receiver: 'Sausages',
      genesisTime: 'efficient',
      renaissanceTime: 'deposit',
      message: 'Bulgaria',
      type: 9844
    }
  ]
}
});
```

### getTopAccounts

```js
const result = await client.getTopAccounts({
  paging: {
    cursor: 'Wooden',
    size: 93179,
    order: [
      {
        field: 'Credit Card Account',
        type: 'Azerbaijanian Manat'
      },
      {
        field: 'radical',
        type: 'Mobility'
      }
    ]
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 16,
  page: {
    cursor: 'Small',
    next: undefined,
    total: 1159
  },
  accounts: [
    {
      address: '5cb3b369c12475fabb84e62d9682de877a93ffc6',
      balance: '99947',
      numAssets: 79458,
      numTxs: 16938,
      nonce: 58203,
      genesisTime: 'directional',
      renaissanceTime: 'Strategist',
      moniker: 'Monitored',
      migratedFrom: 'parsing',
      migratedTo: 'emulation',
      totalReceivedStakes: '6072',
      totalStakes: '50591',
      totalUnstakes: '85094',
      recentNumTxs: [
        54040,
        61424
      ]
    },
    {
      address: 'f1b2dfd3e64f2e2b270b4e10eadbf5e6f3616e4e',
      balance: '42685',
      numAssets: 39363,
      numTxs: 74607,
      nonce: 4176,
      genesisTime: 'Maryland',
      renaissanceTime: 'overriding',
      moniker: 'metrics',
      migratedFrom: 'Home Loan Account',
      migratedTo: 'Chief',
      totalReceivedStakes: '81969',
      totalStakes: '46326',
      totalUnstakes: '15921',
      recentNumTxs: [
        48442,
        35382
      ]
    }
  ]
}
});
```

### getTx

```js
const stream = client.getTx({
  hash: '948f0f37e4f1abe9246d6dbfbd8ffb67437e5e9c'
});

// output
{
  code: 8,
  info: {
    tx: {
      from: '66dcf1c9c0b4111712bf6f035c182b57bb59ba31',
      nonce: 90499,
      signature: Uint8Array [
        205
      ],
      chainId: 'Auto Loan Account',
      signatures: [
        {
          signer: 'Lithuanian Litas',
          signature: Uint8Array [
            216
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        {
          signer: 'SDD',
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
    height: 76390,
    index: 23855,
    hash: '72b323ce35a0066ec08a935e0bfc2fe3a6e09a53',
    tags: [
      {
        key: Uint8Array [
          15
        ],
        value: Uint8Array [
          233
        ]
      },
      {
        key: Uint8Array [
          146
        ],
        value: Uint8Array [
          59
        ]
      }
    ],
    code: 3,
    time: '2019-03-12T07:14:05.383Z',
    createAsset: {
      asset: 'Mountains'
    },
    accountMigrate: {
      address: 'a4215ded3263a0a52156cce3f7b1c53e59e8770e'
    }
  }
}
```

### getUnconfirmedTxs

```js
const result = await client.getUnconfirmedTxs({
  limit: 70345
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 33,
  unconfirmedTxs: {
    nTxs: 8632,
    txs: [
      {
        from: 'efe136a6c632d480e496459cf0806d688e8769db',
        nonce: 97380,
        signature: Uint8Array [
          142
        ],
        chainId: 'Mauritius Rupee',
        signatures: [
          {
            signer: 'Interactions',
            signature: Uint8Array [
              63
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'bandwidth',
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
      },
      {
        from: 'eab346c9195c0e8615b8e97ae12665e98dc78f7d',
        nonce: 37771,
        signature: Uint8Array [
          216
        ],
        chainId: 'transition',
        signatures: [
          {
            signer: 'Towels',
            signature: Uint8Array [
              3
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'optimize',
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
  code: 22,
  validatorsInfo: {
    blockHeight: 19003,
    validators: [
      {
        address: 'ad0dfc3d9d846d3a2ffbc3f5cba1fb05ecba46b5',
        pubKey: {
          type: 'next-generation',
          data: Uint8Array [
            109
          ]
        },
        votingPower: 97617,
        proposerPriority: 'Illinois',
        name: 'CFP Franc'
      },
      {
        address: '604a8b4335505bd2ec54280f406f6bb2dcb7bd16',
        pubKey: {
          type: 'RSS',
          data: Uint8Array [
            161
          ]
        },
        votingPower: 60585,
        proposerPriority: 'Quality',
        name: 'hack'
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
    cursor: 'Licensed',
    size: 5852,
    order: [
      {
        field: 'bypassing',
        type: 'bus'
      },
      {
        field: 'wireless',
        type: 'Gorgeous'
      }
    ]
  },
  address: 'af3ece07bfe329d44d5d5be600ac1afb02c1ed89'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 36,
  page: {
    cursor: 'Afghani',
    next: undefined,
    total: 73947
  },
  transactions: [
    {
      consumeAsset: {
        asset: 'Electronics'
      }
    },
    {
      consumeAsset: {
        asset: 'partnerships'
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
    cursor: 'Gambia',
    size: 56718,
    order: [
      {
        field: 'transmitting',
        type: 'synthesizing'
      },
      {
        field: 'silver',
        type: 'Poland'
      }
    ]
  },
  timeFilter: {
    startDateTime: 'Music',
    endDateTime: 'teal'
  },
  addressFilter: {
    sender: 'harness',
    receiver: 'Wisconsin',
    direction: 2
  },
  typeFilter: {
    types: [
      'bluetooth',
      'Specialist'
    ]
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 40,
  page: {
    cursor: 'Pants',
    next: undefined,
    total: 40112
  },
  transactions: [
    {
      consumeAsset: {
        asset: 'Trace'
      }
    },
    {
      consumeAsset: {
        asset: 'bandwidth-monitored'
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
  code: 24,
  address: '676db6fb720bdc5c5da211b777d9b6b7ec40aaa0'
}
```

### loadFile

```js
const stream = client.loadFile({
  hash: 'bc93b097fdc032380ba6269e9ba73dbc6e647af6'
});

// output
{
  code: 26,
  chunk: Uint8Array [
    176
  ]
}
```

### loadWallet

```js
const result = await client.loadWallet({
  address: '07a93454e1df820fcd515d4b5b344ecaf55495a2',
  passphrase: 'Massachusetts'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 24,
  token: 'Borders',
  wallet: {
    type: {
      pk: 1,
      hash: 7,
      address: 0,
      role: 3
    },
    sk: Uint8Array [
      95
    ],
    pk: Uint8Array [
      126
    ],
    address: '2f8eb83fde809a85f65f11637215ac4fccee4b11'
  }
}
});
```

### multisig

```js
const result = await client.multisig({
  tx: {
    from: 'cfe4b53a986bb1d6d6e35972d10e6268141ca31b',
    nonce: 7914,
    signature: Uint8Array [
      36
    ],
    chainId: 'yellow',
    signatures: [
      {
        signer: 'Corner',
        signature: Uint8Array [
          136
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'virtual',
        signature: Uint8Array [
          249
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
      role: 2
    },
    sk: Uint8Array [
      134
    ],
    pk: Uint8Array [
      190
    ],
    address: 'e334ed27c4c7f0964929503d9cc608f87f0945dd'
  },
  token: 'Nakfa'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 36,
  tx: {
    from: '954f78e27e48f36a72ca87965bab368482764fb4',
    nonce: 29854,
    signature: Uint8Array [
      253
    ],
    chainId: 'Virginia',
    signatures: [
      {
        signer: 'Afghanistan',
        signature: Uint8Array [
          235
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'bluetooth',
        signature: Uint8Array [
          102
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
  hash: '250ab8a1b164091fa19a6178b3e4df5297ad153e'
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
      from: '085312e7c85c0d36e6bf446fb5edeeb302e2867d',
      nonce: 28384,
      signature: Uint8Array [
        28
      ],
      chainId: 'parsing',
      signatures: [
        {
          signer: 'Cape Verde Escudo',
          signature: Uint8Array [
            192
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        {
          signer: 'Ford',
          signature: Uint8Array [
            1
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
        balance: '31632',
        nonce: 27962,
        numTxs: 81224,
        address: 'fc731bab86f75cb04a50f8cd757ddcd7093ed674',
        pk: Uint8Array [
          248
        ],
        type: {
          pk: 0,
          hash: 1,
          address: 0,
          role: 0
        },
        moniker: 'calculating',
        context: {
          genesisTx: 'Response',
          renaissanceTx: 'Centers',
          genesisTime: '2019-03-12T07:14:05.386Z',
          renaissanceTime: '2019-03-12T07:14:05.386Z'
        },
        issuer: 'Bacon',
        migratedTo: [
          'bus',
          'Saint Pierre and Miquelon'
        ],
        migratedFrom: [
          'Salad',
          'Forint'
        ],
        numAssets: 81345,
        stake: {
          totalStakes: '13022',
          totalUnstakes: '48432',
          totalReceivedStakes: '45209',
          recentStakes: {
            items: [
              Uint8Array [
                223
              ],
              Uint8Array [
                4
              ]
            ],
            typeUrl: 'Credit Card Account',
            maxItems: 40121,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                80
              ],
              Uint8Array [
                29
              ]
            ],
            typeUrl: 'Intelligent',
            maxItems: 37780,
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
              62
            ]
          ],
          typeUrl: 'GB',
          maxItems: 48576,
          circular: undefined,
          fifo: undefined
        },
        poke: {
          dailyLimit: '86589',
          leftover: '27401',
          amount: '88852'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        balance: '96954',
        nonce: 79357,
        numTxs: 69191,
        address: '78317f914986bcfaa1d99927717a1373869496b4',
        pk: Uint8Array [
          201
        ],
        type: {
          pk: 0,
          hash: 14,
          address: 0,
          role: 8
        },
        moniker: 'Dynamic',
        context: {
          genesisTx: 'fuchsia',
          renaissanceTx: 'Team-oriented',
          genesisTime: '2019-03-12T07:14:05.387Z',
          renaissanceTime: '2019-03-12T07:14:05.387Z'
        },
        issuer: 'Manor',
        migratedTo: [
          'Savings Account',
          'Mauritius Rupee'
        ],
        migratedFrom: [
          'productize',
          'hard drive'
        ],
        numAssets: 52133,
        stake: {
          totalStakes: '63454',
          totalUnstakes: '87697',
          totalReceivedStakes: '59429',
          recentStakes: {
            items: [
              Uint8Array [
                64
              ],
              Uint8Array [
                159
              ]
            ],
            typeUrl: 'Cove',
            maxItems: 78262,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                235
              ],
              Uint8Array [
                84
              ]
            ],
            typeUrl: 'Connecticut',
            maxItems: 92030,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              54
            ],
            Uint8Array [
              99
            ]
          ],
          typeUrl: 'Vermont',
          maxItems: 57945,
          circular: undefined,
          fifo: undefined
        },
        poke: {
          dailyLimit: '42012',
          leftover: '68046',
          amount: '76060'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    assets: [
      {
        address: '945d9c7e0b3196a1e855206f0cc8a3a1f6c059ca',
        owner: 'haptic',
        moniker: 'Grove',
        readonly: undefined,
        transferrable: undefined,
        ttl: 27064,
        consumedTime: '2019-03-12T07:14:05.387Z',
        issuer: 'Cuba',
        stake: {
          totalStakes: '15492',
          totalUnstakes: '99984',
          totalReceivedStakes: '43274',
          recentStakes: {
            items: [
              Uint8Array [
                167
              ],
              Uint8Array [
                89
              ]
            ],
            typeUrl: 'web services',
            maxItems: 89748,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                66
              ],
              Uint8Array [
                174
              ]
            ],
            typeUrl: 'Street',
            maxItems: 56940,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Mouse',
          renaissanceTx: 'Assistant',
          genesisTime: '2019-03-12T07:14:05.387Z',
          renaissanceTime: '2019-03-12T07:14:05.387Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: '72041772e0c53f01480aaab28be85f419adf167e',
        owner: 'plum',
        moniker: 'Liaison',
        readonly: undefined,
        transferrable: undefined,
        ttl: 29493,
        consumedTime: '2019-03-12T07:14:05.387Z',
        issuer: 'Interactions',
        stake: {
          totalStakes: '1272',
          totalUnstakes: '33142',
          totalReceivedStakes: '22764',
          recentStakes: {
            items: [
              Uint8Array [
                190
              ],
              Uint8Array [
                191
              ]
            ],
            typeUrl: 'blue',
            maxItems: 48179,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                87
              ],
              Uint8Array [
                216
              ]
            ],
            typeUrl: 'tan',
            maxItems: 92599,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'green',
          renaissanceTx: 'Rustic Wooden Cheese',
          genesisTime: '2019-03-12T07:14:05.387Z',
          renaissanceTime: '2019-03-12T07:14:05.387Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    stakes: [
      {
        address: '0b6b9c83b90c45e88e2050ca25c02dfb380b1e85',
        from: 'ed523532424cac4da2b0e211fb18eec9590dd0ac',
        to: 'a5c6349b4bf21ebb94199c5e3a82451015128263',
        balance: '27212',
        message: 'leading edge',
        context: {
          genesisTx: 'Hat',
          renaissanceTx: 'hard drive',
          genesisTime: '2019-03-12T07:14:05.387Z',
          renaissanceTime: '2019-03-12T07:14:05.387Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: 'cfcbd2db6b248f2a687f86efe64cc074899de96e',
        from: 'a58bf33605d32ad315160b8f57c3884a7117d9d8',
        to: '9cb67694f4488997e25d09551460466bcaeaee40',
        balance: '40427',
        message: 'Brunei Dollar',
        context: {
          genesisTx: 'bypassing',
          renaissanceTx: 'Technician',
          genesisTime: '2019-03-12T07:14:05.387Z',
          renaissanceTime: '2019-03-12T07:14:05.387Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    context: {
      txHash: 'fc3e7405d29c1a52b744ee7d5dac6cebc66e2635',
      blockHeight: 41034,
      blockTime: '2019-03-12T07:14:05.387Z',
      totalTxs: 41246,
      txStatistics: {
        numAccountMigrateTxs: 58875,
        numCreateAssetTxs: 17761,
        numConsensusUpgradeTxs: 68746,
        numDeclareTxs: 39845,
        numDeclareFileTxs: 29266,
        numExchangeTxs: 60229,
        numStakeTxs: 35051,
        numSysUpgradeTxs: 59066,
        numTransferTxs: 55898,
        numUpdateAssetTxs: 11327,
        numConsumeAssetTxs: 31811,
        numPokeTxs: 9392
      },
      txIndex: 94156,
      lastBlockTime: '2019-03-12T07:14:05.387Z'
    },
    appState: {
      address: 'e958cb9de6c6b8ec765c5e41ada7bcf2856a46c9',
      consensus: {
        maxBytes: 80932,
        maxGas: 82598,
        maxValidators: 95320,
        maxCandidates: 15393,
        pubKeyTypes: [
          'parsing',
          'extend'
        ],
        validators: [
          {
            address: '478630f431a42f0248b8621ae151aa6d0295b130',
            power: 1572
          },
          {
            address: '5cff7125399f0ecb26979ea483610c566ee0c4c5',
            power: 60607
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
              dataHash: 'Tasty',
              actions: [
                undefined,
                undefined
              ]
            },
            {
              type: 13,
              dataHash: 'Tuna',
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
          totalStakes: '64986',
          totalUnstakes: '32312',
          context: {
            genesisTx: 'District',
            renaissanceTx: 'capacity',
            genesisTime: '2019-03-12T07:14:05.387Z',
            renaissanceTime: '2019-03-12T07:14:05.387Z'
          }
        }
      },
      version: 'Engineer',
      dataVersion: 'GB',
      forgeAppHash: Uint8Array [
        185
      ],
      token: {
        name: 'sticky',
        symbol: 'Engineer',
        unit: 'online',
        description: 'plug-and-play',
        icon: Uint8Array [
          54
        ],
        decimal: 58368,
        initialSupply: 37853,
        totalSupply: 47193,
        inflationRate: 48338
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
    code: 38
  }
}
```

### processOne

```js
const result = await client.processOne({
  verifyTx: {
    tx: {
      from: '700ec757baf613474b37964fae7bc3dfd9647030',
      nonce: 61782,
      signature: Uint8Array [
        53
      ],
      chainId: 'Computer',
      signatures: [
        {
          signer: 'Cambridgeshire',
          signature: Uint8Array [
            40
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        {
          signer: 'Polarised',
          signature: Uint8Array [
            154
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
        balance: '50275',
        nonce: 31552,
        numTxs: 97689,
        address: '4ffb2af4203f0a9494bf0a11522aba3a51fc39b9',
        pk: Uint8Array [
          63
        ],
        type: {
          pk: 1,
          hash: 0,
          address: 1,
          role: 8
        },
        moniker: 'Managed',
        context: {
          genesisTx: 'Licensed Plastic Salad',
          renaissanceTx: 'sensor',
          genesisTime: '2019-03-12T07:14:05.388Z',
          renaissanceTime: '2019-03-12T07:14:05.388Z'
        },
        issuer: 'Automotive',
        migratedTo: [
          'Gardens',
          'turn-key'
        ],
        migratedFrom: [
          'Quetzal',
          'Money Market Account'
        ],
        numAssets: 63847,
        stake: {
          totalStakes: '53510',
          totalUnstakes: '13987',
          totalReceivedStakes: '52635',
          recentStakes: {
            items: [
              Uint8Array [
                192
              ],
              Uint8Array [
                204
              ]
            ],
            typeUrl: 'Borders',
            maxItems: 35118,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                46
              ],
              Uint8Array [
                166
              ]
            ],
            typeUrl: 'system-worthy',
            maxItems: 14896,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              202
            ],
            Uint8Array [
              95
            ]
          ],
          typeUrl: 'orchestration',
          maxItems: 4924,
          circular: undefined,
          fifo: undefined
        },
        poke: {
          dailyLimit: '83136',
          leftover: '94873',
          amount: '25401'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        balance: '89906',
        nonce: 93274,
        numTxs: 10721,
        address: '9e8a04a5c1ca3e1c4d25aa70a956a1311eb6c9aa',
        pk: Uint8Array [
          42
        ],
        type: {
          pk: 1,
          hash: 6,
          address: 0,
          role: 1
        },
        moniker: 'XSS',
        context: {
          genesisTx: 'National',
          renaissanceTx: 'Lead',
          genesisTime: '2019-03-12T07:14:05.389Z',
          renaissanceTime: '2019-03-12T07:14:05.389Z'
        },
        issuer: 'revolutionary',
        migratedTo: [
          'generating',
          'implementation'
        ],
        migratedFrom: [
          'Tools',
          'Incredible Fresh Table'
        ],
        numAssets: 20318,
        stake: {
          totalStakes: '93329',
          totalUnstakes: '87351',
          totalReceivedStakes: '83345',
          recentStakes: {
            items: [
              Uint8Array [
                96
              ],
              Uint8Array [
                86
              ]
            ],
            typeUrl: 'Tools',
            maxItems: 5252,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                206
              ],
              Uint8Array [
                239
              ]
            ],
            typeUrl: 'Soft',
            maxItems: 51455,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              196
            ],
            Uint8Array [
              227
            ]
          ],
          typeUrl: 'e-business',
          maxItems: 21003,
          circular: undefined,
          fifo: undefined
        },
        poke: {
          dailyLimit: '41061',
          leftover: '56692',
          amount: '80298'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    assets: [
      {
        address: 'd0ac616baa4431d5e493ac57980c007fff08ab24',
        owner: 'Handmade Steel Bike',
        moniker: 'Fresh',
        readonly: undefined,
        transferrable: undefined,
        ttl: 93002,
        consumedTime: '2019-03-12T07:14:05.389Z',
        issuer: 'killer',
        stake: {
          totalStakes: '72463',
          totalUnstakes: '80435',
          totalReceivedStakes: '14917',
          recentStakes: {
            items: [
              Uint8Array [
                69
              ],
              Uint8Array [
                143
              ]
            ],
            typeUrl: 'bandwidth',
            maxItems: 41720,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                47
              ],
              Uint8Array [
                10
              ]
            ],
            typeUrl: 'Virginia',
            maxItems: 47252,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Branding',
          renaissanceTx: 'SDD',
          genesisTime: '2019-03-12T07:14:05.389Z',
          renaissanceTime: '2019-03-12T07:14:05.389Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: '0955be7d4c4e5712bfcb2887c04dc87030dab1df',
        owner: 'full-range',
        moniker: 'Officer',
        readonly: undefined,
        transferrable: undefined,
        ttl: 27306,
        consumedTime: '2019-03-12T07:14:05.389Z',
        issuer: 'Digitized',
        stake: {
          totalStakes: '75213',
          totalUnstakes: '37143',
          totalReceivedStakes: '62350',
          recentStakes: {
            items: [
              Uint8Array [
                240
              ],
              Uint8Array [
                7
              ]
            ],
            typeUrl: 'Cheese',
            maxItems: 13201,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                180
              ],
              Uint8Array [
                1
              ]
            ],
            typeUrl: 'panel',
            maxItems: 69975,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Health',
          renaissanceTx: 'primary',
          genesisTime: '2019-03-12T07:14:05.389Z',
          renaissanceTime: '2019-03-12T07:14:05.389Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    stakes: [
      {
        address: '7d32c6006a8df149dc0749e2fee4595f3dc27a17',
        from: '40fc4bf996aca77c6b1b7e6944944249f9f447b7',
        to: '6e9e87e2d8bb5b11c0f86d3042cf7d5992240ca7',
        balance: '62242',
        message: 'disintermediate',
        context: {
          genesisTx: 'Shirt',
          renaissanceTx: 'Frozen',
          genesisTime: '2019-03-12T07:14:05.389Z',
          renaissanceTime: '2019-03-12T07:14:05.389Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: 'e5383679b4d62ad88fca3f0aa5bdab60fad9f2cf',
        from: '2fac697dfa83de7aadccda023d6ae70577cfc0d9',
        to: '921e7824ba2977a9d2ae63f74cf12d80d168fd52',
        balance: '7077',
        message: 'Zambian Kwacha',
        context: {
          genesisTx: 'magenta',
          renaissanceTx: 'Handmade',
          genesisTime: '2019-03-12T07:14:05.389Z',
          renaissanceTime: '2019-03-12T07:14:05.389Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    context: {
      txHash: 'cbb85e1868572169a9b18d57d0f459ffd4d2f295',
      blockHeight: 47607,
      blockTime: '2019-03-12T07:14:05.389Z',
      totalTxs: 74258,
      txStatistics: {
        numAccountMigrateTxs: 95406,
        numCreateAssetTxs: 83659,
        numConsensusUpgradeTxs: 72815,
        numDeclareTxs: 93638,
        numDeclareFileTxs: 72365,
        numExchangeTxs: 25104,
        numStakeTxs: 47242,
        numSysUpgradeTxs: 55391,
        numTransferTxs: 71550,
        numUpdateAssetTxs: 35993,
        numConsumeAssetTxs: 33206,
        numPokeTxs: 97785
      },
      txIndex: 45831,
      lastBlockTime: '2019-03-12T07:14:05.389Z'
    },
    appState: {
      address: '30893f8a9c72aa536b9651a1fc0f4f04f61f1c11',
      consensus: {
        maxBytes: 3669,
        maxGas: 64498,
        maxValidators: 19232,
        maxCandidates: 97399,
        pubKeyTypes: [
          'Plains',
          'Frozen'
        ],
        validators: [
          {
            address: '4006b2e77bfd965d69db11dbf693520d78a60357',
            power: 90814
          },
          {
            address: '63d829c4f64d2b5afc515a2ba0e0167711e02d17',
            power: 47854
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
              dataHash: 'global',
              actions: [
                undefined,
                undefined
              ]
            },
            {
              type: 14,
              dataHash: 'indexing',
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
          totalStakes: '47754',
          totalUnstakes: '49150',
          context: {
            genesisTx: 'Soap',
            renaissanceTx: 'transform',
            genesisTime: '2019-03-12T07:14:05.389Z',
            renaissanceTime: '2019-03-12T07:14:05.389Z'
          }
        }
      },
      version: 'SDD',
      dataVersion: 'instruction set',
      forgeAppHash: Uint8Array [
        218
      ],
      token: {
        name: 'JBOD',
        symbol: 'fuchsia',
        unit: 'Security',
        description: 'AGP',
        icon: Uint8Array [
          208
        ],
        decimal: 40623,
        initialSupply: 72646,
        totalSupply: 44229,
        inflationRate: 31365
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
    code: 3
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
    pk: 0,
    hash: 13,
    address: 1,
    role: 8
  },
  passphrase: 'bypass',
  moniker: 'seamless'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 17,
  token: 'deposit',
  wallet: {
    type: {
      pk: 1,
      hash: 14,
      address: 0,
      role: 1
    },
    sk: Uint8Array [
      67
    ],
    pk: Uint8Array [
      225
    ],
    address: '0523ea91036debc161bf203cdfc2915e5141199b'
  }
}
});
```

### removeWallet

```js
const result = await client.removeWallet({
  address: '8dfa009336dc40fcbd6c4e0170108ee6ce1a5edd'
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
  key: 'Tunisia',
  value: 'orchestrate'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 504,
  txs: [
    {
      tx: {
        from: '38ecbac55c586950a8715093a7581be143893a1f',
        nonce: 35241,
        signature: Uint8Array [
          51
        ],
        chainId: 'JSON',
        signatures: [
          {
            signer: 'Triple-buffered',
            signature: Uint8Array [
              254
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'Directives',
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
      height: 37445,
      index: 37894,
      hash: 'c83b4d0fb6418e0d48a62922bab3972db3aaef6f',
      tags: [
        {
          key: Uint8Array [
            191
          ],
          value: Uint8Array [
            88
          ]
        },
        {
          key: Uint8Array [
            168
          ],
          value: Uint8Array [
            211
          ]
        }
      ],
      code: 17,
      time: '2019-03-12T07:14:05.393Z',
      createAsset: {
        asset: 'scalable'
      },
      accountMigrate: {
        address: '5b35af1b22def24456920ccd7d2fb26878d887b3'
      }
    },
    {
      tx: {
        from: '801cf0f6195049e7138c7efa8489c5502a9e1c45',
        nonce: 10219,
        signature: Uint8Array [
          198
        ],
        chainId: 'Supervisor',
        signatures: [
          {
            signer: 'Open-architected',
            signature: Uint8Array [
              244
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'Wooden',
            signature: Uint8Array [
              134
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
      height: 64608,
      index: 12125,
      hash: '76644184245fa63b0c6a5fc0fa83bd9e18b0797f',
      tags: [
        {
          key: Uint8Array [
            85
          ],
          value: Uint8Array [
            121
          ]
        },
        {
          key: Uint8Array [
            72
          ],
          value: Uint8Array [
            100
          ]
        }
      ],
      code: 9,
      time: '2019-03-12T07:14:05.393Z',
      createAsset: {
        asset: 'quantify'
      },
      accountMigrate: {
        address: '88a1dacac00ea6f1511a543dc64f64cb9fd8e581'
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
    from: 'c1a7397e5e7c59fbe8e66015e0010d0e9ced936f',
    nonce: 5992,
    signature: Uint8Array [
      58
    ],
    chainId: 'synergistic',
    signatures: [
      {
        signer: 'Metal',
        signature: Uint8Array [
          104
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'Sleek Metal Shoes',
        signature: Uint8Array [
          24
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
      hash: 6,
      address: 1,
      role: 1
    },
    sk: Uint8Array [
      55
    ],
    pk: Uint8Array [
      26
    ],
    address: '1beebecac322c0b692074c719061c165cbabd82e'
  },
  token: 'Automotive',
  commit: undefined
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 41,
  hash: '12e571c8287d404f4c42a59058459d34b8f05adf'
}
});
```

### signData

```js
const result = await client.signData({
  data: Uint8Array [
    26
  ],
  wallet: {
    type: {
      pk: 0,
      hash: 0,
      address: 0,
      role: 7
    },
    sk: Uint8Array [
      45
    ],
    pk: Uint8Array [
      67
    ],
    address: '2f65dac734054628972fb39ad4c03a489601c874'
  },
  token: 'blue'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 3,
  signature: Uint8Array [
    162
  ]
}
});
```

### storeFile

```js
const result = await client.storeFile({
  chunk: Uint8Array [
    17
  ]
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 36,
  hash: '364c0ff2b8ef55cca5e70e39dadb392a4cd0e82a'
}
});
```

### subscribe

```js
const stream = client.subscribe({
  type: 26,
  filter: 'Berkshire'
});

// output
{
  topic: 'US Dollar'
}
```

### unsubscribe

```js
const result = await client.unsubscribe({
  topic: 'harness'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 4
}
});
```


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |
