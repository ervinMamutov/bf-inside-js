import { readString, display } from '../../../lib/dom-io.js';

import { pyramid } from './utils/pyramid.js';

document.getElementById('pyramid-it').addEventListener('click', () => {
 // debugger;
 const userInput = readString('to-pyramid');

 display('pyramided', pyramid(userInput));
});
 