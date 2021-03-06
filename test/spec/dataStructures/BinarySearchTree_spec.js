"use strict";


const expect = require('chai').expect;
const BinarySearchTree = require('../../../src/dataStructures/BinarySearchTree');
const { Int } = require('../../../src/dataStructures/Comparable');
const testNums = [ 13, 11, 32, 31, 13, 2, 20, 26, 4, 35, 4, 15, 17, 32, 18, 10, 26, 26, 5, 42 ];
const testKeys = testNums.map(n => new Int(n));
const uniqueKeyNumber = testNums
    .reduce((prev, curr) => {
        return prev.includes(curr) ? prev : prev.concat([curr]);
    }, [])
    .length;
const valueIfy = int => `test value : ${int.value}`;


describe.only('BinarySearchTree', () => {

    it('should create an instance of BST class', () => {
        const bst = new BinarySearchTree();
        expect(bst instanceof BinarySearchTree).to.equal(true);
    });

    it('should insert into the tree, but the first added should be the root', () => {
        const bst = new BinarySearchTree();
        testKeys.forEach(key => {
            bst.put(key, valueIfy(key));
        });
        expect(bst.root.value).to.equal(valueIfy(testKeys[0]));
    });

    it('should be able to retrieve the correct value based on the key', () => {
        const bst = new BinarySearchTree();
        testKeys.forEach(key => {
            bst.put(key, valueIfy(key));
        });
        expect(bst.get(testKeys[0])).to.equal(valueIfy(testKeys[0]));
        expect(bst.get(testKeys[10])).to.equal(valueIfy(testKeys[10]));
        expect(bst.get(testKeys[19])).to.equal(valueIfy(testKeys[19]));
    });

    it('should maintain a proper count', () => {
        const bst = new BinarySearchTree();
        testKeys.forEach(key => {
            bst.put(key, valueIfy(key));
        });
        expect(bst.root.count).to.equal(uniqueKeyNumber);
    });

    it('should be able to find the floor given a comparable K', () => {
        const bst = new BinarySearchTree();
        const K = new Int(21);
        testKeys.forEach(key => {
            bst.put(key, valueIfy(key));
        });
        expect(bst.floor(K)).to.equal(20);
    });

});
