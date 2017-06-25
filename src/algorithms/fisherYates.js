"use strict";

/**
 * Implements Fisher-Yates shuffle algorithm.
 * Right? In the real fisher yates solution, do they swap the current index with the random? Or do they push onto an
 * empty array as I do here?
 *
 * Note to self *I later found out that the real solution swaps with a position from N to the end of the aray so
 * as to use less space. Apparently it's also important that you choose somewhere from the current nod to the end of
 * the array or else it's not truly random, but I can't really prove it to myself...
 *
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