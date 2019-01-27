const hasher = require('../../lib/hasher/sha3');

const testVectors = {
  '': {
    256: 'A7FFC6F8BF1ED76651C14756A061D662F580FF4DE43B49FA82D80A4B80F8434A',
  },
  abcd: {
    256: '6F6F129471590D2C91804C812B5750CD44CBDFB7238541C451E1EA2BC0193177',
  },
  '1234': {
    256: '1D6442DDCFD9DB1FF81DF77CBEFCD5AFCC8C7CA952AB3101EDE17A84B866D3F3',
  },
  'ABC!234*': {
    256: 'DD5C8E862CEC564BBB4F192EB862A071A3E88646EFC8B0FF37BA698B9FEF80E0',
  },
  // FIXME: elixir does not support chinese!
};

describe('#sha3', () => {
  Object.keys(testVectors['abcd']).forEach(length => {
    Object.keys(testVectors).forEach(key => {
      test(`should hash value: ${key} at length ${length}`, () => {
        expect(hasher.sha256(key, 1).toUpperCase()).toEqual(testVectors[key][length]);
      });
    });
  });
});
