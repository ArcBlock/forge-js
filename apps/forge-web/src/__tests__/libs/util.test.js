import { selectNetwork } from '../../libs/util';

describe('util', () => {
  it('should be a function', () => {
    expect(typeof selectNetwork).toEqual('function');
  });
});
