'use strict';

/**
 * replace the specified character
 * 
 * @param {string} [text=''] original text
 * @param {string} [initialCharacter=''] initial character
 * @param {string} [replaceChar=''] resulting character
 * @returns {string} resulting text
 */

export const replaceCharacter = (text='', initialCharacter='', replaceChar='') => {
  if (initialCharacter === '' || replaceChar === '') return text;
  return text.replaceAll(initialCharacter, replaceChar);
}
