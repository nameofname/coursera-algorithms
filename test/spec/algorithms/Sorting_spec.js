"use strict";


const expect = require('chai').expect;
const selectionSort = require('../../../src/algorithms/selectionSort');
const insertionSort = require('../../../src/algorithms/insertionSort');
const MergeSort = require('../../../src/algorithms/MergeSort');
const { Int } = require('../../../src/dataStructures/Comparable');
const sortedTest = require('../../helpers/sortedTest');
const testArr = [1,2,3,4,5,4,3,2,8,7,6,4,3,1,3,4,6,9,8,1,2,3];
let testComparable;


describe.only("Sorting Algorithms", () => {

    before(() => {
        testComparable = testArr.map(v => new Int(v));
    });

    describe("Selection Sort", () => {

        it('should correctly sort this array of integers', () => {
            const res = selectionSort(testComparable);
            expect(sortedTest(res)).to.equal(true);
        });

    });

    describe("Insertion Sort", () => {

        it('should correctly sort this array of integers', () => {
            const res = selectionSort(testComparable);
            expect(sortedTest(res)).to.equal(true);
        });

    });

    describe("Merge Sort", () => {

        it('should correctly sort this array of integers', () => {
            const res = new MergeSort(testComparable).sort();
            // const res = new MergeSort(testComparable);
            expect(sortedTest(res)).to.equal(true);
        });

    });

});
