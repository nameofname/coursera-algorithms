"use strict";

const { exchange, less } = require('../helpers/sortingHelpers');
const Comparable = require('./Comparable');

const sink = (arr, k) => {
    while (2 * k <= arr.length) {
        const greaterChild = less(arr[2 * k], arr[2 * k + 1]) ? (2 * k) : (2 * k + 1);
        if (less(arr[k], arr[greaterChild])) {
            exchange(arr, k, greaterChild);
            k = greaterChild;
        } else {
            break;
        }
    }
};
const swim = (arr, k) => {
    while (k > 1 && arr[k] > arr[Math.floor(k / 2)]) {
        exchange(arr, k, Math.floor(k / 2));
        k = Math.floor(k / 2);
    }
};

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
        swim(this.arr, this.arr.length);
    }

    delMax() {
        exchange(this.arr, 1, this.arr.length);
        const max = this.arr.pop();
        sink(this.arr, 1);
        return max;
    }

    getMax() {
        return this.arr[1];
    }
}