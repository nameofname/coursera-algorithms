"use strict";


const expect = require('chai').expect;
const QuickFind = require('../../../src/algorithms/quickFind');
const example1 = require('../../helpers/unionFindEx1');

describe('Quick Find', () => {

    it('should init an array of the correct size', () => {
        const quickFind = new QuickFind(10);
        expect(quickFind.data.length).to.equal(10);
    });

    it('should connect several components based on number', () => {
        const quickFind = example1.create(QuickFind);
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
        const quickFind = example1.create(QuickFind);
        example1.test(quickFind);
    });


});