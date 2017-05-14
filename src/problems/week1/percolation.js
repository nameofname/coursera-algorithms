"use strict";


const UnionFind = require('../../algorithms/weightedQuickUnionImproved');
const assert = require('assert');


/**
 * https://www.coursera.org/learn/algorithms-part1/programming/Lhp5z/percolation
   public class Percolation {
   public Percolation(int n)                // create n-by-n grid, with all sites blocked
   public    void open(int row, int col)    // open site (row, col) if it is not open already
   public boolean isOpen(int row, int col)  // is site (row, col) open?
   public boolean isFull(int row, int col)  // is site (row, col) full?
   public     int numberOfOpenSites()       // number of open sites
   public boolean percolates()              // does the system percolate?
   public static void main(String[] args)   // test client (optional)
}
 */
class Percolation {

    constructor (n) {
        this.n = n;
        this.size = n * n + 2;
        // add 2 to the size to attain the
        this.uf = new UnionFind(this.size);

        this.siteState = new Array(this.size).fill(false); //.map((v, idx) => idx);

        // // a little trick - add 1 to the siteState size so that it works easity with getSiteID - and ignore idx 0
        // this.siteState = new Array(this.size + 1).fill(false); //.map((v, idx) => idx);

        this.numberOpen = 0;
    }

    getSiteId (row, col) {
        assert(row <= this.n && col <= this.n);
        return ((row - 1) * this.n) + col;
    }

    open (row, col) {
        if (this.isOpen(row, col)) {
            return;
        }

        const siteID = this.getSiteId(row, col);
        const isTop = row === 1;
        const isBottom = row === this.n;
        const isLeft = col === 1;
        const isRight = col === this.n;

        this.numberOpen++;
        this.siteState[siteID] = true;

        if (isTop) {
            this.uf.union(siteID, 0);
        } else if (this.isOpen(row - 1, col)) {
            this.uf.union(siteID, (siteID - this.n));
        }
        if (isBottom) {
            this.uf.union(siteID, this.size - 1);
        } else if (this.isOpen(row + 1, col)) {
            this.uf.union(siteID, (siteID + this.n));
        }
        if (!isLeft && this.isOpen(row, col - 1)) {
            this.uf.union(siteID, (siteID - 1));
        }
        if (!isRight && this.isOpen(row, col + 1)) {
            this.uf.union(siteID, (siteID + 1));
        }
    }

    isOpen (row, col) {
        const siteID = this.getSiteId(row, col);
        return this.siteState[siteID] === true;
    }

    isFull (row, col) {
        const siteID = this.getSiteId(row, col);
        return this.siteState[siteID] === false;
    }

    numberOfOpenSites () {
        return this.numberOpen;
    }

    percolates () {
        return this.uf.connected(0, this.size - 1);
    }
}

module.exports = Percolation;
