'use strict';

/**
 * allLong: checks if all the strings in an array are long
 * @param {string} [strings=[]] - origin array
 * @param {number} [long=0] - a number of long string
 * @returns {boolean} 
 */
export const allLong = (strings = [], long = 0) => {
  if(strings.length === 0) return true;
  // if(strings.length === long) return true;
  // let allAre = true;
  for (let i = 0; i < strings.length; i++) {
    const next = strings[i];
    if (next.length < long) {
      return false;
    }
  }
  return true;
};
