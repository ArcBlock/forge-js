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
<<<<<<< HEAD
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
=======
  from: 'd2dc682f4ab68f0547b771bfca4c2e93e24aedf6',
  nonce: 75319,
  wallet: {
    type: {
      pk: 0,
      hash: 7,
      address: 1,
      role: 1
    },
    sk: Uint8Array [
      109
    ],
    pk: Uint8Array [
      217
    ],
    address: 'c068ec36db10b01777c2c10eaf63085ac35f8e4a'
  },
  token: 'Hawaii'
>>>>>>> master
});

// response is a stream
result.on('data', data => {
  // response data format
  {
<<<<<<< HEAD
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
=======
  code: 32,
  tx: {
    from: '488e74b94f7512ccef50957468c634cb1918cc13',
    nonce: 63846,
    signature: Uint8Array [
      224
    ],
    chainId: 'Shoes',
    signatures: [
      {
        signer: 'Rubber',
        signature: Uint8Array [
          30
>>>>>>> master
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
<<<<<<< HEAD
        signer: 'Personal Loan Account',
        signature: Uint8Array [
          111
=======
        signer: 'deposit',
        signature: Uint8Array [
          238
>>>>>>> master
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
<<<<<<< HEAD
  passphrase: 'Dynamic',
  type: {
    pk: 0,
    hash: 13,
    address: 1,
    role: 3
  },
  moniker: 'hack'
=======
  passphrase: 'Future',
  type: {
    pk: 1,
    hash: 1,
    address: 1,
    role: 8
  },
  moniker: 'Corner'
>>>>>>> master
});

// response is a stream
result.on('data', data => {
  // response data format
  {
<<<<<<< HEAD
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
=======
  code: 33,
  token: 'COM',
  wallet: {
    type: {
      pk: 1,
      hash: 13,
      address: 0,
      role: 4
    },
    sk: Uint8Array [
      32
    ],
    pk: Uint8Array [
      224
    ],
    address: '65b79c490a8ed1dc10c1fc7e51d6f3f387e4adcf'
>>>>>>> master
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
<<<<<<< HEAD
  code: 32,
  wallet: {
    type: {
      pk: 0,
      hash: 7,
=======
  code: 34,
  wallet: {
    type: {
      pk: 0,
      hash: 1,
>>>>>>> master
      address: 0,
      role: 6
    },
    sk: Uint8Array [
<<<<<<< HEAD
      214
    ],
    pk: Uint8Array [
      85
    ],
    address: '9815df0df6217ab851273afc4565f297fd8dcbcb'
=======
      198
    ],
    pk: Uint8Array [
      27
    ],
    address: '87e7620ea4a289cdc138c6fbfcf33a0724c76b2a'
>>>>>>> master
  }
}
});
```

### getAccountState

```js
const stream = client.getAccountState({
<<<<<<< HEAD
  address: '4304540e62d7656df0fdc931cf23c84106297f66',
  keys: [
    'Incredible Fresh Computer',
    'Home'
  ],
  height: 55747
=======
  address: '9cd2c1de0483f82ca9c00b7378e16379044bdbb0',
  keys: [
    'interface',
    'French Polynesia'
  ],
  height: 81551
>>>>>>> master
});

// output
{
<<<<<<< HEAD
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
=======
  code: 4,
  state: {
    balance: '93192',
    nonce: 47432,
    numTxs: 21457,
    address: '46b5cf002246787d7304d012dbfd46ab76f956d2',
    pk: Uint8Array [
      145
    ],
    type: {
      pk: 1,
      hash: 6,
      address: 0,
      role: 4
    },
    moniker: 'TCP',
    context: {
      genesisTx: 'Web',
      renaissanceTx: 'Democratic People\'s Republic of Korea',
      genesisTime: '2019-03-11T02:40:29.185Z',
      renaissanceTime: '2019-03-11T02:40:29.185Z'
    },
    issuer: 'paradigm',
    migratedTo: [
      'Future',
      'whiteboard'
    ],
    migratedFrom: [
      'maximized',
      'upward-trending'
    ],
    numAssets: 73082,
    stake: {
      totalStakes: '1822',
      totalUnstakes: '48728',
      totalReceivedStakes: '23199',
      recentStakes: {
        items: [
          Uint8Array [
            70
          ],
          Uint8Array [
            92
          ]
        ],
        typeUrl: 'AI',
        maxItems: 37024,
>>>>>>> master
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [
<<<<<<< HEAD
            114
          ],
          Uint8Array [
            184
          ]
        ],
        typeUrl: 'application',
        maxItems: 50661,
=======
            152
          ],
          Uint8Array [
            92
          ]
        ],
        typeUrl: 'Metrics',
        maxItems: 55457,
>>>>>>> master
        circular: undefined,
        fifo: undefined
      }
    },
    pinnedFiles: {
      items: [
        Uint8Array [
<<<<<<< HEAD
          79
        ],
        Uint8Array [
          229
        ]
      ],
      typeUrl: 'Cambridgeshire',
      maxItems: 94775,
=======
          235
        ],
        Uint8Array [
          246
        ]
      ],
      typeUrl: 'Functionality',
      maxItems: 52691,
>>>>>>> master
      circular: undefined,
      fifo: undefined
    },
    poke: {
<<<<<<< HEAD
      dailyLimit: '20276',
      leftover: '69243',
      amount: '62592'
=======
      dailyLimit: '38800',
      leftover: '48342',
      amount: '35807'
>>>>>>> master
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
<<<<<<< HEAD
  senderAddress: 'invoice',
  itx: {
    moniker: 'panel',
=======
  senderAddress: 'SQL',
  itx: {
    moniker: 'Savings Account',
>>>>>>> master
    data: {
      type: 'fg:x:random_data',
      value: 'ABCD 1234'
    },
    readonly: undefined,
    transferrable: undefined,
<<<<<<< HEAD
    ttl: 5302,
    parent: 'Pines'
  },
  walletType: {
    pk: 1,
    hash: 0,
    address: 0,
    role: 3
=======
    ttl: 64428,
    parent: 'Turkey'
  },
  walletType: {
    pk: 0,
    hash: 0,
    address: 1,
    role: 0
>>>>>>> master
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
<<<<<<< HEAD
  code: 20,
  assetAddress: 'Practical Plastic Ball'
=======
  code: 10,
  assetAddress: 'Frozen'
>>>>>>> master
}
});
```

### getAssetState

```js
const stream = client.getAssetState({
<<<<<<< HEAD
  address: 'b33a24da753e1ec7b13e140541da5c2bb9e3d183',
  keys: [
    'Movies',
    'content'
  ],
  height: 81624
=======
  address: 'b28ac0dd85c656b3a2a6f7ea209f980321f3ba31',
  keys: [
    'Sausages',
    'Fields'
  ],
  height: 70914
>>>>>>> master
});

// output
{
<<<<<<< HEAD
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
=======
  code: 7,
  state: {
    address: '5d5a22e4d32a215f0421a3e7bf8cd37fd2e50dee',
    owner: '24/365',
    moniker: 'Pennsylvania',
    readonly: undefined,
    transferrable: undefined,
    ttl: 24809,
    consumedTime: '2019-03-11T02:40:29.186Z',
    issuer: 'Brand',
    stake: {
      totalStakes: '91196',
      totalUnstakes: '31567',
      totalReceivedStakes: '34545',
      recentStakes: {
        items: [
          Uint8Array [
            89
          ],
          Uint8Array [
            187
          ]
        ],
        typeUrl: 'Ohio',
        maxItems: 35184,
>>>>>>> master
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [
<<<<<<< HEAD
            181
          ],
          Uint8Array [
            44
          ]
        ],
        typeUrl: 'Delaware',
        maxItems: 87526,
=======
            72
          ],
          Uint8Array [
            73
          ]
        ],
        typeUrl: 'optical',
        maxItems: 4159,
>>>>>>> master
        circular: undefined,
        fifo: undefined
      }
    },
    context: {
<<<<<<< HEAD
      genesisTx: 'applications',
      renaissanceTx: 'SDD',
      genesisTime: '2019-03-12T07:14:05.372Z',
      renaissanceTime: '2019-03-12T07:14:05.372Z'
=======
      genesisTx: 'Interactions',
      renaissanceTx: 'Guatemala',
      genesisTime: '2019-03-11T02:40:29.186Z',
      renaissanceTime: '2019-03-11T02:40:29.186Z'
>>>>>>> master
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
<<<<<<< HEAD
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
=======
    cursor: 'redundant',
    size: 19208,
    order: [
      {
        field: 'empowering',
        type: 'PCI'
      },
      {
        field: 'customized',
        type: 'Consultant'
      }
    ]
  },
  ownerAddress: 'platforms'
>>>>>>> master
});

// response is a stream
result.on('data', data => {
  // response data format
  {
<<<<<<< HEAD
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
=======
  code: 39,
  page: {
    cursor: 'purple',
    next: undefined,
    total: 75830
  },
  assets: [
    {
      address: '22e869b01929b26e091dbd6361784ce49ecfd4b6',
      owner: 'Won',
      genesisTime: 'Interactions',
      renaissanceTime: 'Sweden',
      moniker: 'invoice',
      readonly: undefined
    },
    {
      address: '34366a021bccc2dcecc5d3de529cd66d3b96ea1d',
      owner: 'Cambridgeshire',
      genesisTime: 'Applications',
      renaissanceTime: 'Administrator',
      moniker: 'invoice',
>>>>>>> master
      readonly: undefined
    }
  ]
}
});
```

### getBlock

```js
const stream = client.getBlock({
<<<<<<< HEAD
  height: 17050
=======
  height: 29577
>>>>>>> master
});

// output
{
<<<<<<< HEAD
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
=======
  code: 22,
  block: {
    height: 44815,
    numTxs: 97283,
    time: '2019-03-11T02:40:29.187Z',
    appHash: 'f3b5dc5b51279b13bebd2aead169da4698e68255',
    proposer: 'c4e8e8926b8f49970f9633cad289867ee7bc8241',
    txs: [
      {
        tx: {
          from: '61f4855537f2cda8aff986ecf6233392201627f2',
          nonce: 48,
          signature: Uint8Array [
            248
          ],
          chainId: 'generate',
          signatures: [
            {
              signer: 'encompassing',
              signature: Uint8Array [
                243
>>>>>>> master
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
<<<<<<< HEAD
              signer: 'Sleek Cotton Fish',
              signature: Uint8Array [
                53
=======
              signer: 'North Carolina',
              signature: Uint8Array [
                246
>>>>>>> master
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
<<<<<<< HEAD
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
=======
        height: 66576,
        index: 23979,
        hash: 'd402230e077e53eebdf10c77682fbfc67c180907',
        tags: [
          {
            key: Uint8Array [
              10
            ],
            value: Uint8Array [
              113
>>>>>>> master
            ]
          },
          {
            key: Uint8Array [
<<<<<<< HEAD
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
=======
              92
            ],
            value: Uint8Array [
              25
            ]
          }
        ],
        code: 37,
        time: '2019-03-11T02:40:29.188Z'
      },
      {
        tx: {
          from: '916e5e01e7017bf9f6b33d74319c7e88a42433ff',
          nonce: 49236,
          signature: Uint8Array [
            44
          ],
          chainId: 'Wooden',
          signatures: [
            {
              signer: 'SSL',
              signature: Uint8Array [
                27
>>>>>>> master
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
<<<<<<< HEAD
              signer: 'Soap',
              signature: Uint8Array [
                225
=======
              signer: 'Technician',
              signature: Uint8Array [
                143
>>>>>>> master
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
<<<<<<< HEAD
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
=======
        height: 73947,
        index: 37938,
        hash: '7919e59bee0618e399ec17b65d670f6578ca3a8a',
        tags: [
          {
            key: Uint8Array [
              233
            ],
            value: Uint8Array [
              136
>>>>>>> master
            ]
          },
          {
            key: Uint8Array [
<<<<<<< HEAD
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
=======
              50
            ],
            value: Uint8Array [
              223
            ]
          }
        ],
        code: 8,
        time: '2019-03-11T02:40:29.188Z'
      }
    ],
    totalTxs: 49120,
    invalidTxs: [
      {
        tx: {
          from: 'ad5245d3a83a16c5cbffddf21969771cad67ecc1',
          nonce: 89898,
          signature: Uint8Array [
            151
          ],
          chainId: 'Borders',
          signatures: [
            {
              signer: 'technologies',
              signature: Uint8Array [
                201
>>>>>>> master
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
<<<<<<< HEAD
              signer: 'real-time',
              signature: Uint8Array [
                25
=======
              signer: 'Handmade',
              signature: Uint8Array [
                72
>>>>>>> master
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
<<<<<<< HEAD
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
=======
        height: 27179,
        index: 51533,
        hash: '65c095aa022b8b40b06d99518b500b0b360630b9',
        tags: [
          {
            key: Uint8Array [
              179
            ],
            value: Uint8Array [
              136
>>>>>>> master
            ]
          },
          {
            key: Uint8Array [
<<<<<<< HEAD
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
=======
              111
            ],
            value: Uint8Array [
              31
            ]
          }
        ],
        code: 26,
        time: '2019-03-11T02:40:29.188Z'
      },
      {
        tx: {
          from: '6dc0a99e62e59d2e55e6703caf9ec07ce11f1f70',
          nonce: 92839,
          signature: Uint8Array [
            98
          ],
          chainId: 'Maryland',
          signatures: [
            {
              signer: 'invoice',
              signature: Uint8Array [
                54
>>>>>>> master
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
<<<<<<< HEAD
              signer: 'multi-byte',
              signature: Uint8Array [
                218
=======
              signer: 'Borders',
              signature: Uint8Array [
                187
>>>>>>> master
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
<<<<<<< HEAD
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
=======
        height: 1511,
        index: 13228,
        hash: '58fa56ceab04f0387c6e48e56299cdc525cf49ae',
        tags: [
          {
            key: Uint8Array [
              199
            ],
            value: Uint8Array [
              167
>>>>>>> master
            ]
          },
          {
            key: Uint8Array [
<<<<<<< HEAD
              192
=======
              32
>>>>>>> master
            ],
            value: Uint8Array [
              83
            ]
          }
        ],
<<<<<<< HEAD
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
=======
        code: 33,
        time: '2019-03-11T02:40:29.188Z'
      }
    ],
    txsHashes: [
      'bifurcated',
      'wireless'
    ],
    invalidTxsHashes: [
      'generate',
      'cross-media'
>>>>>>> master
    ]
  }
}
```

### getBlocks

```js
const result = await client.getBlocks({
  paging: {
<<<<<<< HEAD
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
=======
    cursor: 'Checking Account',
    size: 26335,
    order: [
      {
        field: 'disintermediate',
        type: 'ivory'
      },
      {
        field: 'transparent',
        type: 'GB'
      }
    ]
  },
  minHeight: 48170,
  maxHeight: 36901,
>>>>>>> master
  emptyExcluded: undefined
});

// response is a stream
result.on('data', data => {
  // response data format
  {
<<<<<<< HEAD
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
=======
  code: 8,
  page: {
    cursor: 'engage',
    next: undefined,
    total: 39598
  },
  blocks: [
    {
      height: 84393,
      numTxs: 11819,
      time: '2019-03-11T02:40:29.189Z',
      appHash: 'd57343ec741bd331e4add3c4d8efd07a96e8ea3e',
      proposer: 'ce88d74370e9591ccb744f3d21e327dfebf456ce',
      txs: [
        {
          tx: {
            from: '65400a89ae0b0194eb6f58dc60445bd4033b78ff',
            nonce: 99070,
            signature: Uint8Array [
              138
            ],
            chainId: 'withdrawal',
            signatures: [
              {
                signer: 'Illinois',
                signature: Uint8Array [
                  107
>>>>>>> master
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
<<<<<<< HEAD
                signer: 'Integrated',
                signature: Uint8Array [
                  144
=======
                signer: 'Ball',
                signature: Uint8Array [
                  208
>>>>>>> master
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
<<<<<<< HEAD
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
=======
          height: 87882,
          index: 42675,
          hash: 'bd48c9d750faa77c611bba2cc51601ac0c469948',
          tags: [
            {
              key: Uint8Array [
                167
              ],
              value: Uint8Array [
                109
>>>>>>> master
              ]
            },
            {
              key: Uint8Array [
<<<<<<< HEAD
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
=======
                104
              ],
              value: Uint8Array [
                225
              ]
            }
          ],
          code: 39,
          time: '2019-03-11T02:40:29.190Z'
        },
        {
          tx: {
            from: '52ad068ee3acaee0f2a06d9ae49f92b8972369b5',
            nonce: 31259,
            signature: Uint8Array [
              154
            ],
            chainId: 'empowering',
            signatures: [
              {
                signer: 'Oklahoma',
                signature: Uint8Array [
                  115
>>>>>>> master
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
<<<<<<< HEAD
                signer: 'Checking Account',
                signature: Uint8Array [
                  158
=======
                signer: 'bypassing',
                signature: Uint8Array [
                  219
>>>>>>> master
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
<<<<<<< HEAD
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
=======
          height: 77681,
          index: 31344,
          hash: 'f246f0bdfe04eb0b8eb41c1c26a7063c0ac145ba',
          tags: [
            {
              key: Uint8Array [
                198
              ],
              value: Uint8Array [
                30
>>>>>>> master
              ]
            },
            {
              key: Uint8Array [
<<<<<<< HEAD
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
=======
                24
              ],
              value: Uint8Array [
                233
              ]
            }
          ],
          code: 30,
          time: '2019-03-11T02:40:29.190Z'
        }
      ],
      totalTxs: 96286,
      invalidTxs: [
        {
          tx: {
            from: 'a2a7bca9a94db121b5543c349b0d4ea0e9c44897',
            nonce: 35101,
            signature: Uint8Array [
              132
>>>>>>> master
            ],
            chainId: 'Auto Loan Account',
            signatures: [
              {
<<<<<<< HEAD
                signer: 'New Mexico',
                signature: Uint8Array [
                  187
=======
                signer: 'Brook',
                signature: Uint8Array [
                  226
>>>>>>> master
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
<<<<<<< HEAD
                signer: 'Metal',
                signature: Uint8Array [
                  145
=======
                signer: 'Zambian Kwacha',
                signature: Uint8Array [
                  97
>>>>>>> master
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
<<<<<<< HEAD
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
=======
          height: 24258,
          index: 43656,
          hash: 'be1a99710f14303b8cc53e1514526c70723a7dfe',
          tags: [
            {
              key: Uint8Array [
                147
              ],
              value: Uint8Array [
                34
>>>>>>> master
              ]
            },
            {
              key: Uint8Array [
<<<<<<< HEAD
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
=======
                57
              ],
              value: Uint8Array [
                157
              ]
            }
          ],
          code: 31,
          time: '2019-03-11T02:40:29.190Z'
        },
        {
          tx: {
            from: 'f2d8eb5cf5869b13d787eaf1bc82db507acd4013',
            nonce: 73262,
            signature: Uint8Array [
              219
            ],
            chainId: 'Optimization',
            signatures: [
              {
                signer: 'moratorium',
                signature: Uint8Array [
                  13
>>>>>>> master
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
<<<<<<< HEAD
                signer: 'Cheese',
                signature: Uint8Array [
                  222
=======
                signer: 'strategize',
                signature: Uint8Array [
                  153
>>>>>>> master
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
<<<<<<< HEAD
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
=======
          height: 30023,
          index: 96231,
          hash: 'fbcf80e741132b2064a7f946fdacb4cefa73c866',
          tags: [
            {
              key: Uint8Array [
                116
              ],
              value: Uint8Array [
                70
>>>>>>> master
              ]
            },
            {
              key: Uint8Array [
<<<<<<< HEAD
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
=======
                251
              ],
              value: Uint8Array [
                103
              ]
            }
          ],
          code: 34,
          time: '2019-03-11T02:40:29.190Z'
        }
      ],
      txsHashes: [
        'Centralized',
        'Producer'
      ],
      invalidTxsHashes: [
        'Cambridgeshire',
        'Unbranded'
      ]
    },
    {
      height: 77514,
      numTxs: 20212,
      time: '2019-03-11T02:40:29.190Z',
      appHash: 'c9bfe1c71e20f46460bda7c83f8afdd03b61cd3b',
      proposer: '8af337c66c6ff13d2cf7bd20b569b4a5447ac313',
      txs: [
        {
          tx: {
            from: '34328dab76ede5dfc2693832ccea97ebef5fb6bb',
            nonce: 52949,
            signature: Uint8Array [
              215
            ],
            chainId: 'brand',
            signatures: [
              {
                signer: 'B2B',
                signature: Uint8Array [
                  216
>>>>>>> master
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
<<<<<<< HEAD
                signer: 'hacking',
                signature: Uint8Array [
                  116
=======
                signer: 'Organic',
                signature: Uint8Array [
                  93
>>>>>>> master
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
<<<<<<< HEAD
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
=======
          height: 66845,
          index: 6326,
          hash: '4d4fa56e790f7d9c3d86e5ace9538f253102dd09',
          tags: [
            {
              key: Uint8Array [
                2
              ],
              value: Uint8Array [
                73
>>>>>>> master
              ]
            },
            {
              key: Uint8Array [
<<<<<<< HEAD
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
=======
                137
              ],
              value: Uint8Array [
                39
              ]
            }
          ],
          code: 3,
          time: '2019-03-11T02:40:29.191Z'
        },
        {
          tx: {
            from: 'b30f34e4e284067913d0b5161de58c3fbaf2fab0',
            nonce: 91913,
            signature: Uint8Array [
              40
            ],
            chainId: 'Towels',
            signatures: [
              {
                signer: 'knowledge user',
                signature: Uint8Array [
                  162
>>>>>>> master
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
<<<<<<< HEAD
                signer: 'Architect',
                signature: Uint8Array [
                  240
=======
                signer: 'Plastic',
                signature: Uint8Array [
                  60
>>>>>>> master
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
<<<<<<< HEAD
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
=======
          height: 65647,
          index: 42162,
          hash: 'a3f962ea023ced8a1877c88881d6697d76c7b671',
          tags: [
            {
              key: Uint8Array [
                246
              ],
              value: Uint8Array [
                63
>>>>>>> master
              ]
            },
            {
              key: Uint8Array [
<<<<<<< HEAD
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
=======
                73
              ],
              value: Uint8Array [
                94
              ]
            }
          ],
          code: 42,
          time: '2019-03-11T02:40:29.191Z'
        }
      ],
      totalTxs: 20006,
      invalidTxs: [
        {
          tx: {
            from: '6d8447e89425e154347892b3a3998b160e8204f4',
            nonce: 83759,
            signature: Uint8Array [
              116
            ],
            chainId: 'open-source',
            signatures: [
              {
                signer: 'Cambridgeshire',
                signature: Uint8Array [
                  90
>>>>>>> master
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
<<<<<<< HEAD
                signer: 'Towels',
                signature: Uint8Array [
                  21
=======
                signer: 'architecture',
                signature: Uint8Array [
                  198
>>>>>>> master
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
<<<<<<< HEAD
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
=======
          height: 83502,
          index: 8629,
          hash: 'fe1071c6257dafedc217ea4638d2c7941310df4c',
          tags: [
            {
              key: Uint8Array [
                206
              ],
              value: Uint8Array [
                198
>>>>>>> master
              ]
            },
            {
              key: Uint8Array [
<<<<<<< HEAD
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
=======
                237
              ],
              value: Uint8Array [
                25
              ]
            }
          ],
          code: 32,
          time: '2019-03-11T02:40:29.191Z'
        },
        {
          tx: {
            from: '3f0efe775f8d879dcf6294d110adb15c0d4d7772',
            nonce: 51690,
            signature: Uint8Array [
              83
            ],
            chainId: 'best-of-breed',
            signatures: [
              {
                signer: 'transmit',
                signature: Uint8Array [
                  183
>>>>>>> master
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
<<<<<<< HEAD
                signer: 'bus',
                signature: Uint8Array [
                  170
=======
                signer: 'Ohio',
                signature: Uint8Array [
                  218
>>>>>>> master
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
<<<<<<< HEAD
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
=======
          height: 29214,
          index: 97357,
          hash: 'd7321a599f6786a87c6d24dc7206c5de29a7e492',
          tags: [
            {
              key: Uint8Array [
                101
              ],
              value: Uint8Array [
                231
>>>>>>> master
              ]
            },
            {
              key: Uint8Array [
<<<<<<< HEAD
                204
              ],
              value: Uint8Array [
                247
=======
                159
              ],
              value: Uint8Array [
                185
>>>>>>> master
              ]
            }
          ],
          code: 25,
<<<<<<< HEAD
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
=======
          time: '2019-03-11T02:40:29.192Z'
        }
      ],
      txsHashes: [
        'Kids',
        'black'
      ],
      invalidTxsHashes: [
        'Incredible Steel Mouse',
        'Unbranded Frozen Mouse'
>>>>>>> master
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
<<<<<<< HEAD
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
=======
  code: 36,
  info: {
    id: 'Forest',
    network: 'implementation',
    moniker: 'Dynamic',
    consensusVersion: 'Rwanda Franc',
    synced: undefined,
    appHash: 'ddb50c919ee1b3e3edf8f5a13e4ba2b004c75944',
    blockHash: Uint8Array [
      0
    ],
    blockHeight: 13824,
    blockTime: '2019-03-11T02:40:29.193Z',
    address: 'dc7e50aea31728103f11951669132a6aee167e71',
    votingPower: 57388,
    totalTxs: 7502,
    version: 'Granite',
    dataVersion: 'Jewelery',
    forgeAppsVersion: {
      'function randomWord (type) {\n\n    var wordMethods = [\n    \'commerce.department\',\n    \'commerce.productName\',\n    \'commerce.productAdjective\',\n    \'commerce.productMaterial\',\n    \'commerce.product\',\n    \'commerce.color\',\n\n    \'company.catchPhraseAdjective\',\n    \'company.catchPhraseDescriptor\',\n    \'company.catchPhraseNoun\',\n    \'company.bsAdjective\',\n    \'company.bsBuzz\',\n    \'company.bsNoun\',\n    \'address.streetSuffix\',\n    \'address.county\',\n    \'address.country\',\n    \'address.state\',\n\n    \'finance.accountName\',\n    \'finance.transactionType\',\n    \'finance.currencyName\',\n\n    \'hacker.noun\',\n    \'hacker.verb\',\n    \'hacker.adjective\',\n    \'hacker.ingverb\',\n    \'hacker.abbreviation\',\n\n    \'name.jobDescriptor\',\n    \'name.jobArea\',\n    \'name.jobType\'];\n\n    // randomly pick from the many faker methods that can generate words\n    var randomWordMethod = faker.random.arrayElement(wordMethods);\n    return faker.fake(\'{{\' + randomWordMethod + \'}}\');\n\n  }': 'Steel'
    },
    supportedTxs: [
      'Keyboard',
      'Michigan'
>>>>>>> master
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
<<<<<<< HEAD
  code: 21,
  config: 'Computers'
=======
  code: 36,
  config: 'heuristic'
>>>>>>> master
}
});
```

### getForgeState

```js
const result = await client.getForgeState({
  keys: [
<<<<<<< HEAD
    'cohesive',
    'New Zealand'
  ],
  height: 26901
=======
    'Program',
    'payment'
  ],
  height: 93352
>>>>>>> master
});

// response is a stream
result.on('data', data => {
  // response data format
  {
<<<<<<< HEAD
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
=======
  code: 31,
  state: {
    address: 'dbd53b58b5b2e9d52a5453b5f0d8f9fdd1b8c1ba',
    consensus: {
      maxBytes: 10557,
      maxGas: 8514,
      maxValidators: 78243,
      maxCandidates: 25559,
      pubKeyTypes: [
        'Refined Cotton Hat',
        'Corporate'
      ],
      validators: [
        {
          address: '468cc88536ec0aa046c1ea9fdc5eedfc17675e87',
          power: 39490
        },
        {
          address: '3f27da95a8e53ff0a51ded32a5f95c9592ad41cf',
          power: 63496
>>>>>>> master
        }
      ],
      validatorChanged: undefined,
      paramChanged: undefined
    },
    tasks: {
      'function (options) {\n\n    if (typeof options === "number") {\n      options = {\n        max: options\n      };\n    }\n\n    options = options || {};\n\n    if (typeof options.min === "undefined") {\n      options.min = 0;\n    }\n\n    if (typeof options.max === "undefined") {\n      options.max = 99999;\n    }\n    if (typeof options.precision === "undefined") {\n      options.precision = 1;\n    }\n\n    // Make the range inclusive of the max value\n    var max = options.max;\n    if (max >= 0) {\n      max += options.precision;\n    }\n\n    var randomNumber = Math.floor(\n      mersenne.rand(max / options.precision, options.min / options.precision));\n    // Workaround problem in Float point arithmetics for e.g. 6681493 / 0.01\n    randomNumber = randomNumber / (1 / options.precision);\n\n    return randomNumber;\n\n  }': {
        item: [
          {
<<<<<<< HEAD
            type: 0,
            dataHash: 'silver',
=======
            type: 12,
            dataHash: 'Factors',
>>>>>>> master
            actions: [
              undefined,
              undefined
            ]
          },
          {
<<<<<<< HEAD
            type: 1,
            dataHash: 'Home Loan Account',
=======
            type: 0,
            dataHash: 'generating',
>>>>>>> master
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
<<<<<<< HEAD
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
=======
        totalStakes: '48092',
        totalUnstakes: '28241',
        context: {
          genesisTx: 'Home Loan Account',
          renaissanceTx: 'Generic Frozen Towels',
          genesisTime: '2019-03-11T02:40:29.193Z',
          renaissanceTime: '2019-03-11T02:40:29.193Z'
        }
      }
    },
    version: 'Personal Loan Account',
    dataVersion: 'Rustic Fresh Cheese',
    forgeAppHash: Uint8Array [
      147
    ],
    token: {
      name: 'open architecture',
      symbol: 'Missouri',
      unit: 'Ridges',
      description: 'proactive',
      icon: Uint8Array [
        129
      ],
      decimal: 26940,
      initialSupply: 74171,
      totalSupply: 29441,
      inflationRate: 87984
>>>>>>> master
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
<<<<<<< HEAD
    startDate: 'Avon',
    endDate: 'Director'
=======
    startDate: 'Nebraska',
    endDate: 'Avon'
>>>>>>> master
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
<<<<<<< HEAD
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
=======
  code: 16,
  forgeStatistics: {
    numBlocks: [
      65890,
      39052
    ],
    numTxs: [
      65613,
      74168
    ],
    numStakes: [
      '33298',
      '26887'
    ],
    numValidators: [
      29968,
      18251
    ],
    numAccountMigrateTxs: [
      4017,
      59234
    ],
    numCreateAssetTxs: [
      73302,
      75198
    ],
    numConsensusUpgradeTxs: [
      46111,
      55795
    ],
    numDeclareTxs: [
      17484,
      42094
    ],
    numDeclareFileTxs: [
      80831,
      2511
    ],
    numExchangeTxs: [
      65265,
      41182
    ],
    numStakeTxs: [
      55222,
      98725
    ],
    numSysUpgradeTxs: [
      99632,
      99222
    ],
    numTransferTxs: [
      23256,
      32908
    ],
    numUpdateAssetTxs: [
      69582,
      33919
    ],
    numConsumeAssetTxs: [
      87415,
      7439
    ],
    numPokeTxs: [
      17891,
      18710
>>>>>>> master
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
<<<<<<< HEAD
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
=======
  code: 20,
  netInfo: {
    listening: undefined,
    listeners: [
      'generating',
      'bypassing'
    ],
    nPeers: 31856,
    peers: [
      {
        id: 'Station',
        network: 'Health',
        consensusVersion: 'Electronics',
        moniker: 'invoice',
        ip: 'Savings Account',
        geoInfo: {
          city: 'parsing',
          country: 'Algeria',
          latitude: 89868.28,
          longitude: 15533.94
        }
      },
      {
        id: 'Lead',
        network: 'Small Soft Tuna',
        consensusVersion: 'Fantastic Soft Gloves',
        moniker: 'Sleek',
        ip: 'Customer-focused',
        geoInfo: {
          city: 'Identity',
          country: 'Operations',
          latitude: 73640.34,
          longitude: 4637.23
>>>>>>> master
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
<<<<<<< HEAD
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
=======
  code: 39,
  info: {
    id: 'SQL',
    network: 'Sleek',
    moniker: 'Money Market Account',
    consensusVersion: 'Auto Loan Account',
    synced: undefined,
    appHash: '8c96e45b2728120e30518b6eac0e08a09860e79b',
    blockHash: Uint8Array [
      15
    ],
    blockHeight: 40016,
    blockTime: '2019-03-11T02:40:29.195Z',
    address: 'efe69fa438ef97515877b2db2d83b82ccde97198',
    votingPower: 67514,
    totalTxs: 16235,
    version: 'South Carolina',
    dataVersion: 'Brook',
    forgeAppsVersion: {
      'function randomWord (type) {\n\n    var wordMethods = [\n    \'commerce.department\',\n    \'commerce.productName\',\n    \'commerce.productAdjective\',\n    \'commerce.productMaterial\',\n    \'commerce.product\',\n    \'commerce.color\',\n\n    \'company.catchPhraseAdjective\',\n    \'company.catchPhraseDescriptor\',\n    \'company.catchPhraseNoun\',\n    \'company.bsAdjective\',\n    \'company.bsBuzz\',\n    \'company.bsNoun\',\n    \'address.streetSuffix\',\n    \'address.county\',\n    \'address.country\',\n    \'address.state\',\n\n    \'finance.accountName\',\n    \'finance.transactionType\',\n    \'finance.currencyName\',\n\n    \'hacker.noun\',\n    \'hacker.verb\',\n    \'hacker.adjective\',\n    \'hacker.ingverb\',\n    \'hacker.abbreviation\',\n\n    \'name.jobDescriptor\',\n    \'name.jobArea\',\n    \'name.jobType\'];\n\n    // randomly pick from the many faker methods that can generate words\n    var randomWordMethod = faker.random.arrayElement(wordMethods);\n    return faker.fake(\'{{\' + randomWordMethod + \'}}\');\n\n  }': 'USB'
    },
    supportedTxs: [
      'Bacon',
      'neural'
    ],
    ip: 'SMS',
    geoInfo: {
      city: 'microchip',
      country: 'SSL',
      latitude: 99275.35,
      longitude: 57286.13
>>>>>>> master
    }
  }
}
});
```

### getStakeState

```js
const stream = client.getStakeState({
<<<<<<< HEAD
  address: 'e8753034e2794d42bea8871a44a7561df98bf466',
  keys: [
    'Soap',
    'Manager'
  ],
  height: 38551
=======
  address: '0eb984895d86f5364796d58646ad3dfdb980e8d3',
  keys: [
    'optical',
    'Mobility'
  ],
  height: 55765
>>>>>>> master
});

// output
{
<<<<<<< HEAD
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
=======
  code: 31,
  state: {
    address: '781d79e29ff4f05ca7d3962baa7552fe9bff2fe9',
    from: '04efb32c90b4ece953eebe240edfbb2b4c3d7e69',
    to: '4385bab36973e280954531cd2a1681b85d4c9107',
    balance: '64259',
    message: 'Garden',
    context: {
      genesisTx: 'Borders',
      renaissanceTx: 'Forward',
      genesisTime: '2019-03-11T02:40:29.195Z',
      renaissanceTime: '2019-03-11T02:40:29.195Z'
>>>>>>> master
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
<<<<<<< HEAD
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
=======
    cursor: 'Gloves',
    size: 39363,
    order: [
      {
        field: 'software',
        type: 'wireless'
      },
      {
        field: 'Avon',
        type: 'Internal'
>>>>>>> master
      }
    ]
  },
  addressFilter: {
<<<<<<< HEAD
    sender: 'microchip',
    receiver: 'deliverables',
=======
    sender: 'platforms',
    receiver: 'Cotton',
>>>>>>> master
    direction: 1
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
<<<<<<< HEAD
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
=======
  code: 37,
  page: {
    cursor: 'Beauty',
    next: undefined,
    total: 58840
  },
  stakes: [
    {
      address: '495c7cf7e1bf53367c56c6929e9728366eb3c029',
      balance: '89049',
      sender: 'Mobility',
      receiver: 'B2C',
      genesisTime: 'input',
      renaissanceTime: 'Marketing',
      message: 'synthesizing',
      type: 87915
    },
    {
      address: '244bf955035f263762386db4469c4994c8914793',
      balance: '64999',
      sender: 'Assimilated',
      receiver: 'Liaison',
      genesisTime: 'Orchard',
      renaissanceTime: 'generate',
      message: 'invoice',
      type: 43487
>>>>>>> master
    }
  ]
}
});
```

### getTopAccounts

```js
const result = await client.getTopAccounts({
  paging: {
<<<<<<< HEAD
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
=======
    cursor: 'Netherlands Antillian Guilder',
    size: 35831,
    order: [
      {
        field: 'deliver',
        type: 'primary'
      },
      {
        field: 'Auto Loan Account',
        type: 'envisioneer'
>>>>>>> master
      }
    ]
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
<<<<<<< HEAD
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
=======
  code: 38,
  page: {
    cursor: 'Marketing',
    next: undefined,
    total: 29919
  },
  accounts: [
    {
      address: '512cf77f73ccf047a1622347b5c5bd59d7dfb72e',
      balance: '15206',
      numAssets: 95986,
      numTxs: 2234,
      nonce: 8818,
      genesisTime: 'Direct',
      renaissanceTime: 'withdrawal',
      moniker: 'even-keeled',
      migratedFrom: 'world-class',
      migratedTo: 'Cheese',
      totalReceivedStakes: '19895',
      totalStakes: '36830',
      totalUnstakes: '38331',
      recentNumTxs: [
        78982,
        23935
      ]
    },
    {
      address: 'e2553cce6537334dd4f33cefba3f90afbfbd03c8',
      balance: '48521',
      numAssets: 56842,
      numTxs: 60929,
      nonce: 82636,
      genesisTime: 'New Jersey',
      renaissanceTime: 'Auto Loan Account',
      moniker: 'Gloves',
      migratedFrom: 'collaboration',
      migratedTo: 'next generation',
      totalReceivedStakes: '36899',
      totalStakes: '95917',
      totalUnstakes: '48636',
      recentNumTxs: [
        65586,
        56827
>>>>>>> master
      ]
    }
  ]
}
});
```

### getTx

```js
const stream = client.getTx({
<<<<<<< HEAD
  hash: '948f0f37e4f1abe9246d6dbfbd8ffb67437e5e9c'
=======
  hash: '93a46aec7e677ad83621351474abcd9cf9b3179e'
>>>>>>> master
});

// output
{
<<<<<<< HEAD
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
=======
  code: 41,
  info: {
    tx: {
      from: 'acafca20337f7d7923cb49fca51350e790e4f80f',
      nonce: 35393,
      signature: Uint8Array [
        55
      ],
      chainId: 'Awesome Soft Sausages',
      signatures: [
        {
          signer: 'Reactive',
          signature: Uint8Array [
            144
>>>>>>> master
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        {
<<<<<<< HEAD
          signer: 'SDD',
          signature: Uint8Array [
            27
=======
          signer: 'reintermediate',
          signature: Uint8Array [
            172
>>>>>>> master
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
<<<<<<< HEAD
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
=======
    height: 48203,
    index: 55384,
    hash: 'c919faa7719708594d74e84f1531f457bf136424',
    tags: [
      {
        key: Uint8Array [
          189
        ],
        value: Uint8Array [
          196
>>>>>>> master
        ]
      },
      {
        key: Uint8Array [
<<<<<<< HEAD
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
=======
          219
        ],
        value: Uint8Array [
          99
        ]
      }
    ],
    code: 2,
    time: '2019-03-11T02:40:29.196Z'
>>>>>>> master
  }
}
```

### getUnconfirmedTxs

```js
const result = await client.getUnconfirmedTxs({
<<<<<<< HEAD
  limit: 70345
=======
  limit: 97004
>>>>>>> master
});

// response is a stream
result.on('data', data => {
  // response data format
  {
<<<<<<< HEAD
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
=======
  code: 20,
  unconfirmedTxs: {
    nTxs: 91983,
    txs: [
      {
        from: '6675f83f32dd0647b54c3008e77a0b3ac17ad208',
        nonce: 18328,
        signature: Uint8Array [
          54
        ],
        chainId: 'Buckinghamshire',
        signatures: [
          {
            signer: 'District',
            signature: Uint8Array [
              115
>>>>>>> master
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
<<<<<<< HEAD
            signer: 'bandwidth',
            signature: Uint8Array [
              136
=======
            signer: 'Ergonomic',
            signature: Uint8Array [
              12
>>>>>>> master
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
<<<<<<< HEAD
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
=======
        from: '9a9bcda368c253a9cec0d87c7fba76e40c3efb81',
        nonce: 74760,
        signature: Uint8Array [
          200
        ],
        chainId: 'Democratic People\'s Republic of Korea',
        signatures: [
          {
            signer: 'calculate',
            signature: Uint8Array [
              105
>>>>>>> master
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
<<<<<<< HEAD
            signer: 'optimize',
            signature: Uint8Array [
              46
=======
            signer: 'Mouse',
            signature: Uint8Array [
              5
>>>>>>> master
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
<<<<<<< HEAD
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
=======
  code: 37,
  validatorsInfo: {
    blockHeight: 43547,
    validators: [
      {
        address: 'b268c5ba6345d3dc409f86d04ec99411e21dba26',
        pubKey: {
          type: 'relationships',
          data: Uint8Array [
            29
          ]
        },
        votingPower: 74665,
        proposerPriority: 'Solutions',
        name: 'index'
      },
      {
        address: 'bce8648a3dca0cc8ff6ef1b314abf7024019201a',
        pubKey: {
          type: 'Central',
          data: Uint8Array [
            119
          ]
        },
        votingPower: 20265,
        proposerPriority: 'Checking Account',
        name: 'port'
>>>>>>> master
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
<<<<<<< HEAD
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
=======
    cursor: 'Codes specifically reserved for testing purposes',
    size: 44176,
    order: [
      {
        field: 'Developer',
        type: 'Liaison'
      },
      {
        field: 'Unbranded Wooden Keyboard',
        type: 'payment'
      }
    ]
  },
  address: '2abea4fb4f4fa251b12f3e88a4677d48b6b45e02'
>>>>>>> master
});

// response is a stream
result.on('data', data => {
  // response data format
  {
<<<<<<< HEAD
  code: 36,
  page: {
    cursor: 'Afghani',
    next: undefined,
    total: 73947
=======
  code: 3,
  page: {
    cursor: 'Developer',
    next: undefined,
    total: 529
>>>>>>> master
  },
  transactions: [
    {
      consumeAsset: {
<<<<<<< HEAD
        asset: 'Electronics'
=======
        asset: 'Regional'
>>>>>>> master
      }
    },
    {
      consumeAsset: {
<<<<<<< HEAD
        asset: 'partnerships'
=======
        asset: 'CSS'
>>>>>>> master
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
<<<<<<< HEAD
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
=======
    cursor: 'Liechtenstein',
    size: 32755,
    order: [
      {
        field: 'Village',
        type: 'Cambridgeshire'
      },
      {
        field: 'EXE',
        type: 'maximized'
>>>>>>> master
      }
    ]
  },
  timeFilter: {
<<<<<<< HEAD
    startDateTime: 'Music',
    endDateTime: 'teal'
  },
  addressFilter: {
    sender: 'harness',
    receiver: 'Wisconsin',
=======
    startDateTime: 'Auto Loan Account',
    endDateTime: 'wireless'
  },
  addressFilter: {
    sender: 'Borders',
    receiver: 'pink',
>>>>>>> master
    direction: 2
  },
  typeFilter: {
    types: [
<<<<<<< HEAD
      'bluetooth',
      'Specialist'
=======
      'Interactions',
      'haptic'
>>>>>>> master
    ]
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
<<<<<<< HEAD
  code: 40,
  page: {
    cursor: 'Pants',
    next: undefined,
    total: 40112
=======
  code: 9,
  page: {
    cursor: 'Port',
    next: undefined,
    total: 53756
>>>>>>> master
  },
  transactions: [
    {
      consumeAsset: {
<<<<<<< HEAD
        asset: 'Trace'
=======
        asset: 'Producer'
>>>>>>> master
      }
    },
    {
      consumeAsset: {
<<<<<<< HEAD
        asset: 'bandwidth-monitored'
=======
        asset: 'Soap'
>>>>>>> master
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
<<<<<<< HEAD
  code: 24,
  address: '676db6fb720bdc5c5da211b777d9b6b7ec40aaa0'
=======
  code: 37,
  address: 'ffea46f4279abfe1ae040d293d9990f547ff12b0'
>>>>>>> master
}
```

### loadFile

```js
const stream = client.loadFile({
<<<<<<< HEAD
  hash: 'bc93b097fdc032380ba6269e9ba73dbc6e647af6'
=======
  hash: '477b4df37d05019c3bd6caaf99b1717e5561909e'
>>>>>>> master
});

// output
{
<<<<<<< HEAD
  code: 26,
  chunk: Uint8Array [
    176
=======
  code: 33,
  chunk: Uint8Array [
    69
>>>>>>> master
  ]
}
```

### loadWallet

```js
const result = await client.loadWallet({
<<<<<<< HEAD
  address: '07a93454e1df820fcd515d4b5b344ecaf55495a2',
  passphrase: 'Massachusetts'
=======
  address: '1c0ec0348cf1a7a82d446ea006c89dbe71e1a845',
  passphrase: 'generating'
>>>>>>> master
});

// response is a stream
result.on('data', data => {
  // response data format
  {
<<<<<<< HEAD
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
=======
  code: 16,
  token: 'Brunei Darussalam',
  wallet: {
    type: {
      pk: 1,
      hash: 6,
      address: 1,
      role: 1
    },
    sk: Uint8Array [
      122
    ],
    pk: Uint8Array [
      219
    ],
    address: '716fc1808717056c39d76c01ef12ebdb8da81126'
>>>>>>> master
  }
}
});
```

### multisig

```js
const result = await client.multisig({
  tx: {
<<<<<<< HEAD
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
=======
    from: '0862f1e188de0e6bd7d8a45923198290a7324d6e',
    nonce: 42454,
    signature: Uint8Array [
      114
    ],
    chainId: 'bleeding-edge',
    signatures: [
      {
        signer: 'Tugrik',
        signature: Uint8Array [
          247
>>>>>>> master
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
<<<<<<< HEAD
        signer: 'virtual',
        signature: Uint8Array [
          249
=======
        signer: 'blockchains',
        signature: Uint8Array [
          119
>>>>>>> master
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
<<<<<<< HEAD
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
=======
      pk: 0,
      hash: 7,
      address: 1,
      role: 1
    },
    sk: Uint8Array [
      12
    ],
    pk: Uint8Array [
      83
    ],
    address: '96e84e0b93b916bbc9641cfb4e33f918b83b476c'
  },
  token: 'Generic Metal Car'
>>>>>>> master
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 10,
  tx: {
<<<<<<< HEAD
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
=======
    from: '1f199b20ab1620a2e2e23c45c6bdeecbb0b5dd8a',
    nonce: 83562,
    signature: Uint8Array [
      122
    ],
    chainId: 'utilize',
    signatures: [
      {
        signer: 'Kids',
        signature: Uint8Array [
          115
>>>>>>> master
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
<<<<<<< HEAD
        signer: 'bluetooth',
        signature: Uint8Array [
          102
=======
        signer: 'Texas',
        signature: Uint8Array [
          168
>>>>>>> master
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
<<<<<<< HEAD
  hash: '250ab8a1b164091fa19a6178b3e4df5297ad153e'
=======
  hash: '7bea9fd316a44fc6a799262080156d0f8ab83a26'
>>>>>>> master
});

// response is a stream
result.on('data', data => {
  // response data format
  {
<<<<<<< HEAD
  code: 24
=======
  code: 6
>>>>>>> master
}
});
```

### process

```js
const stream = client.process({
  verifyTx: {
    tx: {
<<<<<<< HEAD
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
=======
      from: 'f69976df990295f856965dd7c6a795d7da0afcd0',
      nonce: 40926,
      signature: Uint8Array [
        124
      ],
      chainId: 'gold',
      signatures: [
        {
          signer: 'Manager',
          signature: Uint8Array [
            89
>>>>>>> master
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        {
<<<<<<< HEAD
          signer: 'Ford',
          signature: Uint8Array [
            1
=======
          signer: 'Automated',
          signature: Uint8Array [
            164
>>>>>>> master
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
<<<<<<< HEAD
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
=======
        balance: '60037',
        nonce: 6541,
        numTxs: 46818,
        address: 'fdd815b7a1bd02dc9b1590468289934670612be1',
        pk: Uint8Array [
          126
        ],
        type: {
          pk: 0,
          hash: 7,
          address: 1,
          role: 2
        },
        moniker: 'program',
        context: {
          genesisTx: 'Borders',
          renaissanceTx: 'Architect',
          genesisTime: '2019-03-11T02:40:29.199Z',
          renaissanceTime: '2019-03-11T02:40:29.199Z'
        },
        issuer: 'Steel',
        migratedTo: [
          'magenta',
          'Washington'
        ],
        migratedFrom: [
          'Metal',
          'Direct'
        ],
        numAssets: 59688,
        stake: {
          totalStakes: '30936',
          totalUnstakes: '94919',
          totalReceivedStakes: '10076',
          recentStakes: {
            items: [
              Uint8Array [
                75
              ],
              Uint8Array [
                2
              ]
            ],
            typeUrl: 'Leone',
            maxItems: 34874,
>>>>>>> master
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
<<<<<<< HEAD
                80
              ],
              Uint8Array [
                29
              ]
            ],
            typeUrl: 'Intelligent',
            maxItems: 37780,
=======
                71
              ],
              Uint8Array [
                47
              ]
            ],
            typeUrl: 'International',
            maxItems: 56288,
>>>>>>> master
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
<<<<<<< HEAD
              166
            ],
            Uint8Array [
              62
            ]
          ],
          typeUrl: 'GB',
          maxItems: 48576,
=======
              183
            ],
            Uint8Array [
              185
            ]
          ],
          typeUrl: 'Secured',
          maxItems: 18007,
>>>>>>> master
          circular: undefined,
          fifo: undefined
        },
        poke: {
<<<<<<< HEAD
          dailyLimit: '86589',
          leftover: '27401',
          amount: '88852'
=======
          dailyLimit: '27914',
          leftover: '29528',
          amount: '6310'
>>>>>>> master
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
<<<<<<< HEAD
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
=======
        balance: '94615',
        nonce: 32254,
        numTxs: 17827,
        address: '0c2031f52059b8020275d11187946cdc8f05bb9d',
        pk: Uint8Array [
          91
        ],
        type: {
          pk: 0,
          hash: 0,
          address: 1,
          role: 5
        },
        moniker: 'Bedfordshire',
        context: {
          genesisTx: 'payment',
          renaissanceTx: 'Meadow',
          genesisTime: '2019-03-11T02:40:29.199Z',
          renaissanceTime: '2019-03-11T02:40:29.199Z'
        },
        issuer: 'zero administration',
        migratedTo: [
          'United Arab Emirates',
          'open architecture'
        ],
        migratedFrom: [
          'invoice',
          'hacking'
        ],
        numAssets: 70512,
        stake: {
          totalStakes: '2939',
          totalUnstakes: '35929',
          totalReceivedStakes: '8671',
          recentStakes: {
            items: [
              Uint8Array [
                189
              ],
              Uint8Array [
                179
              ]
            ],
            typeUrl: 'Oman',
            maxItems: 35690,
>>>>>>> master
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
<<<<<<< HEAD
                235
              ],
              Uint8Array [
                84
              ]
            ],
            typeUrl: 'Connecticut',
            maxItems: 92030,
=======
                89
              ],
              Uint8Array [
                135
              ]
            ],
            typeUrl: 'Creative',
            maxItems: 40691,
>>>>>>> master
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
<<<<<<< HEAD
              54
            ],
            Uint8Array [
              99
            ]
          ],
          typeUrl: 'Vermont',
          maxItems: 57945,
=======
              71
            ],
            Uint8Array [
              223
            ]
          ],
          typeUrl: 'methodologies',
          maxItems: 6903,
>>>>>>> master
          circular: undefined,
          fifo: undefined
        },
        poke: {
<<<<<<< HEAD
          dailyLimit: '42012',
          leftover: '68046',
          amount: '76060'
=======
          dailyLimit: '90224',
          leftover: '28457',
          amount: '99484'
>>>>>>> master
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    assets: [
      {
<<<<<<< HEAD
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
=======
        address: 'a9f5d91846fb324ef6817c92561d151848484d6d',
        owner: 'Senior',
        moniker: 'Plastic',
        readonly: undefined,
        transferrable: undefined,
        ttl: 11405,
        consumedTime: '2019-03-11T02:40:29.200Z',
        issuer: 'International',
        stake: {
          totalStakes: '36596',
          totalUnstakes: '68340',
          totalReceivedStakes: '93435',
          recentStakes: {
            items: [
              Uint8Array [
                105
              ],
              Uint8Array [
                109
              ]
            ],
            typeUrl: 'Drive',
            maxItems: 14052,
>>>>>>> master
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
<<<<<<< HEAD
                66
              ],
              Uint8Array [
                174
              ]
            ],
            typeUrl: 'Street',
            maxItems: 56940,
=======
                183
              ],
              Uint8Array [
                87
              ]
            ],
            typeUrl: 'Rhode Island',
            maxItems: 52685,
>>>>>>> master
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
<<<<<<< HEAD
          genesisTx: 'Mouse',
          renaissanceTx: 'Assistant',
          genesisTime: '2019-03-12T07:14:05.387Z',
          renaissanceTime: '2019-03-12T07:14:05.387Z'
=======
          genesisTx: 'Table',
          renaissanceTx: 'seize',
          genesisTime: '2019-03-11T02:40:29.200Z',
          renaissanceTime: '2019-03-11T02:40:29.200Z'
>>>>>>> master
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
<<<<<<< HEAD
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
=======
        address: '9963bdf0ebe8eac5226ecac8f65dafe2e169e127',
        owner: 'attitude',
        moniker: 'bus',
        readonly: undefined,
        transferrable: undefined,
        ttl: 71046,
        consumedTime: '2019-03-11T02:40:29.200Z',
        issuer: 'hard drive',
        stake: {
          totalStakes: '13074',
          totalUnstakes: '73298',
          totalReceivedStakes: '72813',
          recentStakes: {
            items: [
              Uint8Array [
                121
              ],
              Uint8Array [
                183
              ]
            ],
            typeUrl: 'card',
            maxItems: 92297,
>>>>>>> master
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
<<<<<<< HEAD
                87
              ],
              Uint8Array [
                216
              ]
            ],
            typeUrl: 'tan',
            maxItems: 92599,
=======
                195
              ],
              Uint8Array [
                161
              ]
            ],
            typeUrl: 'Fresh',
            maxItems: 39424,
>>>>>>> master
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
<<<<<<< HEAD
          genesisTx: 'green',
          renaissanceTx: 'Rustic Wooden Cheese',
          genesisTime: '2019-03-12T07:14:05.387Z',
          renaissanceTime: '2019-03-12T07:14:05.387Z'
=======
          genesisTx: 'AI',
          renaissanceTx: 'Fantastic',
          genesisTime: '2019-03-11T02:40:29.200Z',
          renaissanceTime: '2019-03-11T02:40:29.200Z'
>>>>>>> master
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    stakes: [
      {
<<<<<<< HEAD
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
=======
        address: 'c93e4ae460c92816c7acb352ad926ce1d46e664e',
        from: '5ee7a43e1198ce3deb0d7485a33c4153be7d3a3d',
        to: '8f037b465fa5b4d7c3172e302b9842aafe8f356f',
        balance: '28709',
        message: 'asynchronous',
        context: {
          genesisTx: 'Falkland Islands (Malvinas)',
          renaissanceTx: 'Democratic People\'s Republic of Korea',
          genesisTime: '2019-03-11T02:40:29.200Z',
          renaissanceTime: '2019-03-11T02:40:29.200Z'
>>>>>>> master
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
<<<<<<< HEAD
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
=======
        address: '05d4bd9b6d1721e42353f860a9052bf507b01441',
        from: 'e3d34e05e8420f4ae8f6778c415a7d01192093d1',
        to: 'ca6bfc62d5d4ab267265d8d2a635ef0d8c45b37f',
        balance: '8630',
        message: 'web services',
        context: {
          genesisTx: 'orchestration',
          renaissanceTx: 'model',
          genesisTime: '2019-03-11T02:40:29.200Z',
          renaissanceTime: '2019-03-11T02:40:29.200Z'
>>>>>>> master
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    context: {
<<<<<<< HEAD
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
=======
      txHash: 'd31343c8c98542e9cb03c52c59e4af79b484e9ea',
      blockHeight: 11106,
      blockTime: '2019-03-11T02:40:29.200Z',
      totalTxs: 58884,
      txStatistics: {
        numAccountMigrateTxs: 88308,
        numCreateAssetTxs: 2505,
        numConsensusUpgradeTxs: 4028,
        numDeclareTxs: 31625,
        numDeclareFileTxs: 49295,
        numExchangeTxs: 13215,
        numStakeTxs: 12642,
        numSysUpgradeTxs: 81044,
        numTransferTxs: 13407,
        numUpdateAssetTxs: 71130,
        numConsumeAssetTxs: 65675,
        numPokeTxs: 95433
      },
      txIndex: 13837,
      lastBlockTime: '2019-03-11T02:40:29.200Z'
    },
    appState: {
      address: '4fe4433519333a51f0b33c2f879f1db02503d263',
      consensus: {
        maxBytes: 10581,
        maxGas: 31951,
        maxValidators: 58796,
        maxCandidates: 92077,
        pubKeyTypes: [
          'Camp',
          'Public-key'
        ],
        validators: [
          {
            address: 'f7091e0c4f40ddbdb80c1363c9d39b05e377450e',
            power: 16565
          },
          {
            address: '45c4144c971d605a46baf1f632e25799e6e67799',
            power: 31206
>>>>>>> master
          }
        ],
        validatorChanged: undefined,
        paramChanged: undefined
      },
      tasks: {
        'function (options) {\n\n    if (typeof options === "number") {\n      options = {\n        max: options\n      };\n    }\n\n    options = options || {};\n\n    if (typeof options.min === "undefined") {\n      options.min = 0;\n    }\n\n    if (typeof options.max === "undefined") {\n      options.max = 99999;\n    }\n    if (typeof options.precision === "undefined") {\n      options.precision = 1;\n    }\n\n    // Make the range inclusive of the max value\n    var max = options.max;\n    if (max >= 0) {\n      max += options.precision;\n    }\n\n    var randomNumber = Math.floor(\n      mersenne.rand(max / options.precision, options.min / options.precision));\n    // Workaround problem in Float point arithmetics for e.g. 6681493 / 0.01\n    randomNumber = randomNumber / (1 / options.precision);\n\n    return randomNumber;\n\n  }': {
          item: [
            {
<<<<<<< HEAD
              type: 11,
              dataHash: 'Tasty',
=======
              type: 3,
              dataHash: 'Handmade Metal Table',
>>>>>>> master
              actions: [
                undefined,
                undefined
              ]
            },
            {
<<<<<<< HEAD
              type: 13,
              dataHash: 'Tuna',
=======
              type: 10,
              dataHash: 'primary',
>>>>>>> master
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
<<<<<<< HEAD
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
=======
          totalStakes: '32445',
          totalUnstakes: '51122',
          context: {
            genesisTx: 'Underpass',
            renaissanceTx: 'synthesize',
            genesisTime: '2019-03-11T02:40:29.200Z',
            renaissanceTime: '2019-03-11T02:40:29.200Z'
          }
        }
      },
      version: 'Bypass',
      dataVersion: 'Cambridgeshire',
>>>>>>> master
      forgeAppHash: Uint8Array [
        185
      ],
      token: {
<<<<<<< HEAD
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
=======
        name: 'Handcrafted',
        symbol: 'bandwidth',
        unit: 'Dynamic',
        description: 'Awesome',
        icon: Uint8Array [
          148
        ],
        decimal: 60094,
        initialSupply: 17034,
        totalSupply: 61314,
        inflationRate: 695
>>>>>>> master
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
<<<<<<< HEAD
    code: 38
=======
    code: 30
>>>>>>> master
  }
}
```

### processOne

```js
const result = await client.processOne({
  verifyTx: {
    tx: {
<<<<<<< HEAD
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
=======
      from: 'ee4d630e7bf5bc920322a6677fa946b2e2f604c8',
      nonce: 34244,
      signature: Uint8Array [
        45
      ],
      chainId: 'silver',
      signatures: [
        {
          signer: 'parsing',
          signature: Uint8Array [
            231
>>>>>>> master
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        {
<<<<<<< HEAD
          signer: 'Polarised',
          signature: Uint8Array [
            154
=======
          signer: 'experiences',
          signature: Uint8Array [
            92
>>>>>>> master
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
<<<<<<< HEAD
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
=======
        balance: '13932',
        nonce: 77605,
        numTxs: 10966,
        address: '6a058040714295cc815d39e406e76e6f1f2b588c',
        pk: Uint8Array [
          154
        ],
        type: {
          pk: 1,
          hash: 7,
          address: 1,
          role: 4
        },
        moniker: 'Games',
        context: {
          genesisTx: 'Guinea',
          renaissanceTx: 'directional',
          genesisTime: '2019-03-11T02:40:29.201Z',
          renaissanceTime: '2019-03-11T02:40:29.201Z'
        },
        issuer: 'Corporate',
        migratedTo: [
          'Washington',
          'alarm'
        ],
        migratedFrom: [
          'Decentralized',
          'Data'
        ],
        numAssets: 11459,
        stake: {
          totalStakes: '27527',
          totalUnstakes: '53963',
          totalReceivedStakes: '60966',
          recentStakes: {
            items: [
              Uint8Array [
                74
              ],
              Uint8Array [
                161
              ]
            ],
            typeUrl: 'neural',
            maxItems: 26257,
>>>>>>> master
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
<<<<<<< HEAD
                46
              ],
              Uint8Array [
                166
              ]
            ],
            typeUrl: 'system-worthy',
            maxItems: 14896,
=======
                151
              ],
              Uint8Array [
                227
              ]
            ],
            typeUrl: 'Factors',
            maxItems: 19445,
>>>>>>> master
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
<<<<<<< HEAD
              202
            ],
            Uint8Array [
              95
            ]
          ],
          typeUrl: 'orchestration',
          maxItems: 4924,
=======
              171
            ],
            Uint8Array [
              165
            ]
          ],
          typeUrl: 'Cambridgeshire',
          maxItems: 71884,
>>>>>>> master
          circular: undefined,
          fifo: undefined
        },
        poke: {
<<<<<<< HEAD
          dailyLimit: '83136',
          leftover: '94873',
          amount: '25401'
=======
          dailyLimit: '94719',
          leftover: '36960',
          amount: '27158'
>>>>>>> master
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
<<<<<<< HEAD
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
=======
        balance: '89194',
        nonce: 25536,
        numTxs: 4995,
        address: '6b3c69304be092bec3e44ccb3ee8713562a1847a',
        pk: Uint8Array [
          11
        ],
        type: {
          pk: 1,
          hash: 13,
          address: 0,
          role: 2
        },
        moniker: 'withdrawal',
        context: {
          genesisTx: 'National',
          renaissanceTx: 'Awesome Soft Chicken',
          genesisTime: '2019-03-11T02:40:29.201Z',
          renaissanceTime: '2019-03-11T02:40:29.201Z'
        },
        issuer: 'Senior',
        migratedTo: [
          'Incredible Granite Towels',
          'Kwacha'
        ],
        migratedFrom: [
          'Games',
          'revolutionize'
        ],
        numAssets: 51032,
        stake: {
          totalStakes: '92125',
          totalUnstakes: '10204',
          totalReceivedStakes: '55791',
          recentStakes: {
            items: [
              Uint8Array [
                92
              ],
              Uint8Array [
                28
              ]
            ],
            typeUrl: 'transmit',
            maxItems: 35050,
>>>>>>> master
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
<<<<<<< HEAD
                206
              ],
              Uint8Array [
                239
              ]
            ],
            typeUrl: 'Soft',
            maxItems: 51455,
=======
                116
              ],
              Uint8Array [
                59
              ]
            ],
            typeUrl: 'Refined Granite Bike',
            maxItems: 23907,
>>>>>>> master
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
<<<<<<< HEAD
              196
            ],
            Uint8Array [
              227
            ]
          ],
          typeUrl: 'e-business',
          maxItems: 21003,
=======
              88
            ],
            Uint8Array [
              32
            ]
          ],
          typeUrl: 'feed',
          maxItems: 94260,
>>>>>>> master
          circular: undefined,
          fifo: undefined
        },
        poke: {
<<<<<<< HEAD
          dailyLimit: '41061',
          leftover: '56692',
          amount: '80298'
=======
          dailyLimit: '79360',
          leftover: '25147',
          amount: '77966'
>>>>>>> master
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    assets: [
      {
<<<<<<< HEAD
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
=======
        address: '282d1b01ab588dc93435a11ed9afdf7364949dd3',
        owner: 'reboot',
        moniker: 'compress',
        readonly: undefined,
        transferrable: undefined,
        ttl: 74874,
        consumedTime: '2019-03-11T02:40:29.202Z',
        issuer: 'Realigned',
        stake: {
          totalStakes: '33921',
          totalUnstakes: '27988',
          totalReceivedStakes: '43930',
          recentStakes: {
            items: [
              Uint8Array [
                40
              ],
              Uint8Array [
                52
              ]
            ],
            typeUrl: 'Berkshire',
            maxItems: 48075,
>>>>>>> master
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
<<<<<<< HEAD
                47
              ],
              Uint8Array [
                10
              ]
            ],
            typeUrl: 'Virginia',
            maxItems: 47252,
=======
                20
              ],
              Uint8Array [
                244
              ]
            ],
            typeUrl: 'value-added',
            maxItems: 51490,
>>>>>>> master
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
<<<<<<< HEAD
          genesisTx: 'Branding',
          renaissanceTx: 'SDD',
          genesisTime: '2019-03-12T07:14:05.389Z',
          renaissanceTime: '2019-03-12T07:14:05.389Z'
=======
          genesisTx: 'Small Steel Bike',
          renaissanceTx: 'Maldives',
          genesisTime: '2019-03-11T02:40:29.202Z',
          renaissanceTime: '2019-03-11T02:40:29.202Z'
>>>>>>> master
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
<<<<<<< HEAD
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
=======
        address: '7364504e86725e57b166c66e093ce2c684cfafd3',
        owner: 'Indiana',
        moniker: 'models',
        readonly: undefined,
        transferrable: undefined,
        ttl: 82228,
        consumedTime: '2019-03-11T02:40:29.202Z',
        issuer: 'cross-media',
        stake: {
          totalStakes: '30565',
          totalUnstakes: '74735',
          totalReceivedStakes: '6072',
>>>>>>> master
          recentStakes: {
            items: [
              Uint8Array [
                240
              ],
              Uint8Array [
<<<<<<< HEAD
                7
              ]
            ],
            typeUrl: 'Cheese',
            maxItems: 13201,
=======
                11
              ]
            ],
            typeUrl: 'generate',
            maxItems: 7969,
>>>>>>> master
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
<<<<<<< HEAD
                180
              ],
              Uint8Array [
                1
              ]
            ],
            typeUrl: 'panel',
            maxItems: 69975,
=======
                152
              ],
              Uint8Array [
                160
              ]
            ],
            typeUrl: 'solid state',
            maxItems: 82086,
>>>>>>> master
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
<<<<<<< HEAD
          genesisTx: 'Health',
          renaissanceTx: 'primary',
          genesisTime: '2019-03-12T07:14:05.389Z',
          renaissanceTime: '2019-03-12T07:14:05.389Z'
=======
          genesisTx: 'secured line',
          renaissanceTx: 'integrated',
          genesisTime: '2019-03-11T02:40:29.202Z',
          renaissanceTime: '2019-03-11T02:40:29.202Z'
>>>>>>> master
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    stakes: [
      {
<<<<<<< HEAD
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
=======
        address: '4d555f2a96fcd71cab0af9d6cc05e9a2c7bf3d22',
        from: '1c6819d5c75fe8ff8e99f3c0c654234ce960d2a6',
        to: '48c5cc2e9f9312cbe579f07671acc3006e5e6ad7',
        balance: '72914',
        message: 'SQL',
        context: {
          genesisTx: 'HDD',
          renaissanceTx: 'Savings Account',
          genesisTime: '2019-03-11T02:40:29.202Z',
          renaissanceTime: '2019-03-11T02:40:29.202Z'
>>>>>>> master
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
<<<<<<< HEAD
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
=======
        address: 'ff7d1b1f3cfa96c624d549da4c44e90c1145ed4d',
        from: '235c385b5ab61f1f37a75278056959f81646944f',
        to: 'd4b184d449711ff73747adbb6ef87cf0b86d6d07',
        balance: '61361',
        message: 'innovative',
        context: {
          genesisTx: 'Berkshire',
          renaissanceTx: 'portals',
          genesisTime: '2019-03-11T02:40:29.202Z',
          renaissanceTime: '2019-03-11T02:40:29.202Z'
>>>>>>> master
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    context: {
<<<<<<< HEAD
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
=======
      txHash: 'ffe2523b08fa2000e7141adacba2601563267532',
      blockHeight: 3366,
      blockTime: '2019-03-11T02:40:29.202Z',
      totalTxs: 24095,
      txStatistics: {
        numAccountMigrateTxs: 20558,
        numCreateAssetTxs: 32993,
        numConsensusUpgradeTxs: 93729,
        numDeclareTxs: 24999,
        numDeclareFileTxs: 34843,
        numExchangeTxs: 20243,
        numStakeTxs: 11067,
        numSysUpgradeTxs: 14664,
        numTransferTxs: 54584,
        numUpdateAssetTxs: 98211,
        numConsumeAssetTxs: 4727,
        numPokeTxs: 87409
      },
      txIndex: 98498,
      lastBlockTime: '2019-03-11T02:40:29.202Z'
    },
    appState: {
      address: '76455344e546da0d3c485a2034fad62b0c3d76cb',
      consensus: {
        maxBytes: 58567,
        maxGas: 34993,
        maxValidators: 86933,
        maxCandidates: 60996,
        pubKeyTypes: [
          'client-server',
          'Pre-emptive'
        ],
        validators: [
          {
            address: 'd3262fad473d8c23846b8cb3dff61254f5e46714',
            power: 66306
          },
          {
            address: '8cd71abab22e5c783c9d15cb39eca5547dc65432',
            power: 23325
>>>>>>> master
          }
        ],
        validatorChanged: undefined,
        paramChanged: undefined
      },
      tasks: {
        'function (options) {\n\n    if (typeof options === "number") {\n      options = {\n        max: options\n      };\n    }\n\n    options = options || {};\n\n    if (typeof options.min === "undefined") {\n      options.min = 0;\n    }\n\n    if (typeof options.max === "undefined") {\n      options.max = 99999;\n    }\n    if (typeof options.precision === "undefined") {\n      options.precision = 1;\n    }\n\n    // Make the range inclusive of the max value\n    var max = options.max;\n    if (max >= 0) {\n      max += options.precision;\n    }\n\n    var randomNumber = Math.floor(\n      mersenne.rand(max / options.precision, options.min / options.precision));\n    // Workaround problem in Float point arithmetics for e.g. 6681493 / 0.01\n    randomNumber = randomNumber / (1 / options.precision);\n\n    return randomNumber;\n\n  }': {
          item: [
            {
<<<<<<< HEAD
              type: 13,
              dataHash: 'global',
=======
              type: 11,
              dataHash: 'Money Market Account',
>>>>>>> master
              actions: [
                undefined,
                undefined
              ]
            },
            {
<<<<<<< HEAD
              type: 14,
              dataHash: 'indexing',
=======
              type: 12,
              dataHash: 'Web',
>>>>>>> master
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
<<<<<<< HEAD
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
=======
          totalStakes: '58851',
          totalUnstakes: '24951',
          context: {
            genesisTx: 'optical',
            renaissanceTx: 'Generic',
            genesisTime: '2019-03-11T02:40:29.202Z',
            renaissanceTime: '2019-03-11T02:40:29.202Z'
          }
        }
      },
      version: 'Saint Helena Pound',
      dataVersion: 'contingency',
      forgeAppHash: Uint8Array [
        133
      ],
      token: {
        name: 'Officer',
        symbol: 'Bedfordshire',
        unit: 'Industrial',
        description: 'reboot',
        icon: Uint8Array [
          158
        ],
        decimal: 42932,
        initialSupply: 47264,
        totalSupply: 8075,
        inflationRate: 11002
>>>>>>> master
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
<<<<<<< HEAD
    code: 3
=======
    code: 17
>>>>>>> master
  }
}
});
```

### recoverWallet

```js
const result = await client.recoverWallet({
  data: Uint8Array [
<<<<<<< HEAD
    71
  ],
  type: {
    pk: 0,
    hash: 13,
=======
    36
  ],
  type: {
    pk: 1,
    hash: 6,
>>>>>>> master
    address: 1,
    role: 5
  },
<<<<<<< HEAD
  passphrase: 'bypass',
  moniker: 'seamless'
=======
  passphrase: 'deliverables',
  moniker: 'Zambian Kwacha'
>>>>>>> master
});

// response is a stream
result.on('data', data => {
  // response data format
  {
<<<<<<< HEAD
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
=======
  code: 40,
  token: 'Frozen',
  wallet: {
    type: {
      pk: 0,
      hash: 1,
      address: 1,
      role: 2
    },
    sk: Uint8Array [
      253
    ],
    pk: Uint8Array [
      145
    ],
    address: 'f3cb2010bcdc3c9e6503ec1b30aab330331b4fc0'
>>>>>>> master
  }
}
});
```

### removeWallet

```js
const result = await client.removeWallet({
<<<<<<< HEAD
  address: '8dfa009336dc40fcbd6c4e0170108ee6ce1a5edd'
=======
  address: 'fdef4f03cd3ddc5efed8acb4fce817d1f5c51762'
>>>>>>> master
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 30
}
});
```

### search

```js
const result = await client.search({
<<<<<<< HEAD
  key: 'Tunisia',
  value: 'orchestrate'
=======
  key: 'directional',
  value: 'Gorgeous Granite Chair'
>>>>>>> master
});

// response is a stream
result.on('data', data => {
  // response data format
  {
<<<<<<< HEAD
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
=======
  code: 38,
  txs: [
    {
      tx: {
        from: '5c47f2110ffee508169f5bbc173179741650e33f',
        nonce: 90313,
        signature: Uint8Array [
          197
        ],
        chainId: 'Burundi Franc',
        signatures: [
          {
            signer: 'engage',
            signature: Uint8Array [
              75
>>>>>>> master
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
<<<<<<< HEAD
            signer: 'Directives',
            signature: Uint8Array [
              32
=======
            signer: 'Bacon',
            signature: Uint8Array [
              44
>>>>>>> master
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
<<<<<<< HEAD
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
=======
      height: 90869,
      index: 87170,
      hash: 'dccc941f57be2a8baebad05980ece15cfbf017a0',
      tags: [
        {
          key: Uint8Array [
            29
          ],
          value: Uint8Array [
            77
>>>>>>> master
          ]
        },
        {
          key: Uint8Array [
<<<<<<< HEAD
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
=======
            61
          ],
          value: Uint8Array [
            123
          ]
        }
      ],
      code: 30,
      time: '2019-03-11T02:40:29.203Z'
    },
    {
      tx: {
        from: '694ac952ffd0bae180fc3d834260d325e36167f6',
        nonce: 80281,
        signature: Uint8Array [
          210
        ],
        chainId: 'Concrete',
        signatures: [
          {
            signer: 'Electronics',
            signature: Uint8Array [
              60
>>>>>>> master
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
<<<<<<< HEAD
            signer: 'Wooden',
            signature: Uint8Array [
              134
=======
            signer: 'Ergonomic Soft Car',
            signature: Uint8Array [
              29
>>>>>>> master
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
<<<<<<< HEAD
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
=======
      height: 28654,
      index: 48928,
      hash: 'd39c0a815d38150165d738fc372e8d6ab851da13',
      tags: [
        {
          key: Uint8Array [
            186
          ],
          value: Uint8Array [
            11
>>>>>>> master
          ]
        },
        {
          key: Uint8Array [
<<<<<<< HEAD
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
=======
            176
          ],
          value: Uint8Array [
            205
          ]
        }
      ],
      code: 26,
      time: '2019-03-11T02:40:29.204Z'
>>>>>>> master
    }
  ]
}
});
```

### sendTx

```js
const result = await client.sendTx({
  tx: {
<<<<<<< HEAD
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
=======
    from: '8a91abbea63c94cc9431725a979aa32e2a70a082',
    nonce: 9193,
    signature: Uint8Array [
      141
    ],
    chainId: 'challenge',
    signatures: [
      {
        signer: 'foreground',
        signature: Uint8Array [
          227
>>>>>>> master
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
<<<<<<< HEAD
        signer: 'Sleek Metal Shoes',
        signature: Uint8Array [
          24
=======
        signer: 'Intelligent',
        signature: Uint8Array [
          64
>>>>>>> master
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
<<<<<<< HEAD
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
=======
      address: 0,
      role: 5
    },
    sk: Uint8Array [
      49
    ],
    pk: Uint8Array [
      172
    ],
    address: '3b759110bc121ae92041aabd4e0672294d962f97'
  },
  token: 'North Dakota',
>>>>>>> master
  commit: undefined
});

// response is a stream
result.on('data', data => {
  // response data format
  {
<<<<<<< HEAD
  code: 41,
  hash: '12e571c8287d404f4c42a59058459d34b8f05adf'
=======
  code: 20,
  hash: 'd6948c4e6581fe712e799a482e44dd9bc7327569'
>>>>>>> master
}
});
```

### signData

```js
const result = await client.signData({
  data: Uint8Array [
<<<<<<< HEAD
    26
=======
    121
>>>>>>> master
  ],
  wallet: {
    type: {
      pk: 0,
      hash: 0,
      address: 0,
<<<<<<< HEAD
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
=======
      role: 1
    },
    sk: Uint8Array [
      217
    ],
    pk: Uint8Array [
      95
    ],
    address: '6af644c95a110a50eaed46016673f2e6848f011a'
  },
  token: 'virtual'
>>>>>>> master
});

// response is a stream
result.on('data', data => {
  // response data format
  {
<<<<<<< HEAD
  code: 3,
  signature: Uint8Array [
    162
=======
  code: 20,
  signature: Uint8Array [
    72
>>>>>>> master
  ]
}
});
```

### storeFile

```js
const result = await client.storeFile({
  chunk: Uint8Array [
<<<<<<< HEAD
    17
=======
    207
>>>>>>> master
  ]
});

// response is a stream
result.on('data', data => {
  // response data format
  {
<<<<<<< HEAD
  code: 36,
  hash: '364c0ff2b8ef55cca5e70e39dadb392a4cd0e82a'
=======
  code: 34,
  hash: '2f27306c00419a5906975b06be51906b3b6b8eed'
>>>>>>> master
}
});
```

### subscribe

```js
const stream = client.subscribe({
<<<<<<< HEAD
  type: 26,
  filter: 'Berkshire'
=======
  type: 4,
  filter: 'Synchronised'
>>>>>>> master
});

// output
{
<<<<<<< HEAD
  topic: 'US Dollar'
=======
  topic: 'Consultant'
>>>>>>> master
}
```

### unsubscribe

```js
const result = await client.unsubscribe({
<<<<<<< HEAD
  topic: 'harness'
=======
  topic: 'Investment Account'
>>>>>>> master
});

// response is a stream
result.on('data', data => {
  // response data format
  {
<<<<<<< HEAD
  code: 4
=======
  code: 16
>>>>>>> master
}
});
```


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |
