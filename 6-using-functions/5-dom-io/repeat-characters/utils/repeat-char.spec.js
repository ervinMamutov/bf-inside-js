import { repeatChar } from './repeat-char.js';

describe('repeatChar: repeat characters from a text', () => {
  describe('default parameter', () => {
    it('text default', () => {
      const returned = repeatChar('', 3);
      expect(returned).toEqual('');
    });
    it('number of repeats default', () => {
      const returned = repeatChar('qwerty');
      expect(returned).toEqual('qwerty');
    });
    it('default two parameters', () => {
      const returned = repeatChar();
      expect(returned).toEqual('');
    });
  });
  describe('initialization of two parameters', () => {
    it('qwerty 2', () => {
      const returned = repeatChar('qwerty', 2);
      expect(returned).toEqual('qqwweerrttyy');
    });
    it('!2345', () => {
      const returned = repeatChar('!2345', '2');
      expect(returned).toEqual('!!22334455');
    });
  });
});
