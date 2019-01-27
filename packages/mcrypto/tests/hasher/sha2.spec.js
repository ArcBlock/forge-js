const hasher = require('../../lib/hasher/sha2');

const testVectors = {
  '': {
    256: 'E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855',
  },
  abcd: {
    256: '88D4266FD4E6338D13B845FCF289579D209C897823B9217DA3E161936F031589',
  },
  '1234': {
    256: '03AC674216F3E15C761EE1A5E255F067953623C8B388B4459E13F978D7C846F4',
  },
  'ABC!234*': {
    256: 'EBD1B0F4D006B3AAFA93D86AAD9C8A3C59A736A60D6F464F51E54EF61043467A',
  },
  // FIXME: elixir does not support chinese!
};

describe('#sha2', () => {
  Object.keys(testVectors['abcd']).forEach(length => {
    Object.keys(testVectors).forEach(key => {
      test(`should hash value: ${key} at length ${length}`, () => {
        expect(hasher.sha256(key, 1).toUpperCase()).toEqual(testVectors[key][length]);
      });
    });
  });
});
