const hasher = require('../../lib/hasher/sha3');

const testVectors = {
  '': {
    224: '6B4E03423667DBB73B6E15454F0EB1ABD4597F9A1B078E3F5B5A6BC7',
    256: 'A7FFC6F8BF1ED76651C14756A061D662F580FF4DE43B49FA82D80A4B80F8434A',
    384: '0C63A75B845E4F7D01107D852E4C2485C51A50AAAA94FC61995E71BBEE983A2AC3713831264ADB47FB6BD1E058D5F004',
    512: 'A69F73CCA23A9AC5C8B567DC185A756E97C982164FE25859E0D1DCC1475C80A615B2123AF1F5F94C11E3E9402C3AC558F500199D95B6D3E301758586281DCD26',
  },
  abcd: {
    224: 'DD886B5FD8421FB3871D24E39E53967CE4FC80DD348BEDBEA0109C0E',
    256: '6F6F129471590D2C91804C812B5750CD44CBDFB7238541C451E1EA2BC0193177',
    384: '5AF1D89732D4D10CC6E92A36756F68ECFBF7AE4D14ED4523F68FC304CCCFA5B0BBA01C80D0D9B67F9163A5C211CFD65B',
    512: '6EB7B86765BF96A8467B72401231539CBB830F6C64120954C4567272F613F1364D6A80084234FA3400D306B9F5E10C341BBDC5894D9B484A8C7DEEA9CBE4E265',
  },
  '1234': {
    224: 'B0F3DC043A9C5C05F67651A8C9108B4C2B98E7246B2EEA14CB204295',
    256: '1D6442DDCFD9DB1FF81DF77CBEFCD5AFCC8C7CA952AB3101EDE17A84B866D3F3',
    384: '0BF2C5EED2DC859CA9707AE59A18B5097D580CE705808B80830C5CF5832405073E3FA3491ED7071A2362048EDFF48295',
    512: 'D760688DA522B4DC3350E6FB68961B0934F911C7D0FF337438CABF4608789BA94CE70B6601D7E08A279EF088716C4B1913B984513FEA4C557D404D0598D4F2F1',
  },
  'ABC!234*': {
    224: '032DBB71A55D37D2AA22BCA4CEFFCFFBF5D4F9F37FEF0A295844FFA2',
    256: 'DD5C8E862CEC564BBB4F192EB862A071A3E88646EFC8B0FF37BA698B9FEF80E0',
    384: '8EA247ADA7AD8C8C5FA876BDE145759499B134A6CF104E040CF795B313C5B03159859F788FB11266D359D8BC79A0F1AF',
    512: 'EDBE924330F2808A567E488EAA0B12E32F34653FA9BD4C8AF61BBBB99B95D4126FF3B592EE8B6C3C172A3072189F71E128A9E019D85529AC9875B76562E02AC7',
  },
  // FIXME: elixir does not support chinese!
};

describe('#sha3', () => {
  Object.keys(testVectors['abcd']).forEach(length => {
    Object.keys(testVectors).forEach(key => {
      test(`should hash value: ${key} at length ${length}`, () => {
        const fn = `hash${length}`;
        expect(hasher[fn](key, 1).toUpperCase()).toEqual(testVectors[key][length]);
      });
    });
  });
});
