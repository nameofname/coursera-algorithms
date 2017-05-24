"use strict";

class Stack {
    constructor() {
        this.arr = [];
    }

    push (e) {
        return this.arr.push(e);
    }

    pop (e) {
        return this.arr.pop();
    }
}

module.exports = Stack;