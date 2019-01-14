SHELL=/bin/bash
TOP_DIR=.
CWD=`pwd`
DATA_PATH=/tmp/.forge_simple
# NOTE: FORGE_CONFIG must be an absolute path
CONFIG_PATH=$(CWD)/forge.toml

FORGE_BIN_PATH=/Users/wangshijun/Develop/arcblock/forge/_build/staging/rel/forge/bin/forge
TM_BIN_PATH=`which tendermint`
IPFS_BIN_PATH=`which ipfs`

init:
	@echo "Install dependencies for example..."
	@npm install

prepare: clean
	@mkdir -p $(DATA_PATH)/{tendermint,ipfs}/bin
	@[ -f "${TM_BIN_PATH}" ] && cp -f $(TM_BIN_PATH) $(DATA_PATH)/tendermint/bin
	@[ -f "${IPFS_BIN_PATH}" ] && cp -f $(IPFS_BIN_PATH) $(DATA_PATH)/ipfs/bin

run:
	@echo "Running forge for kv app..."
	@FORGE_CONFIG=${CONFIG_PATH} ${FORGE_BIN_PATH} console

logs:
	@echo "Streaming logs for forge-core and forge-app..."
	@tail -f $(DATA_PATH)/app/logs/app.log $()/core/logs/core.log

clean:
	@echo "Cleaning the data dir ${DATA_PATH}..."
	@rm -rf $(DATA_PATH)
