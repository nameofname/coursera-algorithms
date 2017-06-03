"use strict";

const Plot = require('d3plus-plot').Plot;
const plot = new Plot();
const points = [
    [1,2],
    [2,1],
    [3,5],
    [2,3],
    [3,5],
    [1,2],
    [4,1]
];

plot
    .data(points.map((p, idx) => ({
        x: p[0],
        y: p[1],
        id: idx
    })))
    .render();



// var data = [
//     {x: 4, y:  7},
//     {x: 5, y:  2},
//     {x: 6, y: 13}
// ];
//
// new Plot()
//     .data(data)
//     .groupBy("id")
//     .render();
//
