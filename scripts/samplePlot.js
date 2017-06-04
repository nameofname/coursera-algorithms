"use strict";

const { Plot, LinePlot } = require('d3plus-plot');
let points = [
    [1,2],
    [2,1],
    [3,5],
    [2,3],
    [3,5],
    [1,2],
    [4,1]
];
points = require('../test/fixtures/arrayOfPoints');

const renderPoints = () => {
    new Plot()
        .data(points.map((p, idx) => ({
            x: p[0],
            y: p[1],
            id: idx
        })))
        .render();
};

const renderLines = () => {
    new LinePlot()
        .data(points.map((p, idx) => ({
            x: p[0],
            y: p[1],
            id: Math.random() > 0.5 ? 'a' : 'b'
        })))
        .render();
};

renderLines();
renderPoints();