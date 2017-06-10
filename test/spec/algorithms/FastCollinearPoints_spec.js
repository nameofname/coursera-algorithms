"use strict";


const expect = require('chai').expect;
const { zeroCompares, getNumCompares } = require('../../../src/helpers/sortingHelpers');
const FastCollinearPoints = require('../../../src/algorithms/FastCollinearPoints');
const arrayOfPoints = require('../../fixtures/arrayOfPoints');


describe('Fast Colinear Points', () => {

    it('should find all of the colinear points in this array of arrays', () => {
    });

    it('should have a running time close to N^2 log N', () => {
        zeroCompares();
        // do the sort
        expect(getNumCompares()).to.be.greaterThan(testArr.length * Math.log2(testArr.length));
    });

});