const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    if (value === null) {this.chain.push("null");}
    else {
      this.chain.push(value);
    }
    return this;
  },

  removeLink(position) {
    if(Number.isInteger(position) && position > 0 && position <= this.chain.length) {
      this.chain.splice(position - 1, 1);
      return this;
    }
    this.chain = [];
    throw new Error("You can't remove incorrect link!");
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let resChain = Object.values(this.chain);
    this.chain = [];
    return '( ' + resChain.join(' )~~( ') + ' )';
  }
};

module.exports = {
  chainMaker
};
