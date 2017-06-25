"use strict";


const expect = require('chai').expect;
const MaxBinaryHeap = require('../../../src/dataStructures/MaxBinaryHeap');
const { Comparable } = require('../../../src/dataStructures/Comparable');
let testArr = [1,2,3,5,6,8,7,5,6,7,4,5,8,9,1,4,7,9,5,3,7,90,91,97,99,95,97];
testArr = testArr.map(val => new Comparable(val));


describe('MaxBinaryHeap', () => {

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
        h.insert(new Comparable(3));
        h.insert(new Comparable(2));
        h.insert(new Comparable(1));
        expect(h.isEmpty()).to.equal(false);
        expect(h.size()).to.equal(3);
        h.delMax();
        h.delMax();
        h.delMax();
        expect(h.isEmpty()).to.equal(true);
        expect(h.size()).to.equal(0);
    });

    it('should return the highest entry in the array when calling delMax()', () => {
        const h = new MaxBinaryHeap();
        const highest = new Comparable(3);
        h.insert(new Comparable(1));
        h.insert(new Comparable(2));
        h.insert(highest);
        expect(h.delMax()).to.equal(highest);
    });

    it('should should correctly sort the entries in this long array, and find the higest entries.', () => {
        const h = new MaxBinaryHeap();
        const arr = [];
        testArr.forEach(c => {
            h.insert(c);
        });
        for (let i = 0; i < 6; i++) {
            arr.push(h.delMax().value);
        }
    });

});
