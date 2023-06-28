'use strict';

/**
 * skip the specified number of characters in the text
 * @param {string} [text=''] origin text
 * @param {number} [skip=1] number of skip character
 * @returns {string} text without skip characters
 */

export const skipCharacters = (text = '', skip = 1) => {
  if (text === '' || skip < 1) return text;
  
  let result = '';
  
  for (let i = 0; i < text.length; i += skip) {
    result += text[i];
  }
  return result;
}
