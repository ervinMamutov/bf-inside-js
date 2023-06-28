'use strict';

/**
 * repeat the characters a specified numbers of time
 * @param {string} [text=''] original text
 * @param {number} [numberOfTime=1] a specified number of time
 * @returns {string} modified text
 * 
 */
export const repeatChar = (text = '', numberOfTime = 1) => {
  if(numberOfTime < 0) return '';
  let result = '';
  for (const char of text) {
    result += char.repeat(numberOfTime);
  }
  return result;
}
