"use strict";

class Node {
    constructor({ value, next, previous }) {
        this.value = value || null;
        this.next = next || null;
        this.previous = previous || null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.num = 0;
    }

    isEmpty() {
        return this.num === 0;
    }

    size() {
        return this.num;
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
        this.num++;
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
        this.num++;
    }

    removeFirst() {
        if (this.isEmpty()) {
            throw new Error('attempted to removeFirst from empty dequeue');
        }
        const oldFirst = this.first;
        this.first = oldFirst.next;
        if (this.first === null) {
            this.last = null;
        }
        this.num--;
        return oldFirst.value;
    }

    removeLast() {
        if (this.isEmpty()) {
            throw new Error('attempted to removeLast from empty dequeue');
        }
        const oldLast = this.last;
        this.last = oldLast.previous;
        if (this.last === null) {
            this.first = null;
        }
        this.num--;
        return oldLast.value;
    }

}

module.exports = Stack;