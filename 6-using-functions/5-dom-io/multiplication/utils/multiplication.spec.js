import { multiplication } from './multiplication.js';

describe('multiplies the two number', () => {
  describe('default parameter', () => {
    it('default', () => {
      const returned = multiplication();
      expect(returned).toEqual(0);
    });
    it('first default', () => {
      const returned = multiplication(5);
      expect(returned).toEqual(0);
    });
    it('second default', () => {
      const returned = multiplication(3);
      expect(returned).toEqual(0);
    });
  });
  describe('two parameters', () => {
    it('3, 5', () => {
      const returned = multiplication(3, 5);
      expect(returned).toEqual(15);
    });
    it('100, -1', () => {
      const returned = multiplication(100, -1);
      expect(returned).toEqual(-100);
    });
  });
});
