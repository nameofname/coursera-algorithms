"use strict";


const expect = require('chai').expect;
const selectionSort = require('../../../src/algorithms/selectionSort');
const insertionSort = require('../../../src/algorithms/insertionSort');
const MergeSort = require('../../../src/algorithms/MergeSort');
const { Int } = require('../../../src/dataStructures/Comparable');
const { isSorted, zeroCompares, getNumCompares } = require('../../../src/helpers/sortingHelpers');
const testArr = [1,2,3,4,5,4,3,2,8,7,6,4,3,1,3,4,6,9,8,1,2,3];
let testComparable;


describe("Sorting Algorithms", () => {

    beforeEach(() => {
        testComparable = testArr.map(v => new Int(v));
        zeroCompares();
    });

    describe("Selection Sort", () => {

        it('should correctly sort this array of integers', () => {
            const res = selectionSort(testComparable);
            expect(isSorted(res)).to.equal(true);
            expect(getNumCompares()).to.be.greaterThan(testArr.length * Math.log2(testArr.length));
        });

    });

    describe("Insertion Sort", () => {

        it('should correctly sort this array of integers', () => {
            const res = selectionSort(testComparable);
            expect(isSorted(res)).to.equal(true);
            expect(getNumCompares()).to.be.greaterThan(testArr.length * Math.log2(testArr.length));
        });

    });

    describe("Merge Sort", () => {

        it('should correctly sort this array of integers', () => {
            const res = new MergeSort(testComparable).sort();
            expect(isSorted(res)).to.equal(true);
            expect(getNumCompares()).to.be.lessThan(testArr.length * Math.log2(testArr.length));
        });

    });

});
