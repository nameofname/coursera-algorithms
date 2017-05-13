"use strict";

class QuickFind {

    constructor(n) {
        this.data = [];

        for (let i = 0; i < n; i++) {
            this.data[i] = i;
        }
    }

    union(p, q) {
        const data = this.data;
        const pRoot = data[p];
        const qRoot = data[q];
        for (let i = 0; i < data.length; i++) {
            const curr = data[i];
            if (curr === pRoot) {
                data[i] = qRoot;
            }
        }
    }

    connected(p, q) {
        return this.data[p] === this.data[q];
    }
}

module.exports = QuickFind;