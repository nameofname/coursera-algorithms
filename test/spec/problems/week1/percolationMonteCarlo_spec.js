"use strict";


const expect = require('chai').expect;
const percolationMonteCarlo = require('../../../../src/problems/week1/percolationMonteCarlo');
const timer = require('../../../helpers/timer');

describe.only("Percolation Monte Carlo", () => {

    it("should should produce an answer to the percolation threshold that is close to 0.5927", () => {
        const n = 10;
        const trials = 30;
        const res = percolationMonteCarlo(n, trials);
        expect((res > 0.5) && (res < 0.7)).to.equal(true);
    });

    it("should perform pretty fast even with a larger set", () => {
        let res;
        const time = timer(() => {
            res = percolationMonteCarlo(100, 30);
        });
        expect(time).to.be.lessThan(100);
        expect((res > 0.5) && (res < 0.7)).to.equal(true);
    });

    it("should scale well", () => {
        let res;
        const time = timer(() => {res = percolationMonteCarlo(100, 100)});
        expect(time).to.be.lessThan(200);
        expect((res > 0.5) && (res < 0.7)).to.equal(true);
    });

    it("should be more accurate with more test runs", () => {
        let res = percolationMonteCarlo(20, 500);
        expect((res > 0.58) && (res < 0.61)).to.equal(true);
    });

});