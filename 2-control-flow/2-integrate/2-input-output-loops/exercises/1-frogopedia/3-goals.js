'use strict';

let userInput = '';
let isThisFrog = false;
while (!isThisFrog) {
  userInput = prompt('tell me something about frogs');

  /* -- BEGIN: validate input -- */
  if (userInput === null || userInput === '') {
    alert('Please input again!');
    continue;
  }

  if (userInput.toLowerCase() !== 'frog') {
    alert('nope, not about frogs.  try again.');
  } else {
    isThisFrog = true;
    continue;
  }
}
/* -- END: validate input -- */

const finalMessage =
  'i just learned something cool about frogs!\n\n- "' + userInput + '"';
alert(finalMessage);
