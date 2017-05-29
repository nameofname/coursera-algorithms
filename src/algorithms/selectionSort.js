"use strict";

const { exchange, less } = require('../helpers/sortingHelpers');

module.exports = arr => {

    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = (i + 1); j < arr.length; j++) {
            if (less(arr[j], arr[min])) {
                min = j;
            }
        }
        exchange(arr, i, min);
    }

    return arr;
};
