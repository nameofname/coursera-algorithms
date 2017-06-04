"use strict";

const { less } = require('../helpers/sortingHelpers');

class MergeSort {

    constructor(a) {
        this.arr = a; // note * an array of Comparable objects
    }

    _merge(arr, aux, lo, mid, hi) {

        // first copy entries from the array to the auxiliary array
        for (let c = lo; c <= hi; c++) {
            aux[c] = arr[c];
        }

        let l = lo;
        let m = mid + 1;
        for (let k = lo; k <= hi; k++) {
            if (l > mid) { // if the lo pointer is already past the mid, then it's been exhausted
                arr[k] = aux[m++];
            } else if (m > hi) { // if the m pointer (stats at mid + 1) is greater than hi, then it's been exhausted
                arr[k] = aux[l++]
            } else if (less(aux[m], aux[l])) {
                arr[k] = aux[m++];
            } else {
                arr[k] = aux[l++];
            }
        }
    }

    _sort(arr, aux, lo, hi) {
        if (hi <= lo) {
            return;
        }
        const mid = Math.floor(lo + (hi - lo) / 2);
        this._sort(arr, aux, lo, mid);
        this._sort(arr, aux, (mid + 1), hi);
        this._merge(arr, aux, lo, mid, hi);
    }

    sort() {
        const aux = [];
        this._sort(this.arr, aux, 0, this.arr.length - 1);
        return this.arr;
    }
}

module.exports = MergeSort;