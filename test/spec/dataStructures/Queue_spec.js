"use strict";


const expect = require('chai').expect;
const Queue = require('../../../src/dataStructures/Queue');

const stackTestClient = (Constructor, inputs) => {
    const queue = new Constructor();
    const out = [];
    while  (inputs.length) {
        const input = inputs.shift();
        if (input === '-') {
            out.push(queue.dequeue());
        } else {
            queue.enqueue(input);
        }
    }
    return out.join(' ');
};

const allTests = (Constructor) => {
    it('should create an instance of Queue with enqueue and dequeue methods', () => {
        const stack = new Constructor();
        expect(stack).to.be.instanceOf(Constructor);
        expect(stack.enqueue).to.be.instanceOf(Function);
        expect(stack.dequeue).to.be.instanceOf(Function);
        expect(stack.isEmpty).to.be.instanceOf(Function);
    });

    it('should should produce the correct sequence', () => {
        const inputs = ['to', '-', 'be', '-', 'to', 'not', 'or', '-', '-', '-', 'be', '-'];
        expect(stackTestClient(Constructor, inputs)).to.equal('to be to not or be');
    });

    it('should say it is empty if it\'s empty', () => {
        const stack = new Constructor();
        expect(stack.isEmpty()).to.equal(true);
        stack.enqueue(1);
        expect(stack.isEmpty()).to.equal(false);
        const res = stack.dequeue();
        expect(stack.isEmpty()).to.equal(true);
        expect(res).to.equal(1);
    });
};

describe('Queue', () => {

    describe('Linked List Queue', () => {
        allTests(Queue);
    });

});
