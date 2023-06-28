import { readNumber, readString, display } from '../../../lib/dom-io.js';

import { repeatChar } from './utils/repeat-char.js';

document.getElementById('repeat-them').addEventListener('click', () => {
  //debugger;
  const userText = readString('user-text');
  const numberOfTimes = readNumber('number-of-times');

  display('repeated-output', repeatChar(userText, numberOfTimes));
});
