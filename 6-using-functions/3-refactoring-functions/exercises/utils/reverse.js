/**
 * reverse text or words
 * @parameter {string} [reverse] text for reverse
 * @returnes {string} reverse text 
 * 
 */

export const reverse = (text) => {
  let result = '';
  for (const char of text) {
    result = char + result;
  }
  return result;
};
