'use strict';

/**
 * Adds two numbers together.
 *
 * @param {number} [x=0] - The left left.
 * @param {number} [y=0] - The right number.
 * @returns {number} The sum of x and y.
 */

const sumTwoNumber = (x = 0, y = 0) => {
  return x + y
};

describe('sumTwoNumber performs an addition operation', () => {
  it('call function without argumvents', () => {
      const expected = 0;
      const actual = sumTwoNumber();
      expect(actual).toEqual(expected);
    });
    // ...
  it('call function whith two arguments', () => {
    const expected = 5;
    const actual = sumTwoNumber(2, 3);
    expect(actual).toEqual(expected);
    });
    // ...
    it('call function whith one arguments', () => {
    const expected = 5;
    const actual = sumTwoNumber(5);
    expect(actual).toEqual(expected);
    });
  });
  
