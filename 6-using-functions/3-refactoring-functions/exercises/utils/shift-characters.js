/**
 * changes each character in a string by shifting the character code
 * @parameter {string} [text=''] original text  
 * @parameter {number} [shift=0] offset value
 * @returnes {string} revised text
 */
export const shiftCharacters = (text='', shift=0) => {
  let result = '';
  for (const character of text) {
    const numberChar = character.charCodeAt();
    const shiftNumber = numberChar + shift;
    const newChar = String.fromCharCode(shiftNumber)
    result += newChar;
  }
  return result;
};
