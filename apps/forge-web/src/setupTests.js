require('jest-localstorage-mock');

global.document.body.createRange = () => ({
  setEnd: () => {},
  setStart: () => {},
  getBoundingClientRect: () => {},
});
