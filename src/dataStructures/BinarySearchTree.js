"use strict";

const { Comparable } = require('./Comparable');
const assert = require('assert');


class Node {
    constructor({key, value, left, right, count}) {
        assert(key instanceof Comparable, 'Invalid key provided to Node - must be an instance of Comparable');
        this.key = key;
        this.value = value;
        this.left = left || null;
        this.right = right || null;
        this.count = count || 0;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // insert
    put(key, value) {
        assert(key instanceof Comparable, 'Invalid key provided to Node - must be an instance of Comparable');
        this.root = this._put(this.root, key, value)
    }

    // retrieve
    get(key) {
        assert(key instanceof Comparable, 'Invalid key provided to Node - must be an instance of Comparable');
        return this._search(this.root, key).value;
    }

    getAlt(key) {
        return this._searchWithWhile(key).value;
    }

    delete(key) {
        throw new Error('TODO! implementation');
    }

    size() {
        return this._size(this.root);
    }

    // Ordered Operations :

    // Calculate the largest key less than or equal to K
    floor(K) {
        const floor = this._floor(this.root, K);
        return floor === null ? null : floor.key;
    }

    _size(node) {
        return node ? node.count : 0;
    }

    _put(node, key, value) {
        if (node === null) {
            return new Node({ key, value, count: 1 });
        }
        const comparison = key.compareTo(node.key);
        if (comparison < 0) { // IF key is less than
            node.left = this._put(node.left, key, value);
        } else if (comparison > 0) { // IF key is greater
            node.right = this._put(node.right, key, value);
        } else { // IF key is the same, you are just over-riding the value
            node.value = value;
        }
        // size = one for the node itself, then the size of left and right sub-trees
        node.count = 1 + this._size(node.left) + this._size(node.right);
        return node;
    }

    // This is my own recursive implementation
    _search(node, key) {
        if (node === null) {
            return null;
        }
        const comparison = key.compareTo(node.key);

        if (comparison < 0) {
            return this._search(node.left, key);
        } else if (comparison > 0) {
            return this._search(node.right, key);
        } else {
            return node;
        }
    }

    // This is the recommended implementation of search done using a while loop and not recursion
    _searchWithWhile(key) {
        let node = this.root;
        while (node !== null) {
            const comparison = key.compareTo(node.key);
            if (comparison < 0) {
                node = node.left;
            } else if (comparison > 0) {
                node = node.right;
            } else {
                return node;
            }
            return null;
        }
    }

    _floor(node, K) {
        if (node === null) {
            return null;
        }
        const comparison = node.key.compareTo(K);
        // if the current node is equal to K, then the current node is the floor
        if (comparison === 0) {
            return node;

            // if the current node is greater than K, then we haven't found a node greater than K yet, keep going left
        } else if (comparison < 0) {
            return this._floor(node.left, K);
        }

        // if the current node is less than K, then it might be the root - or the root might be in the right subtree.
        // in this case, we find the floor in the right subtree.
        // ie. the floor can't be less (left) than this node, but it could be higher (right).
        const rightFloor = this._floor(node.right);
        return (rightFloor instanceof Node) ? rightFloor : node;
    }
}

module.exports = BinarySearchTree;