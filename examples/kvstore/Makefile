SHELL=/bin/bash
TOP_DIR=.
CWD=`pwd`
DATA_PATH=/tmp/.forge_kvstore_nodejs
# NOTE: FORGE_CONFIG must be an absolute path
CONFIG_PATH=$(CWD)/config/forge.toml

FORGE_BIN_PATH=/Users/wangshijun/Develop/arcblock/forge/_build/staging/rel/forge/bin/forge # your local forge build
# FORGE_BIN_PATH=/Users/wangshijun/Downloads/forge/bin/forge # downloaded from github release
TM_BIN_PATH=`which tendermint`
IPFS_BIN_PATH=`which ipfs`

init:
	@echo "Install dependencies for example..."
	@npm install -g grpc-tools
	@npm install -g protobufjs
	@npm install

prepare: clean
	@mkdir -p $(DATA_PATH)/{tendermint,ipfs}/bin
	@[ -f "${TM_BIN_PATH}" ] && cp -f $(TM_BIN_PATH) $(DATA_PATH)/tendermint/bin
	@[ -f "${IPFS_BIN_PATH}" ] && cp -f $(IPFS_BIN_PATH) $(DATA_PATH)/ipfs/bin

run:
	@echo "Running forge for kv app..."
	@FORGE_CONFIG=${CONFIG_PATH} ${FORGE_BIN_PATH} console

logs:
	@echo "Streaming logs for forge-app..."
	@tail -f logs/app.log

test:
	@echo "Running RPC requests against forge-app..."
	@DEBUG=@arcblock/* node client.js

clean:
	@echo "Cleaning the build..."
	@rm -rf $(DATA_PATH)

rebuild-proto: rebuild-proto-js rebuild-proto-json
	@echo "Rebuilding proto files..."

rebuild-proto-js:
	@rm -f $(TOP_DIR)/protobufs/gen/*.js && mkdir -p $(TOP_DIR)/protobufs/gen
	@grpc_tools_node_protoc --js_out=import_style=commonjs,binary:$(TOP_DIR)/protobufs/gen --grpc_out=$(TOP_DIR)/protobufs/gen --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` $(TOP_DIR)/protobufs/*.proto
	@mv $(TOP_DIR)/protobufs/gen/protobufs/*.js $(TOP_DIR)/protobufs/gen && rm -rf $(TOP_DIR)/protobufs/gen/protobufs
	@echo "New protobuf files for javascript created."
	@sed -i -E "s/get([a-zA-Z0-9]+)_asB64\(\)/get\1()/" $(TOP_DIR)/protobufs/gen/*.js
	@echo "New protobuf files for javascript patched."

# Generate protobuf spec in json format to use in languages that can geneate code on run-time
rebuild-proto-json:
	@rm -f $(TOP_DIR)/protobufs/gen/*.json && mkdir -p $(TOP_DIR)/protobufs/gen
	@pbjs -t json -o $(TOP_DIR)/protobufs/gen/spec.json $(TOP_DIR)/protobufs/*.proto
	@echo "New protobuf spec json created."

.PHONY: logs run test
