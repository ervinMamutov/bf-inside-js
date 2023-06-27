import { findCharacter } from './find-character.js';

describe('findCharacter: find specified characters from a text', () => {
  describe('default parameter', () => {
    it('text default', () => {
      const returned = findCharacter('', 's');
      expect(returned).toEqual(false);
    });
    it('character default', () => {
      const returned = findCharacter('qwerty');
      expect(returned).toEqual(false);
    });
    it('default two parameters', () => {
      const returned = findCharacter();
      expect(returned).toEqual(false);
    });
  });
  describe('initialization of two parameters', () => {
    it('qwerty', () => {
      const returned = findCharacter('qwerty', 'q');
      expect(returned).toEqual(true);
    });
    it('qwerty', () => {
      const returned = findCharacter('qwerty', 'z');
      expect(returned).toEqual(false);
    });
  });
  describe('a case-sensitive search', () => {
    it('qwerty', () => {
      const returned = findCharacter('qwerty', 'Q', true);
      expect(returned).toEqual(true);
    });
    it('qwerty', () => {
      const returned = findCharacter('qwerty', 'Q', false);
      expect(returned).toEqual(false);
    });
    it('Qwerty', () => {
      const returned = findCharacter('Qwerty', 'q', true);
      expect(returned).toEqual(true);
    });
    it('Qwerty', () => {
      const returned = findCharacter('Qwerty', 'q', false);
      expect(returned).toEqual(false);
    });
  });
});
