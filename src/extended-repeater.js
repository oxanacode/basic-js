const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repStr = str + '';
  if (options === undefined) return repStr;
  let repeatTimes = options.repeatTimes || 1,
      separator = options.separator || '+',
      addition = (options.addition === undefined) ? '' : options.addition + '',
      additionRepeatTimes = options.additionRepeatTimes || 1,
      additionSeparator = options.additionSeparator || '|';
  
  let strAddition = new Array(additionRepeatTimes).fill(addition).join(additionSeparator);

  return new Array(repeatTimes).fill(repStr + strAddition).join(separator);
}

module.exports = {
  repeater
};
