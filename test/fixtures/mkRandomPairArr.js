"use strict";

const fisherYates = require('../../src/algorithms/fisherYates');

const sh1 = fisherYates(new Array(100).fill(2).map((v, i) => i));
const sh2 = fisherYates(new Array(100).fill(1).map((v, i) => i));
const sh3 = fisherYates(new Array(100).fill(2).map((v, i) => i));
const sh4 = fisherYates(new Array(100).fill(1).map((v, i) => i));
const res = [];
sh1.forEach((curr, idx) => {
    res.push({
        pair: [sh1[idx], sh2[idx]],
        idx
    });
});

sh1.forEach((curr, idx) => {
    res.push({
        pair: [sh3[idx], sh4[idx]],
        idx: idx + 100
    });
});

console.log(JSON.stringify(res));
