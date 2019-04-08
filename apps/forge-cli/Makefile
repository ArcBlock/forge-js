TOP_DIR=.
README=$(TOP_DIR)/README.md

VERSION=$(strip $(shell cat version))

build:
	@echo "Building the software..."
	@node src/index.js

init: install dep
	@echo "Initializing the repo..."

travis-init: install
	@echo "Initialize software required for travis (normally ubuntu software)"

install:
	@echo "Install software required for this repo..."
	@npm install -g mustache

dep:
	@echo "Install dependencies required for this repo..."
	@npm install

pre-build: install dep
	@echo "Running scripts before the build..."

post-build:
	@echo "Running scripts after the build is done..."

all: pre-build build post-build

test:
	@echo "Running test suites..."
	@node src/index.js

lint:
	@echo "Linting the software..."
	@npm run lint

doc:
	@echo "Building the documenation..."

precommit: dep lint doc build test

travis: precommit

travis-deploy: release
	@echo "Deploy the software by travis"

clean:
	@echo "Cleaning the build..."

watch:
	@make build
	@echo "Watching templates and slides changes..."
	@fswatch -o src/ | xargs -n1 -I{} make build

run:
	@echo "Running the software..."

deploy:
	@echo "Deploy software into local machine..."
	@npm uninstall -g .;npm install -g .

.PHONY: build init travis-init install dep pre-build post-build all test doc precommit travis clean watch run travis-deploy
