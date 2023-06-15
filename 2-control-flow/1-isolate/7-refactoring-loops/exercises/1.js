'use strict';

console.log('-- begin --');

const school = 'HackYourFuture';

console.log('for ... of')
for (const letter of school) {
  console.log(letter);
}

// write this for...of loop as a for loop:
console.log('for')

for (let i = 0; i < school.length; i++) {
  console.log(school[i]);
}

// write this for loop as a while loop:
console.log('while')

let n = 0;
while (n < school.length) {
  console.log(school[n]);
  n++;
}

console.log('-- end --');
