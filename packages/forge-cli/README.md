# forge-cli

> A general set of easy to use command line tools for ArcBlock engineers

## Requirements

* Linux/Mac Command Line, iTerm is recommended.
* Node.js: npm/yarn, please install using [nvm](https://github.com/creationix/nvm).

## install

```shell
npm install -g @arcblock/forge-cli
```

Now `forge` command is available to all new shell sessions.

## Usage

Run `forge` and get available options and subcommands.

```text
❯ forge
Usage: forge [options] [command]

Options:
  -V, --version             output the version number
  -v, --verbose             Output runtime logs when execute the command, used for debug
  -r, --release-dir         Forge release directory path (unzipped), use your own copy forge release
  -t, --release-tarball     Forge release tarball (unzipped), we take care of the rest
  -c, --config-path         Forge config used when starting forge node and initializing gRPC clients
  -g, --socket-grpc         Socket gRPC endpoint to connect, with this you can use forge-cli with a remote node
  -s, --setup-script        Path to a javascript file that loads application specific protobuf files into forge-sdk
  -h, --help                output usage information

Commands:
  account:create            interactively create an account, guarded by a passphrase
  account:delete <address>  delete an account by address
  account <address>         get an account info by address
  account:list [role]       list all accounts stored in this node, role=[all], default role is all
  me                        Print current unlocked wallet
  block <height>            get the block info from the running node
  config                    Read and display forge config
  console                   Attach the current TTY to forge console
  debug                     Print current forge-release, forge-cli and its dependency version
  init                      download and setup latest forge-core release to this machine
  ps                        list application status for forge (includes tendermint and ipfs)
  reboot                    Restart the forge daemon
  restart <app>             restart the forge managed applications: core/app/tendermint/ipfs
  start                     start forge-core and forge-app
  stop                      stop the forge daemon (forge-core, forge-app, consensus engine, storage engine)
  state [type]              list the information from various components, chain|forge
  tx <hash>                 get a tx detail and display
  tx:send                   send a signed tx to the network
  tx:sign                   sign a transaction (base64) according to sender’s wallet

Examples:

  Be sure to initialize before running any other commands
  $ forge init

  Connect to a remote forge node without starting one
  $ forge chain:info --socket-grpc "tcp://10.0.0.1:9527"

  Init with downloaded forge release tarball, will extract to ~/.forge-cli/release
  $ forge init --release-tarball ~/Downloads/forge_darwin_amd64.tgz

  Start node with custom forge release folder
  $ forge start --release-dir ~/Downloads/forge/
  $ FORGE_RELEASE_DIR=~/Downloads/forge/ forge start

  Or you can run forge-cli with custom config path
  $ forge start --config-path ~/Downloads/forge/forge_release.toml
  $ FORGE_CONFIG=~/Downloads/forge/forge_release.toml forge start
```

## Contribute

```shell
git clone git@github.com:ArcBlock/forge-cli.git
make init
make deploy
```

Or you can add `bin` folder to your `$PATH`.
