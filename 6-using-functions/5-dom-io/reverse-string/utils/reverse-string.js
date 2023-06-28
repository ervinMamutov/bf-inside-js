'use strict';

/**
 * reverse string
 * @param {string} [text=''] original text
 * @returns {string} reversed text
 */

export const reverseString = (text = '') => {
  return text.split('').reverse().join('');
}
