/**
 * casts all array items to Number and removes NaN
 * @param {Array} arr - the array of items to coerce
 * @returns {Array} - a new array of number values
 *
 */

export const keepNumbery = (arr = []) => {
  // const newArr = arr.map(item => Number(item));
  const newArr = [];
  const resultArray = [];

  for (const item of arr) {
  /* if (typeof num === 'undefined') {
      newArr.push(num);
    } */
    const num = Number(item);
    if (!Number.isNaN(num)) {
      newArr.push(num);
    }
  }
  return newArr; 
  /* return arr.map((item) => Number(item)).filter((item) => !Number.isNaN(item)); */
};
