# Forge GraphQL API List

> Updated on 2019-08-03T22:48:11.444Z


## Table of Contents

* [Queries](#queries)
  * [getAccountState](#getaccountstate)
  * [getAssetState](#getassetstate)
  * [getBlock](#getblock)
  * [getBlocks](#getblocks)
  * [getChainInfo](#getchaininfo)
  * [getConfig](#getconfig)
  * [getDelegateState](#getdelegatestate)
  * [getForgeState](#getforgestate)
  * [getForgeStats](#getforgestats)
  * [getForgeStatsByDay](#getforgestatsbyday)
  * [getForgeStatsByHour](#getforgestatsbyhour)
  * [getHealthStatus](#gethealthstatus)
  * [getNetInfo](#getnetinfo)
  * [getNodeInfo](#getnodeinfo)
  * [getProtocolState](#getprotocolstate)
  * [getProtocols](#getprotocols)
  * [getSimulatorStatus](#getsimulatorstatus)
  * [getStakeState](#getstakestate)
  * [getSwapState](#getswapstate)
  * [getTetherState](#gettetherstate)
  * [getTx](#gettx)
  * [getUnconfirmedTxs](#getunconfirmedtxs)
  * [getValidatorsInfo](#getvalidatorsinfo)
  * [listAssetTransactions](#listassettransactions)
  * [listAssets](#listassets)
  * [listBlocks](#listblocks)
  * [listStakes](#liststakes)
  * [listSwap](#listswap)
  * [listTethers](#listtethers)
  * [listTopAccounts](#listtopaccounts)
  * [listTransactions](#listtransactions)
* [Subscriptions](#subscriptions)
  * [subscribe](#subscribe)
* [Mutations](#mutations)
  * [sendTx](#sendtx)
  * [startSimulator](#startsimulator)
  * [stopSimulator](#stopsimulator)
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
  getAccountState(address: "abc", height: "abc", keys: ["abc"]) {
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
            pk
            signature
            signatures {
              delegator
              pk
              signature
              signer
              data {
                typeUrl
                value
              }
            }
            itx {
              __typename
              ... on RevokeSwapTx {
                address
                data {
                  typeUrl
                  value
                }
              }
              ... on RetrieveSwapTx {
                address
                hashkey
                data {
                  typeUrl
                  value
                }
              }
              ... on SetupSwapTx {
                assets
                hashlock
                locktime
                receiver
                value
                data {
                  typeUrl
                  value
                }
              }
              ... on WithdrawTetherTx {
                chainId
                expiredAt
                from
                nonce
                pk
                signature
                data {
                  typeUrl
                  value
                }
                receiver {
                  assets
                  tether
                  value
                }
                sender {
                  assets
                  value
                }
                signatures {
                  delegator
                  pk
                  signature
                  signer
                }
              }
              ... on UpgradeNodeTx {
                height
                override
                version
              }
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
              ... on RevokeTetherTx {
                tether
                data {
                  typeUrl
                  value
                }
              }
              ... on PokeTx {
                address
                date
                data {
                  typeUrl
                  value
                }
              }
              ... on ExchangeTetherTx {
                expiredAt
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
              ... on DepositTetherTx {
                charge
                commission
                locktime
                target
                value
                withdrawer
              }
              ... on DeployProtocolTx {
                address
                description
                name
                namespace
                pipeline
                proto
                sources
                tags
                version
                code {
                  binary
                  checksum
                }
                data {
                  typeUrl
                  value
                }
                typeUrls {
                  module
                  url
                }
              }
              ... on DeclareTx {
                issuer
                moniker
                data {
                  typeUrl
                  value
                }
              }
              ... on DeclareFileTx {
                hash
              }
              ... on CreateAssetTx {
                address
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
              ... on ApproveTetherTx {
                withdraw
                data {
                  typeUrl
                  value
                }
              }
              ... on AcquireAssetTx {
                to
                data {
                  typeUrl
                  value
                }
                specs {
                  address
                  data
                }
              }
              ... on AccountMigrateTx {
                address
                pk
                data {
                  typeUrl
                  value
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
            pk
            signature
            signatures {
              delegator
              pk
              signature
              signer
              data {
                typeUrl
                value
              }
            }
            itx {
              __typename
              ... on RevokeSwapTx {
                address
                data {
                  typeUrl
                  value
                }
              }
              ... on RetrieveSwapTx {
                address
                hashkey
                data {
                  typeUrl
                  value
                }
              }
              ... on SetupSwapTx {
                assets
                hashlock
                locktime
                receiver
                value
                data {
                  typeUrl
                  value
                }
              }
              ... on WithdrawTetherTx {
                chainId
                expiredAt
                from
                nonce
                pk
                signature
                data {
                  typeUrl
                  value
                }
                receiver {
                  assets
                  tether
                  value
                }
                sender {
                  assets
                  value
                }
                signatures {
                  delegator
                  pk
                  signature
                  signer
                }
              }
              ... on UpgradeNodeTx {
                height
                override
                version
              }
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
              ... on RevokeTetherTx {
                tether
                data {
                  typeUrl
                  value
                }
              }
              ... on PokeTx {
                address
                date
                data {
                  typeUrl
                  value
                }
              }
              ... on ExchangeTetherTx {
                expiredAt
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
              ... on DepositTetherTx {
                charge
                commission
                locktime
                target
                value
                withdrawer
              }
              ... on DeployProtocolTx {
                address
                description
                name
                namespace
                pipeline
                proto
                sources
                tags
                version
                code {
                  binary
                  checksum
                }
                data {
                  typeUrl
                  value
                }
                typeUrls {
                  module
                  url
                }
              }
              ... on DeclareTx {
                issuer
                moniker
                data {
                  typeUrl
                  value
                }
              }
              ... on DeclareFileTx {
                hash
              }
              ... on CreateAssetTx {
                address
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
              ... on ApproveTetherTx {
                withdraw
                data {
                  typeUrl
                  value
                }
              }
              ... on AcquireAssetTx {
                to
                data {
                  typeUrl
                  value
                }
                specs {
                  address
                  data
                }
              }
              ... on AccountMigrateTx {
                address
                pk
                data {
                  typeUrl
                  value
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
    }
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
  getAssetState(address: "abc", height: "abc", keys: ["abc"]) {
    code
    state {
      address
      consumedTime
      issuer
      moniker
      owner
      parent
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
            pk
            signature
            signatures {
              delegator
              pk
              signature
              signer
              data {
                typeUrl
                value
              }
            }
            itx {
              __typename
              ... on RevokeSwapTx {
                address
                data {
                  typeUrl
                  value
                }
              }
              ... on RetrieveSwapTx {
                address
                hashkey
                data {
                  typeUrl
                  value
                }
              }
              ... on SetupSwapTx {
                assets
                hashlock
                locktime
                receiver
                value
                data {
                  typeUrl
                  value
                }
              }
              ... on WithdrawTetherTx {
                chainId
                expiredAt
                from
                nonce
                pk
                signature
                data {
                  typeUrl
                  value
                }
                receiver {
                  assets
                  tether
                  value
                }
                sender {
                  assets
                  value
                }
                signatures {
                  delegator
                  pk
                  signature
                  signer
                }
              }
              ... on UpgradeNodeTx {
                height
                override
                version
              }
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
              ... on RevokeTetherTx {
                tether
                data {
                  typeUrl
                  value
                }
              }
              ... on PokeTx {
                address
                date
                data {
                  typeUrl
                  value
                }
              }
              ... on ExchangeTetherTx {
                expiredAt
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
              ... on DepositTetherTx {
                charge
                commission
                locktime
                target
                value
                withdrawer
              }
              ... on DeployProtocolTx {
                address
                description
                name
                namespace
                pipeline
                proto
                sources
                tags
                version
                code {
                  binary
                  checksum
                }
                data {
                  typeUrl
                  value
                }
                typeUrls {
                  module
                  url
                }
              }
              ... on DeclareTx {
                issuer
                moniker
                data {
                  typeUrl
                  value
                }
              }
              ... on DeclareFileTx {
                hash
              }
              ... on CreateAssetTx {
                address
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
              ... on ApproveTetherTx {
                withdraw
                data {
                  typeUrl
                  value
                }
              }
              ... on AcquireAssetTx {
                to
                data {
                  typeUrl
                  value
                }
                specs {
                  address
                  data
                }
              }
              ... on AccountMigrateTx {
                address
                pk
                data {
                  typeUrl
                  value
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
            pk
            signature
            signatures {
              delegator
              pk
              signature
              signer
              data {
                typeUrl
                value
              }
            }
            itx {
              __typename
              ... on RevokeSwapTx {
                address
                data {
                  typeUrl
                  value
                }
              }
              ... on RetrieveSwapTx {
                address
                hashkey
                data {
                  typeUrl
                  value
                }
              }
              ... on SetupSwapTx {
                assets
                hashlock
                locktime
                receiver
                value
                data {
                  typeUrl
                  value
                }
              }
              ... on WithdrawTetherTx {
                chainId
                expiredAt
                from
                nonce
                pk
                signature
                data {
                  typeUrl
                  value
                }
                receiver {
                  assets
                  tether
                  value
                }
                sender {
                  assets
                  value
                }
                signatures {
                  delegator
                  pk
                  signature
                  signer
                }
              }
              ... on UpgradeNodeTx {
                height
                override
                version
              }
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
              ... on RevokeTetherTx {
                tether
                data {
                  typeUrl
                  value
                }
              }
              ... on PokeTx {
                address
                date
                data {
                  typeUrl
                  value
                }
              }
              ... on ExchangeTetherTx {
                expiredAt
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
              ... on DepositTetherTx {
                charge
                commission
                locktime
                target
                value
                withdrawer
              }
              ... on DeployProtocolTx {
                address
                description
                name
                namespace
                pipeline
                proto
                sources
                tags
                version
                code {
                  binary
                  checksum
                }
                data {
                  typeUrl
                  value
                }
                typeUrls {
                  module
                  url
                }
              }
              ... on DeclareTx {
                issuer
                moniker
                data {
                  typeUrl
                  value
                }
              }
              ... on DeclareFileTx {
                hash
              }
              ... on CreateAssetTx {
                address
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
              ... on ApproveTetherTx {
                withdraw
                data {
                  typeUrl
                  value
                }
              }
              ... on AcquireAssetTx {
                to
                data {
                  typeUrl
                  value
                }
                specs {
                  address
                  data
                }
              }
              ... on AccountMigrateTx {
                address
                pk
                data {
                  typeUrl
                  value
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

### getBlock

#### Arguments

* **height**, optional, 

#### Result Format

```graphql
{
  getBlock(height: "abc") {
    code
    block {
      appHash
      consensusHash
      dataHash
      evidenceHash
      height
      invalidTxsHashes
      lastCommitHash
      lastResultsHash
      nextValidatorsHash
      numTxs
      proposer
      time
      totalTxs
      txsHashes
      validatorsHash
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
          pk
          signature
          signatures {
            delegator
            pk
            signature
            signer
            data {
              typeUrl
              value
            }
          }
          itx {
            __typename
            ... on RevokeSwapTx {
              address
              data {
                typeUrl
                value
              }
            }
            ... on RetrieveSwapTx {
              address
              hashkey
              data {
                typeUrl
                value
              }
            }
            ... on SetupSwapTx {
              assets
              hashlock
              locktime
              receiver
              value
              data {
                typeUrl
                value
              }
            }
            ... on WithdrawTetherTx {
              chainId
              expiredAt
              from
              nonce
              pk
              signature
              data {
                typeUrl
                value
              }
              receiver {
                assets
                tether
                value
              }
              sender {
                assets
                value
              }
              signatures {
                delegator
                pk
                signature
                signer
                data {
                  typeUrl
                  value
                }
              }
            }
            ... on UpgradeNodeTx {
              height
              override
              version
            }
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
            ... on RevokeTetherTx {
              tether
              data {
                typeUrl
                value
              }
            }
            ... on PokeTx {
              address
              date
              data {
                typeUrl
                value
              }
            }
            ... on ExchangeTetherTx {
              expiredAt
              data {
                typeUrl
                value
              }
              receiver {
                assets
                value
                deposit {
                  chainId
                  from
                  nonce
                  pk
                  signature
                }
              }
              sender {
                assets
                value
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
            ... on DepositTetherTx {
              charge
              commission
              locktime
              target
              value
              withdrawer
            }
            ... on DeployProtocolTx {
              address
              description
              name
              namespace
              pipeline
              proto
              sources
              tags
              version
              code {
                binary
                checksum
              }
              data {
                typeUrl
                value
              }
              typeUrls {
                module
                url
              }
            }
            ... on DeclareTx {
              issuer
              moniker
              data {
                typeUrl
                value
              }
            }
            ... on DeclareFileTx {
              hash
            }
            ... on CreateAssetTx {
              address
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
            ... on ApproveTetherTx {
              withdraw
              data {
                typeUrl
                value
              }
            }
            ... on AcquireAssetTx {
              to
              data {
                typeUrl
                value
              }
              specs {
                address
                data
              }
            }
            ... on AccountMigrateTx {
              address
              pk
              data {
                typeUrl
                value
              }
            }
          }
        }
      }
      lastBlockId {
        hash
        partsHeader {
          hash
          total
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
          pk
          signature
          signatures {
            delegator
            pk
            signature
            signer
            data {
              typeUrl
              value
            }
          }
          itx {
            __typename
            ... on RevokeSwapTx {
              address
              data {
                typeUrl
                value
              }
            }
            ... on RetrieveSwapTx {
              address
              hashkey
              data {
                typeUrl
                value
              }
            }
            ... on SetupSwapTx {
              assets
              hashlock
              locktime
              receiver
              value
              data {
                typeUrl
                value
              }
            }
            ... on WithdrawTetherTx {
              chainId
              expiredAt
              from
              nonce
              pk
              signature
              data {
                typeUrl
                value
              }
              receiver {
                assets
                tether
                value
              }
              sender {
                assets
                value
              }
              signatures {
                delegator
                pk
                signature
                signer
                data {
                  typeUrl
                  value
                }
              }
            }
            ... on UpgradeNodeTx {
              height
              override
              version
            }
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
            ... on RevokeTetherTx {
              tether
              data {
                typeUrl
                value
              }
            }
            ... on PokeTx {
              address
              date
              data {
                typeUrl
                value
              }
            }
            ... on ExchangeTetherTx {
              expiredAt
              data {
                typeUrl
                value
              }
              receiver {
                assets
                value
                deposit {
                  chainId
                  from
                  nonce
                  pk
                  signature
                }
              }
              sender {
                assets
                value
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
            ... on DepositTetherTx {
              charge
              commission
              locktime
              target
              value
              withdrawer
            }
            ... on DeployProtocolTx {
              address
              description
              name
              namespace
              pipeline
              proto
              sources
              tags
              version
              code {
                binary
                checksum
              }
              data {
                typeUrl
                value
              }
              typeUrls {
                module
                url
              }
            }
            ... on DeclareTx {
              issuer
              moniker
              data {
                typeUrl
                value
              }
            }
            ... on DeclareFileTx {
              hash
            }
            ... on CreateAssetTx {
              address
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
            ... on ApproveTetherTx {
              withdraw
              data {
                typeUrl
                value
              }
            }
            ... on AcquireAssetTx {
              to
              data {
                typeUrl
                value
              }
              specs {
                address
                data
              }
            }
            ... on AccountMigrateTx {
              address
              pk
              data {
                typeUrl
                value
              }
            }
          }
        }
      }
      version {
        app
        block
      }
    }
  }
}
```

### getBlocks

#### Arguments

* **emptyExcluded**, optional, 
* **heightFilter**, optional, 
* **paging**, optional, 

#### Result Format

```graphql
{
  getBlocks(emptyExcluded: true) {
    code
    blocks {
      appHash
      consensusHash
      dataHash
      evidenceHash
      height
      invalidTxsHashes
      lastCommitHash
      lastResultsHash
      nextValidatorsHash
      numTxs
      proposer
      time
      totalTxs
      txsHashes
      validatorsHash
      lastBlockId {
        hash
        partsHeader {
          hash
          total
        }
      }
      version {
        app
        block
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

* **parsed**, optional, 

#### Result Format

```graphql
{
  getConfig(parsed: true) {
    code
    config
  }
}
```

### getDelegateState

#### Arguments

* **address**, optional, 
* **height**, optional, 
* **keys**, optional, 

#### Result Format

```graphql
{
  getDelegateState(address: "abc", height: "abc", keys: ["abc"]) {
    code
    state {
      address
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
            pk
            signature
            signatures {
              delegator
              pk
              signature
              signer
              data {
                typeUrl
                value
              }
            }
            itx {
              __typename
              ... on RevokeSwapTx {
                address
                data {
                  typeUrl
                  value
                }
              }
              ... on RetrieveSwapTx {
                address
                hashkey
                data {
                  typeUrl
                  value
                }
              }
              ... on SetupSwapTx {
                assets
                hashlock
                locktime
                receiver
                value
                data {
                  typeUrl
                  value
                }
              }
              ... on WithdrawTetherTx {
                chainId
                expiredAt
                from
                nonce
                pk
                signature
                data {
                  typeUrl
                  value
                }
                receiver {
                  assets
                  tether
                  value
                }
                sender {
                  assets
                  value
                }
                signatures {
                  delegator
                  pk
                  signature
                  signer
                }
              }
              ... on UpgradeNodeTx {
                height
                override
                version
              }
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
              ... on RevokeTetherTx {
                tether
                data {
                  typeUrl
                  value
                }
              }
              ... on PokeTx {
                address
                date
                data {
                  typeUrl
                  value
                }
              }
              ... on ExchangeTetherTx {
                expiredAt
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
              ... on DepositTetherTx {
                charge
                commission
                locktime
                target
                value
                withdrawer
              }
              ... on DeployProtocolTx {
                address
                description
                name
                namespace
                pipeline
                proto
                sources
                tags
                version
                code {
                  binary
                  checksum
                }
                data {
                  typeUrl
                  value
                }
                typeUrls {
                  module
                  url
                }
              }
              ... on DeclareTx {
                issuer
                moniker
                data {
                  typeUrl
                  value
                }
              }
              ... on DeclareFileTx {
                hash
              }
              ... on CreateAssetTx {
                address
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
              ... on ApproveTetherTx {
                withdraw
                data {
                  typeUrl
                  value
                }
              }
              ... on AcquireAssetTx {
                to
                data {
                  typeUrl
                  value
                }
                specs {
                  address
                  data
                }
              }
              ... on AccountMigrateTx {
                address
                pk
                data {
                  typeUrl
                  value
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
            pk
            signature
            signatures {
              delegator
              pk
              signature
              signer
              data {
                typeUrl
                value
              }
            }
            itx {
              __typename
              ... on RevokeSwapTx {
                address
                data {
                  typeUrl
                  value
                }
              }
              ... on RetrieveSwapTx {
                address
                hashkey
                data {
                  typeUrl
                  value
                }
              }
              ... on SetupSwapTx {
                assets
                hashlock
                locktime
                receiver
                value
                data {
                  typeUrl
                  value
                }
              }
              ... on WithdrawTetherTx {
                chainId
                expiredAt
                from
                nonce
                pk
                signature
                data {
                  typeUrl
                  value
                }
                receiver {
                  assets
                  tether
                  value
                }
                sender {
                  assets
                  value
                }
                signatures {
                  delegator
                  pk
                  signature
                  signer
                }
              }
              ... on UpgradeNodeTx {
                height
                override
                version
              }
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
              ... on RevokeTetherTx {
                tether
                data {
                  typeUrl
                  value
                }
              }
              ... on PokeTx {
                address
                date
                data {
                  typeUrl
                  value
                }
              }
              ... on ExchangeTetherTx {
                expiredAt
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
              ... on DepositTetherTx {
                charge
                commission
                locktime
                target
                value
                withdrawer
              }
              ... on DeployProtocolTx {
                address
                description
                name
                namespace
                pipeline
                proto
                sources
                tags
                version
                code {
                  binary
                  checksum
                }
                data {
                  typeUrl
                  value
                }
                typeUrls {
                  module
                  url
                }
              }
              ... on DeclareTx {
                issuer
                moniker
                data {
                  typeUrl
                  value
                }
              }
              ... on DeclareFileTx {
                hash
              }
              ... on CreateAssetTx {
                address
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
              ... on ApproveTetherTx {
                withdraw
                data {
                  typeUrl
                  value
                }
              }
              ... on AcquireAssetTx {
                to
                data {
                  typeUrl
                  value
                }
                specs {
                  address
                  data
                }
              }
              ... on AccountMigrateTx {
                address
                pk
                data {
                  typeUrl
                  value
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
      ops {
        key
        value {
          balance
          balanceDelta
          numTxs
          numTxsDelta
          rule
        }
      }
    }
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
  getForgeState(height: "abc", keys: ["abc"]) {
    code
    state {
      address
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
      gas {
        key
        value
      }
      pokeConfig {
        address
        amount
        balance
        dailyLimit
      }
      protocols {
        address
        name
      }
      stakeConfig {
        timeoutGeneral
        timeoutStakeForNode
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
                pk
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
                pk
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
      txConfig {
        maxAssetSize
        maxListSize
        maxMultisig
        minimumStake
        declare {
          hierarchy
          restricted
        }
        delegate {
          deltaInterval
          typeUrls
        }
      }
      upgradeInfo {
        height
        version
      }
    }
  }
}
```

### getForgeStats

#### Arguments

No arguments

#### Result Format

```graphql
{
  getForgeStats {
    code
    forgeStats {
      avgBlockTime
      avgTps
      maxTps
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
      tps
    }
  }
}
```

### getForgeStatsByDay

#### Arguments

* **endDate**, optional, 
* **startDate**, optional, 

#### Result Format

```graphql
{
  getForgeStatsByDay(endDate: "abc", startDate: "abc") {
    code
    forgeStats {
      avgBlockTime
      avgTps
      maxTps
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
      tps
    }
  }
}
```

### getForgeStatsByHour

#### Arguments

* **date**, optional, 

#### Result Format

```graphql
{
  getForgeStatsByHour(date: "abc") {
    code
    forgeStats {
      avgBlockTime
      avgTps
      maxTps
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
      tps
    }
  }
}
```

### getHealthStatus

#### Arguments

No arguments

#### Result Format

```graphql
{
  getHealthStatus {
    code
    healthStatus {
      consensus {
        blockHeight
        health
        synced
      }
      forge {
        abiServer
        forgeWeb
        health
        abciServer {
          abciConsensus
          abciInfo
        }
      }
      network {
        health
        numPeers
      }
      storage {
        health
        indexerServer
        stateDb
        diskSpace {
          forgeUsage
          total
        }
      }
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
      id
      ip
      moniker
      network
      p2pAddress
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

### getProtocolState

#### Arguments

* **address**, optional, 
* **height**, optional, 
* **keys**, optional, 

#### Result Format

```graphql
{
  getProtocolState(address: "abc", height: "abc", keys: ["abc"]) {
    code
    state {
      address
      group
      migratedFrom
      migratedTo
      rootHash
      status
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
            pk
            signature
            signatures {
              delegator
              pk
              signature
              signer
              data {
                typeUrl
                value
              }
            }
            itx {
              __typename
              ... on RevokeSwapTx {
                address
                data {
                  typeUrl
                  value
                }
              }
              ... on RetrieveSwapTx {
                address
                hashkey
                data {
                  typeUrl
                  value
                }
              }
              ... on SetupSwapTx {
                assets
                hashlock
                locktime
                receiver
                value
                data {
                  typeUrl
                  value
                }
              }
              ... on WithdrawTetherTx {
                chainId
                expiredAt
                from
                nonce
                pk
                signature
                data {
                  typeUrl
                  value
                }
                receiver {
                  assets
                  tether
                  value
                }
                sender {
                  assets
                  value
                }
                signatures {
                  delegator
                  pk
                  signature
                  signer
                }
              }
              ... on UpgradeNodeTx {
                height
                override
                version
              }
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
              ... on RevokeTetherTx {
                tether
                data {
                  typeUrl
                  value
                }
              }
              ... on PokeTx {
                address
                date
                data {
                  typeUrl
                  value
                }
              }
              ... on ExchangeTetherTx {
                expiredAt
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
              ... on DepositTetherTx {
                charge
                commission
                locktime
                target
                value
                withdrawer
              }
              ... on DeployProtocolTx {
                address
                description
                name
                namespace
                pipeline
                proto
                sources
                tags
                version
                code {
                  binary
                  checksum
                }
                data {
                  typeUrl
                  value
                }
                typeUrls {
                  module
                  url
                }
              }
              ... on DeclareTx {
                issuer
                moniker
                data {
                  typeUrl
                  value
                }
              }
              ... on DeclareFileTx {
                hash
              }
              ... on CreateAssetTx {
                address
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
              ... on ApproveTetherTx {
                withdraw
                data {
                  typeUrl
                  value
                }
              }
              ... on AcquireAssetTx {
                to
                data {
                  typeUrl
                  value
                }
                specs {
                  address
                  data
                }
              }
              ... on AccountMigrateTx {
                address
                pk
                data {
                  typeUrl
                  value
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
            pk
            signature
            signatures {
              delegator
              pk
              signature
              signer
              data {
                typeUrl
                value
              }
            }
            itx {
              __typename
              ... on RevokeSwapTx {
                address
                data {
                  typeUrl
                  value
                }
              }
              ... on RetrieveSwapTx {
                address
                hashkey
                data {
                  typeUrl
                  value
                }
              }
              ... on SetupSwapTx {
                assets
                hashlock
                locktime
                receiver
                value
                data {
                  typeUrl
                  value
                }
              }
              ... on WithdrawTetherTx {
                chainId
                expiredAt
                from
                nonce
                pk
                signature
                data {
                  typeUrl
                  value
                }
                receiver {
                  assets
                  tether
                  value
                }
                sender {
                  assets
                  value
                }
                signatures {
                  delegator
                  pk
                  signature
                  signer
                }
              }
              ... on UpgradeNodeTx {
                height
                override
                version
              }
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
              ... on RevokeTetherTx {
                tether
                data {
                  typeUrl
                  value
                }
              }
              ... on PokeTx {
                address
                date
                data {
                  typeUrl
                  value
                }
              }
              ... on ExchangeTetherTx {
                expiredAt
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
              ... on DepositTetherTx {
                charge
                commission
                locktime
                target
                value
                withdrawer
              }
              ... on DeployProtocolTx {
                address
                description
                name
                namespace
                pipeline
                proto
                sources
                tags
                version
                code {
                  binary
                  checksum
                }
                data {
                  typeUrl
                  value
                }
                typeUrls {
                  module
                  url
                }
              }
              ... on DeclareTx {
                issuer
                moniker
                data {
                  typeUrl
                  value
                }
              }
              ... on DeclareFileTx {
                hash
              }
              ... on CreateAssetTx {
                address
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
              ... on ApproveTetherTx {
                withdraw
                data {
                  typeUrl
                  value
                }
              }
              ... on AcquireAssetTx {
                to
                data {
                  typeUrl
                  value
                }
                specs {
                  address
                  data
                }
              }
              ... on AccountMigrateTx {
                address
                pk
                data {
                  typeUrl
                  value
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
      itx {
        address
        description
        name
        namespace
        pipeline
        proto
        sources
        tags
        version
        code {
          binary
          checksum
        }
        data {
          typeUrl
          value
        }
        typeUrls {
          module
          url
        }
      }
    }
  }
}
```

### getProtocols

#### Arguments

* **address**, optional, 

#### Result Format

```graphql
{
  getProtocols(address: "abc") {
    code
    protocols {
      address
      description
      group
      installedAt
      name
      namespace
      pipeline
      proto
      sources
      version
      code {
        binary
        checksum
      }
      data {
        typeUrl
        value
      }
      typeUrls {
        module
        url
      }
    }
  }
}
```

### getSimulatorStatus

#### Arguments

No arguments

#### Result Format

```graphql
{
  getSimulatorStatus {
    code
    result
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
  getStakeState(address: "abc", height: "abc", keys: ["abc"]) {
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
            pk
            signature
            signatures {
              delegator
              pk
              signature
              signer
              data {
                typeUrl
                value
              }
            }
            itx {
              __typename
              ... on RevokeSwapTx {
                address
                data {
                  typeUrl
                  value
                }
              }
              ... on RetrieveSwapTx {
                address
                hashkey
                data {
                  typeUrl
                  value
                }
              }
              ... on SetupSwapTx {
                assets
                hashlock
                locktime
                receiver
                value
                data {
                  typeUrl
                  value
                }
              }
              ... on WithdrawTetherTx {
                chainId
                expiredAt
                from
                nonce
                pk
                signature
                data {
                  typeUrl
                  value
                }
                receiver {
                  assets
                  tether
                  value
                }
                sender {
                  assets
                  value
                }
                signatures {
                  delegator
                  pk
                  signature
                  signer
                }
              }
              ... on UpgradeNodeTx {
                height
                override
                version
              }
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
              ... on RevokeTetherTx {
                tether
                data {
                  typeUrl
                  value
                }
              }
              ... on PokeTx {
                address
                date
                data {
                  typeUrl
                  value
                }
              }
              ... on ExchangeTetherTx {
                expiredAt
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
              ... on DepositTetherTx {
                charge
                commission
                locktime
                target
                value
                withdrawer
              }
              ... on DeployProtocolTx {
                address
                description
                name
                namespace
                pipeline
                proto
                sources
                tags
                version
                code {
                  binary
                  checksum
                }
                data {
                  typeUrl
                  value
                }
                typeUrls {
                  module
                  url
                }
              }
              ... on DeclareTx {
                issuer
                moniker
                data {
                  typeUrl
                  value
                }
              }
              ... on DeclareFileTx {
                hash
              }
              ... on CreateAssetTx {
                address
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
              ... on ApproveTetherTx {
                withdraw
                data {
                  typeUrl
                  value
                }
              }
              ... on AcquireAssetTx {
                to
                data {
                  typeUrl
                  value
                }
                specs {
                  address
                  data
                }
              }
              ... on AccountMigrateTx {
                address
                pk
                data {
                  typeUrl
                  value
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
            pk
            signature
            signatures {
              delegator
              pk
              signature
              signer
              data {
                typeUrl
                value
              }
            }
            itx {
              __typename
              ... on RevokeSwapTx {
                address
                data {
                  typeUrl
                  value
                }
              }
              ... on RetrieveSwapTx {
                address
                hashkey
                data {
                  typeUrl
                  value
                }
              }
              ... on SetupSwapTx {
                assets
                hashlock
                locktime
                receiver
                value
                data {
                  typeUrl
                  value
                }
              }
              ... on WithdrawTetherTx {
                chainId
                expiredAt
                from
                nonce
                pk
                signature
                data {
                  typeUrl
                  value
                }
                receiver {
                  assets
                  tether
                  value
                }
                sender {
                  assets
                  value
                }
                signatures {
                  delegator
                  pk
                  signature
                  signer
                }
              }
              ... on UpgradeNodeTx {
                height
                override
                version
              }
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
              ... on RevokeTetherTx {
                tether
                data {
                  typeUrl
                  value
                }
              }
              ... on PokeTx {
                address
                date
                data {
                  typeUrl
                  value
                }
              }
              ... on ExchangeTetherTx {
                expiredAt
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
              ... on DepositTetherTx {
                charge
                commission
                locktime
                target
                value
                withdrawer
              }
              ... on DeployProtocolTx {
                address
                description
                name
                namespace
                pipeline
                proto
                sources
                tags
                version
                code {
                  binary
                  checksum
                }
                data {
                  typeUrl
                  value
                }
                typeUrls {
                  module
                  url
                }
              }
              ... on DeclareTx {
                issuer
                moniker
                data {
                  typeUrl
                  value
                }
              }
              ... on DeclareFileTx {
                hash
              }
              ... on CreateAssetTx {
                address
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
              ... on ApproveTetherTx {
                withdraw
                data {
                  typeUrl
                  value
                }
              }
              ... on AcquireAssetTx {
                to
                data {
                  typeUrl
                  value
                }
                specs {
                  address
                  data
                }
              }
              ... on AccountMigrateTx {
                address
                pk
                data {
                  typeUrl
                  value
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

### getSwapState

#### Arguments

* **address**, optional, 
* **height**, optional, 
* **keys**, optional, 

#### Result Format

```graphql
{
  getSwapState(address: "abc", height: "abc", keys: ["abc"]) {
    code
    state {
      address
      assets
      hash
      hashkey
      hashlock
      locktime
      receiver
      sender
      value
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
            pk
            signature
            signatures {
              delegator
              pk
              signature
              signer
              data {
                typeUrl
                value
              }
            }
            itx {
              __typename
              ... on RevokeSwapTx {
                address
                data {
                  typeUrl
                  value
                }
              }
              ... on RetrieveSwapTx {
                address
                hashkey
                data {
                  typeUrl
                  value
                }
              }
              ... on SetupSwapTx {
                assets
                hashlock
                locktime
                receiver
                value
                data {
                  typeUrl
                  value
                }
              }
              ... on WithdrawTetherTx {
                chainId
                expiredAt
                from
                nonce
                pk
                signature
                data {
                  typeUrl
                  value
                }
                receiver {
                  assets
                  tether
                  value
                }
                sender {
                  assets
                  value
                }
                signatures {
                  delegator
                  pk
                  signature
                  signer
                }
              }
              ... on UpgradeNodeTx {
                height
                override
                version
              }
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
              ... on RevokeTetherTx {
                tether
                data {
                  typeUrl
                  value
                }
              }
              ... on PokeTx {
                address
                date
                data {
                  typeUrl
                  value
                }
              }
              ... on ExchangeTetherTx {
                expiredAt
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
              ... on DepositTetherTx {
                charge
                commission
                locktime
                target
                value
                withdrawer
              }
              ... on DeployProtocolTx {
                address
                description
                name
                namespace
                pipeline
                proto
                sources
                tags
                version
                code {
                  binary
                  checksum
                }
                data {
                  typeUrl
                  value
                }
                typeUrls {
                  module
                  url
                }
              }
              ... on DeclareTx {
                issuer
                moniker
                data {
                  typeUrl
                  value
                }
              }
              ... on DeclareFileTx {
                hash
              }
              ... on CreateAssetTx {
                address
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
              ... on ApproveTetherTx {
                withdraw
                data {
                  typeUrl
                  value
                }
              }
              ... on AcquireAssetTx {
                to
                data {
                  typeUrl
                  value
                }
                specs {
                  address
                  data
                }
              }
              ... on AccountMigrateTx {
                address
                pk
                data {
                  typeUrl
                  value
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
            pk
            signature
            signatures {
              delegator
              pk
              signature
              signer
              data {
                typeUrl
                value
              }
            }
            itx {
              __typename
              ... on RevokeSwapTx {
                address
                data {
                  typeUrl
                  value
                }
              }
              ... on RetrieveSwapTx {
                address
                hashkey
                data {
                  typeUrl
                  value
                }
              }
              ... on SetupSwapTx {
                assets
                hashlock
                locktime
                receiver
                value
                data {
                  typeUrl
                  value
                }
              }
              ... on WithdrawTetherTx {
                chainId
                expiredAt
                from
                nonce
                pk
                signature
                data {
                  typeUrl
                  value
                }
                receiver {
                  assets
                  tether
                  value
                }
                sender {
                  assets
                  value
                }
                signatures {
                  delegator
                  pk
                  signature
                  signer
                }
              }
              ... on UpgradeNodeTx {
                height
                override
                version
              }
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
              ... on RevokeTetherTx {
                tether
                data {
                  typeUrl
                  value
                }
              }
              ... on PokeTx {
                address
                date
                data {
                  typeUrl
                  value
                }
              }
              ... on ExchangeTetherTx {
                expiredAt
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
              ... on DepositTetherTx {
                charge
                commission
                locktime
                target
                value
                withdrawer
              }
              ... on DeployProtocolTx {
                address
                description
                name
                namespace
                pipeline
                proto
                sources
                tags
                version
                code {
                  binary
                  checksum
                }
                data {
                  typeUrl
                  value
                }
                typeUrls {
                  module
                  url
                }
              }
              ... on DeclareTx {
                issuer
                moniker
                data {
                  typeUrl
                  value
                }
              }
              ... on DeclareFileTx {
                hash
              }
              ... on CreateAssetTx {
                address
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
              ... on ApproveTetherTx {
                withdraw
                data {
                  typeUrl
                  value
                }
              }
              ... on AcquireAssetTx {
                to
                data {
                  typeUrl
                  value
                }
                specs {
                  address
                  data
                }
              }
              ... on AccountMigrateTx {
                address
                pk
                data {
                  typeUrl
                  value
                }
              }
            }
          }
        }
      }
    }
  }
}
```

### getTetherState

#### Arguments

* **address**, optional, 
* **height**, optional, 
* **keys**, optional, 

#### Result Format

```graphql
{
  getTetherState(address: "abc", height: "abc", keys: ["abc"]) {
    code
    state {
      address
      available
      charge
      commission
      custodian
      depositor
      hash
      locktime
      target
      value
      withdrawer
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
        pk
        signature
        signatures {
          delegator
          pk
          signature
          signer
          data {
            typeUrl
            value
          }
        }
        itx {
          __typename
          ... on RevokeSwapTx {
            address
            data {
              typeUrl
              value
            }
          }
          ... on RetrieveSwapTx {
            address
            hashkey
            data {
              typeUrl
              value
            }
          }
          ... on SetupSwapTx {
            assets
            hashlock
            locktime
            receiver
            value
            data {
              typeUrl
              value
            }
          }
          ... on WithdrawTetherTx {
            chainId
            expiredAt
            from
            nonce
            pk
            signature
            data {
              typeUrl
              value
            }
            receiver {
              assets
              tether
              value
            }
            sender {
              assets
              value
            }
            signatures {
              delegator
              pk
              signature
              signer
              data {
                typeUrl
                value
              }
            }
          }
          ... on UpgradeNodeTx {
            height
            override
            version
          }
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
          ... on RevokeTetherTx {
            tether
            data {
              typeUrl
              value
            }
          }
          ... on PokeTx {
            address
            date
            data {
              typeUrl
              value
            }
          }
          ... on ExchangeTetherTx {
            expiredAt
            data {
              typeUrl
              value
            }
            receiver {
              assets
              value
              deposit {
                chainId
                from
                nonce
                pk
                signature
                signatures {
                  delegator
                  pk
                  signature
                  signer
                }
                itx {
                  __typename
                  ... on RevokeSwapTx {
                    address
                  }
                  ... on RetrieveSwapTx {
                    address
                    hashkey
                  }
                  ... on SetupSwapTx {
                    assets
                    hashlock
                    locktime
                    receiver
                    value
                  }
                  ... on WithdrawTetherTx {
                    chainId
                    expiredAt
                    from
                    nonce
                    pk
                    signature
                  }
                  ... on UpgradeNodeTx {
                    height
                    override
                    version
                  }
                  ... on UpdateAssetTx {
                    address
                    moniker
                  }
                  ... on TransferTx {
                    assets
                    to
                    value
                  }
                  ... on SysUpgradeTx {
                    gracePeriod
                  }
                  ... on StakeTx {
                    message
                    to
                    value
                  }
                  ... on RevokeTetherTx {
                    tether
                  }
                  ... on PokeTx {
                    address
                    date
                  }
                  ... on ExchangeTetherTx {
                    expiredAt
                  }
                  ... on ExchangeTx {
                    expiredAt
                    to
                  }
                  ... on DepositTetherTx {
                    charge
                    commission
                    locktime
                    target
                    value
                    withdrawer
                  }
                  ... on DeployProtocolTx {
                    address
                    description
                    name
                    namespace
                    pipeline
                    proto
                    sources
                    tags
                    version
                  }
                  ... on DeclareTx {
                    issuer
                    moniker
                  }
                  ... on DeclareFileTx {
                    hash
                  }
                  ... on CreateAssetTx {
                    address
                    moniker
                    parent
                    readonly
                    transferrable
                    ttl
                  }
                  ... on ConsumeAssetTx {
                    address
                    issuer
                  }
                  ... on ConsensusUpgradeTx {
                    maxBytes
                    maxCandidates
                    maxGas
                    maxValidators
                  }
                  ... on ApproveTetherTx {
                    withdraw
                  }
                  ... on AcquireAssetTx {
                    to
                  }
                  ... on AccountMigrateTx {
                    address
                    pk
                  }
                }
              }
            }
            sender {
              assets
              value
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
          ... on DepositTetherTx {
            charge
            commission
            locktime
            target
            value
            withdrawer
          }
          ... on DeployProtocolTx {
            address
            description
            name
            namespace
            pipeline
            proto
            sources
            tags
            version
            code {
              binary
              checksum
            }
            data {
              typeUrl
              value
            }
            typeUrls {
              module
              url
            }
          }
          ... on DeclareTx {
            issuer
            moniker
            data {
              typeUrl
              value
            }
          }
          ... on DeclareFileTx {
            hash
          }
          ... on CreateAssetTx {
            address
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
          ... on ApproveTetherTx {
            withdraw
            data {
              typeUrl
              value
            }
          }
          ... on AcquireAssetTx {
            to
            data {
              typeUrl
              value
            }
            specs {
              address
              data
            }
          }
          ... on AccountMigrateTx {
            address
            pk
            data {
              typeUrl
              value
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

* **paging**, optional, 

#### Result Format

```graphql
{
  getUnconfirmedTxs {
    code
    page {
      cursor
      next
      total
    }
    unconfirmedTxs {
      nTxs
      txs {
        chainId
        from
        nonce
        pk
        signature
        signatures {
          delegator
          pk
          signature
          signer
          data {
            typeUrl
            value
          }
        }
        itx {
          __typename
          ... on RevokeSwapTx {
            address
            data {
              typeUrl
              value
            }
          }
          ... on RetrieveSwapTx {
            address
            hashkey
            data {
              typeUrl
              value
            }
          }
          ... on SetupSwapTx {
            assets
            hashlock
            locktime
            receiver
            value
            data {
              typeUrl
              value
            }
          }
          ... on WithdrawTetherTx {
            chainId
            expiredAt
            from
            nonce
            pk
            signature
            data {
              typeUrl
              value
            }
            receiver {
              assets
              tether
              value
            }
            sender {
              assets
              value
            }
            signatures {
              delegator
              pk
              signature
              signer
              data {
                typeUrl
                value
              }
            }
          }
          ... on UpgradeNodeTx {
            height
            override
            version
          }
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
          ... on RevokeTetherTx {
            tether
            data {
              typeUrl
              value
            }
          }
          ... on PokeTx {
            address
            date
            data {
              typeUrl
              value
            }
          }
          ... on ExchangeTetherTx {
            expiredAt
            data {
              typeUrl
              value
            }
            receiver {
              assets
              value
              deposit {
                chainId
                from
                nonce
                pk
                signature
                signatures {
                  delegator
                  pk
                  signature
                  signer
                }
                itx {
                  __typename
                  ... on RevokeSwapTx {
                    address
                  }
                  ... on RetrieveSwapTx {
                    address
                    hashkey
                  }
                  ... on SetupSwapTx {
                    assets
                    hashlock
                    locktime
                    receiver
                    value
                  }
                  ... on WithdrawTetherTx {
                    chainId
                    expiredAt
                    from
                    nonce
                    pk
                    signature
                  }
                  ... on UpgradeNodeTx {
                    height
                    override
                    version
                  }
                  ... on UpdateAssetTx {
                    address
                    moniker
                  }
                  ... on TransferTx {
                    assets
                    to
                    value
                  }
                  ... on SysUpgradeTx {
                    gracePeriod
                  }
                  ... on StakeTx {
                    message
                    to
                    value
                  }
                  ... on RevokeTetherTx {
                    tether
                  }
                  ... on PokeTx {
                    address
                    date
                  }
                  ... on ExchangeTetherTx {
                    expiredAt
                  }
                  ... on ExchangeTx {
                    expiredAt
                    to
                  }
                  ... on DepositTetherTx {
                    charge
                    commission
                    locktime
                    target
                    value
                    withdrawer
                  }
                  ... on DeployProtocolTx {
                    address
                    description
                    name
                    namespace
                    pipeline
                    proto
                    sources
                    tags
                    version
                  }
                  ... on DeclareTx {
                    issuer
                    moniker
                  }
                  ... on DeclareFileTx {
                    hash
                  }
                  ... on CreateAssetTx {
                    address
                    moniker
                    parent
                    readonly
                    transferrable
                    ttl
                  }
                  ... on ConsumeAssetTx {
                    address
                    issuer
                  }
                  ... on ConsensusUpgradeTx {
                    maxBytes
                    maxCandidates
                    maxGas
                    maxValidators
                  }
                  ... on ApproveTetherTx {
                    withdraw
                  }
                  ... on AcquireAssetTx {
                    to
                  }
                  ... on AccountMigrateTx {
                    address
                    pk
                  }
                }
              }
            }
            sender {
              assets
              value
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
          ... on DepositTetherTx {
            charge
            commission
            locktime
            target
            value
            withdrawer
          }
          ... on DeployProtocolTx {
            address
            description
            name
            namespace
            pipeline
            proto
            sources
            tags
            version
            code {
              binary
              checksum
            }
            data {
              typeUrl
              value
            }
            typeUrls {
              module
              url
            }
          }
          ... on DeclareTx {
            issuer
            moniker
            data {
              typeUrl
              value
            }
          }
          ... on DeclareFileTx {
            hash
          }
          ... on CreateAssetTx {
            address
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
          ... on ApproveTetherTx {
            withdraw
            data {
              typeUrl
              value
            }
          }
          ... on AcquireAssetTx {
            to
            data {
              typeUrl
              value
            }
            specs {
              address
              data
            }
          }
          ... on AccountMigrateTx {
            address
            pk
            data {
              typeUrl
              value
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
        geoInfo {
          city
          country
          latitude
          longitude
        }
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
      code
      hash
      receiver
      sender
      time
      type
      valid
      tx {
        chainId
        from
        nonce
        pk
        signature
        signatures {
          delegator
          pk
          signature
          signer
          data {
            typeUrl
            value
          }
        }
        itx {
          __typename
          ... on RevokeSwapTx {
            address
            data {
              typeUrl
              value
            }
          }
          ... on RetrieveSwapTx {
            address
            hashkey
            data {
              typeUrl
              value
            }
          }
          ... on SetupSwapTx {
            assets
            hashlock
            locktime
            receiver
            value
            data {
              typeUrl
              value
            }
          }
          ... on WithdrawTetherTx {
            chainId
            expiredAt
            from
            nonce
            pk
            signature
            data {
              typeUrl
              value
            }
            receiver {
              assets
              tether
              value
            }
            sender {
              assets
              value
            }
            signatures {
              delegator
              pk
              signature
              signer
              data {
                typeUrl
                value
              }
            }
          }
          ... on UpgradeNodeTx {
            height
            override
            version
          }
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
          ... on RevokeTetherTx {
            tether
            data {
              typeUrl
              value
            }
          }
          ... on PokeTx {
            address
            date
            data {
              typeUrl
              value
            }
          }
          ... on ExchangeTetherTx {
            expiredAt
            data {
              typeUrl
              value
            }
            receiver {
              assets
              value
              deposit {
                chainId
                from
                nonce
                pk
                signature
                signatures {
                  delegator
                  pk
                  signature
                  signer
                }
                itx {
                  __typename
                  ... on RevokeSwapTx {
                    address
                  }
                  ... on RetrieveSwapTx {
                    address
                    hashkey
                  }
                  ... on SetupSwapTx {
                    assets
                    hashlock
                    locktime
                    receiver
                    value
                  }
                  ... on WithdrawTetherTx {
                    chainId
                    expiredAt
                    from
                    nonce
                    pk
                    signature
                  }
                  ... on UpgradeNodeTx {
                    height
                    override
                    version
                  }
                  ... on UpdateAssetTx {
                    address
                    moniker
                  }
                  ... on TransferTx {
                    assets
                    to
                    value
                  }
                  ... on SysUpgradeTx {
                    gracePeriod
                  }
                  ... on StakeTx {
                    message
                    to
                    value
                  }
                  ... on RevokeTetherTx {
                    tether
                  }
                  ... on PokeTx {
                    address
                    date
                  }
                  ... on ExchangeTetherTx {
                    expiredAt
                  }
                  ... on ExchangeTx {
                    expiredAt
                    to
                  }
                  ... on DepositTetherTx {
                    charge
                    commission
                    locktime
                    target
                    value
                    withdrawer
                  }
                  ... on DeployProtocolTx {
                    address
                    description
                    name
                    namespace
                    pipeline
                    proto
                    sources
                    tags
                    version
                  }
                  ... on DeclareTx {
                    issuer
                    moniker
                  }
                  ... on DeclareFileTx {
                    hash
                  }
                  ... on CreateAssetTx {
                    address
                    moniker
                    parent
                    readonly
                    transferrable
                    ttl
                  }
                  ... on ConsumeAssetTx {
                    address
                    issuer
                  }
                  ... on ConsensusUpgradeTx {
                    maxBytes
                    maxCandidates
                    maxGas
                    maxValidators
                  }
                  ... on ApproveTetherTx {
                    withdraw
                  }
                  ... on AcquireAssetTx {
                    to
                  }
                  ... on AccountMigrateTx {
                    address
                    pk
                  }
                }
              }
            }
            sender {
              assets
              value
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
          ... on DepositTetherTx {
            charge
            commission
            locktime
            target
            value
            withdrawer
          }
          ... on DeployProtocolTx {
            address
            description
            name
            namespace
            pipeline
            proto
            sources
            tags
            version
            code {
              binary
              checksum
            }
            data {
              typeUrl
              value
            }
            typeUrls {
              module
              url
            }
          }
          ... on DeclareTx {
            issuer
            moniker
            data {
              typeUrl
              value
            }
          }
          ... on DeclareFileTx {
            hash
          }
          ... on CreateAssetTx {
            address
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
          ... on ApproveTetherTx {
            withdraw
            data {
              typeUrl
              value
            }
          }
          ... on AcquireAssetTx {
            to
            data {
              typeUrl
              value
            }
            specs {
              address
              data
            }
          }
          ... on AccountMigrateTx {
            address
            pk
            data {
              typeUrl
              value
            }
          }
        }
      }
    }
  }
}
```

### listAssets

#### Arguments

* **ownerAddress**, optional, 
* **paging**, optional, 

#### Result Format

```graphql
{
  listAssets(ownerAddress: "abc") {
    code
    account {
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

### listBlocks

#### Arguments

* **heightFilter**, optional, 
* **numInvalidTxsFilter**, optional, 
* **numTxsFilter**, optional, 
* **paging**, optional, 
* **proposer**, optional, 
* **timeFilter**, optional, 

#### Result Format

```graphql
{
  listBlocks(proposer: "abc") {
    code
    blocks {
      height
      numInvalidTxs
      numTxs
      proposer
      time
    }
    page {
      cursor
      next
      total
    }
  }
}
```

### listStakes

#### Arguments

* **addressFilter**, optional, 
* **paging**, optional, 

#### Result Format

```graphql
{
  listStakes {
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

### listSwap

#### Arguments

* **available**, optional, 
* **paging**, optional, 
* **receiver**, optional, 
* **sender**, optional, 

#### Result Format

```graphql
{
  listSwap(available: true, paging: "abc", receiver: "abc", sender: "abc") {
    code
    page {
      cursor
      next
      total
    }
    swap {
      address
      assets
      hash
      hashkey
      hashlock
      locktime
      receiver
      sender
      value
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
            pk
            signature
            signatures {
              delegator
              pk
              signature
              signer
              data {
                typeUrl
                value
              }
            }
            itx {
              __typename
              ... on RevokeSwapTx {
                address
                data {
                  typeUrl
                  value
                }
              }
              ... on RetrieveSwapTx {
                address
                hashkey
                data {
                  typeUrl
                  value
                }
              }
              ... on SetupSwapTx {
                assets
                hashlock
                locktime
                receiver
                value
                data {
                  typeUrl
                  value
                }
              }
              ... on WithdrawTetherTx {
                chainId
                expiredAt
                from
                nonce
                pk
                signature
                data {
                  typeUrl
                  value
                }
                receiver {
                  assets
                  tether
                  value
                }
                sender {
                  assets
                  value
                }
                signatures {
                  delegator
                  pk
                  signature
                  signer
                }
              }
              ... on UpgradeNodeTx {
                height
                override
                version
              }
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
              ... on RevokeTetherTx {
                tether
                data {
                  typeUrl
                  value
                }
              }
              ... on PokeTx {
                address
                date
                data {
                  typeUrl
                  value
                }
              }
              ... on ExchangeTetherTx {
                expiredAt
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
              ... on DepositTetherTx {
                charge
                commission
                locktime
                target
                value
                withdrawer
              }
              ... on DeployProtocolTx {
                address
                description
                name
                namespace
                pipeline
                proto
                sources
                tags
                version
                code {
                  binary
                  checksum
                }
                data {
                  typeUrl
                  value
                }
                typeUrls {
                  module
                  url
                }
              }
              ... on DeclareTx {
                issuer
                moniker
                data {
                  typeUrl
                  value
                }
              }
              ... on DeclareFileTx {
                hash
              }
              ... on CreateAssetTx {
                address
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
              ... on ApproveTetherTx {
                withdraw
                data {
                  typeUrl
                  value
                }
              }
              ... on AcquireAssetTx {
                to
                data {
                  typeUrl
                  value
                }
                specs {
                  address
                  data
                }
              }
              ... on AccountMigrateTx {
                address
                pk
                data {
                  typeUrl
                  value
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
            pk
            signature
            signatures {
              delegator
              pk
              signature
              signer
              data {
                typeUrl
                value
              }
            }
            itx {
              __typename
              ... on RevokeSwapTx {
                address
                data {
                  typeUrl
                  value
                }
              }
              ... on RetrieveSwapTx {
                address
                hashkey
                data {
                  typeUrl
                  value
                }
              }
              ... on SetupSwapTx {
                assets
                hashlock
                locktime
                receiver
                value
                data {
                  typeUrl
                  value
                }
              }
              ... on WithdrawTetherTx {
                chainId
                expiredAt
                from
                nonce
                pk
                signature
                data {
                  typeUrl
                  value
                }
                receiver {
                  assets
                  tether
                  value
                }
                sender {
                  assets
                  value
                }
                signatures {
                  delegator
                  pk
                  signature
                  signer
                }
              }
              ... on UpgradeNodeTx {
                height
                override
                version
              }
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
              ... on RevokeTetherTx {
                tether
                data {
                  typeUrl
                  value
                }
              }
              ... on PokeTx {
                address
                date
                data {
                  typeUrl
                  value
                }
              }
              ... on ExchangeTetherTx {
                expiredAt
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
              ... on DepositTetherTx {
                charge
                commission
                locktime
                target
                value
                withdrawer
              }
              ... on DeployProtocolTx {
                address
                description
                name
                namespace
                pipeline
                proto
                sources
                tags
                version
                code {
                  binary
                  checksum
                }
                data {
                  typeUrl
                  value
                }
                typeUrls {
                  module
                  url
                }
              }
              ... on DeclareTx {
                issuer
                moniker
                data {
                  typeUrl
                  value
                }
              }
              ... on DeclareFileTx {
                hash
              }
              ... on CreateAssetTx {
                address
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
              ... on ApproveTetherTx {
                withdraw
                data {
                  typeUrl
                  value
                }
              }
              ... on AcquireAssetTx {
                to
                data {
                  typeUrl
                  value
                }
                specs {
                  address
                  data
                }
              }
              ... on AccountMigrateTx {
                address
                pk
                data {
                  typeUrl
                  value
                }
              }
            }
          }
        }
      }
    }
  }
}
```

### listTethers

#### Arguments

* **available**, optional, 
* **custodian**, optional, 
* **depositor**, optional, 
* **paging**, optional, 
* **withdrawer**, optional, 

#### Result Format

```graphql
{
  listTethers(available: true, custodian: "abc", depositor: "abc", paging: "abc", withdrawer: "abc") {
    code
    page {
      cursor
      next
      total
    }
    tethers {
      address
      available
      charge
      commission
      custodian
      depositor
      hash
      locktime
      target
      value
      withdrawer
    }
  }
}
```

### listTopAccounts

#### Arguments

* **paging**, optional, 

#### Result Format

```graphql
{
  listTopAccounts {
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

### listTransactions

#### Arguments

* **addressFilter**, optional, 
* **paging**, optional, 
* **timeFilter**, optional, 
* **typeFilter**, optional, 
* **validityFilter**, optional, 

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
      code
      hash
      receiver
      sender
      time
      type
      valid
      tx {
        chainId
        from
        nonce
        pk
        signature
        signatures {
          delegator
          pk
          signature
          signer
          data {
            typeUrl
            value
          }
        }
        itx {
          __typename
          ... on RevokeSwapTx {
            address
            data {
              typeUrl
              value
            }
          }
          ... on RetrieveSwapTx {
            address
            hashkey
            data {
              typeUrl
              value
            }
          }
          ... on SetupSwapTx {
            assets
            hashlock
            locktime
            receiver
            value
            data {
              typeUrl
              value
            }
          }
          ... on WithdrawTetherTx {
            chainId
            expiredAt
            from
            nonce
            pk
            signature
            data {
              typeUrl
              value
            }
            receiver {
              assets
              tether
              value
            }
            sender {
              assets
              value
            }
            signatures {
              delegator
              pk
              signature
              signer
              data {
                typeUrl
                value
              }
            }
          }
          ... on UpgradeNodeTx {
            height
            override
            version
          }
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
          ... on RevokeTetherTx {
            tether
            data {
              typeUrl
              value
            }
          }
          ... on PokeTx {
            address
            date
            data {
              typeUrl
              value
            }
          }
          ... on ExchangeTetherTx {
            expiredAt
            data {
              typeUrl
              value
            }
            receiver {
              assets
              value
              deposit {
                chainId
                from
                nonce
                pk
                signature
                signatures {
                  delegator
                  pk
                  signature
                  signer
                }
                itx {
                  __typename
                  ... on RevokeSwapTx {
                    address
                  }
                  ... on RetrieveSwapTx {
                    address
                    hashkey
                  }
                  ... on SetupSwapTx {
                    assets
                    hashlock
                    locktime
                    receiver
                    value
                  }
                  ... on WithdrawTetherTx {
                    chainId
                    expiredAt
                    from
                    nonce
                    pk
                    signature
                  }
                  ... on UpgradeNodeTx {
                    height
                    override
                    version
                  }
                  ... on UpdateAssetTx {
                    address
                    moniker
                  }
                  ... on TransferTx {
                    assets
                    to
                    value
                  }
                  ... on SysUpgradeTx {
                    gracePeriod
                  }
                  ... on StakeTx {
                    message
                    to
                    value
                  }
                  ... on RevokeTetherTx {
                    tether
                  }
                  ... on PokeTx {
                    address
                    date
                  }
                  ... on ExchangeTetherTx {
                    expiredAt
                  }
                  ... on ExchangeTx {
                    expiredAt
                    to
                  }
                  ... on DepositTetherTx {
                    charge
                    commission
                    locktime
                    target
                    value
                    withdrawer
                  }
                  ... on DeployProtocolTx {
                    address
                    description
                    name
                    namespace
                    pipeline
                    proto
                    sources
                    tags
                    version
                  }
                  ... on DeclareTx {
                    issuer
                    moniker
                  }
                  ... on DeclareFileTx {
                    hash
                  }
                  ... on CreateAssetTx {
                    address
                    moniker
                    parent
                    readonly
                    transferrable
                    ttl
                  }
                  ... on ConsumeAssetTx {
                    address
                    issuer
                  }
                  ... on ConsensusUpgradeTx {
                    maxBytes
                    maxCandidates
                    maxGas
                    maxValidators
                  }
                  ... on ApproveTetherTx {
                    withdraw
                  }
                  ... on AcquireAssetTx {
                    to
                  }
                  ... on AccountMigrateTx {
                    address
                    pk
                  }
                }
              }
            }
            sender {
              assets
              value
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
          ... on DepositTetherTx {
            charge
            commission
            locktime
            target
            value
            withdrawer
          }
          ... on DeployProtocolTx {
            address
            description
            name
            namespace
            pipeline
            proto
            sources
            tags
            version
            code {
              binary
              checksum
            }
            data {
              typeUrl
              value
            }
            typeUrls {
              module
              url
            }
          }
          ... on DeclareTx {
            issuer
            moniker
            data {
              typeUrl
              value
            }
          }
          ... on DeclareFileTx {
            hash
          }
          ... on CreateAssetTx {
            address
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
          ... on ApproveTetherTx {
            withdraw
            data {
              typeUrl
              value
            }
          }
          ... on AcquireAssetTx {
            to
            data {
              typeUrl
              value
            }
            specs {
              address
              data
            }
          }
          ... on AccountMigrateTx {
            address
            pk
            data {
              typeUrl
              value
            }
          }
        }
      }
    }
  }
}
```


## Subscriptions

### subscribe

#### Arguments

* **filter**, optional, 
* **topic**, optional, 

#### Result Format

```graphql
subscription {
  subscribe(filter: "abc", topic: "abc") {
    code
    topic
    accountMigrate {
      chainId
      from
      nonce
      pk
      signature
      signatures {
        delegator
        pk
        signature
        signer
        data {
          typeUrl
          value
        }
      }
      itx {
        __typename
        ... on RevokeSwapTx {
          address
          data {
            typeUrl
            value
          }
        }
        ... on RetrieveSwapTx {
          address
          hashkey
          data {
            typeUrl
            value
          }
        }
        ... on SetupSwapTx {
          assets
          hashlock
          locktime
          receiver
          value
          data {
            typeUrl
            value
          }
        }
        ... on WithdrawTetherTx {
          chainId
          expiredAt
          from
          nonce
          pk
          signature
          data {
            typeUrl
            value
          }
          receiver {
            assets
            tether
            value
          }
          sender {
            assets
            value
          }
          signatures {
            delegator
            pk
            signature
            signer
            data {
              typeUrl
              value
            }
          }
        }
        ... on UpgradeNodeTx {
          height
          override
          version
        }
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
        ... on RevokeTetherTx {
          tether
          data {
            typeUrl
            value
          }
        }
        ... on PokeTx {
          address
          date
          data {
            typeUrl
            value
          }
        }
        ... on ExchangeTetherTx {
          expiredAt
          data {
            typeUrl
            value
          }
          receiver {
            assets
            value
            deposit {
              chainId
              from
              nonce
              pk
              signature
              signatures {
                delegator
                pk
                signature
                signer
                data {
                  typeUrl
                  value
                }
              }
              itx {
                __typename
                ... on RevokeSwapTx {
                  address
                  data {
                    typeUrl
                    value
                  }
                }
                ... on RetrieveSwapTx {
                  address
                  hashkey
                  data {
                    typeUrl
                    value
                  }
                }
                ... on SetupSwapTx {
                  assets
                  hashlock
                  locktime
                  receiver
                  value
                  data {
                    typeUrl
                    value
                  }
                }
                ... on WithdrawTetherTx {
                  chainId
                  expiredAt
                  from
                  nonce
                  pk
                  signature
                  data {
                    typeUrl
                    value
                  }
                  receiver {
                    assets
                    tether
                    value
                  }
                  sender {
                    assets
                    value
                  }
                  signatures {
                    delegator
                    pk
                    signature
                    signer
                  }
                }
                ... on UpgradeNodeTx {
                  height
                  override
                  version
                }
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
                ... on RevokeTetherTx {
                  tether
                  data {
                    typeUrl
                    value
                  }
                }
                ... on PokeTx {
                  address
                  date
                  data {
                    typeUrl
                    value
                  }
                }
                ... on ExchangeTetherTx {
                  expiredAt
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
                ... on DepositTetherTx {
                  charge
                  commission
                  locktime
                  target
                  value
                  withdrawer
                }
                ... on DeployProtocolTx {
                  address
                  description
                  name
                  namespace
                  pipeline
                  proto
                  sources
                  tags
                  version
                  code {
                    binary
                    checksum
                  }
                  data {
                    typeUrl
                    value
                  }
                  typeUrls {
                    module
                    url
                  }
                }
                ... on DeclareTx {
                  issuer
                  moniker
                  data {
                    typeUrl
                    value
                  }
                }
                ... on DeclareFileTx {
                  hash
                }
                ... on CreateAssetTx {
                  address
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
                ... on ApproveTetherTx {
                  withdraw
                  data {
                    typeUrl
                    value
                  }
                }
                ... on AcquireAssetTx {
                  to
                  data {
                    typeUrl
                    value
                  }
                  specs {
                    address
                    data
                  }
                }
                ... on AccountMigrateTx {
                  address
                  pk
                  data {
                    typeUrl
                    value
                  }
                }
              }
            }
          }
          sender {
            assets
            value
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
        ... on DepositTetherTx {
          charge
          commission
          locktime
          target
          value
          withdrawer
        }
        ... on DeployProtocolTx {
          address
          description
          name
          namespace
          pipeline
          proto
          sources
          tags
          version
          code {
            binary
            checksum
          }
          data {
            typeUrl
            value
          }
          typeUrls {
            module
            url
          }
        }
        ... on DeclareTx {
          issuer
          moniker
          data {
            typeUrl
            value
          }
        }
        ... on DeclareFileTx {
          hash
        }
        ... on CreateAssetTx {
          address
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
        ... on ApproveTetherTx {
          withdraw
          data {
            typeUrl
            value
          }
        }
        ... on AcquireAssetTx {
          to
          data {
            typeUrl
            value
          }
          specs {
            address
            data
          }
        }
        ... on AccountMigrateTx {
          address
          pk
          data {
            typeUrl
            value
          }
        }
      }
    }
    accountState {
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
            pk
            signature
            signatures {
              delegator
              pk
              signature
              signer
              data {
                typeUrl
                value
              }
            }
            itx {
              __typename
              ... on RevokeSwapTx {
                address
                data {
                  typeUrl
                  value
                }
              }
              ... on RetrieveSwapTx {
                address
                hashkey
                data {
                  typeUrl
                  value
                }
              }
              ... on SetupSwapTx {
                assets
                hashlock
                locktime
                receiver
                value
                data {
                  typeUrl
                  value
                }
              }
              ... on WithdrawTetherTx {
                chainId
                expiredAt
                from
                nonce
                pk
                signature
                data {
                  typeUrl
                  value
                }
                receiver {
                  assets
                  tether
                  value
                }
                sender {
                  assets
                  value
                }
                signatures {
                  delegator
                  pk
                  signature
                  signer
                }
              }
              ... on UpgradeNodeTx {
                height
                override
                version
              }
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
              ... on RevokeTetherTx {
                tether
                data {
                  typeUrl
                  value
                }
              }
              ... on PokeTx {
                address
                date
                data {
                  typeUrl
                  value
                }
              }
              ... on ExchangeTetherTx {
                expiredAt
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
              ... on DepositTetherTx {
                charge
                commission
                locktime
                target
                value
                withdrawer
              }
              ... on DeployProtocolTx {
                address
                description
                name
                namespace
                pipeline
                proto
                sources
                tags
                version
                code {
                  binary
                  checksum
                }
                data {
                  typeUrl
                  value
                }
                typeUrls {
                  module
                  url
                }
              }
              ... on DeclareTx {
                issuer
                moniker
                data {
                  typeUrl
                  value
                }
              }
              ... on DeclareFileTx {
                hash
              }
              ... on CreateAssetTx {
                address
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
              ... on ApproveTetherTx {
                withdraw
                data {
                  typeUrl
                  value
                }
              }
              ... on AcquireAssetTx {
                to
                data {
                  typeUrl
                  value
                }
                specs {
                  address
                  data
                }
              }
              ... on AccountMigrateTx {
                address
                pk
                data {
                  typeUrl
                  value
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
            pk
            signature
            signatures {
              delegator
              pk
              signature
              signer
              data {
                typeUrl
                value
              }
            }
            itx {
              __typename
              ... on RevokeSwapTx {
                address
                data {
                  typeUrl
                  value
                }
              }
              ... on RetrieveSwapTx {
                address
                hashkey
                data {
                  typeUrl
                  value
                }
              }
              ... on SetupSwapTx {
                assets
                hashlock
                locktime
                receiver
                value
                data {
                  typeUrl
                  value
                }
              }
              ... on WithdrawTetherTx {
                chainId
                expiredAt
                from
                nonce
                pk
                signature
                data {
                  typeUrl
                  value
                }
                receiver {
                  assets
                  tether
                  value
                }
                sender {
                  assets
                  value
                }
                signatures {
                  delegator
                  pk
                  signature
                  signer
                }
              }
              ... on UpgradeNodeTx {
                height
                override
                version
              }
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
              ... on RevokeTetherTx {
                tether
                data {
                  typeUrl
                  value
                }
              }
              ... on PokeTx {
                address
                date
                data {
                  typeUrl
                  value
                }
              }
              ... on ExchangeTetherTx {
                expiredAt
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
              ... on DepositTetherTx {
                charge
                commission
                locktime
                target
                value
                withdrawer
              }
              ... on DeployProtocolTx {
                address
                description
                name
                namespace
                pipeline
                proto
                sources
                tags
                version
                code {
                  binary
                  checksum
                }
                data {
                  typeUrl
                  value
                }
                typeUrls {
                  module
                  url
                }
              }
              ... on DeclareTx {
                issuer
                moniker
                data {
                  typeUrl
                  value
                }
              }
              ... on DeclareFileTx {
                hash
              }
              ... on CreateAssetTx {
                address
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
              ... on ApproveTetherTx {
                withdraw
                data {
                  typeUrl
                  value
                }
              }
              ... on AcquireAssetTx {
                to
                data {
                  typeUrl
                  value
                }
                specs {
                  address
                  data
                }
              }
              ... on AccountMigrateTx {
                address
                pk
                data {
                  typeUrl
                  value
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
    }
    assetState {
      address
      consumedTime
      issuer
      moniker
      owner
      parent
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
            pk
            signature
            signatures {
              delegator
              pk
              signature
              signer
              data {
                typeUrl
                value
              }
            }
            itx {
              __typename
              ... on RevokeSwapTx {
                address
                data {
                  typeUrl
                  value
                }
              }
              ... on RetrieveSwapTx {
                address
                hashkey
                data {
                  typeUrl
                  value
                }
              }
              ... on SetupSwapTx {
                assets
                hashlock
                locktime
                receiver
                value
                data {
                  typeUrl
                  value
                }
              }
              ... on WithdrawTetherTx {
                chainId
                expiredAt
                from
                nonce
                pk
                signature
                data {
                  typeUrl
                  value
                }
                receiver {
                  assets
                  tether
                  value
                }
                sender {
                  assets
                  value
                }
                signatures {
                  delegator
                  pk
                  signature
                  signer
                }
              }
              ... on UpgradeNodeTx {
                height
                override
                version
              }
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
              ... on RevokeTetherTx {
                tether
                data {
                  typeUrl
                  value
                }
              }
              ... on PokeTx {
                address
                date
                data {
                  typeUrl
                  value
                }
              }
              ... on ExchangeTetherTx {
                expiredAt
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
              ... on DepositTetherTx {
                charge
                commission
                locktime
                target
                value
                withdrawer
              }
              ... on DeployProtocolTx {
                address
                description
                name
                namespace
                pipeline
                proto
                sources
                tags
                version
                code {
                  binary
                  checksum
                }
                data {
                  typeUrl
                  value
                }
                typeUrls {
                  module
                  url
                }
              }
              ... on DeclareTx {
                issuer
                moniker
                data {
                  typeUrl
                  value
                }
              }
              ... on DeclareFileTx {
                hash
              }
              ... on CreateAssetTx {
                address
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
              ... on ApproveTetherTx {
                withdraw
                data {
                  typeUrl
                  value
                }
              }
              ... on AcquireAssetTx {
                to
                data {
                  typeUrl
                  value
                }
                specs {
                  address
                  data
                }
              }
              ... on AccountMigrateTx {
                address
                pk
                data {
                  typeUrl
                  value
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
            pk
            signature
            signatures {
              delegator
              pk
              signature
              signer
              data {
                typeUrl
                value
              }
            }
            itx {
              __typename
              ... on RevokeSwapTx {
                address
                data {
                  typeUrl
                  value
                }
              }
              ... on RetrieveSwapTx {
                address
                hashkey
                data {
                  typeUrl
                  value
                }
              }
              ... on SetupSwapTx {
                assets
                hashlock
                locktime
                receiver
                value
                data {
                  typeUrl
                  value
                }
              }
              ... on WithdrawTetherTx {
                chainId
                expiredAt
                from
                nonce
                pk
                signature
                data {
                  typeUrl
                  value
                }
                receiver {
                  assets
                  tether
                  value
                }
                sender {
                  assets
                  value
                }
                signatures {
                  delegator
                  pk
                  signature
                  signer
                }
              }
              ... on UpgradeNodeTx {
                height
                override
                version
              }
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
              ... on RevokeTetherTx {
                tether
                data {
                  typeUrl
                  value
                }
              }
              ... on PokeTx {
                address
                date
                data {
                  typeUrl
                  value
                }
              }
              ... on ExchangeTetherTx {
                expiredAt
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
              ... on DepositTetherTx {
                charge
                commission
                locktime
                target
                value
                withdrawer
              }
              ... on DeployProtocolTx {
                address
                description
                name
                namespace
                pipeline
                proto
                sources
                tags
                version
                code {
                  binary
                  checksum
                }
                data {
                  typeUrl
                  value
                }
                typeUrls {
                  module
                  url
                }
              }
              ... on DeclareTx {
                issuer
                moniker
                data {
                  typeUrl
                  value
                }
              }
              ... on DeclareFileTx {
                hash
              }
              ... on CreateAssetTx {
                address
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
              ... on ApproveTetherTx {
                withdraw
                data {
                  typeUrl
                  value
                }
              }
              ... on AcquireAssetTx {
                to
                data {
                  typeUrl
                  value
                }
                specs {
                  address
                  data
                }
              }
              ... on AccountMigrateTx {
                address
                pk
                data {
                  typeUrl
                  value
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
          app
          block
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
      pk
      signature
      signatures {
        delegator
        pk
        signature
        signer
        data {
          typeUrl
          value
        }
      }
      itx {
        __typename
        ... on RevokeSwapTx {
          address
          data {
            typeUrl
            value
          }
        }
        ... on RetrieveSwapTx {
          address
          hashkey
          data {
            typeUrl
            value
          }
        }
        ... on SetupSwapTx {
          assets
          hashlock
          locktime
          receiver
          value
          data {
            typeUrl
            value
          }
        }
        ... on WithdrawTetherTx {
          chainId
          expiredAt
          from
          nonce
          pk
          signature
          data {
            typeUrl
            value
          }
          receiver {
            assets
            tether
            value
          }
          sender {
            assets
            value
          }
          signatures {
            delegator
            pk
            signature
            signer
            data {
              typeUrl
              value
            }
          }
        }
        ... on UpgradeNodeTx {
          height
          override
          version
        }
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
        ... on RevokeTetherTx {
          tether
          data {
            typeUrl
            value
          }
        }
        ... on PokeTx {
          address
          date
          data {
            typeUrl
            value
          }
        }
        ... on ExchangeTetherTx {
          expiredAt
          data {
            typeUrl
            value
          }
          receiver {
            assets
            value
            deposit {
              chainId
              from
              nonce
              pk
              signature
              signatures {
                delegator
                pk
                signature
                signer
                data {
                  typeUrl
                  value
                }
              }
              itx {
                __typename
                ... on RevokeSwapTx {
                  address
                  data {
                    typeUrl
                    value
                  }
                }
                ... on RetrieveSwapTx {
                  address
                  hashkey
                  data {
                    typeUrl
                    value
                  }
                }
                ... on SetupSwapTx {
                  assets
                  hashlock
                  locktime
                  receiver
                  value
                  data {
                    typeUrl
                    value
                  }
                }
                ... on WithdrawTetherTx {
                  chainId
                  expiredAt
                  from
                  nonce
                  pk
                  signature
                  data {
                    typeUrl
                    value
                  }
                  receiver {
                    assets
                    tether
                    value
                  }
                  sender {
                    assets
                    value
                  }
                  signatures {
                    delegator
                    pk
                    signature
                    signer
                  }
                }
                ... on UpgradeNodeTx {
                  height
                  override
                  version
                }
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
                ... on RevokeTetherTx {
                  tether
                  data {
                    typeUrl
                    value
                  }
                }
                ... on PokeTx {
                  address
                  date
                  data {
                    typeUrl
                    value
                  }
                }
                ... on ExchangeTetherTx {
                  expiredAt
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
                ... on DepositTetherTx {
                  charge
                  commission
                  locktime
                  target
                  value
                  withdrawer
                }
                ... on DeployProtocolTx {
                  address
                  description
                  name
                  namespace
                  pipeline
                  proto
                  sources
                  tags
                  version
                  code {
                    binary
                    checksum
                  }
                  data {
                    typeUrl
                    value
                  }
                  typeUrls {
                    module
                    url
                  }
                }
                ... on DeclareTx {
                  issuer
                  moniker
                  data {
                    typeUrl
                    value
                  }
                }
                ... on DeclareFileTx {
                  hash
                }
                ... on CreateAssetTx {
                  address
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
                ... on ApproveTetherTx {
                  withdraw
                  data {
                    typeUrl
                    value
                  }
                }
                ... on AcquireAssetTx {
                  to
                  data {
                    typeUrl
                    value
                  }
                  specs {
                    address
                    data
                  }
                }
                ... on AccountMigrateTx {
                  address
                  pk
                  data {
                    typeUrl
                    value
                  }
                }
              }
            }
          }
          sender {
            assets
            value
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
        ... on DepositTetherTx {
          charge
          commission
          locktime
          target
          value
          withdrawer
        }
        ... on DeployProtocolTx {
          address
          description
          name
          namespace
          pipeline
          proto
          sources
          tags
          version
          code {
            binary
            checksum
          }
          data {
            typeUrl
            value
          }
          typeUrls {
            module
            url
          }
        }
        ... on DeclareTx {
          issuer
          moniker
          data {
            typeUrl
            value
          }
        }
        ... on DeclareFileTx {
          hash
        }
        ... on CreateAssetTx {
          address
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
        ... on ApproveTetherTx {
          withdraw
          data {
            typeUrl
            value
          }
        }
        ... on AcquireAssetTx {
          to
          data {
            typeUrl
            value
          }
          specs {
            address
            data
          }
        }
        ... on AccountMigrateTx {
          address
          pk
          data {
            typeUrl
            value
          }
        }
      }
    }
    consensusUpgrade {
      chainId
      from
      nonce
      pk
      signature
      signatures {
        delegator
        pk
        signature
        signer
        data {
          typeUrl
          value
        }
      }
      itx {
        __typename
        ... on RevokeSwapTx {
          address
          data {
            typeUrl
            value
          }
        }
        ... on RetrieveSwapTx {
          address
          hashkey
          data {
            typeUrl
            value
          }
        }
        ... on SetupSwapTx {
          assets
          hashlock
          locktime
          receiver
          value
          data {
            typeUrl
            value
          }
        }
        ... on WithdrawTetherTx {
          chainId
          expiredAt
          from
          nonce
          pk
          signature
          data {
            typeUrl
            value
          }
          receiver {
            assets
            tether
            value
          }
          sender {
            assets
            value
          }
          signatures {
            delegator
            pk
            signature
            signer
            data {
              typeUrl
              value
            }
          }
        }
        ... on UpgradeNodeTx {
          height
          override
          version
        }
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
        ... on RevokeTetherTx {
          tether
          data {
            typeUrl
            value
          }
        }
        ... on PokeTx {
          address
          date
          data {
            typeUrl
            value
          }
        }
        ... on ExchangeTetherTx {
          expiredAt
          data {
            typeUrl
            value
          }
          receiver {
            assets
            value
            deposit {
              chainId
              from
              nonce
              pk
              signature
              signatures {
                delegator
                pk
                signature
                signer
                data {
                  typeUrl
                  value
                }
              }
              itx {
                __typename
                ... on RevokeSwapTx {
                  address
                  data {
                    typeUrl
                    value
                  }
                }
                ... on RetrieveSwapTx {
                  address
                  hashkey
                  data {
                    typeUrl
                    value
                  }
                }
                ... on SetupSwapTx {
                  assets
                  hashlock
                  locktime
                  receiver
                  value
                  data {
                    typeUrl
                    value
                  }
                }
                ... on WithdrawTetherTx {
                  chainId
                  expiredAt
                  from
                  nonce
                  pk
                  signature
                  data {
                    typeUrl
                    value
                  }
                  receiver {
                    assets
                    tether
                    value
                  }
                  sender {
                    assets
                    value
                  }
                  signatures {
                    delegator
                    pk
                    signature
                    signer
                  }
                }
                ... on UpgradeNodeTx {
                  height
                  override
                  version
                }
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
                ... on RevokeTetherTx {
                  tether
                  data {
                    typeUrl
                    value
                  }
                }
                ... on PokeTx {
                  address
                  date
                  data {
                    typeUrl
                    value
                  }
                }
                ... on ExchangeTetherTx {
                  expiredAt
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
                ... on DepositTetherTx {
                  charge
                  commission
                  locktime
                  target
                  value
                  withdrawer
                }
                ... on DeployProtocolTx {
                  address
                  description
                  name
                  namespace
                  pipeline
                  proto
                  sources
                  tags
                  version
                  code {
                    binary
                    checksum
                  }
                  data {
                    typeUrl
                    value
                  }
                  typeUrls {
                    module
                    url
                  }
                }
                ... on DeclareTx {
                  issuer
                  moniker
                  data {
                    typeUrl
                    value
                  }
                }
                ... on DeclareFileTx {
                  hash
                }
                ... on CreateAssetTx {
                  address
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
                ... on ApproveTetherTx {
                  withdraw
                  data {
                    typeUrl
                    value
                  }
                }
                ... on AcquireAssetTx {
                  to
                  data {
                    typeUrl
                    value
                  }
                  specs {
                    address
                    data
                  }
                }
                ... on AccountMigrateTx {
                  address
                  pk
                  data {
                    typeUrl
                    value
                  }
                }
              }
            }
          }
          sender {
            assets
            value
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
        ... on DepositTetherTx {
          charge
          commission
          locktime
          target
          value
          withdrawer
        }
        ... on DeployProtocolTx {
          address
          description
          name
          namespace
          pipeline
          proto
          sources
          tags
          version
          code {
            binary
            checksum
          }
          data {
            typeUrl
            value
          }
          typeUrls {
            module
            url
          }
        }
        ... on DeclareTx {
          issuer
          moniker
          data {
            typeUrl
            value
          }
        }
        ... on DeclareFileTx {
          hash
        }
        ... on CreateAssetTx {
          address
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
        ... on ApproveTetherTx {
          withdraw
          data {
            typeUrl
            value
          }
        }
        ... on AcquireAssetTx {
          to
          data {
            typeUrl
            value
          }
          specs {
            address
            data
          }
        }
        ... on AccountMigrateTx {
          address
          pk
          data {
            typeUrl
            value
          }
        }
      }
    }
    createAsset {
      chainId
      from
      nonce
      pk
      signature
      signatures {
        delegator
        pk
        signature
        signer
        data {
          typeUrl
          value
        }
      }
      itx {
        __typename
        ... on RevokeSwapTx {
          address
          data {
            typeUrl
            value
          }
        }
        ... on RetrieveSwapTx {
          address
          hashkey
          data {
            typeUrl
            value
          }
        }
        ... on SetupSwapTx {
          assets
          hashlock
          locktime
          receiver
          value
          data {
            typeUrl
            value
          }
        }
        ... on WithdrawTetherTx {
          chainId
          expiredAt
          from
          nonce
          pk
          signature
          data {
            typeUrl
            value
          }
          receiver {
            assets
            tether
            value
          }
          sender {
            assets
            value
          }
          signatures {
            delegator
            pk
            signature
            signer
            data {
              typeUrl
              value
            }
          }
        }
        ... on UpgradeNodeTx {
          height
          override
          version
        }
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
        ... on RevokeTetherTx {
          tether
          data {
            typeUrl
            value
          }
        }
        ... on PokeTx {
          address
          date
          data {
            typeUrl
            value
          }
        }
        ... on ExchangeTetherTx {
          expiredAt
          data {
            typeUrl
            value
          }
          receiver {
            assets
            value
            deposit {
              chainId
              from
              nonce
              pk
              signature
              signatures {
                delegator
                pk
                signature
                signer
                data {
                  typeUrl
                  value
                }
              }
              itx {
                __typename
                ... on RevokeSwapTx {
                  address
                  data {
                    typeUrl
                    value
                  }
                }
                ... on RetrieveSwapTx {
                  address
                  hashkey
                  data {
                    typeUrl
                    value
                  }
                }
                ... on SetupSwapTx {
                  assets
                  hashlock
                  locktime
                  receiver
                  value
                  data {
                    typeUrl
                    value
                  }
                }
                ... on WithdrawTetherTx {
                  chainId
                  expiredAt
                  from
                  nonce
                  pk
                  signature
                  data {
                    typeUrl
                    value
                  }
                  receiver {
                    assets
                    tether
                    value
                  }
                  sender {
                    assets
                    value
                  }
                  signatures {
                    delegator
                    pk
                    signature
                    signer
                  }
                }
                ... on UpgradeNodeTx {
                  height
                  override
                  version
                }
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
                ... on RevokeTetherTx {
                  tether
                  data {
                    typeUrl
                    value
                  }
                }
                ... on PokeTx {
                  address
                  date
                  data {
                    typeUrl
                    value
                  }
                }
                ... on ExchangeTetherTx {
                  expiredAt
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
                ... on DepositTetherTx {
                  charge
                  commission
                  locktime
                  target
                  value
                  withdrawer
                }
                ... on DeployProtocolTx {
                  address
                  description
                  name
                  namespace
                  pipeline
                  proto
                  sources
                  tags
                  version
                  code {
                    binary
                    checksum
                  }
                  data {
                    typeUrl
                    value
                  }
                  typeUrls {
                    module
                    url
                  }
                }
                ... on DeclareTx {
                  issuer
                  moniker
                  data {
                    typeUrl
                    value
                  }
                }
                ... on DeclareFileTx {
                  hash
                }
                ... on CreateAssetTx {
                  address
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
                ... on ApproveTetherTx {
                  withdraw
                  data {
                    typeUrl
                    value
                  }
                }
                ... on AcquireAssetTx {
                  to
                  data {
                    typeUrl
                    value
                  }
                  specs {
                    address
                    data
                  }
                }
                ... on AccountMigrateTx {
                  address
                  pk
                  data {
                    typeUrl
                    value
                  }
                }
              }
            }
          }
          sender {
            assets
            value
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
        ... on DepositTetherTx {
          charge
          commission
          locktime
          target
          value
          withdrawer
        }
        ... on DeployProtocolTx {
          address
          description
          name
          namespace
          pipeline
          proto
          sources
          tags
          version
          code {
            binary
            checksum
          }
          data {
            typeUrl
            value
          }
          typeUrls {
            module
            url
          }
        }
        ... on DeclareTx {
          issuer
          moniker
          data {
            typeUrl
            value
          }
        }
        ... on DeclareFileTx {
          hash
        }
        ... on CreateAssetTx {
          address
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
        ... on ApproveTetherTx {
          withdraw
          data {
            typeUrl
            value
          }
        }
        ... on AcquireAssetTx {
          to
          data {
            typeUrl
            value
          }
          specs {
            address
            data
          }
        }
        ... on AccountMigrateTx {
          address
          pk
          data {
            typeUrl
            value
          }
        }
      }
    }
    declare {
      chainId
      from
      nonce
      pk
      signature
      signatures {
        delegator
        pk
        signature
        signer
        data {
          typeUrl
          value
        }
      }
      itx {
        __typename
        ... on RevokeSwapTx {
          address
          data {
            typeUrl
            value
          }
        }
        ... on RetrieveSwapTx {
          address
          hashkey
          data {
            typeUrl
            value
          }
        }
        ... on SetupSwapTx {
          assets
          hashlock
          locktime
          receiver
          value
          data {
            typeUrl
            value
          }
        }
        ... on WithdrawTetherTx {
          chainId
          expiredAt
          from
          nonce
          pk
          signature
          data {
            typeUrl
            value
          }
          receiver {
            assets
            tether
            value
          }
          sender {
            assets
            value
          }
          signatures {
            delegator
            pk
            signature
            signer
            data {
              typeUrl
              value
            }
          }
        }
        ... on UpgradeNodeTx {
          height
          override
          version
        }
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
        ... on RevokeTetherTx {
          tether
          data {
            typeUrl
            value
          }
        }
        ... on PokeTx {
          address
          date
          data {
            typeUrl
            value
          }
        }
        ... on ExchangeTetherTx {
          expiredAt
          data {
            typeUrl
            value
          }
          receiver {
            assets
            value
            deposit {
              chainId
              from
              nonce
              pk
              signature
              signatures {
                delegator
                pk
                signature
                signer
                data {
                  typeUrl
                  value
                }
              }
              itx {
                __typename
                ... on RevokeSwapTx {
                  address
                  data {
                    typeUrl
                    value
                  }
                }
                ... on RetrieveSwapTx {
                  address
                  hashkey
                  data {
                    typeUrl
                    value
                  }
                }
                ... on SetupSwapTx {
                  assets
                  hashlock
                  locktime
                  receiver
                  value
                  data {
                    typeUrl
                    value
                  }
                }
                ... on WithdrawTetherTx {
                  chainId
                  expiredAt
                  from
                  nonce
                  pk
                  signature
                  data {
                    typeUrl
                    value
                  }
                  receiver {
                    assets
                    tether
                    value
                  }
                  sender {
                    assets
                    value
                  }
                  signatures {
                    delegator
                    pk
                    signature
                    signer
                  }
                }
                ... on UpgradeNodeTx {
                  height
                  override
                  version
                }
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
                ... on RevokeTetherTx {
                  tether
                  data {
                    typeUrl
                    value
                  }
                }
                ... on PokeTx {
                  address
                  date
                  data {
                    typeUrl
                    value
                  }
                }
                ... on ExchangeTetherTx {
                  expiredAt
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
                ... on DepositTetherTx {
                  charge
                  commission
                  locktime
                  target
                  value
                  withdrawer
                }
                ... on DeployProtocolTx {
                  address
                  description
                  name
                  namespace
                  pipeline
                  proto
                  sources
                  tags
                  version
                  code {
                    binary
                    checksum
                  }
                  data {
                    typeUrl
                    value
                  }
                  typeUrls {
                    module
                    url
                  }
                }
                ... on DeclareTx {
                  issuer
                  moniker
                  data {
                    typeUrl
                    value
                  }
                }
                ... on DeclareFileTx {
                  hash
                }
                ... on CreateAssetTx {
                  address
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
                ... on ApproveTetherTx {
                  withdraw
                  data {
                    typeUrl
                    value
                  }
                }
                ... on AcquireAssetTx {
                  to
                  data {
                    typeUrl
                    value
                  }
                  specs {
                    address
                    data
                  }
                }
                ... on AccountMigrateTx {
                  address
                  pk
                  data {
                    typeUrl
                    value
                  }
                }
              }
            }
          }
          sender {
            assets
            value
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
        ... on DepositTetherTx {
          charge
          commission
          locktime
          target
          value
          withdrawer
        }
        ... on DeployProtocolTx {
          address
          description
          name
          namespace
          pipeline
          proto
          sources
          tags
          version
          code {
            binary
            checksum
          }
          data {
            typeUrl
            value
          }
          typeUrls {
            module
            url
          }
        }
        ... on DeclareTx {
          issuer
          moniker
          data {
            typeUrl
            value
          }
        }
        ... on DeclareFileTx {
          hash
        }
        ... on CreateAssetTx {
          address
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
        ... on ApproveTetherTx {
          withdraw
          data {
            typeUrl
            value
          }
        }
        ... on AcquireAssetTx {
          to
          data {
            typeUrl
            value
          }
          specs {
            address
            data
          }
        }
        ... on AccountMigrateTx {
          address
          pk
          data {
            typeUrl
            value
          }
        }
      }
    }
    declareFile {
      chainId
      from
      nonce
      pk
      signature
      signatures {
        delegator
        pk
        signature
        signer
        data {
          typeUrl
          value
        }
      }
      itx {
        __typename
        ... on RevokeSwapTx {
          address
          data {
            typeUrl
            value
          }
        }
        ... on RetrieveSwapTx {
          address
          hashkey
          data {
            typeUrl
            value
          }
        }
        ... on SetupSwapTx {
          assets
          hashlock
          locktime
          receiver
          value
          data {
            typeUrl
            value
          }
        }
        ... on WithdrawTetherTx {
          chainId
          expiredAt
          from
          nonce
          pk
          signature
          data {
            typeUrl
            value
          }
          receiver {
            assets
            tether
            value
          }
          sender {
            assets
            value
          }
          signatures {
            delegator
            pk
            signature
            signer
            data {
              typeUrl
              value
            }
          }
        }
        ... on UpgradeNodeTx {
          height
          override
          version
        }
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
        ... on RevokeTetherTx {
          tether
          data {
            typeUrl
            value
          }
        }
        ... on PokeTx {
          address
          date
          data {
            typeUrl
            value
          }
        }
        ... on ExchangeTetherTx {
          expiredAt
          data {
            typeUrl
            value
          }
          receiver {
            assets
            value
            deposit {
              chainId
              from
              nonce
              pk
              signature
              signatures {
                delegator
                pk
                signature
                signer
                data {
                  typeUrl
                  value
                }
              }
              itx {
                __typename
                ... on RevokeSwapTx {
                  address
                  data {
                    typeUrl
                    value
                  }
                }
                ... on RetrieveSwapTx {
                  address
                  hashkey
                  data {
                    typeUrl
                    value
                  }
                }
                ... on SetupSwapTx {
                  assets
                  hashlock
                  locktime
                  receiver
                  value
                  data {
                    typeUrl
                    value
                  }
                }
                ... on WithdrawTetherTx {
                  chainId
                  expiredAt
                  from
                  nonce
                  pk
                  signature
                  data {
                    typeUrl
                    value
                  }
                  receiver {
                    assets
                    tether
                    value
                  }
                  sender {
                    assets
                    value
                  }
                  signatures {
                    delegator
                    pk
                    signature
                    signer
                  }
                }
                ... on UpgradeNodeTx {
                  height
                  override
                  version
                }
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
                ... on RevokeTetherTx {
                  tether
                  data {
                    typeUrl
                    value
                  }
                }
                ... on PokeTx {
                  address
                  date
                  data {
                    typeUrl
                    value
                  }
                }
                ... on ExchangeTetherTx {
                  expiredAt
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
                ... on DepositTetherTx {
                  charge
                  commission
                  locktime
                  target
                  value
                  withdrawer
                }
                ... on DeployProtocolTx {
                  address
                  description
                  name
                  namespace
                  pipeline
                  proto
                  sources
                  tags
                  version
                  code {
                    binary
                    checksum
                  }
                  data {
                    typeUrl
                    value
                  }
                  typeUrls {
                    module
                    url
                  }
                }
                ... on DeclareTx {
                  issuer
                  moniker
                  data {
                    typeUrl
                    value
                  }
                }
                ... on DeclareFileTx {
                  hash
                }
                ... on CreateAssetTx {
                  address
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
                ... on ApproveTetherTx {
                  withdraw
                  data {
                    typeUrl
                    value
                  }
                }
                ... on AcquireAssetTx {
                  to
                  data {
                    typeUrl
                    value
                  }
                  specs {
                    address
                    data
                  }
                }
                ... on AccountMigrateTx {
                  address
                  pk
                  data {
                    typeUrl
                    value
                  }
                }
              }
            }
          }
          sender {
            assets
            value
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
        ... on DepositTetherTx {
          charge
          commission
          locktime
          target
          value
          withdrawer
        }
        ... on DeployProtocolTx {
          address
          description
          name
          namespace
          pipeline
          proto
          sources
          tags
          version
          code {
            binary
            checksum
          }
          data {
            typeUrl
            value
          }
          typeUrls {
            module
            url
          }
        }
        ... on DeclareTx {
          issuer
          moniker
          data {
            typeUrl
            value
          }
        }
        ... on DeclareFileTx {
          hash
        }
        ... on CreateAssetTx {
          address
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
        ... on ApproveTetherTx {
          withdraw
          data {
            typeUrl
            value
          }
        }
        ... on AcquireAssetTx {
          to
          data {
            typeUrl
            value
          }
          specs {
            address
            data
          }
        }
        ... on AccountMigrateTx {
          address
          pk
          data {
            typeUrl
            value
          }
        }
      }
    }
    delegate {
      chainId
      from
      nonce
      pk
      signature
      signatures {
        delegator
        pk
        signature
        signer
        data {
          typeUrl
          value
        }
      }
      itx {
        __typename
        ... on RevokeSwapTx {
          address
          data {
            typeUrl
            value
          }
        }
        ... on RetrieveSwapTx {
          address
          hashkey
          data {
            typeUrl
            value
          }
        }
        ... on SetupSwapTx {
          assets
          hashlock
          locktime
          receiver
          value
          data {
            typeUrl
            value
          }
        }
        ... on WithdrawTetherTx {
          chainId
          expiredAt
          from
          nonce
          pk
          signature
          data {
            typeUrl
            value
          }
          receiver {
            assets
            tether
            value
          }
          sender {
            assets
            value
          }
          signatures {
            delegator
            pk
            signature
            signer
            data {
              typeUrl
              value
            }
          }
        }
        ... on UpgradeNodeTx {
          height
          override
          version
        }
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
        ... on RevokeTetherTx {
          tether
          data {
            typeUrl
            value
          }
        }
        ... on PokeTx {
          address
          date
          data {
            typeUrl
            value
          }
        }
        ... on ExchangeTetherTx {
          expiredAt
          data {
            typeUrl
            value
          }
          receiver {
            assets
            value
            deposit {
              chainId
              from
              nonce
              pk
              signature
              signatures {
                delegator
                pk
                signature
                signer
                data {
                  typeUrl
                  value
                }
              }
              itx {
                __typename
                ... on RevokeSwapTx {
                  address
                  data {
                    typeUrl
                    value
                  }
                }
                ... on RetrieveSwapTx {
                  address
                  hashkey
                  data {
                    typeUrl
                    value
                  }
                }
                ... on SetupSwapTx {
                  assets
                  hashlock
                  locktime
                  receiver
                  value
                  data {
                    typeUrl
                    value
                  }
                }
                ... on WithdrawTetherTx {
                  chainId
                  expiredAt
                  from
                  nonce
                  pk
                  signature
                  data {
                    typeUrl
                    value
                  }
                  receiver {
                    assets
                    tether
                    value
                  }
                  sender {
                    assets
                    value
                  }
                  signatures {
                    delegator
                    pk
                    signature
                    signer
                  }
                }
                ... on UpgradeNodeTx {
                  height
                  override
                  version
                }
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
                ... on RevokeTetherTx {
                  tether
                  data {
                    typeUrl
                    value
                  }
                }
                ... on PokeTx {
                  address
                  date
                  data {
                    typeUrl
                    value
                  }
                }
                ... on ExchangeTetherTx {
                  expiredAt
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
                ... on DepositTetherTx {
                  charge
                  commission
                  locktime
                  target
                  value
                  withdrawer
                }
                ... on DeployProtocolTx {
                  address
                  description
                  name
                  namespace
                  pipeline
                  proto
                  sources
                  tags
                  version
                  code {
                    binary
                    checksum
                  }
                  data {
                    typeUrl
                    value
                  }
                  typeUrls {
                    module
                    url
                  }
                }
                ... on DeclareTx {
                  issuer
                  moniker
                  data {
                    typeUrl
                    value
                  }
                }
                ... on DeclareFileTx {
                  hash
                }
                ... on CreateAssetTx {
                  address
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
                ... on ApproveTetherTx {
                  withdraw
                  data {
                    typeUrl
                    value
                  }
                }
                ... on AcquireAssetTx {
                  to
                  data {
                    typeUrl
                    value
                  }
                  specs {
                    address
                    data
                  }
                }
                ... on AccountMigrateTx {
                  address
                  pk
                  data {
                    typeUrl
                    value
                  }
                }
              }
            }
          }
          sender {
            assets
            value
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
        ... on DepositTetherTx {
          charge
          commission
          locktime
          target
          value
          withdrawer
        }
        ... on DeployProtocolTx {
          address
          description
          name
          namespace
          pipeline
          proto
          sources
          tags
          version
          code {
            binary
            checksum
          }
          data {
            typeUrl
            value
          }
          typeUrls {
            module
            url
          }
        }
        ... on DeclareTx {
          issuer
          moniker
          data {
            typeUrl
            value
          }
        }
        ... on DeclareFileTx {
          hash
        }
        ... on CreateAssetTx {
          address
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
        ... on ApproveTetherTx {
          withdraw
          data {
            typeUrl
            value
          }
        }
        ... on AcquireAssetTx {
          to
          data {
            typeUrl
            value
          }
          specs {
            address
            data
          }
        }
        ... on AccountMigrateTx {
          address
          pk
          data {
            typeUrl
            value
          }
        }
      }
    }
    delegateState {
      address
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
            pk
            signature
            signatures {
              delegator
              pk
              signature
              signer
              data {
                typeUrl
                value
              }
            }
            itx {
              __typename
              ... on RevokeSwapTx {
                address
                data {
                  typeUrl
                  value
                }
              }
              ... on RetrieveSwapTx {
                address
                hashkey
                data {
                  typeUrl
                  value
                }
              }
              ... on SetupSwapTx {
                assets
                hashlock
                locktime
                receiver
                value
                data {
                  typeUrl
                  value
                }
              }
              ... on WithdrawTetherTx {
                chainId
                expiredAt
                from
                nonce
                pk
                signature
                data {
                  typeUrl
                  value
                }
                receiver {
                  assets
                  tether
                  value
                }
                sender {
                  assets
                  value
                }
                signatures {
                  delegator
                  pk
                  signature
                  signer
                }
              }
              ... on UpgradeNodeTx {
                height
                override
                version
              }
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
              ... on RevokeTetherTx {
                tether
                data {
                  typeUrl
                  value
                }
              }
              ... on PokeTx {
                address
                date
                data {
                  typeUrl
                  value
                }
              }
              ... on ExchangeTetherTx {
                expiredAt
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
              ... on DepositTetherTx {
                charge
                commission
                locktime
                target
                value
                withdrawer
              }
              ... on DeployProtocolTx {
                address
                description
                name
                namespace
                pipeline
                proto
                sources
                tags
                version
                code {
                  binary
                  checksum
                }
                data {
                  typeUrl
                  value
                }
                typeUrls {
                  module
                  url
                }
              }
              ... on DeclareTx {
                issuer
                moniker
                data {
                  typeUrl
                  value
                }
              }
              ... on DeclareFileTx {
                hash
              }
              ... on CreateAssetTx {
                address
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
              ... on ApproveTetherTx {
                withdraw
                data {
                  typeUrl
                  value
                }
              }
              ... on AcquireAssetTx {
                to
                data {
                  typeUrl
                  value
                }
                specs {
                  address
                  data
                }
              }
              ... on AccountMigrateTx {
                address
                pk
                data {
                  typeUrl
                  value
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
            pk
            signature
            signatures {
              delegator
              pk
              signature
              signer
              data {
                typeUrl
                value
              }
            }
            itx {
              __typename
              ... on RevokeSwapTx {
                address
                data {
                  typeUrl
                  value
                }
              }
              ... on RetrieveSwapTx {
                address
                hashkey
                data {
                  typeUrl
                  value
                }
              }
              ... on SetupSwapTx {
                assets
                hashlock
                locktime
                receiver
                value
                data {
                  typeUrl
                  value
                }
              }
              ... on WithdrawTetherTx {
                chainId
                expiredAt
                from
                nonce
                pk
                signature
                data {
                  typeUrl
                  value
                }
                receiver {
                  assets
                  tether
                  value
                }
                sender {
                  assets
                  value
                }
                signatures {
                  delegator
                  pk
                  signature
                  signer
                }
              }
              ... on UpgradeNodeTx {
                height
                override
                version
              }
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
              ... on RevokeTetherTx {
                tether
                data {
                  typeUrl
                  value
                }
              }
              ... on PokeTx {
                address
                date
                data {
                  typeUrl
                  value
                }
              }
              ... on ExchangeTetherTx {
                expiredAt
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
              ... on DepositTetherTx {
                charge
                commission
                locktime
                target
                value
                withdrawer
              }
              ... on DeployProtocolTx {
                address
                description
                name
                namespace
                pipeline
                proto
                sources
                tags
                version
                code {
                  binary
                  checksum
                }
                data {
                  typeUrl
                  value
                }
                typeUrls {
                  module
                  url
                }
              }
              ... on DeclareTx {
                issuer
                moniker
                data {
                  typeUrl
                  value
                }
              }
              ... on DeclareFileTx {
                hash
              }
              ... on CreateAssetTx {
                address
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
              ... on ApproveTetherTx {
                withdraw
                data {
                  typeUrl
                  value
                }
              }
              ... on AcquireAssetTx {
                to
                data {
                  typeUrl
                  value
                }
                specs {
                  address
                  data
                }
              }
              ... on AccountMigrateTx {
                address
                pk
                data {
                  typeUrl
                  value
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
      ops {
        key
        value {
          balance
          balanceDelta
          numTxs
          numTxsDelta
          rule
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
      pk
      signature
      signatures {
        delegator
        pk
        signature
        signer
        data {
          typeUrl
          value
        }
      }
      itx {
        __typename
        ... on RevokeSwapTx {
          address
          data {
            typeUrl
            value
          }
        }
        ... on RetrieveSwapTx {
          address
          hashkey
          data {
            typeUrl
            value
          }
        }
        ... on SetupSwapTx {
          assets
          hashlock
          locktime
          receiver
          value
          data {
            typeUrl
            value
          }
        }
        ... on WithdrawTetherTx {
          chainId
          expiredAt
          from
          nonce
          pk
          signature
          data {
            typeUrl
            value
          }
          receiver {
            assets
            tether
            value
          }
          sender {
            assets
            value
          }
          signatures {
            delegator
            pk
            signature
            signer
            data {
              typeUrl
              value
            }
          }
        }
        ... on UpgradeNodeTx {
          height
          override
          version
        }
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
        ... on RevokeTetherTx {
          tether
          data {
            typeUrl
            value
          }
        }
        ... on PokeTx {
          address
          date
          data {
            typeUrl
            value
          }
        }
        ... on ExchangeTetherTx {
          expiredAt
          data {
            typeUrl
            value
          }
          receiver {
            assets
            value
            deposit {
              chainId
              from
              nonce
              pk
              signature
              signatures {
                delegator
                pk
                signature
                signer
                data {
                  typeUrl
                  value
                }
              }
              itx {
                __typename
                ... on RevokeSwapTx {
                  address
                  data {
                    typeUrl
                    value
                  }
                }
                ... on RetrieveSwapTx {
                  address
                  hashkey
                  data {
                    typeUrl
                    value
                  }
                }
                ... on SetupSwapTx {
                  assets
                  hashlock
                  locktime
                  receiver
                  value
                  data {
                    typeUrl
                    value
                  }
                }
                ... on WithdrawTetherTx {
                  chainId
                  expiredAt
                  from
                  nonce
                  pk
                  signature
                  data {
                    typeUrl
                    value
                  }
                  receiver {
                    assets
                    tether
                    value
                  }
                  sender {
                    assets
                    value
                  }
                  signatures {
                    delegator
                    pk
                    signature
                    signer
                  }
                }
                ... on UpgradeNodeTx {
                  height
                  override
                  version
                }
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
                ... on RevokeTetherTx {
                  tether
                  data {
                    typeUrl
                    value
                  }
                }
                ... on PokeTx {
                  address
                  date
                  data {
                    typeUrl
                    value
                  }
                }
                ... on ExchangeTetherTx {
                  expiredAt
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
                ... on DepositTetherTx {
                  charge
                  commission
                  locktime
                  target
                  value
                  withdrawer
                }
                ... on DeployProtocolTx {
                  address
                  description
                  name
                  namespace
                  pipeline
                  proto
                  sources
                  tags
                  version
                  code {
                    binary
                    checksum
                  }
                  data {
                    typeUrl
                    value
                  }
                  typeUrls {
                    module
                    url
                  }
                }
                ... on DeclareTx {
                  issuer
                  moniker
                  data {
                    typeUrl
                    value
                  }
                }
                ... on DeclareFileTx {
                  hash
                }
                ... on CreateAssetTx {
                  address
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
                ... on ApproveTetherTx {
                  withdraw
                  data {
                    typeUrl
                    value
                  }
                }
                ... on AcquireAssetTx {
                  to
                  data {
                    typeUrl
                    value
                  }
                  specs {
                    address
                    data
                  }
                }
                ... on AccountMigrateTx {
                  address
                  pk
                  data {
                    typeUrl
                    value
                  }
                }
              }
            }
          }
          sender {
            assets
            value
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
        ... on DepositTetherTx {
          charge
          commission
          locktime
          target
          value
          withdrawer
        }
        ... on DeployProtocolTx {
          address
          description
          name
          namespace
          pipeline
          proto
          sources
          tags
          version
          code {
            binary
            checksum
          }
          data {
            typeUrl
            value
          }
          typeUrls {
            module
            url
          }
        }
        ... on DeclareTx {
          issuer
          moniker
          data {
            typeUrl
            value
          }
        }
        ... on DeclareFileTx {
          hash
        }
        ... on CreateAssetTx {
          address
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
        ... on ApproveTetherTx {
          withdraw
          data {
            typeUrl
            value
          }
        }
        ... on AcquireAssetTx {
          to
          data {
            typeUrl
            value
          }
          specs {
            address
            data
          }
        }
        ... on AccountMigrateTx {
          address
          pk
          data {
            typeUrl
            value
          }
        }
      }
    }
    forgeState {
      address
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
      gas {
        key
        value
      }
      pokeConfig {
        address
        amount
        balance
        dailyLimit
      }
      protocols {
        address
        name
      }
      stakeConfig {
        timeoutGeneral
        timeoutStakeForNode
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
                pk
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
                pk
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
      txConfig {
        maxAssetSize
        maxListSize
        maxMultisig
        minimumStake
        declare {
          hierarchy
          restricted
        }
        delegate {
          deltaInterval
          typeUrls
        }
      }
      upgradeInfo {
        height
        version
      }
    }
    protocolState {
      address
      group
      migratedFrom
      migratedTo
      rootHash
      status
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
            pk
            signature
            signatures {
              delegator
              pk
              signature
              signer
              data {
                typeUrl
                value
              }
            }
            itx {
              __typename
              ... on RevokeSwapTx {
                address
                data {
                  typeUrl
                  value
                }
              }
              ... on RetrieveSwapTx {
                address
                hashkey
                data {
                  typeUrl
                  value
                }
              }
              ... on SetupSwapTx {
                assets
                hashlock
                locktime
                receiver
                value
                data {
                  typeUrl
                  value
                }
              }
              ... on WithdrawTetherTx {
                chainId
                expiredAt
                from
                nonce
                pk
                signature
                data {
                  typeUrl
                  value
                }
                receiver {
                  assets
                  tether
                  value
                }
                sender {
                  assets
                  value
                }
                signatures {
                  delegator
                  pk
                  signature
                  signer
                }
              }
              ... on UpgradeNodeTx {
                height
                override
                version
              }
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
              ... on RevokeTetherTx {
                tether
                data {
                  typeUrl
                  value
                }
              }
              ... on PokeTx {
                address
                date
                data {
                  typeUrl
                  value
                }
              }
              ... on ExchangeTetherTx {
                expiredAt
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
              ... on DepositTetherTx {
                charge
                commission
                locktime
                target
                value
                withdrawer
              }
              ... on DeployProtocolTx {
                address
                description
                name
                namespace
                pipeline
                proto
                sources
                tags
                version
                code {
                  binary
                  checksum
                }
                data {
                  typeUrl
                  value
                }
                typeUrls {
                  module
                  url
                }
              }
              ... on DeclareTx {
                issuer
                moniker
                data {
                  typeUrl
                  value
                }
              }
              ... on DeclareFileTx {
                hash
              }
              ... on CreateAssetTx {
                address
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
              ... on ApproveTetherTx {
                withdraw
                data {
                  typeUrl
                  value
                }
              }
              ... on AcquireAssetTx {
                to
                data {
                  typeUrl
                  value
                }
                specs {
                  address
                  data
                }
              }
              ... on AccountMigrateTx {
                address
                pk
                data {
                  typeUrl
                  value
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
            pk
            signature
            signatures {
              delegator
              pk
              signature
              signer
              data {
                typeUrl
                value
              }
            }
            itx {
              __typename
              ... on RevokeSwapTx {
                address
                data {
                  typeUrl
                  value
                }
              }
              ... on RetrieveSwapTx {
                address
                hashkey
                data {
                  typeUrl
                  value
                }
              }
              ... on SetupSwapTx {
                assets
                hashlock
                locktime
                receiver
                value
                data {
                  typeUrl
                  value
                }
              }
              ... on WithdrawTetherTx {
                chainId
                expiredAt
                from
                nonce
                pk
                signature
                data {
                  typeUrl
                  value
                }
                receiver {
                  assets
                  tether
                  value
                }
                sender {
                  assets
                  value
                }
                signatures {
                  delegator
                  pk
                  signature
                  signer
                }
              }
              ... on UpgradeNodeTx {
                height
                override
                version
              }
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
              ... on RevokeTetherTx {
                tether
                data {
                  typeUrl
                  value
                }
              }
              ... on PokeTx {
                address
                date
                data {
                  typeUrl
                  value
                }
              }
              ... on ExchangeTetherTx {
                expiredAt
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
              ... on DepositTetherTx {
                charge
                commission
                locktime
                target
                value
                withdrawer
              }
              ... on DeployProtocolTx {
                address
                description
                name
                namespace
                pipeline
                proto
                sources
                tags
                version
                code {
                  binary
                  checksum
                }
                data {
                  typeUrl
                  value
                }
                typeUrls {
                  module
                  url
                }
              }
              ... on DeclareTx {
                issuer
                moniker
                data {
                  typeUrl
                  value
                }
              }
              ... on DeclareFileTx {
                hash
              }
              ... on CreateAssetTx {
                address
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
              ... on ApproveTetherTx {
                withdraw
                data {
                  typeUrl
                  value
                }
              }
              ... on AcquireAssetTx {
                to
                data {
                  typeUrl
                  value
                }
                specs {
                  address
                  data
                }
              }
              ... on AccountMigrateTx {
                address
                pk
                data {
                  typeUrl
                  value
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
      itx {
        address
        description
        name
        namespace
        pipeline
        proto
        sources
        tags
        version
        code {
          binary
          checksum
        }
        data {
          typeUrl
          value
        }
        typeUrls {
          module
          url
        }
      }
    }
    revoke {
      chainId
      from
      nonce
      pk
      signature
      signatures {
        delegator
        pk
        signature
        signer
        data {
          typeUrl
          value
        }
      }
      itx {
        __typename
        ... on RevokeSwapTx {
          address
          data {
            typeUrl
            value
          }
        }
        ... on RetrieveSwapTx {
          address
          hashkey
          data {
            typeUrl
            value
          }
        }
        ... on SetupSwapTx {
          assets
          hashlock
          locktime
          receiver
          value
          data {
            typeUrl
            value
          }
        }
        ... on WithdrawTetherTx {
          chainId
          expiredAt
          from
          nonce
          pk
          signature
          data {
            typeUrl
            value
          }
          receiver {
            assets
            tether
            value
          }
          sender {
            assets
            value
          }
          signatures {
            delegator
            pk
            signature
            signer
            data {
              typeUrl
              value
            }
          }
        }
        ... on UpgradeNodeTx {
          height
          override
          version
        }
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
        ... on RevokeTetherTx {
          tether
          data {
            typeUrl
            value
          }
        }
        ... on PokeTx {
          address
          date
          data {
            typeUrl
            value
          }
        }
        ... on ExchangeTetherTx {
          expiredAt
          data {
            typeUrl
            value
          }
          receiver {
            assets
            value
            deposit {
              chainId
              from
              nonce
              pk
              signature
              signatures {
                delegator
                pk
                signature
                signer
                data {
                  typeUrl
                  value
                }
              }
              itx {
                __typename
                ... on RevokeSwapTx {
                  address
                  data {
                    typeUrl
                    value
                  }
                }
                ... on RetrieveSwapTx {
                  address
                  hashkey
                  data {
                    typeUrl
                    value
                  }
                }
                ... on SetupSwapTx {
                  assets
                  hashlock
                  locktime
                  receiver
                  value
                  data {
                    typeUrl
                    value
                  }
                }
                ... on WithdrawTetherTx {
                  chainId
                  expiredAt
                  from
                  nonce
                  pk
                  signature
                  data {
                    typeUrl
                    value
                  }
                  receiver {
                    assets
                    tether
                    value
                  }
                  sender {
                    assets
                    value
                  }
                  signatures {
                    delegator
                    pk
                    signature
                    signer
                  }
                }
                ... on UpgradeNodeTx {
                  height
                  override
                  version
                }
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
                ... on RevokeTetherTx {
                  tether
                  data {
                    typeUrl
                    value
                  }
                }
                ... on PokeTx {
                  address
                  date
                  data {
                    typeUrl
                    value
                  }
                }
                ... on ExchangeTetherTx {
                  expiredAt
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
                ... on DepositTetherTx {
                  charge
                  commission
                  locktime
                  target
                  value
                  withdrawer
                }
                ... on DeployProtocolTx {
                  address
                  description
                  name
                  namespace
                  pipeline
                  proto
                  sources
                  tags
                  version
                  code {
                    binary
                    checksum
                  }
                  data {
                    typeUrl
                    value
                  }
                  typeUrls {
                    module
                    url
                  }
                }
                ... on DeclareTx {
                  issuer
                  moniker
                  data {
                    typeUrl
                    value
                  }
                }
                ... on DeclareFileTx {
                  hash
                }
                ... on CreateAssetTx {
                  address
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
                ... on ApproveTetherTx {
                  withdraw
                  data {
                    typeUrl
                    value
                  }
                }
                ... on AcquireAssetTx {
                  to
                  data {
                    typeUrl
                    value
                  }
                  specs {
                    address
                    data
                  }
                }
                ... on AccountMigrateTx {
                  address
                  pk
                  data {
                    typeUrl
                    value
                  }
                }
              }
            }
          }
          sender {
            assets
            value
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
        ... on DepositTetherTx {
          charge
          commission
          locktime
          target
          value
          withdrawer
        }
        ... on DeployProtocolTx {
          address
          description
          name
          namespace
          pipeline
          proto
          sources
          tags
          version
          code {
            binary
            checksum
          }
          data {
            typeUrl
            value
          }
          typeUrls {
            module
            url
          }
        }
        ... on DeclareTx {
          issuer
          moniker
          data {
            typeUrl
            value
          }
        }
        ... on DeclareFileTx {
          hash
        }
        ... on CreateAssetTx {
          address
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
        ... on ApproveTetherTx {
          withdraw
          data {
            typeUrl
            value
          }
        }
        ... on AcquireAssetTx {
          to
          data {
            typeUrl
            value
          }
          specs {
            address
            data
          }
        }
        ... on AccountMigrateTx {
          address
          pk
          data {
            typeUrl
            value
          }
        }
      }
    }
    stake {
      chainId
      from
      nonce
      pk
      signature
      signatures {
        delegator
        pk
        signature
        signer
        data {
          typeUrl
          value
        }
      }
      itx {
        __typename
        ... on RevokeSwapTx {
          address
          data {
            typeUrl
            value
          }
        }
        ... on RetrieveSwapTx {
          address
          hashkey
          data {
            typeUrl
            value
          }
        }
        ... on SetupSwapTx {
          assets
          hashlock
          locktime
          receiver
          value
          data {
            typeUrl
            value
          }
        }
        ... on WithdrawTetherTx {
          chainId
          expiredAt
          from
          nonce
          pk
          signature
          data {
            typeUrl
            value
          }
          receiver {
            assets
            tether
            value
          }
          sender {
            assets
            value
          }
          signatures {
            delegator
            pk
            signature
            signer
            data {
              typeUrl
              value
            }
          }
        }
        ... on UpgradeNodeTx {
          height
          override
          version
        }
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
        ... on RevokeTetherTx {
          tether
          data {
            typeUrl
            value
          }
        }
        ... on PokeTx {
          address
          date
          data {
            typeUrl
            value
          }
        }
        ... on ExchangeTetherTx {
          expiredAt
          data {
            typeUrl
            value
          }
          receiver {
            assets
            value
            deposit {
              chainId
              from
              nonce
              pk
              signature
              signatures {
                delegator
                pk
                signature
                signer
                data {
                  typeUrl
                  value
                }
              }
              itx {
                __typename
                ... on RevokeSwapTx {
                  address
                  data {
                    typeUrl
                    value
                  }
                }
                ... on RetrieveSwapTx {
                  address
                  hashkey
                  data {
                    typeUrl
                    value
                  }
                }
                ... on SetupSwapTx {
                  assets
                  hashlock
                  locktime
                  receiver
                  value
                  data {
                    typeUrl
                    value
                  }
                }
                ... on WithdrawTetherTx {
                  chainId
                  expiredAt
                  from
                  nonce
                  pk
                  signature
                  data {
                    typeUrl
                    value
                  }
                  receiver {
                    assets
                    tether
                    value
                  }
                  sender {
                    assets
                    value
                  }
                  signatures {
                    delegator
                    pk
                    signature
                    signer
                  }
                }
                ... on UpgradeNodeTx {
                  height
                  override
                  version
                }
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
                ... on RevokeTetherTx {
                  tether
                  data {
                    typeUrl
                    value
                  }
                }
                ... on PokeTx {
                  address
                  date
                  data {
                    typeUrl
                    value
                  }
                }
                ... on ExchangeTetherTx {
                  expiredAt
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
                ... on DepositTetherTx {
                  charge
                  commission
                  locktime
                  target
                  value
                  withdrawer
                }
                ... on DeployProtocolTx {
                  address
                  description
                  name
                  namespace
                  pipeline
                  proto
                  sources
                  tags
                  version
                  code {
                    binary
                    checksum
                  }
                  data {
                    typeUrl
                    value
                  }
                  typeUrls {
                    module
                    url
                  }
                }
                ... on DeclareTx {
                  issuer
                  moniker
                  data {
                    typeUrl
                    value
                  }
                }
                ... on DeclareFileTx {
                  hash
                }
                ... on CreateAssetTx {
                  address
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
                ... on ApproveTetherTx {
                  withdraw
                  data {
                    typeUrl
                    value
                  }
                }
                ... on AcquireAssetTx {
                  to
                  data {
                    typeUrl
                    value
                  }
                  specs {
                    address
                    data
                  }
                }
                ... on AccountMigrateTx {
                  address
                  pk
                  data {
                    typeUrl
                    value
                  }
                }
              }
            }
          }
          sender {
            assets
            value
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
        ... on DepositTetherTx {
          charge
          commission
          locktime
          target
          value
          withdrawer
        }
        ... on DeployProtocolTx {
          address
          description
          name
          namespace
          pipeline
          proto
          sources
          tags
          version
          code {
            binary
            checksum
          }
          data {
            typeUrl
            value
          }
          typeUrls {
            module
            url
          }
        }
        ... on DeclareTx {
          issuer
          moniker
          data {
            typeUrl
            value
          }
        }
        ... on DeclareFileTx {
          hash
        }
        ... on CreateAssetTx {
          address
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
        ... on ApproveTetherTx {
          withdraw
          data {
            typeUrl
            value
          }
        }
        ... on AcquireAssetTx {
          to
          data {
            typeUrl
            value
          }
          specs {
            address
            data
          }
        }
        ... on AccountMigrateTx {
          address
          pk
          data {
            typeUrl
            value
          }
        }
      }
    }
    stakeState {
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
            pk
            signature
            signatures {
              delegator
              pk
              signature
              signer
              data {
                typeUrl
                value
              }
            }
            itx {
              __typename
              ... on RevokeSwapTx {
                address
                data {
                  typeUrl
                  value
                }
              }
              ... on RetrieveSwapTx {
                address
                hashkey
                data {
                  typeUrl
                  value
                }
              }
              ... on SetupSwapTx {
                assets
                hashlock
                locktime
                receiver
                value
                data {
                  typeUrl
                  value
                }
              }
              ... on WithdrawTetherTx {
                chainId
                expiredAt
                from
                nonce
                pk
                signature
                data {
                  typeUrl
                  value
                }
                receiver {
                  assets
                  tether
                  value
                }
                sender {
                  assets
                  value
                }
                signatures {
                  delegator
                  pk
                  signature
                  signer
                }
              }
              ... on UpgradeNodeTx {
                height
                override
                version
              }
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
              ... on RevokeTetherTx {
                tether
                data {
                  typeUrl
                  value
                }
              }
              ... on PokeTx {
                address
                date
                data {
                  typeUrl
                  value
                }
              }
              ... on ExchangeTetherTx {
                expiredAt
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
              ... on DepositTetherTx {
                charge
                commission
                locktime
                target
                value
                withdrawer
              }
              ... on DeployProtocolTx {
                address
                description
                name
                namespace
                pipeline
                proto
                sources
                tags
                version
                code {
                  binary
                  checksum
                }
                data {
                  typeUrl
                  value
                }
                typeUrls {
                  module
                  url
                }
              }
              ... on DeclareTx {
                issuer
                moniker
                data {
                  typeUrl
                  value
                }
              }
              ... on DeclareFileTx {
                hash
              }
              ... on CreateAssetTx {
                address
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
              ... on ApproveTetherTx {
                withdraw
                data {
                  typeUrl
                  value
                }
              }
              ... on AcquireAssetTx {
                to
                data {
                  typeUrl
                  value
                }
                specs {
                  address
                  data
                }
              }
              ... on AccountMigrateTx {
                address
                pk
                data {
                  typeUrl
                  value
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
            pk
            signature
            signatures {
              delegator
              pk
              signature
              signer
              data {
                typeUrl
                value
              }
            }
            itx {
              __typename
              ... on RevokeSwapTx {
                address
                data {
                  typeUrl
                  value
                }
              }
              ... on RetrieveSwapTx {
                address
                hashkey
                data {
                  typeUrl
                  value
                }
              }
              ... on SetupSwapTx {
                assets
                hashlock
                locktime
                receiver
                value
                data {
                  typeUrl
                  value
                }
              }
              ... on WithdrawTetherTx {
                chainId
                expiredAt
                from
                nonce
                pk
                signature
                data {
                  typeUrl
                  value
                }
                receiver {
                  assets
                  tether
                  value
                }
                sender {
                  assets
                  value
                }
                signatures {
                  delegator
                  pk
                  signature
                  signer
                }
              }
              ... on UpgradeNodeTx {
                height
                override
                version
              }
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
              ... on RevokeTetherTx {
                tether
                data {
                  typeUrl
                  value
                }
              }
              ... on PokeTx {
                address
                date
                data {
                  typeUrl
                  value
                }
              }
              ... on ExchangeTetherTx {
                expiredAt
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
              ... on DepositTetherTx {
                charge
                commission
                locktime
                target
                value
                withdrawer
              }
              ... on DeployProtocolTx {
                address
                description
                name
                namespace
                pipeline
                proto
                sources
                tags
                version
                code {
                  binary
                  checksum
                }
                data {
                  typeUrl
                  value
                }
                typeUrls {
                  module
                  url
                }
              }
              ... on DeclareTx {
                issuer
                moniker
                data {
                  typeUrl
                  value
                }
              }
              ... on DeclareFileTx {
                hash
              }
              ... on CreateAssetTx {
                address
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
              ... on ApproveTetherTx {
                withdraw
                data {
                  typeUrl
                  value
                }
              }
              ... on AcquireAssetTx {
                to
                data {
                  typeUrl
                  value
                }
                specs {
                  address
                  data
                }
              }
              ... on AccountMigrateTx {
                address
                pk
                data {
                  typeUrl
                  value
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
    sysUpgrade {
      chainId
      from
      nonce
      pk
      signature
      signatures {
        delegator
        pk
        signature
        signer
        data {
          typeUrl
          value
        }
      }
      itx {
        __typename
        ... on RevokeSwapTx {
          address
          data {
            typeUrl
            value
          }
        }
        ... on RetrieveSwapTx {
          address
          hashkey
          data {
            typeUrl
            value
          }
        }
        ... on SetupSwapTx {
          assets
          hashlock
          locktime
          receiver
          value
          data {
            typeUrl
            value
          }
        }
        ... on WithdrawTetherTx {
          chainId
          expiredAt
          from
          nonce
          pk
          signature
          data {
            typeUrl
            value
          }
          receiver {
            assets
            tether
            value
          }
          sender {
            assets
            value
          }
          signatures {
            delegator
            pk
            signature
            signer
            data {
              typeUrl
              value
            }
          }
        }
        ... on UpgradeNodeTx {
          height
          override
          version
        }
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
        ... on RevokeTetherTx {
          tether
          data {
            typeUrl
            value
          }
        }
        ... on PokeTx {
          address
          date
          data {
            typeUrl
            value
          }
        }
        ... on ExchangeTetherTx {
          expiredAt
          data {
            typeUrl
            value
          }
          receiver {
            assets
            value
            deposit {
              chainId
              from
              nonce
              pk
              signature
              signatures {
                delegator
                pk
                signature
                signer
                data {
                  typeUrl
                  value
                }
              }
              itx {
                __typename
                ... on RevokeSwapTx {
                  address
                  data {
                    typeUrl
                    value
                  }
                }
                ... on RetrieveSwapTx {
                  address
                  hashkey
                  data {
                    typeUrl
                    value
                  }
                }
                ... on SetupSwapTx {
                  assets
                  hashlock
                  locktime
                  receiver
                  value
                  data {
                    typeUrl
                    value
                  }
                }
                ... on WithdrawTetherTx {
                  chainId
                  expiredAt
                  from
                  nonce
                  pk
                  signature
                  data {
                    typeUrl
                    value
                  }
                  receiver {
                    assets
                    tether
                    value
                  }
                  sender {
                    assets
                    value
                  }
                  signatures {
                    delegator
                    pk
                    signature
                    signer
                  }
                }
                ... on UpgradeNodeTx {
                  height
                  override
                  version
                }
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
                ... on RevokeTetherTx {
                  tether
                  data {
                    typeUrl
                    value
                  }
                }
                ... on PokeTx {
                  address
                  date
                  data {
                    typeUrl
                    value
                  }
                }
                ... on ExchangeTetherTx {
                  expiredAt
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
                ... on DepositTetherTx {
                  charge
                  commission
                  locktime
                  target
                  value
                  withdrawer
                }
                ... on DeployProtocolTx {
                  address
                  description
                  name
                  namespace
                  pipeline
                  proto
                  sources
                  tags
                  version
                  code {
                    binary
                    checksum
                  }
                  data {
                    typeUrl
                    value
                  }
                  typeUrls {
                    module
                    url
                  }
                }
                ... on DeclareTx {
                  issuer
                  moniker
                  data {
                    typeUrl
                    value
                  }
                }
                ... on DeclareFileTx {
                  hash
                }
                ... on CreateAssetTx {
                  address
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
                ... on ApproveTetherTx {
                  withdraw
                  data {
                    typeUrl
                    value
                  }
                }
                ... on AcquireAssetTx {
                  to
                  data {
                    typeUrl
                    value
                  }
                  specs {
                    address
                    data
                  }
                }
                ... on AccountMigrateTx {
                  address
                  pk
                  data {
                    typeUrl
                    value
                  }
                }
              }
            }
          }
          sender {
            assets
            value
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
        ... on DepositTetherTx {
          charge
          commission
          locktime
          target
          value
          withdrawer
        }
        ... on DeployProtocolTx {
          address
          description
          name
          namespace
          pipeline
          proto
          sources
          tags
          version
          code {
            binary
            checksum
          }
          data {
            typeUrl
            value
          }
          typeUrls {
            module
            url
          }
        }
        ... on DeclareTx {
          issuer
          moniker
          data {
            typeUrl
            value
          }
        }
        ... on DeclareFileTx {
          hash
        }
        ... on CreateAssetTx {
          address
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
        ... on ApproveTetherTx {
          withdraw
          data {
            typeUrl
            value
          }
        }
        ... on AcquireAssetTx {
          to
          data {
            typeUrl
            value
          }
          specs {
            address
            data
          }
        }
        ... on AccountMigrateTx {
          address
          pk
          data {
            typeUrl
            value
          }
        }
      }
    }
    transfer {
      chainId
      from
      nonce
      pk
      signature
      signatures {
        delegator
        pk
        signature
        signer
        data {
          typeUrl
          value
        }
      }
      itx {
        __typename
        ... on RevokeSwapTx {
          address
          data {
            typeUrl
            value
          }
        }
        ... on RetrieveSwapTx {
          address
          hashkey
          data {
            typeUrl
            value
          }
        }
        ... on SetupSwapTx {
          assets
          hashlock
          locktime
          receiver
          value
          data {
            typeUrl
            value
          }
        }
        ... on WithdrawTetherTx {
          chainId
          expiredAt
          from
          nonce
          pk
          signature
          data {
            typeUrl
            value
          }
          receiver {
            assets
            tether
            value
          }
          sender {
            assets
            value
          }
          signatures {
            delegator
            pk
            signature
            signer
            data {
              typeUrl
              value
            }
          }
        }
        ... on UpgradeNodeTx {
          height
          override
          version
        }
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
        ... on RevokeTetherTx {
          tether
          data {
            typeUrl
            value
          }
        }
        ... on PokeTx {
          address
          date
          data {
            typeUrl
            value
          }
        }
        ... on ExchangeTetherTx {
          expiredAt
          data {
            typeUrl
            value
          }
          receiver {
            assets
            value
            deposit {
              chainId
              from
              nonce
              pk
              signature
              signatures {
                delegator
                pk
                signature
                signer
                data {
                  typeUrl
                  value
                }
              }
              itx {
                __typename
                ... on RevokeSwapTx {
                  address
                  data {
                    typeUrl
                    value
                  }
                }
                ... on RetrieveSwapTx {
                  address
                  hashkey
                  data {
                    typeUrl
                    value
                  }
                }
                ... on SetupSwapTx {
                  assets
                  hashlock
                  locktime
                  receiver
                  value
                  data {
                    typeUrl
                    value
                  }
                }
                ... on WithdrawTetherTx {
                  chainId
                  expiredAt
                  from
                  nonce
                  pk
                  signature
                  data {
                    typeUrl
                    value
                  }
                  receiver {
                    assets
                    tether
                    value
                  }
                  sender {
                    assets
                    value
                  }
                  signatures {
                    delegator
                    pk
                    signature
                    signer
                  }
                }
                ... on UpgradeNodeTx {
                  height
                  override
                  version
                }
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
                ... on RevokeTetherTx {
                  tether
                  data {
                    typeUrl
                    value
                  }
                }
                ... on PokeTx {
                  address
                  date
                  data {
                    typeUrl
                    value
                  }
                }
                ... on ExchangeTetherTx {
                  expiredAt
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
                ... on DepositTetherTx {
                  charge
                  commission
                  locktime
                  target
                  value
                  withdrawer
                }
                ... on DeployProtocolTx {
                  address
                  description
                  name
                  namespace
                  pipeline
                  proto
                  sources
                  tags
                  version
                  code {
                    binary
                    checksum
                  }
                  data {
                    typeUrl
                    value
                  }
                  typeUrls {
                    module
                    url
                  }
                }
                ... on DeclareTx {
                  issuer
                  moniker
                  data {
                    typeUrl
                    value
                  }
                }
                ... on DeclareFileTx {
                  hash
                }
                ... on CreateAssetTx {
                  address
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
                ... on ApproveTetherTx {
                  withdraw
                  data {
                    typeUrl
                    value
                  }
                }
                ... on AcquireAssetTx {
                  to
                  data {
                    typeUrl
                    value
                  }
                  specs {
                    address
                    data
                  }
                }
                ... on AccountMigrateTx {
                  address
                  pk
                  data {
                    typeUrl
                    value
                  }
                }
              }
            }
          }
          sender {
            assets
            value
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
        ... on DepositTetherTx {
          charge
          commission
          locktime
          target
          value
          withdrawer
        }
        ... on DeployProtocolTx {
          address
          description
          name
          namespace
          pipeline
          proto
          sources
          tags
          version
          code {
            binary
            checksum
          }
          data {
            typeUrl
            value
          }
          typeUrls {
            module
            url
          }
        }
        ... on DeclareTx {
          issuer
          moniker
          data {
            typeUrl
            value
          }
        }
        ... on DeclareFileTx {
          hash
        }
        ... on CreateAssetTx {
          address
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
        ... on ApproveTetherTx {
          withdraw
          data {
            typeUrl
            value
          }
        }
        ... on AcquireAssetTx {
          to
          data {
            typeUrl
            value
          }
          specs {
            address
            data
          }
        }
        ... on AccountMigrateTx {
          address
          pk
          data {
            typeUrl
            value
          }
        }
      }
    }
    updateAsset {
      chainId
      from
      nonce
      pk
      signature
      signatures {
        delegator
        pk
        signature
        signer
        data {
          typeUrl
          value
        }
      }
      itx {
        __typename
        ... on RevokeSwapTx {
          address
          data {
            typeUrl
            value
          }
        }
        ... on RetrieveSwapTx {
          address
          hashkey
          data {
            typeUrl
            value
          }
        }
        ... on SetupSwapTx {
          assets
          hashlock
          locktime
          receiver
          value
          data {
            typeUrl
            value
          }
        }
        ... on WithdrawTetherTx {
          chainId
          expiredAt
          from
          nonce
          pk
          signature
          data {
            typeUrl
            value
          }
          receiver {
            assets
            tether
            value
          }
          sender {
            assets
            value
          }
          signatures {
            delegator
            pk
            signature
            signer
            data {
              typeUrl
              value
            }
          }
        }
        ... on UpgradeNodeTx {
          height
          override
          version
        }
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
        ... on RevokeTetherTx {
          tether
          data {
            typeUrl
            value
          }
        }
        ... on PokeTx {
          address
          date
          data {
            typeUrl
            value
          }
        }
        ... on ExchangeTetherTx {
          expiredAt
          data {
            typeUrl
            value
          }
          receiver {
            assets
            value
            deposit {
              chainId
              from
              nonce
              pk
              signature
              signatures {
                delegator
                pk
                signature
                signer
                data {
                  typeUrl
                  value
                }
              }
              itx {
                __typename
                ... on RevokeSwapTx {
                  address
                  data {
                    typeUrl
                    value
                  }
                }
                ... on RetrieveSwapTx {
                  address
                  hashkey
                  data {
                    typeUrl
                    value
                  }
                }
                ... on SetupSwapTx {
                  assets
                  hashlock
                  locktime
                  receiver
                  value
                  data {
                    typeUrl
                    value
                  }
                }
                ... on WithdrawTetherTx {
                  chainId
                  expiredAt
                  from
                  nonce
                  pk
                  signature
                  data {
                    typeUrl
                    value
                  }
                  receiver {
                    assets
                    tether
                    value
                  }
                  sender {
                    assets
                    value
                  }
                  signatures {
                    delegator
                    pk
                    signature
                    signer
                  }
                }
                ... on UpgradeNodeTx {
                  height
                  override
                  version
                }
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
                ... on RevokeTetherTx {
                  tether
                  data {
                    typeUrl
                    value
                  }
                }
                ... on PokeTx {
                  address
                  date
                  data {
                    typeUrl
                    value
                  }
                }
                ... on ExchangeTetherTx {
                  expiredAt
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
                ... on DepositTetherTx {
                  charge
                  commission
                  locktime
                  target
                  value
                  withdrawer
                }
                ... on DeployProtocolTx {
                  address
                  description
                  name
                  namespace
                  pipeline
                  proto
                  sources
                  tags
                  version
                  code {
                    binary
                    checksum
                  }
                  data {
                    typeUrl
                    value
                  }
                  typeUrls {
                    module
                    url
                  }
                }
                ... on DeclareTx {
                  issuer
                  moniker
                  data {
                    typeUrl
                    value
                  }
                }
                ... on DeclareFileTx {
                  hash
                }
                ... on CreateAssetTx {
                  address
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
                ... on ApproveTetherTx {
                  withdraw
                  data {
                    typeUrl
                    value
                  }
                }
                ... on AcquireAssetTx {
                  to
                  data {
                    typeUrl
                    value
                  }
                  specs {
                    address
                    data
                  }
                }
                ... on AccountMigrateTx {
                  address
                  pk
                  data {
                    typeUrl
                    value
                  }
                }
              }
            }
          }
          sender {
            assets
            value
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
        ... on DepositTetherTx {
          charge
          commission
          locktime
          target
          value
          withdrawer
        }
        ... on DeployProtocolTx {
          address
          description
          name
          namespace
          pipeline
          proto
          sources
          tags
          version
          code {
            binary
            checksum
          }
          data {
            typeUrl
            value
          }
          typeUrls {
            module
            url
          }
        }
        ... on DeclareTx {
          issuer
          moniker
          data {
            typeUrl
            value
          }
        }
        ... on DeclareFileTx {
          hash
        }
        ... on CreateAssetTx {
          address
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
        ... on ApproveTetherTx {
          withdraw
          data {
            typeUrl
            value
          }
        }
        ... on AcquireAssetTx {
          to
          data {
            typeUrl
            value
          }
          specs {
            address
            data
          }
        }
        ... on AccountMigrateTx {
          address
          pk
          data {
            typeUrl
            value
          }
        }
      }
    }
  }
}
```


## Mutations

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

### startSimulator

#### Arguments

No arguments

#### Result Format

```graphql
mutation {
  startSimulator {
    code
  }
}
```

### stopSimulator

#### Arguments

No arguments

#### Result Format

```graphql
mutation {
  stopSimulator {
    code
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
