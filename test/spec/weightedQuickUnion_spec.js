"use strict";


const expect = require('chai').expect;
const timer = require('../helpers/timer');
const QuickUnion = require('../../src/quickUnion');
const WeightedQuickUnion = require('../../src/weightedQuickUnion');
const example1 = require('../helpers/unionFindEx1');

describe('Weighted Quick Union', () => {

    it('should init an array of the correct size', () => {
        const weightedQuickUnion = new WeightedQuickUnion(10);
        expect(weightedQuickUnion.data.length).to.equal(10);
    });

    it('should connect several components based on number', () => {
        const weightedQuickUnion = example1.create(WeightedQuickUnion);
        expect(weightedQuickUnion.data).to.deep.equal([ 6, 2, 9, 4, 4, 6, 6, 8, 9, 9 ]);
    });

    it('should correctly answer whether components are connected', () => {
        const weightedQuickUnion = example1.create(WeightedQuickUnion);
        example1.test(weightedQuickUnion);
    });

    it('should be faster than normal quick union', () => {
        // TODO ! this is not a good test! We must assert that the max depth of 1 tree is less than the other.
        const time1 = timer(() => { example1(QuickUnion) });
        const time2 = timer(() => { example1(WeightedQuickUnion) });
        expect(time2).to.be.lessThan(time1);
    });

});