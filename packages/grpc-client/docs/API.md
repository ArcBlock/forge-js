# API Documentation


## Table of Contents

* [Enums](#enums)
  * [StatusCode](#statuscode)
  * [KeyType](#keytype)
  * [HashType](#hashtype)
  * [EncodingType](#encodingtype)
  * [RoleType](#roletype)
  * [UpgradeType](#upgradetype)
  * [UpgradeAction](#upgradeaction)
  * [StateType](#statetype)
  * [StakeType](#staketype)
  * [ProtocolStatus](#protocolstatus)
  * [Direction](#direction)
  * [Validity](#validity)
  * [SupportedTxs](#supportedtxs)
  * [SupportedStakes](#supportedstakes)
* [RPC Methods](#rpc-methods)
  * [createTx](#createtx)
  * [createWallet](#createwallet)
  * [declareNode](#declarenode)
  * [getAccountState](#getaccountstate)
  * [getAssetState](#getassetstate)
  * [getBlock](#getblock)
  * [getBlocks](#getblocks)
  * [getChainInfo](#getchaininfo)
  * [getConfig](#getconfig)
  * [getDelegateState](#getdelegatestate)
  * [getForgeState](#getforgestate)
  * [getForgeStats](#getforgestats)
  * [getHealthStatus](#gethealthstatus)
  * [getNetInfo](#getnetinfo)
  * [getNodeInfo](#getnodeinfo)
  * [getProtocolState](#getprotocolstate)
  * [getStakeState](#getstakestate)
  * [getSwapState](#getswapstate)
  * [getTetherState](#gettetherstate)
  * [getTx](#gettx)
  * [getUnconfirmedTxs](#getunconfirmedtxs)
  * [getValidatorsInfo](#getvalidatorsinfo)
  * [listAccount](#listaccount)
  * [listAssetTransactions](#listassettransactions)
  * [listAssets](#listassets)
  * [listBlocks](#listblocks)
  * [listStakes](#liststakes)
  * [listSwap](#listswap)
  * [listTethers](#listtethers)
  * [listTopAccounts](#listtopaccounts)
  * [listTransactions](#listtransactions)
  * [listWallet](#listwallet)
  * [loadFile](#loadfile)
  * [loadWallet](#loadwallet)
  * [multisig](#multisig)
  * [pinFile](#pinfile)
  * [recoverWallet](#recoverwallet)
  * [removeWallet](#removewallet)
  * [search](#search)
  * [sendTx](#sendtx)
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
  INVALID_LOCK_STATUS: 12,
  INVALID_REQUEST: 13,
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
  INVALID_DEPOSIT_VALUE: 43,
  EXCEED_DEPOSIT_CAP: 44,
  INVALID_DEPOSIT_TARGET: 45,
  INVALID_DEPOSITOR: 46,
  INVALID_WITHDRAWER: 47,
  DUPLICATE_TETHER: 48,
  INVALID_EXPIRY_DATE: 49,
  INVALID_DEPOSIT: 50,
  INVALID_CUSTODIAN: 51,
  INSUFFICIENT_GAS: 52,
  INVALID_SWAP: 53,
  INVALID_HASHKEY: 54,
  INVALID_DELEGATION: 55,
  INSUFFICIENT_DELEGATION: 56,
  INVALID_DELEGATION_RULE: 57,
  INVALID_DELEGATION_TYPE_URL: 58,
  SENDER_NOT_AUTHORIZED: 59,
  PROTOCOL_NOT_RUNNING: 60,
  PROTOCOL_NOT_PAUSED: 61,
  PROTOCOL_NOT_ACTIVATED: 62,
  INVALID_DEACTIVATION: 63,
  SENDER_WITHDRAW_ITEMS_FULL: 64,
  WITHDRAW_ITEM_MISSING: 65,
  INVALID_WITHDRAW_TX: 66,
  FORBIDDEN: 403,
  INTERNAL: 500,
  TIMEOUT: 504
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
  ROLE_VALIDATOR: 8,
  ROLE_GROUP: 9,
  ROLE_TX: 10,
  ROLE_TETHER: 11,
  ROLE_ANY: 63
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

### ProtocolStatus

```js
{
  RUNNING: 0,
  PAUSED: 1,
  TERMINATED: 2
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
  'ConsensusUpgradeTx',
  'DeployProtocolTx',
  'SysUpgradeTx',
  'AccountMigrateTx',
  'AcquireAssetTx',
  'ActivateProtocolTx',
  'ApproveTetherTx',
  'ApproveWithdrawTx',
  'ConsumeAssetTx',
  'CreateAssetTx',
  'DeactivateProtocolTx',
  'DeclareTx',
  'DelegateTx',
  'DepositTetherTx',
  'DepositTokenTx',
  'ExchangeTetherTx',
  'ExchangeTx',
  'PokeTx',
  'RetrieveSwapTx',
  'RevokeSwapTx',
  'RevokeTetherTx',
  'RevokeWithdrawTx',
  'SetupSwapTx',
  'StakeTx',
  'TransferTx',
  'UpdateAssetTx',
  'UpgradeNodeTx',
  'WithdrawTetherTx',
  'WithdrawTokenTx'
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
    type: 'string',
    value: 'ABCD 1234'
  },
  from: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
  nonce: 5,
  wallet: {
    type: {
      pk: 0,
      hash: 0,
      address: 0,
      role: 0
    },
    sk: Uint8Array [],
    pk: Uint8Array [],
    address: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55'
  },
  token: 'arcblock'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 0,
  tx: {
    from: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
    nonce: 5,
    chainId: 'arcblock',
    pk: Uint8Array [],
    gas: 2,
    delegator: 'arcblock',
    signature: Uint8Array [],
    signatures: [
      {
        signer: 'arcblock',
        pk: Uint8Array [],
        signature: Uint8Array [],
        delegator: 'arcblock',
        data: {
          type: 'string',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'arcblock',
        pk: Uint8Array [],
        signature: Uint8Array [],
        delegator: 'arcblock',
        data: {
          type: 'string',
          value: 'ABCD 1234'
        }
      }
    ],
    itx: {
      type: 'string',
      value: 'ABCD 1234'
    }
  }
}
});
```

### createWallet

```js
const result = await client.createWallet({
  passphrase: 'arcblock',
  type: {
    pk: 0,
    hash: 0,
    address: 0,
    role: 0
  },
  moniker: 'arcblock'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 0,
  token: 'arcblock',
  wallet: {
    type: {
      pk: 0,
      hash: 0,
      address: 0,
      role: 0
    },
    sk: Uint8Array [],
    pk: Uint8Array [],
    address: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55'
  }
}
});
```

### declareNode

```js
const result = await client.declareNode({
  validator: true
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 0,
  wallet: {
    type: {
      pk: 0,
      hash: 0,
      address: 0,
      role: 0
    },
    sk: Uint8Array [],
    pk: Uint8Array [],
    address: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55'
  }
}
});
```

### getAccountState

```js
const stream = client.getAccountState({
  address: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
  keys: [
    'arcblock',
    'arcblock'
  ],
  height: 5
});

// output
{
  code: 0,
  state: {
    balance: [Function: BigUint],
    nonce: 5,
    numTxs: 5,
    address: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
    pk: Uint8Array [],
    type: {
      pk: 0,
      hash: 0,
      address: 0,
      role: 0
    },
    moniker: 'arcblock',
    context: {
      genesisTx: 'arcblock',
      renaissanceTx: 'arcblock',
      genesisTime: '2019-09-18T10:22:12.101Z',
      renaissanceTime: '2019-09-18T10:22:12.101Z'
    },
    issuer: 'arcblock',
    gasBalance: [Function: BigUint],
    migratedTo: [
      'arcblock',
      'arcblock'
    ],
    migratedFrom: [
      'arcblock',
      'arcblock'
    ],
    numAssets: 5,
    stake: {
      totalStakes: [Function: BigUint],
      totalUnstakes: [Function: BigUint],
      totalReceivedStakes: [Function: BigUint],
      recentStakes: {
        items: [
          Uint8Array [],
          Uint8Array []
        ],
        typeUrl: 'arcblock',
        maxItems: 2,
        circular: true,
        fifo: true
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [],
          Uint8Array []
        ],
        typeUrl: 'arcblock',
        maxItems: 2,
        circular: true,
        fifo: true
      }
    },
    pinnedFiles: {
      items: [
        Uint8Array [],
        Uint8Array []
      ],
      typeUrl: 'arcblock',
      maxItems: 2,
      circular: true,
      fifo: true
    },
    poke: {
      dailyLimit: [Function: BigUint],
      leftover: [Function: BigUint],
      amount: [Function: BigUint]
    },
    depositReceived: [Function: BigUint],
    withdrawItems: {
      items: [
        Uint8Array [],
        Uint8Array []
      ],
      typeUrl: 'arcblock',
      maxItems: 2,
      circular: true,
      fifo: true
    },
    data: {
      type: 'string',
      value: 'ABCD 1234'
    }
  }
}
```

### getAssetState

```js
const stream = client.getAssetState({
  address: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
  keys: [
    'arcblock',
    'arcblock'
  ],
  height: 5
});

// output
{
  code: 0,
  state: {
    address: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
    owner: 'arcblock',
    moniker: 'arcblock',
    readonly: true,
    transferrable: true,
    ttl: 2,
    consumedTime: '2019-09-18T10:22:12.102Z',
    issuer: 'arcblock',
    parent: 'arcblock',
    stake: {
      totalStakes: [Function: BigUint],
      totalUnstakes: [Function: BigUint],
      totalReceivedStakes: [Function: BigUint],
      recentStakes: {
        items: [
          Uint8Array [],
          Uint8Array []
        ],
        typeUrl: 'arcblock',
        maxItems: 2,
        circular: true,
        fifo: true
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [],
          Uint8Array []
        ],
        typeUrl: 'arcblock',
        maxItems: 2,
        circular: true,
        fifo: true
      }
    },
    context: {
      genesisTx: 'arcblock',
      renaissanceTx: 'arcblock',
      genesisTime: '2019-09-18T10:22:12.102Z',
      renaissanceTime: '2019-09-18T10:22:12.102Z'
    },
    data: {
      type: 'string',
      value: 'ABCD 1234'
    }
  }
}
```

### getBlock

```js
const stream = client.getBlock({
  height: 5
});

// output
{
  code: 0,
  block: {
    height: 5,
    numTxs: 2,
    time: '2019-09-18T10:22:12.102Z',
    appHash: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
    proposer: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
    txs: [
      {
        tx: {
          from: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
          nonce: 5,
          chainId: 'arcblock',
          pk: Uint8Array [],
          gas: 2,
          delegator: 'arcblock',
          signature: Uint8Array [],
          signatures: [
            {
              signer: 'arcblock',
              pk: Uint8Array [],
              signature: Uint8Array [],
              delegator: 'arcblock',
              data: {
                type: 'string',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'arcblock',
              pk: Uint8Array [],
              signature: Uint8Array [],
              delegator: 'arcblock',
              data: {
                type: 'string',
                value: 'ABCD 1234'
              }
            }
          ],
          itx: {
            type: 'string',
            value: 'ABCD 1234'
          }
        },
        height: 5,
        index: 2,
        hash: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
        tags: [
          {
            key: Uint8Array [],
            value: Uint8Array []
          },
          {
            key: Uint8Array [],
            value: Uint8Array []
          }
        ],
        code: 0,
        time: '2019-09-18T10:22:12.103Z'
      },
      {
        tx: {
          from: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
          nonce: 5,
          chainId: 'arcblock',
          pk: Uint8Array [],
          gas: 2,
          delegator: 'arcblock',
          signature: Uint8Array [],
          signatures: [
            {
              signer: 'arcblock',
              pk: Uint8Array [],
              signature: Uint8Array [],
              delegator: 'arcblock',
              data: {
                type: 'string',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'arcblock',
              pk: Uint8Array [],
              signature: Uint8Array [],
              delegator: 'arcblock',
              data: {
                type: 'string',
                value: 'ABCD 1234'
              }
            }
          ],
          itx: {
            type: 'string',
            value: 'ABCD 1234'
          }
        },
        height: 5,
        index: 2,
        hash: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
        tags: [
          {
            key: Uint8Array [],
            value: Uint8Array []
          },
          {
            key: Uint8Array [],
            value: Uint8Array []
          }
        ],
        code: 0,
        time: '2019-09-18T10:22:12.103Z'
      }
    ],
    totalTxs: 5,
    invalidTxs: [
      {
        tx: {
          from: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
          nonce: 5,
          chainId: 'arcblock',
          pk: Uint8Array [],
          gas: 2,
          delegator: 'arcblock',
          signature: Uint8Array [],
          signatures: [
            {
              signer: 'arcblock',
              pk: Uint8Array [],
              signature: Uint8Array [],
              delegator: 'arcblock',
              data: {
                type: 'string',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'arcblock',
              pk: Uint8Array [],
              signature: Uint8Array [],
              delegator: 'arcblock',
              data: {
                type: 'string',
                value: 'ABCD 1234'
              }
            }
          ],
          itx: {
            type: 'string',
            value: 'ABCD 1234'
          }
        },
        height: 5,
        index: 2,
        hash: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
        tags: [
          {
            key: Uint8Array [],
            value: Uint8Array []
          },
          {
            key: Uint8Array [],
            value: Uint8Array []
          }
        ],
        code: 0,
        time: '2019-09-18T10:22:12.103Z'
      },
      {
        tx: {
          from: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
          nonce: 5,
          chainId: 'arcblock',
          pk: Uint8Array [],
          gas: 2,
          delegator: 'arcblock',
          signature: Uint8Array [],
          signatures: [
            {
              signer: 'arcblock',
              pk: Uint8Array [],
              signature: Uint8Array [],
              delegator: 'arcblock',
              data: {
                type: 'string',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'arcblock',
              pk: Uint8Array [],
              signature: Uint8Array [],
              delegator: 'arcblock',
              data: {
                type: 'string',
                value: 'ABCD 1234'
              }
            }
          ],
          itx: {
            type: 'string',
            value: 'ABCD 1234'
          }
        },
        height: 5,
        index: 2,
        hash: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
        tags: [
          {
            key: Uint8Array [],
            value: Uint8Array []
          },
          {
            key: Uint8Array [],
            value: Uint8Array []
          }
        ],
        code: 0,
        time: '2019-09-18T10:22:12.103Z'
      }
    ],
    txsHashes: [
      'arcblock',
      'arcblock'
    ],
    invalidTxsHashes: [
      'arcblock',
      'arcblock'
    ],
    consensusHash: Uint8Array [],
    dataHash: Uint8Array [],
    evidenceHash: Uint8Array [],
    lastCommitHash: Uint8Array [],
    lastResultsHash: Uint8Array [],
    nextValidatorsHash: Uint8Array [],
    validatorsHash: Uint8Array [],
    version: {
      Block: 5,
      App: 5
    },
    lastBlockId: {
      hash: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
      partsHeader: {
        total: undefined,
        hash: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55'
      }
    }
  }
}
```

### getBlocks

```js
const result = await client.getBlocks({
  paging: {
    cursor: 'arcblock',
    size: 2,
    order: [
      {
        field: 'arcblock',
        type: 'arcblock'
      },
      {
        field: 'arcblock',
        type: 'arcblock'
      }
    ]
  },
  heightFilter: {
    from: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
    to: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55'
  },
  emptyExcluded: true
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 0,
  page: {
    cursor: 'arcblock',
    next: true,
    total: 2
  },
  blocks: [
    {
      height: 5,
      numTxs: 2,
      time: '2019-09-18T10:22:12.104Z',
      appHash: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
      proposer: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
      totalTxs: 5,
      txsHashes: [
        'arcblock',
        'arcblock'
      ],
      invalidTxsHashes: [
        'arcblock',
        'arcblock'
      ],
      consensusHash: Uint8Array [],
      dataHash: Uint8Array [],
      evidenceHash: Uint8Array [],
      lastCommitHash: Uint8Array [],
      lastResultsHash: Uint8Array [],
      nextValidatorsHash: Uint8Array [],
      validatorsHash: Uint8Array [],
      version: {
        Block: 5,
        App: 5
      },
      lastBlockId: {
        hash: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
        partsHeader: {
          total: undefined,
          hash: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55'
        }
      }
    },
    {
      height: 5,
      numTxs: 2,
      time: '2019-09-18T10:22:12.104Z',
      appHash: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
      proposer: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
      totalTxs: 5,
      txsHashes: [
        'arcblock',
        'arcblock'
      ],
      invalidTxsHashes: [
        'arcblock',
        'arcblock'
      ],
      consensusHash: Uint8Array [],
      dataHash: Uint8Array [],
      evidenceHash: Uint8Array [],
      lastCommitHash: Uint8Array [],
      lastResultsHash: Uint8Array [],
      nextValidatorsHash: Uint8Array [],
      validatorsHash: Uint8Array [],
      version: {
        Block: 5,
        App: 5
      },
      lastBlockId: {
        hash: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
        partsHeader: {
          total: undefined,
          hash: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55'
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
  code: 0,
  info: {
    id: 'arcblock',
    network: 'arcblock',
    moniker: 'arcblock',
    consensusVersion: 'arcblock',
    synced: true,
    appHash: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
    blockHash: Uint8Array [],
    blockHeight: 5,
    blockTime: '2019-09-18T10:22:12.104Z',
    address: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
    votingPower: 5,
    totalTxs: 5,
    version: 'arcblock',
    forgeAppsVersion: {
      arcblock: 'arcblock'
    },
    supportedTxs: [
      'arcblock',
      'arcblock'
    ]
  }
}
});
```

### getConfig

```js
const result = await client.getConfig({
  parsed: true
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 0,
  config: 'arcblock'
}
});
```

### getDelegateState

```js
const stream = client.getDelegateState({
  address: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
  keys: [
    'arcblock',
    'arcblock'
  ],
  height: 5
});

// output
{
  code: 0,
  state: {
    address: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
    ops: {
      arcblock: {
        rule: 'arcblock',
        numTxs: 5,
        numTxsDelta: 5,
        balance: [Function: BigUint],
        balanceDelta: [Function: BigUint]
      }
    },
    context: {
      genesisTx: 'arcblock',
      renaissanceTx: 'arcblock',
      genesisTime: '2019-09-18T10:22:12.105Z',
      renaissanceTime: '2019-09-18T10:22:12.105Z'
    },
    data: {
      type: 'string',
      value: 'ABCD 1234'
    }
  }
}
```

### getForgeState

```js
const result = await client.getForgeState({
  keys: [
    'arcblock',
    'arcblock'
  ],
  height: 5
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 0,
  state: {
    address: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
    consensus: {
      maxBytes: 5,
      maxGas: 4,
      maxValidators: 2,
      maxCandidates: 2,
      pubKeyTypes: [
        'arcblock',
        'arcblock'
      ],
      validators: [
        {
          address: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
          power: 5
        },
        {
          address: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
          power: 5
        }
      ],
      validatorChanged: true,
      paramChanged: true
    },
    tasks: {
      '5': {
        item: [
          {
            type: 0,
            dataHash: 'arcblock',
            actions: [
              undefined,
              undefined
            ]
          },
          {
            type: 0,
            dataHash: 'arcblock',
            actions: [
              undefined,
              undefined
            ]
          }
        ]
      }
    },
    stakeSummary: {
      '2': {
        totalStakes: [Function: BigUint],
        totalUnstakes: [Function: BigUint],
        context: {
          genesisTx: 'arcblock',
          renaissanceTx: 'arcblock',
          genesisTime: '2019-09-18T10:22:12.105Z',
          renaissanceTime: '2019-09-18T10:22:12.105Z'
        }
      }
    },
    version: 'arcblock',
    token: {
      name: 'arcblock',
      symbol: 'arcblock',
      unit: 'arcblock',
      description: 'arcblock',
      icon: Uint8Array [],
      decimal: 2,
      initialSupply: 5,
      totalSupply: 5,
      inflationRate: 2
    },
    txConfig: {
      maxAssetSize: 2,
      maxListSize: 2,
      maxMultisig: 2,
      minimumStake: 5,
      declare: {
        restricted: true,
        hierarchy: 2
      },
      delegate: {
        deltaInterval: 2,
        typeUrls: [
          'arcblock',
          'arcblock'
        ]
      },
      poke: {
        dailyLimit: 5,
        amount: 5,
        enabled: true
      },
      stake: {
        timeoutGeneral: 2,
        timeoutStakeForNode: 2
      }
    },
    protocols: [
      {
        name: 'arcblock',
        address: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55'
      },
      {
        name: 'arcblock',
        address: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55'
      }
    ],
    gas: {
      arcblock: 2
    },
    upgradeInfo: {
      height: 5,
      version: 'arcblock'
    },
    accountConfig: {
      arcblock: {
        address: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
        pk: Uint8Array [],
        balance: [Function: BigUint]
      }
    },
    tokenSwapConfig: {
      commissionHolderAddress: 'arcblock',
      withdrawInterval: 2,
      commission: [Function: BigUint],
      commissionRate: 2,
      revokeCommission: 2
    },
    data: {
      type: 'string',
      value: 'ABCD 1234'
    }
  }
}
});
```

### getForgeStats

```js
const result = await client.getForgeStats({
  dayInfo: {
    startDate: 'arcblock',
    endDate: 'arcblock'
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 0,
  forgeStats: {
    numBlocks: [
      5,
      5
    ],
    numTxs: [
      5,
      5
    ],
    numStakes: [
      [Function: BigUint],
      [Function: BigUint]
    ],
    numValidators: [
      2,
      2
    ],
    numAccountMigrateTxs: [
      5,
      5
    ],
    numCreateAssetTxs: [
      5,
      5
    ],
    numConsensusUpgradeTxs: [
      2,
      2
    ],
    numDeclareTxs: [
      5,
      5
    ],
    numDeclareFileTxs: [
      5,
      5
    ],
    numExchangeTxs: [
      5,
      5
    ],
    numStakeTxs: [
      5,
      5
    ],
    numSysUpgradeTxs: [
      2,
      2
    ],
    numTransferTxs: [
      5,
      5
    ],
    numUpdateAssetTxs: [
      5,
      5
    ],
    numConsumeAssetTxs: [
      5,
      5
    ],
    numPokeTxs: [
      5,
      5
    ],
    tps: [
      2,
      2
    ],
    maxTps: 2,
    avgTps: 2,
    avgBlockTime: '12.2'
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
  code: 0,
  healthStatus: {
    consensus: {
      health: true,
      synced: true,
      blockHeight: 5
    },
    network: {
      health: true,
      numPeers: 2
    },
    storage: {
      health: true,
      indexerServer: 'arcblock',
      stateDb: 'arcblock',
      diskSpace: {
        forgeUsage: 'arcblock',
        total: 'arcblock'
      }
    },
    forge: {
      health: true,
      abiServer: 'arcblock',
      forgeWeb: 'arcblock',
      abciServer: {
        abciConsensus: 'arcblock',
        abciInfo: 'arcblock'
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
  code: 0,
  netInfo: {
    listening: true,
    listeners: [
      'arcblock',
      'arcblock'
    ],
    nPeers: 2,
    peers: [
      {
        id: 'arcblock',
        network: 'arcblock',
        consensusVersion: 'arcblock',
        moniker: 'arcblock',
        ip: 'arcblock',
        geoInfo: {
          city: 'arcblock',
          country: 'arcblock',
          latitude: '12.2',
          longitude: '12.2'
        }
      },
      {
        id: 'arcblock',
        network: 'arcblock',
        consensusVersion: 'arcblock',
        moniker: 'arcblock',
        ip: 'arcblock',
        geoInfo: {
          city: 'arcblock',
          country: 'arcblock',
          latitude: '12.2',
          longitude: '12.2'
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
    id: 'arcblock',
    network: 'arcblock',
    moniker: 'arcblock',
    consensusVersion: 'arcblock',
    synced: true,
    appHash: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
    blockHash: Uint8Array [],
    blockHeight: 5,
    blockTime: '2019-09-18T10:22:12.106Z',
    address: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
    votingPower: 5,
    totalTxs: 5,
    version: 'arcblock',
    forgeAppsVersion: {
      arcblock: 'arcblock'
    },
    supportedTxs: [
      'arcblock',
      'arcblock'
    ],
    ip: 'arcblock',
    geoInfo: {
      city: 'arcblock',
      country: 'arcblock',
      latitude: '12.2',
      longitude: '12.2'
    },
    p2pAddress: 'arcblock'
  }
}
});
```

### getProtocolState

```js
const stream = client.getProtocolState({
  address: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
  keys: [
    'arcblock',
    'arcblock'
  ],
  height: 5
});

// output
{
  code: 0,
  state: {
    address: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
    itx: {
      address: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
      name: 'arcblock',
      version: 2,
      namespace: 'arcblock',
      description: 'arcblock',
      typeUrls: [
        {
          url: 'arcblock',
          module: 'arcblock'
        },
        {
          url: 'arcblock',
          module: 'arcblock'
        }
      ],
      proto: 'arcblock',
      pipeline: 'arcblock',
      sources: [
        'arcblock',
        'arcblock'
      ],
      code: [
        {
          checksum: Uint8Array [],
          binary: Uint8Array []
        },
        {
          checksum: Uint8Array [],
          binary: Uint8Array []
        }
      ],
      tags: [
        'arcblock',
        'arcblock'
      ],
      data: {
        type: 'string',
        value: 'ABCD 1234'
      }
    },
    rootHash: Uint8Array [],
    status: 0,
    migratedTo: [
      'arcblock',
      'arcblock'
    ],
    migratedFrom: [
      'arcblock',
      'arcblock'
    ],
    context: {
      genesisTx: 'arcblock',
      renaissanceTx: 'arcblock',
      genesisTime: '2019-09-18T10:22:12.106Z',
      renaissanceTime: '2019-09-18T10:22:12.106Z'
    },
    data: {
      type: 'string',
      value: 'ABCD 1234'
    }
  }
}
```

### getStakeState

```js
const stream = client.getStakeState({
  address: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
  keys: [
    'arcblock',
    'arcblock'
  ],
  height: 5
});

// output
{
  code: 0,
  state: {
    address: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
    from: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
    to: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
    balance: [Function: BigUint],
    message: 'arcblock',
    context: {
      genesisTx: 'arcblock',
      renaissanceTx: 'arcblock',
      genesisTime: '2019-09-18T10:22:12.106Z',
      renaissanceTime: '2019-09-18T10:22:12.106Z'
    },
    data: {
      type: 'string',
      value: 'ABCD 1234'
    }
  }
}
```

### getSwapState

```js
const stream = client.getSwapState({
  address: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
  keys: [
    'arcblock',
    'arcblock'
  ],
  height: 5
});

// output
{
  code: 0,
  state: {
    hash: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
    address: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
    hashkey: Uint8Array [],
    sender: 'arcblock',
    receiver: 'arcblock',
    value: [Function: BigUint],
    assets: [
      'arcblock',
      'arcblock'
    ],
    locktime: 2,
    hashlock: Uint8Array [],
    context: {
      genesisTx: 'arcblock',
      renaissanceTx: 'arcblock',
      genesisTime: '2019-09-18T10:22:12.107Z',
      renaissanceTime: '2019-09-18T10:22:12.107Z'
    }
  }
}
```

### getTetherState

```js
const stream = client.getTetherState({
  address: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
  keys: [
    'arcblock',
    'arcblock'
  ],
  height: 5
});

// output
{
  code: 0,
  state: {
    hash: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
    available: true,
    custodian: 'arcblock',
    depositor: 'arcblock',
    withdrawer: 'arcblock',
    value: [Function: BigUint],
    commission: [Function: BigUint],
    charge: [Function: BigUint],
    target: 'arcblock',
    locktime: '2019-09-18T10:22:12.107Z',
    address: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55'
  }
}
```

### getTx

```js
const stream = client.getTx({
  hash: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55'
});

// output
{
  code: 0,
  info: {
    tx: {
      from: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
      nonce: 5,
      chainId: 'arcblock',
      pk: Uint8Array [],
      gas: 2,
      delegator: 'arcblock',
      signature: Uint8Array [],
      signatures: [
        {
          signer: 'arcblock',
          pk: Uint8Array [],
          signature: Uint8Array [],
          delegator: 'arcblock',
          data: {
            type: 'string',
            value: 'ABCD 1234'
          }
        },
        {
          signer: 'arcblock',
          pk: Uint8Array [],
          signature: Uint8Array [],
          delegator: 'arcblock',
          data: {
            type: 'string',
            value: 'ABCD 1234'
          }
        }
      ],
      itx: {
        type: 'string',
        value: 'ABCD 1234'
      }
    },
    height: 5,
    index: 2,
    hash: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
    tags: [
      {
        key: Uint8Array [],
        value: Uint8Array []
      },
      {
        key: Uint8Array [],
        value: Uint8Array []
      }
    ],
    code: 0,
    time: '2019-09-18T10:22:12.107Z'
  }
}
```

### getUnconfirmedTxs

```js
const result = await client.getUnconfirmedTxs({
  paging: {
    cursor: 'arcblock',
    size: 2,
    order: [
      {
        field: 'arcblock',
        type: 'arcblock'
      },
      {
        field: 'arcblock',
        type: 'arcblock'
      }
    ]
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 0,
  page: {
    cursor: 'arcblock',
    next: true,
    total: 2
  },
  unconfirmedTxs: {
    nTxs: 2,
    txs: [
      {
        from: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
        nonce: 5,
        chainId: 'arcblock',
        pk: Uint8Array [],
        gas: 2,
        delegator: 'arcblock',
        signature: Uint8Array [],
        signatures: [
          {
            signer: 'arcblock',
            pk: Uint8Array [],
            signature: Uint8Array [],
            delegator: 'arcblock',
            data: {
              type: 'string',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'arcblock',
            pk: Uint8Array [],
            signature: Uint8Array [],
            delegator: 'arcblock',
            data: {
              type: 'string',
              value: 'ABCD 1234'
            }
          }
        ],
        itx: {
          type: 'string',
          value: 'ABCD 1234'
        }
      },
      {
        from: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
        nonce: 5,
        chainId: 'arcblock',
        pk: Uint8Array [],
        gas: 2,
        delegator: 'arcblock',
        signature: Uint8Array [],
        signatures: [
          {
            signer: 'arcblock',
            pk: Uint8Array [],
            signature: Uint8Array [],
            delegator: 'arcblock',
            data: {
              type: 'string',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'arcblock',
            pk: Uint8Array [],
            signature: Uint8Array [],
            delegator: 'arcblock',
            data: {
              type: 'string',
              value: 'ABCD 1234'
            }
          }
        ],
        itx: {
          type: 'string',
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
  code: 0,
  validatorsInfo: {
    blockHeight: 5,
    validators: [
      {
        address: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
        pubKey: {
          type: 'arcblock',
          data: Uint8Array []
        },
        votingPower: 5,
        proposerPriority: 'arcblock',
        name: 'arcblock',
        geoInfo: {
          city: 'arcblock',
          country: 'arcblock',
          latitude: '12.2',
          longitude: '12.2'
        }
      },
      {
        address: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
        pubKey: {
          type: 'arcblock',
          data: Uint8Array []
        },
        votingPower: 5,
        proposerPriority: 'arcblock',
        name: 'arcblock',
        geoInfo: {
          city: 'arcblock',
          country: 'arcblock',
          latitude: '12.2',
          longitude: '12.2'
        }
      }
    ]
  }
}
});
```

### listAccount

```js
const result = await client.listAccount({
  ownerAddress: 'arcblock'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 0,
  account: {
    address: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
    balance: [Function: BigUint],
    numAssets: 5,
    numTxs: 5,
    nonce: 5,
    genesisTime: 'arcblock',
    renaissanceTime: 'arcblock',
    moniker: 'arcblock',
    migratedFrom: 'arcblock',
    migratedTo: 'arcblock',
    totalReceivedStakes: [Function: BigUint],
    totalStakes: [Function: BigUint],
    totalUnstakes: [Function: BigUint],
    recentNumTxs: [
      5,
      5
    ]
  }
}
});
```

### listAssetTransactions

```js
const result = await client.listAssetTransactions({
  paging: {
    cursor: 'arcblock',
    size: 2,
    order: [
      {
        field: 'arcblock',
        type: 'arcblock'
      },
      {
        field: 'arcblock',
        type: 'arcblock'
      }
    ]
  },
  address: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 0,
  page: {
    cursor: 'arcblock',
    next: true,
    total: 2
  },
  transactions: [
    {
      hash: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
      sender: 'arcblock',
      receiver: 'arcblock',
      time: 'arcblock',
      type: 'arcblock',
      tx: {
        from: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
        nonce: 5,
        chainId: 'arcblock',
        pk: Uint8Array [],
        gas: 2,
        delegator: 'arcblock',
        signature: Uint8Array [],
        signatures: [
          {
            signer: 'arcblock',
            pk: Uint8Array [],
            signature: Uint8Array [],
            delegator: 'arcblock',
            data: {
              type: 'string',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'arcblock',
            pk: Uint8Array [],
            signature: Uint8Array [],
            delegator: 'arcblock',
            data: {
              type: 'string',
              value: 'ABCD 1234'
            }
          }
        ],
        itx: {
          type: 'string',
          value: 'ABCD 1234'
        }
      },
      valid: true,
      code: 0
    },
    {
      hash: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
      sender: 'arcblock',
      receiver: 'arcblock',
      time: 'arcblock',
      type: 'arcblock',
      tx: {
        from: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
        nonce: 5,
        chainId: 'arcblock',
        pk: Uint8Array [],
        gas: 2,
        delegator: 'arcblock',
        signature: Uint8Array [],
        signatures: [
          {
            signer: 'arcblock',
            pk: Uint8Array [],
            signature: Uint8Array [],
            delegator: 'arcblock',
            data: {
              type: 'string',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'arcblock',
            pk: Uint8Array [],
            signature: Uint8Array [],
            delegator: 'arcblock',
            data: {
              type: 'string',
              value: 'ABCD 1234'
            }
          }
        ],
        itx: {
          type: 'string',
          value: 'ABCD 1234'
        }
      },
      valid: true,
      code: 0
    }
  ]
}
});
```

### listAssets

```js
const result = await client.listAssets({
  paging: {
    cursor: 'arcblock',
    size: 2,
    order: [
      {
        field: 'arcblock',
        type: 'arcblock'
      },
      {
        field: 'arcblock',
        type: 'arcblock'
      }
    ]
  },
  ownerAddress: 'arcblock'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 0,
  page: {
    cursor: 'arcblock',
    next: true,
    total: 2
  },
  assets: [
    {
      address: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
      owner: 'arcblock',
      genesisTime: 'arcblock',
      renaissanceTime: 'arcblock',
      moniker: 'arcblock',
      readonly: true,
      consumedTime: 'arcblock',
      issuer: 'arcblock',
      parent: 'arcblock',
      transferrable: true,
      ttl: 5,
      data: {
        type: 'string',
        value: 'ABCD 1234'
      }
    },
    {
      address: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
      owner: 'arcblock',
      genesisTime: 'arcblock',
      renaissanceTime: 'arcblock',
      moniker: 'arcblock',
      readonly: true,
      consumedTime: 'arcblock',
      issuer: 'arcblock',
      parent: 'arcblock',
      transferrable: true,
      ttl: 5,
      data: {
        type: 'string',
        value: 'ABCD 1234'
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
    cursor: 'arcblock',
    size: 2,
    order: [
      {
        field: 'arcblock',
        type: 'arcblock'
      },
      {
        field: 'arcblock',
        type: 'arcblock'
      }
    ]
  },
  proposer: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
  timeFilter: {
    startDateTime: 'arcblock',
    endDateTime: 'arcblock'
  },
  heightFilter: {
    from: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
    to: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55'
  },
  numTxsFilter: {
    from: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
    to: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55'
  },
  numInvalidTxsFilter: {
    from: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
    to: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55'
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 0,
  page: {
    cursor: 'arcblock',
    next: true,
    total: 2
  },
  blocks: [
    {
      height: 5,
      time: 'arcblock',
      proposer: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
      numTxs: 5,
      numInvalidTxs: 5
    },
    {
      height: 5,
      time: 'arcblock',
      proposer: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
      numTxs: 5,
      numInvalidTxs: 5
    }
  ]
}
});
```

### listStakes

```js
const result = await client.listStakes({
  paging: {
    cursor: 'arcblock',
    size: 2,
    order: [
      {
        field: 'arcblock',
        type: 'arcblock'
      },
      {
        field: 'arcblock',
        type: 'arcblock'
      }
    ]
  },
  addressFilter: {
    sender: 'arcblock',
    receiver: 'arcblock',
    direction: 0
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 0,
  page: {
    cursor: 'arcblock',
    next: true,
    total: 2
  },
  stakes: [
    {
      address: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
      balance: [Function: BigUint],
      sender: 'arcblock',
      receiver: 'arcblock',
      genesisTime: 'arcblock',
      renaissanceTime: 'arcblock',
      message: 'arcblock',
      type: 2
    },
    {
      address: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
      balance: [Function: BigUint],
      sender: 'arcblock',
      receiver: 'arcblock',
      genesisTime: 'arcblock',
      renaissanceTime: 'arcblock',
      message: 'arcblock',
      type: 2
    }
  ]
}
});
```

### listSwap

```js
const result = await client.listSwap({
  paging: {
    cursor: 'arcblock',
    size: 2,
    order: [
      {
        field: 'arcblock',
        type: 'arcblock'
      },
      {
        field: 'arcblock',
        type: 'arcblock'
      }
    ]
  },
  sender: 'arcblock',
  receiver: 'arcblock',
  available: true
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 0,
  page: {
    cursor: 'arcblock',
    next: true,
    total: 2
  },
  swap: [
    {
      hash: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
      address: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
      hashkey: Uint8Array [],
      sender: 'arcblock',
      receiver: 'arcblock',
      value: [Function: BigUint],
      assets: [
        'arcblock',
        'arcblock'
      ],
      locktime: 2,
      hashlock: Uint8Array [],
      context: {
        genesisTx: 'arcblock',
        renaissanceTx: 'arcblock',
        genesisTime: '2019-09-18T10:22:12.109Z',
        renaissanceTime: '2019-09-18T10:22:12.109Z'
      }
    },
    {
      hash: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
      address: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
      hashkey: Uint8Array [],
      sender: 'arcblock',
      receiver: 'arcblock',
      value: [Function: BigUint],
      assets: [
        'arcblock',
        'arcblock'
      ],
      locktime: 2,
      hashlock: Uint8Array [],
      context: {
        genesisTx: 'arcblock',
        renaissanceTx: 'arcblock',
        genesisTime: '2019-09-18T10:22:12.109Z',
        renaissanceTime: '2019-09-18T10:22:12.109Z'
      }
    }
  ]
}
});
```

### listTethers

```js
const result = await client.listTethers({
  paging: {
    cursor: 'arcblock',
    size: 2,
    order: [
      {
        field: 'arcblock',
        type: 'arcblock'
      },
      {
        field: 'arcblock',
        type: 'arcblock'
      }
    ]
  },
  depositor: 'arcblock',
  withdrawer: 'arcblock',
  custodian: 'arcblock',
  available: true
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 0,
  page: {
    cursor: 'arcblock',
    next: true,
    total: 2
  },
  tethers: [
    {
      hash: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
      available: true,
      custodian: 'arcblock',
      depositor: 'arcblock',
      withdrawer: 'arcblock',
      value: [Function: BigUint],
      commission: [Function: BigUint],
      charge: [Function: BigUint],
      target: 'arcblock',
      locktime: '2019-09-18T10:22:12.109Z',
      address: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55'
    },
    {
      hash: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
      available: true,
      custodian: 'arcblock',
      depositor: 'arcblock',
      withdrawer: 'arcblock',
      value: [Function: BigUint],
      commission: [Function: BigUint],
      charge: [Function: BigUint],
      target: 'arcblock',
      locktime: '2019-09-18T10:22:12.109Z',
      address: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55'
    }
  ]
}
});
```

### listTopAccounts

```js
const result = await client.listTopAccounts({
  paging: {
    cursor: 'arcblock',
    size: 2,
    order: [
      {
        field: 'arcblock',
        type: 'arcblock'
      },
      {
        field: 'arcblock',
        type: 'arcblock'
      }
    ]
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 0,
  page: {
    cursor: 'arcblock',
    next: true,
    total: 2
  },
  accounts: [
    {
      address: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
      balance: [Function: BigUint],
      numAssets: 5,
      numTxs: 5,
      nonce: 5,
      genesisTime: 'arcblock',
      renaissanceTime: 'arcblock',
      moniker: 'arcblock',
      migratedFrom: 'arcblock',
      migratedTo: 'arcblock',
      totalReceivedStakes: [Function: BigUint],
      totalStakes: [Function: BigUint],
      totalUnstakes: [Function: BigUint],
      recentNumTxs: [
        5,
        5
      ]
    },
    {
      address: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
      balance: [Function: BigUint],
      numAssets: 5,
      numTxs: 5,
      nonce: 5,
      genesisTime: 'arcblock',
      renaissanceTime: 'arcblock',
      moniker: 'arcblock',
      migratedFrom: 'arcblock',
      migratedTo: 'arcblock',
      totalReceivedStakes: [Function: BigUint],
      totalStakes: [Function: BigUint],
      totalUnstakes: [Function: BigUint],
      recentNumTxs: [
        5,
        5
      ]
    }
  ]
}
});
```

### listTransactions

```js
const result = await client.listTransactions({
  paging: {
    cursor: 'arcblock',
    size: 2,
    order: [
      {
        field: 'arcblock',
        type: 'arcblock'
      },
      {
        field: 'arcblock',
        type: 'arcblock'
      }
    ]
  },
  timeFilter: {
    startDateTime: 'arcblock',
    endDateTime: 'arcblock'
  },
  addressFilter: {
    sender: 'arcblock',
    receiver: 'arcblock',
    direction: 0
  },
  typeFilter: {
    types: [
      'arcblock',
      'arcblock'
    ]
  },
  validityFilter: {
    validity: 0
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 0,
  page: {
    cursor: 'arcblock',
    next: true,
    total: 2
  },
  transactions: [
    {
      hash: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
      sender: 'arcblock',
      receiver: 'arcblock',
      time: 'arcblock',
      type: 'arcblock',
      tx: {
        from: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
        nonce: 5,
        chainId: 'arcblock',
        pk: Uint8Array [],
        gas: 2,
        delegator: 'arcblock',
        signature: Uint8Array [],
        signatures: [
          {
            signer: 'arcblock',
            pk: Uint8Array [],
            signature: Uint8Array [],
            delegator: 'arcblock',
            data: {
              type: 'string',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'arcblock',
            pk: Uint8Array [],
            signature: Uint8Array [],
            delegator: 'arcblock',
            data: {
              type: 'string',
              value: 'ABCD 1234'
            }
          }
        ],
        itx: {
          type: 'string',
          value: 'ABCD 1234'
        }
      },
      valid: true,
      code: 0
    },
    {
      hash: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
      sender: 'arcblock',
      receiver: 'arcblock',
      time: 'arcblock',
      type: 'arcblock',
      tx: {
        from: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
        nonce: 5,
        chainId: 'arcblock',
        pk: Uint8Array [],
        gas: 2,
        delegator: 'arcblock',
        signature: Uint8Array [],
        signatures: [
          {
            signer: 'arcblock',
            pk: Uint8Array [],
            signature: Uint8Array [],
            delegator: 'arcblock',
            data: {
              type: 'string',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'arcblock',
            pk: Uint8Array [],
            signature: Uint8Array [],
            delegator: 'arcblock',
            data: {
              type: 'string',
              value: 'ABCD 1234'
            }
          }
        ],
        itx: {
          type: 'string',
          value: 'ABCD 1234'
        }
      },
      valid: true,
      code: 0
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
  code: 0,
  address: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55'
}
```

### loadFile

```js
const stream = client.loadFile({
  hash: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55'
});

// output
{
  code: 0,
  chunk: Uint8Array []
}
```

### loadWallet

```js
const result = await client.loadWallet({
  address: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
  passphrase: 'arcblock'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 0,
  token: 'arcblock',
  wallet: {
    type: {
      pk: 0,
      hash: 0,
      address: 0,
      role: 0
    },
    sk: Uint8Array [],
    pk: Uint8Array [],
    address: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55'
  }
}
});
```

### multisig

```js
const result = await client.multisig({
  tx: {
    from: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
    nonce: 5,
    chainId: 'arcblock',
    pk: Uint8Array [],
    gas: 2,
    delegator: 'arcblock',
    signature: Uint8Array [],
    signatures: [
      {
        signer: 'arcblock',
        pk: Uint8Array [],
        signature: Uint8Array [],
        delegator: 'arcblock',
        data: {
          type: 'string',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'arcblock',
        pk: Uint8Array [],
        signature: Uint8Array [],
        delegator: 'arcblock',
        data: {
          type: 'string',
          value: 'ABCD 1234'
        }
      }
    ],
    itx: {
      type: 'string',
      value: 'ABCD 1234'
    }
  },
  data: {
    type: 'string',
    value: 'ABCD 1234'
  },
  wallet: {
    type: {
      pk: 0,
      hash: 0,
      address: 0,
      role: 0
    },
    sk: Uint8Array [],
    pk: Uint8Array [],
    address: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55'
  },
  token: 'arcblock',
  delegatee: 'arcblock'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 0,
  tx: {
    from: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
    nonce: 5,
    chainId: 'arcblock',
    pk: Uint8Array [],
    gas: 2,
    delegator: 'arcblock',
    signature: Uint8Array [],
    signatures: [
      {
        signer: 'arcblock',
        pk: Uint8Array [],
        signature: Uint8Array [],
        delegator: 'arcblock',
        data: {
          type: 'string',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'arcblock',
        pk: Uint8Array [],
        signature: Uint8Array [],
        delegator: 'arcblock',
        data: {
          type: 'string',
          value: 'ABCD 1234'
        }
      }
    ],
    itx: {
      type: 'string',
      value: 'ABCD 1234'
    }
  }
}
});
```

### pinFile

```js
const result = await client.pinFile({
  hash: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 0
}
});
```

### recoverWallet

```js
const result = await client.recoverWallet({
  data: Uint8Array [],
  type: {
    pk: 0,
    hash: 0,
    address: 0,
    role: 0
  },
  passphrase: 'arcblock',
  moniker: 'arcblock'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 0,
  token: 'arcblock',
  wallet: {
    type: {
      pk: 0,
      hash: 0,
      address: 0,
      role: 0
    },
    sk: Uint8Array [],
    pk: Uint8Array [],
    address: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55'
  }
}
});
```

### removeWallet

```js
const result = await client.removeWallet({
  address: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 0
}
});
```

### search

```js
const result = await client.search({
  key: 'arcblock',
  value: 'arcblock'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 0,
  txs: [
    {
      tx: {
        from: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
        nonce: 5,
        chainId: 'arcblock',
        pk: Uint8Array [],
        gas: 2,
        delegator: 'arcblock',
        signature: Uint8Array [],
        signatures: [
          {
            signer: 'arcblock',
            pk: Uint8Array [],
            signature: Uint8Array [],
            delegator: 'arcblock',
            data: {
              type: 'string',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'arcblock',
            pk: Uint8Array [],
            signature: Uint8Array [],
            delegator: 'arcblock',
            data: {
              type: 'string',
              value: 'ABCD 1234'
            }
          }
        ],
        itx: {
          type: 'string',
          value: 'ABCD 1234'
        }
      },
      height: 5,
      index: 2,
      hash: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
      tags: [
        {
          key: Uint8Array [],
          value: Uint8Array []
        },
        {
          key: Uint8Array [],
          value: Uint8Array []
        }
      ],
      code: 0,
      time: '2019-09-18T10:22:12.111Z'
    },
    {
      tx: {
        from: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
        nonce: 5,
        chainId: 'arcblock',
        pk: Uint8Array [],
        gas: 2,
        delegator: 'arcblock',
        signature: Uint8Array [],
        signatures: [
          {
            signer: 'arcblock',
            pk: Uint8Array [],
            signature: Uint8Array [],
            delegator: 'arcblock',
            data: {
              type: 'string',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'arcblock',
            pk: Uint8Array [],
            signature: Uint8Array [],
            delegator: 'arcblock',
            data: {
              type: 'string',
              value: 'ABCD 1234'
            }
          }
        ],
        itx: {
          type: 'string',
          value: 'ABCD 1234'
        }
      },
      height: 5,
      index: 2,
      hash: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
      tags: [
        {
          key: Uint8Array [],
          value: Uint8Array []
        },
        {
          key: Uint8Array [],
          value: Uint8Array []
        }
      ],
      code: 0,
      time: '2019-09-18T10:22:12.111Z'
    }
  ]
}
});
```

### sendTx

```js
const result = await client.sendTx({
  tx: {
    from: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
    nonce: 5,
    chainId: 'arcblock',
    pk: Uint8Array [],
    gas: 2,
    delegator: 'arcblock',
    signature: Uint8Array [],
    signatures: [
      {
        signer: 'arcblock',
        pk: Uint8Array [],
        signature: Uint8Array [],
        delegator: 'arcblock',
        data: {
          type: 'string',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'arcblock',
        pk: Uint8Array [],
        signature: Uint8Array [],
        delegator: 'arcblock',
        data: {
          type: 'string',
          value: 'ABCD 1234'
        }
      }
    ],
    itx: {
      type: 'string',
      value: 'ABCD 1234'
    }
  },
  wallet: {
    type: {
      pk: 0,
      hash: 0,
      address: 0,
      role: 0
    },
    sk: Uint8Array [],
    pk: Uint8Array [],
    address: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55'
  },
  token: 'arcblock',
  commit: true
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 0,
  hash: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55'
}
});
```

### storeFile

```js
const result = await client.storeFile({
  chunk: Uint8Array []
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 0,
  hash: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55'
}
});
```

### subscribe

```js
const stream = client.subscribe({
  topic: 'arcblock',
  filter: 'arcblock'
});

// output
{
  topic: 'arcblock'
}
```

### unsubscribe

```js
const result = await client.unsubscribe({
  topic: 'arcblock'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 0
}
});
```
