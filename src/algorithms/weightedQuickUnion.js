"use strict";

class WeightedQuickUnion {

    constructor(n) {
        this.data = [];
        this.size = [];

        for (let i = 0; i < n; i++) {
            this.data[i] = i;
            this.size[i] = 1;
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

        if (rootp === rootq) {
            return;
        }

        const sizeRootP = this.size[rootp];
        const sizeRootQ = this.size[rootq];

        if (sizeRootP < sizeRootQ) {
            this.data[rootp] = rootq;
            this.size[rootq] += this.size[rootp];
        } else {
            this.data[rootq] = rootp;
            this.size[rootp] += this.size[rootq];
        }
    }

    connected(p, q) {
        return this.root(p) === this.root(q);
    }
}

module.exports = WeightedQuickUnion;