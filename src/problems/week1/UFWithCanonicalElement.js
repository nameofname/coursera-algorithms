"use strict";


/**
 * QUESTION: Union-find with specific canonical element. Add a method 𝚏𝚒𝚗𝚍() to the union-find data type so that 𝚏𝚒𝚗𝚍(𝚒) returns
 * the largest element in the connected component containing i. The operations, 𝚞𝚗𝚒𝚘𝚗(), 𝚌𝚘𝚗𝚗𝚎𝚌𝚝𝚎𝚍(), and 𝚏𝚒𝚗𝚍() should
 * all take logarithmic time or better.
 *
 * ANSWER:
 *  - Make another property of the UF class called largest
 *  - it should be an array mapping a root node to the largest node in that connected component
 *  - it should start out identical to the ID array
 *  - as you connect more and more components, you take the larger of the 2 largest nodes and assign that to the largest node of the root of the new connected component
 */
class SocialNetworkConnectivity {

    constructor(n) {
        this.data = [];
        this.size = [];
        this.largestElementInRoot = [];

        for (let i = 0; i < n; i++) {
            this.data[i] = i;
            this.largestElementInRoot[i] = i;
            this.size[i] = 1;
        }
    }

    root(n) {
        while (this.data[n] !== n) {
            this.data[n] = this.data[this.data[n]];
            n = this.data[n];
        }
        return n;
    }

    union(p, q) {
        const rootp = this.root(p);
        const rootq = this.root(q);
        const larger = p < q ? p : q;
        const largestp = this.largestElementInRoot[rootp];
        const largestq = this.largestElementInRoot[rootq];
        const largest = [larger, largestp, largestq].reduce((prev, curr) => {
            return prev > curr ? prev : curr;
        }, 0);

        if (rootp === rootq) {
            return;
        }

        const sizeRootP = this.size[rootp];
        const sizeRootQ = this.size[rootq];

        if (sizeRootP < sizeRootQ) {
            this.data[rootp] = rootq;
            this.size[rootq] += this.size[rootp];
            this.largestElementInRoot[rootq] = largest;
        } else {
            this.data[rootq] = rootp;
            this.size[rootp] += this.size[rootq];
            this.largestElementInRoot[rootp] = largest;
        }

    }

    connected(p, q) {
        return this.root(p) === this.root(q);
    }

    findLargestInComponent(n) {
        const root = this.root(n);
        return this.largestElementInRoot[root];
    }
}

module.exports = SocialNetworkConnectivity;