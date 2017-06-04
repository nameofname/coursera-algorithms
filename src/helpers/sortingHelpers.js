"use strict";

let compares = 0;

module.exports = {

    zeroCompares: () => {
        compares = 0;
    },

    getNumCompares: () => compares,

    exchange: (arr, a, b) => {
        const swap = arr[a];
        arr[a] = arr[b];
        arr[b] = swap;
    },

    less: (testLess, testee) => {
        compares++; // Increment the number of compares here so that we can evaluate efficiency of programs
        if (testLess.compareTo(testee) < 0) {
            return true;
        }
        return false;
    },

    greater: (testGreater, testee) => {
        compares++; // Increment the number of compares here so that we can evaluate efficiency of programs
        if (testGreater.compareTo(testee) > 0) {
            return true;
        }
        return false;
    },

    isSorted: arr => {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i].compareTo(arr[i+1]) === 1) {
                return false;
            }
        }
        return true;
    }
};