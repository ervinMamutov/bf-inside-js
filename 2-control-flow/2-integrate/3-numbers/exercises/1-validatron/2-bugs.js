'use strict';

/* look out for:

  - an incorrect way to check for NaN
  - incorrect interaction function
  - comparison vs. assignment

*/
let userString = null;

while (!userString) {
  userString = prompt('enter a number:');
  if (userString === null || userString === '') {
    alert('try again');
  }
}

const userNumber = Number(userString);

const inputIsANumber = !isNaN(userNumber);

const confirmMessage =
  'did you really enter a number?\n\n' + 'yes -> "ok"\n' + 'no  -> "cancel"';
const userThinksItsANumber = confirm(confirmMessage);

const userIsCorrect = userThinksItsANumber === inputIsANumber;

alert(userIsCorrect ? 'correct!' : 'nope :(');
