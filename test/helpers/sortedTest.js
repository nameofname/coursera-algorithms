"use strict";


module.exports = arr => {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i].compareTo(arr[i+1]) === 1) {
            return false;
        }
    }
    return true;
};