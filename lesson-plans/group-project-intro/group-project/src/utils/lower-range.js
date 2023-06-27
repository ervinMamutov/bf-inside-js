'use strict';

/**
 * return lower range
 * @param {number} num 
 * @param {number} start 
 */

export const lowerRange = (num, start) => {
  

  

  lowerRange = guess + 1;
  guess = Math.floor((lowerRange + upperRange) / 2);
  updateGuessOutput(guess);
}
