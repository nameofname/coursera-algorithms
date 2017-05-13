"use strict";


const expect = require('chai').expect;
const timer = require('../helpers/timer');
// const QuickUnion = require('../../src/quickUnion');
const WeightedQuickUnion = require('../../src/weightedQuickUnion');
const example1 = require('../helpers/unionFindEx1');
const example2 = require('../helpers/unionFindEx2');

describe('Weighted Quick Union', () => {

    it('should init an array of the correct size', () => {
        const weightedQuickUnion = new WeightedQuickUnion(10);
        expect(weightedQuickUnion.data.length).to.equal(10);
    });

    it('should connect several components based on number', () => {
        const weightedQuickUnion = example1.create(WeightedQuickUnion);
        // expect(weightedQuickUnion.data).to.deep.equal([ 6, 2, 9, 4, 4, 6, 6, 8, 9, 9 ]);
    });

    it('should correctly answer whether components are connected', () => {
        const weightedQuickUnion = example1.create(WeightedQuickUnion);
        example1.test(weightedQuickUnion);
    });

    it('should correctly answer that all components are connected for example 2', () => {
        const weightedQuickUnion = example2.create(WeightedQuickUnion);
        example2.test(weightedQuickUnion);
    });

    it('should have a max depth of 3 levels for example 2', () => {
        const weightedQuickUnion = example2.create(WeightedQuickUnion);
        const data = weightedQuickUnion.data;

        expect(weightedQuickUnion.data).to.deep.equal([ 6, 2, 6, 4, 6, 6, 6, 2, 4, 4 ]);

        expect(example2.depthFromN(data, 6)).to.equal(0);

        expect(example2.depthFromN(data, 4)).to.equal(1);
        expect(example2.depthFromN(data, 0)).to.equal(1);
        expect(example2.depthFromN(data, 2)).to.equal(1);
        expect(example2.depthFromN(data, 5)).to.equal(1);

        expect(example2.depthFromN(data, 3)).to.equal(2);
        expect(example2.depthFromN(data, 8)).to.equal(2);
        expect(example2.depthFromN(data, 9)).to.equal(2);
        expect(example2.depthFromN(data, 1)).to.equal(2);
        expect(example2.depthFromN(data, 7)).to.equal(2);
    });

});