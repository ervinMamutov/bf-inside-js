import { readString, display } from '../../../lib/dom-io.js';

import { reverseString } from './utils/reverse-string.js';

document.getElementById('reverse-it').addEventListener('click', () => {
  debugger;

  const userText = readString('user-text');

  display('reversed-output', reverseString(userText));
});
