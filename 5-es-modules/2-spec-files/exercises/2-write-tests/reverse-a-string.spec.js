import { reverseAString } from './reverse-a-string.js';

describe('it should reverseAString strings', () => {
  describe('when no argument is passed', () => {
    it('default parameter is an empty string', () => {
      expect(reverseAString()).toEqual('');
    });
  });
  describe('when argument is a string', () => {
    it('the empty string should return an empty string', () => {
      expect(reverseAString('')).toEqual('');
    });
    it('"toads" should return "sdaot"', () => {
      expect(reverseAString('toads')).toEqual('sdaot');
    });
    // write at least 5 more tests
    it('"RoR" should return "RoR"', () => {
      expect(reverseAString('RoR')).toEqual('RoR');
    });
    it('"qqqqqqqqqqq" should return "qqqqqqqqqqq"', () => {
      expect(reverseAString('qqqqqqqqqqq')).toEqual('qqqqqqqqqqq');
    });
    it('"madam" should return "madam"', () => {
      expect(reverseAString('madam')).toEqual('madam');
    });
    it('"aaa" should return "aaa"', () => {
      expect(reverseAString('aaa')).toEqual('aaa');
    });
    it('"qwerty" should return "ytrewq"', () => {
      expect(reverseAString('qwerty')).toEqual('ytrewq');
    });
  });
  describe('when argument is not a string', () => {
    it('true should return "text is not a string"', () => {
      expect(reverseAString(true)).toEqual('text is not a string');
    });
    // write at least 3 more tests
    it('111 should return "text is not a string"', () => {
      expect(reverseAString(111)).toEqual('text is not a string');
    });
    it('1222 should return "text is not a string"', () => {
      expect(reverseAString(1222)).toEqual('text is not a string');
    });
    it('false should return "text is not a string"', () => {
      expect(reverseAString(false)).toEqual('text is not a string');
    });

  });
});
