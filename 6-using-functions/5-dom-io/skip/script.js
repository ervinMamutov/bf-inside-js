import { readNumber, readString, display } from '../../../lib/dom-io.js';

import { skipCharacters } from './utils/skip-character.js';

document.getElementById('skip-them').addEventListener('click', () => {
  // debugger;
  const userInput = readString('user-text');
  const skipSize = readNumber('skip-size');

  display('skipped-output', skipCharacters(userInput, skipSize));
});
