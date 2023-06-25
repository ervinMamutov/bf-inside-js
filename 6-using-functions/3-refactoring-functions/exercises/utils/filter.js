/**
 * filter: removes specific characters from a string
 * @parameter {string} [toFilter=''] check text
 * @parameter {string} [removeThese=''] test condition
 * @returnes {string} [result] filtered text 
 */

export const filter = (toFilter = '', removeThese = '') => {
  if (toFilter === '' && removeThese !== '' ) return '';
  if (toFilter === '' ) return;
  if (removeThese === '') return toFilter;
  let result = toFilter.toLowerCase();
    for (const removChar of removeThese) {
      result = result.split(removChar).join('');
      }
  return result;
};
