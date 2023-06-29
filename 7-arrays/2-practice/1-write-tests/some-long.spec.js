import { someLong } from './some-long.js';

describe('The function checks string lengs of the array and returns true or false depending on the number of long strings', () => {
  describe('default parameters' , () => {
    it('if string : [ ], long : 5', () => {
      const returned = someLong();
      expect(returned).toEqual(false);
    })
    it("['1', '12', '123', '1234', '12345', '123456', '1234567']", () => {
      const returned = someLong(['1', '12', '123', '1234', '12345', '123456', '1234567']);
      expect(returned).toEqual(true);
    })
  })
  describe('two parameters' , () => {
    it("['1', '12', '123', '1234', '12345', '123456', '1234567'], 2", () => {
      const returned = someLong(['1', '12', '123', '1234', '12345', '123456', '1234567'], 2);
      expect(returned).toEqual(true);
    })
    it("['1', '12', '123', '1234', '12345', '123456', '1234567'], 7", () => {
      const returned = someLong(['1', '12', '123', '1234', '12345', '123456', '1234567'], 7);
      expect(returned).toEqual(true);
    })
    it("['1', '12', '123', '1234', '12345', '123456', '1234567'], -1", () => {
      const returned = someLong(['1', '12', '123', '1234', '12345', '123456', '1234567'], -1);
      expect(returned).toEqual(true);
    })
    it("['1', '12', '123', '1234', '12345', '123456', '1234567'], 10", () => {
      const returned = someLong(['1', '12', '123', '1234', '12345', '123456', '1234567'], 10);
      expect(returned).toEqual(false);
    })
  })
})