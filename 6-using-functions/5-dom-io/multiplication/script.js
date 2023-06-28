import { readNumber, display } from '../../../lib/dom-io.js';

import { multiplication } from './utils/multiplication.js';

document.getElementById('do-math').addEventListener('click', () => {
  debugger;

  const numberOne = readNumber('left');
  const numberTwo = readNumber('right');

  display('product', multiplication(numberOne, numberTwo));
});
