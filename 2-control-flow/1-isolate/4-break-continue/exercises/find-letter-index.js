'use strict';

console.log('-- begin --');

const word = 'pitsicola';
const targetLetter = 5;

let index = 0;
while (index < targetLetter) {
  const nextLetter = word[index];
  console.log(index + ': ' + nextLetter);

  if (nextLetter === targetLetter) {
    continue;
  }

  index += 1;
}

console.assert(index === 5, 'this letter is at index 5');

console.log('-- end --');
