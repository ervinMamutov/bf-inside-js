import { readNumber, display } from '../../../lib/dom-io.js';

document.getElementById('do-math').addEventListener('click', () => {
  debugger;

  // read user values

  const leftInput = readNumber('left');
  const rightInput = readNumber('right');

  // use a for loop to multiply the two numbers

  const result = leftInput * rightInput;

  // display the product
  display('product', result);
});
