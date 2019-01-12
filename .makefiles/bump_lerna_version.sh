#!/bin/bash

cur_ver=$(cat lerna.json | grep '"version":' |  awk '{print $2}' | sed 's/"//g' | sed 's/,//g')
new_ver=$(cat version)
ver_pattern="\"version\": \"$cur_ver\"" # strict match to avoid accidently change dependency version
ver_replacement="\"version\": \"$new_ver\""
cat lerna.json | sed "s/$ver_pattern/$ver_replacement/g" > lerna.json.tmp
mv lerna.json.tmp lerna.json
git add lerna.json
