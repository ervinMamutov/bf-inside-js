'use strict';

const userString = prompt('enter a number:');
let inputIsANumber = false;

/* -- BEGIN: check if input is a number -- */
if (!isNaN(Number(userString))) {
  inputIsANumber = true;
};
/* -- END -- */

/* -- BEGIN: ask the user if they think their input is a number -- */

const userThinksItsANumber = confirm('Are you sure you entered a number?');
/* -- END -- */

const userIsCorrect = userThinksItsANumber === inputIsANumber;

if (userIsCorrect) {
  alert('correct!');
} else {
  alert('nope :(');
}
