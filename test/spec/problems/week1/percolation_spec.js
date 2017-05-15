"use strict";


const expect = require('chai').expect;
const Percolation = require('../../../../src/problems/week1/percolation');
const timer = require('../../../helpers/timer');

describe.only("Percolation", () => {

    it("should correctly calculate the size of the set", () => {
        const p = new Percolation(5);
        expect(p.size).to.equal(27);
    });

    it("should get the correct site ID number", () => {
        const p = new Percolation(5);
        expect(p.getSiteId(1, 1)).to.equal(1);
        expect(p.getSiteId(1, 5)).to.equal(5);
        expect(p.getSiteId(5, 5)).to.equal(25);
        expect(p.getSiteId(5, 1)).to.equal(21);
        expect(p.getSiteId(4, 5)).to.equal(20);
    });

    it("should increment the number open when you open sites", () => {
        const p = new Percolation(5);
        expect(p.numberOfOpenSites()).to.equal(0);
        p.open(1, 1);
        expect(p.numberOfOpenSites()).to.equal(1);
        p.open(1, 2);
        p.open(2, 3);
        expect(p.numberOfOpenSites()).to.equal(3);
    });

    it("should return true for is open if the site has been opened, false if not", () => {
        const p = new Percolation(3);
        p.open(1, 1);
        p.open(2, 2);
        p.open(2, 3);
        p.open(3, 1);

        expect(p.isOpen(1, 1)).to.equal(true);
        expect(p.isOpen(1, 2)).to.equal(false);
        expect(p.isOpen(1, 3)).to.equal(false);
        expect(p.isOpen(2, 1)).to.equal(false);
        expect(p.isOpen(2, 2)).to.equal(true);
        expect(p.isOpen(2, 3)).to.equal(true);
        expect(p.isOpen(3, 1)).to.equal(true);
        expect(p.isOpen(3, 2)).to.equal(false);
        expect(p.isOpen(3, 3)).to.equal(false);
    });

    it("should correctly say that the grid percolates if you open all the sites in a column", () => {
        let p = new Percolation(5);
        expect(p.percolates()).to.equal(false);
        p.open(1, 1);
        p.open(2, 1);
        p.open(3, 1);
        p.open(4, 1);
        p.open(5, 1);
        expect(p.percolates()).to.equal(true);

        p = new Percolation(5);
        expect(p.percolates()).to.equal(false);
        p.open(1, 5);
        p.open(2, 5);
        p.open(3, 5);
        p.open(4, 5);
        p.open(5, 5);
        expect(p.percolates()).to.equal(true);
    });

    it("should say that the grid does not percolates if you don't connect the bottom and top", () => {
        const p = new Percolation(5);
        expect(p.percolates()).to.equal(false);
        p.open(1, 1);
        p.open(2, 1);
        p.open(4, 1);
        p.open(5, 1);
        expect(p.percolates()).to.equal(false);
    });

});