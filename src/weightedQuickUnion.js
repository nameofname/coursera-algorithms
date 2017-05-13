"use strict";

class WeightedQuickUnion {

    constructor(n) {
        this.data = [];
        this.size = [];

        for (let i = 0; i < n; i++) {
            this.data[i] = i;
            this.size[i] = 0;
        }
    }

    root(n) {
        let root = this.data[n];
        while (this.data[root] !== root) {
            root = this.data[root];
        }
        return root;
    }

    union(p, q) {
        const rootp = this.root(p);
        const rootq = this.root(q);
        const sizeRootP = this.size[rootp];
        const sizeRootQ = this.size[rootq];
        if (sizeRootP > sizeRootQ) {
            this.data[rootq] = rootp;
            this.size[rootq] += rootp;
        } else {
            this.data[rootp] = rootq;
            this.size[rootp] += rootq;
        }
    }

    connected(p, q) {
        return this.root(p) === this.root(q);
    }
}

module.exports = WeightedQuickUnion;