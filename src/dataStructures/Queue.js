"use strict";

class Node {
    constructor({ item, next }) {
        this.item = item || null;
        this.next = next || null;
    }
}

/**
 * Linked list implementation for Queue.
 */
class Stack {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    isEmpty() {
        return this.head === null;
    }

    enqueue(e) {
        const oldHead = this.head;
        this.head = new Node({next: null, item: e});
        if (oldHead) {
            oldHead.next = this.head;
        }
        this.tail = (this.tail === null) ? this.head : this.tail;
    }

    dequeue() {
        const oldTail = this.tail;
        this.tail = oldTail.next;
        if (this.tail === null) {
            this.head = null;
        }
        return oldTail.item;
    }
}

module.exports = Stack;