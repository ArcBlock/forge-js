TOP_DIR=.
README=$(TOP_DIR)/README.md

VERSION=$(strip $(shell cat version))

build:
	@echo "Building the software..."
	@cd packages/graphql-client && yarn build

init: install dep
	@echo "Initializing the repo..."

travis-init: install dep
	@echo "Initialize software required for travis (normally ubuntu software)"

install:
	@echo "Install software required for this repo..."
	@npm install -g lerna yarn js2dts

dep:
	@echo "Install dependencies required for this repo..."
	@lerna clean --yes
	@lerna bootstrap
	@npx install-peerdeps -g --yarn eslint-config-airbnb
	# @cd apps/forge-web && rm -rf node_modules && npm i
	@cd packages/graphql-client && yarn build
	@lerna link

pre-build: install dep
	@echo "Running scripts before the build..."

post-build:
	@echo "Running scripts after the build is done..."

all: pre-build build post-build

test:
	@echo "Running test suites..."
	@yarn test

lint:
	@echo "Linting the software..."
	@yarn lint

doc:
	@echo "Building the documenation..."

precommit: dep lint doc build test

travis: precommit

travis-deploy:
	@echo "Deploy the software by travis"

clean:
	@echo "Cleaning the build..."

watch:
	@make build
	@echo "Watching templates and slides changes..."
	@fswatch -o packages/ | xargs -n1 -I{} make build

upgrade:
	@echo "Upgrade sdk to align with latest forge..."
	@cd packages/graphql-client && npm run upgrade && git commit -m "chore: upgrade graphql-client with latest forge" . && yarn build
	@cd packages/forge-proto && npm run upgrade && git commit -m "chore: upgrade forge-proto with latest forge" .
	@cd packages/grpc-client && npm run upgrade && git commit -m "chore: upgrade grpc-client with latest forge" .

run:
	@echo "Running the software..."

include .makefiles/*.mk

.PHONY: build init travis-init install dep pre-build post-build all test doc precommit travis clean watch run bump-version create-pr
