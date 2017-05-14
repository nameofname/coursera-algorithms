"use strict";


const expect = require('chai').expect;
const UFWithCanonicalElement = require('../../../../src/problems/week1/UFWithCanonicalElement.js');
const randomPairings = require('../../../fixtures/randomPairings.json');

describe('Union Find with Canonical Largest Element', () => {

    it('should should return the largest element for every query if every element in the set is connected', () => {
        const ufc = new UFWithCanonicalElement(10);
        ufc.union(0, 1);
        ufc.union(1, 2);
        ufc.union(2, 3);
        ufc.union(3, 4);
        ufc.union(4, 5);
        ufc.union(5, 6);
        ufc.union(6, 7);
        ufc.union(7, 8);
        ufc.union(8, 9);
        expect(ufc.findLargestInComponent(0)).to.equal(9);
        expect(ufc.findLargestInComponent(1)).to.equal(9);
        expect(ufc.findLargestInComponent(2)).to.equal(9);
        expect(ufc.findLargestInComponent(3)).to.equal(9);
        expect(ufc.findLargestInComponent(4)).to.equal(9);
        expect(ufc.findLargestInComponent(5)).to.equal(9);
        expect(ufc.findLargestInComponent(6)).to.equal(9);
        expect(ufc.findLargestInComponent(7)).to.equal(9);
        expect(ufc.findLargestInComponent(8)).to.equal(9);
        expect(ufc.findLargestInComponent(9)).to.equal(9);
    });

    it('should should return the correct largest element for each query', () => {
        const ufc = new UFWithCanonicalElement(10);
        ufc.union(0, 1);
        ufc.union(1, 2);
        ufc.union(2, 3);
        ufc.union(3, 4);
        // ufc.union(4, 5);
        ufc.union(5, 6);
        ufc.union(6, 7);
        ufc.union(7, 8);
        ufc.union(8, 9);
        expect(ufc.findLargestInComponent(0)).to.equal(4);
        expect(ufc.findLargestInComponent(1)).to.equal(4);
        expect(ufc.findLargestInComponent(2)).to.equal(4);
        expect(ufc.findLargestInComponent(3)).to.equal(4);
        expect(ufc.findLargestInComponent(4)).to.equal(4);
        expect(ufc.findLargestInComponent(5)).to.equal(9);
        expect(ufc.findLargestInComponent(6)).to.equal(9);
        expect(ufc.findLargestInComponent(7)).to.equal(9);
        expect(ufc.findLargestInComponent(8)).to.equal(9);
        expect(ufc.findLargestInComponent(9)).to.equal(9);
    });

});
