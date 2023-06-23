import fileToVariable from './file-to-variable.js';

describe('Converts a kebab-case file name from to camel-case variable name', () => {
  describe('the convert cebab-case', () => {
    it('conver file name', () => {
      const expected = 'fileToVariable';
      const returned = fileToVariable('file-to-variable.js');
      expect(returned).toEqual(expected);
    });
  });
  describe('the default parameter', () => {
    it('conver file name', () => {
      const expected = '';
      const returned = fileToVariable('');
      expect(returned).toEqual(expected);
    });
  });
});
