"use strict";

const assert = require('assert');
const { exchange, less } = require('../helpers/sortingHelpers');
const { Comparable } = require('./Comparable');


class MaxBinaryHeap {
    constructor() {
        this.arr = [null];
    }

    size() {
        return this.arr.length - 1;
    }

    isEmpty() {
        return this.size() === 0;
    }

    insert(comparable) {
        assert(comparable instanceof Comparable);
        this.arr[this.arr.length] = comparable;
        this._swim(this.arr, this.size());
    }

    delMax() {
        assert(this.size());
        exchange(this.arr, 1, this.arr.length - 1);
        const out = this.arr.pop();
        this._sink(this.arr, 1);
        return out;
    }

    getMax() {
        return this.arr[1];
    }

    _sink(arr, k) {
        while (2 * k <= this.size()) {
            let greaterChild = 2 * k;
            if (arr[2 * k + 1]) {
                greaterChild = less(arr[2 * k], arr[2 * k + 1]) ? (2 * k) : (2 * k + 1);
            }
            if (less(arr[k], arr[greaterChild])) {
                exchange(arr, k, greaterChild);
                k = greaterChild;
            } else {
                break;
            }
        }
    }

    _swim(arr, k) {
        while (k > 1 && less(arr[Math.floor(k / 2)], arr[k])) {
            exchange(arr, k, Math.floor(k / 2));
            k = Math.floor(k / 2);
        }
    };

}


module.exports = MaxBinaryHeap;