'use strict';

/**
 * repeats the character a specified numbers of times 
 * @param {string} [text=''] original text
 * @param {number} [numberRepeats=1] repetition rate
 * @returns {string} result repetition
 */

export const repeat = (text = '', numberRepeats = 1) => {
  if (numberRepeats === 0) return text;
  let result = '';
  for (const char of text) {
    for (let i = 0; i < numberRepeats; i++) {
      result += char;
    }  
  }
  return result;
};
