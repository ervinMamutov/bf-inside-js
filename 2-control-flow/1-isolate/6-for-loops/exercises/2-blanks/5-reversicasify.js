'use strict';

console.log('-- begin --');

/* Reversicasify

  you can use for loops to do some logic for each element in a string

*/

const originalString = 'abcde';
console.log('originalString:', originalString);

let reverseUpperCase = '';

for (let i = 0; i < originalString.length; i++) {
  // a blank canvas :)
  const nextchar = originalString[i];
  reverseUpperCase = nextchar.toUpperCase() + reverseUpperCase;
  console.log(reverseUpperCase);
}

console.assert(
  reverseUpperCase === 'EDCBA',
  'reversed string is the original reversed',
);

console.log('-- end --');
