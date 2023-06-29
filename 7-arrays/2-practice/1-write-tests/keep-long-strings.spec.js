import { keepLongStrings } from './keep-long-strings.js';

describe('The function filters the origin array by length and returns a new array consisting of a string longer then 5 character', () => {
  describe('default parameter', () => {
    it('', () => {
      const returned = keepLongStrings();
      expect(returned).toEqual([]);
    })
    it('arr = [1, 2, 3, 4, "123456", "12345", "1234567"]', () => {
      const returned = keepLongStrings([1, 2, 3, 4, '123456', '12345', '1234567']);
      expect(returned).toEqual(['123456', '1234567']);
    })
    it('long 3', () => {
      const returned = keepLongStrings([], 3);
      expect(returned).toEqual([]);
    })
  })
  describe('two parameter : arr : [string], long : number', () => {
    it("['1', '12', '123', '1234', '12345', '123456', '1234567'], 3", () => {
      const returned = keepLongStrings(['1', '12', '123', '1234', '12345', '123456', '1234567'], 3);
      expect(returned).toEqual(['1234', '12345', '123456', '1234567']);
    })
    it("['1', '12', '123', '1234', '12345', '123456', '1234567'], 5", () => {
      const returned = keepLongStrings(['1', '12', '123', '1234', '12345', '123456', '1234567'], 5);
      expect(returned).toEqual(['123456', '1234567']);
    })
    it("['1', '12', '123', '1234', '12345', '123456', '1234567'], 9", () => {
      const returned = keepLongStrings(['1', '12', '123', '1234', '12345', '123456', '1234567'], 9);
      expect(returned).toEqual([]);
    })
  })
})
