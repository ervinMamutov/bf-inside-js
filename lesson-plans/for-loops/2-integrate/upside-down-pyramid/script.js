import { readString, display } from '../../../../lib/dom-io.js';

document.getElementById('pyramid-it').addEventListener('click', () => {
  debugger;

  // read user text
  const toPyramid = readString('to-pyramid');

  // create the pyramid

  let result = '';

  for (let i = 0; i < toPyramid.length; i++) {
    result += toPyramid[i];
    for (let j = i; j < toPyramid.length - 1; j++) {
      result += toPyramid[j + 1];
    }
    result += '\n';
  }

  // display the pyramid
  display('pyramided', result);
});
