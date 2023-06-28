import { removeDuplicate } from './remove-duplicate.js';

describe('removeDuplicate: removes duplicate characters from a string', () => {
  describe('the function behavior', () => {
    it('an empty string', () => {
      const returned = removeDuplicate('');
      expect(returned).toEqual('');
    });
    it('removes duplicate character', () => {
      const returned = removeDuplicate('aaassssddddfffff');
      expect(returned).toEqual('asdf');
    });
    it('removes many of a character', () => {
      const returned = removeDuplicate('1122dderew');
      expect(returned).toEqual('12derw');
    });
  });
  describe('the default parameters', () => {
    it('has an empty string for the second default param', () => {
      const returned = removeDuplicate('');
      expect(returned).toEqual('');
    });
  });
});
