import { replaceCharacter } from './replace-character.js';

describe('replace the specified character', () => {
  describe('default all parameter ', () => {
    it('an empty string', () => {
      const returned = replaceCharacter('');
      expect(returned).toEqual('');
    });
    it('an string', () => {
      const returned = replaceCharacter('qwerty');
      expect(returned).toEqual('qwerty');
    });
  });
  describe('default two parameter', () => {
    it('text = default' , () => {
      const returned = replaceCharacter('', 'a', 'b');
      expect(returned).toEqual('');
    });
    it('first character = default' , () => {
      const returned = replaceCharacter('qwerty', '', 's');
      expect(returned).toEqual('qwerty');
    });
    it('second = default' , () => {
      const returned = replaceCharacter('qwerty', 'q', '');
      expect(returned).toEqual('qwerty');
    });
  });
  describe('there are all parameters', () => {
    it('text = qwerty' , () => {
      const returned = replaceCharacter('qwerty', 'q', 'b');
      expect(returned).toEqual('bwerty');
    });
    it('madame' , () => {
      const returned = replaceCharacter('madame', 'd', 'D');
      expect(returned).toEqual('maDame');
    });
    it('road' , () => {
      const returned = replaceCharacter('road', 'road', 'string');
      expect(returned).toEqual('string');
    });
  });
});
