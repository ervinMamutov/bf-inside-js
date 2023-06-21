import { readString, display } from '../../../lib/dom-io.js';

document.getElementById('reverse-it').addEventListener('click', () => {
  debugger;

  // read user text
  const userText = readString('user-text');

  // use a for loop that counts down (i--) to reverse the input
  let result = '';

  for (const char of userText) {
    result = char + result;
  }

  // display the reversed string
  display('reversed-output', result);
});
