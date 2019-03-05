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
    type: 'WalletType',
    value: {
      pk: 0,
      hash: 14,
      address: 1,
      role: 7
    }
  },
  from: '47b986177b7a0c98fec631f28a0d4059499bf569',
  nonce: 5468,
  wallet: {
    type: {
      pk: 0,
      hash: 6,
      address: 0,
      role: 4
    },
    sk: Uint8Array [
      89
    ],
    pk: Uint8Array [
      88
    ],
    address: 'b1b9ae2e2489f76fd9d7d96a6129560555d2dbfc'
  },
  token: 'Buckinghamshire'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 4,
  tx: {
    from: 'a4d3165f9807e7db5d88ad6c5f2f35f418a7224a',
    nonce: 53526,
    signature: Uint8Array [
      128
    ],
    chainId: '1080p',
    signatures: [
      {
        signer: 'Stream',
        signature: Uint8Array [
          108
        ],
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 1,
            address: 1,
            role: 1
          }
        }
      },
      {
        signer: 'connect',
        signature: Uint8Array [
          183
        ],
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 14,
            address: 0,
            role: 1
          }
        }
      }
    ],
    itx: {
      type: 'WalletType',
      value: {
        pk: 0,
        hash: 0,
        address: 1,
        role: 2
      }
    }
  }
}
});
```

### createWallet

```js
const result = await client.createWallet({
  passphrase: 'Agent',
  type: {
    pk: 1,
    hash: 1,
    address: 0,
    role: 2
  },
  moniker: 'New Hampshire'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 42,
  token: 'bypassing',
  wallet: {
    type: {
      pk: 0,
      hash: 0,
      address: 1,
      role: 1
    },
    sk: Uint8Array [
      255
    ],
    pk: Uint8Array [
      123
    ],
    address: '8f65d72675881fb8252a19c16ee91c337bd03a15'
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
  code: 33,
  wallet: {
    type: {
      pk: 0,
      hash: 13,
      address: 1,
      role: 8
    },
    sk: Uint8Array [
      53
    ],
    pk: Uint8Array [
      107
    ],
    address: '2a31463904c84a860791b911db361b4a66e4d0bc'
  }
}
});
```

### getAccountState

```js
const stream = client.getAccountState({
  address: 'e0c116647a8622d9210ae868756e7c6c9a728e9f',
  keys: [
    'Berkshire',
    'Georgia'
  ],
  height: 88615
});

// output
{
  code: 32,
  state: {
    balance: '57150',
    nonce: 59958,
    numTxs: 3842,
    address: 'b859452a1fa6dca8863b633658d3a4146a1a0b37',
    pk: Uint8Array [
      14
    ],
    type: {
      pk: 1,
      hash: 1,
      address: 1,
      role: 2
    },
    moniker: 'array',
    context: {
      genesisTx: 'Cambridgeshire',
      renaissanceTx: 'communities',
      genesisTime: '2019-03-05T00:35:00.853Z',
      renaissanceTime: '2019-03-05T00:35:00.853Z'
    },
    issuer: 'USB',
    migratedTo: [
      'Maryland',
      'deposit'
    ],
    migratedFrom: [
      'Bike',
      'actuating'
    ],
    numAssets: 94878,
    stake: {
      totalStakes: '82326',
      totalUnstakes: '39630',
      totalReceivedStakes: '2987',
      recentStakes: {
        items: [
          Uint8Array [
            45
          ],
          Uint8Array [
            91
          ]
        ],
        typeUrl: 'Intelligent',
        maxItems: 13452,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [
            92
          ],
          Uint8Array [
            220
          ]
        ],
        typeUrl: 'Planner',
        maxItems: 73827,
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
          209
        ]
      ],
      typeUrl: 'override',
      maxItems: 36068,
      circular: undefined,
      fifo: undefined
    },
    data: {
      type: 'WalletType',
      value: {
        pk: 1,
        hash: 13,
        address: 1,
        role: 0
      }
    }
  }
}
```

### getAssetAddress

```js
const result = await client.getAssetAddress({
  senderAddress: 'Central',
  itx: {
    moniker: 'connect',
    data: {
      type: 'WalletType',
      value: {
        pk: 1,
        hash: 6,
        address: 1,
        role: 8
      }
    },
    readonly: undefined,
    transferrable: undefined,
    ttl: 40436,
    parent: 'Berkshire'
  },
  walletType: {
    pk: 0,
    hash: 14,
    address: 1,
    role: 2
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 403,
  assetAddress: 'Jewelery'
}
});
```

### getAssetState

```js
const stream = client.getAssetState({
  address: '8806721f52807399cda8ed91eca14335426c1757',
  keys: [
    'index',
    'Implementation'
  ],
  height: 69510
});

// output
{
  code: 30,
  state: {
    address: '653daa797b8d5472b847acc9145e259604c5b0b8',
    owner: 'salmon',
    moniker: 'Car',
    readonly: undefined,
    transferrable: undefined,
    ttl: 1999,
    consumedTime: '2019-03-05T00:35:00.854Z',
    issuer: 'Realigned',
    stake: {
      totalStakes: '31601',
      totalUnstakes: '1285',
      totalReceivedStakes: '76865',
      recentStakes: {
        items: [
          Uint8Array [
            211
          ],
          Uint8Array [
            54
          ]
        ],
        typeUrl: 'optimal',
        maxItems: 22791,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [
            118
          ],
          Uint8Array [
            105
          ]
        ],
        typeUrl: 'Rwanda',
        maxItems: 61004,
        circular: undefined,
        fifo: undefined
      }
    },
    context: {
      genesisTx: 'expedite',
      renaissanceTx: 'JSON',
      genesisTime: '2019-03-05T00:35:00.855Z',
      renaissanceTime: '2019-03-05T00:35:00.855Z'
    },
    data: {
      type: 'WalletType',
      value: {
        pk: 1,
        hash: 14,
        address: 1,
        role: 6
      }
    }
  }
}
```

### getAssets

```js
const result = await client.getAssets({
  paging: {
    cursor: 'Sleek Granite Computer',
    size: 10819,
    order: [
      {
        field: 'Money Market Account',
        type: 'Belarussian Ruble'
      },
      {
        field: 'transition',
        type: 'Fall'
      }
    ]
  },
  ownerAddress: 'calculate'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 10,
  page: {
    cursor: 'Kentucky',
    next: undefined,
    total: 99998
  },
  assets: [
    {
      address: '651c9b900b5a327d9fccd18915c79fb6870fd366',
      owner: 'Intelligent',
      genesisTime: 'CFP Franc',
      renaissanceTime: 'Avon',
      moniker: 'Awesome',
      readonly: undefined
    },
    {
      address: 'd4fac8c8b41f0fb6ff9ca049e4088129a89028c5',
      owner: 'Afghanistan',
      genesisTime: 'Movies',
      renaissanceTime: 'Liaison',
      moniker: 'Money Market Account',
      readonly: undefined
    }
  ]
}
});
```

### getBlock

```js
const stream = client.getBlock({
  height: 21654
});

