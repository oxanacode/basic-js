const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw Error("Incorrect arguments!");
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = '';
    for (let i = 0, j = 0;  i < message.length; i++) {
      //UpperCase latin alphabet [A-Z] = [65 - 90]
      if (message.charCodeAt(i) < 65 || message.charCodeAt(i) > 90) {
        result += message[i];
      } else {
      // j % key.length - match keyword length with message
      // cipher - char number in alphabet [0 - 25] = [A-Z]
        let cipher = (message.charCodeAt(i) - 65 + key.charCodeAt(j % key.length) - 65) % 26;
        result += String.fromCharCode(65 + cipher);
        j++;
      }
    }
    return this.direct ? result : result.split('').reverse().join('');
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw Error("Incorrect arguments!");
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = '';
    for (let i = 0, j = 0;  i < message.length; i++) {
      if (message.charCodeAt(i) < 65 || message.charCodeAt(i) > 90) {
        result += message[i];
      } else {
        let cipher = (message.charCodeAt(i) - key.charCodeAt(j % key.length) + 26) % 26;
        result += String.fromCharCode(65 + cipher);
        j++;
      }
    }
    return this.direct ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
