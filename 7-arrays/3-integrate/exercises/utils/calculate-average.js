'use strict';

/**
* calculate the average
* @param {number} [arr=[]] array of number
* @returns {number} average of array
*/

export const calculateAverage = (arr = []) => {
  if (arr.length === 0) return [];
  const newArr = [...arr];
  return newArr.reduce((sum, num) => sum + num) / newArr.length;
}
