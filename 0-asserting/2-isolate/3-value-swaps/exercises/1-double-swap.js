'use strict';

console.log('-- begin --');

// --- declare and initialize variables ---

let a = 'y';
let b = 'x';
let temp;

// --- swap values ---

// --- test final values ---

temp = a;
a = b;
const test1 = a === 'x';
console.assert(test1, 'Test 1');

b = temp;
const test2 = b === 'y';
console.assert(test2, 'Test 2');

const test3 = temp === 'y';
console.assert(test3, 'Test 3');

console.log('-- end --');
