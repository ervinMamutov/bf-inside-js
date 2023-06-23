/**
 * Counts how many times a specific character appears in a text.
 *
 * @param {string} [text=''] - The text to search.
 * @param {string} [toCount=''] - The character to count, must have length 1.
 * @returns {number} How many times the character appears in the text.
 */
const countCharacter = (text = '', toCount = '') => {
  if (toCount.length !== 1) {
    return -1;
  }

  let count = 0;
  for (let character of text) {
    if (character === toCount) {
      count++;
    }
  }
  return count;
};

export default countCharacter;