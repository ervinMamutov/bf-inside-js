'use strict';

const instructions =
  'calculate the average of many numbers:\n\n' +
  '- you must input something\n' +
  '- input a number and it will be added to the sum\n' +
  '- input "done" and the program will finish (case insensitive)\n' +
  '- input anything else and it will be ignored\n\n' +
  'when you have finished inputting numbers, the average will be displayed';
alert(instructions);

let sum = 0;
let counter = 0;
let isDone = false;

while (!isDone) {
  const userInput = prompt('input number');

  if(userInput === null || userInput === '') {
    alert('try again');
    continue;
  }

  if(userInput.toLowerCase() === 'done') {
    isDone = true;
    continue;
  }

  const nextNumber = Number(userInput);

  if (isNaN(nextNumber)) {
    alert (`ignored ${userInput} is not a number`);
    continue;
  }

  sum += nextNumber;
  counter++;

}

const result = sum / counter;

alert(`result ${result}`);