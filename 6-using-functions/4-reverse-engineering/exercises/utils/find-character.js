'use strinct';

/**
 * find specified parameter
 * @param {string} [text=''] specified text
 * @param {string} [character=''] specified character
 * @param {boolean} [isSensitive=true] true or false
 * @returns {boolean} return true or false  
 */

export const findCharacter = (text = '', character = '', isSensitive = true) => {
  if (text === '' || character === "") return false;
  
  if (isSensitive) {
    return text.toLowerCase().includes(character.toLowerCase());
  } else {
    return text.includes(character);
  }
}
