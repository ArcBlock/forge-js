MUSTACHE=mustache
TPL_FILES = $(shell find . -name "*.tpl")
TARGET_FILES=$(TPL_FILES:%.tpl=%)

TPL_DATA = '{"name": "$(NAME)", "action": "${ACTION}", "description": "${DESCRIPTION}", "requireRelease": "${REQUIRE_RELEASE}", "requireRpcClient": "${REQUIRE_RPC_CLIENT}", "requireWallet": "${REQUIRE_WALLET}", "requireRunningNode": "${REQUIRE_RUNNING_NODE}"}'

mustache: $(TARGET_FILES) rename

$(TARGET_FILES):%:%.tpl
	@echo "Creating target $@ with file $<."
	echo $(TPL_DATA) | $(MUSTACHE) - $< > $@
	@rm $<

rename:
	@mv cli.js $(NAME).js
