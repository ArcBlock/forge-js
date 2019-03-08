VERSION=`cat ../../version`
REACT_APP_VERSION=$VERSION react-app-rewired build
rm build/static/**/*.map
