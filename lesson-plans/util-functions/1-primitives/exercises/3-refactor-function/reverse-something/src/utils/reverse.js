/**
 * reverses a string
 * @ parameter {string} [text=""] original word
 * @ returnes {string} revese word 
 */
export const reverse = (text='') => {
  const result = text.split('').reverse().join('');
  return result;
};
