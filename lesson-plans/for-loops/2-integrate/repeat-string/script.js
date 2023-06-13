import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('repeat-it').addEventListener('click', () => {
  debugger;

  // read user values
  const userText = readString('user-text');
  const numberTimes = readNumber('number-of-times');

  // repeat the string
  let result = '';
  for (let i = 0; i < numberTimes; i++){
    result += userText;
  };
  // display the repeated string
  display('repeated-output', result);


});
