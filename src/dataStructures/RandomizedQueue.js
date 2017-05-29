"use strict";


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