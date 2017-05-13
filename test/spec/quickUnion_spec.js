"use strict";


const expect = require('chai').expect;
const QuickUnion = require('../../src/quickUnion');
const example1 = require('../helpers/unionFindEx1');

describe('Quick Union', () => {

    it('should init an array of the correct size', () => {
        const quickUnion = new QuickUnion(10);
        expect(quickUnion.data.length).to.equal(10);
    });

    it('should connect several components based on number', () => {
        const quickUnion = example1.create(QuickUnion);
        expect(quickUnion.data).to.deep.equal([ 6, 2, 9, 4, 4, 6, 6, 8, 9, 9 ]);
    });

    it('should correctly answer whether components are connected', () => {
        const quickUnion = example1.create(QuickUnion);
        example1.test(quickUnion);
    });


});