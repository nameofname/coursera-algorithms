"use strict";

const WeightedQuickUnion = require('./weightedQuickUnion');

/**
 * This illustrates the concept of weighted quick union with path compression
 * Basically you re-assign each node to it's grand parent while you are traversing the tree.
 */
class WeightedQuickUnion extends WeightedQuickUnion {

    root(n) {
        while (this.data[n] !== n) {
            this.data[n] = this.data[this.data[n]];
            n = this.data[n];
        }
        return n;
    }

}

module.exports = WeightedQuickUnion;