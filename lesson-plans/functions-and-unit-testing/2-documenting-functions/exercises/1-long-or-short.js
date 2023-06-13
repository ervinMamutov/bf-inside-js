'use strict';

console.log('-- begin --');

/**
 * Check the text length and 
 * compare it to the set value.
 *
 * @parametr {string} text - The string to check and compare
 * @parametr {number} cutoff - A number with which to compare
 * @returns {string} short - The string returned if 'coutoff' is larger than 'text'
 * @returns {string} long - The string returned if 'coutoff' is smaller than 'text'
 * 
 */
const longOrShort = (text, cutoff) => {
  if (text.length < cutoff) {
    return 'short';
  } else {
    return 'long';
  }
};

const _1_expect = 'long';
const _1_actual = longOrShort('qwerty', 5);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 'long';
const _2_actual = longOrShort('qwerty', 6);
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = 'short';
const _3_actual = longOrShort('qwerty', 7);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = 'long';
const _4_actual = longOrShort('', -1);
console.assert(_4_actual === _4_expect, 'Test 4');

console.log('-- end --');
