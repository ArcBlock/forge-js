# Forge GraphQL API List


> Updated on 2019-04-28T00:36:50.700Z

## Table of Contents


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
                data {
                  typeUrl
                  value
                }
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
              ... on PokeTx {
                address
                date
                data {
                  typeUrl
                  value
                }
              }
              ... on AccountMigrateTx {
                address
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
                data {
                  typeUrl
                  value
                }
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
              ... on PokeTx {
                address
                date
                data {
                  typeUrl
                  value
                }
              }
              ... on AccountMigrateTx {
                address
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
                data {
                  typeUrl
                  value
                }
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
              ... on PokeTx {
                address
                date
                data {
                  typeUrl
                  value
                }
              }
              ... on AccountMigrateTx {
                address
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
                data {
                  typeUrl
                  value
                }
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
              ... on PokeTx {
                address
                date
                data {
                  typeUrl
                  value
                }
              }
              ... on AccountMigrateTx {
                address
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
              data {
                typeUrl
                value
              }
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
            ... on PokeTx {
              address
              date
              data {
                typeUrl
                value
              }
            }
            ... on AccountMigrateTx {
              address
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
              data {
                typeUrl
                value
              }
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
            ... on PokeTx {
              address
              date
              data {
                typeUrl
                value
              }
            }
            ... on AccountMigrateTx {
              address
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
      description
      migratedFrom
      migratedTo
      name
      rootHash
      status
      txHash
      version
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
                data {
                  typeUrl
                  value
                }
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
              ... on PokeTx {
                address
                date
                data {
                  typeUrl
                  value
                }
              }
              ... on AccountMigrateTx {
                address
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
                data {
                  typeUrl
                  value
                }
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
              ... on PokeTx {
                address
                date
                data {
                  typeUrl
                  value
                }
              }
              ... on AccountMigrateTx {
                address
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
                data {
                  typeUrl
                  value
                }
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
              ... on PokeTx {
                address
                date
                data {
                  typeUrl
                  value
                }
              }
              ... on AccountMigrateTx {
                address
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
                data {
                  typeUrl
                  value
                }
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
              ... on PokeTx {
                address
                date
                data {
                  typeUrl
                  value
                }
              }
              ... on AccountMigrateTx {
                address
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
            data {
              typeUrl
              value
            }
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
          ... on PokeTx {
            address
            date
            data {
              typeUrl
              value
            }
          }
          ... on AccountMigrateTx {
            address
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
            data {
              typeUrl
              value
            }
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
          ... on PokeTx {
            address
            date
            data {
              typeUrl
              value
            }
          }
          ... on AccountMigrateTx {
            address
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
            data {
              typeUrl
              value
            }
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
          ... on PokeTx {
            address
            date
            data {
              typeUrl
              value
            }
          }
          ... on AccountMigrateTx {
            address
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
            data {
              typeUrl
              value
            }
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
          ... on PokeTx {
            address
            date
            data {
              typeUrl
              value
            }
          }
          ... on AccountMigrateTx {
            address
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
          data {
            typeUrl
            value
          }
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
        ... on PokeTx {
          address
          date
          data {
            typeUrl
            value
          }
        }
        ... on AccountMigrateTx {
          address
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
                data {
                  typeUrl
                  value
                }
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
              ... on PokeTx {
                address
                date
                data {
                  typeUrl
                  value
                }
              }
              ... on AccountMigrateTx {
                address
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
                data {
                  typeUrl
                  value
                }
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
              ... on PokeTx {
                address
                date
                data {
                  typeUrl
                  value
                }
              }
              ... on AccountMigrateTx {
                address
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
      type {
        address
        hash
        pk
        role
      }
    }
    assetState {
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
            pk
            signature
            signatures {
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
                data {
                  typeUrl
                  value
                }
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
              ... on PokeTx {
                address
                date
                data {
                  typeUrl
                  value
                }
              }
              ... on AccountMigrateTx {
                address
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
                data {
                  typeUrl
                  value
                }
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
              ... on PokeTx {
                address
                date
                data {
                  typeUrl
                  value
                }
              }
              ... on AccountMigrateTx {
                address
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
          data {
            typeUrl
            value
          }
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
        ... on PokeTx {
          address
          date
          data {
            typeUrl
            value
          }
        }
        ... on AccountMigrateTx {
          address
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
      }
    }
    consensusUpgrade {
      chainId
      from
      nonce
      pk
      signature
      signatures {
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
          data {
            typeUrl
            value
          }
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
        ... on PokeTx {
          address
          date
          data {
            typeUrl
            value
          }
        }
        ... on AccountMigrateTx {
          address
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
      }
    }
    createAsset {
      chainId
      from
      nonce
      pk
      signature
      signatures {
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
          data {
            typeUrl
            value
          }
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
        ... on PokeTx {
          address
          date
          data {
            typeUrl
            value
          }
        }
        ... on AccountMigrateTx {
          address
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
      }
    }
    declare {
      chainId
      from
      nonce
      pk
      signature
      signatures {
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
          data {
            typeUrl
            value
          }
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
        ... on PokeTx {
          address
          date
          data {
            typeUrl
            value
          }
        }
        ... on AccountMigrateTx {
          address
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
      }
    }
    declareFile {
      chainId
      from
      nonce
      pk
      signature
      signatures {
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
          data {
            typeUrl
            value
          }
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
        ... on PokeTx {
          address
          date
          data {
            typeUrl
            value
          }
        }
        ... on AccountMigrateTx {
          address
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
          data {
            typeUrl
            value
          }
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
        ... on PokeTx {
          address
          date
          data {
            typeUrl
            value
          }
        }
        ... on AccountMigrateTx {
          address
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
      }
      upgradeInfo {
        height
        version
      }
    }
    protocolState {
      address
      description
      migratedFrom
      migratedTo
      name
      rootHash
      status
      txHash
      version
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
                data {
                  typeUrl
                  value
                }
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
              ... on PokeTx {
                address
                date
                data {
                  typeUrl
                  value
                }
              }
              ... on AccountMigrateTx {
                address
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
                data {
                  typeUrl
                  value
                }
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
              ... on PokeTx {
                address
                date
                data {
                  typeUrl
                  value
                }
              }
              ... on AccountMigrateTx {
                address
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
            }
          }
        }
      }
      data {
        typeUrl
        value
      }
    }
    revoke {
      chainId
      from
      nonce
      pk
      signature
      signatures {
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
          data {
            typeUrl
            value
          }
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
        ... on PokeTx {
          address
          date
          data {
            typeUrl
            value
          }
        }
        ... on AccountMigrateTx {
          address
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
      }
    }
    stake {
      chainId
      from
      nonce
      pk
      signature
      signatures {
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
          data {
            typeUrl
            value
          }
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
        ... on PokeTx {
          address
          date
          data {
            typeUrl
            value
          }
        }
        ... on AccountMigrateTx {
          address
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
                data {
                  typeUrl
                  value
                }
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
              ... on PokeTx {
                address
                date
                data {
                  typeUrl
                  value
                }
              }
              ... on AccountMigrateTx {
                address
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
                data {
                  typeUrl
                  value
                }
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
              ... on PokeTx {
                address
                date
                data {
                  typeUrl
                  value
                }
              }
              ... on AccountMigrateTx {
                address
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
          data {
            typeUrl
            value
          }
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
        ... on PokeTx {
          address
          date
          data {
            typeUrl
            value
          }
        }
        ... on AccountMigrateTx {
          address
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
      }
    }
    transfer {
      chainId
      from
      nonce
      pk
      signature
      signatures {
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
          data {
            typeUrl
            value
          }
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
        ... on PokeTx {
          address
          date
          data {
            typeUrl
            value
          }
        }
        ... on AccountMigrateTx {
          address
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
      }
    }
    updateAsset {
      chainId
      from
      nonce
      pk
      signature
      signatures {
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
          data {
            typeUrl
            value
          }
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
        ... on PokeTx {
          address
          date
          data {
            typeUrl
            value
          }
        }
        ... on AccountMigrateTx {
          address
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