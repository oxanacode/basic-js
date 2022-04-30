const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let Arr1 = s1.split('');
  let Arr2 = s2.split('');
  let common = 0;
  for(let i = 0; i < Arr1.length; i++) {
    if(Arr2.includes(Arr1[i])){
      Arr2.splice(Arr2.indexOf(Arr1[i]), 1);
      common ++;
    }
  }
  return common;
}

module.exports = {
  getCommonCharacterCount
};
