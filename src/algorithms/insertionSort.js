"use strict";

const { exchange, less } = require('../helpers/sortingHelpers');

module.exports = arr => {

    for (let i = 0; i < arr.length; i++) {
        loopInner:
        for (let j = i; j > 0; j--) {
            if (less(arr[j], arr[j - 1])) {
                exchange(arr, j, (j - 1))
            } else  {
                break loopInner;
            }
        }
    }

    return arr;
};
