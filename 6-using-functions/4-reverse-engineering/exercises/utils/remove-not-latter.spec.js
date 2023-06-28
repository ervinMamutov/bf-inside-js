import { removeNotLatter } from './remove-not-latter.js';

describe('removeNotLatter: removes no latter characters from a text', () => {
  describe('the function behavior', () => {
    it('an empty string', () => {
      const returned = removeNotLatter('');
      expect(returned).toEqual('');
    });
    it('removes not leatter character', () => {
      const returned = removeNotLatter('a1111aas###sss%ddd32dfffff');
      expect(returned).toEqual('aaassssddddfffff');
    });
    it('remove not letter character', () => {
      const returned = removeNotLatter('1122dderew');
      expect(returned).toEqual('dderew');
    });
  });
});
