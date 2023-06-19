'use strict';

/* look out for:

  - variable declarations
  - conditional checks
  - break vs. continue
  - incorrect casting to Number

*/

let userNumber = NaN;
let isNumber = false;
while (!isNumber) {
  const userInput = prompt('enter a number');

  if (userInput === '' || userInput === null) {
    alert('enter something!');
    continue;
  }

  userNumber = Number(userInput);

  if (isNaN(userNumber)) {
    alert(`${userInput} is not a number`);
    continue;
  } else {
    isNumber = true;
  }
};

if (userNumber % 2 === 0) {
  alert(`${userNumber} is even`);
} else {
  alert(`${userNumber} is odd`);
}
