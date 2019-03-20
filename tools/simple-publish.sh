git checkout master

# publish
VERSION=$(cat version | awk '{$1=$1;print}')
lerna run build
lerna publish $VERSION --yes

# update readme
node tools/update-readme.js
git commit -nam 'update readme'
git push origin master --no-verify
