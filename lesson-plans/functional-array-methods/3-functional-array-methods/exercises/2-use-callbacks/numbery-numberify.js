/**
 * takes an array of strings and returns a new array
 *  the new array contains all the numbery strings, cast to number
 * does not modify the argument
 * @param {string[]} arr - the array of strings
 * @returns {number[]} an array containing numbers that aren't NaN
 */
export const numberyNumberify = (arr) => {
  const newArr = [...arr];
  if (newArr.length === 0) {
    return [];
  }
  const numArr = newArr.filter(item => !isNaN(item));
  return numArr.map(item => Number(item));
};
