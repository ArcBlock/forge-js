# Forge GraphQL API List

<<<<<<< HEAD
> Updated on 2019-03-12T07:12:45.370Z
=======
> Updated on 2019-03-11T02:39:16.696Z
>>>>>>> master


## Table of Contents

* [Queries](#queries)
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
  * [getForgeStatisticsByDay](#getforgestatisticsbyday)
  * [getForgeStatisticsByHour](#getforgestatisticsbyhour)
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
  * [search](#search)
  * [signData](#signdata)
* [Subscriptions](#subscriptions)
  * [subscribe](#subscribe)
* [Mutations](#mutations)
  * [createTx](#createtx)
  * [createWallet](#createwallet)
  * [declare](#declare)
  * [declareNode](#declarenode)
  * [recoverWallet](#recoverwallet)
  * [removeWallet](#removewallet)
  * [sendTx](#sendtx)
  * [storeFile](#storefile)
  * [unsubscribe](#unsubscribe)


## Queries

### getAccountState

#### Arguments

* **address**, optional, 
* **height**, optional, 
* **keys**, optional, 

#### Result Format

```graphql
{
  getAccountState(address: "abc", height: 123, keys: ["abc"]) {
    code
    state {
      address
      balance
      issuer
      migratedFrom
      migratedTo
      moniker
      nonce
      numAssets
      numTxs
      pk
      context {
        genesisTime
        renaissanceTime
        genesisTx {
          code
          hash
          height
          index
          time
          accountMigrate {
            address
          }
          createAsset {
            asset
          }
          tags {
            key
            value
          }
          tx {
            chainId
            from
            nonce
            signature
            signatures {
              signature
              signer
              data {
                typeUrl
                value
              }
            }
            itx {
              __typename
              ... on UpdateAssetTx {
                address
                moniker
                data {
                  typeUrl
                  value
                }
              }
              ... on TransferTx {
                assets
                to
                value
                data {
                  typeUrl
                  value
                }
              }
              ... on SysUpgradeTx {
                gracePeriod
                data {
                  typeUrl
                  value
                }
                task {
                  actions
                  dataHash
                  type
                }
              }
              ... on StakeTx {
                message
                to
                value
                data {
                  type
                }
              }
              ... on ExchangeTx {
                expiredAt
                to
                data {
                  typeUrl
                  value
                }
                receiver {
                  assets
                  value
                }
                sender {
                  assets
                  value
                }
              }
              ... on DeclareFileTx {
                hash
              }
              ... on DeclareTx {
                issuer
                moniker
                pk
                data {
                  typeUrl
                  value
                }
                type {
                  address
                  hash
                  pk
                  role
                }
              }
              ... on CreateAssetTx {
                moniker
                parent
                readonly
                transferrable
                ttl
                data {
                  typeUrl
                  value
                }
              }
              ... on ConsumeAssetTx {
                address
                issuer
                data {
                  typeUrl
                  value
                }
              }
              ... on ConsensusUpgradeTx {
                maxBytes
                maxCandidates
                maxGas
                maxValidators
                data {
                  typeUrl
                  value
                }
                validators {
                  address
                  power
                }
              }
              ... on PokeTx {
                address
                date
              }
              ... on AccountMigrateTx {
                pk
                type {
                  address
                  hash
                  pk
                  role
                }
              }
            }
          }
        }
        renaissanceTx {
          code
          hash
          height
          index
          time
          accountMigrate {
            address
          }
          createAsset {
            asset
          }
          tags {
            key
            value
          }
          tx {
            chainId
            from
            nonce
            signature
            signatures {
              signature
              signer
              data {
                typeUrl
                value
              }
            }
            itx {
              __typename
              ... on UpdateAssetTx {
                address
                moniker
                data {
                  typeUrl
                  value
                }
              }
              ... on TransferTx {
                assets
                to
                value
                data {
                  typeUrl
                  value
                }
              }
              ... on SysUpgradeTx {
                gracePeriod
                data {
                  typeUrl
                  value
                }
                task {
                  actions
                  dataHash
                  type
                }
              }
              ... on StakeTx {
                message
                to
                value
                data {
                  type
                }
              }
              ... on ExchangeTx {
                expiredAt
                to
                data {
                  typeUrl
                  value
                }
                receiver {
                  assets
                  value
                }
                sender {
                  assets
                  value
                }
              }
              ... on DeclareFileTx {
                hash
              }
              ... on DeclareTx {
                issuer
                moniker
                pk
                data {
                  typeUrl
                  value
                }
                type {
                  address
                  hash
                  pk
                  role
                }
              }
              ... on CreateAssetTx {
                moniker
                parent
                readonly
                transferrable
                ttl
                data {
                  typeUrl
                  value
                }
              }
              ... on ConsumeAssetTx {
                address
                issuer
                data {
                  typeUrl
                  value
                }
              }
              ... on ConsensusUpgradeTx {
                maxBytes
                maxCandidates
                maxGas
                maxValidators
                data {
                  typeUrl
                  value
                }
                validators {
                  address
                  power
                }
              }
              ... on PokeTx {
                address
                date
              }
              ... on AccountMigrateTx {
                pk
                type {
                  address
                  hash
                  pk
                  role
                }
              }
            }
          }
        }
      }
      data {
        typeUrl
        value
      }
      pinnedFiles {
        circular
        fifo
        items
        maxItems
        typeUrl
      }
      poke {
        amount
        dailyLimit
        leftover
      }
      stake {
        totalReceivedStakes
        totalStakes
        totalUnstakes
        recentReceivedStakes {
          circular
          fifo
          items
          maxItems
          typeUrl
        }
        recentStakes {
          circular
          fifo
          items
          maxItems
          typeUrl
        }
      }
      type {
        address
        hash
        pk
        role
      }
    }
  }
}
```

### getAssetAddress

#### Arguments

* **itx**, optional, 
* **senderAddress**, optional, 
* **walletType**, optional, 

#### Result Format

```graphql
{
  getAssetAddress(itx: "abc", senderAddress: "abc", walletType: "abc") {
    assetAddress
    code
  }
}
```

### getAssetState

#### Arguments

* **address**, optional, 
* **height**, optional, 
* **keys**, optional, 

#### Result Format

```graphql
{
  getAssetState(address: "abc", height: 123, keys: ["abc"]) {
    code
    state {
      address
      consumedTime
      issuer
      moniker
      owner
      readonly
      transferrable
      ttl
      context {
        genesisTime
        renaissanceTime
        genesisTx {
          code
          hash
          height
          index
          time
          accountMigrate {
            address
          }
          createAsset {
            asset
          }
          tags {
            key
            value
          }
          tx {
            chainId
            from
            nonce
            signature
            signatures {
              signature
              signer
              data {
                typeUrl
                value
              }
            }
            itx {
              __typename
              ... on UpdateAssetTx {
                address
                moniker
                data {
                  typeUrl
                  value
                }
              }
              ... on TransferTx {
                assets
                to
                value
                data {
                  typeUrl
                  value
                }
              }
              ... on SysUpgradeTx {
                gracePeriod
                data {
                  typeUrl
                  value
                }
                task {
                  actions
                  dataHash
                  type
                }
              }
              ... on StakeTx {
                message
                to
                value
                data {
                  type
                }
              }
              ... on ExchangeTx {
                expiredAt
                to
                data {
                  typeUrl
                  value
                }
                receiver {
                  assets
                  value
                }
                sender {
                  assets
                  value
                }
              }
              ... on DeclareFileTx {
                hash
              }
              ... on DeclareTx {
                issuer
                moniker
                pk
                data {
                  typeUrl
                  value
                }
                type {
                  address
                  hash
                  pk
                  role
                }
              }
              ... on CreateAssetTx {
                moniker
                parent
                readonly
                transferrable
                ttl
                data {
                  typeUrl
                  value
                }
              }
              ... on ConsumeAssetTx {
                address
                issuer
                data {
                  typeUrl
                  value
                }
              }
              ... on ConsensusUpgradeTx {
                maxBytes
                maxCandidates
                maxGas
                maxValidators
                data {
                  typeUrl
                  value
                }
                validators {
                  address
                  power
                }
              }
              ... on PokeTx {
                address
                date
              }
              ... on AccountMigrateTx {
                pk
                type {
                  address
                  hash
                  pk
                  role
                }
              }
            }
          }
        }
        renaissanceTx {
          code
          hash
          height
          index
          time
          accountMigrate {
            address
          }
          createAsset {
            asset
          }
          tags {
            key
            value
          }
          tx {
            chainId
            from
            nonce
            signature
            signatures {
              signature
              signer
              data {
                typeUrl
                value
              }
            }
            itx {
              __typename
              ... on UpdateAssetTx {
                address
                moniker
                data {
                  typeUrl
                  value
                }
              }
              ... on TransferTx {
                assets
                to
                value
                data {
                  typeUrl
                  value
                }
              }
              ... on SysUpgradeTx {
                gracePeriod
                data {
                  typeUrl
                  value
                }
                task {
                  actions
                  dataHash
                  type
                }
              }
              ... on StakeTx {
                message
                to
                value
                data {
                  type
                }
              }
              ... on ExchangeTx {
                expiredAt
                to
                data {
                  typeUrl
                  value
                }
                receiver {
                  assets
                  value
                }
                sender {
                  assets
                  value
                }
              }
              ... on DeclareFileTx {
                hash
              }
              ... on DeclareTx {
                issuer
                moniker
                pk
                data {
                  typeUrl
                  value
                }
                type {
                  address
                  hash
                  pk
                  role
                }
              }
              ... on CreateAssetTx {
                moniker
                parent
                readonly
                transferrable
                ttl
                data {
                  typeUrl
                  value
                }
              }
              ... on ConsumeAssetTx {
                address
                issuer
                data {
                  typeUrl
                  value
                }
              }
              ... on ConsensusUpgradeTx {
                maxBytes
                maxCandidates
                maxGas
                maxValidators
                data {
                  typeUrl
                  value
                }
                validators {
                  address
                  power
                }
              }
              ... on PokeTx {
                address
                date
              }
              ... on AccountMigrateTx {
                pk
                type {
                  address
                  hash
                  pk
                  role
                }
              }
            }
          }
        }
      }
      data {
        typeUrl
        value
      }
      stake {
        totalReceivedStakes
        totalStakes
        totalUnstakes
        recentReceivedStakes {
          circular
          fifo
          items
          maxItems
          typeUrl
        }
        recentStakes {
          circular
          fifo
          items
          maxItems
          typeUrl
        }
      }
    }
  }
}
```

### getAssets

#### Arguments

* **ownerAddress**, optional, 
* **paging**, optional, 

#### Result Format

```graphql
{
  getAssets(ownerAddress: "abc") {
    code
    assets {
      address
      genesisTime
      moniker
      owner
      readonly
      renaissanceTime
    }
    page {
      cursor
      next
      total
    }
  }
}
```

### getBlock

#### Arguments

* **height**, optional, 

#### Result Format

```graphql
{
  getBlock(height: 123) {
    code
    block {
      appHash
      height
      invalidTxsHashes
      numTxs
      proposer
      time
      totalTxs
      txsHashes
      invalidTxs {
        code
        hash
        height
        index
        time
        accountMigrate {
          address
        }
        createAsset {
          asset
        }
        tags {
          key
          value
        }
        tx {
          chainId
          from
          nonce
          signature
          signatures {
            signature
            signer
            data {
              typeUrl
              value
            }
          }
          itx {
            __typename
            ... on UpdateAssetTx {
              address
              moniker
              data {
                typeUrl
                value
              }
            }
            ... on TransferTx {
              assets
              to
              value
              data {
                typeUrl
                value
              }
            }
            ... on SysUpgradeTx {
              gracePeriod
              data {
                typeUrl
                value
              }
              task {
                actions
                dataHash
                type
              }
            }
            ... on StakeTx {
              message
              to
              value
              data {
                type
              }
            }
            ... on ExchangeTx {
              expiredAt
              to
              data {
                typeUrl
                value
              }
              receiver {
                assets
                value
              }
              sender {
                assets
                value
              }
            }
            ... on DeclareFileTx {
              hash
            }
            ... on DeclareTx {
              issuer
              moniker
              pk
              data {
                typeUrl
                value
              }
              type {
                address
                hash
                pk
                role
              }
            }
            ... on CreateAssetTx {
              moniker
              parent
              readonly
              transferrable
              ttl
              data {
                typeUrl
                value
              }
            }
            ... on ConsumeAssetTx {
              address
              issuer
              data {
                typeUrl
                value
              }
            }
            ... on ConsensusUpgradeTx {
              maxBytes
              maxCandidates
              maxGas
              maxValidators
              data {
                typeUrl
                value
              }
              validators {
                address
                power
              }
            }
            ... on PokeTx {
              address
              date
            }
            ... on AccountMigrateTx {
              pk
              type {
                address
                hash
                pk
                role
              }
            }
          }
        }
      }
      txs {
        code
        hash
        height
        index
        time
        accountMigrate {
          address
        }
        createAsset {
          asset
        }
        tags {
          key
          value
        }
        tx {
          chainId
          from
          nonce
          signature
          signatures {
            signature
            signer
            data {
              typeUrl
              value
            }
          }
          itx {
            __typename
            ... on UpdateAssetTx {
              address
              moniker
              data {
                typeUrl
                value
              }
            }
            ... on TransferTx {
              assets
              to
              value
              data {
                typeUrl
                value
              }
            }
            ... on SysUpgradeTx {
              gracePeriod
              data {
                typeUrl
                value
              }
              task {
                actions
                dataHash
                type
              }
            }
            ... on StakeTx {
              message
              to
              value
              data {
                type
              }
            }
            ... on ExchangeTx {
              expiredAt
              to
              data {
                typeUrl
                value
              }
              receiver {
                assets
                value
              }
              sender {
                assets
                value
              }
            }
            ... on DeclareFileTx {
              hash
            }
            ... on DeclareTx {
              issuer
              moniker
              pk
              data {
                typeUrl
                value
              }
              type {
                address
                hash
                pk
                role
              }
            }
            ... on CreateAssetTx {
              moniker
              parent
              readonly
              transferrable
              ttl
              data {
                typeUrl
                value
              }
            }
            ... on ConsumeAssetTx {
              address
              issuer
              data {
                typeUrl
                value
              }
            }
            ... on ConsensusUpgradeTx {
              maxBytes
              maxCandidates
              maxGas
              maxValidators
              data {
                typeUrl
                value
              }
              validators {
                address
                power
              }
            }
            ... on PokeTx {
              address
              date
            }
            ... on AccountMigrateTx {
              pk
              type {
                address
                hash
                pk
                role
              }
            }
          }
        }
      }
    }
  }
}
```

### getBlocks

#### Arguments

* **emptyExcluded**, optional, 
* **maxHeight**, optional, 
* **minHeight**, optional, 
* **paging**, optional, 

#### Result Format

```graphql
{
  getBlocks(emptyExcluded: true, maxHeight: 123, minHeight: 123) {
    code
    blocks {
      appHash
      height
      invalidTxsHashes
      numTxs
      proposer
      time
      totalTxs
      txsHashes
      invalidTxs {
        code
        hash
        height
        index
        time
        accountMigrate {
          address
        }
        createAsset {
          asset
        }
        tags {
          key
          value
        }
        tx {
          chainId
          from
          nonce
          signature
          signatures {
            signature
            signer
            data {
              typeUrl
              value
            }
          }
          itx {
            __typename
            ... on UpdateAssetTx {
              address
              moniker
              data {
                typeUrl
                value
              }
            }
            ... on TransferTx {
              assets
              to
              value
              data {
                typeUrl
                value
              }
            }
            ... on SysUpgradeTx {
              gracePeriod
              data {
                typeUrl
                value
              }
              task {
                actions
                dataHash
                type
              }
            }
            ... on StakeTx {
              message
              to
              value
              data {
                type
              }
            }
            ... on ExchangeTx {
              expiredAt
              to
              data {
                typeUrl
                value
              }
              receiver {
                assets
                value
              }
              sender {
                assets
                value
              }
            }
            ... on DeclareFileTx {
              hash
            }
            ... on DeclareTx {
              issuer
              moniker
              pk
              data {
                typeUrl
                value
              }
              type {
                address
                hash
                pk
                role
              }
            }
            ... on CreateAssetTx {
              moniker
              parent
              readonly
              transferrable
              ttl
              data {
                typeUrl
                value
              }
            }
            ... on ConsumeAssetTx {
              address
              issuer
              data {
                typeUrl
                value
              }
            }
            ... on ConsensusUpgradeTx {
              maxBytes
              maxCandidates
              maxGas
              maxValidators
              data {
                typeUrl
                value
              }
              validators {
                address
                power
              }
            }
            ... on PokeTx {
              address
              date
            }
            ... on AccountMigrateTx {
              pk
              type {
                address
                hash
                pk
                role
              }
            }
          }
        }
      }
      txs {
        code
        hash
        height
        index
        time
        accountMigrate {
          address
        }
        createAsset {
          asset
        }
        tags {
          key
          value
        }
        tx {
          chainId
          from
          nonce
          signature
          signatures {
            signature
            signer
            data {
              typeUrl
              value
            }
          }
          itx {
            __typename
            ... on UpdateAssetTx {
              address
              moniker
              data {
                typeUrl
                value
              }
            }
            ... on TransferTx {
              assets
              to
              value
              data {
                typeUrl
                value
              }
            }
            ... on SysUpgradeTx {
              gracePeriod
              data {
                typeUrl
                value
              }
              task {
                actions
                dataHash
                type
              }
            }
            ... on StakeTx {
              message
              to
              value
              data {
                type
              }
            }
            ... on ExchangeTx {
              expiredAt
              to
              data {
                typeUrl
                value
              }
              receiver {
                assets
                value
              }
              sender {
                assets
                value
              }
            }
            ... on DeclareFileTx {
              hash
            }
            ... on DeclareTx {
              issuer
              moniker
              pk
              data {
                typeUrl
                value
              }
              type {
                address
                hash
                pk
                role
              }
            }
            ... on CreateAssetTx {
              moniker
              parent
              readonly
              transferrable
              ttl
              data {
                typeUrl
                value
              }
            }
            ... on ConsumeAssetTx {
              address
              issuer
              data {
                typeUrl
                value
              }
            }
            ... on ConsensusUpgradeTx {
              maxBytes
              maxCandidates
              maxGas
              maxValidators
              data {
                typeUrl
                value
              }
              validators {
                address
                power
              }
            }
            ... on PokeTx {
              address
              date
            }
            ... on AccountMigrateTx {
              pk
              type {
                address
                hash
                pk
                role
              }
            }
          }
        }
      }
    }
    page {
      cursor
      next
      total
    }
  }
}
```

### getChainInfo

#### Arguments

No arguments

#### Result Format

```graphql
{
  getChainInfo {
    code
    info {
      address
      appHash
      blockHash
      blockHeight
      blockTime
      consensusVersion
      dataVersion
      id
      moniker
      network
      supportedTxs
      synced
      totalTxs
      version
      votingPower
      forgeAppsVersion {
        key
        value
      }
    }
  }
}
```

### getConfig

#### Arguments

No arguments

#### Result Format

```graphql
{
  getConfig {
    code
    config
  }
}
```

### getForgeState

#### Arguments

* **height**, optional, 
* **keys**, optional, 

#### Result Format

```graphql
{
  getForgeState(height: 123, keys: ["abc"]) {
    code
    state {
      address
      dataVersion
      forgeAppHash
      version
      consensus {
        maxBytes
        maxCandidates
        maxGas
        maxValidators
        paramChanged
        pubKeyTypes
        validatorChanged
        validators {
          address
          power
        }
      }
      data {
        typeUrl
        value
      }
      stakeSummary {
        key
        value {
          totalStakes
          totalUnstakes
          context {
            genesisTime
            renaissanceTime
            genesisTx {
              code
              hash
              height
              index
              time
              accountMigrate {
                address
              }
              createAsset {
                asset
              }
              tags {
                key
                value
              }
              tx {
                chainId
                from
                nonce
                signature
              }
            }
            renaissanceTx {
              code
              hash
              height
              index
              time
              accountMigrate {
                address
              }
              createAsset {
                asset
              }
              tags {
                key
                value
              }
              tx {
                chainId
                from
                nonce
                signature
              }
            }
          }
        }
      }
      tasks {
        key
        value {
          item {
            actions
            dataHash
            type
          }
        }
      }
      token {
        decimal
        description
        icon
        inflationRate
        initialSupply
        name
        symbol
        totalSupply
        unit
      }
    }
  }
}
```

### getForgeStatistics

#### Arguments

No arguments

#### Result Format

```graphql
{
  getForgeStatistics {
    code
    forgeStatistics {
      numAccountMigrateTxs
      numBlocks
      numConsensusUpgradeTxs
      numConsumeAssetTxs
      numCreateAssetTxs
      numDeclareFileTxs
      numDeclareTxs
      numExchangeTxs
      numPokeTxs
      numStakes
      numStakeTxs
      numSysUpgradeTxs
      numTransferTxs
      numTxs
      numUpdateAssetTxs
      numValidators
    }
  }
}
```

### getForgeStatisticsByDay

#### Arguments

* **endDate**, optional, 
* **startDate**, optional, 

#### Result Format

```graphql
{
  getForgeStatisticsByDay(endDate: "abc", startDate: "abc") {
    code
    forgeStatistics {
      numAccountMigrateTxs
      numBlocks
      numConsensusUpgradeTxs
      numConsumeAssetTxs
      numCreateAssetTxs
      numDeclareFileTxs
      numDeclareTxs
      numExchangeTxs
      numPokeTxs
      numStakes
      numStakeTxs
      numSysUpgradeTxs
      numTransferTxs
      numTxs
      numUpdateAssetTxs
      numValidators
    }
  }
}
```

### getForgeStatisticsByHour

#### Arguments

* **date**, optional, 

#### Result Format

```graphql
{
  getForgeStatisticsByHour(date: "abc") {
    code
    forgeStatistics {
      numAccountMigrateTxs
      numBlocks
      numConsensusUpgradeTxs
      numConsumeAssetTxs
      numCreateAssetTxs
      numDeclareFileTxs
      numDeclareTxs
      numExchangeTxs
      numPokeTxs
      numStakes
      numStakeTxs
      numSysUpgradeTxs
      numTransferTxs
      numTxs
      numUpdateAssetTxs
      numValidators
    }
  }
}
```

### getNetInfo

#### Arguments

No arguments

#### Result Format

```graphql
{
  getNetInfo {
    code
    netInfo {
      listeners
      listening
      nPeers
      peers {
        consensusVersion
        id
        ip
        moniker
        network
        geoInfo {
          city
          country
          latitude
          longitude
        }
      }
    }
  }
}
```

### getNodeInfo

#### Arguments

No arguments

#### Result Format

```graphql
{
  getNodeInfo {
    code
    info {
      address
      appHash
      blockHash
      blockHeight
      blockTime
      consensusVersion
      dataVersion
      id
      ip
      moniker
      network
      supportedTxs
      synced
      totalTxs
      version
      votingPower
      forgeAppsVersion {
        key
        value
      }
      geoInfo {
        city
        country
        latitude
        longitude
      }
    }
  }
}
```

### getStakeState

#### Arguments

* **address**, optional, 
* **height**, optional, 
* **keys**, optional, 

#### Result Format

```graphql
{
  getStakeState(address: "abc", height: 123, keys: ["abc"]) {
    code
    state {
      address
      balance
      from
      message
      to
      context {
        genesisTime
        renaissanceTime
        genesisTx {
          code
          hash
          height
          index
          time
          accountMigrate {
            address
          }
          createAsset {
            asset
          }
          tags {
            key
            value
          }
          tx {
            chainId
            from
            nonce
            signature
            signatures {
              signature
              signer
              data {
                typeUrl
                value
              }
            }
            itx {
              __typename
              ... on UpdateAssetTx {
                address
                moniker
                data {
                  typeUrl
                  value
                }
              }
              ... on TransferTx {
                assets
                to
                value
                data {
                  typeUrl
                  value
                }
              }
              ... on SysUpgradeTx {
                gracePeriod
                data {
                  typeUrl
                  value
                }
                task {
                  actions
                  dataHash
                  type
                }
              }
              ... on StakeTx {
                message
                to
                value
                data {
                  type
                }
              }
              ... on ExchangeTx {
                expiredAt
                to
                data {
                  typeUrl
                  value
                }
                receiver {
                  assets
                  value
                }
                sender {
                  assets
                  value
                }
              }
              ... on DeclareFileTx {
                hash
              }
              ... on DeclareTx {
                issuer
                moniker
                pk
                data {
                  typeUrl
                  value
                }
                type {
                  address
                  hash
                  pk
                  role
                }
              }
              ... on CreateAssetTx {
                moniker
                parent
                readonly
                transferrable
                ttl
                data {
                  typeUrl
                  value
                }
              }
              ... on ConsumeAssetTx {
                address
                issuer
                data {
                  typeUrl
                  value
                }
              }
              ... on ConsensusUpgradeTx {
                maxBytes
                maxCandidates
                maxGas
                maxValidators
                data {
                  typeUrl
                  value
                }
                validators {
                  address
                  power
                }
              }
              ... on PokeTx {
                address
                date
              }
              ... on AccountMigrateTx {
                pk
                type {
                  address
                  hash
                  pk
                  role
                }
              }
            }
          }
        }
        renaissanceTx {
          code
          hash
          height
          index
          time
          accountMigrate {
            address
          }
          createAsset {
            asset
          }
          tags {
            key
            value
          }
          tx {
            chainId
            from
            nonce
            signature
            signatures {
              signature
              signer
              data {
                typeUrl
                value
              }
            }
            itx {
              __typename
              ... on UpdateAssetTx {
                address
                moniker
                data {
                  typeUrl
                  value
                }
              }
              ... on TransferTx {
                assets
                to
                value
                data {
                  typeUrl
                  value
                }
              }
              ... on SysUpgradeTx {
                gracePeriod
                data {
                  typeUrl
                  value
                }
                task {
                  actions
                  dataHash
                  type
                }
              }
              ... on StakeTx {
                message
                to
                value
                data {
                  type
                }
              }
              ... on ExchangeTx {
                expiredAt
                to
                data {
                  typeUrl
                  value
                }
                receiver {
                  assets
                  value
                }
                sender {
                  assets
                  value
                }
              }
              ... on DeclareFileTx {
                hash
              }
              ... on DeclareTx {
                issuer
                moniker
                pk
                data {
                  typeUrl
                  value
                }
                type {
                  address
                  hash
                  pk
                  role
                }
              }
              ... on CreateAssetTx {
                moniker
                parent
                readonly
                transferrable
                ttl
                data {
                  typeUrl
                  value
                }
              }
              ... on ConsumeAssetTx {
                address
                issuer
                data {
                  typeUrl
                  value
                }
              }
              ... on ConsensusUpgradeTx {
                maxBytes
                maxCandidates
                maxGas
                maxValidators
                data {
                  typeUrl
                  value
                }
                validators {
                  address
                  power
                }
              }
              ... on PokeTx {
                address
                date
              }
              ... on AccountMigrateTx {
                pk
                type {
                  address
                  hash
                  pk
                  role
                }
              }
            }
          }
        }
      }
      data {
        typeUrl
        value
      }
    }
  }
}
```

### getStakes

#### Arguments

* **addressFilter**, optional, 
* **paging**, optional, 

#### Result Format

```graphql
{
  getStakes {
    code
    page {
      cursor
      next
      total
    }
    stakes {
      address
      balance
      genesisTime
      message
      receiver
      renaissanceTime
      sender
      type
    }
  }
}
```

### getTopAccounts

#### Arguments

* **paging**, optional, 

#### Result Format

```graphql
{
  getTopAccounts {
    code
    accounts {
      address
      balance
      genesisTime
      migratedFrom
      migratedTo
      moniker
      nonce
      numAssets
      numTxs
      recentNumTxs
      renaissanceTime
      totalReceivedStakes
      totalStakes
      totalUnstakes
    }
    page {
      cursor
      next
      total
    }
  }
}
```

### getTx

#### Arguments

* **hash**, optional, 

#### Result Format

```graphql
{
  getTx(hash: "abc") {
    code
    info {
      code
      hash
      height
      index
      time
      accountMigrate {
        address
      }
      createAsset {
        asset
      }
      tags {
        key
        value
      }
      tx {
        chainId
        from
        nonce
        signature
        signatures {
          signature
          signer
          data {
            typeUrl
            value
          }
        }
        itx {
          __typename
          ... on UpdateAssetTx {
            address
            moniker
            data {
              typeUrl
              value
            }
          }
          ... on TransferTx {
            assets
            to
            value
            data {
              typeUrl
              value
            }
          }
          ... on SysUpgradeTx {
            gracePeriod
            data {
              typeUrl
              value
            }
            task {
              actions
              dataHash
              type
            }
          }
          ... on StakeTx {
            message
            to
            value
            data {
              type
            }
          }
          ... on ExchangeTx {
            expiredAt
            to
            data {
              typeUrl
              value
            }
            receiver {
              assets
              value
            }
            sender {
              assets
              value
            }
          }
          ... on DeclareFileTx {
            hash
          }
          ... on DeclareTx {
            issuer
            moniker
            pk
            data {
              typeUrl
              value
            }
            type {
              address
              hash
              pk
              role
            }
          }
          ... on CreateAssetTx {
            moniker
            parent
            readonly
            transferrable
            ttl
            data {
              typeUrl
              value
            }
          }
          ... on ConsumeAssetTx {
            address
            issuer
            data {
              typeUrl
              value
            }
          }
          ... on ConsensusUpgradeTx {
            maxBytes
            maxCandidates
            maxGas
            maxValidators
            data {
              typeUrl
              value
            }
            validators {
              address
              power
            }
          }
          ... on PokeTx {
            address
            date
          }
          ... on AccountMigrateTx {
            pk
            type {
              address
              hash
              pk
              role
            }
          }
        }
      }
    }
  }
}
```

### getUnconfirmedTxs

#### Arguments

* **limit**, optional, 

#### Result Format

```graphql
{
  getUnconfirmedTxs(limit: 123) {
    code
    unconfirmedTxs {
      nTxs
      txs {
        chainId
        from
        nonce
        signature
        signatures {
          signature
          signer
          data {
            typeUrl
            value
          }
        }
        itx {
          __typename
          ... on UpdateAssetTx {
            address
            moniker
            data {
              typeUrl
              value
            }
          }
          ... on TransferTx {
            assets
            to
            value
            data {
              typeUrl
              value
            }
          }
          ... on SysUpgradeTx {
            gracePeriod
            data {
              typeUrl
              value
            }
            task {
              actions
              dataHash
              type
            }
          }
          ... on StakeTx {
            message
            to
            value
            data {
              type
            }
          }
          ... on ExchangeTx {
            expiredAt
            to
            data {
              typeUrl
              value
            }
            receiver {
              assets
              value
            }
            sender {
              assets
              value
            }
          }
          ... on DeclareFileTx {
            hash
          }
          ... on DeclareTx {
            issuer
            moniker
            pk
            data {
              typeUrl
              value
            }
            type {
              address
              hash
              pk
              role
            }
          }
          ... on CreateAssetTx {
            moniker
            parent
            readonly
            transferrable
            ttl
            data {
              typeUrl
              value
            }
          }
          ... on ConsumeAssetTx {
            address
            issuer
            data {
              typeUrl
              value
            }
          }
          ... on ConsensusUpgradeTx {
            maxBytes
            maxCandidates
            maxGas
            maxValidators
            data {
              typeUrl
              value
            }
            validators {
              address
              power
            }
          }
          ... on PokeTx {
            address
            date
          }
          ... on AccountMigrateTx {
            pk
            type {
              address
              hash
              pk
              role
            }
          }
        }
      }
    }
  }
}
```

### getValidatorsInfo

#### Arguments

No arguments

#### Result Format

```graphql
{
  getValidatorsInfo {
    code
    validatorsInfo {
      blockHeight
      validators {
        address
        name
        proposerPriority
        votingPower
        pubKey {
          data
          type
        }
      }
    }
  }
}
```

### listAssetTransactions

#### Arguments

* **address**, optional, 
* **paging**, optional, 

#### Result Format

```graphql
{
  listAssetTransactions(address: "abc") {
    code
    page {
      cursor
      next
      total
    }
    transactions {
      hash
      receiver
      sender
      time
      type
      consumeAsset {
        asset
      }
      createAsset {
        asset
      }
      exchange {
        receiverAssets
        senderAssets
      }
      transfer {
        assets
      }
      tx {
        chainId
        from
        nonce
        signature
        signatures {
          signature
          signer
          data {
            typeUrl
            value
          }
        }
        itx {
          __typename
          ... on UpdateAssetTx {
            address
            moniker
            data {
              typeUrl
              value
            }
          }
          ... on TransferTx {
            assets
            to
            value
            data {
              typeUrl
              value
            }
          }
          ... on SysUpgradeTx {
            gracePeriod
            data {
              typeUrl
              value
            }
            task {
              actions
              dataHash
              type
            }
          }
          ... on StakeTx {
            message
            to
            value
            data {
              type
            }
          }
          ... on ExchangeTx {
            expiredAt
            to
            data {
              typeUrl
              value
            }
            receiver {
              assets
              value
            }
            sender {
              assets
              value
            }
          }
          ... on DeclareFileTx {
            hash
          }
          ... on DeclareTx {
            issuer
            moniker
            pk
            data {
              typeUrl
              value
            }
            type {
              address
              hash
              pk
              role
            }
          }
          ... on CreateAssetTx {
            moniker
            parent
            readonly
            transferrable
            ttl
            data {
              typeUrl
              value
            }
          }
          ... on ConsumeAssetTx {
            address
            issuer
            data {
              typeUrl
              value
            }
          }
          ... on ConsensusUpgradeTx {
            maxBytes
            maxCandidates
            maxGas
            maxValidators
            data {
              typeUrl
              value
            }
            validators {
              address
              power
            }
          }
          ... on PokeTx {
            address
            date
          }
          ... on AccountMigrateTx {
            pk
            type {
              address
              hash
              pk
              role
            }
          }
        }
      }
      updateAsset {
        asset
      }
    }
  }
}
```

### listTransactions

#### Arguments

* **addressFilter**, optional, 
* **paging**, optional, 
* **timeFilter**, optional, 
* **typeFilter**, optional, 

#### Result Format

```graphql
{
  listTransactions {
    code
    page {
      cursor
      next
      total
    }
    transactions {
      hash
      receiver
      sender
      time
      type
      consumeAsset {
        asset
      }
      createAsset {
        asset
      }
      exchange {
        receiverAssets
        senderAssets
      }
      transfer {
        assets
      }
      tx {
        chainId
        from
        nonce
        signature
        signatures {
          signature
          signer
          data {
            typeUrl
            value
          }
        }
        itx {
          __typename
          ... on UpdateAssetTx {
            address
            moniker
            data {
              typeUrl
              value
            }
          }
          ... on TransferTx {
            assets
            to
            value
            data {
              typeUrl
              value
            }
          }
          ... on SysUpgradeTx {
            gracePeriod
            data {
              typeUrl
              value
            }
            task {
              actions
              dataHash
              type
            }
          }
          ... on StakeTx {
            message
            to
            value
            data {
              type
            }
          }
          ... on ExchangeTx {
            expiredAt
            to
            data {
              typeUrl
              value
            }
            receiver {
              assets
              value
            }
            sender {
              assets
              value
            }
          }
          ... on DeclareFileTx {
            hash
          }
          ... on DeclareTx {
            issuer
            moniker
            pk
            data {
              typeUrl
              value
            }
            type {
              address
              hash
              pk
              role
            }
          }
          ... on CreateAssetTx {
            moniker
            parent
            readonly
            transferrable
            ttl
            data {
              typeUrl
              value
            }
          }
          ... on ConsumeAssetTx {
            address
            issuer
            data {
              typeUrl
              value
            }
          }
          ... on ConsensusUpgradeTx {
            maxBytes
            maxCandidates
            maxGas
            maxValidators
            data {
              typeUrl
              value
            }
            validators {
              address
              power
            }
          }
          ... on PokeTx {
            address
            date
          }
          ... on AccountMigrateTx {
            pk
            type {
              address
              hash
              pk
              role
            }
          }
        }
      }
      updateAsset {
        asset
      }
    }
  }
}
```

### listWallet

#### Arguments

No arguments

#### Result Format

```graphql
{
  listWallet {
    address
    code
  }
}
```

### loadFile

#### Arguments

* **hash**, optional, 

#### Result Format

```graphql
{
  loadFile(hash: "abc") {
    chunk
    code
  }
}
```

### loadWallet

#### Arguments

* **address**, optional, 
* **passphrase**, optional, 

#### Result Format

```graphql
{
  loadWallet(address: "abc", passphrase: "abc") {
    code
    token
    wallet {
      address
      pk
      sk
      type {
        address
        hash
        pk
        role
      }
    }
  }
}
```

### multisig

#### Arguments

* **data**, optional, 
* **token**, optional, 
* **tx**, optional, 
* **wallet**, optional, 

#### Result Format

```graphql
{
  multisig(data: "abc", token: "abc", tx: "abc", wallet: "abc") {
    code
    tx {
      chainId
      from
      nonce
      signature
      signatures {
        signature
        signer
        data {
          typeUrl
          value
        }
      }
      itx {
        __typename
        ... on UpdateAssetTx {
          address
          moniker
          data {
            typeUrl
            value
          }
        }
        ... on TransferTx {
          assets
          to
          value
          data {
            typeUrl
            value
          }
        }
        ... on SysUpgradeTx {
          gracePeriod
          data {
            typeUrl
            value
          }
          task {
            actions
            dataHash
            type
          }
        }
        ... on StakeTx {
          message
          to
          value
          data {
            type
          }
        }
        ... on ExchangeTx {
          expiredAt
          to
          data {
            typeUrl
            value
          }
          receiver {
            assets
            value
          }
          sender {
            assets
            value
          }
        }
        ... on DeclareFileTx {
          hash
        }
        ... on DeclareTx {
          issuer
          moniker
          pk
          data {
            typeUrl
            value
          }
          type {
            address
            hash
            pk
            role
          }
        }
        ... on CreateAssetTx {
          moniker
          parent
          readonly
          transferrable
          ttl
          data {
            typeUrl
            value
          }
        }
        ... on ConsumeAssetTx {
          address
          issuer
          data {
            typeUrl
            value
          }
        }
        ... on ConsensusUpgradeTx {
          maxBytes
          maxCandidates
          maxGas
          maxValidators
          data {
            typeUrl
            value
          }
          validators {
            address
            power
          }
        }
        ... on PokeTx {
          address
          date
        }
        ... on AccountMigrateTx {
          pk
          type {
            address
            hash
            pk
            role
          }
        }
      }
    }
  }
}
```

### pinFile

#### Arguments

* **hash**, optional, 

#### Result Format

```graphql
{
  pinFile(hash: "abc") {
    code
  }
}
```

### search

#### Arguments

* **key**, optional, 
* **value**, optional, 

#### Result Format

```graphql
{
  search(key: "abc", value: "abc") {
    code
    txs {
      code
      hash
      height
      index
      time
      accountMigrate {
        address
      }
      createAsset {
        asset
      }
      tags {
        key
        value
      }
      tx {
        chainId
        from
        nonce
        signature
        signatures {
          signature
          signer
          data {
            typeUrl
            value
          }
        }
        itx {
          __typename
          ... on UpdateAssetTx {
            address
            moniker
            data {
              typeUrl
              value
            }
          }
          ... on TransferTx {
            assets
            to
            value
            data {
              typeUrl
              value
            }
          }
          ... on SysUpgradeTx {
            gracePeriod
            data {
              typeUrl
              value
            }
            task {
              actions
              dataHash
              type
            }
          }
          ... on StakeTx {
            message
            to
            value
            data {
              type
            }
          }
          ... on ExchangeTx {
            expiredAt
            to
            data {
              typeUrl
              value
            }
            receiver {
              assets
              value
            }
            sender {
              assets
              value
            }
          }
          ... on DeclareFileTx {
            hash
          }
          ... on DeclareTx {
            issuer
            moniker
            pk
            data {
              typeUrl
              value
            }
            type {
              address
              hash
              pk
              role
            }
          }
          ... on CreateAssetTx {
            moniker
            parent
            readonly
            transferrable
            ttl
            data {
              typeUrl
              value
            }
          }
          ... on ConsumeAssetTx {
            address
            issuer
            data {
              typeUrl
              value
            }
          }
          ... on ConsensusUpgradeTx {
            maxBytes
            maxCandidates
            maxGas
            maxValidators
            data {
              typeUrl
              value
            }
            validators {
              address
              power
            }
          }
          ... on PokeTx {
            address
            date
          }
          ... on AccountMigrateTx {
            pk
            type {
              address
              hash
              pk
              role
            }
          }
        }
      }
    }
  }
}
```

### signData

#### Arguments

* **data**, optional, 
* **token**, optional, 
* **wallet**, optional, 

#### Result Format

```graphql
{
  signData(data: "abc", token: "abc", wallet: "abc") {
    code
    signature
  }
}
```


## Subscriptions

### subscribe

#### Arguments

* **filter**, optional, 
* **type**, optional, 

#### Result Format

```graphql
subscription {
  subscribe(filter: "abc", type: "abc") {
    code
    topic
    accountMigrate {
      chainId
      from
      nonce
      signature
      signatures {
        signature
        signer
        data {
          typeUrl
          value
        }
      }
      itx {
        __typename
        ... on UpdateAssetTx {
          address
          moniker
          data {
            typeUrl
            value
          }
        }
        ... on TransferTx {
          assets
          to
          value
          data {
            typeUrl
            value
          }
        }
        ... on SysUpgradeTx {
          gracePeriod
          data {
            typeUrl
            value
          }
          task {
            actions
            dataHash
            type
          }
        }
        ... on StakeTx {
          message
          to
          value
          data {
            type
          }
        }
        ... on ExchangeTx {
          expiredAt
          to
          data {
            typeUrl
            value
          }
          receiver {
            assets
            value
          }
          sender {
            assets
            value
          }
        }
        ... on DeclareFileTx {
          hash
        }
        ... on DeclareTx {
          issuer
          moniker
          pk
          data {
            typeUrl
            value
          }
          type {
            address
            hash
            pk
            role
          }
        }
        ... on CreateAssetTx {
          moniker
          parent
          readonly
          transferrable
          ttl
          data {
            typeUrl
            value
          }
        }
        ... on ConsumeAssetTx {
          address
          issuer
          data {
            typeUrl
            value
          }
        }
        ... on ConsensusUpgradeTx {
          maxBytes
          maxCandidates
          maxGas
          maxValidators
          data {
            typeUrl
            value
          }
          validators {
            address
            power
          }
        }
        ... on PokeTx {
          address
          date
        }
        ... on AccountMigrateTx {
          pk
          type {
            address
            hash
            pk
            role
          }
        }
      }
    }
    accountState {
      chainId
      from
      nonce
      signature
      signatures {
        signature
        signer
        data {
          typeUrl
          value
        }
      }
      itx {
        __typename
        ... on UpdateAssetTx {
          address
          moniker
          data {
            typeUrl
            value
          }
        }
        ... on TransferTx {
          assets
          to
          value
          data {
            typeUrl
            value
          }
        }
        ... on SysUpgradeTx {
          gracePeriod
          data {
            typeUrl
            value
          }
          task {
            actions
            dataHash
            type
          }
        }
        ... on StakeTx {
          message
          to
          value
          data {
            type
          }
        }
        ... on ExchangeTx {
          expiredAt
          to
          data {
            typeUrl
            value
          }
          receiver {
            assets
            value
          }
          sender {
            assets
            value
          }
        }
        ... on DeclareFileTx {
          hash
        }
        ... on DeclareTx {
          issuer
          moniker
          pk
          data {
            typeUrl
            value
          }
          type {
            address
            hash
            pk
            role
          }
        }
        ... on CreateAssetTx {
          moniker
          parent
          readonly
          transferrable
          ttl
          data {
            typeUrl
            value
          }
        }
        ... on ConsumeAssetTx {
          address
          issuer
          data {
            typeUrl
            value
          }
        }
        ... on ConsensusUpgradeTx {
          maxBytes
          maxCandidates
          maxGas
          maxValidators
          data {
            typeUrl
            value
          }
          validators {
            address
            power
          }
        }
        ... on PokeTx {
          address
          date
        }
        ... on AccountMigrateTx {
          pk
          type {
            address
            hash
            pk
            role
          }
        }
      }
    }
    assetState {
      chainId
      from
      nonce
      signature
      signatures {
        signature
        signer
        data {
          typeUrl
          value
        }
      }
      itx {
        __typename
        ... on UpdateAssetTx {
          address
          moniker
          data {
            typeUrl
            value
          }
        }
        ... on TransferTx {
          assets
          to
          value
          data {
            typeUrl
            value
          }
        }
        ... on SysUpgradeTx {
          gracePeriod
          data {
            typeUrl
            value
          }
          task {
            actions
            dataHash
            type
          }
        }
        ... on StakeTx {
          message
          to
          value
          data {
            type
          }
        }
        ... on ExchangeTx {
          expiredAt
          to
          data {
            typeUrl
            value
          }
          receiver {
            assets
            value
          }
          sender {
            assets
            value
          }
        }
        ... on DeclareFileTx {
          hash
        }
        ... on DeclareTx {
          issuer
          moniker
          pk
          data {
            typeUrl
            value
          }
          type {
            address
            hash
            pk
            role
          }
        }
        ... on CreateAssetTx {
          moniker
          parent
          readonly
          transferrable
          ttl
          data {
            typeUrl
            value
          }
        }
        ... on ConsumeAssetTx {
          address
          issuer
          data {
            typeUrl
            value
          }
        }
        ... on ConsensusUpgradeTx {
          maxBytes
          maxCandidates
          maxGas
          maxValidators
          data {
            typeUrl
            value
          }
          validators {
            address
            power
          }
        }
        ... on PokeTx {
          address
          date
        }
        ... on AccountMigrateTx {
          pk
          type {
            address
            hash
            pk
            role
          }
        }
      }
    }
    beginBlock {
      hash
      byzantineValidators {
        height
        time
        totalVotingPower
        type
        validator {
          address
          power
        }
      }
      header {
        appHash
        chainId
        consensusHash
        dataHash
        evidenceHash
        height
        lastCommitHash
        lastResultsHash
        nextValidatorsHash
        numTxs
        proposerAddress
        time
        totalTxs
        validatorsHash
        lastBlockId {
          hash
          partsHeader {
            hash
            total
          }
        }
        version {
          App
          Block
        }
      }
      lastCommitInfo {
        round
        votes {
          signedLastBlock
          validator {
            address
            power
          }
        }
      }
    }
    confirm {
      chainId
      from
      nonce
      signature
      signatures {
        signature
        signer
        data {
          typeUrl
          value
        }
      }
      itx {
        __typename
        ... on UpdateAssetTx {
          address
          moniker
          data {
            typeUrl
            value
          }
        }
        ... on TransferTx {
          assets
          to
          value
          data {
            typeUrl
            value
          }
        }
        ... on SysUpgradeTx {
          gracePeriod
          data {
            typeUrl
            value
          }
          task {
            actions
            dataHash
            type
          }
        }
        ... on StakeTx {
          message
          to
          value
          data {
            type
          }
        }
        ... on ExchangeTx {
          expiredAt
          to
          data {
            typeUrl
            value
          }
          receiver {
            assets
            value
          }
          sender {
            assets
            value
          }
        }
        ... on DeclareFileTx {
          hash
        }
        ... on DeclareTx {
          issuer
          moniker
          pk
          data {
            typeUrl
            value
          }
          type {
            address
            hash
            pk
            role
          }
        }
        ... on CreateAssetTx {
          moniker
          parent
          readonly
          transferrable
          ttl
          data {
            typeUrl
            value
          }
        }
        ... on ConsumeAssetTx {
          address
          issuer
          data {
            typeUrl
            value
          }
        }
        ... on ConsensusUpgradeTx {
          maxBytes
          maxCandidates
          maxGas
          maxValidators
          data {
            typeUrl
            value
          }
          validators {
            address
            power
          }
        }
        ... on PokeTx {
          address
          date
        }
        ... on AccountMigrateTx {
          pk
          type {
            address
            hash
            pk
            role
          }
        }
      }
    }
    consensusUpgrade {
      chainId
      from
      nonce
      signature
      signatures {
        signature
        signer
        data {
          typeUrl
          value
        }
      }
      itx {
        __typename
        ... on UpdateAssetTx {
          address
          moniker
          data {
            typeUrl
            value
          }
        }
        ... on TransferTx {
          assets
          to
          value
          data {
            typeUrl
            value
          }
        }
        ... on SysUpgradeTx {
          gracePeriod
          data {
            typeUrl
            value
          }
          task {
            actions
            dataHash
            type
          }
        }
        ... on StakeTx {
          message
          to
          value
          data {
            type
          }
        }
        ... on ExchangeTx {
          expiredAt
          to
          data {
            typeUrl
            value
          }
          receiver {
            assets
            value
          }
          sender {
            assets
            value
          }
        }
        ... on DeclareFileTx {
          hash
        }
        ... on DeclareTx {
          issuer
          moniker
          pk
          data {
            typeUrl
            value
          }
          type {
            address
            hash
            pk
            role
          }
        }
        ... on CreateAssetTx {
          moniker
          parent
          readonly
          transferrable
          ttl
          data {
            typeUrl
            value
          }
        }
        ... on ConsumeAssetTx {
          address
          issuer
          data {
            typeUrl
            value
          }
        }
        ... on ConsensusUpgradeTx {
          maxBytes
          maxCandidates
          maxGas
          maxValidators
          data {
            typeUrl
            value
          }
          validators {
            address
            power
          }
        }
        ... on PokeTx {
          address
          date
        }
        ... on AccountMigrateTx {
          pk
          type {
            address
            hash
            pk
            role
          }
        }
      }
    }
    createAsset {
      chainId
      from
      nonce
      signature
      signatures {
        signature
        signer
        data {
          typeUrl
          value
        }
      }
      itx {
        __typename
        ... on UpdateAssetTx {
          address
          moniker
          data {
            typeUrl
            value
          }
        }
        ... on TransferTx {
          assets
          to
          value
          data {
            typeUrl
            value
          }
        }
        ... on SysUpgradeTx {
          gracePeriod
          data {
            typeUrl
            value
          }
          task {
            actions
            dataHash
            type
          }
        }
        ... on StakeTx {
          message
          to
          value
          data {
            type
          }
        }
        ... on ExchangeTx {
          expiredAt
          to
          data {
            typeUrl
            value
          }
          receiver {
            assets
            value
          }
          sender {
            assets
            value
          }
        }
        ... on DeclareFileTx {
          hash
        }
        ... on DeclareTx {
          issuer
          moniker
          pk
          data {
            typeUrl
            value
          }
          type {
            address
            hash
            pk
            role
          }
        }
        ... on CreateAssetTx {
          moniker
          parent
          readonly
          transferrable
          ttl
          data {
            typeUrl
            value
          }
        }
        ... on ConsumeAssetTx {
          address
          issuer
          data {
            typeUrl
            value
          }
        }
        ... on ConsensusUpgradeTx {
          maxBytes
          maxCandidates
          maxGas
          maxValidators
          data {
            typeUrl
            value
          }
          validators {
            address
            power
          }
        }
        ... on PokeTx {
          address
          date
        }
        ... on AccountMigrateTx {
          pk
          type {
            address
            hash
            pk
            role
          }
        }
      }
    }
    declare {
      chainId
      from
      nonce
      signature
      signatures {
        signature
        signer
        data {
          typeUrl
          value
        }
      }
      itx {
        __typename
        ... on UpdateAssetTx {
          address
          moniker
          data {
            typeUrl
            value
          }
        }
        ... on TransferTx {
          assets
          to
          value
          data {
            typeUrl
            value
          }
        }
        ... on SysUpgradeTx {
          gracePeriod
          data {
            typeUrl
            value
          }
          task {
            actions
            dataHash
            type
          }
        }
        ... on StakeTx {
          message
          to
          value
          data {
            type
          }
        }
        ... on ExchangeTx {
          expiredAt
          to
          data {
            typeUrl
            value
          }
          receiver {
            assets
            value
          }
          sender {
            assets
            value
          }
        }
        ... on DeclareFileTx {
          hash
        }
        ... on DeclareTx {
          issuer
          moniker
          pk
          data {
            typeUrl
            value
          }
          type {
            address
            hash
            pk
            role
          }
        }
        ... on CreateAssetTx {
          moniker
          parent
          readonly
          transferrable
          ttl
          data {
            typeUrl
            value
          }
        }
        ... on ConsumeAssetTx {
          address
          issuer
          data {
            typeUrl
            value
          }
        }
        ... on ConsensusUpgradeTx {
          maxBytes
          maxCandidates
          maxGas
          maxValidators
          data {
            typeUrl
            value
          }
          validators {
            address
            power
          }
        }
        ... on PokeTx {
          address
          date
        }
        ... on AccountMigrateTx {
          pk
          type {
            address
            hash
            pk
            role
          }
        }
      }
    }
    declareFile {
      chainId
      from
      nonce
      signature
      signatures {
        signature
        signer
        data {
          typeUrl
          value
        }
      }
      itx {
        __typename
        ... on UpdateAssetTx {
          address
          moniker
          data {
            typeUrl
            value
          }
        }
        ... on TransferTx {
          assets
          to
          value
          data {
            typeUrl
            value
          }
        }
        ... on SysUpgradeTx {
          gracePeriod
          data {
            typeUrl
            value
          }
          task {
            actions
            dataHash
            type
          }
        }
        ... on StakeTx {
          message
          to
          value
          data {
            type
          }
        }
        ... on ExchangeTx {
          expiredAt
          to
          data {
            typeUrl
            value
          }
          receiver {
            assets
            value
          }
          sender {
            assets
            value
          }
        }
        ... on DeclareFileTx {
          hash
        }
        ... on DeclareTx {
          issuer
          moniker
          pk
          data {
            typeUrl
            value
          }
          type {
            address
            hash
            pk
            role
          }
        }
        ... on CreateAssetTx {
          moniker
          parent
          readonly
          transferrable
          ttl
          data {
            typeUrl
            value
          }
        }
        ... on ConsumeAssetTx {
          address
          issuer
          data {
            typeUrl
            value
          }
        }
        ... on ConsensusUpgradeTx {
          maxBytes
          maxCandidates
          maxGas
          maxValidators
          data {
            typeUrl
            value
          }
          validators {
            address
            power
          }
        }
        ... on PokeTx {
          address
          date
        }
        ... on AccountMigrateTx {
          pk
          type {
            address
            hash
            pk
            role
          }
        }
      }
    }
    endBlock {
      height
    }
    exchange {
      chainId
      from
      nonce
      signature
      signatures {
        signature
        signer
        data {
          typeUrl
          value
        }
      }
      itx {
        __typename
        ... on UpdateAssetTx {
          address
          moniker
          data {
            typeUrl
            value
          }
        }
        ... on TransferTx {
          assets
          to
          value
          data {
            typeUrl
            value
          }
        }
        ... on SysUpgradeTx {
          gracePeriod
          data {
            typeUrl
            value
          }
          task {
            actions
            dataHash
            type
          }
        }
        ... on StakeTx {
          message
          to
          value
          data {
            type
          }
        }
        ... on ExchangeTx {
          expiredAt
          to
          data {
            typeUrl
            value
          }
          receiver {
            assets
            value
          }
          sender {
            assets
            value
          }
        }
        ... on DeclareFileTx {
          hash
        }
        ... on DeclareTx {
          issuer
          moniker
          pk
          data {
            typeUrl
            value
          }
          type {
            address
            hash
            pk
            role
          }
        }
        ... on CreateAssetTx {
          moniker
          parent
          readonly
          transferrable
          ttl
          data {
            typeUrl
            value
          }
        }
        ... on ConsumeAssetTx {
          address
          issuer
          data {
            typeUrl
            value
          }
        }
        ... on ConsensusUpgradeTx {
          maxBytes
          maxCandidates
          maxGas
          maxValidators
          data {
            typeUrl
            value
          }
          validators {
            address
            power
          }
        }
        ... on PokeTx {
          address
          date
        }
        ... on AccountMigrateTx {
          pk
          type {
            address
            hash
            pk
            role
          }
        }
      }
    }
    forgeState {
      chainId
      from
      nonce
      signature
      signatures {
        signature
        signer
        data {
          typeUrl
          value
        }
      }
      itx {
        __typename
        ... on UpdateAssetTx {
          address
          moniker
          data {
            typeUrl
            value
          }
        }
        ... on TransferTx {
          assets
          to
          value
          data {
            typeUrl
            value
          }
        }
        ... on SysUpgradeTx {
          gracePeriod
          data {
            typeUrl
            value
          }
          task {
            actions
            dataHash
            type
          }
        }
        ... on StakeTx {
          message
          to
          value
          data {
            type
          }
        }
        ... on ExchangeTx {
          expiredAt
          to
          data {
            typeUrl
            value
          }
          receiver {
            assets
            value
          }
          sender {
            assets
            value
          }
        }
        ... on DeclareFileTx {
          hash
        }
        ... on DeclareTx {
          issuer
          moniker
          pk
          data {
            typeUrl
            value
          }
          type {
            address
            hash
            pk
            role
          }
        }
        ... on CreateAssetTx {
          moniker
          parent
          readonly
          transferrable
          ttl
          data {
            typeUrl
            value
          }
        }
        ... on ConsumeAssetTx {
          address
          issuer
          data {
            typeUrl
            value
          }
        }
        ... on ConsensusUpgradeTx {
          maxBytes
          maxCandidates
          maxGas
          maxValidators
          data {
            typeUrl
            value
          }
          validators {
            address
            power
          }
        }
        ... on PokeTx {
          address
          date
        }
        ... on AccountMigrateTx {
          pk
          type {
            address
            hash
            pk
            role
          }
        }
      }
    }
    revoke {
      chainId
      from
      nonce
      signature
      signatures {
        signature
        signer
        data {
          typeUrl
          value
        }
      }
      itx {
        __typename
        ... on UpdateAssetTx {
          address
          moniker
          data {
            typeUrl
            value
          }
        }
        ... on TransferTx {
          assets
          to
          value
          data {
            typeUrl
            value
          }
        }
        ... on SysUpgradeTx {
          gracePeriod
          data {
            typeUrl
            value
          }
          task {
            actions
            dataHash
            type
          }
        }
        ... on StakeTx {
          message
          to
          value
          data {
            type
          }
        }
        ... on ExchangeTx {
          expiredAt
          to
          data {
            typeUrl
            value
          }
          receiver {
            assets
            value
          }
          sender {
            assets
            value
          }
        }
        ... on DeclareFileTx {
          hash
        }
        ... on DeclareTx {
          issuer
          moniker
          pk
          data {
            typeUrl
            value
          }
          type {
            address
            hash
            pk
            role
          }
        }
        ... on CreateAssetTx {
          moniker
          parent
          readonly
          transferrable
          ttl
          data {
            typeUrl
            value
          }
        }
        ... on ConsumeAssetTx {
          address
          issuer
          data {
            typeUrl
            value
          }
        }
        ... on ConsensusUpgradeTx {
          maxBytes
          maxCandidates
          maxGas
          maxValidators
          data {
            typeUrl
            value
          }
          validators {
            address
            power
          }
        }
        ... on PokeTx {
          address
          date
        }
        ... on AccountMigrateTx {
          pk
          type {
            address
            hash
            pk
            role
          }
        }
      }
    }
    stake {
      chainId
      from
      nonce
      signature
      signatures {
        signature
        signer
        data {
          typeUrl
          value
        }
      }
      itx {
        __typename
        ... on UpdateAssetTx {
          address
          moniker
          data {
            typeUrl
            value
          }
        }
        ... on TransferTx {
          assets
          to
          value
          data {
            typeUrl
            value
          }
        }
        ... on SysUpgradeTx {
          gracePeriod
          data {
            typeUrl
            value
          }
          task {
            actions
            dataHash
            type
          }
        }
        ... on StakeTx {
          message
          to
          value
          data {
            type
          }
        }
        ... on ExchangeTx {
          expiredAt
          to
          data {
            typeUrl
            value
          }
          receiver {
            assets
            value
          }
          sender {
            assets
            value
          }
        }
        ... on DeclareFileTx {
          hash
        }
        ... on DeclareTx {
          issuer
          moniker
          pk
          data {
            typeUrl
            value
          }
          type {
            address
            hash
            pk
            role
          }
        }
        ... on CreateAssetTx {
          moniker
          parent
          readonly
          transferrable
          ttl
          data {
            typeUrl
            value
          }
        }
        ... on ConsumeAssetTx {
          address
          issuer
          data {
            typeUrl
            value
          }
        }
        ... on ConsensusUpgradeTx {
          maxBytes
          maxCandidates
          maxGas
          maxValidators
          data {
            typeUrl
            value
          }
          validators {
            address
            power
          }
        }
        ... on PokeTx {
          address
          date
        }
        ... on AccountMigrateTx {
          pk
          type {
            address
            hash
            pk
            role
          }
        }
      }
    }
    stakeState {
      chainId
      from
      nonce
      signature
      signatures {
        signature
        signer
        data {
          typeUrl
          value
        }
      }
      itx {
        __typename
        ... on UpdateAssetTx {
          address
          moniker
          data {
            typeUrl
            value
          }
        }
        ... on TransferTx {
          assets
          to
          value
          data {
            typeUrl
            value
          }
        }
        ... on SysUpgradeTx {
          gracePeriod
          data {
            typeUrl
            value
          }
          task {
            actions
            dataHash
            type
          }
        }
        ... on StakeTx {
          message
          to
          value
          data {
            type
          }
        }
        ... on ExchangeTx {
          expiredAt
          to
          data {
            typeUrl
            value
          }
          receiver {
            assets
            value
          }
          sender {
            assets
            value
          }
        }
        ... on DeclareFileTx {
          hash
        }
        ... on DeclareTx {
          issuer
          moniker
          pk
          data {
            typeUrl
            value
          }
          type {
            address
            hash
            pk
            role
          }
        }
        ... on CreateAssetTx {
          moniker
          parent
          readonly
          transferrable
          ttl
          data {
            typeUrl
            value
          }
        }
        ... on ConsumeAssetTx {
          address
          issuer
          data {
            typeUrl
            value
          }
        }
        ... on ConsensusUpgradeTx {
          maxBytes
          maxCandidates
          maxGas
          maxValidators
          data {
            typeUrl
            value
          }
          validators {
            address
            power
          }
        }
        ... on PokeTx {
          address
          date
        }
        ... on AccountMigrateTx {
          pk
          type {
            address
            hash
            pk
            role
          }
        }
      }
    }
    sysUpgrade {
      chainId
      from
      nonce
      signature
      signatures {
        signature
        signer
        data {
          typeUrl
          value
        }
      }
      itx {
        __typename
        ... on UpdateAssetTx {
          address
          moniker
          data {
            typeUrl
            value
          }
        }
        ... on TransferTx {
          assets
          to
          value
          data {
            typeUrl
            value
          }
        }
        ... on SysUpgradeTx {
          gracePeriod
          data {
            typeUrl
            value
          }
          task {
            actions
            dataHash
            type
          }
        }
        ... on StakeTx {
          message
          to
          value
          data {
            type
          }
        }
        ... on ExchangeTx {
          expiredAt
          to
          data {
            typeUrl
            value
          }
          receiver {
            assets
            value
          }
          sender {
            assets
            value
          }
        }
        ... on DeclareFileTx {
          hash
        }
        ... on DeclareTx {
          issuer
          moniker
          pk
          data {
            typeUrl
            value
          }
          type {
            address
            hash
            pk
            role
          }
        }
        ... on CreateAssetTx {
          moniker
          parent
          readonly
          transferrable
          ttl
          data {
            typeUrl
            value
          }
        }
        ... on ConsumeAssetTx {
          address
          issuer
          data {
            typeUrl
            value
          }
        }
        ... on ConsensusUpgradeTx {
          maxBytes
          maxCandidates
          maxGas
          maxValidators
          data {
            typeUrl
            value
          }
          validators {
            address
            power
          }
        }
        ... on PokeTx {
          address
          date
        }
        ... on AccountMigrateTx {
          pk
          type {
            address
            hash
            pk
            role
          }
        }
      }
    }
    transfer {
      chainId
      from
      nonce
      signature
      signatures {
        signature
        signer
        data {
          typeUrl
          value
        }
      }
      itx {
        __typename
        ... on UpdateAssetTx {
          address
          moniker
          data {
            typeUrl
            value
          }
        }
        ... on TransferTx {
          assets
          to
          value
          data {
            typeUrl
            value
          }
        }
        ... on SysUpgradeTx {
          gracePeriod
          data {
            typeUrl
            value
          }
          task {
            actions
            dataHash
            type
          }
        }
        ... on StakeTx {
          message
          to
          value
          data {
            type
          }
        }
        ... on ExchangeTx {
          expiredAt
          to
          data {
            typeUrl
            value
          }
          receiver {
            assets
            value
          }
          sender {
            assets
            value
          }
        }
        ... on DeclareFileTx {
          hash
        }
        ... on DeclareTx {
          issuer
          moniker
          pk
          data {
            typeUrl
            value
          }
          type {
            address
            hash
            pk
            role
          }
        }
        ... on CreateAssetTx {
          moniker
          parent
          readonly
          transferrable
          ttl
          data {
            typeUrl
            value
          }
        }
        ... on ConsumeAssetTx {
          address
          issuer
          data {
            typeUrl
            value
          }
        }
        ... on ConsensusUpgradeTx {
          maxBytes
          maxCandidates
          maxGas
          maxValidators
          data {
            typeUrl
            value
          }
          validators {
            address
            power
          }
        }
        ... on PokeTx {
          address
          date
        }
        ... on AccountMigrateTx {
          pk
          type {
            address
            hash
            pk
            role
          }
        }
      }
    }
    updateAsset {
      chainId
      from
      nonce
      signature
      signatures {
        signature
        signer
        data {
          typeUrl
          value
        }
      }
      itx {
        __typename
        ... on UpdateAssetTx {
          address
          moniker
          data {
            typeUrl
            value
          }
        }
        ... on TransferTx {
          assets
          to
          value
          data {
            typeUrl
            value
          }
        }
        ... on SysUpgradeTx {
          gracePeriod
          data {
            typeUrl
            value
          }
          task {
            actions
            dataHash
            type
          }
        }
        ... on StakeTx {
          message
          to
          value
          data {
            type
          }
        }
        ... on ExchangeTx {
          expiredAt
          to
          data {
            typeUrl
            value
          }
          receiver {
            assets
            value
          }
          sender {
            assets
            value
          }
        }
        ... on DeclareFileTx {
          hash
        }
        ... on DeclareTx {
          issuer
          moniker
          pk
          data {
            typeUrl
            value
          }
          type {
            address
            hash
            pk
            role
          }
        }
        ... on CreateAssetTx {
          moniker
          parent
          readonly
          transferrable
          ttl
          data {
            typeUrl
            value
          }
        }
        ... on ConsumeAssetTx {
          address
          issuer
          data {
            typeUrl
            value
          }
        }
        ... on ConsensusUpgradeTx {
          maxBytes
          maxCandidates
          maxGas
          maxValidators
          data {
            typeUrl
            value
          }
          validators {
            address
            power
          }
        }
        ... on PokeTx {
          address
          date
        }
        ... on AccountMigrateTx {
          pk
          type {
            address
            hash
            pk
            role
          }
        }
      }
    }
  }
}
```


## Mutations

### createTx

#### Arguments

* **from**, optional, 
* **itx**, optional, 
* **nonce**, optional, 
* **token**, optional, 
* **typeUrl**, optional, 
* **wallet**, optional, 

#### Result Format

```graphql
mutation {
  createTx(from: "abc", itx: "abc", nonce: 123, token: "abc", typeUrl: "abc", wallet: "abc") {
    code
    tx {
      chainId
      from
      nonce
      signature
      signatures {
        signature
        signer
        data {
          typeUrl
          value
        }
      }
      itx {
        __typename
        ... on UpdateAssetTx {
          address
          moniker
          data {
            typeUrl
            value
          }
        }
        ... on TransferTx {
          assets
          to
          value
          data {
            typeUrl
            value
          }
        }
        ... on SysUpgradeTx {
          gracePeriod
          data {
            typeUrl
            value
          }
          task {
            actions
            dataHash
            type
          }
        }
        ... on StakeTx {
          message
          to
          value
          data {
            type
          }
        }
        ... on ExchangeTx {
          expiredAt
          to
          data {
            typeUrl
            value
          }
          receiver {
            assets
            value
          }
          sender {
            assets
            value
          }
        }
        ... on DeclareFileTx {
          hash
        }
        ... on DeclareTx {
          issuer
          moniker
          pk
          data {
            typeUrl
            value
          }
          type {
            address
            hash
            pk
            role
          }
        }
        ... on CreateAssetTx {
          moniker
          parent
          readonly
          transferrable
          ttl
          data {
            typeUrl
            value
          }
        }
        ... on ConsumeAssetTx {
          address
          issuer
          data {
            typeUrl
            value
          }
        }
        ... on ConsensusUpgradeTx {
          maxBytes
          maxCandidates
          maxGas
          maxValidators
          data {
            typeUrl
            value
          }
          validators {
            address
            power
          }
        }
        ... on PokeTx {
          address
          date
        }
        ... on AccountMigrateTx {
          pk
          type {
            address
            hash
            pk
            role
          }
        }
      }
    }
  }
}
```

### createWallet

#### Arguments

* **moniker**, optional, 
* **passphrase**, optional, 
* **type**, optional, 

#### Result Format

```graphql
mutation {
  createWallet(moniker: "abc", passphrase: "abc", type: "abc") {
    code
    token
    wallet {
      address
      pk
      sk
      type {
        address
        hash
        pk
        role
      }
    }
  }
}
```

### declare

#### Arguments

* **declareTx**, **required**, 
* **send**, optional, 
* **sign**, optional, 
* **token**, optional, 
* **wallet**, **required**, 

#### Result Format

```graphql
mutation {
  declare(declareTx: "abc", send: "abc", sign: true, token: "abc", wallet: "abc")
}
```

### declareNode

#### Arguments

* **validator**, optional, 

#### Result Format

```graphql
mutation {
  declareNode(validator: true) {
    code
    wallet {
      address
      pk
      sk
      type {
        address
        hash
        pk
        role
      }
    }
  }
}
```

### recoverWallet

#### Arguments

* **data**, optional, 
* **moniker**, optional, 
* **passphrase**, optional, 
* **type**, optional, 

#### Result Format

```graphql
mutation {
  recoverWallet(data: "abc", moniker: "abc", passphrase: "abc", type: "abc") {
    code
    token
    wallet {
      address
      pk
      sk
      type {
        address
        hash
        pk
        role
      }
    }
  }
}
```

### removeWallet

#### Arguments

* **address**, optional, 

#### Result Format

```graphql
mutation {
  removeWallet(address: "abc") {
    code
  }
}
```

### sendTx

#### Arguments

* **commit**, optional, 
* **token**, optional, 
* **tx**, optional, 
* **wallet**, optional, 

#### Result Format

```graphql
mutation {
  sendTx(commit: true, token: "abc", tx: "abc", wallet: "abc") {
    code
    hash
  }
}
```

### storeFile

#### Arguments

* **chunk**, optional, 

#### Result Format

```graphql
mutation {
  storeFile(chunk: "abc") {
    code
    hash
  }
}
```

### unsubscribe

#### Arguments

* **topic**, optional, 

#### Result Format

```graphql
mutation {
  unsubscribe(topic: "abc") {
    code
  }
}
```
