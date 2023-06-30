'use strict';

const sumNumbery = (arr) => {
  // these work, you need to pass them to the right array methods
  const isNotNaN = (entry) => {
    return !Number.isNaN(entry);
  };
  const sumNumbers = (acc, next) => {
    return acc + next;
  };
  const isString = (entry) => {
    return typeof entry === 'string';
  };
  const castToNumber = (entry) => {
    return Number(entry);
  };

  // fill in the array method names and callbacks
  const areAllStrings = arr.every(isString); // a boolean value
  if (!areAllStrings) {
    return 0;
  }

  return arr
  .map(castToNumber)
  .filter(isNotNaN)
  .reduce(sumNumbers, 0);
};

const actual = sumNumbery(['1', 'e', 4, '!', true]);

console.log('1' + actual);

const actual2 = sumNumbery(['.', '1', '3#', '2', '3', '-=-']);

console.log('1' + actual2);
