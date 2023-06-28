'use strict';

/**
 * building upside down pyramid
 * @param {string} [text=''] origin text
 * @returns {string} upside down pyramid 
 */

export const pyramid = (text = '') => {
  let result ='';

  for (let i = 0; i < text.length; i++) {
    result += text[i];
    for ( let j = i + 1; j < text.length; j++) {
      result += text[j]; 
    }
    result += '\n';
  }
  return result;
}
