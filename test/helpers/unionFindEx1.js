"use strict";

const expect = require('chai').expect;

module.exports = {
    create: (UfConstructor) => {
        const uf = new UfConstructor(10);
        uf.union(1, 2);
        uf.union(3, 4);
        uf.union(5, 6);
        uf.union(7, 8);
        uf.union(7, 9);
        uf.union(2, 8);
        uf.union(0, 5);
        uf.union(1, 9);
        return uf;
    },
    test: (ufInstance) => {
        expect(ufInstance.connected(1, 2)).to.equal(true);
        expect(ufInstance.connected(2, 8)).to.equal(true);
        expect(ufInstance.connected(9, 2)).to.equal(true);
        expect(ufInstance.connected(9, 8)).to.equal(true);
        expect(ufInstance.connected(7, 8)).to.equal(true);
        expect(ufInstance.connected(7, 2)).to.equal(true);

        expect(ufInstance.connected(3, 4)).to.equal(true);
        expect(ufInstance.connected(4, 3)).to.equal(true);

        expect(ufInstance.connected(0, 5)).to.equal(true);
        expect(ufInstance.connected(0, 6)).to.equal(true);
        expect(ufInstance.connected(5, 6)).to.equal(true);
        expect(ufInstance.connected(6, 0)).to.equal(true);

        expect(ufInstance.connected(0, 1)).to.equal(false);
        expect(ufInstance.connected(0, 2)).to.equal(false);
        expect(ufInstance.connected(0, 3)).to.equal(false);
        expect(ufInstance.connected(3, 0)).to.equal(false);
        expect(ufInstance.connected(3, 9)).to.equal(false);
        expect(ufInstance.connected(4, 7)).to.equal(false);
        expect(ufInstance.connected(8, 3)).to.equal(false);
    }
};
