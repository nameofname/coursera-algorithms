"use strict";

/**
 * Implements Fisher-Yates shuffle algorithm.
 * Right? In the real fisher yates solution, do they swap the current index with the random? Or do they push onto an
 * empty array as I do here?
 * @param array
 * @returns {Array}
 */
module.exports = array => {
    const shuffled = [];
    const len = array.length;
    for (let i = 0; i < len; i++) {
        const rand = Math.floor(Math.random() * array.length);
        shuffled.push(array.splice(rand, 1)[0]);
    }
    return shuffled;
};