"use strict";

class QuickFind {

    constructor(n) {
        this.data = [];

        for (let i = 0; i < n; i++) {
            this.data[i] = i;
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
        this.data[rootp] = this.data[rootq];
    }

    connected(p, q) {
        return this.root(p) === this.root(q);
    }
}

module.exports = QuickFind;