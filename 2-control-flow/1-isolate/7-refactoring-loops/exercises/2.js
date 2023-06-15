'use strict';

console.log('-- begin --');

const minutesLeft = 9;

for (let i = minutesLeft; i > 0; i--) {
  const message = `${i} minutes left`;
  console.log(message);
}

// refactor this for loop to a while loop

let n = 0;
while (n < minutesLeft) {
  let message = `${n} minut left`;
  console.log(message);
  n++;
}

console.log('-- end --');
