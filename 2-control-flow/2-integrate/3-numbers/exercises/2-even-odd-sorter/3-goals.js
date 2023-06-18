'use strict';

let userNumber = NaN;
let isNumber = false;

while (!isNumber) {
  const userInput = prompt('enter a number');

  /* -- BEGIN: exit if userInput is a valid number -- */
  if (userInput === null || userInput === '') {
    alert('try again');
    continue;
  }

  /* -- END -- */
  userNumber = Number(userInput);
  if (isNaN(userInput)) {
    alert(`try again ${userInput} not a Number`);
    continue;
  } else {
    isNumber = true;
  }
}

const message = userNumber % 2 === 0 ? ' is even' : ' is odd';
alert(userNumber + message);
