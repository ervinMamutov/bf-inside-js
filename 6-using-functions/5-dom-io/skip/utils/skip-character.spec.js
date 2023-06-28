import { skipCharacters } from "./skip-character.js";

describe('skip the specified number of characters in the text', () => {
  describe('default parameters', () => {
    it('text : "", skip : " "', () => {
      const returned = skipCharacters();
      expect(returned).toEqual('');
    })
    it('text : "qwerty", skip ', () => {
      const returned = skipCharacters('qwerty');
      expect(returned).toEqual('qwerty');
    })
  })
  describe('two parameters', () => {
    it('text : "qwerty", skip : 1', () => {
      const returned = skipCharacters('qwerty', 0);
      expect(returned).toEqual('qwerty');
    })
    it('text : "qwerty", skip : 2', () => {
      const returned = skipCharacters('qwerty', 2);
      expect(returned).toEqual('qet');
    })
    it('text : "qwerty", skip : 5', () => {
      const returned = skipCharacters('qwerty', 5);
      expect(returned).toEqual('qy');
    })
    it('text : "qwerty", skip : 15', () => {
      const returned = skipCharacters('qwerty', 15);
      expect(returned).toEqual('q');
    })
  })
  describe('skip < 1', () => {
    it('text : "qwerty", skip : -1', () => {
      const returned = skipCharacters('qwerty', -1);
      expect(returned).toEqual('qwerty');
    })
    it('text : "qwerty", skip : 0', () => {
      const returned = skipCharacters('qwerty', 0);
      expect(returned).toEqual('qwerty');
    })
  })
})
