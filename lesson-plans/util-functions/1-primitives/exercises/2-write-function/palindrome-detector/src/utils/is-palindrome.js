/**
 * Checks if a string is a palindrome.
 * Palindrome: a string that is the same forwards or backwards.
 *
 * @param {string} [toCheck=''] - The string that might be a palindrome.
 * @returns {boolean} Is the string a palindrome?
 */
export const isPalindrome = (toCheck = '') => {
  const reverseText = toCheck.split('').reverse().join('');
  if (reverseText === toCheck) {
    return true;
  } else {
    return false;
  }
};
