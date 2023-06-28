import { calculateAverage } from "./calculate-average.js";

describe('calculateAverage : calculate average number', () => {
  describe('default parameter', () => {
    it('if arr = []', () => {
      const returned = calculateAverage();
      expect(returned).toEqual([]);
    });
  })
  describe('parameter', () => {
    it('if arr = [1, 2, 3, 4, 5, 6]', () => {
      const returned = calculateAverage([1, 2, 3, 4, 5, 6]);
      expect(returned).toEqual(3.5);
    });
    it('if arr = [1, 2, 3, 4, 5, -6]', () => {
      const returned = calculateAverage([1, 2, 3, 4, 5, -6]);
      expect(returned).toEqual(1.5);
    });
  })
})
