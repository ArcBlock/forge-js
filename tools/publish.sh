LAST_COMMIT_MESSAGE=$(git log -1 --pretty=%B | cat)
SKIP_MARK="[skip travis]"
if [[ "$LAST_COMMIT_MESSAGE" == *"$SKIP_MARK"* ]]; then
  echo "Do nothing because we have published already or marked as skip travis."
  exit 0
fi

git config --local user.name "wangshijun"
git config --local user.email "wangshijun2010@gmail.com"

git remote remove origin
git remote add origin "https://$GITHUB_TOKEN@github.com/$TRAVIS_REPO_SLUG.git"
git remote -v
git pull origin master
git branch -a

changed=$(lerna changed --force-publish)
echo "lerna changed ${changed}"
if [ "$changed" != "" ]; then
  npm config set '//registry.npmjs.org/:_authToken' "${NPM_TOKEN}"

  git checkout master
  git commit -am "update yarn.lock file"

  # publish
  VERSION=$(cat version | awk '{$1=$1;print}')
  echo "publish version ${VERSION}"
  lerna run build
  lerna publish $VERSION --force-publish --yes

  # trigger cnpm sync
  node tools/post-publish.js

  # update readme
  node tools/update-readme.js
  git commit -am '[skip travis] update readme'
  git push origin master
fi

if [ "$changed" = "" ]; then
  make release
fi
