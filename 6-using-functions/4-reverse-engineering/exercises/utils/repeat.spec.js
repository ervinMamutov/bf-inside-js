import { repeat } from './repeat.js';

describe('repeat: repeats the character a specified numbers of times', () => {
  describe('default parameter ', () => {
    it('an empty string', () => {
      const returned = repeat('');
      expect(returned).toEqual('');
    });
    it('an string', () => {
      const returned = repeat('qwerty');
      expect(returned).toEqual('qwerty');
    });
  });
  describe('the two parameters', () => {
    it('qwerty repeat 2 time' , () => {
      const returned = repeat('qwerty', 2);
      expect(returned).toEqual('qqwweerrttyy');
    });
    it('qwerty repeat 0 time' , () => {
      const returned = repeat('qwerty', 0);
      expect(returned).toEqual('qwerty');
    });
  });
});
