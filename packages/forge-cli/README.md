# forge-cli

> A general set of easy to use command line tools for ArcBlock engineers

## Requirements

- Linux/Mac Command Line, iTerm is recommended.
- Node.js: npm/yarn, please install using [nvm](https://github.com/creationix/nvm), v10+

## Install

```shell
npm install -g @arcblock/forge-cli
```

Now `forge` command is available to all new shell sessions.

## Usage

> v0.6.5 is a breaking change release, please `rm -rf ~/.forge_cli` before run `forge init`.

Run `forge` and get available options and subcommands.

```terminal
❯ forge
Usage: forge [options] [command]

Options:
  -v, --verbose                  Output runtime logs when execute the command, used for debug
  -r, --release-dir              Forge release directory path (unzipped), use your own copy forge release
  -c, --config-path              Forge config used when starting forge node and initializing gRPC clients
  -g, --socket-grpc              Socket gRPC endpoint to connect, with this you can use forge-cli with a remote node
  -s, --setup-script             Path to a javascript file that loads application specific protobuf files into grpc-client
  -h, --help                     output usage information

Commands:
  account:create                 Interactively create an account, guarded by a passphrase
  account:delete <address>       Delete an account by address
  account <address>              Get an account info by address
  account:list [role]            List all accounts stored in this node, role=[all], default role is all
  block [options] [height]       Get the block info from the running node
  help <subcommand>              Show help of a sub command
  version                        Output version for all components, including forge-cli, forge, storage and consensus engine
  config                         Read and display forge config
  declare:node                   Declare the current node to be a validator candidate
  init                           Download and setup latest forge-core release on this machine
  join <forge-web-api-endpoint>  Join a network by providing an graphql endpoint to fetch config
  logs [type]                    Show logs for various forge components
  ps                             List application status for forge (includes tendermint and ipfs)
  restart [app]                  Restart the forge managed applications: core/app/tendermint/ipfs
  simulate|simulator [action]    Start/stop simulator and generate some random data
  start                          Start forge as a daemon in the background
  state|status [type]            List the information of the chain and the node, chain|core|net|validator|web
  stop                           Stop the forge daemon (forge-core, forge-app, consensus engine, storage engine)
  web [options] [action]         Start or stop the web UI of running forge node
  tx [hash]                      Get a tx detail and display
  tx:send                        Send a signed tx to the network
  tx:sign                        Sign a transaction (base64) according to sender’s wallet
  stake [options] [show]         Stake to various entities: node/user/asset
  unstake                        Revert stakes to various entities

Examples:

  Be sure to initialize before running any other commands
  > forge init

  Curious about how to use a subcommand?
  > forge help block
```

## FAQ

### How to start forge with custom config or release directory?

Developer can provide different forge config file path and forge release directory at will.

- forge config file path can be provided with `$FORGE_CONFIG`, or `--config-path`
- forge release dir can be provided with `$FORGE_RELEASE_DIR`, or `--release-dir`

And these 2 options can be combined to meet any developer needs to start forge with different config or release.

Here is my configuration to test latest forge master:

```shell
export FORGE_RELEASE_DIR=$HOME/Develop/arcblock/forge/_build/staging/rel
```

When I test with latest forge release:

```shell
export FORGE_RELEASE_DIR=$HOME/.forge_cli/release
```

When I need to start forge with simple custom config:

```shell
export FORGE_CONFIG=/PATH_TO/examples/simple/forge.toml
```

When I need to start forge with nodejs kvstore example config:

```shell
export FORGE_CONFIG=/PATH_TO/examples/kvstore/config/forge.toml
export FORGE_SDK_SETUP_SCRIPT=/PATH_TO/examples/kvstore/config/setup.js
```

## Contribute

```shell
git clone git@github.com:ArcBlock/forge-cli.git
make init
cd packages/forge-cli
ln -s ./bin/forge /usr/local/bin/forge
```

Or you can add `./bin` folder to your `$PATH`.
