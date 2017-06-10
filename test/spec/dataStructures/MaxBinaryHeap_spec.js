"use strict";


const expect = require('chai').expect;
const MaxBinaryHeap = require('../../../src/dataStructures/MaxBinaryHeap');
const { Comparable } = require('../../../src/dataStructures/Comparable');
let testArr = [1,2,3,5,6,8,7,5,6,7,4,5,8,9,1,4,7,9,5,3,7,90,91,97,98,95,97];
testArr = testArr.map(val => new Comparable(val));


describe.only('MaxBinaryHeap', () => {

    it('should create an instance of MaxBinaryHeap with all the hawt methods', () => {
        const h = new MaxBinaryHeap();
        expect(h instanceof MaxBinaryHeap).to.be.ok;
        expect(typeof h.size).to.equal('function');
        expect(typeof h.isEmpty).to.equal('function');
        expect(typeof h.insert).to.equal('function');
        expect(typeof h.delMax).to.equal('function');
        expect(typeof h.getMax).to.equal('function');
    });

    it('should properly calculate the size and if it is empty', () => {
        const h = new MaxBinaryHeap();
        expect(h.isEmpty()).to.equal(true);
        expect(h.size()).to.equal(0);
        h.insert(new Comparable(1));
        h.insert(new Comparable(2));
        h.insert(new Comparable(3));
        expect(h.isEmpty()).to.equal(false);
        expect(h.size()).to.equal(3);
    });
});
