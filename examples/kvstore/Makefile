SHELL=/bin/bash
TOP_DIR=.
CWD=`pwd`
FORGE_KV_PATH=/tmp/.forge_kv_node
# NOTE: FORGE_CONFIG must be an absolute path
CONFIG_PATH=$(CWD)/kv.toml

FORGE_BIN_PATH=`which forge`
TM_BIN_PATH=`which tendermint`
IPFS_BIN_PATH=`which ipfs`

init:
	@echo "Install dependencies for example..."
	@npm install -g grpc-tools
	@npm install -g protobufjs
	@npm install

prepare: clean
	@mkdir -p $(FORGE_KV_PATH)/{tendermint,ipfs}/bin
	@[ -f "${TM_BIN_PATH}" ] && cp -f $(TM_BIN_PATH) $(FORGE_KV_PATH)/tendermint/bin
	@[ -f "${IPFS_BIN_PATH}" ] && cp -f $(IPFS_BIN_PATH) $(FORGE_KV_PATH)/ipfs/bin

run:
	@echo "Running forge for kv app..."
	@FORGE_CONFIG=${CONFIG_PATH} ${FORGE_BIN_PATH} console

clean:
	@echo "Cleaning the build..."
	@rm -rf $(FORGE_KV_PATH)

rebuild-proto: rebuild-proto-js rebuild-proto-json
	@echo "Rebuilding proto files..."

rebuild-proto-js:
	@rm -f $(TOP_DIR)/gen/*.js && mkdir -p $(TOP_DIR)/gen
	@grpc_tools_node_protoc --js_out=import_style=commonjs,binary:$(TOP_DIR)/gen --grpc_out=$(TOP_DIR)/gen --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` $(TOP_DIR)/*.proto
	@echo "New protobuf files for javascript created."
	@sed -i -E "s/get([a-zA-Z0-9]+)_asB64\(\)/get\1()/" $(TOP_DIR)/gen/*.js
	@echo "New protobuf files for javascript patched."

# Generate protobuf spec in json format to use in languages that can geneate code on run-time
rebuild-proto-json:
	@rm -f $(TOP_DIR)/gen_json/*.json && mkdir -p $(TOP_DIR)/gen
	@pbjs -t json -o $(TOP_DIR)/gen/spec.json $(TOP_DIR)/*.proto
	@echo "New protobuf spec json created."
