"use strict";


const expect = require('chai').expect;
const Stack = require('../../../src/dataStructures/Stack');

const stackTestClient = (inputs) => {
    const stack = new Stack();
    const out = [];
    while  (inputs.length) {
        const input = inputs.shift();
        if (input === '-') {
            out.push(stack.pop());
        } else {
            stack.push(input);
        }
    }
    return out.join(' ');
};

describe.only('Stack', () => {

    it('should create an instance of Stack with a push and pop method', () => {
        expect(new Stack()).to.be.instanceOf(Stack);
    });

    it('should should produce the correct sequence', () => {
        const inputs = ['to', '-', 'be', '-', 'to', 'not', 'or', '-', '-', '-', 'be', '-'];
        expect(stackTestClient(inputs)).to.equal('to be or not to be')
    });

    // it('should xxx', () => {
    // });
    //
    // it('should xxx', () => {
    // });

});
