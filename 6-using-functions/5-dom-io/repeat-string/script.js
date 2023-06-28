import { readNumber, readString, display } from '../../../lib/dom-io.js';

import { repeatString } from './utils/repeat-string.js';

document.getElementById('repeat-it').addEventListener('click', () => {
  //debugger;
  const userText = readString('user-text');
  const numberOfTimes = readNumber('number-of-times');

  display('repeated-output', repeatString(userText, numberOfTimes));
});
