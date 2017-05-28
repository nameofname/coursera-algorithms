"use strict";

class Node {
    constructor({ value, next, previous }) {
        this.value = value || null;
        this.next = next || null;
        this.previous = previous || null;
    }
}

/**
 * Linked list implementation for a motherfucking stack.
 */
class Stack {
    constructor() {
        this.first = null;
        this.last = null;
    }

    isEmpty() {
        return this.first === null;
    }

    addFirst(value) {
        const oldFirst = this.first;
        this.first = new Node({
            next: oldFirst,
            previous: null,
            value
        });
        if (oldFirst) {
            oldFirst.previous = this.first;
        }
        this.last = (this.last === null) ? this.first : this.last;
    }

    addLast(value) {
        const oldLast = this.last;
        this.last = new Node({
            next: null,
            previous: oldLast,
            value
        });
        if (oldLast) {
            oldLast.next = this.last;
        }
        this.first = (this.first === null) ? this.last : this.first;
    }

    removeFirst() {
        const oldFirst = this.first;
        this.first = oldFirst.next;
        if (this.first === null) {
            this.last = null;
        }
        return oldFirst.value;
    }

    removeLast() {
        const oldLast = this.last;
        this.last = oldLast.previous;
        if (this.last === null) {
            this.first = null;
        }
        return oldLast.value;
    }

}

module.exports = Stack;