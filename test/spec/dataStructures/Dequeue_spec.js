"use strict";


const expect = require('chai').expect;
const Dequeue = require('../../../src/dataStructures/Dequeue');


describe('Dequeue', () => {

    it('should create an instance of Dequeue with a push and pop method', () => {
        const dequeue = new Dequeue();
        expect(dequeue).to.be.instanceOf(Dequeue);
        expect(dequeue.addFirst).to.be.instanceOf(Function);
        expect(dequeue.addLast).to.be.instanceOf(Function);
        expect(dequeue.removeFirst).to.be.instanceOf(Function);
        expect(dequeue.removeLast).to.be.instanceOf(Function);
        expect(dequeue.size).to.be.instanceOf(Function);
        expect(dequeue.isEmpty).to.be.instanceOf(Function);
        expect(dequeue.isEmpty).to.be.instanceOf(Function);
    });

    it('should should produce the correct sequence using removeLast', () => {
        const arr = [];
        const d = new Dequeue();
        d.addFirst('be');
        d.addFirst('to');
        d.addLast('or');
        d.addLast('not');
        d.addLast('to');
        d.addLast('be');
        while(!d.isEmpty()) {
            arr.push(d.removeLast());
        }
        expect(arr.join(' ')).to.equal('be to not or be to');
    });

    it('should should produce the correct sequence using removeFirst', () => {
        const arr = [];
        const d = new Dequeue();
        d.addFirst('be');
        d.addFirst('to');
        d.addLast('or');
        d.addLast('not');
        d.addLast('to');
        d.addLast('be');
        while(!d.isEmpty()) {
            arr.push(d.removeFirst());
        }
        expect(arr.join(' ')).to.equal('to be or not to be');
    });

    it('should say it is empty if it\'s empty', () => {
        const dequeue = new Dequeue();
        expect(dequeue.isEmpty()).to.equal(true);
        dequeue.addLast(1);
        expect(dequeue.isEmpty()).to.equal(false);
        const res = dequeue.removeLast();
        expect(dequeue.isEmpty()).to.equal(true);
        expect(res).to.equal(1);
    });


});
