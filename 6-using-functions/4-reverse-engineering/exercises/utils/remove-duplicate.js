'use strict';

/**
 * remove duplicate character
 * @param {string} [text=''] original text
 * @returns {string} resulting text
 */

export const removeDuplicate = (text = '') => {
  const textArr = text.split('');
  let result = [];
  result = textArr.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
  return result.join('');
};
