const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let number = n + '';
  let arr = [];

  for (let i = 0; i < number.length; i++) {
    arr.push(number.slice(0, i) + number.slice(i + 1));
  }

  return Math.max.apply(null, arr);
}

module.exports = {
  deleteDigit
};
