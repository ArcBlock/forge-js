SHELL=/bin/bash
TOP_DIR=.
CWD=`pwd`
DATA_PATH=/tmp/.forge_simple
# NOTE: FORGE_CONFIG must be an absolute path
CONFIG_PATH=$(CWD)/forge.toml

FORGE_BIN_PATH=`which forge`
TM_BIN_PATH=`which tendermint`
IPFS_BIN_PATH=`which ipfs`

init:
	@echo "Install dependencies for example..."
	@npm install -g yarn
	@yarn

prepare: clean
	@mkdir -p $(DATA_PATH)/{tendermint,ipfs}/bin
	@[ -f "${TM_BIN_PATH}" ] && cp -f $(TM_BIN_PATH) $(DATA_PATH)/tendermint/bin
	@[ -f "${IPFS_BIN_PATH}" ] && cp -f $(IPFS_BIN_PATH) $(DATA_PATH)/ipfs/bin

run:
	@echo "Running forge for kv app..."
	@FORGE_CONFIG=${CONFIG_PATH} ${FORGE_BIN_PATH} console

clean:
	@echo "Cleaning the build..."
	@rm -rf $(DATA_PATH)
