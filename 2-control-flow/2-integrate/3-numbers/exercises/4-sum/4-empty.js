'use strict';

const instructions =
  'calculate the sum of many numbers:\n\n' +
  '- you must input something\n' +
  '- input a number and it will be added to the sum\n' +
  '- input "done" and the program will finish (case insensitive)\n' +
  '- input anything else and it will be ignored';
alert(instructions);

let sum = 0;
let isDone = false;

while(!isDone) {
  const userInput = prompt('enter number or "done" to complite');

  if (userInput === null || userInput === '') {
    alert ('try again');
    continue;
  };

  if (userInput.toLowerCase() === 'done') {
    break;
  }

  const nextNumber = Number(userInput);
  if (isNaN(nextNumber)) {
    alert(`${userInput} is not a number`)
    continue;
  }

  sum += nextNumber;
}

alert (`your result ${sum}`);