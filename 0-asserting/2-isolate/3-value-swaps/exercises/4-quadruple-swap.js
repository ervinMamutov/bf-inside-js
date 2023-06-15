'use strict';

console.log('-- begin --');

// --- declare and initialize variables ---

let a = 'y';
let b = 'z';
let c = 'w';
let d = 'x';
let temp;

// --- swap values ---

// --- test final values ---

temp = a;
a = c;
const test1 = a === 'w';
console.assert(test1, 'Test 1');

c = b; b = d;
const test2 = b === 'x';
console.assert(test2, 'Test 2');

b = c; c = temp; 
const test3 = c === 'y';
console.assert(test3, 'Test 3');

d = b;
const test4 = d === 'z';
console.assert(test4, 'Test 4');

const test5 = temp === 'y';
console.assert(test5, 'Test 5');

console.log('-- end --');
