"use strict";

/**
 * QUESTION: Social network connectivity. Given a social network containing n members and a log file containing m timestamps at
 * which times pairs of members formed friendships, design an algorithm to determine the earliest time at which all
 * members are connected (i.e., every member is a friend of a friend of a friend ... of a friend). Assume that the log
 * file is sorted by timestamp and that friendship is an equivalence relation. The running time of your algorithm
 * should be mlogn or better and use extra space proportional to n.
 *
 * ANSWER:
 * - Start with a Weighted Quick Union class
 * - modify the union method to store the larger size of the 2 sizes calculated
 * - if the largest size created in the union command is the same as N - then all the friends in the network are
 *      connected (ie. in 1 connected component)
 */
class SocialNetworkConnectivity {

    constructor(n) {
        this.data = [];
        this.size = [];
        this.largest = 1;

        for (let i = 0; i < n; i++) {
            this.data[i] = i;
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

        const largest = this.size[rootq] > this.size[rootp] ? this.size[rootq] : this.size[rootp];
        this.largest = this.largest > largest ? this.largest : largest;
    }

    connected(p, q) {
        return this.root(p) === this.root(q);
    }
}

module.exports = SocialNetworkConnectivity;