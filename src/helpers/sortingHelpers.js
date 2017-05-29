"use strict";


module.exports = {

    exchange: (arr, a, b) => {
        const swap = arr[a];
        arr[a] = arr[b];
        arr[b] = swap;
    },

    less: (testLess, testee) => {
        if (testLess.compareTo(testee) < 0) {
            return true;
        }
        return false;
    }
};