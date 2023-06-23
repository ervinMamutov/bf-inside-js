/**
 * Returns a new string with only the given characters left in it.
 *
 * @param {string} [text= ''] - Some text to remove characters from.
 * @param {string} [characters= ''] - The characters to keep.
 * @returns {string} Text with only the given characters still in it.
 */

  export const keepCharacters = (text = '', characters = '') => {
    
    const isLength = text.length === characters.length;
    const isCharLowerCase = text.toLowerCase() === characters.toLowerCase();
    const isCharInclude = text === characters;
    
    let result = '';
    
    if(isLength && !isCharLowerCase) return text;
    if(isCharLowerCase && !isCharInclude && isLength) return '';
    if (text === '' || characters === '') return '';

    for (const char of characters) {
      for (const textChar of text) {
        if (char === textChar) {
          result +=char;
        } else {
          result;
        }
      }
    } 
    return result;
  };
  