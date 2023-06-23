debugger;

export const reverse = (text = '') => {
  let backwards = '';
  for (const char of text) {
    backwards = backwards + char;
  }
  return backwards;
};
