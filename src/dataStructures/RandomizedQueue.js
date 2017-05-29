"use strict";


/**
 * NOTE* This is a super dumb implementation of a randomized queue!
 *
 * In Java you have fixed length arrays that, so to implement different versions of stacks and queues you need to
 * choose from one of these 2 options :
 *      - implement data structure using Linked List under the hood
 *          - good performance on a per-operation basis. slightly more operations under the hood
 *      - implement data structure using fixed length arrays and array resizing under the hood
 *          - slightly less operations per method call under the hood, has to do resizing which takes a long time
 *          but you get the benefit of better amortized performance.
 *
 * In JS the normal array implementation is an extension of the hash-map like object (for most popular JS engines)
 * and uses key / value pairs under the hood - transforming numeric indexes to string keys. This pretty much takes
 * care of all cases you would need a stack or queue for because it supports : push, pop, shift and unshift (where
 * shift = Queue.dequeue and unshift is just the opposite of shift).
 *
 * So my point in writing this all out is that in JS it's pretty much pointless writing and testing an array-based
 * implementation of any Stack or Queue, including this RandomizedQueue. To get the real performance gains you would
 * reap from a language like Java, you need the basic, fixed length array.
 */
class RandomizedQueue {
    constructor() {
        this.arr = [];
    }

    isEmpty() {
        return this.arr.length === 0;
    }

    enqueue(value) {
        this.arr.push(value);
    }

    dequeue() {
        const n = Math.floor(Math.random() * this.num);
        return arr.splice(n, 1);
    }
}

module.exports = RandomizedQueue;