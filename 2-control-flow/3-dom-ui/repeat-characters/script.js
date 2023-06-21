import { readNumber, readString, display } from '../../../lib/dom-io.js';

document.getElementById('repeat-them').addEventListener('click', () => {
  debugger;

  // read user values
  const userText = readString('user-text');
  const numberOfTimes = readNumber('number-of-times');

  // repeat the characters in the text

  let result = '';

  for (let i = 0; i < userText.length; i++) {
    for (let j = 0; j < numberOfTimes; j++) {
      result += userText[i];
    }
  }

  // display the text with repeated characters
  display('repeated-output', result);
});
