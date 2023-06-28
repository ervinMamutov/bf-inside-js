'use strict';

/**
 * repeat the string a specified number of times
 * @param {string} [text=''] original text
 * @param {number} [numberOfRepetition=1] number of repetition
 * @returns {string} modify text 
 */
export const repeatString = (text = '', numberOfRepetition = 1) => {
  if (numberOfRepetition < 1) return '';
  return text.repeat(numberOfRepetition);
}
