import { reverseString } from "./reverse-string.js";

describe('reverse string', () => {
  describe('default parameter', () => {
    it('text : ""', () => {
      const returned = reverseString();
      expect(returned).toEqual('');
    })
  })
  describe('text', () => {
    it('text : "qwerty"', () => {
      const returned = reverseString('qwerty');
      expect(returned).toEqual('ytrewq');
    })
    it('text : "!-:():-!"', () => {
      const returned = reverseString('!-:():-!');
      expect(returned).toEqual('!-:)(:-!');
    })
  })
})
