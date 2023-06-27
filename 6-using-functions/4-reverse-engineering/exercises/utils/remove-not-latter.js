'use strict';

/**
 * remove not a latter
 * @param {string} [text=''] original text
 * @returns {string} modify text
 */

export const removeNotLatter = (text = '') => {
  let result = '';
  const exceptionChar = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
  for (const char of text) {
    if (exceptionChar.includes(char)){
      result += char;
    }
  }
  return result;
}
