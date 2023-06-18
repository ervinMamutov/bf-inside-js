'use strict';

let isNumber = false;
let userNumber = NaN;

while (!isNumber) {
  const userInput = prompt ('input number');
  if (userInput === null || userInput === '') {
    alert('try again');
    continue;
  }

  userNumber = Number(userInput);

  if (isNaN(userNumber)) {
    alert(`try again ${userNumber} not a number`);
    continue;
  } else {
    isNumber = true;
  }
 }

 if (userNumber % 2 === 0) {
   alert(`${userNumber} even`)
 } else {
   alert (`${userNumber} odd`);
 }