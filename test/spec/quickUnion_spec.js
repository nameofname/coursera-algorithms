"use strict";


const expect = require('chai').expect;
const QuickUnion = require('../../src/quickUnion');

const example1 = () => {
    const quickUnion = new QuickUnion(10);
    quickUnion.union(1, 2);
    quickUnion.union(3, 4);
    quickUnion.union(5, 6);
    quickUnion.union(7, 8);
    quickUnion.union(7, 9);
    quickUnion.union(2, 8);
    quickUnion.union(0, 5);
    quickUnion.union(1, 9);
    return quickUnion;
};

describe('Quick Union', () => {

    it('should init an array of the correct size', () => {
        const quickUnion = new QuickUnion(10);
        expect(quickUnion.data.length).to.equal(10);
    });

    it('should connect several components based on number', () => {
        const quickUnion = example1();
        expect(quickUnion.data).to.deep.equal([ 6, 2, 9, 4, 4, 6, 6, 8, 9, 9 ]);
    });

    it('should correctly answer whether components are connected', () => {
        const quickUnion = example1();

        expect(quickUnion.connected(1, 2)).to.equal(true);
        expect(quickUnion.connected(2, 8)).to.equal(true);
        expect(quickUnion.connected(9, 2)).to.equal(true);
        expect(quickUnion.connected(9, 8)).to.equal(true);
        expect(quickUnion.connected(7, 8)).to.equal(true);
        expect(quickUnion.connected(7, 2)).to.equal(true);

        expect(quickUnion.connected(3, 4)).to.equal(true);
        expect(quickUnion.connected(4, 3)).to.equal(true);

        expect(quickUnion.connected(0, 5)).to.equal(true);
        expect(quickUnion.connected(0, 6)).to.equal(true);
        expect(quickUnion.connected(5, 6)).to.equal(true);
        expect(quickUnion.connected(6, 0)).to.equal(true);

        expect(quickUnion.connected(0, 1)).to.equal(false);
        expect(quickUnion.connected(0, 2)).to.equal(false);
        expect(quickUnion.connected(0, 3)).to.equal(false);
        expect(quickUnion.connected(3, 0)).to.equal(false);
        expect(quickUnion.connected(3, 9)).to.equal(false);
        expect(quickUnion.connected(4, 7)).to.equal(false);
        expect(quickUnion.connected(8, 3)).to.equal(false);
    });


});