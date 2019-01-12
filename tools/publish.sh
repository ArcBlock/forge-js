git config --local user.name "wangshijun"
git config --local user.email "wangshijun2010@gmail.com"

git remote remove origin
git remote add origin "https://$GITHUB_TOKEN@github.com/$TRAVIS_REPO_SLUG.git"
git remote -v

changed=$(lerna changed)
if [ "$changed" != "" ]; then
  DEBUG=* node tools/setup-ci.js

  git checkout master
  git commit -am "update yarn.lock file"

  # publish
  VERSION=$(cat version | awk '{$1=$1;print}')
  lerna run build
  lerna publish $VERSION --yes

  # update readme
  node tools/update-readme.js
  git commit -am 'update readme'
  git push origin master
fi

if [ "$changed" = "" ]; then
  make release
fi
