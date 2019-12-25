git checkout master

# disable git hooks
mv .git/hooks/pre-commit .git/hooks/pre-commit.bak
mv .git/hooks/pre-push .git/hooks/pre-push.bak

# publish
VERSION=$(cat version | awk '{$1=$1;print}')
lerna run build
lerna publish prepatch --yes

# trigger cnpm sync
node tools/post-publish.js

# update readme
# node tools/update-readme.js
# git commit -nam 'update readme'
# git push origin master --no-verify

# restore git hooks
mv .git/hooks/pre-commit.bak .git/hooks/pre-commit
mv .git/hooks/pre-push.bak .git/hooks/pre-push
