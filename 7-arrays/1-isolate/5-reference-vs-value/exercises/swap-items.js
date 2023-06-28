'use strict';

// prettier-ignore
const deepCompare = (actual, expect) => actual === expect || Object.is(actual, expect) || (Object(actual) === actual && Object(expect) === expect) && (Array.isArray(actual) && Array.isArray(expect) && actual.length === expect.length && expect.every((expect, index) => deepCompare(actual[index], expect)) || Object.keys(actual).length === Object.keys(expect).length && Object.keys(expect).every((key) => deepCompare(actual[key], expect[key])));

/* swap items between two arrays */

// -- declare variables (this is correct) --
const arr1 = [1, 2, 'b', 4];
const arr2 = [3, 'a', 'c'];
let temp;

// -- swap values (write this code) --

temp = arr1;
for (let i = 0; i < temp.length; i++){
  if(typeof temp[i] !== 'number') {
    arr2.push(temp[i]);
    arr1.splice(i, 1);
  }
};

arr2.sort();

temp = arr2;
for (let i = 0; i < temp.length; i++) {
  if(typeof temp[i] !== 'string') {
    arr1.push(temp[i]);
    arr2.splice(i, 1);
  }
}

arr1.sort();



// -- assert values (this is correct) --
console.assert(deepCompare(arr1, [1, 2, 3, 4]), 'array 1');
console.assert(deepCompare(arr2, ['a', 'b', 'c']), 'array 2');