// output
{
  code: 500,
  block: {
    height: 3851,
    numTxs: 32646,
    time: '2019-03-05T00:35:00.856Z',
    appHash: '6112e63d1caf17501af7a1d637bd62f8a130c92c',
    proposer: '660255e42750af91f0cf2a6e7461808879e6e875',
    txs: [
      {
        tx: {
          from: 'f74eca93a897e6c82b0232854f40ab6f86910998',
          nonce: 30445,
          signature: Uint8Array [
            134
          ],
          chainId: 'payment',
          signatures: [
            {
              signer: 'payment',
              signature: Uint8Array [
                169
              ],
              data: {
                type: 'WalletType',
                value: {
                  pk: 1,
                  hash: 13,
                  address: 0,
                  role: 6
                }
              }
            },
            {
              signer: 'extensible',
              signature: Uint8Array [
                194
              ],
              data: {
                type: 'WalletType',
                value: {
                  pk: 0,
                  hash: 14,
                  address: 0,
                  role: 1
                }
              }
            }
          ],
          itx: {
            type: 'WalletType',
            value: {
              pk: 1,
              hash: 6,
              address: 1,
              role: 7
            }
          }
        },
        height: 13709,
        index: 64764,
        hash: '143a7e9e17312a54c621c1ab79fcdffe23c1a6c0',
        tags: [
          {
            key: Uint8Array [
              122
            ],
            value: Uint8Array [
              57
            ]
          },
          {
            key: Uint8Array [
              11
            ],
            value: Uint8Array [
              0
            ]
          }
        ],
        code: 38
      },
      {
        tx: {
          from: 'b4db81f18455dddff569019439fc7c948c819dff',
          nonce: 77575,
          signature: Uint8Array [
            165
          ],
          chainId: 'hard drive',
          signatures: [
            {
              signer: 'Alabama',
              signature: Uint8Array [
                80
              ],
              data: {
                type: 'WalletType',
                value: {
                  pk: 0,
                  hash: 0,
                  address: 0,
                  role: 6
                }
              }
            },
            {
              signer: 'product',
              signature: Uint8Array [
                231
              ],
              data: {
                type: 'WalletType',
                value: {
                  pk: 0,
                  hash: 7,
                  address: 1,
                  role: 0
                }
              }
            }
          ],
          itx: {
            type: 'WalletType',
            value: {
              pk: 1,
              hash: 0,
              address: 1,
              role: 1
            }
          }
        },
        height: 98268,
        index: 87845,
        hash: '113989e63aaca639cb5c7fcc415b042148d966dc',
        tags: [
          {
            key: Uint8Array [
              156
            ],
            value: Uint8Array [
              108
            ]
          },
          {
            key: Uint8Array [
              73
            ],
            value: Uint8Array [
              131
            ]
          }
        ],
        code: 4
      }
    ],
    totalTxs: 27349
  }
}
```

### getBlocks

```js
const result = await client.getBlocks({
  paging: {
    cursor: 'ADP',
    size: 68556,
    order: [
      {
        field: 'foreground',
        type: 'service-desk'
      },
      {
        field: 'Practical',
        type: 'Won'
      }
    ]
  },
  minHeight: 35892,
  maxHeight: 13062,
  emptyExcluded: undefined
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 9,
  page: {
    cursor: 'Auto Loan Account',
    next: undefined,
    total: 15673
  },
  blocks: [
    {
      height: 53352,
      numTxs: 67312,
      time: '2019-03-05T00:35:00.858Z',
      appHash: '6362c5f3db2265a959589c6295c84b087196da82',
      proposer: '46f47c28e233c32c41555b426907436b94253499',
      txs: [
        {
          tx: {
            from: 'f8b16a27375d55d49de09c79c8d921a003f97ca0',
            nonce: 84108,
            signature: Uint8Array [
              75
            ],
            chainId: 'solutions',
            signatures: [
              {
                signer: 'Handmade Fresh Chicken',
                signature: Uint8Array [
                  186
                ],
                data: {
                  type: 'WalletType',
                  value: [Object]
                }
              },
              {
                signer: 'Refined Frozen Soap',
                signature: Uint8Array [
                  226
                ],
                data: {
                  type: 'WalletType',
                  value: [Object]
                }
              }
            ],
            itx: {
              type: 'WalletType',
              value: {
                pk: 1,
                hash: 14,
                address: 0,
                role: 6
              }
            }
          },
          height: 72456,
          index: 76210,
          hash: '1240979962b3dbaeca8aa058bb8beea1f6b79c5c',
          tags: [
            {
              key: Uint8Array [
                112
              ],
              value: Uint8Array [
                222
              ]
            },
            {
              key: Uint8Array [
                10
              ],
              value: Uint8Array [
                93
              ]
            }
          ],
          code: 10
        },
        {
          tx: {
            from: 'ee4b588de7643db3f3c0514b5478c607d53a5be9',
            nonce: 75490,
            signature: Uint8Array [
              215
            ],
            chainId: 'multi-tasking',
            signatures: [
              {
                signer: 'teal',
                signature: Uint8Array [
                  124
                ],
                data: {
                  type: 'WalletType',
                  value: [Object]
                }
              },
              {
                signer: 'digital',
                signature: Uint8Array [
                  94
                ],
                data: {
                  type: 'WalletType',
                  value: [Object]
                }
              }
            ],
            itx: {
              type: 'WalletType',
              value: {
                pk: 1,
                hash: 1,
                address: 0,
                role: 8
              }
            }
          },
          height: 54904,
          index: 47211,
          hash: '6f687c2df452222913340e51a4a4f3e549746a75',
          tags: [
            {
              key: Uint8Array [
                14
              ],
              value: Uint8Array [
                41
              ]
            },
            {
              key: Uint8Array [
                137
              ],
              value: Uint8Array [
                231
              ]
            }
          ],
          code: 3
        }
      ],
      totalTxs: 20009
    },
    {
      height: 74348,
      numTxs: 51509,
      time: '2019-03-05T00:35:00.859Z',
      appHash: '6a6aeab86a5318bd92cb9866b66deac823c7cad4',
      proposer: '335cadeffa9b289535ce2b74cf96ff25ff9d9b10',
      txs: [
        {
          tx: {
            from: 'ed9a7820b1060d9fd2e348f177fc1e813405c798',
            nonce: 87917,
            signature: Uint8Array [
              87
            ],
            chainId: 'Small',
            signatures: [
              {
                signer: 'Realigned',
                signature: Uint8Array [
                  216
                ],
                data: {
                  type: 'WalletType',
                  value: [Object]
                }
              },
              {
                signer: 'bandwidth',
                signature: Uint8Array [
                  189
                ],
                data: {
                  type: 'WalletType',
                  value: [Object]
                }
              }
            ],
            itx: {
              type: 'WalletType',
              value: {
                pk: 0,
                hash: 0,
                address: 1,
                role: 8
              }
            }
          },
          height: 9403,
          index: 98191,
          hash: 'b2bb702262f19ab9ef095819235b82e4f11987ef',
          tags: [
            {
              key: Uint8Array [
                218
              ],
              value: Uint8Array [
                115
              ]
            },
            {
              key: Uint8Array [
                210
              ],
              value: Uint8Array [
                125
              ]
            }
          ],
          code: 22
        },
        {
          tx: {
            from: '711cd4da37dc5c872655c677931cf7792f42b461',
            nonce: 73354,
            signature: Uint8Array [
              156
            ],
            chainId: 'Creek',
            signatures: [
              {
                signer: 'Fort',
                signature: Uint8Array [
                  36
                ],
                data: {
                  type: 'WalletType',
                  value: [Object]
                }
              },
              {
                signer: 'Senior',
                signature: Uint8Array [
                  37
                ],
                data: {
                  type: 'WalletType',
                  value: [Object]
                }
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
          height: 67313,
          index: 53169,
          hash: '18c629053a2d49d387f036a00958d77a339988ed',
          tags: [
            {
              key: Uint8Array [
                51
              ],
              value: Uint8Array [
                29
              ]
            },
            {
              key: Uint8Array [
                163
              ],
              value: Uint8Array [
                8
              ]
            }
          ],
          code: 20
        }
      ],
      totalTxs: 14511
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
  code: 9,
  info: {
    id: 'Intelligent',
    network: 'magenta',
    moniker: 'Alaska',
    consensusVersion: 'card',
    synced: undefined,
    appHash: '1028bfa0b2e25830959b9668f5a3a6a87575f691',
    blockHash: Uint8Array [
      215
    ],
    blockHeight: 70317,
    blockTime: '2019-03-05T00:35:00.860Z',
    address: '48cf136f897e2c37edfd4d7d64ca3f8e2e0da0e5',
    votingPower: 88964,
    totalTxs: 66691,
    version: 'Credit Card Account',
    dataVersion: 'initiatives',
    forgeAppsVersion: {
      'function randomWord (type) {\n\n    var wordMethods = [\n    \'commerce.department\',\n    \'commerce.productName\',\n    \'commerce.productAdjective\',\n    \'commerce.productMaterial\',\n    \'commerce.product\',\n    \'commerce.color\',\n\n    \'company.catchPhraseAdjective\',\n    \'company.catchPhraseDescriptor\',\n    \'company.catchPhraseNoun\',\n    \'company.bsAdjective\',\n    \'company.bsBuzz\',\n    \'company.bsNoun\',\n    \'address.streetSuffix\',\n    \'address.county\',\n    \'address.country\',\n    \'address.state\',\n\n    \'finance.accountName\',\n    \'finance.transactionType\',\n    \'finance.currencyName\',\n\n    \'hacker.noun\',\n    \'hacker.verb\',\n    \'hacker.adjective\',\n    \'hacker.ingverb\',\n    \'hacker.abbreviation\',\n\n    \'name.jobDescriptor\',\n    \'name.jobArea\',\n    \'name.jobType\'];\n\n    // randomly pick from the many faker methods that can generate words\n    var randomWordMethod = faker.random.arrayElement(wordMethods);\n    return faker.fake(\'{{\' + randomWordMethod + \'}}\');\n\n  }': 'reintermediate'
    },
    supportedTxs: [
      'Music',
      'optical'
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
  config: 'Cheese'
}
});
```

### getForgeState

```js
const result = await client.getForgeState({
  keys: [
    'Gibraltar',
    'Rial Omani'
  ],
  height: 95589
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 5,
  state: {
    address: '05b0661fc67c82e5b8b476267efa06eece8ea8ef',
    consensus: {
      maxBytes: 29303,
      maxGas: 8576,
      maxValidators: 18151,
      maxCandidates: 18086,
      pubKeyTypes: [
        'Data',
        'Valley'
      ],
      validators: [
        {
          address: '8963df2efb4e131d9d76fefe7182c7b910392484',
          power: 56805
        },
        {
          address: '992325c94d222865a4904fc05f29a75b82a891db',
          power: 85905
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
            dataHash: 'facilitate',
            actions: [
              undefined,
              undefined
            ]
          },
          {
            type: 12,
            dataHash: 'Cambridgeshire',
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
        totalStakes: '44252',
        totalUnstakes: '74047',
        context: {
          genesisTx: 'copying',
          renaissanceTx: 'lavender',
          genesisTime: '2019-03-05T00:35:00.862Z',
          renaissanceTime: '2019-03-05T00:35:00.862Z'
        }
      }
    },
    version: 'overriding',
    dataVersion: 'bandwidth',
    forgeAppHash: Uint8Array [
      88
    ],
    data: {
      type: 'WalletType',
      value: {
        pk: 0,
        hash: 1,
        address: 0,
        role: 1
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
    startDate: 'Tasty',
    endDate: 'Shoes'
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 35,
  forgeStatistics: {
    numBlocks: [
      14398,
      9608
    ],
    numTxs: [
      60361,
      88979
    ],
    numStakes: [
      '41863',
      '1647'
    ],
    numValidators: [
      1820,
      45870
    ],
    numAccountMigrateTxs: [
      32524,
      78723
    ],
    numCreateAssetTxs: [
      34728,
      9338
    ],
    numConsensusUpgradeTxs: [
      16952,
      74285
    ],
    numDeclareTxs: [
      65467,
      99233
    ],
    numDeclareFileTxs: [
      93116,
      21086
    ],
    numExchangeTxs: [
      61095,
      25457
    ],
    numStakeTxs: [
      33228,
      97063
    ],
    numSysUpgradeTxs: [
      66827,
      36471
    ],
    numTransferTxs: [
      66327,
      55267
    ],
    numUpdateAssetTxs: [
      81732,
      19860
    ],
    numConsumeAssetTxs: [
      76911,
      83452
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
  code: 36,
  netInfo: {
    listening: undefined,
    listeners: [
      'Optimized',
      'withdrawal'
    ],
    nPeers: 97825,
    peers: [
      {
        id: 'Jewelery',
        network: 'backing up',
        consensusVersion: 'frictionless',
        moniker: 'executive',
        ip: 'User-centric',
        geoInfo: {
          city: 'invoice',
          country: 'paradigms',
          latitude: 97230.03,
          longitude: 928.24
        }
      },
      {
        id: 'neural',
        network: 'Steel',
        consensusVersion: 'SDD',
        moniker: 'orange',
        ip: 'markets',
        geoInfo: {
          city: 'Bangladesh',
          country: 'Electronics',
          latitude: 75079.86,
          longitude: 14258.17
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
  code: 4,
  info: {
    id: 'Cotton',
    network: 'Enhanced',
    moniker: 'index',
    consensusVersion: 'De-engineered',
    synced: undefined,
    appHash: '9ed7c8dc88c035551a937093fd0a65b7d4a7b3d7',
    blockHash: Uint8Array [
      92
    ],
    blockHeight: 53282,
    blockTime: '2019-03-05T00:35:00.863Z',
    address: '60fd80783cf1524ceefd42ba8d774199a614f6e0',
    votingPower: 77428,
    totalTxs: 33163,
    version: 'attitude-oriented',
    dataVersion: 'initiatives',
    forgeAppsVersion: {
      'function randomWord (type) {\n\n    var wordMethods = [\n    \'commerce.department\',\n    \'commerce.productName\',\n    \'commerce.productAdjective\',\n    \'commerce.productMaterial\',\n    \'commerce.product\',\n    \'commerce.color\',\n\n    \'company.catchPhraseAdjective\',\n    \'company.catchPhraseDescriptor\',\n    \'company.catchPhraseNoun\',\n    \'company.bsAdjective\',\n    \'company.bsBuzz\',\n    \'company.bsNoun\',\n    \'address.streetSuffix\',\n    \'address.county\',\n    \'address.country\',\n    \'address.state\',\n\n    \'finance.accountName\',\n    \'finance.transactionType\',\n    \'finance.currencyName\',\n\n    \'hacker.noun\',\n    \'hacker.verb\',\n    \'hacker.adjective\',\n    \'hacker.ingverb\',\n    \'hacker.abbreviation\',\n\n    \'name.jobDescriptor\',\n    \'name.jobArea\',\n    \'name.jobType\'];\n\n    // randomly pick from the many faker methods that can generate words\n    var randomWordMethod = faker.random.arrayElement(wordMethods);\n    return faker.fake(\'{{\' + randomWordMethod + \'}}\');\n\n  }': 'Sleek'
    },
    supportedTxs: [
      'Optimized',
      'Small Soft Sausages'
    ],
    ip: 'Tasty',
    geoInfo: {
      city: 'Sausages',
      country: 'Solutions',
      latitude: 60952.1,
      longitude: 45885.14
    }
  }
}
});
```

### getStakeState

```js
const stream = client.getStakeState({
  address: '19fd915ee32a455a83b5882214393dba90d7979c',
  keys: [
    'Assimilated',
    'Corporate'
  ],
  height: 73285
});

// output
{
  code: 4,
  state: {
    address: '7544f0757d4bd319bdd446e214f5f8c6185b772b',
    from: 'b81b2c67251cab05774f99a0e9db8673a287c187',
    to: 'daa48d9685e34a0b9a1e612af3e761c8852e1e89',
    balance: '22431',
    message: 'Forward',
    context: {
      genesisTx: 'technologies',
      renaissanceTx: 'Wyoming',
      genesisTime: '2019-03-05T00:35:00.864Z',
      renaissanceTime: '2019-03-05T00:35:00.864Z'
    },
    data: {
      type: 'WalletType',
      value: {
        pk: 0,
        hash: 1,
        address: 0,
        role: 0
      }
    }
  }
}
```

### getStakes

```js
const result = await client.getStakes({
  paging: {
    cursor: 'haptic',
    size: 73645,
    order: [
      {
        field: 'Virgin Islands, British',
        type: 'Savings Account'
      },
      {
        field: 'strategic',
        type: 'microchip'
      }
    ]
  },
  addressFilter: {
    sender: 'Kyrgyz Republic',
    receiver: 'Berkshire',
    direction: 1
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 39,
  page: {
    cursor: 'Mexico',
    next: undefined,
    total: 73557
  },
  stakes: [
    {
      address: 'c68d5eb283302347a074722dc01075eb4fae007d',
      balance: '80630',
      sender: 'sensor',
      receiver: 'whiteboard',
      genesisTime: 'Virginia',
      renaissanceTime: 'Ball',
      message: 'transition',
      type: 92690
    },
    {
      address: '70e76d6568605f12fdae1f80dc52b419e38a83a1',
      balance: '1075',
      sender: 'black',
      receiver: 'Shoes',
      genesisTime: 'e-business',
      renaissanceTime: 'Awesome Frozen Bike',
      message: 'Incredible',
      type: 87832
    }
  ]
}
});
```

### getTopAccounts

```js
const result = await client.getTopAccounts({
  paging: {
    cursor: 'Solutions',
    size: 5776,
    order: [
      {
        field: 'stable',
        type: 'sexy'
      },
      {
        field: 'Generic',
        type: 'Architect'
      }
    ]
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 41,
  page: {
    cursor: 'Automotive',
    next: undefined,
    total: 79808
  },
  accounts: [
    {
      address: 'c70f37280028c9eeb4852cc1b4c8a64a585ee825',
      balance: '25128',
      numAssets: 16082,
      numTxs: 2525,
      nonce: 79590,
      genesisTime: 'National',
      renaissanceTime: 'Industrial',
      moniker: 'Supervisor',
      migratedFrom: 'Chilean Peso Unidades de fomento',
      migratedTo: 'Kansas',
      totalReceivedStakes: '35704',
      totalStakes: '90323',
      totalUnstakes: '40456',
      recentNumTxs: [
        88643,
        57601
      ]
    },
    {
      address: 'e8628fe3012d5ff219b205bb28153602bff1e3bb',
      balance: '42986',
      numAssets: 36502,
      numTxs: 18935,
      nonce: 88843,
      genesisTime: 'system',
      renaissanceTime: 'Steel',
      moniker: 'protocol',
      migratedFrom: 'connecting',
      migratedTo: 'Paraguay',
      totalReceivedStakes: '45245',
      totalStakes: '88215',
      totalUnstakes: '39168',
      recentNumTxs: [
        64915,
        81719
      ]
    }
  ]
}
});
```

### getTx

```js
const stream = client.getTx({
  hash: '66176db0f635db422737d23d1f2e8ceb5e7e676c'
});

// output
{
  code: 34,
  info: {
    tx: {
      from: '4a17be3a7c20a7d2dbd1e35b2a09ae2e0c1178e2',
      nonce: 46030,
      signature: Uint8Array [
        3
      ],
      chainId: 'EXE',
      signatures: [
        {
          signer: 'National',
          signature: Uint8Array [
            211
          ],
          data: {
            type: 'WalletType',
            value: {
              pk: 0,
              hash: 0,
              address: 1,
              role: 2
            }
          }
        },
        {
          signer: 'calculate',
          signature: Uint8Array [
            185
          ],
          data: {
            type: 'WalletType',
            value: {
              pk: 0,
              hash: 7,
              address: 0,
              role: 7
            }
          }
        }
      ],
      itx: {
        type: 'WalletType',
        value: {
          pk: 1,
          hash: 14,
          address: 1,
          role: 8
        }
      }
    },
    height: 95866,
    index: 96603,
    hash: '8efa6ff6400298b7a6c7bda8519a114ffb16d625',
    tags: [
      {
        key: Uint8Array [
          204
        ],
        value: Uint8Array [
          148
        ]
      },
      {
        key: Uint8Array [
          58
        ],
        value: Uint8Array [
          161
        ]
      }
    ],
    code: 41
  }
}
```

### getUnconfirmedTxs

```js
const result = await client.getUnconfirmedTxs({
  limit: 94107
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 37,
  unconfirmedTxs: {
    nTxs: 50244,
    txs: [
      {
        from: '94801a58691e32c46d16d0f3da64ad5f06d6cae3',
        nonce: 96702,
        signature: Uint8Array [
          74
        ],
        chainId: 'Denar',
        signatures: [
          {
            signer: 'enable',
            signature: Uint8Array [
              25
            ],
            data: {
              type: 'WalletType',
              value: {
                pk: 1,
                hash: 7,
                address: 1,
                role: 0
              }
            }
          },
          {
            signer: 'Kansas',
            signature: Uint8Array [
              155
            ],
            data: {
              type: 'WalletType',
              value: {
                pk: 0,
                hash: 13,
                address: 1,
                role: 6
              }
            }
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 13,
            address: 0,
            role: 6
          }
        }
      },
      {
        from: '488001f5ac513fccd5c116072302459b0285b8f4',
        nonce: 26918,
        signature: Uint8Array [
          101
        ],
        chainId: 'Malagasy Ariary',
        signatures: [
          {
            signer: 'platforms',
            signature: Uint8Array [
              77
            ],
            data: {
              type: 'WalletType',
              value: {
                pk: 0,
                hash: 14,
                address: 1,
                role: 6
              }
            }
          },
          {
            signer: 'District',
            signature: Uint8Array [
              112
            ],
            data: {
              type: 'WalletType',
              value: {
                pk: 1,
                hash: 13,
                address: 1,
                role: 3
              }
            }
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 6,
            address: 1,
            role: 2
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
  code: 16,
  validatorsInfo: {
    blockHeight: 78557,
    validators: [
      {
        address: '5fec7b536b1b0cea13d62d60cf2f1e31573f7bb2',
        pubKey: {
          type: 'Fresh',
          data: Uint8Array [
            114
          ]
        },
        votingPower: 48270,
        proposerPriority: 'value-added',
        name: 'viral'
      },
      {
        address: '90115c2cc7b9b6d959a4b28c23b567764f027dc3',
        pubKey: {
          type: 'Alabama',
          data: Uint8Array [
            233
          ]
        },
        votingPower: 19648,
        proposerPriority: 'card',
        name: 'Clothing'
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
    cursor: 'Web',
    size: 35396,
    order: [
      {
        field: 'Brunei Darussalam',
        type: 'deposit'
      },
      {
        field: 'Investor',
        type: 'Down-sized'
      }
    ]
  },
  address: '04a5d287944c3f62c3c9591c363d0f0fd046762f'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 40,
  page: {
    cursor: 'harness',
    next: undefined,
    total: 29541
  },
  transactions: [
    {
      hash: 'd046fdad03ee82cd8b26e41f5ea4af45a049eb83',
      sender: 'Refined',
      receiver: 'Buckinghamshire',
      time: 'Executive',
      type: 'Object-based',
      tx: {
        from: '4bc58e6207da273c4be7a42d9274b1b743ce4538',
        nonce: 71355,
        signature: Uint8Array [
          54
        ],
        chainId: 'architect',
        signatures: [
          {
            signer: 'plum',
            signature: Uint8Array [
              96
            ],
            data: {
              type: 'WalletType',
              value: {
                pk: 0,
                hash: 6,
                address: 0,
                role: 5
              }
            }
          },
          {
            signer: 'Technician',
            signature: Uint8Array [
              207
            ],
            data: {
              type: 'WalletType',
              value: {
                pk: 0,
                hash: 13,
                address: 1,
                role: 1
              }
            }
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 0,
            address: 1,
            role: 2
          }
        }
      }
    },
    {
      hash: '27aa3efe1ffe91e0fed913477987accb2ac65c9e',
      sender: 'infrastructure',
      receiver: 'object-oriented',
      time: 'encoding',
      type: 'lime',
      tx: {
        from: 'c1b5c630d254399c3df6bb92482bbf1e1eefab5c',
        nonce: 10639,
        signature: Uint8Array [
          34
        ],
        chainId: 'SQL',
        signatures: [
          {
            signer: 'Landing',
            signature: Uint8Array [
              175
            ],
            data: {
              type: 'WalletType',
              value: {
                pk: 1,
                hash: 14,
                address: 0,
                role: 8
              }
            }
          },
          {
            signer: 'lime',
            signature: Uint8Array [
              107
            ],
            data: {
              type: 'WalletType',
              value: {
                pk: 0,
                hash: 1,
                address: 0,
                role: 2
              }
            }
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 14,
            address: 0,
            role: 2
          }
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
    cursor: 'redefine',
    size: 60675,
    order: [
      {
        field: 'Bhutan',
        type: 'interface'
      },
      {
        field: 'SCSI',
        type: 'Global'
      }
    ]
  },
  timeFilter: {
    startDateTime: 'payment',
    endDateTime: 'Enhanced'
  },
  addressFilter: {
    sender: 'emulation',
    receiver: 'Synergized',
    direction: 1
  },
  typeFilter: {
    types: [
      'online',
      'Generic Fresh Shoes'
    ]
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 3,
  page: {
    cursor: 'harness',
    next: undefined,
    total: 30413
  },
  transactions: [
    {
      hash: '59a7e2402bb3a04e16a21c6ed3f663c2f0c6ffb9',
      sender: 'Associate',
      receiver: 'calculating',
      time: 'West Virginia',
      type: 'success',
      tx: {
        from: 'f25f520f84da4961ea0faa696a67168a0fdec182',
        nonce: 79036,
        signature: Uint8Array [
          103
        ],
        chainId: 'Buckinghamshire',
        signatures: [
          {
            signer: 'Row',
            signature: Uint8Array [
              232
            ],
            data: {
              type: 'WalletType',
              value: {
                pk: 0,
                hash: 14,
                address: 1,
                role: 3
              }
            }
          },
          {
            signer: 'sensor',
            signature: Uint8Array [
              218
            ],
            data: {
              type: 'WalletType',
              value: {
                pk: 0,
                hash: 14,
                address: 0,
                role: 6
              }
            }
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 7,
            address: 0,
            role: 3
          }
        }
      }
    },
    {
      hash: '50e2a5f9326bc00b41de8d862495106c947efd9b',
      sender: 'panel',
      receiver: 'incentivize',
      time: 'Solomon Islands Dollar',
      type: 'Money Market Account',
      tx: {
        from: '8fc12d9c1bca861b248b053145ab93c3110ce701',
        nonce: 13875,
        signature: Uint8Array [
          101
        ],
        chainId: 'primary',
        signatures: [
          {
            signer: 'Graphic Interface',
            signature: Uint8Array [
              32
            ],
            data: {
              type: 'WalletType',
              value: {
                pk: 1,
                hash: 13,
                address: 1,
                role: 1
              }
            }
          },
          {
            signer: 'Quality',
            signature: Uint8Array [
              235
            ],
            data: {
              type: 'WalletType',
              value: {
                pk: 1,
                hash: 0,
                address: 0,
                role: 0
              }
            }
          }
        ],
        itx: {
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
  ]
}
});
```

### listWallet

```js
const stream = client.listWallet({});

// output
{
  code: 41,
  address: '1e1ccceb6478167d5859e6ddc1096eb3e0bac67c'
}
```

### loadFile

```js
const stream = client.loadFile({
  hash: 'b0288f060cffe2465a161b5a88c5833a5d3970f9'
});

// output
{
  code: 4,
  chunk: Uint8Array [
    49
  ]
}
```

### loadWallet

```js
const result = await client.loadWallet({
  address: 'a248299e39f714c6043646d648e6a9046f4d47f0',
  passphrase: 'indexing'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 34,
  token: 'pink',
  wallet: {
    type: {
      pk: 1,
      hash: 6,
      address: 0,
      role: 7
    },
    sk: Uint8Array [
      57
    ],
    pk: Uint8Array [
      234
    ],
    address: '2da975f2d527373b7831a22c7b520d48d401ad24'
  }
}
});
```

### multisig

```js
const result = await client.multisig({
  tx: {
    from: 'd823eea96be02940ec86c500c524dff5851c4eaf',
    nonce: 36435,
    signature: Uint8Array [
      178
    ],
    chainId: 'Ergonomic',
    signatures: [
      {
        signer: 'TCP',
        signature: Uint8Array [
          237
        ],
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 1,
            address: 0,
            role: 4
          }
        }
      },
      {
        signer: 'Bahraini Dinar',
        signature: Uint8Array [
          232
        ],
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 14,
            address: 0,
            role: 6
          }
        }
      }
    ],
    itx: {
      type: 'WalletType',
      value: {
        pk: 1,
        hash: 1,
        address: 0,
        role: 7
      }
    }
  },
  data: {
    type: 'WalletType',
    value: {
      pk: 0,
      hash: 14,
      address: 0,
      role: 3
    }
  },
  wallet: {
    type: {
      pk: 0,
      hash: 14,
      address: 0,
      role: 8
    },
    sk: Uint8Array [
      35
    ],
    pk: Uint8Array [
      17
    ],
    address: '058ed60360766755dfd087bffc4065834c923386'
  },
  token: 'invoice'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 31,
  tx: {
    from: '91cf9e04f585c8f070739220b7cbe03e80e67d22',
    nonce: 88738,
    signature: Uint8Array [
      247
    ],
    chainId: 'one-to-one',
    signatures: [
      {
        signer: 'cultivate',
        signature: Uint8Array [
          114
        ],
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 7,
            address: 0,
            role: 5
          }
        }
      },
      {
        signer: 'Checking Account',
        signature: Uint8Array [
          213
        ],
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 13,
            address: 0,
            role: 4
          }
        }
      }
    ],
    itx: {
      type: 'WalletType',
      value: {
        pk: 0,
        hash: 13,
        address: 1,
        role: 6
      }
    }
  }
}
});
```

### pinFile

```js
const result = await client.pinFile({
  hash: '8f4f60b0106ae29ec2bb6406ad1d735ee3b34aad'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 38
}
});
```

### process

```js
const stream = client.process({
  verifyTx: {
    tx: {
      from: 'b6b30e3e7664659aae31dbf5f085c5bfa1ff2851',
      nonce: 98879,
      signature: Uint8Array [
        6
      ],
      chainId: 'orange',
      signatures: [
        {
          signer: 'Functionality',
          signature: Uint8Array [
            76
          ],
          data: {
            type: 'WalletType',
            value: {
              pk: 0,
              hash: 6,
              address: 1,
              role: 1
            }
          }
        },
        {
          signer: 'static',
          signature: Uint8Array [
            86
          ],
          data: {
            type: 'WalletType',
            value: {
              pk: 0,
              hash: 7,
              address: 1,
              role: 2
            }
          }
        }
      ],
      itx: {
        type: 'WalletType',
        value: {
          pk: 0,
          hash: 0,
          address: 1,
          role: 1
        }
      }
    },
    states: [
      {
        balance: '48330',
        nonce: 6397,
        numTxs: 24916,
        address: '8a36f35ce0dc2723e01428cae5ec3fc243a7bc88',
        pk: Uint8Array [
          43
        ],
        type: {
          pk: 0,
          hash: 7,
          address: 0,
          role: 1
        },
        moniker: 'orange',
        context: {
          genesisTx: 'convergence',
          renaissanceTx: 'Data',
          genesisTime: '2019-03-05T00:35:00.872Z',
          renaissanceTime: '2019-03-05T00:35:00.872Z'
        },
        issuer: 'compress',
        migratedTo: [
          'Awesome',
          'mobile'
        ],
        migratedFrom: [
          'hard drive',
          'infrastructures'
        ],
        numAssets: 23040,
        stake: {
          totalStakes: '44801',
          totalUnstakes: '87516',
          totalReceivedStakes: '83728',
          recentStakes: {
            items: [
              Uint8Array [
                179
              ],
              Uint8Array [
                140
              ]
            ],
            typeUrl: 'Tasty Metal Shoes',
            maxItems: 61295,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                186
              ],
              Uint8Array [
                72
              ]
            ],
            typeUrl: 'European Monetary Unit (E.M.U.-6)',
            maxItems: 84293,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              95
            ],
            Uint8Array [
              130
            ]
          ],
          typeUrl: 'input',
          maxItems: 39178,
          circular: undefined,
          fifo: undefined
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 14,
            address: 0,
            role: 0
          }
        }
      },
      {
        balance: '91533',
        nonce: 19187,
        numTxs: 52134,
        address: '79d517fb1b160f287915c6b8df4466b082f876ef',
        pk: Uint8Array [
          194
        ],
        type: {
          pk: 1,
          hash: 7,
          address: 1,
          role: 6
        },
        moniker: 'seamless',
        context: {
          genesisTx: 'microchip',
          renaissanceTx: 'Rustic',
          genesisTime: '2019-03-05T00:35:00.872Z',
          renaissanceTime: '2019-03-05T00:35:00.872Z'
        },
        issuer: 'Costa Rican Colon',
        migratedTo: [
          'virtual',
          'SAS'
        ],
        migratedFrom: [
          'Communications',
          'global'
        ],
        numAssets: 49139,
        stake: {
          totalStakes: '58571',
          totalUnstakes: '59009',
          totalReceivedStakes: '18254',
          recentStakes: {
            items: [
              Uint8Array [
                131
              ],
              Uint8Array [
                89
              ]
            ],
            typeUrl: 'Soft',
            maxItems: 26273,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                60
              ],
              Uint8Array [
                198
              ]
            ],
            typeUrl: 'Checking Account',
            maxItems: 80376,
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
              58
            ]
          ],
          typeUrl: 'azure',
          maxItems: 2479,
          circular: undefined,
          fifo: undefined
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 13,
            address: 1,
            role: 8
          }
        }
      }
    ],
    assets: [
      {
        address: 'a3648dec53737f72685aaf4b9cf765c8d9359eb4',
        owner: 'TCP',
        moniker: 'Trinidad and Tobago Dollar',
        readonly: undefined,
        transferrable: undefined,
        ttl: 57561,
        consumedTime: '2019-03-05T00:35:00.873Z',
        issuer: 'circuit',
        stake: {
          totalStakes: '65230',
          totalUnstakes: '28410',
          totalReceivedStakes: '8434',
          recentStakes: {
            items: [
              Uint8Array [
                155
              ],
              Uint8Array [
                20
              ]
            ],
            typeUrl: 'Electronics',
            maxItems: 47176,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                232
              ],
              Uint8Array [
                36
              ]
            ],
            typeUrl: 'sensor',
            maxItems: 87289,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Trafficway',
          renaissanceTx: 'Strategist',
          genesisTime: '2019-03-05T00:35:00.873Z',
          renaissanceTime: '2019-03-05T00:35:00.873Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 6,
            address: 0,
            role: 7
          }
        }
      },
      {
        address: '8e2ae87b65c250fdb6d8a1166180a65a3d0ba9d2',
        owner: 'Consultant',
        moniker: 'calculating',
        readonly: undefined,
        transferrable: undefined,
        ttl: 33783,
        consumedTime: '2019-03-05T00:35:00.873Z',
        issuer: 'Internal',
        stake: {
          totalStakes: '33976',
          totalUnstakes: '70626',
          totalReceivedStakes: '99286',
          recentStakes: {
            items: [
              Uint8Array [
                114
              ],
              Uint8Array [
                205
              ]
            ],
            typeUrl: 'gold',
            maxItems: 58175,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                220
              ],
              Uint8Array [
                44
              ]
            ],
            typeUrl: 'turquoise',
            maxItems: 95346,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Auto Loan Account',
          renaissanceTx: 'indexing',
          genesisTime: '2019-03-05T00:35:00.873Z',
          renaissanceTime: '2019-03-05T00:35:00.873Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 14,
            address: 1,
            role: 5
          }
        }
      }
    ],
    stakes: [
      {
        address: 'b10478c9dbdf5d57389b4117ea0580da8224117f',
        from: '67981929c374816844ac80f7b38e8e792cc90e5e',
        to: '1a837e89f89598f1d4c75ca563f0ff376dd1a6ab',
        balance: '36803',
        message: 'Music',
        context: {
          genesisTx: 'Gorgeous',
          renaissanceTx: 'generating',
          genesisTime: '2019-03-05T00:35:00.874Z',
          renaissanceTime: '2019-03-05T00:35:00.874Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 13,
            address: 1,
            role: 0
          }
        }
      },
      {
        address: 'd17713c79d1a82d1b4db39241fb7f94c65d27afb',
        from: '9671390e7939e41c8b4b0e3fa4ef41a7c8fda85a',
        to: '908109bfdbc5d67e274eb9acdaa4976356862cdf',
        balance: '27511',
        message: 'connect',
        context: {
          genesisTx: 'Alaska',
          renaissanceTx: 'Practical Fresh Tuna',
          genesisTime: '2019-03-05T00:35:00.874Z',
          renaissanceTime: '2019-03-05T00:35:00.874Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 0,
            address: 0,
            role: 3
          }
        }
      }
    ],
    context: {
      txHash: '64d1bfaeaf9e73a7532af8bc9cd7f3de86d0f2a8',
      blockHeight: 4244,
      blockTime: '2019-03-05T00:35:00.874Z',
      totalTxs: 25389,
      txStatistics: {
        numAccountMigrateTxs: 61760,
        numCreateAssetTxs: 59286,
        numConsensusUpgradeTxs: 98425,
        numDeclareTxs: 20259,
        numDeclareFileTxs: 35518,
        numExchangeTxs: 57434,
        numStakeTxs: 70319,
        numSysUpgradeTxs: 90857,
        numTransferTxs: 34964,
        numUpdateAssetTxs: 80730,
        numConsumeAssetTxs: 14047
      },
      txIndex: 96300,
      lastBlockTime: '2019-03-05T00:35:00.874Z'
    },
    appState: {
      address: 'f2195ec41ea1c915d8f21b9bbd2210012fc95af5',
      consensus: {
        maxBytes: 56931,
        maxGas: 39801,
        maxValidators: 5439,
        maxCandidates: 30733,
        pubKeyTypes: [
          'Facilitator',
          'strategic'
        ],
        validators: [
          {
            address: '3bb8d759a23fd90a656ec81c419faca151cea16a',
            power: 64503
          },
          {
            address: '27c108b6102001e9ce39c1dda5c10d1d6d007b30',
            power: 1553
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
              dataHash: 'Iowa',
              actions: [
                undefined,
                undefined
              ]
            },
            {
              type: 3,
              dataHash: 'systemic',
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
          totalStakes: '32221',
          totalUnstakes: '98917',
          context: {
            genesisTx: 'system',
            renaissanceTx: 'out-of-the-box',
            genesisTime: '2019-03-05T00:35:00.875Z',
            renaissanceTime: '2019-03-05T00:35:00.875Z'
          }
        }
      },
      version: 'core',
      dataVersion: 'Uzbekistan',
      forgeAppHash: Uint8Array [
        35
      ],
      data: {
        type: 'WalletType',
        value: {
          pk: 0,
          hash: 13,
          address: 1,
          role: 2
        }
      }
    }
  }
});

// output
{
  verifyTx: {
    code: 20
  }
}
```

### processOne

```js
const result = await client.processOne({
  verifyTx: {
    tx: {
      from: '84895af87be507e0ae4e816d3b930413788df544',
      nonce: 39381,
      signature: Uint8Array [
        143
      ],
      chainId: 'User-centric',
      signatures: [
        {
          signer: 'District',
          signature: Uint8Array [
            188
          ],
          data: {
            type: 'WalletType',
            value: {
              pk: 1,
              hash: 6,
              address: 1,
              role: 3
            }
          }
        },
        {
          signer: 'Secured',
          signature: Uint8Array [
            28
          ],
          data: {
            type: 'WalletType',
            value: {
              pk: 0,
              hash: 6,
              address: 1,
              role: 0
            }
          }
        }
      ],
      itx: {
        type: 'WalletType',
        value: {
          pk: 1,
          hash: 7,
          address: 0,
          role: 6
        }
      }
    },
    states: [
      {
        balance: '14549',
        nonce: 97248,
        numTxs: 39353,
        address: '85c7341cc39c25c77ad02995cc2c0fd93904dca7',
        pk: Uint8Array [
          74
        ],
        type: {
          pk: 1,
          hash: 6,
          address: 1,
          role: 3
        },
        moniker: 'reboot',
        context: {
          genesisTx: 'Outdoors',
          renaissanceTx: 'productivity',
          genesisTime: '2019-03-05T00:35:00.876Z',
          renaissanceTime: '2019-03-05T00:35:00.876Z'
        },
        issuer: 'Burkina Faso',
        migratedTo: [
          'SAS',
          'object-oriented'
        ],
        migratedFrom: [
          'vortals',
          'Cambridgeshire'
        ],
        numAssets: 94337,
        stake: {
          totalStakes: '18220',
          totalUnstakes: '57228',
          totalReceivedStakes: '57514',
          recentStakes: {
            items: [
              Uint8Array [
                88
              ],
              Uint8Array [
                51
              ]
            ],
            typeUrl: 'Refined',
            maxItems: 91959,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                100
              ],
              Uint8Array [
                196
              ]
            ],
            typeUrl: 'Unbranded',
            maxItems: 44790,
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
              127
            ]
          ],
          typeUrl: 'Facilitator',
          maxItems: 48915,
          circular: undefined,
          fifo: undefined
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 14,
            address: 0,
            role: 3
          }
        }
      },
      {
        balance: '29133',
        nonce: 57793,
        numTxs: 46504,
        address: 'c0cdeb133073791321f4dd9bc1e1ab46e5c62662',
        pk: Uint8Array [
          199
        ],
        type: {
          pk: 1,
          hash: 14,
          address: 0,
          role: 5
        },
        moniker: 'utilisation',
        context: {
          genesisTx: 'driver',
          renaissanceTx: 'Licensed',
          genesisTime: '2019-03-05T00:35:00.876Z',
          renaissanceTime: '2019-03-05T00:35:00.876Z'
        },
        issuer: 'even-keeled',
        migratedTo: [
          'Idaho',
          'CFP Franc'
        ],
        migratedFrom: [
          'neutral',
          'iterate'
        ],
        numAssets: 40528,
        stake: {
          totalStakes: '40402',
          totalUnstakes: '40459',
          totalReceivedStakes: '80058',
          recentStakes: {
            items: [
              Uint8Array [
                150
              ],
              Uint8Array [
                27
              ]
            ],
            typeUrl: 'Developer',
            maxItems: 136,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                178
              ],
              Uint8Array [
                149
              ]
            ],
            typeUrl: 'compress',
            maxItems: 56169,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              180
            ],
            Uint8Array [
              123
            ]
          ],
          typeUrl: 'interface',
          maxItems: 35293,
          circular: undefined,
          fifo: undefined
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 14,
            address: 0,
            role: 3
          }
        }
      }
    ],
    assets: [
      {
        address: '2864e6e4cdf049bdaf7dddcc82475d95fc84f2de',
        owner: 'facilitate',
        moniker: 'SSL',
        readonly: undefined,
        transferrable: undefined,
        ttl: 48007,
        consumedTime: '2019-03-05T00:35:00.877Z',
        issuer: 'Granite',
        stake: {
          totalStakes: '46871',
          totalUnstakes: '68667',
          totalReceivedStakes: '19680',
          recentStakes: {
            items: [
              Uint8Array [
                229
              ],
              Uint8Array [
                208
              ]
            ],
            typeUrl: 'one-to-one',
            maxItems: 2744,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                231
              ],
              Uint8Array [
                195
              ]
            ],
            typeUrl: 'Tasty Soft Hat',
            maxItems: 66783,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'programming',
          renaissanceTx: 'Coordinator',
          genesisTime: '2019-03-05T00:35:00.877Z',
          renaissanceTime: '2019-03-05T00:35:00.877Z'
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
      },
      {
        address: '87f0ae7619ad980469240dde58a145f84d9f467b',
        owner: 'transparent',
        moniker: 'Chicken',
        readonly: undefined,
        transferrable: undefined,
        ttl: 77874,
        consumedTime: '2019-03-05T00:35:00.877Z',
        issuer: 'Credit Card Account',
        stake: {
          totalStakes: '98281',
          totalUnstakes: '98587',
          totalReceivedStakes: '3970',
          recentStakes: {
            items: [
              Uint8Array [
                66
              ],
              Uint8Array [
                219
              ]
            ],
            typeUrl: 'Security',
            maxItems: 17005,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                55
              ],
              Uint8Array [
                228
              ]
            ],
            typeUrl: 'markets',
            maxItems: 7509,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Ergonomic',
          renaissanceTx: 'Dynamic',
          genesisTime: '2019-03-05T00:35:00.877Z',
          renaissanceTime: '2019-03-05T00:35:00.877Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 14,
            address: 1,
            role: 1
          }
        }
      }
    ],
    stakes: [
      {
        address: 'd0836696520e93f222a17e122415ec089aa81528',
        from: 'c1128155314668a85621fcb142158919b06e0443',
        to: '2e20ac31a1186db8d7348464442c0ea84a484630',
        balance: '50475',
        message: 'Turkmenistan',
        context: {
          genesisTx: 'matrix',
          renaissanceTx: 'French Southern Territories',
          genesisTime: '2019-03-05T00:35:00.877Z',
          renaissanceTime: '2019-03-05T00:35:00.877Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 7,
            address: 1,
            role: 1
          }
        }
      },
      {
        address: '14547821772ecf2e7f451fb47e8cf2e7dead77cb',
        from: '2056392e75ae43deae4f383ef47349d80e8f37b1',
        to: '011916c145c01eb95bea534f36cd627230c5de82',
        balance: '62120',
        message: 'Executive',
        context: {
          genesisTx: 'withdrawal',
          renaissanceTx: 'Home Loan Account',
          genesisTime: '2019-03-05T00:35:00.877Z',
          renaissanceTime: '2019-03-05T00:35:00.877Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 0,
            address: 1,
            role: 0
          }
        }
      }
    ],
    context: {
      txHash: '74093dc03a620cd43c8a089785a19979f7fdfe7f',
      blockHeight: 91147,
      blockTime: '2019-03-05T00:35:00.877Z',
      totalTxs: 35222,
      txStatistics: {
        numAccountMigrateTxs: 30066,
        numCreateAssetTxs: 15632,
        numConsensusUpgradeTxs: 23479,
        numDeclareTxs: 20168,
        numDeclareFileTxs: 36042,
        numExchangeTxs: 93681,
        numStakeTxs: 93330,
        numSysUpgradeTxs: 48163,
        numTransferTxs: 89953,
        numUpdateAssetTxs: 93585,
        numConsumeAssetTxs: 77535
      },
      txIndex: 7216,
      lastBlockTime: '2019-03-05T00:35:00.877Z'
    },
    appState: {
      address: 'd6b569f1b82815873631902d140557b7f75884ac',
      consensus: {
        maxBytes: 5427,
        maxGas: 26170,
        maxValidators: 50852,
        maxCandidates: 2796,
        pubKeyTypes: [
          'Industrial',
          'Music'
        ],
        validators: [
          {
            address: 'd5de33d0a310ce6cb8f1d3e4759bc4b1a76f5d7b',
            power: 21990
          },
          {
            address: '4f56cd0b7bc27fb9065cce766c6f431039e60265',
            power: 39590
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
              dataHash: 'SMS',
              actions: [
                undefined,
                undefined
              ]
            },
            {
              type: 14,
              dataHash: 'Specialist',
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
          totalStakes: '40966',
          totalUnstakes: '60907',
          context: {
            genesisTx: 'Interactions',
            renaissanceTx: 'Sleek Soft Bacon',
            genesisTime: '2019-03-05T00:35:00.877Z',
            renaissanceTime: '2019-03-05T00:35:00.877Z'
          }
        }
      },
      version: 'Personal Loan Account',
      dataVersion: 'Regional',
      forgeAppHash: Uint8Array [
        60
      ],
      data: {
        type: 'WalletType',
        value: {
          pk: 0,
          hash: 13,
          address: 1,
          role: 2
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
    code: 42
  }
}
});
```

### recoverWallet

```js
const result = await client.recoverWallet({
  data: Uint8Array [
    124
  ],
  type: {
    pk: 1,
    hash: 1,
    address: 1,
    role: 8
  },
  passphrase: 'copy',
  moniker: 'Wyoming'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 34,
  token: 'function',
  wallet: {
    type: {
      pk: 0,
      hash: 1,
      address: 1,
      role: 1
    },
    sk: Uint8Array [
      40
    ],
    pk: Uint8Array [
      184
    ],
    address: 'd1fb9425136a51f758a163743799ba693c02cd97'
  }
}
});
```

### removeWallet

```js
const result = await client.removeWallet({
  address: '808fcf1ebcac37ef14c10e6ec607aa33f40b1656'
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
  key: 'ADP',
  value: 'scalable'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 2,
  txs: [
    {
      tx: {
        from: '1155805dc6c8eafdf83180881d0b184ac17242a8',
        nonce: 33395,
        signature: Uint8Array [
          165
        ],
        chainId: 'Auto Loan Account',
        signatures: [
          {
            signer: 'standardization',
            signature: Uint8Array [
              75
            ],
            data: {
              type: 'WalletType',
              value: {
                pk: 1,
                hash: 13,
                address: 1,
                role: 2
              }
            }
          },
          {
            signer: 'technologies',
            signature: Uint8Array [
              43
            ],
            data: {
              type: 'WalletType',
              value: {
                pk: 1,
                hash: 0,
                address: 1,
                role: 6
              }
            }
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 1,
            address: 1,
            role: 3
          }
        }
      },
      height: 4477,
      index: 55655,
      hash: 'c358e3886379a1c4e6f130215b84f1979e92bf1c',
      tags: [
        {
          key: Uint8Array [
            102
          ],
          value: Uint8Array [
            120
          ]
        },
        {
          key: Uint8Array [
            188
          ],
          value: Uint8Array [
            195
          ]
        }
      ],
      code: 37
    },
    {
      tx: {
        from: 'dc2eafa07d6dbe2a182a9ba138d9c9db21bb5cc4',
        nonce: 83468,
        signature: Uint8Array [
          233
        ],
        chainId: 'Customer',
        signatures: [
          {
            signer: 'PCI',
            signature: Uint8Array [
              151
            ],
            data: {
              type: 'WalletType',
              value: {
                pk: 0,
                hash: 1,
                address: 1,
                role: 1
              }
            }
          },
          {
            signer: 'core',
            signature: Uint8Array [
              14
            ],
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
        itx: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 0,
            address: 0,
            role: 8
          }
        }
      },
      height: 40273,
      index: 14632,
      hash: '513374d21849c1a470404f10603ebbe541e205ee',
      tags: [
        {
          key: Uint8Array [
            48
          ],
          value: Uint8Array [
            232
          ]
        },
        {
          key: Uint8Array [
            116
          ],
          value: Uint8Array [
            210
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
    from: '4f3be5e55112472a0310c1d2319f78c5736e38a3',
    nonce: 77749,
    signature: Uint8Array [
      19
    ],
    chainId: 'capacity',
    signatures: [
      {
        signer: 'connect',
        signature: Uint8Array [
          14
        ],
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 7,
            address: 0,
            role: 7
          }
        }
      },
      {
        signer: 'Chicken',
        signature: Uint8Array [
          45
        ],
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 6,
            address: 0,
            role: 4
          }
        }
      }
    ],
    itx: {
      type: 'WalletType',
      value: {
        pk: 1,
        hash: 7,
        address: 1,
        role: 0
      }
    }
  },
  wallet: {
    type: {
      pk: 0,
      hash: 1,
      address: 0,
      role: 4
    },
    sk: Uint8Array [
      185
    ],
    pk: Uint8Array [
      57
    ],
    address: 'd799e97c835bf8aae444ec9b0fecae05eef17b19'
  },
  token: 'transition',
  commit: undefined
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 40,
  hash: '1c960cf5d62a74fc6f071afd9151cab53cfc8de7'
}
});
```

### signData

```js
const result = await client.signData({
  data: Uint8Array [
    79
  ],
  wallet: {
    type: {
      pk: 0,
      hash: 6,
      address: 1,
      role: 0
    },
    sk: Uint8Array [
      60
    ],
    pk: Uint8Array [
      24
    ],
    address: '1e077b496594481249bcfef3ed1bf77dc97abe06'
  },
  token: 'National'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 9,
  signature: Uint8Array [
    121
  ]
}
});
```

### storeFile

```js
const result = await client.storeFile({
  chunk: Uint8Array [
    130
  ]
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 6,
  hash: '8bfc6d1ef89415c2c92d2cda66cf82eca0f19512'
}
});
```

### subscribe

```js
const stream = client.subscribe({
  type: 21,
  filter: 'killer'
});

// output
{
  topic: 'toolset'
}
```

### unsubscribe

```js
const result = await client.unsubscribe({
  topic: 'Product'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 20
}
});
```


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |
