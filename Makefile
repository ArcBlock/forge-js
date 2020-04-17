TOP_DIR=.
README=$(TOP_DIR)/README.md

VERSION=$(strip $(shell cat version))

build:
	@echo "Building the software..."
	@cd forge/graphql-client && yarn build

init: install dep
	@echo "Initializing the repo..."

travis-init: install dep
	@echo "Initialize software required for travis (normally ubuntu software)"

install:
	@echo "Install software required for this repo..."
	@npm install -g lerna yarn js2dts

dep:
	@echo "Install dependencies required for this repo..."
	@lerna bootstrap
	@lerna link
	@npx install-peerdeps -g --yarn eslint-config-airbnb
	@cd forge/graphql-client && lerna link && yarn build
	@cd forge/forge-sdk && lerna link && yarn build
	@cd asset/nft && lerna link

pre-build: install dep
	@echo "Running scripts before the build..."

post-build:
	@echo "Running scripts after the build is done..."

all: pre-build build post-build

test:
	@echo "Running test suites..."
	@yarn test

coverage:
	@echo "Collecting test coverage ..."
	@yarn coverage

lint:
	@echo "Linting the software..."
	@yarn lint

build-docs:
	@echo "Building and publishing the documenation..."
	@node tools/collect-docs.js
	@cd docs && yarn && yarn build

precommit: dep lint build test

travis: init coverage

travis-deploy:
	@echo "Deploy the software by travis"

clean:
	@echo "Cleaning the build..."

watch:
	@make build
	@echo "Watching templates and slides changes..."
	@fswatch -o packages/ | xargs -n1 -I{} make build

upgrade: upgrade-forge-proto upgrade-graphql-client upgrade-grpc-client

upgrade-forge-proto:
	@echo "Upgrade forge-proto to align with latest forge..."
	@cd forge/forge-proto && npm run upgrade && git commit -m "chore: upgrade forge-proto with latest forge" .

upgrade-graphql-client:
	@echo "Upgrade graphl-client to align with latest forge..."
	@cd forge/graphql-client && npm run upgrade && git commit -m "chore: upgrade graphql-client with latest forge" . && yarn build

upgrade-grpc-client:
	@echo "Upgrade grpc-client to align with latest forge..."
	@cd forge/grpc-client && npm run upgrade && git commit -m "chore: upgrade grpc-client with latest forge" .

run:
	@echo "Running the software..."

include .makefiles/*.mk

.PHONY: build init travis-init install dep pre-build post-build all test doc precommit travis clean watch run bump-version create-pr
