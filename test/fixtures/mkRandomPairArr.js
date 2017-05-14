"use strict";

const fisherYates = require('../../src/algorithms/fisherYates');

const sh1 = fisherYates(new Array(100).fill(2).map((v, i) => i));
const sh2 = fisherYates(new Array(100).fill(1).map((v, i) => i));
const arr = new Array(100).fill(3);
const res = arr.map((curr, idx) => { return {pair: [sh1[idx], sh2[idx]], idx} });

// console.log(res);
// console.log(sh1);
console.log(JSON.stringify(res));
