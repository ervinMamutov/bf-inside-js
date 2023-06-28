/**
 * Finds the first negative number in an array.
 *
 * @param {number[]} arr - The array of numbers to search.
 * @returns {number | undefined} The first negative number found in the array, or undefined if no negative number is found.
 */
export const firstNegativeNumber = (arr) => {
  const isNegative = (entry) => {
    return entry < 0;
  };
  const isNumber = (entry) => {
    return typeof entry === 'number';
  };
  const negativeNumber = arr.find((entry) => isNumber(entry) && isNegative(entry));
  return negativeNumber;
};

console.log(firstNegativeNumber([1, 2, 3]));
