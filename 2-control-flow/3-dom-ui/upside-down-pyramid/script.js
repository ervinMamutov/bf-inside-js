import { readString, display } from '../../../lib/dom-io.js';

document.getElementById('pyramid-it').addEventListener('click', () => {
  debugger;

  // read user text
  const pyramidTo = readString('to-pyramid');

  // create the pyramid

  let result = '';

  for (let i = 0; i < pyramidTo.length; i++) {
    result += pyramidTo[i];
    for (let j = i + 1; j < pyramidTo.length; j++) {
      result += pyramidTo[j];
    }
    result += '\n';
  }

  // display the pyramid
  display('pyramided', result);
});
