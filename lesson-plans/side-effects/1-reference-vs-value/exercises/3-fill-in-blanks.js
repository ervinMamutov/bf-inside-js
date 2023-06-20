'use strict';

// prettier-ignore
const deepCompare = (actual, expect) => actual === expect || Object.is(actual, expect) || (Object(actual) === actual && Object(expect) === expect) && (Array.isArray(actual) && Array.isArray(expect) && actual.length === expect.length && expect.every((expect, index) => deepCompare(actual[index], expect)) || Object.keys(actual).length === Object.keys(expect).length && Object.keys(expect).every((key) => deepCompare(actual[key], expect[key])));

// two different arrays with different values
//  how many solutions can you find?
// psst.  use JS Tutor & the debugger
/* 
const array1 = (() => {
  const arr = [];
  for(let i = 0; i < 100; i++) {
    arr.push(i);
  }
  return arr;
})();
console.log(array1);
console.log(array1[99]);

const array2 = (() => {
  const arr = [];
  for(let i = 100; i <= 0; i--) {
    arr.push(i);
  }
  return arr;
})();

console.log(array2);
console.log(array2[99]);
 */


const array1 = [1, 2, 34, 43, 32];
const array2 = [23, 'adfdfa', 3443, 'sdf']; 
const test1 = array1 !== array2;
console.assert(test1, 'Test 1');

if (array1[99] === array1[1]) console.log('hi')
const comparison = deepCompare(array1, array2);
const test2 = !comparison;
console.assert(test2, 'Test 2');
