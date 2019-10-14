curl --silent https://raw.githubusercontent.com/ArcBlock/forge-abi/master/lib/protobuf/status_code.yml > /tmp/status_code.yml
any-json /tmp/status_code.yml > ./lib/status_code.json
echo "status code json written to ./lib/status_code.json"
