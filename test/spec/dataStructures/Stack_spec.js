"use strict";


const expect = require('chai').expect;
const Stack = require('../../../src/dataStructures/Stack');

const stackTestClient = (Constructor, inputs) => {
    const stack = new Constructor();
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

const allTests = (Constructor) => {
    it('should create an instance of Stack with a push and pop method', () => {
        const stack = new Constructor();
        expect(stack).to.be.instanceOf(Constructor);
        expect(stack.push).to.be.instanceOf(Function);
        expect(stack.pop).to.be.instanceOf(Function);
        expect(stack.isEmpty).to.be.instanceOf(Function);
    });

    it('should should produce the correct sequence', () => {
        const inputs = ['to', '-', 'be', '-', 'to', 'not', 'or', '-', '-', '-', 'be', '-'];
        expect(stackTestClient(Constructor, inputs)).to.equal('to be or not to be');
    });

    it('should say it is empty if it\'s empty', () => {
        const stack = new Constructor();
        expect(stack.isEmpty()).to.equal(true);
        stack.push(1);
        expect(stack.isEmpty()).to.equal(false);
        const res = stack.pop();
        expect(stack.isEmpty()).to.equal(true);
        expect(res).to.equal(1);
    });
};

describe('Stack', () => {

    describe('Linked List Stack', () => {
        allTests(Stack);
    });

});
