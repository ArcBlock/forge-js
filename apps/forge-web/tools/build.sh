VERSION=`cat ../../version`
echo "REACT_APP_VERSION=${VERSION}"
REACT_APP_VERSION=$VERSION react-app-rewired build
rm build/static/**/*.map
