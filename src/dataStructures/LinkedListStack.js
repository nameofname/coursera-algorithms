"use strict";

class Node {
    constructor({ item, next }) {
        this.item = item || null;
        this.next = next || null;
    }
}

/**
 * Linked list implementation for a motherfucking stack.
 */
class Stack {
    constructor() {
        this.first = null;
    }

    isEmpty() {
        return this.first === null;
    }

    push(e) {
        const oldFirst = this.first;
        this.first = new Node({next: oldFirst, item: e});
    }

    pop() {
        const oldFirst = this.first;
        this.first = oldFirst.next;
        return oldFirst.item;
    }
}

module.exports = Stack;