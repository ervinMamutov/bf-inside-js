import { repeatString } from "./repeat-string.js";

describe('repeat the string a specified number of times', () => {
  describe('default parameter', () => {
    it('two parameter default', () => {
      const returned = repeatString();
      expect(returned).toEqual('');
    });
    it('text : parameter default', () => {
      const returned = repeatString('', 3);
      expect(returned).toEqual('');
    })
    it('number : parameter default', () => {
      const returned = repeatString('qwerty');
      expect(returned).toEqual('qwerty');
    })
  });
  describe('two parameter', () => {
    it('"qwerty", 2', () => {
      const returned = repeatString('qwerty', 2);
      expect(returned).toEqual('qwertyqwerty');
    })
    it('"qwerty", -2', () => {
      const returned = repeatString('qwerty', -2);
      expect(returned).toEqual('');
    })
  });
});
