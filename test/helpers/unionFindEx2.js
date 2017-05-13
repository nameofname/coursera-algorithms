"use strict";

const expect = require('chai').expect;

module.exports = {
    create: (UfConstructor) => {
        // after all of the following unions :
        // 6 is the root node of all
        // tire 2 should contain 4, 0, 2, 5
        // the deepest leaf nodes should be 3, 8, 9, 1, 7
        const uf = new UfConstructor(10);
        uf.union(4, 3);
        uf.union(3, 8);
        uf.union(6, 5);
        uf.union(9, 4);
        uf.union(2, 1);
        uf.union(5, 0);
        uf.union(7, 2);
        uf.union(6, 2);
        uf.union(7, 3);
        return uf;
    },

    depthFromN: (data, n) => {
        let depth = 0;
        let root = n;
        while (data[root] !== root) {
            root = data[root];
            depth++;
        }
        return depth;
    }

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
        expect(ufInstance.connected(0, 1)).to.equal(true);
        expect(ufInstance.connected(0, 2)).to.equal(true);
        expect(ufInstance.connected(0, 3)).to.equal(true);
        expect(ufInstance.connected(3, 0)).to.equal(true);
        expect(ufInstance.connected(3, 9)).to.equal(true);
        expect(ufInstance.connected(4, 7)).to.equal(true);
        expect(ufInstance.connected(8, 3)).to.equal(true);
    }
};
