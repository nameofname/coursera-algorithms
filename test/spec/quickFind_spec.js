"use strict";


const expect = require('chai').expect;
const QuickFind = require('../../src/quickFind');

const example1 = () => {
    const quickFind = new QuickFind(10);
    quickFind.union(1, 2);
    quickFind.union(3, 4);
    quickFind.union(5, 6);
    quickFind.union(7, 8);
    quickFind.union(7, 9);
    quickFind.union(2, 8);
    quickFind.union(0, 5);
    quickFind.union(1, 9);
    return quickFind;
};

describe('Quick Find', () => {

    it('should init an array of the correct size', () => {
        const quickFind = new QuickFind(10);
        expect(quickFind.data.length).to.equal(10);
    });

    it('should connect several components based on number', () => {
        const quickFind = example1();
        const valueMap = {};
        const numberOfConnected = quickFind.data.reduce((prev, val) => {
            if (!valueMap[val]) {
                valueMap[val] = true;
                return prev + 1;
            }
            return prev;
        }, 0);
        expect(quickFind.data).to.deep.equal([6,9,9,4,4,6,6,9,9,9]);
        expect(numberOfConnected).to.equal(3);
    });

    it('should correctly answer whether components are connected', () => {
        const quickFind = example1();

        expect(quickFind.connected(1, 2)).to.equal(true);
        expect(quickFind.connected(2, 8)).to.equal(true);
        expect(quickFind.connected(9, 2)).to.equal(true);
        expect(quickFind.connected(9, 8)).to.equal(true);
        expect(quickFind.connected(7, 8)).to.equal(true);
        expect(quickFind.connected(7, 2)).to.equal(true);

        expect(quickFind.connected(3, 4)).to.equal(true);
        expect(quickFind.connected(4, 3)).to.equal(true);

        expect(quickFind.connected(0, 5)).to.equal(true);
        expect(quickFind.connected(0, 6)).to.equal(true);
        expect(quickFind.connected(5, 6)).to.equal(true);
        expect(quickFind.connected(6, 0)).to.equal(true);

        expect(quickFind.connected(0, 1)).to.equal(false);
        expect(quickFind.connected(0, 2)).to.equal(false);
        expect(quickFind.connected(0, 3)).to.equal(false);
        expect(quickFind.connected(3, 0)).to.equal(false);
        expect(quickFind.connected(3, 9)).to.equal(false);
        expect(quickFind.connected(4, 7)).to.equal(false);
        expect(quickFind.connected(8, 3)).to.equal(false);
    });


});