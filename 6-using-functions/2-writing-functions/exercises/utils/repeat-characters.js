/**
 * Returns a new string like the original one but with each character repeated.
 *
 * @param {string} [text=''] - A string to repeat each character.
 * @param {repities} [repities=0] - How many times to repeat each character.
 * @returns {string} The original text with each character repeated.
 */
export const repeatCharacters = (text = '', repeats = 1) => {
  let result = '';

  for (const char of text) {
    for (let i = 0; i < repeats; i++) {
      result += char;
    }
  }
  return result;
};
